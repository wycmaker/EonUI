import React from 'react';

import { createRoot } from 'react-dom/client';

import { Modal, ModalProps } from './Modal';
import { ModalInstance, modalManager } from './ModalService';

// 自動初始化 Modal Provider
let isProviderMounted = false;
let visibleModals = new Set<string>();
let globalRoot: ReturnType<typeof createRoot> | null = null;
let globalRenderModals: ((modals: ModalInstance[]) => React.ReactElement) | null = null;

const ensureProvider = () => {
  if (!isProviderMounted && typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.id = 'eonui-modal-provider';
    document.body.appendChild(container);

    globalRoot = createRoot(container);

    // 渲染 Modal 的函數
    globalRenderModals = (modals: ModalInstance[]) => {
      return React.createElement(
        React.Fragment,
        null,
        ...modals.map((modal) => {
          const { key, id, ...modalProps } = modal;
          return React.createElement(Modal, {
            key,
            id,
            ...modalProps,
            visible: visibleModals.has(id),
            onClose: () => handleGlobalModalClose(id),
          });
        }),
      );
    };

    globalRoot.render(globalRenderModals([]));

    // 訂閱 Modal 變化
    modalManager.subscribe((modals) => {
      const currentModalIds = new Set(modals.map((modal) => modal.id));

      // 檢查新增的 Modal
      const newModalIds = modals
        .filter((modal) => !visibleModals.has(modal.id))
        .map((modal) => modal.id);

      // 移除已關閉的 Modal
      visibleModals = new Set(Array.from(visibleModals).filter((id) => currentModalIds.has(id)));

      // 立即渲染新的 Modal（但 visible=false）
      globalRoot?.render(globalRenderModals?.(modals));

      // 為新 Modal 添加動畫延遲 - 使用更精確的時機控制
      if (newModalIds.length > 0) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // 雙重 RAF 確保 DOM 完全渲染
            setTimeout(() => {
              visibleModals = new Set([...visibleModals, ...newModalIds]);
              globalRoot?.render(globalRenderModals?.(modals));
            }, 50); // 增加延遲時間
          });
        });
      }
    });

    isProviderMounted = true;
  }
};

// 全域 Modal 關閉處理函數
const handleGlobalModalClose = (id: string) => {
  const allModals = modalManager.getAll();
  const modal = allModals.find((m) => m.id === id);
  const animationDuration = modal?.animationDuration || 300;

  // 先觸發關閉動畫
  visibleModals.delete(id);
  globalRoot?.render(globalRenderModals?.(allModals));

  // 延遲移除 Modal，等待動畫完成
  setTimeout(() => {
    modalManager.close(id);
  }, animationDuration);
};

// 導出的 Modal Service API
export const ModalService = {
  /**
   * 開啟 Modal
   */
  open: (options: Omit<ModalProps, 'visible' | 'onClose' | 'id'>) => {
    ensureProvider();
    return modalManager.open(options);
  },

  /**
   * 關閉指定 Modal
   */
  close: (id: string) => {
    handleGlobalModalClose(id);
  },

  /**
   * 關閉所有 Modal
   */
  closeAll: () => {
    const allModals = modalManager.getAll();
    const maxAnimationDuration = Math.max(...allModals.map((m) => m.animationDuration || 300), 300);

    // 先觸發所有 Modal 的關閉動畫
    visibleModals.clear();
    globalRoot?.render(globalRenderModals?.(allModals));

    // 延遲移除所有 Modal，等待動畫完成
    setTimeout(() => {
      modalManager.closeAll();
    }, maxAnimationDuration);
  },

  /**
   * 更新 Modal
   */
  update: (id: string, options: Partial<ModalProps>) => {
    modalManager.update(id, options);
  },

  /**
   * 獲取所有 Modal
   */
  getAll: () => {
    return modalManager.getAll();
  },

  /**
   * 檢查 Modal 是否存在
   */
  exists: (id: string) => {
    return modalManager.exists(id);
  },

  /**
   * 確認對話框
   */
  confirm: (options: {
    title?: React.ReactNode;
    content?: React.ReactNode;
    okText?: string;
    cancelText?: string;
    onOk?: () => void | Promise<void>;
    onCancel?: () => void;
    maskClosable?: boolean;
  }) => {
    const {
      title = '確認',
      content,
      okText = '確定',
      cancelText = '取消',
      onOk,
      onCancel,
      maskClosable = false,
    } = options;

    return new Promise<boolean>((resolve) => {
      const handleOk = async () => {
        try {
          if (onOk) {
            await onOk();
          }
          ModalService.close(modalId);
          resolve(true);
        } catch (_error) {
          // 如果 onOk 拋出錯誤，不關閉 Modal，保持錯誤處理
          resolve(false);
        }
      };

      const handleCancel = () => {
        onCancel?.();
        ModalService.close(modalId);
        resolve(false);
      };

      const footer = React.createElement(
        'div',
        { className: 'flex justify-end space-x-3' },
        React.createElement(
          'button',
          {
            className:
              'px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
            onClick: handleCancel,
          },
          cancelText,
        ),
        React.createElement(
          'button',
          {
            className:
              'px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
            onClick: handleOk,
          },
          okText,
        ),
      );

      const modalId = ModalService.open({
        title,
        children: content,
        footer,
        maskClosable,
        size: 'sm',
        closable: false,
      });
    });
  },

  /**
   * 警告對話框
   */
  alert: (options: {
    title?: React.ReactNode;
    content?: React.ReactNode;
    okText?: string;
    onOk?: () => void | Promise<void>;
    maskClosable?: boolean;
  }) => {
    const { title = '提示', content, okText = '確定', onOk, maskClosable = false } = options;

    return new Promise<void>((resolve) => {
      const handleOk = async () => {
        try {
          if (onOk) {
            await onOk();
          }
        } catch (_error) {
          // 忽略onOk錯誤，繼續關閉Modal
        }
        ModalService.close(modalId);
        resolve();
      };

      const footer = React.createElement(
        'div',
        { className: 'flex justify-end' },
        React.createElement(
          'button',
          {
            className:
              'px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
            onClick: handleOk,
          },
          okText,
        ),
      );

      const modalId = ModalService.open({
        title,
        children: content,
        footer,
        maskClosable,
        size: 'sm',
        closable: false,
      });
    });
  },
};

export { modalManager };

import React from 'react';

import { createRoot } from 'react-dom/client';

import { Modal, ModalProps } from './Modal';
import { ModalInstance, modalManager } from './ModalService';

// 自動初始化 Modal Provider
let isProviderMounted = false;

const ensureProvider = () => {
  if (!isProviderMounted && typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.id = 'eonui-modal-provider';
    document.body.appendChild(container);

    const root = createRoot(container);
    // 初始為空
    const renderModals = (modals: ModalInstance[]) => {
      return React.createElement(
        React.Fragment,
        null,
        ...modals.map((modal) => {
          const { key, id, ...modalProps } = modal;
          return React.createElement(Modal, {
            key,
            id,
            ...modalProps,
            visible: true,
            onClose: () => modalManager.close(id),
          });
        }),
      );
    };

    root.render(renderModals([]));

    // 替換為實際的 Provider
    modalManager.subscribe((modals) => {
      root.render(renderModals(modals));
    });

    isProviderMounted = true;
  }
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
    modalManager.close(id);
  },

  /**
   * 關閉所有 Modal
   */
  closeAll: () => {
    modalManager.closeAll();
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
        } catch (error) {
          // 如果 onOk 拋出錯誤，不關閉 Modal
          console.error('Modal confirm onOk error:', error);
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
          ModalService.close(modalId);
          resolve();
        } catch (error) {
          console.error('Modal alert onOk error:', error);
        }
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

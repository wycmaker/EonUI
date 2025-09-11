import React from 'react';

import { createRoot } from 'react-dom/client';

import { MessageBoxType, MessageBoxProps } from './MessageBox';
import { messageBoxManager } from './messageBoxManager';
import { MessageBoxProvider } from './MessageBoxService';

// 自動初始化 MessageBox Provider
let isProviderMounted = false;

const ensureProvider = () => {
  if (!isProviderMounted && typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.id = 'eonui-messagebox-provider';
    document.body.appendChild(container);

    const root = createRoot(container);

    root.render(React.createElement(MessageBoxProvider, { children: null }));

    isProviderMounted = true;
  }
};

// MessageBox Service 選項介面
export interface MessageBoxServiceOptions {
  title?: React.ReactNode;
  content?: React.ReactNode;
  type?: MessageBoxType;
  icon?: React.ReactNode;
  showIcon?: boolean;
  okText?: string;
  cancelText?: string;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
}

// 導出的 MessageBox Service API
export const MessageBoxService = {
  /**
   * 顯示 Alert 對話框
   */
  alert: (options: MessageBoxServiceOptions): Promise<void> => {
    ensureProvider();

    return new Promise<void>((resolve) => {
      const handleOk = async () => {
        try {
          if (options.onOk) {
            await options.onOk();
          }
          resolve();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('MessageBox alert onOk error:', error);
          throw error;
        }
      };

      messageBoxManager.open({
        variant: 'alert',
        type: options.type || 'info',
        title: options.title,
        content: options.content,
        icon: options.icon,
        showIcon: options.showIcon !== false,
        okText: options.okText,
        closable: true,
        onOk: handleOk,
      } as Omit<MessageBoxProps, 'visible' | 'onClose' | 'id'>);
    });
  },

  /**
   * 顯示 Confirm 對話框
   */
  confirm: (options: MessageBoxServiceOptions): Promise<boolean> => {
    ensureProvider();

    return new Promise<boolean>((resolve) => {
      const handleOk = async () => {
        try {
          if (options.onOk) {
            await options.onOk();
          }
          resolve(true);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('MessageBox confirm onOk error:', error);
          throw error;
        }
      };

      const handleCancel = () => {
        if (options.onCancel) {
          options.onCancel();
        }
        resolve(false);
      };

      messageBoxManager.open({
        variant: 'confirm',
        type: options.type || 'info',
        title: options.title,
        content: options.content,
        icon: options.icon,
        showIcon: options.showIcon !== false,
        okText: options.okText,
        cancelText: options.cancelText,
        closable: false,
        onOk: handleOk,
        onCancel: handleCancel,
      } as Omit<MessageBoxProps, 'visible' | 'onClose' | 'id'>);
    });
  },

  /**
   * 關閉指定 MessageBox
   */
  close: (id: string) => {
    messageBoxManager.close(id);
  },

  /**
   * 關閉所有 MessageBox
   */
  closeAll: () => {
    messageBoxManager.closeAll();
  },

  /**
   * 更新 MessageBox
   */
  update: (id: string, options: Partial<MessageBoxProps>) => {
    messageBoxManager.update(id, options);
  },

  /**
   * 獲取所有 MessageBox
   */
  getAll: () => {
    return messageBoxManager.getAll();
  },

  /**
   * 檢查 MessageBox 是否存在
   */
  exists: (id: string) => {
    return messageBoxManager.exists(id);
  },

  // 快捷方法
  /**
   * 顯示信息對話框
   */
  info: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.alert({
      ...options,
      content,
      type: 'info',
    });
  },

  /**
   * 顯示成功對話框
   */
  success: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.alert({
      ...options,
      content,
      type: 'success',
    });
  },

  /**
   * 顯示警告對話框
   */
  warning: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.alert({
      ...options,
      content,
      type: 'warning',
    });
  },

  /**
   * 顯示錯誤對話框
   */
  error: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.alert({
      ...options,
      content,
      type: 'error',
    });
  },

  /**
   * 顯示確認對話框（info類型）
   */
  confirmInfo: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.confirm({
      ...options,
      content,
      type: 'info',
    });
  },

  /**
   * 顯示確認對話框（warning類型）
   */
  confirmWarning: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.confirm({
      ...options,
      content,
      type: 'warning',
    });
  },

  /**
   * 顯示確認對話框（error類型）
   */
  confirmError: (
    content: React.ReactNode,
    options?: Omit<MessageBoxServiceOptions, 'content' | 'type'>,
  ) => {
    return MessageBoxService.confirm({
      ...options,
      content,
      type: 'error',
    });
  },
};

export { messageBoxManager };

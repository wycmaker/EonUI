import React from 'react';

import { AlertProps, AlertType, AlertPosition } from './Alert';
import { AlertInstance } from './AlertContainer';

export interface AlertServiceOptions
  extends Omit<AlertProps, 'children' | 'onClose' | 'visible' | 'id'> {
  content?: React.ReactNode;
}

export interface AlertServiceMethod {
  (content: React.ReactNode, options?: AlertServiceOptions): string;
  (options: AlertServiceOptions & { content: React.ReactNode }): string;
}

// 類型守衛函數
export const isContentWithOptions = (
  contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
): contentOrOptions is AlertServiceOptions & { content: React.ReactNode } => {
  return (
    typeof contentOrOptions === 'object' &&
    contentOrOptions !== null &&
    'content' in contentOrOptions &&
    (React.isValidElement(contentOrOptions.content) || typeof contentOrOptions.content === 'string')
  );
};

// 全域設定介面
export interface AlertGlobalConfig {
  duration?: number;
  position?: AlertPosition;
  closable?: boolean;
  showIcon?: boolean;
  maxCount?: number;
}

export class AlertManager {
  private alerts: AlertInstance[] = [];
  private listeners: Array<(alerts: AlertInstance[]) => void> = [];
  private idCounter = 0;
  private globalConfig: AlertGlobalConfig = {
    duration: 3000,
    position: 'top-right',
    closable: true,
    showIcon: true,
    maxCount: 10,
  };

  // 添加監聽器
  subscribe(listener: (alerts: AlertInstance[]) => void) {
    this.listeners.push(listener);
    listener(this.alerts); // 立即發送當前狀態
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // 通知所有監聽器
  private notify() {
    this.listeners.forEach((listener) => listener([...this.alerts]));
  }

  // 設定全域配置
  setConfig(config: Partial<AlertGlobalConfig>) {
    this.globalConfig = { ...this.globalConfig, ...config };
  }

  // 取得全域配置
  getConfig(): AlertGlobalConfig {
    return { ...this.globalConfig };
  }

  // 重置為預設配置
  resetConfig() {
    this.globalConfig = {
      duration: 3000,
      position: 'top-right',
      closable: true,
      showIcon: true,
      maxCount: 10,
    };
  }

  // 生成唯一 ID
  private generateId(): string {
    return `alert-${Date.now()}-${++this.idCounter}`;
  }

  // 添加 Alert
  add(
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options: AlertServiceOptions = {},
  ): string {
    let content: React.ReactNode;
    let finalOptions: AlertServiceOptions;

    if (isContentWithOptions(contentOrOptions)) {
      // 第一個參數是帶有 content 的選項對象
      const { content: optionContent, ...restOptions } = contentOrOptions;
      content = optionContent;
      finalOptions = restOptions;
    } else {
      // 第一個參數是內容，第二個參數是選項
      content = contentOrOptions as React.ReactNode;
      finalOptions = options;
    }

    const id = this.generateId();

    // 合併全域設定與局部選項
    const mergedOptions = {
      ...this.globalConfig,
      ...finalOptions,
    };

    const alert: AlertInstance = {
      id,
      key: id,
      children: content,
      visible: true,
      ...mergedOptions,
    };

    // 檢查最大數量限制
    if (this.globalConfig.maxCount && this.alerts.length >= this.globalConfig.maxCount) {
      // 移除最舊的 alert
      this.alerts.shift();
    }

    this.alerts.push(alert);
    this.notify();

    return id;
  }

  // 移除 Alert
  remove(id: string) {
    this.alerts = this.alerts.filter((alert) => alert.id !== id);
    this.notify();
  }

  // 清除所有 Alert
  clear() {
    this.alerts = [];
    this.notify();
  }

  // 根據位置清除 Alert
  clearByPosition(position: AlertPosition) {
    this.alerts = this.alerts.filter((alert) => alert.position !== position);
    this.notify();
  }

  // 根據類型清除 Alert
  clearByType(type: AlertType) {
    this.alerts = this.alerts.filter((alert) => alert.type !== type);
    this.notify();
  }

  // 類型特定方法
  info: AlertServiceMethod = (contentOrOptions, options = {}) => {
    return this.add(contentOrOptions, { ...(options || {}), type: 'info' as AlertType });
  };

  success: AlertServiceMethod = (contentOrOptions, options = {}) => {
    return this.add(contentOrOptions, { ...(options || {}), type: 'success' as AlertType });
  };

  warning: AlertServiceMethod = (contentOrOptions, options = {}) => {
    return this.add(contentOrOptions, { ...(options || {}), type: 'warning' as AlertType });
  };

  error: AlertServiceMethod = (contentOrOptions, options = {}) => {
    return this.add(contentOrOptions, { ...(options || {}), type: 'error' as AlertType });
  };

  primary: AlertServiceMethod = (contentOrOptions, options = {}) => {
    return this.add(contentOrOptions, { ...(options || {}), type: 'primary' as AlertType });
  };
}

// 全域 Alert 管理器實例
export const alertManager = new AlertManager();

import React from 'react';

import { createRoot } from 'react-dom/client';

import { AlertType, AlertPosition } from './Alert';
import { AlertContainer } from './AlertContainer';
import {
  AlertServiceOptions,
  AlertServiceMethod,
  AlertGlobalConfig,
  alertManager,
} from './alertServiceHelpers';

// 自動初始化 Alert Provider
let isProviderMounted = false;

const ensureProvider = () => {
  if (!isProviderMounted && typeof document !== 'undefined') {
    const container = document.createElement('div');
    container.id = 'eonui-alert-provider';
    document.body.appendChild(container);

    const root = createRoot(container);
    root.render(
      React.createElement(AlertContainer, {
        alerts: [],
        onRemove: () => {},
      }),
    );

    // 替換為實際的 Provider
    alertManager.subscribe((alerts) => {
      root.render(
        React.createElement(AlertContainer, {
          alerts,
          onRemove: (id: string) => alertManager.remove(id),
        }),
      );
    });

    isProviderMounted = true;
  }
};

// 導出的 Alert Service API
export const AlertService = {
  // 基本方法
  add: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    return alertManager.add(contentOrOptions, options);
  },

  remove: (id: string) => {
    alertManager.remove(id);
  },

  clear: () => {
    alertManager.clear();
  },

  clearByPosition: (position: AlertPosition) => {
    alertManager.clearByPosition(position);
  },

  clearByType: (type: AlertType) => {
    alertManager.clearByType(type);
  },

  // 配置方法
  setConfig: (config: Partial<AlertGlobalConfig>) => {
    alertManager.setConfig(config);
  },

  getConfig: () => {
    return alertManager.getConfig();
  },

  resetConfig: () => {
    alertManager.resetConfig();
  },

  // 快捷方法
  info: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return alertManager.info(contentOrOptions as any, options);
  },

  success: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return alertManager.success(contentOrOptions as any, options);
  },

  warning: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return alertManager.warning(contentOrOptions as any, options);
  },

  error: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return alertManager.error(contentOrOptions as any, options);
  },

  primary: (
    contentOrOptions: React.ReactNode | (AlertServiceOptions & { content: React.ReactNode }),
    options?: AlertServiceOptions,
  ) => {
    ensureProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return alertManager.primary(contentOrOptions as any, options);
  },
};

export { alertManager };
export type { AlertServiceOptions, AlertServiceMethod, AlertGlobalConfig };

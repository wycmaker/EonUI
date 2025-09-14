import React from 'react';

export interface LoadingServiceOptions {
  /** Loading 文字 */
  text?: string;
  /** 自定義圖標 */
  icon?: React.ReactNode;
  /** 遮罩透明度 */
  maskOpacity?: number;
  /** 目標選擇器（CSS 選擇器或 DOM 元素） */
  target?: string | HTMLElement;
  /** 是否全屏顯示 */
  fullscreen?: boolean;
}

export interface LoadingInstance {
  /** 關閉當前 Loading */
  close: () => void;
  /** 更新 Loading 配置 */
  update: (options: Partial<LoadingServiceOptions>) => void;
}

class LoadingService {
  private instances: Map<string, LoadingInstance> = new Map();
  private globalInstance: LoadingInstance | null = null;

  /**
   * 開始顯示 Loading
   * @param options Loading 配置選項
   * @returns LoadingInstance 實例
   */
  start(options: LoadingServiceOptions = {}): LoadingInstance {
    const { text = '載入中...', icon, maskOpacity = 0.5, target, fullscreen = false } = options;

    // 如果指定了目標元素
    if (target) {
      const targetElement =
        typeof target === 'string' ? (document.querySelector(target) as HTMLElement) : target;

      if (!targetElement) {
        // eslint-disable-next-line no-console
        console.warn(`Loading target not found: ${target}`);
        return this.createGlobalInstance(options);
      }

      return this.createTargetInstance(targetElement, {
        text,
        icon,
        maskOpacity,
        fullscreen: false, // 目標元素不使用全屏
      });
    }

    // 全屏 Loading
    return this.createGlobalInstance({ text, icon, maskOpacity, fullscreen });
  }

  /**
   * 關閉所有 Loading
   */
  closeAll(): void {
    // 關閉所有目標實例
    this.instances.forEach((instance) => instance.close());
    this.instances.clear();

    // 關閉全屏實例
    if (this.globalInstance) {
      this.globalInstance.close();
      this.globalInstance = null;
    }
  }

  /**
   * 關閉指定目標的 Loading
   * @param target 目標選擇器或 DOM 元素
   */
  close(target?: string | HTMLElement): void {
    if (!target) {
      // 關閉全屏 Loading
      if (this.globalInstance) {
        this.globalInstance.close();
        this.globalInstance = null;
      }
      return;
    }

    const key = typeof target === 'string' ? target : this.getElementKey(target);
    const instance = this.instances.get(key);
    if (instance) {
      instance.close();
      this.instances.delete(key);
    }
  }

  private createGlobalInstance(options: LoadingServiceOptions): LoadingInstance {
    // 如果已有全屏實例，先關閉
    if (this.globalInstance) {
      this.globalInstance.close();
    }

    const loadingElement = this.createLoadingElement(options, true);
    document.body.appendChild(loadingElement);

    const instance: LoadingInstance = {
      close: () => {
        if (loadingElement.parentNode) {
          loadingElement.parentNode.removeChild(loadingElement);
        }
        this.globalInstance = null;
      },
      update: (newOptions) => {
        this.updateLoadingElement(loadingElement, { ...options, ...newOptions });
      },
    };

    this.globalInstance = instance;
    return instance;
  }

  private createTargetInstance(
    targetElement: HTMLElement,
    options: LoadingServiceOptions,
  ): LoadingInstance {
    const key = this.getElementKey(targetElement);

    // 如果該目標已有 Loading，先關閉
    const existingInstance = this.instances.get(key);
    if (existingInstance) {
      existingInstance.close();
    }

    // 設置目標元素為相對定位
    const originalPosition = targetElement.style.position;
    if (!originalPosition || originalPosition === 'static') {
      targetElement.style.position = 'relative';
    }

    const loadingElement = this.createLoadingElement(options, false);
    targetElement.appendChild(loadingElement);

    const instance: LoadingInstance = {
      close: () => {
        if (loadingElement.parentNode) {
          loadingElement.parentNode.removeChild(loadingElement);
        }
        // 恢復原始定位
        if (!originalPosition || originalPosition === 'static') {
          targetElement.style.position = originalPosition || '';
        }
        this.instances.delete(key);
      },
      update: (newOptions) => {
        this.updateLoadingElement(loadingElement, { ...options, ...newOptions });
      },
    };

    this.instances.set(key, instance);
    return instance;
  }

  private createLoadingElement(options: LoadingServiceOptions, fullscreen: boolean): HTMLElement {
    const { text = '載入中...', maskOpacity = 0.5 } = options;

    const loadingDiv = document.createElement('div');
    loadingDiv.className = `loading-mask flex items-center justify-center ${
      fullscreen ? 'fixed inset-0 z-[9999]' : 'absolute inset-0 z-50'
    }`;
    loadingDiv.style.backgroundColor = `rgba(255, 255, 255, ${maskOpacity})`;
    loadingDiv.setAttribute('role', 'dialog');
    loadingDiv.setAttribute('aria-modal', 'true');
    loadingDiv.setAttribute('aria-label', text);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'flex flex-col items-center justify-center space-y-3 p-6';
    contentDiv.onclick = (e) => e.stopPropagation();

    // 創建 spinner
    const spinnerDiv = document.createElement('div');
    spinnerDiv.className = 'flex items-center justify-center';
    spinnerDiv.innerHTML = `
      <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-label="載入中">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;

    // 創建文字
    const textDiv = document.createElement('div');
    textDiv.className = 'text-gray-700 text-sm font-medium text-center';
    textDiv.textContent = text;

    contentDiv.appendChild(spinnerDiv);
    contentDiv.appendChild(textDiv);
    loadingDiv.appendChild(contentDiv);

    return loadingDiv;
  }

  private updateLoadingElement(element: HTMLElement, options: LoadingServiceOptions): void {
    const { text, maskOpacity } = options;

    if (text) {
      const textElement = element.querySelector('.text-gray-700');
      if (textElement) {
        textElement.textContent = text;
      }
    }

    if (maskOpacity !== undefined) {
      element.style.backgroundColor = `rgba(255, 255, 255, ${maskOpacity})`;
    }
  }

  private getElementKey(element: HTMLElement): string {
    // 使用元素的唯一標識作為 key
    if (element.id) return `#${element.id}`;

    // 如果沒有 id，生成一個唯一標識
    if (!element.dataset.loadingKey) {
      element.dataset.loadingKey = `loading-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    return element.dataset.loadingKey;
  }
}

// 創建單例實例
export const loadingService = new LoadingService();

// 便捷方法
export const Loading = {
  /**
   * 開始顯示 Loading
   * @param options Loading 配置選項
   */
  start: (options?: LoadingServiceOptions) => loadingService.start(options || {}),

  /**
   * 關閉 Loading
   * @param target 目標選擇器或 DOM 元素，不傳則關閉全屏 Loading
   */
  close: (target?: string | HTMLElement) => loadingService.close(target),

  /**
   * 關閉所有 Loading
   */
  closeAll: () => loadingService.closeAll(),
};

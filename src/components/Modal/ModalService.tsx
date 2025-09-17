import React, { Component } from 'react';

// import { createRoot } from 'react-dom/client';

import { Modal, ModalProps } from './Modal';

export interface ModalInstance extends ModalProps {
  id: string;
  key: string;
}

interface ModalContainerProps {
  modals: ModalInstance[];
  onClose: (id: string) => void;
}

interface ModalContainerState {
  visibleModals: Set<string>;
}

class ModalContainer extends Component<ModalContainerProps, ModalContainerState> {
  state: ModalContainerState = {
    visibleModals: new Set<string>(),
  };

  componentDidUpdate(prevProps: ModalContainerProps) {
    const { modals } = this.props;
    const prevModals = prevProps.modals;

    // 檢查新增的 Modal
    const newModalIds = modals
      .filter((modal) => !prevModals.find((prev) => prev.id === modal.id))
      .map((modal) => modal.id);

    // 為新 Modal 添加動畫延遲 - 使用更長的延遲確保 DOM 完全渲染
    if (newModalIds.length > 0) {
      // 使用 requestAnimationFrame 確保在下一個繪制幀觸發
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // 雙重 RAF 確保 DOM 完全渲染
          setTimeout(() => {
            this.setState((prevState: ModalContainerState) => ({
              visibleModals: new Set([...prevState.visibleModals, ...newModalIds]),
            }));
          }, 50); // 增加延遲時間
        });
      });
    }

    // 移除已關閉的 Modal
    const currentModalIds = new Set(modals.map((modal) => modal.id));
    const visibleModals = new Set(
      Array.from(this.state.visibleModals).filter((id) => currentModalIds.has(id)),
    );

    if (visibleModals.size !== this.state.visibleModals.size) {
      this.setState({ visibleModals });
    }
  }

  render() {
    const { modals, onClose } = this.props;
    const { visibleModals } = this.state;

    return (
      <>
        {modals.map((modal) => {
          const { key, id, ...modalProps } = modal;
          return (
            <Modal
              key={key}
              id={id}
              {...modalProps}
              visible={visibleModals.has(id)}
              onClose={() => onClose(id)}
            />
          );
        })}
      </>
    );
  }
}

// Modal Provider 組件
interface ModalProviderProps {
  children: React.ReactNode;
}

class ModalProvider extends Component<ModalProviderProps> {
  private unsubscribe: (() => void) | null = null;

  state = {
    modals: [] as ModalInstance[],
  };

  componentDidMount() {
    this.unsubscribe = modalManager.subscribe((modals) => {
      this.setState({ modals });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleClose = (id: string) => {
    const { modals } = this.state;
    const modal = modals.find((m) => m.id === id);
    const animationDuration = modal?.animationDuration || 300;

    // 先觸發關閉動畫
    this.setState((prevState: ModalContainerState) => ({
      visibleModals: new Set(
        Array.from(prevState.visibleModals).filter((modalId) => modalId !== id),
      ),
    }));

    // 延遲移除 Modal，等待動畫完成
    setTimeout(() => {
      modalManager.close(id);
    }, animationDuration);
  };

  render() {
    const { children } = this.props;
    const { modals } = this.state;

    return (
      <>
        {children}
        <ModalContainer
          modals={modals}
          onClose={this.handleClose}
        />
      </>
    );
  }
}

// Modal 管理器
class ModalManager {
  private modals: ModalInstance[] = [];
  private listeners: Array<(modals: ModalInstance[]) => void> = [];
  private idCounter = 0;

  // 添加監聽器
  subscribe(listener: (modals: ModalInstance[]) => void) {
    this.listeners.push(listener);
    listener(this.modals); // 立即發送當前狀態
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // 通知所有監聽器
  private notify() {
    this.listeners.forEach((listener) => listener([...this.modals]));
  }

  // 生成唯一 ID
  private generateId(): string {
    return `modal-${Date.now()}-${++this.idCounter}`;
  }

  // 開啟 Modal
  open(options: Omit<ModalProps, 'visible' | 'onClose' | 'id'>): string {
    const id = this.generateId();

    const modal: ModalInstance = {
      id,
      key: id,
      ...options,
    };

    this.modals.push(modal);
    this.notify();

    return id;
  }

  // 關閉 Modal
  close(id: string) {
    this.modals = this.modals.filter((modal) => modal.id !== id);
    this.notify();
  }

  // 關閉所有 Modal
  closeAll() {
    this.modals = [];
    this.notify();
  }

  // 獲取所有 Modal
  getAll(): ModalInstance[] {
    return [...this.modals];
  }

  // 更新 Modal
  update(id: string, options: Partial<ModalProps>) {
    this.modals = this.modals.map((modal) => (modal.id === id ? { ...modal, ...options } : modal));
    this.notify();
  }

  // 檢查 Modal 是否存在
  exists(id: string) {
    return this.modals.some((modal) => modal.id === id);
  }
}

// 全域 Modal 管理器實例
// eslint-disable-next-line react-refresh/only-export-components
export const modalManager = new ModalManager();

export { ModalProvider };

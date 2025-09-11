import React, { Component } from 'react';

import { createRoot } from 'react-dom/client';

import { Modal, ModalProps } from './Modal';

export interface ModalInstance extends ModalProps {
  id: string;
  key: string;
}

interface ModalContainerProps {
  modals: ModalInstance[];
  onClose: (id: string) => void;
}

class ModalContainer extends Component<ModalContainerProps> {
  render() {
    const { modals, onClose } = this.props;

    return (
      <>
        {modals.map((modal) => {
          const { key, id, ...modalProps } = modal;
          return (
            <Modal
              key={key}
              id={id}
              {...modalProps}
              visible={true}
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
    modalManager.close(id);
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

  // 更新 Modal
  update(id: string, options: Partial<ModalProps>) {
    this.modals = this.modals.map((modal) => (modal.id === id ? { ...modal, ...options } : modal));
    this.notify();
  }

  // 獲取所有 Modal
  getAll() {
    return [...this.modals];
  }

  // 檢查 Modal 是否存在
  exists(id: string) {
    return this.modals.some((modal) => modal.id === id);
  }
}

// 全域 Modal 管理器實例
export const modalManager = new ModalManager();

export { ModalProvider };

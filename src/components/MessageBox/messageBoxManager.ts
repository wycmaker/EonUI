import { MessageBoxProps } from './MessageBox';

export interface MessageBoxInstance extends MessageBoxProps {
  id: string;
  key: string;
}

// MessageBox 管理器
class MessageBoxManager {
  private messageBoxes: MessageBoxInstance[] = [];
  private listeners: Array<(messageBoxes: MessageBoxInstance[]) => void> = [];
  private idCounter = 0;

  // 添加監聽器
  subscribe(listener: (messageBoxes: MessageBoxInstance[]) => void) {
    this.listeners.push(listener);
    listener(this.messageBoxes); // 立即發送當前狀態
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // 通知所有監聽器
  private notify() {
    this.listeners.forEach((listener) => listener([...this.messageBoxes]));
  }

  // 生成唯一 ID
  private generateId(): string {
    return `messagebox-${Date.now()}-${++this.idCounter}`;
  }

  // 開啟 MessageBox
  open(options: Omit<MessageBoxProps, 'visible' | 'onClose' | 'id'>): string {
    const id = this.generateId();

    const messageBox: MessageBoxInstance = {
      id,
      key: id,
      ...options,
    };

    // 確保同時只有一個 MessageBox
    this.messageBoxes = [messageBox];
    this.notify();

    return id;
  }

  // 關閉 MessageBox
  close(id: string) {
    this.messageBoxes = this.messageBoxes.filter((messageBox) => messageBox.id !== id);
    this.notify();
  }

  // 關閉所有 MessageBox
  closeAll() {
    this.messageBoxes = [];
    this.notify();
  }

  // 更新 MessageBox
  update(id: string, options: Partial<MessageBoxProps>) {
    this.messageBoxes = this.messageBoxes.map((messageBox) =>
      messageBox.id === id ? { ...messageBox, ...options } : messageBox,
    );
    this.notify();
  }

  // 獲取所有 MessageBox
  getAll() {
    return [...this.messageBoxes];
  }

  // 檢查 MessageBox 是否存在
  exists(id: string) {
    return this.messageBoxes.some((messageBox) => messageBox.id === id);
  }
}

// 全域 MessageBox 管理器實例
export const messageBoxManager = new MessageBoxManager();

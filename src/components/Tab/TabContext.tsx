import { createContext } from 'react';

// Tab上下文類型
export interface TabContextType {
  activeKey: string;
  setActiveKey: (key: string) => void;
  variant: 'underline' | 'button';
  size: 'sm' | 'md' | 'lg';
  useRouter: boolean;
  currentPath?: string;
  onChange?: (activeKey: string) => void;
}

// Tab上下文
export const TabContext = createContext<TabContextType | null>(null);

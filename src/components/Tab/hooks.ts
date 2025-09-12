import { useContext } from 'react';

import { TabContext } from './TabContext';

// 使用Tab上下文的Hook
export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within Tab component');
  }
  return context;
};

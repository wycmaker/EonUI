import React from 'react';

import { cn } from '@/utils/cn';
import { CloseIcon } from '@/utils/icons';

interface CloseButtonProps {
  /**
   * 點擊事件處理函數
   */
  onClick: () => void;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 按鈕大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * aria-label 文字
   */
  ariaLabel?: string;
}

/**
 * 通用關閉按鈕組件
 * 可用於 Alert、Modal、Drawer 等需要關閉功能的組件
 */
const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className,
  size = 'md',
  disabled = false,
  ariaLabel = '關閉',
}) => {
  const sizeStyles = {
    sm: 'p-0.5',
    md: 'p-1',
    lg: 'p-1.5',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-md transition-colors',
        'hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        sizeStyles[size],
        className,
      )}
      aria-label={ariaLabel}
    >
      <CloseIcon className={iconSizes[size]} />
    </button>
  );
};

export { CloseButton };
export type { CloseButtonProps };

import React from 'react';

import { cn } from '@/utils/cn';
import { getSizeStyles, type ComponentSize } from '@/utils/formStyles';

export interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按鈕方向（用於無障礙標籤）
   */
  direction?: 'prev' | 'next' | 'up' | 'down' | 'left' | 'right';
  /**
   * 按鈕大小
   */
  size?: ComponentSize;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 按鈕內容
   */
  children: React.ReactNode;
  /**
   * 點擊事件
   */
  onClick?: () => void;
}

const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  (
    {
      direction,
      size = 'md',
      disabled = false,
      children,
      onClick,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    // 預設的無障礙標籤
    const defaultAriaLabels = {
      prev: '上一頁',
      next: '下一頁',
      up: '向上',
      down: '向下',
      left: '向左',
      right: '向右',
    };

    const finalAriaLabel = ariaLabel || (direction && defaultAriaLabels[direction]);

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded border border-gray-300 bg-white transition-colors duration-200',
          getSizeStyles(size, 'pagination-nav'),
          disabled
            ? 'cursor-not-allowed opacity-50 text-gray-400'
            : 'cursor-pointer text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary',
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        aria-label={finalAriaLabel}
        {...props}
      >
        {children}
      </button>
    );
  },
);

NavigationButton.displayName = 'NavigationButton';

export { NavigationButton };

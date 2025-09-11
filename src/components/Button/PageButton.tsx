import React from 'react';

import { cn } from '@/utils/cn';
import { getSizeStyles, type ComponentSize } from '@/utils/formStyles';

export interface PageButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'onClick'> {
  /**
   * 頁碼數字
   */
  page: number;
  /**
   * 是否為當前頁
   */
  current?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 頁碼樣式
   */
  style?: 'plain' | 'background';
  /**
   * 按鈕大小
   */
  size?: ComponentSize;
  /**
   * 點擊事件
   */
  onClick?: (page: number) => void;
}

const PageButton = React.forwardRef<HTMLButtonElement, PageButtonProps>(
  (
    {
      page,
      current = false,
      disabled = false,
      style = 'background',
      size = 'md',
      onClick,
      className,
      ...props
    },
    ref,
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded border transition-colors duration-200 cursor-pointer select-none',
      getSizeStyles(size, 'pagination-button'),
      disabled && 'cursor-not-allowed opacity-50',
    );

    const styleClasses = {
      plain: cn(
        'border-transparent',
        current && 'text-primary font-semibold',
        !current && !disabled && 'text-gray-700 hover:text-primary',
        disabled && 'text-gray-400',
      ),
      background: cn(
        'border-gray-300',
        current && 'bg-primary text-white border-primary',
        !current && !disabled && 'bg-white text-gray-700 hover:bg-gray-50 hover:border-primary',
        !current && disabled && 'bg-gray-100 text-gray-400',
      ),
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn(baseClasses, styleClasses[style], className)}
        onClick={() => !disabled && onClick?.(page)}
        disabled={disabled}
        aria-label={`第 ${page} 頁`}
        aria-current={current ? 'page' : undefined}
        {...props}
      >
        {page}
      </button>
    );
  },
);

PageButton.displayName = 'PageButton';

export { PageButton };

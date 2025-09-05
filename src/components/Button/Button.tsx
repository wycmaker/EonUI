import React from 'react';

import { ComponentSize, SpinnerIcon } from '@/utils';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按鈕的視覺樣式變體
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * 按鈕的大小
   */
  size?: ComponentSize | 'xs' | 'xl';
  /**
   * 是否為載入狀態
   */
  loading?: boolean;
  /**
   * 載入狀態時顯示的文字，用於螢幕閱讀器
   */
  loadingText?: string;
  /**
   * 按鈕內容
   */
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      loadingText = '載入中',
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary',
      outline:
        'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-primary',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-primary',
    };

    const buttonSizes = {
      xs: 'h-8 px-2 py-1 text-xs min-w-16',
      sm: 'h-9 px-3 py-1.5 text-sm min-w-20',
      md: 'h-10 px-4 py-2 text-sm min-w-24',
      lg: 'h-12 px-5 py-2.5 text-base min-w-28',
      xl: 'h-14 px-6 py-3 text-lg min-w-32',
    };

    return (
      <button
        className={cn(
          baseStyles,
          'rounded-md transition-colors',
          variants[variant],
          buttonSizes[size],
          className,
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-label={loading ? loadingText : props['aria-label']}
        {...props}
      >
        {loading && <SpinnerIcon className="mr-2 h-4 w-4" />}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };

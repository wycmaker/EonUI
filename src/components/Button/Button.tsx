import React from 'react';

import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按鈕的視覺樣式變體
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * 按鈕的大小
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * 是否為載入狀態
   */
  loading?: boolean;
  /**
   * 按鈕內容
   */
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary',
      outline:
        'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-primary',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-primary',
    };

    const sizes = {
      xs: 'h-6 px-2 py-1 text-xs min-w-16',
      sm: 'h-8 px-3 py-1.5 text-sm min-w-20',
      md: 'h-10 px-4 py-2 text-sm min-w-24',
      lg: 'h-12 px-5 py-2.5 text-base min-w-28',
      xl: 'h-14 px-6 py-3 text-lg min-w-32',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };

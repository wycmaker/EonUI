import React from 'react';

import { cn } from '@/utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 輸入框的視覺樣式變體
   */
  variant?: 'default' | 'filled' | 'outline';
  /**
   * 輸入框的大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 輸入框的狀態
   */
  status?: 'default' | 'error' | 'success' | 'warning';
  /**
   * 前綴圖示
   */
  prefixIcon?: React.ReactNode;
  /**
   * 後綴圖示
   */
  suffixIcon?: React.ReactNode;
  /**
   * 是否顯示清除按鈕
   */
  clearable?: boolean;
  /**
   * 清除按鈕的回調函數
   */
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      status = 'default',
      prefixIcon,
      suffixIcon,
      clearable = false,
      onClear,
      disabled,
      value,
      ...props
    },
    ref,
  ) => {
    // 基礎樣式
    const baseStyles =
      'w-full rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

    // 變體樣式
    const variants = {
      default:
        'bg-white border border-gray-300 focus:border-2 focus:border-primary focus:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
      filled:
        'bg-gray-50 border border-transparent focus:bg-white focus:border-2 focus:border-primary focus:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
      outline:
        'bg-transparent border-2 border-gray-300 focus:border-primary focus:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
    };

    // 大小樣式
    const sizes = {
      sm: 'h-8 px-3 py-1 text-sm', // 32px 高度符合最小觸控目標
      md: 'h-10 px-3 py-2 text-sm', // 40px 高度
      lg: 'h-12 px-4 py-3 text-base', // 48px 高度
    };

    // 狀態樣式
    const statusStyles = {
      default: '',
      error:
        'border-error focus:border-2 focus:border-error focus:shadow-[0_0_0_3px_rgb(239_68_68_/_0.1)]',
      success:
        'border-success focus:border-2 focus:border-success focus:shadow-[0_0_0_3px_rgb(16_185_129_/_0.1)]',
      warning:
        'border-warning focus:border-2 focus:border-warning focus:shadow-[0_0_0_3px_rgb(251_191_36_/_0.1)]',
    };

    // 清除按鈕處理
    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    // 顯示清除按鈕的條件
    const showClearButton = clearable && value && !disabled;

    // 輸入框樣式（考慮圖示）
    const inputStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      statusStyles[status],
      prefixIcon && 'pl-10',
      (suffixIcon || showClearButton) && 'pr-10',
      className,
    );

    return (
      <div className="relative inline-block w-full">
        {/* 前綴圖示 */}
        {prefixIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-400">{prefixIcon}</span>
          </div>
        )}

        {/* 輸入框 */}
        <input
          ref={ref}
          className={inputStyles}
          disabled={disabled}
          aria-invalid={status === 'error'}
          value={value}
          {...props}
        />

        {/* 後綴圖示或清除按鈕 */}
        {(suffixIcon || showClearButton) && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {showClearButton ? (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none pointer-events-auto"
                aria-label="清除輸入內容"
                tabIndex={0}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              suffixIcon && <span className="text-gray-400 pointer-events-none">{suffixIcon}</span>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };

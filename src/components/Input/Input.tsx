import React, { useState } from 'react';

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

// 眼睛圖示組件 - 顯示密碼
const EyeIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// 眼睛斜線圖示組件 - 隱藏密碼
const EyeSlashIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

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
      type = 'text',
      ...props
    },
    ref,
  ) => {
    // 密碼顯示狀態
    const [showPassword, setShowPassword] = useState(false);

    // 是否為密碼輸入框
    const isPasswordType = type === 'password';

    // 實際的輸入框類型
    const actualType = isPasswordType && showPassword ? 'text' : type;
    // 基礎樣式
    const baseStyles =
      'w-full rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

    // 變體樣式
    const variants = {
      default:
        'bg-white border border-gray-300 focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
      filled:
        'bg-gray-50 border border-transparent focus:bg-white focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
      outline:
        'bg-transparent border-2 border-gray-300 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
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
        'border-error-600 focus:border-2 focus:border-error-600 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
      success:
        'border-success-600 focus:border-2 focus:border-success-600 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]',
      warning:
        'border-warning-600 focus:border-2 focus:border-warning-600 focus:shadow-[0_0_0_3px_rgba(234,179,8,0.1)]',
    };

    // 清除按鈕處理
    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    // 密碼切換處理
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // 顯示清除按鈕的條件
    const showClearButton = clearable && value && !disabled;

    // 顯示密碼切換按鈕的條件
    const showPasswordToggle = isPasswordType && !disabled;

    // 實際的後綴圖示
    const actualSuffixIcon = showPasswordToggle ? null : suffixIcon;

    // 輸入框樣式（考慮圖示）
    const inputStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      statusStyles[status],
      prefixIcon && 'pl-10',
      (actualSuffixIcon || showClearButton || showPasswordToggle) && 'pr-10',
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
          type={actualType}
          className={inputStyles}
          disabled={disabled}
          aria-invalid={status === 'error'}
          value={value}
          {...props}
        />

        {/* 後綴圖示、清除按鈕或密碼切換按鈕 */}
        {(actualSuffixIcon || showClearButton || showPasswordToggle) && (
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
            ) : showPasswordToggle ? (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none pointer-events-auto"
                aria-label={showPassword ? '隱藏密碼' : '顯示密碼'}
                tabIndex={0}
              >
                {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            ) : (
              actualSuffixIcon && (
                <span className="text-gray-400 pointer-events-none">{actualSuffixIcon}</span>
              )
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };

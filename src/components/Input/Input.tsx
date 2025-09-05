import React, { useState } from 'react';

import {
  combineFormStyles,
  ComponentVariant,
  ComponentSize,
  ComponentStatus,
  renderClearButton,
  shouldShowClearButton,
  EyeIcon,
  EyeSlashIcon,
} from '@/utils';
import { cn } from '@/utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 輸入框的視覺樣式變體
   */
  variant?: ComponentVariant;
  /**
   * 輸入框的大小
   */
  size?: ComponentSize;
  /**
   * 輸入框的狀態
   */
  status?: ComponentStatus;
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

    // 密碼切換處理
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    // 顯示清除按鈕的條件
    const showClearButton = shouldShowClearButton(clearable || false, value, disabled || false);

    // 顯示密碼切換按鈕的條件
    const showPasswordToggle = isPasswordType && !disabled;

    // 實際的後綴圖示
    const actualSuffixIcon = showPasswordToggle ? null : suffixIcon;

    // 輸入框樣式（考慮圖示）
    const inputStyles = cn(
      'w-full',
      combineFormStyles(variant, size, status, 'input'),
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
              renderClearButton(showClearButton, onClear || (() => {}), '清除輸入內容')
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

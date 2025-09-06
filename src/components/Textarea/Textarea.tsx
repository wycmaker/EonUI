import React, { useState, useEffect } from 'react';

import {
  combineFormStyles,
  ComponentVariant,
  ComponentSize,
  ComponentStatus,
  renderClearButton,
  shouldShowClearButton,
} from '@/utils';
import { cn } from '@/utils/cn';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * 文字區域的視覺樣式變體
   */
  variant?: ComponentVariant;
  /**
   * 文字區域的大小
   */
  size?: ComponentSize;
  /**
   * 文字區域的狀態
   */
  status?: ComponentStatus;
  /**
   * 是否顯示清除按鈕
   */
  clearable?: boolean;
  /**
   * 清除按鈕的回調函數
   */
  onClear?: () => void;
  /**
   * 是否可調整大小
   */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /**
   * 最小行數
   */
  minRows?: number;
  /**
   * 最大行數
   */
  maxRows?: number;
  /**
   * 最大字數限制
   */
  maxLength?: number;
  /**
   * 是否顯示字數統計
   */
  showCount?: boolean;
  /**
   * 自動完成屬性
   */
  autoComplete?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      status = 'default',
      clearable = false,
      onClear,
      disabled,
      value,
      resize = 'vertical',
      minRows = 3,
      maxRows,
      maxLength,
      showCount = false,
      onChange,
      autoComplete = 'off',
      ...props
    },
    ref,
  ) => {
    // 內部字數狀態管理
    const [currentLength, setCurrentLength] = useState(0);

    // 同步外部 value 到內部狀態
    useEffect(() => {
      const length = typeof value === 'string' ? value.length : 0;
      setCurrentLength(length);
    }, [value]);

    // 調整大小樣式
    const resizeStyles = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };

    // 字數限制狀態
    const isOverLimit = maxLength ? currentLength > maxLength : false;
    const isNearLimit = maxLength ? currentLength >= maxLength * 0.8 : false;

    // 處理輸入變化
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      // 如果有字數限制且超出限制，阻擋輸入
      if (maxLength && newValue.length > maxLength) {
        return;
      }

      // 更新內部字數狀態
      setCurrentLength(newValue.length);

      // 調用原始的 onChange
      if (onChange) {
        onChange(e);
      }
    };

    // 清除按鈕處理
    const handleClear = () => {
      setCurrentLength(0); // 重置字數統計
      onClear?.();
    };

    // 顯示清除按鈕的條件
    const showClearButton = shouldShowClearButton(clearable || false, value, disabled || false);

    // 是否顯示字數統計
    const shouldShowCount = showCount || maxLength;

    // 計算高度的輔助函數
    const calculateHeight = (rows: number) => {
      const lineHeight = 1.5; // 所有尺寸都使用相同的行高
      const fontSize = size === 'lg' ? 16 : 14; // lg 使用 16px，其他使用 14px
      const padding = size === 'sm' ? 16 : size === 'md' ? 24 : 32; // py * 2
      return Math.ceil(rows * fontSize * lineHeight + padding);
    };

    // 文字區域樣式
    const textareaStyles = cn(
      'w-full',
      combineFormStyles(variant, size, status, 'textarea'),
      resizeStyles[resize],
      showClearButton && 'pr-10',
      shouldShowCount && 'pb-6', // 為底部字數統計留空間
      className,
    );

    const minHeight = calculateHeight(minRows);
    const maxHeight = maxRows ? calculateHeight(maxRows) : undefined;

    return (
      <div className="relative inline-block w-full">
        {/* 文字區域 */}
        <textarea
          ref={ref}
          className={textareaStyles}
          disabled={disabled}
          aria-invalid={status === 'error'}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          autoComplete={autoComplete}
          style={{
            minHeight: `${minHeight}px`,
            maxHeight: maxHeight ? `${maxHeight}px` : undefined,
          }}
          {...props}
        />

        {/* 清除按鈕 */}
        {showClearButton && (
          <div className="absolute top-3 right-3">
            {renderClearButton(showClearButton, handleClear, '清除輸入內容')}
          </div>
        )}

        {/* 字數統計 - 在輸入框內部右下角 */}
        {shouldShowCount && (
          <div
            className={cn(
              'absolute bottom-2 right-3 pointer-events-none',
              showClearButton && 'right-12', // 如果有清除按鈕，往左移避免重疊
            )}
          >
            <span
              className={cn(
                'text-xs transition-colors bg-white/80 px-1 rounded',
                isOverLimit
                  ? 'text-error font-medium'
                  : isNearLimit
                    ? 'text-warning'
                    : 'text-gray-500',
              )}
              aria-live="polite"
            >
              {maxLength ? `${currentLength}/${maxLength}` : currentLength}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };

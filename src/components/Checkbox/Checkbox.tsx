import React, { createContext, useContext } from 'react';

import { cn } from '@/utils/cn';

// CheckboxGroup Context
interface CheckboxGroupContextValue {
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Checkbox 的值
   */
  value: string | number;
  /**
   * 是否選中（受控組件）
   */
  checked?: boolean;
  /**
   * 預設是否選中（非受控組件）
   */
  defaultChecked?: boolean;
  /**
   * 是否為不確定狀態（部分選中）
   */
  indeterminate?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * Checkbox 大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 狀態顏色
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /**
   * 標籤文字
   */
  children?: React.ReactNode;
  /**
   * 值改變時的回調
   */
  onChange?: (checked: boolean, value: string | number) => void;
}

export interface CheckboxGroupProps {
  /**
   * 當前選中的值陣列
   */
  value?: (string | number)[];
  /**
   * 預設選中的值陣列
   */
  defaultValue?: (string | number)[];
  /**
   * 值改變時的回調
   */
  onChange?: (value: (string | number)[]) => void;
  /**
   * 是否禁用整個群組
   */
  disabled?: boolean;
  /**
   * Checkbox 大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 排列方向
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 子元素
   */
  children: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      value,
      checked,
      defaultChecked,
      indeterminate = false,
      disabled,
      size = 'md',
      color = 'primary',
      children,
      onChange,
      ...props
    },
    ref,
  ) => {
    const groupContext = useContext(CheckboxGroupContext);

    // 如果在 CheckboxGroup 中，使用群組的設定
    const isGrouped = !!groupContext;
    const finalSize = groupContext?.size || size;
    const finalDisabled = groupContext?.disabled || disabled;
    const finalChecked = isGrouped 
      ? groupContext.value?.includes(value) || false 
      : checked;

    // 樣式映射
    const sizeConfig = {
      sm: { checkbox: 'h-4 w-4', text: 'text-sm', gap: 'gap-2', icon: 'h-2.5 w-2.5' },
      md: { checkbox: 'h-5 w-5', text: 'text-base', gap: 'gap-2.5', icon: 'h-3 w-3' },
      lg: { checkbox: 'h-6 w-6', text: 'text-lg', gap: 'gap-3', icon: 'h-4 w-4' },
    };

    // 組合樣式
    const currentSize = sizeConfig[finalSize];
    const colorClasses = {
      primary: 'text-primary border-primary focus:ring-primary',
      secondary: 'text-secondary border-secondary focus:ring-secondary',
      success: 'text-success border-success focus:ring-success',
      warning: 'text-warning border-warning focus:ring-warning',
      error: 'text-error border-error focus:ring-error',
    };

    const checkboxClasses = cn(
      'appearance-none rounded border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 relative cursor-pointer border-gray-300 bg-white',
      currentSize.checkbox,
      (finalChecked || indeterminate) && colorClasses[color],
      (finalChecked || indeterminate) && 'bg-current',
      finalDisabled && 'cursor-not-allowed opacity-50',
      !finalDisabled && 'hover:border-gray-400',
      className,
    );

    const labelClasses = cn(
      'flex items-center cursor-pointer select-none',
      currentSize.gap,
      currentSize.text,
      finalDisabled && 'cursor-not-allowed opacity-50',
      !finalDisabled && 'hover:text-gray-700',
    );

    // 事件處理
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (finalDisabled) return;

      const isChecked = e.target.checked;

      if (isGrouped && groupContext?.onChange) {
        const currentValues = groupContext.value || [];
        let newValues: (string | number)[];
        
        if (isChecked) {
          // 添加值到陣列
          newValues = [...currentValues, value];
        } else {
          // 從陣列中移除值
          newValues = currentValues.filter(v => v !== value);
        }
        
        groupContext.onChange(newValues);
      } else if (onChange) {
        onChange(isChecked, value);
      }
    };

    // 渲染勾選標記圖示
    const renderCheckIcon = () => {
      if (indeterminate) {
        // 不確定狀態 - 顯示橫線
        return (
          <span
            className={cn(
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-white rounded-sm',
              finalSize === 'sm' ? 'h-0.5 w-2' : finalSize === 'md' ? 'h-0.5 w-2.5' : 'h-1 w-3',
            )}
            aria-hidden="true"
          />
        );
      }

      if (finalChecked) {
        // 選中狀態 - 顯示勾選標記
        return (
          <svg
            className={cn(
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-white',
              currentSize.icon,
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        );
      }

      return null;
    };

    // 渲染函數
    const renderCheckbox = () => (
      <div className="relative inline-flex">
        <input
          ref={ref}
          type="checkbox"
          name={isGrouped ? groupContext?.name : props.name}
          value={value}
          checked={finalChecked}
          defaultChecked={!isGrouped ? defaultChecked : undefined}
          disabled={finalDisabled}
          onChange={handleChange}
          className={checkboxClasses}
          aria-checked={indeterminate ? 'mixed' : finalChecked}
          aria-disabled={finalDisabled}
          {...props}
        />
        {renderCheckIcon()}
      </div>
    );

    return children ? (
      <label className={labelClasses}>
        {renderCheckbox()}
        <span>{children}</span>
      </label>
    ) : (
      renderCheckbox()
    );
  },
);

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      disabled = false,
      size = 'md',
      direction = 'vertical',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<(string | number)[]>(
      defaultValue || []
    );
    const currentValue = value ?? internalValue;

    // 生成唯一的 name 給群組
    const groupName = React.useMemo(
      () => `checkbox-group-${Math.random().toString(36).substr(2, 9)}`,
      [],
    );

    const handleChange = (newValue: (string | number)[]) => {
      if (value === undefined) setInternalValue(newValue);
      onChange?.(newValue);
    };

    const contextValue: CheckboxGroupContextValue = {
      value: currentValue,
      onChange: handleChange,
      disabled,
      size,
      name: groupName,
    };

    return (
      <CheckboxGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'flex',
            direction === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-3',
            className,
          )}
          role="group"
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    );
  },
);

Checkbox.displayName = 'Checkbox';
CheckboxGroup.displayName = 'CheckboxGroup';

export { Checkbox, CheckboxGroup };

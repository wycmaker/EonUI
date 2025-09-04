import React, { createContext, useContext } from 'react';

import { cn } from '@/utils/cn';

// RadioGroup Context
interface RadioGroupContextValue {
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Radio 的值
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
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * Radio 大小
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

export interface RadioGroupProps {
  /**
   * 當前選中的值
   */
  value?: string | number;
  /**
   * 預設選中的值
   */
  defaultValue?: string | number;
  /**
   * 值改變時的回調
   */
  onChange?: (value: string | number) => void;
  /**
   * 是否禁用整個群組
   */
  disabled?: boolean;
  /**
   * Radio 大小
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

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      value,
      checked,
      defaultChecked,
      disabled,
      size = 'md',
      color = 'primary',
      children,
      onChange,
      ...props
    },
    ref,
  ) => {
    const groupContext = useContext(RadioGroupContext);

    // 如果在 RadioGroup 中，使用群組的設定
    const isGrouped = !!groupContext;
    const finalSize = groupContext?.size || size;
    const finalDisabled = groupContext?.disabled || disabled;
    const finalChecked = isGrouped ? groupContext.value === value : checked;

    // 樣式映射
    const sizeConfig = {
      sm: { radio: 'h-4 w-4', text: 'text-sm', gap: 'gap-2', dot: 'h-1.5 w-1.5' },
      md: { radio: 'h-5 w-5', text: 'text-base', gap: 'gap-2.5', dot: 'h-2 w-2' },
      lg: { radio: 'h-6 w-6', text: 'text-lg', gap: 'gap-3', dot: 'h-2.5 w-2.5' },
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

    const radioClasses = cn(
      'appearance-none rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 relative cursor-pointer border-gray-300 bg-white',
      currentSize.radio,
      finalChecked && colorClasses[color],
      finalChecked && 'bg-current',
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

      if (isGrouped && groupContext?.onChange) {
        groupContext.onChange(value);
      } else if (onChange) {
        onChange(e.target.checked, value);
      }
    };

    // 渲染函數
    const renderRadio = () => (
      <div className="relative inline-flex">
        <input
          ref={ref}
          type="radio"
          name={isGrouped ? groupContext?.name : props.name}
          value={value}
          checked={finalChecked}
          defaultChecked={!isGrouped ? defaultChecked : undefined}
          disabled={finalDisabled}
          onChange={handleChange}
          className={radioClasses}
          aria-checked={finalChecked}
          aria-disabled={finalDisabled}
          {...props}
        />
        {finalChecked && (
          <span
            className={cn(
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full bg-white',
              currentSize.dot,
            )}
            aria-hidden="true"
          />
        )}
      </div>
    );

    return children ? (
      <label className={labelClasses}>
        {renderRadio()}
        <span>{children}</span>
      </label>
    ) : (
      renderRadio()
    );
  },
);

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
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
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const currentValue = value ?? internalValue;

    // 生成唯一的 name 給群組
    const groupName = React.useMemo(
      () => `radio-group-${Math.random().toString(36).substr(2, 9)}`,
      [],
    );

    const handleChange = (newValue: string | number) => {
      if (value === undefined) setInternalValue(newValue);
      onChange?.(newValue);
    };

    const contextValue: RadioGroupContextValue = {
      value: currentValue,
      onChange: handleChange,
      disabled,
      size,
      name: groupName,
    };

    return (
      <RadioGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'flex',
            direction === 'horizontal' ? 'flex-row flex-wrap gap-4' : 'flex-col gap-3',
            className,
          )}
          role="radiogroup"
          aria-disabled={disabled}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup };

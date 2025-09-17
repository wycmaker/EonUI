import React, { useCallback, cloneElement, isValidElement, useEffect, useMemo, memo } from 'react';

import { cn } from '@/utils/cn';

import { ValidationRule } from './Form';
import { useFormContext } from './FormContext';

export interface FormItemProps {
  /**
   * 欄位名稱
   */
  name: string;
  /**
   * 標籤文字
   */
  label?: string;
  /**
   * 是否必填
   */
  required?: boolean;
  /**
   * 驗證規則
   */
  rules?: ValidationRule[];
  /**
   * 標籤佈局
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * 標籤寬度（水平佈局時使用）
   */
  labelWidth?: string;
  /**
   * 標籤對齊方式（水平佈局時使用）
   */
  labelAlign?: 'left' | 'center' | 'right';
  /**
   * FormItem 整體寬度
   */
  width?: string;
  /**
   * FormItem 最小寬度（用於自動換行）
   */
  minWidth?: string;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 子元素（表單控制項）
   */
  children?: React.ReactNode;
}

const FormItemComponent: React.FC<FormItemProps> = ({
  name,
  label,
  required = false,
  rules = [],
  layout = 'vertical',
  labelWidth = '120px',
  labelAlign = 'right',
  width,
  minWidth,
  className,
  children,
}) => {
  const {
    values,
    setValue,
    getValue,
    getFieldError,
    setFieldError,
    validateField,
    registerField,
    unregisterField,
  } = useFormContext();

  // 註冊欄位（只在 name 變化時執行）
  useEffect(() => {
    registerField(name, rules);

    // 如果 Form 的 values 中沒有這個欄位的值，設置為空字串
    const currentValue = getValue(name);
    if (currentValue === undefined) {
      setValue(name, '');
    }

    return () => {
      unregisterField(name);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  // 更新規則（當 rules 內容變化時）
  useEffect(() => {
    registerField(name, rules);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(rules)]);

  // 統一的驗證處理函數
  const handleValidation = useCallback(
    (trigger: 'onChange' | 'onBlur', currentValue?: unknown) => {
      setTimeout(() => {
        if (rules && rules.length > 0) {
          validateField(name, rules, trigger, currentValue);
        } else {
          // 沒有驗證規則時，清除可能存在的錯誤
          setFieldError(name, null);
        }
      }, 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, rules, validateField],
  );

  // 處理值變更
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | unknown) => {
      let newValue: unknown;

      if (e && typeof e === 'object' && 'target' in e) {
        // 處理標準的 input 事件
        const target = e.target as HTMLInputElement;
        newValue = target.type === 'checkbox' ? target.checked : target.value;
      } else {
        // 處理其他組件的直接值傳遞（如 Select, DatePicker）
        newValue = e;
      }

      setValue(name, newValue);
      handleValidation('onChange', newValue);
    },
    [name, setValue, handleValidation],
  );

  // 處理失焦事件
  const handleBlur = useCallback(
    (_e: React.FocusEvent<HTMLInputElement>) => {
      handleValidation('onBlur');
    },
    [handleValidation],
  );

  // 提取當前欄位的值，避免在 useMemo 依賴中使用複雜表達式
  const fieldValue = values[name];

  // 使用 useMemo 優化 currentValue 的計算，只在該欄位值變化時重新計算
  const currentValue = useMemo(() => {
    return fieldValue || '';
  }, [fieldValue]);

  // 渲染表單控制項（使用 useMemo 優化性能）
  const renderedControl = useMemo(() => {
    if (!isValidElement(children)) {
      return children;
    }

    // 注入 value、onChange 和 onBlur 屬性
    const controlProps: Record<string, unknown> = {
      value: currentValue,
      onChange: handleChange,
      onBlur: handleBlur,
    };

    return cloneElement(children, controlProps);
  }, [children, currentValue, handleChange, handleBlur]);

  // 獲取當前欄位錯誤
  const fieldError = getFieldError(name);
  const hasError = fieldError !== null;

  // 渲染標籤
  const renderLabel = () => {
    if (!label) return null;

    return (
      <label
        className={cn(
          'block text-base font-bold text-gray-700',
          required && 'after:content-["*"] after:text-red-500 after:ml-1',
          hasError && 'text-red-600',
        )}
      >
        {label}
      </label>
    );
  };

  // 渲染錯誤訊息
  const renderError = () => {
    if (!hasError) return null;

    return (
      <div
        className="mt-1 text-sm text-red-600"
        role="alert"
      >
        {fieldError.message}
      </div>
    );
  };

  // 垂直佈局
  if (layout === 'vertical') {
    return (
      <div className={cn('space-y-2', className)}>
        {renderLabel()}
        {renderedControl}
        {renderError()}
      </div>
    );
  }

  // 水平佈局
  const containerStyles: React.CSSProperties = {
    ...(width && { width }),
    ...(minWidth && { minWidth }),
  };

  return (
    <div
      className={cn('inline-block', className)}
      style={containerStyles}
    >
      <div className="flex items-center space-x-2">
        <div
          className={cn(
            'flex-shrink-0',
            labelAlign === 'left' && 'text-left',
            labelAlign === 'center' && 'text-center',
            labelAlign === 'right' && 'text-right',
          )}
          style={{ width: labelWidth }}
        >
          {renderLabel()}
        </div>
        <div className="flex-1 min-w-0">{renderedControl}</div>
      </div>
      {hasError && (
        <div
          className="mt-1"
          style={{ marginLeft: `calc(${labelWidth} + 0.5rem)` }}
        >
          {renderError()}
        </div>
      )}
    </div>
  );
};

// 使用 React.memo 優化 FormItem 性能
// 重點：FormItem 的重渲染主要由 Context 中的 values 變化觸發
// 我們無法完全避免這個問題，但可以通過 memo 減少子組件的重渲染
const MemoizedFormItem = memo(FormItemComponent);

MemoizedFormItem.displayName = 'FormItem';

export { MemoizedFormItem as FormItem };

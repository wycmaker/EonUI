import React, { useState, useCallback } from 'react';

import { cn } from '@/utils/cn';

import { FormContext, FormContextValue } from './FormContext';

// 驗證觸發時機
export type ValidationTrigger = 'onChange' | 'onBlur' | 'onSubmit';

// 驗證規則類型
export interface ValidationRule {
  /**
   * 是否必填
   */
  required?: boolean;
  /**
   * 最小長度
   */
  minLength?: number;
  /**
   * 最大長度
   */
  maxLength?: number;
  /**
   * 正規表達式驗證
   */
  pattern?: RegExp;
  /**
   * 自訂驗證函數
   */
  validator?: (value: unknown) => string | null;
  /**
   * 錯誤訊息
   */
  message?: string;
  /**
   * 驗證觸發時機
   */
  trigger?: ValidationTrigger | ValidationTrigger[];
}

// 欄位錯誤類型
export interface FieldError {
  message: string;
  rule?: string;
}

// 欄位配置
interface FieldConfig {
  name: string;
  rules: ValidationRule[];
}

// 表單狀態
interface FormState {
  values: Record<string, unknown>;
  errors: Record<string, FieldError | null>;
  fields: Record<string, FieldConfig>;
}

// Form Props
export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /**
   * 初始值
   */
  initialValues?: Record<string, unknown>;
  /**
   * 表單提交處理
   */
  onSubmit?: (values: Record<string, unknown>) => void;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// Form 組件
export const Form: React.FC<FormProps> = ({
  initialValues = {},
  onSubmit,
  className,
  children,
  ...props
}) => {
  // 表單狀態管理
  const [formState, setFormState] = useState<FormState>({
    values: { ...initialValues },
    errors: {},
    fields: {},
  });

  // 設定欄位值
  const setValue = useCallback((name: string, value: unknown) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  }, []);

  // 獲取欄位值
  const getValue = useCallback(
    (name: string) => {
      return formState.values[name];
    },
    [formState.values],
  );

  // 設定欄位錯誤
  const setFieldError = useCallback((name: string, error: FieldError | null) => {
    setFormState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: error,
      },
    }));
  }, []);

  // 獲取欄位錯誤
  const getFieldError = useCallback(
    (name: string) => {
      return formState.errors[name] || null;
    },
    [formState.errors],
  );

  // 註冊欄位
  const registerField = useCallback((name: string, rules: ValidationRule[] = []) => {
    setFormState((prev) => ({
      ...prev,
      fields: {
        ...prev.fields,
        [name]: { name, rules },
      },
    }));
  }, []);

  // 取消註冊欄位
  const unregisterField = useCallback((name: string) => {
    setFormState((prev) => {
      const { [name]: _removed, ...restFields } = prev.fields;
      const { [name]: _removedError, ...restErrors } = prev.errors;
      const { [name]: _removedValue, ...restValues } = prev.values;
      return {
        ...prev,
        fields: restFields,
        errors: restErrors,
        values: restValues,
      };
    });
  }, []);

  // 驗證單個欄位（支援觸發時機過濾）
  const validateField = useCallback(
    (
      name: string,
      rules: ValidationRule[] = [],
      trigger?: ValidationTrigger,
      currentValue?: unknown,
    ) => {
      const value = currentValue !== undefined ? currentValue : formState.values[name];

      // 如果指定了觸發時機，只驗證匹配的規則
      const rulesToValidate = trigger
        ? rules.filter((rule) => {
            if (!rule.trigger) return true; // 沒有指定 trigger 的規則總是執行
            const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger];
            return triggers.includes(trigger);
          })
        : rules;

      for (const rule of rulesToValidate) {
        // 必填驗證
        if (rule.required && (value === undefined || value === null || value === '')) {
          const error: FieldError = {
            message: rule.message || `${name} 為必填欄位`,
            rule: 'required',
          };
          setFieldError(name, error);
          return false;
        }

        // 如果值為空且非必填，跳過其他驗證
        if (!rule.required && (value === undefined || value === null || value === '')) {
          continue;
        }

        // 最小長度驗證
        if (rule.minLength !== undefined && typeof value === 'string') {
          if (value.length < rule.minLength) {
            const error: FieldError = {
              message: rule.message || `${name} 最少需要 ${rule.minLength} 個字元`,
              rule: 'minLength',
            };
            setFieldError(name, error);
            return false;
          }
        }

        // 最大長度驗證
        if (rule.maxLength !== undefined && typeof value === 'string') {
          if (value.length > rule.maxLength) {
            const error: FieldError = {
              message: rule.message || `${name} 最多只能 ${rule.maxLength} 個字元`,
              rule: 'maxLength',
            };
            setFieldError(name, error);
            return false;
          }
        }

        // 正規表達式驗證
        if (rule.pattern && typeof value === 'string') {
          if (!rule.pattern.test(value)) {
            const error: FieldError = {
              message: rule.message || `${name} 格式不正確`,
              rule: 'pattern',
            };
            setFieldError(name, error);
            return false;
          }
        }

        // 自訂驗證函數
        if (rule.validator) {
          const result = rule.validator(value);
          if (result) {
            const error: FieldError = {
              message: result,
              rule: 'custom',
            };
            setFieldError(name, error);
            return false;
          }
        }
      }

      // 所有驗證通過，清除錯誤
      setFieldError(name, null);
      return true;
    },
    [formState.values, setFieldError],
  );

  // 驗證整個表單
  const validateForm = useCallback(() => {
    let isValid = true;
    const fieldNames = Object.keys(formState.fields);

    // 驗證所有註冊的欄位（不指定 trigger，驗證所有規則）
    fieldNames.forEach((name) => {
      const field = formState.fields[name];
      if (field) {
        const fieldValid = validateField(name, field.rules);
        if (!fieldValid) {
          isValid = false;
        }
      }
    });

    return isValid;
  }, [formState.fields, validateField]);

  // 表單提交處理
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 提交前進行全面驗證
      const isValid = validateForm();

      if (isValid && onSubmit) {
        onSubmit(formState.values);
      }
    },
    [onSubmit, formState.values, validateForm],
  );

  // Context 值（簡化依賴避免循環引用）
  const contextValue: FormContextValue = {
    values: formState.values,
    errors: formState.errors,
    setValue,
    getValue,
    setFieldError,
    getFieldError,
    validateField,
    validateForm,
    registerField,
    unregisterField,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        className={cn('space-y-4', className)}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

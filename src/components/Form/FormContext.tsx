import { createContext, useContext } from 'react';

import { ValidationRule, FieldError, ValidationTrigger } from './Form';

/**
 * Form Context 值的介面定義
 * 包含表單狀態和操作方法
 */
export interface FormContextValue {
  // 表單狀態
  values: Record<string, unknown>;
  errors: Record<string, FieldError | null>;

  // 值操作
  setValue: (name: string, value: unknown) => void;
  getValue: (name: string) => unknown;

  // 錯誤操作
  setFieldError: (name: string, error: FieldError | null) => void;
  getFieldError: (name: string) => FieldError | null;

  // 驗證操作
  validateField: (
    name: string,
    rules?: ValidationRule[],
    trigger?: ValidationTrigger,
    currentValue?: unknown,
  ) => boolean;
  validateForm: () => boolean;

  // 欄位註冊
  registerField: (name: string, rules?: ValidationRule[]) => void;
  unregisterField: (name: string) => void;
}

/**
 * Form Context
 * 用於在 Form 組件樹中共享表單狀態和方法
 */
export const FormContext = createContext<FormContextValue | null>(null);

/**
 * useFormContext Hook
 * 獲取 Form Context 的值，必須在 Form 組件內使用
 */
export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a Form component');
  }
  return context;
};

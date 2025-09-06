import { ValidationRule, ValidationTrigger } from './Form';

/**
 * 驗證規則工廠函數集合
 * 提供常用的表單驗證規則
 */
export const Rules = {
  /**
   * 必填驗證
   */
  required: (
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    required: true,
    message,
    trigger,
  }),

  /**
   * 最小長度驗證
   */
  minLength: (
    length: number,
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    minLength: length,
    message,
    trigger,
  }),

  /**
   * 最大長度驗證
   */
  maxLength: (
    length: number,
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    maxLength: length,
    message,
    trigger,
  }),

  /**
   * 電子郵件驗證
   */
  email: (message?: string, trigger?: ValidationTrigger | ValidationTrigger[]): ValidationRule => ({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: message || '請輸入有效的電子郵件地址',
    trigger,
  }),

  /**
   * 手機號碼驗證（台灣格式）
   */
  phone: (message?: string, trigger?: ValidationTrigger | ValidationTrigger[]): ValidationRule => ({
    pattern: /^09\d{8}$/,
    message: message || '請輸入有效的手機號碼（09xxxxxxxx）',
    trigger,
  }),

  /**
   * 數字驗證
   */
  number: (
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    pattern: /^\d+$/,
    message: message || '請輸入有效的數字',
    trigger,
  }),

  /**
   * 自訂正規表達式驗證
   */
  pattern: (
    regex: RegExp,
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    pattern: regex,
    message,
    trigger,
  }),

  /**
   * 自訂驗證函數
   */
  custom: (
    validator: (value: unknown) => string | null,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    validator,
    trigger,
  }),

  /**
   * 密碼強度驗證
   */
  password: (
    message?: string,
    trigger?: ValidationTrigger | ValidationTrigger[],
  ): ValidationRule => ({
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
    message: message || '密碼必須包含至少8個字元，包括大小寫字母和數字',
    trigger,
  }),
};

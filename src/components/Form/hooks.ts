import { useFormContext } from './FormContext';

/**
 * 表單操作 Hook
 * 提供表單的常用操作方法
 */
export const useForm = () => {
  const context = useFormContext();

  return {
    // 獲取單個欄位值
    getFieldValue: context.getValue,

    // 獲取所有欄位值
    getFieldsValue: () => context.values,

    // 設置多個欄位值
    setFieldsValue: (values: Record<string, unknown>) => {
      Object.entries(values).forEach(([name, value]) => {
        context.setValue(name, value);
      });
    },

    // 驗證所有欄位
    validateFields: context.validateForm,

    // 重置表單
    resetFields: () => {
      Object.keys(context.values).forEach((name) => {
        context.setValue(name, '');
        context.setFieldError(name, null);
      });
    },
  };
};

// 導出驗證規則
export { Rules } from './Rules';

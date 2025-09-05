import { useState, useCallback } from 'react';

/**
 * 受控/非受控值管理 Hook
 *
 * @param value - 外部控制的值
 * @param defaultValue - 預設值
 * @param onChange - 值變更回調
 */
export const useControlledValue = <T>(
  value: T | undefined,
  defaultValue: T | undefined,
  onChange?: (newValue: T | undefined) => void,
) => {
  const [internalValue, setInternalValue] = useState<T | undefined>(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = useCallback(
    (newValue: T | undefined) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange],
  );

  return [currentValue, setValue] as const;
};

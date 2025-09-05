import { useMemo } from 'react';

/**
 * 群組 Context 的通用 Hook
 *
 * @param prefix - 群組名稱前綴 (如 'radio-group', 'checkbox-group')
 */
export const useUniqueGroupName = (prefix: string) => {
  return useMemo(() => `${prefix}-${Math.random().toString(36).substr(2, 9)}`, [prefix]);
};

import { ClearIcon } from './icons';

/**
 * 可清除功能的共用邏輯
 */

export interface ClearableProps {
  clearable?: boolean;
  onClear?: () => void;
  disabled?: boolean;
  value?: string | number | readonly string[] | (string | number)[] | null | undefined;
}

/**
 * 渲染清除按鈕
 */
export const renderClearButton = (
  showClearButton: boolean,
  onClear: () => void,
  ariaLabel: string = '清除輸入內容',
) => {
  if (!showClearButton) return null;

  return (
    <button
      type="button"
      onClick={onClear}
      className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none pointer-events-auto"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <ClearIcon />
    </button>
  );
};

/**
 * 判斷是否顯示清除按鈕
 */
export const shouldShowClearButton = (
  clearable: boolean,
  value: string | number | readonly string[] | (string | number)[] | null | undefined,
  disabled: boolean,
): boolean => {
  if (!clearable || disabled) return false;

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== undefined && value !== null && value !== '';
};

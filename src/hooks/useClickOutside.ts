import { useEffect, useCallback, RefObject } from 'react';

/**
 * 點擊外部關閉的 Hook
 *
 * @param ref - 要監聽的元素 ref
 * @param callback - 點擊外部時的回調函數
 * @param enabled - 是否啟用監聽，預設為 true
 */
export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  enabled: boolean = true,
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback],
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, enabled]);
};

import { useEffect, useCallback } from 'react';

type KeyboardNavigationOptions = {
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  onTab?: () => void;
  enabled?: boolean;
};

/**
 * 鍵盤導航 Hook
 *
 * @param options - 鍵盤事件處理選項
 */
export const useKeyboardNavigation = (options: KeyboardNavigationOptions) => {
  const { onArrowUp, onArrowDown, onEnter, onEscape, onTab, enabled = true } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          onArrowUp?.();
          break;
        case 'ArrowDown':
          event.preventDefault();
          onArrowDown?.();
          break;
        case 'Enter':
          event.preventDefault();
          onEnter?.();
          break;
        case 'Escape':
          onEscape?.();
          break;
        case 'Tab':
          onTab?.();
          break;
      }
    },
    [enabled, onArrowUp, onArrowDown, onEnter, onEscape, onTab],
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, enabled]);
};

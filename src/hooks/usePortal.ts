import { useCallback, useEffect, useState, RefObject } from 'react';

export interface PortalPosition {
  top: number;
  left: number;
  width: number;
}

export interface UsePortalOptions {
  /**
   * 觸發元素的 ref
   */
  triggerRef: RefObject<HTMLElement | null>;
  /**
   * 是否開啟 Portal
   */
  isOpen: boolean;
  /**
   * Portal 相對觸發元素的垂直偏移量（預設 4px）
   */
  offset?: number;
  /**
   * 是否啟用滾動和視窗變化監聽（預設 true）
   */
  enableRepositioning?: boolean;
}

export interface UsePortalReturn {
  /**
   * Portal 位置資訊
   */
  position: PortalPosition;
  /**
   * 計算位置的函數
   */
  calculatePosition: () => void;
}

/**
 * Portal 定位的 Hook
 *
 * 提供 Portal 彈出層的位置計算和自動更新功能
 *
 * @param options - Portal 配置選項
 * @returns Portal 位置資訊和計算函數
 *
 * @example
 * ```tsx
 * const triggerRef = useRef<HTMLDivElement>(null);
 * const { position, calculatePosition } = usePortal({
 *   triggerRef,
 *   isOpen,
 *   offset: 4,
 * });
 *
 * const handleOpen = () => {
 *   calculatePosition();
 *   setIsOpen(true);
 * };
 *
 * return (
 *   <>
 *     <div ref={triggerRef} onClick={handleOpen}>觸發元素</div>
 *     {isOpen && createPortal(
 *       <div
 *         style={{
 *           position: 'absolute',
 *           top: position.top,
 *           left: position.left,
 *           minWidth: position.width,
 *         }}
 *       >
 *         Portal 內容
 *       </div>,
 *       document.body
 *     )}
 *   </>
 * );
 * ```
 */
export const usePortal = ({
  triggerRef,
  isOpen,
  offset = 4,
  enableRepositioning = true,
}: UsePortalOptions): UsePortalReturn => {
  const [position, setPosition] = useState<PortalPosition>({
    top: 0,
    left: 0,
    width: 0,
  });

  // 計算 Portal 位置
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + window.scrollY + offset,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, [triggerRef, offset]);

  // 監聽滾動和視窗大小變化，重新計算位置
  useEffect(() => {
    if (!isOpen || !enableRepositioning) return;

    const handleReposition = () => {
      calculatePosition();
    };

    // 使用 capture 模式監聽所有滾動事件
    window.addEventListener('scroll', handleReposition, true);
    window.addEventListener('resize', handleReposition);

    return () => {
      window.removeEventListener('scroll', handleReposition, true);
      window.removeEventListener('resize', handleReposition);
    };
  }, [isOpen, enableRepositioning, calculatePosition]);

  return {
    position,
    calculatePosition,
  };
};

import React, { useState, useEffect, useRef, useCallback } from 'react';

import { createPortal } from 'react-dom';

import { useClickOutside } from '@/hooks';
import { cn } from '@/utils/cn';

import { CloseButton } from '../Button/CloseButton';

export interface ModalProps {
  /**
   * 是否顯示 Modal
   */
  visible?: boolean;
  /**
   * 預設是否顯示 Modal
   */
  defaultVisible?: boolean;
  /**
   * 點擊遮罩是否關閉 Modal
   */
  maskClosable?: boolean;
  /**
   * 是否顯示關閉按鈕
   */
  closable?: boolean;
  /**
   * Modal 標題
   */
  title?: React.ReactNode;
  /**
   * Modal 寬度
   */
  width?: string | number;
  /**
   * Modal 高度
   */
  height?: string | number;
  /**
   * Modal 大小預設值
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * 頁腳內容
   */
  footer?: React.ReactNode;
  /**
   * Modal 自訂 CSS 類名
   */
  className?: string;
  /**
   * 動畫持續時間（毫秒）
   */
  animationDuration?: number;
  /**
   * 是否禁用動畫
   */
  disableAnimation?: boolean;
  /**
   * 關閉時的回調
   */
  onClose?: () => void;
  /**
   * 開啟時的回調
   */
  onOpen?: () => void;
  /**
   * 動畫結束後的回調
   */
  onAnimationEnd?: (phase: 'enter' | 'exit') => void;
  /**
   * Modal 內容
   */
  children?: React.ReactNode;
  /**
   * 唯一識別碼（用於 Service）
   */
  id?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      visible,
      defaultVisible = false,
      maskClosable = true,
      closable = true,
      title,
      width,
      height,
      size = 'md',
      footer,
      className,
      animationDuration = 300,
      disableAnimation = false,
      onClose,
      onOpen,
      onAnimationEnd,
      children,
      id,
    },
    _ref,
  ) => {
    const [internalVisible, setInternalVisible] = useState(defaultVisible);
    const [isAnimating, setIsAnimating] = useState(true); // 初始設為 true，確保動畫狀態
    const [shouldRender, setShouldRender] = useState(visible ?? defaultVisible);
    const modalRef = useRef<HTMLDivElement>(null);
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const isVisible = visible !== undefined ? visible : internalVisible;

    // 大小配置
    const sizeConfig = {
      sm: { width: '400px', height: undefined },
      md: { width: '600px', height: undefined },
      lg: { width: '800px', height: undefined },
      xl: { width: '1000px', height: undefined },
      full: { width: '95vw', height: '95vh' },
    };

    const currentSizeConfig = sizeConfig[size];

    // 計算 Modal 樣式
    const modalStyles: React.CSSProperties = {
      width: width || currentSizeConfig.width,
      height: height || currentSizeConfig.height,
    };

    // 監聽 visible 變化
    useEffect(() => {
      if (isVisible) {
        // 開啟 Modal
        setShouldRender(true);
        setIsAnimating(true); // 開始時設為動畫狀態

        if (disableAnimation) {
          // 如果禁用動畫，立即設為最終狀態
          setIsAnimating(false);
          onOpen?.();
          onAnimationEnd?.('enter');
        } else {
          onOpen?.();

          // 使用 setTimeout 而不是 requestAnimationFrame，確保更可靠的時機
          const timer = setTimeout(() => {
            setIsAnimating(false); // 觸發進入動畫
          }, 10); // 給一個小延遲確保 DOM 渲染

          // 動畫結束回調
          const endTimer = setTimeout(() => {
            onAnimationEnd?.('enter');
          }, animationDuration + 50); // 稍微延遲確保動畫完成

          return () => {
            clearTimeout(timer);
            clearTimeout(endTimer);
          };
        }
      } else {
        // 關閉 Modal
        if (disableAnimation) {
          setShouldRender(false);
          onAnimationEnd?.('exit');
        } else {
          setIsAnimating(true); // 立即設為退出動畫狀態

          // 動畫結束後隱藏
          animationTimeoutRef.current = setTimeout(() => {
            setShouldRender(false);
            onAnimationEnd?.('exit');
          }, animationDuration);
        }
      }

      return () => {
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
          animationTimeoutRef.current = null;
        }
      };
    }, [isVisible, disableAnimation, animationDuration, onOpen, onAnimationEnd]);

    // 處理關閉
    const handleClose = useCallback(() => {
      if (visible === undefined) {
        setInternalVisible(false);
      }
      onClose?.();
    }, [visible, onClose]);

    // 處理遮罩點擊
    const handleMaskClick = useCallback(
      (e: React.MouseEvent) => {
        if (maskClosable && e.target === e.currentTarget) {
          handleClose();
        }
      },
      [maskClosable, handleClose],
    );

    // 點擊外部關閉
    useClickOutside([modalRef], handleClose, isVisible && maskClosable);

    // 防止滾動穿透
    useEffect(() => {
      if (shouldRender) {
        // 計算滾動條寬度
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        // 保存原始樣式
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        // 設置樣式防止滾動，同時保留滾動條空間
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
          // 恢復原始樣式
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = originalPaddingRight;
        };
      }
      return undefined;
    }, [shouldRender]);

    // 鍵盤事件處理
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isVisible && closable) {
          handleClose();
        }
      };

      if (shouldRender) {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }
      return undefined;
    }, [shouldRender, isVisible, closable, handleClose]);

    // 焦點管理
    useEffect(() => {
      if (isVisible && modalRef.current) {
        // 保存當前聚焦的元素
        const previousActiveElement = document.activeElement as HTMLElement;

        // 聚焦到 Modal
        modalRef.current.focus();

        // 焦點困在 Modal 內
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab' && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement?.focus();
              }
            } else {
              // Tab
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement?.focus();
              }
            }
          }
        };

        document.addEventListener('keydown', handleTabKey);

        return () => {
          document.removeEventListener('keydown', handleTabKey);
          // 恢復之前的焦點
          if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
            previousActiveElement.focus();
          }
        };
      }
      return undefined;
    }, [isVisible]);

    if (!shouldRender) {
      return null;
    }

    const modalContent = (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleMaskClick}
        data-modal-mask
      >
        {/* 遮罩背景 */}
        <div
          className={cn(
            'absolute inset-0 bg-black',
            disableAnimation ? 'opacity-50' : isAnimating ? 'opacity-0' : 'opacity-50',
          )}
          style={{
            transition: disableAnimation ? 'none' : `opacity ${animationDuration}ms ease-out`,
          }}
        />

        {/* Modal 主體 */}
        <div
          ref={modalRef}
          className={cn(
            'relative bg-white rounded-lg shadow-xl flex flex-col max-h-full max-w-[95vw]',
            'focus:outline-none',
            disableAnimation
              ? 'translate-y-0 opacity-100 scale-100'
              : isAnimating
                ? '-translate-y-12 opacity-0 scale-90'
                : 'translate-y-0 opacity-100 scale-100',
            className,
          )}
          style={{
            ...modalStyles,
            transition: disableAnimation
              ? 'none'
              : `all ${animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transformOrigin: 'center center',
          }}
          onClick={(e) => e.stopPropagation()}
          data-modal-id={id}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? `modal-title-${id}` : undefined}
          aria-describedby={`modal-content-${id}`}
          tabIndex={-1}
        >
          {/* 標題列 */}
          {(title || closable) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 modal-title">
              {title && (
                <h2
                  id={`modal-title-${id}`}
                  className="text-lg font-semibold flex-1 pr-4"
                >
                  {title}
                </h2>
              )}
              {closable && (
                <CloseButton
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 modal-close"
                  size="md"
                  ariaLabel="關閉對話框"
                />
              )}
            </div>
          )}

          {/* 內容區域 */}
          <div
            id={`modal-content-${id}`}
            className="flex-1 px-6 py-4 overflow-auto modal-body"
          >
            {children}
          </div>

          {/* 頁腳 */}
          {footer && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg modal-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    );

    return createPortal(modalContent, document.body);
  },
);

Modal.displayName = 'Modal';

export { Modal };

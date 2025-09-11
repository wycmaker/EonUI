import React, { useState, useEffect, useRef, useCallback } from 'react';

import { createPortal } from 'react-dom';

import { cn } from '@/utils/cn';
import {
  CheckCircleIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
  ErrorCircleIcon,
} from '@/utils/icons';

import { CloseButton } from '../Button/CloseButton';

export type MessageBoxType = 'info' | 'success' | 'warning' | 'error';
export type MessageBoxVariant = 'alert' | 'confirm';

export interface MessageBoxProps {
  /**
   * 是否顯示 MessageBox
   */
  visible?: boolean;
  /**
   * MessageBox 變體
   */
  variant?: MessageBoxVariant;
  /**
   * 消息類型
   */
  type?: MessageBoxType;
  /**
   * 標題
   */
  title?: React.ReactNode;
  /**
   * 內容
   */
  content?: React.ReactNode;
  /**
   * 自訂圖示
   */
  icon?: React.ReactNode;
  /**
   * 是否顯示圖示
   */
  showIcon?: boolean;
  /**
   * 是否顯示關閉按鈕
   */
  closable?: boolean;
  /**
   * 確認按鈕文字
   */
  okText?: string;
  /**
   * 取消按鈕文字
   */
  cancelText?: string;
  /**
   * 關閉時的回調
   */
  onClose?: () => void;
  /**
   * 確認時的回調
   */
  onOk?: () => void | Promise<void>;
  /**
   * 取消時的回調
   */
  onCancel?: () => void;
  /**
   * 動畫結束後的回調
   */
  onAnimationEnd?: (phase: 'enter' | 'exit') => void;
  /**
   * 唯一識別碼（用於 Service）
   */
  id?: string;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
}

// MessageBox 圖示組件
const MessageBoxIcon: React.FC<{ type: MessageBoxType; className?: string }> = ({
  type,
  className,
}) => {
  const icons = {
    info: <InfoCircleIcon className={className} />,
    success: <CheckCircleIcon className={className} />,
    warning: <WarningTriangleIcon className={className} />,
    error: <ErrorCircleIcon className={className} />,
  };

  return icons[type] || icons.info;
};

const MessageBox = React.forwardRef<HTMLDivElement, MessageBoxProps>(
  (
    {
      visible = false,
      variant = 'alert',
      type = 'info',
      title,
      content,
      icon,
      showIcon = true,
      closable = true,
      okText,
      cancelText,
      onClose,
      onOk,
      onCancel,
      onAnimationEnd,
      id,
      className,
    },
    _ref,
  ) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(visible);
    const [isOkLoading, setIsOkLoading] = useState(false);
    const messageBoxRef = useRef<HTMLDivElement>(null);
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 監聽 visible 變化
    useEffect(() => {
      const animationDuration = 300; // 固定動畫時間 300ms

      if (visible) {
        // 開啟 MessageBox
        setShouldRender(true);
        setIsAnimating(true);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsAnimating(false);
          });
        });

        const timer = setTimeout(() => {
          onAnimationEnd?.('enter');
        }, animationDuration);

        return () => clearTimeout(timer);
      } else {
        // 關閉 MessageBox
        setIsAnimating(true);
        animationTimeoutRef.current = setTimeout(() => {
          setShouldRender(false);
          setIsAnimating(false);
          onAnimationEnd?.('exit');
        }, animationDuration);
      }

      return () => {
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
          animationTimeoutRef.current = null;
        }
      };
    }, [visible, onAnimationEnd]);

    // 處理關閉
    const handleClose = useCallback(() => {
      onClose?.();
    }, [onClose]);

    // 處理確認
    const handleOk = useCallback(async () => {
      if (onOk) {
        try {
          setIsOkLoading(true);
          await onOk();
          setIsOkLoading(false);
          handleClose();
        } catch (error) {
          setIsOkLoading(false);
          // eslint-disable-next-line no-console
          console.error('MessageBox onOk error:', error);
        }
      } else {
        handleClose();
      }
    }, [onOk, handleClose]);

    // 處理取消
    const handleCancel = useCallback(() => {
      onCancel?.();
      handleClose();
    }, [onCancel, handleClose]);

    // 處理遮罩點擊（禁用點擊遮罩關閉）
    const handleMaskClick = useCallback((e: React.MouseEvent) => {
      // 不允許點擊遮罩關閉
      e.stopPropagation();
    }, []);

    // 鍵盤事件處理
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!visible) return;

        if (e.key === 'Escape') {
          if (variant === 'confirm') {
            handleCancel();
          } else if (closable) {
            handleClose();
          }
        } else if (e.key === 'Enter') {
          handleOk();
        }
      };

      if (shouldRender) {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }
      return undefined;
    }, [shouldRender, visible, variant, closable, handleClose, handleCancel, handleOk]);

    // 防止滾動穿透
    useEffect(() => {
      if (shouldRender) {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const originalOverflow = document.body.style.overflow;
        const originalPaddingRight = document.body.style.paddingRight;

        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`;

        return () => {
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = originalPaddingRight;
        };
      }
      return undefined;
    }, [shouldRender]);

    if (!shouldRender) {
      return null;
    }

    // 獲取預設按鈕文字
    const getDefaultOkText = () => {
      if (okText) return okText;
      return variant === 'confirm' ? '確定' : '知道了';
    };

    const getDefaultCancelText = () => {
      return cancelText || '取消';
    };

    // 獲取類型相關樣式
    const getTypeStyles = () => {
      const styles = {
        info: {
          iconColor: 'text-blue-500',
          titleColor: 'text-gray-900',
        },
        success: {
          iconColor: 'text-green-500',
          titleColor: 'text-gray-900',
        },
        warning: {
          iconColor: 'text-yellow-500',
          titleColor: 'text-gray-900',
        },
        error: {
          iconColor: 'text-red-500',
          titleColor: 'text-gray-900',
        },
      };

      return styles[type];
    };

    const typeStyles = getTypeStyles();

    const messageBoxContent = (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={handleMaskClick}
        data-messagebox-mask
      >
        {/* 遮罩背景 */}
        <div
          className={cn(
            'absolute inset-0 bg-black transition-opacity',
            isAnimating ? 'opacity-0' : 'opacity-50',
          )}
          style={{
            transitionDuration: '300ms',
            transitionTimingFunction: 'ease-out',
          }}
        />

        {/* MessageBox 主體 */}
        <div
          ref={messageBoxRef}
          className={cn(
            'relative bg-white rounded-lg shadow-xl flex flex-col transition-all max-w-md w-full mx-4',
            isAnimating
              ? '-translate-y-12 opacity-0 scale-90'
              : 'translate-y-0 opacity-100 scale-100',
            className,
          )}
          style={{
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            transformOrigin: 'center top',
          }}
          onClick={(e) => e.stopPropagation()}
          data-messagebox-id={id}
        >
          {/* 關閉按鈕 */}
          {closable && variant === 'alert' && (
            <div className="absolute top-4 right-4 z-10">
              <CloseButton
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
                size="md"
                ariaLabel="關閉對話框"
              />
            </div>
          )}

          {/* 內容區域 */}
          <div className="px-6 py-6">
            {/* 標題與圖示 */}
            {(title || showIcon) && (
              <div className="flex items-center mb-4">
                {showIcon && (
                  <div className="flex-shrink-0 mr-3">
                    {icon ? (
                      <div className={cn('h-6 w-6', typeStyles.iconColor)}>{icon}</div>
                    ) : (
                      <MessageBoxIcon
                        type={type}
                        className={cn('h-6 w-6', typeStyles.iconColor)}
                      />
                    )}
                  </div>
                )}
                {title && (
                  <h2
                    className={cn(
                      'text-lg font-semibold flex-1',
                      typeStyles.titleColor,
                      closable && variant === 'alert' ? 'pr-8' : '',
                    )}
                  >
                    {title}
                  </h2>
                )}
              </div>
            )}

            {/* 內容文字 */}
            {content && (
              <div className={cn('text-sm text-gray-700', title || showIcon ? '' : 'mb-6')}>
                {content}
              </div>
            )}

            {/* 按鈕區域 */}
            <div className="flex justify-end space-x-3 mt-6">
              {variant === 'confirm' && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  {getDefaultCancelText()}
                </button>
              )}
              <button
                type="button"
                onClick={handleOk}
                disabled={isOkLoading}
                className={cn(
                  'px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
                  type === 'error'
                    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                    : type === 'warning'
                      ? 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
                      : type === 'success'
                        ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                        : 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
                  isOkLoading && 'opacity-75 cursor-not-allowed',
                )}
              >
                {isOkLoading && (
                  <svg
                    className="w-4 h-4 mr-2 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {getDefaultOkText()}
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    return createPortal(messageBoxContent, document.body);
  },
);

MessageBox.displayName = 'MessageBox';

export { MessageBox };

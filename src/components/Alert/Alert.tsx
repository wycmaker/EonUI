import React, { useState, useEffect, useRef, useCallback } from 'react';

import { cn } from '@/utils/cn';
import {
  getAlertTypeStyles,
  getBaseAlertStyles,
  AlertType as FormAlertType,
} from '@/utils/formStyles';
import {
  CheckCircleIcon,
  InfoCircleIcon,
  WarningTriangleIcon,
  ErrorCircleIcon,
} from '@/utils/icons';

import { CloseButton } from '../Button/CloseButton';

export type AlertType = FormAlertType;
export type AlertPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface AlertProps {
  /**
   * Alert 的類型樣式
   */
  type?: AlertType;
  /**
   * Alert 的顯示位置
   */
  position?: AlertPosition;
  /**
   * 是否顯示關閉按鈕
   */
  closable?: boolean;
  /**
   * 自動關閉時間（毫秒），設為 0 則不自動關閉
   */
  duration?: number;
  /**
   * 是否顯示圖示
   */
  showIcon?: boolean;
  /**
   * 自訂圖示
   */
  icon?: React.ReactNode;
  /**
   * Alert 標題
   */
  title?: string;
  /**
   * Alert 內容
   */
  children?: React.ReactNode;
  /**
   * 關閉時的回調函數
   */
  onClose?: () => void;
  /**
   * 是否可見
   */
  visible?: boolean;
  /**
   * 唯一識別碼
   */
  id?: string;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
}

// Alert 圖示組件
const AlertIcon: React.FC<{ type: AlertType; className?: string }> = ({ type, className }) => {
  const icons = {
    primary: <CheckCircleIcon className={className} />,
    success: <CheckCircleIcon className={className} />,
    info: <InfoCircleIcon className={className} />,
    warning: <WarningTriangleIcon className={className} />,
    error: <ErrorCircleIcon className={className} />,
  };

  return icons[type] || icons.info;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      type = 'info',
      position = 'top-right',
      closable = true,
      duration = 3000,
      showIcon = true,
      icon,
      title,
      children,
      onClose,
      visible = true,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = useState(visible);
    const [isAnimating, setIsAnimating] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // 使用共用樣式系統
    const currentStyles = getAlertTypeStyles(type);

    const handleClose = useCallback(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 300); // 動畫持續時間
    }, [onClose]);

    // 處理自動關閉
    useEffect(() => {
      if (visible && duration > 0) {
        timerRef.current = setTimeout(() => {
          handleClose();
        }, duration);

        return () => {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
        };
      }
      return undefined;
    }, [visible, duration, handleClose]);

    // 處理 visible 屬性變化
    useEffect(() => {
      if (visible !== isVisible) {
        if (visible) {
          setIsVisible(true);
          setIsAnimating(true);
          // 觸發進入動畫
          setTimeout(() => setIsAnimating(false), 10);
        } else {
          handleClose();
        }
      }
    }, [visible, isVisible, handleClose]);

    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleMouseEnter = () => {
      clearTimer();
    };

    const handleMouseLeave = () => {
      if (duration > 0) {
        timerRef.current = setTimeout(() => {
          handleClose();
        }, duration);
      }
    };

    if (!isVisible) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          getBaseAlertStyles(),
          currentStyles.container,
          isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100',
          position.includes('left') && isAnimating && '-translate-x-full',
          position.includes('right') && isAnimating && 'translate-x-full',
          position.includes('top') && isAnimating && '-translate-y-2',
          position.includes('bottom') && isAnimating && 'translate-y-2',
          className,
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-alert-id={id}
        {...props}
      >
        {/* 圖示 */}
        {showIcon && (
          <div className="flex-shrink-0">
            {icon ? (
              <div className={cn('h-5 w-5', currentStyles.icon)}>{icon}</div>
            ) : (
              <AlertIcon
                type={type}
                className={cn('h-5 w-5', currentStyles.icon)}
              />
            )}
          </div>
        )}

        {/* 內容區域 */}
        <div className={cn('flex-1', showIcon && 'ml-3')}>
          {title && <h4 className="text-sm font-medium mb-1">{title}</h4>}
          {children && <div className="text-sm">{children}</div>}
        </div>

        {/* 關閉按鈕 */}
        {closable && (
          <div className="flex-shrink-0 ml-4">
            <CloseButton
              onClick={handleClose}
              className={currentStyles.closeButton}
              size="md"
            />
          </div>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export { Alert };

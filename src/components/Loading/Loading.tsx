import React from 'react';

import { cn } from '../../utils';

export interface LoadingProps {
  /** 是否顯示 Loading */
  visible?: boolean;
  /** Loading 文字 */
  text?: string;
  /** 自定義圖標 */
  icon?: React.ReactNode;
  /** 遮罩透明度 */
  maskOpacity?: number;
  /** 是否全屏顯示 */
  fullscreen?: boolean;
  /** 自定義類名 */
  className?: string;
  /** 自定義樣式 */
  style?: React.CSSProperties;
  /** 遮罩點擊事件 */
  onMaskClick?: () => void;
}

const DefaultSpinner = () => (
  <svg
    className="animate-spin h-8 w-8 text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    aria-label="載入中"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export const Loading: React.FC<LoadingProps> = ({
  visible = false,
  text = '載入中...',
  icon,
  maskOpacity = 0.5,
  fullscreen = false,
  className,
  style,
  onMaskClick,
}) => {
  if (!visible) return null;

  const maskStyle = {
    backgroundColor: `rgba(255, 255, 255, ${maskOpacity})`,
    ...style,
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center',
        fullscreen ? 'fixed inset-0 z-[9999]' : 'absolute inset-0 z-50',
        className,
      )}
      style={maskStyle}
      onClick={onMaskClick}
      role="dialog"
      aria-modal="true"
      aria-label={text}
    >
      <div
        className="flex flex-col items-center justify-center space-y-3 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">{icon || <DefaultSpinner />}</div>
        {text && <div className="text-gray-700 text-sm font-medium text-center">{text}</div>}
      </div>
    </div>
  );
};

Loading.displayName = 'Loading';

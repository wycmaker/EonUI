import React from 'react';

/**
 * 共用的 SVG 圖示組件
 */

interface IconProps {
  className?: string;
  'aria-hidden'?: boolean;
}

// 清除圖示 (X)
export const ClearIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// 下箭頭圖示
export const ChevronDownIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// 左箭頭圖示
export const ChevronLeftIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

// 右箭頭圖示
export const ChevronRightIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// 上箭頭圖示
export const ChevronUpIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

// 檢查圖示 (勾選)
export const CheckIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// 日曆圖示
export const CalendarIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// 時鐘圖示
export const ClockIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// 眼睛圖示 - 顯示密碼
export const EyeIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

// 眼睛斜線圖示 - 隱藏密碼
export const EyeSlashIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
    />
  </svg>
);

// 載入圖示 (Spinner)
export const SpinnerIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4 animate-spin',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
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
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

// 排序圖示 - 上箭頭
export const SortAscIcon: React.FC<IconProps> = ({
  className = 'h-3 w-3',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path d="M12 6l-8 10h16z" />
  </svg>
);

// 排序圖示 - 下箭頭
export const SortDescIcon: React.FC<IconProps> = ({
  className = 'h-3 w-3',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path d="M12 18l8-10H4z" />
  </svg>
);

// 分頁導航圖示
export const PrevIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const NextIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// 空資料圖示
export const EmptyDataIcon: React.FC<IconProps> = ({
  className = 'h-8 w-8',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// 上傳圖示
export const UploadIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

// 圖片檔案圖示
export const ImageIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// 文件檔案圖示
export const DocumentIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// 預覽圖示
export const PreviewIcon: React.FC<IconProps> = ({
  className = 'h-4 w-4',
  'aria-hidden': ariaHidden = true,
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden={ariaHidden}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

import React from 'react';

import { cn } from '@/utils/cn';

// Typography 元素類型定義
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'content';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

// 基礎 Typography Props
export interface TypographyProps {
  /**
   * Typography 變體，決定字體大小和樣式
   */
  variant?: TypographyVariant;
  /**
   * HTML 元素類型（可選，預設自動根據 variant 選擇）
   * 用於視覺與語義分離，例如：視覺上是 H1 但語義上是 H2
   */
  as?: TypographyElement;
  /**
   * 文字顏色
   */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted';
  /**
   * 文字對齊方式
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * 字體粗細
   */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /**
   * 是否為斜體
   */
  italic?: boolean;
  /**
   * 是否有底線
   */
  underline?: boolean;
  /**
   * 是否為刪除線
   */
  strikethrough?: boolean;
  /**
   * 行高調整
   */
  lineHeight?: 'tight' | 'normal' | 'relaxed' | 'loose';
  /**
   * 字間距調整
   */
  letterSpacing?: 'tight' | 'normal' | 'wide' | 'wider';
  /**
   * 是否截斷文字（單行）
   */
  truncate?: boolean;
  /**
   * 多行截斷的行數
   */
  clamp?: number;
  /**
   * 是否不換行
   */
  noWrap?: boolean;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 子元素
   */
  children: React.ReactNode;
}

// 變體樣式對應
const variantStyles: Record<TypographyVariant, string> = {
  h1: 'text-6xl font-bold', // 6rem - 96px
  h2: 'text-5xl font-bold', // 4.8rem - 77px
  h3: 'text-4xl font-bold', // 3.75rem - 60px
  h4: 'text-3xl font-semibold', // 3rem - 48px
  h5: 'text-2xl font-semibold', // 2.25rem - 36px
  h6: 'text-xl font-semibold', // 1.75rem - 28px
  content: 'text-base font-normal', // 1rem - 16px
};

// 預設元素對應
const defaultElements: Record<TypographyVariant, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  content: 'p',
};

// 顏色樣式
const colorStyles: Record<string, string> = {
  default: 'text-gray-900',
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  muted: 'text-gray-500',
};

// 對齊樣式
const alignStyles: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

// 字體粗細樣式
const weightStyles: Record<string, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

// 行高樣式
const lineHeightStyles: Record<string, string> = {
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
  loose: 'leading-loose',
};

// 字間距樣式
const letterSpacingStyles: Record<string, string> = {
  tight: 'tracking-tight',
  normal: 'tracking-normal',
  wide: 'tracking-wide',
  wider: 'tracking-wider',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'content',
  as,
  color = 'default',
  align = 'left',
  weight,
  italic = false,
  underline = false,
  strikethrough = false,
  lineHeight = 'normal',
  letterSpacing = 'normal',
  truncate = false,
  clamp,
  noWrap = false,
  className,
  children,
}) => {
  // 決定要使用的 HTML 元素
  const Element = as || defaultElements[variant];

  // 組合樣式類名
  const classes = cn(
    // 基礎變體樣式
    variantStyles[variant],
    // 顏色樣式
    colorStyles[color],
    // 對齊樣式
    alignStyles[align],
    // 字體粗細（如果有指定則覆蓋預設）
    weight && weightStyles[weight],
    // 行高
    lineHeightStyles[lineHeight],
    // 字間距
    letterSpacingStyles[letterSpacing],
    // 文字裝飾
    italic && 'italic',
    underline && 'underline',
    strikethrough && 'line-through',
    // 文字處理
    truncate && 'truncate',
    noWrap && 'whitespace-nowrap',
    clamp && `line-clamp-${clamp}`,
    // 自訂類名
    className,
  );

  return <Element className={classes}>{children}</Element>;
};

Typography.displayName = 'Typography';

export { Typography };

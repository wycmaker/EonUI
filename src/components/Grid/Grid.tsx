import React from 'react';

import { cn } from '@/utils/cn';

/*
  Tailwind CSS Safelist - 確保所有 Grid 類別被包含在最終 CSS 中

  Grid 容器列數：
  grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-7 grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-11 grid-cols-12

  響應式 Grid 容器列數：
  sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 sm:grid-cols-5 sm:grid-cols-6 sm:grid-cols-7 sm:grid-cols-8 sm:grid-cols-9 sm:grid-cols-10 sm:grid-cols-11 sm:grid-cols-12
  md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-5 md:grid-cols-6 md:grid-cols-7 md:grid-cols-8 md:grid-cols-9 md:grid-cols-10 md:grid-cols-11 md:grid-cols-12
  lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6 lg:grid-cols-7 lg:grid-cols-8 lg:grid-cols-9 lg:grid-cols-10 lg:grid-cols-11 lg:grid-cols-12
  xl:grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 xl:grid-cols-5 xl:grid-cols-6 xl:grid-cols-7 xl:grid-cols-8 xl:grid-cols-9 xl:grid-cols-10 xl:grid-cols-11 xl:grid-cols-12
  2xl:grid-cols-1 2xl:grid-cols-2 2xl:grid-cols-3 2xl:grid-cols-4 2xl:grid-cols-5 2xl:grid-cols-6 2xl:grid-cols-7 2xl:grid-cols-8 2xl:grid-cols-9 2xl:grid-cols-10 2xl:grid-cols-11 2xl:grid-cols-12

  列跨越類別：
  col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12

  響應式列跨越：
  sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-4 sm:col-span-5 sm:col-span-6 sm:col-span-7 sm:col-span-8 sm:col-span-9 sm:col-span-10 sm:col-span-11 sm:col-span-12
  md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12
  lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12
  xl:col-span-1 xl:col-span-2 xl:col-span-3 xl:col-span-4 xl:col-span-5 xl:col-span-6 xl:col-span-7 xl:col-span-8 xl:col-span-9 xl:col-span-10 xl:col-span-11 xl:col-span-12
  2xl:col-span-1 2xl:col-span-2 2xl:col-span-3 2xl:col-span-4 2xl:col-span-5 2xl:col-span-6 2xl:col-span-7 2xl:col-span-8 2xl:col-span-9 2xl:col-span-10 2xl:col-span-11 2xl:col-span-12

  列位置類別：
  col-start-1 col-start-2 col-start-3 col-start-4 col-start-5 col-start-6 col-start-7 col-start-8 col-start-9 col-start-10 col-start-11 col-start-12 col-start-13
  col-end-1 col-end-2 col-end-3 col-end-4 col-end-5 col-end-6 col-end-7 col-end-8 col-end-9 col-end-10 col-end-11 col-end-12 col-end-13

  Grid 對齊類別：
  justify-items-start justify-items-center justify-items-end justify-items-stretch
*/

// Grid 列數類型
type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// 響應式配置類型
type ResponsiveConfig = {
  sm?: GridCols;
  md?: GridCols;
  lg?: GridCols;
  xl?: GridCols;
  '2xl'?: GridCols;
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 網格容器 - 定義為 CSS Grid 容器
   */
  container?: boolean;
  /**
   * 網格列數 (1-12)，僅容器使用
   * 定義網格有多少列
   */
  cols?: GridCols;
  /**
   * 響應式列數配置，僅容器使用
   */
  colsResponsive?: ResponsiveConfig;

  /**
   * 網格項目
   */
  item?: boolean;
  /**
   * 跨越的列數 (1-12)，僅項目使用
   * 定義項目佔用多少列
   */
  span?: GridCols;
  /**
   * 響應式跨越列數，僅項目使用
   */
  spanResponsive?: ResponsiveConfig;

  /**
   * 網格間距
   */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  /**
   * 響應式間距
   */
  gapResponsive?: ResponsiveConfig & { gap: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 };

  /**
   * 項目在網格中的起始列位置 (1-13)，僅項目使用
   */
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  /**
   * 項目在網格中的結束列位置 (1-13)，僅項目使用
   */
  colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

  /**
   * 垂直對齊方式（容器使用）
   */
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * 水平對齊方式（容器使用）
   */
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * 內容對齊方式（容器使用）
   */
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /**
   * 容器最大寬度（僅限容器使用）
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  /**
   * 是否置中（僅限容器使用）
   */
  centered?: boolean;

  /**
   * 子元素
   */
  children: React.ReactNode;
}

// 生成網格列數類別
const getGridColsClasses = (cols: GridCols | undefined, responsive?: ResponsiveConfig): string => {
  if (!cols) return '';

  const classes = [`grid-cols-${cols}`];

  if (responsive) {
    if (responsive.sm) classes.push(`sm:grid-cols-${responsive.sm}`);
    if (responsive.md) classes.push(`md:grid-cols-${responsive.md}`);
    if (responsive.lg) classes.push(`lg:grid-cols-${responsive.lg}`);
    if (responsive.xl) classes.push(`xl:grid-cols-${responsive.xl}`);
    if (responsive['2xl']) classes.push(`2xl:grid-cols-${responsive['2xl']}`);
  }

  return classes.join(' ');
};

// 生成列跨越類別
const getColSpanClasses = (span: GridCols | undefined, responsive?: ResponsiveConfig): string => {
  if (!span) return '';

  const classes = [`col-span-${span}`];

  if (responsive) {
    if (responsive.sm) classes.push(`sm:col-span-${responsive.sm}`);
    if (responsive.md) classes.push(`md:col-span-${responsive.md}`);
    if (responsive.lg) classes.push(`lg:col-span-${responsive.lg}`);
    if (responsive.xl) classes.push(`xl:col-span-${responsive.xl}`);
    if (responsive['2xl']) classes.push(`2xl:col-span-${responsive['2xl']}`);
  }

  return classes.join(' ');
};

// 生成列位置類別
const getColPositionClasses = (colStart?: number, colEnd?: number): string => {
  const classes: string[] = [];

  if (colStart) classes.push(`col-start-${colStart}`);
  if (colEnd) classes.push(`col-end-${colEnd}`);

  return classes.join(' ');
};

// Grid 對齊樣式映射
const alignItemsClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyItemsClasses = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
};

const justifyContentClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const maxWidthClasses = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
  none: 'max-w-none',
};

// 生成間距類別
const getGapClasses = (
  gap: number | undefined,
  responsive?: ResponsiveConfig & { gap: number },
): string => {
  if (gap === undefined) return '';

  const classes = gap > 0 ? [`gap-${gap}`] : [];

  if (responsive) {
    if (responsive.sm && responsive.gap > 0) classes.push(`sm:gap-${responsive.gap}`);
    if (responsive.md && responsive.gap > 0) classes.push(`md:gap-${responsive.gap}`);
    if (responsive.lg && responsive.gap > 0) classes.push(`lg:gap-${responsive.gap}`);
    if (responsive.xl && responsive.gap > 0) classes.push(`xl:gap-${responsive.gap}`);
    if (responsive['2xl'] && responsive.gap > 0) classes.push(`2xl:gap-${responsive.gap}`);
  }

  return classes.join(' ');
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      container = false,
      cols,
      colsResponsive,
      item = false,
      span,
      spanResponsive,
      gap = 0,
      gapResponsive,
      colStart,
      colEnd,
      alignItems,
      justifyItems,
      justifyContent,
      maxWidth,
      centered = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // 基礎樣式
    const baseClasses = cn({
      // 容器樣式 - 使用 CSS Grid
      grid: container,
      // 項目樣式 - 無需特殊樣式，由 col-span 控制
    });

    // 網格列數樣式（容器專用）
    const gridColsClasses = container ? getGridColsClasses(cols, colsResponsive) : '';

    // 間距樣式
    const gapClasses = getGapClasses(gap, gapResponsive);

    // 對齊樣式（容器專用）
    const alignClasses = cn(
      container && alignItems && alignItemsClasses[alignItems],
      container && justifyItems && justifyItemsClasses[justifyItems],
      container && justifyContent && justifyContentClasses[justifyContent],
    );

    // 容器專用樣式
    const containerClasses = container
      ? cn(maxWidth && maxWidthClasses[maxWidth], centered && 'mx-auto')
      : '';

    // 列跨越樣式（項目專用）
    const colSpanClasses = item ? getColSpanClasses(span, spanResponsive) : '';

    // 列位置樣式（項目專用）
    const colPositionClasses = item ? getColPositionClasses(colStart, colEnd) : '';

    const classes = cn(
      baseClasses,
      gridColsClasses,
      gapClasses,
      alignClasses,
      containerClasses,
      colSpanClasses,
      colPositionClasses,
      className,
    );

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = 'Grid';

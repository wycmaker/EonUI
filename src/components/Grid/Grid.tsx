import React from 'react';

import { cn } from '@/utils/cn';

// 響應式斷點類型定義
type BreakpointValue = number | 'auto';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 網格容器類型
   */
  container?: boolean;
  /**
   * 網格項目類型
   */
  item?: boolean;
  /**
   * 欄位間距
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  /**
   * 所有斷點的欄數 (1-12)
   */
  xs?: BreakpointValue;
  /**
   * 小螢幕斷點的欄數 (≥576px)
   */
  sm?: BreakpointValue;
  /**
   * 中等螢幕斷點的欄數 (≥768px)
   */
  md?: BreakpointValue;
  /**
   * 大螢幕斷點的欄數 (≥1024px)
   */
  lg?: BreakpointValue;
  /**
   * 超大螢幕斷點的欄數 (≥1280px)
   */
  xl?: BreakpointValue;
  /**
   * 超超大螢幕斷點的欄數 (≥1536px)
   */
  xxl?: BreakpointValue;
  /**
   * 垂直對齊方式
   */
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * 水平對齊方式
   */
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /**
   * 是否換行
   */
  wrap?: boolean;
  /**
   * 容器最大寬度（僅限容器使用）
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  /**
   * 是否置中（僅限容器使用）
   */
  centered?: boolean;

  /**
   * 順序（僅限項目使用）
   */
  order?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
  /**
   * 子元素
   */
  children: React.ReactNode;
}

// 生成響應式欄位類別
const getColumnClasses = (breakpoint: string, value: BreakpointValue | undefined): string => {
  if (value === undefined) return '';

  if (value === 'auto') {
    return breakpoint === 'xs' ? 'flex-auto' : `${breakpoint}:flex-auto`;
  }

  if (typeof value === 'number' && value >= 1 && value <= 12) {
    // 特殊處理：如果是 12，使用 w-full 而不是 w-12/12
    const widthClass = value === 12 ? 'w-full' : `w-${value}/12`;
    return breakpoint === 'xs' ? widthClass : `${breakpoint}:${widthClass}`;
  }

  return '';
};

// 對齊樣式映射
const alignItemsClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
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

// 生成順序類別
const getOrderClasses = (breakpoint: string, value: number | undefined): string => {
  if (value === undefined || value < 1 || value > 12) return '';

  const orderClass = `order-${value}`;
  return breakpoint === 'xs' ? orderClass : `${breakpoint}:${orderClass}`;
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      container = false,
      item = false,
      spacing = 0,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      alignItems,
      justifyContent,
      wrap = true,
      maxWidth,
      centered = false,
      order,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    // 基礎樣式
    const baseClasses = cn({
      // 容器樣式
      flex: container,
      'flex-wrap': container && wrap,
      'flex-nowrap': container && !wrap,

      // 項目樣式
      'flex-shrink-0': item,
    });

    // 間距樣式（容器專用）
    const spacingClasses = container && spacing > 0 ? `gap-${spacing}` : '';

    // 對齊樣式（容器專用）
    const alignClasses = cn(
      container && alignItems && alignItemsClasses[alignItems],
      container && justifyContent && justifyContentClasses[justifyContent],
    );

    // 容器專用樣式
    const containerClasses = container
      ? cn(maxWidth && maxWidthClasses[maxWidth], centered && 'mx-auto')
      : '';

    // 響應式欄位樣式（項目專用）
    const columnClasses = item
      ? cn(
          getColumnClasses('xs', xs),
          getColumnClasses('sm', sm),
          getColumnClasses('md', md),
          getColumnClasses('lg', lg),
          getColumnClasses('xl', xl),
          getColumnClasses('2xl', xxl),
        )
      : '';

    // 順序樣式（項目專用）
    const orderClasses =
      item && order
        ? cn(
            getOrderClasses('xs', order.xs),
            getOrderClasses('sm', order.sm),
            getOrderClasses('md', order.md),
            getOrderClasses('lg', order.lg),
            getOrderClasses('xl', order.xl),
            getOrderClasses('2xl', order.xxl),
          )
        : '';

    const classes = cn(
      baseClasses,
      spacingClasses,
      alignClasses,
      containerClasses,
      columnClasses,
      orderClasses,
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

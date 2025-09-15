import React, { useState, useRef, useMemo } from 'react';

import { NavigationButton, PageButton } from '@/components/Button';
import { Select } from '@/components/Select';
import { useControlledValue, useResponsivePageCount, type PaginationLayoutItem } from '@/hooks';
import { cn } from '@/utils/cn';
import { getSizeStyles } from '@/utils/formStyles';
import { PrevIcon, NextIcon, FirstPageIcon, LastPageIcon } from '@/utils/icons';

// 重新導出類型
export type { PaginationLayoutItem };

// 分頁組件 Props
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * 當前頁碼
   */
  current?: number;
  /**
   * 預設頁碼
   */
  defaultCurrent?: number;
  /**
   * 每頁資料數量
   */
  pageSize?: number;
  /**
   * 預設每頁資料數量
   */
  defaultPageSize?: number;
  /**
   * 總資料數量
   */
  total: number;
  /**
   * 每頁資料數量選項
   */
  pageSizeOptions?: number[];
  /**
   * 頁碼樣式
   */
  pageNumberStyle?: 'plain' | 'background';
  /**
   * 上一頁文字或圖示
   */
  prevText?: React.ReactNode;
  /**
   * 下一頁文字或圖示
   */
  nextText?: React.ReactNode;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 佈局配置
   */
  layout?: PaginationLayoutItem[];
  /**
   * 分頁組件大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 自訂總數顯示函數
   */
  showTotalText?: (total: number, range: [number, number]) => React.ReactNode;
  /**
   * 頁碼或每頁數量變更時的回調
   */
  onChange?: (page: number, pageSize: number) => void;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
}

// 省略號組件
interface EllipsisProps {
  size?: 'sm' | 'md' | 'lg';
}

const Ellipsis: React.FC<EllipsisProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-gray-500 font-bold select-none',
        sizeClasses[size],
      )}
    >
      ...
    </span>
  );
};

// 快速跳轉組件
interface QuickJumperProps {
  current: number;
  totalPages: number;
  disabled?: boolean;
  size: 'sm' | 'md' | 'lg';
  onJump: (page: number) => void;
}

const QuickJumper: React.FC<QuickJumperProps> = ({
  current,
  totalPages,
  disabled = false,
  size,
  onJump,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: 'w-12',
    md: 'w-14',
    lg: 'w-16',
  };

  const handleJump = () => {
    const page = parseInt(inputValue, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages && page !== current) {
      onJump(page);
    }
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJump();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">跳至</span>
      <input
        ref={inputRef}
        type="number"
        min={1}
        max={totalPages}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleJump}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={cn(
          'border border-gray-300 rounded text-center transition-colors duration-200',
          getSizeStyles(size, 'input'),
          sizeClasses[size],
          disabled
            ? 'cursor-not-allowed opacity-50 bg-gray-100'
            : 'focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary',
        )}
        placeholder="1"
      />
      <span className="text-sm text-gray-600">頁</span>
    </div>
  );
};

// 計算顯示的頁碼範圍
const calculatePageRange = (current: number, total: number, maxVisible: number = 7) => {
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, current - half);
  const end = Math.min(total, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  const pages: (number | 'ellipsis')[] = [];

  // 添加第一頁和省略號
  if (start > 1) {
    pages.push(1);
    if (start > 2) {
      pages.push('ellipsis');
    }
  }

  // 添加中間頁碼
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // 添加省略號和最後一頁
  if (end < total) {
    if (end < total - 1) {
      pages.push('ellipsis');
    }
    pages.push(total);
  }

  return pages;
};

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      current,
      defaultCurrent = 1,
      pageSize,
      defaultPageSize = 10,
      total,
      pageSizeOptions = [10, 20, 50, 100],
      pageNumberStyle = 'background',
      prevText,
      nextText,
      disabled = false,
      layout = ['first', 'prev', 'pages', 'next', 'last'],
      size = 'md',
      showTotalText,
      onChange,
      className,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const maxVisible = useResponsivePageCount(containerRef, layout);

    // 使用受控/非受控值管理 Hook
    const [currentPage, setCurrentPage] = useControlledValue(current, defaultCurrent);
    const [currentPageSize, setCurrentPageSize] = useControlledValue(pageSize, defaultPageSize);

    // 確保值不為 undefined
    const safePage = currentPage ?? defaultCurrent;
    const safePageSize = currentPageSize ?? defaultPageSize;

    // 計算總頁數
    const totalPages = Math.ceil(total / safePageSize);

    // 計算當前頁的資料範圍
    const range: [number, number] = useMemo(() => {
      if (total === 0) {
        return [0, 0];
      }
      const start = (safePage - 1) * safePageSize + 1;
      const end = Math.min(safePage * safePageSize, total);
      return [start, end];
    }, [safePage, safePageSize, total]);

    // 當 total 為 0 時，仍然顯示分頁組件但限制為第1頁
    const adjustedTotalPages = Math.max(totalPages, 1);

    // 計算顯示的頁碼
    const pageNumbers = useMemo(() => {
      return calculatePageRange(safePage, adjustedTotalPages, maxVisible);
    }, [safePage, adjustedTotalPages, maxVisible]);

    // 頁碼變更處理
    const handlePageChange = (page: number) => {
      if (page < 1 || page > adjustedTotalPages || page === safePage || disabled) {
        return;
      }

      setCurrentPage(page);
      onChange?.(page, safePageSize);
    };

    // 每頁數量變更處理
    const handlePageSizeChange = (
      newPageSize: string | number | (string | number)[] | undefined,
    ) => {
      if (newPageSize === undefined) return;

      const size = Array.isArray(newPageSize) ? Number(newPageSize[0]) : Number(newPageSize);

      if (size === safePageSize || disabled) {
        return;
      }

      // 計算新的頁碼，保持當前資料位置
      const newPage = Math.min(
        Math.ceil(((safePage - 1) * safePageSize + 1) / size),
        Math.ceil(total / size),
      );

      setCurrentPageSize(size);
      setCurrentPage(newPage);
      onChange?.(newPage, size);
    };

    // 渲染佈局元素
    const renderLayoutItem = (item: PaginationLayoutItem) => {
      switch (item) {
        case 'first':
          return (
            <NavigationButton
              key="first"
              direction="first"
              disabled={disabled || safePage <= 1}
              size={size}
              onClick={() => handlePageChange(1)}
            >
              <FirstPageIcon />
            </NavigationButton>
          );

        case 'prev':
          return (
            <NavigationButton
              key="prev"
              direction="prev"
              disabled={disabled || safePage <= 1}
              size={size}
              onClick={() => handlePageChange(safePage - 1)}
            >
              {prevText || <PrevIcon />}
            </NavigationButton>
          );

        case 'next':
          return (
            <NavigationButton
              key="next"
              direction="next"
              disabled={disabled || safePage >= adjustedTotalPages}
              size={size}
              onClick={() => handlePageChange(safePage + 1)}
            >
              {nextText || <NextIcon />}
            </NavigationButton>
          );

        case 'last':
          return (
            <NavigationButton
              key="last"
              direction="last"
              disabled={disabled || safePage >= adjustedTotalPages}
              size={size}
              onClick={() => handlePageChange(adjustedTotalPages)}
            >
              <LastPageIcon />
            </NavigationButton>
          );

        case 'pages':
          return (
            <div
              key="pages"
              className="flex items-center space-x-1 flex-shrink-0"
            >
              {pageNumbers.map((page, index) => {
                if (page === 'ellipsis') {
                  return (
                    <Ellipsis
                      key={`ellipsis-${index}`}
                      size={size}
                    />
                  );
                }
                return (
                  <PageButton
                    key={page}
                    page={page}
                    current={page === safePage}
                    disabled={disabled}
                    style={pageNumberStyle}
                    size={size}
                    onClick={handlePageChange}
                  />
                );
              })}
            </div>
          );

        case 'jumper':
          return layout.includes('jumper') ? (
            <div
              key="jumper"
              className="flex-shrink-0"
            >
              <QuickJumper
                current={safePage}
                totalPages={adjustedTotalPages}
                disabled={disabled}
                size={size}
                onJump={handlePageChange}
              />
            </div>
          ) : null;

        case 'total':
          return layout.includes('total') ? (
            <div
              key="total"
              className="text-sm text-gray-600 flex-shrink-0"
            >
              {showTotalText
                ? showTotalText(total, range)
                : `共 ${total} 筆資料，第 ${range[0]}-${range[1]} 筆`}
            </div>
          ) : null;

        case 'sizes':
          return layout.includes('sizes') ? (
            <div
              key="sizes"
              className="flex-shrink-0 flex items-center gap-2 ml-4"
            >
              <span className="text-lg text-gray-600 font-black">每頁顯示</span>
              <Select
                size={size}
                value={safePageSize}
                options={pageSizeOptions.map((option) => ({
                  label: `${option}`,
                  value: option,
                }))}
                onChange={handlePageSizeChange}
                disabled={disabled}
                className="w-20"
              />
              <span className="text-lg text-gray-600 font-black">筆結果</span>
            </div>
          ) : null;

        default:
          return null;
      }
    };

    return (
      <div
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          containerRef.current = node;
        }}
        className={cn(
          'flex items-center justify-center gap-2 overflow-x-auto whitespace-nowrap',
          'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100',
          disabled && 'pointer-events-none opacity-50',
          className,
        )}
        {...props}
      >
        {layout.map((item) => renderLayoutItem(item)).filter(Boolean)}
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';

export { Pagination };

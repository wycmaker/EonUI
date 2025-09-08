import React, { createContext, useState, useMemo, useCallback } from 'react';

import { cn } from '@/utils/cn';
import { SpinnerIcon, SortAscIcon, SortDescIcon, EmptyDataIcon } from '@/utils/icons';

// 常量配置 - 移到組件外部避免重複創建
const TABLE_VARIANTS = {
  default: 'border border-gray-200',
  striped: 'border border-gray-200', // striped 樣式主要在行上實現
  bordered: 'border-2 border-gray-300',
} as const;

const TABLE_SIZES = {
  sm: 'text-xs',
  md: 'text-base',
  lg: 'text-lg',
} as const;

const CELL_PADDING = {
  sm: 'px-2 py-1.5',
  md: 'px-4 py-3',
  lg: 'px-6 py-5',
} as const;

// 排序配置類型
export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc' | null;
}

// 欄位定義類型 - 使用泛型
export interface ColumnDef<T = Record<string, unknown>> {
  key: keyof T;
  title: string;
  width?: string | number;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
}

// Table Context 類型 - 使用泛型 (內部使用)
interface TableContextValue<T = Record<string, unknown>> {
  data: T[];
  sortedData: T[];
  sortConfig: SortConfig;
  onSort: (key: string) => void;
  columns: ColumnDef<T>[];
  renderCell: (value: unknown, record: T, index: number, key: keyof T) => React.ReactNode;
}

// 創建 Context (內部使用)
const TableContext = createContext<TableContextValue<Record<string, unknown>> | null>(null);

// Table 組件 Props
export interface TableProps<T = Record<string, unknown>> {
  /**
   * 表格資料
   */
  data: T[];
  /**
   * 欄位定義（可選，也可使用 TableColumn 子組件）
   */
  columns?: ColumnDef<T>[];
  /**
   * 預設排序配置
   */
  defaultSortConfig?: SortConfig;
  /**
   * 排序變更回調
   */
  onSortChange?: (sortConfig: SortConfig) => void;
  /**
   * 是否可以排序
   */
  sortable?: boolean;
  /**
   * 表格樣式變體
   */
  variant?: 'default' | 'striped' | 'bordered';
  /**
   * 表格大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 是否顯示 hover 效果
   */
  hover?: boolean;
  /**
   * 是否固定表頭
   */
  stickyHeader?: boolean;
  /**
   * 表格最大高度（啟用垂直滾動）
   */
  maxHeight?: string | number;
  /**
   * 表格最大寬度（啟用水平滾動）
   */
  maxWidth?: string | number;
  /**
   * 載入狀態
   */
  loading?: boolean;
  /**
   * 空資料顯示文字
   */
  emptyText?: string;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 自訂單元格渲染函數
   */
  renderCell?: (value: unknown, record: T, index: number, key: keyof T) => React.ReactNode;
  /**
   * 子元素
   */
  children?: React.ReactNode;
}

// TableColumn 組件 Props
export interface TableColumnProps<T = Record<string, unknown>> {
  /**
   * 欄位鍵名
   */
  dataKey: keyof T;
  /**
   * 欄位標題
   */
  title?: string;
  /**
   * 欄位寬度
   */
  width?: string | number;
  /**
   * 是否可排序
   */
  sortable?: boolean;
  /**
   * 文字對齊方式
   */
  align?: 'left' | 'center' | 'right';
  /**
   * 是否固定欄位
   */
  fixed?: 'left' | 'right';
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 自訂渲染函數（children 函數）
   */
  children?: (value: unknown, record: T, index: number) => React.ReactNode;
}

// 排序圖示組件
const SortIcon: React.FC<{ direction: 'asc' | 'desc' | null }> = ({ direction }) => (
  <span className="ml-2 inline-flex flex-col">
    <SortAscIcon
      className={cn(
        'h-4 w-4 transition-colors font-bold',
        direction === 'asc' ? 'text-primary-600' : 'text-gray-500',
      )}
    />
    <SortDescIcon
      className={cn(
        'h-4 w-4 -mt-2 transition-colors font-bold',
        direction === 'desc' ? 'text-primary-600' : 'text-gray-500',
      )}
    />
  </span>
);

// 載入組件
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-8">
    <SpinnerIcon className="h-8 w-8 text-primary-600 animate-spin" />
    <span className="ml-2 text-gray-600 animate-pulse">載入中...</span>
  </div>
);

// 空資料組件
const EmptyData: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center justify-center py-8 text-gray-500">
    <EmptyDataIcon className="mr-2" />
    {text}
  </div>
);

// TableColumn 組件
export const TableColumn = <T extends Record<string, unknown>>(_props: TableColumnProps<T>) => {
  // 這個組件主要用於定義欄位配置，實際渲染在 Table 組件中處理
  return null;
};

// 主要 Table 組件
export const Table = <T extends Record<string, unknown>>({
  data,
  columns: propColumns = [],
  defaultSortConfig = { key: '', direction: null },
  onSortChange,
  sortable = true,
  variant = 'default',
  size = 'md',
  hover = true,
  stickyHeader = false,
  maxHeight,
  maxWidth,
  loading = false,
  emptyText = '暫無資料',
  className,
  renderCell,
  children,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(defaultSortConfig);

  // 從 children 中提取欄位配置
  const childColumns = useMemo(() => {
    const columns: ColumnDef<T>[] = [];

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type === TableColumn) {
        const props = child.props as TableColumnProps<T>;
        columns.push({
          key: props.dataKey,
          title: props.title || String(props.dataKey),
          width: props.width,
          sortable: props.sortable,
          align: props.align,
          fixed: props.fixed,
        });
      }
    });

    return columns;
  }, [children]);

  // 合併 props 的 columns 和 children 的 columns
  const finalColumns = useMemo(() => {
    return [...propColumns, ...childColumns];
  }, [propColumns, childColumns]);

  // 排序資料
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];

      if (aValue === bValue) return 0;

      let comparison = 0;
      if (aValue > bValue) {
        comparison = 1;
      } else if (aValue < bValue) {
        comparison = -1;
      }

      return sortConfig.direction === 'desc' ? comparison * -1 : comparison;
    });
  }, [data, sortConfig]);

  // 排序處理
  const handleSort = useCallback(
    (key: string) => {
      const newSortConfig: SortConfig = {
        key,
        direction:
          sortConfig.key === key && sortConfig.direction === 'asc'
            ? 'desc'
            : sortConfig.key === key && sortConfig.direction === 'desc'
              ? null
              : 'asc',
      };

      setSortConfig(newSortConfig);
      onSortChange?.(newSortConfig);
    },
    [sortConfig, onSortChange],
  );

  // 預設單元格渲染函數
  const defaultRenderCell = useCallback(
    (value: unknown, record: T, index: number, key: keyof T) => {
      // 檢查是否有對應的 TableColumn children 函數
      let childRender: ((value: unknown, record: T, index: number) => React.ReactNode) | undefined;

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === TableColumn) {
          const props = child.props as TableColumnProps<T>;
          if (props.dataKey === key && props.children) {
            childRender = props.children;
          }
        }
      });

      // 優先使用 children 函數，然後是 renderCell prop，最後是預設渲染
      if (childRender) {
        return childRender(value, record, index);
      }

      if (renderCell) {
        return renderCell(value, record, index, key);
      }

      // 預設渲染：直接顯示值
      if (value === null || value === undefined) {
        return '-';
      }

      if (typeof value === 'boolean') {
        return value ? '是' : '否';
      }

      if (typeof value === 'object') {
        return JSON.stringify(value);
      }

      return String(value);
    },
    [children, renderCell],
  );

  // Context 值
  const contextValue: TableContextValue<T> = useMemo(
    () => ({
      data,
      sortedData,
      sortConfig,
      onSort: handleSort,
      columns: finalColumns,
      renderCell: defaultRenderCell,
    }),
    [data, sortedData, sortConfig, handleSort, finalColumns, defaultRenderCell],
  );

  // 表格容器樣式
  const containerStyles = cn(
    'overflow-auto',
    maxHeight && `max-h-[${maxHeight}]`,
    maxWidth && `max-w-[${maxWidth}]`,
    className,
  );

  // 表格樣式
  const tableStyles = cn(
    'w-full table-auto',
    TABLE_VARIANTS[variant],
    TABLE_SIZES[size],
    'bg-white',
  );

  // 渲染表頭
  const renderHeader = () => (
    <thead className={cn('bg-gray-50', stickyHeader && 'sticky top-0 z-10')}>
      <tr>
        {finalColumns.map((column, colIndex) => {
          const isSortable = sortable && column.sortable;
          const isCurrentSort = sortConfig.key === String(column.key);

          return (
            <th
              key={`header-${colIndex}-${String(column.key)}`}
              scope="col"
              className={cn(
                CELL_PADDING[size],
                'font-semibold text-gray-900 border-b border-gray-200 align-middle',
                column.align === 'center' && 'text-center',
                column.align === 'right' && 'text-right',
                isSortable && 'cursor-pointer hover:bg-gray-100 select-none',
                column.fixed === 'left' && 'sticky left-0 bg-gray-50 z-20',
                column.fixed === 'right' && 'sticky right-0 bg-gray-50 z-20',
              )}
              style={{ width: column.width }}
              onClick={isSortable ? () => handleSort(String(column.key)) : undefined}
              aria-sort={
                isSortable && isCurrentSort
                  ? sortConfig.direction === 'asc'
                    ? 'ascending'
                    : sortConfig.direction === 'desc'
                      ? 'descending'
                      : 'none'
                  : undefined
              }
            >
              <div className="flex items-center justify-between">
                <span>{column.title}</span>
                {isSortable && <SortIcon direction={isCurrentSort ? sortConfig.direction : null} />}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );

  // 渲染表身
  const renderBody = () => (
    <tbody className="divide-y divide-gray-200">
      {sortedData.map((record, rowIndex) => (
        <tr
          key={`row-${rowIndex}-${record.id || rowIndex}`}
          className={cn(
            variant === 'striped' && rowIndex % 2 === 1 && 'bg-gray-100',
            hover && variant === 'striped' && 'hover:bg-gray-200 transition-colors',
            hover && variant !== 'striped' && 'hover:bg-gray-50 transition-colors',
          )}
        >
          {finalColumns.map((column, colIndex) => {
            const value = record[column.key];
            const cellContent = defaultRenderCell(value, record, rowIndex, column.key);

            return (
              <td
                key={`cell-${rowIndex}-${colIndex}-${String(column.key)}`}
                className={cn(
                  CELL_PADDING[size],
                  'border-b border-gray-200',
                  column.align === 'center' && 'text-center',
                  column.align === 'right' && 'text-right',
                  column.fixed === 'left' && 'sticky left-0 bg-white z-10',
                  column.fixed === 'right' && 'sticky right-0 bg-white z-10',
                )}
                style={{ width: column.width }}
              >
                {cellContent}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );

  return (
    <TableContext.Provider value={contextValue as TableContextValue<Record<string, unknown>>}>
      <div className={containerStyles}>
        {loading ? (
          <LoadingSpinner />
        ) : sortedData.length === 0 ? (
          <EmptyData text={emptyText} />
        ) : (
          <table
            className={tableStyles}
            role="table"
          >
            {renderHeader()}
            {renderBody()}
          </table>
        )}
      </div>
    </TableContext.Provider>
  );
};

Table.displayName = 'Table';
TableColumn.displayName = 'TableColumn';

export { Table as default };

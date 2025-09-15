import React from 'react';

import { cn } from '@/utils/cn';
import { ChevronRightIcon } from '@/utils/icons';

// Breadcrumb 項目類型
export interface BreadcrumbItem {
  /**
   * 顯示文字
   */
  label: string;
  /**
   * 路由路徑
   */
  href?: string;
  /**
   * 是否為當前頁面（活躍狀態）
   */
  active?: boolean;
  /**
   * 是否禁用點擊
   */
  disabled?: boolean;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 點擊事件處理
   */
  onClick?: (item: BreadcrumbItem, event: React.MouseEvent) => void;
}

// Breadcrumb 組件屬性
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLOListElement> {
  /**
   * Breadcrumb 項目陣列
   */
  items: BreadcrumbItem[];
  /**
   * 分隔符類型
   */
  separatorType?: 'arrow' | 'slash';
  /**
   * 自訂分隔符（會覆蓋 separatorType）
   */
  separator?: React.ReactNode;
  /**
   * 組件大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 最大顯示項目數量（超過時會省略中間項目）
   */
  maxItems?: number;
  /**
   * 是否顯示圖示
   */
  showIcon?: boolean;
  /**
   * 自訂 CSS 類名
   */
  className?: string;
  /**
   * 項目點擊事件
   */
  onItemClick?: (item: BreadcrumbItem, index: number, event: React.MouseEvent) => void;
}

// 單個 Breadcrumb 項目組件
interface BreadcrumbItemComponentProps {
  item: BreadcrumbItem;
  index: number;
  isLast: boolean;
  size: 'sm' | 'md' | 'lg';
  separator: React.ReactNode;
  onItemClick?: (item: BreadcrumbItem, index: number, event: React.MouseEvent) => void;
}

const BreadcrumbItemComponent: React.FC<BreadcrumbItemComponentProps> = ({
  item,
  index,
  isLast,
  size,
  separator,
  onItemClick,
}) => {
  const handleClick = (event: React.MouseEvent) => {
    if (item.disabled || item.active) {
      event.preventDefault();
      return;
    }

    // 調用項目自己的點擊處理
    item.onClick?.(item, event);

    // 調用父組件的點擊處理
    onItemClick?.(item, index, event);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick(event as unknown as React.MouseEvent);
    }
  };

  // 大小樣式
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  // 項目樣式
  const itemClasses = cn(
    'inline-flex items-center transition-colors duration-200',
    sizeStyles[size],
    {
      // 活躍頁面的樣式（當前頁面）
      'text-gray-900 font-medium cursor-default': item.active,
      // 可點擊項目的樣式（有 href 且非活躍）
      'text-blue-600 hover:text-blue-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-sm':
        item.href && !item.disabled && !item.active,
      // 禁用項目的樣式
      'text-gray-400 cursor-not-allowed': item.disabled,
      // 非活躍項目的樣式（反灰）
      'text-gray-400': !item.active && !item.disabled,
    },
    item.className,
  );

  // 分隔符樣式
  const separatorClasses = cn('mx-2 text-gray-400 select-none', sizeStyles[size]);

  const renderItem = () => {
    const content = item.label;

    if (item.href && !item.disabled && !item.active) {
      return (
        <a
          href={item.href}
          className={itemClasses}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-current={item.active ? 'page' : undefined}
        >
          {content}
        </a>
      );
    }

    return (
      <span
        className={itemClasses}
        aria-current={item.active ? 'page' : undefined}
      >
        {content}
      </span>
    );
  };

  return (
    <li className="inline-flex items-center">
      {renderItem()}
      {!isLast && (
        <span
          className={separatorClasses}
          aria-hidden="true"
        >
          {separator}
        </span>
      )}
    </li>
  );
};

// 主要 Breadcrumb 組件
const Breadcrumb = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  (
    {
      items,
      separatorType = 'arrow',
      separator,
      size = 'md',
      maxItems,
      showIcon: _showIcon = false,
      className,
      onItemClick,
      ...props
    },
    ref,
  ) => {
    // 確定最終使用的分隔符
    const finalSeparator = React.useMemo(() => {
      if (separator) {
        return separator; // 如果有自訂分隔符，優先使用
      }

      if (separatorType === 'slash') {
        return <span className="text-gray-400">/</span>;
      }

      // 預設使用箭頭
      return <ChevronRightIcon className="h-4 w-4" />;
    }, [separator, separatorType]);
    // 處理項目省略邏輯
    const processedItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      // 如果項目太多，顯示前面幾個、省略號、最後一個
      const firstItems = items.slice(0, Math.floor(maxItems / 2));
      const lastItems = items.slice(-(Math.ceil(maxItems / 2) - 1));

      return [
        ...firstItems,
        {
          label: '...',
          disabled: true,
          className: 'select-none',
        } as BreadcrumbItem,
        ...lastItems,
      ];
    }, [items, maxItems]);

    // 容器樣式
    const containerClasses = cn('flex items-center space-x-1', className);

    return (
      <nav
        aria-label="Breadcrumb"
        className={containerClasses}
      >
        <ol
          ref={ref}
          className="inline-flex items-center space-x-0"
          {...props}
        >
          {processedItems.map((item, index) => (
            <BreadcrumbItemComponent
              key={`${item.label}-${index}`}
              item={item}
              index={index}
              isLast={index === processedItems.length - 1}
              size={size}
              separator={finalSeparator}
              onItemClick={onItemClick}
            />
          ))}
        </ol>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };

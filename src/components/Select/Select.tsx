import React, { useState, useRef, useCallback, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { useClickOutside, useKeyboardNavigation, useControlledValue, usePortal } from '@/hooks';
import {
  ComponentVariant,
  ComponentSize,
  ComponentStatus,
  renderClearButton,
  shouldShowClearButton,
  ChevronDownIcon,
  CheckIcon,
} from '@/utils';
import { cn } from '@/utils/cn';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'defaultValue'> {
  /**
   * 下拉選單的視覺樣式變體
   */
  variant?: ComponentVariant;
  /**
   * 下拉選單的大小
   */
  size?: ComponentSize;
  /**
   * 下拉選單的狀態
   */
  status?: ComponentStatus;
  /**
   * 選項列表
   */
  options: SelectOption[];
  /**
   * 當前選中的值（單選模式為單個值，多選模式為陣列）
   */
  value?: string | number | (string | number)[];
  /**
   * 預設值
   */
  defaultValue?: string | number | (string | number)[];
  /**
   * 是否為多選模式
   */
  multiple?: boolean;
  /**
   * 是否可以搜尋
   */
  filterable?: boolean;
  /**
   * 是否顯示清除按鈕
   */
  clearable?: boolean;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 佔位符文字
   */
  placeholder?: string;
  /**
   * 搜尋時的佔位符文字
   */
  searchPlaceholder?: string;
  /**
   * 無選項時顯示的文字
   */
  noDataText?: string;
  /**
   * 多選模式下的顯示方式（顯示選中項目或數量）
   */
  multipleDisplayMode?: 'items' | 'count';
  /**
   * 多選模式下最多顯示的標籤數量
   */
  maxTagCount?: number;
  /**
   * 寬度
   */
  width?: string;
  /**
   * 自動完成屬性（用於搜尋輸入框）
   */
  autoComplete?: string;
  /**
   * 值改變時的回調
   */
  onChange?: (value: string | number | (string | number)[] | undefined) => void;
  /**
   * 清除按鈕的回調函數
   */
  onClear?: () => void;
  /**
   * 搜尋時的回調
   */
  onSearch?: (query: string) => void;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      status = 'default',
      options = [],
      value,
      defaultValue,
      multiple = false,
      filterable = false,
      clearable = false,
      disabled = false,
      placeholder = '請選擇',
      searchPlaceholder = '搜尋選項',
      noDataText = '無資料',
      multipleDisplayMode = 'count',
      maxTagCount = 3,
      width,
      autoComplete = 'off',
      onChange,
      onClear,
      onSearch,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [currentValue, setValue] = useControlledValue(
      value,
      defaultValue !== undefined ? defaultValue : multiple ? [] : undefined,
      onChange,
    );

    // 使用 Portal hook 處理位置計算
    const { position: dropdownPosition, calculatePosition } = usePortal({
      triggerRef: containerRef,
      isOpen,
      offset: 4,
    });

    // 過濾選項
    const filteredOptions = filterable
      ? options.filter((option) => option.label.toLowerCase().includes(searchQuery.toLowerCase()))
      : options;

    // 獲取顯示內容
    const getDisplayContent = useCallback(() => {
      if (multiple && Array.isArray(currentValue)) {
        if (currentValue.length === 0) return null;

        if (multipleDisplayMode === 'items') {
          const selectedOptions = currentValue
            .map((val) => options.find((opt) => opt.value === val))
            .filter((option): option is SelectOption => Boolean(option));

          // 動態計算可以顯示的項目數量，避免跑版
          const calculateDisplayItems = () => {
            // 根據輸入框大小動態調整顯示數量
            // 小尺寸最多顯示 1 個，中等尺寸 2 個，大尺寸 3 個
            const maxItems = size === 'sm' ? 1 : size === 'md' ? 2 : 3;
            const actualMaxCount = Math.min(maxTagCount, maxItems);

            if (selectedOptions.length <= actualMaxCount) {
              return {
                visibleItems: selectedOptions,
                hasMore: false,
                moreCount: 0,
              };
            } else {
              return {
                visibleItems: selectedOptions.slice(0, actualMaxCount),
                hasMore: true,
                moreCount: selectedOptions.length - actualMaxCount,
              };
            }
          };

          const { visibleItems, hasMore, moreCount } = calculateDisplayItems();

          return (
            <div className="flex items-center gap-1 flex-1 min-w-0 overflow-hidden">
              {visibleItems.map((option) => (
                <span
                  key={option.value}
                  className="inline-flex items-center px-2 py-0.5 text-xs bg-primary-50 text-primary-600 rounded-md border border-primary-200 flex-shrink-0"
                  style={{
                    maxWidth: `${Math.max(60, 200 / Math.max(visibleItems.length + (hasMore ? 1 : 0), 1))}px`,
                  }}
                >
                  <span className="truncate">{option.label}</span>
                </span>
              ))}
              {hasMore && (
                <span className="inline-flex items-center px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-md flex-shrink-0">
                  +{moreCount}
                </span>
              )}
            </div>
          );
        } else {
          return `已選 ${currentValue.length} 項`;
        }
      } else if (!multiple && currentValue !== undefined && currentValue !== null) {
        const option = options.find((opt) => opt.value === currentValue);
        return option?.label || '';
      }
      return null;
    }, [currentValue, multiple, options, multipleDisplayMode, maxTagCount, size]);

    // 處理值變更 (現在使用 useControlledValue hook)
    const handleValueChange = setValue;

    // 處理選項選擇
    const handleOptionSelect = useCallback(
      (option: SelectOption) => {
        if (option.disabled) return;

        if (multiple) {
          const currentArray = Array.isArray(currentValue) ? currentValue : [];
          const newValue = currentArray.includes(option.value)
            ? currentArray.filter((v) => v !== option.value)
            : [...currentArray, option.value];
          handleValueChange(newValue);
        } else {
          handleValueChange(option.value);
          setIsOpen(false);
          setSearchQuery('');
        }
      },
      [multiple, currentValue, handleValueChange],
    );

    // 處理清除
    const handleClear = useCallback(
      (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const newValue = multiple ? [] : undefined;
        handleValueChange(newValue);
        onClear?.();
        setSearchQuery('');
      },
      [multiple, handleValueChange, onClear],
    );

    // 處理搜尋
    const handleSearch = useCallback(
      (query: string) => {
        setSearchQuery(query);
        setHighlightedIndex(-1);
        onSearch?.(query);
      },
      [onSearch],
    );

    // 點擊外部關閉 - 需要排除 dropdown
    useClickOutside(
      [containerRef, dropdownRef],
      () => {
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(-1);
      },
      isOpen,
    );

    // 鍵盤導航
    useKeyboardNavigation({
      enabled: isOpen,
      onArrowDown: () => {
        setHighlightedIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
      },
      onArrowUp: () => {
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      },
      onEnter: () => {
        if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
          const option = filteredOptions[highlightedIndex];
          if (option) {
            handleOptionSelect(option);
          }
        }
      },
      onEscape: () => {
        setIsOpen(false);
        setSearchQuery('');
        setHighlightedIndex(-1);
      },
    });

    // 當開啟時聚焦搜尋框
    useEffect(() => {
      if (isOpen && filterable && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isOpen, filterable]);

    // 基礎樣式
    const baseStyles =
      'relative w-full rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer';

    // 變體樣式
    const variants = {
      default:
        'bg-white border border-gray-300 focus-within:border-2 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
      filled:
        'bg-gray-50 border border-transparent focus-within:bg-white focus-within:border-2 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
      outline:
        'bg-transparent border-2 border-gray-300 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgb(37_99_235_/_0.1)]',
    };

    // 大小樣式
    const sizes = {
      sm: 'h-8 px-3 py-1 text-sm',
      md: 'h-10 px-3 py-2 text-sm',
      lg: 'h-12 px-4 py-3 text-base',
    };

    // 狀態樣式
    const statusStyles = {
      default: '',
      error:
        'border-error focus-within:border-2 focus-within:border-error focus-within:shadow-[0_0_0_3px_rgb(239_68_68_/_0.1)]',
      success:
        'border-success focus-within:border-2 focus-within:border-success focus-within:shadow-[0_0_0_3px_rgb(16_185_129_/_0.1)]',
      warning:
        'border-warning focus-within:border-2 focus-within:border-warning focus-within:shadow-[0_0_0_3px_rgb(251_191_36_/_0.1)]',
    };

    // 顯示清除按鈕的條件
    const showClearButton = shouldShowClearButton(
      clearable || false,
      currentValue,
      disabled || false,
    );

    const displayContent = getDisplayContent();

    // 主容器樣式
    const containerStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      statusStyles[status],
      disabled && 'cursor-not-allowed opacity-50',
      className,
    );

    // 檢查選項是否被選中
    const isOptionSelected = useCallback(
      (option: SelectOption) => {
        if (multiple && Array.isArray(currentValue)) {
          return currentValue.includes(option.value);
        }
        return currentValue === option.value;
      },
      [currentValue, multiple],
    );

    return (
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ width: width }}
        {...props}
      >
        {/* 選擇器主體 */}
        <div
          ref={ref}
          className={containerStyles}
          onClick={() => {
            if (!disabled) {
              if (!isOpen) {
                calculatePosition();
              }
              setIsOpen(!isOpen);
            }
          }}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        >
          <div className="flex items-center justify-between w-full min-w-0">
            {/* 顯示值或搜尋輸入 */}
            <div className="flex-1 min-w-0 flex items-center">
              {filterable && isOpen ? (
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full bg-transparent outline-none"
                  onClick={(e) => e.stopPropagation()}
                  autoComplete={autoComplete}
                />
              ) : displayContent ? (
                typeof displayContent === 'string' ? (
                  <span className="truncate">{displayContent}</span>
                ) : (
                  displayContent
                )
              ) : (
                <span className="text-gray-400 truncate">{placeholder}</span>
              )}
            </div>

            {/* 右側圖示 - 清除按鈕與下拉箭頭共用位置 */}
            <div className="flex items-center ml-2">
              {showClearButton ? (
                renderClearButton(showClearButton, handleClear, '清除選擇')
              ) : (
                <ChevronDownIcon
                  className={cn(
                    'h-4 w-4 text-gray-400 transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                />
              )}
            </div>
          </div>
        </div>

        {/* 下拉選項 - 使用 Portal 渲染到 body */}
        {isOpen &&
          createPortal(
            <div
              ref={dropdownRef}
              className="absolute bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: 'max-content',
                minWidth: dropdownPosition.width,
                maxWidth: 'min(400px, 100vw - 32px)',
                zIndex: 9999,
              }}
              role="listbox"
              aria-multiselectable={multiple}
            >
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-gray-500 text-center">{noDataText}</div>
              ) : (
                filteredOptions.map((option, index) => {
                  const isSelected = isOptionSelected(option);
                  const isHighlighted = index === highlightedIndex;

                  return (
                    <div
                      key={option.value}
                      className={cn(
                        'px-3 py-2 text-sm cursor-pointer transition-colors',
                        'hover:bg-gray-100 focus:bg-gray-100',
                        isHighlighted && 'bg-gray-100',
                        isSelected &&
                          'bg-primary-50 text-primary-600 font-medium border-primary-600',
                        option.disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent',
                      )}
                      onClick={() => handleOptionSelect(option)}
                      role="option"
                      aria-selected={isSelected}
                      onMouseEnter={() => setHighlightedIndex(index)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex-1 truncate">{option.label}</span>
                        {multiple && isSelected && (
                          <CheckIcon className="h-4 w-4 ml-2 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>,
            document.body,
          )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };

import React, { useState, useRef, useEffect, useCallback } from 'react';

import { createPortal } from 'react-dom';

import { useClickOutside, usePortal } from '@/hooks';
import { cn } from '@/utils/cn';

import { Calendar } from './Calendar';
import { TimePicker } from './TimePicker';
import type { DatePickerProps } from './types';
import { formatDate, parseDate, isDateDisabled } from './utils';

/**
 * DatePicker 日期選擇器組件
 * 支援日期、時間、日期時間、年份四種模式
 */
const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      status = 'default',
      mode = 'date',
      value,
      defaultValue,
      clearable = false,
      minDate,
      maxDate,
      disabledDates,
      format,
      showToday: _showToday = true,
      showNow: _showNow = true,
      showSeconds = false,
      timePickerStyle = 'button',
      autoComplete = 'off',
      onChange,
      onBlur,
      onClear,
      disabled,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState<Date | null>(() => {
      if (value !== undefined) {
        return typeof value === 'string' ? parseDate(value, mode) : value;
      }
      if (defaultValue !== undefined) {
        return typeof defaultValue === 'string' ? parseDate(defaultValue, mode) : defaultValue;
      }
      return null;
    });

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tempTimeValue, setTempTimeValue] = useState<Date | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentValue =
      value !== undefined
        ? typeof value === 'string'
          ? parseDate(value, mode)
          : value
        : internalValue;

    // 使用 Portal hook 處理位置計算
    const { position: dropdownPosition, calculatePosition } = usePortal({
      triggerRef: containerRef,
      isOpen,
      offset: 4,
    });

    // 應用暫存的時間值
    const applyTempTimeValue = useCallback(() => {
      if (mode === 'time' && tempTimeValue) {
        const newValue = tempTimeValue;

        if (value === undefined) {
          setInternalValue(newValue);
        }

        const dateString = formatDate(newValue, format || '', mode, showSeconds);
        onChange?.(dateString);

        // 清除暫存值
        setTempTimeValue(null);
      }
    }, [mode, tempTimeValue, value, setInternalValue, format, showSeconds, onChange]);

    // 更新輸入框顯示值
    useEffect(() => {
      // time 模式下，如果有暫存值，優先顯示暫存值
      const valueToDisplay = mode === 'time' && tempTimeValue ? tempTimeValue : currentValue;
      const displayValue = formatDate(valueToDisplay, format || '', mode, showSeconds);
      setInputValue(displayValue);
    }, [currentValue, tempTimeValue, format, mode, showSeconds]);

    // 點擊外部關閉下拉選單
    useClickOutside(
      [containerRef, dropdownRef],
      () => {
        // time 模式下，關閉時應用暫存的時間值
        if (mode === 'time') {
          applyTempTimeValue();
        }
        setIsOpen(false);
      },
      isOpen,
    );

    // 基礎樣式
    const baseStyles =
      'w-full rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer';

    // 變體樣式
    const variants = {
      default:
        'bg-white border border-gray-300 focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
      filled:
        'bg-gray-50 border border-transparent focus:bg-white focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
      outline:
        'bg-transparent border-2 border-gray-300 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
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
        'border-error-600 focus:border-2 focus:border-error-600 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
      success:
        'border-success-600 focus:border-2 focus:border-success-600 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]',
      warning:
        'border-warning-600 focus:border-2 focus:border-warning-600 focus:shadow-[0_0_0_3px_rgba(234,179,8,0.1)]',
    };

    const handleDateSelect = (date: Date) => {
      let newValue: Date;

      if (mode === 'datetime') {
        // 在 datetime 模式下，保留現有的時間部分
        newValue = new Date(date);
        const timeSource = currentValue || new Date();
        newValue.setHours(
          timeSource.getHours(),
          timeSource.getMinutes(),
          timeSource.getSeconds(),
          timeSource.getMilliseconds(),
        );
      } else {
        newValue = date;
      }

      if (value === undefined) {
        setInternalValue(newValue);
      }

      const dateString = formatDate(newValue, format || '', mode, showSeconds);
      onChange?.(dateString);

      if (mode === 'date' || mode === 'year') {
        setIsOpen(false);
      }
    };

    const handleTimeSelect = (time: Date) => {
      if (mode === 'time') {
        // time 模式下，暫存時間值，不立即應用
        setTempTimeValue(time);
      } else {
        // 其他模式立即應用
        let newValue: Date;
        if (mode === 'datetime' && currentValue) {
          // 合併日期和時間
          newValue = new Date(currentValue);
          newValue.setHours(
            time.getHours(),
            time.getMinutes(),
            showSeconds ? time.getSeconds() : 0,
            0,
          );
        } else {
          newValue = time;
        }

        if (value === undefined) {
          setInternalValue(newValue);
        }

        const dateString = formatDate(newValue, format || '', mode, showSeconds);
        onChange?.(dateString);
      }
    };

    // 時間選擇確認處理
    const handleTimeConfirm = () => {
      applyTempTimeValue();
      setIsOpen(false);
    };

    // 時間選擇取消處理
    const handleTimeCancel = () => {
      setTempTimeValue(null); // 清除暫存值，不應用
      setIsOpen(false);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue(null);
      }
      setInputValue('');
      onChange?.('');
      onClear?.();
      setIsOpen(false);
    };

    const handleInputClick = () => {
      if (!disabled) {
        // 如果面板未打開，則打開面板
        if (!isOpen) {
          calculatePosition();
          setIsOpen(true);
          // time 模式下，初始化暫存值為當前值
          if (mode === 'time') {
            setTempTimeValue(currentValue);
          }
        }
      }
    };

    // 處理手動輸入
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputValue = e.target.value;
      setInputValue(newInputValue);
    };

    // 處理輸入框失焦
    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // 檢查焦點是否轉移到 dropdown 內
      const relatedTarget = e.relatedTarget as Node;
      if (dropdownRef.current && relatedTarget && dropdownRef.current.contains(relatedTarget)) {
        // 焦點轉移到 dropdown 內，不執行 blur 邏輯
        return;
      }

      // 嘗試解析輸入的日期
      if (inputValue.trim()) {
        const parsedDate = parseDate(inputValue, mode);

        if (parsedDate && !isNaN(parsedDate.getTime())) {
          // 檢查是否在允許的範圍內
          const isDisabled = isDateDisabled(parsedDate, minDate, maxDate, disabledDates);

          if (!isDisabled) {
            // 有效日期，更新值
            if (value === undefined) {
              setInternalValue(parsedDate);
            }

            const dateString = formatDate(parsedDate, format || '', mode, showSeconds);
            onChange?.(dateString);
            setInputValue(dateString);
          } else {
            // 日期被禁用，恢復原值
            const displayValue = formatDate(currentValue, format || '', mode, showSeconds);
            setInputValue(displayValue);
          }
        } else {
          // 無效日期，恢復原值
          const displayValue = formatDate(currentValue, format || '', mode, showSeconds);
          setInputValue(displayValue);
        }
      } else {
        // 空值，清除選擇
        if (clearable) {
          handleClear();
        } else {
          // 不允許清除，恢復原值
          const displayValue = formatDate(currentValue, format || '', mode, showSeconds);
          setInputValue(displayValue);
        }
      }

      // 調用外部傳入的 onBlur（如果有）
      onBlur?.(e);
    };

    // 處理輸入框聚焦
    const handleInputFocus = () => {
      // 聚焦時打開面板（如果尚未打開）
      if (!isOpen && !disabled) {
        calculatePosition();
        setIsOpen(true);
        // time 模式下，初始化暫存值為當前值
        if (mode === 'time') {
          setTempTimeValue(currentValue);
        }
      }
    };

    // 處理鍵盤事件
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        inputRef.current?.blur(); // 觸發失焦事件來驗證輸入
      } else if (e.key === 'Escape') {
        e.preventDefault();
        // 恢復原值並關閉面板
        const displayValue = formatDate(currentValue, format || '', mode, showSeconds);
        setInputValue(displayValue);
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    // 顯示清除按鈕的條件
    const showClearButton = clearable && currentValue && !disabled;

    // 輸入框樣式
    const inputStyles = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      statusStyles[status],
      showClearButton && 'pr-10',
      className,
    );

    // 獲取預設 placeholder
    const getDefaultPlaceholder = () => {
      switch (mode) {
        case 'date':
          return '請選擇日期';
        case 'time':
          return '請選擇時間';
        case 'datetime':
          return '請選擇日期時間';
        case 'year':
          return '請選擇年份';
        default:
          return '請選擇';
      }
    };

    return (
      <div
        ref={containerRef}
        className="relative inline-block w-full"
      >
        {/* 輸入框 */}
        <div className="relative">
          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
              }
            }}
            type="text"
            value={inputValue}
            placeholder={placeholder || getDefaultPlaceholder()}
            onClick={handleInputClick}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={inputStyles}
            aria-invalid={status === 'error'}
            autoComplete={autoComplete}
            {...props}
          />

          {/* 日曆圖示 */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {!showClearButton && (
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mode === 'time' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                )}
              </svg>
            )}
          </div>

          {/* 清除按鈕 */}
          {showClearButton && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none pointer-events-auto"
                aria-label="清除選擇"
                tabIndex={0}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* 下拉面板 - 使用 Portal 渲染到 body */}
        {isOpen &&
          createPortal(
            <div
              ref={dropdownRef}
              className="absolute bg-white border border-gray-300 rounded-md shadow-lg z-50"
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
                width: 'max-content',
              }}
              onMouseDown={(e) => {
                // 阻止面板上的點擊導致 input 失焦
                e.preventDefault();
              }}
            >
              {(mode === 'date' || mode === 'year') && (
                <div className="w-80">
                  <Calendar
                    currentDate={currentValue || new Date()}
                    selectedDate={currentValue}
                    onDateSelect={handleDateSelect}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    mode={mode}
                  />
                </div>
              )}

              {mode === 'time' && (
                <div className={timePickerStyle === 'scroll' ? 'w-80' : 'w-64'}>
                  <TimePicker
                    selectedTime={mode === 'time' ? tempTimeValue || currentValue : currentValue}
                    onTimeSelect={handleTimeSelect}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    showSeconds={showSeconds}
                    style={timePickerStyle}
                    showConfirmButton={false}
                    onConfirm={handleTimeConfirm}
                    onCancel={handleTimeCancel}
                  />
                </div>
              )}

              {mode === 'datetime' && (
                <div className="w-80">
                  <Calendar
                    currentDate={currentValue || new Date()}
                    selectedDate={currentValue}
                    onDateSelect={handleDateSelect}
                    minDate={minDate}
                    maxDate={maxDate}
                    showToday={false}
                    disabledDates={disabledDates}
                  />
                  <TimePicker
                    selectedTime={currentValue}
                    onTimeSelect={handleTimeSelect}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
                    showSeconds={showSeconds}
                    style="scroll"
                    showConfirmButton={false}
                    showNow={false}
                    onConfirm={handleTimeConfirm}
                    onCancel={handleTimeCancel}
                  />
                </div>
              )}
            </div>,
            document.body,
          )}
      </div>
    );
  },
);

DatePicker.displayName = 'DatePicker';

export { DatePicker };

import React, { useState, useRef, useEffect, useCallback } from 'react';

import { createPortal } from 'react-dom';

import { useClickOutside, usePortal } from '@/hooks';
import { cn } from '@/utils/cn';

export type DatePickerMode = 'date' | 'time' | 'datetime';

export interface DatePickerProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange' | 'value' | 'defaultValue'
  > {
  /**
   * 日期選擇器的視覺樣式變體
   */
  variant?: 'default' | 'filled' | 'outline';
  /**
   * 日期選擇器的大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 日期選擇器的狀態
   */
  status?: 'default' | 'error' | 'success' | 'warning';
  /**
   * 選擇器模式
   */
  mode?: DatePickerMode;
  /**
   * 當前值（Date 對象或 ISO 字串）
   */
  value?: Date | string | null;
  /**
   * 預設值
   */
  defaultValue?: Date | string | null;
  /**
   * 是否顯示清除按鈕
   */
  clearable?: boolean;
  /**
   * 最小日期
   */
  minDate?: Date | string;
  /**
   * 最大日期
   */
  maxDate?: Date | string;
  /**
   * 禁用的日期（函數或日期陣列）
   */
  disabledDates?: Date[] | ((date: Date) => boolean);
  /**
   * 日期格式化字串
   */
  format?: string;
  /**
   * 是否顯示今天按鈕
   */
  showToday?: boolean;
  /**
   * 是否顯示現在按鈕（時間模式）
   */
  showNow?: boolean;
  /**
   * 是否顯示秒數（時間和日期時間模式）
   */
  showSeconds?: boolean;
  /**
   * 時間選擇器樣式（按鈕式或滾輪式）
   */
  timePickerStyle?: 'button' | 'scroll';
  /**
   * 自動完成屬性
   */
  autoComplete?: string;
  /**
   * 值改變時的回調
   */
  onChange?: (dateString: string) => void;
  /**
   * 清除按鈕的回調函數
   */
  onClear?: () => void;
}

// 日期工具函數
const formatDate = (
  date: Date | null,
  format: string,
  mode: DatePickerMode,
  showSeconds: boolean = false,
): string => {
  if (!date) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // 預設格式
  if (!format) {
    switch (mode) {
      case 'date':
        return `${year}-${month}-${day}`;
      case 'time':
        return showSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
      case 'datetime':
        return showSeconds
          ? `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
          : `${year}-${month}-${day} ${hours}:${minutes}`;
      default:
        return `${year}-${month}-${day}`;
    }
  }

  // 自訂格式
  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
};

const parseDate = (dateString: string, mode: DatePickerMode): Date | null => {
  if (!dateString) return null;

  try {
    // 嘗試解析不同格式
    let date: Date;

    if (mode === 'time') {
      // 時間格式 HH:mm 或 HH:mm:ss
      const today = new Date();
      const timeParts = dateString.trim().split(':');
      if (timeParts.length >= 2) {
        date = new Date(today);
        date.setHours(parseInt(timeParts[0] || '0', 10));
        date.setMinutes(parseInt(timeParts[1] || '0', 10));
        date.setSeconds(timeParts[2] ? parseInt(timeParts[2], 10) : 0);
      } else {
        return null;
      }
    } else {
      // 日期或日期時間格式
      const trimmed = dateString.trim();

      // 支援多種日期格式
      // 1. YYYY-MM-DD 或 YYYY/MM/DD
      // 2. YYYY-MM-DD HH:mm 或 YYYY-MM-DD HH:mm:ss
      // 3. YYYY/MM/DD HH:mm 或 YYYY/MM/DD HH:mm:ss

      // 替換斜線為破折號以統一格式
      const normalized = trimmed.replace(/\//g, '-');

      // 嘗試解析
      date = new Date(normalized);

      // 如果解析失敗，嘗試其他格式
      if (isNaN(date.getTime())) {
        // 嘗試 ISO 格式
        date = new Date(trimmed);
      }
    }

    return isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
};

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isDateDisabled = (
  date: Date,
  minDate?: Date | string,
  maxDate?: Date | string,
  disabledDates?: Date[] | ((date: Date) => boolean),
): boolean => {
  // 檢查最小日期
  if (minDate) {
    const min = typeof minDate === 'string' ? new Date(minDate) : minDate;
    if (date < min) return true;
  }

  // 檢查最大日期
  if (maxDate) {
    const max = typeof maxDate === 'string' ? new Date(maxDate) : maxDate;
    if (date > max) return true;
  }

  // 檢查禁用日期
  if (disabledDates) {
    if (typeof disabledDates === 'function') {
      return disabledDates(date);
    } else {
      return disabledDates.some((disabledDate) => isSameDay(date, disabledDate));
    }
  }

  return false;
};

// 日曆組件
interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date | string;
  maxDate?: Date | string;
  disabledDates?: Date[] | ((date: Date) => boolean);
  showToday?: boolean;
}

type CalendarView = 'date' | 'month' | 'year';

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  disabledDates,
  showToday = true,
}) => {
  const [viewDate, setViewDate] = useState(currentDate);
  const [calendarView, setCalendarView] = useState<CalendarView>('date');

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // 獲取當月第一天
  const firstDay = new Date(year, month, 1);

  // 獲取日曆顯示的開始日期（包含上個月的日期）
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  // 生成日曆日期
  const calendarDates: Date[] = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    // 6週 * 7天
    calendarDates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  const monthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ];

  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  const goToPreviousMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setViewDate(today);
    onDateSelect(today);
  };

  // 年份選擇處理
  const handleYearSelect = (selectedYear: number) => {
    setViewDate(new Date(selectedYear, month, 1));
    setCalendarView('month');
  };

  // 月份選擇處理
  const handleMonthSelect = (selectedMonth: number) => {
    setViewDate(new Date(year, selectedMonth, 1));
    setCalendarView('date');
  };

  // 切換到年份視圖
  const switchToYearView = () => {
    setCalendarView('year');
  };

  // 切換到月份視圖
  const switchToMonthView = () => {
    setCalendarView('month');
  };

  // 返回到日期視圖（保留以備未來使用）
  // const backToDateView = () => {
  //   setCalendarView('date');
  // };

  // 年份視圖導航
  const goToPreviousDecade = () => {
    setViewDate(new Date(year - 10, month, 1));
  };

  const goToNextDecade = () => {
    setViewDate(new Date(year + 10, month, 1));
  };

  // 檢查今天是否在允許的日期範圍內
  const isTodayAllowed = showToday && !isDateDisabled(new Date(), minDate, maxDate, disabledDates);

  // 渲染年份選擇器
  const renderYearPicker = () => {
    const startYear = Math.floor(year / 10) * 10;
    const years = Array.from({ length: 12 }, (_, i) => startYear - 1 + i);

    return (
      <div className="p-4 bg-white border rounded-lg shadow-lg w-full">
        {/* 年份導航 */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={goToPreviousDecade}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="text-lg font-semibold">
            {startYear} - {startYear + 9}
          </div>

          <button
            type="button"
            onClick={goToNextDecade}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* 年份網格 */}
        <div className="grid grid-cols-3 gap-2">
          {years.map((y) => {
            const isCurrentYear = y === new Date().getFullYear();
            const isSelectedYear = y === year;
            const isOutOfRange = y < startYear || y > startYear + 9;

            return (
              <button
                key={y}
                type="button"
                onClick={() => handleYearSelect(y)}
                className={cn(
                  'p-3 text-sm rounded hover:bg-gray-100 transition-colors',
                  isOutOfRange && 'text-gray-400',
                  !isOutOfRange && 'text-gray-900',
                  isCurrentYear && 'bg-blue-100 text-blue-600 font-semibold',
                  isSelectedYear && 'bg-primary-600 text-white hover:bg-primary-700',
                )}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // 渲染月份選擇器
  const renderMonthPicker = () => {
    return (
      <div className="p-4 bg-white border rounded-lg shadow-lg w-full">
        {/* 月份導航 */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setViewDate(new Date(year - 1, month, 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={switchToYearView}
            className="text-lg font-semibold hover:text-primary-600 transition-colors cursor-pointer"
          >
            {year}年
          </button>

          <button
            type="button"
            onClick={() => setViewDate(new Date(year + 1, month, 1))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* 月份網格 */}
        <div className="grid grid-cols-3 gap-2">
          {monthNames.map((monthName, idx) => {
            const isCurrentMonth =
              idx === new Date().getMonth() && year === new Date().getFullYear();
            const isSelectedMonth = idx === month;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleMonthSelect(idx)}
                className={cn(
                  'p-3 text-sm rounded hover:bg-gray-100 transition-colors text-gray-900',
                  isCurrentMonth && 'bg-blue-100 text-blue-600 font-semibold',
                  isSelectedMonth && 'bg-primary-600 text-white hover:bg-primary-700',
                )}
              >
                {monthName}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // 渲染日期選擇器
  const renderDatePicker = () => {
    return (
      <div className="p-4 bg-white border rounded-lg shadow-lg w-full">
        {/* 月份導航 */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={goToPreviousMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={switchToYearView}
              className="text-lg font-semibold hover:text-primary-600 transition-colors cursor-pointer px-1"
            >
              {year}年
            </button>
            <button
              type="button"
              onClick={switchToMonthView}
              className="text-lg font-semibold hover:text-primary-600 transition-colors cursor-pointer px-1"
            >
              {monthNames[month]}
            </button>
          </div>

          <button
            type="button"
            onClick={goToNextMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* 星期標題 */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="p-2 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* 日期網格 */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDates.map((date, index) => {
            const isCurrentMonth = date.getMonth() === month;
            const isToday = isSameDay(date, new Date());
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const disabled = isDateDisabled(date, minDate, maxDate, disabledDates);

            return (
              <button
                key={index}
                type="button"
                onClick={() => !disabled && onDateSelect(date)}
                disabled={disabled}
                className={cn(
                  'p-2 text-sm rounded hover:bg-gray-100 transition-colors',
                  !isCurrentMonth && 'text-gray-400',
                  isCurrentMonth && 'text-gray-900',
                  isToday && 'bg-blue-100 text-blue-600 font-semibold',
                  isSelected && 'bg-primary-600 text-white hover:bg-primary-700',
                  disabled && 'cursor-not-allowed opacity-50 hover:bg-transparent',
                )}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        {/* 今天按鈕 - 只有當今天在允許範圍內時才顯示 */}
        {isTodayAllowed && (
          <div className="mt-4 pt-4 border-t">
            <button
              type="button"
              onClick={goToToday}
              className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              今天
            </button>
          </div>
        )}
      </div>
    );
  };

  // 根據當前視圖渲染對應的選擇器
  if (calendarView === 'year') {
    return renderYearPicker();
  }

  if (calendarView === 'month') {
    return renderMonthPicker();
  }

  return renderDatePicker();
};

// 時間選擇器組件
interface TimePickerProps {
  selectedTime: Date | null;
  onTimeSelect: (time: Date) => void;
  minDate?: Date | string;
  maxDate?: Date | string;
  disabledDates?: Date[] | ((date: Date) => boolean);
  showSeconds?: boolean;
  style?: 'button' | 'scroll';
  showConfirmButton?: boolean;
  showNow?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const TimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onTimeSelect,
  minDate,
  maxDate,
  disabledDates,
  showSeconds = false,
  style = 'button',
  showConfirmButton = false,
  showNow = true,
  onConfirm,
  onCancel,
}) => {
  const [hours, setHours] = useState(selectedTime?.getHours() || 0);
  const [minutes, setMinutes] = useState(selectedTime?.getMinutes() || 0);
  const [seconds, setSeconds] = useState(selectedTime?.getSeconds() || 0);

  const handleTimeChange = (newHours: number, newMinutes: number, newSeconds: number = 0) => {
    const newTime = new Date();
    newTime.setHours(newHours, newMinutes, showSeconds ? newSeconds : 0, 0);
    if (!showConfirmButton) {
      onTimeSelect(newTime);
    }
  };

  const handleHoursChange = (newHours: number) => {
    setHours(newHours);
    handleTimeChange(newHours, minutes, seconds);
  };

  const handleMinutesChange = (newMinutes: number) => {
    setMinutes(newMinutes);
    handleTimeChange(hours, newMinutes, seconds);
  };

  const handleSecondsChange = (newSeconds: number) => {
    setSeconds(newSeconds);
    handleTimeChange(hours, minutes, newSeconds);
  };

  const goToNow = () => {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    setHours(currentHours);
    setMinutes(currentMinutes);
    setSeconds(currentSeconds);
    handleTimeChange(currentHours, currentMinutes, currentSeconds);
  };

  // 確認按鈕處理
  const handleConfirm = () => {
    const newTime = new Date();
    newTime.setHours(hours, minutes, showSeconds ? seconds : 0, 0);
    onTimeSelect(newTime);
    onConfirm?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // 檢查現在時間是否在允許範圍內
  const isNowAllowed = showNow && !isDateDisabled(new Date(), minDate, maxDate, disabledDates);

  // 下拉選單式選擇器組件
  const DropdownPicker: React.FC<{
    value: number;
    max: number;
    onChange: (value: number) => void;
    label: string;
  }> = ({ value, max, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = Array.from({ length: max }, (_, i) => i);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 點擊外部關閉下拉選單
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleSelect = (newValue: number) => {
      onChange(newValue);
      setIsOpen(false);
    };

    return (
      <div className="flex flex-col items-center">
        <div className="text-xs text-gray-500 mb-2">{label}</div>
        <div
          className="relative"
          ref={dropdownRef}
        >
          {/* 選擇器按鈕 */}
          <button
            type="button"
            className="my-2 w-16 h-10 px-2 py-1 text-lg font-mono bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {String(value).padStart(2, '0')}
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* 下拉選項 */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-1 w-16 max-h-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`w-full px-2 py-1 text-lg font-mono text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${
                    option === value
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'text-gray-700'
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {String(option).padStart(2, '0')}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (style === 'scroll') {
    return (
      <div className="p-4 bg-white border rounded-lg shadow-lg w-full">
        <div className="flex items-center justify-center space-x-6 mb-4">
          <DropdownPicker
            value={hours}
            max={24}
            onChange={handleHoursChange}
            label="時"
          />
          <DropdownPicker
            value={minutes}
            max={60}
            onChange={handleMinutesChange}
            label="分"
          />
          {showSeconds && (
            <DropdownPicker
              value={seconds}
              max={60}
              onChange={handleSecondsChange}
              label="秒"
            />
          )}
        </div>

        {/* 確認/取消按鈕 */}
        {showConfirmButton && (
          <div className="flex space-x-2 pt-4 border-t">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              取消
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded transition-colors"
            >
              確認
            </button>
          </div>
        )}

        {/* 現在按鈕 */}
        {isNowAllowed && !showConfirmButton && (
          <div className="pt-4 border-t">
            <button
              type="button"
              onClick={goToNow}
              className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
            >
              現在
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border rounded-lg shadow-lg w-full">
      <div className="flex items-center justify-center space-x-4 mb-4">
        {/* 小時選擇 */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => handleHoursChange((hours + 1) % 24)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div className="px-3 py-2 text-lg font-mono border rounded">
            {String(hours).padStart(2, '0')}
          </div>
          <button
            type="button"
            onClick={() => handleHoursChange((hours - 1 + 24) % 24)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="text-lg font-mono">:</div>

        {/* 分鐘選擇 */}
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => handleMinutesChange((minutes + 1) % 60)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <div className="px-3 py-2 text-lg font-mono border rounded">
            {String(minutes).padStart(2, '0')}
          </div>
          <button
            type="button"
            onClick={() => handleMinutesChange((minutes - 1 + 60) % 60)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* 秒數選擇 - 只有當 showSeconds 為 true 時才顯示 */}
        {showSeconds && (
          <>
            <div className="text-lg font-mono">:</div>
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => handleSecondsChange((seconds + 1) % 60)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
              <div className="px-3 py-2 text-lg font-mono border rounded">
                {String(seconds).padStart(2, '0')}
              </div>
              <button
                type="button"
                onClick={() => handleSecondsChange((seconds - 1 + 60) % 60)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* 確認/取消按鈕 - 只有當 showConfirmButton 為 true 時才顯示 */}
      {showConfirmButton && (
        <div className="flex space-x-2 pt-4 border-t">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded transition-colors"
          >
            確認
          </button>
        </div>
      )}

      {/* 現在按鈕 - 只有當現在時間在允許範圍內時才顯示 */}
      {isNowAllowed && (
        <div className="pt-4 border-t">
          <button
            type="button"
            onClick={goToNow}
            className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            現在
          </button>
        </div>
      )}
    </div>
  );
};

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
      const displayValue = formatDate(currentValue, format || '', mode, showSeconds);
      setInputValue(displayValue);
    }, [currentValue, format, mode, showSeconds]);

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

      if (mode === 'date') {
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
    const handleInputBlur = () => {
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
            >
              {mode === 'date' && (
                <div className="w-80">
                  <Calendar
                    currentDate={currentValue || new Date()}
                    selectedDate={currentValue}
                    onDateSelect={handleDateSelect}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledDates={disabledDates}
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

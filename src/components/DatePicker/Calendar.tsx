import React, { useState } from 'react';

import { cn } from '@/utils/cn';

import type { CalendarProps, CalendarView } from './types';
import { isDateDisabled, isSameDay } from './utils';

/**
 * 日曆組件
 * 支援日期、月份、年份選擇
 */
export const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  disabledDates,
  showToday = true,
  mode = 'date',
}) => {
  const [viewDate, setViewDate] = useState(currentDate);
  // 根據 mode 決定初始視圖
  const [calendarView, setCalendarView] = useState<CalendarView>(mode === 'year' ? 'year' : 'date');

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
    if (mode === 'year') {
      // year 模式：直接選擇年份並關閉
      const newDate = new Date(selectedYear, 0, 1);
      onDateSelect(newDate);
    } else {
      // 其他模式：切換到月份視圖
      setViewDate(new Date(selectedYear, month, 1));
      setCalendarView('month');
    }
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

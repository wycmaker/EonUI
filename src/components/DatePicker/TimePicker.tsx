import React, { useState } from 'react';

import { DropdownPicker } from './DropdownPicker';
import type { TimePickerProps } from './types';
import { isDateDisabled } from './utils';

/**
 * 時間選擇器組件
 * 支援按鈕式和滾輪式兩種樣式
 */
export const TimePicker: React.FC<TimePickerProps> = ({
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

  // 滾輪式樣式
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

  // 按鈕式樣式
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

        {/* 秒數選擇 */}
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

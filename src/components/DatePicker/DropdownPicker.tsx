import React, { useState, useRef, useEffect } from 'react';

import type { DropdownPickerProps } from './types';

/**
 * 下拉選單式選擇器組件（用於時間選擇）
 * 獨立組件以避免父組件重新渲染時狀態重置的問題
 */
export const DropdownPicker: React.FC<DropdownPickerProps> = React.memo(
  ({ value, max, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const options = Array.from({ length: max }, (_, i) => i);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 點擊外部關閉下拉選單
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const clickedOnScrollContainer = target.closest('.overflow-y-auto');

        if (dropdownRef.current?.contains(target) || clickedOnScrollContainer) {
          return;
        }

        setIsOpen(false);
      };

      document.addEventListener('mousedown', handleClickOutside);
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
  },
);

DropdownPicker.displayName = 'DropdownPicker';

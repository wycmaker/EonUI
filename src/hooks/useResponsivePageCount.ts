import { useState, useEffect } from 'react';

export type PaginationLayoutItem =
  | 'first'
  | 'prev'
  | 'next'
  | 'last'
  | 'pages'
  | 'jumper'
  | 'total'
  | 'sizes';

/**
 * 響應式分頁數量計算 Hook
 * 根據容器寬度和佈局元素計算最大可見頁碼數
 *
 * @param containerRef - 容器元素的 ref
 * @param layout - 佈局配置陣列
 * @returns 最大可見頁碼數
 */
export const useResponsivePageCount = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  layout: PaginationLayoutItem[],
) => {
  const [maxVisible, setMaxVisible] = useState(7);

  useEffect(() => {
    const updateMaxVisible = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;

        // 計算非頁碼元素佔用的大致寬度
        let reservedWidth = 0;

        // 估算各元素寬度
        if (layout.includes('prev')) reservedWidth += 80; // 上一頁按鈕
        if (layout.includes('next')) reservedWidth += 80; // 下一頁按鈕
        if (layout.includes('jumper')) reservedWidth += 120; // 跳轉輸入框
        if (layout.includes('total')) reservedWidth += 150; // 總數顯示
        if (layout.includes('sizes')) reservedWidth += 80; // 每頁數量選擇器

        // 加上間距
        reservedWidth += (layout.length - 1) * 16; // 元素間距

        // 計算可用於頁碼的寬度
        const availableWidth = width - reservedWidth;
        const pageButtonWidth = 40; // 每個頁碼按鈕的寬度

        // 根據可用寬度計算最大頁碼數，但設定合理的範圍
        let calculatedMax = Math.floor(availableWidth / pageButtonWidth);
        calculatedMax = Math.max(3, Math.min(calculatedMax, 9)); // 限制在 3-9 之間

        // 確保是奇數，以便當前頁居中
        if (calculatedMax % 2 === 0) {
          calculatedMax -= 1;
        }

        setMaxVisible(calculatedMax);
      }
    };

    updateMaxVisible();
    window.addEventListener('resize', updateMaxVisible);
    return () => window.removeEventListener('resize', updateMaxVisible);
  }, [containerRef, layout]);

  return maxVisible;
};

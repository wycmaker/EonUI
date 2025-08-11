import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合併 Tailwind CSS 類名的工具函數
 * 使用 clsx 處理條件類名，使用 tailwind-merge 處理衝突的 Tailwind 類名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

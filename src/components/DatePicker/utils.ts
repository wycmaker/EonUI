import type { DatePickerMode } from './types';

/**
 * 格式化日期為字串
 */
export const formatDate = (
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
      case 'year':
        return `${year}`;
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

/**
 * 解析日期字串為 Date 對象
 */
export const parseDate = (dateString: string, mode: DatePickerMode): Date | null => {
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
    } else if (mode === 'year') {
      // 年份格式 YYYY
      const trimmed = dateString.trim();
      const year = parseInt(trimmed, 10);
      if (isNaN(year) || year < 1000 || year > 9999) {
        return null;
      }
      date = new Date(year, 0, 1); // 設定為該年的 1 月 1 日
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

/**
 * 檢查兩個日期是否為同一天
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * 檢查日期是否被禁用
 */
export const isDateDisabled = (
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

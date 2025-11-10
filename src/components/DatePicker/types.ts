export type DatePickerMode = 'date' | 'time' | 'datetime' | 'year';

export type CalendarView = 'date' | 'month' | 'year';

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
  /**
   * 失焦時的回調
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date | string;
  maxDate?: Date | string;
  disabledDates?: Date[] | ((date: Date) => boolean);
  showToday?: boolean;
  mode?: DatePickerMode;
}

export interface TimePickerProps {
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

export interface DropdownPickerProps {
  value: number;
  max: number;
  onChange: (value: number) => void;
  label: string;
}

// 導入 Tailwind CSS
import './index.css';

// 導出所有組件 - 使用具名導出支援 tree-shaking
export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps } from './components/Input/Input';

export { Typography } from './components/Typography/Typography';
export type { TypographyProps } from './components/Typography/Typography';

export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';

export { Grid } from './components/Grid/Grid';
export type { GridProps } from './components/Grid/Grid';

export { Radio, RadioGroup } from './components/Radio';
export type { RadioProps, RadioGroupProps } from './components/Radio';

export { Layout } from './components/Layout';
export type { LayoutProps } from './components/Layout';

export { Checkbox, CheckboxGroup } from './components/Checkbox';
export type { CheckboxProps, CheckboxGroupProps } from './components/Checkbox';

export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/DatePicker';

export { Select } from './components/Select';
export type { SelectProps, SelectOption } from './components/Select';

export { Upload } from './components/Upload/Upload';
export type { UploadProps } from './components/Upload/Upload';

export { Form, FormItem, useForm, Rules, useFormContext } from './components/Form';
export type {
  FormProps,
  FormItemProps,
  ValidationRule,
  FieldError,
  FormContextValue,
} from './components/Form';

export { Table, TableColumn } from './components/Table';
export type { TableProps, TableColumnProps, ColumnDef, SortConfig } from './components/Table';

export { Pagination } from './components/Pagination';
export type { PaginationProps, PaginationLayoutItem } from './components/Pagination';

export {
  Alert,
  AlertContainer,
  AlertProvider,
  AlertService,
  alertManager,
} from './components/Alert';
export type {
  AlertProps,
  AlertType,
  AlertPosition,
  AlertInstance,
  AlertServiceOptions,
  AlertServiceMethod,
  AlertGlobalConfig,
} from './components/Alert';

export { Modal, ModalProvider, ModalService, modalManager } from './components/Modal';
export type { ModalProps, ModalInstance } from './components/Modal';

export {
  MessageBox,
  MessageBoxProvider,
  MessageBoxService,
  messageBoxManager,
} from './components/MessageBox';
export type {
  MessageBoxProps,
  MessageBoxType,
  MessageBoxVariant,
  MessageBoxInstance,
  MessageBoxServiceOptions,
} from './components/MessageBox';

export { Tab, TabPane, useTabContext } from './components/Tab';
export type { TabProps, TabPaneProps, TabItem } from './components/Tab';

export { Menu } from './components/Menu';
export type { MenuProps, MenuItem } from './components/Menu';

// 導出工具函數
export { cn } from './utils/cn';

// 導出設計 tokens
export * from './tokens/index.js';

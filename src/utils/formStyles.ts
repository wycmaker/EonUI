/**
 * 表單組件共用的樣式系統
 */

export type ComponentVariant = 'default' | 'filled' | 'outline';
export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentStatus = 'default' | 'error' | 'success' | 'warning';
export type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'error';

/**
 * 基礎表單樣式
 */
export const getBaseFormStyles = () =>
  'rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50';

/**
 * 變體樣式
 */
export const getVariantStyles = (variant: ComponentVariant) => {
  const variants = {
    default:
      'bg-white border border-gray-300 focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
    filled:
      'bg-gray-50 border border-transparent focus:bg-white focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
    outline:
      'bg-transparent border-2 border-gray-300 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]',
  };
  return variants[variant];
};

/**
 * 大小樣式 - 針對不同組件類型
 */
export const getSizeStyles = (
  size: ComponentSize,
  type: 'input' | 'button' | 'textarea' | 'pagination-button' | 'pagination-nav' = 'input',
) => {
  if (type === 'button') {
    const buttonSizes = {
      xs: 'h-8 px-2 py-1 text-xs min-w-16',
      sm: 'h-9 px-3 py-1.5 text-sm min-w-20',
      md: 'h-10 px-4 py-2 text-sm min-w-24',
      lg: 'h-12 px-5 py-2.5 text-base min-w-28',
      xl: 'h-14 px-6 py-3 text-lg min-w-32',
    } as const;
    return buttonSizes[size as keyof typeof buttonSizes] || buttonSizes.md;
  }

  if (type === 'textarea') {
    const textareaSizes = {
      sm: 'px-3 py-2 text-sm leading-relaxed',
      md: 'px-3 py-3 text-sm leading-relaxed',
      lg: 'px-4 py-4 text-base leading-relaxed',
    };
    return textareaSizes[size];
  }

  if (type === 'pagination-button') {
    const paginationButtonSizes = {
      sm: 'h-7 w-7 text-xs',
      md: 'h-8 w-8 text-sm',
      lg: 'h-10 w-10 text-base',
    };
    return paginationButtonSizes[size];
  }

  if (type === 'pagination-nav') {
    const paginationNavSizes = {
      sm: 'h-7 px-2 text-xs',
      md: 'h-8 px-3 text-sm',
      lg: 'h-10 px-4 text-base',
    };
    return paginationNavSizes[size];
  }

  // 預設為 input 樣式
  const inputSizes = {
    sm: 'h-8 px-3 py-1 text-sm',
    md: 'h-10 px-3 py-2 text-sm',
    lg: 'h-12 px-4 py-3 text-base',
  };
  return inputSizes[size];
};

/**
 * 狀態樣式
 */
export const getStatusStyles = (status: ComponentStatus) => {
  const statusStyles = {
    default: '',
    error:
      'border-error-600 focus:border-2 focus:border-error-600 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',
    success:
      'border-success-600 focus:border-2 focus:border-success-600 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]',
    warning:
      'border-warning-600 focus:border-2 focus:border-warning-600 focus:shadow-[0_0_0_3px_rgba(234,179,8,0.1)]',
  };
  return statusStyles[status];
};

/**
 * Alert 類型樣式映射
 */
export const getAlertTypeStyles = (type: AlertType) => {
  const alertStyles = {
    primary: {
      container: 'bg-primary-50 border-primary-200 text-primary-900',
      icon: 'text-primary-600',
      closeButton: 'text-primary-500 hover:text-primary-700 focus:ring-primary-500',
    },
    success: {
      container: 'bg-success-50 border-success-200 text-success-900',
      icon: 'text-success-600',
      closeButton: 'text-success-500 hover:text-success-700 focus:ring-success-500',
    },
    info: {
      container: 'bg-gray-50 border-gray-200 text-gray-900',
      icon: 'text-gray-600',
      closeButton: 'text-gray-500 hover:text-gray-700 focus:ring-gray-500',
    },
    warning: {
      container: 'bg-warning-50 border-warning-200 text-warning-900',
      icon: 'text-warning-600',
      closeButton: 'text-warning-500 hover:text-warning-700 focus:ring-warning-500',
    },
    error: {
      container: 'bg-error-50 border-error-200 text-error-900',
      icon: 'text-error-600',
      closeButton: 'text-error-500 hover:text-error-700 focus:ring-error-500',
    },
  };
  return alertStyles[type];
};

/**
 * Alert 基礎樣式
 */
export const getBaseAlertStyles = () =>
  'pointer-events-auto relative flex items-start rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out min-w-80 max-w-md';

/**
 * 組合表單組件樣式
 */
export const combineFormStyles = (
  variant: ComponentVariant,
  size: ComponentSize,
  status: ComponentStatus,
  type: 'input' | 'button' | 'textarea' = 'input',
  additionalClasses: string = '',
) => {
  return [
    getBaseFormStyles(),
    getVariantStyles(variant),
    getSizeStyles(size, type),
    getStatusStyles(status),
    additionalClasses,
  ]
    .filter(Boolean)
    .join(' ');
};

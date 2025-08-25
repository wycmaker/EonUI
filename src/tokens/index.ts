// EonUI Design Tokens
// 根據設計系統規範定義的設計標記

// Button 尺寸定義
export const buttonSizes = {
  xs: {
    paddingX: '0.5rem', // px-2
    paddingY: '0.25rem', // py-1
    height: '1.5rem', // h-6
    minWidth: '4rem', // min-w-16
    fontSize: '0.75rem', // text-xs
  },
  sm: {
    paddingX: '0.75rem', // px-3
    paddingY: '0.375rem', // py-1.5
    height: '2rem', // h-8
    minWidth: '5rem', // min-w-20
    fontSize: '0.875rem', // text-sm
  },
  md: {
    paddingX: '1rem', // px-4
    paddingY: '0.5rem', // py-2
    height: '2.5rem', // h-10
    minWidth: '6rem', // min-w-24
    fontSize: '0.875rem', // text-sm
  },
  lg: {
    paddingX: '1.25rem', // px-5
    paddingY: '0.625rem', // py-2.5
    height: '3rem', // h-12
    minWidth: '7rem', // min-w-28
    fontSize: '1rem', // text-base
  },
  xl: {
    paddingX: '1.5rem', // px-6
    paddingY: '0.75rem', // py-3
    height: '3.5rem', // h-14
    minWidth: '8rem', // min-w-32
    fontSize: '1.125rem', // text-lg
  },
};

// 間距系統（基於 4px 網格）
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
};

// 字體大小
export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
  base: ['1rem', { lineHeight: '1.5rem' }], // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
  '5xl': ['3rem', { lineHeight: '1' }], // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
  '8xl': ['6rem', { lineHeight: '1' }], // 96px
  '9xl': ['8rem', { lineHeight: '1' }], // 128px
};

// Input 尺寸定義
export const inputSizes = {
  sm: {
    height: '2rem', // h-8 - 32px
    paddingX: '0.75rem', // px-3
    paddingY: '0.25rem', // py-1
    fontSize: '0.875rem', // text-sm
  },
  md: {
    height: '2.5rem', // h-10 - 40px
    paddingX: '0.75rem', // px-3
    paddingY: '0.5rem', // py-2
    fontSize: '0.875rem', // text-sm
  },
  lg: {
    height: '3rem', // h-12 - 48px
    paddingX: '1rem', // px-4
    paddingY: '0.75rem', // py-3
    fontSize: '1rem', // text-base
  },
};

// 顏色系統
export const colors = {
  // 主要狀態顏色（對應 Tailwind 配置）
  primary: {
    DEFAULT: 'primary',
    light: 'primary-light',
    dark: 'primary-dark',
  },
  error: {
    DEFAULT: 'error',
    light: 'error-light',
    dark: 'error-dark',
  },
  success: {
    DEFAULT: 'success',
    light: 'success-light',
    dark: 'success-dark',
  },
  warning: {
    DEFAULT: 'warning',
    light: 'warning-light',
    dark: 'warning-dark',
  },
  // 中性色
  gray: {
    50: 'gray-50',
    100: 'gray-100',
    200: 'gray-200',
    300: 'gray-300',
    400: 'gray-400',
    500: 'gray-500',
    600: 'gray-600',
    700: 'gray-700',
    800: 'gray-800',
    900: 'gray-900',
  },
  // 背景色
  background: {
    white: 'white',
    transparent: 'transparent',
  },
};

// 層級（z-index）
export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
  dropdown: '1000',
  sticky: '1020',
  fixed: '1030',
  modal: '1040',
  popover: '1050',
  tooltip: '1060',
  toast: '1070',
};

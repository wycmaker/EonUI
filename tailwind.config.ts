import lineClamp from '@tailwindcss/line-clamp';

import { buttonSizes, inputSizes, spacing, fontSize, zIndex } from './src/tokens/index.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // 動態生成 line-clamp 類別，使用正則表達式匹配
    { pattern: /line-clamp-(1[0-9]|[1-9])/ },
  ],
  theme: {
    extend: {
      // 擴展 lineClamp 主題以支援更多數值
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
      },
      // 使用 CSS 變數的圓角定義
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        circle: 'var(--radius-circle)',
      },

      // 使用 CSS 變數的顏色定義
      colors: {
        // 品牌色系 - 使用 CSS 變數
        primary: {
          light: 'var(--color-primary-light)',
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          light: 'var(--color-secondary-light)',
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        info: {
          light: 'var(--color-info-light)',
          DEFAULT: 'var(--color-info)',
          dark: 'var(--color-info-dark)',
        },
        success: {
          light: 'var(--color-success-light)',
          DEFAULT: 'var(--color-success)',
          dark: 'var(--color-success-dark)',
        },
        warning: {
          light: 'var(--color-warning-light)',
          DEFAULT: 'var(--color-warning)',
          dark: 'var(--color-warning-dark)',
        },
        error: {
          light: 'var(--color-error-light)',
          DEFAULT: 'var(--color-error)',
          dark: 'var(--color-error-dark)',
        },
        // 中性色系 - 使用 CSS 變數
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
      },

      // 使用設計系統的間距定義
      spacing,

      // 使用設計系統的字體大小定義
      fontSize,

      // 使用 CSS 變數的陰影定義
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        none: 'none',
      },

      // 使用設計系統的層級定義
      zIndex,

      // 按鈕特定的尺寸定義（可用於自定義 utilities）
      buttonSizes,

      // 輸入框特定的尺寸定義
      inputSizes,

      // 動畫與過渡
      animation: {
        'fade-in': 'fadeIn 0.15s ease-in-out',
        'fade-out': 'fadeOut 0.15s ease-in-out',
        'scale-in': 'scaleIn 0.15s ease-in-out',
        'scale-out': 'scaleOut 0.15s ease-in-out',
        'slide-down': 'slideDown 0.15s ease-in-out',
        'slide-up': 'slideUp 0.15s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  // 核心插件配置
  corePlugins: {
    preflight: true,
  },
  plugins: [lineClamp],
};

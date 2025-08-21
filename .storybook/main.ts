import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  managerHead: (head) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/EonUI/' : '/';
    const logoPath = `${basePath}Logo.svg`;
    const siteUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://wycmaker.github.io/EonUI/'
        : 'http://localhost:6006/';

    return `
      ${head}
      <!-- 基本 SEO -->
      <title>EonUI - React UI Component Library</title>
      <meta name="description" content="EonUI 是一套以 React 為核心打造的 UI Library，專注於提供永續、穩定且可擴展的設計系統。結合 Tailwind CSS 與設計 Tokens，讓開發者能輕鬆構建一致且高度客製化的使用者介面。" />
      <meta name="keywords" content="React, UI Library, Components, Taiwan, TypeScript, Tailwind CSS, Design System, 組件庫, 設計系統" />
      <meta name="author" content="EonUI Team" />
      <meta name="robots" content="index, follow" />

      <!-- 語言和編碼 -->
      <meta charset="UTF-8" />
      <meta name="language" content="zh-TW" />

      <!-- 視窗設置 -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

      <!-- 圖標 -->
      <link rel="icon" type="image/svg+xml" href="${logoPath}" />
      <link rel="apple-touch-icon" href="${logoPath}" />
      <link rel="mask-icon" href="${logoPath}" color="#000000" />

      <!-- Open Graph (Facebook, LinkedIn) -->
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="EonUI" />
      <meta property="og:title" content="EonUI - React UI Component Library" />
      <meta property="og:description" content="永續、穩定且可擴展的 React UI 設計系統。結合 Tailwind CSS 與設計 Tokens，提供一致且高度客製化的使用者介面組件。" />
      <meta property="og:url" content="${siteUrl}" />
      <meta property="og:image" content="${siteUrl}Logo.svg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="zh_TW" />

      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EonUI - React UI Component Library" />
      <meta name="twitter:description" content="永續、穩定且可擴展的 React UI 設計系統" />
      <meta name="twitter:image" content="${siteUrl}Logo.svg" />

      <!-- 技術相關 -->
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      <!-- 無障礙設置 -->
      <meta name="color-scheme" content="light dark" />

      <!-- 性能優化 -->
      <meta http-equiv="x-dns-prefetch-control" content="on" />

      <!-- 結構化數據 (JSON-LD) -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "EonUI",
        "description": "EonUI 是一套以 React 為核心打造的 UI Library，專注於提供永續、穩定且可擴展的設計系統",
        "url": "${siteUrl}",
        "author": {
          "@type": "Organization",
          "name": "EonUI Team"
        },
        "programmingLanguage": ["TypeScript", "JavaScript"],
        "operatingSystem": "Web Browser",
        "applicationCategory": "DeveloperApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
      </script>
    `;
  },
  docs: {
    defaultName: 'Docs',
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config: InlineConfig) => {
    // 為 GitHub Pages 設置 base path
    const basePath = process.env.NODE_ENV === 'production' ? '/EonUI/' : '/';
    config.base = basePath;

    // 設置環境變數，讓組件和配置可以訪問 base path
    config.define = {
      ...config.define,
      'process.env.STORYBOOK_BASE_PATH': JSON.stringify(basePath),
      'process.env.LOGO_PATH': JSON.stringify(`${basePath}Logo.svg`),
    };

    // 確保 Vite 配置包含路徑別名
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': new URL('../src', import.meta.url).pathname,
      '@/components': new URL('../src/components', import.meta.url).pathname,
      '@/utils': new URL('../src/utils', import.meta.url).pathname,
      '@/hooks': new URL('../src/hooks', import.meta.url).pathname,
      '@/types': new URL('../src/types', import.meta.url).pathname,
      '@/tokens': new URL('../src/tokens', import.meta.url).pathname,
    };
    return config;
  },
};

export default config;

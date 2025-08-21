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

    // 優化構建配置
    config.build = config.build || {};
    config.build.rollupOptions = config.build.rollupOptions || {};

    config.build.rollupOptions.output = {
      ...config.build.rollupOptions.output,
      // 手動代碼分割
      manualChunks: (id) => {
        // 完全排除 mocker 相關文件
        if (
          id.includes('vite-inject-mocker') ||
          id.includes('__vite') ||
          id.endsWith('vite-inject-mocker-entry.js')
        ) {
          return null; // 返回 null 表示不包含在任何 chunk 中
        }

        // React 生態系統
        if (id.includes('react') || id.includes('react-dom')) {
          return 'react-vendor';
        }

        // Storybook 相關
        if (id.includes('@storybook')) {
          return 'storybook-vendor';
        }

        // 工具庫
        if (id.includes('clsx') || id.includes('tailwind-merge')) {
          return 'utils-vendor';
        }

        // 其他 node_modules
        if (id.includes('node_modules')) {
          return 'vendor';
        }

        // 你的組件
        if (id.includes('/src/components/')) {
          return 'components';
        }

        // 默認情況
        return undefined;
      },
      // 設置較大的 chunk 大小限制
      chunkFileNames: (_chunkInfo) => {
        return `assets/[name]-[hash].js`;
      },
    };

    // 調整 chunk 大小警告限制
    config.build.chunkSizeWarningLimit = 1000; // 提高到 1MB

    // 靜態資源處理
    config.assetsInclude = config.assetsInclude || [];
    if (Array.isArray(config.assetsInclude)) {
      config.assetsInclude.push('**/*.woff2', '**/*.woff', '**/*.ttf');
    }

    // 生產環境移除開發工具
    if (process.env.NODE_ENV === 'production') {
      config.build.minify = true;
      config.build.sourcemap = false;

      // 靜態資源處理
      config.build.assetsDir = 'assets';
      config.build.rollupOptions.output.assetFileNames = (assetInfo) => {
        // 字體文件單獨處理
        if (assetInfo.name && /\.(woff2?|ttf|eot)$/.test(assetInfo.name)) {
          return 'assets/fonts/[name]-[hash][extname]';
        }
        // 其他資源
        return 'assets/[name]-[hash][extname]';
      };

      // 添加 Rollup 插件來過濾文件和處理警告
      const existingPlugins = Array.isArray(config.build.rollupOptions.plugins)
        ? config.build.rollupOptions.plugins
        : [];

      config.build.rollupOptions.plugins = [
        ...existingPlugins,
        {
          name: 'exclude-vite-mocker',
          generateBundle(
            options: import('rollup').NormalizedOutputOptions,
            bundle: import('rollup').OutputBundle,
          ) {
            // 在生成 bundle 時刪除 mocker 文件並清理引用
            for (const fileName of Object.keys(bundle)) {
              const chunk = bundle[fileName];

              // 刪除 mocker 文件
              if (fileName.includes('vite-inject-mocker')) {
                delete bundle[fileName];
                continue;
              }

              // 清理其他文件中的 mocker 引用
              if (chunk && chunk.type === 'chunk' && 'code' in chunk && chunk.code) {
                chunk.code = chunk.code.replace(
                  /import\s*["'][^"']*vite-inject-mocker[^"']*["'];?\s*/g,
                  '',
                );
                chunk.code = chunk.code.replace(/import\s*["'][^"']*__vite[^"']*["'];?\s*/g, '');
              }
            }
          },
        },
      ];
    }

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

import type { StorybookConfig } from '@storybook/react-vite';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
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

    // 設置環境變數，讓組件可以訪問 base path
    config.define = {
      ...config.define,
      'process.env.STORYBOOK_BASE_PATH': JSON.stringify(basePath),
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

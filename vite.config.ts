import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      outDir: 'dist',
      rollupTypes: true, // 將所有類型打包成單一檔案
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/types': resolve(__dirname, './src/types'),
      '@/tokens': resolve(__dirname, './src/tokens'),
    },
  },
  build: {
    minify: 'terser', // 啟用代碼壓縮
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EonUI',
      fileName: (format) => `index.${format === 'es' ? 'esm.js' : 'js'}`,
      formats: ['es', 'umd'],
    },
    emptyOutDir: true, // 構建前清空輸出目錄
    rollupOptions: {
      external: (id) => {
        // 詳細記錄外部化過程（調試用）
        const isReactModule =
          id === 'react' ||
          id === 'react-dom' ||
          id === 'react/jsx-runtime' ||
          id === 'react-dom/client' ||
          id.startsWith('react/') ||
          id.startsWith('react-dom/');

        return isReactModule;
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'React',
          'react-dom/client': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'eonui.css';
          }
          return assetInfo.name || '';
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
  },
});

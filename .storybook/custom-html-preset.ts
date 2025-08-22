import fs from 'fs';
import path from 'path';

import { Options } from 'storybook/internal/types';
import type { InlineConfig } from 'vite';

/**
 * 自定義 HTML 生成 Preset
 * 這個 preset 會在最後階段覆蓋 Storybook 自動生成的 index.html
 */
const customHtmlPreset = {
  name: 'custom-html-preset',
  // 嘗試使用 viteFinal
  viteFinal: async (config: InlineConfig, options: Options) => {
    globalThis.console.log('🔍 viteFinal 被調用，configType:', options.configType);

    // 只在生產構建時處理
    if (options.configType === 'PRODUCTION') {
      // 添加 Vite 插件來處理 HTML
      config.plugins = config.plugins || [];

      config.plugins.push({
        name: 'custom-html-plugin',
        closeBundle() {
          // 在構建完成後處理 HTML
          setTimeout(() => {
            const outputDir = options.outputDir;
            const indexHtmlPath = path.join(outputDir || '', 'index.html');

            // 處理 index.html
            if (fs.existsSync(indexHtmlPath)) {
              globalThis.console.log('🔧 正在替換 index.html...');

              // 讀取原始 HTML
              const originalHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

              // 創建自定義 HTML
              const customHtml = generateCustomHtml(originalHtml);

              // 寫入自定義 HTML
              fs.writeFileSync(indexHtmlPath, customHtml);

              globalThis.console.log('✅ index.html 已成功替換');
            }

            // 處理 iframe.html 的 basePath 問題
            const iframeHtmlPath = path.join(outputDir || '', 'iframe.html');
            if (fs.existsSync(iframeHtmlPath)) {
              globalThis.console.log('🔧 正在修正 iframe.html 的路徑...');

              let iframeHtml = fs.readFileSync(iframeHtmlPath, 'utf-8');

              // 修正 iframe.html 中的路徑
              if (process.env.NODE_ENV === 'production') {
                const basePath = '/EonUI/';

                // 先移除所有已存在的 /EonUI/ 前綴，然後統一添加
                iframeHtml = iframeHtml
                  // 移除重複的 basePath
                  .replace(/\/EonUI\/+/g, '/') // 移除所有 /EonUI/ 包括多個斜線
                  // 然後為所有絕對路徑添加 basePath
                  .replace(/src="\/([^"]+)"/g, `src="${basePath}$1"`)
                  .replace(/href="\/([^"]+)"/g, `href="${basePath}$1"`)
                  .replace(/from '\/([^']+)'/g, `from '${basePath}$1'`)
                  .replace(/import '\/([^']+)'/g, `import '${basePath}$1'`)
                  // 修正相對路徑不需要 basePath
                  .replace(/src="\/EonUI\/\.\//g, 'src="./')
                  .replace(/href="\/EonUI\/\.\//g, 'href="./');
              }

              fs.writeFileSync(iframeHtmlPath, iframeHtml);
              globalThis.console.log('✅ iframe.html 路徑已修正');
            }
          }, 100); // 短暫延遲確保文件寫入完成
        },
      });
    }

    return config;
  },
};

/**
 * 生成自定義 HTML
 */
function generateCustomHtml(originalHtml: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/EonUI/' : '/';
  const siteUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://wycmaker.github.io/EonUI/'
      : 'http://localhost:6006/';

  // 提取原始 HTML 中的腳本和樣式
  const scriptMatches = originalHtml.match(/<script[^>]*>[\s\S]*?<\/script>/g) || [];
  const linkMatches = originalHtml.match(/<link[^>]*>/g) || [];
  const styleMatches = originalHtml.match(/<style[^>]*>[\s\S]*?<\/style>/g) || [];

  // 過濾掉 favicon 相關的 link
  const filteredLinks = linkMatches.filter((link) => !link.includes('favicon'));

  // 修正腳本中的路徑，添加 basePath
  const fixedScripts = scriptMatches.map((script) => {
    if (process.env.NODE_ENV === 'production') {
      // 修正 vite-inject-mocker-entry.js 和其他資源的路徑
      return script
        .replace(
          /src="\/vite-inject-mocker-entry\.js"/g,
          `src="${basePath}vite-inject-mocker-entry.js"`,
        )
        .replace(/src="\/([^"]+)"/g, `src="${basePath}$1"`)
        .replace(/from '\/([^']+)'/g, `from '${basePath}$1'`)
        .replace(/import '\/([^']+)'/g, `import '${basePath}$1'`);
    }
    return script;
  });

  // 生成完全自定義的 HTML
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
  <title>EonUI - React UI Component Library</title>

  <!-- 基本 SEO -->
  <meta name="description" content="EonUI 是一套以 React 為核心打造的 UI Library，專注於提供永續、穩定且可擴展的設計系統。結合 Tailwind CSS 與設計 Tokens，讓開發者能輕鬆構建一致且高度客製化的使用者介面。" />
  <meta name="keywords" content="React, UI Library, Components, Taiwan, TypeScript, Tailwind CSS, Design System, 組件庫, 設計系統" />
  <meta name="author" content="EonUI Team" />
  <meta name="robots" content="index, follow" />
  <meta name="language" content="zh-TW" />

  <!-- 圖標設定 -->
  <link rel="icon" type="image/svg+xml" href="${basePath}favicon.svg" />
  <link rel="apple-touch-icon" href="${basePath}icon.svg" />
  <link rel="mask-icon" href="${basePath}icon.svg" color="#000000" />

  <!-- Open Graph -->
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

  <!-- 保留原始的樣式和連結 -->
  ${filteredLinks.join('\n  ')}
  ${styleMatches.join('\n  ')}
</head>
<body>
  <div id="root"></div>

  <!-- 保留原始的腳本 -->
  ${fixedScripts.join('\n  ')}
</body>
</html>`;
}

export default customHtmlPreset;

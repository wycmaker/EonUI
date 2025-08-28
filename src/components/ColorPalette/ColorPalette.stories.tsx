import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ColorPalette } from './ColorPalette';
import '../../styles/component-docs.css';

const ColorPaletteDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">設計系統 - 顏色規範</h1>
        <p className="component-docs-description">
          EonUI 的完整顏色系統，包含品牌色、狀態色和中性色的定義與使用指南。 所有顏色都採用 CSS
          變數設計，支援自動的明暗主題切換。
        </p>
      </div>

      {/* 顏色調色盤展示 */}
      <div className="component-docs-section">
        <ColorPalette />
      </div>

      {/* 顏色應用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 實際應用範例</h2>
        <p className="component-docs-section-description">
          以下展示各種顏色在實際組件中的應用效果：
        </p>

        <div className="space-y-6">
          {/* 按鈕範例 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">按鈕顏色應用</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors">
                Secondary Button
              </button>
              <button className="px-4 py-2 bg-success text-white rounded-md hover:bg-success-dark transition-colors">
                Success Button
              </button>
              <button className="px-4 py-2 bg-warning text-white rounded-md hover:bg-warning-dark transition-colors">
                Warning Button
              </button>
              <button className="px-4 py-2 bg-error text-white rounded-md hover:bg-error-dark transition-colors">
                Error Button
              </button>
            </div>
          </div>

          {/* 徽章範例 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">徽章顏色應用</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-info-light text-info-dark rounded-full text-sm font-medium">
                Info Badge
              </span>
              <span className="px-3 py-1 bg-success-light text-success-dark rounded-full text-sm font-medium">
                Success Badge
              </span>
              <span className="px-3 py-1 bg-warning-light text-warning-dark rounded-full text-sm font-medium">
                Warning Badge
              </span>
              <span className="px-3 py-1 bg-error-light text-error-dark rounded-full text-sm font-medium">
                Error Badge
              </span>
            </div>
          </div>

          {/* 邊框範例 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">邊框顏色應用</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border-2 border-primary rounded-lg">
                <div className="text-sm font-medium text-primary">Primary Border</div>
              </div>
              <div className="p-4 border-2 border-success rounded-lg">
                <div className="text-sm font-medium text-success">Success Border</div>
              </div>
              <div className="p-4 border-2 border-warning rounded-lg">
                <div className="text-sm font-medium text-warning">Warning Border</div>
              </div>
              <div className="p-4 border-2 border-error rounded-lg">
                <div className="text-sm font-medium text-error">Error Border</div>
              </div>
            </div>
          </div>

          {/* 文字顏色範例 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">文字顏色層次</h3>
            <div className="space-y-2">
              <p className="text-gray-900 text-lg font-semibold">主要標題文字 (Gray 900)</p>
              <p className="text-gray-700 text-base">次要標題文字 (Gray 700)</p>
              <p className="text-gray-600 text-sm">內文文字 (Gray 600)</p>
              <p className="text-gray-500 text-sm">輔助文字 (Gray 500)</p>
              <p className="text-gray-400 text-xs">禁用文字 (Gray 400)</p>
            </div>
          </div>
        </div>
      </div>

      {/* 可及性指南 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">♿ 可及性指南</h2>
        <p className="component-docs-section-description">確保顏色使用符合 WCAG 可及性標準：</p>

        <div className="component-docs-info-card">
          <strong>對比度要求：</strong>
          <ul>
            <li>
              <strong>AAA 級別：</strong>文字與背景對比度 ≥ 7:1（大文字 ≥ 4.5:1）
            </li>
            <li>
              <strong>AA 級別：</strong>文字與背景對比度 ≥ 4.5:1（大文字 ≥ 3:1）
            </li>
            <li>
              <strong>互動元素：</strong>焦點指示器對比度 ≥ 3:1
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">推薦的文字與背景組合</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-white p-4 border rounded-lg">
                <div className="text-gray-900 font-medium">Gray 900 on White</div>
                <div className="text-xs text-gray-500">對比度: 15.3:1 (AAA)</div>
              </div>
              <div className="bg-gray-50 p-4 border rounded-lg">
                <div className="text-gray-800 font-medium">Gray 800 on Gray 50</div>
                <div className="text-xs text-gray-500">對比度: 11.9:1 (AAA)</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-primary p-4 rounded-lg">
                <div className="text-white font-medium">White on Primary</div>
                <div className="text-xs text-primary-light">對比度: 4.8:1 (AA)</div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-white font-medium">White on Gray 900</div>
                <div className="text-xs text-gray-300">對比度: 15.3:1 (AAA)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 開發者指南 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">👩‍💻 開發者指南</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">在 React 組件中使用</h4>
          <pre className="component-docs-code">{`// 使用 Tailwind 類別
<button className="bg-primary hover:bg-primary-dark text-white">
  按鈕
</button>

// 使用 CSS-in-JS
const buttonStyle = {
  backgroundColor: 'var(--color-primary)',
  color: 'var(--color-gray-50)',
  ':hover': {
    backgroundColor: 'var(--color-primary-dark)',
  },
};

// 動態顏色選擇
const getStatusColor = (status) => {
  const colors = {
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    info: 'bg-info',
  };
  return colors[status] || 'bg-gray-500';
};`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">CSS 變數覆寫</h4>
          <pre className="component-docs-code">{`/* 自訂主題顏色 */
:root {
  --color-primary: #your-brand-color;
  --color-primary-dark: #your-dark-color;
  --color-primary-light: #your-light-color;
}

/* 深色模式自動切換 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #adjusted-for-dark-mode;
  }
}`}</pre>
        </div>
      </div>

      {/* 工具與資源 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🛠️ 工具與資源</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="component-docs-info-card">
            <strong>顏色對比度檢查工具：</strong>
            <ul>
              <li>WebAIM Contrast Checker</li>
              <li>Colour Contrast Analyser (CCA)</li>
              <li>Chrome DevTools Accessibility</li>
            </ul>
          </div>

          <div className="component-docs-info-card">
            <strong>調色盤產生工具：</strong>
            <ul>
              <li>Coolors.co</li>
              <li>Adobe Color</li>
              <li>Material Design Color Tool</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🎨 開始設計</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 EonUI 的顏色系統，可以開始在你的設計和開發中使用這些顏色了！
          記住要始終考慮可及性和使用者體驗。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof ColorPalette> = {
  title: 'Colors',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <ColorPaletteDocs />,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story
export const Docs: Story = {
  args: {},
  render: () => <ColorPalette />,
};

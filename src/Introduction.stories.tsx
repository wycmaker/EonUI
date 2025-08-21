import type { Meta, StoryObj } from '@storybook/react';

import './styles/component-docs.css';
import { getLogoPath } from './utils';

// 創建 Introduction 組件
const Introduction = () => (
  <div className="component-docs-container">
    <div className="component-docs-header">
      <img
        src={getLogoPath()}
        alt="EonUI Logo"
      />
      <p className="component-docs-description">
        一套以 React 為核心打造的 UI Library，專注於提供「永續、穩定且可擴展」的設計系統
      </p>
    </div>

    <div className="component-docs-section">
      <h2 className="component-docs-section-title">🚀 快速開始</h2>
      <div className="component-docs-code-block">
        <code
          style={{
            color: '#DC2626',
            fontSize: '1rem',
            fontFamily: 'Monaco, Consolas, monospace',
          }}
        >
          npm install eonui
        </code>
      </div>

      <div className="component-docs-code-block">
        <pre className="component-docs-code">{`import { Button } from 'eonui';

function App() {
  return (
    <Button variant="primary" size="md">
      Hello EonUI!
    </Button>
  );
}`}</pre>
      </div>
    </div>

    <div className="component-docs-section">
      <h2 className="component-docs-section-title">💡 核心特色</h2>
      {[
        { icon: '🎨', title: '靈活的主題系統', desc: '使用 CSS 變數，支援即時主題切換' },
        { icon: '📱', title: '響應式設計', desc: '所有組件都支援行動裝置優先' },
        // { icon: '♿', title: '無障礙友善', desc: '遵循 WCAG 2.1 標準' },
        { icon: '🌳', title: 'Tree-shaking 優化', desc: '只打包實際使用的組件' },
        { icon: '📚', title: '完整文檔', desc: '每個組件都有詳細說明和範例' },
      ].map((feature, index) => (
        <div
          key={index}
          className="component-docs-feature-card"
        >
          <span className="component-docs-feature-icon">{feature.icon}</span>
          <div className="component-docs-feature-content">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="component-docs-section">
      <h2 className="component-docs-section-title">🎨 主題自定義</h2>
      <p className="component-docs-section-description">
        EonUI 使用 CSS 變數系統，讓你可以輕鬆自定義主題顏色：
      </p>
      <div className="component-docs-code-block">
        <pre className="component-docs-code">{`:root {
  --color-primary: #10B981;        /* 綠色主題 */
  --color-primary-dark: #047857;   /* 深綠色 */
  --color-secondary: #6B7280;      /* 灰色輔助 */
  --radius: 0.5rem;                /* 更圓的圓角 */
}`}</pre>
      </div>
    </div>

    <div className="component-docs-section">
      <h2 className="component-docs-section-title">📦 Tree-shaking</h2>
      <p className="component-docs-section-description">
        EonUI 支援 tree-shaking，你可以只導入需要的組件：
      </p>
      <div className="component-docs-code-block">
        <pre className="component-docs-code">{`// 方式 1: 具名導入（推薦）
import { Button, Input, Card } from 'eonui';

// 方式 2: 直接路徑導入（最佳 tree-shaking）
import { Button } from 'eonui/Button';
import { Input } from 'eonui/Input';`}</pre>
      </div>
    </div>

    <div className="component-docs-cta">
      <h3 className="component-docs-cta-title">🚀 開始探索</h3>
      <p className="component-docs-cta-text">
        點擊左側選單中的 <strong>Components → Button</strong> 來查看第一個組件的詳細說明和範例！
      </p>
    </div>
  </div>
);

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <Introduction />,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {};

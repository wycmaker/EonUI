import type { Meta, StoryObj } from '@storybook/react';

// 創建 Introduction 組件
const Introduction = () => (
  <div
    style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      lineHeight: '1.6',
    }}
  >
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <img src="/Logo.svg" />
      <p
        style={{
          fontSize: '1.25rem',
          color: '#6B7280',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        一套以 React 為核心打造的 UI Library，專注於提供「永續、穩定且可擴展」的設計系統
      </p>
    </div>

    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ color: '#1F2937', fontSize: '1.5rem', marginBottom: '1rem' }}>🚀 快速開始</h2>
      <div
        style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
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

      <div
        style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <pre
          style={{
            margin: 0,
            fontSize: '0.9rem',
            fontFamily: 'Monaco, Consolas, monospace',
            color: '#374151',
          }}
        >{`import { Button } from 'eonui';

function App() {
  return (
    <Button variant="primary" size="md">
      Hello EonUI!
    </Button>
  );
}`}</pre>
      </div>
    </div>

    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ color: '#1F2937', fontSize: '1.5rem', marginBottom: '1rem' }}>💡 核心特色</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {[
          { icon: '🎨', title: '靈活的主題系統', desc: '使用 CSS 變數，支援即時主題切換' },
          { icon: '📱', title: '響應式設計', desc: '所有組件都支援行動裝置優先' },
          { icon: '♿', title: '無障礙友善', desc: '遵循 WCAG 2.1 標準' },
          { icon: '🌳', title: 'Tree-shaking 優化', desc: '只打包實際使用的組件' },
          { icon: '📚', title: '完整文檔', desc: '每個組件都有詳細說明和範例' },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: '1rem',
              backgroundColor: '#FAFAFA',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
            }}
          >
            <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>{feature.icon}</span>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1F2937' }}>{feature.title}</h3>
              <p style={{ margin: 0, color: '#6B7280', fontSize: '0.9rem' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ color: '#1F2937', fontSize: '1.5rem', marginBottom: '1rem' }}>🎨 主題自定義</h2>
      <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
        EonUI 使用 CSS 變數系統，讓你可以輕鬆自定義主題顏色：
      </p>
      <div
        style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <pre
          style={{
            margin: 0,
            fontSize: '0.9rem',
            fontFamily: 'Monaco, Consolas, monospace',
            color: '#374151',
          }}
        >{`:root {
  --color-primary: #10B981;        /* 綠色主題 */
  --color-primary-dark: #047857;   /* 深綠色 */
  --color-secondary: #6B7280;      /* 灰色輔助 */
  --radius: 0.5rem;                /* 更圓的圓角 */
}`}</pre>
      </div>
    </div>

    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ color: '#1F2937', fontSize: '1.5rem', marginBottom: '1rem' }}>
        📦 Tree-shaking
      </h2>
      <p style={{ color: '#6B7280', marginBottom: '1rem' }}>
        EonUI 支援 tree-shaking，你可以只導入需要的組件：
      </p>
      <div
        style={{
          backgroundColor: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '1rem',
        }}
      >
        <pre
          style={{
            margin: 0,
            fontSize: '0.9rem',
            fontFamily: 'Monaco, Consolas, monospace',
            color: '#374151',
          }}
        >{`// 方式 1: 具名導入（推薦）
import { Button, Input, Card } from 'eonui';

// 方式 2: 直接路徑導入（最佳 tree-shaking）
import { Button } from 'eonui/Button';
import { Input } from 'eonui/Input';`}</pre>
      </div>
    </div>

    <div
      style={{
        marginTop: '3rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, #EFF6FF, #F0F9FF)',
        borderRadius: '12px',
        border: '1px solid #DBEAFE',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          margin: '0 0 1rem 0',
          color: '#1E40AF',
          fontSize: '1.25rem',
        }}
      >
        🚀 開始探索
      </h3>
      <p
        style={{
          margin: 0,
          color: '#1E40AF',
          fontSize: '1.1rem',
        }}
      >
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

export const Default: Story = {};

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import '../../styles/component-docs.css';

const ButtonDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Button 按鈕</h1>
        <p className="component-docs-description">
          EonUI 的基礎按鈕組件，支援多種樣式變體和大小。按鈕是用戶界面中最常用的互動元素之一，
          提供了一致的視覺風格和行為，遵循現代設計原則和無障礙標準。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整按鈕的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 樣式變體</h2>
        <p className="component-docs-section-description">
          Button 組件提供了四種不同的樣式變體，適用於不同的使用場景：
        </p>

        <div className="component-docs-showcase">
          <Button variant="primary">主要按鈕</Button>
          <Button variant="secondary">次要按鈕</Button>
          <Button variant="outline">外框按鈕</Button>
          <Button variant="ghost">幽靈按鈕</Button>
        </div>

        <div className="component-docs-info-card">
          <strong>使用建議：</strong>
          <ul>
            <li>
              <strong>Primary：</strong>用於最重要的操作，通常每個頁面只有一個
            </li>
            <li>
              <strong>Secondary：</strong>用於次要操作，與主要操作形成層次
            </li>
            <li>
              <strong>Outline：</strong>用於需要突出邊界的操作
            </li>
            <li>
              <strong>Ghost：</strong>用於最不突出的操作，如工具欄按鈕
            </li>
          </ul>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 大小選項</h2>
        <p className="component-docs-section-description">
          支援五種不同的大小選項，適應不同的設計需求：
        </p>

        <div className="component-docs-showcase center">
          <Button size="xs">超小</Button>
          <Button size="sm">小</Button>
          <Button size="md">中</Button>
          <Button size="lg">大</Button>
          <Button size="xl">超大</Button>
        </div>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>xs：</strong>用於緊湊的界面，如表格操作
            </li>
            <li>
              <strong>sm：</strong>用於次要操作或緊湊佈局
            </li>
            <li>
              <strong>md：</strong>標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>用於重要的行動召喚按鈕
            </li>
            <li>
              <strong>xl：</strong>用於頁面級別的主要操作
            </li>
          </ul>
        </div>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 狀態展示</h2>
        <p className="component-docs-section-description">按鈕支援多種狀態，提供清晰的用戶反饋：</p>

        <div className="component-docs-showcase">
          <Button loading>載入中</Button>
          <Button
            loading
            loadingText="正在處理請求"
          >
            提交表單
          </Button>
          <Button disabled>已禁用</Button>
          <Button
            variant="outline"
            disabled
          >
            禁用外框
          </Button>
        </div>

        <div className="component-docs-info-card">
          <strong>狀態說明：</strong>
          <ul>
            <li>
              <strong>Loading：</strong>顯示載入動畫，防止重複點擊
            </li>
            <li>
              <strong>Disabled：</strong>禁用狀態，不響應用戶操作
            </li>
            <li>
              <strong>Hover/Focus：</strong>提供視覺反饋和無障礙支持
            </li>
          </ul>
        </div>
      </div>

      {/* 無障礙性展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">♿ 無障礙性功能</h2>
        <p className="component-docs-section-description">
          Button 組件遵循 WCAG 2.1 AA 標準，提供完整的無障礙性支援：
        </p>

        <div className="component-docs-showcase">
          <Button aria-label="關閉對話框">✕</Button>
          <Button
            loading
            loadingText="正在儲存資料"
          >
            儲存
          </Button>
          <Button disabled>已禁用</Button>
          <Button size="xs">最小尺寸</Button>
        </div>

        <div className="component-docs-info-card">
          <strong>無障礙性特色：</strong>
          <ul>
            <li>
              <strong>鍵盤導航：</strong>支援 Tab、Enter、Space 鍵操作
            </li>
            <li>
              <strong>螢幕閱讀器：</strong>支援 aria-label、aria-disabled 屬性
            </li>
            <li>
              <strong>焦點指示器：</strong>清晰的焦點環，符合視覺標準
            </li>
            <li>
              <strong>觸控目標：</strong>最小 32px 高度，符合 WCAG 標準
            </li>
            <li>
              <strong>載入狀態：</strong>提供無障礙的載入提示文字
            </li>
          </ul>
        </div>
      </div>

      {/* 載入狀態展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 載入狀態</h2>
        <p className="component-docs-section-description">
          載入狀態提供清晰的用戶反饋，支援自訂螢幕閱讀器文字：
        </p>

        <div className="component-docs-showcase">
          <Button loading>預設載入文字</Button>
          <Button
            loading
            loadingText="正在處理請求"
          >
            提交表單
          </Button>
          <Button
            loading
            loadingText="正在儲存資料"
            variant="secondary"
          >
            儲存
          </Button>
        </div>

        <div className="component-docs-info-card">
          <strong>載入狀態特色：</strong>
          <ul>
            <li>
              <strong>預設文字：</strong>使用「載入中」作為預設的螢幕閱讀器文字
            </li>
            <li>
              <strong>自訂文字：</strong>透過 loadingText 屬性提供具體的操作描述
            </li>
            <li>
              <strong>防止重複點擊：</strong>載入時自動禁用按鈕
            </li>
            <li>
              <strong>無障礙支援：</strong>載入動畫對螢幕閱讀器隱藏
            </li>
          </ul>
        </div>
      </div>

      {/* 尺寸與觸控目標 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 尺寸與觸控目標</h2>
        <p className="component-docs-section-description">
          所有尺寸都符合 WCAG 2.1 AA 最小觸控目標要求：
        </p>

        <div className="component-docs-showcase center">
          <div style={{ textAlign: 'center' }}>
            <Button size="xs">32px 高度</Button>
            <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
              符合最小觸控目標
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button size="sm">36px 高度</Button>
            <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
              改善的觸控體驗
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Button size="md">40px 高度</Button>
            <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>標準尺寸</div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>觸控目標標準：</strong>
          <ul>
            <li>
              <strong>WCAG 2.1 AA：</strong>最小 44x44 像素，我們調整為至少 32px 高度
            </li>
            <li>
              <strong>改善體驗：</strong>較大的按鈕提供更好的觸控體驗
            </li>
            <li>
              <strong>設計平衡：</strong>在無障礙性和視覺設計間取得平衡
            </li>
          </ul>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Button } from 'eonui';

// 基本按鈕
<Button>點擊我</Button>

// 帶樣式的按鈕
<Button variant="primary" size="lg">
  主要操作
</Button>

// 載入狀態
<Button loading>處理中...</Button>

// 載入狀態（自訂螢幕閱讀器文字）
<Button loading loadingText="正在處理請求">
  提交表單
</Button>

// 無障礙性標籤
<Button aria-label="關閉對話框">
  ✕
</Button>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Button 組件的所有功能，可以在你的項目中開始使用了！
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <ButtonDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: '按鈕的視覺樣式變體',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '按鈕的大小',
    },
    loading: {
      control: { type: 'boolean' },
      description: '是否顯示載入狀態',
    },
    loadingText: {
      control: { type: 'text' },
      description: '載入狀態時顯示的文字，用於螢幕閱讀器',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用按鈕',
    },
    children: {
      control: { type: 'text' },
      description: '按鈕內容',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的 <Primary />
export const Docs: Story = {
  args: {
    children: '按鈕',
    variant: 'primary',
    size: 'md',
  },
};

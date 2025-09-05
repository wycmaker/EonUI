import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import '../../styles/component-docs.css';

// 圖示組件
const SearchIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

// 互動式範例組件
const InteractiveExample = () => {
  const [searchValue, setSearchValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [userValue, setUserValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div className="space-y-4 w-full max-w-md">
      <Input
        placeholder="搜尋..."
        prefixIcon={<SearchIcon />}
        clearable
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={() => setSearchValue('')}
      />
      <Input
        type="email"
        placeholder="請輸入電子郵件"
        prefixIcon={<EmailIcon />}
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <Input
        type="password"
        placeholder="請輸入密碼"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <Input
        placeholder="使用者名稱"
        prefixIcon={<UserIcon />}
        suffixIcon={<SearchIcon />}
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
    </div>
  );
};

const InputDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Input 輸入框</h1>
        <p className="component-docs-description">
          EonUI 的純粹輸入框組件，類似 Element Plus 的設計理念。
          提供多種樣式變體、狀態和大小選項，專注於核心輸入功能，不包含標籤或錯誤訊息等額外內容。
          完全符合無障礙標準，支援鍵盤導航和螢幕閱讀器。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整輸入框的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 互動式展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的輸入框範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 樣式變體</h2>
        <p className="component-docs-section-description">Input 組件提供了三種不同的樣式變體：</p>

        <div className="component-docs-showcase">
          <Input
            variant="default"
            placeholder="預設樣式"
          />
          <Input
            variant="filled"
            placeholder="填充樣式"
          />
          <Input
            variant="outline"
            placeholder="外框樣式"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>使用建議：</strong>
          <ul>
            <li>
              <strong>Default：</strong>標準樣式，適用於大多數場景
            </li>
            <li>
              <strong>Filled：</strong>填充樣式，適用於需要視覺區分的設計
            </li>
            <li>
              <strong>Outline：</strong>外框樣式，適用於需要強調邊界的設計
            </li>
          </ul>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 大小選項</h2>
        <p className="component-docs-section-description">
          支援三種不同的大小選項，所有尺寸都符合 WCAG 最小觸控目標要求：
        </p>

        <div className="component-docs-showcase">
          <Input
            size="sm"
            placeholder="小尺寸 (32px)"
          />
          <Input
            size="md"
            placeholder="中等尺寸 (40px)"
          />
          <Input
            size="lg"
            placeholder="大尺寸 (48px)"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>32px 高度，適用於緊湊的界面設計
            </li>
            <li>
              <strong>md：</strong>40px 高度，標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>48px 高度，適用於重要的輸入欄位
            </li>
          </ul>
        </div>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚦 狀態展示</h2>
        <p className="component-docs-section-description">
          輸入框支援多種狀態，提供清晰的視覺反饋：
        </p>

        <div className="component-docs-showcase">
          <Input
            status="default"
            placeholder="預設狀態"
          />
          <Input
            status="error"
            placeholder="錯誤狀態"
          />
          <Input
            status="success"
            placeholder="成功狀態"
          />
          <Input
            status="warning"
            placeholder="警告狀態"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>狀態說明：</strong>
          <ul>
            <li>
              <strong>Default：</strong>預設狀態，無特殊提示
            </li>
            <li>
              <strong>Error：</strong>錯誤狀態，紅色邊框表示輸入錯誤
            </li>
            <li>
              <strong>Success：</strong>成功狀態，綠色邊框表示輸入正確
            </li>
            <li>
              <strong>Warning：</strong>警告狀態，黃色邊框提醒用戶注意
            </li>
          </ul>
        </div>
      </div>

      {/* 圖示與功能 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 圖示與功能</h2>
        <p className="component-docs-section-description">支援前綴圖示、後綴圖示和清除功能：</p>

        <div className="component-docs-showcase">
          <Input
            prefixIcon={<SearchIcon />}
            placeholder="前綴圖示"
          />
          <Input
            suffixIcon={<EmailIcon />}
            placeholder="後綴圖示"
          />
          <Input
            prefixIcon={<SearchIcon />}
            clearable
            placeholder="可清除的輸入框"
          />
          <Input
            prefixIcon={<UserIcon />}
            suffixIcon={<EmailIcon />}
            placeholder="前後綴圖示"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>功能說明：</strong>
          <ul>
            <li>
              <strong>前綴圖示：</strong>通常用於表示輸入類型或功能
            </li>
            <li>
              <strong>後綴圖示：</strong>用於顯示狀態或額外功能
            </li>
            <li>
              <strong>清除功能：</strong>當有內容時顯示清除按鈕，優先於後綴圖示
            </li>
            <li>
              <strong>無障礙支援：</strong>圖示對螢幕閱讀器隱藏，清除按鈕有適當的標籤
            </li>
          </ul>
        </div>
      </div>

      {/* 密碼功能 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔒 密碼功能</h2>
        <p className="component-docs-section-description">
          當輸入框類型為 password 時，會自動顯示密碼切換按鈕：
        </p>

        <div className="component-docs-showcase">
          <Input
            type="password"
            placeholder="預設密碼輸入"
            defaultValue="mySecretPassword"
          />
          <Input
            type="password"
            size="lg"
            variant="filled"
            placeholder="大尺寸填充樣式密碼"
            defaultValue="anotherPassword"
          />
          <Input
            type="password"
            status="error"
            placeholder="錯誤狀態密碼"
            defaultValue="wrongPassword"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>密碼功能說明：</strong>
          <ul>
            <li>
              <strong>自動檢測：</strong>當 type="password" 時自動顯示密碼切換按鈕
            </li>
            <li>
              <strong>視覺切換：</strong>點擊眼睛圖示在顯示/隱藏密碼之間切換
            </li>
            <li>
              <strong>優先級：</strong>密碼切換按鈕優先於自訂 suffixIcon
            </li>
            <li>
              <strong>無障礙：</strong>按鈕有適當的 aria-label，螢幕閱讀器友好
            </li>
            <li>
              <strong>禁用狀態：</strong>當輸入框禁用時，密碼切換按鈕也會被禁用
            </li>
          </ul>
        </div>
      </div>

      {/* 不同輸入類型 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">⌨️ 不同輸入類型</h2>
        <p className="component-docs-section-description">支援各種 HTML 輸入類型：</p>

        <div className="component-docs-showcase">
          <Input
            type="text"
            placeholder="文字輸入"
            prefixIcon={<UserIcon />}
          />
          <Input
            type="email"
            placeholder="電子郵件"
            prefixIcon={<EmailIcon />}
          />
          <Input
            type="password"
            placeholder="密碼（自動顯示切換按鈕）"
          />
          <Input
            type="search"
            placeholder="搜尋"
            prefixIcon={<SearchIcon />}
            clearable
          />
          <Input
            type="tel"
            placeholder="電話號碼"
          />
          <Input
            type="url"
            placeholder="網址"
          />
          <Input
            type="number"
            placeholder="數字"
          />
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚫 禁用狀態</h2>
        <p className="component-docs-section-description">展示禁用狀態下的各種樣式：</p>

        <div className="component-docs-showcase">
          <Input
            disabled
            placeholder="禁用的輸入框"
          />
          <Input
            disabled
            variant="filled"
            placeholder="禁用的填充樣式"
          />
          <Input
            disabled
            prefixIcon={<SearchIcon />}
            placeholder="禁用帶圖示"
          />
        </div>
      </div>

      {/* 組合使用 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔗 組合使用</h2>
        <p className="component-docs-section-description">展示各種屬性的組合使用：</p>

        <div className="component-docs-showcase">
          <Input
            size="lg"
            variant="outline"
            status="success"
            prefixIcon={<SearchIcon />}
            clearable
            placeholder="大尺寸外框成功狀態"
            defaultValue="組合範例"
          />
          <Input
            size="sm"
            variant="filled"
            status="warning"
            suffixIcon={<EmailIcon />}
            placeholder="小尺寸填充警告狀態"
          />
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Input } from 'eonui';

// 基本輸入框
<Input placeholder="請輸入內容" />

// 帶樣式的輸入框
<Input
  variant="filled"
  size="lg"
  placeholder="大尺寸填充樣式"
/>

// 帶圖示的輸入框
<Input
  prefixIcon={<SearchIcon />}
  placeholder="搜尋..."
  clearable
/>

// 密碼輸入框（自動顯示切換按鈕）
<Input
  type="password"
  placeholder="請輸入密碼"
/>

// 不同狀態
<Input
  status="error"
  placeholder="錯誤狀態"
/>

<Input
  status="success"
  placeholder="成功狀態"
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 受控組件
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
/>

// 組合使用
<Input
  type="email"
  size="lg"
  variant="outline"
  status="success"
  prefixIcon={<EmailIcon />}
  placeholder="example@email.com"
/>

// 自訂樣式
<Input
  className="border-blue-500 focus:ring-blue-500"
  placeholder="自訂樣式"
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Input 組件的所有功能，可以在你的項目中開始使用了！
          這個純粹的輸入框組件讓你可以靈活地組合其他組件來建立完整的表單系統。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <InputDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: '輸入框的視覺樣式變體',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '輸入框的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: '輸入框的狀態',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    prefixIcon: {
      control: { type: 'boolean' },
      description: '前綴圖示',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        true: <SearchIcon />,
        false: undefined,
      },
    },
    suffixIcon: {
      control: { type: 'boolean' },
      description: '後綴圖示',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        true: <EmailIcon />,
        false: undefined,
      },
    },
    clearable: {
      control: { type: 'boolean' },
      description: '是否顯示清除按鈕',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '佔位符文字',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number'],
      description: '輸入框類型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    value: {
      control: { type: 'text' },
      description: '輸入框的值（受控組件）',
      table: {
        type: { summary: 'string' },
      },
    },
    onClear: {
      action: 'cleared',
      description: '清除按鈕的回調函數',
      table: {
        type: { summary: '() => void' },
      },
    },
    onChange: {
      action: 'changed',
      description: '輸入值改變時的回調函數',
      table: {
        type: { summary: '(event: ChangeEvent<HTMLInputElement>) => void' },
      },
    },
    className: {
      control: { type: 'text' },
      description: '自訂 CSS 類名',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的 <Primary />
export const Docs: Story = {
  args: {
    placeholder: '請輸入內容',
    variant: 'default',
    size: 'md',
    status: 'default',
  },
};

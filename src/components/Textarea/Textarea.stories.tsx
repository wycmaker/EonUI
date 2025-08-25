import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [commentValue, setCommentValue] = useState('');
  const [feedbackValue, setFeedbackValue] = useState('');
  const [noteValue, setNoteValue] = useState('');
  const [limitedValue, setLimitedValue] = useState('這是一個有字數限制的範例');

  return (
    <div className="space-y-4 w-full max-w-md">
      <Textarea
        placeholder="請輸入您的評論..."
        clearable
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        onClear={() => setCommentValue('')}
        minRows={3}
        maxRows={6}
        maxLength={200}
        showCount
      />
      <Textarea
        placeholder="請提供您的回饋意見"
        value={feedbackValue}
        onChange={(e) => setFeedbackValue(e.target.value)}
        variant="filled"
        minRows={4}
        resize="none"
        showCount
      />
      <Textarea
        placeholder="備註說明"
        value={noteValue}
        onChange={(e) => setNoteValue(e.target.value)}
        variant="outline"
        size="sm"
        minRows={2}
        maxLength={50}
      />
      <Textarea
        placeholder="有字數限制的輸入框"
        value={limitedValue}
        onChange={(e) => setLimitedValue(e.target.value)}
        maxLength={30}
        minRows={3}
      />
    </div>
  );
};

const TextareaDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Textarea 多行文字區域</h1>
        <p className="component-docs-description">
          EonUI 的多行文字輸入組件，基於 Input 組件的設計理念。
          提供多種樣式變體、狀態和大小選項，支援行數控制和調整大小功能。
          完全符合無障礙標準，支援鍵盤導航和螢幕閱讀器。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整文字區域的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 互動式展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的文字區域範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 樣式變體</h2>
        <p className="component-docs-section-description">
          Textarea 組件提供了三種不同的樣式變體：
        </p>

        <div className="component-docs-showcase">
          <Textarea
            variant="default"
            placeholder="預設樣式"
            minRows={3}
          />
          <Textarea
            variant="filled"
            placeholder="填充樣式"
            minRows={3}
          />
          <Textarea
            variant="outline"
            placeholder="外框樣式"
            minRows={3}
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
          支援三種不同的大小選項，影響內邊距和字體大小：
        </p>

        <div className="component-docs-showcase">
          <Textarea
            size="sm"
            placeholder="小尺寸 - 緊湊設計"
            minRows={3}
          />
          <Textarea
            size="md"
            placeholder="中等尺寸 - 標準大小"
            minRows={3}
          />
          <Textarea
            size="lg"
            placeholder="大尺寸 - 舒適閱讀"
            minRows={3}
          />
        </div>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>緊湊設計，適用於空間有限的界面
            </li>
            <li>
              <strong>md：</strong>標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>舒適閱讀，適用於重要的文字輸入
            </li>
          </ul>
        </div>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚦 狀態展示</h2>
        <p className="component-docs-section-description">
          文字區域支援多種狀態，提供清晰的視覺反饋：
        </p>

        <div className="component-docs-showcase">
          <Textarea
            status="default"
            placeholder="預設狀態"
            minRows={3}
          />
          <Textarea
            status="error"
            placeholder="錯誤狀態"
            minRows={3}
          />
          <Textarea
            status="success"
            placeholder="成功狀態"
            minRows={3}
          />
          <Textarea
            status="warning"
            placeholder="警告狀態"
            minRows={3}
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

      {/* 調整大小選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔧 調整大小選項</h2>
        <p className="component-docs-section-description">支援不同的調整大小模式：</p>

        <div className="component-docs-showcase">
          <Textarea
            resize="none"
            placeholder="不可調整大小"
            minRows={3}
          />
          <Textarea
            resize="vertical"
            placeholder="僅垂直調整（預設）"
            minRows={3}
          />
          <Textarea
            resize="horizontal"
            placeholder="僅水平調整"
            minRows={3}
          />
          <Textarea
            resize="both"
            placeholder="水平垂直都可調整"
            minRows={3}
          />
        </div>

        <div className="component-docs-info-card">
          <strong>調整模式說明：</strong>
          <ul>
            <li>
              <strong>none：</strong>固定大小，不可調整
            </li>
            <li>
              <strong>vertical：</strong>僅允許垂直調整（推薦）
            </li>
            <li>
              <strong>horizontal：</strong>僅允許水平調整
            </li>
            <li>
              <strong>both：</strong>允許任意方向調整
            </li>
          </ul>
        </div>
      </div>

      {/* 行數控制 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📐 行數控制</h2>
        <p className="component-docs-section-description">支援最小和最大行數設定：</p>

        <div className="component-docs-showcase">
          <Textarea
            minRows={2}
            placeholder="最小 2 行"
          />
          <Textarea
            minRows={4}
            placeholder="最小 4 行"
          />
          <Textarea
            minRows={3}
            maxRows={6}
            placeholder="最小 3 行，最大 6 行"
          />
          <Textarea
            minRows={5}
            maxRows={5}
            resize="none"
            placeholder="固定 5 行"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>行數控制說明：</strong>
          <ul>
            <li>
              <strong>minRows：</strong>設定最小顯示行數
            </li>
            <li>
              <strong>maxRows：</strong>設定最大顯示行數（可選）
            </li>
            <li>組合 minRows=maxRows 和 resize="none" 可創建固定大小的文字區域</li>
          </ul>
        </div>
      </div>

      {/* 字數限制與統計 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔢 字數限制與統計</h2>
        <p className="component-docs-section-description">支援字數統計和最大字數限制功能：</p>

        <div className="component-docs-showcase">
          <Textarea
            placeholder="無限制，僅顯示字數"
            showCount
            minRows={3}
            defaultValue="這個文字區域會顯示字數統計"
          />
          <Textarea
            placeholder="最多 50 個字"
            maxLength={50}
            minRows={3}
            defaultValue="這個文字區域最多只能輸入 50 個字，超出時會被阻擋"
          />
          <Textarea
            placeholder="最多 20 個字（測試警告狀態）"
            maxLength={20}
            minRows={3}
            defaultValue="這裡已經接近字數限制了"
          />
        </div>

        <div className="component-docs-info-card">
          <strong>字數功能說明：</strong>
          <ul>
            <li>
              <strong>showCount：</strong>顯示字數統計（無限制）
            </li>
            <li>
              <strong>maxLength：</strong>設定最大字數限制，自動顯示統計
            </li>
            <li>接近限制時（80%）字數會變成警告色</li>
            <li>超出限制時會阻擋輸入並顯示錯誤色</li>
            <li>支援無障礙 aria-live 即時通知</li>
          </ul>
        </div>
      </div>

      {/* 清除功能 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🗑️ 清除功能</h2>
        <p className="component-docs-section-description">支援清除按鈕功能：</p>

        <div className="component-docs-showcase">
          <Textarea
            clearable
            placeholder="可清除的文字區域"
            defaultValue="這裡有一些預設文字，可以點擊右上角的清除按鈕來清空。"
            minRows={4}
            maxLength={100}
          />
        </div>

        <div className="component-docs-info-card">
          <strong>清除功能說明：</strong>
          <ul>
            <li>
              <strong>clearable：</strong>啟用清除按鈕
            </li>
            <li>清除按鈕位於右上角，當有內容時顯示</li>
            <li>支援無障礙標籤和鍵盤操作</li>
            <li>可以與字數統計功能組合使用</li>
          </ul>
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚫 禁用狀態</h2>
        <p className="component-docs-section-description">展示禁用狀態下的各種樣式：</p>

        <div className="component-docs-showcase">
          <Textarea
            disabled
            placeholder="禁用的文字區域"
            minRows={3}
          />
          <Textarea
            disabled
            variant="filled"
            placeholder="禁用的填充樣式"
            minRows={3}
          />
          <Textarea
            disabled
            defaultValue="禁用狀態下的預設內容"
            minRows={3}
          />
        </div>
      </div>

      {/* 組合使用 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔗 組合使用</h2>
        <p className="component-docs-section-description">展示各種屬性的組合使用：</p>

        <div className="component-docs-showcase">
          <Textarea
            size="lg"
            variant="outline"
            status="success"
            clearable
            placeholder="大尺寸外框成功狀態"
            defaultValue="組合範例文字"
            minRows={4}
            maxRows={8}
          />
          <Textarea
            size="sm"
            variant="filled"
            status="warning"
            placeholder="小尺寸填充警告狀態"
            minRows={2}
            resize="none"
          />
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Textarea } from 'eonui';

// 基本文字區域
<Textarea placeholder="請輸入內容" />

// 帶樣式的文字區域
<Textarea
  variant="filled"
  size="lg"
  placeholder="大尺寸填充樣式"
  minRows={4}
/>

// 可清除的文字區域
<Textarea
  placeholder="評論..."
  clearable
  minRows={3}
  maxRows={6}
  maxLength={200}
  showCount
/>

// 不同狀態
<Textarea
  status="error"
  placeholder="錯誤狀態"
  minRows={3}
/>

<Textarea
  status="success"
  placeholder="成功狀態"
  minRows={3}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 受控組件
const [value, setValue] = useState('');

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
  minRows={4}
  maxRows={10}
/>

// 組合使用
<Textarea
  size="lg"
  variant="outline"
  status="success"
  clearable
  placeholder="詳細描述..."
  minRows={5}
  maxLength={500}
  resize="vertical"
/>

// 字數限制功能
<Textarea
  placeholder="最多 100 字的評論"
  maxLength={100}
  minRows={4}
/>

// 僅顯示字數統計
<Textarea
  placeholder="顯示字數統計"
  showCount
  minRows={3}
/>

// 固定大小
<Textarea
  minRows={6}
  maxRows={6}
  resize="none"
  placeholder="固定大小的文字區域"
/>

// 自訂樣式
<Textarea
  className="border-blue-500 focus:ring-blue-500"
  placeholder="自訂樣式"
  minRows={3}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Textarea 組件的所有功能，可以在你的項目中開始使用了！
          這個多行文字輸入組件提供了豐富的自訂選項，適用於各種表單場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <TextareaDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: '文字區域的視覺樣式變體',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '文字區域的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: '文字區域的狀態',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: '是否可調整大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
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
    minRows: {
      control: { type: 'number', min: 1, max: 20 },
      description: '最小行數',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
      },
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 20 },
      description: '最大行數',
      table: {
        type: { summary: 'number' },
      },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 1000 },
      description: '最大字數限制',
      table: {
        type: { summary: 'number' },
      },
    },
    showCount: {
      control: { type: 'boolean' },
      description: '是否顯示字數統計',
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
    value: {
      control: { type: 'text' },
      description: '文字區域的值（受控組件）',
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
        type: { summary: '(event: ChangeEvent<HTMLTextAreaElement>) => void' },
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
    minRows: 3,
    resize: 'vertical',
  },
};

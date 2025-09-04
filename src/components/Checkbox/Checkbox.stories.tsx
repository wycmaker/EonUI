import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxGroup } from './Checkbox';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [hobbies, setHobbies] = useState<(string | number)[]>(['reading', 'music']);
  const [languages, setLanguages] = useState<(string | number)[]>(['zh']);
  const [notifications, setNotifications] = useState<(string | number)[]>(['email']);

  return (
    <div className="space-y-8 w-full max-w-md">
      {/* 基本 CheckboxGroup */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">興趣愛好</h4>
        <CheckboxGroup
          value={hobbies}
          onChange={setHobbies}
        >
          <Checkbox value="reading">閱讀</Checkbox>
          <Checkbox value="music">音樂</Checkbox>
          <Checkbox value="sports">運動</Checkbox>
          <Checkbox value="travel">旅行</Checkbox>
        </CheckboxGroup>
      </div>

      {/* 水平排列 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">語言能力</h4>
        <CheckboxGroup
          value={languages}
          onChange={setLanguages}
          direction="horizontal"
        >
          <Checkbox value="zh">中文</Checkbox>
          <Checkbox value="en">英文</Checkbox>
          <Checkbox value="ja">日文</Checkbox>
        </CheckboxGroup>
      </div>

      {/* 不同大小 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">通知設定</h4>
        <CheckboxGroup
          value={notifications}
          onChange={setNotifications}
          size="lg"
        >
          <Checkbox value="email">電子郵件</Checkbox>
          <Checkbox value="sms">簡訊</Checkbox>
          <Checkbox value="push">推播通知</Checkbox>
          <Checkbox value="app">應用內通知</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
};

const CheckboxDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Checkbox 複選框</h1>
        <p className="component-docs-description">
          EonUI 的複選框組件，提供單個 Checkbox 和 CheckboxGroup 兩種使用方式。
          設計風格類似 Element Plus，支援多種大小、顏色和狀態，支援多選功能和不確定狀態。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Checkbox 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的複選框範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 基本用法</h2>
        <p className="component-docs-section-description">
          Checkbox 可以單獨使用或配合 CheckboxGroup 使用：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            {/* 單獨使用 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">單獨使用 Checkbox</h4>
              <div className="flex flex-col space-y-2">
                <Checkbox
                  value="option1"
                  defaultChecked
                >
                  已選中的選項
                </Checkbox>
                <Checkbox value="option2">未選中的選項</Checkbox>
                <Checkbox
                  value="option3"
                  indeterminate
                >
                  不確定狀態（部分選中）
                </Checkbox>
                <Checkbox
                  value="option4"
                  disabled
                >
                  禁用的選項
                </Checkbox>
                <Checkbox
                  value="option5"
                  disabled
                  defaultChecked
                >
                  禁用且選中
                </Checkbox>
              </div>
            </div>

            {/* CheckboxGroup */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">使用 CheckboxGroup</h4>
              <CheckboxGroup defaultValue={['option1', 'option3']}>
                <Checkbox value="option1">選項一</Checkbox>
                <Checkbox value="option2">選項二</Checkbox>
                <Checkbox value="option3">選項三</Checkbox>
                <Checkbox value="option4">選項四</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 大小選項</h2>
        <p className="component-docs-section-description">支援三種不同的大小選項：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size}>
                <h4 className="font-medium mb-2 text-gray-600">大小：{size.toUpperCase()}</h4>
                <CheckboxGroup
                  defaultValue={['option1']}
                  size={size}
                  direction="horizontal"
                >
                  <Checkbox value="option1">選項一</Checkbox>
                  <Checkbox value="option2">選項二</Checkbox>
                  <Checkbox value="option3">選項三</Checkbox>
                </CheckboxGroup>
              </div>
            ))}
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>小尺寸，適用於緊湊的界面設計
            </li>
            <li>
              <strong>md：</strong>中等尺寸（預設），適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>大尺寸，適用於需要突出的選項
            </li>
          </ul>
        </div>
      </div>

      {/* 顏色選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 顏色選項</h2>
        <p className="component-docs-section-description">支援多種顏色主題：</p>

        <div className="component-docs-showcase">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              [
                { color: 'primary', label: '主要色' },
                { color: 'secondary', label: '次要色' },
                { color: 'success', label: '成功色' },
                { color: 'warning', label: '警告色' },
                { color: 'error', label: '錯誤色' },
              ] as const
            ).map(({ color, label }) => (
              <div key={color}>
                <h4 className="font-medium mb-2 text-gray-600">{label}</h4>
                <div className="flex space-x-4">
                  <CheckboxGroup
                    defaultValue={['checked']}
                    direction="horizontal"
                  >
                    <Checkbox
                      value="checked"
                      color={color}
                    >
                      已選中
                    </Checkbox>
                    <Checkbox
                      value="unchecked"
                      color={color}
                    >
                      未選中
                    </Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 不確定狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">❓ 不確定狀態</h2>
        <p className="component-docs-section-description">
          Checkbox 支援不確定（indeterminate）狀態，常用於「全選/部分選中」的場景：
        </p>

        <div className="component-docs-showcase">
          <IndeterminateExample />
        </div>

        <div className="component-docs-info-card">
          <strong>不確定狀態說明：</strong>
          <ul>
            <li>
              <strong>用途：</strong>表示部分子項目被選中，常見於樹狀選擇
            </li>
            <li>
              <strong>視覺：</strong>顯示橫線而非勾選標記
            </li>
            <li>
              <strong>無障礙：</strong>aria-checked 設為 "mixed"
            </li>
          </ul>
        </div>
      </div>

      {/* 排列方向 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📐 排列方向</h2>
        <p className="component-docs-section-description">
          CheckboxGroup 支援垂直和水平兩種排列方向：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">垂直排列（預設）</h4>
              <CheckboxGroup
                defaultValue={['vertical1']}
                direction="vertical"
              >
                <Checkbox value="vertical1">垂直選項一</Checkbox>
                <Checkbox value="vertical2">垂直選項二</Checkbox>
                <Checkbox value="vertical3">垂直選項三</Checkbox>
              </CheckboxGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">水平排列</h4>
              <CheckboxGroup
                defaultValue={['horizontal1', 'horizontal3']}
                direction="horizontal"
              >
                <Checkbox value="horizontal1">水平選項一</Checkbox>
                <Checkbox value="horizontal2">水平選項二</Checkbox>
                <Checkbox value="horizontal3">水平選項三</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚫 禁用狀態</h2>
        <p className="component-docs-section-description">
          支援單個 Checkbox 禁用或整個 CheckboxGroup 禁用：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">單個 Checkbox 禁用</h4>
              <CheckboxGroup defaultValue={['option1']}>
                <Checkbox value="option1">正常選項</Checkbox>
                <Checkbox
                  value="option2"
                  disabled
                >
                  禁用選項
                </Checkbox>
                <Checkbox
                  value="option3"
                  disabled
                  defaultChecked
                >
                  禁用且選中
                </Checkbox>
              </CheckboxGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">整個 CheckboxGroup 禁用</h4>
              <CheckboxGroup
                defaultValue={['option1', 'option3']}
                disabled
              >
                <Checkbox value="option1">群組禁用選項一</Checkbox>
                <Checkbox value="option2">群組禁用選項二</Checkbox>
                <Checkbox value="option3">群組禁用選項三</Checkbox>
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 無標籤 Checkbox */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">⬜ 無標籤 Checkbox</h2>
        <p className="component-docs-section-description">Checkbox 可以不帶標籤文字：</p>

        <div className="component-docs-showcase">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">不同大小：</span>
              <CheckboxGroup
                defaultValue={['md']}
                direction="horizontal"
              >
                <Checkbox
                  value="sm"
                  size="sm"
                />
                <Checkbox
                  value="md"
                  size="md"
                />
                <Checkbox
                  value="lg"
                  size="lg"
                />
              </CheckboxGroup>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">不同顏色：</span>
              <CheckboxGroup
                defaultValue={['primary', 'success']}
                direction="horizontal"
              >
                <Checkbox
                  value="primary"
                  color="primary"
                />
                <Checkbox
                  value="success"
                  color="success"
                />
                <Checkbox
                  value="warning"
                  color="warning"
                />
                <Checkbox
                  value="error"
                  color="error"
                />
              </CheckboxGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 複雜範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔗 複雜範例</h2>
        <p className="component-docs-section-description">展示實際應用場景的複雜範例：</p>

        <div className="component-docs-showcase">
          <div className="max-w-lg space-y-6">
            {/* 表單範例 */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-lg font-semibold mb-4">用戶權限設定</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">基本權限</label>
                  <CheckboxGroup
                    defaultValue={['read', 'create']}
                    size="sm"
                  >
                    <Checkbox value="read">讀取</Checkbox>
                    <Checkbox value="create">建立</Checkbox>
                    <Checkbox value="update">更新</Checkbox>
                    <Checkbox value="delete">刪除</Checkbox>
                  </CheckboxGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">通知偏好</label>
                  <CheckboxGroup
                    defaultValue={['email']}
                    direction="horizontal"
                    size="sm"
                  >
                    <Checkbox value="email">郵件</Checkbox>
                    <Checkbox value="sms">簡訊</Checkbox>
                    <Checkbox value="push">推播</Checkbox>
                  </CheckboxGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">功能模組</label>
                  <CheckboxGroup defaultValue={['dashboard', 'reports']}>
                    <Checkbox value="dashboard">儀表板</Checkbox>
                    <Checkbox value="users">用戶管理</Checkbox>
                    <Checkbox value="reports">報表分析</Checkbox>
                    <Checkbox value="settings">系統設定</Checkbox>
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Checkbox, CheckboxGroup } from 'eonui';

// 單獨使用 Checkbox
<Checkbox value="option1" defaultChecked>
  選項一
</Checkbox>

// 使用 CheckboxGroup
<CheckboxGroup 
  defaultValue={['option1', 'option3']} 
  onChange={(value) => console.log(value)}
>
  <Checkbox value="option1">選項一</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
  <Checkbox value="option3">選項三</Checkbox>
</CheckboxGroup>

// 水平排列
<CheckboxGroup direction="horizontal" defaultValue={['basic']}>
  <Checkbox value="basic">基礎版</Checkbox>
  <Checkbox value="pro">專業版</Checkbox>
  <Checkbox value="enterprise">企業版</Checkbox>
</CheckboxGroup>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 受控組件
const [hobbies, setHobbies] = useState(['reading', 'music']);

<CheckboxGroup value={hobbies} onChange={setHobbies}>
  <Checkbox value="reading">閱讀</Checkbox>
  <Checkbox value="music">音樂</Checkbox>
  <Checkbox value="sports">運動</Checkbox>
</CheckboxGroup>

// 不同大小和顏色
<CheckboxGroup size="lg" defaultValue={['success']}>
  <Checkbox value="success" color="success">成功</Checkbox>
  <Checkbox value="warning" color="warning">警告</Checkbox>
  <Checkbox value="error" color="error">錯誤</Checkbox>
</CheckboxGroup>

// 不確定狀態
<Checkbox
  value="parent"
  indeterminate={hasPartialSelection}
  checked={allSelected}
  onChange={handleParentChange}
>
  全選
</Checkbox>

// 禁用狀態
<CheckboxGroup disabled defaultValue={['option1']}>
  <Checkbox value="option1">選項一</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
</CheckboxGroup>

// 無標籤 Checkbox
<div className="flex space-x-2">
  <Checkbox value="1" defaultChecked />
  <Checkbox value="2" />
  <Checkbox value="3" />
</div>

// 單獨 Checkbox 的事件處理
<Checkbox
  value="custom"
  onChange={(checked, value) => {
    console.log('Checkbox changed:', checked, value);
  }}
>
  自訂事件處理
</Checkbox>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Checkbox 組件的所有功能，可以在你的項目中開始使用了！
          Checkbox 組件提供了靈活的多選功能，適用於各種表單和設定場景。
        </p>
      </div>
    </div>
  );
};

// 不確定狀態示範組件
const IndeterminateExample = () => {
  const [items] = useState([
    { id: 'item1', label: '項目一', checked: true },
    { id: 'item2', label: '項目二', checked: false },
    { id: 'item3', label: '項目三', checked: true },
  ]);

  const [checkedItems, setCheckedItems] = useState<string[]>(['item1', 'item3']);

  const allChecked = checkedItems.length === items.length;
  const isIndeterminate = checkedItems.length > 0 && checkedItems.length < items.length;

  const handleParentChange = (checked: boolean) => {
    if (checked) {
      setCheckedItems(items.map(item => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleItemChange = (checked: boolean, value: string | number) => {
    const itemId = value as string;
    if (checked) {
      setCheckedItems(prev => [...prev, itemId]);
    } else {
      setCheckedItems(prev => prev.filter(id => id !== itemId));
    }
  };

  return (
    <div className="space-y-3">
      <Checkbox
        value="parent"
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={handleParentChange}
      >
        <strong>全選（{checkedItems.length}/{items.length}）</strong>
      </Checkbox>
      
      <div className="ml-6 space-y-2">
        {items.map(item => (
          <Checkbox
            key={item.id}
            value={item.id}
            checked={checkedItems.includes(item.id)}
            onChange={handleItemChange}
          >
            {item.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <CheckboxDocs />,
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Checkbox 的值',
      table: {
        type: { summary: 'string | number' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '是否選中（受控組件）',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: '預設是否選中（非受控組件）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: '是否為不確定狀態（部分選中）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Checkbox 大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: '狀態顏色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '標籤文字',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onChange: {
      action: 'changed',
      description: '值改變時的回調',
      table: {
        type: { summary: '(checked: boolean, value: string | number) => void' },
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
    value: 'example',
    children: 'Checkbox 選項',
    size: 'md',
    color: 'primary',
    defaultChecked: false,
    indeterminate: false,
    disabled: false,
  },
};

import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioGroup } from './Radio';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [gender, setGender] = useState<string | number>('male');
  const [plan, setPlan] = useState<string | number>('basic');
  const [notification, setNotification] = useState<string | number>('email');

  return (
    <div className="space-y-8 w-full max-w-md">
      {/* 基本 RadioGroup */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">性別選擇</h4>
        <RadioGroup
          value={gender}
          onChange={setGender}
        >
          <Radio value="male">男性</Radio>
          <Radio value="female">女性</Radio>
          <Radio value="other">其他</Radio>
        </RadioGroup>
      </div>

      {/* 水平排列 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">方案選擇</h4>
        <RadioGroup
          value={plan}
          onChange={setPlan}
          direction="horizontal"
        >
          <Radio value="basic">基礎版</Radio>
          <Radio value="pro">專業版</Radio>
          <Radio value="enterprise">企業版</Radio>
        </RadioGroup>
      </div>

      {/* 不同大小 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">通知設定</h4>
        <RadioGroup
          value={notification}
          onChange={setNotification}
          size="lg"
        >
          <Radio value="email">電子郵件</Radio>
          <Radio value="sms">簡訊</Radio>
          <Radio value="push">推播通知</Radio>
          <Radio value="none">不接收通知</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

const RadioDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Radio 單選框</h1>
        <p className="component-docs-description">
          EonUI 的單選框組件，提供單個 Radio 和 RadioGroup 兩種使用方式。 設計風格類似 Element
          Plus，支援多種大小、顏色和狀態，提供靈活的單選功能。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Radio 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的單選框範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 基本用法</h2>
        <p className="component-docs-section-description">
          Radio 可以單獨使用或配合 RadioGroup 使用：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            {/* 單獨使用 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">單獨使用 Radio</h4>
              <div className="flex flex-col space-y-2">
                <Radio
                  value="option1"
                  defaultChecked
                >
                  已選中的選項
                </Radio>
                <Radio value="option2">未選中的選項</Radio>
                <Radio
                  value="option3"
                  disabled
                >
                  禁用的選項
                </Radio>
              </div>
            </div>

            {/* RadioGroup */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">使用 RadioGroup</h4>
              <RadioGroup defaultValue="option1">
                <Radio value="option1">選項一</Radio>
                <Radio value="option2">選項二</Radio>
                <Radio value="option3">選項三</Radio>
              </RadioGroup>
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
                <RadioGroup
                  defaultValue="option1"
                  size={size}
                  direction="horizontal"
                >
                  <Radio value="option1">選項一</Radio>
                  <Radio value="option2">選項二</Radio>
                  <Radio value="option3">選項三</Radio>
                </RadioGroup>
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
                  <RadioGroup
                    defaultValue="checked"
                    direction="horizontal"
                  >
                    <Radio
                      value="checked"
                      color={color}
                    >
                      已選中
                    </Radio>
                    <Radio
                      value="unchecked"
                      color={color}
                    >
                      未選中
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 排列方向 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📐 排列方向</h2>
        <p className="component-docs-section-description">
          RadioGroup 支援垂直和水平兩種排列方向：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">垂直排列（預設）</h4>
              <RadioGroup
                defaultValue="vertical1"
                direction="vertical"
              >
                <Radio value="vertical1">垂直選項一</Radio>
                <Radio value="vertical2">垂直選項二</Radio>
                <Radio value="vertical3">垂直選項三</Radio>
              </RadioGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">水平排列</h4>
              <RadioGroup
                defaultValue="horizontal1"
                direction="horizontal"
              >
                <Radio value="horizontal1">水平選項一</Radio>
                <Radio value="horizontal2">水平選項二</Radio>
                <Radio value="horizontal3">水平選項三</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚫 禁用狀態</h2>
        <p className="component-docs-section-description">
          支援單個 Radio 禁用或整個 RadioGroup 禁用：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">單個 Radio 禁用</h4>
              <RadioGroup defaultValue="option1">
                <Radio value="option1">正常選項</Radio>
                <Radio
                  value="option2"
                  disabled
                >
                  禁用選項
                </Radio>
                <Radio
                  value="option3"
                  disabled
                  defaultChecked
                >
                  禁用且選中
                </Radio>
              </RadioGroup>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">整個 RadioGroup 禁用</h4>
              <RadioGroup
                defaultValue="option1"
                disabled
              >
                <Radio value="option1">群組禁用選項一</Radio>
                <Radio value="option2">群組禁用選項二</Radio>
                <Radio value="option3">群組禁用選項三</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      {/* 無標籤 Radio */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">⚪ 無標籤 Radio</h2>
        <p className="component-docs-section-description">Radio 可以不帶標籤文字：</p>

        <div className="component-docs-showcase">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">不同大小：</span>
              <RadioGroup
                defaultValue="sm"
                direction="horizontal"
              >
                <Radio
                  value="sm"
                  size="sm"
                >
                  小尺寸
                </Radio>
                <Radio
                  value="md"
                  size="md"
                >
                  中尺寸
                </Radio>
                <Radio
                  value="lg"
                  size="lg"
                >
                  大尺寸
                </Radio>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">不同顏色：</span>
              <RadioGroup
                defaultValue="primary"
                direction="horizontal"
              >
                <Radio
                  value="primary"
                  color="primary"
                />
                <Radio
                  value="success"
                  color="success"
                />
                <Radio
                  value="warning"
                  color="warning"
                />
                <Radio
                  value="error"
                  color="error"
                />
              </RadioGroup>
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
              <h3 className="text-lg font-semibold mb-4">用戶設定</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">通知頻率</label>
                  <RadioGroup
                    defaultValue="daily"
                    size="sm"
                  >
                    <Radio value="realtime">即時通知</Radio>
                    <Radio value="daily">每日摘要</Radio>
                    <Radio value="weekly">每週摘要</Radio>
                    <Radio value="never">從不通知</Radio>
                  </RadioGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">主題偏好</label>
                  <RadioGroup
                    defaultValue="auto"
                    direction="horizontal"
                    size="sm"
                  >
                    <Radio value="light">淺色</Radio>
                    <Radio value="dark">深色</Radio>
                    <Radio value="auto">自動</Radio>
                  </RadioGroup>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">隱私設定</label>
                  <RadioGroup defaultValue="friends">
                    <Radio value="public">公開</Radio>
                    <Radio value="friends">僅好友</Radio>
                    <Radio value="private">私人</Radio>
                  </RadioGroup>
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
          <pre className="component-docs-code">{`import { Radio, RadioGroup } from 'eonui';

// 單獨使用 Radio
<Radio value="option1" defaultChecked>
  選項一
</Radio>

// 使用 RadioGroup
<RadioGroup defaultValue="option1" onChange={(value) => console.log(value)}>
  <Radio value="option1">選項一</Radio>
  <Radio value="option2">選項二</Radio>
  <Radio value="option3">選項三</Radio>
</RadioGroup>

// 水平排列
<RadioGroup direction="horizontal" defaultValue="basic">
  <Radio value="basic">基礎版</Radio>
  <Radio value="pro">專業版</Radio>
  <Radio value="enterprise">企業版</Radio>
</RadioGroup>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 受控組件
const [gender, setGender] = useState('male');

<RadioGroup value={gender} onChange={setGender}>
  <Radio value="male">男性</Radio>
  <Radio value="female">女性</Radio>
  <Radio value="other">其他</Radio>
</RadioGroup>

// 不同大小和顏色
<RadioGroup size="lg" defaultValue="success">
  <Radio value="success" color="success">成功</Radio>
  <Radio value="warning" color="warning">警告</Radio>
  <Radio value="error" color="error">錯誤</Radio>
</RadioGroup>

// 禁用狀態
<RadioGroup disabled defaultValue="option1">
  <Radio value="option1">選項一</Radio>
  <Radio value="option2">選項二</Radio>
</RadioGroup>

// 無標籤 Radio
<div className="flex space-x-2">
  <Radio value="1" defaultChecked />
  <Radio value="2" />
  <Radio value="3" />
</div>

// 單獨 Radio 的事件處理
<Radio
  value="custom"
  onChange={(checked, value) => {
    console.log('Radio changed:', checked, value);
  }}
>
  自訂事件處理
</Radio>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Radio 組件的所有功能，可以在你的項目中開始使用了！ Radio
          組件提供了靈活的單選功能，適用於各種表單和設定場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <RadioDocs />,
    },
  },
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Radio 的值',
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
      description: 'Radio 大小',
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
    children: 'Radio 選項',
    size: 'md',
    color: 'primary',
    defaultChecked: false,
    disabled: false,
  },
};

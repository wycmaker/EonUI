import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { CodeExample } from '../shared/CodeExample';

import { Loading, LoadingProvider, useLoading, loadingService } from './index';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [basicLoading, setBasicLoading] = useState(false);
  const [customLoading, setCustomLoading] = useState(false);
  const [targetLoading, setTargetLoading] = useState(false);

  const handleBasicLoading = () => {
    setBasicLoading(true);
    setTimeout(() => setBasicLoading(false), 2000);
  };

  const handleCustomLoading = () => {
    setCustomLoading(true);
    setTimeout(() => setCustomLoading(false), 2000);
  };

  const handleTargetLoading = () => {
    setTargetLoading(true);
    const instance = loadingService.start({
      text: '區域載入中...',
      target: '.loading-target',
      maskOpacity: 0.6,
    });

    setTimeout(() => {
      instance.close();
      setTargetLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-8 w-full max-w-md">
      {/* 基本 Loading */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">基本 Loading</h4>
        <div className="relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
          <Button
            variant="primary"
            onClick={handleBasicLoading}
            disabled={basicLoading}
          >
            {basicLoading ? '載入中...' : '顯示 Loading (2秒)'}
          </Button>
          <Loading
            visible={basicLoading}
            text="載入中..."
          />
        </div>
      </div>

      {/* 自定義圖標 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">自定義圖標</h4>
        <div className="relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
          <Button
            variant="secondary"
            onClick={handleCustomLoading}
            disabled={customLoading}
          >
            {customLoading ? '處理中...' : '自定義 Loading (2秒)'}
          </Button>
          <Loading
            visible={customLoading}
            text="正在處理..."
            icon={
              <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
            }
          />
        </div>
      </div>

      {/* Service 目標遮罩 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">Service 目標遮罩</h4>
        <Button
          variant="outline"
          onClick={handleTargetLoading}
          disabled={targetLoading}
          className="mb-3"
        >
          目標 Loading (2秒)
        </Button>
        <div className="loading-target relative w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
          <div className="text-gray-500">
            {targetLoading ? '載入中...' : '點擊上方按鈕在此區域顯示 Loading'}
          </div>
        </div>
      </div>
    </div>
  );
};

// Context 使用方式
const ContextExample = () => {
  const { showLoading, hideLoading, loading } = useLoading();

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">使用 Context 方式管理全屏 Loading 狀態</div>
      <div className="flex space-x-4">
        <Button
          variant="primary"
          onClick={() => showLoading({ text: '正在載入數據...' })}
          disabled={loading}
        >
          顯示 Loading
        </Button>
        <Button
          variant="secondary"
          onClick={hideLoading}
          disabled={!loading}
        >
          隱藏 Loading
        </Button>
      </div>
      <div className="text-sm text-gray-500">狀態: {loading ? '載入中' : '閒置'}</div>
    </div>
  );
};

// Service 使用方式
const ServiceExample = () => {
  const [targetLoading, setTargetLoading] = useState(false);

  const handleGlobalLoading = () => {
    const instance = loadingService.start({
      text: '全屏載入中...',
      maskOpacity: 0.7,
    });

    setTimeout(() => {
      instance.close();
    }, 3000);
  };

  const handleTargetLoading = () => {
    setTargetLoading(true);
    const instance = loadingService.start({
      text: '區域載入中...',
      target: '.loading-target',
      maskOpacity: 0.6,
    });

    setTimeout(() => {
      instance.close();
      setTargetLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">使用 Service 方式管理 Loading 狀態</div>

      <div className="flex space-x-4">
        <Button
          variant="primary"
          onClick={handleGlobalLoading}
        >
          全屏 Loading (3秒)
        </Button>
        <Button
          variant="secondary"
          onClick={handleTargetLoading}
          disabled={targetLoading}
        >
          目標 Loading (2秒)
        </Button>
      </div>

      <div className="loading-target relative w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">
          {targetLoading ? '載入中...' : '點擊上方按鈕在此區域顯示 Loading'}
        </div>
      </div>
    </div>
  );
};

const LoadingDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Loading 載入組件</h1>
        <p className="component-docs-description">
          EonUI 的載入組件，提供靈活的載入狀態顯示功能。 支援組件、Context、Service
          三種使用方式，可指定目標元素遮罩，提供豐富的自定義選項和無障礙支援。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Loading 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的載入組件範例，展示各種功能組合："
          code={`// 互動式 Loading 範例
const [loading, setLoading] = useState(false);

const handleLoading = () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
};

return (
  <div className="space-y-6">
    <div className="relative">
      <Button onClick={handleLoading} disabled={loading}>
        {loading ? '載入中...' : '開始載入'}
      </Button>
      <Loading visible={loading} text="載入中..." />
    </div>

    <div className="relative">
      <div>內容區域</div>
      <Loading
        visible={loading}
        text="自定義載入..."
        icon={<CustomSpinner />}
        maskOpacity={0.8}
      />
    </div>
  </div>
);`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 使用方式展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 Context 使用方式"
          description="使用 LoadingProvider 和 useLoading Hook 管理全屏 Loading："
          code={`import { LoadingProvider, useLoading } from 'eonui';

function App() {
  return (
    <LoadingProvider>
      <YourComponent />
    </LoadingProvider>
  );
}

function YourComponent() {
  const { showLoading, hideLoading } = useLoading();

  const handleSubmit = async () => {
    showLoading({ text: '提交中...' });
    try {
      await submitForm();
    } finally {
      hideLoading();
    }
  };

  return <button onClick={handleSubmit}>提交</button>;
}`}
        >
          <LoadingProvider>
            <ContextExample />
          </LoadingProvider>
        </CodeExample>
      </div>

      {/* Service 使用方式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 Service 使用方式"
          description="使用 loadingService 進行更靈活的 Loading 管理："
          code={`import { loadingService } from 'eonui';

// 全屏 Loading
const instance = loadingService.start({
  text: '載入中...',
  maskOpacity: 0.7
});

// 關閉 Loading
instance.close();

// 目標元素 Loading
loadingService.start({
  text: '處理中...',
  target: '.my-container' // CSS 選擇器或 DOM 元素
});

// 關閉指定目標的 Loading
loadingService.close('.my-container');

// 關閉所有 Loading
loadingService.closeAll();`}
        >
          <ServiceExample />
        </CodeExample>
      </div>

      {/* 自定義樣式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 自定義樣式"
          description="自定義圖標、文字和樣式："
          code={`import { Loading } from 'eonui';

const CustomSpinner = () => (
  <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
);

function App() {
  return (
    <Loading
      visible={true}
      text="正在處理..."
      icon={<CustomSpinner />}
      maskOpacity={0.8}
      className="custom-loading"
    />
  );
}`}
        >
          <div className="relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
            <div className="text-gray-500">自定義樣式</div>
            <Loading
              visible={true}
              text="正在處理..."
              icon={
                <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
              }
              maskOpacity={0.6}
            />
          </div>
        </CodeExample>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Loading } from 'eonui';

// 基本組件使用
<Loading visible={loading} text="載入中..." />

// 全屏模式
<Loading visible={loading} text="載入中..." fullscreen />

// 自定義圖標
<Loading
  visible={loading}
  text="處理中..."
  icon={<CustomSpinner />}
  maskOpacity={0.8}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// Context 方式
const { showLoading, hideLoading } = useLoading();

showLoading({ text: '載入中...', maskOpacity: 0.7 });
hideLoading();

// Service 方式
const instance = loadingService.start({
  text: '載入中...',
  target: '.my-container', // 目標元素
  maskOpacity: 0.6
});

instance.close(); // 關閉特定實例
loadingService.closeAll(); // 關閉所有

// 組合使用
<Loading
  visible={loading}
  text="自定義載入..."
  icon={<CustomIcon />}
  maskOpacity={0.8}
  fullscreen
  onMaskClick={() => setLoading(false)}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Loading 組件的所有功能，可以在你的項目中開始使用了！
          這個載入組件提供了三種使用方式，適用於各種載入場景，從簡單的組件載入到複雜的目標遮罩。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <LoadingDocs />,
    },
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: '是否顯示 Loading',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: { type: 'text' },
      description: 'Loading 文字',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '載入中...' },
      },
    },
    icon: {
      control: false,
      description: '自定義圖標',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    maskOpacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '遮罩透明度',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.5' },
      },
    },
    fullscreen: {
      control: { type: 'boolean' },
      description: '是否全屏顯示',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: '自定義類名',
      table: {
        type: { summary: 'string' },
      },
    },
    onMaskClick: {
      action: 'maskClicked',
      description: '遮罩點擊事件',
      table: {
        type: { summary: '() => void' },
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
    visible: true,
    text: '載入中...',
    maskOpacity: 0.5,
    fullscreen: false,
  },
  render: (args) => (
    <div className="relative w-96 h-64 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
      <div className="text-gray-500">這是一個容器</div>
      <Loading {...args} />
    </div>
  ),
};

import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Alert, AlertPosition } from './Alert';
import { AlertService } from './service';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      type: 'info' as const,
      title: '資訊提示',
      children: '這是一個資訊提示的範例內容。',
      visible: true,
    },
    {
      id: '2',
      type: 'success' as const,
      title: '成功提示',
      children: '操作已成功完成！',
      visible: true,
    },
  ]);

  const handleClose = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          {...alert}
          onClose={() => handleClose(alert.id)}
        />
      ))}
    </div>
  );
};

// Service 範例組件
const ServiceExample = () => {
  const showInfo = () => {
    AlertService.info('這是一個資訊提示訊息', {
      position: 'top-right',
      duration: 3000,
    });
  };

  const showSuccess = () => {
    AlertService.success('操作成功完成！', {
      position: 'top-right',
      title: '成功',
      duration: 4000,
    });
  };

  const showWarning = () => {
    AlertService.warning('請注意這個警告訊息', {
      position: 'top-center',
      title: '警告',
      duration: 5000,
    });
  };

  const showError = () => {
    AlertService.error('發生了一個錯誤', {
      position: 'top-left',
      title: '錯誤',
      duration: 0, // 不自動關閉
    });
  };

  const showPrimary = () => {
    AlertService.primary('這是主要提示訊息', {
      position: 'bottom-right',
      title: '主要',
      duration: 3000,
    });
  };

  const clearAll = () => {
    AlertService.clear();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={showInfo}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          顯示資訊
        </button>
        <button
          onClick={showSuccess}
          className="px-4 py-2 bg-success-600 text-white rounded-md hover:bg-success-700 transition-colors"
        >
          顯示成功
        </button>
        <button
          onClick={showWarning}
          className="px-4 py-2 bg-warning-600 text-white rounded-md hover:bg-warning-700 transition-colors"
        >
          顯示警告
        </button>
        <button
          onClick={showError}
          className="px-4 py-2 bg-error-600 text-white rounded-md hover:bg-error-700 transition-colors"
        >
          顯示錯誤
        </button>
        <button
          onClick={showPrimary}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          顯示主要
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
        >
          清除全部
        </button>
      </div>
    </div>
  );
};

const AlertDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Alert 警告提示</h1>
        <p className="component-docs-description">
          EonUI 的警告提示組件，用於向用戶顯示重要的系統訊息。支援多種類型、位置和自動關閉功能。
          可以透過組件方式直接使用，也可以透過 AlertService 以編程方式調用。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Alert 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的 Alert 範例，展示各種功能組合："
          code={`const [alerts, setAlerts] = useState([
  {
    id: '1',
    type: 'info' as const,
    title: '資訊提示',
    children: '這是一個資訊提示的範例內容。',
    visible: true,
  },
  {
    id: '2',
    type: 'success' as const,
    title: '成功提示',
    children: '操作已成功完成！',
    visible: true,
  },
]);

const handleClose = (id: string) => {
  setAlerts((prev) => prev.filter((alert) => alert.id !== id));
};

// 渲染 Alert 列表
{alerts.map((alert) => (
  <Alert
    key={alert.id}
    {...alert}
    onClose={() => handleClose(alert.id)}
  />
))}`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* Alert 類型 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 Alert 類型"
          description="Alert 提供五種不同的類型樣式："
          code={`// 五種不同的 Alert 類型
<Alert type="primary" title="主要提示">
  這是主要提示樣式，用於一般資訊提示。
</Alert>
<Alert type="info" title="資訊提示">
  這是資訊提示樣式，用於中性的系統訊息。
</Alert>
<Alert type="success" title="成功提示">
  這是成功提示樣式，用於成功完成的操作。
</Alert>
<Alert type="warning" title="警告提示">
  這是警告提示樣式，用於需要用戶注意的情況。
</Alert>
<Alert type="error" title="錯誤提示">
  這是錯誤提示樣式，用於錯誤和危險的情況。
</Alert>`}
        >
          <div className="space-y-4">
            <Alert
              type="primary"
              title="主要提示"
            >
              這是主要提示樣式，用於一般資訊提示。
            </Alert>
            <Alert
              type="info"
              title="資訊提示"
            >
              這是資訊提示樣式，用於中性的系統訊息。
            </Alert>
            <Alert
              type="success"
              title="成功提示"
            >
              這是成功提示樣式，用於成功完成的操作。
            </Alert>
            <Alert
              type="warning"
              title="警告提示"
            >
              這是警告提示樣式，用於需要用戶注意的情況。
            </Alert>
            <Alert
              type="error"
              title="錯誤提示"
            >
              這是錯誤提示樣式，用於錯誤和危險的情況。
            </Alert>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>類型說明：</strong>
          <ul>
            <li>
              <strong>Primary：</strong>主要提示，用於一般資訊
            </li>
            <li>
              <strong>Info：</strong>資訊提示，用於中性系統訊息
            </li>
            <li>
              <strong>Success：</strong>成功提示，用於成功操作
            </li>
            <li>
              <strong>Warning：</strong>警告提示，用於需要注意的情況
            </li>
            <li>
              <strong>Error：</strong>錯誤提示，用於錯誤和危險情況
            </li>
          </ul>
        </div>
      </div>

      {/* 關閉功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🗑️ 關閉功能"
          description="Alert 支援手動關閉和自動關閉功能："
          code={`// 可手動關閉
<Alert
  type="info"
  title="可手動關閉"
  closable={true}
>
  點擊右上角的 × 按鈕可以關閉這個 Alert。
</Alert>

// 不可關閉
<Alert
  type="warning"
  title="不可關閉"
  closable={false}
>
  這個 Alert 沒有關閉按鈕，無法手動關閉。
</Alert>

// 自動關閉
<Alert
  type="success"
  title="自動關閉"
  duration={5000}
>
  這個 Alert 會在 5 秒後自動關閉。
</Alert>`}
        >
          <div className="space-y-4">
            <Alert
              type="info"
              title="可手動關閉"
              closable={true}
            >
              點擊右上角的 × 按鈕可以關閉這個 Alert。
            </Alert>
            <Alert
              type="warning"
              title="不可關閉"
              closable={false}
            >
              這個 Alert 沒有關閉按鈕，無法手動關閉。
            </Alert>
            <Alert
              type="success"
              title="自動關閉"
              duration={5000}
            >
              這個 Alert 會在 5 秒後自動關閉。
            </Alert>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>關閉功能說明：</strong>
          <ul>
            <li>
              <strong>closable：</strong>控制是否顯示關閉按鈕
            </li>
            <li>
              <strong>duration：</strong>自動關閉時間（毫秒），設為 0 則不自動關閉
            </li>
            <li>滑鼠移入時會暫停自動關閉計時</li>
            <li>滑鼠移出時重新開始計時</li>
          </ul>
        </div>
      </div>

      {/* 圖示功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎯 圖示功能範例"
          description="Alert 支援顯示預設圖示或自訂圖示："
          code={`// 顯示預設圖示
<Alert
  type="info"
  title="顯示預設圖示"
  showIcon={true}
>
  這個 Alert 顯示預設的資訊圖示。
</Alert>

// 不顯示圖示
<Alert
  type="warning"
  title="不顯示圖示"
  showIcon={false}
>
  這個 Alert 不顯示任何圖示。
</Alert>

// 自訂圖示
<Alert
  type="success"
  title="自訂圖示"
  showIcon={true}
  icon={
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
>
  這個 Alert 使用自訂的勾選圖示。
</Alert>`}
        >
          <div className="space-y-4">
            <Alert
              type="info"
              title="顯示預設圖示"
              showIcon={true}
            >
              這個 Alert 顯示預設的資訊圖示。
            </Alert>
            <Alert
              type="warning"
              title="不顯示圖示"
              showIcon={false}
            >
              這個 Alert 不顯示任何圖示。
            </Alert>
            <Alert
              type="success"
              title="自訂圖示"
              showIcon={true}
              icon={
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            >
              這個 Alert 使用自訂的勾選圖示。
            </Alert>
          </div>
        </CodeExample>
      </div>

      {/* AlertService 使用 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔧 AlertService 使用範例"
          description="透過 AlertService 可以編程方式調用 Alert，支援全域顯示："
          code={`// AlertService 快捷方法
const showInfo = () => {
  AlertService.info('這是一個資訊提示訊息', {
    position: 'top-right',
    duration: 3000,
  });
};

const showSuccess = () => {
  AlertService.success('操作成功完成！', {
    position: 'top-right',
    title: '成功',
    duration: 4000,
  });
};

const showWarning = () => {
  AlertService.warning('請注意這個警告訊息', {
    position: 'top-center',
    title: '警告',
    duration: 5000,
  });
};

const showError = () => {
  AlertService.error('發生了一個錯誤', {
    position: 'top-left',
    title: '錯誤',
    duration: 0, // 不自動關閉
  });
};

// 清除所有 Alert
const clearAll = () => {
  AlertService.clear();
};`}
        >
          <ServiceExample />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>AlertService 功能：</strong>
          <ul>
            <li>
              <strong>自動定位：</strong>Alert 會顯示在指定位置，支援 9 種位置
            </li>
            <li>
              <strong>自動管理：</strong>多個 Alert 會自動排列，不會重疊
            </li>
            <li>
              <strong>快捷方法：</strong>提供 info、success、warning、error、primary 等快捷方法
            </li>
            <li>
              <strong>批量操作：</strong>支援清除全部、按位置清除、按類型清除
            </li>
          </ul>
        </div>
      </div>

      {/* 位置展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="📍 位置展示範例"
          description="Alert 支援 9 種不同的顯示位置："
          code={`// Alert 支援 9 種不同的顯示位置
const positions = [
  'top-left', 'top-center', 'top-right',
  'middle-left', 'middle-center', 'middle-right',
  'bottom-left', 'bottom-center', 'bottom-right'
];

// 在指定位置顯示 Alert
positions.map((position) => (
  <button
    key={position}
    onClick={() =>
      AlertService.info(\`位置：\${position}\`, {
        position: position as AlertPosition,
        duration: 2000,
      })
    }
  >
    {position}
  </button>
));`}
        >
          <div className="grid grid-cols-3 gap-2 text-sm">
            {[
              'top-left',
              'top-center',
              'top-right',
              'middle-left',
              'middle-center',
              'middle-right',
              'bottom-left',
              'bottom-center',
              'bottom-right',
            ].map((position) => (
              <button
                key={position}
                onClick={() =>
                  AlertService.info(`位置：${position}`, {
                    position: position as AlertPosition,
                    duration: 2000,
                  })
                }
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                {position}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">點擊按鈕在對應位置顯示 Alert</p>
        </CodeExample>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">組件方式</h4>
          <pre className="component-docs-code">{`import { Alert } from 'eonui';

// 基本 Alert
<Alert type="info" title="提示">
  這是一個資訊提示
</Alert>

// 帶樣式的 Alert
<Alert
  type="success"
  title="成功"
  closable={true}
  duration={3000}
  showIcon={true}
  position="top-right"
>
  操作成功完成！
</Alert>

// 自訂圖示
<Alert
  type="warning"
  title="警告"
  icon={<CustomIcon />}
>
  自訂警告訊息
</Alert>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">Service 方式</h4>
          <pre className="component-docs-code">{`import { AlertService } from 'eonui';

// 快捷方法
AlertService.info('資訊訊息');
AlertService.success('成功訊息');
AlertService.warning('警告訊息');
AlertService.error('錯誤訊息');
AlertService.primary('主要訊息');

// 帶選項
AlertService.info('訊息內容', {
  title: '提示',
  position: 'top-right',
  duration: 3000,
  closable: true,
});

// 完整選項對象方式
AlertService.add({
  content: '自訂內容',
  type: 'success',
  title: '成功',
  position: 'bottom-center',
  duration: 0, // 不自動關閉
});

// 管理方法
const alertId = AlertService.info('訊息');
AlertService.remove(alertId); // 移除特定 Alert
AlertService.clear(); // 清除全部
AlertService.clearByType('error'); // 清除錯誤類型
AlertService.clearByPosition('top-right'); // 清除指定位置`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Alert 組件的所有功能，可以在你的項目中開始使用了！ Alert
          組件提供了靈活的提示功能，適用於各種用戶反饋場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <AlertDocs />,
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'info', 'success', 'warning', 'error'],
      description: 'Alert 的類型樣式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    position: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-center',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Alert 的顯示位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-right' },
      },
    },
    closable: {
      control: { type: 'boolean' },
      description: '是否顯示關閉按鈕',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    duration: {
      control: { type: 'number' },
      description: '自動關閉時間（毫秒），設為 0 則不自動關閉',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3000' },
      },
    },
    showIcon: {
      control: { type: 'boolean' },
      description: '是否顯示圖示',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Alert 標題',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Alert 內容',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    visible: {
      control: { type: 'boolean' },
      description: '是否可見',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      action: 'closed',
      description: '關閉時的回調函數',
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
    type: 'info',
    title: 'Alert 標題',
    children: '這是 Alert 的內容文字，可以包含任何 React 節點。',
    closable: true,
    duration: 3000,
    showIcon: true,
    visible: true,
  },
};

import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { CodeExample } from '../shared/CodeExample';

import { MessageBox } from './MessageBox';
import { MessageBoxService } from './service';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [basicAlert, setBasicAlert] = useState(false);
  const [basicConfirm, setBasicConfirm] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);

  return (
    <div className="space-y-4 w-full max-w-md">
      {/* 基本 Alert */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">基本 Alert</h4>
        <Button onClick={() => setBasicAlert(true)}>開啟 Alert</Button>
        <MessageBox
          visible={basicAlert}
          variant="alert"
          type="info"
          title="提示"
          content="這是一個基本的 Alert 範例。"
          onClose={() => setBasicAlert(false)}
        />
      </div>

      {/* 基本 Confirm */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">基本 Confirm</h4>
        <Button onClick={() => setBasicConfirm(true)}>開啟 Confirm</Button>
        <MessageBox
          visible={basicConfirm}
          variant="confirm"
          type="warning"
          title="確認操作"
          content="您確定要執行這個操作嗎？"
          onOk={() => {
            alert('用戶點擊了確定');
            setBasicConfirm(false);
          }}
          onCancel={() => {
            alert('用戶點擊了取消');
            setBasicConfirm(false);
          }}
          onClose={() => setBasicConfirm(false)}
        />
      </div>

      {/* 自訂樣式 */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">自訂圖示</h4>
        <Button onClick={() => setCustomAlert(true)}>開啟自訂 Alert</Button>
        <MessageBox
          visible={customAlert}
          variant="alert"
          type="success"
          title="操作成功"
          content="您的操作已成功完成！"
          icon={
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          }
          onClose={() => setCustomAlert(false)}
        />
      </div>
    </div>
  );
};

// Service 範例組件
const ServiceExample = () => {
  const showBasicAlert = async () => {
    await MessageBoxService.info('這是一個基本的信息提示。');
    // eslint-disable-next-line no-console
    console.log('Alert 已關閉');
  };

  const showSuccessAlert = async () => {
    await MessageBoxService.success('操作成功完成！', {
      title: '成功',
    });
    // eslint-disable-next-line no-console
    console.log('成功提示已關閉');
  };

  const showWarningAlert = async () => {
    await MessageBoxService.warning('請注意這個警告訊息。', {
      title: '警告',
      okText: '我知道了',
    });
    // eslint-disable-next-line no-console
    console.log('警告提示已關閉');
  };

  const showErrorAlert = async () => {
    await MessageBoxService.error('發生了一個錯誤，請重試。', {
      title: '錯誤',
      okText: '重試',
    });
    // eslint-disable-next-line no-console
    console.log('錯誤提示已關閉');
  };

  const showBasicConfirm = async () => {
    const result = await MessageBoxService.confirm({
      title: '確認刪除',
      content: '您確定要刪除這個項目嗎？此操作無法撤銷。',
      type: 'warning',
      okText: '刪除',
      cancelText: '取消',
    });

    if (result) {
      alert('用戶確認了刪除操作');
    } else {
      alert('用戶取消了操作');
    }
  };

  const showErrorConfirm = async () => {
    const result = await MessageBoxService.confirmError(
      '這個操作具有風險性，可能會導致數據丟失。',
      {
        title: '危險操作確認',
        okText: '我了解風險，繼續',
        cancelText: '取消',
      },
    );

    // eslint-disable-next-line no-console
    console.log('確認結果:', result);
  };

  const showCustomIconAlert = async () => {
    await MessageBoxService.alert({
      title: '自訂圖示',
      content: '這是一個使用自訂圖示的 Alert。',
      type: 'info',
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    });
  };

  const showNoIconAlert = async () => {
    await MessageBoxService.alert({
      title: '無圖示提示',
      content: '這是一個不顯示圖示的 Alert。',
      type: 'info',
      showIcon: false,
    });
  };

  const showAsyncConfirm = async () => {
    try {
      const result = await MessageBoxService.confirm({
        title: '異步操作確認',
        content: '點擊確定將執行一個異步操作（模擬 2 秒延遲）。',
        type: 'info',
        onOk: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              alert('異步操作完成！');
              resolve();
            }, 2000);
          });
        },
      });

      // eslint-disable-next-line no-console
      console.log('異步確認結果:', result);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('異步操作出錯:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showBasicAlert}>基本 Alert</Button>
        <Button onClick={showSuccessAlert}>成功 Alert</Button>
        <Button onClick={showWarningAlert}>警告 Alert</Button>
        <Button onClick={showErrorAlert}>錯誤 Alert</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showBasicConfirm}>基本 Confirm</Button>
        <Button onClick={showErrorConfirm}>危險 Confirm</Button>
        <Button onClick={showAsyncConfirm}>異步 Confirm</Button>
        <Button onClick={showCustomIconAlert}>自訂圖示</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showNoIconAlert}>無圖示 Alert</Button>
        <Button
          variant="outline"
          onClick={() => MessageBoxService.closeAll()}
        >
          關閉所有
        </Button>
      </div>
    </div>
  );
};

const MessageBoxDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">MessageBox 訊息對話框</h1>
        <p className="component-docs-description">
          EonUI 的訊息對話框組件，支援 Alert 和 Confirm 兩種變體。提供 Promise 回調機制，
          支援標題、內容、圖示自訂，並可選擇是否顯示圖示。主要透過 Service API 進行使用。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 MessageBox 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的 MessageBox 範例，展示各種功能組合："
          code={`// MessageBox 基本使用範例
const [visible, setVisible] = useState(false);
const [type, setType] = useState('info');

// 顯示 MessageBox
<MessageBox
  visible={visible}
  type={type}
  title="訊息標題"
  onClose={() => setVisible(false)}
  onConfirm={() => {
    console.log('用戶確認');
    setVisible(false);
  }}
>
  這是 MessageBox 的內容文字。
</MessageBox>

// 或使用 MessageBoxService 調用
MessageBoxService.alert({
  type: 'info',
  title: '提示',
  content: '這是一個資訊提示',
});`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 對話框類型 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 對話框類型範例"
          description="MessageBox 提供四種不同的消息類型："
          code={`// 不同類型的對話框
// Info 類型
MessageBoxService.alert({
  type: 'info',
  title: 'Info 提示',
  content: '這是 info 類型的訊息提示。',
});

// Success 類型
MessageBoxService.alert({
  type: 'success',
  title: 'Success 提示',
  content: '這是 success 類型的訊息提示。',
});

// Warning 類型
MessageBoxService.alert({
  type: 'warning',
  title: 'Warning 提示',
  content: '這是 warning 類型的訊息提示。',
});

// Error 類型
MessageBoxService.alert({
  type: 'error',
  title: 'Error 提示',
  content: '這是 error 類型的訊息提示。',
});`}
        >
          <div className="grid grid-cols-2 gap-4">
            {(['info', 'success', 'warning', 'error'] as const).map((type) => (
              <Button
                key={type}
                onClick={() =>
                  MessageBoxService.alert({
                    type,
                    title: `${type.charAt(0).toUpperCase() + type.slice(1)} 提示`,
                    content: `這是 ${type} 類型的訊息提示。`,
                  })
                }
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Alert
              </Button>
            ))}
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>類型說明：</strong>
          <ul>
            <li>
              <strong>Info：</strong>藍色圖示，用於一般資訊提示
            </li>
            <li>
              <strong>Success：</strong>綠色圖示，用於成功操作提示
            </li>
            <li>
              <strong>Warning：</strong>黃色圖示，用於警告和需要注意的情況
            </li>
            <li>
              <strong>Error：</strong>紅色圖示，用於錯誤和危險情況
            </li>
          </ul>
        </div>
      </div>

      {/* MessageBoxService 使用 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 MessageBoxService 使用範例"
          description="透過 MessageBoxService 可以程式化控制 MessageBox，支援 Promise 回調："
          code={`// 使用 MessageBoxService 進行程式化控制
const ServiceExample = () => {
  const handleConfirm = async () => {
    try {
      const result = await MessageBoxService.confirm({
        title: '確認操作',
        content: '您確定要執行這個操作嗎？',
        type: 'warning',
      });

      if (result) {
        // 用戶點擊了確認
        MessageBoxService.alert({
          type: 'success',
          title: '操作成功',
          content: '您已成功執行操作！',
        });
      }
    } catch (error) {
      // 用戶點擊了取消
      console.log('用戶取消了操作');
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleConfirm}>
        確認對話框範例
      </Button>
    </div>
  );
};`}
        >
          <ServiceExample />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>MessageBoxService 功能：</strong>
          <ul>
            <li>
              <strong>Promise 回調：</strong>所有方法都返回 Promise，方便處理用戶操作結果
            </li>
            <li>
              <strong>單例模式：</strong>同時只會顯示一個 MessageBox，確保用戶專注
            </li>
            <li>
              <strong>快捷方法：</strong>提供 info、success、warning、error 等快捷方法
            </li>
            <li>
              <strong>異步支援：</strong>支援在 onOk 回調中執行異步操作
            </li>
          </ul>
        </div>
      </div>

      {/* 變體展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 變體展示範例"
          description="MessageBox 支援 Alert 和 Confirm 兩種變體："
          code={`// Alert 變體 - 只有確認按鈕
MessageBoxService.alert({
  title: 'Alert 變體',
  content: '這是 Alert 變體，只有一個確認按鈕。',
  type: 'info',
});

// Confirm 變體 - 有確認和取消按鈕
MessageBoxService.confirm({
  title: 'Confirm 變體',
  content: '這是 Confirm 變體，有確認和取消按鈕。',
  type: 'warning',
}).then((result) => {
  if (result) {
    console.log('用戶確認了操作');
  } else {
    console.log('用戶取消了操作');
  }
});`}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Alert 變體</h4>
              <Button
                onClick={() =>
                  MessageBoxService.alert({
                    title: 'Alert 變體',
                    content: '這是 Alert 變體，只有一個確認按鈕。',
                    type: 'info',
                  })
                }
              >
                顯示 Alert
              </Button>
              <p className="text-sm text-gray-500 mt-1">只有確認按鈕，支援右上角關閉按鈕</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Confirm 變體</h4>
              <Button
                onClick={() =>
                  MessageBoxService.confirm({
                    title: 'Confirm 變體',
                    content: '這是 Confirm 變體，有確認和取消按鈕。',
                    type: 'warning',
                  })
                }
              >
                顯示 Confirm
              </Button>
              <p className="text-sm text-gray-500 mt-1">有確認和取消按鈕，不顯示右上角關閉按鈕</p>
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 圖示功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 圖示功能範例"
          description="MessageBox 支援顯示預設圖示或自訂圖示："
          code={`// 預設圖示
MessageBoxService.alert({
  title: '預設圖示',
  content: '這個 MessageBox 使用預設的成功圖示。',
  type: 'success',
  showIcon: true,
});

// 自訂圖示
MessageBoxService.alert({
  title: '自訂圖示',
  content: '這個 MessageBox 使用自訂圖示。',
  type: 'info',
  icon: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
    </svg>
  ),
});

// 無圖示
MessageBoxService.alert({
  title: '無圖示',
  content: '這個 MessageBox 不顯示圖示。',
  type: 'info',
  showIcon: false,
});

// 無標題有圖示
MessageBoxService.alert({
  content: '這個 MessageBox 沒有標題，圖示會與內容一起顯示。',
  type: 'warning',
  showIcon: true,
});`}
        >
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() =>
                MessageBoxService.alert({
                  title: '預設圖示',
                  content: '這個 MessageBox 使用預設的成功圖示。',
                  type: 'success',
                  showIcon: true,
                })
              }
            >
              預設圖示
            </Button>
            <Button
              onClick={() =>
                MessageBoxService.alert({
                  title: '自訂圖示',
                  content: '這個 MessageBox 使用自訂圖示。',
                  type: 'info',
                  icon: (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  ),
                })
              }
            >
              自訂圖示
            </Button>
            <Button
              onClick={() =>
                MessageBoxService.alert({
                  title: '無圖示',
                  content: '這個 MessageBox 不顯示圖示。',
                  type: 'info',
                  showIcon: false,
                })
              }
            >
              無圖示
            </Button>
            <Button
              onClick={() =>
                MessageBoxService.alert({
                  content: '這個 MessageBox 沒有標題，圖示會與內容一起顯示。',
                  type: 'warning',
                  showIcon: true,
                })
              }
            >
              無標題有圖示
            </Button>
          </div>
        </CodeExample>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">Service 方式（推薦）</h4>
          <pre className="component-docs-code">{`import { MessageBoxService } from 'eonui';

// 基本 Alert
await MessageBoxService.info('這是一個信息提示');

// 帶標題的 Alert
await MessageBoxService.success('操作成功！', {
  title: '成功',
  okText: '知道了'
});

// 基本 Confirm
const result = await MessageBoxService.confirm({
  title: '確認刪除',
  content: '您確定要刪除這個項目嗎？',
  type: 'warning',
  okText: '刪除',
  cancelText: '取消'
});

if (result) {
  // 用戶確認了操作
} else {
  // 用戶取消了操作
}

// 異步操作
const asyncResult = await MessageBoxService.confirm({
  title: '提交數據',
  content: '點擊確定將提交數據到服務器',
  onOk: async () => {
    // 執行異步操作
    await submitDataToServer();
  }
});

// 自訂圖示
await MessageBoxService.alert({
  title: '自訂提示',
  content: '這是自訂圖示的提示',
  type: 'info',
  icon: <CustomIcon />
});

// 無圖示
await MessageBoxService.warning('警告訊息', {
  showIcon: false
});`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">組件方式</h4>
          <pre className="component-docs-code">{`import { MessageBox } from 'eonui';

// 基本 Alert
<MessageBox
  visible={alertVisible}
  variant="alert"
  type="info"
  title="提示"
  content="這是提示內容"
  onClose={() => setAlertVisible(false)}
/>

// Confirm 對話框
<MessageBox
  visible={confirmVisible}
  variant="confirm"
  type="warning"
  title="確認操作"
  content="您確定要執行這個操作嗎？"
  onOk={() => {
    // 用戶確認
    setConfirmVisible(false);
  }}
  onCancel={() => {
    // 用戶取消
    setConfirmVisible(false);
  }}
  onClose={() => setConfirmVisible(false)}
/>

// 自訂圖示
<MessageBox
  visible={customVisible}
  variant="alert"
  type="success"
  title="成功"
  content="操作完成"
  icon={<CheckIcon />}
  onClose={() => setCustomVisible(false)}
/>

// 無圖示
<MessageBox
  visible={noIconVisible}
  variant="alert"
  type="info"
  title="純文字提示"
  content="這是不顯示圖示的提示"
  showIcon={false}
  onClose={() => setNoIconVisible(false)}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 MessageBox 組件的所有功能，可以在你的項目中開始使用了！ MessageBox
          組件提供了簡潔的對話框解決方案，適用於各種用戶確認和提示場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof MessageBox> = {
  title: 'Feedback/MessageBox',
  component: MessageBox,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <MessageBoxDocs />,
    },
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: '是否顯示 MessageBox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['alert', 'confirm'],
      description: 'MessageBox 變體',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'alert' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: '消息類型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: { type: 'text' },
      description: '標題',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    content: {
      control: { type: 'text' },
      description: '內容',
      table: {
        type: { summary: 'ReactNode' },
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
    closable: {
      control: { type: 'boolean' },
      description: '是否顯示關閉按鈕',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    okText: {
      control: { type: 'text' },
      description: '確認按鈕文字',
      table: {
        type: { summary: 'string' },
      },
    },
    cancelText: {
      control: { type: 'text' },
      description: '取消按鈕文字',
      table: {
        type: { summary: 'string' },
      },
    },
    onClose: {
      action: 'closed',
      description: '關閉時的回調',
      table: {
        type: { summary: '() => void' },
      },
    },
    onOk: {
      action: 'confirmed',
      description: '確認時的回調',
      table: {
        type: { summary: '() => void | Promise<void>' },
      },
    },
    onCancel: {
      action: 'cancelled',
      description: '取消時的回調',
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
    visible: false,
    variant: 'alert',
    type: 'info',
    title: 'MessageBox 標題',
    content: '這是 MessageBox 的內容文字，可以包含任何 React 節點。',
    showIcon: true,
    closable: true,
  },
  render: function DocsStory(args) {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button onClick={() => setVisible(true)}>開啟 MessageBox</Button>
        <MessageBox
          {...args}
          visible={visible}
          onClose={() => setVisible(false)}
          onOk={() => {
            // eslint-disable-next-line no-console
            console.log('確認');
            setVisible(false);
          }}
          onCancel={() => {
            // eslint-disable-next-line no-console
            console.log('取消');
            setVisible(false);
          }}
        />
      </>
    );
  },
};

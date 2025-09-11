import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';

import { Modal } from './Modal';
import { ModalService } from './service';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [noMaskModal, setNoMaskModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = () => {
    alert(`表單提交: ${JSON.stringify(formData, null, 2)}`);
    setFormModal(false);
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      {/* 基本 Modal */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">基本 Modal</h4>
        <Button onClick={() => setBasicModal(true)}>開啟基本 Modal</Button>
        <Modal
          visible={basicModal}
          onClose={() => setBasicModal(false)}
          title="基本 Modal"
          footer={
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setBasicModal(false)}
              >
                取消
              </Button>
              <Button onClick={() => setBasicModal(false)}>確定</Button>
            </div>
          }
        >
          <p>這是一個基本的 Modal 範例，包含標題、內容和頁腳。</p>
        </Modal>
      </div>

      {/* 大尺寸 Modal */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">大尺寸 Modal</h4>
        <Button onClick={() => setSizeModal(true)}>開啟大尺寸 Modal</Button>
        <Modal
          visible={sizeModal}
          onClose={() => setSizeModal(false)}
          title="大尺寸 Modal"
          size="lg"
        >
          <div className="space-y-4">
            <p>這是一個大尺寸的 Modal，適合顯示更多內容。</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </Modal>
      </div>

      {/* 表單 Modal */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">表單 Modal</h4>
        <Button onClick={() => setFormModal(true)}>開啟表單 Modal</Button>
        <Modal
          visible={formModal}
          onClose={() => setFormModal(false)}
          title="聯絡表單"
          footer={
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setFormModal(false)}
              >
                取消
              </Button>
              <Button onClick={handleFormSubmit}>提交</Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="請輸入您的姓名"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">電子郵件</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="請輸入您的電子郵件"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">訊息</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="請輸入您的訊息"
                rows={4}
              />
            </div>
          </div>
        </Modal>
      </div>

      {/* 不可點擊遮罩關閉 */}
      <div>
        <h4 className="font-medium mb-2 text-gray-700">不可點擊遮罩關閉</h4>
        <Button onClick={() => setNoMaskModal(true)}>開啟 Modal</Button>
        <Modal
          visible={noMaskModal}
          onClose={() => setNoMaskModal(false)}
          title="重要提示"
          maskClosable={false}
          footer={
            <div className="flex justify-end">
              <Button onClick={() => setNoMaskModal(false)}>我知道了</Button>
            </div>
          }
        >
          <p>這個 Modal 無法透過點擊遮罩關閉，必須點擊按鈕才能關閉。</p>
        </Modal>
      </div>
    </div>
  );
};

// Service 範例組件
const ServiceExample = () => {
  const showBasicModal = () => {
    ModalService.open({
      title: 'Service Modal',
      children: (
        <div>
          <p>這是透過 ModalService 開啟的 Modal。</p>
          <p>當使用 Service 方式時，Modal 會動態建立 DOM 元素。</p>
        </div>
      ),
      footer: (
        <div className="flex justify-end space-x-3">
          <Button
            variant="outline"
            onClick={() => ModalService.closeAll()}
          >
            關閉所有
          </Button>
          <Button onClick={() => ModalService.closeAll()}>確定</Button>
        </div>
      ),
    });
  };

  const showConfirmModal = async () => {
    const _result = await ModalService.confirm({
      title: '確認刪除',
      content: '您確定要刪除這個項目嗎？此操作無法撤銷。',
      okText: '刪除',
      cancelText: '取消',
      onOk: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert('項目已刪除');
            resolve();
          }, 1000);
        });
      },
    });

    // console.log('確認結果:', result);
  };

  const showAlertModal = async () => {
    await ModalService.alert({
      title: '操作完成',
      content: '您的操作已成功完成！',
      okText: '知道了',
    });

    // console.log('警告對話框已關閉');
  };

  const showMultipleModals = () => {
    // 開啟多個 Modal
    const modal1 = ModalService.open({
      title: 'Modal 1',
      children: <p>第一個 Modal</p>,
      size: 'sm',
    });

    setTimeout(() => {
      const _modal2 = ModalService.open({
        title: 'Modal 2',
        children: <p>第二個 Modal，會覆蓋在第一個之上</p>,
        size: 'md',
      });

      setTimeout(() => {
        ModalService.close(modal1); // 關閉第一個 Modal
      }, 2000);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showBasicModal}>開啟 Service Modal</Button>
        <Button onClick={showConfirmModal}>確認對話框</Button>
        <Button onClick={showAlertModal}>警告對話框</Button>
        <Button onClick={showMultipleModals}>多個 Modal</Button>
      </div>
      <div className="mt-4">
        <Button
          variant="outline"
          onClick={() => ModalService.closeAll()}
        >
          關閉所有 Modal
        </Button>
      </div>
    </div>
  );
};

const ModalDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Modal 對話框</h1>
        <p className="component-docs-description">
          EonUI 的對話框組件，支援多種大小、自訂內容和程式化控制。提供滑入動畫效果，
          可用於顯示重要資訊、表單或確認操作。支援組件方式和 Service 方式兩種使用模式。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Modal 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的 Modal 範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* Modal 大小 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 Modal 大小</h2>
        <p className="component-docs-section-description">Modal 提供五種不同的大小選項：</p>

        <div className="component-docs-showcase">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
              <Button
                key={size}
                onClick={() =>
                  ModalService.open({
                    title: `${size.toUpperCase()} Modal`,
                    size,
                    children: (
                      <div>
                        <p>這是 {size} 大小的 Modal。</p>
                        <p>內容會根據設定的大小自動調整寬度。</p>
                      </div>
                    ),
                  })
                }
              >
                {size.toUpperCase()} Modal
              </Button>
            ))}
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>大小說明：</strong>
          <ul>
            <li>
              <strong>sm：</strong>400px 寬度，適用於簡單的確認對話框
            </li>
            <li>
              <strong>md：</strong>600px 寬度，標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>800px 寬度，適用於複雜的表單或內容
            </li>
            <li>
              <strong>xl：</strong>1000px 寬度，適用於大量內容顯示
            </li>
            <li>
              <strong>full：</strong>95vw x 95vh，接近全螢幕顯示
            </li>
          </ul>
        </div>
      </div>

      {/* ModalService 使用 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔧 ModalService 使用</h2>
        <p className="component-docs-section-description">
          透過 ModalService 可以程式化控制 Modal，支援動態建立和管理：
        </p>

        <div className="component-docs-showcase">
          <ServiceExample />
        </div>

        <div className="component-docs-info-card">
          <strong>ModalService 功能：</strong>
          <ul>
            <li>
              <strong>動態建立：</strong>使用時才建立 DOM，不佔用額外記憶體
            </li>
            <li>
              <strong>自動管理：</strong>多個 Modal 會自動層疊顯示
            </li>
            <li>
              <strong>便捷方法：</strong>提供 confirm、alert 等快捷對話框
            </li>
            <li>
              <strong>批量操作：</strong>支援關閉所有、更新指定 Modal
            </li>
          </ul>
        </div>
      </div>

      {/* 動畫效果 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">✨ 動畫效果</h2>
        <p className="component-docs-section-description">
          Modal 支援滑入動畫效果，提供流暢的使用體驗：
        </p>

        <div className="component-docs-showcase">
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() =>
                ModalService.open({
                  title: '預設動畫',
                  children: <p>使用預設的滑入動畫效果（300ms）</p>,
                  animationDuration: 300,
                })
              }
            >
              預設動畫
            </Button>
            <Button
              onClick={() =>
                ModalService.open({
                  title: '慢速動畫',
                  children: <p>使用較慢的動畫效果（600ms）</p>,
                  animationDuration: 600,
                })
              }
            >
              慢速動畫
            </Button>
            <Button
              onClick={() =>
                ModalService.open({
                  title: '無動畫',
                  children: <p>關閉動畫效果，立即顯示</p>,
                  disableAnimation: true,
                })
              }
            >
              無動畫
            </Button>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>動畫特色：</strong>
          <ul>
            <li>
              <strong>滑入效果：</strong>Modal 從上方滑入，同時淡入顯示
            </li>
            <li>
              <strong>可自訂：</strong>支援調整動畫持續時間
            </li>
            <li>
              <strong>可關閉：</strong>可完全禁用動畫效果
            </li>
            <li>
              <strong>流暢體驗：</strong>遮罩和內容同步動畫
            </li>
          </ul>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">組件方式</h4>
          <pre className="component-docs-code">{`import { Modal, Button } from 'eonui';

// 基本 Modal
const [visible, setVisible] = useState(false);

<Button onClick={() => setVisible(true)}>
  開啟 Modal
</Button>

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="對話框標題"
  footer={
    <div className="flex justify-end space-x-3">
      <Button variant="outline" onClick={() => setVisible(false)}>
        取消
      </Button>
      <Button onClick={() => setVisible(false)}>
        確定
      </Button>
    </div>
  }
>
  <p>這是 Modal 的內容</p>
</Modal>

// 表單 Modal
<Modal
  visible={formVisible}
  onClose={() => setFormVisible(false)}
  title="編輯資料"
  size="lg"
  maskClosable={false}
>
  <form>
    <input type="text" placeholder="姓名" />
    <textarea placeholder="備註"></textarea>
  </form>
</Modal>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">Service 方式</h4>
          <pre className="component-docs-code">{`import { ModalService } from 'eonui';

// 基本使用
const modalId = ModalService.open({
  title: '提示',
  children: <p>這是內容</p>,
  footer: <Button onClick={() => ModalService.close(modalId)}>關閉</Button>
});

// 確認對話框
const result = await ModalService.confirm({
  title: '確認刪除',
  content: '您確定要刪除這個項目嗎？',
  onOk: async () => {
    await deleteItem();
  }
});

if (result) {
  console.log('用戶確認了操作');
}

// 警告對話框
await ModalService.alert({
  title: '操作完成',
  content: '您的操作已成功完成！'
});

// 自訂 Modal
ModalService.open({
  title: '自訂對話框',
  size: 'lg',
  maskClosable: false,
  children: (
    <div>
      <h3>複雜內容</h3>
      <form>
        {/* 表單內容 */}
      </form>
    </div>
  ),
  footer: (
    <div className="flex justify-between">
      <Button variant="outline">重置</Button>
      <div className="space-x-3">
        <Button variant="outline">取消</Button>
        <Button>保存</Button>
      </div>
    </div>
  )
});

// 管理 Modal
ModalService.closeAll(); // 關閉所有
ModalService.update(modalId, { title: '新標題' }); // 更新內容`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Modal 組件的所有功能，可以在你的項目中開始使用了！ Modal
          組件提供了靈活的對話框解決方案，適用於各種互動場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <ModalDocs />,
    },
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: '是否顯示 Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultVisible: {
      control: { type: 'boolean' },
      description: '預設是否顯示 Modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maskClosable: {
      control: { type: 'boolean' },
      description: '點擊遮罩是否關閉 Modal',
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
    title: {
      control: { type: 'text' },
      description: 'Modal 標題',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Modal 寬度（如：400px, 50%）',
      table: {
        type: { summary: 'string | number' },
      },
    },
    height: {
      control: { type: 'text' },
      description: 'Modal 高度（如：300px, 50vh）',
      table: {
        type: { summary: 'string | number' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal 大小預設值',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    footer: {
      control: { type: 'text' },
      description: '頁腳內容',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Modal 自訂 CSS 類名',
      table: {
        type: { summary: 'string' },
      },
    },
    animationDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '動畫持續時間（毫秒）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    disableAnimation: {
      control: { type: 'boolean' },
      description: '是否禁用動畫',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Modal 內容',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    id: {
      control: { type: 'text' },
      description: '唯一識別碼（用於 Service）',
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
    onOpen: {
      action: 'opened',
      description: '開啟時的回調',
      table: {
        type: { summary: '() => void' },
      },
    },
    onAnimationEnd: {
      action: 'animationEnd',
      description: '動畫結束後的回調',
      table: {
        type: { summary: "(phase: 'enter' | 'exit') => void" },
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
    defaultVisible: false,
    title: 'Modal 標題',
    children: '這是 Modal 的內容文字，可以包含任何 React 節點。',
    maskClosable: true,
    closable: true,
    size: 'md',
    width: undefined,
    height: undefined,
    footer: undefined,
    className: '',
    animationDuration: 300,
    disableAnimation: false,
    id: undefined,
  },
  render: function DocsStory(args) {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button onClick={() => setVisible(true)}>開啟 Modal</Button>
        <Modal
          {...args}
          visible={visible}
          onClose={() => setVisible(false)}
          footer={
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setVisible(false)}
              >
                取消
              </Button>
              <Button onClick={() => setVisible(false)}>確定</Button>
            </div>
          }
        />
      </>
    );
  },
};

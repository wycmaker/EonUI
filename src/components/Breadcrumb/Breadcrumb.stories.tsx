import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Breadcrumb } from './Breadcrumb';
import type { BreadcrumbItem } from './Breadcrumb';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [currentPath, setCurrentPath] = useState('/products/electronics/smartphones/iphone');

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      label: '首頁',
      href: '/',
      onClick: (item, event) => {
        event.preventDefault();
        setCurrentPath('/');
        // eslint-disable-next-line no-console
        console.log('導航至:', item.label);
      },
    },
    {
      label: '產品',
      href: '/products',
      onClick: (item, event) => {
        event.preventDefault();
        setCurrentPath('/products');
        // eslint-disable-next-line no-console
        console.log('導航至:', item.label);
      },
    },
    {
      label: '電子產品',
      href: '/products/electronics',
      onClick: (item, event) => {
        event.preventDefault();
        setCurrentPath('/products/electronics');
        // eslint-disable-next-line no-console
        console.log('導航至:', item.label);
      },
    },
    {
      label: '智慧手機',
      href: '/products/electronics/smartphones',
      onClick: (item, event) => {
        event.preventDefault();
        setCurrentPath('/products/electronics/smartphones');
        // eslint-disable-next-line no-console
        console.log('導航至:', item.label);
      },
    },
    {
      label: 'iPhone',
      active: true,
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <div>
        <p className="text-sm text-gray-600 mb-2">當前路徑: {currentPath}</p>
        <Breadcrumb
          items={breadcrumbItems}
          onItemClick={(item, index, _event) => {
            // eslint-disable-next-line no-console
            console.log('項目點擊:', { item, index });
          }}
        />
      </div>
    </div>
  );
};

const BreadcrumbDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Breadcrumb 麵包屑導航</h1>
        <p className="component-docs-description">
          EonUI 的麵包屑導航組件，用於顯示當前頁面在網站層級結構中的位置。
          支援自訂文字、樣式、路由跳轉和點擊事件處理，提供清晰的導航體驗。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Breadcrumb 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的麵包屑導航範例，展示路由跳轉功能："
          code={`const [currentPath, setCurrentPath] = useState('/products/electronics/smartphones/iphone');

const breadcrumbItems: BreadcrumbItem[] = [
  {
    label: '首頁',
    href: '/',
    onClick: (item, event) => {
      event.preventDefault();
      setCurrentPath('/');
      console.log('導航至:', item.label);
    },
  },
  {
    label: '產品',
    href: '/products',
    onClick: (item, event) => {
      event.preventDefault();
      setCurrentPath('/products');
      console.log('導航至:', item.label);
    },
  },
  {
    label: '電子產品',
    href: '/products/electronics',
    onClick: (item, event) => {
      event.preventDefault();
      setCurrentPath('/products/electronics');
      console.log('導航至:', item.label);
    },
  },
  {
    label: '智慧手機',
    href: '/products/electronics/smartphones',
    onClick: (item, event) => {
      event.preventDefault();
      setCurrentPath('/products/electronics/smartphones');
      console.log('導航至:', item.label);
    },
  },
  {
    label: 'iPhone',
    active: true,
  },
];

return (
  <div>
    <p className="text-sm text-gray-600 mb-2">當前路徑: {currentPath}</p>
    <Breadcrumb
      items={breadcrumbItems}
      onItemClick={(item, index, event) => {
        console.log('項目點擊:', { item, index });
      }}
    />
  </div>
);`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <CodeExample
          title="📋 基本用法"
          description="最簡單的麵包屑導航使用方式："
          code={`// 基本的麵包屑導航
const basicItems = [
  { label: '首頁', href: '/' },
  { label: '用戶', href: '/users' },
  { label: '個人資料', active: true },
];

<Breadcrumb items={basicItems} />`}
        >
          <Breadcrumb
            items={[
              { label: '首頁', href: '/' },
              { label: '用戶', href: '/users' },
              { label: '個人資料', active: true },
            ]}
          />
        </CodeExample>
      </div>

      {/* 不同大小 */}
      <div className="component-docs-section">
        <CodeExample
          title="📏 不同大小"
          description="Breadcrumb 支援三種不同的大小："
          code={`// 小尺寸
<Breadcrumb
  size="sm"
  items={[
    { label: '首頁', href: '/' },
    { label: '產品', href: '/products' },
    { label: '詳情', active: true },
  ]}
/>

// 中等尺寸（預設）
<Breadcrumb
  size="md"
  items={[
    { label: '首頁', href: '/' },
    { label: '產品', href: '/products' },
    { label: '詳情', active: true },
  ]}
/>

// 大尺寸
<Breadcrumb
  size="lg"
  items={[
    { label: '首頁', href: '/' },
    { label: '產品', href: '/products' },
    { label: '詳情', active: true },
  ]}
/>`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">小尺寸 (sm)</h4>
              <Breadcrumb
                size="sm"
                items={[
                  { label: '首頁', href: '/' },
                  { label: '產品', href: '/products' },
                  { label: '詳情', active: true },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">中等尺寸 (md)</h4>
              <Breadcrumb
                size="md"
                items={[
                  { label: '首頁', href: '/' },
                  { label: '產品', href: '/products' },
                  { label: '詳情', active: true },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">大尺寸 (lg)</h4>
              <Breadcrumb
                size="lg"
                items={[
                  { label: '首頁', href: '/' },
                  { label: '產品', href: '/products' },
                  { label: '詳情', active: true },
                ]}
              />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 分隔符類型 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔗 分隔符類型"
          description="可以選擇箭頭或斜線兩種分隔符類型："
          code={`// 使用箭頭分隔符（預設）
<Breadcrumb
  separatorType="arrow"
  items={[
    { label: '首頁', href: '/' },
    { label: '文檔', href: '/docs' },
    { label: 'API', active: true },
  ]}
/>

// 使用斜線分隔符
<Breadcrumb
  separatorType="slash"
  items={[
    { label: '首頁', href: '/' },
    { label: '設定', href: '/settings' },
    { label: '帳戶', active: true },
  ]}
/>

// 使用自訂分隔符（會覆蓋 separatorType）
<Breadcrumb
  separator={<span className="text-blue-500">•</span>}
  items={[
    { label: '首頁', href: '/' },
    { label: '關於', href: '/about' },
    { label: '團隊', active: true },
  ]}
/>`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">箭頭分隔符（預設）</h4>
              <Breadcrumb
                separatorType="arrow"
                items={[
                  { label: '首頁', href: '/' },
                  { label: '文檔', href: '/docs' },
                  { label: 'API', active: true },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">斜線分隔符</h4>
              <Breadcrumb
                separatorType="slash"
                items={[
                  { label: '首頁', href: '/' },
                  { label: '設定', href: '/settings' },
                  { label: '帳戶', active: true },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">自訂分隔符</h4>
              <Breadcrumb
                separator={<span className="text-blue-500">•</span>}
                items={[
                  { label: '首頁', href: '/' },
                  { label: '關於', href: '/about' },
                  { label: '團隊', active: true },
                ]}
              />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 項目省略 */}
      <div className="component-docs-section">
        <CodeExample
          title="📦 項目省略"
          description="當路徑層級過多時，可以設定最大顯示項目數量："
          code={`// 限制最多顯示 4 個項目
const longPath = [
  { label: '首頁', href: '/' },
  { label: '電商', href: '/ecommerce' },
  { label: '分類', href: '/ecommerce/categories' },
  { label: '電子產品', href: '/ecommerce/categories/electronics' },
  { label: '手機', href: '/ecommerce/categories/electronics/phones' },
  { label: 'iPhone', href: '/ecommerce/categories/electronics/phones/iphone' },
  { label: 'iPhone 15', active: true },
];

<Breadcrumb items={longPath} maxItems={4} />`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">完整路徑</h4>
              <Breadcrumb
                items={[
                  { label: '首頁', href: '/' },
                  { label: '電商', href: '/ecommerce' },
                  { label: '分類', href: '/ecommerce/categories' },
                  { label: '電子產品', href: '/ecommerce/categories/electronics' },
                  { label: '手機', href: '/ecommerce/categories/electronics/phones' },
                  { label: 'iPhone', href: '/ecommerce/categories/electronics/phones/iphone' },
                  { label: 'iPhone 15', active: true },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">限制 4 個項目</h4>
              <Breadcrumb
                items={[
                  { label: '首頁', href: '/' },
                  { label: '電商', href: '/ecommerce' },
                  { label: '分類', href: '/ecommerce/categories' },
                  { label: '電子產品', href: '/ecommerce/categories/electronics' },
                  { label: '手機', href: '/ecommerce/categories/electronics/phones' },
                  { label: 'iPhone', href: '/ecommerce/categories/electronics/phones/iphone' },
                  { label: 'iPhone 15', active: true },
                ]}
                maxItems={4}
              />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 禁用項目 */}
      <div className="component-docs-section">
        <CodeExample
          title="🚫 禁用項目"
          description="可以禁用特定的麵包屑項目："
          code={`// 禁用中間的項目
const itemsWithDisabled = [
  { label: '首頁', href: '/' },
  { label: '私人區域', disabled: true },
  { label: '設定', href: '/settings' },
  { label: '個人資料', active: true },
];

<Breadcrumb items={itemsWithDisabled} />`}
        >
          <Breadcrumb
            items={[
              { label: '首頁', href: '/' },
              { label: '私人區域', disabled: true },
              { label: '設定', href: '/settings' },
              { label: '個人資料', active: true },
            ]}
          />
        </CodeExample>
      </div>

      {/* 自訂樣式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 自訂樣式"
          description="可以為每個項目設定自訂樣式："
          code={`// 為項目添加自訂樣式
const styledItems = [
  { 
    label: '首頁', 
    href: '/', 
    className: 'text-green-600 hover:text-green-800' 
  },
  { 
    label: '重要區域', 
    href: '/important',
    className: 'text-red-600 font-bold hover:text-red-800'
  },
  { 
    label: '當前頁面', 
    active: true,
    className: 'text-purple-600 font-semibold'
  },
];

<Breadcrumb items={styledItems} />`}
        >
          <Breadcrumb
            items={[
              {
                label: '首頁',
                href: '/',
                className: 'text-green-600 hover:text-green-800',
              },
              {
                label: '重要區域',
                href: '/important',
                className: 'text-red-600 font-bold hover:text-red-800',
              },
              {
                label: '當前頁面',
                active: true,
                className: 'text-purple-600 font-semibold',
              },
            ]}
          />
        </CodeExample>
      </div>

      {/* 事件處理 */}
      <div className="component-docs-section">
        <CodeExample
          title="⚡ 事件處理"
          description="處理麵包屑項目的點擊事件："
          code={`// 項目點擊事件處理
const handleItemClick = (item: BreadcrumbItem, index: number, event: React.MouseEvent) => {
  console.log('點擊項目:', { item, index });
  // 可以在這裡處理路由跳轉、狀態更新等邏輯
};

const handleIndividualClick = (item: BreadcrumbItem, event: React.MouseEvent) => {
  event.preventDefault();
  alert(\`點擊了: \${item.label}\`);
};

const interactiveItems = [
  {
    label: '首頁',
    href: '/',
    onClick: handleIndividualClick,
  },
  {
    label: '產品',
    href: '/products',
    onClick: handleIndividualClick,
  },
  {
    label: '詳情',
    active: true,
  },
];

<Breadcrumb 
  items={interactiveItems} 
  onItemClick={handleItemClick}
/>`}
        >
          <Breadcrumb
            items={[
              {
                label: '首頁',
                href: '/',
                onClick: (item, event) => {
                  event.preventDefault();
                  alert(`點擊了: ${item.label}`);
                },
              },
              {
                label: '產品',
                href: '/products',
                onClick: (item, event) => {
                  event.preventDefault();
                  alert(`點擊了: ${item.label}`);
                },
              },
              {
                label: '詳情',
                active: true,
              },
            ]}
            onItemClick={(item, index) => {
              // eslint-disable-next-line no-console
              console.log('項目點擊:', { item, index });
            }}
          />
        </CodeExample>
      </div>

      {/* 無障礙性 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">♿ 無障礙性功能</h2>
        <p className="component-docs-section-description">
          Breadcrumb 組件遵循 WCAG 2.1 AA 標準，提供完整的無障礙性支援：
        </p>

        <div className="component-docs-info-card">
          <strong>無障礙性特色：</strong>
          <ul>
            <li>
              <strong>語義化結構：</strong>使用 `nav` 和 `ol` 元素，提供正確的語義結構
            </li>
            <li>
              <strong>ARIA 屬性：</strong>包含 `aria-label="Breadcrumb"` 和 `aria-current="page"`
            </li>
            <li>
              <strong>鍵盤導航：</strong>支援 Tab、Enter、Space 鍵操作
            </li>
            <li>
              <strong>焦點指示器：</strong>清晰的焦點環，符合視覺標準
            </li>
            <li>
              <strong>螢幕閱讀器支援：</strong>正確的標籤和狀態資訊
            </li>
          </ul>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Breadcrumb } from 'eonui';
import type { BreadcrumbItem } from 'eonui';

// 基本麵包屑
const items: BreadcrumbItem[] = [
  { label: '首頁', href: '/' },
  { label: '產品', href: '/products' },
  { label: '詳情', active: true },
];

<Breadcrumb items={items} />

// 帶事件處理
<Breadcrumb
  items={items}
  onItemClick={(item, index, event) => {
    console.log('點擊:', item.label);
  }}
/>

// 自訂分隔符
<Breadcrumb
  items={items}
  separator="/"
  size="lg"
/>

// 限制顯示項目
<Breadcrumb
  items={longPathItems}
  maxItems={4}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 與路由器整合
const BreadcrumbNavigation = ({ pathname }: { pathname: string }) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  
  const items: BreadcrumbItem[] = [
    { label: '首頁', href: '/' },
    ...pathSegments.map((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const isLast = index === pathSegments.length - 1;
      
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: isLast ? undefined : path,
        current: isLast,
      };
    }),
  ];
  
  return (
    <Breadcrumb
      items={items}
      onItemClick={(item, index, event) => {
        if (item.href) {
          event.preventDefault();
          router.push(item.href);
        }
      }}
    />
  );
};

// 動態麵包屑
const DynamicBreadcrumb = ({ pageData }: { pageData: any }) => {
  const items: BreadcrumbItem[] = pageData.breadcrumbs.map((crumb: any, index: number) => ({
    label: crumb.title,
    href: index === pageData.breadcrumbs.length - 1 ? undefined : crumb.path,
    current: index === pageData.breadcrumbs.length - 1,
    className: crumb.important ? 'font-bold text-red-600' : undefined,
  }));
  
  return <Breadcrumb items={items} maxItems={5} />;
};

// 自訂樣式
<Breadcrumb
  items={items}
  className="my-custom-breadcrumb"
  separator={<ChevronRightIcon className="h-4 w-4 text-gray-400" />}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Breadcrumb 組件的所有功能，可以在你的項目中開始使用了！ Breadcrumb
          組件提供了靈活的導航功能，適用於各種層級結構的頁面導航。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <BreadcrumbDocs />,
    },
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Breadcrumb 項目陣列',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
    separatorType: {
      control: { type: 'select' },
      options: ['arrow', 'slash'],
      description: '分隔符類型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'arrow' },
      },
    },
    separator: {
      control: { type: 'text' },
      description: '自訂分隔符（會覆蓋 separatorType）',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '組件大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    maxItems: {
      control: { type: 'number' },
      description: '最大顯示項目數量',
      table: {
        type: { summary: 'number' },
      },
    },
    showIcon: {
      control: { type: 'boolean' },
      description: '是否顯示圖示',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onItemClick: {
      action: 'itemClicked',
      description: '項目點擊事件',
      table: {
        type: { summary: '(item: BreadcrumbItem, index: number, event: MouseEvent) => void' },
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
    items: [
      { label: '首頁', href: '/' },
      { label: '產品', href: '/products' },
      { label: '電子產品', href: '/products/electronics' },
      { label: 'iPhone', active: true },
    ],
    separatorType: 'arrow',
    size: 'md',
    showIcon: false,
  },
};

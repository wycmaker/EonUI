import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Tab, TabPane } from './Tab';
import type { TabItem } from './Tab';
import '../../styles/component-docs.css';

// 模擬圖示組件
const HomeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-4 h-4"
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

const SettingsIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

// 互動式範例組件
const InteractiveExample = () => {
  const [activeKey, setActiveKey] = useState('home');

  const items: TabItem[] = [
    {
      key: 'home',
      label: '首頁',
      icon: <HomeIcon />,
      children: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">歡迎來到首頁</h3>
          <p>這是首頁的內容區域。您可以在這裡放置任何組件或內容。</p>
          <div className="mt-3 text-sm text-gray-600">
            目前激活的Tab: <strong>{activeKey}</strong>
          </div>
        </div>
      ),
    },
    {
      key: 'profile',
      label: '個人資料',
      icon: <UserIcon />,
      children: (
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">個人資料</h3>
          <p>管理您的個人資訊和設定。</p>
        </div>
      ),
    },
    {
      key: 'settings',
      label: '設定',
      icon: <SettingsIcon />,
      children: (
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">系統設定</h3>
          <p>調整系統偏好設定和選項。</p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-2xl">
      <Tab
        items={items}
        activeKey={activeKey}
        onChange={setActiveKey}
      />
    </div>
  );
};

// 路由模式範例組件
const RouterExample = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard');

  const routerItems: TabItem[] = [
    { key: 'dashboard', label: '儀表板', href: '/dashboard', icon: <HomeIcon /> },
    { key: 'analytics', label: '數據分析', href: '/analytics', icon: <AnalyticsIcon /> },
    { key: 'users', label: '用戶管理', href: '/users', icon: <UserIcon /> },
    { key: 'settings', label: '系統設定', href: '/settings', icon: <SettingsIcon /> },
  ];

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          路由模式示例。當前路徑: <strong>{currentPath}</strong>
        </p>
        <div className="mt-2 space-x-2">
          {routerItems.map((item) => (
            <button
              key={item.key}
              className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50"
              onClick={() => item.href && setCurrentPath(item.href)}
            >
              {item.href}
            </button>
          ))}
        </div>
      </div>

      <Tab
        items={routerItems}
        useRouter
        currentPath={currentPath}
        onChange={(key) => {
          const item = routerItems.find((item) => item.key === key);
          if (item && item.href) {
            setCurrentPath(item.href);
          }
        }}
      />

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">路由內容區域</h3>
        <p>在路由模式下，內容通常由路由器渲染，而不是Tab組件本身。</p>
        <p className="text-sm text-gray-600 mt-2">
          當前顯示的是 <strong>{currentPath}</strong> 路由的內容。
        </p>
      </div>
    </div>
  );
};

const TabDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Tab 標籤頁</h1>
        <p className="component-docs-description">
          Tab 組件提供了一個靈活的標籤頁介面，支援多種使用場景。可以用於組件內容切換或路由導航，
          提供了一致的視覺風格和互動體驗，遵循現代設計原則和無障礙標準。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整Tab的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 基礎用法 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 基礎用法範例"
          description="支援兩種定義方式：使用items配置陣列或TabPane組件。"
          code={`const [activeKey, setActiveKey] = useState('home');

const items = [
  {
    key: 'home',
    label: '首頁',
    icon: <HomeIcon />,
    children: (
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">歡迎來到首頁</h3>
        <p>這是首頁的內容區域。您可以在這裡放置任何組件或內容。</p>
      </div>
    ),
  },
  // ...更多項目
];

<Tab
  items={items}
  activeKey={activeKey}
  onChange={setActiveKey}
/>`}
        >
          <InteractiveExample />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>配置方式：</strong>
          <ul>
            <li>
              <strong>items配置：</strong>適用於動態生成的標籤頁
            </li>
            <li>
              <strong>TabPane組件：</strong>適用於靜態定義的標籤頁內容
            </li>
          </ul>
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 樣式變體範例"
          description="支援兩種視覺樣式，適用於不同的設計需求："
          code={`// 底線樣式
<Tab
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>底線樣式內容 1</div> },
    { key: 'tab2', label: '標籤 2', children: <div>底線樣式內容 2</div> },
    { key: 'tab3', label: '標籤 3', children: <div>底線樣式內容 3</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 按鈕樣式
<Tab
  variant="button"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>按鈕樣式內容 1</div> },
    { key: 'tab2', label: '標籤 2', children: <div>按鈕樣式內容 2</div> },
    { key: 'tab3', label: '標籤 3', children: <div>按鈕樣式內容 3</div> },
  ]}
  defaultActiveKey="tab1"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">底線樣式 (underline)</h4>
              <Tab
                variant="underline"
                items={[
                  {
                    key: 'tab1',
                    label: '標籤 1',
                    children: <div className="p-3 text-sm">底線樣式內容 1</div>,
                  },
                  {
                    key: 'tab2',
                    label: '標籤 2',
                    children: <div className="p-3 text-sm">底線樣式內容 2</div>,
                  },
                  {
                    key: 'tab3',
                    label: '標籤 3',
                    children: <div className="p-3 text-sm">底線樣式內容 3</div>,
                  },
                ]}
                defaultActiveKey="tab1"
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">按鈕樣式 (button)</h4>
              <Tab
                variant="button"
                items={[
                  {
                    key: 'tab1',
                    label: '標籤 1',
                    children: <div className="p-3 text-sm">按鈕樣式內容 1</div>,
                  },
                  {
                    key: 'tab2',
                    label: '標籤 2',
                    children: <div className="p-3 text-sm">按鈕樣式內容 2</div>,
                  },
                  {
                    key: 'tab3',
                    label: '標籤 3',
                    children: <div className="p-3 text-sm">按鈕樣式內容 3</div>,
                  },
                ]}
                defaultActiveKey="tab1"
              />
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>樣式建議：</strong>
          <ul>
            <li>
              <strong>underline：</strong>經典的標籤頁樣式，適用於內容導航
            </li>
            <li>
              <strong>button：</strong>現代的按鈕樣式，適用於工具欄或控制面板
            </li>
          </ul>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 大小選項範例"
          description="支援三種不同的大小選項，適應不同的設計需求："
          code={`// 小尺寸
<Tab
  size="sm"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>小尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>小尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 中等尺寸（預設）
<Tab
  size="md"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>中等尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>中等尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 大尺寸
<Tab
  size="lg"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>大尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>大尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">小尺寸 (sm)</h4>
              <Tab
                size="sm"
                variant="underline"
                items={[
                  {
                    key: 'tab1',
                    label: '標籤 1',
                    children: <div className="p-2 text-xs">小尺寸內容</div>,
                  },
                  {
                    key: 'tab2',
                    label: '標籤 2',
                    children: <div className="p-2 text-xs">小尺寸內容</div>,
                  },
                ]}
                defaultActiveKey="tab1"
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">中等尺寸 (md)</h4>
              <Tab
                size="md"
                variant="underline"
                items={[
                  {
                    key: 'tab1',
                    label: '標籤 1',
                    children: <div className="p-3">中等尺寸內容</div>,
                  },
                  {
                    key: 'tab2',
                    label: '標籤 2',
                    children: <div className="p-3">中等尺寸內容</div>,
                  },
                ]}
                defaultActiveKey="tab1"
              />
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">大尺寸 (lg)</h4>
              <Tab
                size="lg"
                variant="underline"
                items={[
                  {
                    key: 'tab1',
                    label: '標籤 1',
                    children: <div className="p-4 text-lg">大尺寸內容</div>,
                  },
                  {
                    key: 'tab2',
                    label: '標籤 2',
                    children: <div className="p-4 text-lg">大尺寸內容</div>,
                  },
                ]}
                defaultActiveKey="tab1"
              />
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>用於緊湊的界面或側邊欄
            </li>
            <li>
              <strong>md：</strong>標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>用於重要的導航或大螢幕界面
            </li>
          </ul>
        </div>
      </div>

      {/* 圖示支援 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 圖示支援範例"
          description="支援在標籤中顯示圖示，提升視覺識別度："
          code={`// 帶圖示的 Tab 項目
<Tab
  items={[
    {
      key: 'home',
      label: '首頁',
      icon: <HomeIcon />,
      children: <div className="p-4">首頁內容</div>,
    },
    {
      key: 'user',
      label: '用戶',
      icon: <UserIcon />,
      children: <div className="p-4">用戶內容</div>,
    },
    {
      key: 'settings',
      label: '設定',
      icon: <SettingsIcon />,
      children: <div className="p-4">設定內容</div>,
    },
  ]}
  defaultActiveKey="home"
/>`}
        >
          <Tab
            items={[
              {
                key: 'home',
                label: '首頁',
                icon: <HomeIcon />,
                children: <div className="p-4">首頁內容</div>,
              },
              {
                key: 'user',
                label: '用戶',
                icon: <UserIcon />,
                children: <div className="p-4">用戶內容</div>,
              },
              {
                key: 'settings',
                label: '設定',
                icon: <SettingsIcon />,
                children: <div className="p-4">設定內容</div>,
              },
            ]}
            defaultActiveKey="home"
          />
        </CodeExample>
      </div>

      {/* 路由模式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 路由模式範例"
          description="啟用路由模式後，Tab組件可以用於頁面導航，並自動判斷激活狀態："
          code={`const [currentPath, setCurrentPath] = useState('/dashboard');

const routerItems = [
  { key: 'dashboard', label: '儀表板', href: '/dashboard', icon: <HomeIcon /> },
  { key: 'analytics', label: '數據分析', href: '/analytics', icon: <AnalyticsIcon /> },
  { key: 'users', label: '用戶管理', href: '/users', icon: <UserIcon /> },
  { key: 'settings', label: '系統設定', href: '/settings', icon: <SettingsIcon /> },
];

<Tab
  items={routerItems}
  useRouter
  currentPath={currentPath}
  onChange={(key) => {
    const item = routerItems.find((item) => item.key === key);
    if (item && item.href) {
      setCurrentPath(item.href);
    }
  }}
/>`}
        >
          <RouterExample />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>路由模式特點：</strong>
          <ul>
            <li>
              設定 <code>useRouter={`{true}`}</code> 啟用路由模式
            </li>
            <li>
              在items中提供 <code>href</code> 屬性
            </li>
            <li>
              透過 <code>currentPath</code> 自動判斷激活狀態
            </li>
            <li>不渲染內容區域，由路由器負責內容渲染</li>
          </ul>
        </div>
      </div>

      {/* TabPane 使用方式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 TabPane 組件範例"
          description="使用TabPane組件可以更直觀地定義標籤頁內容："
          code={`// 使用 TabPane 組件定義標籤
<Tab defaultActiveKey="pane1">
  <TabPane
    key="pane1"
    tab="面板 1"
    icon={<HomeIcon />}
  >
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">面板 1</h3>
      <p>使用 TabPane 組件的方式定義標籤內容。</p>
    </div>
  </TabPane>

  <TabPane
    key="pane2"
    tab="面板 2"
    icon={<UserIcon />}
  >
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">面板 2</h3>
      <p>每個 TabPane 可以包含任意的 React 組件。</p>
    </div>
  </TabPane>

  <TabPane
    key="pane3"
    tab="禁用面板"
    disabled
  >
    <div className="p-4 bg-red-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">禁用面板</h3>
      <p>這個面板被禁用了。</p>
    </div>
  </TabPane>
</Tab>`}
        >
          <Tab defaultActiveKey="pane1">
            <TabPane
              key="pane1"
              tab="面板 1"
              icon={<HomeIcon />}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">面板 1</h3>
                <p>使用 TabPane 組件的方式定義標籤內容。</p>
              </div>
            </TabPane>
            <TabPane
              key="pane2"
              tab="面板 2"
              icon={<UserIcon />}
            >
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">面板 2</h3>
                <p>每個 TabPane 可以包含任意的 React 組件。</p>
              </div>
            </TabPane>
            <TabPane
              key="pane3"
              tab="禁用面板"
              disabled
            >
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">禁用面板</h3>
                <p>這個面板被禁用了。</p>
              </div>
            </TabPane>
          </Tab>
        </CodeExample>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 禁用狀態範例"
          description="Tab項目可以設定為禁用狀態，防止用戶點擊："
          code={`// 禁用特定的 Tab 項目
<Tab
  items={[
    {
      key: 'active1',
      label: '可用標籤',
      children: <div className="p-4">這是一個可用的標籤內容。</div>,
    },
    {
      key: 'disabled',
      label: '禁用標籤',
      disabled: true,
      children: <div className="p-4">這個內容不會顯示。</div>,
    },
    {
      key: 'active2',
      label: '另一個可用標籤',
      children: <div className="p-4">另一個可用標籤的內容。</div>,
    },
  ]}
  defaultActiveKey="active1"
/>`}
        >
          <Tab
            items={[
              {
                key: 'active1',
                label: '可用標籤',
                children: <div className="p-4">這是一個可用的標籤內容。</div>,
              },
              {
                key: 'disabled',
                label: '禁用標籤',
                disabled: true,
                children: <div className="p-4">這個內容不會顯示。</div>,
              },
              {
                key: 'active2',
                label: '另一個可用標籤',
                children: <div className="p-4">另一個可用標籤的內容。</div>,
              },
            ]}
            defaultActiveKey="active1"
          />
        </CodeExample>
      </div>

      {/* 自訂樣式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 自訂樣式範例"
          description="Tab組件提供多個className屬性來自訂樣式："
          code={`// 使用各種 className 屬性自訂樣式
<Tab
  items={[
    {
      key: 'custom1',
      label: '自訂標籤 1',
      children: <div className="p-4 text-purple-700">自訂樣式的內容 1</div>,
    },
    {
      key: 'custom2',
      label: '自訂標籤 2',
      children: <div className="p-4 text-green-700">自訂樣式的內容 2</div>,
    },
  ]}
  defaultActiveKey="custom1"
  className="border-2 border-purple-200 rounded-lg p-4"
  tabsClassName="bg-purple-50 rounded-t-lg"
  contentClassName="bg-purple-25 border-t border-purple-200"
  tabItemClassName="text-purple-600 hover:text-purple-800"
  activeTabItemClassName="text-purple-900 border-purple-500"
/>`}
        >
          <Tab
            items={[
              {
                key: 'custom1',
                label: '自訂標籤 1',
                children: <div className="p-4 text-purple-700">自訂樣式的內容 1</div>,
              },
              {
                key: 'custom2',
                label: '自訂標籤 2',
                children: <div className="p-4 text-green-700">自訂樣式的內容 2</div>,
              },
            ]}
            defaultActiveKey="custom1"
            className="border-2 border-purple-200 rounded-lg p-4"
            tabsClassName="bg-purple-50 rounded-t-lg"
            contentClassName="bg-purple-25 border-t border-purple-200"
            tabItemClassName="text-purple-600 hover:text-purple-800"
            activeTabItemClassName="text-purple-900 border-purple-500"
          />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>可用的className屬性：</strong>
          <ul>
            <li>
              <code>className</code>：整體容器樣式
            </li>
            <li>
              <code>tabsClassName</code>：Tab導航區域樣式
            </li>
            <li>
              <code>contentClassName</code>：內容區域樣式
            </li>
            <li>
              <code>tabItemClassName</code>：個別Tab項目樣式
            </li>
            <li>
              <code>activeTabItemClassName</code>：激活Tab項目樣式
            </li>
          </ul>
        </div>
      </div>

      {/* 受控模式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 受控模式範例"
          description="Tab組件支援受控和非受控兩種模式，可以通過程式控制激活狀態："
          code={`// 受控模式的 Tab 組件
const [activeKey, setActiveKey] = useState('home');

<Tab
  items={items}
  activeKey={activeKey}
  onChange={setActiveKey}
/>

// 非受控模式（僅設定預設值）
<Tab
  items={items}
  defaultActiveKey="home"
/>`}
        >
          <InteractiveExample />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>控制模式：</strong>
          <ul>
            <li>
              <strong>非受控：</strong>僅設定 <code>defaultActiveKey</code>
            </li>
            <li>
              <strong>受控：</strong>設定 <code>activeKey</code> 和 <code>onChange</code>
            </li>
          </ul>
        </div>
      </div>

      {/* API 參考 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📖 API 參考</h2>

        <div className="component-docs-info-card">
          <h3 className="text-lg font-semibold mb-4">Tab Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">屬性</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">類型</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">預設值</th>
                  <th className="text-left py-2 font-medium text-gray-700">說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">items</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>TabItem[]</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>[]</code>
                  </td>
                  <td className="py-2">Tab項目配置陣列</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">defaultActiveKey</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">預設激活的Tab項目key</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">activeKey</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">當前激活的Tab項目key（受控模式）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">onChange</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>(activeKey: string) =&gt; void</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">Tab切換回調函數</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">variant</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>'underline' | 'button'</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>'underline'</code>
                  </td>
                  <td className="py-2">Tab的樣式變體</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">size</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>'sm' | 'md' | 'lg'</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>'md'</code>
                  </td>
                  <td className="py-2">Tab的尺寸大小</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">useRouter</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>boolean</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>false</code>
                  </td>
                  <td className="py-2">是否使用路由模式</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">currentPath</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">當前路由路徑（路由模式使用）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">className</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">整體容器自訂CSS類名</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">tabsClassName</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">Tab導航區域自訂CSS類名</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">contentClassName</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">內容區域自訂CSS類名</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">tabItemClassName</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">個別Tab項目自訂CSS類名</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">activeTabItemClassName</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>-</code>
                  </td>
                  <td className="py-2">激活Tab項目自訂CSS類名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="component-docs-info-card">
          <h3 className="text-lg font-semibold mb-4">TabItem Interface</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">屬性</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">類型</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">必需</th>
                  <th className="text-left py-2 font-medium text-gray-700">說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">key</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600">✓</span>
                  </td>
                  <td className="py-2">Tab項目的唯一識別碼</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">label</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600">✓</span>
                  </td>
                  <td className="py-2">Tab項目的標籤文字</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">children</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>React.ReactNode</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Tab項目的內容（非路由模式）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">href</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">路由路徑（路由模式使用）</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">disabled</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>boolean</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">是否禁用該Tab項目</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">icon</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>React.ReactNode</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Tab項目的圖示</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="component-docs-info-card">
          <h3 className="text-lg font-semibold mb-4">TabPane Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">屬性</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">類型</th>
                  <th className="text-left py-2 pr-4 font-medium text-gray-700">必需</th>
                  <th className="text-left py-2 font-medium text-gray-700">說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">key</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600">✓</span>
                  </td>
                  <td className="py-2">TabPane的唯一識別碼</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">tab</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600">✓</span>
                  </td>
                  <td className="py-2">TabPane的標籤文字</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">children</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>React.ReactNode</code>
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600">✓</span>
                  </td>
                  <td className="py-2">TabPane的內容</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">disabled</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>boolean</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">是否禁用該TabPane</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">icon</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>React.ReactNode</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">TabPane的圖示</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">
                    <code className="text-blue-600">className</code>
                  </td>
                  <td className="py-2 pr-4">
                    <code>string</code>
                  </td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">自訂CSS類名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Tab> = {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
    docs: {
      page: TabDocs,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['underline', 'button'],
      description: 'Tab的樣式變體',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Tab的尺寸大小',
    },
    useRouter: {
      control: 'boolean',
      description: '是否使用路由模式',
    },
    defaultActiveKey: {
      control: 'text',
      description: '預設激活的Tab項目key',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

// 主要展示故事
export const Docs: Story = {
  args: {
    items: [
      {
        key: 'home',
        label: '首頁',
        icon: <HomeIcon />,
        children: (
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">歡迎來到首頁</h3>
            <p>這是首頁的內容區域。您可以在這裡放置任何組件或內容。</p>
          </div>
        ),
      },
      {
        key: 'about',
        label: '關於我們',
        icon: <UserIcon />,
        children: (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">關於我們</h3>
            <p>了解更多關於我們公司和團隊的資訊。</p>
          </div>
        ),
      },
      {
        key: 'contact',
        label: '聯絡方式',
        icon: <SettingsIcon />,
        children: (
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">聯絡我們</h3>
            <p>透過以下方式與我們取得聯繫。</p>
          </div>
        ),
      },
    ],
    defaultActiveKey: 'home',
    variant: 'underline',
    size: 'md',
  },
};

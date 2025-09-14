import React, { useState } from 'react';

import { Primary, Controls } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout } from '../Layout';
import { CodeExample } from '../shared/CodeExample';

import { Menu } from './Menu';
import type { MenuItem } from './Menu';
import '../../styles/component-docs.css';

// 示例選單數據
const sampleMenuItems: MenuItem[] = [
  {
    key: 'dashboard',
    label: '儀表板',
    href: '/dashboard',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
        />
      </svg>
    ),
  },
  {
    key: 'users',
    label: '用戶管理',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    children: [
      {
        key: 'user-list',
        label: '用戶列表',
        href: '/users/list',
        activePatterns: ['/users/list', '/users/detail'],
      },
      {
        key: 'user-roles',
        label: '角色管理',
        href: '/users/roles',
      },
      {
        key: 'user-permissions',
        label: '權限設定',
        href: '/users/permissions',
      },
    ],
  },
  {
    key: 'products',
    label: '產品管理',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    children: [
      {
        key: 'product-list',
        label: '產品列表',
        href: '/products/list',
      },
      {
        key: 'product-categories',
        label: '分類管理',
        href: '/products/categories',
      },
      {
        key: 'product-inventory',
        label: '庫存管理',
        href: '/products/inventory',
      },
    ],
  },
  {
    key: 'orders',
    label: '訂單管理',
    href: '/orders',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    key: 'analytics',
    label: '數據分析',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"
        />
      </svg>
    ),
    children: [
      {
        key: 'sales-report',
        label: '銷售報表',
        href: '/analytics/sales',
      },
      {
        key: 'user-report',
        label: '用戶分析',
        href: '/analytics/users',
      },
    ],
  },
  {
    key: 'settings',
    label: '系統設定',
    href: '/settings',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
    ),
    disabled: true,
  },
];

// 互動式範例組件
const InteractiveExample = () => {
  const [currentPath, setCurrentPath] = useState('/users/detail/123');
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleSelect = (key: string, item: MenuItem) => {
    // console.log('Selected:', key, item);
    if (item.href) {
      setCurrentPath(item.href);
    }
  };

  return (
    <div className="space-y-6">
      {/* 控制面板 */}
      <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium">當前路徑：</span>
          <select
            value={currentPath}
            onChange={(e) => setCurrentPath(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="/dashboard">儀表板</option>
            <option value="/users/list">用戶列表</option>
            <option value="/users/detail/123">用戶詳情（子頁面）</option>
            <option value="/users/roles">角色管理</option>
            <option value="/products/list">產品列表</option>
            <option value="/orders">訂單管理</option>
            <option value="/analytics/sales">銷售報表</option>
          </select>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={collapsed}
            onChange={(e) => setCollapsed(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm font-medium">收合模式</span>
        </label>

        <label className="flex items-center space-x-2">
          <span className="text-sm font-medium">主題：</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
            className="px-3 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="light">淺色</option>
            <option value="dark">深色</option>
          </select>
        </label>
      </div>

      {/* 與 Layout 結合的示例 */}
      <div className="h-96 border border-gray-200 rounded-lg overflow-hidden">
        <Layout
          header={
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
              <h1 className="text-lg font-semibold">管理後台</h1>
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          }
          aside={
            <Menu
              items={sampleMenuItems}
              currentPath={currentPath}
              collapsed={collapsed}
              theme={theme}
              onSelect={handleSelect}
            />
          }
          asideWidth={collapsed ? 'sm' : 'md'}
          main={
            <div className="p-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">主要內容區域</h2>
                <p className="text-gray-600 mb-4">
                  當前路徑：
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">{currentPath}</code>
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 選單會自動根據路徑判斷 active 狀態</p>
                  <p>• 支援 activePatterns 進行模式匹配</p>
                  <p>• 雙層選單會自動展開包含 active 項目的父級</p>
                  <p>• 收合模式下僅顯示圖示</p>
                </div>
              </div>
            </div>
          }
          fullHeight
        />
      </div>
    </div>
  );
};

const MenuDocs = () => {
  return (
    <div className="component-docs">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Menu 選單</h1>
        <p className="component-docs-description">
          EonUI 的選單組件，提供完整的導航功能。
          支援單層與雙層選單結構、收合動畫、自動路由判斷，以及與 Layout 組件的完美結合。
          設計風格簡潔現代，適用於各種管理後台和應用程式的導航需求。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Menu 的各種屬性：
        </p>

        <Primary />
        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="展示 Menu 組件與 Layout 組件結合的實際應用場景："
          code={`import { Menu, Layout } from 'eonui';

const menuItems = [
  {
    key: 'dashboard',
    label: '儀表板',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    key: 'users',
    label: '用戶管理',
    icon: <UsersIcon />,
    children: [
      {
        key: 'user-list',
        label: '用戶列表',
        href: '/users/list',
        activePatterns: ['/users/list', '/users/detail'],
      },
      {
        key: 'user-roles',
        label: '角色管理',
        href: '/users/roles',
      },
    ],
  },
];

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      header={<Header onToggle={() => setCollapsed(!collapsed)} />}
      aside={
        <Menu
          items={menuItems}
          currentPath={currentPath}
          collapsed={collapsed}
          onSelect={(key, item) => {
            if (item.href) {
              setCurrentPath(item.href);
              // 路由跳轉邏輯
            }
          }}
        />
      }
      main={<MainContent />}
      fullHeight
    />
  );
}`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <CodeExample
          title="📚 基本用法"
          description="Menu 組件的基本用法和配置："
          code={`// 基本選單
<Menu
  items={[
    {
      key: 'home',
      label: '首頁',
      href: '/',
      icon: <HomeIcon />,
    },
    {
      key: 'about',
      label: '關於我們',
      href: '/about',
    },
  ]}
  currentPath="/home"
/>

// 雙層選單
<Menu
  items={[
    {
      key: 'products',
      label: '產品管理',
      icon: <ProductIcon />,
      children: [
        {
          key: 'product-list',
          label: '產品列表',
          href: '/products/list',
        },
        {
          key: 'product-add',
          label: '新增產品',
          href: '/products/add',
        },
      ],
    },
  ]}
  defaultOpenKeys={['products']}
/>

// 路徑模式匹配
<Menu
  items={[
    {
      key: 'user-management',
      label: '用戶管理',
      href: '/users',
      activePatterns: ['/users', '/user-detail', '/user-edit'],
    },
  ]}
  currentPath="/user-detail/123"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-700">基本選單</h4>
              <div className="w-64 border border-gray-200 rounded-lg overflow-hidden">
                <Menu
                  items={[
                    {
                      key: 'home',
                      label: '首頁',
                      href: '/',
                      icon: (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      ),
                    },
                    {
                      key: 'about',
                      label: '關於我們',
                      href: '/about',
                      icon: (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ),
                    },
                  ]}
                  currentPath="/"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-700">雙層選單</h4>
              <div className="w-64 border border-gray-200 rounded-lg overflow-hidden">
                <Menu
                  items={[
                    {
                      key: 'products',
                      label: '產品管理',
                      icon: (
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      ),
                      children: [
                        {
                          key: 'product-list',
                          label: '產品列表',
                          href: '/products/list',
                        },
                        {
                          key: 'product-add',
                          label: '新增產品',
                          href: '/products/add',
                        },
                      ],
                    },
                  ]}
                  defaultOpenKeys={['products']}
                  currentPath="/products/list"
                />
              </div>
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 主題與樣式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 主題與樣式"
          description="Menu 組件支援不同的主題和樣式配置："
          code={`// 深色主題
<Menu
  items={menuItems}
  theme="dark"
  currentPath="/dashboard"
/>

// 收合模式
<Menu
  items={menuItems}
  collapsed={true}
  currentPath="/dashboard"
/>

// 自訂縮排
<Menu
  items={menuItems}
  indent={24}
  currentPath="/dashboard"
/>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-700">淺色主題</h4>
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <Menu
                  items={sampleMenuItems.slice(0, 3)}
                  theme="light"
                  currentPath="/users/list"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-700">深色主題</h4>
              <div className="w-full border border-gray-700 rounded-lg overflow-hidden">
                <Menu
                  items={sampleMenuItems.slice(0, 3)}
                  theme="dark"
                  currentPath="/users/list"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-700">收合模式</h4>
              <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <Menu
                  items={sampleMenuItems.slice(0, 3)}
                  collapsed={true}
                  currentPath="/users/list"
                />
              </div>
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 路由判斷 */}
      <div className="component-docs-section">
        <CodeExample
          title="🧭 智能路由判斷"
          description="Menu 組件提供智能的路由判斷機制，支援多種匹配模式："
          code={`// 使用 activePatterns 進行模式匹配
const menuItems = [
  {
    key: 'user-management',
    label: '用戶管理',
    href: '/users',
    // 當路徑包含這些模式時，該項目會被標記為 active
    activePatterns: ['/users', '/user-detail', '/user-edit'],
  },
  {
    key: 'product-detail',
    label: '產品詳情',
    href: '/products/detail',
    // 支援多個模式，適用於複雜的頁面結構
    activePatterns: ['/products/detail', '/products/edit', '/products/view'],
  },
];

// 自動展開包含 active 項目的父級選單
<Menu
  items={menuItems}
  currentPath="/user-detail/123"  // 會自動激活 user-management 項目
/>`}
        >
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">智能匹配特色</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>
                  • <strong>包含匹配：</strong>使用 includes() 方法進行模糊匹配
                </li>
                <li>
                  • <strong>模式數組：</strong>支援多個 activePatterns 進行複合匹配
                </li>
                <li>
                  • <strong>自動展開：</strong>包含 active 項目的父級選單會自動展開
                </li>
                <li>
                  • <strong>優先級：</strong>手動 activeKey &gt; activePatterns &gt; href
                </li>
              </ul>
            </div>

            <div className="w-64 border border-gray-200 rounded-lg overflow-hidden">
              <Menu
                items={[
                  {
                    key: 'user-management',
                    label: '用戶管理',
                    icon: (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                    ),
                    children: [
                      {
                        key: 'user-list',
                        label: '用戶列表',
                        href: '/users/list',
                        activePatterns: ['/users/list', '/users/detail'],
                      },
                      {
                        key: 'user-settings',
                        label: '用戶設定',
                        href: '/users/settings',
                      },
                    ],
                  },
                ]}
                currentPath="/users/detail/123"
              />
            </div>
            <p className="text-sm text-gray-600">
              ↑ 當前路徑為 <code>/users/detail/123</code>，用戶列表項目會自動激活並展開父級選單
            </p>
          </div>
        </CodeExample>
      </div>

      {/* 自定義樣式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 自定義樣式"
          description="使用 customClassName 屬性來完全自定義選單的外觀，支援層級選擇器："
          code={`// 使用 customClassName 自定義樣式
<Menu
  items={menuItems}
  currentPath="/users/detail/123"
  customClassName="my-custom-menu"
/>

/* CSS 樣式定義 */
.my-custom-menu {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
}

/* 第一層選單項目 */
.my-custom-menu li > div {
  color: white;
  border-radius: 6px;
  margin: 2px 6px;
  transition: all 0.2s ease;
}

/* Hover 效果 */
.my-custom-menu li > div:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(2px);
}

/* Active 狀態 */
.my-custom-menu li > div[aria-current="page"] {
  background: rgba(255, 255, 255, 0.25);
  font-weight: 600;
}

/* 子選單樣式 */
.my-custom-menu ul ul li > div {
  background: rgba(0, 0, 0, 0.1);
  margin-left: 16px;
  font-size: 0.875rem;
}`}
        >
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">自定義樣式特色</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>
                  • <strong>層級選擇器：</strong>使用 <code>.your-class li &gt; div</code>{' '}
                  精確控制樣式
                </li>
                <li>
                  • <strong>狀態樣式：</strong>支援 hover、active、disabled 等狀態自定義
                </li>
                <li>
                  • <strong>子選單樣式：</strong>使用 <code>ul ul li &gt; div</code> 定義子選單樣式
                </li>
                <li>
                  • <strong>完全覆蓋：</strong>可以完全覆蓋預設樣式，實現任何設計需求
                </li>
              </ul>
            </div>

            <style>{`
              .demo-custom-menu {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                border-radius: 8px;
              }

              .demo-custom-menu li > div {
                color: white;
                border-radius: 6px;
                margin: 2px 6px;
                transition: all 0.2s ease;
              }

              .demo-custom-menu li > div:hover {
                background: rgba(255, 255, 255, 0.15);
                transform: translateX(2px);
              }

              .demo-custom-menu li > div[aria-current="page"] {
                background: rgba(255, 255, 255, 0.25);
                font-weight: 600;
              }
            `}</style>

            <div className="w-64 border border-gray-200 rounded-lg overflow-hidden">
              <Menu
                items={sampleMenuItems.slice(0, 3)}
                currentPath="/users/detail/123"
                customClassName="demo-custom-menu"
              />
            </div>
            <p className="text-sm text-gray-600">↑ 使用漸層背景和自定義 hover 效果的選單範例</p>
          </div>
        </CodeExample>
      </div>

      {/* API 參考 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📖 API 參考</h2>

        <div className="component-docs-api">
          <h3 className="component-docs-api-title">Menu Props</h3>
          <div className="overflow-x-auto">
            <table className="component-docs-api-table">
              <thead>
                <tr>
                  <th>屬性</th>
                  <th>類型</th>
                  <th>必填</th>
                  <th>預設值</th>
                  <th>說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm">items</td>
                  <td className="text-sm">MenuItem[]</td>
                  <td className="text-red-600 font-semibold">是</td>
                  <td className="text-sm">-</td>
                  <td className="text-sm">選單項目配置陣列</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">currentPath</td>
                  <td className="text-sm">string</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">''</td>
                  <td className="text-sm">當前路由路徑，用於自動判斷 active 狀態</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">activeKey</td>
                  <td className="text-sm">string</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">-</td>
                  <td className="text-sm">手動指定當前激活的項目key</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">collapsed</td>
                  <td className="text-sm">boolean</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">false</td>
                  <td className="text-sm">是否收合選單</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">theme</td>
                  <td className="text-sm">'light' | 'dark'</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">'light'</td>
                  <td className="text-sm">選單主題色彩</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">indent</td>
                  <td className="text-sm">number</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">16</td>
                  <td className="text-sm">子選單的縮排像素值</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">customClassName</td>
                  <td className="text-sm">string</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">-</td>
                  <td className="text-sm">自定義 CSS 類別名稱，用於覆蓋預設樣式</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">onSelect</td>
                  <td className="text-sm">(key: string, item: MenuItem) =&gt; void</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">-</td>
                  <td className="text-sm">點擊選單項目時的回調函數</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">onOpenChange</td>
                  <td className="text-sm">(openKeys: string[]) =&gt; void</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">-</td>
                  <td className="text-sm">展開/收合項目時的回調函數</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="component-docs-api">
          <h3 className="component-docs-api-title">MenuItem Interface</h3>
          <div className="overflow-x-auto">
            <table className="component-docs-api-table">
              <thead>
                <tr>
                  <th>屬性</th>
                  <th>類型</th>
                  <th>必填</th>
                  <th>說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-sm">key</td>
                  <td className="text-sm">string</td>
                  <td className="text-red-600 font-semibold">是</td>
                  <td className="text-sm">選單項目的唯一識別碼</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">label</td>
                  <td className="text-sm">string</td>
                  <td className="text-red-600 font-semibold">是</td>
                  <td className="text-sm">選單項目的顯示文字</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">href</td>
                  <td className="text-sm">string</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">選單項目的路由路徑</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">icon</td>
                  <td className="text-sm">React.ReactNode</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">選單項目的圖示</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">children</td>
                  <td className="text-sm">MenuItem[]</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">子選單項目（雙層選單）</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-mono text-sm">activePatterns</td>
                  <td className="text-sm">string[]</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">用於手動設定 active 狀態的路徑模式</td>
                </tr>
                <tr>
                  <td className="font-mono text-sm">disabled</td>
                  <td className="text-sm">boolean</td>
                  <td className="text-sm">否</td>
                  <td className="text-sm">是否禁用該選單項目</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">安裝和導入</h4>
          <pre className="component-docs-code">{`import { Menu } from 'eonui';
import type { MenuItem } from 'eonui';`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">與 Layout 組件結合</h4>
          <pre className="component-docs-code">{`import { Menu, Layout } from 'eonui';

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const currentPath = useLocation().pathname;

  const menuItems = [
    {
      key: 'dashboard',
      label: '儀表板',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      key: 'users',
      label: '用戶管理',
      icon: <UsersIcon />,
      children: [
        {
          key: 'user-list',
          label: '用戶列表',
          href: '/users',
          activePatterns: ['/users', '/user/'],
        },
        {
          key: 'user-roles',
          label: '角色管理',
          href: '/users/roles',
        },
      ],
    },
  ];

  return (
    <Layout
      header={
        <Header
          title="管理後台"
          onToggleMenu={() => setCollapsed(!collapsed)}
        />
      }
      aside={
        <Menu
          items={menuItems}
          currentPath={currentPath}
          collapsed={collapsed}
          theme="light"
          onSelect={(key, item) => {
            // 處理選單點擊
            if (item.href) {
              navigate(item.href);
            }
          }}
        />
      }
      asideWidth={collapsed ? 'sm' : 'md'}
      main={<Outlet />}
      fullHeight
    />
  );
}`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">路由整合範例</h4>
          <pre className="component-docs-code">{`// React Router 整合
import { useLocation, useNavigate } from 'react-router-dom';

function AppMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'products',
      label: '產品管理',
      icon: <ProductIcon />,
      children: [
        {
          key: 'product-list',
          label: '產品列表',
          href: '/products',
          // 包含產品詳情和編輯頁面
          activePatterns: ['/products', '/product/'],
        },
        {
          key: 'categories',
          label: '分類管理',
          href: '/categories',
        },
      ],
    },
  ];

  return (
    <Menu
      items={menuItems}
      currentPath={location.pathname}
      onSelect={(key, item) => {
        if (item.href) {
          navigate(item.href);
        }
      }}
    />
  );
}

// Next.js 整合
import { useRouter } from 'next/router';

function NextMenu() {
  const router = useRouter();

  return (
    <Menu
      items={menuItems}
      currentPath={router.pathname}
      onSelect={(key, item) => {
        if (item.href) {
          router.push(item.href);
        }
      }}
    />
  );
}`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Menu 組件的所有功能，可以在你的項目中開始使用了！ Menu
          組件提供了完整的導航解決方案，特別適合與 Layout 組件結合使用，
          打造專業的管理後台和應用程式介面。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <MenuDocs />,
    },
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Menu項目配置陣列',
      table: {
        type: { summary: 'MenuItem[]' },
      },
    },
    currentPath: {
      control: { type: 'text' },
      description: '當前路由路徑，用於自動判斷 active 狀態',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '選單主題色彩',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
      },
    },
    collapsed: {
      control: { type: 'boolean' },
      description: '是否收合選單',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indent: {
      control: { type: 'number', min: 8, max: 32, step: 4 },
      description: '子選單的縮排像素值',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '16' },
      },
    },
    onSelect: {
      action: 'select',
      description: '點擊選單項目時的回調',
      table: {
        type: { summary: '(key: string, item: MenuItem) => void' },
      },
    },
    onOpenChange: {
      action: 'openChange',
      description: '展開/收合項目時的回調',
      table: {
        type: { summary: '(openKeys: string[]) => void' },
      },
    },
    customClassName: {
      control: { type: 'text' },
      description:
        '自定義 CSS 類別名稱，可用於覆蓋預設樣式。支援使用 CSS 選擇器如 .your-class li > div 來定義不同層級樣式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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
    items: sampleMenuItems,
    currentPath: '/users/detail/123',
    collapsed: false,
    theme: 'light',
    indent: 16,
  },
  render: (args) => (
    <div className="w-64 h-96 border border-gray-200 rounded-lg overflow-hidden">
      <Menu {...args} />
    </div>
  ),
};

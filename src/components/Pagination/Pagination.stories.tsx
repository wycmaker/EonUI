import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [basicPage, setBasicPage] = useState(1);
  const [basicPageSize, setBasicPageSize] = useState(10);

  const [advancedPage, setAdvancedPage] = useState(1);
  const [advancedPageSize, setAdvancedPageSize] = useState(20);

  const [customPage, setCustomPage] = useState(1);
  const [customPageSize, setCustomPageSize] = useState(15);

  const handleBasicChange = (page: number, pageSize: number) => {
    setBasicPage(page);
    setBasicPageSize(pageSize);
  };

  const handleAdvancedChange = (page: number, pageSize: number) => {
    setAdvancedPage(page);
    setAdvancedPageSize(pageSize);
  };

  const handleCustomChange = (page: number, pageSize: number) => {
    setCustomPage(page);
    setCustomPageSize(pageSize);
  };

  return (
    <div className="space-y-8 w-full">
      {/* 基本分頁 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">基本分頁</h4>
        <Pagination
          current={basicPage}
          pageSize={basicPageSize}
          total={500}
          onChange={handleBasicChange}
        />
        <p className="text-sm text-gray-600 mt-2">
          當前：第 {basicPage} 頁，每頁 {basicPageSize} 筆
        </p>
      </div>

      {/* 完整功能分頁 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">完整功能分頁</h4>
        <Pagination
          current={advancedPage}
          pageSize={advancedPageSize}
          total={1000}
          layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
          pageSizeOptions={[10, 20, 50, 100]}
          onChange={handleAdvancedChange}
        />
        <p className="text-sm text-gray-600 mt-2">
          當前：第 {advancedPage} 頁，每頁 {advancedPageSize} 筆
        </p>
      </div>

      {/* 自訂佈局分頁 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">自訂佈局分頁</h4>
        <Pagination
          current={customPage}
          pageSize={customPageSize}
          total={750}
          layout={['prev', 'pages', 'next', 'jumper', 'sizes', 'total']}
          pageNumberStyle="plain"
          prevText="上一頁"
          nextText="下一頁"
          onChange={handleCustomChange}
          showTotalText={(total, range) => (
            <span className="text-primary font-medium">
              顯示 {range[0]} 到 {range[1]} 項，共 {total} 項
            </span>
          )}
        />
        <p className="text-sm text-gray-600 mt-2">
          當前：第 {customPage} 頁，每頁 {customPageSize} 筆
        </p>
      </div>
    </div>
  );
};

const PaginationDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Pagination 分頁</h1>
        <p className="component-docs-description">
          EonUI 的分頁組件，提供完整的分頁功能，包括頁碼導航、快速跳轉、每頁數量選擇等。
          支援響應式設計，會根據容器寬度自動調整顯示的頁碼數量，並提供靈活的佈局配置系統。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Pagination 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是實際的分頁範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 基本用法</h2>
        <p className="component-docs-section-description">
          最簡單的分頁使用方式，只需要提供總數據量：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">基本分頁</h4>
              <Pagination
                defaultCurrent={1}
                defaultPageSize={10}
                total={100}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">顯示總數</h4>
              <Pagination
                defaultCurrent={1}
                defaultPageSize={10}
                total={100}
                layout={['prev', 'pages', 'next', 'total']}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">更多頁數</h4>
              <Pagination
                defaultCurrent={5}
                defaultPageSize={10}
                total={500}
                layout={['prev', 'pages', 'next', 'total']}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 頁碼樣式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 頁碼樣式</h2>
        <p className="component-docs-section-description">支援兩種頁碼樣式：純數字和有背景：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">背景樣式（預設）</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={10}
                total={200}
                pageNumberStyle="background"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">純數字樣式</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={10}
                total={200}
                pageNumberStyle="plain"
              />
            </div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>樣式說明：</strong>
          <ul>
            <li>
              <strong>background：</strong>頁碼有背景色和邊框，視覺層次更明確
            </li>
            <li>
              <strong>plain：</strong>純數字顯示，更簡潔的視覺效果
            </li>
          </ul>
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
                <Pagination
                  defaultCurrent={2}
                  defaultPageSize={10}
                  total={100}
                  size={size}
                  layout={['total', 'sizes', 'prev', 'pages', 'next']}
                />
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
              <strong>lg：</strong>大尺寸，適用於需要突出的分頁控制
            </li>
          </ul>
        </div>
      </div>

      {/* 功能組合 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">⚙️ 功能組合</h2>
        <p className="component-docs-section-description">展示各種功能的組合使用：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">顯示每頁數量選擇器</h4>
              <Pagination
                defaultCurrent={1}
                defaultPageSize={20}
                total={500}
                layout={['prev', 'pages', 'next', 'sizes']}
                pageSizeOptions={[10, 20, 50, 100]}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">快速跳轉</h4>
              <Pagination
                defaultCurrent={5}
                defaultPageSize={10}
                total={1000}
                layout={['prev', 'pages', 'next', 'jumper']}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">完整功能</h4>
              <Pagination
                defaultCurrent={8}
                defaultPageSize={25}
                total={1000}
                layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
                pageSizeOptions={[10, 25, 50, 100]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 自訂文字和圖示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔧 自訂文字和圖示</h2>
        <p className="component-docs-section-description">可以自訂上一頁、下一頁的文字或圖示：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂文字</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={10}
                total={200}
                prevText="上一頁"
                nextText="下一頁"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂圖示</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={10}
                total={200}
                prevText={
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                nextText={
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* 佈局配置 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📐 佈局配置</h2>
        <p className="component-docs-section-description">
          透過 layout 屬性可以自訂分頁組件的佈局和功能順序：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">完整佈局</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
              />
              <p className="text-xs text-gray-500 mt-1">
                順序：總數 → 每頁數量 → 上一頁 → 頁碼 → 下一頁 → 跳轉
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">簡潔佈局</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['prev', 'pages', 'next', 'total']}
              />
              <p className="text-xs text-gray-500 mt-1">順序：上一頁 → 頁碼 → 下一頁 → 總數</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">功能在前佈局</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['sizes', 'jumper', 'prev', 'pages', 'next']}
              />
              <p className="text-xs text-gray-500 mt-1">
                順序：每頁數量 → 跳轉 → 上一頁 → 頁碼 → 下一頁
              </p>
            </div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>佈局元素說明：</strong>
          <ul>
            <li>
              <strong>prev：</strong>上一頁按鈕
            </li>
            <li>
              <strong>next：</strong>下一頁按鈕
            </li>
            <li>
              <strong>pages：</strong>頁碼數字
            </li>
            <li>
              <strong>jumper：</strong>快速跳轉輸入框
            </li>
            <li>
              <strong>total：</strong>總數顯示
            </li>
            <li>
              <strong>sizes：</strong>每頁數量選擇器
            </li>
          </ul>
        </div>
      </div>

      {/* 響應式設計 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📱 響應式設計</h2>
        <p className="component-docs-section-description">
          分頁組件會根據容器寬度自動調整顯示的頁碼數量：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">大螢幕（顯示 9 個頁碼）</h4>
              <div className="w-full">
                <Pagination
                  defaultCurrent={10}
                  defaultPageSize={10}
                  total={1000}
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">中等螢幕（顯示 7 個頁碼）</h4>
              <div className="w-96">
                <Pagination
                  defaultCurrent={10}
                  defaultPageSize={10}
                  total={1000}
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">小螢幕（顯示 5 個頁碼）</h4>
              <div className="w-80">
                <Pagination
                  defaultCurrent={10}
                  defaultPageSize={10}
                  total={1000}
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">極小螢幕（顯示 3 個頁碼）</h4>
              <div className="w-64">
                <Pagination
                  defaultCurrent={10}
                  defaultPageSize={10}
                  total={1000}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>響應式規則：</strong>
          <ul>
            <li>
              <strong>&lt; 480px：</strong>顯示 3 個頁碼
            </li>
            <li>
              <strong>480px - 640px：</strong>顯示 5 個頁碼
            </li>
            <li>
              <strong>640px - 768px：</strong>顯示 7 個頁碼
            </li>
            <li>
              <strong>&gt; 768px：</strong>顯示 9 個頁碼
            </li>
          </ul>
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🚫 禁用狀態</h2>
        <p className="component-docs-section-description">可以禁用整個分頁組件：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">禁用的分頁</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* 自訂總數顯示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 自訂總數顯示</h2>
        <p className="component-docs-section-description">
          可以透過 showTotalText 函數自訂總數的顯示方式：
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">預設總數顯示</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['prev', 'pages', 'next', 'total']}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂總數顯示</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['prev', 'pages', 'next', 'total']}
                showTotalText={(total, range) => (
                  <span className="text-primary font-semibold">
                    第 {range[0]}-{range[1]} 項 / 共 {total} 項
                  </span>
                )}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">簡潔總數顯示</h4>
              <Pagination
                defaultCurrent={3}
                defaultPageSize={20}
                total={500}
                layout={['prev', 'pages', 'next', 'total']}
                showTotalText={(total) => `總計 ${total} 項`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Pagination } from 'eonui';

// 基本分頁
<Pagination
  total={500}
  defaultCurrent={1}
  defaultPageSize={10}
/>

// 顯示總數
<Pagination
  total={500}
  defaultCurrent={1}
  defaultPageSize={10}
  layout={['prev', 'pages', 'next', 'total']}
/>

// 完整功能
<Pagination
  total={1000}
  defaultCurrent={1}
  defaultPageSize={20}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
  pageSizeOptions={[10, 20, 50, 100]}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">受控組件</h4>
          <pre className="component-docs-code">{`// 受控分頁
const [current, setCurrent] = useState(1);
const [pageSize, setPageSize] = useState(10);

const handleChange = (page: number, size: number) => {
  setCurrent(page);
  setPageSize(size);
  // 處理資料載入邏輯
  fetchData(page, size);
};

<Pagination
  current={current}
  pageSize={pageSize}
  total={total}
  onChange={handleChange}
  layout={['total', 'sizes', 'prev', 'pages', 'next']}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">自訂佈局和樣式</h4>
          <pre className="component-docs-code">{`// 自訂佈局順序
<Pagination
  total={500}
  layout={['prev', 'pages', 'next', 'jumper', 'sizes', 'total']}
  pageNumberStyle="plain"
  prevText="上一頁"
  nextText="下一頁"
/>

// 自訂總數顯示
<Pagination
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
  showTotalText={(total, range) => (
    <span className="text-primary">
      顯示 {range[0]} 到 {range[1]} 項，共 {total} 項
    </span>
  )}
/>

// 不同大小
<Pagination total={500} size="sm" />
<Pagination total={500} size="md" />
<Pagination total={500} size="lg" />`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">事件處理</h4>
          <pre className="component-docs-code">{`// 統一的變更處理（頁碼和每頁數量變更都會觸發）
const handleChange = (page: number, pageSize: number) => {
  console.log('分頁變更:', { page, pageSize });
  // 處理資料載入邏輯
  fetchData(page, pageSize);
};

<Pagination
  total={1000}
  onChange={handleChange}
  layout={['prev', 'pages', 'next', 'sizes']}
/>

// 實際使用範例
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const handlePaginationChange = async (page: number, size: number) => {
  setLoading(true);
  try {
    const result = await fetchUserData(page, size);
    setData(result.data);
    setCurrentPage(page);
    setPageSize(size);
  } catch (error) {
    console.error('載入資料失敗:', error);
  } finally {
    setLoading(false);
  }
};

<Pagination
  current={currentPage}
  pageSize={pageSize}
  total={totalCount}
  onChange={handlePaginationChange}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Pagination 組件的所有功能，可以在你的項目中開始使用了！
          這個分頁組件提供了完整的分頁功能和靈活的配置選項，適用於各種資料展示場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <PaginationDocs />,
    },
  },
  argTypes: {
    current: {
      control: { type: 'number', min: 1 },
      description: '當前頁碼（受控組件）',
      table: {
        type: { summary: 'number' },
      },
    },
    defaultCurrent: {
      control: { type: 'number', min: 1 },
      description: '預設頁碼（非受控組件）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    pageSize: {
      control: { type: 'number', min: 1 },
      description: '每頁資料數量（受控組件）',
      table: {
        type: { summary: 'number' },
      },
    },
    defaultPageSize: {
      control: { type: 'number', min: 1 },
      description: '預設每頁資料數量（非受控組件）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    total: {
      control: { type: 'number', min: 0 },
      description: '總資料數量',
      table: {
        type: { summary: 'number' },
      },
    },
    pageSizeOptions: {
      control: { type: 'object' },
      description: '每頁資料數量選項',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[10, 20, 50, 100]' },
      },
    },
    layout: {
      control: { type: 'object' },
      description: '佈局配置，控制各功能區塊的顯示和順序',
      table: {
        type: { summary: 'PaginationLayoutItem[]' },
        defaultValue: { summary: "['prev', 'pages', 'next']" },
      },
    },
    pageNumberStyle: {
      control: { type: 'select' },
      options: ['plain', 'background'],
      description: '頁碼樣式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'background' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '分頁組件大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
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
    prevText: {
      control: { type: 'text' },
      description: '上一頁文字或圖示',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    nextText: {
      control: { type: 'text' },
      description: '下一頁文字或圖示',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onChange: {
      action: 'changed',
      description: '頁碼或每頁數量變更時的回調',
      table: {
        type: { summary: '(page: number, pageSize: number) => void' },
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
    total: 500,
    defaultCurrent: 1,
    defaultPageSize: 10,
    layout: ['prev', 'pages', 'next'],
    pageNumberStyle: 'background',
    size: 'md',
    disabled: false,
  },
};

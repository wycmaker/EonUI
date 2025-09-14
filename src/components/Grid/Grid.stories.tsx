import React from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Grid } from './Grid';
import '../../styles/component-docs.css';

const GridDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Grid 網格</h1>
        <p className="component-docs-description">
          基於 CSS Grid 系統的強大網格佈局組件，提供靈活且語義化的網格解決方案。
          支援響應式設計、精確的列控制和多種對齊方式，完美解決了動態 CSS 類別的打包問題。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整網格的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 基本使用 */}
      <div className="component-docs-section">
        <CodeExample
          title="🏗️ 基本網格佈局"
          description="Grid 組件使用 CSS Grid 系統，通過 container 和 item 配合使用："
          code={`// 基本 12 列網格
<Grid container cols={12} gap={4}>
  <Grid item span={4}>內容 1</Grid>
  <Grid item span={4}>內容 2</Grid>
  <Grid item span={4}>內容 3</Grid>
</Grid>`}
        >
          <Grid
            container
            cols={12}
            gap={4}
          >
            <Grid
              item
              span={4}
            >
              <div className="bg-blue-100 border border-blue-300 p-4 text-center">span=4</div>
            </Grid>
            <Grid
              item
              span={4}
            >
              <div className="bg-green-100 border border-green-300 p-4 text-center">span=4</div>
            </Grid>
            <Grid
              item
              span={4}
            >
              <div className="bg-red-100 border border-red-300 p-4 text-center">span=4</div>
            </Grid>
          </Grid>
        </CodeExample>
      </div>

      {/* 響應式佈局 */}
      <div className="component-docs-section">
        <CodeExample
          title="📱 響應式網格"
          description="使用 spanResponsive 屬性實現響應式佈局，在不同螢幕尺寸下自動調整："
          code={`// 響應式網格佈局
<Grid container cols={12} gap={4}>
  <Grid
    item
    span={12}
    spanResponsive={{
      sm: 6,   // 平板占一半
      md: 4    // 桌面占三分之一
    }}
  >
    響應式內容
  </Grid>
</Grid>`}
        >
          <div className="mb-2">
            <p className="text-sm text-gray-600">
              💡 調整瀏覽器寬度來查看響應式效果：手機 (12/12) → 平板 (6/12) → 桌面 (4/12)
            </p>
          </div>
          <Grid
            container
            cols={12}
            gap={4}
          >
            <Grid
              item
              span={12}
              spanResponsive={{
                sm: 6,
                md: 4,
              }}
            >
              <div className="bg-purple-100 border border-purple-300 p-4 text-center">
                <div className="font-medium">響應式欄位 1</div>
                <div className="text-xs text-gray-600 mt-1">span=12, sm:6, md:4</div>
              </div>
            </Grid>
            <Grid
              item
              span={12}
              spanResponsive={{
                sm: 6,
                md: 4,
              }}
            >
              <div className="bg-yellow-100 border border-yellow-300 p-4 text-center">
                <div className="font-medium">響應式欄位 2</div>
                <div className="text-xs text-gray-600 mt-1">span=12, sm:6, md:4</div>
              </div>
            </Grid>
            <Grid
              item
              span={12}
              spanResponsive={{
                sm: 6,
                md: 4,
              }}
            >
              <div className="bg-indigo-100 border border-indigo-300 p-4 text-center">
                <div className="font-medium">響應式欄位 3</div>
                <div className="text-xs text-gray-600 mt-1">span=12, sm:6, md:4</div>
              </div>
            </Grid>
          </Grid>
        </CodeExample>
      </div>

      {/* 不同列數配置 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔢 不同列數配置"
          description="Grid 支援 1-12 列的靈活配置，適應不同的佈局需求："
          code={`// 6 列網格
<Grid container cols={6} gap={2}>
  <Grid item span={2}>項目 1</Grid>
  <Grid item span={2}>項目 2</Grid>
  <Grid item span={2}>項目 3</Grid>
</Grid>

// 4 列網格
<Grid container cols={4} gap={3}>
  <Grid item span={1}>1</Grid>
  <Grid item span={1}>1</Grid>
  <Grid item span={2}>span=2</Grid>
</Grid>`}
        >
          <div className="space-y-6">
            {/* 6 列網格 */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">6 列網格</h4>
              <Grid
                container
                cols={6}
                gap={2}
              >
                <Grid
                  item
                  span={2}
                >
                  <div className="bg-red-100 border border-red-300 p-3 text-center text-sm">
                    span=2
                  </div>
                </Grid>
                <Grid
                  item
                  span={2}
                >
                  <div className="bg-blue-100 border border-blue-300 p-3 text-center text-sm">
                    span=2
                  </div>
                </Grid>
                <Grid
                  item
                  span={2}
                >
                  <div className="bg-green-100 border border-green-300 p-3 text-center text-sm">
                    span=2
                  </div>
                </Grid>
              </Grid>
            </div>

            {/* 4 列網格 */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-gray-700">4 列網格</h4>
              <Grid
                container
                cols={4}
                gap={3}
              >
                <Grid
                  item
                  span={1}
                >
                  <div className="bg-orange-100 border border-orange-300 p-3 text-center text-sm">
                    1
                  </div>
                </Grid>
                <Grid
                  item
                  span={1}
                >
                  <div className="bg-pink-100 border border-pink-300 p-3 text-center text-sm">
                    1
                  </div>
                </Grid>
                <Grid
                  item
                  span={2}
                >
                  <div className="bg-cyan-100 border border-cyan-300 p-3 text-center text-sm">
                    span=2
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 精確位置控制 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎯 精確位置控制"
          description="使用 colStart 和 colEnd 屬性精確控制項目在網格中的位置："
          code={`// 精確位置控制
<Grid container cols={12} gap={2}>
  <Grid item colStart={1} colEnd={4}>
    佔據第 1-3 列
  </Grid>
  <Grid item colStart={6} colEnd={10}>
    佔據第 6-9 列
  </Grid>
  <Grid item colStart={11} colEnd={13}>
    佔據第 11-12 列
  </Grid>
</Grid>`}
        >
          <Grid
            container
            cols={12}
            gap={2}
          >
            <Grid
              item
              colStart={1}
              colEnd={4}
            >
              <div className="bg-violet-100 border border-violet-300 p-3 text-center text-sm">
                colStart=1, colEnd=4
              </div>
            </Grid>
            <Grid
              item
              colStart={6}
              colEnd={10}
            >
              <div className="bg-rose-100 border border-rose-300 p-3 text-center text-sm">
                colStart=6, colEnd=10
              </div>
            </Grid>
            <Grid
              item
              colStart={11}
              colEnd={13}
            >
              <div className="bg-amber-100 border border-amber-300 p-3 text-center text-sm">
                colStart=11, colEnd=13
              </div>
            </Grid>
          </Grid>
        </CodeExample>
      </div>

      {/* 對齊方式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 對齊方式"
          description="Grid 支援多種對齊方式，包括 justifyItems 和 alignItems："
          code={`// 置中對齊
<Grid
  container
  cols={3}
  gap={4}
  justifyItems="center"
  alignItems="center"
>
  <Grid item span={1}>內容 1</Grid>
  <Grid item span={1}>內容 2</Grid>
  <Grid item span={1}>內容 3</Grid>
</Grid>`}
        >
          <Grid
            container
            cols={3}
            gap={4}
            justifyItems="center"
            alignItems="center"
          >
            <Grid
              item
              span={1}
            >
              <div className="bg-emerald-100 border border-emerald-300 p-2 text-center text-sm">
                置中
              </div>
            </Grid>
            <Grid
              item
              span={1}
            >
              <div className="bg-teal-100 border border-teal-300 p-4 text-center text-sm">
                不同高度
              </div>
            </Grid>
            <Grid
              item
              span={1}
            >
              <div className="bg-lime-100 border border-lime-300 p-3 text-center text-sm">
                對齊測試
              </div>
            </Grid>
          </Grid>
        </CodeExample>
      </div>

      {/* API 參考 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 API 參考</h2>

        <div className="overflow-x-auto">
          <table className="component-docs-api-table">
            <thead>
              <tr>
                <th>屬性</th>
                <th>類型</th>
                <th>預設值</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>container</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>是否為網格容器</td>
              </tr>
              <tr>
                <td>
                  <code>cols</code>
                </td>
                <td>
                  <code>1-12</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>網格列數（僅容器使用）</td>
              </tr>
              <tr>
                <td>
                  <code>item</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>是否為網格項目</td>
              </tr>
              <tr>
                <td>
                  <code>span</code>
                </td>
                <td>
                  <code>1-12</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>跨越的列數（僅項目使用）</td>
              </tr>
              <tr>
                <td>
                  <code>spanResponsive</code>
                </td>
                <td>
                  <code>ResponsiveConfig</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>響應式跨越配置</td>
              </tr>
              <tr>
                <td>
                  <code>gap</code>
                </td>
                <td>
                  <code>0-12</code>
                </td>
                <td>
                  <code>0</code>
                </td>
                <td>網格間距</td>
              </tr>
              <tr>
                <td>
                  <code>colStart</code>
                </td>
                <td>
                  <code>1-13</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>起始列位置（僅項目使用）</td>
              </tr>
              <tr>
                <td>
                  <code>colEnd</code>
                </td>
                <td>
                  <code>1-13</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>結束列位置（僅項目使用）</td>
              </tr>
              <tr>
                <td>
                  <code>justifyItems</code>
                </td>
                <td>
                  <code>'start' | 'center' | 'end' | 'stretch'</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>水平對齊方式（僅容器使用）</td>
              </tr>
              <tr>
                <td>
                  <code>alignItems</code>
                </td>
                <td>
                  <code>'start' | 'center' | 'end' | 'stretch'</code>
                </td>
                <td>
                  <code>-</code>
                </td>
                <td>垂直對齊方式（僅容器使用）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <GridDocs />,
    },
  },
  argTypes: {
    container: {
      control: 'boolean',
      description: '是否為網格容器',
    },
    cols: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '網格列數 (僅容器使用)',
    },
    item: {
      control: 'boolean',
      description: '是否為網格項目',
    },
    span: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '跨越的列數 (僅項目使用)',
    },
    gap: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
      description: '網格間距',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: '垂直對齊方式',
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: '水平對齊方式',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的 <Primary />
export const Docs: Story = {
  args: {
    container: true,
    cols: 12,
    gap: 4,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid
        item
        span={4}
      >
        <div className="bg-blue-100 border border-blue-300 p-4 text-center rounded">欄位 1</div>
      </Grid>
      <Grid
        item
        span={4}
      >
        <div className="bg-green-100 border border-green-300 p-4 text-center rounded">欄位 2</div>
      </Grid>
      <Grid
        item
        span={4}
      >
        <div className="bg-red-100 border border-red-300 p-4 text-center rounded">欄位 3</div>
      </Grid>
    </Grid>
  ),
};

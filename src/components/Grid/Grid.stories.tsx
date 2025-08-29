import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from './Grid';

import '../../styles/component-docs.css';
// 展示組件
const GridShowcase = () => {
  return (
    <div className="space-y-8">
      {/* 基本 12 等分展示 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">12 等分網格系統</h3>
        <Grid
          container
          spacing={0}
          wrap={false}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <Grid
              key={i}
              item
              xs={1}
            >
              <div className="bg-blue-100 border border-blue-300 p-2 text-center text-xs">
                {i + 1}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* 響應式佈局展示 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">響應式佈局</h3>
        <p className="text-sm text-gray-600 mb-2">
          📱 縮小螢幕寬度來測試響應式效果：
          <br />• 手機 (&lt;640px): 每個項目占滿整行 (w-full)
          <br />• 平板 (≥640px): 每個項目占一半 (sm:w-6/12)
          <br />• 桌面 (≥768px): 每個項目占三分之一 (md:w-4/12)
        </p>
        <Grid
          container
          spacing={0}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div className="bg-green-100 border border-green-300 p-4 text-center">
              <div className="font-medium">響應式欄位 1</div>
              <div className="text-sm text-gray-600 mt-1">xs=12, sm=6, md=4</div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div className="bg-green-100 border border-green-300 p-4 text-center">
              <div className="font-medium">響應式欄位 2</div>
              <div className="text-sm text-gray-600 mt-1">xs=12, sm=6, md=4</div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div className="bg-green-100 border border-green-300 p-4 text-center">
              <div className="font-medium">響應式欄位 3</div>
              <div className="text-sm text-gray-600 mt-1">xs=12, sm=6, md=4</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

// 對齊方式展示
const AlignmentShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">垂直對齊</h3>
        <div className="space-y-4">
          {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
            <div key={align}>
              <h4 className="font-medium mb-2">alignItems="{align}"</h4>
              <Grid
                container
                spacing={0}
                alignItems={align}
                style={{ height: '120px' }}
              >
                <Grid
                  item
                  xs={4}
                >
                  <div className="bg-red-100 border border-red-300 p-2 h-8">短內容</div>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <div className="bg-blue-100 border border-blue-300 p-2 h-16">中等高度內容</div>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <div className="bg-green-100 border border-green-300 p-2 h-20">
                    較高的內容區域
                  </div>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 整合文檔組件
const GridDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Grid 網格系統</h1>
        <p className="component-docs-description">
          EonUI 的響應式網格系統，基於 12 等分設計，支援 6 個響應式斷點。
          提供靈活的佈局選項，適用於各種設計需求。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Grid 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 基本網格展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 基本網格</h2>
        <p className="component-docs-section-description">
          12 等分網格系統，支援靈活的欄位分配和響應式設計。
        </p>

        <div className="component-docs-showcase">
          <GridShowcase />
        </div>
      </div>

      {/* 對齊方式展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 對齊方式</h2>
        <p className="component-docs-section-description">
          支援多種垂直和水平對齊方式，適應不同的佈局需求。
        </p>

        <div className="component-docs-showcase">
          <AlignmentShowcase />
        </div>
      </div>

      {/* 順序展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 順序</h2>
        <p className="component-docs-section-description">支援多種順序，適應不同的佈局需求。</p>

        <div className="component-docs-showcase">
          <Grid
            container
            spacing={0}
          >
            <Grid
              item
              xs={12}
              md={3}
              order={{ xs: 2, md: 1 }}
            >
              <div className="bg-red-100 border border-red-300 p-2 text-center">
                側邊欄（桌面第1位，手機第2位）
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              order={{ xs: 1, md: 2 }}
            >
              <div className="bg-blue-100 border border-blue-300 p-2 text-center">
                主要內容（桌面第2位，手機第1位）
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Grid } from 'eonui';

// 基本網格佈局
<Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 1</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 2</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 3</div>
  </Grid>
</Grid>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">置中容器用法</h4>
          <pre className="component-docs-code">{`import { Grid } from 'eonui';

// 置中容器
<Grid container spacing={4} alignItems="center" maxWidth="lg" centered>
  <Grid item xs={12} md={6}>
    <div>左側內容</div>
  </Grid>
  <Grid item xs={12} md={6}>
    <div>右側內容</div>
  </Grid>
</Grid>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">項目順序</h4>
          <pre className="component-docs-code">{`// 項目順序控制
<Grid container spacing={2}>
  <Grid item xs={4} order={{ xs: 2 }}>第二個顯示</Grid>
  <Grid item xs={4} order={{ xs: 1 }}>第一個顯示</Grid>
  <Grid item xs={4} order={{ xs: 3 }}>第三個顯示</Grid>
</Grid>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">響應式斷點</h4>
          <pre className="component-docs-code">{`// 響應式斷點說明
xs: 0px+     (預設，所有螢幕)
sm: 576px+   (小螢幕)
md: 768px+   (中等螢幕)
lg: 1024px+  (大螢幕)
xl: 1280px+  (超大螢幕)
xxl: 1536px+ (超超大螢幕)

// 響應式佈局範例
<Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    響應式欄位
  </Grid>
</Grid>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🎯 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Grid 網格系統的所有功能，可以在你的項目中開始使用了！
          記住使用響應式設計來適應不同的螢幕尺寸。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <GridDocs />,
    },
  },
  argTypes: {
    container: {
      control: { type: 'boolean' },
      description: '是否為網格容器',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    item: {
      control: { type: 'boolean' },
      description: '是否為網格項目',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    spacing: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12],
      description: '欄位間距（僅容器使用）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    xs: {
      control: { type: 'number', min: 1, max: 12 },
      description: '所有斷點的欄數 (1-12)（僅項目使用）',
    },
    sm: {
      control: { type: 'number', min: 1, max: 12 },
      description: '小螢幕斷點的欄數 (≥576px)（僅項目使用）',
    },
    md: {
      control: { type: 'number', min: 1, max: 12 },
      description: '中等螢幕斷點的欄數 (≥768px)（僅項目使用）',
    },
    lg: {
      control: { type: 'number', min: 1, max: 12 },
      description: '大螢幕斷點的欄數 (≥1024px)（僅項目使用）',
    },
    xl: {
      control: { type: 'number', min: 1, max: 12 },
      description: '超大螢幕斷點的欄數 (≥1280px)（僅項目使用）',
    },
    xxl: {
      control: { type: 'number', min: 1, max: 12 },
      description: '超超大螢幕斷點的欄數 (≥1536px)（僅項目使用）',
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: '垂直對齊方式（僅容器使用）',
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: '水平對齊方式（僅容器使用）',
    },
    wrap: {
      control: { type: 'boolean' },
      description: '是否換行（僅容器使用）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full', 'none'],
      description: '容器最大寬度（僅容器使用）',
    },
    centered: {
      control: { type: 'boolean' },
      description: '是否置中（僅容器使用）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: false,
      description: '子元素',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  args: {
    container: true,
    spacing: 4,
    alignItems: 'stretch',
    justifyContent: 'start',
    wrap: true,
    centered: false,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <div className="bg-blue-100 border border-blue-300 p-4 text-center h-20 flex items-center justify-center">
          欄位 1
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <div className="bg-green-100 border border-green-300 p-4 text-center h-16 flex items-center justify-center">
          欄位 2
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
      >
        <div className="bg-purple-100 border border-purple-300 p-4 text-center h-24 flex items-center justify-center">
          欄位 3
        </div>
      </Grid>
    </Grid>
  ),
};

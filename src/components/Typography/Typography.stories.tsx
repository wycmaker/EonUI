import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Typography } from './Typography';
import '../../styles/component-docs.css';

// 展示各種變體的範例組件
const TypographyShowcase = () => {
  return (
    <div className="space-y-8">
      {/* 標題層級 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">標題層級</h3>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H1</span>
            <Typography variant="h1">Typography 6rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H2</span>
            <Typography variant="h2">Typography 4.8rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H3</span>
            <Typography variant="h3">Typography 3.75rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H4</span>
            <Typography variant="h4">Typography 3rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H5</span>
            <Typography variant="h5">Typography 2.25rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">H6</span>
            <Typography variant="h6">Typography 1.75rem</Typography>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-gray-500 w-16">Content</span>
            <Typography variant="content">Content 1rem - 這是標準的內文字體大小</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

// 顏色展示組件
const ColorShowcase = () => {
  const colors = [
    { name: 'Default', value: 'default' as const },
    { name: 'Primary', value: 'primary' as const },
    { name: 'Secondary', value: 'secondary' as const },
    { name: 'Success', value: 'success' as const },
    { name: 'Warning', value: 'warning' as const },
    { name: 'Error', value: 'error' as const },
    { name: 'Muted', value: 'muted' as const },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {colors.map((color) => (
        <div
          key={color.value}
          className="flex items-center gap-3"
        >
          <span className="text-sm text-gray-500 w-20">{color.name}</span>
          <Typography
            color={color.value}
            as="span"
          >
            範例文字 - {color.name} 顏色
          </Typography>
        </div>
      ))}
    </div>
  );
};

// 字體粗細展示
const WeightShowcase = () => {
  const weights = [
    { name: 'Normal', value: 'normal' as const },
    { name: 'Medium', value: 'medium' as const },
    { name: 'Semibold', value: 'semibold' as const },
    { name: 'Bold', value: 'bold' as const },
  ];

  return (
    <div className="space-y-3">
      {weights.map((weight) => (
        <div
          key={weight.value}
          className="flex items-center gap-4"
        >
          <span className="text-sm text-gray-500 w-20">{weight.name}</span>
          <Typography weight={weight.value}>字體粗細展示 - {weight.name}</Typography>
        </div>
      ))}
    </div>
  );
};

// 文字裝飾展示
const DecorationShowcase = () => {
  return (
    <div className="space-y-3">
      <Typography italic>斜體文字範例</Typography>
      <Typography underline>底線文字範例</Typography>
      <Typography strikethrough>刪除線文字範例</Typography>
      <Typography
        italic
        underline
        weight="semibold"
        color="primary"
        as="span"
      >
        組合裝飾：斜體 + 底線 + 粗體 + 主色
      </Typography>
    </div>
  );
};

// 文字處理展示
const TextHandlingShowcase = () => {
  const longText =
    '這是一段很長的文字，用來展示文字處理功能。當文字過長時，可以使用 truncate 來截斷，或使用 clamp 來限制行數，也可以使用 noWrap 來防止換行。';

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-medium mb-2">文字截斷 (truncate)</h4>
        <div className="max-w-xs border p-3 rounded">
          <Typography truncate>{longText}</Typography>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">多行截斷 (clamp={2})</h4>
        <div className="max-w-xs border p-3 rounded">
          <Typography clamp={2}>{longText}</Typography>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">不換行 (noWrap)</h4>
        <div className="max-w-xs border p-3 rounded overflow-hidden">
          <Typography noWrap>{longText}</Typography>
        </div>
      </div>
    </div>
  );
};

const TypographyDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Typography 字體排版</h1>
        <p className="component-docs-description">
          EonUI 的字體排版系統，提供完整的標題、內文和輔助文字樣式。
          基於設計系統的字體規範，確保一致的視覺層次和閱讀體驗。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Typography 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 字體層級展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 字體大小層級範例"
          description="完整的字體大小層級，從 H1 到輔助文字："
          code={`// 完整的字體大小層級
<Typography as="h1">H1 主標題</Typography>
<Typography as="h2">H2 次標題</Typography>
<Typography as="h3">H3 三級標題</Typography>
<Typography as="h4">H4 四級標題</Typography>
<Typography as="h5">H5 五級標題</Typography>
<Typography as="h6">H6 六級標題</Typography>
<Typography>標準內文</Typography>
<Typography size="sm">小型文字</Typography>
<Typography size="xs">輔助文字</Typography>`}
        >
          <TypographyShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>使用建議：</strong>
          <ul>
            <li>
              <strong>H1-H3：</strong>主要標題，用於頁面和區塊標題
            </li>
            <li>
              <strong>H4-H6：</strong>次要標題，用於內容區塊的小標題
            </li>
            <li>
              <strong>Content：</strong>標準內文，用於主要文字內容
            </li>
          </ul>
        </div>
      </div>

      {/* 顏色選項 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 顏色選項範例"
          description="不同語義化顏色的Typography："
          code={`// 不同語義化顏色的Typography
<Typography color="default">預設文字顏色</Typography>
<Typography color="primary">主要品牌色</Typography>
<Typography color="secondary">次要品牌色</Typography>
<Typography color="success">成功狀態色</Typography>
<Typography color="warning">警告狀態色</Typography>
<Typography color="error">錯誤狀態色</Typography>
<Typography color="muted">次要文字色</Typography>`}
        >
          <ColorShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>顏色使用指南：</strong>
          <ul>
            <li>
              <strong>Default：</strong>標準文字顏色，適用於大部分內容
            </li>
            <li>
              <strong>Primary/Secondary：</strong>品牌色，用於重要資訊或連結
            </li>
            <li>
              <strong>Success/Warning/Error：</strong>狀態色，用於反饋資訊
            </li>
            <li>
              <strong>Muted：</strong>次要文字，用於輔助說明或禁用狀態
            </li>
          </ul>
        </div>
      </div>

      {/* 字體粗細 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 字體粗細範例"
          description="不同粗細程度的文字："
          code={`// 不同粗細程度的文字
<Typography weight="normal">Normal 正常粗細</Typography>
<Typography weight="medium">Medium 中等粗細</Typography>
<Typography weight="semibold">Semibold 半粗體</Typography>
<Typography weight="bold">Bold 粗體</Typography>`}
        >
          <WeightShowcase />
        </CodeExample>
      </div>

      {/* 文字裝飾 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 文字裝飾範例"
          description="不同的文字裝飾效果："
          code={`// 不同的文字裝飾效果
<Typography italic>斜體文字 (italic)</Typography>
<Typography underline>底線文字 (underline)</Typography>
<Typography lineThrough>刪除線文字 (line-through)</Typography>
<Typography italic underline>斜體加底線</Typography>
<Typography weight="bold" underline>粗體加底線</Typography>`}
        >
          <DecorationShowcase />
        </CodeExample>

        {/* 文字處理 */}
        <div className="component-docs-section">
          <CodeExample
            title="🔄 文字處理範例"
            description="不同的文字處理方式："
            code={`// 不同的文字處理方式
<Typography truncate>
  這是一段很長的文字，會在超出容器寬度時被截斷並顯示省略號...
</Typography>

<Typography noWrap>
  這段文字不會換行，會保持在同一行顯示
</Typography>

<Typography>
  這是正常的文字，會根據容器寬度自動換行，
  當文字超出容器寬度時會自動換到下一行繼續顯示。
</Typography>`}
          >
            <TextHandlingShowcase />
          </CodeExample>
        </div>
      </div>

      {/* 對齊方式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 文字對齊範例"
          description="不同的文字對齊方式："
          code={`// 不同的文字對齊方式
// 靠左對齊（預設）
<Typography align="left">靠左對齊的文字內容</Typography>

// 置中對齊
<Typography align="center">置中對齊的文字內容</Typography>

// 靠右對齊
<Typography align="right">靠右對齊的文字內容</Typography>

// 兩端對齊
<Typography align="justify">
  兩端對齊的文字內容，會自動調整間距使左右兩端都對齊容器邊緣
</Typography>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2 text-gray-600">靠左對齊 (left)</h4>
              <div className="border p-6 rounded bg-gray-50">
                <Typography align="left">
                  這是靠左對齊的文字範例。在大多數語言中，這是最常見的對齊方式。
                  文字會從容器的左邊緣開始排列，形成左邊整齊、右邊不規則的效果。
                  這種對齊方式閱讀起來最自然，適合大部分的內容展示。
                </Typography>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-gray-600">置中對齊 (center)</h4>
              <div className="border p-6 rounded bg-gray-50">
                <Typography align="center">
                  這是置中對齊的文字範例。文字會在容器的中央位置對齊，
                  兩邊保持相等的邊距。這種對齊方式常用於標題、引用文字，
                  或需要強調的重要內容，能夠吸引讀者的注意力。
                </Typography>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-gray-600">靠右對齊 (right)</h4>
              <div className="border p-6 rounded bg-gray-50">
                <Typography align="right">
                  這是靠右對齊的文字範例。文字會從容器的右邊緣開始排列，
                  形成右邊整齊、左邊不規則的效果。在某些設計中，
                  這種對齊方式可以創造特殊的視覺效果，或用於特定的版面設計需求。
                </Typography>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-gray-600">兩端對齊 (justify)</h4>
              <div className="border p-6 rounded bg-gray-50">
                <Typography align="justify">
                  這是兩端對齊的文字範例。文字會在容器中均勻分布，使得每一行的左右兩端都對齊容器的邊緣。
                  這種對齊方式會自動調整單字或字元之間的間距，創造出整齊劃一的視覺效果。
                  兩端對齊特別適用於報紙、雜誌或書籍等正式出版物，能夠提供專業、整潔的排版外觀。
                  不過需要注意的是，在較短的行或較寬的容器中，可能會產生不自然的間距。
                </Typography>
              </div>
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Typography } from 'eonui';

// 基本標題
<Typography variant="h1">頁面主標題</Typography>
<Typography variant="h2">區塊標題</Typography>
<Typography variant="h3">小節標題</Typography>

// 內文文字
<Typography variant="content">
  這是標準的內文段落，適用於主要文字內容。
</Typography>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 視覺與語義分離（謹慎使用）
<Typography variant="h1" as="h2">
  視覺上是 H1 樣式，但語義上是 H2 元素
</Typography>

// 預設會自動選擇對應的 HTML 元素
<Typography variant="h1">  {/* 自動使用 <h1> */}
  這會是一個 h1 元素
</Typography>
<Typography variant="content">  {/* 自動使用 <p> */}
  這會是一個 p 元素
</Typography>

// 組合多種屬性
<Typography
  variant="h3"
  color="primary"
  weight="bold"
  align="center"
  underline
>
  強調標題
</Typography>

// 文字處理
<Typography truncate className="max-w-xs">
  過長的文字會被截斷...
</Typography>

<Typography clamp={3}>
  這段文字最多顯示三行，
  超出的部分會被隱藏，
  並在末尾顯示省略號，
  適用於卡片或列表項目的描述文字。
</Typography>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">📝 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Typography 組件的所有功能，可以在你的項目中開始使用了！
          記住要保持文字層級的一致性，並考慮可及性和使用者體驗。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <TypographyDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'content'],
      description: 'Typography 變體，決定字體大小和樣式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'content' },
      },
    },
    as: {
      control: { type: 'select' },
      options: [undefined, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'HTML 元素類型（可選，預設自動根據 variant 選擇）。用於視覺與語義分離。',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined (auto)' },
      },
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'muted'],
      description: '文字顏色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: '文字對齊方式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: '字體粗細',
      table: {
        type: { summary: 'string' },
      },
    },
    italic: {
      control: { type: 'boolean' },
      description: '是否為斜體',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    underline: {
      control: { type: 'boolean' },
      description: '是否有底線',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    strikethrough: {
      control: { type: 'boolean' },
      description: '是否為刪除線',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    lineHeight: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'relaxed', 'loose'],
      description: '行高調整',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    letterSpacing: {
      control: { type: 'select' },
      options: ['tight', 'normal', 'wide', 'wider'],
      description: '字間距調整',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    truncate: {
      control: { type: 'boolean' },
      description: '是否截斷文字（單行）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clamp: {
      control: { type: 'number', min: 1, max: 20 },
      description: '多行截斷的行數（支援 1-20 行）',
      table: {
        type: { summary: 'number' },
      },
    },
    noWrap: {
      control: { type: 'boolean' },
      description: '是否不換行',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '文字內容',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的互動式範例
export const Docs: Story = {
  args: {
    variant: 'h3',
    color: 'primary',
    align: 'center',
    children: '這是可以即時調整的範例文字',
  },
};

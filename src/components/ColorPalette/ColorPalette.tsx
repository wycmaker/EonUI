import React from 'react';

import { cn } from '@/utils/cn';

// 顏色系統定義
const brandColors = [
  {
    name: 'Primary',
    description: '主要品牌色，用於主要按鈕、連結和重要元素',
    colors: [
      { name: 'Light', class: 'bg-primary-light', css: '--color-primary-light' },
      { name: 'Default', class: 'bg-primary', css: '--color-primary' },
      { name: 'Dark', class: 'bg-primary-dark', css: '--color-primary-dark' },
    ],
  },
  {
    name: 'Secondary',
    description: '輔助色，用於次要按鈕和裝飾元素',
    colors: [
      { name: 'Light', class: 'bg-secondary-light', css: '--color-secondary-light' },
      { name: 'Default', class: 'bg-secondary', css: '--color-secondary' },
      { name: 'Dark', class: 'bg-secondary-dark', css: '--color-secondary-dark' },
    ],
  },
];

const statusColors = [
  {
    name: 'Info',
    description: '資訊提示色，用於一般資訊提示',
    colors: [
      { name: 'Light', class: 'bg-info-light', css: '--color-info-light' },
      { name: 'Default', class: 'bg-info', css: '--color-info' },
      { name: 'Dark', class: 'bg-info-dark', css: '--color-info-dark' },
    ],
  },
  {
    name: 'Success',
    description: '成功狀態色，用於成功提示和確認操作',
    colors: [
      { name: 'Light', class: 'bg-success-light', css: '--color-success-light' },
      { name: 'Default', class: 'bg-success', css: '--color-success' },
      { name: 'Dark', class: 'bg-success-dark', css: '--color-success-dark' },
    ],
  },
  {
    name: 'Warning',
    description: '警告狀態色，用於警告提示和需要注意的內容',
    colors: [
      { name: 'Light', class: 'bg-warning-light', css: '--color-warning-light' },
      { name: 'Default', class: 'bg-warning', css: '--color-warning' },
      { name: 'Dark', class: 'bg-warning-dark', css: '--color-warning-dark' },
    ],
  },
  {
    name: 'Error',
    description: '錯誤狀態色，用於錯誤提示和危險操作',
    colors: [
      { name: 'Light', class: 'bg-error-light', css: '--color-error-light' },
      { name: 'Default', class: 'bg-error', css: '--color-error' },
      { name: 'Dark', class: 'bg-error-dark', css: '--color-error-dark' },
    ],
  },
];

const grayColors = [
  { name: 'Gray 50', class: 'bg-gray-50', css: '--color-gray-50', textClass: 'text-gray-900' },
  { name: 'Gray 100', class: 'bg-gray-100', css: '--color-gray-100', textClass: 'text-gray-900' },
  { name: 'Gray 200', class: 'bg-gray-200', css: '--color-gray-200', textClass: 'text-gray-900' },
  { name: 'Gray 300', class: 'bg-gray-300', css: '--color-gray-300', textClass: 'text-gray-900' },
  { name: 'Gray 400', class: 'bg-gray-400', css: '--color-gray-400', textClass: 'text-white' },
  { name: 'Gray 500', class: 'bg-gray-500', css: '--color-gray-500', textClass: 'text-white' },
  { name: 'Gray 600', class: 'bg-gray-600', css: '--color-gray-600', textClass: 'text-white' },
  { name: 'Gray 700', class: 'bg-gray-700', css: '--color-gray-700', textClass: 'text-white' },
  { name: 'Gray 800', class: 'bg-gray-800', css: '--color-gray-800', textClass: 'text-white' },
  { name: 'Gray 900', class: 'bg-gray-900', css: '--color-gray-900', textClass: 'text-white' },
  { name: 'Gray 950', class: 'bg-gray-950', css: '--color-gray-950', textClass: 'text-white' },
];

interface ColorSwatchProps {
  name: string;
  className: string;
  cssVar: string;
  textClass?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  name,
  className,
  cssVar,
  textClass = 'text-white',
  size = 'md',
}) => {
  const [hexValue, setHexValue] = React.useState<string>('');

  React.useEffect(() => {
    // 獲取 CSS 變數的實際值
    const root = document.documentElement;
    const value = getComputedStyle(root).getPropertyValue(cssVar);
    setHexValue(value.trim());
  }, [cssVar]);

  const sizeClasses = {
    sm: 'h-12 w-12',
    md: 'h-16 w-16',
    lg: 'h-20 w-20',
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hexValue);
      // 可以添加提示訊息
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={cn(
          sizeClasses[size],
          className,
          'rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-transform hover:scale-105 flex items-center justify-center',
          textClass,
        )}
        onClick={handleCopy}
        title={`點擊複製顏色值: ${hexValue}`}
      >
        <span className="text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
          複製
        </span>
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500 font-mono">{hexValue}</div>
        <div className="text-xs text-gray-400 font-mono">{cssVar}</div>
      </div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  description: string;
  colors: Array<{
    name: string;
    class: string;
    css: string;
    textClass?: string;
  }>;
}

const ColorGroup: React.FC<ColorGroupProps> = ({ title, description, colors }) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {colors.map((color) => (
          <ColorSwatch
            key={color.name}
            name={color.name}
            className={color.class}
            cssVar={color.css}
            textClass={color.textClass}
          />
        ))}
      </div>
    </div>
  );
};

interface ColorPaletteProps {
  className?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ className }) => {
  return (
    <div className={cn('max-w-6xl mx-auto p-6', className)}>
      {/* 標題 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EonUI 設計系統顏色</h1>
        <p className="text-gray-600 text-lg">
          完整的顏色系統，包含品牌色、狀態色和中性色。所有顏色都支援明暗主題切換。
        </p>
      </div>

      {/* 品牌色系 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">品牌色系</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {brandColors.map((group) => (
            <ColorGroup
              key={group.name}
              title={group.name}
              description={group.description}
              colors={group.colors}
            />
          ))}
        </div>
      </section>

      {/* 狀態色系 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">狀態色系</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {statusColors.map((group) => (
            <ColorGroup
              key={group.name}
              title={group.name}
              description={group.description}
              colors={group.colors}
            />
          ))}
        </div>
      </section>

      {/* 中性色系 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">中性色系</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            用於文字、邊框、背景等基礎元素的中性色階。從淺到深提供完整的灰階選擇。
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-11">
          {grayColors.map((color) => (
            <ColorSwatch
              key={color.name}
              name={color.name.replace('Gray ', '')}
              className={color.class}
              cssVar={color.css}
              textClass={color.textClass}
              size="sm"
            />
          ))}
        </div>
      </section>

      {/* 使用說明 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">使用說明</h2>
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">CSS 變數</h3>
            <p className="text-sm text-gray-600 mb-2">
              所有顏色都透過 CSS 變數定義，支援動態主題切換：
            </p>
            <pre className="bg-white p-3 rounded border text-sm font-mono">
              <code>{`/* 使用 CSS 變數 */
.my-element {
  background-color: var(--color-primary);
  color: var(--color-gray-50);
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tailwind 類別</h3>
            <p className="text-sm text-gray-600 mb-2">或者直接使用 Tailwind 類別：</p>
            <pre className="bg-white p-3 rounded border text-sm font-mono">
              <code>{`<!-- 使用 Tailwind 類別 -->
<button class="bg-primary text-white hover:bg-primary-dark">
  主要按鈕
</button>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">最佳實踐</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                • 使用語義化的顏色名稱（primary, success, error）而非具體顏色（blue, green, red）
              </li>
              <li>• 優先使用 default 色調，light 和 dark 用於 hover 或 active 狀態</li>
              <li>• 確保顏色對比度符合 WCAG AA 標準（4.5:1）</li>
              <li>• 在深色背景上使用 light 色調，淺色背景使用 dark 色調</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>自動主題支援：</strong> 所有顏色在深色模式下會自動調整，無需額外設定。
                點擊任何色塊可以複製該顏色的 HEX 值。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { ColorPalette };

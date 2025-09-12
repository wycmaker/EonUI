# 🎨 EonUI 主題自定義指南

EonUI 基於 Tailwind CSS v4 構建，提供了強大且靈活的主題自定義功能。透過 CSS 變數系統，您可以輕鬆地自定義整個設計系統的外觀。

## 🚀 快速開始

### 基本用法

```jsx
// 安裝 EonUI
npm install eonui

// 在您的應用程式中導入樣式和組件
import 'eonui/styles';
import { Button, Input, Modal } from 'eonui';

function App() {
  return (
    <div>
      <Button variant="primary">主要按鈕</Button>
      <Input placeholder="輸入文字" />
    </div>
  );
}
```

### 自定義主題

在您的 CSS 文件中覆蓋 CSS 變數即可改變整個主題：

```css
/* 自定義主題 - 例如企業紅色主題 */
:root {
  --color-primary-500: #dc2626; /* 主要品牌色改為紅色 */
  --color-primary-600: #b91c1c; /* 主要品牌色深色版本 */
  --color-success-500: #059669; /* 成功色改為翠綠色 */
}
```

## 🎯 完整顏色系統

### Primary 主要品牌色

```css
:root {
  /* Primary 完整色階 */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6; /* 主色調 */
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* 向後兼容的命名 */
  --color-primary-light: var(--color-primary-100);
  --color-primary: var(--color-primary-500);
  --color-primary-dark: var(--color-primary-700);
}
```

### Secondary 輔助色

```css
:root {
  --color-secondary-50: #f9fafb;
  --color-secondary-100: #f3f4f6;
  --color-secondary-200: #e5e7eb;
  --color-secondary-300: #d1d5db;
  --color-secondary-400: #9ca3af;
  --color-secondary-500: #6b7280; /* 輔助色主調 */
  --color-secondary-600: #4b5563;
  --color-secondary-700: #374151;
  --color-secondary-800: #1f2937;
  --color-secondary-900: #111827;
  --color-secondary-950: #030712;
}
```

### 狀態色

```css
:root {
  /* Success 成功色 */
  --color-success-500: #22c55e;

  /* Warning 警告色 */
  --color-warning-500: #f59e0b;

  /* Error 錯誤色 */
  --color-error-500: #ef4444;

  /* Info 資訊色 */
  --color-info-500: #0ea5e9;
}
```

## 🌈 主題範例

### 企業藍主題

```css
:root {
  --color-primary-500: #1e40af;
  --color-primary-600: #1d4ed8;
  --color-secondary-500: #374151;
}
```

### 活力橙主題

```css
:root {
  --color-primary-500: #f59e0b;
  --color-primary-600: #d97706;
  --color-secondary-500: #6b7280;
}
```

### 優雅紫主題

```css
:root {
  --color-primary-500: #7c3aed;
  --color-primary-600: #6d28d9;
  --color-secondary-500: #8b5cf6;
}
```

### 現代綠主題

```css
:root {
  --color-primary-500: #10b981;
  --color-primary-600: #059669;
  --color-success-500: #22c55e;
}
```

## 🌙 暗色主題

EonUI 內建了暗色主題支援，您可以透過 CSS 媒體查詢或類別來啟用：

### 自動暗色主題（跟隨系統）

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary-500: #60a5fa; /* 暗色模式下的主色 */
    --color-secondary-500: #9ca3af; /* 暗色模式下的輔助色 */
  }
}
```

### 手動切換暗色主題

```css
[data-theme='dark'] {
  --color-primary-500: #60a5fa;
  --color-secondary-500: #9ca3af;
  --color-gray-50: #111827; /* 反轉背景色 */
  --color-gray-900: #f9fafb; /* 反轉文字色 */
}
```

```jsx
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div data-theme={theme}>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>切換主題</Button>
      {/* 所有 EonUI 組件自動跟隨主題變化 */}
    </div>
  );
}
```

## 🎭 組件級別自定義

您也可以針對特定區域應用不同的主題：

```css
.marketing-section {
  --color-primary-500: #ec4899; /* 營銷區塊用粉色 */
}

.admin-panel {
  --color-primary-500: #374151; /* 管理面板用深灰色 */
}
```

```jsx
<div className="marketing-section">
  <Button variant="primary">營銷按鈕</Button>  {/* 粉色 */}
</div>

<div className="admin-panel">
  <Button variant="primary">管理按鈕</Button>  {/* 深灰色 */}
</div>
```

## ⚙️ 與其他 CSS 框架整合

### 與 Tailwind CSS 專案整合

如果您的專案也使用 Tailwind CSS，建議使用相同版本（v4）以獲得最佳兼容性：

```bash
npm install tailwindcss@4.1.12
```

在您的 `tailwind.config.css` 中：

```css
@import 'eonui/styles';

@theme {
  /* 您的自定義主題變數 */
  --color-primary-500: #your-brand-color;
}
```

### 與 CSS-in-JS 整合

```jsx
import styled from 'styled-components';

const ThemedApp = styled.div`
  --color-primary-500: ${(props) => props.theme.primary};
  --color-secondary-500: ${(props) => props.theme.secondary};
`;

function App() {
  return (
    <ThemeProvider theme={{ primary: '#dc2626', secondary: '#6b7280' }}>
      <ThemedApp>
        <Button variant="primary">按鈕</Button>
      </ThemedApp>
    </ThemeProvider>
  );
}
```

## 🛠️ 進階自定義

### 自定義組件樣式

您可以使用 CSS 變數來自定義組件的內部樣式：

```css
:root {
  /* 自定義按鈕圓角 */
  --button-border-radius: 0.75rem;

  /* 自定義輸入框高度 */
  --input-height: 3rem;

  /* 自定義陰影 */
  --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### 品牌一致性

建立您的品牌色彩系統：

```css
:root {
  /* 品牌主色系 */
  --brand-primary: #your-primary-color;
  --brand-secondary: #your-secondary-color;
  --brand-accent: #your-accent-color;

  /* 應用到 EonUI 變數 */
  --color-primary-500: var(--brand-primary);
  --color-secondary-500: var(--brand-secondary);
  --color-info-500: var(--brand-accent);
}
```

## 📱 響應式主題

針對不同螢幕尺寸應用不同主題：

```css
/* 手機版 - 更緊湊的設計 */
@media (max-width: 768px) {
  :root {
    --spacing-4: 0.75rem; /* 較小的間距 */
    --font-size-base: 0.875rem; /* 較小的字體 */
  }
}

/* 桌面版 - 更寬鬆的設計 */
@media (min-width: 1024px) {
  :root {
    --spacing-4: 1.25rem; /* 較大的間距 */
    --font-size-base: 1rem; /* 標準字體 */
  }
}
```

## 🔧 故障排除

### 常見問題

1. **主題沒有生效**
   - 確保 CSS 變數定義在 `:root` 中
   - 檢查是否正確導入了 `eonui/styles`
   - 確認 CSS 選擇器的優先級

2. **某些組件顏色沒有改變**
   - 檢查組件是否使用了正確的 CSS 變數
   - 嘗試使用瀏覽器開發者工具檢查實際應用的樣式

3. **與其他 CSS 框架衝突**
   - 使用 CSS 命名空間來隔離樣式
   - 調整 CSS 導入順序

### 調試技巧

使用瀏覽器開發者工具檢查 CSS 變數：

```javascript
// 在瀏覽器控制台中檢查當前的 CSS 變數值
getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500');

// 動態修改 CSS 變數進行測試
document.documentElement.style.setProperty('--color-primary-500', '#dc2626');
```

## 🎉 結語

EonUI 的主題系統基於現代 CSS 變數設計，提供了極大的靈活性和可擴展性。無論是簡單的顏色調整還是複雜的品牌定制，都能透過簡潔的 CSS 變數覆蓋來實現。

如有任何問題或建議，歡迎參與我們的開源社群討論！

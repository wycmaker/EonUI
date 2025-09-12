<p>
  <img src="https://github.com/user-attachments/assets/96b75956-4633-4306-b43c-d2b6cd71d78d" alt="login"/>
</p>

[![npm version](https://img.shields.io/npm/v/eonui.svg)](https://www.npmjs.com/package/eonui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
![React >=18](https://img.shields.io/badge/React->=18-brightgreen)

> EonUI 是一套基於 React 的永續、穩定且高度可擴展的 UI Library。

> 結合 Tailwind CSS v4 和 Design Token，助你快速打造一致且客製化的使用者介面。

## 目錄

- [特色](#特色)
- [安裝](#安裝)
- [快速開始](#快速開始)
- [主題自定義](#主題自定義)
- [主要組件](#主要組件)
- [設計理念](#設計理念)
- [貢獻](#貢獻)
- [授權](#授權)

## 特色

- **React 原生支持** — 完全基於 React Function Components 與 Hooks。
- **Tailwind CSS v4 深度整合** — 享受快速、響應式與可定制的樣式體驗。
- **Design Token 支援** — 集中管理顏色、間距、字體等設計變數。
- **模組化組件庫** — Button、Input、Modal 等基礎組件，輕鬆擴展。
- **永續穩定** — 重視長期維護與相容性，適合中大型專案。

## 安裝

使用 npm 或 yarn 安裝：

```bash
npm install eonui
# 或
yarn add eonui
```

## 快速開始

```jsx
import React from 'react';
import { Button } from 'eonui';
import 'eonui/styles'; // 導入 EonUI 樣式

function App() {
  return (
    <div className="p-4">
      <Button
        variant="primary"
        onClick={() => alert('Hello EonUI!')}
      >
        按我試試
      </Button>
    </div>
  );
}

export default App;
```

## 主題自定義

EonUI 基於 CSS 變數設計，讓您能輕鬆自定義整個設計系統：

```css
/* 在您的 CSS 文件中覆蓋顏色變數 */
:root {
  --color-primary-500: #dc2626; /* 將主色改為紅色 */
  --color-success-500: #059669; /* 自定義成功色 */
  --color-warning-500: #d97706; /* 自定義警告色 */
}
```

```jsx
// 動態主題切換
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div data-theme={theme}>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙 暗色' : '☀️ 亮色'}
      </Button>
    </div>
  );
}
```

📚 **詳細的主題自定義指南請參考 [THEMING.md](./THEMING.md)**

## 主要組件

### 基礎組件

- **`Button`** — 支援多種變體、尺寸與狀態的按鈕組件
- **`Input`** — 可控與非控輸入框，支援驗證與自定義樣式
- **`Textarea`** — 多行文字輸入區域
- **`Checkbox`** — 單選與群組選擇框
- **`Radio`** — 單選按鈕與群組
- **`Select`** — 下拉選擇器，支援搜尋與多選

### 佈局組件

- **`Layout`** — 頁面佈局框架，支援響應式設計
- **`Grid`** — 靈活的網格佈局系統
- **`Menu`** — 導航選單，支援多層級與折疊

### 反饋組件

- **`Modal`** — 彈窗組件，支援多種尺寸與動畫效果
- **`Alert`** — 警告提示組件，支援多種類型與自動關閉
- **`MessageBox`** — 訊息對話框

### 表單組件

- **`Form`** — 表單包裝器，內建驗證與狀態管理
- **`Upload`** — 文件上傳組件，支援拖拽與預覽

### 數據展示

- **`Table`** — 數據表格，支援排序、分頁與篩選
- **`Pagination`** — 分頁組件
- **`Typography`** — 文字排版組件

### 其他

- **`DatePicker`** — 日期選擇器
- **`ColorPalette`** — 顏色選擇器
- **`Tab`** — 分頁標籤組件

🚀 **所有組件都支援完整的 TypeScript 類型定義與無障礙功能**

## 設計理念

EonUI 以「永續」和「穩定」為核心，結合現代前端技術，打造一個既有高度擴展性又易於維護的 UI 系統。

### 核心特色

- **🎨 CSS 變數驅動** — 基於 CSS 變數的主題系統，輕鬆實現品牌定制
- **⚡ Tailwind CSS v4** — 採用最新的 Tailwind CSS v4，享受更快的編譯速度
- **♿ 無障礙優先** — 所有組件都遵循 WCAG 2.1 AA 標準
- **📱 響應式設計** — 內建響應式佈局，支援各種螢幕尺寸
- **🔧 高度可配置** — 每個組件都提供豐富的配置選項
- **📚 完整文檔** — 詳盡的 Storybook 文檔與使用範例

## 貢獻

歡迎開發者提交 Issues 與 Pull Requests！

## 授權

本專案採用 [MIT License](./LICENSE) 授權，歡迎自由使用與修改。

## 聯絡

有任何問題或建議，歡迎透過 Issue 或 Email 聯絡我們。

Email: sjkry505@gmail.com

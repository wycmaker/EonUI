<p>
  <img src="https://github.com/user-attachments/assets/96b75956-4633-4306-b43c-d2b6cd71d78d" alt="login"/>
</p>


[![npm version](https://img.shields.io/npm/v/eonui.svg)](https://www.npmjs.com/package/eonui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) 
![React >=18](https://img.shields.io/badge/React->=18-brightgreen)


> EonUI 是一套基於 React 的永續、穩定且高度可擴展的 UI Library。

> 結合 Tailwind CSS 和 Design Token，助你快速打造一致且客製化的使用者介面。

## 目錄

- [特色](#特色)  
- [安裝](#安裝)  
- [快速開始](#快速開始)  
- [主要組件](#主要組件)  
- [設計理念](#設計理念)  
- [貢獻](#貢獻)  
- [授權](#授權)

## 特色

- **React 原生支持** — 完全基於 React Function Components 與 Hooks。  
- **Tailwind CSS 深度整合** — 享受快速、響應式與可定制的樣式體驗。  
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

function App() {
  return (
    <div className="p-4">
      <Button variant="primary" onClick={() => alert('Hello EonUI!')}>
        按我試試
      </Button>
    </div>
  );
}

export default App;
```

## 主要組件

- `Button` — 支援多種變體與狀態的按鈕。  
- `Input` — 可控與非控輸入框。  
- `Modal` — 彈窗組件，支持多種大小與動畫。  
- 更多組件持續開發中…

## 設計理念

EonUI 以「永續」和「穩定」為核心，結合現代前端技術，打造一個既有高度擴展性又易於維護的 UI 系統。  
設計 Token 讓你輕鬆管理整體風格，Tailwind CSS 提供快速且靈活的樣式調整。

## 貢獻

歡迎開發者提交 Issues 與 Pull Requests！  

## 授權

本專案採用 [MIT License](./LICENSE) 授權，歡迎自由使用與修改。

## 聯絡

有任何問題或建議，歡迎透過 Issue 或 Email 聯絡我們。  

Email: sjkry505@gmail.com

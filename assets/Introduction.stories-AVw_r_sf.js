import{j as o}from"./jsx-runtime-D_zvdyIk.js";/* empty css                       */const t=s=>`/EonUI/${s.startsWith("/")?s.slice(1):s}`,i=()=>t("Logo.svg"),n=()=>o.jsxs("div",{className:"component-docs-container",children:[o.jsxs("div",{className:"component-docs-header",children:[o.jsx("img",{src:i(),alt:"EonUI Logo"}),o.jsx("p",{className:"component-docs-description",children:"一套以 React 為核心打造的 UI Library，專注於提供「永續、穩定且可擴展」的設計系統"})]}),o.jsxs("div",{className:"component-docs-section",children:[o.jsx("h2",{className:"component-docs-section-title",children:"🚀 快速開始"}),o.jsx("div",{className:"component-docs-code-block",children:o.jsx("code",{style:{color:"#DC2626",fontSize:"1rem",fontFamily:"Monaco, Consolas, monospace"},children:"npm install eonui"})}),o.jsx("div",{className:"component-docs-code-block",children:o.jsx("pre",{className:"component-docs-code",children:`import { Button } from 'eonui';

function App() {
  return (
    <Button variant="primary" size="md">
      Hello EonUI!
    </Button>
  );
}`})})]}),o.jsxs("div",{className:"component-docs-section",children:[o.jsx("h2",{className:"component-docs-section-title",children:"💡 核心特色"}),[{icon:"🎨",title:"靈活的主題系統",desc:"使用 CSS 變數，支援即時主題切換"},{icon:"📱",title:"響應式設計",desc:"所有組件都支援行動裝置優先"},{icon:"🌳",title:"Tree-shaking 優化",desc:"只打包實際使用的組件"},{icon:"📚",title:"完整文檔",desc:"每個組件都有詳細說明和範例"}].map((s,c)=>o.jsxs("div",{className:"component-docs-feature-card",children:[o.jsx("span",{className:"component-docs-feature-icon",children:s.icon}),o.jsxs("div",{className:"component-docs-feature-content",children:[o.jsx("h3",{children:s.title}),o.jsx("p",{children:s.desc})]})]},c))]}),o.jsxs("div",{className:"component-docs-section",children:[o.jsx("h2",{className:"component-docs-section-title",children:"🎨 主題自定義"}),o.jsx("p",{className:"component-docs-section-description",children:"EonUI 使用 CSS 變數系統，讓你可以輕鬆自定義主題顏色："}),o.jsx("div",{className:"component-docs-code-block",children:o.jsx("pre",{className:"component-docs-code",children:`:root {
  --color-primary: #10B981;        /* 綠色主題 */
  --color-primary-dark: #047857;   /* 深綠色 */
  --color-secondary: #6B7280;      /* 灰色輔助 */
  --radius: 0.5rem;                /* 更圓的圓角 */
}`})})]}),o.jsxs("div",{className:"component-docs-section",children:[o.jsx("h2",{className:"component-docs-section-title",children:"📦 Tree-shaking"}),o.jsx("p",{className:"component-docs-section-description",children:"EonUI 支援 tree-shaking，你可以只導入需要的組件："}),o.jsx("div",{className:"component-docs-code-block",children:o.jsx("pre",{className:"component-docs-code",children:`// 方式 1: 具名導入（推薦）
import { Button, Input, Card } from 'eonui';

// 方式 2: 直接路徑導入（最佳 tree-shaking）
import { Button } from 'eonui/Button';
import { Input } from 'eonui/Input';`})})]}),o.jsxs("div",{className:"component-docs-cta",children:[o.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始探索"}),o.jsxs("p",{className:"component-docs-cta-text",children:["點擊左側選單中的 ",o.jsx("strong",{children:"Components → Button"})," 來查看第一個組件的詳細說明和範例！"]})]})]}),d={title:"Get Started",component:n,parameters:{layout:"fullscreen",docs:{page:()=>o.jsx(n,{})}},tags:["autodocs"]},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const l=["Docs"];export{e as Docs,l as __namedExportsOrder,d as default};

import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{P as t,C as o}from"./blocks-CAYfFhLU.js";import{C as e}from"./CodeExample-vFRyXKH9.js";import{B as n}from"./Button-BYg5JYyV.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./iframe-DtrAF50Y.js";import"./index-DDMkSrZn.js";import"./cn-Dtjc6EhN.js";import"./icons-B4aNx7RA.js";const r=()=>s.jsxs("div",{className:"component-docs-container",children:[s.jsxs("div",{className:"component-docs-header",children:[s.jsx("h1",{className:"component-docs-title",children:"Button 按鈕"}),s.jsx("p",{className:"component-docs-description",children:"EonUI 的基礎按鈕組件，支援多種樣式變體和大小。按鈕是用戶界面中最常用的互動元素之一， 提供了一致的視覺風格和行為，遵循現代設計原則和無障礙標準。"})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),s.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整按鈕的各種屬性："}),s.jsx(t,{}),s.jsx(o,{})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"🎨 樣式變體範例",description:"Button 組件提供了四種不同的樣式變體，適用於不同的使用場景：",code:`// 四種不同的按鈕樣式
<Button variant="primary">主要按鈕</Button>
<Button variant="secondary">次要按鈕</Button>
<Button variant="outline">外框按鈕</Button>
<Button variant="ghost">幽靈按鈕</Button>`,children:s.jsxs("div",{className:"flex gap-4 flex-wrap",children:[s.jsx(n,{variant:"primary",children:"主要按鈕"}),s.jsx(n,{variant:"secondary",children:"次要按鈕"}),s.jsx(n,{variant:"outline",children:"外框按鈕"}),s.jsx(n,{variant:"ghost",children:"幽靈按鈕"})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"使用建議："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Primary："}),"用於最重要的操作，通常每個頁面只有一個"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Secondary："}),"用於次要操作，與主要操作形成層次"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Outline："}),"用於需要突出邊界的操作"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ghost："}),"用於最不突出的操作，如工具欄按鈕"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"📏 大小選項範例",description:"支援五種不同的大小選項，適應不同的設計需求：",code:`// 五種不同的按鈕大小
<Button size="xs">超小</Button>
<Button size="sm">小</Button>
<Button size="md">中</Button>
<Button size="lg">大</Button>
<Button size="xl">超大</Button>`,children:s.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[s.jsx(n,{size:"xs",children:"超小"}),s.jsx(n,{size:"sm",children:"小"}),s.jsx(n,{size:"md",children:"中"}),s.jsx(n,{size:"lg",children:"大"}),s.jsx(n,{size:"xl",children:"超大"})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"尺寸指南："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"xs："}),"用於緊湊的界面，如表格操作"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"sm："}),"用於次要操作或緊湊佈局"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"md："}),"標準大小，適用於大多數場景"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"lg："}),"用於重要的行動召喚按鈕"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"xl："}),"用於頁面級別的主要操作"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"🔄 按鈕狀態範例",description:"按鈕支援多種狀態，提供清晰的用戶反饋：",code:`// 載入狀態
<Button loading>載入中</Button>
<Button loading loadingText="正在處理請求">提交表單</Button>

// 禁用狀態
<Button disabled>已禁用</Button>
<Button variant="outline" disabled>禁用外框</Button>`,children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex gap-4 flex-wrap",children:[s.jsx(n,{loading:!0,children:"載入中"}),s.jsx(n,{loading:!0,loadingText:"正在處理請求",children:"提交表單"})]}),s.jsxs("div",{className:"flex gap-4 flex-wrap",children:[s.jsx(n,{disabled:!0,children:"已禁用"}),s.jsx(n,{variant:"outline",disabled:!0,children:"禁用外框"})]})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"狀態說明："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Loading："}),"顯示載入動畫，防止重複點擊"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Disabled："}),"禁用狀態，不響應用戶操作"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Hover/Focus："}),"提供視覺反饋和無障礙支持"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"♿ 無障礙性功能",description:"Button 組件遵循 WCAG 2.1 AA 標準，提供完整的無障礙性支援：",code:`// 無障礙性按鈕功能
<Button aria-label="關閉對話框">✕</Button>
<Button loading loadingText="正在儲存資料">
  儲存
</Button>
<Button disabled>已禁用</Button>
<Button size="xs">最小尺寸</Button>`,children:s.jsxs("div",{className:"flex gap-4 flex-wrap",children:[s.jsx(n,{"aria-label":"關閉對話框",children:"✕"}),s.jsx(n,{loading:!0,loadingText:"正在儲存資料",children:"儲存"}),s.jsx(n,{disabled:!0,children:"已禁用"}),s.jsx(n,{size:"xs",children:"最小尺寸"})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"無障礙性特色："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"鍵盤導航："}),"支援 Tab、Enter、Space 鍵操作"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"螢幕閱讀器："}),"支援 aria-label、aria-disabled 屬性"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"焦點指示器："}),"清晰的焦點環，符合視覺標準"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"觸控目標："}),"最小 32px 高度，符合 WCAG 標準"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"載入狀態："}),"提供無障礙的載入提示文字"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"🔄 載入狀態範例",description:"不同的載入狀態配置，提供清晰的用戶反饋：",code:`// 不同的載入狀態配置
<Button loading>預設載入文字</Button>
<Button loading loadingText="正在處理請求">
  提交表單
</Button>
<Button loading loadingText="正在儲存資料" variant="secondary">
  儲存
</Button>`,children:s.jsxs("div",{className:"flex gap-4 flex-wrap",children:[s.jsx(n,{loading:!0,children:"預設載入文字"}),s.jsx(n,{loading:!0,loadingText:"正在處理請求",children:"提交表單"}),s.jsx(n,{loading:!0,loadingText:"正在儲存資料",variant:"secondary",children:"儲存"})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"載入狀態特色："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"預設文字："}),"使用「載入中」作為預設的螢幕閱讀器文字"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"自訂文字："}),"透過 loadingText 屬性提供具體的操作描述"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"防止重複點擊："}),"載入時自動禁用按鈕"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"無障礙支援："}),"載入動畫對螢幕閱讀器隱藏"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx(e,{title:"📏 尺寸與觸控目標範例",description:"所有尺寸都符合 WCAG 2.1 AA 最小觸控目標要求：",code:`// 不同尺寸的觸控目標展示
<Button size="xs">32px 高度</Button>
<Button size="sm">36px 高度</Button>
<Button size="md">40px 高度</Button>`,children:s.jsxs("div",{className:"flex gap-6 justify-center",children:[s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx(n,{size:"xs",children:"32px 高度"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#666",marginTop:"0.25rem"},children:"符合最小觸控目標"})]}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx(n,{size:"sm",children:"36px 高度"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#666",marginTop:"0.25rem"},children:"改善的觸控體驗"})]}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx(n,{size:"md",children:"40px 高度"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#666",marginTop:"0.25rem"},children:"標準尺寸"})]})]})}),s.jsxs("div",{className:"component-docs-info-card",children:[s.jsx("strong",{children:"觸控目標標準："}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"WCAG 2.1 AA："}),"最小 44x44 像素，我們調整為至少 32px 高度"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"改善體驗："}),"較大的按鈕提供更好的觸控體驗"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"設計平衡："}),"在無障礙性和視覺設計間取得平衡"]})]})]})]}),s.jsxs("div",{className:"component-docs-section",children:[s.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),s.jsxs("div",{className:"component-docs-code-block",children:[s.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),s.jsx("pre",{className:"component-docs-code",children:`import { Button } from 'eonui';

// 基本按鈕
<Button>點擊我</Button>

// 帶樣式的按鈕
<Button variant="primary" size="lg">
  主要操作
</Button>

// 載入狀態
<Button loading>處理中...</Button>

// 載入狀態（自訂螢幕閱讀器文字）
<Button loading loadingText="正在處理請求">
  提交表單
</Button>

// 無障礙性標籤
<Button aria-label="關閉對話框">
  ✕
</Button>`})]})]}),s.jsxs("div",{className:"component-docs-cta",children:[s.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),s.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Button 組件的所有功能，可以在你的項目中開始使用了！"})]})]}),g={title:"Foundation/Button",component:n,parameters:{layout:"centered",docs:{page:()=>s.jsx(r,{})}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"按鈕的視覺樣式變體"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"按鈕的大小"},loading:{control:{type:"boolean"},description:"是否顯示載入狀態"},loadingText:{control:{type:"text"},description:"載入狀態時顯示的文字，用於螢幕閱讀器"},disabled:{control:{type:"boolean"},description:"是否禁用按鈕"},children:{control:{type:"text"},description:"按鈕內容"}},tags:["autodocs"]},i={args:{children:"按鈕",variant:"primary",size:"md"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: '按鈕',
    variant: 'primary',
    size: 'md'
  }
}`,...i.parameters?.docs?.source}}};const B=["Docs"];export{i as Docs,B as __namedExportsOrder,g as default};

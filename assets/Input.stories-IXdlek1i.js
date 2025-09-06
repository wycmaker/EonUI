import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-DMlPHyXL.js";import{P as u,C as f}from"./blocks-C_eD2Myt.js";import{I as s}from"./Input-DlUAYvU1.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-BV-bFhAu.js";import"./cn-Dtjc6EhN.js";import"./clearable-Cbs5Twkk.js";import"./icons-CWF-JOA3.js";import"./formStyles-DRif9fQT.js";const c=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),n=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),a=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),v=()=>{const[i,r]=l.useState(""),[d,p]=l.useState(""),[m,x]=l.useState(""),[h,j]=l.useState("");return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(s,{placeholder:"搜尋...",prefixIcon:e.jsx(c,{}),clearable:!0,value:i,onChange:o=>r(o.target.value),onClear:()=>r("")}),e.jsx(s,{type:"email",placeholder:"請輸入電子郵件",prefixIcon:e.jsx(n,{}),value:d,onChange:o=>p(o.target.value)}),e.jsx(s,{type:"password",placeholder:"請輸入密碼",value:h,onChange:o=>j(o.target.value)}),e.jsx(s,{placeholder:"使用者名稱",prefixIcon:e.jsx(a,{}),suffixIcon:e.jsx(c,{}),value:m,onChange:o=>x(o.target.value)})]})},g=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Input 輸入框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的純粹輸入框組件，類似 Element Plus 的設計理念。 提供多種樣式變體、狀態和大小選項，專注於核心輸入功能，不包含標籤或錯誤訊息等額外內容。 完全符合無障礙標準，支援鍵盤導航和螢幕閱讀器。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整輸入框的各種屬性："}),e.jsx(u,{}),e.jsx(f,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔄 實際使用範例"}),e.jsx("p",{className:"component-docs-section-description",children:"以下是實際的輸入框範例，展示各種功能組合："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(v,{})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎨 樣式變體"}),e.jsx("p",{className:"component-docs-section-description",children:"Input 組件提供了三種不同的樣式變體："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{variant:"default",placeholder:"預設樣式"}),e.jsx(s,{variant:"filled",placeholder:"填充樣式"}),e.jsx(s,{variant:"outline",placeholder:"外框樣式"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filled："}),"填充樣式，適用於需要視覺區分的設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Outline："}),"外框樣式，適用於需要強調邊界的設計"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📏 大小選項"}),e.jsx("p",{className:"component-docs-section-description",children:"支援三種不同的大小選項，所有尺寸都符合 WCAG 最小觸控目標要求："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{size:"sm",placeholder:"小尺寸 (32px)"}),e.jsx(s,{size:"md",placeholder:"中等尺寸 (40px)"}),e.jsx(s,{size:"lg",placeholder:"大尺寸 (48px)"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"32px 高度，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"40px 高度，標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"48px 高度，適用於重要的輸入欄位"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🚦 狀態展示"}),e.jsx("p",{className:"component-docs-section-description",children:"輸入框支援多種狀態，提供清晰的視覺反饋："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{status:"default",placeholder:"預設狀態"}),e.jsx(s,{status:"error",placeholder:"錯誤狀態"}),e.jsx(s,{status:"success",placeholder:"成功狀態"}),e.jsx(s,{status:"warning",placeholder:"警告狀態"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"預設狀態，無特殊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤狀態，紅色邊框表示輸入錯誤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功狀態，綠色邊框表示輸入正確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告狀態，黃色邊框提醒用戶注意"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎯 圖示與功能"}),e.jsx("p",{className:"component-docs-section-description",children:"支援前綴圖示、後綴圖示和清除功能："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{prefixIcon:e.jsx(c,{}),placeholder:"前綴圖示"}),e.jsx(s,{suffixIcon:e.jsx(n,{}),placeholder:"後綴圖示"}),e.jsx(s,{prefixIcon:e.jsx(c,{}),clearable:!0,placeholder:"可清除的輸入框"}),e.jsx(s,{prefixIcon:e.jsx(a,{}),suffixIcon:e.jsx(n,{}),placeholder:"前後綴圖示"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"前綴圖示："}),"通常用於表示輸入類型或功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"後綴圖示："}),"用於顯示狀態或額外功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"清除功能："}),"當有內容時顯示清除按鈕，優先於後綴圖示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙支援："}),"圖示對螢幕閱讀器隱藏，清除按鈕有適當的標籤"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔒 密碼功能"}),e.jsx("p",{className:"component-docs-section-description",children:"當輸入框類型為 password 時，會自動顯示密碼切換按鈕："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{type:"password",placeholder:"預設密碼輸入",defaultValue:"mySecretPassword"}),e.jsx(s,{type:"password",size:"lg",variant:"filled",placeholder:"大尺寸填充樣式密碼",defaultValue:"anotherPassword"}),e.jsx(s,{type:"password",status:"error",placeholder:"錯誤狀態密碼",defaultValue:"wrongPassword"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"密碼功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"自動檢測："}),'當 type="password" 時自動顯示密碼切換按鈕']}),e.jsxs("li",{children:[e.jsx("strong",{children:"視覺切換："}),"點擊眼睛圖示在顯示/隱藏密碼之間切換"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"優先級："}),"密碼切換按鈕優先於自訂 suffixIcon"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙："}),"按鈕有適當的 aria-label，螢幕閱讀器友好"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"禁用狀態："}),"當輸入框禁用時，密碼切換按鈕也會被禁用"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"⌨️ 不同輸入類型"}),e.jsx("p",{className:"component-docs-section-description",children:"支援各種 HTML 輸入類型："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{type:"text",placeholder:"文字輸入",prefixIcon:e.jsx(a,{})}),e.jsx(s,{type:"email",placeholder:"電子郵件",prefixIcon:e.jsx(n,{})}),e.jsx(s,{type:"password",placeholder:"密碼（自動顯示切換按鈕）"}),e.jsx(s,{type:"search",placeholder:"搜尋",prefixIcon:e.jsx(c,{}),clearable:!0}),e.jsx(s,{type:"tel",placeholder:"電話號碼"}),e.jsx(s,{type:"url",placeholder:"網址"}),e.jsx(s,{type:"number",placeholder:"數字"})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🚫 禁用狀態"}),e.jsx("p",{className:"component-docs-section-description",children:"展示禁用狀態下的各種樣式："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{disabled:!0,placeholder:"禁用的輸入框"}),e.jsx(s,{disabled:!0,variant:"filled",placeholder:"禁用的填充樣式"}),e.jsx(s,{disabled:!0,prefixIcon:e.jsx(c,{}),placeholder:"禁用帶圖示"})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔗 組合使用"}),e.jsx("p",{className:"component-docs-section-description",children:"展示各種屬性的組合使用："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{size:"lg",variant:"outline",status:"success",prefixIcon:e.jsx(c,{}),clearable:!0,placeholder:"大尺寸外框成功狀態",defaultValue:"組合範例"}),e.jsx(s,{size:"sm",variant:"filled",status:"warning",suffixIcon:e.jsx(n,{}),placeholder:"小尺寸填充警告狀態"})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Input } from 'eonui';

// 基本輸入框
<Input placeholder="請輸入內容" />

// 帶樣式的輸入框
<Input
  variant="filled"
  size="lg"
  placeholder="大尺寸填充樣式"
/>

// 帶圖示的輸入框
<Input
  prefixIcon={<SearchIcon />}
  placeholder="搜尋..."
  clearable
/>

// 密碼輸入框（自動顯示切換按鈕）
<Input
  type="password"
  placeholder="請輸入密碼"
/>

// 不同狀態
<Input
  status="error"
  placeholder="錯誤狀態"
/>

<Input
  status="success"
  placeholder="成功狀態"
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
/>

// 組合使用
<Input
  type="email"
  size="lg"
  variant="outline"
  status="success"
  prefixIcon={<EmailIcon />}
  placeholder="example@email.com"
/>

// 自訂樣式
<Input
  className="border-blue-500 focus:ring-blue-500"
  placeholder="自訂樣式"
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Input 組件的所有功能，可以在你的項目中開始使用了！ 這個純粹的輸入框組件讓你可以靈活地組合其他組件來建立完整的表單系統。"})]})]}),L={title:"Components/Input",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(g,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"輸入框的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"輸入框的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"輸入框的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},prefixIcon:{control:{type:"boolean"},description:"前綴圖示",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(c,{}),false:void 0}},suffixIcon:{control:{type:"boolean"},description:"後綴圖示",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(n,{}),false:void 0}},clearable:{control:{type:"boolean"},description:"是否顯示清除按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"佔位符文字",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{control:{type:"select"},options:["text","email","password","tel","url","search","number"],description:"輸入框類型",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},value:{control:{type:"text"},description:"輸入框的值（受控組件）",table:{type:{summary:"string"}}},onClear:{action:"cleared",description:"清除按鈕的回調函數",table:{type:{summary:"() => void"}}},onChange:{action:"changed",description:"輸入值改變時的回調函數",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},t={args:{placeholder:"請輸入內容",variant:"default",size:"md",status:"default"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '請輸入內容',
    variant: 'default',
    size: 'md',
    status: 'default'
  }
}`,...t.parameters?.docs?.source}}};const P=["Docs"];export{t as Docs,P as __namedExportsOrder,L as default};

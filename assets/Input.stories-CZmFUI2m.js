import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-vexCixVy.js";import{P as f,C as I}from"./blocks-CUo2tLZq.js";import{C as l}from"./CodeExample-CuI99ZG3.js";import{I as s}from"./Input-BVzief7Q.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-uvf18IKX.js";import"./cn-Dtjc6EhN.js";import"./clearable-C08SD5GV.js";import"./icons-B4aNx7RA.js";import"./formStyles-D_LMpAhg.js";const a=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),r=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})}),n=()=>e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),v=()=>{const[d,i]=c.useState(""),[p,u]=c.useState(""),[h,x]=c.useState(""),[m,j]=c.useState("");return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(s,{placeholder:"搜尋...",prefixIcon:e.jsx(a,{}),clearable:!0,value:d,onChange:t=>i(t.target.value),onClear:()=>i("")}),e.jsx(s,{type:"email",placeholder:"請輸入電子郵件",prefixIcon:e.jsx(r,{}),value:p,onChange:t=>u(t.target.value)}),e.jsx(s,{type:"password",placeholder:"請輸入密碼",value:m,onChange:t=>j(t.target.value)}),e.jsx(s,{placeholder:"使用者名稱",prefixIcon:e.jsx(n,{}),suffixIcon:e.jsx(a,{}),value:h,onChange:t=>x(t.target.value)})]})},y=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Input 輸入框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的純粹輸入框組件，類似 Element Plus 的設計理念。 提供多種樣式變體、狀態和大小選項，專注於核心輸入功能，不包含標籤或錯誤訊息等額外內容。 完全符合無障礙標準，支援鍵盤導航和螢幕閱讀器。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整輸入框的各種屬性："}),e.jsx(f,{}),e.jsx(I,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔄 實際使用範例",description:"以下是實際的輸入框範例，展示各種功能組合：",code:`// 互動式輸入框範例
const [basicValue, setBasicValue] = useState('');
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');

return (
  <div className="space-y-6 w-full max-w-md">
    <div>
      <h4 className="font-medium mb-2 text-gray-700">基本輸入框</h4>
      <Input
        value={basicValue}
        onChange={(e) => setBasicValue(e.target.value)}
        placeholder="請輸入文字"
        prefixIcon={<UserIcon />}
      />
    </div>

    <div>
      <h4 className="font-medium mb-2 text-gray-700">電子郵件輸入</h4>
      <Input
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        placeholder="請輸入電子郵件"
        prefixIcon={<EmailIcon />}
        clearable
      />
    </div>

    <div>
      <h4 className="font-medium mb-2 text-gray-700">密碼輸入</h4>
      <Input
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
        placeholder="請輸入密碼"
      />
    </div>
  </div>
);`,children:e.jsx(v,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"🔄 樣式變體範例",description:"Input 組件提供了三種不同的樣式變體：",code:`// 三種不同的輸入框樣式
<Input variant="default" placeholder="預設樣式" />
<Input variant="filled" placeholder="填充樣式" />
<Input variant="outline" placeholder="外框樣式" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"default",placeholder:"預設樣式"}),e.jsx(s,{variant:"filled",placeholder:"填充樣式"}),e.jsx(s,{variant:"outline",placeholder:"外框樣式"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filled："}),"填充樣式，適用於需要視覺區分的設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Outline："}),"外框樣式，適用於需要強調邊界的設計"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"🔄 大小選項範例",description:"支援三種不同的大小選項，所有尺寸都符合 WCAG 最小觸控目標要求：",code:`// 三種不同的輸入框大小
<Input size="sm" placeholder="小尺寸 (32px)" />
<Input size="md" placeholder="中等尺寸 (40px)" />
<Input size="lg" placeholder="大尺寸 (48px)" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"sm",placeholder:"小尺寸 (32px)"}),e.jsx(s,{size:"md",placeholder:"中等尺寸 (40px)"}),e.jsx(s,{size:"lg",placeholder:"大尺寸 (48px)"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"32px 高度，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"40px 高度，標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"48px 高度，適用於重要的輸入欄位"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"🔄 狀態展示範例",description:"輸入框支援多種狀態，提供清晰的視覺反饋：",code:`// 不同的輸入框狀態
<Input status="default" placeholder="預設狀態" />
<Input status="error" placeholder="錯誤狀態" />
<Input status="success" placeholder="成功狀態" />
<Input status="warning" placeholder="警告狀態" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{status:"default",placeholder:"預設狀態"}),e.jsx(s,{status:"error",placeholder:"錯誤狀態"}),e.jsx(s,{status:"success",placeholder:"成功狀態"}),e.jsx(s,{status:"warning",placeholder:"警告狀態"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"預設狀態，無特殊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤狀態，紅色邊框表示輸入錯誤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功狀態，綠色邊框表示輸入正確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告狀態，黃色邊框提醒用戶注意"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"🔄 圖示與功能範例",description:"支援前綴圖示、後綴圖示和清除功能：",code:`// 輸入框的圖示和功能配置
<Input prefixIcon={<SearchIcon />} placeholder="前綴圖示" />
<Input suffixIcon={<EmailIcon />} placeholder="後綴圖示" />
<Input prefixIcon={<SearchIcon />} clearable placeholder="可清除的輸入框" />
<Input prefixIcon={<UserIcon />} suffixIcon={<EmailIcon />} placeholder="前後綴圖示" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{prefixIcon:e.jsx(a,{}),placeholder:"前綴圖示"}),e.jsx(s,{suffixIcon:e.jsx(r,{}),placeholder:"後綴圖示"}),e.jsx(s,{prefixIcon:e.jsx(a,{}),clearable:!0,placeholder:"可清除的輸入框"}),e.jsx(s,{prefixIcon:e.jsx(n,{}),suffixIcon:e.jsx(r,{}),placeholder:"前後綴圖示"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"前綴圖示："}),"通常用於表示輸入類型或功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"後綴圖示："}),"用於顯示狀態或額外功能"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"清除功能："}),"當有內容時顯示清除按鈕，優先於後綴圖示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙支援："}),"圖示對螢幕閱讀器隱藏，清除按鈕有適當的標籤"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"🔄 密碼功能範例",description:"當輸入框類型為 password 時，會自動顯示密碼切換按鈕：",code:`// 基本密碼輸入框
<Input
  type="password"
  placeholder="預設密碼輸入"
  defaultValue="mySecretPassword"
/>

// 大尺寸填充樣式密碼
<Input
  type="password"
  size="lg"
  variant="filled"
  placeholder="大尺寸填充樣式密碼"
  defaultValue="anotherPassword"
/>

// 錯誤狀態密碼
<Input
  type="password"
  status="error"
  placeholder="錯誤狀態密碼"
  defaultValue="wrongPassword"
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{type:"password",placeholder:"預設密碼輸入",defaultValue:"mySecretPassword"}),e.jsx(s,{type:"password",size:"lg",variant:"filled",placeholder:"大尺寸填充樣式密碼",defaultValue:"anotherPassword"}),e.jsx(s,{type:"password",status:"error",placeholder:"錯誤狀態密碼",defaultValue:"wrongPassword"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"密碼功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"自動檢測："}),'當 type="password" 時自動顯示密碼切換按鈕']}),e.jsxs("li",{children:[e.jsx("strong",{children:"視覺切換："}),"點擊眼睛圖示在顯示/隱藏密碼之間切換"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"優先級："}),"密碼切換按鈕優先於自訂 suffixIcon"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙："}),"按鈕有適當的 aria-label，螢幕閱讀器友好"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"禁用狀態："}),"當輸入框禁用時，密碼切換按鈕也會被禁用"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔄 不同輸入類型範例",description:"支援各種 HTML 輸入類型：",code:`// 各種 HTML 輸入類型
<Input type="text" placeholder="文字輸入" prefixIcon={<UserIcon />} />
<Input type="email" placeholder="電子郵件" prefixIcon={<EmailIcon />} />
<Input type="password" placeholder="密碼（自動顯示切換按鈕）" />
<Input type="search" placeholder="搜尋" prefixIcon={<SearchIcon />} clearable />
<Input type="tel" placeholder="電話號碼" />
<Input type="url" placeholder="網址" />
<Input type="number" placeholder="數字" />`,children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsx(s,{type:"text",placeholder:"文字輸入",prefixIcon:e.jsx(n,{})}),e.jsx(s,{type:"email",placeholder:"電子郵件",prefixIcon:e.jsx(r,{})}),e.jsx(s,{type:"password",placeholder:"密碼（自動顯示切換按鈕）"}),e.jsx(s,{type:"search",placeholder:"搜尋",prefixIcon:e.jsx(a,{}),clearable:!0}),e.jsx(s,{type:"tel",placeholder:"電話號碼"}),e.jsx(s,{type:"url",placeholder:"網址"}),e.jsx(s,{type:"number",placeholder:"數字"})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔄 禁用狀態範例",description:"展示禁用狀態下的各種樣式：",code:`// 禁用狀態下的各種樣式
<Input disabled placeholder="禁用的輸入框" />
<Input disabled variant="filled" placeholder="禁用的填充樣式" />
<Input disabled prefixIcon={<SearchIcon />} placeholder="禁用帶圖示" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{disabled:!0,placeholder:"禁用的輸入框"}),e.jsx(s,{disabled:!0,variant:"filled",placeholder:"禁用的填充樣式"}),e.jsx(s,{disabled:!0,prefixIcon:e.jsx(a,{}),placeholder:"禁用帶圖示"})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔄 組合使用範例",description:"展示各種屬性的組合使用：",code:`// 各種屬性的組合使用
<Input
  size="lg"
  variant="outline"
  status="success"
  prefixIcon={<SearchIcon />}
  clearable
  placeholder="大尺寸外框成功狀態"
  defaultValue="組合範例"
/>

<Input
  size="sm"
  variant="filled"
  status="warning"
  suffixIcon={<EmailIcon />}
  placeholder="小尺寸填充警告狀態"
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"lg",variant:"outline",status:"success",prefixIcon:e.jsx(a,{}),clearable:!0,placeholder:"大尺寸外框成功狀態",defaultValue:"組合範例"}),e.jsx(s,{size:"sm",variant:"filled",status:"warning",suffixIcon:e.jsx(r,{}),placeholder:"小尺寸填充警告狀態"})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Input } from 'eonui';

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
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Input 組件的所有功能，可以在你的項目中開始使用了！ 這個純粹的輸入框組件讓你可以靈活地組合其他組件來建立完整的表單系統。"})]})]}),M={title:"Form/Input",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(y,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"輸入框的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"輸入框的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"輸入框的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},prefixIcon:{control:{type:"boolean"},description:"前綴圖示",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(a,{}),false:void 0}},suffixIcon:{control:{type:"boolean"},description:"後綴圖示",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(r,{}),false:void 0}},clearable:{control:{type:"boolean"},description:"是否顯示清除按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"佔位符文字",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},type:{control:{type:"select"},options:["text","email","password","tel","url","search","number"],description:"輸入框類型",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},value:{control:{type:"text"},description:"輸入框的值（受控組件）",table:{type:{summary:"string"}}},onClear:{action:"cleared",description:"清除按鈕的回調函數",table:{type:{summary:"() => void"}}},onChange:{action:"changed",description:"輸入值改變時的回調函數",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},o={args:{placeholder:"請輸入內容",variant:"default",size:"md",status:"default"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '請輸入內容',
    variant: 'default',
    size: 'md',
    status: 'default'
  }
}`,...o.parameters?.docs?.source}}};const U=["Docs"];export{o as Docs,U as __namedExportsOrder,M as default};

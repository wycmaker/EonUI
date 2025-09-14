import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-vexCixVy.js";import{P as p,C as u}from"./blocks-CUo2tLZq.js";import{C as a}from"./CodeExample-CuI99ZG3.js";import{T as s}from"./Textarea-B6ajxtQK.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-uvf18IKX.js";import"./cn-Dtjc6EhN.js";import"./clearable-C08SD5GV.js";import"./icons-B4aNx7RA.js";import"./formStyles-D_LMpAhg.js";const j=()=>{const[r,t]=o.useState(""),[i,c]=o.useState(""),[d,m]=o.useState(""),[x,h]=o.useState("這是一個有字數限制的範例");return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(s,{placeholder:"請輸入您的評論...",clearable:!0,value:r,onChange:l=>t(l.target.value),onClear:()=>t(""),minRows:3,maxRows:6,maxLength:200,showCount:!0}),e.jsx(s,{placeholder:"請提供您的回饋意見",value:i,onChange:l=>c(l.target.value),variant:"filled",minRows:4,resize:"none",showCount:!0}),e.jsx(s,{placeholder:"備註說明",value:d,onChange:l=>m(l.target.value),variant:"outline",size:"sm",minRows:2,maxLength:50}),e.jsx(s,{placeholder:"有字數限制的輸入框",value:x,onChange:l=>h(l.target.value),maxLength:30,minRows:3})]})},w=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Textarea 多行文字區域"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的多行文字輸入組件，基於 Input 組件的設計理念。 提供多種樣式變體、狀態和大小選項，支援行數控制和調整大小功能。 完全符合無障礙標準，支援鍵盤導航和螢幕閱讀器。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整文字區域的各種屬性："}),e.jsx(p,{}),e.jsx(u,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(a,{title:"🔄 實際使用範例",description:"以下是實際的文字區域範例，展示各種功能組合：",code:`// 互動式 Textarea 範例
const [basicValue, setBasicValue] = useState('');
const [autoSize, setAutoSize] = useState(true);
const [showCount, setShowCount] = useState(true);

return (
  <div className="space-y-6 w-full max-w-md">
    <div>
      <h4 className="font-medium mb-2 text-gray-700">基本文字區域</h4>
      <Textarea
        value={basicValue}
        onChange={(e) => setBasicValue(e.target.value)}
        placeholder="請輸入您的文字..."
        autoSize={autoSize}
        showCount={showCount}
        maxLength={200}
      />
    </div>
  </div>
);`,children:e.jsx(j,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 樣式變體範例",description:"支援三種不同的文字區域樣式：",code:`// 三種不同的文字區域樣式
<Textarea variant="default" placeholder="預設樣式" minRows={3} />
<Textarea variant="filled" placeholder="填充樣式" minRows={3} />
<Textarea variant="outline" placeholder="外框樣式" minRows={3} />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"default",placeholder:"預設樣式",minRows:3}),e.jsx(s,{variant:"filled",placeholder:"填充樣式",minRows:3}),e.jsx(s,{variant:"outline",placeholder:"外框樣式",minRows:3})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filled："}),"填充樣式，適用於需要視覺區分的設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Outline："}),"外框樣式，適用於需要強調邊界的設計"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 大小選項範例",description:"支援三種不同的文字區域大小：",code:`// 三種不同的文字區域大小
<Textarea size="sm" placeholder="小尺寸 - 緊湊設計" minRows={3} />
<Textarea size="md" placeholder="中等尺寸 - 標準大小" minRows={3} />
<Textarea size="lg" placeholder="大尺寸 - 舒適閱讀" minRows={3} />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"sm",placeholder:"小尺寸 - 緊湊設計",minRows:3}),e.jsx(s,{size:"md",placeholder:"中等尺寸 - 標準大小",minRows:3}),e.jsx(s,{size:"lg",placeholder:"大尺寸 - 舒適閱讀",minRows:3})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"緊湊設計，適用於空間有限的界面"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"舒適閱讀，適用於重要的文字輸入"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 狀態展示範例",description:"支援多種不同的文字區域狀態：",code:`// 不同狀態的文字區域
<Textarea status="default" placeholder="預設狀態" minRows={3} />
<Textarea status="error" placeholder="錯誤狀態" minRows={3} />
<Textarea status="success" placeholder="成功狀態" minRows={3} />
<Textarea status="warning" placeholder="警告狀態" minRows={3} />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{status:"default",placeholder:"預設狀態",minRows:3}),e.jsx(s,{status:"error",placeholder:"錯誤狀態",minRows:3}),e.jsx(s,{status:"success",placeholder:"成功狀態",minRows:3}),e.jsx(s,{status:"warning",placeholder:"警告狀態",minRows:3})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"預設狀態，無特殊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤狀態，紅色邊框表示輸入錯誤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功狀態，綠色邊框表示輸入正確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告狀態，黃色邊框提醒用戶注意"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 調整大小選項範例",description:"支援不同的調整大小模式：",code:`// 不同調整大小模式
<Textarea resize="none" placeholder="不可調整大小" minRows={3} />
<Textarea resize="vertical" placeholder="僅垂直調整（預設）" minRows={3} />
<Textarea resize="horizontal" placeholder="僅水平調整" minRows={3} />
<Textarea resize="both" placeholder="水平垂直都可調整" minRows={3} />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{resize:"none",placeholder:"不可調整大小",minRows:3}),e.jsx(s,{resize:"vertical",placeholder:"僅垂直調整（預設）",minRows:3}),e.jsx(s,{resize:"horizontal",placeholder:"僅水平調整",minRows:3}),e.jsx(s,{resize:"both",placeholder:"水平垂直都可調整",minRows:3})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"調整模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"none："}),"固定大小，不可調整"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"vertical："}),"僅允許垂直調整（推薦）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"horizontal："}),"僅允許水平調整"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"both："}),"允許任意方向調整"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 行數設定範例",description:"支援不同的行數設定：",code:`// 不同行數設定
<Textarea minRows={2} placeholder="最小 2 行" />
<Textarea minRows={4} placeholder="最小 4 行" />
<Textarea minRows={3} maxRows={6} placeholder="最小 3 行，最大 6 行" />
<Textarea minRows={5} maxRows={5} resize="none" placeholder="固定 5 行" />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{minRows:2,placeholder:"最小 2 行"}),e.jsx(s,{minRows:4,placeholder:"最小 4 行"}),e.jsx(s,{minRows:3,maxRows:6,placeholder:"最小 3 行，最大 6 行"}),e.jsx(s,{minRows:5,maxRows:5,resize:"none",placeholder:"固定 5 行"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"行數控制說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"minRows："}),"設定最小顯示行數"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"maxRows："}),"設定最大顯示行數（可選）"]}),e.jsx("li",{children:'組合 minRows=maxRows 和 resize="none" 可創建固定大小的文字區域'})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 字數計數範例",description:"支援字數統計和最大字數限制功能：",code:`// 僅顯示字數
<Textarea
  placeholder="無限制，僅顯示字數"
  showCount
  minRows={3}
  defaultValue="這個文字區域會顯示字數統計"
/>

// 字數限制
<Textarea
  placeholder="最多 50 個字"
  maxLength={50}
  minRows={3}
  defaultValue="這個文字區域最多只能輸入 50 個字，超出時會被阻擋"
/>

// 接近限制時警告
<Textarea
  placeholder="最多 20 個字（測試警告狀態）"
  maxLength={20}
  minRows={3}
  defaultValue="這裡已經接近字數限制了"
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{placeholder:"無限制，僅顯示字數",showCount:!0,minRows:3,defaultValue:"這個文字區域會顯示字數統計"}),e.jsx(s,{placeholder:"最多 50 個字",maxLength:50,minRows:3,defaultValue:"這個文字區域最多只能輸入 50 個字，超出時會被阻擋"}),e.jsx(s,{placeholder:"最多 20 個字（測試警告狀態）",maxLength:20,minRows:3,defaultValue:"這裡已經接近字數限制了"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"字數功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"showCount："}),"顯示字數統計（無限制）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"maxLength："}),"設定最大字數限制，自動顯示統計"]}),e.jsx("li",{children:"接近限制時（80%）字數會變成警告色"}),e.jsx("li",{children:"超出限制時會阻擋輸入並顯示錯誤色"}),e.jsx("li",{children:"支援無障礙 aria-live 即時通知"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(a,{title:"🔄 清除功能範例",description:"支援清除按鈕功能：",code:`// 可清除的文字區域
<Textarea
  clearable
  placeholder="可清除的文字區域"
  defaultValue="這裡有一些預設文字，可以點擊右上角的清除按鈕來清空。"
  minRows={4}
  maxLength={100}
/>`,children:e.jsx(s,{clearable:!0,placeholder:"可清除的文字區域",defaultValue:"這裡有一些預設文字，可以點擊右上角的清除按鈕來清空。",minRows:4,maxLength:100})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"清除功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"clearable："}),"啟用清除按鈕"]}),e.jsx("li",{children:"清除按鈕位於右上角，當有內容時顯示"}),e.jsx("li",{children:"支援無障礙標籤和鍵盤操作"}),e.jsx("li",{children:"可以與字數統計功能組合使用"})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(a,{title:"🔄 禁用狀態範例",description:"展示禁用狀態下的各種樣式：",code:`// 禁用的文字區域
<Textarea disabled placeholder="禁用的文字區域" minRows={3} />

// 禁用的填充樣式
<Textarea disabled variant="filled" placeholder="禁用的填充樣式" minRows={3} />

// 禁用狀態下的預設內容
<Textarea disabled defaultValue="禁用狀態下的預設內容" minRows={3} />`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{disabled:!0,placeholder:"禁用的文字區域",minRows:3}),e.jsx(s,{disabled:!0,variant:"filled",placeholder:"禁用的填充樣式",minRows:3}),e.jsx(s,{disabled:!0,defaultValue:"禁用狀態下的預設內容",minRows:3})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(a,{title:"🔄 組合使用範例",description:"展示各種屬性的組合使用：",code:`// 大尺寸外框成功狀態
<Textarea
  size="lg"
  variant="outline"
  status="success"
  clearable
  placeholder="大尺寸外框成功狀態"
  defaultValue="組合範例文字"
  minRows={4}
  maxRows={8}
/>

// 小尺寸填充警告狀態
<Textarea
  size="sm"
  variant="filled"
  status="warning"
  placeholder="小尺寸填充警告狀態"
  minRows={2}
  resize="none"
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"lg",variant:"outline",status:"success",clearable:!0,placeholder:"大尺寸外框成功狀態",defaultValue:"組合範例文字",minRows:4,maxRows:8}),e.jsx(s,{size:"sm",variant:"filled",status:"warning",placeholder:"小尺寸填充警告狀態",minRows:2,resize:"none"})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Textarea } from 'eonui';

// 基本文字區域
<Textarea placeholder="請輸入內容" />

// 帶樣式的文字區域
<Textarea
  variant="filled"
  size="lg"
  placeholder="大尺寸填充樣式"
  minRows={4}
/>

// 可清除的文字區域
<Textarea
  placeholder="評論..."
  clearable
  minRows={3}
  maxRows={6}
  maxLength={200}
  showCount
/>

// 不同狀態
<Textarea
  status="error"
  placeholder="錯誤狀態"
  minRows={3}
/>

<Textarea
  status="success"
  placeholder="成功狀態"
  minRows={3}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
const [value, setValue] = useState('');

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
  minRows={4}
  maxRows={10}
/>

// 組合使用
<Textarea
  size="lg"
  variant="outline"
  status="success"
  clearable
  placeholder="詳細描述..."
  minRows={5}
  maxLength={500}
  resize="vertical"
/>

// 字數限制功能
<Textarea
  placeholder="最多 100 字的評論"
  maxLength={100}
  minRows={4}
/>

// 僅顯示字數統計
<Textarea
  placeholder="顯示字數統計"
  showCount
  minRows={3}
/>

// 固定大小
<Textarea
  minRows={6}
  maxRows={6}
  resize="none"
  placeholder="固定大小的文字區域"
/>

// 自訂樣式
<Textarea
  className="border-blue-500 focus:ring-blue-500"
  placeholder="自訂樣式"
  minRows={3}
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Textarea 組件的所有功能，可以在你的項目中開始使用了！ 這個多行文字輸入組件提供了豐富的自訂選項，適用於各種表單場景。"})]})]}),S={title:"Form/Textarea",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(w,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"文字區域的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"文字區域的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"文字區域的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},resize:{control:{type:"select"},options:["none","vertical","horizontal","both"],description:"是否可調整大小",table:{type:{summary:"string"},defaultValue:{summary:"vertical"}}},clearable:{control:{type:"boolean"},description:"是否顯示清除按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},minRows:{control:{type:"number",min:1,max:20},description:"最小行數",table:{type:{summary:"number"},defaultValue:{summary:"3"}}},maxRows:{control:{type:"number",min:1,max:20},description:"最大行數",table:{type:{summary:"number"}}},maxLength:{control:{type:"number",min:1,max:1e3},description:"最大字數限制",table:{type:{summary:"number"}}},showCount:{control:{type:"boolean"},description:"是否顯示字數統計",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"佔位符文字",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},value:{control:{type:"text"},description:"文字區域的值（受控組件）",table:{type:{summary:"string"}}},onClear:{action:"cleared",description:"清除按鈕的回調函數",table:{type:{summary:"() => void"}}},onChange:{action:"changed",description:"輸入值改變時的回調函數",table:{type:{summary:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},n={args:{placeholder:"請輸入內容",variant:"default",size:"md",status:"default",minRows:3,resize:"vertical"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '請輸入內容',
    variant: 'default',
    size: 'md',
    status: 'default',
    minRows: 3,
    resize: 'vertical'
  }
}`,...n.parameters?.docs?.source}}};const E=["Docs"];export{n as Docs,E as __namedExportsOrder,S as default};

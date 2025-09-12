import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as T,C as b}from"./blocks-CkfUBsx9.js";import{C as n}from"./CodeExample-BLH1THt2.js";import{c as N}from"./cn-Dtjc6EhN.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./iframe-sPMQY_tl.js";import"./index-C-73jOw_.js";const w={h1:"text-6xl font-bold",h2:"text-5xl font-bold",h3:"text-4xl font-bold",h4:"text-3xl font-semibold",h5:"text-2xl font-semibold",h6:"text-xl font-semibold",content:"text-base font-normal"},F={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",content:"p"},A={default:"text-gray-900",primary:"text-primary",secondary:"text-secondary",success:"text-success",warning:"text-warning",error:"text-error",muted:"text-gray-500"},H={left:"text-left",center:"text-center",right:"text-right",justify:"text-justify"},D={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},C={tight:"leading-tight",normal:"leading-normal",relaxed:"leading-relaxed",loose:"leading-loose"},V={tight:"tracking-tight",normal:"tracking-normal",wide:"tracking-wide",wider:"tracking-wider"},a=({variant:r="content",as:s,color:i="default",align:c="left",weight:t,italic:d=!1,underline:p=!1,strikethrough:u=!1,lineHeight:m="normal",letterSpacing:h="normal",truncate:y=!1,clamp:o,noWrap:g=!1,className:x,children:v})=>{const f=s||F[r],j=N(w[r],A[i],H[c],t&&D[t],C[m],V[h],d&&"italic",p&&"underline",u&&"line-through",y&&"truncate",g&&"whitespace-nowrap",o&&`line-clamp-${o}`,x);return e.jsx(f,{className:j,children:v})};a.displayName="Typography";try{a.displayName="Typography",a.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:{value:"content"},description:"Typography 變體，決定字體大小和樣式",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"content"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}},as:{defaultValue:null,description:`HTML 元素類型（可選，預設自動根據 variant 選擇）
用於視覺與語義分離，例如：視覺上是 H1 但語義上是 H2`,name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}},color:{defaultValue:{value:"default"},description:"文字顏色",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'},{value:'"muted"'}]}},align:{defaultValue:{value:"left"},description:"文字對齊方式",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},weight:{defaultValue:null,description:"字體粗細",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"medium"'},{value:'"semibold"'},{value:'"bold"'}]}},italic:{defaultValue:{value:"false"},description:"是否為斜體",name:"italic",required:!1,type:{name:"boolean | undefined"}},underline:{defaultValue:{value:"false"},description:"是否有底線",name:"underline",required:!1,type:{name:"boolean | undefined"}},strikethrough:{defaultValue:{value:"false"},description:"是否為刪除線",name:"strikethrough",required:!1,type:{name:"boolean | undefined"}},lineHeight:{defaultValue:{value:"normal"},description:"行高調整",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"tight"'},{value:'"relaxed"'},{value:'"loose"'}]}},letterSpacing:{defaultValue:{value:"normal"},description:"字間距調整",name:"letterSpacing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"tight"'},{value:'"wide"'},{value:'"wider"'}]}},truncate:{defaultValue:{value:"false"},description:"是否截斷文字（單行）",name:"truncate",required:!1,type:{name:"boolean | undefined"}},clamp:{defaultValue:null,description:"多行截斷的行數",name:"clamp",required:!1,type:{name:"number | undefined"}},noWrap:{defaultValue:{value:"false"},description:"是否不換行",name:"noWrap",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"子元素",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const B=()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"標題層級"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H1"}),e.jsx(a,{variant:"h1",children:"Typography 6rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H2"}),e.jsx(a,{variant:"h2",children:"Typography 4.8rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H3"}),e.jsx(a,{variant:"h3",children:"Typography 3.75rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H4"}),e.jsx(a,{variant:"h4",children:"Typography 3rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H5"}),e.jsx(a,{variant:"h5",children:"Typography 2.25rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"H6"}),e.jsx(a,{variant:"h6",children:"Typography 1.75rem"})]}),e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-16",children:"Content"}),e.jsx(a,{variant:"content",children:"Content 1rem - 這是標準的內文字體大小"})]})]})]})}),S=()=>{const r=[{name:"Default",value:"default"},{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Success",value:"success"},{name:"Warning",value:"warning"},{name:"Error",value:"error"},{name:"Muted",value:"muted"}];return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(s=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-gray-500 w-20",children:s.name}),e.jsxs(a,{color:s.value,as:"span",children:["範例文字 - ",s.name," 顏色"]})]},s.value))})},E=()=>{const r=[{name:"Normal",value:"normal"},{name:"Medium",value:"medium"},{name:"Semibold",value:"semibold"},{name:"Bold",value:"bold"}];return e.jsx("div",{className:"space-y-3",children:r.map(s=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-sm text-gray-500 w-20",children:s.name}),e.jsxs(a,{weight:s.value,children:["字體粗細展示 - ",s.name]})]},s.value))})},q=()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{italic:!0,children:"斜體文字範例"}),e.jsx(a,{underline:!0,children:"底線文字範例"}),e.jsx(a,{strikethrough:!0,children:"刪除線文字範例"}),e.jsx(a,{italic:!0,underline:!0,weight:"semibold",color:"primary",as:"span",children:"組合裝飾：斜體 + 底線 + 粗體 + 主色"})]}),k=()=>{const r="這是一段很長的文字，用來展示文字處理功能。當文字過長時，可以使用 truncate 來截斷，或使用 clamp 來限制行數，也可以使用 noWrap 來防止換行。";return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"文字截斷 (truncate)"}),e.jsx("div",{className:"max-w-xs border p-3 rounded",children:e.jsx(a,{truncate:!0,children:r})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:["多行截斷 (clamp=",2,")"]}),e.jsx("div",{className:"max-w-xs border p-3 rounded",children:e.jsx(a,{clamp:2,children:r})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"不換行 (noWrap)"}),e.jsx("div",{className:"max-w-xs border p-3 rounded overflow-hidden",children:e.jsx(a,{noWrap:!0,children:r})})]})]})},W=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Typography 字體排版"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的字體排版系統，提供完整的標題、內文和輔助文字樣式。 基於設計系統的字體規範，確保一致的視覺層次和閱讀體驗。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Typography 的各種屬性："}),e.jsx(T,{}),e.jsx(b,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(n,{title:"🔄 字體大小層級範例",description:"完整的字體大小層級，從 H1 到輔助文字：",code:`// 完整的字體大小層級
<Typography as="h1">H1 主標題</Typography>
<Typography as="h2">H2 次標題</Typography>
<Typography as="h3">H3 三級標題</Typography>
<Typography as="h4">H4 四級標題</Typography>
<Typography as="h5">H5 五級標題</Typography>
<Typography as="h6">H6 六級標題</Typography>
<Typography>標準內文</Typography>
<Typography size="sm">小型文字</Typography>
<Typography size="xs">輔助文字</Typography>`,children:e.jsx(B,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"H1-H3："}),"主要標題，用於頁面和區塊標題"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"H4-H6："}),"次要標題，用於內容區塊的小標題"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Content："}),"標準內文，用於主要文字內容"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(n,{title:"🔄 顏色選項範例",description:"不同語義化顏色的Typography：",code:`// 不同語義化顏色的Typography
<Typography color="default">預設文字顏色</Typography>
<Typography color="primary">主要品牌色</Typography>
<Typography color="secondary">次要品牌色</Typography>
<Typography color="success">成功狀態色</Typography>
<Typography color="warning">警告狀態色</Typography>
<Typography color="error">錯誤狀態色</Typography>
<Typography color="muted">次要文字色</Typography>`,children:e.jsx(S,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"顏色使用指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準文字顏色，適用於大部分內容"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Primary/Secondary："}),"品牌色，用於重要資訊或連結"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success/Warning/Error："}),"狀態色，用於反饋資訊"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Muted："}),"次要文字，用於輔助說明或禁用狀態"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(n,{title:"🔄 字體粗細範例",description:"不同粗細程度的文字：",code:`// 不同粗細程度的文字
<Typography weight="normal">Normal 正常粗細</Typography>
<Typography weight="medium">Medium 中等粗細</Typography>
<Typography weight="semibold">Semibold 半粗體</Typography>
<Typography weight="bold">Bold 粗體</Typography>`,children:e.jsx(E,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(n,{title:"🔄 文字裝飾範例",description:"不同的文字裝飾效果：",code:`// 不同的文字裝飾效果
<Typography italic>斜體文字 (italic)</Typography>
<Typography underline>底線文字 (underline)</Typography>
<Typography lineThrough>刪除線文字 (line-through)</Typography>
<Typography italic underline>斜體加底線</Typography>
<Typography weight="bold" underline>粗體加底線</Typography>`,children:e.jsx(q,{})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(n,{title:"🔄 文字處理範例",description:"不同的文字處理方式：",code:`// 不同的文字處理方式
<Typography truncate>
  這是一段很長的文字，會在超出容器寬度時被截斷並顯示省略號...
</Typography>

<Typography noWrap>
  這段文字不會換行，會保持在同一行顯示
</Typography>

<Typography>
  這是正常的文字，會根據容器寬度自動換行，
  當文字超出容器寬度時會自動換到下一行繼續顯示。
</Typography>`,children:e.jsx(k,{})})})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(n,{title:"🔄 文字對齊範例",description:"不同的文字對齊方式：",code:`// 不同的文字對齊方式
// 靠左對齊（預設）
<Typography align="left">靠左對齊的文字內容</Typography>

// 置中對齊
<Typography align="center">置中對齊的文字內容</Typography>

// 靠右對齊
<Typography align="right">靠右對齊的文字內容</Typography>

// 兩端對齊
<Typography align="justify">
  兩端對齊的文字內容，會自動調整間距使左右兩端都對齊容器邊緣
</Typography>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"靠左對齊 (left)"}),e.jsx("div",{className:"border p-6 rounded bg-gray-50",children:e.jsx(a,{align:"left",children:"這是靠左對齊的文字範例。在大多數語言中，這是最常見的對齊方式。 文字會從容器的左邊緣開始排列，形成左邊整齊、右邊不規則的效果。 這種對齊方式閱讀起來最自然，適合大部分的內容展示。"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"置中對齊 (center)"}),e.jsx("div",{className:"border p-6 rounded bg-gray-50",children:e.jsx(a,{align:"center",children:"這是置中對齊的文字範例。文字會在容器的中央位置對齊， 兩邊保持相等的邊距。這種對齊方式常用於標題、引用文字， 或需要強調的重要內容，能夠吸引讀者的注意力。"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"靠右對齊 (right)"}),e.jsx("div",{className:"border p-6 rounded bg-gray-50",children:e.jsx(a,{align:"right",children:"這是靠右對齊的文字範例。文字會從容器的右邊緣開始排列， 形成右邊整齊、左邊不規則的效果。在某些設計中， 這種對齊方式可以創造特殊的視覺效果，或用於特定的版面設計需求。"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"兩端對齊 (justify)"}),e.jsx("div",{className:"border p-6 rounded bg-gray-50",children:e.jsx(a,{align:"justify",children:"這是兩端對齊的文字範例。文字會在容器中均勻分布，使得每一行的左右兩端都對齊容器的邊緣。 這種對齊方式會自動調整單字或字元之間的間距，創造出整齊劃一的視覺效果。 兩端對齊特別適用於報紙、雜誌或書籍等正式出版物，能夠提供專業、整潔的排版外觀。 不過需要注意的是，在較短的行或較寬的容器中，可能會產生不自然的間距。"})})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Typography } from 'eonui';

// 基本標題
<Typography variant="h1">頁面主標題</Typography>
<Typography variant="h2">區塊標題</Typography>
<Typography variant="h3">小節標題</Typography>

// 內文文字
<Typography variant="content">
  這是標準的內文段落，適用於主要文字內容。
</Typography>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 視覺與語義分離（謹慎使用）
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
</Typography>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"📝 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Typography 組件的所有功能，可以在你的項目中開始使用了！ 記住要保持文字層級的一致性，並考慮可及性和使用者體驗。"})]})]}),U={title:"Components/Typography",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(W,{})}},argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","content"],description:"Typography 變體，決定字體大小和樣式",table:{type:{summary:"string"},defaultValue:{summary:"content"}}},as:{control:{type:"select"},options:[void 0,"h1","h2","h3","h4","h5","h6","p","span"],description:"HTML 元素類型（可選，預設自動根據 variant 選擇）。用於視覺與語義分離。",table:{type:{summary:"string"},defaultValue:{summary:"undefined (auto)"}}},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","muted"],description:"文字顏色",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},align:{control:{type:"select"},options:["left","center","right","justify"],description:"文字對齊方式",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"],description:"字體粗細",table:{type:{summary:"string"}}},italic:{control:{type:"boolean"},description:"是否為斜體",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},underline:{control:{type:"boolean"},description:"是否有底線",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},strikethrough:{control:{type:"boolean"},description:"是否為刪除線",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},lineHeight:{control:{type:"select"},options:["tight","normal","relaxed","loose"],description:"行高調整",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},letterSpacing:{control:{type:"select"},options:["tight","normal","wide","wider"],description:"字間距調整",table:{type:{summary:"string"},defaultValue:{summary:"normal"}}},truncate:{control:{type:"boolean"},description:"是否截斷文字（單行）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},clamp:{control:{type:"number",min:1,max:20},description:"多行截斷的行數（支援 1-20 行）",table:{type:{summary:"number"}}},noWrap:{control:{type:"boolean"},description:"是否不換行",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:{type:"text"},description:"文字內容",table:{type:{summary:"ReactNode"}}}},tags:["autodocs"]},l={args:{variant:"h3",color:"primary",align:"center",children:"這是可以即時調整的範例文字"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    color: 'primary',
    align: 'center',
    children: '這是可以即時調整的範例文字'
  }
}`,...l.parameters?.docs?.source}}};const $=["Docs"];export{l as Docs,$ as __namedExportsOrder,U as default};

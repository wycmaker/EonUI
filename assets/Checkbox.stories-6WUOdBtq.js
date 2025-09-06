import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-DMlPHyXL.js";import{P as b,C as v}from"./blocks-C_eD2Myt.js";import{C as s,a as o}from"./Checkbox-4icjkLXB.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-BV-bFhAu.js";import"./cn-Dtjc6EhN.js";const k=()=>{const[c,l]=i.useState(["reading","music"]),[a,t]=i.useState(["zh"]),[r,h]=i.useState(["email"]);return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"興趣愛好"}),e.jsxs(o,{value:c,onChange:l,children:[e.jsx(s,{value:"reading",children:"閱讀"}),e.jsx(s,{value:"music",children:"音樂"}),e.jsx(s,{value:"sports",children:"運動"}),e.jsx(s,{value:"travel",children:"旅行"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"語言能力"}),e.jsxs(o,{value:a,onChange:t,direction:"horizontal",children:[e.jsx(s,{value:"zh",children:"中文"}),e.jsx(s,{value:"en",children:"英文"}),e.jsx(s,{value:"ja",children:"日文"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"通知設定"}),e.jsxs(o,{value:r,onChange:h,size:"lg",children:[e.jsx(s,{value:"email",children:"電子郵件"}),e.jsx(s,{value:"sms",children:"簡訊"}),e.jsx(s,{value:"push",children:"推播通知"}),e.jsx(s,{value:"app",children:"應用內通知"})]})]})]})},C=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Checkbox 複選框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的複選框組件，提供單個 Checkbox 和 CheckboxGroup 兩種使用方式。 設計風格類似 Element Plus，支援多種大小、顏色和狀態，支援多選功能和不確定狀態。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Checkbox 的各種屬性："}),e.jsx(b,{}),e.jsx(v,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔄 實際使用範例"}),e.jsx("p",{className:"component-docs-section-description",children:"以下是實際的複選框範例，展示各種功能組合："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(k,{})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎯 基本用法"}),e.jsx("p",{className:"component-docs-section-description",children:"Checkbox 可以單獨使用或配合 CheckboxGroup 使用："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"單獨使用 Checkbox"}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(s,{value:"option1",defaultChecked:!0,children:"已選中的選項"}),e.jsx(s,{value:"option2",children:"未選中的選項"}),e.jsx(s,{value:"option3",indeterminate:!0,children:"不確定狀態（部分選中）"}),e.jsx(s,{value:"option4",disabled:!0,children:"禁用的選項"}),e.jsx(s,{value:"option5",disabled:!0,defaultChecked:!0,children:"禁用且選中"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"使用 CheckboxGroup"}),e.jsxs(o,{defaultValue:["option1","option3"],children:[e.jsx(s,{value:"option1",children:"選項一"}),e.jsx(s,{value:"option2",children:"選項二"}),e.jsx(s,{value:"option3",children:"選項三"}),e.jsx(s,{value:"option4",children:"選項四"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📏 大小選項"}),e.jsx("p",{className:"component-docs-section-description",children:"支援三種不同的大小選項："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx("div",{className:"space-y-6",children:["sm","md","lg"].map(c=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:["大小：",c.toUpperCase()]}),e.jsxs(o,{defaultValue:["option1"],size:c,direction:"horizontal",children:[e.jsx(s,{value:"option1",children:"選項一"}),e.jsx(s,{value:"option2",children:"選項二"}),e.jsx(s,{value:"option3",children:"選項三"})]})]},c))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"小尺寸，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"中等尺寸（預設），適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"大尺寸，適用於需要突出的選項"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎨 顏色選項"}),e.jsx("p",{className:"component-docs-section-description",children:"支援多種顏色主題："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[{color:"primary",label:"主要色"},{color:"secondary",label:"次要色"},{color:"success",label:"成功色"},{color:"warning",label:"警告色"},{color:"error",label:"錯誤色"}].map(({color:c,label:l})=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:l}),e.jsx("div",{className:"flex space-x-4",children:e.jsxs(o,{defaultValue:["checked"],direction:"horizontal",children:[e.jsx(s,{value:"checked",color:c,children:"已選中"}),e.jsx(s,{value:"unchecked",color:c,children:"未選中"})]})})]},c))})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"❓ 不確定狀態"}),e.jsx("p",{className:"component-docs-section-description",children:"Checkbox 支援不確定（indeterminate）狀態，常用於「全選/部分選中」的場景："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(N,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"不確定狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"用途："}),"表示部分子項目被選中，常見於樹狀選擇"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"視覺："}),"顯示橫線而非勾選標記"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙："}),'aria-checked 設為 "mixed"']})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📐 排列方向"}),e.jsx("p",{className:"component-docs-section-description",children:"CheckboxGroup 支援垂直和水平兩種排列方向："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"垂直排列（預設）"}),e.jsxs(o,{defaultValue:["vertical1"],direction:"vertical",children:[e.jsx(s,{value:"vertical1",children:"垂直選項一"}),e.jsx(s,{value:"vertical2",children:"垂直選項二"}),e.jsx(s,{value:"vertical3",children:"垂直選項三"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"水平排列"}),e.jsxs(o,{defaultValue:["horizontal1","horizontal3"],direction:"horizontal",children:[e.jsx(s,{value:"horizontal1",children:"水平選項一"}),e.jsx(s,{value:"horizontal2",children:"水平選項二"}),e.jsx(s,{value:"horizontal3",children:"水平選項三"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🚫 禁用狀態"}),e.jsx("p",{className:"component-docs-section-description",children:"支援單個 Checkbox 禁用或整個 CheckboxGroup 禁用："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"單個 Checkbox 禁用"}),e.jsxs(o,{defaultValue:["option1"],children:[e.jsx(s,{value:"option1",children:"正常選項"}),e.jsx(s,{value:"option2",disabled:!0,children:"禁用選項"}),e.jsx(s,{value:"option3",disabled:!0,defaultChecked:!0,children:"禁用且選中"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"整個 CheckboxGroup 禁用"}),e.jsxs(o,{defaultValue:["option1","option3"],disabled:!0,children:[e.jsx(s,{value:"option1",children:"群組禁用選項一"}),e.jsx(s,{value:"option2",children:"群組禁用選項二"}),e.jsx(s,{value:"option3",children:"群組禁用選項三"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"⬜ 無標籤 Checkbox"}),e.jsx("p",{className:"component-docs-section-description",children:"Checkbox 可以不帶標籤文字："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同大小："}),e.jsxs(o,{defaultValue:["md"],direction:"horizontal",children:[e.jsx(s,{value:"sm",size:"sm"}),e.jsx(s,{value:"md",size:"md"}),e.jsx(s,{value:"lg",size:"lg"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同顏色："}),e.jsxs(o,{defaultValue:["primary","success"],direction:"horizontal",children:[e.jsx(s,{value:"primary",color:"primary"}),e.jsx(s,{value:"success",color:"success"}),e.jsx(s,{value:"warning",color:"warning"}),e.jsx(s,{value:"error",color:"error"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔗 複雜範例"}),e.jsx("p",{className:"component-docs-section-description",children:"展示實際應用場景的複雜範例："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx("div",{className:"max-w-lg space-y-6",children:e.jsxs("div",{className:"border rounded-lg p-6 bg-gray-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用戶權限設定"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"基本權限"}),e.jsxs(o,{defaultValue:["read","create"],size:"sm",children:[e.jsx(s,{value:"read",children:"讀取"}),e.jsx(s,{value:"create",children:"建立"}),e.jsx(s,{value:"update",children:"更新"}),e.jsx(s,{value:"delete",children:"刪除"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"通知偏好"}),e.jsxs(o,{defaultValue:["email"],direction:"horizontal",size:"sm",children:[e.jsx(s,{value:"email",children:"郵件"}),e.jsx(s,{value:"sms",children:"簡訊"}),e.jsx(s,{value:"push",children:"推播"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"功能模組"}),e.jsxs(o,{defaultValue:["dashboard","reports"],children:[e.jsx(s,{value:"dashboard",children:"儀表板"}),e.jsx(s,{value:"users",children:"用戶管理"}),e.jsx(s,{value:"reports",children:"報表分析"}),e.jsx(s,{value:"settings",children:"系統設定"})]})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Checkbox, CheckboxGroup } from 'eonui';

// 單獨使用 Checkbox
<Checkbox value="option1" defaultChecked>
  選項一
</Checkbox>

// 使用 CheckboxGroup
<CheckboxGroup 
  defaultValue={['option1', 'option3']} 
  onChange={(value) => console.log(value)}
>
  <Checkbox value="option1">選項一</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
  <Checkbox value="option3">選項三</Checkbox>
</CheckboxGroup>

// 水平排列
<CheckboxGroup direction="horizontal" defaultValue={['basic']}>
  <Checkbox value="basic">基礎版</Checkbox>
  <Checkbox value="pro">專業版</Checkbox>
  <Checkbox value="enterprise">企業版</Checkbox>
</CheckboxGroup>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
const [hobbies, setHobbies] = useState(['reading', 'music']);

<CheckboxGroup value={hobbies} onChange={setHobbies}>
  <Checkbox value="reading">閱讀</Checkbox>
  <Checkbox value="music">音樂</Checkbox>
  <Checkbox value="sports">運動</Checkbox>
</CheckboxGroup>

// 不同大小和顏色
<CheckboxGroup size="lg" defaultValue={['success']}>
  <Checkbox value="success" color="success">成功</Checkbox>
  <Checkbox value="warning" color="warning">警告</Checkbox>
  <Checkbox value="error" color="error">錯誤</Checkbox>
</CheckboxGroup>

// 不確定狀態
<Checkbox
  value="parent"
  indeterminate={hasPartialSelection}
  checked={allSelected}
  onChange={handleParentChange}
>
  全選
</Checkbox>

// 禁用狀態
<CheckboxGroup disabled defaultValue={['option1']}>
  <Checkbox value="option1">選項一</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
</CheckboxGroup>

// 無標籤 Checkbox
<div className="flex space-x-2">
  <Checkbox value="1" defaultChecked />
  <Checkbox value="2" />
  <Checkbox value="3" />
</div>

// 單獨 Checkbox 的事件處理
<Checkbox
  value="custom"
  onChange={(checked, value) => {
    console.log('Checkbox changed:', checked, value);
  }}
>
  自訂事件處理
</Checkbox>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Checkbox 組件的所有功能，可以在你的項目中開始使用了！ Checkbox 組件提供了靈活的多選功能，適用於各種表單和設定場景。"})]})]}),N=()=>{const[c]=i.useState([{id:"item1",label:"項目一",checked:!0},{id:"item2",label:"項目二",checked:!1},{id:"item3",label:"項目三",checked:!0}]),[l,a]=i.useState(["item1","item3"]),t=l.length===c.length,r=l.length>0&&l.length<c.length,h=n=>{a(n?c.map(x=>x.id):[])},p=(n,x)=>{const u=x;a(n?m=>[...m,u]:m=>m.filter(j=>j!==u))};return e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{value:"parent",checked:t,indeterminate:r,onChange:h,children:e.jsxs("strong",{children:["全選（",l.length,"/",c.length,"）"]})}),e.jsx("div",{className:"ml-6 space-y-2",children:c.map(n=>e.jsx(s,{value:n.id,checked:l.includes(n.id),onChange:p,children:n.label},n.id))})]})},I={title:"Components/Checkbox",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(C,{})}},argTypes:{value:{control:{type:"text"},description:"Checkbox 的值",table:{type:{summary:"string | number"}}},checked:{control:{type:"boolean"},description:"是否選中（受控組件）",table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"預設是否選中（非受控組件）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indeterminate:{control:{type:"boolean"},description:"是否為不確定狀態（部分選中）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Checkbox 大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},color:{control:{type:"select"},options:["primary","secondary","success","warning","error"],description:"狀態顏色",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},children:{control:{type:"text"},description:"標籤文字",table:{type:{summary:"ReactNode"}}},onChange:{action:"changed",description:"值改變時的回調",table:{type:{summary:"(checked: boolean, value: string | number) => void"}}}},tags:["autodocs"]},d={args:{value:"example",children:"Checkbox 選項",size:"md",color:"primary",defaultChecked:!1,indeterminate:!1,disabled:!1}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'example',
    children: 'Checkbox 選項',
    size: 'md',
    color: 'primary',
    defaultChecked: false,
    indeterminate: false,
    disabled: false
  }
}`,...d.parameters?.docs?.source}}};const E=["Docs"];export{d as Docs,E as __namedExportsOrder,I as default};

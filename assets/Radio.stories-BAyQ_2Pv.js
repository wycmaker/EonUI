import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DtrAF50Y.js";import{P as m,C as p}from"./blocks-CAYfFhLU.js";import{C as d}from"./CodeExample-vFRyXKH9.js";import{a,R as o}from"./Radio-DdBTJF4y.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-DDMkSrZn.js";import"./cn-Dtjc6EhN.js";const h=()=>{const[i,s]=r.useState("male"),[c,n]=r.useState("basic"),[t,u]=r.useState("email");return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"性別選擇"}),e.jsxs(o,{value:i,onChange:s,children:[e.jsx(a,{value:"male",children:"男性"}),e.jsx(a,{value:"female",children:"女性"}),e.jsx(a,{value:"other",children:"其他"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"方案選擇"}),e.jsxs(o,{value:c,onChange:n,direction:"horizontal",children:[e.jsx(a,{value:"basic",children:"基礎版"}),e.jsx(a,{value:"pro",children:"專業版"}),e.jsx(a,{value:"enterprise",children:"企業版"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"通知設定"}),e.jsxs(o,{value:t,onChange:u,size:"lg",children:[e.jsx(a,{value:"email",children:"電子郵件"}),e.jsx(a,{value:"sms",children:"簡訊"}),e.jsx(a,{value:"push",children:"推播通知"}),e.jsx(a,{value:"none",children:"不接收通知"})]})]})]})},R=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Radio 單選框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的單選框組件，提供單個 Radio 和 RadioGroup 兩種使用方式。 設計風格類似 Element Plus，支援多種大小、顏色和狀態，提供靈活的單選功能。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Radio 的各種屬性："}),e.jsx(m,{}),e.jsx(p,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 實際使用範例",description:"以下是實際的單選框範例，展示各種功能組合：",code:`// 互動式 Radio 範例
const [basicValue, setBasicValue] = useState('option1');
const [preferences, setPreferences] = useState('email');
const [theme, setTheme] = useState('light');

return (
  <div className="space-y-8 w-full max-w-md">
    <div>
      <h4 className="font-medium mb-3 text-gray-700">基本選項</h4>
      <RadioGroup value={basicValue} onChange={setBasicValue}>
        <Radio value="option1">選項一</Radio>
        <Radio value="option2">選項二</Radio>
        <Radio value="option3">選項三</Radio>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3 text-gray-700">通知偏好</h4>
      <RadioGroup value={preferences} onChange={setPreferences} direction="horizontal">
        <Radio value="email">電子郵件</Radio>
        <Radio value="sms">簡訊</Radio>
        <Radio value="push">推播通知</Radio>
      </RadioGroup>
    </div>
  </div>
);`,children:e.jsx(h,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsxs("div",{className:"space-y-6 w-full",children:[e.jsx(d,{title:"🔄 單獨使用 Radio",description:"Radio 可以單獨使用或配合 RadioGroup 使用：",code:`// 不同狀態的 Radio 按鈕
<Radio value="option1" defaultChecked>
  已選中的選項
</Radio>
<Radio value="option2">未選中的選項</Radio>
<Radio value="option3" disabled>
  禁用的選項
</Radio>`,children:e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(a,{value:"option1",defaultChecked:!0,children:"已選中的選項"}),e.jsx(a,{value:"option2",children:"未選中的選項"}),e.jsx(a,{value:"option3",disabled:!0,children:"禁用的選項"})]})}),e.jsx(d,{title:"使用 RadioGroup",code:`// 群組管理多個 Radio
<RadioGroup defaultValue="option1">
  <Radio value="option1">選項一</Radio>
  <Radio value="option2">選項二</Radio>
  <Radio value="option3">選項三</Radio>
</RadioGroup>`,children:e.jsxs(o,{defaultValue:"option1",children:[e.jsx(a,{value:"option1",children:"選項一"}),e.jsx(a,{value:"option2",children:"選項二"}),e.jsx(a,{value:"option3",children:"選項三"})]})})]})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 大小選項範例",description:"支援三種不同的大小選項：",code:`// 三種不同的 Radio 大小
<RadioGroup defaultValue="option1" size="sm" direction="horizontal">
  <Radio value="option1">小尺寸</Radio>
  <Radio value="option2">選項二</Radio>
</RadioGroup>

<RadioGroup defaultValue="option1" size="md" direction="horizontal">
  <Radio value="option1">中等尺寸</Radio>
  <Radio value="option2">選項二</Radio>
</RadioGroup>

<RadioGroup defaultValue="option1" size="lg" direction="horizontal">
  <Radio value="option1">大尺寸</Radio>
  <Radio value="option2">選項二</Radio>
</RadioGroup>`,children:e.jsx("div",{className:"space-y-6",children:["sm","md","lg"].map(i=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:["大小：",i.toUpperCase()]}),e.jsxs(o,{defaultValue:"option1",size:i,direction:"horizontal",children:[e.jsx(a,{value:"option1",children:"選項一"}),e.jsx(a,{value:"option2",children:"選項二"}),e.jsx(a,{value:"option3",children:"選項三"})]})]},i))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"小尺寸，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"中等尺寸（預設），適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"大尺寸，適用於需要突出的選項"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 顏色選項範例",description:"支援多種顏色主題：",code:`// 不同顏色的 Radio 組件
// 主要色
<RadioGroup defaultValue="checked" direction="horizontal">
  <Radio value="checked" color="primary">已選中</Radio>
  <Radio value="unchecked" color="primary">未選中</Radio>
</RadioGroup>

// 成功色
<RadioGroup defaultValue="checked" direction="horizontal">
  <Radio value="checked" color="success">已選中</Radio>
  <Radio value="unchecked" color="success">未選中</Radio>
</RadioGroup>

// 警告色
<RadioGroup defaultValue="checked" direction="horizontal">
  <Radio value="checked" color="warning">已選中</Radio>
  <Radio value="unchecked" color="warning">未選中</Radio>
</RadioGroup>

// 錯誤色
<RadioGroup defaultValue="checked" direction="horizontal">
  <Radio value="checked" color="error">已選中</Radio>
  <Radio value="unchecked" color="error">未選中</Radio>
</RadioGroup>`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[{color:"primary",label:"主要色"},{color:"secondary",label:"次要色"},{color:"success",label:"成功色"},{color:"warning",label:"警告色"},{color:"error",label:"錯誤色"}].map(({color:i,label:s})=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:s}),e.jsx("div",{className:"flex space-x-4",children:e.jsxs(o,{defaultValue:"checked",direction:"horizontal",children:[e.jsx(a,{value:"checked",color:i,children:"已選中"}),e.jsx(a,{value:"unchecked",color:i,children:"未選中"})]})})]},i))})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 排列方向範例",description:"RadioGroup 支援垂直和水平兩種排列方向：",code:`// 垂直排列（預設）
<RadioGroup defaultValue="vertical1" direction="vertical">
  <Radio value="vertical1">垂直選項一</Radio>
  <Radio value="vertical2">垂直選項二</Radio>
  <Radio value="vertical3">垂直選項三</Radio>
</RadioGroup>

// 水平排列
<RadioGroup defaultValue="horizontal1" direction="horizontal">
  <Radio value="horizontal1">水平選項一</Radio>
  <Radio value="horizontal2">水平選項二</Radio>
  <Radio value="horizontal3">水平選項三</Radio>
</RadioGroup>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"垂直排列（預設）"}),e.jsxs(o,{defaultValue:"vertical1",direction:"vertical",children:[e.jsx(a,{value:"vertical1",children:"垂直選項一"}),e.jsx(a,{value:"vertical2",children:"垂直選項二"}),e.jsx(a,{value:"vertical3",children:"垂直選項三"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"水平排列"}),e.jsxs(o,{defaultValue:"horizontal1",direction:"horizontal",children:[e.jsx(a,{value:"horizontal1",children:"水平選項一"}),e.jsx(a,{value:"horizontal2",children:"水平選項二"}),e.jsx(a,{value:"horizontal3",children:"水平選項三"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 禁用狀態範例",description:"支援單個 Radio 禁用或整個 RadioGroup 禁用：",code:`// 單個 Radio 禁用
<RadioGroup defaultValue="option1">
  <Radio value="option1">正常選項</Radio>
  <Radio value="option2" disabled>禁用選項</Radio>
  <Radio value="option3" disabled defaultChecked>禁用且選中</Radio>
</RadioGroup>

// 整個 RadioGroup 禁用
<RadioGroup defaultValue="option1" disabled>
  <Radio value="option1">群組禁用選項一</Radio>
  <Radio value="option2">群組禁用選項二</Radio>
  <Radio value="option3">群組禁用選項三</Radio>
</RadioGroup>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"單個 Radio 禁用"}),e.jsxs(o,{defaultValue:"option1",children:[e.jsx(a,{value:"option1",children:"正常選項"}),e.jsx(a,{value:"option2",disabled:!0,children:"禁用選項"}),e.jsx(a,{value:"option3",disabled:!0,defaultChecked:!0,children:"禁用且選中"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"整個 RadioGroup 禁用"}),e.jsxs(o,{defaultValue:"option1",disabled:!0,children:[e.jsx(a,{value:"option1",children:"群組禁用選項一"}),e.jsx(a,{value:"option2",children:"群組禁用選項二"}),e.jsx(a,{value:"option3",children:"群組禁用選項三"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 無標籤 Radio 範例",description:"Radio 可以不帶標籤文字：",code:`// 不同大小的無標籤 Radio
<RadioGroup defaultValue="sm" direction="horizontal">
  <Radio value="sm" size="sm">小尺寸</Radio>
  <Radio value="md" size="md">中尺寸</Radio>
  <Radio value="lg" size="lg">大尺寸</Radio>
</RadioGroup>

// 不同顏色的無標籤 Radio
<RadioGroup defaultValue="primary" direction="horizontal">
  <Radio value="primary" color="primary" />
  <Radio value="success" color="success" />
  <Radio value="warning" color="warning" />
  <Radio value="error" color="error" />
</RadioGroup>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同大小："}),e.jsxs(o,{defaultValue:"sm",direction:"horizontal",children:[e.jsx(a,{value:"sm",size:"sm",children:"小尺寸"}),e.jsx(a,{value:"md",size:"md",children:"中尺寸"}),e.jsx(a,{value:"lg",size:"lg",children:"大尺寸"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同顏色："}),e.jsxs(o,{defaultValue:"primary",direction:"horizontal",children:[e.jsx(a,{value:"primary",color:"primary"}),e.jsx(a,{value:"success",color:"success"}),e.jsx(a,{value:"warning",color:"warning"}),e.jsx(a,{value:"error",color:"error"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(d,{title:"🔄 複雜範例 - 用戶設定表單",description:"展示實際應用場景的複雜範例：",code:`// 複雜的表單範例
<div className="border rounded-lg p-6 bg-gray-50">
  <h3 className="text-lg font-semibold mb-4">用戶設定</h3>

  <div className="space-y-4">
    {/* 通知頻率 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        通知頻率
      </label>
      <RadioGroup defaultValue="daily" size="sm">
        <Radio value="realtime">即時通知</Radio>
        <Radio value="daily">每日摘要</Radio>
        <Radio value="weekly">每週摘要</Radio>
        <Radio value="never">從不通知</Radio>
      </RadioGroup>
    </div>

    {/* 主題偏好 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        主題偏好
      </label>
      <RadioGroup defaultValue="auto" direction="horizontal" size="sm">
        <Radio value="light">淺色</Radio>
        <Radio value="dark">深色</Radio>
        <Radio value="auto">自動</Radio>
      </RadioGroup>
    </div>

    {/* 隱私設定 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        隱私設定
      </label>
      <RadioGroup defaultValue="friends">
        <Radio value="public">公開</Radio>
        <Radio value="friends">僅好友</Radio>
        <Radio value="private">私人</Radio>
      </RadioGroup>
    </div>
  </div>
</div>`,children:e.jsx("div",{className:"max-w-lg space-y-6",children:e.jsxs("div",{className:"border rounded-lg p-6 bg-gray-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用戶設定"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"通知頻率"}),e.jsxs(o,{defaultValue:"daily",size:"sm",children:[e.jsx(a,{value:"realtime",children:"即時通知"}),e.jsx(a,{value:"daily",children:"每日摘要"}),e.jsx(a,{value:"weekly",children:"每週摘要"}),e.jsx(a,{value:"never",children:"從不通知"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"主題偏好"}),e.jsxs(o,{defaultValue:"auto",direction:"horizontal",size:"sm",children:[e.jsx(a,{value:"light",children:"淺色"}),e.jsx(a,{value:"dark",children:"深色"}),e.jsx(a,{value:"auto",children:"自動"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"隱私設定"}),e.jsxs(o,{defaultValue:"friends",children:[e.jsx(a,{value:"public",children:"公開"}),e.jsx(a,{value:"friends",children:"僅好友"}),e.jsx(a,{value:"private",children:"私人"})]})]})]})]})})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Radio, RadioGroup } from 'eonui';

// 單獨使用 Radio
<Radio value="option1" defaultChecked>
  選項一
</Radio>

// 使用 RadioGroup
<RadioGroup defaultValue="option1" onChange={(value) => console.log(value)}>
  <Radio value="option1">選項一</Radio>
  <Radio value="option2">選項二</Radio>
  <Radio value="option3">選項三</Radio>
</RadioGroup>

// 水平排列
<RadioGroup direction="horizontal" defaultValue="basic">
  <Radio value="basic">基礎版</Radio>
  <Radio value="pro">專業版</Radio>
  <Radio value="enterprise">企業版</Radio>
</RadioGroup>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
const [gender, setGender] = useState('male');

<RadioGroup value={gender} onChange={setGender}>
  <Radio value="male">男性</Radio>
  <Radio value="female">女性</Radio>
  <Radio value="other">其他</Radio>
</RadioGroup>

// 不同大小和顏色
<RadioGroup size="lg" defaultValue="success">
  <Radio value="success" color="success">成功</Radio>
  <Radio value="warning" color="warning">警告</Radio>
  <Radio value="error" color="error">錯誤</Radio>
</RadioGroup>

// 禁用狀態
<RadioGroup disabled defaultValue="option1">
  <Radio value="option1">選項一</Radio>
  <Radio value="option2">選項二</Radio>
</RadioGroup>

// 無標籤 Radio
<div className="flex space-x-2">
  <Radio value="1" defaultChecked />
  <Radio value="2" />
  <Radio value="3" />
</div>

// 單獨 Radio 的事件處理
<Radio
  value="custom"
  onChange={(checked, value) => {
    console.log('Radio changed:', checked, value);
  }}
>
  自訂事件處理
</Radio>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Radio 組件的所有功能，可以在你的項目中開始使用了！ Radio 組件提供了靈活的單選功能，適用於各種表單和設定場景。"})]})]}),z={title:"Form/Radio",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(R,{})}},argTypes:{value:{control:{type:"text"},description:"Radio 的值",table:{type:{summary:"string | number"}}},checked:{control:{type:"boolean"},description:"是否選中（受控組件）",table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"預設是否選中（非受控組件）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Radio 大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},color:{control:{type:"select"},options:["primary","secondary","success","warning","error"],description:"狀態顏色",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},children:{control:{type:"text"},description:"標籤文字",table:{type:{summary:"ReactNode"}}},onChange:{action:"changed",description:"值改變時的回調",table:{type:{summary:"(checked: boolean, value: string | number) => void"}}}},tags:["autodocs"]},l={args:{value:"example",children:"Radio 選項",size:"md",color:"primary",defaultChecked:!1,disabled:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'example',
    children: 'Radio 選項',
    size: 'md',
    color: 'primary',
    defaultChecked: false,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};const V=["Docs"];export{l as Docs,V as __namedExportsOrder,z as default};

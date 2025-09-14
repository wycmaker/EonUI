import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DtrAF50Y.js";import{P as p,C as v}from"./blocks-CAYfFhLU.js";import{C as l}from"./CodeExample-vFRyXKH9.js";import{C as o,a as s}from"./Checkbox-BHYJFZpc.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-DDMkSrZn.js";import"./cn-Dtjc6EhN.js";const j=()=>{const[c,a]=n.useState(["reading","music"]),[t,h]=n.useState(["zh"]),[d,x]=n.useState(["email"]);return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"興趣愛好"}),e.jsxs(s,{value:c,onChange:a,children:[e.jsx(o,{value:"reading",children:"閱讀"}),e.jsx(o,{value:"music",children:"音樂"}),e.jsx(o,{value:"sports",children:"運動"}),e.jsx(o,{value:"travel",children:"旅行"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"語言能力"}),e.jsxs(s,{value:t,onChange:h,direction:"horizontal",children:[e.jsx(o,{value:"zh",children:"中文"}),e.jsx(o,{value:"en",children:"英文"}),e.jsx(o,{value:"ja",children:"日文"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"通知設定"}),e.jsxs(s,{value:d,onChange:x,size:"lg",children:[e.jsx(o,{value:"email",children:"電子郵件"}),e.jsx(o,{value:"sms",children:"簡訊"}),e.jsx(o,{value:"push",children:"推播通知"}),e.jsx(o,{value:"app",children:"應用內通知"})]})]})]})},g=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Checkbox 複選框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的複選框組件，提供單個 Checkbox 和 CheckboxGroup 兩種使用方式。 設計風格類似 Element Plus，支援多種大小、顏色和狀態，支援多選功能和不確定狀態。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Checkbox 的各種屬性："}),e.jsx(p,{}),e.jsx(v,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔄 實際使用範例",description:"以下是實際的複選框範例，展示各種功能組合：",code:`// 互動式 Checkbox 範例
const [hobbies, setHobbies] = useState<(string | number)[]>(['reading', 'music']);
const [languages, setLanguages] = useState<(string | number)[]>(['zh']);
const [notifications, setNotifications] = useState<(string | number)[]>(['email']);

return (
  <div className="space-y-8 w-full max-w-md">
    {/* 基本 CheckboxGroup */}
    <div>
      <h4 className="font-medium mb-3 text-gray-700">興趣愛好</h4>
      <CheckboxGroup value={hobbies} onChange={setHobbies}>
        <Checkbox value="reading">閱讀</Checkbox>
        <Checkbox value="music">音樂</Checkbox>
        <Checkbox value="sports">運動</Checkbox>
        <Checkbox value="travel">旅行</Checkbox>
      </CheckboxGroup>
    </div>

    {/* 水平排列 */}
    <div>
      <h4 className="font-medium mb-3 text-gray-700">語言能力</h4>
      <CheckboxGroup
        value={languages}
        onChange={setLanguages}
        direction="horizontal"
      >
        <Checkbox value="zh">中文</Checkbox>
        <Checkbox value="en">英文</Checkbox>
        <Checkbox value="ja">日文</Checkbox>
      </CheckboxGroup>
    </div>

    {/* 不同大小 */}
    <div>
      <h4 className="font-medium mb-3 text-gray-700">通知設定</h4>
      <CheckboxGroup
        value={notifications}
        onChange={setNotifications}
        size="lg"
      >
        <Checkbox value="email">電子郵件</Checkbox>
        <Checkbox value="sms">簡訊</Checkbox>
        <Checkbox value="push">推播通知</Checkbox>
        <Checkbox value="app">應用內通知</Checkbox>
      </CheckboxGroup>
    </div>
  </div>
);`,children:e.jsx(j,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsxs("div",{className:"space-y-6 w-full",children:[e.jsx(l,{title:"🔄 單獨使用 Checkbox",description:"Checkbox 可以單獨使用或配合 CheckboxGroup 使用：",code:`// 不同狀態的 Checkbox
<Checkbox value="option1" defaultChecked>
  已選中的選項
</Checkbox>
<Checkbox value="option2">未選中的選項</Checkbox>
<Checkbox value="option3" indeterminate>
  不確定狀態（部分選中）
</Checkbox>
<Checkbox value="option4" disabled>
  禁用的選項
</Checkbox>
<Checkbox value="option5" disabled defaultChecked>
  禁用且選中
</Checkbox>`,children:e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(o,{value:"option1",defaultChecked:!0,children:"已選中的選項"}),e.jsx(o,{value:"option2",children:"未選中的選項"}),e.jsx(o,{value:"option3",indeterminate:!0,children:"不確定狀態（部分選中）"}),e.jsx(o,{value:"option4",disabled:!0,children:"禁用的選項"}),e.jsx(o,{value:"option5",disabled:!0,defaultChecked:!0,children:"禁用且選中"})]})}),e.jsx(l,{title:"使用 CheckboxGroup",code:`// 群組管理多個 Checkbox
<CheckboxGroup defaultValue={['option1', 'option3']}>
  <Checkbox value="option1">選項一</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
  <Checkbox value="option3">選項三</Checkbox>
  <Checkbox value="option4">選項四</Checkbox>
</CheckboxGroup>`,children:e.jsxs(s,{defaultValue:["option1","option3"],children:[e.jsx(o,{value:"option1",children:"選項一"}),e.jsx(o,{value:"option2",children:"選項二"}),e.jsx(o,{value:"option3",children:"選項三"}),e.jsx(o,{value:"option4",children:"選項四"})]})})]})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"📏 大小選項範例",description:"支援三種不同的大小選項：",code:`// 三種不同的 Checkbox 大小
<CheckboxGroup defaultValue={['option1']} size="sm" direction="horizontal">
  <Checkbox value="option1">小尺寸</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
</CheckboxGroup>

<CheckboxGroup defaultValue={['option1']} size="md" direction="horizontal">
  <Checkbox value="option1">中等尺寸</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
</CheckboxGroup>

<CheckboxGroup defaultValue={['option1']} size="lg" direction="horizontal">
  <Checkbox value="option1">大尺寸</Checkbox>
  <Checkbox value="option2">選項二</Checkbox>
</CheckboxGroup>`,children:e.jsx("div",{className:"space-y-6",children:["sm","md","lg"].map(c=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:["大小：",c.toUpperCase()]}),e.jsxs(s,{defaultValue:["option1"],size:c,direction:"horizontal",children:[e.jsx(o,{value:"option1",children:"選項一"}),e.jsx(o,{value:"option2",children:"選項二"}),e.jsx(o,{value:"option3",children:"選項三"})]})]},c))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"小尺寸，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"中等尺寸（預設），適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"大尺寸，適用於需要突出的選項"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🎨 顏色選項範例",description:"支援多種顏色主題：",code:`// 不同顏色主題的 Checkbox
<Checkbox color="primary" defaultChecked>主要色</Checkbox>
<Checkbox color="secondary" defaultChecked>次要色</Checkbox>
<Checkbox color="success" defaultChecked>成功色</Checkbox>
<Checkbox color="warning" defaultChecked>警告色</Checkbox>
<Checkbox color="error" defaultChecked>錯誤色</Checkbox>`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[{color:"primary",label:"主要色"},{color:"secondary",label:"次要色"},{color:"success",label:"成功色"},{color:"warning",label:"警告色"},{color:"error",label:"錯誤色"}].map(({color:c,label:a})=>e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:a}),e.jsx("div",{className:"flex space-x-4",children:e.jsxs(s,{defaultValue:["checked"],direction:"horizontal",children:[e.jsx(o,{value:"checked",color:c,children:"已選中"}),e.jsx(o,{value:"unchecked",color:c,children:"未選中"})]})})]},c))})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(l,{title:"❓ 不確定狀態範例",description:"Checkbox 支援不確定（indeterminate）狀態，常用於「全選/部分選中」的場景：",code:`// 不確定狀態的全選範例
const [checkedItems, setCheckedItems] = useState(['item1', 'item3']);
const allChecked = checkedItems.length === items.length;
const isIndeterminate = checkedItems.length > 0 && checkedItems.length < items.length;

<Checkbox
  value="parent"
  checked={allChecked}
  indeterminate={isIndeterminate}
  onChange={handleParentChange}
>
  全選（{checkedItems.length}/{items.length}）
</Checkbox>

<div className="ml-6 space-y-2">
  {items.map((item) => (
    <Checkbox
      key={item.id}
      value={item.id}
      checked={checkedItems.includes(item.id)}
      onChange={handleItemChange}
    >
      {item.label}
    </Checkbox>
  ))}
</div>`,children:e.jsx(f,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"不確定狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"用途："}),"表示部分子項目被選中，常見於樹狀選擇"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"視覺："}),"顯示橫線而非勾選標記"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙："}),'aria-checked 設為 "mixed"']})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"📐 排列方向範例",description:"CheckboxGroup 支援垂直和水平兩種排列方向：",code:`// 垂直排列（預設）
<CheckboxGroup
  defaultValue={['vertical1']}
  direction="vertical"
>
  <Checkbox value="vertical1">垂直選項一</Checkbox>
  <Checkbox value="vertical2">垂直選項二</Checkbox>
  <Checkbox value="vertical3">垂直選項三</Checkbox>
</CheckboxGroup>

// 水平排列
<CheckboxGroup
  defaultValue={['horizontal1', 'horizontal3']}
  direction="horizontal"
>
  <Checkbox value="horizontal1">水平選項一</Checkbox>
  <Checkbox value="horizontal2">水平選項二</Checkbox>
  <Checkbox value="horizontal3">水平選項三</Checkbox>
</CheckboxGroup>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"垂直排列（預設）"}),e.jsxs(s,{defaultValue:["vertical1"],direction:"vertical",children:[e.jsx(o,{value:"vertical1",children:"垂直選項一"}),e.jsx(o,{value:"vertical2",children:"垂直選項二"}),e.jsx(o,{value:"vertical3",children:"垂直選項三"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"水平排列"}),e.jsxs(s,{defaultValue:["horizontal1","horizontal3"],direction:"horizontal",children:[e.jsx(o,{value:"horizontal1",children:"水平選項一"}),e.jsx(o,{value:"horizontal2",children:"水平選項二"}),e.jsx(o,{value:"horizontal3",children:"水平選項三"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🚫 禁用狀態範例",description:"支援單個 Checkbox 禁用或整個 CheckboxGroup 禁用：",code:`// 單個 Checkbox 禁用
<CheckboxGroup defaultValue={['option1']}>
  <Checkbox value="option1">正常選項</Checkbox>
  <Checkbox value="option2" disabled>禁用選項</Checkbox>
  <Checkbox value="option3" disabled defaultChecked>禁用且選中</Checkbox>
</CheckboxGroup>

// 整個 CheckboxGroup 禁用
<CheckboxGroup defaultValue={['option1', 'option3']} disabled>
  <Checkbox value="option1">群組禁用選項一</Checkbox>
  <Checkbox value="option2">群組禁用選項二</Checkbox>
  <Checkbox value="option3">群組禁用選項三</Checkbox>
</CheckboxGroup>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"單個 Checkbox 禁用"}),e.jsxs(s,{defaultValue:["option1"],children:[e.jsx(o,{value:"option1",children:"正常選項"}),e.jsx(o,{value:"option2",disabled:!0,children:"禁用選項"}),e.jsx(o,{value:"option3",disabled:!0,defaultChecked:!0,children:"禁用且選中"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"整個 CheckboxGroup 禁用"}),e.jsxs(s,{defaultValue:["option1","option3"],disabled:!0,children:[e.jsx(o,{value:"option1",children:"群組禁用選項一"}),e.jsx(o,{value:"option2",children:"群組禁用選項二"}),e.jsx(o,{value:"option3",children:"群組禁用選項三"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"⬜ 無標籤 Checkbox 範例",description:"Checkbox 可以不帶標籤文字：",code:`// 不同大小的無標籤 Checkbox
<CheckboxGroup defaultValue={['md']} direction="horizontal">
  <Checkbox value="sm" size="sm" />
  <Checkbox value="md" size="md" />
  <Checkbox value="lg" size="lg" />
</CheckboxGroup>

// 不同顏色的無標籤 Checkbox
<CheckboxGroup defaultValue={['primary', 'success']} direction="horizontal">
  <Checkbox value="primary" color="primary" />
  <Checkbox value="success" color="success" />
  <Checkbox value="warning" color="warning" />
  <Checkbox value="error" color="error" />
</CheckboxGroup>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同大小："}),e.jsxs(s,{defaultValue:["md"],direction:"horizontal",children:[e.jsx(o,{value:"sm",size:"sm"}),e.jsx(o,{value:"md",size:"md"}),e.jsx(o,{value:"lg",size:"lg"})]})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"不同顏色："}),e.jsxs(s,{defaultValue:["primary","success"],direction:"horizontal",children:[e.jsx(o,{value:"primary",color:"primary"}),e.jsx(o,{value:"success",color:"success"}),e.jsx(o,{value:"warning",color:"warning"}),e.jsx(o,{value:"error",color:"error"})]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(l,{title:"🔗 複雜範例",description:"用戶權限設定表單：",code:`// 用戶權限設定表單
<div className="border rounded-lg p-6 bg-gray-50">
  <h3 className="text-lg font-semibold mb-4">用戶權限設定</h3>

  <div className="space-y-4">
    {/* 基本權限 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">基本權限</label>
      <CheckboxGroup defaultValue={['read', 'create']} size="sm">
        <Checkbox value="read">讀取</Checkbox>
        <Checkbox value="create">建立</Checkbox>
        <Checkbox value="update">更新</Checkbox>
        <Checkbox value="delete">刪除</Checkbox>
      </CheckboxGroup>
    </div>

    {/* 通知偏好 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">通知偏好</label>
      <CheckboxGroup defaultValue={['email']} direction="horizontal" size="sm">
        <Checkbox value="email">郵件</Checkbox>
        <Checkbox value="sms">簡訊</Checkbox>
        <Checkbox value="push">推播</Checkbox>
      </CheckboxGroup>
    </div>

    {/* 功能模組 */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">功能模組</label>
      <CheckboxGroup defaultValue={['dashboard', 'reports']}>
        <Checkbox value="dashboard">儀表板</Checkbox>
        <Checkbox value="users">用戶管理</Checkbox>
        <Checkbox value="reports">報表分析</Checkbox>
        <Checkbox value="settings">系統設定</Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</div>`,children:e.jsx("div",{className:"max-w-lg space-y-6",children:e.jsxs("div",{className:"border rounded-lg p-6 bg-gray-50",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"用戶權限設定"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"基本權限"}),e.jsxs(s,{defaultValue:["read","create"],size:"sm",children:[e.jsx(o,{value:"read",children:"讀取"}),e.jsx(o,{value:"create",children:"建立"}),e.jsx(o,{value:"update",children:"更新"}),e.jsx(o,{value:"delete",children:"刪除"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"通知偏好"}),e.jsxs(s,{defaultValue:["email"],direction:"horizontal",size:"sm",children:[e.jsx(o,{value:"email",children:"郵件"}),e.jsx(o,{value:"sms",children:"簡訊"}),e.jsx(o,{value:"push",children:"推播"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"功能模組"}),e.jsxs(s,{defaultValue:["dashboard","reports"],children:[e.jsx(o,{value:"dashboard",children:"儀表板"}),e.jsx(o,{value:"users",children:"用戶管理"}),e.jsx(o,{value:"reports",children:"報表分析"}),e.jsx(o,{value:"settings",children:"系統設定"})]})]})]})]})})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Checkbox, CheckboxGroup } from 'eonui';

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
</Checkbox>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Checkbox 組件的所有功能，可以在你的項目中開始使用了！ Checkbox 組件提供了靈活的多選功能，適用於各種表單和設定場景。"})]})]}),f=()=>{const[c]=n.useState([{id:"item1",label:"項目一",checked:!0},{id:"item2",label:"項目二",checked:!1},{id:"item3",label:"項目三",checked:!0}]),[a,t]=n.useState(["item1","item3"]),h=a.length===c.length,d=a.length>0&&a.length<c.length,x=i=>{t(i?c.map(u=>u.id):[])},k=(i,u)=>{const m=u;t(i?b=>[...b,m]:b=>b.filter(C=>C!==m))};return e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{value:"parent",checked:h,indeterminate:d,onChange:x,children:e.jsxs("strong",{children:["全選（",a.length,"/",c.length,"）"]})}),e.jsx("div",{className:"ml-6 space-y-2",children:c.map(i=>e.jsx(o,{value:i.id,checked:a.includes(i.id),onChange:k,children:i.label},i.id))})]})},P={title:"Form/Checkbox",component:o,parameters:{layout:"centered",docs:{page:()=>e.jsx(g,{})}},argTypes:{value:{control:{type:"text"},description:"Checkbox 的值",table:{type:{summary:"string | number"}}},checked:{control:{type:"boolean"},description:"是否選中（受控組件）",table:{type:{summary:"boolean"}}},defaultChecked:{control:{type:"boolean"},description:"預設是否選中（非受控組件）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indeterminate:{control:{type:"boolean"},description:"是否為不確定狀態（部分選中）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Checkbox 大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},color:{control:{type:"select"},options:["primary","secondary","success","warning","error"],description:"狀態顏色",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},children:{control:{type:"text"},description:"標籤文字",table:{type:{summary:"ReactNode"}}},onChange:{action:"changed",description:"值改變時的回調",table:{type:{summary:"(checked: boolean, value: string | number) => void"}}}},tags:["autodocs"]},r={args:{value:"example",children:"Checkbox 選項",size:"md",color:"primary",defaultChecked:!1,indeterminate:!1,disabled:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'example',
    children: 'Checkbox 選項',
    size: 'md',
    color: 'primary',
    defaultChecked: false,
    indeterminate: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const H=["Docs"];export{r as Docs,H as __namedExportsOrder,P as default};

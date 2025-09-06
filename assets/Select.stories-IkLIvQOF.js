import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-DMlPHyXL.js";import{P as x,C as j}from"./blocks-C_eD2Myt.js";import{S as s}from"./Select-Dg96uyKe.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-BV-bFhAu.js";import"./cn-Dtjc6EhN.js";import"./clearable-Cbs5Twkk.js";import"./icons-CWF-JOA3.js";const l=[{label:"蘋果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橘子",value:"orange"},{label:"葡萄",value:"grape"},{label:"草莓",value:"strawberry"},{label:"藍莓",value:"blueberry"},{label:"芒果",value:"mango",disabled:!0},{label:"鳳梨",value:"pineapple"},{label:"西瓜",value:"watermelon"},{label:"哈密瓜",value:"cantaloupe"}],c=[{label:"台北市",value:"taipei"},{label:"新北市",value:"new-taipei"},{label:"桃園市",value:"taoyuan"},{label:"台中市",value:"taichung"},{label:"台南市",value:"tainan"},{label:"高雄市",value:"kaohsiung"},{label:"基隆市",value:"keelung"},{label:"新竹市",value:"hsinchu"},{label:"嘉義市",value:"chiayi"}],d=[{label:"台灣",value:"taiwan"},{label:"日本",value:"japan"},{label:"韓國",value:"korea"},{label:"中國",value:"china"},{label:"美國",value:"usa"},{label:"英國",value:"uk"},{label:"法國",value:"france"},{label:"德國",value:"germany"},{label:"澳洲",value:"australia"},{label:"加拿大",value:"canada"}],b=()=>{const[o,m]=r.useState(),[t,p]=r.useState(["apple","banana"]),[i,u]=r.useState("taipei");return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"基本單選"}),e.jsx(s,{options:l,value:o,onChange:a=>m(a),placeholder:"選擇你喜歡的水果",clearable:!0}),o&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["選中：",l.find(a=>a.value===o)?.label]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"多選模式（顯示數量）"}),e.jsx(s,{options:l,value:t,onChange:a=>p(a),multiple:!0,multipleDisplayMode:"count",placeholder:"選擇多個水果",clearable:!0}),t.length>0&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["已選：",t.map(a=>l.find(h=>h.value===a)?.label).join(", ")]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"多選模式（顯示標籤）"}),e.jsx(s,{options:l,value:t,onChange:a=>p(a),multiple:!0,multipleDisplayMode:"items",maxTagCount:2,placeholder:"選擇多個水果",clearable:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"可搜尋選項"}),e.jsx(s,{options:c,value:i,onChange:a=>u(a),filterable:!0,clearable:!0,placeholder:"搜尋城市",searchPlaceholder:"輸入城市名稱"}),i&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["選中：",c.find(a=>a.value===i)?.label]})]})]})},v=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Select 下拉選單"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的下拉選單組件，與 Input 樣式保持一致。 支援單選/多選模式、搜尋過濾、清除功能等，提供豐富的互動體驗和無障礙支援。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Select 的各種屬性："}),e.jsx(x,{}),e.jsx(j,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔄 實際使用範例"}),e.jsx("p",{className:"component-docs-section-description",children:"以下是實際的下拉選單範例，展示各種功能組合："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(b,{})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎨 樣式變體"}),e.jsx("p",{className:"component-docs-section-description",children:"Select 組件提供了三種不同的樣式變體，與 Input 組件保持一致："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{variant:"default",options:l,placeholder:"預設樣式"}),e.jsx(s,{variant:"filled",options:l,placeholder:"填充樣式"}),e.jsx(s,{variant:"outline",options:l,placeholder:"外框樣式"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filled："}),"填充樣式，適用於需要視覺區分的設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Outline："}),"外框樣式，適用於需要強調邊界的設計"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📏 大小選項"}),e.jsx("p",{className:"component-docs-section-description",children:"支援三種不同的大小選項，與其他表單組件保持一致："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{size:"sm",options:l,placeholder:"小尺寸 (32px)"}),e.jsx(s,{size:"md",options:l,placeholder:"中等尺寸 (40px)"}),e.jsx(s,{size:"lg",options:l,placeholder:"大尺寸 (48px)"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"32px 高度，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"40px 高度，標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"48px 高度，適用於重要的選擇欄位"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🚦 狀態展示"}),e.jsx("p",{className:"component-docs-section-description",children:"下拉選單支援多種狀態，提供清晰的視覺反饋："}),e.jsxs("div",{className:"component-docs-showcase",children:[e.jsx(s,{status:"default",options:l,placeholder:"預設狀態"}),e.jsx(s,{status:"error",options:l,placeholder:"錯誤狀態"}),e.jsx(s,{status:"success",options:l,placeholder:"成功狀態"}),e.jsx(s,{status:"warning",options:l,placeholder:"警告狀態"})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"預設狀態，無特殊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤狀態，紅色邊框表示選擇錯誤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功狀態，綠色邊框表示選擇正確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告狀態，黃色邊框提醒用戶注意"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎯 單選與多選"}),e.jsx("p",{className:"component-docs-section-description",children:"支援單選和多選兩種模式，滿足不同的使用場景："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"單選模式"}),e.jsx(s,{options:d,placeholder:"選擇一個國家",clearable:!0,defaultValue:"taiwan"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"單選模式下，只能選擇一個選項，選擇新項目會取代舊的選擇"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"多選模式（顯示數量）"}),e.jsx(s,{options:l,multiple:!0,multipleDisplayMode:"count",placeholder:"選擇多個水果",clearable:!0,defaultValue:["apple","banana","orange"]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"顯示已選項目數量，節省空間"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"多選模式（顯示標籤）"}),e.jsx(s,{options:l,multiple:!0,multipleDisplayMode:"items",maxTagCount:2,placeholder:"選擇多個水果",clearable:!0,defaultValue:["apple","banana","orange"]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"以標籤形式顯示選中項目，超出數量會顯示「+N」"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"選擇模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"單選："}),"選擇後自動關閉下拉選單，適合唯一選擇"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"多選數量模式："}),"顯示「已選 N 項」，節省空間"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"多選標籤模式："}),"以小標籤形式顯示選中項目，支援最大顯示數量限制"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"視覺回饋："}),"選中項目使用淡色背景和深色文字，增加左側邊框"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔍 搜尋功能"}),e.jsx("p",{className:"component-docs-section-description",children:"支援搜尋過濾選項，特別適合選項較多的情況："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"可搜尋單選"}),e.jsx(s,{options:c,filterable:!0,placeholder:"搜尋並選擇城市",searchPlaceholder:"輸入城市名稱",clearable:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"可搜尋多選"}),e.jsx(s,{options:d,filterable:!0,multiple:!0,placeholder:"搜尋並選擇國家",searchPlaceholder:"輸入國家名稱",clearable:!0})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"搜尋功能特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"即時過濾："}),"輸入時立即過濾選項列表"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自動聚焦："}),"開啟下拉選單時自動聚焦到搜尋框"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"鍵盤導航："}),"支援方向鍵導航和 Enter 鍵選擇"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"清空搜尋："}),"選擇後自動清空搜尋內容（單選模式）"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🗑️ 清除功能"}),e.jsx("p",{className:"component-docs-section-description",children:"支援一鍵清除所有選擇，提供便捷的重置操作："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{options:l,clearable:!0,placeholder:"可清除的單選",defaultValue:"apple"}),e.jsx(s,{options:l,multiple:!0,clearable:!0,placeholder:"可清除的多選",defaultValue:["apple","banana"]}),e.jsx(s,{options:c,filterable:!0,clearable:!0,placeholder:"可清除的搜尋選單",defaultValue:"taipei"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"清除功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"條件顯示："}),"只有在有選中值時才顯示清除按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"單選清除："}),"清除後值變為 undefined"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"多選清除："}),"清除後值變為空陣列"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"無障礙支援："}),"清除按鈕有適當的 aria-label"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🚫 禁用狀態"}),e.jsx("p",{className:"component-docs-section-description",children:"展示禁用狀態下的各種樣式："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{disabled:!0,options:l,placeholder:"禁用的下拉選單"}),e.jsx(s,{disabled:!0,variant:"filled",options:l,placeholder:"禁用的填充樣式",defaultValue:"apple"}),e.jsx(s,{disabled:!0,multiple:!0,options:l,placeholder:"禁用的多選模式",defaultValue:["apple","banana"]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"⚠️ 選項禁用"}),e.jsx("p",{className:"component-docs-section-description",children:"支援單個選項的禁用狀態："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(s,{options:l,placeholder:"部分選項被禁用",clearable:!0})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"選項禁用說明："}),e.jsxs("ul",{children:[e.jsx("li",{children:"在範例中，「芒果」選項被設為禁用狀態"}),e.jsx("li",{children:"禁用的選項會顯示為灰色且無法點擊"}),e.jsx("li",{children:"可以根據業務邏輯動態設定選項的禁用狀態"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🔗 組合使用"}),e.jsx("p",{className:"component-docs-section-description",children:"展示各種屬性的組合使用："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"lg",variant:"outline",status:"success",options:d,filterable:!0,clearable:!0,placeholder:"大尺寸外框成功狀態可搜尋",defaultValue:"taiwan"}),e.jsx(s,{size:"sm",variant:"filled",status:"warning",options:l,multiple:!0,clearable:!0,placeholder:"小尺寸填充警告狀態多選",defaultValue:["apple"]})]})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Select, SelectOption } from 'eonui';

// 定義選項
const options: SelectOption[] = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3', disabled: true },
];

// 基本單選
<Select
  options={options}
  placeholder="請選擇"
/>

// 帶樣式的下拉選單
<Select
  variant="filled"
  size="lg"
  options={options}
  placeholder="大尺寸填充樣式"
/>

// 多選模式
<Select
  options={options}
  multiple
  placeholder="選擇多個選項"
  clearable
/>

// 可搜尋
<Select
  options={options}
  filterable
  placeholder="搜尋選項"
  searchPlaceholder="輸入關鍵字"
  clearable
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
const [value, setValue] = useState<string | number | undefined>();

<Select
  options={options}
  value={value}
  onChange={setValue}
  onClear={() => setValue(undefined)}
  clearable
/>

// 多選受控組件
const [values, setValues] = useState<(string | number)[]>([]);

<Select
  options={options}
  value={values}
  onChange={(newValue) => setValues(newValue as (string | number)[])}
  multiple
  clearable
/>

// 搜尋回調
<Select
  options={options}
  filterable
  onSearch={(query) => {
    console.log('搜尋：', query);
    // 可以在這裡實作遠端搜尋
  }}
/>

// 多選顯示模式
<Select
  options={options}
  multiple
  multipleDisplayMode="items"  // 或 "count"
  maxTagCount={2}
  clearable
  placeholder="多選標籤模式"
/>

// 組合使用
<Select
  options={options}
  size="lg"
  variant="outline"
  status="success"
  filterable
  multiple
  multipleDisplayMode="items"
  maxTagCount={3}
  clearable
  placeholder="完整功能示範"
  searchPlaceholder="搜尋選項"
  noDataText="查無資料"
  defaultValue={['option1', 'option2']}
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Select 組件的所有功能，可以在你的項目中開始使用了！ 這個下拉選單組件提供了豐富的功能選項，適用於各種選擇場景，從簡單的單選到複雜的多選搜尋。"})]})]}),M={title:"Components/Select",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(v,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"下拉選單的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"下拉選單的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"下拉選單的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},multiple:{control:{type:"boolean"},description:"是否為多選模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},filterable:{control:{type:"boolean"},description:"是否可以搜尋",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearable:{control:{type:"boolean"},description:"是否顯示清除按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:{type:"text"},description:"佔位符文字",table:{type:{summary:"string"},defaultValue:{summary:"請選擇"}}},searchPlaceholder:{control:{type:"text"},description:"搜尋時的佔位符文字",table:{type:{summary:"string"},defaultValue:{summary:"搜尋選項"}}},noDataText:{control:{type:"text"},description:"無選項時顯示的文字",table:{type:{summary:"string"},defaultValue:{summary:"無資料"}}},onChange:{action:"changed",description:"值改變時的回調",table:{type:{summary:"(value: string | number | (string | number)[]) => void"}}},onClear:{action:"cleared",description:"清除按鈕的回調函數",table:{type:{summary:"() => void"}}},onSearch:{action:"searched",description:"搜尋時的回調",table:{type:{summary:"(query: string) => void"}}},multipleDisplayMode:{control:{type:"select"},options:["items","count"],description:"多選模式下的顯示方式",table:{type:{summary:"string"},defaultValue:{summary:"count"}}},maxTagCount:{control:{type:"number",min:1,max:10},description:"多選模式下最多顯示的標籤數量",table:{type:{summary:"number"},defaultValue:{summary:"3"}}},width:{control:{type:"text"},description:"寬度",table:{type:{summary:"string"},defaultValue:{summary:"200px"}}}},tags:["autodocs"]},n={args:{options:l,placeholder:"請選擇水果",variant:"default",size:"md",status:"default",multiple:!1,filterable:!1,clearable:!1,disabled:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: '請選擇水果',
    variant: 'default',
    size: 'md',
    status: 'default',
    multiple: false,
    filterable: false,
    clearable: false,
    disabled: false
  }
}`,...n.parameters?.docs?.source}}};const O=["Docs"];export{n as Docs,O as __namedExportsOrder,M as default};

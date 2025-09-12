import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as A,C as I}from"./blocks-CkfUBsx9.js";import{C as u}from"./CodeExample-BLH1THt2.js";import{R as k}from"./iframe-sPMQY_tl.js";import{c as i}from"./cn-Dtjc6EhN.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-C-73jOw_.js";const a=(s,t)=>{if(t===void 0)return"";if(t==="auto")return s==="xs"?"flex-auto":`${s}:flex-auto`;if(typeof t=="number"&&t>=1&&t<=12){const n=t===12?"w-full":`w-${t}/12`;return s==="xs"?n:`${s}:${n}`}return""},$={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},R={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},W={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl",full:"max-w-full",none:"max-w-none"},l=(s,t)=>{if(t===void 0||t<1||t>12)return"";const n=`order-${t}`;return s==="xs"?n:`${s}:${n}`},r=k.forwardRef(({container:s=!1,item:t=!1,spacing:n=0,xs:f,sm:b,md:h,lg:j,xl:g,xxl:v,alignItems:o,justifyContent:m,wrap:x=!0,maxWidth:p,centered:y=!1,order:d,className:G,children:N,...B},C)=>{const E=i({flex:s,"flex-wrap":s&&x,"flex-nowrap":s&&!x,"flex-shrink-0":t}),F=s&&n>0?`gap-${n}`:"",w=i(s&&o&&$[o],s&&m&&R[m]),V=s?i(p&&W[p],y&&"mx-auto"):"",D=t?i(a("xs",f),a("sm",b),a("md",h),a("lg",j),a("xl",g),a("2xl",v)):"",q=t&&d?i(l("xs",d.xs),l("sm",d.sm),l("md",d.md),l("lg",d.lg),l("xl",d.xl),l("2xl",d.xxl)):"",_=i(E,F,w,V,D,q,G);return e.jsx("div",{ref:C,className:_,...B,children:N})});r.displayName="Grid";try{r.displayName="Grid",r.__docgenInfo={description:"",displayName:"Grid",props:{container:{defaultValue:{value:"false"},description:"網格容器類型",name:"container",required:!1,type:{name:"boolean | undefined"}},item:{defaultValue:{value:"false"},description:"網格項目類型",name:"item",required:!1,type:{name:"boolean | undefined"}},spacing:{defaultValue:{value:"0"},description:"欄位間距",name:"spacing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"8"},{value:"10"},{value:"12"}]}},xs:{defaultValue:null,description:"所有斷點的欄數 (1-12)",name:"xs",required:!1,type:{name:"BreakpointValue | undefined"}},sm:{defaultValue:null,description:"小螢幕斷點的欄數 (≥576px)",name:"sm",required:!1,type:{name:"BreakpointValue | undefined"}},md:{defaultValue:null,description:"中等螢幕斷點的欄數 (≥768px)",name:"md",required:!1,type:{name:"BreakpointValue | undefined"}},lg:{defaultValue:null,description:"大螢幕斷點的欄數 (≥1024px)",name:"lg",required:!1,type:{name:"BreakpointValue | undefined"}},xl:{defaultValue:null,description:"超大螢幕斷點的欄數 (≥1280px)",name:"xl",required:!1,type:{name:"BreakpointValue | undefined"}},xxl:{defaultValue:null,description:"超超大螢幕斷點的欄數 (≥1536px)",name:"xxl",required:!1,type:{name:"BreakpointValue | undefined"}},alignItems:{defaultValue:null,description:"垂直對齊方式",name:"alignItems",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"stretch"'}]}},justifyContent:{defaultValue:null,description:"水平對齊方式",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"between"'},{value:'"around"'},{value:'"evenly"'}]}},wrap:{defaultValue:{value:"true"},description:"是否換行",name:"wrap",required:!1,type:{name:"boolean | undefined"}},maxWidth:{defaultValue:null,description:"容器最大寬度（僅限容器使用）",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"none"'},{value:'"2xl"'},{value:'"full"'}]}},centered:{defaultValue:{value:"false"},description:"是否置中（僅限容器使用）",name:"centered",required:!1,type:{name:"boolean | undefined"}},order:{defaultValue:null,description:"順序（僅限項目使用）",name:"order",required:!1,type:{name:"{ xs?: number | undefined; sm?: number | undefined; md?: number | undefined; lg?: number | undefined; xl?: number | undefined; xxl?: number | undefined; } | undefined"}},children:{defaultValue:null,description:"子元素",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const S=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"12 等分網格系統"}),e.jsx(r,{container:!0,spacing:0,wrap:!1,children:Array.from({length:12},(s,t)=>e.jsx(r,{item:!0,xs:1,children:e.jsx("div",{className:"bg-blue-100 border border-blue-300 p-2 text-center text-xs",children:t+1})},t))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"響應式佈局"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["📱 縮小螢幕寬度來測試響應式效果：",e.jsx("br",{}),"• 手機 (<640px): 每個項目占滿整行 (w-full)",e.jsx("br",{}),"• 平板 (≥640px): 每個項目占一半 (sm:w-6/12)",e.jsx("br",{}),"• 桌面 (≥768px): 每個項目占三分之一 (md:w-4/12)"]}),e.jsxs(r,{container:!0,spacing:0,children:[e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 text-center",children:[e.jsx("div",{className:"font-medium",children:"響應式欄位 1"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"xs=12, sm=6, md=4"})]})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 text-center",children:[e.jsx("div",{className:"font-medium",children:"響應式欄位 2"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"xs=12, sm=6, md=4"})]})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsxs("div",{className:"bg-green-100 border border-green-300 p-4 text-center",children:[e.jsx("div",{className:"font-medium",children:"響應式欄位 3"}),e.jsx("div",{className:"text-sm text-gray-600 mt-1",children:"xs=12, sm=6, md=4"})]})})]})]})]}),O=()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"垂直對齊"}),e.jsx("div",{className:"space-y-4",children:["start","center","end","stretch"].map(s=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:['alignItems="',s,'"']}),e.jsxs(r,{container:!0,spacing:0,alignItems:s,style:{height:"120px"},children:[e.jsx(r,{item:!0,xs:4,children:e.jsx("div",{className:"bg-red-100 border border-red-300 p-2 h-8",children:"短內容"})}),e.jsx(r,{item:!0,xs:4,children:e.jsx("div",{className:"bg-blue-100 border border-blue-300 p-2 h-16",children:"中等高度內容"})}),e.jsx(r,{item:!0,xs:4,children:e.jsx("div",{className:"bg-green-100 border border-green-300 p-2 h-20",children:"較高的內容區域"})})]})]},s))})]})}),P=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Grid 網格系統"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的響應式網格系統，基於 12 等分設計，支援 6 個響應式斷點。 提供靈活的佈局選項，適用於各種設計需求。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Grid 的各種屬性："}),e.jsx(A,{}),e.jsx(I,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(u,{title:"🔄 基本網格範例",description:"12 等分網格系統，支援靈活的欄位分配和響應式設計。",code:`// 12 等分網格系統
<Grid container spacing={0} wrap={false}>
  {Array.from({ length: 12 }, (_, i) => (
    <Grid key={i} item xs={1}>
      <div className="bg-blue-100 border border-blue-300 p-2 text-center text-xs">
        {i + 1}
      </div>
    </Grid>
  ))}
</Grid>

// 響應式佈局
<Grid container spacing={0}>
  <Grid item xs={12} sm={6} md={4}>
    <div className="bg-green-100 border border-green-300 p-4 text-center">
      響應式欄位 1 (xs=12, sm=6, md=4)
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div className="bg-green-100 border border-green-300 p-4 text-center">
      響應式欄位 2 (xs=12, sm=6, md=4)
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div className="bg-green-100 border border-green-300 p-4 text-center">
      響應式欄位 3 (xs=12, sm=6, md=4)
    </div>
  </Grid>
</Grid>`,children:e.jsx(S,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(u,{title:"🔄 對齊方式範例",description:"支援多種垂直和水平對齊方式，適應不同的佈局需求。",code:`// 不同的對齊方式
<Grid container justifyContent="center" alignItems="center">
  <Grid item>居中對齊</Grid>
</Grid>

<Grid container justifyContent="space-between">
  <Grid item>左側</Grid>
  <Grid item>右側</Grid>
</Grid>`,children:e.jsx(O,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(u,{title:"🔄 項目順序範例",description:"支援多種順序，適應不同的佈局需求。",code:`// 響應式項目順序控制
<Grid container spacing={0}>
  <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
    <div className="bg-red-100 border border-red-300 p-2 text-center">
      側邊欄（桌面第1位，手機第2位）
    </div>
  </Grid>
  <Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
    <div className="bg-blue-100 border border-blue-300 p-2 text-center">
      主要內容（桌面第2位，手機第1位）
    </div>
  </Grid>
</Grid>`,children:e.jsxs(r,{container:!0,spacing:0,children:[e.jsx(r,{item:!0,xs:12,md:3,order:{xs:2,md:1},children:e.jsx("div",{className:"bg-red-100 border border-red-300 p-2 text-center",children:"側邊欄（桌面第1位，手機第2位）"})}),e.jsx(r,{item:!0,xs:12,md:9,order:{xs:1,md:2},children:e.jsx("div",{className:"bg-blue-100 border border-blue-300 p-2 text-center",children:"主要內容（桌面第2位，手機第1位）"})})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Grid } from 'eonui';

// 基本網格佈局
<Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 1</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 2</div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div>欄位 3</div>
  </Grid>
</Grid>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"置中容器用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Grid } from 'eonui';

// 置中容器
<Grid container spacing={4} alignItems="center" maxWidth="lg" centered>
  <Grid item xs={12} md={6}>
    <div>左側內容</div>
  </Grid>
  <Grid item xs={12} md={6}>
    <div>右側內容</div>
  </Grid>
</Grid>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"項目順序"}),e.jsx("pre",{className:"component-docs-code",children:`// 項目順序控制
<Grid container spacing={2}>
  <Grid item xs={4} order={{ xs: 2 }}>第二個顯示</Grid>
  <Grid item xs={4} order={{ xs: 1 }}>第一個顯示</Grid>
  <Grid item xs={4} order={{ xs: 3 }}>第三個顯示</Grid>
</Grid>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"響應式斷點"}),e.jsx("pre",{className:"component-docs-code",children:`// 響應式斷點說明
xs: 0px+     (預設，所有螢幕)
sm: 576px+   (小螢幕)
md: 768px+   (中等螢幕)
lg: 1024px+  (大螢幕)
xl: 1280px+  (超大螢幕)
xxl: 1536px+ (超超大螢幕)

// 響應式佈局範例
<Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    響應式欄位
  </Grid>
</Grid>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🎯 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Grid 網格系統的所有功能，可以在你的項目中開始使用了！ 記住使用響應式設計來適應不同的螢幕尺寸。"})]})]}),Q={title:"Components/Grid",component:r,parameters:{layout:"fullscreen",docs:{page:()=>e.jsx(P,{})}},argTypes:{container:{control:{type:"boolean"},description:"是否為網格容器",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},item:{control:{type:"boolean"},description:"是否為網格項目",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},spacing:{control:{type:"select"},options:[0,1,2,3,4,5,6,8,10,12],description:"欄位間距（僅容器使用）",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},xs:{control:{type:"number",min:1,max:12},description:"所有斷點的欄數 (1-12)（僅項目使用）"},sm:{control:{type:"number",min:1,max:12},description:"小螢幕斷點的欄數 (≥576px)（僅項目使用）"},md:{control:{type:"number",min:1,max:12},description:"中等螢幕斷點的欄數 (≥768px)（僅項目使用）"},lg:{control:{type:"number",min:1,max:12},description:"大螢幕斷點的欄數 (≥1024px)（僅項目使用）"},xl:{control:{type:"number",min:1,max:12},description:"超大螢幕斷點的欄數 (≥1280px)（僅項目使用）"},xxl:{control:{type:"number",min:1,max:12},description:"超超大螢幕斷點的欄數 (≥1536px)（僅項目使用）"},alignItems:{control:{type:"select"},options:["start","center","end","stretch"],description:"垂直對齊方式（僅容器使用）"},justifyContent:{control:{type:"select"},options:["start","center","end","between","around","evenly"],description:"水平對齊方式（僅容器使用）"},wrap:{control:{type:"boolean"},description:"是否換行（僅容器使用）",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},maxWidth:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","full","none"],description:"容器最大寬度（僅容器使用）"},centered:{control:{type:"boolean"},description:"是否置中（僅容器使用）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:!1,description:"子元素"}},tags:["autodocs"]},c={args:{container:!0,spacing:4,alignItems:"stretch",justifyContent:"start",wrap:!0,centered:!1},render:s=>e.jsxs(r,{...s,children:[e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx("div",{className:"bg-blue-100 border border-blue-300 p-4 text-center h-20 flex items-center justify-center",children:"欄位 1"})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx("div",{className:"bg-green-100 border border-green-300 p-4 text-center h-16 flex items-center justify-center",children:"欄位 2"})}),e.jsx(r,{item:!0,xs:12,sm:6,md:4,children:e.jsx("div",{className:"bg-purple-100 border border-purple-300 p-4 text-center h-24 flex items-center justify-center",children:"欄位 3"})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    container: true,
    spacing: 4,
    alignItems: 'stretch',
    justifyContent: 'start',
    wrap: true,
    centered: false
  },
  render: args => <Grid {...args}>
      <Grid item xs={12} sm={6} md={4}>
        <div className="bg-blue-100 border border-blue-300 p-4 text-center h-20 flex items-center justify-center">
          欄位 1
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="bg-green-100 border border-green-300 p-4 text-center h-16 flex items-center justify-center">
          欄位 2
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <div className="bg-purple-100 border border-purple-300 p-4 text-center h-24 flex items-center justify-center">
          欄位 3
        </div>
      </Grid>
    </Grid>
}`,...c.parameters?.docs?.source}}};const X=["Docs"];export{c as Docs,X as __namedExportsOrder,Q as default};

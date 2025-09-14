import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as d}from"./iframe-vexCixVy.js";import{r as q,P as T,C as M}from"./blocks-CUo2tLZq.js";import{C as x}from"./CodeExample-CuI99ZG3.js";import{c as A}from"./cn-Dtjc6EhN.js";import{g as W,a as z}from"./formStyles-D_LMpAhg.js";import{E as $,W as L,I as U,C as I}from"./icons-B4aNx7RA.js";import{C as G}from"./CloseButton-oVX7iLTx.js";import{c as H}from"./client-C2F_Qx6f.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-uvf18IKX.js";const J=({type:r,className:t})=>{const s={primary:e.jsx(I,{className:t}),success:e.jsx(I,{className:t}),info:e.jsx(U,{className:t}),warning:e.jsx(L,{className:t}),error:e.jsx($,{className:t})};return s[r]||s.info},n=C.forwardRef(({type:r="info",position:t="top-right",closable:s=!0,duration:i=3e3,showIcon:c=!0,icon:l,title:h,children:u,onClose:f,visible:a=!0,id:V,className:F,...k},D)=>{const[w,E]=d.useState(a),[v,S]=d.useState(!1),p=d.useRef(null),j=W(r),y=d.useCallback(()=>{S(!0),setTimeout(()=>{E(!1),f?.()},300)},[f]);d.useEffect(()=>{if(a&&i>0)return p.current=setTimeout(()=>{y()},i),()=>{p.current&&clearTimeout(p.current)}},[a,i,y]),d.useEffect(()=>{a!==w&&(a?(E(!0),S(!0),setTimeout(()=>S(!1),10)):y())},[a,w,y]);const _=()=>{p.current&&(clearTimeout(p.current),p.current=null)},R=()=>{_()},P=()=>{i>0&&(p.current=setTimeout(()=>{y()},i))};return w?e.jsxs("div",{ref:D,className:A(z(),j.container,v?"translate-x-full opacity-0":"translate-x-0 opacity-100",t.includes("left")&&v&&"-translate-x-full",t.includes("right")&&v&&"translate-x-full",t.includes("top")&&v&&"-translate-y-2",t.includes("bottom")&&v&&"translate-y-2",F),onMouseEnter:R,onMouseLeave:P,"data-alert-id":V,...k,children:[c&&e.jsx("div",{className:"flex-shrink-0",children:l?e.jsx("div",{className:A("h-5 w-5",j.icon),children:l}):e.jsx(J,{type:r,className:A("h-5 w-5",j.icon)})}),e.jsxs("div",{className:A("flex-1",c&&"ml-3"),children:[h&&e.jsx("h4",{className:"text-sm font-medium mb-1",children:h}),u&&e.jsx("div",{className:"text-sm",children:u})]}),s&&e.jsx("div",{className:"flex-shrink-0 ml-4",children:e.jsx(G,{onClick:y,className:j.closeButton,size:"md"})})]}):null});n.displayName="Alert";try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:{value:"info"},description:"Alert 的類型樣式",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},position:{defaultValue:{value:"top-right"},description:"Alert 的顯示位置",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"middle-left"'},{value:'"middle-center"'},{value:'"middle-right"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'}]}},closable:{defaultValue:{value:"true"},description:"是否顯示關閉按鈕",name:"closable",required:!1,type:{name:"boolean | undefined"}},duration:{defaultValue:{value:"3000"},description:"自動關閉時間（毫秒），設為 0 則不自動關閉",name:"duration",required:!1,type:{name:"number | undefined"}},showIcon:{defaultValue:{value:"true"},description:"是否顯示圖示",name:"showIcon",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"自訂圖示",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Alert 標題",name:"title",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Alert 內容",name:"children",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"關閉時的回調函數",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},visible:{defaultValue:{value:"true"},description:"是否可見",name:"visible",required:!1,type:{name:"boolean | undefined"}},id:{defaultValue:null,description:"唯一識別碼",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const K=r=>A("fixed pointer-events-none z-[9999]",{"top-left":"top-4 left-4","top-center":"top-4 left-1/2 -translate-x-1/2","top-right":"top-4 right-4","middle-left":"top-1/2 left-4 -translate-y-1/2","middle-center":"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2","middle-right":"top-1/2 right-4 -translate-y-1/2","bottom-left":"bottom-4 left-4","bottom-center":"bottom-4 left-1/2 -translate-x-1/2","bottom-right":"bottom-4 right-4"}[r]),Q=r=>r.reduce((t,s)=>{const i=s.position||"top-right";return t[i]||(t[i]=[]),t[i].push(s),t},{}),N=({alerts:r,onRemove:t})=>{const[s,i]=d.useState(!1);if(d.useEffect(()=>{i(!0)},[]),!s)return null;const c=Q(r);return q.createPortal(e.jsx(e.Fragment,{children:Object.entries(c).map(([l,h])=>e.jsx("div",{className:K(l),children:e.jsx("div",{className:A("flex flex-col gap-2",l.includes("bottom")?"flex-col-reverse":"flex-col"),children:h.map(u=>{const{key:f,...a}=u;return e.jsx(n,{...a,onClose:()=>t(u.id)},f)})})},l))}),document.body)};try{N.displayName="AlertContainer",N.__docgenInfo={description:"",displayName:"AlertContainer",props:{alerts:{defaultValue:null,description:"",name:"alerts",required:!0,type:{name:"AlertInstance[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: string) => void"}}}}}catch{}const X=r=>typeof r=="object"&&r!==null&&"content"in r&&(C.isValidElement(r.content)||typeof r.content=="string");class Y{constructor(){this.alerts=[],this.listeners=[],this.idCounter=0,this.globalConfig={duration:3e3,position:"top-right",closable:!0,showIcon:!0,maxCount:10},this.info=(t,s={})=>this.add(t,{...s||{},type:"info"}),this.success=(t,s={})=>this.add(t,{...s||{},type:"success"}),this.warning=(t,s={})=>this.add(t,{...s||{},type:"warning"}),this.error=(t,s={})=>this.add(t,{...s||{},type:"error"}),this.primary=(t,s={})=>this.add(t,{...s||{},type:"primary"})}subscribe(t){return this.listeners.push(t),t(this.alerts),()=>{this.listeners=this.listeners.filter(s=>s!==t)}}notify(){this.listeners.forEach(t=>t([...this.alerts]))}setConfig(t){this.globalConfig={...this.globalConfig,...t}}getConfig(){return{...this.globalConfig}}resetConfig(){this.globalConfig={duration:3e3,position:"top-right",closable:!0,showIcon:!0,maxCount:10}}generateId(){return`alert-${Date.now()}-${++this.idCounter}`}add(t,s={}){let i,c;if(X(t)){const{content:f,...a}=t;i=f,c=a}else i=t,c=s;const l=this.generateId(),h={...this.globalConfig,...c},u={id:l,key:l,children:i,visible:!0,...h};return this.globalConfig.maxCount&&this.alerts.length>=this.globalConfig.maxCount&&this.alerts.shift(),this.alerts.push(u),this.notify(),l}remove(t){this.alerts=this.alerts.filter(s=>s.id!==t),this.notify()}clear(){this.alerts=[],this.notify()}clearByPosition(t){this.alerts=this.alerts.filter(s=>s.position!==t),this.notify()}clearByType(t){this.alerts=this.alerts.filter(s=>s.type!==t),this.notify()}}const o=new Y;let B=!1;const g=()=>{if(!B&&typeof document<"u"){const r=document.createElement("div");r.id="eonui-alert-provider",document.body.appendChild(r);const t=H.createRoot(r);t.render(C.createElement(N,{alerts:[],onRemove:()=>{}})),o.subscribe(s=>{t.render(C.createElement(N,{alerts:s,onRemove:i=>o.remove(i)}))}),B=!0}},m={add:(r,t)=>(g(),o.add(r,t)),remove:r=>{o.remove(r)},clear:()=>{o.clear()},clearByPosition:r=>{o.clearByPosition(r)},clearByType:r=>{o.clearByType(r)},setConfig:r=>{o.setConfig(r)},getConfig:()=>o.getConfig(),resetConfig:()=>{o.resetConfig()},info:(r,t)=>(g(),o.info(r,t)),success:(r,t)=>(g(),o.success(r,t)),warning:(r,t)=>(g(),o.warning(r,t)),error:(r,t)=>(g(),o.error(r,t)),primary:(r,t)=>(g(),o.primary(r,t))},Z=()=>{const[r,t]=d.useState([{id:"1",type:"info",title:"資訊提示",children:"這是一個資訊提示的範例內容。",visible:!0},{id:"2",type:"success",title:"成功提示",children:"操作已成功完成！",visible:!0}]),s=i=>{t(c=>c.filter(l=>l.id!==i))};return e.jsx("div",{className:"space-y-4 w-full max-w-md",children:r.map(i=>e.jsx(n,{...i,onClose:()=>s(i.id)},i.id))})},O=()=>{const r=()=>{m.info("這是一個資訊提示訊息",{position:"top-right",duration:3e3})},t=()=>{m.success("操作成功完成！",{position:"top-right",title:"成功",duration:4e3})},s=()=>{m.warning("請注意這個警告訊息",{position:"top-center",title:"警告",duration:5e3})},i=()=>{m.error("發生了一個錯誤",{position:"top-left",title:"錯誤",duration:0})},c=()=>{m.primary("這是主要提示訊息",{position:"bottom-right",title:"主要",duration:3e3})},l=()=>{m.clear()};return e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("button",{onClick:r,className:"px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",children:"顯示資訊"}),e.jsx("button",{onClick:t,className:"px-4 py-2 bg-success-600 text-white rounded-md hover:bg-success-700 transition-colors",children:"顯示成功"}),e.jsx("button",{onClick:s,className:"px-4 py-2 bg-warning-600 text-white rounded-md hover:bg-warning-700 transition-colors",children:"顯示警告"}),e.jsx("button",{onClick:i,className:"px-4 py-2 bg-error-600 text-white rounded-md hover:bg-error-700 transition-colors",children:"顯示錯誤"}),e.jsx("button",{onClick:c,className:"px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors",children:"顯示主要"}),e.jsx("button",{onClick:l,className:"px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors",children:"清除全部"})]})})},ee=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Alert 警告提示"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的警告提示組件，用於向用戶顯示重要的系統訊息。支援多種類型、位置和自動關閉功能。 可以透過組件方式直接使用，也可以透過 AlertService 以編程方式調用。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Alert 的各種屬性："}),e.jsx(T,{}),e.jsx(M,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(x,{title:"🔄 實際使用範例",description:"以下是實際的 Alert 範例，展示各種功能組合：",code:`const [alerts, setAlerts] = useState([
  {
    id: '1',
    type: 'info' as const,
    title: '資訊提示',
    children: '這是一個資訊提示的範例內容。',
    visible: true,
  },
  {
    id: '2',
    type: 'success' as const,
    title: '成功提示',
    children: '操作已成功完成！',
    visible: true,
  },
]);

const handleClose = (id: string) => {
  setAlerts((prev) => prev.filter((alert) => alert.id !== id));
};

// 渲染 Alert 列表
{alerts.map((alert) => (
  <Alert
    key={alert.id}
    {...alert}
    onClose={() => handleClose(alert.id)}
  />
))}`,children:e.jsx(Z,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(x,{title:"🎨 Alert 類型",description:"Alert 提供五種不同的類型樣式：",code:`// 五種不同的 Alert 類型
<Alert type="primary" title="主要提示">
  這是主要提示樣式，用於一般資訊提示。
</Alert>
<Alert type="info" title="資訊提示">
  這是資訊提示樣式，用於中性的系統訊息。
</Alert>
<Alert type="success" title="成功提示">
  這是成功提示樣式，用於成功完成的操作。
</Alert>
<Alert type="warning" title="警告提示">
  這是警告提示樣式，用於需要用戶注意的情況。
</Alert>
<Alert type="error" title="錯誤提示">
  這是錯誤提示樣式，用於錯誤和危險的情況。
</Alert>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{type:"primary",title:"主要提示",children:"這是主要提示樣式，用於一般資訊提示。"}),e.jsx(n,{type:"info",title:"資訊提示",children:"這是資訊提示樣式，用於中性的系統訊息。"}),e.jsx(n,{type:"success",title:"成功提示",children:"這是成功提示樣式，用於成功完成的操作。"}),e.jsx(n,{type:"warning",title:"警告提示",children:"這是警告提示樣式，用於需要用戶注意的情況。"}),e.jsx(n,{type:"error",title:"錯誤提示",children:"這是錯誤提示樣式，用於錯誤和危險的情況。"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"類型說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primary："}),"主要提示，用於一般資訊"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Info："}),"資訊提示，用於中性系統訊息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功提示，用於成功操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告提示，用於需要注意的情況"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤提示，用於錯誤和危險情況"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(x,{title:"🗑️ 關閉功能",description:"Alert 支援手動關閉和自動關閉功能：",code:`// 可手動關閉
<Alert
  type="info"
  title="可手動關閉"
  closable={true}
>
  點擊右上角的 × 按鈕可以關閉這個 Alert。
</Alert>

// 不可關閉
<Alert
  type="warning"
  title="不可關閉"
  closable={false}
>
  這個 Alert 沒有關閉按鈕，無法手動關閉。
</Alert>

// 自動關閉
<Alert
  type="success"
  title="自動關閉"
  duration={5000}
>
  這個 Alert 會在 5 秒後自動關閉。
</Alert>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{type:"info",title:"可手動關閉",closable:!0,children:"點擊右上角的 × 按鈕可以關閉這個 Alert。"}),e.jsx(n,{type:"warning",title:"不可關閉",closable:!1,children:"這個 Alert 沒有關閉按鈕，無法手動關閉。"}),e.jsx(n,{type:"success",title:"自動關閉",duration:5e3,children:"這個 Alert 會在 5 秒後自動關閉。"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"關閉功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"closable："}),"控制是否顯示關閉按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"duration："}),"自動關閉時間（毫秒），設為 0 則不自動關閉"]}),e.jsx("li",{children:"滑鼠移入時會暫停自動關閉計時"}),e.jsx("li",{children:"滑鼠移出時重新開始計時"})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(x,{title:"🎯 圖示功能範例",description:"Alert 支援顯示預設圖示或自訂圖示：",code:`// 顯示預設圖示
<Alert
  type="info"
  title="顯示預設圖示"
  showIcon={true}
>
  這個 Alert 顯示預設的資訊圖示。
</Alert>

// 不顯示圖示
<Alert
  type="warning"
  title="不顯示圖示"
  showIcon={false}
>
  這個 Alert 不顯示任何圖示。
</Alert>

// 自訂圖示
<Alert
  type="success"
  title="自訂圖示"
  showIcon={true}
  icon={
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
>
  這個 Alert 使用自訂的勾選圖示。
</Alert>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{type:"info",title:"顯示預設圖示",showIcon:!0,children:"這個 Alert 顯示預設的資訊圖示。"}),e.jsx(n,{type:"warning",title:"不顯示圖示",showIcon:!1,children:"這個 Alert 不顯示任何圖示。"}),e.jsx(n,{type:"success",title:"自訂圖示",showIcon:!0,icon:e.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),children:"這個 Alert 使用自訂的勾選圖示。"})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(x,{title:"🔧 AlertService 使用範例",description:"透過 AlertService 可以編程方式調用 Alert，支援全域顯示：",code:`// AlertService 快捷方法
const showInfo = () => {
  AlertService.info('這是一個資訊提示訊息', {
    position: 'top-right',
    duration: 3000,
  });
};

const showSuccess = () => {
  AlertService.success('操作成功完成！', {
    position: 'top-right',
    title: '成功',
    duration: 4000,
  });
};

const showWarning = () => {
  AlertService.warning('請注意這個警告訊息', {
    position: 'top-center',
    title: '警告',
    duration: 5000,
  });
};

const showError = () => {
  AlertService.error('發生了一個錯誤', {
    position: 'top-left',
    title: '錯誤',
    duration: 0, // 不自動關閉
  });
};

// 清除所有 Alert
const clearAll = () => {
  AlertService.clear();
};`,children:e.jsx(O,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"AlertService 功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"自動定位："}),"Alert 會顯示在指定位置，支援 9 種位置"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自動管理："}),"多個 Alert 會自動排列，不會重疊"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"快捷方法："}),"提供 info、success、warning、error、primary 等快捷方法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"批量操作："}),"支援清除全部、按位置清除、按類型清除"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsxs(x,{title:"📍 位置展示範例",description:"Alert 支援 9 種不同的顯示位置：",code:`// Alert 支援 9 種不同的顯示位置
const positions = [
  'top-left', 'top-center', 'top-right',
  'middle-left', 'middle-center', 'middle-right',
  'bottom-left', 'bottom-center', 'bottom-right'
];

// 在指定位置顯示 Alert
positions.map((position) => (
  <button
    key={position}
    onClick={() =>
      AlertService.info(\`位置：\${position}\`, {
        position: position as AlertPosition,
        duration: 2000,
      })
    }
  >
    {position}
  </button>
));`,children:[e.jsx("div",{className:"grid grid-cols-3 gap-2 text-sm",children:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"].map(r=>e.jsx("button",{onClick:()=>m.info(`位置：${r}`,{position:r,duration:2e3}),className:"px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors",children:r},r))}),e.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"點擊按鈕在對應位置顯示 Alert"})]})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"組件方式"}),e.jsx("pre",{className:"component-docs-code",children:`import { Alert } from 'eonui';

// 基本 Alert
<Alert type="info" title="提示">
  這是一個資訊提示
</Alert>

// 帶樣式的 Alert
<Alert
  type="success"
  title="成功"
  closable={true}
  duration={3000}
  showIcon={true}
  position="top-right"
>
  操作成功完成！
</Alert>

// 自訂圖示
<Alert
  type="warning"
  title="警告"
  icon={<CustomIcon />}
>
  自訂警告訊息
</Alert>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"Service 方式"}),e.jsx("pre",{className:"component-docs-code",children:`import { AlertService } from 'eonui';

// 快捷方法
AlertService.info('資訊訊息');
AlertService.success('成功訊息');
AlertService.warning('警告訊息');
AlertService.error('錯誤訊息');
AlertService.primary('主要訊息');

// 帶選項
AlertService.info('訊息內容', {
  title: '提示',
  position: 'top-right',
  duration: 3000,
  closable: true,
});

// 完整選項對象方式
AlertService.add({
  content: '自訂內容',
  type: 'success',
  title: '成功',
  position: 'bottom-center',
  duration: 0, // 不自動關閉
});

// 管理方法
const alertId = AlertService.info('訊息');
AlertService.remove(alertId); // 移除特定 Alert
AlertService.clear(); // 清除全部
AlertService.clearByType('error'); // 清除錯誤類型
AlertService.clearByPosition('top-right'); // 清除指定位置`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Alert 組件的所有功能，可以在你的項目中開始使用了！ Alert 組件提供了靈活的提示功能，適用於各種用戶反饋場景。"})]})]}),me={title:"Feedback/Alert",component:n,parameters:{layout:"centered",docs:{page:()=>e.jsx(ee,{})}},argTypes:{type:{control:{type:"select"},options:["primary","info","success","warning","error"],description:"Alert 的類型樣式",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},position:{control:{type:"select"},options:["top-left","top-center","top-right","middle-left","middle-center","middle-right","bottom-left","bottom-center","bottom-right"],description:"Alert 的顯示位置",table:{type:{summary:"string"},defaultValue:{summary:"top-right"}}},closable:{control:{type:"boolean"},description:"是否顯示關閉按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},duration:{control:{type:"number"},description:"自動關閉時間（毫秒），設為 0 則不自動關閉",table:{type:{summary:"number"},defaultValue:{summary:"3000"}}},showIcon:{control:{type:"boolean"},description:"是否顯示圖示",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},title:{control:{type:"text"},description:"Alert 標題",table:{type:{summary:"string"}}},children:{control:{type:"text"},description:"Alert 內容",table:{type:{summary:"ReactNode"}}},visible:{control:{type:"boolean"},description:"是否可見",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},onClose:{action:"closed",description:"關閉時的回調函數",table:{type:{summary:"() => void"}}}},tags:["autodocs"]},b={args:{type:"info",title:"Alert 標題",children:"這是 Alert 的內容文字，可以包含任何 React 節點。",closable:!0,duration:3e3,showIcon:!0,visible:!0}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Alert 標題',
    children: '這是 Alert 的內容文字，可以包含任何 React 節點。',
    closable: true,
    duration: 3000,
    showIcon: true,
    visible: true
  }
}`,...b.parameters?.docs?.source}}};const he=["Docs"];export{b as Docs,he as __namedExportsOrder,me as default};

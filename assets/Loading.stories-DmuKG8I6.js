import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CWGlHkPv.js";import{P as v,C as b}from"./blocks-iZvN7QCr.js";import{C as p}from"./CodeExample-2qKpfjti.js";/* empty css                       */import{c as L}from"./cn-Dtjc6EhN.js";import{B as u}from"./Button-DXU_lmna.js";import"./preload-helper-Ll21cQ8F.js";import"./index-5ApEmjN3.js";import"./icons-B4aNx7RA.js";const j=()=>e.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",role:"img","aria-label":"載入中",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),m=({visible:o=!1,text:t="載入中...",icon:a,maskOpacity:s=.5,fullscreen:i=!1,className:n,style:r,onMaskClick:c})=>{if(!o)return null;const l={backgroundColor:`rgba(255, 255, 255, ${s})`,...r};return e.jsx("div",{className:L("flex items-center justify-center",i?"fixed inset-0 z-[9999]":"absolute inset-0 z-50",n),style:l,onClick:c,role:"dialog","aria-modal":"true","aria-label":t,children:e.jsxs("div",{className:"flex flex-col items-center justify-center space-y-3 p-6",onClick:g=>g.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center",children:a||e.jsx(j,{})}),t&&e.jsx("div",{className:"text-gray-700 text-sm font-medium text-center",children:t})]})})};m.displayName="Loading";try{m.displayName="Loading",m.__docgenInfo={description:"",displayName:"Loading",props:{visible:{defaultValue:{value:"false"},description:"是否顯示 Loading",name:"visible",required:!1,type:{name:"boolean | undefined"}},text:{defaultValue:{value:"載入中..."},description:"Loading 文字",name:"text",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"自定義圖標",name:"icon",required:!1,type:{name:"ReactNode"}},maskOpacity:{defaultValue:{value:"0.5"},description:"遮罩透明度",name:"maskOpacity",required:!1,type:{name:"number | undefined"}},fullscreen:{defaultValue:{value:"false"},description:"是否全屏顯示",name:"fullscreen",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"自定義類名",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"自定義樣式",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},onMaskClick:{defaultValue:null,description:"遮罩點擊事件",name:"onMaskClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const y=d.createContext(void 0),h=({children:o})=>{const[t,a]=d.useState(!1),[s,i]=d.useState({}),n=d.useCallback((l={})=>{i(l),a(!0)},[]),r=d.useCallback(()=>{a(!1)},[]),c={showLoading:n,hideLoading:r,loading:t};return e.jsxs(y.Provider,{value:c,children:[o,e.jsx(m,{visible:t,fullscreen:!0,text:s.text,icon:s.icon,maskOpacity:s.maskOpacity,onMaskClick:r})]})},N=()=>{const o=d.useContext(y);if(o===void 0)throw new Error("useLoading must be used within a LoadingProvider");return o};h.displayName="LoadingProvider";try{h.displayName="LoadingProvider",h.__docgenInfo={description:"",displayName:"LoadingProvider",props:{}}}catch{}class C{constructor(){this.instances=new Map,this.globalInstance=null}start(t={}){const{text:a="載入中...",icon:s,maskOpacity:i=.5,target:n,fullscreen:r=!1}=t;if(n){const c=typeof n=="string"?document.querySelector(n):n;return c?this.createTargetInstance(c,{text:a,icon:s,maskOpacity:i,fullscreen:!1}):(console.warn(`Loading target not found: ${n}`),this.createGlobalInstance(t))}return this.createGlobalInstance({text:a,icon:s,maskOpacity:i,fullscreen:r})}closeAll(){this.instances.forEach(t=>t.close()),this.instances.clear(),this.globalInstance&&(this.globalInstance.close(),this.globalInstance=null)}close(t){if(!t){this.globalInstance&&(this.globalInstance.close(),this.globalInstance=null);return}const a=typeof t=="string"?t:this.getElementKey(t),s=this.instances.get(a);s&&(s.close(),this.instances.delete(a))}createGlobalInstance(t){this.globalInstance&&this.globalInstance.close();const a=this.createLoadingElement(t,!0);document.body.appendChild(a);const s={close:()=>{a.parentNode&&a.parentNode.removeChild(a),this.globalInstance=null},update:i=>{this.updateLoadingElement(a,{...t,...i})}};return this.globalInstance=s,s}createTargetInstance(t,a){const s=this.getElementKey(t),i=this.instances.get(s);i&&i.close();const n=t.style.position;(!n||n==="static")&&(t.style.position="relative");const r=this.createLoadingElement(a,!1);t.appendChild(r);const c={close:()=>{r.parentNode&&r.parentNode.removeChild(r),(!n||n==="static")&&(t.style.position=n||""),this.instances.delete(s)},update:l=>{this.updateLoadingElement(r,{...a,...l})}};return this.instances.set(s,c),c}createLoadingElement(t,a){const{text:s="載入中...",maskOpacity:i=.5}=t,n=document.createElement("div");n.className=`loading-mask flex items-center justify-center ${a?"fixed inset-0 z-[9999]":"absolute inset-0 z-50"}`,n.style.backgroundColor=`rgba(255, 255, 255, ${i})`,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label",s);const r=document.createElement("div");r.className="flex flex-col items-center justify-center space-y-3 p-6",r.onclick=g=>g.stopPropagation();const c=document.createElement("div");c.className="flex items-center justify-center",c.innerHTML=`
      <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-label="載入中">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;const l=document.createElement("div");return l.className="text-gray-700 text-sm font-medium text-center",l.textContent=s,r.appendChild(c),r.appendChild(l),n.appendChild(r),n}updateLoadingElement(t,a){const{text:s,maskOpacity:i}=a;if(s){const n=t.querySelector(".text-gray-700");n&&(n.textContent=s)}i!==void 0&&(t.style.backgroundColor=`rgba(255, 255, 255, ${i})`)}getElementKey(t){return t.id?`#${t.id}`:(t.dataset.loadingKey||(t.dataset.loadingKey=`loading-${Date.now()}-${Math.random().toString(36).substr(2,9)}`),t.dataset.loadingKey)}}const f=new C,k=()=>{const[o,t]=d.useState(!1),[a,s]=d.useState(!1),[i,n]=d.useState(!1),r=()=>{t(!0),setTimeout(()=>t(!1),2e3)},c=()=>{s(!0),setTimeout(()=>s(!1),2e3)},l=()=>{n(!0);const g=f.start({text:"區域載入中...",target:".loading-target",maskOpacity:.6});setTimeout(()=>{g.close(),n(!1)},2e3)};return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"基本 Loading"}),e.jsxs("div",{className:"relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center",children:[e.jsx(u,{variant:"primary",onClick:r,disabled:o,children:o?"載入中...":"顯示 Loading (2秒)"}),e.jsx(m,{visible:o,text:"載入中..."})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"自定義圖標"}),e.jsxs("div",{className:"relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center",children:[e.jsx(u,{variant:"secondary",onClick:c,disabled:a,children:a?"處理中...":"自定義 Loading (2秒)"}),e.jsx(m,{visible:a,text:"正在處理...",icon:e.jsx("div",{className:"w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"Service 目標遮罩"}),e.jsx(u,{variant:"outline",onClick:l,disabled:i,className:"mb-3",children:"目標 Loading (2秒)"}),e.jsx("div",{className:"loading-target relative w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50",children:e.jsx("div",{className:"text-gray-500",children:i?"載入中...":"點擊上方按鈕在此區域顯示 Loading"})})]})]})},w=()=>{const{showLoading:o,hideLoading:t,loading:a}=N();return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-4",children:"使用 Context 方式管理全屏 Loading 狀態"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(u,{variant:"primary",onClick:()=>o({text:"正在載入數據..."}),disabled:a,children:"顯示 Loading"}),e.jsx(u,{variant:"secondary",onClick:t,disabled:!a,children:"隱藏 Loading"})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["狀態: ",a?"載入中":"閒置"]})]})},S=()=>{const[o,t]=d.useState(!1),a=()=>{const i=f.start({text:"全屏載入中...",maskOpacity:.7});setTimeout(()=>{i.close()},3e3)},s=()=>{t(!0);const i=f.start({text:"區域載入中...",target:".loading-target",maskOpacity:.6});setTimeout(()=>{i.close(),t(!1)},2e3)};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"text-sm text-gray-600 mb-4",children:"使用 Service 方式管理 Loading 狀態"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(u,{variant:"primary",onClick:a,children:"全屏 Loading (3秒)"}),e.jsx(u,{variant:"secondary",onClick:s,disabled:o,children:"目標 Loading (2秒)"})]}),e.jsx("div",{className:"loading-target relative w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50",children:e.jsx("div",{className:"text-gray-500",children:o?"載入中...":"點擊上方按鈕在此區域顯示 Loading"})})]})},E=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Loading 載入組件"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的載入組件，提供靈活的載入狀態顯示功能。 支援組件、Context、Service 三種使用方式，可指定目標元素遮罩，提供豐富的自定義選項和無障礙支援。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Loading 的各種屬性："}),e.jsx(v,{}),e.jsx(b,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(p,{title:"🔄 實際使用範例",description:"以下是實際的載入組件範例，展示各種功能組合：",code:`// 互動式 Loading 範例
const [loading, setLoading] = useState(false);

const handleLoading = () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 2000);
};

return (
  <div className="space-y-6">
    <div className="relative">
      <Button onClick={handleLoading} disabled={loading}>
        {loading ? '載入中...' : '開始載入'}
      </Button>
      <Loading visible={loading} text="載入中..." />
    </div>

    <div className="relative">
      <div>內容區域</div>
      <Loading
        visible={loading}
        text="自定義載入..."
        icon={<CustomSpinner />}
        maskOpacity={0.8}
      />
    </div>
  </div>
);`,children:e.jsx(k,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(p,{title:"🔄 Context 使用方式",description:"使用 LoadingProvider 和 useLoading Hook 管理全屏 Loading：",code:`import { LoadingProvider, useLoading } from 'eonui';

function App() {
  return (
    <LoadingProvider>
      <YourComponent />
    </LoadingProvider>
  );
}

function YourComponent() {
  const { showLoading, hideLoading } = useLoading();

  const handleSubmit = async () => {
    showLoading({ text: '提交中...' });
    try {
      await submitForm();
    } finally {
      hideLoading();
    }
  };

  return <button onClick={handleSubmit}>提交</button>;
}`,children:e.jsx(h,{children:e.jsx(w,{})})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(p,{title:"🔄 Service 使用方式",description:"使用 loadingService 進行更靈活的 Loading 管理：",code:`import { loadingService } from 'eonui';

// 全屏 Loading
const instance = loadingService.start({
  text: '載入中...',
  maskOpacity: 0.7
});

// 關閉 Loading
instance.close();

// 目標元素 Loading
loadingService.start({
  text: '處理中...',
  target: '.my-container' // CSS 選擇器或 DOM 元素
});

// 關閉指定目標的 Loading
loadingService.close('.my-container');

// 關閉所有 Loading
loadingService.closeAll();`,children:e.jsx(S,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(p,{title:"🔄 自定義樣式",description:"自定義圖標、文字和樣式：",code:`import { Loading } from 'eonui';

const CustomSpinner = () => (
  <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" />
);

function App() {
  return (
    <Loading
      visible={true}
      text="正在處理..."
      icon={<CustomSpinner />}
      maskOpacity={0.8}
      className="custom-loading"
    />
  );
}`,children:e.jsxs("div",{className:"relative w-full h-32 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center",children:[e.jsx("div",{className:"text-gray-500",children:"自定義樣式"}),e.jsx(m,{visible:!0,text:"正在處理...",icon:e.jsx("div",{className:"w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"}),maskOpacity:.6})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Loading } from 'eonui';

// 基本組件使用
<Loading visible={loading} text="載入中..." />

// 全屏模式
<Loading visible={loading} text="載入中..." fullscreen />

// 自定義圖標
<Loading
  visible={loading}
  text="處理中..."
  icon={<CustomSpinner />}
  maskOpacity={0.8}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// Context 方式
const { showLoading, hideLoading } = useLoading();

showLoading({ text: '載入中...', maskOpacity: 0.7 });
hideLoading();

// Service 方式
const instance = loadingService.start({
  text: '載入中...',
  target: '.my-container', // 目標元素
  maskOpacity: 0.6
});

instance.close(); // 關閉特定實例
loadingService.closeAll(); // 關閉所有

// 組合使用
<Loading
  visible={loading}
  text="自定義載入..."
  icon={<CustomIcon />}
  maskOpacity={0.8}
  fullscreen
  onMaskClick={() => setLoading(false)}
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Loading 組件的所有功能，可以在你的項目中開始使用了！ 這個載入組件提供了三種使用方式，適用於各種載入場景，從簡單的組件載入到複雜的目標遮罩。"})]})]}),M={title:"Data Display/Loading",component:m,parameters:{layout:"centered",docs:{page:()=>e.jsx(E,{})}},argTypes:{visible:{control:{type:"boolean"},description:"是否顯示 Loading",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},text:{control:{type:"text"},description:"Loading 文字",table:{type:{summary:"string"},defaultValue:{summary:"載入中..."}}},icon:{control:!1,description:"自定義圖標",table:{type:{summary:"React.ReactNode"}}},maskOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"遮罩透明度",table:{type:{summary:"number"},defaultValue:{summary:"0.5"}}},fullscreen:{control:{type:"boolean"},description:"是否全屏顯示",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},className:{control:{type:"text"},description:"自定義類名",table:{type:{summary:"string"}}},onMaskClick:{action:"maskClicked",description:"遮罩點擊事件",table:{type:{summary:"() => void"}}}},tags:["autodocs"]},x={args:{visible:!0,text:"載入中...",maskOpacity:.5,fullscreen:!1},render:o=>e.jsxs("div",{className:"relative w-96 h-64 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center",children:[e.jsx("div",{className:"text-gray-500",children:"這是一個容器"}),e.jsx(m,{...o})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    text: '載入中...',
    maskOpacity: 0.5,
    fullscreen: false
  },
  render: args => <div className="relative w-96 h-64 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
      <div className="text-gray-500">這是一個容器</div>
      <Loading {...args} />
    </div>
}`,...x.parameters?.docs?.source}}};const q=["Docs"];export{x as Docs,q as __namedExportsOrder,M as default};

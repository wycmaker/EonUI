import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as _,r as a}from"./iframe-DtrAF50Y.js";import{r as G,P as J,C as Q}from"./blocks-CAYfFhLU.js";import{B as i}from"./Button-BYg5JYyV.js";import{C}from"./CodeExample-vFRyXKH9.js";import{c as p}from"./cn-Dtjc6EhN.js";import{E as X,W as Y,C as Z,I as ee}from"./icons-B4aNx7RA.js";import{C as se}from"./CloseButton-oVX7iLTx.js";import{c as te}from"./client-CaLKOy8s.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-DDMkSrZn.js";const ne=({type:s,className:t})=>{const n={info:e.jsx(ee,{className:t}),success:e.jsx(Z,{className:t}),warning:e.jsx(Y,{className:t}),error:e.jsx(X,{className:t})};return n[s]||n.info},x=_.forwardRef(({visible:s=!1,variant:t="alert",type:n="info",title:o,content:c,icon:d,showIcon:g=!0,closable:h=!0,okText:j,cancelText:u,onClose:b,onOk:k,onCancel:D,onAnimationEnd:N,id:q,className:z},ce)=>{const[F,B]=a.useState(!1),[v,O]=a.useState(s),[A,S]=a.useState(!1),W=a.useRef(null),w=a.useRef(null);a.useEffect(()=>{if(s){O(!0),B(!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{B(!1)})});const y=setTimeout(()=>{N?.("enter")},300);return()=>clearTimeout(y)}else B(!0),w.current=setTimeout(()=>{O(!1),B(!1),N?.("exit")},300);return()=>{w.current&&(clearTimeout(w.current),w.current=null)}},[s,N]);const f=a.useCallback(()=>{b?.()},[b]),I=a.useCallback(async()=>{if(k)try{S(!0),await k(),S(!1),f()}catch(l){S(!1),console.error("MessageBox onOk error:",l)}else f()},[k,f]),V=a.useCallback(()=>{D?.(),f()},[D,f]),L=a.useCallback(l=>{l.stopPropagation()},[]);if(a.useEffect(()=>{const l=y=>{s&&(y.key==="Escape"?t==="confirm"?V():h&&f():y.key==="Enter"&&I())};if(v)return document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}},[v,s,t,h,f,V,I]),a.useEffect(()=>{if(v){const l=window.innerWidth-document.documentElement.clientWidth,y=document.body.style.overflow,K=document.body.style.paddingRight;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${l}px`,()=>{document.body.style.overflow=y,document.body.style.paddingRight=K}}},[v]),!v)return null;const $=()=>j||(t==="confirm"?"確定":"知道了"),U=()=>u||"取消",E={info:{iconColor:"text-blue-500",titleColor:"text-gray-900"},success:{iconColor:"text-green-500",titleColor:"text-gray-900"},warning:{iconColor:"text-yellow-500",titleColor:"text-gray-900"},error:{iconColor:"text-red-500",titleColor:"text-gray-900"}}[n],H=e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:L,"data-messagebox-mask":!0,children:[e.jsx("div",{className:p("absolute inset-0 bg-black transition-opacity",F?"opacity-0":"opacity-50"),style:{transitionDuration:"300ms",transitionTimingFunction:"ease-out"}}),e.jsxs("div",{ref:W,className:p("relative bg-white rounded-lg shadow-xl flex flex-col transition-all max-w-md w-full mx-4",F?"-translate-y-12 opacity-0 scale-90":"translate-y-0 opacity-100 scale-100",z),style:{transitionDuration:"300ms",transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)",transformOrigin:"center top"},onClick:l=>l.stopPropagation(),"data-messagebox-id":q,children:[h&&t==="alert"&&e.jsx("div",{className:"absolute top-4 right-4 z-10",children:e.jsx(se,{onClick:f,className:"text-gray-400 hover:text-gray-600",size:"md",ariaLabel:"關閉對話框"})}),e.jsxs("div",{className:"px-6 py-6",children:[(o||g)&&e.jsxs("div",{className:"flex items-center mb-4",children:[g&&e.jsx("div",{className:"flex-shrink-0 mr-3",children:d?e.jsx("div",{className:p("h-6 w-6",E.iconColor),children:d}):e.jsx(ne,{type:n,className:p("h-6 w-6",E.iconColor)})}),o&&e.jsx("h2",{className:p("text-lg font-semibold flex-1",E.titleColor,h&&t==="alert"?"pr-8":""),children:o})]}),c&&e.jsx("div",{className:p("text-sm text-gray-700",o||g?"":"mb-6"),children:c}),e.jsxs("div",{className:"flex justify-end space-x-3 mt-6",children:[t==="confirm"&&e.jsx("button",{type:"button",onClick:V,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors",children:U()}),e.jsxs("button",{type:"button",onClick:I,disabled:A,className:p("px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",n==="error"?"bg-red-600 hover:bg-red-700 focus:ring-red-500":n==="warning"?"bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500":n==="success"?"bg-green-600 hover:bg-green-700 focus:ring-green-500":"bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",A&&"opacity-75 cursor-not-allowed"),children:[A&&e.jsxs("svg",{className:"w-4 h-4 mr-2 animate-spin",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),$()]})]})]})]})]});return G.createPortal(H,document.body)});x.displayName="MessageBox";try{x.displayName="MessageBox",x.__docgenInfo={description:"",displayName:"MessageBox",props:{visible:{defaultValue:{value:"false"},description:"是否顯示 MessageBox",name:"visible",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:{value:"alert"},description:"MessageBox 變體",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"alert"'},{value:'"confirm"'}]}},type:{defaultValue:{value:"info"},description:"消息類型",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},title:{defaultValue:null,description:"標題",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"內容",name:"content",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"自訂圖示",name:"icon",required:!1,type:{name:"ReactNode"}},showIcon:{defaultValue:{value:"true"},description:"是否顯示圖示",name:"showIcon",required:!1,type:{name:"boolean | undefined"}},closable:{defaultValue:{value:"true"},description:"是否顯示關閉按鈕",name:"closable",required:!1,type:{name:"boolean | undefined"}},okText:{defaultValue:null,description:"確認按鈕文字",name:"okText",required:!1,type:{name:"string | undefined"}},cancelText:{defaultValue:null,description:"取消按鈕文字",name:"cancelText",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"關閉時的回調",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onOk:{defaultValue:null,description:"確認時的回調",name:"onOk",required:!1,type:{name:"(() => void | Promise<void>) | undefined"}},onCancel:{defaultValue:null,description:"取消時的回調",name:"onCancel",required:!1,type:{name:"(() => void) | undefined"}},onAnimationEnd:{defaultValue:null,description:"動畫結束後的回調",name:"onAnimationEnd",required:!1,type:{name:'((phase: "enter" | "exit") => void) | undefined'}},id:{defaultValue:null,description:"唯一識別碼（用於 Service）",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}class oe{constructor(){this.messageBoxes=[],this.listeners=[],this.idCounter=0}subscribe(t){return this.listeners.push(t),t(this.messageBoxes),()=>{this.listeners=this.listeners.filter(n=>n!==t)}}notify(){this.listeners.forEach(t=>t([...this.messageBoxes]))}generateId(){return`messagebox-${Date.now()}-${++this.idCounter}`}open(t){const n=this.generateId(),o={id:n,key:n,...t};return this.messageBoxes=[o],this.notify(),n}close(t){this.messageBoxes=this.messageBoxes.filter(n=>n.id!==t),this.notify()}closeAll(){this.messageBoxes=[],this.notify()}update(t,n){this.messageBoxes=this.messageBoxes.map(o=>o.id===t?{...o,...n}:o),this.notify()}getAll(){return[...this.messageBoxes]}exists(t){return this.messageBoxes.some(n=>n.id===t)}}const m=new oe;class re extends a.Component{render(){const{messageBoxes:t,onClose:n}=this.props;return e.jsx(e.Fragment,{children:t.map(o=>{const{key:c,id:d,...g}=o;return e.jsx(x,{id:d,...g,visible:!0,onClose:()=>n(d)},c)})})}}class T extends a.Component{constructor(){super(...arguments),this.unsubscribe=null,this.state={messageBoxes:[]},this.handleClose=t=>{m.close(t)}}componentDidMount(){this.unsubscribe=m.subscribe(t=>{this.setState({messageBoxes:t})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const{children:t}=this.props,{messageBoxes:n}=this.state;return e.jsxs(e.Fragment,{children:[t,e.jsx(re,{messageBoxes:n,onClose:this.handleClose})]})}}try{T.displayName="MessageBoxProvider",T.__docgenInfo={description:"",displayName:"MessageBoxProvider",props:{}}}catch{}let R=!1;const P=()=>{if(!R&&typeof document<"u"){const s=document.createElement("div");s.id="eonui-messagebox-provider",document.body.appendChild(s),te.createRoot(s).render(_.createElement(T,{children:null})),R=!0}},r={alert:s=>(P(),new Promise(t=>{const n=async()=>{try{s.onOk&&await s.onOk(),t()}catch(o){throw console.error("MessageBox alert onOk error:",o),o}};m.open({variant:"alert",type:s.type||"info",title:s.title,content:s.content,icon:s.icon,showIcon:s.showIcon!==!1,okText:s.okText,closable:!0,onOk:n})})),confirm:s=>(P(),new Promise(t=>{const n=async()=>{try{s.onOk&&await s.onOk(),t(!0)}catch(c){throw console.error("MessageBox confirm onOk error:",c),c}},o=()=>{s.onCancel&&s.onCancel(),t(!1)};m.open({variant:"confirm",type:s.type||"info",title:s.title,content:s.content,icon:s.icon,showIcon:s.showIcon!==!1,okText:s.okText,cancelText:s.cancelText,closable:!1,onOk:n,onCancel:o})})),close:s=>{m.close(s)},closeAll:()=>{m.closeAll()},update:(s,t)=>{m.update(s,t)},getAll:()=>m.getAll(),exists:s=>m.exists(s),info:(s,t)=>r.alert({...t,content:s,type:"info"}),success:(s,t)=>r.alert({...t,content:s,type:"success"}),warning:(s,t)=>r.alert({...t,content:s,type:"warning"}),error:(s,t)=>r.alert({...t,content:s,type:"error"}),confirmInfo:(s,t)=>r.confirm({...t,content:s,type:"info"}),confirmWarning:(s,t)=>r.confirm({...t,content:s,type:"warning"}),confirmError:(s,t)=>r.confirm({...t,content:s,type:"error"})},ie=()=>{const[s,t]=a.useState(!1),[n,o]=a.useState(!1),[c,d]=a.useState(!1);return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"基本 Alert"}),e.jsx(i,{onClick:()=>t(!0),children:"開啟 Alert"}),e.jsx(x,{visible:s,variant:"alert",type:"info",title:"提示",content:"這是一個基本的 Alert 範例。",onClose:()=>t(!1)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"基本 Confirm"}),e.jsx(i,{onClick:()=>o(!0),children:"開啟 Confirm"}),e.jsx(x,{visible:n,variant:"confirm",type:"warning",title:"確認操作",content:"您確定要執行這個操作嗎？",onOk:()=>{alert("用戶點擊了確定"),o(!1)},onCancel:()=>{alert("用戶點擊了取消"),o(!1)},onClose:()=>o(!1)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"自訂圖示"}),e.jsx(i,{onClick:()=>d(!0),children:"開啟自訂 Alert"}),e.jsx(x,{visible:c,variant:"alert",type:"success",title:"操作成功",content:"您的操作已成功完成！",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),onClose:()=>d(!1)})]})]})},ae=()=>{const s=async()=>{await r.info("這是一個基本的信息提示。"),console.log("Alert 已關閉")},t=async()=>{await r.success("操作成功完成！",{title:"成功"}),console.log("成功提示已關閉")},n=async()=>{await r.warning("請注意這個警告訊息。",{title:"警告",okText:"我知道了"}),console.log("警告提示已關閉")},o=async()=>{await r.error("發生了一個錯誤，請重試。",{title:"錯誤",okText:"重試"}),console.log("錯誤提示已關閉")},c=async()=>{const u=await r.confirm({title:"確認刪除",content:"您確定要刪除這個項目嗎？此操作無法撤銷。",type:"warning",okText:"刪除",cancelText:"取消"});alert(u?"用戶確認了刪除操作":"用戶取消了操作")},d=async()=>{const u=await r.confirmError("這個操作具有風險性，可能會導致數據丟失。",{title:"危險操作確認",okText:"我了解風險，繼續",cancelText:"取消"});console.log("確認結果:",u)},g=async()=>{await r.alert({title:"自訂圖示",content:"這是一個使用自訂圖示的 Alert。",type:"info",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})},h=async()=>{await r.alert({title:"無圖示提示",content:"這是一個不顯示圖示的 Alert。",type:"info",showIcon:!1})},j=async()=>{try{const u=await r.confirm({title:"異步操作確認",content:"點擊確定將執行一個異步操作（模擬 2 秒延遲）。",type:"info",onOk:()=>new Promise(b=>{setTimeout(()=>{alert("異步操作完成！"),b()},2e3)})});console.log("異步確認結果:",u)}catch(u){console.error("異步操作出錯:",u)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:s,children:"基本 Alert"}),e.jsx(i,{onClick:t,children:"成功 Alert"}),e.jsx(i,{onClick:n,children:"警告 Alert"}),e.jsx(i,{onClick:o,children:"錯誤 Alert"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:c,children:"基本 Confirm"}),e.jsx(i,{onClick:d,children:"危險 Confirm"}),e.jsx(i,{onClick:j,children:"異步 Confirm"}),e.jsx(i,{onClick:g,children:"自訂圖示"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:h,children:"無圖示 Alert"}),e.jsx(i,{variant:"outline",onClick:()=>r.closeAll(),children:"關閉所有"})]})]})},le=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"MessageBox 訊息對話框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的訊息對話框組件，支援 Alert 和 Confirm 兩種變體。提供 Promise 回調機制， 支援標題、內容、圖示自訂，並可選擇是否顯示圖示。主要透過 Service API 進行使用。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 MessageBox 的各種屬性："}),e.jsx(J,{}),e.jsx(Q,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(C,{title:"🔄 實際使用範例",description:"以下是實際的 MessageBox 範例，展示各種功能組合：",code:`// MessageBox 基本使用範例
const [visible, setVisible] = useState(false);
const [type, setType] = useState('info');

// 顯示 MessageBox
<MessageBox
  visible={visible}
  type={type}
  title="訊息標題"
  onClose={() => setVisible(false)}
  onConfirm={() => {
    console.log('用戶確認');
    setVisible(false);
  }}
>
  這是 MessageBox 的內容文字。
</MessageBox>

// 或使用 MessageBoxService 調用
MessageBoxService.alert({
  type: 'info',
  title: '提示',
  content: '這是一個資訊提示',
});`,children:e.jsx(ie,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(C,{title:"🔄 對話框類型範例",description:"MessageBox 提供四種不同的消息類型：",code:`// 不同類型的對話框
// Info 類型
MessageBoxService.alert({
  type: 'info',
  title: 'Info 提示',
  content: '這是 info 類型的訊息提示。',
});

// Success 類型
MessageBoxService.alert({
  type: 'success',
  title: 'Success 提示',
  content: '這是 success 類型的訊息提示。',
});

// Warning 類型
MessageBoxService.alert({
  type: 'warning',
  title: 'Warning 提示',
  content: '這是 warning 類型的訊息提示。',
});

// Error 類型
MessageBoxService.alert({
  type: 'error',
  title: 'Error 提示',
  content: '這是 error 類型的訊息提示。',
});`,children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["info","success","warning","error"].map(s=>e.jsxs(i,{onClick:()=>r.alert({type:s,title:`${s.charAt(0).toUpperCase()+s.slice(1)} 提示`,content:`這是 ${s} 類型的訊息提示。`}),children:[s.charAt(0).toUpperCase()+s.slice(1)," Alert"]},s))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"類型說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Info："}),"藍色圖示，用於一般資訊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"綠色圖示，用於成功操作提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"黃色圖示，用於警告和需要注意的情況"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"紅色圖示，用於錯誤和危險情況"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(C,{title:"🔄 MessageBoxService 使用範例",description:"透過 MessageBoxService 可以程式化控制 MessageBox，支援 Promise 回調：",code:`// 使用 MessageBoxService 進行程式化控制
const ServiceExample = () => {
  const handleConfirm = async () => {
    try {
      const result = await MessageBoxService.confirm({
        title: '確認操作',
        content: '您確定要執行這個操作嗎？',
        type: 'warning',
      });

      if (result) {
        // 用戶點擊了確認
        MessageBoxService.alert({
          type: 'success',
          title: '操作成功',
          content: '您已成功執行操作！',
        });
      }
    } catch (error) {
      // 用戶點擊了取消
      console.log('用戶取消了操作');
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleConfirm}>
        確認對話框範例
      </Button>
    </div>
  );
};`,children:e.jsx(ae,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"MessageBoxService 功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Promise 回調："}),"所有方法都返回 Promise，方便處理用戶操作結果"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"單例模式："}),"同時只會顯示一個 MessageBox，確保用戶專注"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"快捷方法："}),"提供 info、success、warning、error 等快捷方法"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"異步支援："}),"支援在 onOk 回調中執行異步操作"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(C,{title:"🔄 變體展示範例",description:"MessageBox 支援 Alert 和 Confirm 兩種變體：",code:`// Alert 變體 - 只有確認按鈕
MessageBoxService.alert({
  title: 'Alert 變體',
  content: '這是 Alert 變體，只有一個確認按鈕。',
  type: 'info',
});

// Confirm 變體 - 有確認和取消按鈕
MessageBoxService.confirm({
  title: 'Confirm 變體',
  content: '這是 Confirm 變體，有確認和取消按鈕。',
  type: 'warning',
}).then((result) => {
  if (result) {
    console.log('用戶確認了操作');
  } else {
    console.log('用戶取消了操作');
  }
});`,children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Alert 變體"}),e.jsx(i,{onClick:()=>r.alert({title:"Alert 變體",content:"這是 Alert 變體，只有一個確認按鈕。",type:"info"}),children:"顯示 Alert"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"只有確認按鈕，支援右上角關閉按鈕"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Confirm 變體"}),e.jsx(i,{onClick:()=>r.confirm({title:"Confirm 變體",content:"這是 Confirm 變體，有確認和取消按鈕。",type:"warning"}),children:"顯示 Confirm"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"有確認和取消按鈕，不顯示右上角關閉按鈕"})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(C,{title:"🔄 圖示功能範例",description:"MessageBox 支援顯示預設圖示或自訂圖示：",code:`// 預設圖示
MessageBoxService.alert({
  title: '預設圖示',
  content: '這個 MessageBox 使用預設的成功圖示。',
  type: 'success',
  showIcon: true,
});

// 自訂圖示
MessageBoxService.alert({
  title: '自訂圖示',
  content: '這個 MessageBox 使用自訂圖示。',
  type: 'info',
  icon: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
    </svg>
  ),
});

// 無圖示
MessageBoxService.alert({
  title: '無圖示',
  content: '這個 MessageBox 不顯示圖示。',
  type: 'info',
  showIcon: false,
});

// 無標題有圖示
MessageBoxService.alert({
  content: '這個 MessageBox 沒有標題，圖示會與內容一起顯示。',
  type: 'warning',
  showIcon: true,
});`,children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:()=>r.alert({title:"預設圖示",content:"這個 MessageBox 使用預設的成功圖示。",type:"success",showIcon:!0}),children:"預設圖示"}),e.jsx(i,{onClick:()=>r.alert({title:"自訂圖示",content:"這個 MessageBox 使用自訂圖示。",type:"info",icon:e.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"})})}),children:"自訂圖示"}),e.jsx(i,{onClick:()=>r.alert({title:"無圖示",content:"這個 MessageBox 不顯示圖示。",type:"info",showIcon:!1}),children:"無圖示"}),e.jsx(i,{onClick:()=>r.alert({content:"這個 MessageBox 沒有標題，圖示會與內容一起顯示。",type:"warning",showIcon:!0}),children:"無標題有圖示"})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"Service 方式（推薦）"}),e.jsx("pre",{className:"component-docs-code",children:`import { MessageBoxService } from 'eonui';

// 基本 Alert
await MessageBoxService.info('這是一個信息提示');

// 帶標題的 Alert
await MessageBoxService.success('操作成功！', {
  title: '成功',
  okText: '知道了'
});

// 基本 Confirm
const result = await MessageBoxService.confirm({
  title: '確認刪除',
  content: '您確定要刪除這個項目嗎？',
  type: 'warning',
  okText: '刪除',
  cancelText: '取消'
});

if (result) {
  // 用戶確認了操作
} else {
  // 用戶取消了操作
}

// 異步操作
const asyncResult = await MessageBoxService.confirm({
  title: '提交數據',
  content: '點擊確定將提交數據到服務器',
  onOk: async () => {
    // 執行異步操作
    await submitDataToServer();
  }
});

// 自訂圖示
await MessageBoxService.alert({
  title: '自訂提示',
  content: '這是自訂圖示的提示',
  type: 'info',
  icon: <CustomIcon />
});

// 無圖示
await MessageBoxService.warning('警告訊息', {
  showIcon: false
});`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"組件方式"}),e.jsx("pre",{className:"component-docs-code",children:`import { MessageBox } from 'eonui';

// 基本 Alert
<MessageBox
  visible={alertVisible}
  variant="alert"
  type="info"
  title="提示"
  content="這是提示內容"
  onClose={() => setAlertVisible(false)}
/>

// Confirm 對話框
<MessageBox
  visible={confirmVisible}
  variant="confirm"
  type="warning"
  title="確認操作"
  content="您確定要執行這個操作嗎？"
  onOk={() => {
    // 用戶確認
    setConfirmVisible(false);
  }}
  onCancel={() => {
    // 用戶取消
    setConfirmVisible(false);
  }}
  onClose={() => setConfirmVisible(false)}
/>

// 自訂圖示
<MessageBox
  visible={customVisible}
  variant="alert"
  type="success"
  title="成功"
  content="操作完成"
  icon={<CheckIcon />}
  onClose={() => setCustomVisible(false)}
/>

// 無圖示
<MessageBox
  visible={noIconVisible}
  variant="alert"
  type="info"
  title="純文字提示"
  content="這是不顯示圖示的提示"
  showIcon={false}
  onClose={() => setNoIconVisible(false)}
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 MessageBox 組件的所有功能，可以在你的項目中開始使用了！ MessageBox 組件提供了簡潔的對話框解決方案，適用於各種用戶確認和提示場景。"})]})]}),Be={title:"Feedback/MessageBox",component:x,parameters:{layout:"centered",docs:{page:()=>e.jsx(le,{})}},argTypes:{visible:{control:{type:"boolean"},description:"是否顯示 MessageBox",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},variant:{control:{type:"select"},options:["alert","confirm"],description:"MessageBox 變體",table:{type:{summary:"string"},defaultValue:{summary:"alert"}}},type:{control:{type:"select"},options:["info","success","warning","error"],description:"消息類型",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},title:{control:{type:"text"},description:"標題",table:{type:{summary:"ReactNode"}}},content:{control:{type:"text"},description:"內容",table:{type:{summary:"ReactNode"}}},showIcon:{control:{type:"boolean"},description:"是否顯示圖示",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closable:{control:{type:"boolean"},description:"是否顯示關閉按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},okText:{control:{type:"text"},description:"確認按鈕文字",table:{type:{summary:"string"}}},cancelText:{control:{type:"text"},description:"取消按鈕文字",table:{type:{summary:"string"}}},onClose:{action:"closed",description:"關閉時的回調",table:{type:{summary:"() => void"}}},onOk:{action:"confirmed",description:"確認時的回調",table:{type:{summary:"() => void | Promise<void>"}}},onCancel:{action:"cancelled",description:"取消時的回調",table:{type:{summary:"() => void"}}}},tags:["autodocs"]},M={args:{visible:!1,variant:"alert",type:"info",title:"MessageBox 標題",content:"這是 MessageBox 的內容文字，可以包含任何 React 節點。",showIcon:!0,closable:!0},render:function(t){const[n,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"開啟 MessageBox"}),e.jsx(x,{...t,visible:n,onClose:()=>o(!1),onOk:()=>{console.log("確認"),o(!1)},onCancel:()=>{console.log("取消"),o(!1)}})]})}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    variant: 'alert',
    type: 'info',
    title: 'MessageBox 標題',
    content: '這是 MessageBox 的內容文字，可以包含任何 React 節點。',
    showIcon: true,
    closable: true
  },
  render: function DocsStory(args) {
    const [visible, setVisible] = useState(false);
    return <>
        <Button onClick={() => setVisible(true)}>開啟 MessageBox</Button>
        <MessageBox {...args} visible={visible} onClose={() => setVisible(false)} onOk={() => {
        // eslint-disable-next-line no-console
        console.log('確認');
        setVisible(false);
      }} onCancel={() => {
        // eslint-disable-next-line no-console
        console.log('取消');
        setVisible(false);
      }} />
      </>;
  }
}`,...M.parameters?.docs?.source}}};const we=["Docs"];export{M as Docs,we as __namedExportsOrder,Be as default};

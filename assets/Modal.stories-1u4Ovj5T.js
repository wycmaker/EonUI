import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as b,r as a}from"./iframe-lqGEyVtj.js";import{r as H,P as Q,C as Y}from"./blocks-Cq-kwBFv.js";import{B as i}from"./Button-CeHKvE-s.js";import{I as O}from"./Input-BqeiiyMQ.js";import{C as F}from"./CodeExample-Dp8PQKs1.js";import{T as Z}from"./Textarea-sGCPiHo8.js";import{u as ee}from"./useClickOutside-CrAsg0FH.js";import{c as P}from"./cn-Dtjc6EhN.js";import{C as te}from"./CloseButton-oVX7iLTx.js";import{c as le}from"./client-CxHWhuka.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-3aTa7jhJ.js";import"./icons-B4aNx7RA.js";import"./clearable-C08SD5GV.js";import"./formStyles-D_LMpAhg.js";const h=b.forwardRef(({visible:l,defaultVisible:t=!1,maskClosable:s=!0,closable:o=!0,title:n,width:d,height:p,size:f="md",footer:c,className:y,animationDuration:x=300,disableAnimation:u=!1,onClose:k,onOpen:V,onAnimationEnd:S,children:U,id:w},de)=>{const[W,K]=a.useState(t),[R,B]=a.useState(!1),[E,z]=a.useState(l??t),M=a.useRef(null),D=a.useRef(null),j=l!==void 0?l:W,T={sm:{width:"400px",height:void 0},md:{width:"600px",height:void 0},lg:{width:"800px",height:void 0},xl:{width:"1000px",height:void 0},full:{width:"95vw",height:"95vh"}}[f],G={width:d||T.width,height:p||T.height};a.useEffect(()=>{if(j)if(z(!0),B(!0),u)B(!1),V?.(),S?.("enter");else{requestAnimationFrame(()=>{requestAnimationFrame(()=>{B(!1)})}),V?.();const m=setTimeout(()=>{S?.("enter")},x);return()=>clearTimeout(m)}else u?(z(!1),S?.("exit")):(B(!0),D.current=setTimeout(()=>{z(!1),B(!1),S?.("exit")},x));return()=>{D.current&&(clearTimeout(D.current),D.current=null)}},[j,u,x,V,S]);const g=a.useCallback(()=>{l===void 0&&K(!1),k?.()},[l,k]),J=a.useCallback(m=>{s&&m.target===m.currentTarget&&g()},[s,g]);if(ee([M],g,j&&s),a.useEffect(()=>{if(E){const m=window.innerWidth-document.documentElement.clientWidth,C=document.body.style.overflow,N=document.body.style.paddingRight;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${m}px`,()=>{document.body.style.overflow=C,document.body.style.paddingRight=N}}},[E]),a.useEffect(()=>{const m=C=>{C.key==="Escape"&&j&&o&&g()};if(E)return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[E,j,o,g]),a.useEffect(()=>{if(j&&M.current){const m=document.activeElement;M.current.focus();const C=N=>{if(N.key==="Tab"&&M.current){const q=M.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),_=q[0],I=q[q.length-1];N.shiftKey?document.activeElement===_&&(N.preventDefault(),I?.focus()):document.activeElement===I&&(N.preventDefault(),_?.focus())}};return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C),m&&typeof m.focus=="function"&&m.focus()}}},[j]),!E)return null;const X=e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:J,"data-modal-mask":!0,children:[e.jsx("div",{className:P("absolute inset-0 bg-black transition-opacity",u?"opacity-50":R?"opacity-0":"opacity-50"),style:{transitionDuration:u?"0ms":`${x}ms`,transitionTimingFunction:"ease-out"}}),e.jsxs("div",{ref:M,className:P("relative bg-white rounded-lg shadow-xl flex flex-col transition-all max-h-full max-w-[95vw]",u?"translate-y-0 opacity-100 scale-100":R?"-translate-y-12 opacity-0 scale-90":"translate-y-0 opacity-100 scale-100",y),style:{...G,transitionDuration:u?"0ms":`${x}ms`,transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)",transformOrigin:"center top"},onClick:m=>m.stopPropagation(),"data-modal-id":w,role:"dialog","aria-modal":"true","aria-labelledby":n?`modal-title-${w}`:void 0,"aria-describedby":`modal-content-${w}`,tabIndex:-1,children:[(n||o)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-gray-200",children:[n&&e.jsx("h2",{id:`modal-title-${w}`,className:"text-lg font-semibold text-gray-900 flex-1 pr-4",children:n}),o&&e.jsx(te,{onClick:g,className:"text-gray-400 hover:text-gray-600",size:"md",ariaLabel:"關閉對話框"})]}),e.jsx("div",{id:`modal-content-${w}`,className:"flex-1 px-6 py-4 overflow-auto",children:U}),c&&e.jsx("div",{className:"px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg",children:c})]})]});return H.createPortal(X,document.body)});h.displayName="Modal";try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"是否顯示 Modal",name:"visible",required:!1,type:{name:"boolean | undefined"}},defaultVisible:{defaultValue:{value:"false"},description:"預設是否顯示 Modal",name:"defaultVisible",required:!1,type:{name:"boolean | undefined"}},maskClosable:{defaultValue:{value:"true"},description:"點擊遮罩是否關閉 Modal",name:"maskClosable",required:!1,type:{name:"boolean | undefined"}},closable:{defaultValue:{value:"true"},description:"是否顯示關閉按鈕",name:"closable",required:!1,type:{name:"boolean | undefined"}},title:{defaultValue:null,description:"Modal 標題",name:"title",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"Modal 寬度",name:"width",required:!1,type:{name:"string | number | undefined"}},height:{defaultValue:null,description:"Modal 高度",name:"height",required:!1,type:{name:"string | number | undefined"}},size:{defaultValue:{value:"md"},description:"Modal 大小預設值",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"full"'}]}},footer:{defaultValue:null,description:"頁腳內容",name:"footer",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Modal 自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}},animationDuration:{defaultValue:{value:"300"},description:"動畫持續時間（毫秒）",name:"animationDuration",required:!1,type:{name:"number | undefined"}},disableAnimation:{defaultValue:{value:"false"},description:"是否禁用動畫",name:"disableAnimation",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"關閉時的回調",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onOpen:{defaultValue:null,description:"開啟時的回調",name:"onOpen",required:!1,type:{name:"(() => void) | undefined"}},onAnimationEnd:{defaultValue:null,description:"動畫結束後的回調",name:"onAnimationEnd",required:!1,type:{name:'((phase: "enter" | "exit") => void) | undefined'}},children:{defaultValue:null,description:"Modal 內容",name:"children",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"唯一識別碼（用於 Service）",name:"id",required:!1,type:{name:"string | undefined"}}}}}catch{}class se extends a.Component{render(){const{modals:t,onClose:s}=this.props;return e.jsx(e.Fragment,{children:t.map(o=>{const{key:n,id:d,...p}=o;return e.jsx(h,{id:d,...p,visible:!0,onClose:()=>s(d)},n)})})}}class $ extends a.Component{constructor(){super(...arguments),this.unsubscribe=null,this.state={modals:[]},this.handleClose=t=>{v.close(t)}}componentDidMount(){this.unsubscribe=v.subscribe(t=>{this.setState({modals:t})})}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const{children:t}=this.props,{modals:s}=this.state;return e.jsxs(e.Fragment,{children:[t,e.jsx(se,{modals:s,onClose:this.handleClose})]})}}class oe{constructor(){this.modals=[],this.listeners=[],this.idCounter=0}subscribe(t){return this.listeners.push(t),t(this.modals),()=>{this.listeners=this.listeners.filter(s=>s!==t)}}notify(){this.listeners.forEach(t=>t([...this.modals]))}generateId(){return`modal-${Date.now()}-${++this.idCounter}`}open(t){const s=this.generateId(),o={id:s,key:s,...t};return this.modals.push(o),this.notify(),s}close(t){this.modals=this.modals.filter(s=>s.id!==t),this.notify()}closeAll(){this.modals=[],this.notify()}update(t,s){this.modals=this.modals.map(o=>o.id===t?{...o,...s}:o),this.notify()}getAll(){return[...this.modals]}exists(t){return this.modals.some(s=>s.id===t)}}const v=new oe;try{$.displayName="ModalProvider",$.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}let L=!1;const ie=()=>{if(!L&&typeof document<"u"){const l=document.createElement("div");l.id="eonui-modal-provider",document.body.appendChild(l);const t=le.createRoot(l),s=o=>b.createElement(b.Fragment,null,...o.map(n=>{const{key:d,id:p,...f}=n;return b.createElement(h,{key:d,id:p,...f,visible:!0,onClose:()=>v.close(p)})}));t.render(s([])),v.subscribe(o=>{t.render(s(o))}),L=!0}},r={open:l=>(ie(),v.open(l)),close:l=>{v.close(l)},closeAll:()=>{v.closeAll()},update:(l,t)=>{v.update(l,t)},getAll:()=>v.getAll(),exists:l=>v.exists(l),confirm:l=>{const{title:t="確認",content:s,okText:o="確定",cancelText:n="取消",onOk:d,onCancel:p,maskClosable:f=!1}=l;return new Promise(c=>{const y=async()=>{try{d&&await d(),r.close(k),c(!0)}catch{c(!1)}},x=()=>{p?.(),r.close(k),c(!1)},u=b.createElement("div",{className:"flex justify-end space-x-3"},b.createElement("button",{className:"px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:x},n),b.createElement("button",{className:"px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:y},o)),k=r.open({title:t,children:s,footer:u,maskClosable:f,size:"sm",closable:!1})})},alert:l=>{const{title:t="提示",content:s,okText:o="確定",onOk:n,maskClosable:d=!1}=l;return new Promise(p=>{const f=async()=>{try{n&&await n()}catch{}r.close(y),p()},c=b.createElement("div",{className:"flex justify-end"},b.createElement("button",{className:"px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",onClick:f},o)),y=r.open({title:t,children:s,footer:c,maskClosable:d,size:"sm",closable:!1})})}},ne=()=>{const[l,t]=a.useState(!1),[s,o]=a.useState(!1),[n,d]=a.useState(!1),[p,f]=a.useState(!1),[c,y]=a.useState({name:"",email:"",message:""}),x=()=>{alert(`表單提交: ${JSON.stringify(c,null,2)}`),d(!1)};return e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"基本 Modal"}),e.jsx(i,{onClick:()=>t(!0),children:"開啟基本 Modal"}),e.jsx(h,{visible:l,onClose:()=>t(!1),title:"基本 Modal",footer:e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(i,{variant:"outline",onClick:()=>t(!1),children:"取消"}),e.jsx(i,{onClick:()=>t(!1),children:"確定"})]}),children:e.jsx("p",{children:"這是一個基本的 Modal 範例，包含標題、內容和頁腳。"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"大尺寸 Modal"}),e.jsx(i,{onClick:()=>o(!0),children:"開啟大尺寸 Modal"}),e.jsx(h,{visible:s,onClose:()=>o(!1),title:"大尺寸 Modal",size:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{children:"這是一個大尺寸的 Modal，適合顯示更多內容。"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx("p",{children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"表單 Modal"}),e.jsx(i,{onClick:()=>d(!0),children:"開啟表單 Modal"}),e.jsx(h,{visible:n,onClose:()=>d(!1),title:"聯絡表單",footer:e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(i,{variant:"outline",onClick:()=>d(!1),children:"取消"}),e.jsx(i,{onClick:x,children:"提交"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"姓名"}),e.jsx(O,{value:c.name,onChange:u=>y({...c,name:u.target.value}),placeholder:"請輸入您的姓名"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"電子郵件"}),e.jsx(O,{type:"email",value:c.email,onChange:u=>y({...c,email:u.target.value}),placeholder:"請輸入您的電子郵件"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"訊息"}),e.jsx(Z,{value:c.message,onChange:u=>y({...c,message:u.target.value}),placeholder:"請輸入您的訊息",rows:4})]})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-700",children:"不可點擊遮罩關閉"}),e.jsx(i,{onClick:()=>f(!0),children:"開啟 Modal"}),e.jsx(h,{visible:p,onClose:()=>f(!1),title:"重要提示",maskClosable:!1,footer:e.jsx("div",{className:"flex justify-end",children:e.jsx(i,{onClick:()=>f(!1),children:"我知道了"})}),children:e.jsx("p",{children:"這個 Modal 無法透過點擊遮罩關閉，必須點擊按鈕才能關閉。"})})]})]})},ae=()=>{const l=()=>{r.open({title:"Service Modal",children:e.jsxs("div",{children:[e.jsx("p",{children:"這是透過 ModalService 開啟的 Modal。"}),e.jsx("p",{children:"當使用 Service 方式時，Modal 會動態建立 DOM 元素。"})]}),footer:e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(i,{variant:"outline",onClick:()=>r.closeAll(),children:"關閉所有"}),e.jsx(i,{onClick:()=>r.closeAll(),children:"確定"})]})})},t=async()=>{await r.confirm({title:"確認刪除",content:"您確定要刪除這個項目嗎？此操作無法撤銷。",okText:"刪除",cancelText:"取消",onOk:()=>new Promise(n=>{setTimeout(()=>{alert("項目已刪除"),n()},1e3)})})},s=async()=>{await r.alert({title:"操作完成",content:"您的操作已成功完成！",okText:"知道了"})},o=()=>{const n=r.open({title:"Modal 1",children:e.jsx("p",{children:"第一個 Modal"}),size:"sm"});setTimeout(()=>{r.open({title:"Modal 2",children:e.jsx("p",{children:"第二個 Modal，會覆蓋在第一個之上"}),size:"md"}),setTimeout(()=>{r.close(n)},2e3)},1e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:l,children:"開啟 Service Modal"}),e.jsx(i,{onClick:t,children:"確認對話框"}),e.jsx(i,{onClick:s,children:"警告對話框"}),e.jsx(i,{onClick:o,children:"多個 Modal"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(i,{variant:"outline",onClick:()=>r.closeAll(),children:"關閉所有 Modal"})})]})},re=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Modal 對話框"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的對話框組件，支援多種大小、自訂內容和程式化控制。提供滑入動畫效果， 可用於顯示重要資訊、表單或確認操作。支援組件方式和 Service 方式兩種使用模式。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Modal 的各種屬性："}),e.jsx(Q,{}),e.jsx(Y,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(F,{title:"🔄 實際使用範例",description:"以下是實際的 Modal 範例，展示各種功能組合：",code:`// 互動式 Modal 範例
const [visible, setVisible] = useState(false);
const [size, setSize] = useState('md');
const [closable, setClosable] = useState(true);

return (
  <div className="space-y-6 w-full max-w-md">
    <div>
      <h4 className="font-medium mb-2 text-gray-700">基本 Modal</h4>
      <Button onClick={() => setVisible(true)}>
        開啟 Modal
      </Button>

      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        title="基本 Modal"
        size={size}
        closable={closable}
      >
        <p>這是一個基本的 Modal 範例。</p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setVisible(false)}>
            取消
          </Button>
          <Button color="primary" onClick={() => setVisible(false)}>
            確認
          </Button>
        </div>
      </Modal>
    </div>
  </div>
);`,children:e.jsx(ne,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(F,{title:"🔄 Modal 大小範例",description:"Modal 提供五種不同的大小選項：",code:`// 不同大小的 Modal
// 小型 Modal (sm)
ModalService.open({
  title: 'SM Modal',
  size: 'sm',
  children: <div>這是 sm 大小的 Modal。</div>,
});

// 中型 Modal (md) - 預設
ModalService.open({
  title: 'MD Modal',
  size: 'md',
  children: <div>這是 md 大小的 Modal。</div>,
});

// 大型 Modal (lg)
ModalService.open({
  title: 'LG Modal',
  size: 'lg',
  children: <div>這是 lg 大小的 Modal。</div>,
});

// 超大型 Modal (xl)
ModalService.open({
  title: 'XL Modal',
  size: 'xl',
  children: <div>這是 xl 大小的 Modal。</div>,
});

// 全螢幕 Modal (full)
ModalService.open({
  title: 'FULL Modal',
  size: 'full',
  children: <div>這是 full 大小的 Modal。</div>,
});`,children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:["sm","md","lg","xl","full"].map(l=>e.jsxs(i,{onClick:()=>r.open({title:`${l.toUpperCase()} Modal`,size:l,children:e.jsxs("div",{children:[e.jsxs("p",{children:["這是 ",l," 大小的 Modal。"]}),e.jsx("p",{children:"內容會根據設定的大小自動調整寬度。"})]})}),children:[l.toUpperCase()," Modal"]},l))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"大小說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"400px 寬度，適用於簡單的確認對話框"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"600px 寬度，標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"800px 寬度，適用於複雜的表單或內容"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"xl："}),"1000px 寬度，適用於大量內容顯示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"full："}),"95vw x 95vh，接近全螢幕顯示"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(F,{title:"🔄 ModalService 使用範例",description:"透過 ModalService 可以程式化控制 Modal，支援動態建立和管理：",code:`// 使用 ModalService 進行程式化控制
const ServiceExample = () => {
  const handleOpenModal = () => {
    const modalId = ModalService.open({
      title: 'ModalService 範例',
      size: 'md',
      children: (
        <div>
          <p>這是通過 ModalService 開啟的 Modal。</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => ModalService.close(modalId)}
            >
              關閉
            </Button>
            <Button
              color="primary"
              onClick={() => {
                ModalService.close(modalId);
                alert('確認操作完成！');
              }}
            >
              確認
            </Button>
          </div>
        </div>
      ),
    });
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleOpenModal}>
        開啟 ModalService Modal
      </Button>
    </div>
  );
};`,children:e.jsx(ae,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"ModalService 功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"動態建立："}),"使用時才建立 DOM，不佔用額外記憶體"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自動管理："}),"多個 Modal 會自動層疊顯示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"便捷方法："}),"提供 confirm、alert 等快捷對話框"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"批量操作："}),"支援關閉所有、更新指定 Modal"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(F,{title:"🔄 動畫效果範例",description:"Modal 支援預設、慢速和無動畫效果：",code:`// 預設動畫效果
ModalService.open({
  title: '預設動畫',
  children: <p>使用預設的滑入動畫效果（300ms）</p>,
  animationDuration: 300,
});

// 慢速動畫效果
ModalService.open({
  title: '慢速動畫',
  children: <p>使用較慢的動畫效果（600ms）</p>,
  animationDuration: 600,
});

// 關閉動畫效果
ModalService.open({
  title: '無動畫',
  children: <p>關閉動畫效果，立即顯示</p>,
  disableAnimation: true,
});`,children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(i,{onClick:()=>r.open({title:"預設動畫",children:e.jsx("p",{children:"使用預設的滑入動畫效果（300ms）"}),animationDuration:300}),children:"預設動畫"}),e.jsx(i,{onClick:()=>r.open({title:"慢速動畫",children:e.jsx("p",{children:"使用較慢的動畫效果（600ms）"}),animationDuration:600}),children:"慢速動畫"}),e.jsx(i,{onClick:()=>r.open({title:"無動畫",children:e.jsx("p",{children:"關閉動畫效果，立即顯示"}),disableAnimation:!0}),children:"無動畫"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"動畫特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"滑入效果："}),"Modal 從上方滑入，同時淡入顯示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可自訂："}),"支援調整動畫持續時間"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"可關閉："}),"可完全禁用動畫效果"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"流暢體驗："}),"遮罩和內容同步動畫"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"組件方式"}),e.jsx("pre",{className:"component-docs-code",children:`import { Modal, Button } from 'eonui';

// 基本 Modal
const [visible, setVisible] = useState(false);

<Button onClick={() => setVisible(true)}>
  開啟 Modal
</Button>

<Modal
  visible={visible}
  onClose={() => setVisible(false)}
  title="對話框標題"
  footer={
    <div className="flex justify-end space-x-3">
      <Button variant="outline" onClick={() => setVisible(false)}>
        取消
      </Button>
      <Button onClick={() => setVisible(false)}>
        確定
      </Button>
    </div>
  }
>
  <p>這是 Modal 的內容</p>
</Modal>

// 表單 Modal
<Modal
  visible={formVisible}
  onClose={() => setFormVisible(false)}
  title="編輯資料"
  size="lg"
  maskClosable={false}
>
  <form>
    <input type="text" placeholder="姓名" />
    <textarea placeholder="備註"></textarea>
  </form>
</Modal>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"Service 方式"}),e.jsx("pre",{className:"component-docs-code",children:`import { ModalService } from 'eonui';

// 基本使用
const modalId = ModalService.open({
  title: '提示',
  children: <p>這是內容</p>,
  footer: <Button onClick={() => ModalService.close(modalId)}>關閉</Button>
});

// 確認對話框
const result = await ModalService.confirm({
  title: '確認刪除',
  content: '您確定要刪除這個項目嗎？',
  onOk: async () => {
    await deleteItem();
  }
});

if (result) {
  console.log('用戶確認了操作');
}

// 警告對話框
await ModalService.alert({
  title: '操作完成',
  content: '您的操作已成功完成！'
});

// 自訂 Modal
ModalService.open({
  title: '自訂對話框',
  size: 'lg',
  maskClosable: false,
  children: (
    <div>
      <h3>複雜內容</h3>
      <form>
        {/* 表單內容 */}
      </form>
    </div>
  ),
  footer: (
    <div className="flex justify-between">
      <Button variant="outline">重置</Button>
      <div className="space-x-3">
        <Button variant="outline">取消</Button>
        <Button>保存</Button>
      </div>
    </div>
  )
});

// 管理 Modal
ModalService.closeAll(); // 關閉所有
ModalService.update(modalId, { title: '新標題' }); // 更新內容`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Modal 組件的所有功能，可以在你的項目中開始使用了！ Modal 組件提供了靈活的對話框解決方案，適用於各種互動場景。"})]})]}),Be={title:"Components/Modal",component:h,parameters:{layout:"centered",docs:{page:()=>e.jsx(re,{})}},argTypes:{visible:{control:{type:"boolean"},description:"是否顯示 Modal",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultVisible:{control:{type:"boolean"},description:"預設是否顯示 Modal",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maskClosable:{control:{type:"boolean"},description:"點擊遮罩是否關閉 Modal",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closable:{control:{type:"boolean"},description:"是否顯示關閉按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},title:{control:{type:"text"},description:"Modal 標題",table:{type:{summary:"ReactNode"}}},width:{control:{type:"text"},description:"Modal 寬度（如：400px, 50%）",table:{type:{summary:"string | number"}}},height:{control:{type:"text"},description:"Modal 高度（如：300px, 50vh）",table:{type:{summary:"string | number"}}},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal 大小預設值",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},footer:{control:{type:"text"},description:"頁腳內容",table:{type:{summary:"ReactNode"}}},className:{control:{type:"text"},description:"Modal 自訂 CSS 類名",table:{type:{summary:"string"}}},animationDuration:{control:{type:"number",min:0,max:2e3,step:100},description:"動畫持續時間（毫秒）",table:{type:{summary:"number"},defaultValue:{summary:"300"}}},disableAnimation:{control:{type:"boolean"},description:"是否禁用動畫",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:{type:"text"},description:"Modal 內容",table:{type:{summary:"ReactNode"}}},id:{control:{type:"text"},description:"唯一識別碼（用於 Service）",table:{type:{summary:"string"}}},onClose:{action:"closed",description:"關閉時的回調",table:{type:{summary:"() => void"}}},onOpen:{action:"opened",description:"開啟時的回調",table:{type:{summary:"() => void"}}},onAnimationEnd:{action:"animationEnd",description:"動畫結束後的回調",table:{type:{summary:"(phase: 'enter' | 'exit') => void"}}}},tags:["autodocs"]},A={args:{visible:!1,defaultVisible:!1,title:"Modal 標題",children:"這是 Modal 的內容文字，可以包含任何 React 節點。",maskClosable:!0,closable:!0,size:"md",width:void 0,height:void 0,footer:void 0,className:"",animationDuration:300,disableAnimation:!1,id:void 0},render:function(t){const[s,o]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>o(!0),children:"開啟 Modal"}),e.jsx(h,{...t,visible:s,onClose:()=>o(!1),footer:e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(i,{variant:"outline",onClick:()=>o(!1),children:"取消"}),e.jsx(i,{onClick:()=>o(!1),children:"確定"})]})})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    defaultVisible: false,
    title: 'Modal 標題',
    children: '這是 Modal 的內容文字，可以包含任何 React 節點。',
    maskClosable: true,
    closable: true,
    size: 'md',
    width: undefined,
    height: undefined,
    footer: undefined,
    className: '',
    animationDuration: 300,
    disableAnimation: false,
    id: undefined
  },
  render: function DocsStory(args) {
    const [visible, setVisible] = useState(false);
    return <>\r
        <Button onClick={() => setVisible(true)}>開啟 Modal</Button>\r
        <Modal {...args} visible={visible} onClose={() => setVisible(false)} footer={<div className="flex justify-end space-x-3">\r
              <Button variant="outline" onClick={() => setVisible(false)}>\r
                取消\r
              </Button>\r
              <Button onClick={() => setVisible(false)}>確定</Button>\r
            </div>} />\r
      </>;
  }
}`,...A.parameters?.docs?.source}}};const Ee=["Docs"];export{A as Docs,Ee as __namedExportsOrder,Be as default};

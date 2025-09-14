import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p,R as N}from"./iframe-vexCixVy.js";import{P as M,C as H}from"./blocks-CUo2tLZq.js";import{C as m}from"./CodeExample-CuI99ZG3.js";import{c as i}from"./cn-Dtjc6EhN.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-uvf18IKX.js";const A=p.createContext(null);try{A.displayName="TabContext",A.__docgenInfo={description:"",displayName:"TabContext",props:{}}}catch{}const U=()=>{const s=p.useContext(A);if(!s)throw new Error("useTabContext must be used within Tab component");return s},w=(s,l)=>{const a={container:"flex",item:"relative transition-all duration-200 ease-in-out focus:outline-none"},t={sm:{item:"px-3 py-1.5 text-sm",gap:"gap-1"},md:{item:"px-4 py-2 text-sm",gap:"gap-2"},lg:{item:"px-6 py-3 text-base",gap:"gap-3"}};return s==="underline"?{container:i(a.container,"border-b border-gray-200",t[l].gap),item:i(a.item,t[l].item,"border-b-2 border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300","disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:text-gray-400"),activeItem:"text-primary border-primary"}:{container:i(a.container,"bg-gray-100 rounded-lg p-1",t[l].gap),item:i(a.item,t[l].item,"rounded-md text-gray-600 hover:text-gray-800 hover:bg-white/60","disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400"),activeItem:"bg-white text-primary shadow-sm"}},W=({item:s,isActive:l,onClick:a,className:t,activeClassName:h})=>{const{variant:b,size:x,useRouter:r}=U(),T=w(b,x),E=o=>{if(o.preventDefault(),!s.disabled){if(r&&s.href){window.location.href=s.href;return}a()}},K=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),s.disabled||a())},F=r&&s.href?"a":"button",P=r&&s.href?{href:s.href}:{type:"button"};return e.jsxs(F,{...P,className:i(T.item,l&&i(T.activeItem,h),t),onClick:E,onKeyDown:K,disabled:s.disabled,"aria-selected":l,role:"tab",tabIndex:s.disabled?-1:0,children:[s.icon&&e.jsx("span",{className:"inline-flex items-center mr-2",children:s.icon}),s.label]})},v=({children:s,className:l,...a})=>e.jsx("div",{className:i("tab-pane",l),...a,children:s}),c=N.forwardRef(({items:s=[],defaultActiveKey:l,activeKey:a,onChange:t,variant:h="underline",size:b="md",useRouter:x=!1,currentPath:r,className:T,tabsClassName:E,contentClassName:K,tabItemClassName:F,activeTabItemClassName:P,children:o,..._},B)=>{const u=N.useMemo(()=>{if(o){const d=[];return N.Children.forEach(o,n=>{if(N.isValidElement(n)&&n.type===v){const y=n.props;d.push({key:y.key,label:y.tab,disabled:y.disabled,icon:y.icon,children:n})}}),d}return s},[s,o]),V=p.useCallback(()=>{if(a)return a;if(l)return l;if(x&&r){const n=u.find(y=>y.href===r);if(n)return n.key}return u.find(n=>!n.disabled)?.key||""},[a,l,x,r,u]),[R,q]=p.useState(V),j=a!==void 0?a:R,k=p.useCallback(d=>{a===void 0&&q(d),t?.(d)},[a,t]);N.useEffect(()=>{if(x&&r){const d=u.find(n=>n.href===r);d&&d.key!==j&&k(d.key)}},[x,r,u,j,k]);const z=w(h,b),L={activeKey:j,setActiveKey:k,variant:h,size:b,useRouter:x,currentPath:r,onChange:t},S=N.useMemo(()=>u.find(n=>n.key===j)?.children||null,[u,j]);return e.jsx(A.Provider,{value:L,children:e.jsxs("div",{ref:B,className:i("tab-container",T),..._,children:[e.jsx("div",{className:i(z.container,E),role:"tablist","aria-orientation":"horizontal",children:u.map(d=>e.jsx(W,{item:d,isActive:d.key===j,onClick:()=>k(d.key),className:F,activeClassName:P},d.key))}),!x&&S&&e.jsx("div",{className:i("tab-content mt-4",K),role:"tabpanel",children:S})]})})});c.displayName="Tab";try{v.displayName="TabPane",v.__docgenInfo={description:"",displayName:"TabPane",props:{key:{defaultValue:null,description:"TabPane的唯一識別碼",name:"key",required:!0,type:{name:"string"}},tab:{defaultValue:null,description:"TabPane的標籤文字",name:"tab",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"是否禁用該TabPane",name:"disabled",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"TabPane的圖示",name:"icon",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"TabPane的內容",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"自訂CSS類名",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{c.displayName="Tab",c.__docgenInfo={description:"",displayName:"Tab",props:{items:{defaultValue:{value:"[]"},description:"Tab項目配置陣列",name:"items",required:!1,type:{name:"TabItem[] | undefined"}},defaultActiveKey:{defaultValue:null,description:"預設激活的Tab項目key",name:"defaultActiveKey",required:!1,type:{name:"string | undefined"}},activeKey:{defaultValue:null,description:"當前激活的Tab項目key（受控模式）",name:"activeKey",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Tab項目切換時的回調函數",name:"onChange",required:!1,type:{name:"((activeKey: string) => void) | undefined"}},variant:{defaultValue:{value:"underline"},description:"Tab的樣式變體",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"underline"'}]}},size:{defaultValue:{value:"md"},description:"Tab的大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},useRouter:{defaultValue:{value:"false"},description:"是否使用路由模式",name:"useRouter",required:!1,type:{name:"boolean | undefined"}},currentPath:{defaultValue:null,description:"當前路由路徑（路由模式下用於判斷激活狀態）",name:"currentPath",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"自訂CSS類名",name:"className",required:!1,type:{name:"string | undefined"}},tabsClassName:{defaultValue:null,description:"Tab容器的自訂CSS類名",name:"tabsClassName",required:!1,type:{name:"string | undefined"}},contentClassName:{defaultValue:null,description:"Tab內容區域的自訂CSS類名",name:"contentClassName",required:!1,type:{name:"string | undefined"}},tabItemClassName:{defaultValue:null,description:"Tab項目的自訂CSS類名",name:"tabItemClassName",required:!1,type:{name:"string | undefined"}},activeTabItemClassName:{defaultValue:null,description:"激活Tab項目的自訂CSS類名",name:"activeTabItemClassName",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"子組件（當不使用items配置時）",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const f=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),g=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),I=()=>e.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),O=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),D=()=>{const[s,l]=p.useState("home"),a=[{key:"home",label:"首頁",icon:e.jsx(f,{}),children:e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"歡迎來到首頁"}),e.jsx("p",{children:"這是首頁的內容區域。您可以在這裡放置任何組件或內容。"}),e.jsxs("div",{className:"mt-3 text-sm text-gray-600",children:["目前激活的Tab: ",e.jsx("strong",{children:s})]})]})},{key:"profile",label:"個人資料",icon:e.jsx(g,{}),children:e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"個人資料"}),e.jsx("p",{children:"管理您的個人資訊和設定。"})]})},{key:"settings",label:"設定",icon:e.jsx(I,{}),children:e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"系統設定"}),e.jsx("p",{children:"調整系統偏好設定和選項。"})]})}];return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(c,{items:a,activeKey:s,onChange:l})})},G=()=>{const[s,l]=p.useState("/dashboard"),a=[{key:"dashboard",label:"儀表板",href:"/dashboard",icon:e.jsx(f,{})},{key:"analytics",label:"數據分析",href:"/analytics",icon:e.jsx(O,{})},{key:"users",label:"用戶管理",href:"/users",icon:e.jsx(g,{})},{key:"settings",label:"系統設定",href:"/settings",icon:e.jsx(I,{})}];return e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsxs("div",{className:"mb-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsxs("p",{className:"text-sm text-blue-800",children:["路由模式示例。當前路徑: ",e.jsx("strong",{children:s})]}),e.jsx("div",{className:"mt-2 space-x-2",children:a.map(t=>e.jsx("button",{className:"px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50",onClick:()=>t.href&&l(t.href),children:t.href},t.key))})]}),e.jsx(c,{items:a,useRouter:!0,currentPath:s,onChange:t=>{const h=a.find(b=>b.key===t);h&&h.href&&l(h.href)}}),e.jsxs("div",{className:"mt-4 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"路由內容區域"}),e.jsx("p",{children:"在路由模式下，內容通常由路由器渲染，而不是Tab組件本身。"}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["當前顯示的是 ",e.jsx("strong",{children:s})," 路由的內容。"]})]})]})},J=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Tab 標籤頁"}),e.jsx("p",{className:"component-docs-description",children:"Tab 組件提供了一個靈活的標籤頁介面，支援多種使用場景。可以用於組件內容切換或路由導航， 提供了一致的視覺風格和互動體驗，遵循現代設計原則和無障礙標準。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整Tab的各種屬性："}),e.jsx(M,{}),e.jsx(H,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 基礎用法範例",description:"支援兩種定義方式：使用items配置陣列或TabPane組件。",code:`const [activeKey, setActiveKey] = useState('home');

const items = [
  {
    key: 'home',
    label: '首頁',
    icon: <HomeIcon />,
    children: (
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">歡迎來到首頁</h3>
        <p>這是首頁的內容區域。您可以在這裡放置任何組件或內容。</p>
      </div>
    ),
  },
  // ...更多項目
];

<Tab
  items={items}
  activeKey={activeKey}
  onChange={setActiveKey}
/>`,children:e.jsx(D,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"配置方式："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"items配置："}),"適用於動態生成的標籤頁"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TabPane組件："}),"適用於靜態定義的標籤頁內容"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 樣式變體範例",description:"支援兩種視覺樣式，適用於不同的設計需求：",code:`// 底線樣式
<Tab
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>底線樣式內容 1</div> },
    { key: 'tab2', label: '標籤 2', children: <div>底線樣式內容 2</div> },
    { key: 'tab3', label: '標籤 3', children: <div>底線樣式內容 3</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 按鈕樣式
<Tab
  variant="button"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>按鈕樣式內容 1</div> },
    { key: 'tab2', label: '標籤 2', children: <div>按鈕樣式內容 2</div> },
    { key: 'tab3', label: '標籤 3', children: <div>按鈕樣式內容 3</div> },
  ]}
  defaultActiveKey="tab1"
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"底線樣式 (underline)"}),e.jsx(c,{variant:"underline",items:[{key:"tab1",label:"標籤 1",children:e.jsx("div",{className:"p-3 text-sm",children:"底線樣式內容 1"})},{key:"tab2",label:"標籤 2",children:e.jsx("div",{className:"p-3 text-sm",children:"底線樣式內容 2"})},{key:"tab3",label:"標籤 3",children:e.jsx("div",{className:"p-3 text-sm",children:"底線樣式內容 3"})}],defaultActiveKey:"tab1"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"按鈕樣式 (button)"}),e.jsx(c,{variant:"button",items:[{key:"tab1",label:"標籤 1",children:e.jsx("div",{className:"p-3 text-sm",children:"按鈕樣式內容 1"})},{key:"tab2",label:"標籤 2",children:e.jsx("div",{className:"p-3 text-sm",children:"按鈕樣式內容 2"})},{key:"tab3",label:"標籤 3",children:e.jsx("div",{className:"p-3 text-sm",children:"按鈕樣式內容 3"})}],defaultActiveKey:"tab1"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"樣式建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"underline："}),"經典的標籤頁樣式，適用於內容導航"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"button："}),"現代的按鈕樣式，適用於工具欄或控制面板"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 大小選項範例",description:"支援三種不同的大小選項，適應不同的設計需求：",code:`// 小尺寸
<Tab
  size="sm"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>小尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>小尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 中等尺寸（預設）
<Tab
  size="md"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>中等尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>中等尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>

// 大尺寸
<Tab
  size="lg"
  variant="underline"
  items={[
    { key: 'tab1', label: '標籤 1', children: <div>大尺寸內容</div> },
    { key: 'tab2', label: '標籤 2', children: <div>大尺寸內容</div> },
  ]}
  defaultActiveKey="tab1"
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"小尺寸 (sm)"}),e.jsx(c,{size:"sm",variant:"underline",items:[{key:"tab1",label:"標籤 1",children:e.jsx("div",{className:"p-2 text-xs",children:"小尺寸內容"})},{key:"tab2",label:"標籤 2",children:e.jsx("div",{className:"p-2 text-xs",children:"小尺寸內容"})}],defaultActiveKey:"tab1"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"中等尺寸 (md)"}),e.jsx(c,{size:"md",variant:"underline",items:[{key:"tab1",label:"標籤 1",children:e.jsx("div",{className:"p-3",children:"中等尺寸內容"})},{key:"tab2",label:"標籤 2",children:e.jsx("div",{className:"p-3",children:"中等尺寸內容"})}],defaultActiveKey:"tab1"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-700 mb-3",children:"大尺寸 (lg)"}),e.jsx(c,{size:"lg",variant:"underline",items:[{key:"tab1",label:"標籤 1",children:e.jsx("div",{className:"p-4 text-lg",children:"大尺寸內容"})},{key:"tab2",label:"標籤 2",children:e.jsx("div",{className:"p-4 text-lg",children:"大尺寸內容"})}],defaultActiveKey:"tab1"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"用於緊湊的界面或側邊欄"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"用於重要的導航或大螢幕界面"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(m,{title:"🔄 圖示支援範例",description:"支援在標籤中顯示圖示，提升視覺識別度：",code:`// 帶圖示的 Tab 項目
<Tab
  items={[
    {
      key: 'home',
      label: '首頁',
      icon: <HomeIcon />,
      children: <div className="p-4">首頁內容</div>,
    },
    {
      key: 'user',
      label: '用戶',
      icon: <UserIcon />,
      children: <div className="p-4">用戶內容</div>,
    },
    {
      key: 'settings',
      label: '設定',
      icon: <SettingsIcon />,
      children: <div className="p-4">設定內容</div>,
    },
  ]}
  defaultActiveKey="home"
/>`,children:e.jsx(c,{items:[{key:"home",label:"首頁",icon:e.jsx(f,{}),children:e.jsx("div",{className:"p-4",children:"首頁內容"})},{key:"user",label:"用戶",icon:e.jsx(g,{}),children:e.jsx("div",{className:"p-4",children:"用戶內容"})},{key:"settings",label:"設定",icon:e.jsx(I,{}),children:e.jsx("div",{className:"p-4",children:"設定內容"})}],defaultActiveKey:"home"})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 路由模式範例",description:"啟用路由模式後，Tab組件可以用於頁面導航，並自動判斷激活狀態：",code:`const [currentPath, setCurrentPath] = useState('/dashboard');

const routerItems = [
  { key: 'dashboard', label: '儀表板', href: '/dashboard', icon: <HomeIcon /> },
  { key: 'analytics', label: '數據分析', href: '/analytics', icon: <AnalyticsIcon /> },
  { key: 'users', label: '用戶管理', href: '/users', icon: <UserIcon /> },
  { key: 'settings', label: '系統設定', href: '/settings', icon: <SettingsIcon /> },
];

<Tab
  items={routerItems}
  useRouter
  currentPath={currentPath}
  onChange={(key) => {
    const item = routerItems.find((item) => item.key === key);
    if (item && item.href) {
      setCurrentPath(item.href);
    }
  }}
/>`,children:e.jsx(G,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"路由模式特點："}),e.jsxs("ul",{children:[e.jsxs("li",{children:["設定 ",e.jsxs("code",{children:["useRouter=","{true}"]})," 啟用路由模式"]}),e.jsxs("li",{children:["在items中提供 ",e.jsx("code",{children:"href"})," 屬性"]}),e.jsxs("li",{children:["透過 ",e.jsx("code",{children:"currentPath"})," 自動判斷激活狀態"]}),e.jsx("li",{children:"不渲染內容區域，由路由器負責內容渲染"})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(m,{title:"🔄 TabPane 組件範例",description:"使用TabPane組件可以更直觀地定義標籤頁內容：",code:`// 使用 TabPane 組件定義標籤
<Tab defaultActiveKey="pane1">
  <TabPane
    key="pane1"
    tab="面板 1"
    icon={<HomeIcon />}
  >
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">面板 1</h3>
      <p>使用 TabPane 組件的方式定義標籤內容。</p>
    </div>
  </TabPane>

  <TabPane
    key="pane2"
    tab="面板 2"
    icon={<UserIcon />}
  >
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">面板 2</h3>
      <p>每個 TabPane 可以包含任意的 React 組件。</p>
    </div>
  </TabPane>

  <TabPane
    key="pane3"
    tab="禁用面板"
    disabled
  >
    <div className="p-4 bg-red-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">禁用面板</h3>
      <p>這個面板被禁用了。</p>
    </div>
  </TabPane>
</Tab>`,children:e.jsxs(c,{defaultActiveKey:"pane1",children:[e.jsx(v,{tab:"面板 1",icon:e.jsx(f,{}),children:e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"面板 1"}),e.jsx("p",{children:"使用 TabPane 組件的方式定義標籤內容。"})]})},"pane1"),e.jsx(v,{tab:"面板 2",icon:e.jsx(g,{}),children:e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"面板 2"}),e.jsx("p",{children:"每個 TabPane 可以包含任意的 React 組件。"})]})},"pane2"),e.jsx(v,{tab:"禁用面板",disabled:!0,children:e.jsxs("div",{className:"p-4 bg-red-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"禁用面板"}),e.jsx("p",{children:"這個面板被禁用了。"})]})},"pane3")]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(m,{title:"🔄 禁用狀態範例",description:"Tab項目可以設定為禁用狀態，防止用戶點擊：",code:`// 禁用特定的 Tab 項目
<Tab
  items={[
    {
      key: 'active1',
      label: '可用標籤',
      children: <div className="p-4">這是一個可用的標籤內容。</div>,
    },
    {
      key: 'disabled',
      label: '禁用標籤',
      disabled: true,
      children: <div className="p-4">這個內容不會顯示。</div>,
    },
    {
      key: 'active2',
      label: '另一個可用標籤',
      children: <div className="p-4">另一個可用標籤的內容。</div>,
    },
  ]}
  defaultActiveKey="active1"
/>`,children:e.jsx(c,{items:[{key:"active1",label:"可用標籤",children:e.jsx("div",{className:"p-4",children:"這是一個可用的標籤內容。"})},{key:"disabled",label:"禁用標籤",disabled:!0,children:e.jsx("div",{className:"p-4",children:"這個內容不會顯示。"})},{key:"active2",label:"另一個可用標籤",children:e.jsx("div",{className:"p-4",children:"另一個可用標籤的內容。"})}],defaultActiveKey:"active1"})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 自訂樣式範例",description:"Tab組件提供多個className屬性來自訂樣式：",code:`// 使用各種 className 屬性自訂樣式
<Tab
  items={[
    {
      key: 'custom1',
      label: '自訂標籤 1',
      children: <div className="p-4 text-purple-700">自訂樣式的內容 1</div>,
    },
    {
      key: 'custom2',
      label: '自訂標籤 2',
      children: <div className="p-4 text-green-700">自訂樣式的內容 2</div>,
    },
  ]}
  defaultActiveKey="custom1"
  className="border-2 border-purple-200 rounded-lg p-4"
  tabsClassName="bg-purple-50 rounded-t-lg"
  contentClassName="bg-purple-25 border-t border-purple-200"
  tabItemClassName="text-purple-600 hover:text-purple-800"
  activeTabItemClassName="text-purple-900 border-purple-500"
/>`,children:e.jsx(c,{items:[{key:"custom1",label:"自訂標籤 1",children:e.jsx("div",{className:"p-4 text-purple-700",children:"自訂樣式的內容 1"})},{key:"custom2",label:"自訂標籤 2",children:e.jsx("div",{className:"p-4 text-green-700",children:"自訂樣式的內容 2"})}],defaultActiveKey:"custom1",className:"border-2 border-purple-200 rounded-lg p-4",tabsClassName:"bg-purple-50 rounded-t-lg",contentClassName:"bg-purple-25 border-t border-purple-200",tabItemClassName:"text-purple-600 hover:text-purple-800",activeTabItemClassName:"text-purple-900 border-purple-500"})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"可用的className屬性："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"className"}),"：整體容器樣式"]}),e.jsxs("li",{children:[e.jsx("code",{children:"tabsClassName"}),"：Tab導航區域樣式"]}),e.jsxs("li",{children:[e.jsx("code",{children:"contentClassName"}),"：內容區域樣式"]}),e.jsxs("li",{children:[e.jsx("code",{children:"tabItemClassName"}),"：個別Tab項目樣式"]}),e.jsxs("li",{children:[e.jsx("code",{children:"activeTabItemClassName"}),"：激活Tab項目樣式"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(m,{title:"🔄 受控模式範例",description:"Tab組件支援受控和非受控兩種模式，可以通過程式控制激活狀態：",code:`// 受控模式的 Tab 組件
const [activeKey, setActiveKey] = useState('home');

<Tab
  items={items}
  activeKey={activeKey}
  onChange={setActiveKey}
/>

// 非受控模式（僅設定預設值）
<Tab
  items={items}
  defaultActiveKey="home"
/>`,children:e.jsx(D,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"控制模式："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"非受控："}),"僅設定 ",e.jsx("code",{children:"defaultActiveKey"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"受控："}),"設定 ",e.jsx("code",{children:"activeKey"})," 和 ",e.jsx("code",{children:"onChange"})]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📖 API 參考"}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Tab Props"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"屬性"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"類型"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"預設值"}),e.jsx("th",{className:"text-left py-2 font-medium text-gray-700",children:"說明"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"items"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"TabItem[]"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"[]"})}),e.jsx("td",{className:"py-2",children:"Tab項目配置陣列"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"defaultActiveKey"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"預設激活的Tab項目key"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"activeKey"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"當前激活的Tab項目key（受控模式）"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"onChange"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"(activeKey: string) => void"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"Tab切換回調函數"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"variant"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"'underline' | 'button'"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"'underline'"})}),e.jsx("td",{className:"py-2",children:"Tab的樣式變體"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"size"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"'sm' | 'md' | 'lg'"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"'md'"})}),e.jsx("td",{className:"py-2",children:"Tab的尺寸大小"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"useRouter"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"false"})}),e.jsx("td",{className:"py-2",children:"是否使用路由模式"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"currentPath"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"當前路由路徑（路由模式使用）"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"className"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"整體容器自訂CSS類名"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"tabsClassName"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"Tab導航區域自訂CSS類名"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"contentClassName"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"內容區域自訂CSS類名"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"tabItemClassName"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"個別Tab項目自訂CSS類名"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"activeTabItemClassName"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"-"})}),e.jsx("td",{className:"py-2",children:"激活Tab項目自訂CSS類名"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"TabItem Interface"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"屬性"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"類型"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"必需"}),e.jsx("th",{className:"text-left py-2 font-medium text-gray-700",children:"說明"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"key"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("span",{className:"text-red-600",children:"✓"})}),e.jsx("td",{className:"py-2",children:"Tab項目的唯一識別碼"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"label"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("span",{className:"text-red-600",children:"✓"})}),e.jsx("td",{className:"py-2",children:"Tab項目的標籤文字"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"children"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"Tab項目的內容（非路由模式）"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"href"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"路由路徑（路由模式使用）"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"disabled"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"是否禁用該Tab項目"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"icon"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"Tab項目的圖示"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"TabPane Props"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200",children:[e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"屬性"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"類型"}),e.jsx("th",{className:"text-left py-2 pr-4 font-medium text-gray-700",children:"必需"}),e.jsx("th",{className:"text-left py-2 font-medium text-gray-700",children:"說明"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-100",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"key"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("span",{className:"text-red-600",children:"✓"})}),e.jsx("td",{className:"py-2",children:"TabPane的唯一識別碼"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"tab"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("span",{className:"text-red-600",children:"✓"})}),e.jsx("td",{className:"py-2",children:"TabPane的標籤文字"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"children"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("span",{className:"text-red-600",children:"✓"})}),e.jsx("td",{className:"py-2",children:"TabPane的內容"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"disabled"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"是否禁用該TabPane"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"icon"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"TabPane的圖示"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{className:"text-blue-600",children:"className"})}),e.jsx("td",{className:"py-2 pr-4",children:e.jsx("code",{children:"string"})}),e.jsx("td",{className:"py-2 pr-4",children:"-"}),e.jsx("td",{className:"py-2",children:"自訂CSS類名"})]})]})]})})]})]})]}),le={title:"Navigation/Tab",component:c,parameters:{layout:"padded",docs:{page:J}},argTypes:{variant:{control:{type:"radio"},options:["underline","button"],description:"Tab的樣式變體"},size:{control:{type:"radio"},options:["sm","md","lg"],description:"Tab的尺寸大小"},useRouter:{control:"boolean",description:"是否使用路由模式"},defaultActiveKey:{control:"text",description:"預設激活的Tab項目key"}},tags:["autodocs"]},C={args:{items:[{key:"home",label:"首頁",icon:e.jsx(f,{}),children:e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"歡迎來到首頁"}),e.jsx("p",{children:"這是首頁的內容區域。您可以在這裡放置任何組件或內容。"})]})},{key:"about",label:"關於我們",icon:e.jsx(g,{}),children:e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"關於我們"}),e.jsx("p",{children:"了解更多關於我們公司和團隊的資訊。"})]})},{key:"contact",label:"聯絡方式",icon:e.jsx(I,{}),children:e.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"聯絡我們"}),e.jsx("p",{children:"透過以下方式與我們取得聯繫。"})]})}],defaultActiveKey:"home",variant:"underline",size:"md"}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'home',
      label: '首頁',
      icon: <HomeIcon />,
      children: <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">歡迎來到首頁</h3>
            <p>這是首頁的內容區域。您可以在這裡放置任何組件或內容。</p>
          </div>
    }, {
      key: 'about',
      label: '關於我們',
      icon: <UserIcon />,
      children: <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">關於我們</h3>
            <p>了解更多關於我們公司和團隊的資訊。</p>
          </div>
    }, {
      key: 'contact',
      label: '聯絡方式',
      icon: <SettingsIcon />,
      children: <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">聯絡我們</h3>
            <p>透過以下方式與我們取得聯繫。</p>
          </div>
    }],
    defaultActiveKey: 'home',
    variant: 'underline',
    size: 'md'
  }
}`,...C.parameters?.docs?.source}}};const te=["Docs"];export{C as Docs,te as __namedExportsOrder,le as default};

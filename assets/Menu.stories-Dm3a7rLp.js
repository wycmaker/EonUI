import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R,r as h}from"./iframe-sPMQY_tl.js";import{P as W,C as q}from"./blocks-CkfUBsx9.js";import{C as E}from"./CodeExample-BLH1THt2.js";import{c as v}from"./cn-Dtjc6EhN.js";import{a as H}from"./icons-B4aNx7RA.js";/* empty css                       */import{L as _}from"./Layout-Y5TmwQLw.js";import"./preload-helper-Ll21cQ8F.js";import"./index-C-73jOw_.js";const $=({item:s,level:i,isActive:m,isOpen:o,hasChildren:r,collapsed:c,indent:f,theme:p,currentPath:b,activeKey:M,openKeys:k,onSelect:x,onToggle:u,getActiveKey:P,isItemActive:L})=>{const y=h.useCallback(d=>{d.preventDefault(),!s.disabled&&(r&&!c?u(s.key):(x(s.key,s),s.href&&(window.location.href=s.href)))},[s,r,c,x,u]),N=h.useCallback(d=>{switch(d.key){case"Enter":case" ":d.preventDefault(),y(d);break;case"Escape":r&&o&&!c&&(d.preventDefault(),u(s.key));break;case"ArrowLeft":r&&o&&!c&&(d.preventDefault(),u(s.key));break;case"ArrowRight":r&&!o&&!c&&(d.preventDefault(),u(s.key));break}},[y,r,o,c,u,s.key]),g={light:{item:v("text-gray-700 hover:text-gray-900 hover:bg-gray-100",m&&"text-primary bg-primary-50"),icon:"text-gray-500",arrow:"text-gray-400"},dark:{item:v("text-gray-300 hover:text-white hover:bg-gray-700",m&&"text-white bg-primary-600"),icon:"text-gray-400",arrow:"text-gray-400"}}[p],w=`${i*f+16}px`;return e.jsxs("li",{className:"list-none",children:[e.jsxs("div",{className:v("flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-all duration-200 select-none",g.item,s.disabled&&"cursor-not-allowed opacity-50",c&&i===0&&"justify-center px-2"),style:{paddingLeft:c&&i===0?void 0:w},onClick:y,onKeyDown:N,role:"menuitem",tabIndex:s.disabled?-1:0,"aria-disabled":s.disabled,"aria-expanded":r?o:void 0,"aria-current":m?"page":void 0,"aria-haspopup":r?"menu":void 0,"aria-level":i+1,"aria-label":`${s.label}${r?o?" (已展開)":" (可展開)":""}${m?" (當前頁面)":""}`,children:[e.jsxs("div",{className:"flex items-center min-w-0 flex-1",children:[e.jsx("div",{className:v("flex-shrink-0 flex items-center justify-center",c&&i===0?"w-5":"w-5 mr-3"),children:s.icon&&e.jsx("span",{className:v("flex items-center justify-center",g.icon),children:s.icon})}),(!c||i>0)&&e.jsx("span",{className:"truncate",children:s.label})]}),r&&(!c||i>0)&&e.jsx("span",{className:v("flex-shrink-0 ml-2 transition-transform duration-300 ease-in-out",g.arrow,o&&"rotate-90"),children:e.jsx(H,{className:"h-4 w-4"})})]}),r&&s.children&&!c&&e.jsx("div",{className:v("overflow-hidden transition-all duration-300 ease-in-out transform-gpu",o?"max-h-96 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-2"),role:"menu","aria-hidden":!o,style:{transitionProperty:"max-height, opacity, transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"},children:e.jsx("div",{className:v("transition-all duration-200 ease-out",o?"pt-1":"pt-0"),children:e.jsx(F,{items:s.children,level:i+1,currentPath:b,activeKey:M,openKeys:k,collapsed:c,indent:f,theme:p,onSelect:x,onToggle:u,getActiveKey:P,isItemActive:L})})})]})},F=({items:s,level:i,currentPath:m,activeKey:o,openKeys:r,collapsed:c,indent:f,theme:p,onSelect:b,onToggle:M,getActiveKey:k,isItemActive:x})=>e.jsx("ul",{className:v("space-y-1",i===0&&"p-2"),children:s.map(u=>{const P=!!(u.children&&u.children.length>0),L=x(u,m,o),y=r.includes(u.key);return e.jsx($,{item:u,level:i,isActive:L,isOpen:y,hasChildren:P,collapsed:c,indent:f,theme:p,currentPath:m,activeKey:o,openKeys:r,onSelect:b,onToggle:M,getActiveKey:k,isItemActive:x},u.key)})}),j=R.forwardRef(({items:s,currentPath:i="",activeKey:m,defaultOpenKeys:o=[],openKeys:r,mode:c="vertical",collapsed:f=!1,indent:p=16,theme:b="light",className:M,onSelect:k,onOpenChange:x,...u},P)=>{const[L,y]=h.useState(o),N=r??L,D=h.useRef(""),g=h.useCallback((a,t,n)=>n?a.key===n:a.activePatterns&&a.activePatterns.length>0?a.activePatterns.some(l=>t.includes(l)):a.href?t.includes(a.href):!1,[]),w=h.useCallback((a,t)=>{if(!Array.isArray(a))return"";for(const n of a){if(g(n,t))return n.key;if(n.children&&Array.isArray(n.children)){const l=w(n.children,t);if(l)return l}}return""},[g]),d=h.useMemo(()=>m||w(s,i),[m,s,i,w]),C=h.useCallback((a,t,n=[])=>{if(!Array.isArray(a))return[];for(const l of a){const B=[...n,l.key];if(l.key===t)return n;if(l.children&&Array.isArray(l.children)&&(C(l.children,t,B).length>0||l.children.some(z=>z.key===t)))return B}return[]},[]);h.useEffect(()=>{if(d&&d!==D.current){D.current=d;const a=C(s,d);if(a.length>0)if(r===void 0)y(t=>{const n=a.filter(l=>!t.includes(l));return n.length>0?Array.from(new Set([...t,...n])):t});else{const t=N,n=a.filter(l=>!t.includes(l));if(n.length>0){const l=Array.from(new Set([...t,...n]));x?.(l)}}}},[d,s,C,r,x]),h.useEffect(()=>{if(f)r===void 0?y([]):x?.([]);else if(d){const a=C(s,d);if(a.length>0)if(r===void 0)y(t=>{const n=a.filter(l=>!t.includes(l));return n.length>0?Array.from(new Set([...t,...n])):t});else{const t=N,n=a.filter(l=>!t.includes(l));if(n.length>0){const l=Array.from(new Set([...t,...n]));x?.(l)}}}},[f,d,s,C,r,x]);const S=h.useCallback((a,t)=>{k?.(a,t)},[k]),V=h.useCallback(a=>{const t=N.includes(a)?N.filter(n=>n!==a):[...N,a];r===void 0&&y(t),x?.(t)},[N,r,x]),K=v("bg-white border-r border-gray-200 h-full overflow-auto",b==="dark"&&"bg-gray-800 border-gray-700",c==="horizontal"&&"border-r-0 border-b",M);return e.jsx("nav",{ref:P,className:K,role:"navigation","aria-label":"主選單","aria-orientation":c,...u,children:e.jsx(F,{items:s,level:0,currentPath:i,activeKey:d,openKeys:N,collapsed:f,indent:p,theme:b,onSelect:S,onToggle:V,getActiveKey:w,isItemActive:g})})});j.displayName="Menu";try{j.displayName="Menu",j.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"Menu項目配置陣列",name:"items",required:!0,type:{name:"MenuItem[]"}},currentPath:{defaultValue:{value:""},description:"當前路由路徑（用於自動判斷 active 狀態）",name:"currentPath",required:!1,type:{name:"string | undefined"}},activeKey:{defaultValue:null,description:"手動指定當前激活的項目key",name:"activeKey",required:!1,type:{name:"string | undefined"}},defaultOpenKeys:{defaultValue:{value:"[]"},description:"預設展開的項目keys",name:"defaultOpenKeys",required:!1,type:{name:"string[] | undefined"}},openKeys:{defaultValue:null,description:"當前展開的項目keys（受控模式）",name:"openKeys",required:!1,type:{name:"string[] | undefined"}},mode:{defaultValue:{value:"vertical"},description:"Menu模式",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}},collapsed:{defaultValue:{value:"false"},description:"是否可折疊",name:"collapsed",required:!1,type:{name:"boolean | undefined"}},indent:{defaultValue:{value:"16"},description:"縮排大小",name:"indent",required:!1,type:{name:"number | undefined"}},theme:{defaultValue:{value:"light"},description:"主題色彩",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"light"'},{value:'"dark"'}]}},onSelect:{defaultValue:null,description:"點擊選單項目時的回調",name:"onSelect",required:!1,type:{name:"((key: string, item: MenuItem) => void) | undefined"}},onOpenChange:{defaultValue:null,description:"展開/收合項目時的回調",name:"onOpenChange",required:!1,type:{name:"((openKeys: string[]) => void) | undefined"}}}}}catch{}const I=[{key:"dashboard",label:"儀表板",href:"/dashboard",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"})})},{key:"users",label:"用戶管理",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})}),children:[{key:"user-list",label:"用戶列表",href:"/users/list",activePatterns:["/users/list","/users/detail"]},{key:"user-roles",label:"角色管理",href:"/users/roles"},{key:"user-permissions",label:"權限設定",href:"/users/permissions"}]},{key:"products",label:"產品管理",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})}),children:[{key:"product-list",label:"產品列表",href:"/products/list"},{key:"product-categories",label:"分類管理",href:"/products/categories"},{key:"product-inventory",label:"庫存管理",href:"/products/inventory"}]},{key:"orders",label:"訂單管理",href:"/orders",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})},{key:"analytics",label:"數據分析",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"})}),children:[{key:"sales-report",label:"銷售報表",href:"/analytics/sales"},{key:"user-report",label:"用戶分析",href:"/analytics/users"}]},{key:"settings",label:"系統設定",href:"/settings",icon:e.jsxs("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),disabled:!0}],U=()=>{const[s,i]=h.useState("/users/detail/123"),[m,o]=h.useState(!1),[r,c]=h.useState("light"),f=(p,b)=>{b.href&&i(b.href)};return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"當前路徑："}),e.jsxs("select",{value:s,onChange:p=>i(p.target.value),className:"px-3 py-1 border border-gray-300 rounded text-sm",children:[e.jsx("option",{value:"/dashboard",children:"儀表板"}),e.jsx("option",{value:"/users/list",children:"用戶列表"}),e.jsx("option",{value:"/users/detail/123",children:"用戶詳情（子頁面）"}),e.jsx("option",{value:"/users/roles",children:"角色管理"}),e.jsx("option",{value:"/products/list",children:"產品列表"}),e.jsx("option",{value:"/orders",children:"訂單管理"}),e.jsx("option",{value:"/analytics/sales",children:"銷售報表"})]})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:p=>o(p.target.checked),className:"rounded border-gray-300"}),e.jsx("span",{className:"text-sm font-medium",children:"收合模式"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"主題："}),e.jsxs("select",{value:r,onChange:p=>c(p.target.value),className:"px-3 py-1 border border-gray-300 rounded text-sm",children:[e.jsx("option",{value:"light",children:"淺色"}),e.jsx("option",{value:"dark",children:"深色"})]})]})]}),e.jsx("div",{className:"h-96 border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(_,{header:e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"管理後台"}),e.jsx("button",{onClick:()=>o(!m),className:"p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),aside:e.jsx(j,{items:I,currentPath:s,collapsed:m,theme:r,onSelect:f}),asideWidth:m?"sm":"md",main:e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"bg-white rounded-lg border border-gray-200 p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"主要內容區域"}),e.jsxs("p",{className:"text-gray-600 mb-4",children:["當前路徑：",e.jsx("code",{className:"bg-gray-100 px-2 py-1 rounded text-sm",children:s})]}),e.jsxs("div",{className:"space-y-2 text-sm text-gray-600",children:[e.jsx("p",{children:"• 選單會自動根據路徑判斷 active 狀態"}),e.jsx("p",{children:"• 支援 activePatterns 進行模式匹配"}),e.jsx("p",{children:"• 雙層選單會自動展開包含 active 項目的父級"}),e.jsx("p",{children:"• 收合模式下僅顯示圖示"})]})]})}),fullHeight:!0})})]})},O=()=>e.jsxs("div",{className:"component-docs",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Menu 選單"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的選單組件，提供完整的導航功能。 支援單層與雙層選單結構、收合動畫、自動路由判斷，以及與 Layout 組件的完美結合。 設計風格簡潔現代，適用於各種管理後台和應用程式的導航需求。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Menu 的各種屬性："}),e.jsx(W,{}),e.jsx(q,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(E,{title:"🔄 實際使用範例",description:"展示 Menu 組件與 Layout 組件結合的實際應用場景：",code:`import { Menu, Layout } from 'eonui';

const menuItems = [
  {
    key: 'dashboard',
    label: '儀表板',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    key: 'users',
    label: '用戶管理',
    icon: <UsersIcon />,
    children: [
      {
        key: 'user-list',
        label: '用戶列表',
        href: '/users/list',
        activePatterns: ['/users/list', '/users/detail'],
      },
      {
        key: 'user-roles',
        label: '角色管理',
        href: '/users/roles',
      },
    ],
  },
];

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      header={<Header onToggle={() => setCollapsed(!collapsed)} />}
      aside={
        <Menu
          items={menuItems}
          currentPath={currentPath}
          collapsed={collapsed}
          onSelect={(key, item) => {
            if (item.href) {
              setCurrentPath(item.href);
              // 路由跳轉邏輯
            }
          }}
        />
      }
      main={<MainContent />}
      fullHeight
    />
  );
}`,children:e.jsx(U,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(E,{title:"📚 基本用法",description:"Menu 組件的基本用法和配置：",code:`// 基本選單
<Menu
  items={[
    {
      key: 'home',
      label: '首頁',
      href: '/',
      icon: <HomeIcon />,
    },
    {
      key: 'about',
      label: '關於我們',
      href: '/about',
    },
  ]}
  currentPath="/home"
/>

// 雙層選單
<Menu
  items={[
    {
      key: 'products',
      label: '產品管理',
      icon: <ProductIcon />,
      children: [
        {
          key: 'product-list',
          label: '產品列表',
          href: '/products/list',
        },
        {
          key: 'product-add',
          label: '新增產品',
          href: '/products/add',
        },
      ],
    },
  ]}
  defaultOpenKeys={['products']}
/>

// 路徑模式匹配
<Menu
  items={[
    {
      key: 'user-management',
      label: '用戶管理',
      href: '/users',
      activePatterns: ['/users', '/user-detail', '/user-edit'],
    },
  ]}
  currentPath="/user-detail/123"
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"基本選單"}),e.jsx("div",{className:"w-64 border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{items:[{key:"home",label:"首頁",href:"/",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})},{key:"about",label:"關於我們",href:"/about",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}],currentPath:"/"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"雙層選單"}),e.jsx("div",{className:"w-64 border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{items:[{key:"products",label:"產品管理",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})}),children:[{key:"product-list",label:"產品列表",href:"/products/list"},{key:"product-add",label:"新增產品",href:"/products/add"}]}],defaultOpenKeys:["products"],currentPath:"/products/list"})})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(E,{title:"🎨 主題與樣式",description:"Menu 組件支援不同的主題和樣式配置：",code:`// 深色主題
<Menu
  items={menuItems}
  theme="dark"
  currentPath="/dashboard"
/>

// 收合模式
<Menu
  items={menuItems}
  collapsed={true}
  currentPath="/dashboard"
/>

// 自訂縮排
<Menu
  items={menuItems}
  indent={24}
  currentPath="/dashboard"
/>`,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"淺色主題"}),e.jsx("div",{className:"w-full border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{items:I.slice(0,3),theme:"light",currentPath:"/users/list"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"深色主題"}),e.jsx("div",{className:"w-full border border-gray-700 rounded-lg overflow-hidden",children:e.jsx(j,{items:I.slice(0,3),theme:"dark",currentPath:"/users/list"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"收合模式"}),e.jsx("div",{className:"w-full border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{items:I.slice(0,3),collapsed:!0,currentPath:"/users/list"})})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(E,{title:"🧭 智能路由判斷",description:"Menu 組件提供智能的路由判斷機制，支援多種匹配模式：",code:`// 使用 activePatterns 進行模式匹配
const menuItems = [
  {
    key: 'user-management',
    label: '用戶管理',
    href: '/users',
    // 當路徑包含這些模式時，該項目會被標記為 active
    activePatterns: ['/users', '/user-detail', '/user-edit'],
  },
  {
    key: 'product-detail',
    label: '產品詳情',
    href: '/products/detail',
    // 支援多個模式，適用於複雜的頁面結構
    activePatterns: ['/products/detail', '/products/edit', '/products/view'],
  },
];

// 自動展開包含 active 項目的父級選單
<Menu
  items={menuItems}
  currentPath="/user-detail/123"  // 會自動激活 user-management 項目
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900 mb-2",children:"智能匹配特色"}),e.jsxs("ul",{className:"text-sm text-blue-800 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"包含匹配："}),"使用 includes() 方法進行模糊匹配"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"模式數組："}),"支援多個 activePatterns 進行複合匹配"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"自動展開："}),"包含 active 項目的父級選單會自動展開"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"優先級："}),"手動 activeKey > activePatterns > href"]})]})]}),e.jsx("div",{className:"w-64 border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{items:[{key:"user-management",label:"用戶管理",icon:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"})}),children:[{key:"user-list",label:"用戶列表",href:"/users/list",activePatterns:["/users/list","/users/detail"]},{key:"user-settings",label:"用戶設定",href:"/users/settings"}]}],currentPath:"/users/detail/123"})}),e.jsxs("p",{className:"text-sm text-gray-600",children:["↑ 當前路徑為 ",e.jsx("code",{children:"/users/detail/123"}),"，用戶列表項目會自動激活並展開父級選單"]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📖 API 參考"}),e.jsxs("div",{className:"component-docs-api",children:[e.jsx("h3",{className:"component-docs-api-title",children:"Menu Props"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"component-docs-api-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"屬性"}),e.jsx("th",{children:"類型"}),e.jsx("th",{children:"必填"}),e.jsx("th",{children:"預設值"}),e.jsx("th",{children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"items"}),e.jsx("td",{className:"text-sm",children:"MenuItem[]"}),e.jsx("td",{className:"text-red-600 font-semibold",children:"是"}),e.jsx("td",{className:"text-sm",children:"-"}),e.jsx("td",{className:"text-sm",children:"選單項目配置陣列"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"currentPath"}),e.jsx("td",{className:"text-sm",children:"string"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"''"}),e.jsx("td",{className:"text-sm",children:"當前路由路徑，用於自動判斷 active 狀態"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"activeKey"}),e.jsx("td",{className:"text-sm",children:"string"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"-"}),e.jsx("td",{className:"text-sm",children:"手動指定當前激活的項目key"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"collapsed"}),e.jsx("td",{className:"text-sm",children:"boolean"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"false"}),e.jsx("td",{className:"text-sm",children:"是否收合選單"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"theme"}),e.jsx("td",{className:"text-sm",children:"'light' | 'dark'"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"'light'"}),e.jsx("td",{className:"text-sm",children:"選單主題色彩"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"indent"}),e.jsx("td",{className:"text-sm",children:"number"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"16"}),e.jsx("td",{className:"text-sm",children:"子選單的縮排像素值"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"onSelect"}),e.jsx("td",{className:"text-sm",children:"(key: string, item: MenuItem) => void"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"-"}),e.jsx("td",{className:"text-sm",children:"點擊選單項目時的回調函數"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"onOpenChange"}),e.jsx("td",{className:"text-sm",children:"(openKeys: string[]) => void"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"-"}),e.jsx("td",{className:"text-sm",children:"展開/收合項目時的回調函數"})]})]})]})})]}),e.jsxs("div",{className:"component-docs-api",children:[e.jsx("h3",{className:"component-docs-api-title",children:"MenuItem Interface"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"component-docs-api-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"屬性"}),e.jsx("th",{children:"類型"}),e.jsx("th",{children:"必填"}),e.jsx("th",{children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"key"}),e.jsx("td",{className:"text-sm",children:"string"}),e.jsx("td",{className:"text-red-600 font-semibold",children:"是"}),e.jsx("td",{className:"text-sm",children:"選單項目的唯一識別碼"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"label"}),e.jsx("td",{className:"text-sm",children:"string"}),e.jsx("td",{className:"text-red-600 font-semibold",children:"是"}),e.jsx("td",{className:"text-sm",children:"選單項目的顯示文字"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"href"}),e.jsx("td",{className:"text-sm",children:"string"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"選單項目的路由路徑"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"icon"}),e.jsx("td",{className:"text-sm",children:"React.ReactNode"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"選單項目的圖示"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"children"}),e.jsx("td",{className:"text-sm",children:"MenuItem[]"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"子選單項目（雙層選單）"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"font-mono text-sm",children:"activePatterns"}),e.jsx("td",{className:"text-sm",children:"string[]"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"用於手動設定 active 狀態的路徑模式"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-mono text-sm",children:"disabled"}),e.jsx("td",{className:"text-sm",children:"boolean"}),e.jsx("td",{className:"text-sm",children:"否"}),e.jsx("td",{className:"text-sm",children:"是否禁用該選單項目"})]})]})]})})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"安裝和導入"}),e.jsx("pre",{className:"component-docs-code",children:`import { Menu } from 'eonui';
import type { MenuItem } from 'eonui';`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"與 Layout 組件結合"}),e.jsx("pre",{className:"component-docs-code",children:`import { Menu, Layout } from 'eonui';

function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const currentPath = useLocation().pathname;

  const menuItems = [
    {
      key: 'dashboard',
      label: '儀表板',
      href: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      key: 'users',
      label: '用戶管理',
      icon: <UsersIcon />,
      children: [
        {
          key: 'user-list',
          label: '用戶列表',
          href: '/users',
          activePatterns: ['/users', '/user/'],
        },
        {
          key: 'user-roles',
          label: '角色管理',
          href: '/users/roles',
        },
      ],
    },
  ];

  return (
    <Layout
      header={
        <Header
          title="管理後台"
          onToggleMenu={() => setCollapsed(!collapsed)}
        />
      }
      aside={
        <Menu
          items={menuItems}
          currentPath={currentPath}
          collapsed={collapsed}
          theme="light"
          onSelect={(key, item) => {
            // 處理選單點擊
            if (item.href) {
              navigate(item.href);
            }
          }}
        />
      }
      asideWidth={collapsed ? 'sm' : 'md'}
      main={<Outlet />}
      fullHeight
    />
  );
}`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"路由整合範例"}),e.jsx("pre",{className:"component-docs-code",children:`// React Router 整合
import { useLocation, useNavigate } from 'react-router-dom';

function AppMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'products',
      label: '產品管理',
      icon: <ProductIcon />,
      children: [
        {
          key: 'product-list',
          label: '產品列表',
          href: '/products',
          // 包含產品詳情和編輯頁面
          activePatterns: ['/products', '/product/'],
        },
        {
          key: 'categories',
          label: '分類管理',
          href: '/categories',
        },
      ],
    },
  ];

  return (
    <Menu
      items={menuItems}
      currentPath={location.pathname}
      onSelect={(key, item) => {
        if (item.href) {
          navigate(item.href);
        }
      }}
    />
  );
}

// Next.js 整合
import { useRouter } from 'next/router';

function NextMenu() {
  const router = useRouter();

  return (
    <Menu
      items={menuItems}
      currentPath={router.pathname}
      onSelect={(key, item) => {
        if (item.href) {
          router.push(item.href);
        }
      }}
    />
  );
}`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Menu 組件的所有功能，可以在你的項目中開始使用了！ Menu 組件提供了完整的導航解決方案，特別適合與 Layout 組件結合使用， 打造專業的管理後台和應用程式介面。"})]})]}),ae={title:"Components/Menu",component:j,parameters:{layout:"fullscreen",docs:{page:()=>e.jsx(O,{})}},argTypes:{items:{control:{type:"object"},description:"Menu項目配置陣列",table:{type:{summary:"MenuItem[]"}}},currentPath:{control:{type:"text"},description:"當前路由路徑，用於自動判斷 active 狀態",table:{type:{summary:"string"},defaultValue:{summary:"''"}}},theme:{control:{type:"select"},options:["light","dark"],description:"選單主題色彩",table:{type:{summary:"string"},defaultValue:{summary:"light"}}},collapsed:{control:{type:"boolean"},description:"是否收合選單",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indent:{control:{type:"number",min:8,max:32,step:4},description:"子選單的縮排像素值",table:{type:{summary:"number"},defaultValue:{summary:"16"}}},onSelect:{action:"select",description:"點擊選單項目時的回調",table:{type:{summary:"(key: string, item: MenuItem) => void"}}},onOpenChange:{action:"openChange",description:"展開/收合項目時的回調",table:{type:{summary:"(openKeys: string[]) => void"}}}},tags:["autodocs"]},A={args:{items:I,currentPath:"/users/detail/123",collapsed:!1,theme:"light",indent:16},render:s=>e.jsx("div",{className:"w-64 h-96 border border-gray-200 rounded-lg overflow-hidden",children:e.jsx(j,{...s})})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    currentPath: '/users/detail/123',
    collapsed: false,
    theme: 'light',
    indent: 16
  },
  render: args => <div className="w-64 h-96 border border-gray-200 rounded-lg overflow-hidden">
      <Menu {...args} />
    </div>
}`,...A.parameters?.docs?.source}}};const ne=["Docs"];export{A as Docs,ne as __namedExportsOrder,ae as default};

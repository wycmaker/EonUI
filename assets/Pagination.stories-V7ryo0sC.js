import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y,R as k}from"./iframe-CWGlHkPv.js";import{P as J,C as U}from"./blocks-iZvN7QCr.js";import{C as j}from"./CodeExample-2qKpfjti.js";import{u as R,S as K}from"./Select-DcFbpeG9.js";import{c as z}from"./cn-Dtjc6EhN.js";import{b as A}from"./formStyles-D_LMpAhg.js";import{N as Q,P as G}from"./icons-B4aNx7RA.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-5ApEmjN3.js";import"./useClickOutside-BYqibX9n.js";import"./usePortal-D2dcPcgw.js";import"./clearable-C08SD5GV.js";const H=(a,t)=>{const[l,m]=y.useState(7);return y.useEffect(()=>{const n=()=>{if(a.current){const u=a.current.offsetWidth;let r=0;t.includes("prev")&&(r+=80),t.includes("next")&&(r+=80),t.includes("jumper")&&(r+=120),t.includes("total")&&(r+=150),t.includes("sizes")&&(r+=80),r+=(t.length-1)*16;const c=u-r;let i=Math.floor(c/40);i=Math.max(3,Math.min(i,9)),i%2===0&&(i-=1),m(i)}};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[a,t]),l},N=k.forwardRef(({direction:a,size:t="md",disabled:l=!1,children:m,onClick:n,className:u,"aria-label":r,...c},x)=>{const g=r||a&&{prev:"上一頁",next:"下一頁",up:"向上",down:"向下",left:"向左",right:"向右"}[a];return e.jsx("button",{ref:x,type:"button",className:z("inline-flex items-center justify-center rounded border border-gray-300 bg-white transition-colors duration-200",A(t,"pagination-nav"),l?"cursor-not-allowed opacity-50 text-gray-400":"cursor-pointer text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary",u),onClick:n,disabled:l,"aria-label":g,...c,children:m})});N.displayName="NavigationButton";try{N.displayName="NavigationButton",N.__docgenInfo={description:"",displayName:"NavigationButton",props:{direction:{defaultValue:null,description:"按鈕方向（用於無障礙標籤）",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"next"'},{value:'"left"'},{value:'"right"'},{value:'"prev"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"md"},description:"按鈕大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"按鈕內容",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"點擊事件",name:"onClick",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const V=k.forwardRef(({page:a,current:t=!1,disabled:l=!1,style:m="background",size:n="md",onClick:u,className:r,...c},x)=>{const i=z("inline-flex items-center justify-center rounded border transition-colors duration-200 cursor-pointer select-none",A(n,"pagination-button"),l&&"cursor-not-allowed opacity-50"),g={plain:z("border-transparent",t&&"text-primary font-semibold",!t&&!l&&"text-gray-700 hover:text-primary",l&&"text-gray-400"),background:z("border-gray-300",t&&"bg-primary text-white border-primary",!t&&!l&&"bg-white text-gray-700 hover:bg-gray-50 hover:border-primary",!t&&l&&"bg-gray-100 text-gray-400")};return e.jsx("button",{ref:x,type:"button",className:z(i,g[m],r),onClick:()=>!l&&u?.(a),disabled:l,"aria-label":`第 ${a} 頁`,"aria-current":t?"page":void 0,...c,children:a})});V.displayName="PageButton";try{V.displayName="PageButton",V.__docgenInfo={description:"",displayName:"PageButton",props:{page:{defaultValue:null,description:"頁碼數字",name:"page",required:!0,type:{name:"number"}},current:{defaultValue:{value:"false"},description:"是否為當前頁",name:"current",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:{value:"background"},description:"頁碼樣式",name:"style",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"plain"'},{value:'"background"'}]}},size:{defaultValue:{value:"md"},description:"按鈕大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onClick:{defaultValue:null,description:"點擊事件",name:"onClick",required:!1,type:{name:"((page: number) => void) | undefined"}}}}}catch{}const X=({size:a="md"})=>{const t={sm:"h-7 w-7 text-xs",md:"h-8 w-8 text-sm",lg:"h-10 w-10 text-base"};return e.jsx("span",{className:z("inline-flex items-center justify-center text-gray-500 font-bold select-none",t[a]),children:"..."})},Y=({current:a,totalPages:t,disabled:l=!1,size:m,onJump:n})=>{const[u,r]=y.useState(""),c=y.useRef(null),x={sm:"w-12",md:"w-14",lg:"w-16"},i=()=>{const d=parseInt(u,10);!isNaN(d)&&d>=1&&d<=t&&d!==a&&n(d),r("")},g=d=>{d.key==="Enter"&&i()};return e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"跳至"}),e.jsx("input",{ref:c,type:"number",min:1,max:t,value:u,onChange:d=>r(d.target.value),onBlur:i,onKeyDown:g,disabled:l,className:z("border border-gray-300 rounded text-center transition-colors duration-200",A(m,"input"),x[m],l?"cursor-not-allowed opacity-50 bg-gray-100":"focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"),placeholder:"1"}),e.jsx("span",{className:"text-sm text-gray-600",children:"頁"})]})},Z=(a,t,l=7)=>{if(t<=l)return Array.from({length:t},(c,x)=>x+1);const m=Math.floor(l/2);let n=Math.max(1,a-m);const u=Math.min(t,n+l-1);u-n+1<l&&(n=Math.max(1,u-l+1));const r=[];n>1&&(r.push(1),n>2&&r.push("ellipsis"));for(let c=n;c<=u;c++)r.push(c);return u<t&&(u<t-1&&r.push("ellipsis"),r.push(t)),r},s=k.forwardRef(({current:a,defaultCurrent:t=1,pageSize:l,defaultPageSize:m=10,total:n,pageSizeOptions:u=[10,20,50,100],pageNumberStyle:r="background",prevText:c,nextText:x,disabled:i=!1,layout:g=["prev","pages","next"],size:d="md",showTotalText:P,onChange:S,className:F,...v},f)=>{const _=y.useRef(null),q=H(_,g),[M,D]=R(a,t),[L,I]=R(l,m),h=M??t,b=L??m,C=Math.ceil(n/b),E=y.useMemo(()=>{const o=(h-1)*b+1,p=Math.min(h*b,n);return[o,p]},[h,b,n]),O=y.useMemo(()=>Z(h,C,q),[h,C,q]),w=o=>{o<1||o>C||o===h||i||(D(o),S?.(o,b))},$=o=>{if(o===void 0)return;const p=Array.isArray(o)?Number(o[0]):Number(o);if(p===b||i)return;const B=Math.min(Math.ceil(((h-1)*b+1)/p),Math.ceil(n/p));I(p),D(B),S?.(B,p)},W=o=>{switch(o){case"prev":return e.jsx(N,{direction:"prev",disabled:i||h<=1,size:d,onClick:()=>w(h-1),children:c||e.jsx(G,{})},"prev");case"next":return e.jsx(N,{direction:"next",disabled:i||h>=C,size:d,onClick:()=>w(h+1),children:x||e.jsx(Q,{})},"next");case"pages":return e.jsx("div",{className:"flex items-center space-x-1",children:O.map((p,B)=>p==="ellipsis"?e.jsx(X,{size:d},`ellipsis-${B}`):e.jsx(V,{page:p,current:p===h,disabled:i,style:r,size:d,onClick:w},p))},"pages");case"jumper":return g.includes("jumper")?e.jsx(Y,{current:h,totalPages:C,disabled:i,size:d,onJump:w},"jumper"):null;case"total":return g.includes("total")?e.jsx("div",{className:"text-sm text-gray-600",children:P?P(n,E):`共 ${n} 筆資料，第 ${E[0]}-${E[1]} 筆`},"total"):null;case"sizes":return g.includes("sizes")?e.jsx(K,{size:d,value:b,options:u.map(p=>({label:`${p}/頁`,value:p})),onChange:$,disabled:i,className:"w-20"},"sizes"):null;default:return null}};return n===0?null:e.jsx("div",{ref:o=>{typeof f=="function"?f(o):f&&(f.current=o),_.current=o},className:z("flex items-center justify-between flex-wrap gap-4",i&&"pointer-events-none opacity-50",F),...v,children:g.map(o=>W(o)).filter(Boolean)})});s.displayName="Pagination";try{s.displayName="Pagination",s.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:null,description:"當前頁碼",name:"current",required:!1,type:{name:"number | undefined"}},defaultCurrent:{defaultValue:{value:"1"},description:"預設頁碼",name:"defaultCurrent",required:!1,type:{name:"number | undefined"}},pageSize:{defaultValue:null,description:"每頁資料數量",name:"pageSize",required:!1,type:{name:"number | undefined"}},defaultPageSize:{defaultValue:{value:"10"},description:"預設每頁資料數量",name:"defaultPageSize",required:!1,type:{name:"number | undefined"}},total:{defaultValue:null,description:"總資料數量",name:"total",required:!0,type:{name:"number"}},pageSizeOptions:{defaultValue:{value:"[10, 20, 50, 100]"},description:"每頁資料數量選項",name:"pageSizeOptions",required:!1,type:{name:"number[] | undefined"}},pageNumberStyle:{defaultValue:{value:"background"},description:"頁碼樣式",name:"pageNumberStyle",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"plain"'},{value:'"background"'}]}},prevText:{defaultValue:null,description:"上一頁文字或圖示",name:"prevText",required:!1,type:{name:"ReactNode"}},nextText:{defaultValue:null,description:"下一頁文字或圖示",name:"nextText",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},layout:{defaultValue:{value:"['prev', 'pages', 'next']"},description:"佈局配置",name:"layout",required:!1,type:{name:"PaginationLayoutItem[] | undefined"}},size:{defaultValue:{value:"md"},description:"分頁組件大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},showTotalText:{defaultValue:null,description:"自訂總數顯示函數",name:"showTotalText",required:!1,type:{name:"((total: number, range: [number, number]) => ReactNode) | undefined"}},onChange:{defaultValue:null,description:"頁碼或每頁數量變更時的回調",name:"onChange",required:!1,type:{name:"((page: number, pageSize: number) => void) | undefined"}},className:{defaultValue:null,description:"自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const ee=()=>{const[a,t]=y.useState(1),[l,m]=y.useState(10),[n,u]=y.useState(1),[r,c]=y.useState(20),[x,i]=y.useState(1),[g,d]=y.useState(15),P=(v,f)=>{t(v),m(f)},S=(v,f)=>{u(v),c(f)},F=(v,f)=>{i(v),d(f)};return e.jsxs("div",{className:"space-y-8 w-full",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"基本分頁"}),e.jsx(s,{current:a,pageSize:l,total:500,onChange:P}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["當前：第 ",a," 頁，每頁 ",l," 筆"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"完整功能分頁"}),e.jsx(s,{current:n,pageSize:r,total:1e3,layout:["total","sizes","prev","pages","next","jumper"],pageSizeOptions:[10,20,50,100],onChange:S}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["當前：第 ",n," 頁，每頁 ",r," 筆"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"自訂佈局分頁"}),e.jsx(s,{current:x,pageSize:g,total:750,layout:["prev","pages","next","jumper","sizes","total"],pageNumberStyle:"plain",prevText:"上一頁",nextText:"下一頁",onChange:F,showTotalText:(v,f)=>e.jsxs("span",{className:"text-primary font-medium",children:["顯示 ",f[0]," 到 ",f[1]," 項，共 ",v," 項"]})}),e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["當前：第 ",x," 頁，每頁 ",g," 筆"]})]})]})},te=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Pagination 分頁"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的分頁組件，提供完整的分頁功能，包括頁碼導航、快速跳轉、每頁數量選擇等。 支援響應式設計，會根據容器寬度自動調整顯示的頁碼數量，並提供靈活的佈局配置系統。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Pagination 的各種屬性："}),e.jsx(J,{}),e.jsx(U,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 實際使用範例",description:"以下是實際的分頁範例，展示各種功能組合：",code:`// 互動式分頁範例
const [current, setCurrent] = useState(1);
const [pageSize, setPageSize] = useState(10);
const [showTotal, setShowTotal] = useState(true);
const [showSizeChanger, setShowSizeChanger] = useState(true);

return (
  <div className="space-y-6 w-full max-w-4xl">
    <div>
      <h4 className="font-medium mb-2 text-gray-700">基本分頁</h4>
      <Pagination
        current={current}
        pageSize={pageSize}
        total={500}
        showTotal={showTotal}
        showSizeChanger={showSizeChanger}
        onChange={(page, size) => {
          setCurrent(page);
          setPageSize(size);
        }}
      />
    </div>
  </div>
);`,children:e.jsx(ee,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 基本用法範例",description:"最簡單的分頁使用方式，只需要提供總數據量：",code:`// 基本分頁
<Pagination
  defaultCurrent={1}
  defaultPageSize={10}
  total={100}
/>

// 顯示總數
<Pagination
  defaultCurrent={1}
  defaultPageSize={10}
  total={100}
  layout={['prev', 'pages', 'next', 'total']}
/>

// 更多頁數
<Pagination
  defaultCurrent={5}
  defaultPageSize={10}
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"基本分頁"}),e.jsx(s,{defaultCurrent:1,defaultPageSize:10,total:100})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"顯示總數"}),e.jsx(s,{defaultCurrent:1,defaultPageSize:10,total:100,layout:["prev","pages","next","total"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"更多頁數"}),e.jsx(s,{defaultCurrent:5,defaultPageSize:10,total:500,layout:["prev","pages","next","total"]})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(j,{title:"🔄 頁碼樣式範例",description:"支援兩種頁碼樣式：純數字和有背景：",code:`// 背景樣式（預設）
<Pagination
  defaultCurrent={3}
  defaultPageSize={10}
  total={200}
  pageNumberStyle="background"
/>

// 純數字樣式
<Pagination
  defaultCurrent={3}
  defaultPageSize={10}
  total={200}
  pageNumberStyle="plain"
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"背景樣式（預設）"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:10,total:200,pageNumberStyle:"background"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"純數字樣式"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:10,total:200,pageNumberStyle:"plain"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"樣式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"background："}),"頁碼有背景色和邊框，視覺層次更明確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"plain："}),"純數字顯示，更簡潔的視覺效果"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(j,{title:"🔄 大小選項範例",description:"支援三種不同的大小選項：",code:`// 小尺寸
<Pagination
  defaultCurrent={2}
  defaultPageSize={10}
  total={100}
  size="sm"
  layout={['total', 'sizes', 'prev', 'pages', 'next']}
/>

// 中等尺寸（預設）
<Pagination
  defaultCurrent={2}
  defaultPageSize={10}
  total={100}
  size="md"
  layout={['total', 'sizes', 'prev', 'pages', 'next']}
/>

// 大尺寸
<Pagination
  defaultCurrent={2}
  defaultPageSize={10}
  total={100}
  size="lg"
  layout={['total', 'sizes', 'prev', 'pages', 'next']}
/>`,children:e.jsx("div",{className:"space-y-6",children:["sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:["大小：",a.toUpperCase()]}),e.jsx(s,{defaultCurrent:2,defaultPageSize:10,total:100,size:a,layout:["total","sizes","prev","pages","next"]})]},a))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"小尺寸，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"中等尺寸（預設），適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"大尺寸，適用於需要突出的分頁控制"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 功能組合範例",description:"展示各種功能的組合使用：",code:`// 顯示每頁數量選擇器
<Pagination
  defaultCurrent={1}
  defaultPageSize={20}
  total={500}
  layout={['prev', 'pages', 'next', 'sizes']}
  pageSizeOptions={[10, 20, 50, 100]}
/>

// 快速跳轉
<Pagination
  defaultCurrent={5}
  defaultPageSize={10}
  total={1000}
  layout={['prev', 'pages', 'next', 'jumper']}
/>

// 完整功能
<Pagination
  defaultCurrent={8}
  defaultPageSize={25}
  total={1000}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
  pageSizeOptions={[10, 25, 50, 100]}
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"顯示每頁數量選擇器"}),e.jsx(s,{defaultCurrent:1,defaultPageSize:20,total:500,layout:["prev","pages","next","sizes"],pageSizeOptions:[10,20,50,100]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"快速跳轉"}),e.jsx(s,{defaultCurrent:5,defaultPageSize:10,total:1e3,layout:["prev","pages","next","jumper"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"完整功能"}),e.jsx(s,{defaultCurrent:8,defaultPageSize:25,total:1e3,layout:["total","sizes","prev","pages","next","jumper"],pageSizeOptions:[10,25,50,100]})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 自訂文字和圖示範例",description:"可以自訂上一頁、下一頁的文字或圖示：",code:`// 自訂文字
<Pagination
  defaultCurrent={3}
  defaultPageSize={10}
  total={200}
  prevText="上一頁"
  nextText="下一頁"
/>

// 自訂圖示
<Pagination
  defaultCurrent={3}
  defaultPageSize={10}
  total={200}
  prevText={
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  }
  nextText={
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  }
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂文字"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:10,total:200,prevText:"上一頁",nextText:"下一頁"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂圖示"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:10,total:200,prevText:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})}),nextText:e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(j,{title:"🔄 佈局配置範例",description:"透過 layout 屬性可以自訂分頁組件的佈局和功能順序：",code:`// 完整佈局
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
/>

// 簡潔佈局
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
/>

// 功能在前佈局
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['sizes', 'jumper', 'prev', 'pages', 'next']}
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"完整佈局"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["total","sizes","prev","pages","next","jumper"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"順序：總數 → 每頁數量 → 上一頁 → 頁碼 → 下一頁 → 跳轉"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"簡潔佈局"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["prev","pages","next","total"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"順序：上一頁 → 頁碼 → 下一頁 → 總數"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"功能在前佈局"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["sizes","jumper","prev","pages","next"]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"順序：每頁數量 → 跳轉 → 上一頁 → 頁碼 → 下一頁"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"佈局元素說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"prev："}),"上一頁按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"next："}),"下一頁按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"pages："}),"頁碼數字"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"jumper："}),"快速跳轉輸入框"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"total："}),"總數顯示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sizes："}),"每頁數量選擇器"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(j,{title:"🔄 響應式設計範例",description:"分頁組件會根據容器寬度自動調整顯示的頁碼數量：",code:`// 大螢幕（顯示 9 個頁碼）
<div className="w-full">
  <Pagination
    defaultCurrent={10}
    defaultPageSize={10}
    total={1000}
  />
</div>

// 中等螢幕（顯示 7 個頁碼）
<div className="w-96">
  <Pagination
    defaultCurrent={10}
    defaultPageSize={10}
    total={1000}
  />
</div>

// 小螢幕（顯示 5 個頁碼）
<div className="w-80">
  <Pagination
    defaultCurrent={10}
    defaultPageSize={10}
    total={1000}
  />
</div>

// 極小螢幕（顯示 3 個頁碼）
<div className="w-64">
  <Pagination
    defaultCurrent={10}
    defaultPageSize={10}
    total={1000}
  />
</div>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"大螢幕（顯示 9 個頁碼）"}),e.jsx("div",{className:"w-full",children:e.jsx(s,{defaultCurrent:10,defaultPageSize:10,total:1e3})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"中等螢幕（顯示 7 個頁碼）"}),e.jsx("div",{className:"w-96",children:e.jsx(s,{defaultCurrent:10,defaultPageSize:10,total:1e3})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"小螢幕（顯示 5 個頁碼）"}),e.jsx("div",{className:"w-80",children:e.jsx(s,{defaultCurrent:10,defaultPageSize:10,total:1e3})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"極小螢幕（顯示 3 個頁碼）"}),e.jsx("div",{className:"w-64",children:e.jsx(s,{defaultCurrent:10,defaultPageSize:10,total:1e3})})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"響應式規則："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"< 480px："}),"顯示 3 個頁碼"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"480px - 640px："}),"顯示 5 個頁碼"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"640px - 768px："}),"顯示 7 個頁碼"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"> 768px："}),"顯示 9 個頁碼"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 禁用狀態範例",description:"可以禁用整個分頁組件：",code:`// 禁用的分頁組件
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
  disabled
/>`,children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"禁用的分頁"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["total","sizes","prev","pages","next","jumper"],disabled:!0})]})})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(j,{title:"🔄 自訂總數顯示範例",description:"可以透過 showTotalText 函數自訂總數的顯示方式：",code:`// 預設總數顯示
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
/>

// 自訂總數顯示
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
  showTotalText={(total, range) => (
    <span className="text-primary font-semibold">
      第 {range[0]}-{range[1]} 項 / 共 {total} 項
    </span>
  )}
/>

// 簡潔總數顯示
<Pagination
  defaultCurrent={3}
  defaultPageSize={20}
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
  showTotalText={(total) => \`總計 \${total} 項\`}
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"預設總數顯示"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["prev","pages","next","total"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂總數顯示"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["prev","pages","next","total"],showTotalText:(a,t)=>e.jsxs("span",{className:"text-primary font-semibold",children:["第 ",t[0],"-",t[1]," 項 / 共 ",a," 項"]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"簡潔總數顯示"}),e.jsx(s,{defaultCurrent:3,defaultPageSize:20,total:500,layout:["prev","pages","next","total"],showTotalText:a=>`總計 ${a} 項`})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Pagination } from 'eonui';

// 基本分頁
<Pagination
  total={500}
  defaultCurrent={1}
  defaultPageSize={10}
/>

// 顯示總數
<Pagination
  total={500}
  defaultCurrent={1}
  defaultPageSize={10}
  layout={['prev', 'pages', 'next', 'total']}
/>

// 完整功能
<Pagination
  total={1000}
  defaultCurrent={1}
  defaultPageSize={20}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
  pageSizeOptions={[10, 20, 50, 100]}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"受控組件"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控分頁
const [current, setCurrent] = useState(1);
const [pageSize, setPageSize] = useState(10);

const handleChange = (page: number, size: number) => {
  setCurrent(page);
  setPageSize(size);
  // 處理資料載入邏輯
  fetchData(page, size);
};

<Pagination
  current={current}
  pageSize={pageSize}
  total={total}
  onChange={handleChange}
  layout={['total', 'sizes', 'prev', 'pages', 'next']}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"自訂佈局和樣式"}),e.jsx("pre",{className:"component-docs-code",children:`// 自訂佈局順序
<Pagination
  total={500}
  layout={['prev', 'pages', 'next', 'jumper', 'sizes', 'total']}
  pageNumberStyle="plain"
  prevText="上一頁"
  nextText="下一頁"
/>

// 自訂總數顯示
<Pagination
  total={500}
  layout={['prev', 'pages', 'next', 'total']}
  showTotalText={(total, range) => (
    <span className="text-primary">
      顯示 {range[0]} 到 {range[1]} 項，共 {total} 項
    </span>
  )}
/>

// 不同大小
<Pagination total={500} size="sm" />
<Pagination total={500} size="md" />
<Pagination total={500} size="lg" />`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"事件處理"}),e.jsx("pre",{className:"component-docs-code",children:`// 統一的變更處理（頁碼和每頁數量變更都會觸發）
const handleChange = (page: number, pageSize: number) => {
  console.log('分頁變更:', { page, pageSize });
  // 處理資料載入邏輯
  fetchData(page, pageSize);
};

<Pagination
  total={1000}
  onChange={handleChange}
  layout={['prev', 'pages', 'next', 'sizes']}
/>

// 實際使用範例
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const handlePaginationChange = async (page: number, size: number) => {
  setLoading(true);
  try {
    const result = await fetchUserData(page, size);
    setData(result.data);
    setCurrentPage(page);
    setPageSize(size);
  } catch (error) {
    console.error('載入資料失敗:', error);
  } finally {
    setLoading(false);
  }
};

<Pagination
  current={currentPage}
  pageSize={pageSize}
  total={totalCount}
  onChange={handlePaginationChange}
  layout={['total', 'sizes', 'prev', 'pages', 'next', 'jumper']}
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Pagination 組件的所有功能，可以在你的項目中開始使用了！ 這個分頁組件提供了完整的分頁功能和靈活的配置選項，適用於各種資料展示場景。"})]})]}),fe={title:"Data Display/Pagination",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(te,{})}},argTypes:{current:{control:{type:"number",min:1},description:"當前頁碼（受控組件）",table:{type:{summary:"number"}}},defaultCurrent:{control:{type:"number",min:1},description:"預設頁碼（非受控組件）",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},pageSize:{control:{type:"number",min:1},description:"每頁資料數量（受控組件）",table:{type:{summary:"number"}}},defaultPageSize:{control:{type:"number",min:1},description:"預設每頁資料數量（非受控組件）",table:{type:{summary:"number"},defaultValue:{summary:"10"}}},total:{control:{type:"number",min:0},description:"總資料數量",table:{type:{summary:"number"}}},pageSizeOptions:{control:{type:"object"},description:"每頁資料數量選項",table:{type:{summary:"number[]"},defaultValue:{summary:"[10, 20, 50, 100]"}}},layout:{control:{type:"object"},description:"佈局配置，控制各功能區塊的顯示和順序",table:{type:{summary:"PaginationLayoutItem[]"},defaultValue:{summary:"['prev', 'pages', 'next']"}}},pageNumberStyle:{control:{type:"select"},options:["plain","background"],description:"頁碼樣式",table:{type:{summary:"string"},defaultValue:{summary:"background"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"分頁組件大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},prevText:{control:{type:"text"},description:"上一頁文字或圖示",table:{type:{summary:"ReactNode"}}},nextText:{control:{type:"text"},description:"下一頁文字或圖示",table:{type:{summary:"ReactNode"}}},onChange:{action:"changed",description:"頁碼或每頁數量變更時的回調",table:{type:{summary:"(page: number, pageSize: number) => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},T={args:{total:500,defaultCurrent:1,defaultPageSize:10,layout:["prev","pages","next"],pageNumberStyle:"background",size:"md",disabled:!1}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    total: 500,
    defaultCurrent: 1,
    defaultPageSize: 10,
    layout: ['prev', 'pages', 'next'],
    pageNumberStyle: 'background',
    size: 'md',
    disabled: false
  }
}`,...T.parameters?.docs?.source}}};const he=["Docs"];export{T as Docs,he as __namedExportsOrder,fe as default};

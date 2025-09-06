import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as T,C as U}from"./blocks-C_eD2Myt.js";import{R as I,r as X}from"./iframe-DMlPHyXL.js";import{c as a}from"./cn-Dtjc6EhN.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-BV-bFhAu.js";const C={sm:"w-48",md:"w-64",lg:"w-80",xl:"w-96",auto:"w-auto"},F={sm:"h-12",md:"h-16",lg:"h-20",auto:"h-auto"},Z={sm:"h-12",md:"h-16",lg:"h-20",auto:"h-auto"},t=I.forwardRef(({className:s,header:l,aside:i,main:y,footer:v,asidePosition:u="left",asideWidth:b="md",headerHeight:N="md",footerHeight:M="md",asideHeight:x="content",stickyHeader:B=!1,stickyFooter:L=!1,stickyAside:j=!1,spacing:d=0,fullHeight:V=!0,responsiveAside:c=!0,mobileMenuButtonClassName:S,...D},E)=>{const[m,g]=X.useState(!1),f=e.jsx("button",{onClick:()=>g(!m),className:a("lg:hidden ml-1 px-2 py-1 text-current hover:bg-black hover:bg-opacity-10 focus:outline-none transition-colors duration-200 flex items-center justify-center"),"aria-label":m?"關閉選單":"開啟選單",children:e.jsx("svg",{className:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:m?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),w=()=>l&&e.jsx("header",{className:R,children:i&&c?e.jsxs("div",{className:"flex w-full h-full",children:[e.jsx("div",{className:a("lg:hidden flex items-center h-full",S),children:f}),l]}):l}),k=()=>v&&e.jsx("footer",{className:$,children:v}),q=a("flex flex-col",V&&"min-h-screen",s),R=a("flex-shrink-0 w-full",F[N],B&&"sticky top-0 z-40",d>0&&`p-${d}`),W=a("flex flex-1",u==="right"&&"flex-row-reverse"),A=a("flex-shrink-0",C[b],x==="full"&&(j?"sticky top-0 h-screen overflow-y-auto":"h-screen overflow-y-auto"),x==="content"&&j&&(l?"sticky h-[calc(100vh-theme(spacing.16))] overflow-y-auto":"sticky top-0 h-screen overflow-y-auto"),c&&"hidden lg:block",d>0&&`p-${d}`),_=a("lg:hidden fixed inset-y-0 z-50 flex flex-col bg-white shadow-2xl border-r",u==="left"?"left-0":"right-0",C[b],"transition-transform duration-300 ease-in-out",d>0&&`p-${d}`),O=a("lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300",m?"opacity-100":"opacity-0 pointer-events-none"),H=a("flex-1 min-w-0",d>0&&`p-${d}`),$=a("flex-shrink-0 w-full",Z[M],L&&"sticky bottom-0 z-40"),z=x==="content"&&l&&j?`top-[${F[N].replace("h-","")}]`:"",P=i&&x==="full";return e.jsxs("div",{ref:E,className:q,...D,children:[i&&c&&e.jsx("div",{className:O,onClick:()=>g(!1),"aria-hidden":"true"}),i&&c&&e.jsxs("aside",{className:_,"data-mobile-aside-open":m,style:{transform:m?"translateX(0)":u==="left"?"translateX(-100%)":"translateX(100%)"},children:[e.jsx("button",{onClick:()=>g(!1),className:a("absolute top-4 z-10 p-2 rounded-md text-current hover:text-current hover:bg-black hover:bg-opacity-10 transition-colors duration-200",u==="left"?"right-4":"left-4"),"aria-label":"關閉選單",children:e.jsx("svg",{className:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:i})]}),P?e.jsxs("div",{className:a("flex flex-1",u==="right"&&"flex-row-reverse"),children:[e.jsx("aside",{className:A,children:i}),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[!l&&i&&c&&e.jsx("div",{className:"lg:hidden p-4 border-b",children:f}),w(),e.jsx("main",{className:a(H,"flex-1"),children:y}),k()]})]}):e.jsxs(e.Fragment,{children:[!l&&i&&c&&e.jsx("div",{className:"lg:hidden p-4 border-b",children:f}),w(),e.jsxs("div",{className:W,children:[i&&e.jsx("aside",{className:a(A,z),children:i}),e.jsx("main",{className:H,children:y})]}),k()]})]})});t.displayName="Layout";try{t.displayName="Layout",t.__docgenInfo={description:"",displayName:"Layout",props:{header:{defaultValue:null,description:"頁面標題區域內容",name:"header",required:!1,type:{name:"ReactNode"}},aside:{defaultValue:null,description:"側邊欄內容",name:"aside",required:!1,type:{name:"ReactNode"}},main:{defaultValue:null,description:"主要內容區域",name:"main",required:!0,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"頁腳內容",name:"footer",required:!1,type:{name:"ReactNode"}},asidePosition:{defaultValue:{value:"left"},description:"側邊欄位置",name:"asidePosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},asideWidth:{defaultValue:{value:"md"},description:"側邊欄寬度",name:"asideWidth",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"auto"'},{value:'"xl"'}]}},headerHeight:{defaultValue:{value:"md"},description:"標題區域高度",name:"headerHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"auto"'}]}},footerHeight:{defaultValue:{value:"md"},description:"頁腳高度",name:"footerHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"auto"'}]}},asideHeight:{defaultValue:{value:"content"},description:"側邊欄高度模式",name:"asideHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"content"'},{value:'"full"'}]}},stickyHeader:{defaultValue:{value:"false"},description:"是否固定標題",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},stickyFooter:{defaultValue:{value:"false"},description:"是否固定頁腳",name:"stickyFooter",required:!1,type:{name:"boolean | undefined"}},stickyAside:{defaultValue:{value:"false"},description:"是否固定側邊欄",name:"stickyAside",required:!1,type:{name:"boolean | undefined"}},spacing:{defaultValue:{value:"0"},description:"內容區域間距",name:"spacing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"0"},{value:"3"},{value:"1"},{value:"2"},{value:"4"},{value:"5"},{value:"6"},{value:"8"}]}},fullHeight:{defaultValue:{value:"true"},description:"是否全螢幕高度",name:"fullHeight",required:!1,type:{name:"boolean | undefined"}},responsiveAside:{defaultValue:{value:"true"},description:"響應式側邊欄（在小螢幕上隱藏）",name:"responsiveAside",required:!1,type:{name:"boolean | undefined"}},mobileMenuButtonClassName:{defaultValue:null,description:"手機版選單按鈕的 CSS 類別",name:"mobileMenuButtonClassName",required:!1,type:{name:"string | undefined"}}}}}catch{}const o=({title:s="網站標題"})=>e.jsxs("div",{className:"bg-primary text-white px-6 py-4 flex items-center justify-between w-full",children:[e.jsx("h1",{className:"text-xl font-semibold",children:s}),e.jsxs("nav",{className:"hidden md:flex space-x-4",children:[e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"首頁"}),e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"關於"}),e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"聯絡"})]})]}),r=({title:s="側邊欄"})=>e.jsxs("div",{className:"bg-gray-100 h-full p-4",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4 text-gray-800",children:s}),e.jsxs("nav",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 1"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 2"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 3"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 4"})]})]}),n=({content:s="主要內容"})=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6 text-gray-900",children:s}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 leading-relaxed",children:"這是主要內容區域。在這裡可以放置頁面的核心內容，如文章、表單、圖表等。 Layout 組件會自動處理各個區塊的佈局和響應式設計。"}),e.jsx("p",{className:"text-gray-700 leading-relaxed",children:"主要內容區域會自動填滿剩餘空間，並且在不同螢幕尺寸下保持良好的顯示效果。 你可以在這裡放置任何 React 組件或 HTML 內容。"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8",children:[1,2,3,4,5,6].map(l=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4 shadow-sm",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-2",children:["卡片 ",l]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"這是示範卡片內容，展示主要區域的佈局效果。"})]},l))})]})]}),h=({content:s="© 2024 EonUI. 版權所有."})=>e.jsx("div",{className:"bg-gray-800 text-white h-full flex items-center px-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full",children:[e.jsx("p",{className:"text-sm",children:s}),e.jsxs("div",{className:"flex space-x-4 mt-2 md:mt-0",children:[e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"隱私政策"}),e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"服務條款"}),e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"聯絡我們"})]})]})}),G=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"基本佈局（Header + Main + Footer）"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(o,{}),main:e.jsx(n,{content:"基本佈局主要內容"}),footer:e.jsx(h,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"完整佈局（Header + Aside + Main + Footer）"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"500px"},children:e.jsx(t,{header:e.jsx(o,{title:"完整佈局示範"}),aside:e.jsx(r,{title:"導航選單"}),main:e.jsx(n,{content:"完整佈局主要內容"}),footer:e.jsx(h,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"右側邊欄佈局"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(o,{title:"右側邊欄示範"}),aside:e.jsx(r,{title:"右側選單"}),asidePosition:"right",main:e.jsx(n,{content:"右側邊欄主要內容"}),spacing:0})})]})]}),J=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄寬度選項"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:["寬度: ",s]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"200px"},children:e.jsx(t,{aside:e.jsx(r,{title:`${s.toUpperCase()} 寬度`}),asideWidth:s,main:e.jsx(n,{content:`${s} 寬度示範`}),spacing:0})})]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"標題高度選項"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:["sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:["高度: ",s]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"200px"},children:e.jsx(t,{header:e.jsx(o,{title:`${s.toUpperCase()} 高度`}),headerHeight:s,main:e.jsx(n,{content:`${s} 高度示範`}),spacing:0})})]},s))})]})]}),K=()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"固定標題示範"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx(o,{title:"固定標題（滾動測試）"}),stickyHeader:!0,main:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"滾動內容"}),Array.from({length:20},(s,l)=>e.jsxs("p",{className:"mb-4 text-gray-700",children:["這是第 ",l+1," 段內容。當你滾動時，標題會保持固定在頂部。 這對於需要持續顯示導航或重要資訊的頁面非常有用。"]},l))]}),spacing:0})})]})}),Q=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄高度模式：佔滿全螢幕"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["💡 ",e.jsx("strong",{children:"注意："}),"全高度模式下，側邊欄會跨越整個螢幕高度，與 header 並排顯示"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(o,{title:"全高度側邊欄"}),aside:e.jsx(r,{title:"全高度側邊欄"}),asideHeight:"full",stickyAside:!0,main:e.jsx(n,{content:"側邊欄佔滿整個螢幕高度，與 header 並排顯示"}),footer:e.jsx(h,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄高度模式：在標題底下"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(o,{title:"內容高度側邊欄"}),aside:e.jsx(r,{title:"內容高度側邊欄"}),asideHeight:"content",stickyAside:!0,main:e.jsx(n,{content:"側邊欄只佔內容區域高度"}),footer:e.jsx(h,{}),spacing:0})})]})]}),Y=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"響應式側邊欄（縮小視窗測試）"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"💡 提示：縮小瀏覽器視窗寬度到手機尺寸，會看到選單按鈕出現在標題列左側。 側邊欄狀態由組件內部自動管理。"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(o,{title:"響應式佈局"}),aside:e.jsx(r,{title:"響應式選單"}),main:e.jsx(n,{content:"在小螢幕上，側邊欄會隱藏並顯示選單按鈕，狀態由組件內部管理"}),responsiveAside:!0,spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"自定義選單按鈕樣式"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-4",children:["💡 使用 ",e.jsx("code",{children:"mobileMenuButtonClassName"})," 來自定義選單按鈕的樣式，讓它與 header 背景完美融合。"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx("div",{className:"bg-blue-600 text-white px-4 py-3",children:e.jsx("h1",{className:"text-lg font-semibold",children:"藍色標題"})}),aside:e.jsx(r,{title:"藍色主題選單"}),main:e.jsx(n,{content:"選單按鈕會自動變成白色"}),responsiveAside:!0,mobileMenuButtonClassName:"text-white hover:bg-white hover:bg-opacity-20",spacing:0})}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx("div",{className:"bg-gray-900 text-gray-100 px-4 py-3",children:e.jsx("h1",{className:"text-lg font-semibold",children:"深色標題"})}),aside:e.jsx(r,{title:"深色主題選單"}),main:e.jsx(n,{content:"選單按鈕會自動變成淺色"}),responsiveAside:!0,mobileMenuButtonClassName:"text-gray-100 hover:bg-gray-100 hover:bg-opacity-20",spacing:0})})]})]})]}),ee=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Layout 頁面佈局"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的頁面佈局組件，提供靈活的四區塊佈局系統。 支援 header（標題）、aside（側邊欄）、main（主要內容）、footer（頁腳）的各種組合， 並提供響應式設計、固定位置、尺寸控制等進階功能。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Layout 的各種屬性："}),e.jsx(T,{}),e.jsx(U,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🏗️ 基本佈局"}),e.jsx("p",{className:"component-docs-section-description",children:"展示不同的佈局組合，從簡單的三區塊到完整的四區塊佈局："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(G,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"佈局組合說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"基本佈局："}),"Header + Main + Footer，適用於簡單頁面"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"完整佈局："}),"Header + Aside + Main + Footer，適用於管理後台"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"左/右側邊欄："}),"可選擇側邊欄位置，適應不同設計需求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"僅主要內容："}),"只使用 Main 區塊，適用於單頁應用"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📏 尺寸控制"}),e.jsx("p",{className:"component-docs-section-description",children:"提供多種尺寸選項，讓你精確控制各區塊的大小："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(J,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸選項說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"側邊欄寬度："}),"sm(192px) | md(256px) | lg(320px) | xl(384px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"標題高度："}),"sm(48px) | md(64px) | lg(80px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"頁腳高度："}),"sm(48px) | md(64px) | lg(80px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"響應式："}),"側邊欄在小螢幕上自動隱藏（可選）"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📌 固定位置功能"}),e.jsx("p",{className:"component-docs-section-description",children:"支援標題、側邊欄、頁腳的固定位置功能："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(K,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"固定位置特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"固定標題："}),"滾動時標題保持在頂部，適合導航欄"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定側邊欄："}),"側邊欄獨立滾動，適合長選單"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定頁腳："}),"頁腳保持在底部，適合重要資訊"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Z-index 管理："}),"自動處理層級關係"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📐 側邊欄高度模式"}),e.jsx("p",{className:"component-docs-section-description",children:"提供兩種側邊欄高度模式，適應不同的設計需求："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(Q,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"高度模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"full："}),"側邊欄佔滿整個螢幕高度，適合主導航"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"content："}),"側邊欄只佔內容區域高度（在 header 底下），適合次要導航"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自動計算："}),"content 模式會自動計算正確的高度和位置"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定滾動："}),"配合 stickyAside 可實現獨立滾動"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📱 響應式設計"}),e.jsx("p",{className:"component-docs-section-description",children:"內建響應式設計，自動適應不同螢幕尺寸，並提供手機版選單功能："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsx(Y,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"響應式特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"自動隱藏側邊欄："}),"在小螢幕（<1024px）上自動隱藏側邊欄"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"手機版選單按鈕："}),"自動在 header 中顯示選單按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"滑出式側邊欄："}),"手機版側邊欄從側邊滑出，支援觸控操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"遮罩背景："}),"側邊欄開啟時顯示半透明遮罩"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自訂選單按鈕："}),"可透過 mobileMenuButton 屬性自訂按鈕樣式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"狀態控制："}),"支援受控和非受控模式管理側邊欄狀態"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Layout } from 'eonui';

// 基本三區塊佈局
<Layout
  header={<Header />}
  main={<MainContent />}
  footer={<Footer />}
/>

// 完整四區塊佈局
<Layout
  header={<Header />}
  aside={<Sidebar />}
  main={<MainContent />}
  footer={<Footer />}
/>

// 右側邊欄佈局
<Layout
  header={<Header />}
  aside={<Sidebar />}
  asidePosition="right"
  main={<MainContent />}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 自訂尺寸和固定位置
<Layout
  header={<Header />}
  headerHeight="lg"
  stickyHeader={true}
  aside={<Sidebar />}
  asideWidth="xl"
  asideHeight="content"   // 側邊欄在 header 底下
  stickyAside={true}
  main={<MainContent />}
  footer={<Footer />}
  footerHeight="sm"
  spacing={4}
/>

// 響應式佈局（手機版選單）
<Layout
  header={<Header />}
  aside={<Sidebar />}
  responsiveAside={true}  // 小螢幕隱藏側邊欄
  main={<MainContent />}
  fullHeight={true}       // 全螢幕高度
/>

// 受控手機版側邊欄
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

<Layout
  header={<Header />}
  aside={<Sidebar />}
  responsiveAside={true}
  mobileAsideOpen={mobileMenuOpen}
  onMobileAsideToggle={setMobileMenuOpen}
  main={<MainContent />}
/>

// 自訂手機版選單按鈕
<Layout
  header={<Header />}
  aside={<Sidebar />}
  responsiveAside={true}
  mobileMenuButton={
    <CustomMenuButton onClick={() => toggleMenu()} />
  }
  main={<MainContent />}
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"實際範例"}),e.jsx("pre",{className:"component-docs-code",children:`// 管理後台佈局
const AdminLayout = ({ children }) => (
  <Layout
    header={
      <div className="bg-white shadow-sm px-6 py-4">
        <h1 className="text-xl font-semibold">管理後台</h1>
      </div>
    }
    aside={
      <nav className="bg-gray-50 p-4">
        <ul className="space-y-2">
          <li><a href="/dashboard">儀表板</a></li>
          <li><a href="/users">用戶管理</a></li>
          <li><a href="/settings">設定</a></li>
        </ul>
      </nav>
    }
    main={children}
    stickyHeader={true}
    asideWidth="md"
    spacing={0}
  />
);

// 部落格佈局
const BlogLayout = ({ children }) => (
  <Layout
    header={
      <header className="bg-primary text-white p-6">
        <h1 className="text-2xl font-bold">我的部落格</h1>
      </header>
    }
    main={
      <article className="max-w-4xl mx-auto p-6">
        {children}
      </article>
    }
    footer={
      <footer className="bg-gray-100 p-6 text-center">
        <p>&copy; 2024 我的部落格</p>
      </footer>
    }
    fullHeight={true}
  />
);`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🏗️ 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Layout 組件的所有功能，可以在你的項目中開始使用了！ 這個靈活的佈局系統可以幫助你快速建立各種頁面結構，從簡單的內容頁面到複雜的管理後台。"})]})]}),re={title:"Components/Layout",component:t,parameters:{layout:"fullscreen",docs:{page:()=>e.jsx(ee,{})}},argTypes:{header:{control:{type:"boolean"},description:"頁面標題區域內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(o,{}),false:void 0}},aside:{control:{type:"boolean"},description:"側邊欄內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(r,{}),false:void 0}},footer:{control:{type:"boolean"},description:"頁腳內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(h,{}),false:void 0}},asidePosition:{control:{type:"select"},options:["left","right"],description:"側邊欄位置",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},asideWidth:{control:{type:"select"},options:["sm","md","lg","xl","auto"],description:"側邊欄寬度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},headerHeight:{control:{type:"select"},options:["sm","md","lg","auto"],description:"標題區域高度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},footerHeight:{control:{type:"select"},options:["sm","md","lg","auto"],description:"頁腳高度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},stickyHeader:{control:{type:"boolean"},description:"是否固定標題",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stickyFooter:{control:{type:"boolean"},description:"是否固定頁腳",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stickyAside:{control:{type:"boolean"},description:"是否固定側邊欄",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},spacing:{control:{type:"select"},options:[0,1,2,3,4,5,6,8],description:"內容區域間距",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},fullHeight:{control:{type:"boolean"},description:"是否全螢幕高度",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},asideHeight:{control:{type:"select"},options:["full","content"],description:"側邊欄高度模式",table:{type:{summary:"string"},defaultValue:{summary:"content"}}},responsiveAside:{control:{type:"boolean"},description:"響應式側邊欄（在小螢幕上隱藏）",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},mobileMenuButtonClassName:{control:{type:"text"},description:"手機版選單按鈕的 CSS 類別，用於自定義樣式",table:{type:{summary:"string"}}}},tags:["autodocs"]},p={args:{header:!0,aside:!0,footer:!0,asidePosition:"left",asideWidth:"md",headerHeight:"md",footerHeight:"md",asideHeight:"content",stickyHeader:!1,stickyFooter:!1,stickyAside:!1,spacing:0,fullHeight:!0,responsiveAside:!0},render:s=>e.jsx("div",{style:{height:"600px"},children:e.jsx(t,{...s,main:e.jsx(n,{content:"互動式範例主要內容"})})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    header: true,
    aside: true,
    footer: true,
    asidePosition: 'left',
    asideWidth: 'md',
    headerHeight: 'md',
    footerHeight: 'md',
    asideHeight: 'content',
    stickyHeader: false,
    stickyFooter: false,
    stickyAside: false,
    spacing: 0,
    fullHeight: true,
    responsiveAside: true
  },
  render: args => <div style={{
    height: '600px'
  }}>\r
      <Layout {...args} main={<DemoMain content="互動式範例主要內容" />} />\r
    </div>
}`,...p.parameters?.docs?.source}}};const de=["Docs"];export{p as Docs,de as __namedExportsOrder,re as default};

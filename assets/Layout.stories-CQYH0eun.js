import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as c,C as h}from"./blocks-CUo2tLZq.js";import{C as d}from"./CodeExample-CuI99ZG3.js";import{L as t}from"./Layout-D8It61zL.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./iframe-vexCixVy.js";import"./index-uvf18IKX.js";import"./cn-Dtjc6EhN.js";const i=({title:s="網站標題"})=>e.jsxs("div",{className:"bg-primary text-white px-6 py-4 flex items-center justify-between w-full",children:[e.jsx("h1",{className:"text-xl font-semibold",children:s}),e.jsxs("nav",{className:"hidden md:flex space-x-4",children:[e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"首頁"}),e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"關於"}),e.jsx("a",{href:"#",className:"hover:text-primary-light",children:"聯絡"})]})]}),r=({title:s="側邊欄"})=>e.jsxs("div",{className:"bg-gray-100 h-full p-4",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4 text-gray-800",children:s}),e.jsxs("nav",{className:"space-y-2",children:[e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 1"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 2"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 3"}),e.jsx("a",{href:"#",className:"block px-3 py-2 rounded hover:bg-gray-200 text-gray-700",children:"選單項目 4"})]})]}),a=({content:s="主要內容"})=>e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6 text-gray-900",children:s}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-700 leading-relaxed",children:"這是主要內容區域。在這裡可以放置頁面的核心內容，如文章、表單、圖表等。 Layout 組件會自動處理各個區塊的佈局和響應式設計。"}),e.jsx("p",{className:"text-gray-700 leading-relaxed",children:"主要內容區域會自動填滿剩餘空間，並且在不同螢幕尺寸下保持良好的顯示效果。 你可以在這裡放置任何 React 組件或 HTML 內容。"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8",children:[1,2,3,4,5,6].map(o=>e.jsxs("div",{className:"bg-white border border-gray-200 rounded-lg p-4 shadow-sm",children:[e.jsxs("h3",{className:"font-semibold text-gray-900 mb-2",children:["卡片 ",o]}),e.jsx("p",{className:"text-gray-600 text-sm",children:"這是示範卡片內容，展示主要區域的佈局效果。"})]},o))})]})]}),l=({content:s="© 2024 EonUI. 版權所有."})=>e.jsx("div",{className:"bg-gray-800 text-white h-full flex items-center px-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center w-full",children:[e.jsx("p",{className:"text-sm",children:s}),e.jsxs("div",{className:"flex space-x-4 mt-2 md:mt-0",children:[e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"隱私政策"}),e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"服務條款"}),e.jsx("a",{href:"#",className:"text-sm hover:text-gray-300",children:"聯絡我們"})]})]})}),m=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"基本佈局（Header + Main + Footer）"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(i,{}),main:e.jsx(a,{content:"基本佈局主要內容"}),footer:e.jsx(l,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"完整佈局（Header + Aside + Main + Footer）"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"500px"},children:e.jsx(t,{header:e.jsx(i,{title:"完整佈局示範"}),aside:e.jsx(r,{title:"導航選單"}),main:e.jsx(a,{content:"完整佈局主要內容"}),footer:e.jsx(l,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"右側邊欄佈局"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(i,{title:"右側邊欄示範"}),aside:e.jsx(r,{title:"右側選單"}),asidePosition:"right",main:e.jsx(a,{content:"右側邊欄主要內容"}),spacing:0})})]})]}),x=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄寬度選項"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:["sm","md","lg","xl"].map(s=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:["寬度: ",s]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"200px"},children:e.jsx(t,{aside:e.jsx(r,{title:`${s.toUpperCase()} 寬度`}),asideWidth:s,main:e.jsx(a,{content:`${s} 寬度示範`}),spacing:0})})]},s))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"標題高度選項"}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4",children:["sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2",children:["高度: ",s]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"200px"},children:e.jsx(t,{header:e.jsx(i,{title:`${s.toUpperCase()} 高度`}),headerHeight:s,main:e.jsx(a,{content:`${s} 高度示範`}),spacing:0})})]},s))})]})]}),p=()=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"固定標題示範"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx(i,{title:"固定標題（滾動測試）"}),stickyHeader:!0,main:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"滾動內容"}),Array.from({length:20},(s,o)=>e.jsxs("p",{className:"mb-4 text-gray-700",children:["這是第 ",o+1," 段內容。當你滾動時，標題會保持固定在頂部。 這對於需要持續顯示導航或重要資訊的頁面非常有用。"]},o))]}),spacing:0})})]})}),j=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄高度模式：佔滿全螢幕"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-2",children:["💡 ",e.jsx("strong",{children:"注意："}),"全高度模式下，側邊欄會跨越整個螢幕高度，與 header 並排顯示"]}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(i,{title:"全高度側邊欄"}),aside:e.jsx(r,{title:"全高度側邊欄"}),asideHeight:"full",stickyAside:!0,main:e.jsx(a,{content:"側邊欄佔滿整個螢幕高度，與 header 並排顯示"}),footer:e.jsx(l,{}),spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"側邊欄高度模式：在標題底下"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(i,{title:"內容高度側邊欄"}),aside:e.jsx(r,{title:"內容高度側邊欄"}),asideHeight:"content",stickyAside:!0,main:e.jsx(a,{content:"側邊欄只佔內容區域高度"}),footer:e.jsx(l,{}),spacing:0})})]})]}),g=()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"響應式側邊欄（縮小視窗測試）"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"💡 提示：縮小瀏覽器視窗寬度到手機尺寸，會看到選單按鈕出現在標題列左側。 側邊欄狀態由組件內部自動管理。"}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"400px"},children:e.jsx(t,{header:e.jsx(i,{title:"響應式佈局"}),aside:e.jsx(r,{title:"響應式選單"}),main:e.jsx(a,{content:"在小螢幕上，側邊欄會隱藏並顯示選單按鈕，狀態由組件內部管理"}),responsiveAside:!0,spacing:0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-700",children:"自定義選單按鈕樣式"}),e.jsxs("p",{className:"text-sm text-gray-600 mb-4",children:["💡 使用 ",e.jsx("code",{children:"mobileMenuButtonClassName"})," 來自定義選單按鈕的樣式，讓它與 header 背景完美融合。"]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx("div",{className:"bg-blue-600 text-white px-4 py-3",children:e.jsx("h1",{className:"text-lg font-semibold",children:"藍色標題"})}),aside:e.jsx(r,{title:"藍色主題選單"}),main:e.jsx(a,{content:"選單按鈕會自動變成白色"}),responsiveAside:!0,mobileMenuButtonClassName:"text-white hover:bg-white hover:bg-opacity-20",spacing:0})}),e.jsx("div",{className:"border rounded-lg overflow-hidden",style:{height:"300px"},children:e.jsx(t,{header:e.jsx("div",{className:"bg-gray-900 text-gray-100 px-4 py-3",children:e.jsx("h1",{className:"text-lg font-semibold",children:"深色標題"})}),aside:e.jsx(r,{title:"深色主題選單"}),main:e.jsx(a,{content:"選單按鈕會自動變成淺色"}),responsiveAside:!0,mobileMenuButtonClassName:"text-gray-100 hover:bg-gray-100 hover:bg-opacity-20",spacing:0})})]})]})]}),u=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Layout 頁面佈局"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的頁面佈局組件，提供靈活的四區塊佈局系統。 支援 header（標題）、aside（側邊欄）、main（主要內容）、footer（頁腳）的各種組合， 並提供響應式設計、固定位置、尺寸控制等進階功能。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Layout 的各種屬性："}),e.jsx(c,{}),e.jsx(h,{})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 佈局範例",description:"展示不同的佈局組合，從簡單的三區塊到完整的四區塊佈局：",code:`// 基本佈局組合
<Layout
  header={<Header />}
  main={<Main />}
  footer={<Footer />}
/>

// 完整佈局組合
<Layout
  header={<Header />}
  aside={<Aside />}
  main={<Main />}
  footer={<Footer />}
/>`,children:e.jsx(m,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"佈局組合說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"基本佈局："}),"Header + Main + Footer，適用於簡單頁面"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"完整佈局："}),"Header + Aside + Main + Footer，適用於管理後台"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"左/右側邊欄："}),"可選擇側邊欄位置，適應不同設計需求"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"僅主要內容："}),"只使用 Main 區塊，適用於單頁應用"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 尺寸選項範例",description:"提供多種尺寸選項，讓你精確控制各區塊的大小：",code:`// 不同尺寸的佈局組合
// 小型側邊欄
<Layout
  aside={<Aside />}
  asideWidth="sm"
  header={<Header />}
  headerHeight="sm"
>
  <Main />
</Layout>

// 中型側邊欄
<Layout
  aside={<Aside />}
  asideWidth="md"
  header={<Header />}
  headerHeight="md"
>
  <Main />
</Layout>

// 大型側邊欄
<Layout
  aside={<Aside />}
  asideWidth="lg"
  header={<Header />}
  headerHeight="lg"
>
  <Main />
</Layout>`,children:e.jsx(x,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸選項說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"側邊欄寬度："}),"sm(192px) | md(256px) | lg(320px) | xl(384px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"標題高度："}),"sm(48px) | md(64px) | lg(80px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"頁腳高度："}),"sm(48px) | md(64px) | lg(80px) | auto"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"響應式："}),"側邊欄在小螢幕上自動隱藏（可選）"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 固定位置功能範例",description:"支援標題、側邊欄、頁腳的固定位置功能：",code:`// 固定標題的佈局
<Layout
  header={<Header />}
  stickyHeader={true}
  aside={<Aside />}
  footer={<Footer />}
>
  <Main />
</Layout>

// 固定側邊欄的佈局
<Layout
  header={<Header />}
  aside={<Aside />}
  stickyAside={true}
  footer={<Footer />}
>
  <Main />
</Layout>

// 固定頁腳的佈局
<Layout
  header={<Header />}
  aside={<Aside />}
  footer={<Footer />}
  stickyFooter={true}
>
  <Main />
</Layout>`,children:e.jsx(p,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"固定位置特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"固定標題："}),"滾動時標題保持在頂部，適合導航欄"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定側邊欄："}),"側邊欄獨立滾動，適合長選單"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定頁腳："}),"頁腳保持在底部，適合重要資訊"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Z-index 管理："}),"自動處理層級關係"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 側邊欄高度模式範例",description:"提供兩種側邊欄高度模式，適應不同的設計需求：",code:`// 全高模式（side）
<Layout
  header={<Header />}
  aside={<Aside />}
  asideHeight="full"
  footer={<Footer />}
>
  <Main />
</Layout>

// 內容區高度模式（content）
<Layout
  header={<Header />}
  aside={<Aside />}
  asideHeight="content"
  footer={<Footer />}
>
  <Main />
</Layout>`,children:e.jsx(j,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"高度模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"full："}),"側邊欄佔滿整個螢幕高度，適合主導航"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"content："}),"側邊欄只佔內容區域高度（在 header 底下），適合次要導航"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自動計算："}),"content 模式會自動計算正確的高度和位置"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"固定滾動："}),"配合 stickyAside 可實現獨立滾動"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(d,{title:"🔄 響應式設計範例",description:"內建響應式設計，自動適應不同螢幕尺寸，並提供手機版選單功能：",code:`// 響應式佈局會自動適應螢幕尺寸
<Layout
  header={<Header />}
  aside={<Aside />}
  footer={<Footer />}
  // 在小螢幕上自動隱藏側邊欄
  // 可以通過 showMobileSidebar 控制顯示
>
  <Main />
</Layout>

// 手動控制手機版側邊欄
const [showSidebar, setShowSidebar] = useState(false);

<Layout
  header={<Header onMenuClick={() => setShowSidebar(!showSidebar)} />}
  aside={<Aside />}
  showMobileSidebar={showSidebar}
  onMobileSidebarClose={() => setShowSidebar(false)}
>
  <Main />
</Layout>`,children:e.jsx(g,{})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"響應式特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"自動隱藏側邊欄："}),"在小螢幕（<1024px）上自動隱藏側邊欄"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"手機版選單按鈕："}),"自動在 header 中顯示選單按鈕"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"滑出式側邊欄："}),"手機版側邊欄從側邊滑出，支援觸控操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"遮罩背景："}),"側邊欄開啟時顯示半透明遮罩"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"自訂選單按鈕："}),"可透過 mobileMenuButton 屬性自訂按鈕樣式"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"狀態控制："}),"支援受控和非受控模式管理側邊欄狀態"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Layout } from 'eonui';

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
);`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🏗️ 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Layout 組件的所有功能，可以在你的項目中開始使用了！ 這個靈活的佈局系統可以幫助你快速建立各種頁面結構，從簡單的內容頁面到複雜的管理後台。"})]})]}),A={title:"Layout/Layout",component:t,parameters:{layout:"fullscreen",docs:{page:()=>e.jsx(u,{})}},argTypes:{header:{control:{type:"boolean"},description:"頁面標題區域內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(i,{}),false:void 0}},aside:{control:{type:"boolean"},description:"側邊欄內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(r,{}),false:void 0}},footer:{control:{type:"boolean"},description:"頁腳內容",table:{type:{summary:"React.ReactNode"}},mapping:{true:e.jsx(l,{}),false:void 0}},asidePosition:{control:{type:"select"},options:["left","right"],description:"側邊欄位置",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},asideWidth:{control:{type:"select"},options:["sm","md","lg","xl","auto"],description:"側邊欄寬度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},headerHeight:{control:{type:"select"},options:["sm","md","lg","auto"],description:"標題區域高度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},footerHeight:{control:{type:"select"},options:["sm","md","lg","auto"],description:"頁腳高度",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},stickyHeader:{control:{type:"boolean"},description:"是否固定標題",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stickyFooter:{control:{type:"boolean"},description:"是否固定頁腳",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},stickyAside:{control:{type:"boolean"},description:"是否固定側邊欄",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},spacing:{control:{type:"select"},options:[0,1,2,3,4,5,6,8],description:"內容區域間距",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},fullHeight:{control:{type:"boolean"},description:"是否全螢幕高度",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},asideHeight:{control:{type:"select"},options:["full","content"],description:"側邊欄高度模式",table:{type:{summary:"string"},defaultValue:{summary:"content"}}},responsiveAside:{control:{type:"boolean"},description:"響應式側邊欄（在小螢幕上隱藏）",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},mobileMenuButtonClassName:{control:{type:"text"},description:"手機版選單按鈕的 CSS 類別，用於自定義樣式",table:{type:{summary:"string"}}}},tags:["autodocs"]},n={args:{header:!0,aside:!0,footer:!0,asidePosition:"left",asideWidth:"md",headerHeight:"md",footerHeight:"md",asideHeight:"content",stickyHeader:!1,stickyFooter:!1,stickyAside:!1,spacing:0,fullHeight:!0,responsiveAside:!0},render:s=>e.jsx("div",{style:{height:"600px"},children:e.jsx(t,{...s,main:e.jsx(a,{content:"互動式範例主要內容"})})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }}>
      <Layout {...args} main={<DemoMain content="互動式範例主要內容" />} />
    </div>
}`,...n.parameters?.docs?.source}}};const S=["Docs"];export{n as Docs,S as __namedExportsOrder,A as default};

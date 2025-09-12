import React from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Layout } from './Layout';
import '../../styles/component-docs.css';

// 示範內容組件
const DemoHeader = ({ title = '網站標題' }: { title?: string }) => (
  <div className="bg-primary text-white px-6 py-4 flex items-center justify-between w-full">
    <h1 className="text-xl font-semibold">{title}</h1>
    <nav className="hidden md:flex space-x-4">
      <a
        href="#"
        className="hover:text-primary-light"
      >
        首頁
      </a>
      <a
        href="#"
        className="hover:text-primary-light"
      >
        關於
      </a>
      <a
        href="#"
        className="hover:text-primary-light"
      >
        聯絡
      </a>
    </nav>
  </div>
);

const DemoAside = ({ title = '側邊欄' }: { title?: string }) => (
  <div className="bg-gray-100 h-full p-4">
    <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
    <nav className="space-y-2">
      <a
        href="#"
        className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-700"
      >
        選單項目 1
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-700"
      >
        選單項目 2
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-700"
      >
        選單項目 3
      </a>
      <a
        href="#"
        className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-700"
      >
        選單項目 4
      </a>
    </nav>
  </div>
);

const DemoMain = ({ content = '主要內容' }: { content?: string }) => (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-gray-900">{content}</h1>
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed">
        這是主要內容區域。在這裡可以放置頁面的核心內容，如文章、表單、圖表等。 Layout
        組件會自動處理各個區塊的佈局和響應式設計。
      </p>
      <p className="text-gray-700 leading-relaxed">
        主要內容區域會自動填滿剩餘空間，並且在不同螢幕尺寸下保持良好的顯示效果。
        你可以在這裡放置任何 React 組件或 HTML 內容。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-gray-900 mb-2">卡片 {i}</h3>
            <p className="text-gray-600 text-sm">這是示範卡片內容，展示主要區域的佈局效果。</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DemoFooter = ({ content = '© 2024 EonUI. 版權所有.' }: { content?: string }) => (
  <div className="bg-gray-800 text-white h-full flex items-center px-4">
    <div className="flex flex-col md:flex-row justify-between items-center w-full">
      <p className="text-sm">{content}</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a
          href="#"
          className="text-sm hover:text-gray-300"
        >
          隱私政策
        </a>
        <a
          href="#"
          className="text-sm hover:text-gray-300"
        >
          服務條款
        </a>
        <a
          href="#"
          className="text-sm hover:text-gray-300"
        >
          聯絡我們
        </a>
      </div>
    </div>
  </div>
);

// 佈局範例展示組件
const LayoutShowcase = () => {
  return (
    <div className="space-y-8">
      {/* 基本佈局 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          基本佈局（Header + Main + Footer）
        </h3>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '400px' }}
        >
          <Layout
            header={<DemoHeader />}
            main={<DemoMain content="基本佈局主要內容" />}
            footer={<DemoFooter />}
            spacing={0}
          />
        </div>
      </div>

      {/* 帶側邊欄的佈局 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          完整佈局（Header + Aside + Main + Footer）
        </h3>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '500px' }}
        >
          <Layout
            header={<DemoHeader title="完整佈局示範" />}
            aside={<DemoAside title="導航選單" />}
            main={<DemoMain content="完整佈局主要內容" />}
            footer={<DemoFooter />}
            spacing={0}
          />
        </div>
      </div>

      {/* 右側邊欄佈局 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">右側邊欄佈局</h3>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '400px' }}
        >
          <Layout
            header={<DemoHeader title="右側邊欄示範" />}
            aside={<DemoAside title="右側選單" />}
            asidePosition="right"
            main={<DemoMain content="右側邊欄主要內容" />}
            spacing={0}
          />
        </div>
      </div>
    </div>
  );
};

// 尺寸展示組件
const SizeShowcase = () => {
  return (
    <div className="space-y-8">
      {/* 不同側邊欄寬度 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">側邊欄寬度選項</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {(['sm', 'md', 'lg', 'xl'] as const).map((width) => (
            <div key={width}>
              <h4 className="font-medium mb-2">寬度: {width}</h4>
              <div
                className="border rounded-lg overflow-hidden"
                style={{ height: '200px' }}
              >
                <Layout
                  aside={<DemoAside title={`${width.toUpperCase()} 寬度`} />}
                  asideWidth={width}
                  main={<DemoMain content={`${width} 寬度示範`} />}
                  spacing={0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 不同標題高度 */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">標題高度選項</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {(['sm', 'md', 'lg'] as const).map((height) => (
            <div key={height}>
              <h4 className="font-medium mb-2">高度: {height}</h4>
              <div
                className="border rounded-lg overflow-hidden"
                style={{ height: '200px' }}
              >
                <Layout
                  header={<DemoHeader title={`${height.toUpperCase()} 高度`} />}
                  headerHeight={height}
                  main={<DemoMain content={`${height} 高度示範`} />}
                  spacing={0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 固定位置展示組件
const StickyShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">固定標題示範</h3>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '300px' }}
        >
          <Layout
            header={<DemoHeader title="固定標題（滾動測試）" />}
            stickyHeader={true}
            main={
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">滾動內容</h2>
                {Array.from({ length: 20 }, (_, i) => (
                  <p
                    key={i}
                    className="mb-4 text-gray-700"
                  >
                    這是第 {i + 1} 段內容。當你滾動時，標題會保持固定在頂部。
                    這對於需要持續顯示導航或重要資訊的頁面非常有用。
                  </p>
                ))}
              </div>
            }
            spacing={0}
          />
        </div>
      </div>
    </div>
  );
};

// 側邊欄高度模式展示組件
const AsideHeightShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">側邊欄高度模式：佔滿全螢幕</h3>
        <p className="text-sm text-gray-600 mb-2">
          💡 <strong>注意：</strong>全高度模式下，側邊欄會跨越整個螢幕高度，與 header 並排顯示
        </p>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '400px' }}
        >
          <Layout
            header={<DemoHeader title="全高度側邊欄" />}
            aside={<DemoAside title="全高度側邊欄" />}
            asideHeight="full"
            stickyAside={true}
            main={<DemoMain content="側邊欄佔滿整個螢幕高度，與 header 並排顯示" />}
            footer={<DemoFooter />}
            spacing={0}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">側邊欄高度模式：在標題底下</h3>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '400px' }}
        >
          <Layout
            header={<DemoHeader title="內容高度側邊欄" />}
            aside={<DemoAside title="內容高度側邊欄" />}
            asideHeight="content"
            stickyAside={true}
            main={<DemoMain content="側邊欄只佔內容區域高度" />}
            footer={<DemoFooter />}
            spacing={0}
          />
        </div>
      </div>
    </div>
  );
};

// 手機版響應式展示組件
const MobileResponsiveShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">響應式側邊欄（縮小視窗測試）</h3>
        <p className="text-sm text-gray-600 mb-4">
          💡 提示：縮小瀏覽器視窗寬度到手機尺寸，會看到選單按鈕出現在標題列左側。
          側邊欄狀態由組件內部自動管理。
        </p>
        <div
          className="border rounded-lg overflow-hidden"
          style={{ height: '400px' }}
        >
          <Layout
            header={<DemoHeader title="響應式佈局" />}
            aside={<DemoAside title="響應式選單" />}
            main={<DemoMain content="在小螢幕上，側邊欄會隱藏並顯示選單按鈕，狀態由組件內部管理" />}
            responsiveAside={true}
            spacing={0}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-700">自定義選單按鈕樣式</h3>
        <p className="text-sm text-gray-600 mb-4">
          💡 使用 <code>mobileMenuButtonClassName</code> 來自定義選單按鈕的樣式，讓它與 header
          背景完美融合。
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 藍色 Header 範例 */}
          <div
            className="border rounded-lg overflow-hidden"
            style={{ height: '300px' }}
          >
            <Layout
              header={
                <div className="bg-blue-600 text-white px-4 py-3">
                  <h1 className="text-lg font-semibold">藍色標題</h1>
                </div>
              }
              aside={<DemoAside title="藍色主題選單" />}
              main={<DemoMain content="選單按鈕會自動變成白色" />}
              responsiveAside={true}
              mobileMenuButtonClassName="text-white hover:bg-white hover:bg-opacity-20"
              spacing={0}
            />
          </div>

          {/* 深色 Header 範例 */}
          <div
            className="border rounded-lg overflow-hidden"
            style={{ height: '300px' }}
          >
            <Layout
              header={
                <div className="bg-gray-900 text-gray-100 px-4 py-3">
                  <h1 className="text-lg font-semibold">深色標題</h1>
                </div>
              }
              aside={<DemoAside title="深色主題選單" />}
              main={<DemoMain content="選單按鈕會自動變成淺色" />}
              responsiveAside={true}
              mobileMenuButtonClassName="text-gray-100 hover:bg-gray-100 hover:bg-opacity-20"
              spacing={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LayoutDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Layout 頁面佈局</h1>
        <p className="component-docs-description">
          EonUI 的頁面佈局組件，提供靈活的四區塊佈局系統。 支援
          header（標題）、aside（側邊欄）、main（主要內容）、footer（頁腳）的各種組合，
          並提供響應式設計、固定位置、尺寸控制等進階功能。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Layout 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 基本佈局展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 佈局範例"
          description="展示不同的佈局組合，從簡單的三區塊到完整的四區塊佈局："
          code={`// 基本佈局組合
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
/>`}
        >
          <LayoutShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>佈局組合說明：</strong>
          <ul>
            <li>
              <strong>基本佈局：</strong>Header + Main + Footer，適用於簡單頁面
            </li>
            <li>
              <strong>完整佈局：</strong>Header + Aside + Main + Footer，適用於管理後台
            </li>
            <li>
              <strong>左/右側邊欄：</strong>可選擇側邊欄位置，適應不同設計需求
            </li>
            <li>
              <strong>僅主要內容：</strong>只使用 Main 區塊，適用於單頁應用
            </li>
          </ul>
        </div>
      </div>

      {/* 尺寸控制 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 尺寸選項範例"
          description="提供多種尺寸選項，讓你精確控制各區塊的大小："
          code={`// 不同尺寸的佈局組合
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
</Layout>`}
        >
          <SizeShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>尺寸選項說明：</strong>
          <ul>
            <li>
              <strong>側邊欄寬度：</strong>sm(192px) | md(256px) | lg(320px) | xl(384px) | auto
            </li>
            <li>
              <strong>標題高度：</strong>sm(48px) | md(64px) | lg(80px) | auto
            </li>
            <li>
              <strong>頁腳高度：</strong>sm(48px) | md(64px) | lg(80px) | auto
            </li>
            <li>
              <strong>響應式：</strong>側邊欄在小螢幕上自動隱藏（可選）
            </li>
          </ul>
        </div>
      </div>

      {/* 固定位置功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 固定位置功能範例"
          description="支援標題、側邊欄、頁腳的固定位置功能："
          code={`// 固定標題的佈局
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
</Layout>`}
        >
          <StickyShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>固定位置特色：</strong>
          <ul>
            <li>
              <strong>固定標題：</strong>滾動時標題保持在頂部，適合導航欄
            </li>
            <li>
              <strong>固定側邊欄：</strong>側邊欄獨立滾動，適合長選單
            </li>
            <li>
              <strong>固定頁腳：</strong>頁腳保持在底部，適合重要資訊
            </li>
            <li>
              <strong>Z-index 管理：</strong>自動處理層級關係
            </li>
          </ul>
        </div>
      </div>

      {/* 側邊欄高度模式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 側邊欄高度模式範例"
          description="提供兩種側邊欄高度模式，適應不同的設計需求："
          code={`// 全高模式（side）
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
</Layout>`}
        >
          <AsideHeightShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>高度模式說明：</strong>
          <ul>
            <li>
              <strong>full：</strong>側邊欄佔滿整個螢幕高度，適合主導航
            </li>
            <li>
              <strong>content：</strong>側邊欄只佔內容區域高度（在 header 底下），適合次要導航
            </li>
            <li>
              <strong>自動計算：</strong>content 模式會自動計算正確的高度和位置
            </li>
            <li>
              <strong>固定滾動：</strong>配合 stickyAside 可實現獨立滾動
            </li>
          </ul>
        </div>
      </div>

      {/* 響應式設計 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 響應式設計範例"
          description="內建響應式設計，自動適應不同螢幕尺寸，並提供手機版選單功能："
          code={`// 響應式佈局會自動適應螢幕尺寸
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
</Layout>`}
        >
          <MobileResponsiveShowcase />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>響應式特色：</strong>
          <ul>
            <li>
              <strong>自動隱藏側邊欄：</strong>在小螢幕（&lt;1024px）上自動隱藏側邊欄
            </li>
            <li>
              <strong>手機版選單按鈕：</strong>自動在 header 中顯示選單按鈕
            </li>
            <li>
              <strong>滑出式側邊欄：</strong>手機版側邊欄從側邊滑出，支援觸控操作
            </li>
            <li>
              <strong>遮罩背景：</strong>側邊欄開啟時顯示半透明遮罩
            </li>
            <li>
              <strong>自訂選單按鈕：</strong>可透過 mobileMenuButton 屬性自訂按鈕樣式
            </li>
            <li>
              <strong>狀態控制：</strong>支援受控和非受控模式管理側邊欄狀態
            </li>
          </ul>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Layout } from 'eonui';

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
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 自訂尺寸和固定位置
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
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">實際範例</h4>
          <pre className="component-docs-code">{`// 管理後台佈局
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
);`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🏗️ 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Layout 組件的所有功能，可以在你的項目中開始使用了！
          這個靈活的佈局系統可以幫助你快速建立各種頁面結構，從簡單的內容頁面到複雜的管理後台。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <LayoutDocs />,
    },
  },
  argTypes: {
    header: {
      control: { type: 'boolean' },
      description: '頁面標題區域內容',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        true: <DemoHeader />,
        false: undefined,
      },
    },
    aside: {
      control: { type: 'boolean' },
      description: '側邊欄內容',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        true: <DemoAside />,
        false: undefined,
      },
    },
    footer: {
      control: { type: 'boolean' },
      description: '頁腳內容',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      mapping: {
        true: <DemoFooter />,
        false: undefined,
      },
    },
    asidePosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: '側邊欄位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
    },
    asideWidth: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'auto'],
      description: '側邊欄寬度',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    headerHeight: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'auto'],
      description: '標題區域高度',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    footerHeight: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'auto'],
      description: '頁腳高度',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    stickyHeader: {
      control: { type: 'boolean' },
      description: '是否固定標題',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stickyFooter: {
      control: { type: 'boolean' },
      description: '是否固定頁腳',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stickyAside: {
      control: { type: 'boolean' },
      description: '是否固定側邊欄',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    spacing: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5, 6, 8],
      description: '內容區域間距',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    fullHeight: {
      control: { type: 'boolean' },
      description: '是否全螢幕高度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    asideHeight: {
      control: { type: 'select' },
      options: ['full', 'content'],
      description: '側邊欄高度模式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'content' },
      },
    },
    responsiveAside: {
      control: { type: 'boolean' },
      description: '響應式側邊欄（在小螢幕上隱藏）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    mobileMenuButtonClassName: {
      control: { type: 'text' },
      description: '手機版選單按鈕的 CSS 類別，用於自定義樣式',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的 <Primary />
export const Docs: Story = {
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
    responsiveAside: true,
  },
  render: (args) => (
    <div style={{ height: '600px' }}>
      <Layout
        {...args}
        main={<DemoMain content="互動式範例主要內容" />}
      />
    </div>
  ),
};

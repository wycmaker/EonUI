import React, { useState } from 'react';

import { cn } from '@/utils/cn';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 頁面標題區域內容
   */
  header?: React.ReactNode;
  /**
   * 側邊欄內容
   */
  aside?: React.ReactNode;
  /**
   * 主要內容區域
   */
  main: React.ReactNode;
  /**
   * 頁腳內容
   */
  footer?: React.ReactNode;
  /**
   * 側邊欄位置
   */
  asidePosition?: 'left' | 'right';
  /**
   * 側邊欄寬度
   */
  asideWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /**
   * 標題區域高度
   */
  headerHeight?: 'sm' | 'md' | 'lg' | 'auto';
  /**
   * 頁腳高度
   */
  footerHeight?: 'sm' | 'md' | 'lg' | 'auto';
  /**
   * 側邊欄高度模式
   */
  asideHeight?: 'full' | 'content';
  /**
   * 是否固定標題
   */
  stickyHeader?: boolean;
  /**
   * 是否固定頁腳
   */
  stickyFooter?: boolean;
  /**
   * 是否固定側邊欄
   */
  stickyAside?: boolean;
  /**
   * 內容區域間距
   */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8;
  /**
   * 是否全螢幕高度
   */
  fullHeight?: boolean;
  /**
   * 響應式側邊欄（在小螢幕上隱藏）
   */
  responsiveAside?: boolean;
  /**
   * 手機版選單按鈕的 CSS 類別
   */
  mobileMenuButtonClassName?: string;
}

// 側邊欄寬度樣式
const asideWidthStyles = {
  sm: 'w-48', // 192px
  md: 'w-64', // 256px
  lg: 'w-80', // 320px
  xl: 'w-96', // 384px
  auto: 'w-auto',
};

// 標題高度樣式
const headerHeightStyles = {
  sm: 'h-12', // 48px
  md: 'h-16', // 64px
  lg: 'h-20', // 80px
  auto: 'h-auto',
};

// 頁腳高度樣式
const footerHeightStyles = {
  sm: 'h-12', // 48px
  md: 'h-16', // 64px
  lg: 'h-20', // 80px
  auto: 'h-auto',
};

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      className,
      header,
      aside,
      main,
      footer,
      asidePosition = 'left',
      asideWidth = 'md',
      headerHeight = 'md',
      footerHeight = 'md',
      asideHeight = 'content',
      stickyHeader = false,
      stickyFooter = false,
      stickyAside = false,
      spacing = 0,
      fullHeight = true,
      responsiveAside = true,
      mobileMenuButtonClassName,
      ...props
    },
    ref,
  ) => {
    // 內部狀態管理手機版側邊欄
    const [mobileAsideOpen, setMobileAsideOpen] = useState(false);

    // 預設選單按鈕
    const defaultMenuButton = (
      <button
        onClick={() => setMobileAsideOpen(!mobileAsideOpen)}
        className={cn(
          'lg:hidden ml-1 px-2 py-1 text-current focus:outline-none transition-colors duration-200 flex items-center justify-center',
        )}
        aria-label={mobileAsideOpen ? '關閉選單' : '開啟選單'}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {mobileAsideOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    );

    // 渲染標題區域
    const renderHeader = () => {
      return (
        header && (
          <header className={headerClasses}>
            {aside && responsiveAside ? (
              <div className="flex w-full h-full">
                <div
                  className={cn('lg:hidden flex items-center h-full', mobileMenuButtonClassName)}
                >
                  {defaultMenuButton}
                </div>
                {header}
              </div>
            ) : (
              header
            )}
          </header>
        )
      );
    };

    // 渲染頁腳區域
    const renderFooter = () => {
      return footer && <footer className={footerClasses}>{footer}</footer>;
    };

    // 基礎容器樣式
    const containerClasses = cn('flex flex-col', fullHeight && 'min-h-screen', className);

    // 標題樣式
    const headerClasses = cn(
      'flex-shrink-0 w-full',
      headerHeightStyles[headerHeight],
      stickyHeader && 'sticky top-0 z-40',
      spacing > 0 && `p-${spacing}`,
      // 透明效果：當手機版側邊欄展開時
      mobileAsideOpen && 'lg:opacity-100 opacity-30 transition-opacity duration-300',
    );

    // 主要內容區域樣式（包含 aside 和 main）
    const contentClasses = cn('flex flex-1', asidePosition === 'right' && 'flex-row-reverse');

    // 側邊欄樣式
    const asideClasses = cn(
      'flex-shrink-0',
      asideWidthStyles[asideWidth],
      // 高度模式
      asideHeight === 'full' &&
        (stickyAside ? 'sticky top-0 h-screen overflow-y-auto' : 'h-screen overflow-y-auto'),
      asideHeight === 'content' &&
        stickyAside &&
        (header
          ? 'sticky h-[calc(100vh-theme(spacing.16))] overflow-y-auto'
          : 'sticky top-0 h-screen overflow-y-auto'),
      // 響應式處理
      responsiveAside && 'hidden lg:block',
      spacing > 0 && `p-${spacing}`,
    );

    // 手機版側邊欄樣式 - 使用 Bootstrap 風格的 CSS 類別
    const mobileAsideClasses = cn(
      // 基礎樣式
      'lg:hidden fixed inset-y-0 z-50 flex flex-col bg-white',
      // 位置
      asidePosition === 'left' ? 'left-0' : 'right-0',
      // 寬度
      asideWidthStyles[asideWidth],
      // 動畫類別 - 平滑過渡
      'transition-transform duration-300 ease-in-out',
      // 間距
      spacing > 0 && `p-${spacing}`,
    );

    // 手機版遮罩樣式 - 使用透明模糊效果
    const mobileOverlayClasses = cn(
      'lg:hidden fixed inset-0 z-40 backdrop-blur-sm transition-all duration-300',
      mobileAsideOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
    );

    // 主要內容樣式
    const mainClasses = cn(
      'flex-1 min-w-0', // min-w-0 防止內容溢出
      spacing > 0 && `p-${spacing}`,
      // 透明效果：當手機版側邊欄展開時
      mobileAsideOpen && 'lg:opacity-100 opacity-30 transition-opacity duration-300',
    );

    // 頁腳樣式
    const footerClasses = cn(
      'flex-shrink-0 w-full',
      footerHeightStyles[footerHeight],
      stickyFooter && 'sticky bottom-0 z-40',
      // 透明效果：當手機版側邊欄展開時
      mobileAsideOpen && 'lg:opacity-100 opacity-30 transition-opacity duration-300',
    );

    // 計算側邊欄的 top 位置（當 asideHeight 為 'content' 且有 header 時）
    const asideTopOffset =
      asideHeight === 'content' && header && stickyAside
        ? `top-[${headerHeightStyles[headerHeight].replace('h-', '')}]`
        : '';

    // 判斷是否使用全高度佈局
    const useFullHeightLayout = aside && asideHeight === 'full';

    return (
      <div
        ref={ref}
        className={containerClasses}
        {...props}
      >
        {/* 手機版遮罩 */}
        {aside && responsiveAside && (
          <div
            className={mobileOverlayClasses}
            onClick={() => setMobileAsideOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* 手機版側邊欄 */}
        {aside && responsiveAside && (
          <aside
            className={mobileAsideClasses}
            data-mobile-aside-open={mobileAsideOpen}
            style={{
              // 強制 transform 樣式，確保動畫能正常工作
              transform: mobileAsideOpen
                ? 'translateX(0)'
                : asidePosition === 'left'
                  ? 'translateX(-100%)'
                  : 'translateX(100%)',
            }}
          >
            {/* 手機版側邊欄關閉按鈕 - 浮動在 aside 上方 */}
            <button
              onClick={() => setMobileAsideOpen(false)}
              className={cn(
                'absolute top-4 z-10 p-2 rounded-md text-current hover:text-current transition-colors duration-200',
                asidePosition === 'left' ? 'right-4' : 'left-4',
              )}
              aria-label="關閉選單"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* 手機版側邊欄內容 */}
            <div className="flex-1 overflow-y-auto">{aside}</div>
          </aside>
        )}

        {useFullHeightLayout ? (
          /* 全高度佈局：aside 與 header/main/footer 並排 */
          <div className={cn('flex flex-1', asidePosition === 'right' && 'flex-row-reverse')}>
            {/* 桌面版全高度側邊欄 */}
            <aside className={asideClasses}>{aside}</aside>

            {/* 右側內容區域 */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* 手機版選單按鈕（當沒有 header 時） */}
              {!header && aside && responsiveAside && (
                <div className="lg:hidden p-4 border-b">{defaultMenuButton}</div>
              )}
              {/* 標題區域 */}
              {renderHeader()}

              {/* 主要內容 */}
              <main className={cn(mainClasses, 'flex-1')}>{main}</main>
              {/* 頁腳區域 */}
              {renderFooter()}
            </div>
          </div>
        ) : (
          /* 標準佈局：aside 在 content 區域內 */
          <>
            {/* 手機版選單按鈕（當沒有 header 時） */}
            {!header && aside && responsiveAside && (
              <div className="lg:hidden p-4 border-b">{defaultMenuButton}</div>
            )}

            {/* 標題區域 */}
            {renderHeader()}

            {/* 主要內容區域 */}
            <div className={contentClasses}>
              {/* 桌面版側邊欄 */}
              {aside && <aside className={cn(asideClasses, asideTopOffset)}>{aside}</aside>}

              {/* 主要內容 */}
              <main className={mainClasses}>{main}</main>
            </div>

            {/* 頁腳區域 */}
            {renderFooter()}
          </>
        )}
      </div>
    );
  },
);

Layout.displayName = 'Layout';

export { Layout };

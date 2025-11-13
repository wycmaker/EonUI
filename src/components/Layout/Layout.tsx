import React, { useState } from 'react';

import { cn } from '@/utils/cn';

/*
  Tailwind CSS Safelist - 確保所有動態 CSS 類別被包含在最終 CSS 中

  Layout 組件動態 spacing 類別：
  p-0 p-1 p-2 p-3 p-4 p-5 p-6 p-8
*/

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
   * 是否啟用桌面版側邊欄收合功能（大螢幕可收合）
   */
  collapsibleDesktop?: boolean;
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
      collapsibleDesktop = false,
      mobileMenuButtonClassName,
      ...props
    },
    ref,
  ) => {
    // 內部狀態管理手機版側邊欄
    const [mobileAsideOpen, setMobileAsideOpen] = useState(false);

    // 桌面版側邊欄收合狀態（預設展開）
    const [desktopAsideCollapsed, setDesktopAsideCollapsed] = useState(false);

    // 處理按鈕點擊事件（根據螢幕尺寸切換對應的側邊欄狀態）
    const handleToggleAside = () => {
      // 使用 matchMedia 判斷當前是否為大螢幕（lg 以上，1024px）
      const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;

      if (isLargeScreen && collapsibleDesktop) {
        // 大螢幕且啟用桌面版收合：切換桌面版側邊欄
        setDesktopAsideCollapsed(!desktopAsideCollapsed);
      } else if (!isLargeScreen && responsiveAside) {
        // 小螢幕且啟用響應式：切換手機版側邊欄
        setMobileAsideOpen(!mobileAsideOpen);
      }
    };

    // 判斷當前側邊欄是否展開（根據螢幕尺寸）
    const isAsideOpen = () => {
      const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
      if (isLargeScreen && collapsibleDesktop) {
        return !desktopAsideCollapsed;
      }
      return mobileAsideOpen;
    };

    // 共用選單按鈕（手機版和桌面版共用，統一使用漢堡選單樣式）
    const defaultMenuButton = (
      <button
        onClick={handleToggleAside}
        className={cn(
          'ml-1 px-2 py-1 text-current focus:outline-none items-center justify-center hover:bg-black hover:bg-opacity-5 rounded',
          // 小螢幕：只有在 responsiveAside 為 true 時顯示
          responsiveAside ? 'flex lg:hidden' : 'hidden',
          // 大螢幕：只有在 collapsibleDesktop 為 true 時顯示
          collapsibleDesktop && 'lg:flex',
        )}
        aria-label={isAsideOpen() ? '關閉選單' : '開啟選單'}
      >
        <svg
          className="h-6 w-6 lg:h-5 lg:w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {/* 統一使用漢堡選單圖示（三條線） */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    );

    // 渲染標題區域
    const renderHeader = () => {
      return (
        header && (
          <header className={headerClasses}>
            {aside && (responsiveAside || collapsibleDesktop) ? (
              <div className="flex w-full h-full items-center">
                <div className={cn('flex items-center h-full', mobileMenuButtonClassName)}>
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
      // sticky 定位
      stickyAside && 'sticky overflow-y-auto',
      // 非 sticky 的高度
      !stickyAside && (asideHeight === 'full' ? 'h-screen overflow-y-auto' : 'h-auto'),
      // 響應式處理：小螢幕隱藏
      responsiveAside && 'hidden lg:block',
      // 桌面版收合處理：大螢幕根據收合狀態顯示/隱藏（僅在啟用時）
      collapsibleDesktop && desktopAsideCollapsed && 'lg:hidden',
      // 收合動畫（僅在啟用桌面版收合時）
      collapsibleDesktop && 'lg:transition-all lg:duration-300 lg:ease-in-out',
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
      // 當所有區塊都是 sticky 時，main 需要有固定高度和獨立滾動
      stickyHeader && stickyFooter && stickyAside && 'overflow-y-auto',
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

    // 計算 aside 的樣式
    const getAsideStyles = (): React.CSSProperties => {
      if (!stickyAside) return {};

      const styles: React.CSSProperties = {};

      // 簡化高度計算邏輯
      let topValue = '0px';
      let heightValue = '100vh';

      // 計算 header 高度偏移
      if (header && stickyHeader) {
        switch (headerHeight) {
          case 'sm':
            topValue = '3rem';
            heightValue = 'calc(100vh - 3rem)';
            break;
          case 'md':
            topValue = '4rem';
            heightValue = 'calc(100vh - 4rem)';
            break;
          case 'lg':
            topValue = '5rem';
            heightValue = 'calc(100vh - 5rem)';
            break;
          default:
            topValue = '4rem';
            heightValue = 'calc(100vh - 4rem)';
            break;
        }
      }

      // 如果 footer 也是 sticky，需要再減去 footer 高度
      if (footer && stickyFooter) {
        let footerHeightValue = '4rem';
        switch (footerHeight) {
          case 'sm':
            footerHeightValue = '3rem';
            break;
          case 'md':
            footerHeightValue = '4rem';
            break;
          case 'lg':
            footerHeightValue = '5rem';
            break;
          default:
            footerHeightValue = '4rem';
            break;
        }

        if (header && stickyHeader) {
          heightValue = heightValue.replace(')', ` - ${footerHeightValue})`);
        } else {
          heightValue = `calc(100vh - ${footerHeightValue})`;
        }
      }

      styles.top = topValue;
      styles.height = heightValue;

      return styles;
    };

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
            <aside
              className={asideClasses}
              style={getAsideStyles()}
            >
              {aside}
            </aside>

            {/* 右側內容區域 */}
            <div className="flex flex-col flex-1 min-w-0">
              {/* 選單按鈕（當沒有 header 時） */}
              {!header && aside && (responsiveAside || collapsibleDesktop) && (
                <div className="p-4 border-b">{defaultMenuButton}</div>
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
            {/* 選單按鈕（當沒有 header 時） */}
            {!header && aside && (responsiveAside || collapsibleDesktop) && (
              <div className="p-4 border-b">{defaultMenuButton}</div>
            )}

            {/* 標題區域 */}
            {renderHeader()}

            {/* 主要內容區域 */}
            <div className={contentClasses}>
              {/* 桌面版側邊欄 */}
              {aside && (
                <aside
                  className={asideClasses}
                  style={getAsideStyles()}
                >
                  {aside}
                </aside>
              )}

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

import React, { useState, useCallback } from 'react';

import { cn } from '@/utils/cn';

import { useTabContext } from './hooks';
import { TabContext, type TabContextType } from './TabContext';

// Tab項目配置介面
export interface TabItem {
  /**
   * Tab項目的唯一識別碼
   */
  key: string;
  /**
   * Tab項目的標籤文字
   */
  label: string;
  /**
   * Tab項目的內容（當不使用路由模式時）
   */
  children?: React.ReactNode;
  /**
   * 當使用路由模式時的路由路徑
   */
  href?: string;
  /**
   * 是否禁用該Tab項目
   */
  disabled?: boolean;
  /**
   * Tab項目的圖示
   */
  icon?: React.ReactNode;
}

// Tab組件屬性介面
export interface TabProps {
  /**
   * Tab項目配置陣列
   */
  items?: TabItem[];
  /**
   * 預設激活的Tab項目key
   */
  defaultActiveKey?: string;
  /**
   * 當前激活的Tab項目key（受控模式）
   */
  activeKey?: string;
  /**
   * Tab項目切換時的回調函數
   */
  onChange?: (activeKey: string) => void;
  /**
   * Tab的樣式變體
   */
  variant?: 'underline' | 'button';
  /**
   * Tab的大小
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 是否使用路由模式
   */
  useRouter?: boolean;
  /**
   * 當前路由路徑（路由模式下用於判斷激活狀態）
   */
  currentPath?: string;
  /**
   * 自訂CSS類名
   */
  className?: string;
  /**
   * Tab容器的自訂CSS類名
   */
  tabsClassName?: string;
  /**
   * Tab內容區域的自訂CSS類名
   */
  contentClassName?: string;
  /**
   * Tab項目的自訂CSS類名
   */
  tabItemClassName?: string;
  /**
   * 激活Tab項目的自訂CSS類名
   */
  activeTabItemClassName?: string;
  /**
   * 子組件（當不使用items配置時）
   */
  children?: React.ReactNode;
}

// TabPane組件屬性介面
export interface TabPaneProps {
  /**
   * TabPane的唯一識別碼
   */
  key: string;
  /**
   * TabPane的標籤文字
   */
  tab: string;
  /**
   * 是否禁用該TabPane
   */
  disabled?: boolean;
  /**
   * TabPane的圖示
   */
  icon?: React.ReactNode;
  /**
   * TabPane的內容
   */
  children: React.ReactNode;
  /**
   * 自訂CSS類名
   */
  className?: string;
}

// 獲取樣式變體的函數
const getVariantStyles = (variant: 'underline' | 'button', size: 'sm' | 'md' | 'lg') => {
  const baseStyles = {
    container: 'flex',
    item: 'relative transition-all duration-200 ease-in-out focus:outline-none',
    activeItem: '',
  };

  const sizeStyles = {
    sm: {
      item: 'px-3 py-1.5 text-sm',
      gap: 'gap-1',
    },
    md: {
      item: 'px-4 py-2 text-sm',
      gap: 'gap-2',
    },
    lg: {
      item: 'px-6 py-3 text-base',
      gap: 'gap-3',
    },
  };

  if (variant === 'underline') {
    return {
      container: cn(baseStyles.container, 'border-b border-gray-200', sizeStyles[size].gap),
      item: cn(
        baseStyles.item,
        sizeStyles[size].item,
        'border-b-2 border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300',
        'disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:text-gray-400',
      ),
      activeItem: 'text-primary border-primary',
    };
  }

  return {
    container: cn(baseStyles.container, 'bg-gray-100 rounded-lg p-1', sizeStyles[size].gap),
    item: cn(
      baseStyles.item,
      sizeStyles[size].item,
      'rounded-md text-gray-600 hover:text-gray-800 hover:bg-white/60',
      'disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400',
    ),
    activeItem: 'bg-white text-primary shadow-sm',
  };
};

// Tab項目組件
const TabItem: React.FC<{
  item: TabItem;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  activeClassName?: string;
}> = ({ item, isActive, onClick, className, activeClassName }) => {
  const { variant, size, useRouter } = useTabContext();
  const styles = getVariantStyles(variant, size);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (item.disabled) return;

    if (useRouter && item.href) {
      // 在路由模式下，讓瀏覽器處理導航
      window.location.href = item.href;
      return;
    }

    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!item.disabled) {
        onClick();
      }
    }
  };

  const TabElement = useRouter && item.href ? 'a' : 'button';
  const elementProps = useRouter && item.href ? { href: item.href } : { type: 'button' as const };

  return (
    <TabElement
      {...elementProps}
      className={cn(styles.item, isActive && cn(styles.activeItem, activeClassName), className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={item.disabled}
      aria-selected={isActive}
      role="tab"
      tabIndex={item.disabled ? -1 : 0}
    >
      {item.icon && <span className="inline-flex items-center mr-2">{item.icon}</span>}
      {item.label}
    </TabElement>
  );
};

// TabPane組件
export const TabPane: React.FC<TabPaneProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('tab-pane', className)}
      {...props}
    >
      {children}
    </div>
  );
};

// 主要Tab組件
export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      items = [],
      defaultActiveKey,
      activeKey,
      onChange,
      variant = 'underline',
      size = 'md',
      useRouter = false,
      currentPath,
      className,
      tabsClassName,
      contentClassName,
      tabItemClassName,
      activeTabItemClassName,
      children,
      ...props
    },
    ref,
  ) => {
    // 處理Tab項目
    const tabItems = React.useMemo(() => {
      if (children) {
        // 從children中提取TabPane
        const panes: TabItem[] = [];
        React.Children.forEach(children, (child) => {
          if (React.isValidElement(child) && child.type === TabPane) {
            const paneProps = child.props as TabPaneProps;
            panes.push({
              key: paneProps.key,
              label: paneProps.tab,
              disabled: paneProps.disabled,
              icon: paneProps.icon,
              children: child,
            });
          }
        });
        return panes;
      }
      return items;
    }, [items, children]);

    // 確定初始激活的Tab
    const getInitialActiveKey = useCallback(() => {
      if (activeKey) return activeKey;
      if (defaultActiveKey) return defaultActiveKey;

      if (useRouter && currentPath) {
        // 路由模式下根據當前路徑確定激活Tab
        const matchedItem = tabItems.find((item) => item.href === currentPath);
        if (matchedItem) return matchedItem.key;
      }

      // 返回第一個未禁用的Tab
      const firstEnabledItem = tabItems.find((item) => !item.disabled);
      return firstEnabledItem?.key || '';
    }, [activeKey, defaultActiveKey, useRouter, currentPath, tabItems]);

    const [internalActiveKey, setInternalActiveKey] = useState(getInitialActiveKey);

    // 使用受控或非受控的activeKey
    const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

    // 更新激活Tab的函數
    const handleTabChange = useCallback(
      (key: string) => {
        if (activeKey === undefined) {
          setInternalActiveKey(key);
        }
        onChange?.(key);
      },
      [activeKey, onChange],
    );

    // 路由模式下更新激活狀態
    React.useEffect(() => {
      if (useRouter && currentPath) {
        const matchedItem = tabItems.find((item) => item.href === currentPath);
        if (matchedItem && matchedItem.key !== currentActiveKey) {
          handleTabChange(matchedItem.key);
        }
      }
    }, [useRouter, currentPath, tabItems, currentActiveKey, handleTabChange]);

    const styles = getVariantStyles(variant, size);

    const contextValue: TabContextType = {
      activeKey: currentActiveKey,
      setActiveKey: handleTabChange,
      variant,
      size,
      useRouter,
      currentPath,
      onChange,
    };

    // 獲取當前激活Tab的內容
    const activeTabContent = React.useMemo(() => {
      const activeItem = tabItems.find((item) => item.key === currentActiveKey);
      return activeItem?.children || null;
    }, [tabItems, currentActiveKey]);

    return (
      <TabContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn('tab-container', className)}
          {...props}
        >
          {/* Tab導航區域 */}
          <div
            className={cn(styles.container, tabsClassName)}
            role="tablist"
            aria-orientation="horizontal"
          >
            {tabItems.map((item) => (
              <TabItem
                key={item.key}
                item={item}
                isActive={item.key === currentActiveKey}
                onClick={() => handleTabChange(item.key)}
                className={tabItemClassName}
                activeClassName={activeTabItemClassName}
              />
            ))}
          </div>

          {/* Tab內容區域（非路由模式） */}
          {!useRouter && activeTabContent && (
            <div
              className={cn('tab-content mt-4', contentClassName)}
              role="tabpanel"
            >
              {activeTabContent}
            </div>
          )}
        </div>
      </TabContext.Provider>
    );
  },
);

Tab.displayName = 'Tab';

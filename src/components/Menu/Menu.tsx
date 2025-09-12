import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';

import { cn } from '@/utils/cn';
import { ChevronRightIcon } from '@/utils/icons';

// Menu項目配置介面
export interface MenuItem {
  /**
   * Menu項目的唯一識別碼
   */
  key: string;
  /**
   * Menu項目的標籤文字
   */
  label: string;
  /**
   * Menu項目的路由路徑
   */
  href?: string;
  /**
   * Menu項目的圖示
   */
  icon?: React.ReactNode;
  /**
   * 是否禁用該Menu項目
   */
  disabled?: boolean;
  /**
   * 子選單項目（雙層選單）
   */
  children?: MenuItem[];
  /**
   * 用於手動設定 active 狀態的路徑模式
   * 支援 string[] 用於多路徑匹配
   */
  activePatterns?: string[];
}

// Menu組件屬性介面
export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Menu項目配置陣列
   */
  items: MenuItem[];
  /**
   * 當前路由路徑（用於自動判斷 active 狀態）
   */
  currentPath?: string;
  /**
   * 手動指定當前激活的項目key
   */
  activeKey?: string;
  /**
   * 預設展開的項目keys
   */
  defaultOpenKeys?: string[];
  /**
   * 當前展開的項目keys（受控模式）
   */
  openKeys?: string[];
  /**
   * Menu模式
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * 是否可折疊
   */
  collapsed?: boolean;
  /**
   * 縮排大小
   */
  indent?: number;
  /**
   * 主題色彩
   */
  theme?: 'light' | 'dark';
  /**
   * 點擊選單項目時的回調
   */
  onSelect?: (key: string, item: MenuItem) => void;
  /**
   * 展開/收合項目時的回調
   */
  onOpenChange?: (openKeys: string[]) => void;
}

// Menu項目組件屬性
interface MenuItemComponentProps {
  item: MenuItem;
  level: number;
  isActive: boolean;
  isOpen: boolean;
  hasChildren: boolean;
  collapsed: boolean;
  indent: number;
  theme: 'light' | 'dark';
  currentPath: string;
  activeKey: string;
  openKeys: string[];
  onSelect: (key: string, item: MenuItem) => void;
  onToggle: (key: string) => void;
  getActiveKey: (items: MenuItem[], path: string) => string;
  isItemActive: (item: MenuItem, path: string, activeKey: string) => boolean;
}

// Menu項目組件
const MenuItemComponent: React.FC<MenuItemComponentProps> = ({
  item,
  level,
  isActive,
  isOpen,
  hasChildren,
  collapsed,
  indent,
  theme,
  currentPath,
  activeKey,
  openKeys,
  onSelect,
  onToggle,
  getActiveKey: getActiveKey,
  isItemActive,
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (item.disabled) return;

      if (hasChildren && !collapsed) {
        // 只有在非收合模式下才允許切換子選單
        onToggle(item.key);
      } else {
        onSelect(item.key, item);
        // 如果有 href，進行路由跳轉
        if (item.href) {
          window.location.href = item.href;
        }
      }
    },
    [item, hasChildren, collapsed, onSelect, onToggle],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
          break;
        case 'Escape':
          if (hasChildren && isOpen && !collapsed) {
            e.preventDefault();
            onToggle(item.key);
          }
          break;
        case 'ArrowLeft':
          if (hasChildren && isOpen && !collapsed) {
            e.preventDefault();
            onToggle(item.key);
          }
          break;
        case 'ArrowRight':
          if (hasChildren && !isOpen && !collapsed) {
            e.preventDefault();
            onToggle(item.key);
          }
          break;
        case 'ArrowDown':
        case 'ArrowUp':
          // 讓父組件處理方向鍵導航
          break;
        default:
          break;
      }
    },
    [handleClick, hasChildren, isOpen, collapsed, onToggle, item.key],
  );

  // 樣式計算
  const themeStyles = {
    light: {
      item: cn(
        'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
        isActive && 'text-primary bg-primary-50',
      ),
      icon: 'text-gray-500',
      arrow: 'text-gray-400',
    },
    dark: {
      item: cn(
        'text-gray-300 hover:text-white hover:bg-gray-700',
        isActive && 'text-white bg-primary-600',
      ),
      icon: 'text-gray-400',
      arrow: 'text-gray-400',
    },
  };

  const currentTheme = themeStyles[theme];
  const paddingLeft = `${level * indent + 16}px`;

  return (
    <li className="list-none">
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 text-sm cursor-pointer transition-all duration-200 select-none',
          currentTheme.item,
          item.disabled && 'cursor-not-allowed opacity-50',
          collapsed && level === 0 && 'justify-center px-2',
        )}
        style={{ paddingLeft: collapsed && level === 0 ? undefined : paddingLeft }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="menuitem"
        tabIndex={item.disabled ? -1 : 0}
        aria-disabled={item.disabled}
        aria-expanded={hasChildren ? isOpen : undefined}
        aria-current={isActive ? 'page' : undefined}
        aria-haspopup={hasChildren ? 'menu' : undefined}
        aria-level={level + 1}
        aria-label={`${item.label}${hasChildren ? (isOpen ? ' (已展開)' : ' (可展開)') : ''}${isActive ? ' (當前頁面)' : ''}`}
      >
        <div className="flex items-center min-w-0 flex-1">
          {/* Icon 容器 - 固定寬度確保對齊 */}
          <div
            className={cn(
              'flex-shrink-0 flex items-center justify-center',
              collapsed && level === 0 ? 'w-5' : 'w-5 mr-3',
            )}
          >
            {item.icon && (
              <span className={cn('flex items-center justify-center', currentTheme.icon)}>
                {item.icon}
              </span>
            )}
          </div>

          {/* Label */}
          {(!collapsed || level > 0) && <span className="truncate">{item.label}</span>}
        </div>

        {hasChildren && (!collapsed || level > 0) && (
          <span
            className={cn(
              'flex-shrink-0 ml-2 transition-transform duration-300 ease-in-out',
              currentTheme.arrow,
              isOpen && 'rotate-90',
            )}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        )}
      </div>

      {/* 子選單 - 收合模式下不顯示 */}
      {hasChildren && item.children && !collapsed && (
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out transform-gpu',
            isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2',
          )}
          role="menu"
          aria-hidden={!isOpen}
          style={{
            transitionProperty: 'max-height, opacity, transform',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className={cn('transition-all duration-200 ease-out', isOpen ? 'pt-1' : 'pt-0')}>
            <MenuList
              items={item.children}
              level={level + 1}
              currentPath={currentPath}
              activeKey={activeKey}
              openKeys={openKeys}
              collapsed={collapsed}
              indent={indent}
              theme={theme}
              onSelect={onSelect}
              onToggle={onToggle}
              getActiveKey={getActiveKey}
              isItemActive={isItemActive}
            />
          </div>
        </div>
      )}
    </li>
  );
};

// Menu列表組件屬性
interface MenuListProps {
  items: MenuItem[];
  level: number;
  currentPath: string;
  activeKey: string;
  openKeys: string[];
  collapsed: boolean;
  indent: number;
  theme: 'light' | 'dark';
  onSelect: (key: string, item: MenuItem) => void;
  onToggle: (key: string) => void;
  getActiveKey: (items: MenuItem[], currentPath: string) => string;
  isItemActive: (item: MenuItem, currentPath: string, activeKey: string) => boolean;
}

// Menu列表組件
const MenuList: React.FC<MenuListProps> = ({
  items,
  level,
  currentPath,
  activeKey,
  openKeys,
  collapsed,
  indent,
  theme,
  onSelect,
  onToggle,
  getActiveKey: getActiveKey,
  isItemActive,
}) => {
  return (
    <ul className={cn('space-y-1', level === 0 && 'p-2')}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isActive = isItemActive(item, currentPath, activeKey);
        const isOpen = openKeys.includes(item.key);

        return (
          <MenuItemComponent
            key={item.key}
            item={item}
            level={level}
            isActive={isActive}
            isOpen={isOpen}
            hasChildren={hasChildren}
            collapsed={collapsed}
            indent={indent}
            theme={theme}
            currentPath={currentPath}
            activeKey={activeKey}
            openKeys={openKeys}
            onSelect={onSelect}
            onToggle={onToggle}
            getActiveKey={getActiveKey}
            isItemActive={isItemActive}
          />
        );
      })}
    </ul>
  );
};

// 主要Menu組件
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      items,
      currentPath = '',
      activeKey,
      defaultOpenKeys = [],
      openKeys,
      mode = 'vertical',
      collapsed = false,
      indent = 16,
      theme = 'light',
      className,
      onSelect,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
    // 內部狀態管理
    const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys);
    const currentOpenKeys = openKeys ?? internalOpenKeys;
    const lastActiveKeyRef = useRef<string>('');

    // 判斷項目是否活躍
    const isItemActive = useCallback(
      (item: MenuItem, path: string, manualActiveKey?: string): boolean => {
        // 如果有手動設定的 activeKey，優先使用
        if (manualActiveKey) {
          return item.key === manualActiveKey;
        }

        // 檢查 activePatterns
        if (item.activePatterns && item.activePatterns.length > 0) {
          return item.activePatterns.some((pattern) => path.includes(pattern));
        }

        // 檢查 href
        if (item.href) {
          return path.includes(item.href);
        }

        return false;
      },
      [],
    );

    // 獲取當前活躍的項目key
    const getActiveKey = useCallback(
      (menuItems: MenuItem[], path: string): string => {
        if (!Array.isArray(menuItems)) {
          return '';
        }
        for (const item of menuItems) {
          if (isItemActive(item, path)) {
            return item.key;
          }
          if (item.children && Array.isArray(item.children)) {
            const childActiveKey = getActiveKey(item.children, path);
            if (childActiveKey) {
              return childActiveKey;
            }
          }
        }
        return '';
      },
      [isItemActive],
    );

    // 計算當前活躍的項目
    const computedActiveKey = useMemo(() => {
      return activeKey || getActiveKey(items, currentPath);
    }, [activeKey, items, currentPath, getActiveKey]);

    // 自動展開包含活躍項目的父級選單
    const getParentKeys = useCallback(
      (menuItems: MenuItem[], targetKey: string, parents: string[] = []): string[] => {
        if (!Array.isArray(menuItems)) {
          return [];
        }
        for (const item of menuItems) {
          const currentPath = [...parents, item.key];

          if (item.key === targetKey) {
            return parents;
          }

          if (item.children && Array.isArray(item.children)) {
            const result = getParentKeys(item.children, targetKey, currentPath);
            if (result.length > 0 || item.children.some((child) => child.key === targetKey)) {
              return currentPath;
            }
          }
        }
        return [];
      },
      [],
    );

    // 當活躍項目變化時，自動展開相關的父級選單（僅在 active key 變化時觸發）
    useEffect(() => {
      if (computedActiveKey && computedActiveKey !== lastActiveKeyRef.current) {
        lastActiveKeyRef.current = computedActiveKey;
        const parentKeys = getParentKeys(items, computedActiveKey);
        if (parentKeys.length > 0) {
          // 使用函數式更新避免依賴問題
          if (openKeys === undefined) {
            setInternalOpenKeys((prevKeys) => {
              // 只添加尚未打開的父級選單，避免不必要的狀態更新
              const unopenedParentKeys = parentKeys.filter((key) => !prevKeys.includes(key));
              if (unopenedParentKeys.length > 0) {
                return Array.from(new Set([...prevKeys, ...unopenedParentKeys]));
              }
              return prevKeys; // 沒有變化時返回原狀態，避免重新渲染
            });
          } else {
            // 受控模式下，只添加尚未打開的父級選單
            const currentKeys = currentOpenKeys; // 讀取當前值，但不作為依賴
            const unopenedParentKeys = parentKeys.filter((key) => !currentKeys.includes(key));
            if (unopenedParentKeys.length > 0) {
              const newOpenKeys = Array.from(new Set([...currentKeys, ...unopenedParentKeys]));
              onOpenChange?.(newOpenKeys);
            }
          }
        }
      }
    }, [computedActiveKey, items, getParentKeys, openKeys, onOpenChange]); // eslint-disable-line react-hooks/exhaustive-deps

    // 收合模式變化時的處理
    useEffect(() => {
      if (collapsed) {
        // 收合時關閉所有子選單
        if (openKeys === undefined) {
          setInternalOpenKeys([]);
        } else {
          onOpenChange?.([]);
        }
      } else {
        // 展開時重新打開包含 active 項目的父級選單
        if (computedActiveKey) {
          const parentKeys = getParentKeys(items, computedActiveKey);
          if (parentKeys.length > 0) {
            if (openKeys === undefined) {
              setInternalOpenKeys((prevKeys) => {
                // 只添加尚未打開的父級選單
                const unopenedParentKeys = parentKeys.filter((key) => !prevKeys.includes(key));
                if (unopenedParentKeys.length > 0) {
                  return Array.from(new Set([...prevKeys, ...unopenedParentKeys]));
                }
                return prevKeys;
              });
            } else {
              // 受控模式下，讀取當前值但不作為依賴
              const currentKeys = currentOpenKeys;
              const unopenedParentKeys = parentKeys.filter((key) => !currentKeys.includes(key));
              if (unopenedParentKeys.length > 0) {
                const newOpenKeys = Array.from(new Set([...currentKeys, ...unopenedParentKeys]));
                onOpenChange?.(newOpenKeys);
              }
            }
          }
        }
      }
    }, [collapsed, computedActiveKey, items, getParentKeys, openKeys, onOpenChange]); // eslint-disable-line react-hooks/exhaustive-deps

    // 處理選單項目點擊
    const handleSelect = useCallback(
      (key: string, item: MenuItem) => {
        onSelect?.(key, item);
      },
      [onSelect],
    );

    // 處理展開/收合
    const handleToggle = useCallback(
      (key: string) => {
        const newOpenKeys = currentOpenKeys.includes(key)
          ? currentOpenKeys.filter((k) => k !== key)
          : [...currentOpenKeys, key];

        if (openKeys === undefined) {
          setInternalOpenKeys(newOpenKeys);
        }
        onOpenChange?.(newOpenKeys);
      },
      [currentOpenKeys, openKeys, onOpenChange],
    );

    // 容器樣式
    const containerStyles = cn(
      'bg-white border-r border-gray-200 h-full overflow-auto',
      theme === 'dark' && 'bg-gray-800 border-gray-700',
      mode === 'horizontal' && 'border-r-0 border-b',
      className,
    );

    return (
      <nav
        ref={ref}
        className={containerStyles}
        role="navigation"
        aria-label="主選單"
        aria-orientation={mode}
        {...props}
      >
        <MenuList
          items={items}
          level={0}
          currentPath={currentPath}
          activeKey={computedActiveKey}
          openKeys={currentOpenKeys}
          collapsed={collapsed}
          indent={indent}
          theme={theme}
          onSelect={handleSelect}
          onToggle={handleToggle}
          getActiveKey={getActiveKey}
          isItemActive={isItemActive}
        />
      </nav>
    );
  },
);

Menu.displayName = 'Menu';

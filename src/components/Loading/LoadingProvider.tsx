import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

import { Loading } from './Loading';
import { LoadingServiceOptions } from './service';

export interface LoadingContextValue {
  /** 顯示全屏 Loading */
  showLoading: (options?: Omit<LoadingServiceOptions, 'target' | 'fullscreen'>) => void;
  /** 隱藏全屏 Loading */
  hideLoading: () => void;
  /** Loading 是否顯示中 */
  loading: boolean;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined);

export interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingOptions, setLoadingOptions] = useState<
    Omit<LoadingServiceOptions, 'target' | 'fullscreen'>
  >({});

  const showLoading = useCallback(
    (options: Omit<LoadingServiceOptions, 'target' | 'fullscreen'> = {}) => {
      setLoadingOptions(options);
      setLoading(true);
    },
    [],
  );

  const hideLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const contextValue: LoadingContextValue = {
    showLoading,
    hideLoading,
    loading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
      <Loading
        visible={loading}
        fullscreen={true}
        text={loadingOptions.text}
        icon={loadingOptions.icon}
        maskOpacity={loadingOptions.maskOpacity}
        onMaskClick={hideLoading}
      />
    </LoadingContext.Provider>
  );
};

/**
 * 使用 Loading Context 的 Hook
 * @returns LoadingContextValue
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = (): LoadingContextValue => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

LoadingProvider.displayName = 'LoadingProvider';

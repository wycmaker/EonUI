import { useState, useCallback, DragEvent } from 'react';

export interface UseDragAndDropOptions {
  /**
   * 是否啟用拖拽功能
   */
  enabled?: boolean;
  /**
   * 拖拽進入時的回調
   */
  onDragEnter?: (event: DragEvent<HTMLElement>) => void;
  /**
   * 拖拽離開時的回調
   */
  onDragLeave?: (event: DragEvent<HTMLElement>) => void;
  /**
   * 拖拽結束時的回調
   */
  onDrop?: (files: File[], event: DragEvent<HTMLElement>) => void;
  /**
   * 檔案類型驗證
   */
  accept?: string;
  /**
   * 最大檔案數量
   */
  maxFiles?: number;
}

export interface UseDragAndDropReturn {
  /**
   * 是否正在拖拽
   */
  isDragging: boolean;
  /**
   * 拖拽事件處理器
   */
  dragProps: {
    onDragOver: (event: DragEvent<HTMLElement>) => void;
    onDragEnter: (event: DragEvent<HTMLElement>) => void;
    onDragLeave: (event: DragEvent<HTMLElement>) => void;
    onDrop: (event: DragEvent<HTMLElement>) => void;
  };
}

/**
 * 拖拽檔案處理 Hook
 */
export const useDragAndDrop = (options: UseDragAndDropOptions = {}): UseDragAndDropReturn => {
  const { enabled = true, onDragEnter, onDragLeave, onDrop, accept, maxFiles } = options;

  const [isDragging, setIsDragging] = useState(false);
  const [_dragCounter, setDragCounter] = useState(0);

  const validateFiles = useCallback(
    (files: File[]): File[] => {
      let validFiles = Array.from(files);

      // 檔案類型驗證
      if (accept) {
        const acceptTypes = accept.split(',').map((type) => type.trim().toLowerCase());
        validFiles = validFiles.filter((file) => {
          return acceptTypes.some((acceptType) => {
            if (acceptType.startsWith('.')) {
              // 副檔名檢查
              const extension = acceptType.slice(1);
              return file.name.toLowerCase().endsWith(`.${extension}`);
            } else if (acceptType.includes('*')) {
              // 通配符檢查
              const [mainType] = acceptType.split('/');
              return file.type.startsWith(mainType + '/');
            } else {
              // 完整 MIME 類型檢查
              return file.type === acceptType;
            }
          });
        });
      }

      // 檔案數量限制
      if (maxFiles && validFiles.length > maxFiles) {
        validFiles = validFiles.slice(0, maxFiles);
      }

      return validFiles;
    },
    [accept, maxFiles],
  );

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLElement>) => {
      if (!enabled) return;

      event.preventDefault();
      event.stopPropagation();
    },
    [enabled],
  );

  const handleDragEnter = useCallback(
    (event: DragEvent<HTMLElement>) => {
      if (!enabled) return;

      event.preventDefault();
      event.stopPropagation();

      setDragCounter((prev) => prev + 1);

      if (!isDragging) {
        setIsDragging(true);
      }

      onDragEnter?.(event);
    },
    [enabled, isDragging, onDragEnter],
  );

  const handleDragLeave = useCallback(
    (event: DragEvent<HTMLElement>) => {
      if (!enabled) return;

      event.preventDefault();
      event.stopPropagation();

      setDragCounter((prev) => {
        const newCounter = prev - 1;
        if (newCounter === 0) {
          setIsDragging(false);
        }
        return newCounter;
      });

      onDragLeave?.(event);
    },
    [enabled, onDragLeave],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLElement>) => {
      if (!enabled) return;

      event.preventDefault();
      event.stopPropagation();

      setIsDragging(false);
      setDragCounter(0);

      const files = Array.from(event.dataTransfer.files);
      const validFiles = validateFiles(files);

      if (validFiles.length > 0) {
        onDrop?.(validFiles, event);
      }
    },
    [enabled, validateFiles, onDrop],
  );

  return {
    isDragging,
    dragProps: {
      onDragOver: handleDragOver,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
  };
};

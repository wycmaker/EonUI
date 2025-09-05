import React, { useState, useRef } from 'react';

import { useDragAndDrop } from '@/hooks';
import { cn } from '@/utils/cn';
import { generateFileUid, formatFileSize, isImageFile, createFilePreview } from '@/utils/fileUtils';
import {
  combineFormStyles,
  ComponentVariant,
  ComponentSize,
  ComponentStatus,
} from '@/utils/formStyles';
import {
  ClearIcon,
  SpinnerIcon,
  UploadIcon,
  ImageIcon,
  DocumentIcon,
  PreviewIcon,
  CheckIcon,
} from '@/utils/icons';

export interface UploadFile {
  uid: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'done' | 'error' | 'removed';
  percent?: number;
  response?: unknown;
  error?: unknown;
  url?: string;
}

export interface UploadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onDrop'> {
  /**
   * 上傳組件的視覺樣式變體
   */
  variant?: ComponentVariant;
  /**
   * 上傳組件的大小
   */
  size?: ComponentSize;
  /**
   * 上傳組件的狀態
   */
  status?: ComponentStatus;
  /**
   * 是否支援多檔案上傳
   */
  multiple?: boolean;
  /**
   * 接受的檔案類型
   */
  accept?: string;
  /**
   * 最大檔案大小（bytes）
   */
  maxSize?: number;
  /**
   * 最大檔案數量
   */
  maxCount?: number;
  /**
   * 是否支援拖拽上傳
   */
  dragger?: boolean;
  /**
   * 上傳列表顯示類型
   */
  listType?: 'text' | 'picture' | 'picture-card';
  /**
   * 是否顯示上傳列表
   */
  showUploadList?: boolean;
  /**
   * 檔案列表
   */
  fileList?: UploadFile[];
  /**
   * 預設檔案列表
   */
  defaultFileList?: UploadFile[];
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 自訂上傳實作
   */
  customRequest?: (options: {
    file: File;
    onProgress: (percent: number) => void;
    onSuccess: (response?: unknown) => void;
    onError: (error: unknown) => void;
  }) => void;
  /**
   * 上傳前的回調，可用於檔案驗證
   */
  beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<boolean>;
  /**
   * 檔案上傳時的回調
   */
  onChange?: (info: { file: UploadFile; fileList: UploadFile[] }) => void;
  /**
   * 檔案移除時的回調
   */
  onRemove?: (file: UploadFile) => boolean | Promise<boolean>;
  /**
   * 點擊檔案連結或預覽圖時的回調
   */
  onPreview?: (file: UploadFile) => void;
  /**
   * 拖拽檔案時的回調
   */
  onDrop?: (files: File[]) => void;
  /**
   * 上傳區域內容
   */
  children?: React.ReactNode;
}

// 使用共用的檔案工具函數

// 上傳列表組件
interface UploadListProps {
  items: UploadFile[];
  listType: 'text' | 'picture' | 'picture-card';
  onRemove: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
  disabled?: boolean;
}

const UploadList: React.FC<UploadListProps> = ({
  items,
  listType,
  onRemove,
  onPreview,
  disabled = false,
}) => {
  if (items.length === 0) return null;

  const renderTextList = () => (
    <div className="mt-4 space-y-2">
      {items.map((file) => (
        <div
          key={file.uid}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-md border"
        >
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {/* 檔案圖示 */}
            <div className="flex-shrink-0">
              {isImageFile(file) ? (
                <ImageIcon className="h-5 w-5 text-blue-500" />
              ) : (
                <DocumentIcon className="h-5 w-5 text-gray-500" />
              )}
            </div>

            {/* 檔案資訊 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onPreview?.(file)}
                  className="text-sm font-medium text-primary hover:text-primary-dark truncate cursor-pointer"
                  disabled={disabled}
                >
                  {file.name}
                </button>
                {file.status === 'uploading' && <SpinnerIcon className="h-4 w-4 text-primary" />}
                {file.status === 'done' && <CheckIcon className="h-4 w-4 text-success" />}
                {file.status === 'error' && <ClearIcon className="h-4 w-4 text-error" />}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formatFileSize(file.size)}
                {file.status === 'uploading' && file.percent !== undefined && (
                  <span className="ml-2">({file.percent}%)</span>
                )}
              </div>
              {/* 進度條 */}
              {file.status === 'uploading' && file.percent !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div
                    className="bg-primary h-1 rounded-full transition-all duration-300"
                    style={{ width: `${file.percent}%` }}
                  />
                </div>
              )}
            </div>

            {/* 操作按鈕 */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => onRemove(file)}
                disabled={disabled}
                className="text-gray-400 hover:text-error focus:text-error focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="移除檔案"
              >
                <ClearIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPictureList = () => (
    <div className="mt-4 space-y-2">
      {items.map((file) => (
        <div
          key={file.uid}
          className="flex items-center justify-between p-2 bg-gray-50 rounded-md border"
        >
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            {/* 預覽圖 */}
            <div className="flex-shrink-0 w-12 h-12 rounded border overflow-hidden bg-gray-100">
              {isImageFile(file) && file.url ? (
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => onPreview?.(file)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* 檔案資訊 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900 truncate">{file.name}</span>
                {file.status === 'uploading' && <SpinnerIcon className="h-4 w-4 text-primary" />}
                {file.status === 'done' && <CheckIcon className="h-4 w-4 text-success" />}
                {file.status === 'error' && <ClearIcon className="h-4 w-4 text-error" />}
              </div>
              <div className="text-xs text-gray-500">
                {formatFileSize(file.size)}
                {file.status === 'uploading' && file.percent !== undefined && (
                  <span className="ml-2">({file.percent}%)</span>
                )}
              </div>
              {/* 進度條 */}
              {file.status === 'uploading' && file.percent !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div
                    className="bg-primary h-1 rounded-full transition-all duration-300"
                    style={{ width: `${file.percent}%` }}
                  />
                </div>
              )}
            </div>

            {/* 操作按鈕 */}
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => onRemove(file)}
                disabled={disabled}
                className="text-gray-400 hover:text-error focus:text-error focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="移除檔案"
              >
                <ClearIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPictureCardList = () => (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((file) => (
        <div
          key={file.uid}
          className="relative group border rounded-lg overflow-hidden bg-gray-50 aspect-square"
        >
          {/* 預覽內容 */}
          <div className="w-full h-full flex items-center justify-center">
            {isImageFile(file) && file.url ? (
              <img
                src={file.url}
                alt={file.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <DocumentIcon className="h-8 w-8 text-gray-400" />
              </div>
            )}
          </div>

          {/* 狀態指示器 */}
          {file.status === 'uploading' && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <SpinnerIcon className="h-6 w-6 mx-auto mb-2" />
                <div className="text-xs">{file.percent || 0}%</div>
              </div>
            </div>
          )}

          {file.status === 'error' && (
            <div className="absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center">
              <ClearIcon className="h-6 w-6 text-white" />
            </div>
          )}

          {/* 操作遮罩 */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              {file.url && (
                <button
                  type="button"
                  onClick={() => onPreview?.(file)}
                  className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all"
                  aria-label="預覽"
                >
                  <PreviewIcon className="h-4 w-4 text-gray-700" />
                </button>
              )}
              <button
                type="button"
                onClick={() => onRemove(file)}
                disabled={disabled}
                className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="移除檔案"
              >
                <ClearIcon className="h-4 w-4 text-gray-700" />
              </button>
            </div>
          </div>

          {/* 檔案名稱 */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2">
            <div
              className="text-xs truncate"
              title={file.name}
            >
              {file.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  switch (listType) {
    case 'picture':
      return renderPictureList();
    case 'picture-card':
      return renderPictureCardList();
    default:
      return renderTextList();
  }
};

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      status = 'default',
      multiple = false,
      accept,
      maxSize,
      maxCount,
      dragger = false,
      listType = 'text',
      showUploadList = true,
      fileList,
      defaultFileList = [],
      disabled = false,
      customRequest,
      beforeUpload,
      onChange,
      onRemove,
      onPreview,
      onDrop,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalFileList, setInternalFileList] = useState<UploadFile[]>(defaultFileList);
    const inputRef = useRef<HTMLInputElement>(null);

    const currentFileList = fileList ?? internalFileList;

    // 拖拽處理 hook
    const { isDragging, dragProps } = useDragAndDrop({
      enabled: dragger && !disabled,
      accept,
      maxFiles: maxCount,
      onDrop: (files) => {
        onDrop?.(files);
        handleFiles(files);
      },
    });

    // 檔案驗證
    const validateFile = (file: File): boolean => {
      // 檔案大小檢查
      if (maxSize && file.size > maxSize) {
        return false;
      }

      // 檔案數量檢查
      if (maxCount && currentFileList.length >= maxCount) {
        return false;
      }

      return true;
    };

    // 模擬上傳進度
    const simulateUpload = (uploadFile: UploadFile): void => {
      if (customRequest) {
        // 使用自訂上傳
        const file = new File([], uploadFile.name, { type: uploadFile.type });
        customRequest({
          file,
          onProgress: (percent) => {
            updateFileList(uploadFile.uid, { percent });
          },
          onSuccess: (response) => {
            updateFileList(uploadFile.uid, { status: 'done', percent: 100, response });
          },
          onError: (error) => {
            updateFileList(uploadFile.uid, { status: 'error', error });
          },
        });
      } else {
        // 模擬上傳進度
        let progress = 0;
        const timer = setInterval(() => {
          progress += Math.random() * 30;
          if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            updateFileList(uploadFile.uid, { status: 'done', percent: 100 });
          } else {
            updateFileList(uploadFile.uid, { percent: Math.floor(progress) });
          }
        }, 200);
      }
    };

    // 更新檔案列表
    const updateFileList = (uid: string, updates: Partial<UploadFile>): void => {
      const newFileList = currentFileList.map((file) =>
        file.uid === uid ? { ...file, ...updates } : file,
      );

      if (fileList === undefined) {
        setInternalFileList(newFileList);
      }

      const targetFile = newFileList.find((file) => file.uid === uid);
      if (targetFile) {
        onChange?.({ file: targetFile, fileList: newFileList });
      }
    };

    // 處理檔案選擇
    const handleFiles = async (files: File[]): Promise<void> => {
      if (disabled) return;

      const validFiles: File[] = [];

      for (const file of files) {
        if (!validateFile(file)) continue;

        // beforeUpload 檢查
        if (beforeUpload) {
          try {
            const result = await beforeUpload(file, files);
            if (!result) continue;
          } catch {
            continue;
          }
        }

        validFiles.push(file);
      }

      if (validFiles.length === 0) return;

      // 建立 UploadFile 物件
      const uploadFiles: UploadFile[] = validFiles.map((file) => ({
        uid: generateFileUid(),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        percent: 0,
      }));

      // 如果是圖片，產生預覽 URL
      uploadFiles.forEach((uploadFile, index) => {
        if (isImageFile(uploadFile)) {
          const file = validFiles[index];
          if (file) {
            createFilePreview(file)
              .then((url) => {
                updateFileList(uploadFile.uid, { url });
              })
              .catch((_error) => {
                // 忽略預覽失敗
              });
          }
        }
      });

      // 更新檔案列表
      const newFileList = [...currentFileList, ...uploadFiles];
      if (fileList === undefined) {
        setInternalFileList(newFileList);
      }

      // 觸發 onChange
      uploadFiles.forEach((uploadFile) => {
        onChange?.({ file: uploadFile, fileList: newFileList });
      });

      // 開始上傳
      uploadFiles.forEach((uploadFile) => {
        simulateUpload(uploadFile);
      });
    };

    // 檔案輸入變更處理
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const files = Array.from(e.target.files || []);
      handleFiles(files);
      // 清空 input 值，允許重複選擇相同檔案
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    // 拖拽處理已移到 useDragAndDrop hook

    // 移除檔案
    const handleRemove = async (file: UploadFile): Promise<void> => {
      if (disabled) return;

      if (onRemove) {
        try {
          const result = await onRemove(file);
          if (!result) return;
        } catch {
          return;
        }
      }

      const newFileList = currentFileList.filter((item) => item.uid !== file.uid);
      if (fileList === undefined) {
        setInternalFileList(newFileList);
      }

      onChange?.({ file: { ...file, status: 'removed' }, fileList: newFileList });
    };

    // 點擊上傳區域
    const handleClick = (): void => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    // 樣式計算
    const containerStyles = combineFormStyles(variant, size, status);

    const uploadAreaClasses = cn(
      'relative overflow-hidden cursor-pointer transition-all duration-200',
      containerStyles,
      dragger && [
        'border-dashed min-h-32 flex flex-col items-center justify-center p-6',
        isDragging && 'border-primary-600 bg-primary-50',
        !isDragging && 'hover:border-gray-400',
      ],
      !dragger && 'inline-flex items-center',
      disabled && 'cursor-not-allowed opacity-50',
      className,
    );

    const renderUploadArea = () => {
      if (children) {
        return children;
      }

      if (dragger) {
        return (
          <div className="text-center">
            <UploadIcon
              className={cn(
                'mx-auto h-12 w-12 mb-4',
                isDragging ? 'text-primary-600' : 'text-gray-400',
              )}
            />
            <div className="text-gray-600">
              <div className="mb-1">點擊或拖拽檔案到此區域上傳</div>
              <div className="text-sm text-gray-500">
                {multiple ? '支援多檔案上傳' : '支援單檔案上傳'}
                {maxSize && (
                  <span className="ml-1">，檔案大小不超過 {formatFileSize(maxSize)}</span>
                )}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="flex items-center space-x-2 px-4 py-2">
          <UploadIcon className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">選擇檔案</span>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        {...props}
      >
        {/* 隱藏的檔案輸入 */}
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
        />

        {/* 上傳區域 */}
        <div
          className={uploadAreaClasses}
          onClick={handleClick}
          {...dragProps}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-label="選擇檔案上傳"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          {renderUploadArea()}
        </div>

        {/* 上傳列表 */}
        {showUploadList && currentFileList.length > 0 && (
          <UploadList
            items={currentFileList}
            listType={listType}
            onRemove={handleRemove}
            onPreview={onPreview}
            disabled={disabled}
          />
        )}
      </div>
    );
  },
);

Upload.displayName = 'Upload';

export { Upload };

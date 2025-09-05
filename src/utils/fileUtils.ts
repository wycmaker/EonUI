/**
 * 檔案工具函數
 */

let uploadSequence = 0;

/**
 * 生成唯一的上傳檔案 ID
 */
export const generateFileUid = (): string => {
  uploadSequence += 1;
  return `upload-${Date.now()}-${uploadSequence}`;
};

/**
 * 格式化檔案大小為人類可讀的格式
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

/**
 * 檢查檔案是否為圖片類型
 */
export const isImageFile = (file: { type: string }): boolean => {
  return file.type.startsWith('image/');
};

/**
 * 檢查檔案是否為視頻類型
 */
export const isVideoFile = (file: { type: string }): boolean => {
  return file.type.startsWith('video/');
};

/**
 * 檢查檔案是否為音頻類型
 */
export const isAudioFile = (file: { type: string }): boolean => {
  return file.type.startsWith('audio/');
};

/**
 * 檢查檔案是否為 PDF
 */
export const isPdfFile = (file: { type: string }): boolean => {
  return file.type === 'application/pdf';
};

/**
 * 獲取檔案類型的顯示名稱
 */
export const getFileTypeName = (file: { type: string; name: string }): string => {
  if (isImageFile(file)) return '圖片';
  if (isVideoFile(file)) return '視頻';
  if (isAudioFile(file)) return '音頻';
  if (isPdfFile(file)) return 'PDF';

  // 從副檔名推斷
  const extension = file.name.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'doc':
    case 'docx':
      return 'Word 文檔';
    case 'xls':
    case 'xlsx':
      return 'Excel 表格';
    case 'ppt':
    case 'pptx':
      return 'PowerPoint 演示';
    case 'txt':
      return '文字檔案';
    case 'zip':
    case 'rar':
    case '7z':
      return '壓縮檔案';
    default:
      return '檔案';
  }
};

/**
 * 驗證檔案類型是否符合 accept 規則
 */
export const validateFileType = (file: File, accept?: string): boolean => {
  if (!accept) return true;

  const acceptTypes = accept.split(',').map((type) => type.trim().toLowerCase());

  for (const acceptType of acceptTypes) {
    // 檢查 MIME 類型
    if (acceptType.startsWith('.')) {
      // 副檔名檢查
      const extension = acceptType.slice(1);
      if (file.name.toLowerCase().endsWith(`.${extension}`)) {
        return true;
      }
    } else if (acceptType.includes('*')) {
      // 通配符檢查，例如 image/*
      const [mainType] = acceptType.split('/');
      if (file.type.startsWith(mainType + '/')) {
        return true;
      }
    } else {
      // 完整 MIME 類型檢查
      if (file.type === acceptType) {
        return true;
      }
    }
  }

  return false;
};

/**
 * 驗證檔案大小
 */
export const validateFileSize = (file: File, maxSize?: number): boolean => {
  if (!maxSize) return true;
  return file.size <= maxSize;
};

/**
 * 創建檔案預覽 URL
 */
export const createFilePreview = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!isImageFile(file)) {
      reject(new Error('Only image files can be previewed'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target?.result as string);
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

/**
 * 下載檔案
 */
export const downloadFile = (url: string, filename?: string): void => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || '';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * 複製檔案 URL 到剪貼板
 */
export const copyFileUrl = async (url: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(url);
  } catch (_error) {
    // 降級方案
    const textarea = document.createElement('textarea');
    textarea.value = url;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};

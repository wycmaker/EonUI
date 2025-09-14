import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { Upload, UploadFile } from './Upload';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [basicFiles, setBasicFiles] = useState<UploadFile[]>([]);
  const [pictureFiles, setPictureFiles] = useState<UploadFile[]>([]);
  const [draggerFiles, setDraggerFiles] = useState<UploadFile[]>([]);

  return (
    <div className="space-y-8 w-full max-w-2xl">
      {/* 基本上傳 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">基本檔案上傳</h4>
        <Upload
          fileList={basicFiles}
          onChange={({ fileList }) => setBasicFiles(fileList)}
          multiple
          accept="image/*,.pdf,.doc,.docx"
          maxSize={5 * 1024 * 1024} // 5MB
        >
          <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white hover:bg-gray-50 cursor-pointer">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-gray-700">選擇檔案</span>
          </div>
        </Upload>
      </div>

      {/* 圖片上傳 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">圖片上傳（圖片列表）</h4>
        <Upload
          fileList={pictureFiles}
          onChange={({ fileList }) => setPictureFiles(fileList)}
          listType="picture"
          multiple
          accept="image/*"
          maxCount={5}
          onPreview={(file) => {
            if (file.url) {
              window.open(file.url, '_blank');
            }
          }}
        />
      </div>

      {/* 拖拽上傳 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">拖拽上傳</h4>
        <Upload
          fileList={draggerFiles}
          onChange={({ fileList }) => setDraggerFiles(fileList)}
          dragger
          multiple
          accept="image/*"
          listType="picture-card"
          maxSize={2 * 1024 * 1024} // 2MB
        />
      </div>
    </div>
  );
};

const UploadDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Upload 檔案上傳</h1>
        <p className="component-docs-description">
          EonUI 的檔案上傳組件，支援點擊選擇、拖拽上傳、進度顯示、檔案預覽等功能。
          提供多種顯示模式和豐富的自訂選項，適用於各種檔案上傳場景。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Upload 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的檔案上傳範例，展示各種功能組合："
          code={`// 互動式 Upload 範例
const [fileList, setFileList] = useState([]);
const [multiple, setMultiple] = useState(false);
const [accept, setAccept] = useState('*');

const handleChange = ({ file, fileList: newFileList }) => {
  setFileList(newFileList);
  console.log('檔案變更:', file, newFileList);
};

return (
  <div className="space-y-6 w-full max-w-md">
    <div>
      <h4 className="font-medium mb-2 text-gray-700">基本上傳</h4>
      <Upload
        fileList={fileList}
        onChange={handleChange}
        multiple={multiple}
        accept={accept}
        beforeUpload={(file) => {
          console.log('上傳前檢查:', file);
          return true;
        }}
      >
        <Button>
          點擊上傳檔案
        </Button>
      </Upload>
    </div>
  </div>
);`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <div className="space-y-6">
          <CodeExample
            title="🔄 預設樣式上傳"
            description="基本的檔案上傳："
            code={`// 基本的檔案上傳
<Upload multiple accept=".pdf,.doc,.docx" />`}
          >
            <Upload
              multiple
              accept=".pdf,.doc,.docx"
            />
          </CodeExample>

          <CodeExample
            title="🔄 拖拽上傳"
            description="支援拖拽的檔案上傳："
            code={`// 支援拖拽的檔案上傳
<Upload dragger multiple accept="image/*" />`}
          >
            <Upload
              dragger
              multiple
              accept="image/*"
            />
          </CodeExample>
        </div>
      </div>

      {/* 顯示模式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🖼️ 顯示模式"
          description="支援三種不同的檔案列表顯示模式："
          code={`// 文字模式 (text)
<Upload
  listType="text"
  defaultFileList={[
    {
      uid: '1',
      name: 'document.pdf',
      size: 1024000,
      type: 'application/pdf',
      status: 'done',
    },
  ]}
/>

// 圖片模式 (picture)
<Upload
  listType="picture"
  defaultFileList={[
    {
      uid: '1',
      name: 'image1.jpg',
      size: 512000,
      type: 'image/jpeg',
      status: 'done',
      url: 'https://via.placeholder.com/100x100?text=IMG1',
    },
  ]}
/>

// 圖片卡片模式 (picture-card)
<Upload
  listType="picture-card"
  defaultFileList={[
    {
      uid: '1',
      name: 'photo1.jpg',
      size: 512000,
      type: 'image/jpeg',
      status: 'done',
      url: 'https://via.placeholder.com/150x150?text=Photo1',
    },
  ]}
/>`}
        >
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">文字模式 (text)</h4>
              <Upload
                listType="text"
                defaultFileList={[
                  {
                    uid: '1',
                    name: 'document.pdf',
                    size: 1024000,
                    type: 'application/pdf',
                    status: 'done',
                  },
                  {
                    uid: '2',
                    name: 'presentation.pptx',
                    size: 2048000,
                    type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    status: 'done',
                  },
                ]}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">圖片模式 (picture)</h4>
              <Upload
                listType="picture"
                defaultFileList={[
                  {
                    uid: '1',
                    name: 'image1.jpg',
                    size: 512000,
                    type: 'image/jpeg',
                    status: 'done',
                    url: 'https://via.placeholder.com/100x100?text=IMG1',
                  },
                  {
                    uid: '2',
                    name: 'image2.png',
                    size: 256000,
                    type: 'image/png',
                    status: 'done',
                    url: 'https://via.placeholder.com/100x100?text=IMG2',
                  },
                ]}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">圖片卡片模式 (picture-card)</h4>
              <Upload
                listType="picture-card"
                defaultFileList={[
                  {
                    uid: '1',
                    name: 'photo1.jpg',
                    size: 512000,
                    type: 'image/jpeg',
                    status: 'done',
                    url: 'https://via.placeholder.com/150x150?text=Photo1',
                  },
                  {
                    uid: '2',
                    name: 'photo2.jpg',
                    size: 256000,
                    type: 'image/jpeg',
                    status: 'done',
                    url: 'https://via.placeholder.com/150x150?text=Photo2',
                  },
                  {
                    uid: '3',
                    name: 'photo3.jpg',
                    size: 384000,
                    type: 'image/jpeg',
                    status: 'uploading',
                    percent: 65,
                  },
                ]}
              />
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>顯示模式說明：</strong>
          <ul>
            <li>
              <strong>text：</strong>文字列表模式，適用於各種檔案類型
            </li>
            <li>
              <strong>picture：</strong>圖片模式，顯示小型預覽圖，適用於圖片上傳
            </li>
            <li>
              <strong>picture-card：</strong>圖片卡片模式，顯示大型預覽圖，適用於相簿功能
            </li>
          </ul>
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 樣式變體範例"
          description="不同的樣式變體："
          code={`// 不同的樣式變體
<Upload variant="default" />   // 預設樣式
<Upload variant="filled" />    // 填充樣式
<Upload variant="outline" />   // 外框樣式`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-gray-600">預設樣式</h4>
              <Upload variant="default" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">填充樣式</h4>
              <Upload variant="filled" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">外框樣式</h4>
              <Upload variant="outline" />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 大小選項範例"
          description="不同大小的上傳組件："
          code={`// 不同大小的上傳組件
<Upload size="sm" />   // 小尺寸
<Upload size="md" />   // 中等尺寸（預設）
<Upload size="lg" />   // 大尺寸`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-gray-600">小尺寸</h4>
              <Upload size="sm" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">中等尺寸（預設）</h4>
              <Upload size="md" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">大尺寸</h4>
              <Upload size="lg" />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 狀態展示範例"
          description="不同狀態的上傳組件："
          code={`// 不同狀態的上傳組件
<Upload status="default" />  // 預設狀態
<Upload status="success" />  // 成功狀態
<Upload status="warning" />  // 警告狀態
<Upload status="error" />    // 錯誤狀態`}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-gray-600">預設狀態</h4>
              <Upload status="default" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">成功狀態</h4>
              <Upload status="success" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">警告狀態</h4>
              <Upload status="warning" />
            </div>
            <div>
              <h4 className="font-medium mb-2 text-gray-600">錯誤狀態</h4>
              <Upload status="error" />
            </div>
          </div>
        </CodeExample>
      </div>

      {/* 進階功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 進階功能範例"
          description="Upload 組件支援多項進階功能，提供完整的檔案上傳體驗："
          code={`// 檔案限制
<Upload
  accept="image/*"
  maxSize={1024 * 1024} // 1MB
  maxCount={3}
  multiple
  dragger
/>

// 上傳前驗證
<Upload
  beforeUpload={(file) => {
    const isValidType = file.type.startsWith('image/');
    const isValidSize = file.size < 2 * 1024 * 1024; // 2MB

    if (!isValidType) {
      alert('只能上傳圖片檔案！');
      return false;
    }

    if (!isValidSize) {
      alert('檔案大小不能超過 2MB！');
      return false;
    }

    return true;
  }}
  dragger
/>

// 禁用狀態
<Upload disabled />
<Upload disabled dragger />`}
        >
          <div className="space-y-8">
            {/* 檔案限制 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">檔案限制</h4>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">
                    只允許圖片，最大 1MB，最多 3 個檔案
                  </label>
                  <Upload
                    accept="image/*"
                    maxSize={1024 * 1024} // 1MB
                    maxCount={3}
                    multiple
                    dragger
                  />
                </div>
              </div>
            </div>

            {/* 自訂驗證 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">上傳前驗證</h4>
              <Upload
                beforeUpload={(file) => {
                  const isValidType = file.type.startsWith('image/');
                  const isValidSize = file.size < 2 * 1024 * 1024; // 2MB

                  if (!isValidType) {
                    alert('只能上傳圖片檔案！');
                    return false;
                  }

                  if (!isValidSize) {
                    alert('檔案大小不能超過 2MB！');
                    return false;
                  }

                  return true;
                }}
                dragger
              />
            </div>

            {/* 禁用狀態 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">禁用狀態</h4>
              <div className="space-y-4">
                <Upload disabled />
                <Upload
                  disabled
                  dragger
                />
              </div>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>進階功能說明：</strong>
          <ul>
            <li>
              <strong>檔案類型限制：</strong>使用 accept 屬性限制可選擇的檔案類型
            </li>
            <li>
              <strong>檔案大小限制：</strong>使用 maxSize 屬性限制單個檔案的最大大小
            </li>
            <li>
              <strong>檔案數量限制：</strong>使用 maxCount 屬性限制最多可上傳的檔案數量
            </li>
            <li>
              <strong>上傳前驗證：</strong>使用 beforeUpload 回調進行自訂驗證
            </li>
            <li>
              <strong>拖拽支援：</strong>設定 dragger={true} 啟用拖拽上傳功能
            </li>
          </ul>
        </div>
      </div>

      {/* 事件處理 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 事件處理範例"
          description="Upload 組件提供豐富的事件回調，方便進行自訂處理："
          code={`// 事件處理設定
<Upload
  onChange={({ file, fileList }) => {
    console.log('檔案狀態變更:', file, fileList);
  }}
  onRemove={(file) => {
    return window.confirm(\`確定要移除 \${file.name} 嗎？\`);
  }}
  onPreview={(file) => {
    if (file.url) {
      window.open(file.url, '_blank');
    }
  }}
  onDrop={(event) => {
    console.log('拖拽檔案:', event);
  }}
  dragger
  listType="picture"
/>`}
        >
          <Upload
            onChange={({ file: _file, fileList: _fileList }) => {
              // 檔案變更處理
            }}
            onRemove={(file) => {
              return window.confirm(`確定要移除 ${file.name} 嗎？`);
            }}
            onPreview={(file) => {
              if (file.url) {
                window.open(file.url, '_blank');
              }
            }}
            onDrop={(_event) => {
              // 拖拽檔案處理
            }}
            dragger
            listType="picture"
          />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>事件回調說明：</strong>
          <ul>
            <li>
              <strong>onChange：</strong>檔案狀態變更時觸發（上傳、完成、錯誤等）
            </li>
            <li>
              <strong>onRemove：</strong>移除檔案時觸發，回傳 false 可阻止移除
            </li>
            <li>
              <strong>onPreview：</strong>點擊檔案預覽時觸發
            </li>
            <li>
              <strong>onDrop：</strong>拖拽檔案時觸發
            </li>
            <li>
              <strong>beforeUpload：</strong>上傳前觸發，可用於檔案驗證
            </li>
          </ul>
        </div>
      </div>

      {/* 自訂上傳 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 自訂上傳範例"
          description="支援自訂上傳邏輯，可整合任何上傳服務："
          code={`// 自訂上傳邏輯
<Upload
  customRequest={({ file, onProgress, onSuccess, onError }) => {
    // 模擬上傳到服務器
    const formData = new FormData();
    formData.append('file', file);

    // 模擬進度
    let progress = 0;
    const timer = setInterval(() => {
      progress += 10;
      onProgress(progress);

      if (progress >= 100) {
        clearInterval(timer);
        // 模擬成功回應
        setTimeout(() => {
          onSuccess({
            url: 'https://example.com/uploaded-file.jpg',
            id: Math.random().toString(36).substr(2, 9),
          });
        }, 500);
      }
    }, 200);

    // 可以回傳一個函數來中止上傳
    return () => {
      clearInterval(timer);
    };
  }}
  dragger
/>`}
        >
          <Upload
            customRequest={({ file, onProgress, onSuccess, onError: _onError }) => {
              // 模擬上傳到服務器
              const formData = new FormData();
              formData.append('file', file);

              // 模擬進度
              let progress = 0;
              const timer = setInterval(() => {
                progress += 10;
                onProgress(progress);

                if (progress >= 100) {
                  clearInterval(timer);
                  // 模擬成功回應
                  setTimeout(() => {
                    onSuccess({
                      url: 'https://example.com/uploaded-file.jpg',
                      id: Math.random().toString(36).substr(2, 9),
                    });
                  }, 500);
                }
              }, 200);

              // 可以回傳一個函數來中止上傳
              return () => {
                clearInterval(timer);
              };
            }}
            dragger
          />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>自訂上傳參數：</strong>
          <ul>
            <li>
              <strong>file：</strong>要上傳的檔案物件
            </li>
            <li>
              <strong>onProgress：</strong>更新上傳進度的回調函數
            </li>
            <li>
              <strong>onSuccess：</strong>上傳成功時的回調函數
            </li>
            <li>
              <strong>onError：</strong>上傳失敗時的回調函數
            </li>
          </ul>
        </div>
      </div>

      {/* 無障礙性 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 無障礙支援範例"
          description="Upload 組件遵循 WCAG 2.1 AA 標準，提供完整的無障礙性支援："
          code={`// 無障礙支援設定
<Upload
  dragger
  aria-label="檔案上傳區域"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // 鍵盤啟動上傳
    }
  }}
/>`}
        >
          <Upload
            dragger
            aria-label="檔案上傳區域"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                // 鍵盤啟動上傳
              }
            }}
          />
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>無障礙性特色：</strong>
          <ul>
            <li>
              <strong>鍵盤導航：</strong>支援 Tab、Enter、Space 鍵操作
            </li>
            <li>
              <strong>螢幕閱讀器：</strong>提供適當的 ARIA 標籤和狀態
            </li>
            <li>
              <strong>焦點指示器：</strong>清晰的焦點環，符合視覺標準
            </li>
            <li>
              <strong>進度通知：</strong>上傳進度變更時提供適當的通知
            </li>
            <li>
              <strong>錯誤處理：</strong>提供清晰的錯誤訊息和狀態指示
            </li>
          </ul>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Upload } from 'eonui';

// 基本上傳
<Upload>
  <button>選擇檔案</button>
</Upload>

// 拖拽上傳
<Upload dragger accept="image/*" multiple>
  {/* 會自動顯示拖拽區域 */}
</Upload>

// 圖片上傳
<Upload
  listType="picture-card"
  multiple
  accept="image/*"
  maxCount={5}
/>

// 檔案限制
<Upload
  accept=".pdf,.doc,.docx"
  maxSize={5 * 1024 * 1024} // 5MB
  maxCount={3}
  beforeUpload={(file) => {
    // 自訂驗證邏輯
    return file.size < 5 * 1024 * 1024;
  }}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">受控組件</h4>
          <pre className="component-docs-code">{`const [fileList, setFileList] = useState([]);

<Upload
  fileList={fileList}
  onChange={({ fileList: newFileList }) => {
    setFileList(newFileList);
  }}
  onRemove={(file) => {
    return window.confirm(\`確定要刪除 \${file.name} 嗎？\`);
  }}
  onPreview={(file) => {
    window.open(file.url);
  }}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">自訂上傳</h4>
          <pre className="component-docs-code">{`<Upload
  customRequest={({ file, onProgress, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      onSuccess(data);
    })
    .catch(error => {
      onError(error);
    });
  }}
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階配置</h4>
          <pre className="component-docs-code">{`<Upload
  variant="outline"
  size="lg"
  status="success"
  dragger
  multiple
  listType="picture"
  accept="image/*"
  maxSize={2 * 1024 * 1024}
  maxCount={10}
  showUploadList={true}
  beforeUpload={(file, fileList) => {
    // 檔案類型檢查
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('只能上傳圖片檔案！');
      return false;
    }

    // 檔案大小檢查
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('圖片檔案大小不能超過 2MB！');
      return false;
    }

    return true;
  }}
  onChange={(info) => {
    const { status } = info.file;
    if (status === 'done') {
      message.success(\`\${info.file.name} 檔案上傳成功。\`);
    } else if (status === 'error') {
      message.error(\`\${info.file.name} 檔案上傳失敗。\`);
    }
  }}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Upload 組件的所有功能，可以在你的項目中開始使用了！ Upload
          組件提供了完整的檔案上傳解決方案，支援多種顯示模式和豐富的自訂選項。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Upload> = {
  title: 'Form/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <UploadDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: '上傳組件的視覺樣式變體',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '上傳組件的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: '上傳組件的狀態',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    multiple: {
      control: { type: 'boolean' },
      description: '是否支援多檔案上傳',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dragger: {
      control: { type: 'boolean' },
      description: '是否支援拖拽上傳',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    listType: {
      control: { type: 'select' },
      options: ['text', 'picture', 'picture-card'],
      description: '上傳列表顯示類型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    showUploadList: {
      control: { type: 'boolean' },
      description: '是否顯示上傳列表',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    accept: {
      control: { type: 'text' },
      description: '接受的檔案類型',
      table: {
        type: { summary: 'string' },
      },
    },
    maxSize: {
      control: { type: 'number' },
      description: '最大檔案大小（bytes）',
      table: {
        type: { summary: 'number' },
      },
    },
    maxCount: {
      control: { type: 'number' },
      description: '最大檔案數量',
      table: {
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: '檔案上傳時的回調',
      table: {
        type: { summary: '(info: { file: UploadFile; fileList: UploadFile[] }) => void' },
      },
    },
    onRemove: {
      action: 'removed',
      description: '檔案移除時的回調',
      table: {
        type: { summary: '(file: UploadFile) => boolean | Promise<boolean>' },
      },
    },
    onPreview: {
      action: 'previewed',
      description: '點擊檔案預覽時的回調',
      table: {
        type: { summary: '(file: UploadFile) => void' },
      },
    },
    children: {
      control: false,
      description: '上傳區域內容',
      table: {
        type: { summary: 'ReactNode' },
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
    variant: 'default',
    size: 'md',
    status: 'default',
    multiple: false,
    dragger: false,
    listType: 'text',
    showUploadList: true,
    disabled: false,
  },
};

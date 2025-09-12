import React, { useState } from 'react';

interface CodeExampleProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  className?: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({
  title,
  description,
  code,
  children,
  className = '',
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* 標題和描述（如果提供） */}
      {(title || description) && (
        <div>
          {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
          {description && <p className="text-gray-600 text-sm">{description}</p>}
        </div>
      )}

      {/* 範例展示區域 */}
      <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <div className="w-full p-6 bg-white">
          <div className="flex items-center justify-end mb-4">
            <button
              className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none transition-colors px-3 py-1 rounded-md hover:bg-blue-50"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? '隱藏代碼' : '顯示代碼'}
            </button>
          </div>
          <div className="w-full rounded-md border border-gray-100 bg-gray-50/30 p-4">
            {children}
          </div>
        </div>

        {/* 代碼展示區域 */}
        {showCode && (
          <div className="w-full border-t border-gray-200 bg-gray-50">
            <pre className="w-full p-6 text-sm overflow-x-auto prismjs">
              <code className="text-gray-800">{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

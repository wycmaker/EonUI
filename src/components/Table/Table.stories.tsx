import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';

import { Table, TableColumn } from './Table';
import '../../styles/component-docs.css';

// 示例資料類型
interface User extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
  status: 'active' | 'inactive';
  joinDate: Date;
  salary: number;
  actions?: never; // 用於操作欄位，不包含實際資料
}

// 示例資料
const sampleData: User[] = [
  {
    id: 1,
    name: '張三',
    email: 'zhang.san@example.com',
    age: 28,
    role: '前端開發',
    status: 'active',
    joinDate: new Date('2023-01-15'),
    salary: 65000,
  },
  {
    id: 2,
    name: '李四',
    email: 'li.si@example.com',
    age: 32,
    role: '後端開發',
    status: 'active',
    joinDate: new Date('2022-08-20'),
    salary: 75000,
  },
  {
    id: 3,
    name: '王五',
    email: 'wang.wu@example.com',
    age: 25,
    role: '設計師',
    status: 'inactive',
    joinDate: new Date('2023-06-10'),
    salary: 55000,
  },
  {
    id: 4,
    name: '趙六',
    email: 'zhao.liu@example.com',
    age: 30,
    role: '產品經理',
    status: 'active',
    joinDate: new Date('2021-12-05'),
    salary: 80000,
  },
  {
    id: 5,
    name: '錢七',
    email: 'qian.qi@example.com',
    age: 27,
    role: '測試工程師',
    status: 'active',
    joinDate: new Date('2023-03-12'),
    salary: 60000,
  },
];

// 互動式範例組件
const InteractiveExample = () => {
  const [data, setData] = useState<User[]>(sampleData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<User>>({});

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setEditForm(user);
  };

  const handleSave = () => {
    if (editingId && editForm) {
      setData((prev) =>
        prev.map((user) => (user.id === editingId ? { ...user, ...editForm } : user)),
      );
      setEditingId(null);
      setEditForm({});
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleDelete = (id: number) => {
    if (confirm('確定要刪除此用戶嗎？')) {
      setData((prev) => prev.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-3">用戶管理表格</h4>
        <p className="text-sm text-gray-600 mb-4">
          這個表格展示了完整的 CRUD 操作，包括排序、編輯和刪除功能。
        </p>

        <Table<User>
          value={data}
          variant="bordered"
          size="md"
          hover
          stickyHeader
          maxHeight="400px"
          className="border rounded-lg"
        >
          <TableColumn<User>
            dataKey="id"
            title="ID"
            width="60px"
            sortable
            align="center"
          />

          <TableColumn<User>
            dataKey="name"
            title="姓名"
            width="120px"
            sortable
          >
            {(value, record) =>
              editingId === record.id ? (
                <Input
                  size="sm"
                  value={editForm.name || ''}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                />
              ) : (
                <span className="font-medium text-gray-900">{String(value)}</span>
              )
            }
          </TableColumn>

          <TableColumn<User>
            dataKey="email"
            title="電子郵件"
            width="200px"
            sortable
          >
            {(value, record) =>
              editingId === record.id ? (
                <Input
                  size="sm"
                  type="email"
                  value={editForm.email || ''}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                />
              ) : (
                <a
                  href={`mailto:${String(value)}`}
                  className="text-primary-600 hover:text-primary-800"
                >
                  {String(value)}
                </a>
              )
            }
          </TableColumn>

          <TableColumn<User>
            dataKey="age"
            title="年齡"
            width="80px"
            sortable
            align="center"
          >
            {(value, record) =>
              editingId === record.id ? (
                <Input
                  size="sm"
                  type="number"
                  value={editForm.age || ''}
                  onChange={(e) => setEditForm({ ...editForm, age: parseInt(e.target.value) })}
                />
              ) : (
                <span>{String(value)}歲</span>
              )
            }
          </TableColumn>

          <TableColumn<User>
            dataKey="role"
            title="職位"
            width="120px"
            sortable
          >
            {(value, record) =>
              editingId === record.id ? (
                <Select
                  size="sm"
                  value={editForm.role}
                  onChange={(val) => setEditForm({ ...editForm, role: val as string })}
                  options={[
                    { label: '前端開發', value: '前端開發' },
                    { label: '後端開發', value: '後端開發' },
                    { label: '設計師', value: '設計師' },
                    { label: '產品經理', value: '產品經理' },
                    { label: '測試工程師', value: '測試工程師' },
                  ]}
                />
              ) : (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {String(value)}
                </span>
              )
            }
          </TableColumn>

          <TableColumn<User>
            dataKey="status"
            title="狀態"
            width="80px"
            sortable
            align="center"
          >
            {(value) => (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {value === 'active' ? '活躍' : '停用'}
              </span>
            )}
          </TableColumn>

          <TableColumn<User>
            dataKey="salary"
            title="薪資"
            width="100px"
            sortable
            align="right"
          >
            {(value) => `NT$${(value as number).toLocaleString()}`}
          </TableColumn>

          <TableColumn<User>
            dataKey="joinDate"
            title="加入日期"
            width="120px"
            sortable
          >
            {(value) => (value as Date).toLocaleDateString('zh-TW')}
          </TableColumn>

          <TableColumn<User>
            dataKey="actions"
            title="操作"
            width="150px"
            align="center"
          >
            {(_, record) => (
              <div className="flex flex-wrap gap-1 justify-center">
                {editingId === record.id ? (
                  <>
                    <Button
                      size="xs"
                      onClick={handleSave}
                    >
                      保存
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={handleCancel}
                    >
                      取消
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={() => handleEdit(record)}
                    >
                      編輯
                    </Button>
                    <Button
                      size="xs"
                      variant="outline"
                      onClick={() => handleDelete(record.id)}
                      className="text-red-600 hover:text-red-800 border-red-300 hover:border-red-500"
                    >
                      刪除
                    </Button>
                  </>
                )}
              </div>
            )}
          </TableColumn>
        </Table>
      </div>
    </div>
  );
};

const TableDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Table 表格</h1>
        <p className="component-docs-description">
          EonUI 的表格組件，支援資料展示、排序、固定欄位、滾動等功能。 使用 Context
          管理表格狀態，TableColumn 定義欄位配置，支援泛型提供完整的型別安全性。 遵循 HTML
          語意化標籤和無障礙標準，適用於各種資料展示場景。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Table 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 實際使用範例</h2>
        <p className="component-docs-section-description">
          以下是完整的表格使用範例，展示各種功能組合：
        </p>

        <div className="component-docs-showcase">
          <InteractiveExample />
        </div>
      </div>

      {/* 基本用法 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 基本用法</h2>
        <p className="component-docs-section-description">
          Table 組件支援兩種定義欄位的方式：通過 columns prop 或使用 TableColumn 子組件。
        </p>

        <div className="component-docs-showcase">
          <div className="space-y-8">
            {/* 使用 columns prop */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">使用 columns 屬性定義欄位</h4>
              <Table<User>
                value={sampleData.slice(0, 3)}
                columns={[
                  { key: 'id', title: 'ID', width: '60px', sortable: true, align: 'center' },
                  { key: 'name', title: '姓名', width: '120px', sortable: true },
                  { key: 'email', title: '電子郵件', width: '200px', sortable: true },
                  { key: 'role', title: '職位', width: '120px', sortable: true },
                ]}
                variant="default"
                size="md"
              />
            </div>

            {/* 使用 TableColumn 組件 */}
            <div>
              <h4 className="font-medium mb-3 text-gray-600">使用 TableColumn 組件定義欄位</h4>
              <Table<User>
                value={sampleData.slice(0, 3)}
                variant="striped"
                size="md"
              >
                <TableColumn<User>
                  dataKey="id"
                  title="ID"
                  width="60px"
                  sortable
                  align="center"
                />
                <TableColumn<User>
                  dataKey="name"
                  title="姓名"
                  width="120px"
                  sortable
                />
                <TableColumn<User>
                  dataKey="email"
                  title="電子郵件"
                  width="200px"
                  sortable
                />
                <TableColumn<User>
                  dataKey="role"
                  title="職位"
                  width="120px"
                  sortable
                />
              </Table>
            </div>
          </div>
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 樣式變體</h2>
        <p className="component-docs-section-description">Table 組件提供了三種不同的樣式變體：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            {(['default', 'striped', 'bordered'] as const).map((variant) => (
              <div key={variant}>
                <h4 className="font-medium mb-2 text-gray-600">
                  {variant === 'default' && '預設樣式'}
                  {variant === 'striped' && '條紋樣式'}
                  {variant === 'bordered' && '邊框樣式'}
                </h4>
                <Table<User>
                  value={sampleData.slice(0, 3)}
                  variant={variant}
                  hover
                >
                  <TableColumn<User>
                    dataKey="name"
                    title="姓名"
                    width="120px"
                  />
                  <TableColumn<User>
                    dataKey="email"
                    title="電子郵件"
                    width="200px"
                  />
                  <TableColumn<User>
                    dataKey="role"
                    title="職位"
                    width="120px"
                  />
                  <TableColumn<User>
                    dataKey="status"
                    title="狀態"
                    width="80px"
                    align="center"
                  >
                    {(value) => (
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          value === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {value === 'active' ? '活躍' : '停用'}
                      </span>
                    )}
                  </TableColumn>
                </Table>
              </div>
            ))}
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>樣式說明：</strong>
          <ul>
            <li>
              <strong>default：</strong>簡潔的預設樣式，適用於大多數場景
            </li>
            <li>
              <strong>striped：</strong>條紋樣式，提高行的可讀性
            </li>
            <li>
              <strong>bordered：</strong>邊框樣式，清晰的邊界分隔
            </li>
          </ul>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📏 大小選項</h2>
        <p className="component-docs-section-description">支援三種不同的大小選項：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            {(['sm', 'md', 'lg'] as const).map((size) => (
              <div key={size}>
                <h4 className="font-medium mb-2 text-gray-600">大小：{size.toUpperCase()}</h4>
                <Table<User>
                  value={sampleData.slice(0, 2)}
                  size={size}
                  variant="bordered"
                >
                  <TableColumn<User>
                    dataKey="name"
                    title="姓名"
                  />
                  <TableColumn<User>
                    dataKey="email"
                    title="電子郵件"
                  />
                  <TableColumn<User>
                    dataKey="role"
                    title="職位"
                  />
                </Table>
              </div>
            ))}
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>緊湊型表格，適用於空間有限的場景
            </li>
            <li>
              <strong>md：</strong>標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>寬鬆型表格，適用於需要舒適閱讀的場景
            </li>
          </ul>
        </div>
      </div>

      {/* 排序功能 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔀 排序功能</h2>
        <p className="component-docs-section-description">
          表格支援欄位排序功能，點擊表頭可以切換排序方式：
        </p>

        <div className="component-docs-showcase">
          <Table<User>
            value={sampleData}
            variant="default"
            defaultSortConfig={{ key: 'age', direction: 'asc' }}
          >
            <TableColumn<User>
              dataKey="name"
              title="姓名"
              sortable
            />
            <TableColumn<User>
              dataKey="age"
              title="年齡"
              sortable
              align="center"
            >
              {(value) => `${value}歲`}
            </TableColumn>
            <TableColumn<User>
              dataKey="salary"
              title="薪資"
              sortable
              align="right"
            >
              {(value) => `NT$${(value as number).toLocaleString()}`}
            </TableColumn>
            <TableColumn<User>
              dataKey="joinDate"
              title="加入日期"
              sortable
            >
              {(value) => (value as Date).toLocaleDateString('zh-TW')}
            </TableColumn>
          </Table>
        </div>

        <div className="component-docs-info-card">
          <strong>排序功能說明：</strong>
          <ul>
            <li>
              設置 <code>sortable</code> 屬性啟用欄位排序
            </li>
            <li>點擊表頭可切換升序、降序、無排序三種狀態</li>
            <li>支援預設排序配置和排序變更回調</li>
            <li>具備完整的無障礙支援（aria-sort）</li>
          </ul>
        </div>
      </div>

      {/* 自訂渲染 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎨 自訂渲染</h2>
        <p className="component-docs-section-description">
          使用 TableColumn 的 children 函數可以自訂單元格的渲染內容：
        </p>

        <div className="component-docs-showcase">
          <Table<User>
            value={sampleData.slice(0, 4)}
            variant="striped"
          >
            <TableColumn<User>
              dataKey="name"
              title="用戶資訊"
              width="200px"
            >
              {(_, record) => (
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {(record as User).name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{(record as User).name}</div>
                    <div className="text-sm text-gray-500">{(record as User).email}</div>
                  </div>
                </div>
              )}
            </TableColumn>

            <TableColumn<User>
              dataKey="role"
              title="職位與薪資"
              width="150px"
            >
              {(_, record) => (
                <div>
                  <div className="font-medium text-gray-900">{(record as User).role}</div>
                  <div className="text-sm text-gray-500">
                    NT${(record as User).salary.toLocaleString()}
                  </div>
                </div>
              )}
            </TableColumn>

            <TableColumn<User>
              dataKey="status"
              title="狀態"
              width="100px"
              align="center"
            >
              {(value, record) => (
                <div className="flex flex-col items-center space-y-1">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {value === 'active' ? '活躍' : '停用'}
                  </span>
                  <span className="text-xs text-gray-500">{(record as User).age}歲</span>
                </div>
              )}
            </TableColumn>

            <TableColumn<User>
              dataKey="id"
              title="操作"
              width="150px"
              align="center"
            >
              {(_, _record) => (
                <div className="">
                  <Button
                    size="xs"
                    variant="outline"
                  >
                    查看
                  </Button>
                  <Button
                    size="xs"
                    variant="outline"
                  >
                    編輯
                  </Button>
                </div>
              )}
            </TableColumn>
          </Table>
        </div>
      </div>

      {/* 固定欄位和滾動 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📌 固定欄位和滾動</h2>
        <p className="component-docs-section-description">支援固定欄位和水平/垂直滾動功能：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">固定表頭和最大高度</h4>
              <Table<User>
                value={sampleData}
                variant="bordered"
                stickyHeader
                maxHeight="200px"
              >
                <TableColumn<User>
                  dataKey="name"
                  title="姓名"
                  width="120px"
                />
                <TableColumn<User>
                  dataKey="email"
                  title="電子郵件"
                  width="200px"
                />
                <TableColumn<User>
                  dataKey="role"
                  title="職位"
                  width="120px"
                />
                <TableColumn<User>
                  dataKey="age"
                  title="年齡"
                  width="80px"
                  align="center"
                />
                <TableColumn<User>
                  dataKey="salary"
                  title="薪資"
                  width="100px"
                  align="right"
                >
                  {(value) => `NT$${(value as number).toLocaleString()}`}
                </TableColumn>
              </Table>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">水平滾動和固定欄位</h4>
              <Table<User>
                value={sampleData.slice(0, 3)}
                variant="striped"
                maxWidth="600px"
              >
                <TableColumn<User>
                  dataKey="id"
                  title="ID"
                  width="60px"
                  fixed="left"
                />
                <TableColumn<User>
                  dataKey="name"
                  title="姓名"
                  width="500px"
                />
                <TableColumn<User>
                  dataKey="email"
                  title="電子郵件"
                  width="200px"
                />
                <TableColumn<User>
                  dataKey="role"
                  title="職位"
                  width="120px"
                />
                <TableColumn<User>
                  dataKey="age"
                  title="年齡"
                  width="80px"
                />
                <TableColumn<User>
                  dataKey="salary"
                  title="薪資"
                  width="100px"
                />
                <TableColumn<User>
                  dataKey="joinDate"
                  title="加入日期"
                  width="120px"
                />
                <TableColumn<User>
                  dataKey="actions"
                  title="操作"
                  width="120px"
                  fixed="right"
                >
                  {() => (
                    <div className="">
                      <Button
                        size="xs"
                        variant="outline"
                      >
                        編輯
                      </Button>
                      <Button
                        size="xs"
                        variant="outline"
                      >
                        刪除
                      </Button>
                    </div>
                  )}
                </TableColumn>
              </Table>
            </div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>固定和滾動功能：</strong>
          <ul>
            <li>
              <strong>stickyHeader：</strong>固定表頭，垂直滾動時表頭保持可見
            </li>
            <li>
              <strong>maxHeight：</strong>設置最大高度，啟用垂直滾動
            </li>
            <li>
              <strong>maxWidth：</strong>設置最大寬度，啟用水平滾動
            </li>
            <li>
              <strong>fixed：</strong>固定欄位到左側或右側，水平滾動時保持可見
            </li>
          </ul>
        </div>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🔄 狀態展示</h2>
        <p className="component-docs-section-description">表格支援載入狀態和空資料狀態：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">載入狀態</h4>
              <Table<User>
                value={[]}
                loading
                columns={[
                  { key: 'name', title: '姓名' },
                  { key: 'email', title: '電子郵件' },
                  { key: 'role', title: '職位' },
                ]}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">空資料狀態</h4>
              <Table<User>
                value={[]}
                emptyText="目前沒有用戶資料"
                columns={[
                  { key: 'name', title: '姓名' },
                  { key: 'email', title: '電子郵件' },
                  { key: 'role', title: '職位' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table Props 說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 Table Props</h2>
        <p className="component-docs-section-description">
          Table 組件的完整屬性說明，幫助你更好地配置表格：
        </p>

        <div className="component-docs-info-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    屬性名稱
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    類型
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    必填
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    預設值
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    說明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">value</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">T[]</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    <span className="text-red-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">表格資料陣列</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">columns</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">ColumnDef&lt;T&gt;[]</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    欄位定義陣列，可與 TableColumn 子組件混用
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">variant</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    'default' | 'striped' | 'bordered'
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'default'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">表格樣式變體</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">size</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'sm' | 'md' | 'lg'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'md'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">表格大小</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">sortable</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">是否啟用全域排序功能</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">hover</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">true</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">是否顯示 hover 效果</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    stickyHeader
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">是否固定表頭</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">loading</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">載入狀態</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">emptyText</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'暫無資料'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">空資料顯示文字</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxHeight</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string | number</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    表格最大高度，啟用垂直滾動
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">maxWidth</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string | number</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    表格最大寬度，啟用水平滾動
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    defaultSortConfig
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">SortConfig</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">{`{ key: '', direction: null }`}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">預設排序配置</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    onSortChange
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    (config: SortConfig) =&gt; void
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    排序變更回調函數。如果提供則為外部控制排序，如果不提供則為內部自動排序
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">renderCell</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    (value, record, index, key) =&gt; ReactNode
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    全域自訂單元格渲染函數
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">自訂 CSS 類名</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onChange</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    (data: T[]) =&gt; void
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">值變更回調</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">onBlur</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">() =&gt; void</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">失焦事件</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">ReactNode</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">TableColumn 子組件</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* TableColumn Props 說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 TableColumn Props</h2>
        <p className="component-docs-section-description">
          TableColumn 組件的完整屬性說明，用於定義欄位配置：
        </p>

        <div className="component-docs-info-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    屬性名稱
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    類型
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    必填
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    預設值
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    說明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">dataKey</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">keyof T</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    <span className="text-red-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    欄位鍵名，對應資料物件的屬性
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">dataKey 的字串值</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">欄位標題，顯示在表頭</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">width</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string | number</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    欄位寬度，支援 CSS 值或數字（px）
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">sortable</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">該欄位是否可排序</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">align</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    'left' | 'center' | 'right'
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'left'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">文字對齊方式</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">fixed</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'left' | 'right'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">固定欄位到左側或右側</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">自訂 CSS 類名</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    (value, record, index) =&gt; ReactNode
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    自訂渲染函數，用於自訂單元格內容
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ColumnDef 類型說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 ColumnDef 類型</h2>
        <p className="component-docs-section-description">
          ColumnDef 介面定義，用於 columns 屬性：
        </p>

        <div className="component-docs-info-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    屬性名稱
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    類型
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    必填
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    說明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">key</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">keyof T</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    <span className="text-red-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">欄位鍵名</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">title</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    <span className="text-red-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">欄位標題</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">width</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string | number</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">欄位寬度</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">sortable</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">是否可排序</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">align</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    'left' | 'center' | 'right'
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">文字對齊方式</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">fixed</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'left' | 'right'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">固定欄位位置</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SortConfig 類型說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 SortConfig 類型</h2>
        <p className="component-docs-section-description">SortConfig 介面定義，用於排序配置：</p>

        <div className="component-docs-info-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    屬性名稱
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    類型
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    說明
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">key</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">排序欄位的鍵名</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">direction</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    'asc' | 'desc' | null
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    排序方向：升序、降序或無排序
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Table, TableColumn } from 'eonui';

// 定義資料類型
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { id: 1, name: '張三', email: 'zhang@example.com', role: '開發者' },
  // ...更多資料
];

// 使用 columns 屬性
<Table<User>
  value={data}
  columns={[
    { key: 'id', title: 'ID', sortable: true },
    { key: 'name', title: '姓名', sortable: true },
    { key: 'email', title: '電子郵件' },
    { key: 'role', title: '職位' },
  ]}
/>

// 使用 TableColumn 組件
<Table<User> value={data}>
  <TableColumn<User> dataKey="id" title="ID" sortable />
  <TableColumn<User> dataKey="name" title="姓名" sortable />
  <TableColumn<User> dataKey="email" title="電子郵件" />
  <TableColumn<User> dataKey="role" title="職位" />
</Table>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">自訂渲染</h4>
          <pre className="component-docs-code">{`// 自訂單元格渲染
<Table<User> value={data}>
  <TableColumn<User> dataKey="name" title="用戶">
    {(value, record, index) => (
      <div className="flex items-center space-x-2">
        <img src={record.avatar} className="w-8 h-8 rounded-full" />
        <span className="font-medium">{value}</span>
      </div>
    )}
  </TableColumn>

  <TableColumn<User> dataKey="status" title="狀態">
    {(value) => (
      <span className={\`px-2 py-1 rounded-full text-xs \${
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }\`}>
        {value === 'active' ? '活躍' : '停用'}
      </span>
    )}
  </TableColumn>

  <TableColumn<User> dataKey="id" title="操作">
    {(_, record) => (
      <div className="flex space-x-2">
        <Button size="xs" onClick={() => handleEdit(record)}>編輯</Button>
        <Button size="xs" variant="outline" onClick={() => handleDelete(record.id)}>刪除</Button>
      </div>
    )}
  </TableColumn>
</Table>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階功能</h4>
          <pre className="component-docs-code">{`// 排序和回調
const [sortConfig, setSortConfig] = useState<SortConfig>({ key: '', direction: null });

<Table<User>
  value={data}
  defaultSortConfig={{ key: 'name', direction: 'asc' }}
  onSortChange={setSortConfig}
  variant="striped"
  size="lg"
  hover
  stickyHeader
  maxHeight="400px"
  maxWidth="800px"
>
  <TableColumn<User> dataKey="id" title="ID" fixed="left" sortable />
  <TableColumn<User> dataKey="name" title="姓名" sortable />
  <TableColumn<User> dataKey="email" title="電子郵件" width="200px" />
  <TableColumn<User> dataKey="role" title="職位" sortable />
  <TableColumn<User> dataKey="actions" title="操作" fixed="right" />
</Table>

// 載入和空狀態
<Table<User>
  value={loading ? [] : data}
  loading={loading}
  emptyText="暫無資料"
  columns={columns}
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Table 組件的所有功能，可以在你的項目中開始使用了！ Table
          組件提供了完整的資料展示解決方案，支援排序、自訂渲染、固定欄位等豐富功能。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: () => <TableDocs />,
    },
  },
  argTypes: {
    columns: {
      control: false,
      description: '欄位定義陣列',
      table: {
        type: { summary: 'ColumnDef<T>[]' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'striped', 'bordered', ['striped', 'bordered']],
      description: '表格樣式變體（可以是單一樣式或多個樣式的陣列）',
      table: {
        type: { summary: "'default' | 'striped' | 'bordered' | ('striped' | 'bordered')[]" },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '表格大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    sortable: {
      control: { type: 'boolean' },
      description: '是否啟用排序功能',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    hover: {
      control: { type: 'boolean' },
      description: '是否顯示 hover 效果',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    stickyHeader: {
      control: { type: 'boolean' },
      description: '是否固定表頭',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: '載入狀態',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    emptyText: {
      control: { type: 'text' },
      description: '空資料顯示文字',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '暫無資料' },
      },
    },
    maxHeight: {
      control: { type: 'text' },
      description: '表格最大高度',
      table: {
        type: { summary: 'string | number' },
      },
    },
    maxWidth: {
      control: { type: 'text' },
      description: '表格最大寬度',
      table: {
        type: { summary: 'string | number' },
      },
    },
    value: {
      control: false,
      description: '表格資料陣列',
      table: {
        type: { summary: 'T[]' },
      },
    },
    onChange: {
      control: false,
      description: '值變更回調',
      table: {
        type: { summary: '(data: T[]) => void' },
      },
    },
    onBlur: {
      control: false,
      description: '失焦事件',
      table: {
        type: { summary: '() => void' },
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
    sortable: true,
    hover: true,
    stickyHeader: false,
    loading: false,
    emptyText: '暫無資料',
  },
  render: (args) => (
    <Table<User>
      value={sampleData.slice(0, 3)}
      variant={args.variant}
      size={args.size}
      sortable={args.sortable}
      hover={args.hover}
      stickyHeader={args.stickyHeader}
      loading={args.loading}
      emptyText={args.emptyText}
    >
      <TableColumn<User>
        dataKey="name"
        title="姓名"
        sortable
      />
      <TableColumn<User>
        dataKey="email"
        title="電子郵件"
        sortable
      />
      <TableColumn<User>
        dataKey="role"
        title="職位"
        sortable
      />
      <TableColumn<User>
        dataKey="status"
        title="狀態"
        align="center"
      />
    </Table>
  ),
};

// 組合變體範例：Striped + Bordered
export const CombinedVariants: Story = {
  args: {
    variant: ['striped', 'bordered'],
    size: 'md',
    sortable: true,
    hover: true,
  },
  render: (args) => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Striped + Bordered 組合</h3>
        <Table<User>
          value={sampleData.slice(0, 5)}
          variant={args.variant}
          size={args.size}
          sortable={args.sortable}
          hover={args.hover}
        >
          <TableColumn<User>
            dataKey="id"
            title="ID"
            width="60px"
            sortable
          />
          <TableColumn<User>
            dataKey="name"
            title="姓名"
            sortable
          />
          <TableColumn<User>
            dataKey="role"
            title="職位"
            sortable
          />
          <TableColumn<User>
            dataKey="age"
            title="年齡"
            width="80px"
            align="center"
            sortable
          />
          <TableColumn<User>
            dataKey="salary"
            title="薪資"
            width="100px"
            align="right"
            sortable
          />
          <TableColumn<User>
            dataKey="status"
            title="狀態"
            width="80px"
            align="center"
          >
            {(value) => (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {value === 'active' ? '啟用' : '停用'}
              </span>
            )}
          </TableColumn>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">比較：僅 Striped</h3>
        <Table<User>
          value={sampleData.slice(0, 3)}
          variant="striped"
          size={args.size}
          sortable={args.sortable}
          hover={args.hover}
        >
          <TableColumn<User>
            dataKey="name"
            title="姓名"
            sortable
          />
          <TableColumn<User>
            dataKey="role"
            title="職位"
            sortable
          />
          <TableColumn<User>
            dataKey="age"
            title="年齡"
            align="center"
            sortable
          />
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">比較：僅 Bordered</h3>
        <Table<User>
          value={sampleData.slice(0, 3)}
          variant="bordered"
          size={args.size}
          sortable={args.sortable}
          hover={args.hover}
        >
          <TableColumn<User>
            dataKey="name"
            title="姓名"
            sortable
          />
          <TableColumn<User>
            dataKey="role"
            title="職位"
            sortable
          />
          <TableColumn<User>
            dataKey="age"
            title="年齡"
            align="center"
            sortable
          />
        </Table>
      </div>
    </div>
  ),
};

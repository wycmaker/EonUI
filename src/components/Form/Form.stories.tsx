import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Checkbox, CheckboxGroup } from '../Checkbox';
import { Input } from '../Input';
import { Radio, RadioGroup } from '../Radio';
import { Select } from '../Select';
import { CodeExample } from '../shared/CodeExample';
import { Table, TableColumn } from '../Table';
import { Textarea } from '../Textarea';

import { Form } from './Form';
import { FormItem } from './FormItem';
import { Rules } from './Rules';
import '../../styles/component-docs.css';

// 示例用戶資料
interface User extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: 'active' | 'inactive';
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: '張三',
    email: 'zhang.san@company.com',
    department: '技術部',
    role: '前端工程師',
    status: 'active',
  },
  {
    id: 2,
    name: '李四',
    email: 'li.si@company.com',
    department: '技術部',
    role: '後端工程師',
    status: 'active',
  },
  {
    id: 3,
    name: '王五',
    email: 'wang.wu@company.com',
    department: '設計部',
    role: 'UI設計師',
    status: 'inactive',
  },
  {
    id: 4,
    name: '趙六',
    email: 'zhao.liu@company.com',
    department: '產品部',
    role: '產品經理',
    status: 'active',
  },
  {
    id: 5,
    name: '錢七',
    email: 'qian.qi@company.com',
    department: '測試部',
    role: 'QA工程師',
    status: 'active',
  },
];

// 互動式範例組件
const InteractiveExample = () => {
  const [validationValues, setValidationValues] = useState<Record<string, unknown>>({});
  const [triggerValues, setTriggerValues] = useState<Record<string, unknown>>({});
  const [complexFormValues, setComplexFormValues] = useState<Record<string, unknown>>({});

  const handleBasicSubmit = (values: Record<string, unknown>) => {
    alert(`基本表單提交: ${JSON.stringify(values, null, 2)}`);
  };

  const handleValidationSubmit = (values: Record<string, unknown>) => {
    setValidationValues(values);
    alert(`驗證表單提交: ${JSON.stringify(values, null, 2)}`);
  };

  const handleTriggerSubmit = (values: Record<string, unknown>) => {
    setTriggerValues(values);
    alert(`觸發時機表單提交: ${JSON.stringify(values, null, 2)}`);
  };

  const handleComplexFormSubmit = (values: Record<string, unknown>) => {
    setComplexFormValues(values);
  };

  return (
    <div className="space-y-8 w-full">
      {/* 基本表單 */}
      <div className="max-w-md">
        <CodeExample
          title="🔄 基本表單"
          description="Form 組件的基本使用方式："
          code={`<Form onSubmit={handleBasicSubmit}>
  <FormItem
    name="basicUsername"
    label="使用者名稱"
    required
  >
    <Input placeholder="請輸入使用者名稱" />
  </FormItem>

  <FormItem
    name="basicEmail"
    label="電子郵件"
  >
    <Input
      type="email"
      placeholder="請輸入電子郵件"
    />
  </FormItem>

  <Button type="submit">提交</Button>
</Form>`}
        >
          <Form onSubmit={handleBasicSubmit}>
            <FormItem
              name="basicUsername"
              label="使用者名稱"
              required
            >
              <Input placeholder="請輸入使用者名稱" />
            </FormItem>

            <FormItem
              name="basicEmail"
              label="電子郵件"
            >
              <Input
                type="email"
                placeholder="請輸入電子郵件"
              />
            </FormItem>

            <Button type="submit">提交</Button>
          </Form>
        </CodeExample>
      </div>

      {/* 驗證表單 */}
      <div className="max-w-md">
        <CodeExample
          title="🔄 驗證功能"
          description="Form 組件的驗證功能："
          code={`<Form onSubmit={handleValidationSubmit}>
  <FormItem
    name="validatedUsername"
    label="使用者名稱"
    required
    rules={[
      Rules.required('使用者名稱為必填'),
      Rules.minLength(3, '使用者名稱至少需要3個字元'),
    ]}
  >
    <Input placeholder="請輸入使用者名稱" />
  </FormItem>

  <FormItem
    name="validatedEmail"
    label="電子郵件"
    required
    rules={[Rules.required('電子郵件為必填'), Rules.email()]}
  >
    <Input type="email" placeholder="請輸入電子郵件" />
  </FormItem>

  <FormItem
    name="gender"
    label="性別"
    required
    rules={[Rules.required('請選擇性別')]}
  >
    <Select
      options={[
        { value: 'male', label: '男性' },
        { value: 'female', label: '女性' },
        { value: 'other', label: '其他' },
      ]}
      placeholder="請選擇性別"
    />
  </FormItem>

  <Button type="submit" variant="primary">提交</Button>
</Form>`}
        >
          <Form onSubmit={handleValidationSubmit}>
            <FormItem
              name="validatedUsername"
              label="使用者名稱"
              required
              rules={[
                Rules.required('使用者名稱為必填'),
                Rules.minLength(3, '使用者名稱至少需要3個字元'),
              ]}
            >
              <Input placeholder="請輸入使用者名稱" />
            </FormItem>

            <FormItem
              name="validatedEmail"
              label="電子郵件"
              required
              rules={[Rules.required('電子郵件為必填'), Rules.email()]}
            >
              <Input
                type="email"
                placeholder="請輸入電子郵件"
              />
            </FormItem>

            <FormItem
              name="phone"
              label="手機號碼"
              rules={[Rules.phone()]}
            >
              <Input placeholder="請輸入手機號碼（選填）" />
            </FormItem>

            <FormItem
              name="gender"
              label="性別"
              required
              rules={[Rules.required('請選擇性別')]}
            >
              <Select
                options={[
                  { value: 'male', label: '男性' },
                  { value: 'female', label: '女性' },
                  { value: 'other', label: '其他' },
                ]}
                placeholder="請選擇性別"
              />
            </FormItem>

            <FormItem
              name="interests"
              label="興趣愛好"
            >
              <CheckboxGroup>
                <Checkbox value="reading">閱讀</Checkbox>
                <Checkbox value="music">音樂</Checkbox>
                <Checkbox value="sports">運動</Checkbox>
                <Checkbox value="travel">旅遊</Checkbox>
              </CheckboxGroup>
            </FormItem>

            <FormItem
              name="bio"
              label="自我介紹"
              rules={[Rules.maxLength(200, '自我介紹不能超過200字')]}
            >
              <Textarea
                placeholder="請簡單介紹一下自己..."
                rows={3}
              />
            </FormItem>

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
              >
                提交
              </Button>
            </div>
          </Form>
          {Object.keys(validationValues).length > 0 && (
            <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
              <strong>提交的值：</strong>
              <pre>{JSON.stringify(validationValues, null, 2)}</pre>
            </div>
          )}
        </CodeExample>
      </div>

      {/* 驗證時機 */}
      <div className="max-w-md">
        <h4 className="font-medium mb-3 text-gray-700">不同驗證時機</h4>
        <Form onSubmit={handleTriggerSubmit}>
          <FormItem
            name="onChange"
            label="輸入時驗證"
            rules={[
              Rules.required('此欄位為必填', 'onChange'),
              Rules.minLength(3, '至少需要3個字元', 'onChange'),
            ]}
          >
            <Input placeholder="輸入時立即驗證" />
          </FormItem>

          <FormItem
            name="onBlur"
            label="失焦時驗證"
            rules={[
              Rules.required('此欄位為必填', 'onBlur'),
              Rules.email('請輸入有效的電子郵件', 'onBlur'),
            ]}
          >
            <Input placeholder="失焦時才驗證" />
          </FormItem>

          <FormItem
            name="onSubmit"
            label="提交時驗證"
            rules={[
              Rules.required('此欄位為必填', 'onSubmit'),
              Rules.phone('請輸入有效的手機號碼', 'onSubmit'),
            ]}
          >
            <Input placeholder="只在提交時驗證" />
          </FormItem>

          <FormItem
            name="category"
            label="分類選擇"
            rules={[Rules.required('請選擇分類', 'onSubmit')]}
          >
            <RadioGroup>
              <Radio value="personal">個人</Radio>
              <Radio value="business">商業</Radio>
              <Radio value="other">其他</Radio>
            </RadioGroup>
          </FormItem>

          <FormItem
            name="agreement"
            label="同意條款"
            rules={[
              Rules.custom((value) => {
                return value ? null : '請同意使用條款';
              }, 'onSubmit'),
            ]}
          >
            <Checkbox value="agree">我同意使用條款和隱私政策</Checkbox>
          </FormItem>

          <div className="pt-4">
            <Button
              type="submit"
              variant="primary"
            >
              提交（會觸發所有驗證）
            </Button>
          </div>
        </Form>
        {Object.keys(triggerValues).length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
            <strong>提交的值：</strong>
            <pre>{JSON.stringify(triggerValues, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* 複雜表單整合範例 */}
      <div className="w-full max-w-4xl">
        <h4 className="font-medium mb-3 text-gray-700">複雜表單 + Table 組件整合</h4>
        <Form
          onSubmit={handleComplexFormSubmit}
          initialValues={{
            teamMembers: sampleUsers,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左側：基本資訊 */}
            <div className="space-y-4">
              <h5 className="font-medium text-gray-600 mb-3">基本資訊</h5>
              <FormItem
                name="projectName"
                label="專案名稱"
                required
                rules={[
                  Rules.required('專案名稱為必填'),
                  Rules.minLength(2, '專案名稱至少需要2個字元'),
                ]}
              >
                <Input placeholder="請輸入專案名稱" />
              </FormItem>

              <FormItem
                name="projectType"
                label="專案類型"
                required
                rules={[Rules.required('請選擇專案類型')]}
              >
                <Select
                  options={[
                    { value: 'web', label: 'Web 應用' },
                    { value: 'mobile', label: '移動應用' },
                    { value: 'desktop', label: '桌面應用' },
                    { value: 'api', label: 'API 服務' },
                  ]}
                  placeholder="請選擇專案類型"
                />
              </FormItem>

              <FormItem
                name="priority"
                label="優先級"
                required
                rules={[Rules.required('請選擇優先級')]}
              >
                <RadioGroup>
                  <Radio value="high">高</Radio>
                  <Radio value="medium">中</Radio>
                  <Radio value="low">低</Radio>
                </RadioGroup>
              </FormItem>

              <FormItem
                name="features"
                label="功能特性"
              >
                <CheckboxGroup>
                  <Checkbox value="responsive">響應式設計</Checkbox>
                  <Checkbox value="multilang">多語言支援</Checkbox>
                  <Checkbox value="analytics">數據分析</Checkbox>
                  <Checkbox value="security">安全加密</Checkbox>
                </CheckboxGroup>
              </FormItem>

              <FormItem
                name="description"
                label="專案描述"
                rules={[Rules.maxLength(500, '描述不能超過500字')]}
              >
                <Textarea
                  placeholder="請描述專案的主要功能和目標..."
                  rows={4}
                />
              </FormItem>
            </div>

            {/* 右側：團隊成員 */}
            <div className="space-y-4">
              <h5 className="font-medium text-gray-600 mb-3">團隊成員選擇</h5>
              <FormItem
                name="teamMembers"
                label="選擇團隊成員"
                required
                rules={[
                  Rules.custom((value) => {
                    const members = (value as User[]) || [];
                    // eslint-disable-next-line no-console
                    console.log('Form validation - members:', members);
                    return members.length > 0 ? null : '請至少選擇一個團隊成員';
                  }, 'onSubmit'),
                ]}
              >
                <Table<User>
                  value={[]} // 這個值會被 FormItem 覆蓋
                  size="sm"
                  variant="bordered"
                  maxHeight="300px"
                >
                  <TableColumn<User>
                    dataKey="name"
                    title="姓名"
                    width="120px"
                    sortable
                  >
                    {(value, _record, _index, updateField) => (
                      <Input
                        size="sm"
                        value={value as string}
                        onChange={(e) => updateField(e.target.value)}
                        placeholder="請輸入姓名"
                      />
                    )}
                  </TableColumn>
                  <TableColumn<User>
                    dataKey="department"
                    title="部門"
                    width="120px"
                    sortable
                  >
                    {(value, _record, _index, updateField) => (
                      <Select
                        size="sm"
                        value={value as string}
                        options={[
                          { value: '技術部', label: '技術部' },
                          { value: '設計部', label: '設計部' },
                          { value: '產品部', label: '產品部' },
                          { value: '測試部', label: '測試部' },
                          { value: '營運部', label: '營運部' },
                        ]}
                        onChange={(newValue) => updateField(newValue)}
                        placeholder="選擇部門"
                      />
                    )}
                  </TableColumn>
                  <TableColumn<User>
                    dataKey="role"
                    title="職位"
                    width="140px"
                    sortable
                  >
                    {(value, _record, _index, updateField) => (
                      <Input
                        size="sm"
                        value={value as string}
                        onChange={(e) => updateField(e.target.value)}
                        placeholder="請輸入職位"
                      />
                    )}
                  </TableColumn>
                  <TableColumn<User>
                    dataKey="status"
                    title="狀態"
                    width="100px"
                    align="center"
                  >
                    {(value, _record, _index, updateField) => (
                      <Select
                        size="sm"
                        value={value as string}
                        options={[
                          { value: 'active', label: '在職' },
                          { value: 'inactive', label: '離職' },
                        ]}
                        onChange={(newValue) => updateField(newValue)}
                      />
                    )}
                  </TableColumn>
                </Table>
              </FormItem>

              <FormItem
                name="budget"
                label="預算範圍"
                required
                rules={[
                  Rules.required('請輸入預算'),
                  Rules.custom((value) => {
                    const budget = Number(value);
                    if (isNaN(budget) || budget <= 0) {
                      return '請輸入有效的預算金額';
                    }
                    return null;
                  }, 'onBlur'),
                ]}
              >
                <Input
                  type="number"
                  placeholder="請輸入預算金額"
                  min="0"
                />
              </FormItem>

              <FormItem
                name="deadline"
                label="截止日期"
                required
                rules={[Rules.required('請選擇截止日期')]}
              >
                <Input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                />
              </FormItem>

              <FormItem
                name="notifications"
                label="通知設定"
              >
                <CheckboxGroup>
                  <Checkbox value="email">郵件通知</Checkbox>
                  <Checkbox value="sms">簡訊通知</Checkbox>
                  <Checkbox value="push">推播通知</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </div>
          </div>

          <div className="pt-6 border-t mt-6">
            <div className="flex gap-4">
              <Button
                type="submit"
                variant="primary"
              >
                建立專案
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setComplexFormValues({})}
              >
                清除
              </Button>
            </div>
          </div>
        </Form>

        {Object.keys(complexFormValues).length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h6 className="font-medium mb-2">提交的表單資料：</h6>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(complexFormValues, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const FormDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">Form 表單</h1>
        <p className="component-docs-description">
          EonUI 的表單組件，提供完整的表單狀態管理和驗證功能。
          支援多種驗證時機、自訂驗證規則，以及靈活的佈局選項。
          設計風格簡潔現代，與其他組件保持一致的視覺體驗。
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 Form 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的表單範例，展示各種功能組合："
          code={`// 互動式表單範例
const [validationValues, setValidationValues] = useState<Record<string, unknown>>({});
const [triggerValues, setTriggerValues] = useState<Record<string, unknown>>({});
const [complexFormValues, setComplexFormValues] = useState<Record<string, unknown>>({});

const handleBasicSubmit = (values: Record<string, unknown>) => {
  alert(\`基本表單提交: \${JSON.stringify(values, null, 2)}\`);
};

return (
  <div className="space-y-8 w-full">
    {/* 基本表單 */}
    <div className="max-w-md">
      <h3 className="font-semibold mb-4">基本表單</h3>
      <Form onSubmit={handleBasicSubmit}>
        <FormItem name="basicName" label="姓名" required>
          <Input placeholder="請輸入姓名" />
        </FormItem>
        <FormItem name="basicEmail" label="電子郵件" required>
          <Input type="email" placeholder="請輸入電子郵件" />
        </FormItem>
        <FormItem>
          <Button type="submit" color="primary">提交</Button>
        </FormItem>
      </Form>
    </div>
  </div>
);`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 驗證規則 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 驗證規則</h2>
        <p className="component-docs-section-description">Form 支援多種內建驗證規則：</p>

        <div className="component-docs-showcase">
          <div className="space-y-6">
            <div>
              <CodeExample
                title="🔄 必填驗證"
                description="使用 Rules.required() 進行必填驗證："
                code={`<FormItem
  name="required"
  label="必填欄位"
  rules={[Rules.required('此欄位為必填')]}
>
  <Input placeholder="請輸入內容" />
</FormItem>`}
              >
                <Form>
                  <FormItem
                    name="required"
                    label="必填欄位"
                    rules={[Rules.required('此欄位為必填')]}
                  >
                    <Input placeholder="請輸入內容" />
                  </FormItem>
                </Form>
              </CodeExample>
              <p className="text-sm text-gray-500 mt-1">使用 Rules.required() 進行必填驗證</p>
            </div>

            <div>
              <CodeExample
                title="🔄 長度驗證"
                description="使用 Rules.minLength() 和 Rules.maxLength() 限制長度："
                code={`<FormItem
  name="length"
  label="長度限制"
  rules={[
    Rules.minLength(3, '至少需要3個字元'),
    Rules.maxLength(10, '最多只能10個字元'),
  ]}
>
  <Input placeholder="請輸入3-10個字元" />
</FormItem>`}
              >
                <Form>
                  <FormItem
                    name="length"
                    label="長度限制"
                    rules={[
                      Rules.minLength(3, '至少需要3個字元'),
                      Rules.maxLength(10, '最多只能10個字元'),
                    ]}
                  >
                    <Input placeholder="請輸入3-10個字元" />
                  </FormItem>
                </Form>
              </CodeExample>
              <p className="text-sm text-gray-500 mt-1">
                使用 Rules.minLength() 和 Rules.maxLength() 限制長度
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">格式驗證</h4>
              <Form>
                <FormItem
                  name="email"
                  label="電子郵件"
                  rules={[Rules.email()]}
                >
                  <Input
                    type="email"
                    placeholder="請輸入電子郵件"
                  />
                </FormItem>
                <FormItem
                  name="phone"
                  label="手機號碼"
                  rules={[Rules.phone()]}
                >
                  <Input placeholder="請輸入手機號碼" />
                </FormItem>
              </Form>
              <p className="text-sm text-gray-500 mt-1">
                使用 Rules.email() 和 Rules.phone() 進行格式驗證
              </p>
            </div>
          </div>
        </div>

        <div className="component-docs-info-card">
          <strong>內建驗證規則：</strong>
          <ul>
            <li>
              <strong>Rules.required()：</strong>必填驗證
            </li>
            <li>
              <strong>Rules.minLength()：</strong>最小長度驗證
            </li>
            <li>
              <strong>Rules.maxLength()：</strong>最大長度驗證
            </li>
            <li>
              <strong>Rules.email()：</strong>電子郵件格式驗證
            </li>
            <li>
              <strong>Rules.phone()：</strong>手機號碼格式驗證
            </li>
            <li>
              <strong>Rules.number()：</strong>數字格式驗證
            </li>
            <li>
              <strong>Rules.password()：</strong>密碼強度驗證
            </li>
            <li>
              <strong>Rules.custom()：</strong>自訂驗證函數
            </li>
          </ul>
        </div>
      </div>

      {/* 驗證時機 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 驗證時機範例"
          description="支援三種不同的驗證觸發時機，可以根據需求靈活配置："
          code={`// 輸入時驗證 (onChange)
<FormItem
  name="onChangeExample"
  label="即時驗證"
  rules={[Rules.required('此欄位為必填', 'onChange')]}
>
  <Input placeholder="輸入時立即驗證" />
</FormItem>

// 失焦時驗證 (onBlur)
<FormItem
  name="onBlurExample"
  label="失焦驗證"
  rules={[Rules.email('請輸入有效的電子郵件', 'onBlur')]}
>
  <Input placeholder="失焦時才驗證" />
</FormItem>

// 提交時驗證 (onSubmit)
<FormItem
  name="onSubmitExample"
  label="提交驗證"
  rules={[Rules.phone('請輸入有效的手機號碼', 'onSubmit')]}
>
  <Input placeholder="只在提交時驗證" />
</FormItem>

// 混合驗證時機
<FormItem
  name="mixedExample"
  label="混合驗證"
  rules={[
    Rules.required('此欄位為必填', ['onChange', 'onBlur']),
    Rules.minLength(6, '至少需要6個字元', 'onBlur'),
    Rules.maxLength(20, '最多20個字元', 'onSubmit'),
  ]}
>
  <Input placeholder="不同規則在不同時機驗證" />
</FormItem>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">輸入時驗證 (onChange)</h4>
              <Form>
                <FormItem
                  name="onChangeExample"
                  label="即時驗證"
                  rules={[Rules.required('此欄位為必填', 'onChange')]}
                >
                  <Input placeholder="輸入時立即驗證" />
                </FormItem>
              </Form>
              <p className="text-sm text-gray-500 mt-1">適合必填檢查和即時反饋</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">失焦時驗證 (onBlur)</h4>
              <Form>
                <FormItem
                  name="onBlurExample"
                  label="失焦驗證"
                  rules={[Rules.email('請輸入有效的電子郵件', 'onBlur')]}
                >
                  <Input placeholder="失焦時才驗證" />
                </FormItem>
              </Form>
              <p className="text-sm text-gray-500 mt-1">適合格式檢查，避免輸入過程中的干擾</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">提交時驗證 (onSubmit)</h4>
              <Form>
                <FormItem
                  name="onSubmitExample"
                  label="提交驗證"
                  rules={[Rules.phone('請輸入有效的手機號碼', 'onSubmit')]}
                >
                  <Input placeholder="只在提交時驗證" />
                </FormItem>
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                  >
                    提交測試
                  </Button>
                </div>
              </Form>
              <p className="text-sm text-gray-500 mt-1">適合複雜驗證，只在最終提交時檢查</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">混合驗證時機</h4>
              <Form>
                <FormItem
                  name="mixedExample"
                  label="混合驗證"
                  rules={[
                    Rules.required('此欄位為必填', ['onChange', 'onBlur']),
                    Rules.minLength(6, '至少需要6個字元', 'onBlur'),
                    Rules.maxLength(20, '最多20個字元', 'onSubmit'),
                  ]}
                >
                  <Input placeholder="不同規則在不同時機驗證" />
                </FormItem>
              </Form>
              <p className="text-sm text-gray-500 mt-1">
                必填在輸入/失焦時驗證，長度在不同時機驗證
              </p>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>驗證時機說明：</strong>
          <ul>
            <li>
              <strong>onChange：</strong>輸入時立即驗證，適合必填檢查
            </li>
            <li>
              <strong>onBlur：</strong>失焦後驗證，適合格式檢查
            </li>
            <li>
              <strong>onSubmit：</strong>提交時驗證，適合複雜驗證
            </li>
            <li>支援多重觸發時機，如 ['onChange', 'onBlur']</li>
            <li>提交時會觸發所有規則的驗證，確保完整性</li>
          </ul>
        </div>
      </div>

      {/* 佈局選項 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 佈局選項範例"
          description="支援垂直和水平兩種佈局方式："
          code={`// 垂直佈局（預設）
<Form>
  <FormItem name="verticalName" label="姓名" required>
    <Input placeholder="請輸入姓名" />
  </FormItem>
  <FormItem name="verticalEmail" label="電子郵件">
    <Input type="email" placeholder="請輸入電子郵件" />
  </FormItem>
</Form>

// 水平佈局
<Form>
  <FormItem
    name="horizontalName"
    label="姓名"
    required
    layout="horizontal"
    labelWidth="100px"
  >
    <Input placeholder="請輸入姓名" />
  </FormItem>
  <FormItem
    name="horizontalAge"
    label="年齡"
    layout="horizontal"
    labelWidth="100px"
  >
    <Input type="number" placeholder="請輸入年齡" />
  </FormItem>
</Form>`}
        >
          <div className="space-y-8">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">垂直佈局（預設）</h4>
              <div className="max-w-md">
                <Form>
                  <FormItem
                    name="verticalName"
                    label="姓名"
                    required
                  >
                    <Input placeholder="請輸入姓名" />
                  </FormItem>
                  <FormItem
                    name="verticalEmail"
                    label="電子郵件"
                  >
                    <Input
                      type="email"
                      placeholder="請輸入電子郵件"
                    />
                  </FormItem>
                </Form>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">水平佈局</h4>
              <div className="max-w-lg">
                <Form>
                  <FormItem
                    name="horizontalName"
                    label="姓名"
                    required
                    layout="horizontal"
                    labelWidth="100px"
                  >
                    <Input placeholder="請輸入姓名" />
                  </FormItem>
                  <FormItem
                    name="horizontalAge"
                    label="年齡"
                    layout="horizontal"
                    labelWidth="100px"
                  >
                    <Input
                      type="number"
                      placeholder="請輸入年齡"
                    />
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>佈局配置：</strong>
          <ul>
            <li>
              <strong>vertical：</strong>垂直佈局，標籤在上方（預設）
            </li>
            <li>
              <strong>horizontal：</strong>水平佈局，標籤在左側
            </li>
            <li>
              <strong>labelWidth：</strong>水平佈局時的標籤寬度
            </li>
            <li>支援 required 標記，自動顯示紅色星號</li>
          </ul>
        </div>
      </div>

      {/* 初始值 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 初始值設定範例"
          description="支援設定表單的初始值："
          code={`// 設定表單初始值
<Form
  initialValues={{
    prefilledName: 'John Doe',
    prefilledEmail: 'john@example.com',
    prefilledBio: '這是一段預設的自我介紹',
  }}
>
  <FormItem name="prefilledName" label="姓名" required>
    <Input placeholder="請輸入姓名" />
  </FormItem>

  <FormItem name="prefilledEmail" label="電子郵件">
    <Input type="email" placeholder="請輸入電子郵件" />
  </FormItem>

  <FormItem name="prefilledBio" label="自我介紹">
    <Input placeholder="請輸入自我介紹" />
  </FormItem>

  <div className="pt-4">
    <Button type="submit" variant="primary">
      提交
    </Button>
  </div>
</Form>`}
        >
          <div className="max-w-md">
            <Form
              initialValues={{
                prefilledName: 'John Doe',
                prefilledEmail: 'john@example.com',
                prefilledBio: '這是一段預設的自我介紹',
              }}
            >
              <FormItem
                name="prefilledName"
                label="姓名"
                required
              >
                <Input placeholder="請輸入姓名" />
              </FormItem>

              <FormItem
                name="prefilledEmail"
                label="電子郵件"
              >
                <Input
                  type="email"
                  placeholder="請輸入電子郵件"
                />
              </FormItem>

              <FormItem
                name="prefilledBio"
                label="自我介紹"
              >
                <Input placeholder="請輸入自我介紹" />
              </FormItem>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                >
                  提交
                </Button>
              </div>
            </Form>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>初始值功能：</strong>
          <ul>
            <li>使用 initialValues 屬性設定表單初始值</li>
            <li>支援任何類型的值（字串、數字、布林值等）</li>
            <li>初始值會在組件掛載時自動填入對應的欄位</li>
            <li>適用於編輯表單或預填表單場景</li>
          </ul>
        </div>
      </div>

      {/* FormItem Props 說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">📋 FormItem Props</h2>
        <p className="component-docs-section-description">
          FormItem 組件的完整屬性說明，幫助你更好地配置表單項目：
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
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">name</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    <span className="text-red-600 font-semibold">是</span>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    欄位名稱，用於表單值的鍵名，必須在同一表單中唯一
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">label</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    欄位標籤文字，顯示在輸入框上方或左側
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">required</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">boolean</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">false</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    是否為必填欄位，會在標籤後顯示紅色星號 *
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">rules</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">ValidationRule[]</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">[]</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    驗證規則陣列，定義欄位的驗證邏輯
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">layout</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    'vertical' | 'horizontal'
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'vertical'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    標籤與輸入框的佈局方式
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">labelWidth</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">'120px'</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">水平佈局時標籤的寬度</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">className</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">string</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    自訂 CSS 類名，用於客製化樣式
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">children</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">React.ReactNode</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">否</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    表單控制項組件，如 Input、Select、Radio 等
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Rules 詳細說明 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎯 Rules 驗證規則詳解</h2>
        <p className="component-docs-section-description">
          Rules 提供了豐富的驗證規則工廠函數，每個函數都支援自訂錯誤訊息和觸發時機：
        </p>

        <div className="component-docs-info-card">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    規則名稱
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    參數
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    說明
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                    使用範例
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.required
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">message?, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    必填驗證，檢查值是否為空
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.required('此欄位為必填')
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.minLength
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    length, message?, trigger?
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">最小長度驗證</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.minLength(3, '至少3個字元')
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.maxLength
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    length, message?, trigger?
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">最大長度驗證</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.maxLength(50, '最多50字元')
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.email
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">message?, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">電子郵件格式驗證</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.email('請輸入正確格式')
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.phone
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">message?, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    手機號碼格式驗證（台灣格式）
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.phone('請輸入正確手機號碼')
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.number
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">message?, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">數字格式驗證</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.number('請輸入數字')
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.password
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">message?, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    密碼強度驗證（至少8字元，包含大小寫字母和數字）
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.password('密碼強度不足')
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.pattern
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    regex, message?, trigger?
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">自訂正規表達式驗證</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    Rules.pattern(/^[A-Z]/, '須大寫開頭')
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                    Rules.custom
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">validator, trigger?</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">自訂驗證函數</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm font-mono">
                    {`Rules.custom((v) => v === 'admin' ? '不可用' : null)`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3">觸發時機參數</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      觸發時機
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      說明
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      適用場景
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                      'onChange'
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">輸入時立即驗證</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">必填檢查、即時反饋</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">'onBlur'</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">失焦後驗證</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      格式檢查、避免輸入干擾
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                      'onSubmit'
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">提交時驗證</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">複雜驗證、最終檢查</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                      ['onChange', 'onBlur']
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">多重觸發時機</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">組合驗證需求</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-mono text-sm">
                      undefined
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      所有時機都觸發（預設）
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">通用驗證</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { Form, FormItem, Rules } from 'eonui';

// 基本表單
<Form onSubmit={(values) => console.log(values)}>
  <FormItem name="username" label="使用者名稱" required>
    <Input placeholder="請輸入使用者名稱" />
  </FormItem>

  <FormItem name="email" label="電子郵件">
    <Input type="email" placeholder="請輸入電子郵件" />
  </FormItem>

  <Button type="submit">提交</Button>
</Form>

// 帶驗證的表單
<Form onSubmit={handleSubmit}>
  <FormItem
    name="username"
    label="使用者名稱"
    required
    rules={[
      Rules.required('使用者名稱為必填'),
      Rules.minLength(3, '至少需要3個字元')
    ]}
  >
    <Input placeholder="請輸入使用者名稱" />
  </FormItem>
</Form>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 不同驗證時機
<FormItem
  name="email"
  label="電子郵件"
  rules={[
    Rules.required('電子郵件為必填', 'onChange'),
    Rules.email('請輸入有效格式', 'onBlur')
  ]}
>
  <Input type="email" />
</FormItem>

// 水平佈局
<FormItem
  name="name"
  label="姓名"
  layout="horizontal"
  labelWidth="120px"
  required
>
  <Input placeholder="請輸入姓名" />
</FormItem>

// 初始值
<Form
  initialValues={{
    username: 'john_doe',
    email: 'john@example.com'
  }}
  onSubmit={handleSubmit}
>
  {/* FormItems */}
</Form>

// 自訂驗證
<FormItem
  name="password"
  label="密碼"
  rules={[
    Rules.custom((value) => {
      if (!value || value.length < 8) {
        return '密碼至少需要8個字元';
      }
      return null;
    })
  ]}
>
  <Input type="password" />
</FormItem>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 Form 組件的所有功能，可以在你的項目中開始使用了！
          這個表單組件提供了完整的狀態管理和驗證功能，適用於各種表單場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof Form> = {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <FormDocs />,
    },
  },
  argTypes: {
    initialValues: {
      control: { type: 'object' },
      description: '表單的初始值',
      table: {
        type: { summary: 'Record<string, unknown>' },
      },
    },
    onSubmit: {
      action: 'submitted',
      description: '表單提交時的回調函數',
      table: {
        type: { summary: '(values: Record<string, unknown>) => void' },
      },
    },
    className: {
      control: { type: 'text' },
      description: '自訂 CSS 類名',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 主要的 Story，用於文檔中的 <Primary />
export const Docs: Story = {
  render: (args) => (
    <div className="max-w-md">
      <Form {...args}>
        <FormItem
          name="username"
          label="使用者名稱"
          required
          rules={[Rules.required('使用者名稱為必填'), Rules.minLength(2, '至少需要2個字元')]}
        >
          <Input placeholder="請輸入使用者名稱" />
        </FormItem>

        <FormItem
          name="email"
          label="電子郵件"
          rules={[Rules.email('請輸入正確的電子郵件格式')]}
        >
          <Input
            type="email"
            placeholder="請輸入電子郵件"
          />
        </FormItem>

        <FormItem
          name="gender"
          label="性別"
          required
          rules={[Rules.required('請選擇性別')]}
        >
          <Select
            options={[
              { value: 'male', label: '男性' },
              { value: 'female', label: '女性' },
              { value: 'other', label: '其他' },
            ]}
            placeholder="請選擇性別"
          />
        </FormItem>

        <FormItem
          name="hobbies"
          label="興趣愛好"
        >
          <CheckboxGroup>
            <Checkbox value="reading">閱讀</Checkbox>
            <Checkbox value="music">音樂</Checkbox>
            <Checkbox value="sports">運動</Checkbox>
          </CheckboxGroup>
        </FormItem>

        <FormItem
          name="contactMethod"
          label="聯絡方式"
          required
          rules={[Rules.required('請選擇聯絡方式')]}
        >
          <RadioGroup>
            <Radio value="email">電子郵件</Radio>
            <Radio value="phone">電話</Radio>
            <Radio value="sms">簡訊</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          name="message"
          label="留言"
          rules={[Rules.maxLength(500, '留言不能超過500字')]}
        >
          <Textarea
            placeholder="請輸入您的留言..."
            rows={3}
          />
        </FormItem>

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
          >
            提交表單
          </Button>
        </div>
      </Form>
    </div>
  ),
  args: {
    onSubmit: (values: Record<string, unknown>) => {
      // eslint-disable-next-line no-console
      console.log('表單提交:', values);
      alert(`表單提交成功！\n\n${JSON.stringify(values, null, 2)}`);
    },
  },
};

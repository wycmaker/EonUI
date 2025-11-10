import React, { useState } from 'react';

import { Story, Controls, Primary } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { CodeExample } from '../shared/CodeExample';

import { DatePicker } from './DatePicker';
import '../../styles/component-docs.css';

// 互動式範例組件
const InteractiveExample = () => {
  const [dateValue, setDateValue] = useState<string | null>(null);
  const [timeValue, setTimeValue] = useState<string | null>(null);
  const [datetimeValue, setDatetimeValue] = useState<string | null>(null);
  const [yearValue, setYearValue] = useState<string | null>(null);
  const [rangeStart, setRangeStart] = useState<string | null>(null);

  return (
    <div className="space-y-8 w-full max-w-md">
      {/* 日期選擇 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">日期選擇</h4>
        <DatePicker
          mode="date"
          value={dateValue}
          onChange={(date) => setDateValue(date)}
          clearable
          placeholder="選擇日期"
        />
        {dateValue && <p className="text-sm text-gray-600 mt-2">選中日期：{dateValue}</p>}
      </div>

      {/* 時間選擇 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">時間選擇</h4>
        <DatePicker
          mode="time"
          value={timeValue}
          onChange={(time) => setTimeValue(time)}
          clearable
          placeholder="選擇時間"
        />
        {timeValue && (
          <p className="text-sm text-gray-600 mt-2">
            選中時間：
            {timeValue}
          </p>
        )}
      </div>

      {/* 日期時間選擇 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">日期時間選擇</h4>
        <DatePicker
          mode="datetime"
          value={datetimeValue}
          onChange={(datetime) => setDatetimeValue(datetime)}
          clearable
          placeholder="選擇日期和時間"
        />
        {datetimeValue && (
          <p className="text-sm text-gray-600 mt-2">選中日期時間：{datetimeValue}</p>
        )}
      </div>

      {/* 年份選擇 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">年份選擇</h4>
        <DatePicker
          mode="year"
          value={yearValue}
          onChange={(year) => setYearValue(year)}
          clearable
          placeholder="選擇年份"
        />
        {yearValue && <p className="text-sm text-gray-600 mt-2">選中年份：{yearValue}</p>}
      </div>

      {/* 限制範圍的日期選擇 */}
      <div>
        <h4 className="font-medium mb-3 text-gray-700">限制範圍（未來30天）</h4>
        <DatePicker
          mode="date"
          value={rangeStart}
          onChange={(date) => setRangeStart(date)}
          minDate={new Date()}
          maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
          clearable
          placeholder="選擇未來30天內的日期"
        />
      </div>
    </div>
  );
};

const DatePickerDocs = () => {
  return (
    <div className="component-docs-container">
      {/* 標題和描述 */}
      <div className="component-docs-header">
        <h1 className="component-docs-title">DatePicker 日期選擇器</h1>
        <p className="component-docs-description">
          EonUI 的日期選擇器組件，支援日期、時間、日期時間、年份四種模式。
          提供豐富的自訂選項，包括日期範圍限制、禁用日期、自訂格式等功能。 設計風格與其他 Input
          組件保持一致，支援多種樣式變體和狀態。
          <strong>新功能：</strong>
          支援手動輸入日期時間、點擊年月標題快速切換到年份或月份選擇器，以及全新的年份選擇模式！
        </p>
      </div>

      {/* 主要預覽區域 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">🎮 互動式範例</h2>
        <p className="component-docs-section-description">
          使用下方的控制面板來即時調整 DatePicker 的各種屬性：
        </p>

        <Primary />

        <Controls />
      </div>

      {/* 實際使用範例 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔄 實際使用範例"
          description="以下是實際的日期選擇器範例，展示各種功能組合："
          code={`const [date, setDate] = useState(new Date());
const [time, setTime] = useState('12:00');
const [datetime, setDatetime] = useState(new Date());
const [year, setYear] = useState(new Date());

// 日期選擇
<DatePicker
  mode="date"
  value={date}
  onChange={setDate}
  placeholder="選擇日期"
/>

// 時間選擇
<DatePicker
  mode="time"
  value={time}
  onChange={setTime}
  placeholder="選擇時間"
/>

// 日期時間選擇
<DatePicker
  mode="datetime"
  value={datetime}
  onChange={setDatetime}
  placeholder="選擇日期和時間"
/>

// 年份選擇
<DatePicker
  mode="year"
  value={year}
  onChange={setYear}
  placeholder="選擇年份"
/>`}
        >
          <InteractiveExample />
        </CodeExample>
      </div>

      {/* 選擇器模式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎯 選擇器模式"
          description="DatePicker 支援四種不同的選擇模式："
          code={`// 日期模式 - 僅選擇日期
<DatePicker
  mode="date"
  placeholder="選擇日期"
  defaultValue={new Date()}
/>

// 時間模式 - 僅選擇時間
<DatePicker
  mode="time"
  placeholder="選擇時間"
  defaultValue={new Date()}
/>

// 日期時間模式 - 同時選擇日期和時間
<DatePicker
  mode="datetime"
  placeholder="選擇日期和時間"
  defaultValue={new Date()}
/>

// 年份模式 - 僅選擇年份
<DatePicker
  mode="year"
  placeholder="選擇年份"
  defaultValue={new Date()}
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期模式 (date)</h4>
              <DatePicker
                mode="date"
                placeholder="選擇日期"
                defaultValue={new Date()}
              />
              <p className="text-sm text-gray-500 mt-1">僅選擇日期，格式：YYYY-MM-DD</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">時間模式 (time)</h4>
              <DatePicker
                mode="time"
                placeholder="選擇時間"
                defaultValue={new Date()}
              />
              <p className="text-sm text-gray-500 mt-1">僅選擇時間，格式：HH:mm</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期時間模式 (datetime)</h4>
              <DatePicker
                mode="datetime"
                placeholder="選擇日期和時間"
                defaultValue={new Date()}
              />
              <p className="text-sm text-gray-500 mt-1">
                同時選擇日期和時間，格式：YYYY-MM-DD HH:mm
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">年份模式 (year)</h4>
              <DatePicker
                mode="year"
                placeholder="選擇年份"
                defaultValue={new Date()}
              />
              <p className="text-sm text-gray-500 mt-1">僅選擇年份，格式：YYYY</p>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>模式說明：</strong>
          <ul>
            <li>
              <strong>date：</strong>僅日期選擇，顯示日曆面板
            </li>
            <li>
              <strong>time：</strong>僅時間選擇，顯示時間選擇器
            </li>
            <li>
              <strong>datetime：</strong>日期和時間選擇，同時顯示日曆和時間選擇器
            </li>
            <li>
              <strong>year：</strong>僅年份選擇，直接顯示年份選擇面板
            </li>
          </ul>
        </div>
      </div>

      {/* 樣式變體 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 樣式變體"
          description="DatePicker 組件提供了三種不同的樣式變體："
          code={`// 預設樣式
<DatePicker
  variant="default"
  placeholder="預設樣式"
  mode="date"
/>

// 填充樣式
<DatePicker
  variant="filled"
  placeholder="填充樣式"
  mode="date"
/>

// 外框樣式
<DatePicker
  variant="outline"
  placeholder="外框樣式"
  mode="date"
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              variant="default"
              placeholder="預設樣式"
              mode="date"
            />
            <DatePicker
              variant="filled"
              placeholder="填充樣式"
              mode="date"
            />
            <DatePicker
              variant="outline"
              placeholder="外框樣式"
              mode="date"
            />
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>使用建議：</strong>
          <ul>
            <li>
              <strong>Default：</strong>標準樣式，適用於大多數場景
            </li>
            <li>
              <strong>Filled：</strong>填充樣式，適用於需要視覺區分的設計
            </li>
            <li>
              <strong>Outline：</strong>外框樣式，適用於需要強調邊界的設計
            </li>
          </ul>
        </div>
      </div>

      {/* 大小選項 */}
      <div className="component-docs-section">
        <CodeExample
          title="📏 大小選項"
          description="支援三種不同的大小選項，所有尺寸都符合 WCAG 最小觸控目標要求："
          code={`// 小尺寸 (32px)
<DatePicker
  size="sm"
  placeholder="小尺寸 (32px)"
  mode="date"
/>

// 中等尺寸 (40px) - 預設
<DatePicker
  size="md"
  placeholder="中等尺寸 (40px)"
  mode="date"
/>

// 大尺寸 (48px)
<DatePicker
  size="lg"
  placeholder="大尺寸 (48px)"
  mode="date"
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              size="sm"
              placeholder="小尺寸 (32px)"
              mode="date"
            />
            <DatePicker
              size="md"
              placeholder="中等尺寸 (40px)"
              mode="date"
            />
            <DatePicker
              size="lg"
              placeholder="大尺寸 (48px)"
              mode="date"
            />
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>尺寸指南：</strong>
          <ul>
            <li>
              <strong>sm：</strong>32px 高度，適用於緊湊的界面設計
            </li>
            <li>
              <strong>md：</strong>40px 高度，標準大小，適用於大多數場景
            </li>
            <li>
              <strong>lg：</strong>48px 高度，適用於重要的日期選擇
            </li>
          </ul>
        </div>
      </div>

      {/* 狀態展示 */}
      <div className="component-docs-section">
        <CodeExample
          title="🚦 狀態展示"
          description="日期選擇器支援多種狀態，提供清晰的視覺反饋："
          code={`// 預設狀態
<DatePicker
  status="default"
  placeholder="預設狀態"
  mode="date"
/>

// 錯誤狀態
<DatePicker
  status="error"
  placeholder="錯誤狀態"
  mode="date"
/>

// 成功狀態
<DatePicker
  status="success"
  placeholder="成功狀態"
  mode="date"
/>

// 警告狀態
<DatePicker
  status="warning"
  placeholder="警告狀態"
  mode="date"
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              status="default"
              placeholder="預設狀態"
              mode="date"
            />
            <DatePicker
              status="error"
              placeholder="錯誤狀態"
              mode="date"
            />
            <DatePicker
              status="success"
              placeholder="成功狀態"
              mode="date"
            />
            <DatePicker
              status="warning"
              placeholder="警告狀態"
              mode="date"
            />
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>狀態說明：</strong>
          <ul>
            <li>
              <strong>Default：</strong>預設狀態，無特殊提示
            </li>
            <li>
              <strong>Error：</strong>錯誤狀態，紅色邊框表示選擇錯誤
            </li>
            <li>
              <strong>Success：</strong>成功狀態，綠色邊框表示選擇正確
            </li>
            <li>
              <strong>Warning：</strong>警告狀態，黃色邊框提醒用戶注意
            </li>
          </ul>
        </div>
      </div>

      {/* 日期範圍限制 */}
      <div className="component-docs-section">
        <CodeExample
          title="📅 日期範圍限制"
          description="支援最小日期、最大日期和禁用日期功能。當設置日期限制時，如果「今天」或「現在」不在允許範圍內，相應的快捷按鈕會自動隱藏："
          code={`// 最小日期限制（今天開始）
<DatePicker
  mode="date"
  minDate={new Date()}
  placeholder="只能選擇今天及以後的日期"
/>

// 最大日期限制（本月內）
<DatePicker
  mode="date"
  maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
  placeholder="只能選擇本月內的日期"
/>

// 日期範圍（未來7天）
<DatePicker
  mode="date"
  minDate={new Date()}
  maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
  placeholder="只能選擇未來7天內的日期"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">最小日期限制（今天開始）</h4>
              <DatePicker
                mode="date"
                minDate={new Date()}
                placeholder="只能選擇今天及以後的日期"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">最大日期限制（本月內）</h4>
              <DatePicker
                mode="date"
                maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)}
                placeholder="只能選擇本月內的日期"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期範圍（未來7天）</h4>
              <DatePicker
                mode="date"
                minDate={new Date()}
                maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                placeholder="只能選擇未來7天內的日期"
              />
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>範圍限制功能：</strong>
          <ul>
            <li>
              <strong>minDate：</strong>設定最小可選日期
            </li>
            <li>
              <strong>maxDate：</strong>設定最大可選日期
            </li>
            <li>
              <strong>disabledDates：</strong>禁用特定日期（陣列或函數）
            </li>
            <li>超出範圍的日期會顯示為禁用狀態</li>
          </ul>
        </div>
      </div>

      {/* 自訂格式 */}
      <div className="component-docs-section">
        <CodeExample
          title="🎨 自訂格式"
          description="支援自訂日期時間顯示格式："
          code={`// 預設格式
<DatePicker
  mode="date"
  placeholder="YYYY-MM-DD"
  defaultValue={new Date()}
/>

// 自訂日期格式
<DatePicker
  mode="date"
  format="YYYY年MM月DD日"
  placeholder="YYYY年MM月DD日"
  defaultValue={new Date()}
/>

// 自訂時間格式
<DatePicker
  mode="time"
  format="HH時mm分"
  placeholder="HH時mm分"
  defaultValue={new Date()}
/>

// 自訂日期時間格式
<DatePicker
  mode="datetime"
  format="YYYY/MM/DD HH:mm"
  placeholder="YYYY/MM/DD HH:mm"
  defaultValue={new Date()}
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">預設格式</h4>
              <DatePicker
                mode="date"
                placeholder="YYYY-MM-DD"
                defaultValue={new Date()}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂日期格式</h4>
              <DatePicker
                mode="date"
                format="YYYY年MM月DD日"
                placeholder="YYYY年MM月DD日"
                defaultValue={new Date()}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂時間格式</h4>
              <DatePicker
                mode="time"
                format="HH時mm分"
                placeholder="HH時mm分"
                defaultValue={new Date()}
              />
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自訂日期時間格式</h4>
              <DatePicker
                mode="datetime"
                format="YYYY/MM/DD HH:mm"
                placeholder="YYYY/MM/DD HH:mm"
                defaultValue={new Date()}
              />
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>格式化標記：</strong>
          <ul>
            <li>
              <strong>YYYY：</strong>四位數年份
            </li>
            <li>
              <strong>MM：</strong>兩位數月份
            </li>
            <li>
              <strong>DD：</strong>兩位數日期
            </li>
            <li>
              <strong>HH：</strong>兩位數小時（24小時制）
            </li>
            <li>
              <strong>mm：</strong>兩位數分鐘
            </li>
            <li>
              <strong>ss：</strong>兩位數秒數
            </li>
          </ul>
        </div>
      </div>

      {/* 手動輸入 */}
      <div className="component-docs-section">
        <CodeExample
          title="⌨️ 手動輸入"
          description="DatePicker 支援直接在輸入框中手動輸入日期、時間或日期時間："
          code={`// 日期模式 - 支援多種格式
<DatePicker
  mode="date"
  placeholder="可直接輸入日期，如：2024-12-25"
/>

// 時間模式 - HH:mm 或 HH:mm:ss
<DatePicker
  mode="time"
  placeholder="可直接輸入時間，如：14:30"
/>

// 日期時間模式
<DatePicker
  mode="datetime"
  placeholder="可直接輸入日期時間，如：2024-12-25 14:30"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期輸入</h4>
              <DatePicker
                mode="date"
                placeholder="可直接輸入日期，如：2024-12-25"
              />
              <p className="text-sm text-gray-500 mt-1">支援格式：YYYY-MM-DD 或 YYYY/MM/DD</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">時間輸入</h4>
              <DatePicker
                mode="time"
                placeholder="可直接輸入時間，如：14:30"
              />
              <p className="text-sm text-gray-500 mt-1">支援格式：HH:mm 或 HH:mm:ss</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期時間輸入</h4>
              <DatePicker
                mode="datetime"
                placeholder="可直接輸入日期時間，如：2024-12-25 14:30"
              />
              <p className="text-sm text-gray-500 mt-1">
                支援格式：YYYY-MM-DD HH:mm 或 YYYY-MM-DD HH:mm:ss
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">輸入驗證</h4>
              <DatePicker
                mode="date"
                minDate={new Date()}
                placeholder="試試輸入過去的日期"
              />
              <p className="text-sm text-gray-500 mt-1">
                輸入無效或超出範圍的日期時，會自動恢復原值
              </p>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>手動輸入功能說明：</strong>
          <ul>
            <li>
              <strong>雙模式操作：</strong>點擊或聚焦輸入框時，會同時打開選擇面板並允許手動輸入
            </li>
            <li>
              <strong>面板選擇：</strong>可以在面板中點擊選擇日期/時間
            </li>
            <li>
              <strong>手動輸入：</strong>也可以直接在輸入框中輸入日期/時間
            </li>
            <li>
              <strong>Enter 確認：</strong>按 Enter 鍵確認輸入並驗證
            </li>
            <li>
              <strong>Esc 取消：</strong>按 Esc 鍵取消輸入、恢復原值並關閉面板
            </li>
            <li>
              <strong>失焦驗證：</strong>輸入框失焦時自動驗證並格式化輸入
            </li>
            <li>
              <strong>格式支援：</strong>支援破折號（-）和斜線（/）作為日期分隔符
            </li>
            <li>
              <strong>範圍檢查：</strong>自動檢查 minDate、maxDate 和 disabledDates 限制
            </li>
            <li>
              <strong>錯誤處理：</strong>無效輸入會自動恢復為上一個有效值
            </li>
          </ul>
        </div>
      </div>

      {/* 快速年月選擇 */}
      <div className="component-docs-section">
        <CodeExample
          title="📅 快速年月選擇"
          description="在 date 或 datetime 模式下，點擊日曆頂部的年月標題可快速切換到年份或月份選擇器："
          code={`// 日期模式 - 點擊年份或月份快速選擇
<DatePicker
  mode="date"
  placeholder="點擊年月標題快速選擇"
/>

// 日期時間模式 - 同樣支援快速年月選擇
<DatePicker
  mode="datetime"
  placeholder="點擊年月標題快速選擇"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期模式</h4>
              <DatePicker
                mode="date"
                placeholder="點擊年月標題快速選擇"
              />
              <p className="text-sm text-gray-500 mt-1">
                打開日曆後，點擊頂部的「年份」或「月份」文字即可切換到對應的選擇器
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期時間模式</h4>
              <DatePicker
                mode="datetime"
                placeholder="點擊年月標題快速選擇"
              />
              <p className="text-sm text-gray-500 mt-1">日期時間模式下同樣支援快速年月選擇功能</p>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>快速選擇功能說明：</strong>
          <ul>
            <li>
              <strong>點擊年份：</strong>切換到年份選擇器，可快速選擇年份（顯示 10 年範圍）
            </li>
            <li>
              <strong>點擊月份：</strong>切換到月份選擇器，可快速選擇月份（顯示 12 個月）
            </li>
            <li>
              <strong>選擇年份後：</strong>自動切換到月份選擇器
            </li>
            <li>
              <strong>選擇月份後：</strong>自動返回日期選擇器
            </li>
            <li>
              <strong>視覺提示：</strong>年月標題在 hover 時會變色，提示可點擊
            </li>
          </ul>
        </div>
      </div>

      {/* 時間選擇器進階功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="⏰ 時間選擇器進階功能"
          description="時間選擇器支援秒數顯示和下拉選單式選擇等進階功能："
          code={`// 秒數支援
<DatePicker
  mode="time"
  showSeconds
  placeholder="包含秒數的時間選擇"
/>

<DatePicker
  mode="datetime"
  showSeconds
  placeholder="包含秒數的日期時間選擇"
/>

// 下拉選單式時間選擇器
<DatePicker
  mode="time"
  timePickerStyle="scroll"
  placeholder="下拉選單式時間選擇"
/>

<DatePicker
  mode="time"
  timePickerStyle="scroll"
  showSeconds
  placeholder="下拉選單式時間選擇（含秒）"
/>

// 日期時間組合（下拉選單式）
<DatePicker
  mode="datetime"
  timePickerStyle="scroll"
  showSeconds
  placeholder="下拉選單式日期時間選擇"
/>`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 text-gray-600">秒數支援</h4>
              <div className="flex space-x-4">
                <DatePicker
                  mode="time"
                  showSeconds
                  placeholder="包含秒數的時間選擇"
                />
                <DatePicker
                  mode="datetime"
                  showSeconds
                  placeholder="包含秒數的日期時間選擇"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">設置 showSeconds={true} 來顯示秒數選擇</p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">下拉選單式時間選擇器</h4>
              <div className="flex space-x-4">
                <DatePicker
                  mode="time"
                  timePickerStyle="scroll"
                  placeholder="下拉選單式時間選擇"
                />
                <DatePicker
                  mode="time"
                  timePickerStyle="scroll"
                  showSeconds
                  placeholder="下拉選單式時間選擇（含秒）"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                設置 timePickerStyle="scroll" 來使用下拉選單式選擇器
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">自動應用模式</h4>
              <DatePicker
                mode="time"
                timePickerStyle="scroll"
                placeholder="關閉時自動應用時間選擇"
              />
              <p className="text-sm text-gray-500 mt-1">
                time 模式下，選擇時間後關閉選擇器會自動應用選中的時間
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-3 text-gray-600">日期時間組合（下拉選單式）</h4>
              <DatePicker
                mode="datetime"
                timePickerStyle="scroll"
                showSeconds
                placeholder="下拉選單式日期時間選擇"
              />
              <p className="text-sm text-gray-500 mt-1">
                日期時間模式下，日曆和下拉選單式時間選擇器並排顯示
              </p>
            </div>
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>時間選擇器功能：</strong>
          <ul>
            <li>
              <strong>showSeconds：</strong>是否顯示秒數選擇（預設 false）
            </li>
            <li>
              <strong>timePickerStyle：</strong>時間選擇器樣式，'button'（按鈕式）或
              'scroll'（下拉選單式）
            </li>
            <li>
              <strong>按鈕式：</strong>使用上下箭頭按鈕調整時間，選擇後立即生效
            </li>
            <li>
              <strong>下拉選單式：</strong>
              使用下拉選單選擇時間，time 模式下關閉時自動應用選中的時間
            </li>
            <li>
              <strong>智能寬度：</strong>下拉選單式選擇器會根據是否顯示秒數自動調整寬度
            </li>
          </ul>
        </div>
      </div>

      {/* 清除功能 */}
      <div className="component-docs-section">
        <CodeExample
          title="🗑️ 清除功能"
          description="支援清除按鈕功能："
          code={`// 可清除的日期選擇器
<DatePicker
  mode="date"
  clearable
  placeholder="可清除的日期選擇器"
  defaultValue={new Date()}
/>

// 可清除的時間選擇器
<DatePicker
  mode="time"
  clearable
  placeholder="可清除的時間選擇器"
  defaultValue={new Date()}
/>

// 可清除的日期時間選擇器
<DatePicker
  mode="datetime"
  clearable
  placeholder="可清除的日期時間選擇器"
  defaultValue={new Date()}
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              mode="date"
              clearable
              placeholder="可清除的日期選擇器"
              defaultValue={new Date()}
            />
            <DatePicker
              mode="time"
              clearable
              placeholder="可清除的時間選擇器"
              defaultValue={new Date()}
            />
            <DatePicker
              mode="datetime"
              clearable
              placeholder="可清除的日期時間選擇器"
              defaultValue={new Date()}
            />
          </div>
        </CodeExample>

        <div className="component-docs-info-card">
          <strong>清除功能說明：</strong>
          <ul>
            <li>
              <strong>clearable：</strong>啟用清除按鈕
            </li>
            <li>清除按鈕在有選中值時顯示</li>
            <li>支援無障礙標籤和鍵盤操作</li>
            <li>清除後會觸發 onChange 和 onClear 回調</li>
          </ul>
        </div>
      </div>

      {/* 禁用狀態 */}
      <div className="component-docs-section">
        <CodeExample
          title="🚫 禁用狀態"
          description="展示禁用狀態下的各種樣式："
          code={`// 禁用的日期選擇器
<DatePicker
  disabled
  placeholder="禁用的日期選擇器"
  mode="date"
/>

// 禁用的填充樣式
<DatePicker
  disabled
  variant="filled"
  placeholder="禁用的填充樣式"
  mode="time"
/>

// 禁用且有預設值
<DatePicker
  disabled
  defaultValue={new Date()}
  mode="datetime"
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              disabled
              placeholder="禁用的日期選擇器"
              mode="date"
            />
            <DatePicker
              disabled
              variant="filled"
              placeholder="禁用的填充樣式"
              mode="time"
            />
            <DatePicker
              disabled
              defaultValue={new Date()}
              mode="datetime"
            />
          </div>
        </CodeExample>
      </div>

      {/* 組合使用 */}
      <div className="component-docs-section">
        <CodeExample
          title="🔗 組合使用"
          description="展示各種屬性的組合使用："
          code={`// 大尺寸外框成功狀態，帶清除功能和自訂格式
<DatePicker
  size="lg"
  variant="outline"
  status="success"
  mode="datetime"
  clearable
  placeholder="大尺寸外框成功狀態"
  defaultValue={new Date()}
  format="YYYY年MM月DD日 HH:mm"
/>

// 小尺寸填充警告狀態，帶日期限制
<DatePicker
  size="sm"
  variant="filled"
  status="warning"
  mode="date"
  placeholder="小尺寸填充警告狀態"
  minDate={new Date()}
/>`}
        >
          <div className="space-y-4">
            <DatePicker
              size="lg"
              variant="outline"
              status="success"
              mode="datetime"
              clearable
              placeholder="大尺寸外框成功狀態"
              defaultValue={new Date()}
              format="YYYY年MM月DD日 HH:mm"
            />
            <DatePicker
              size="sm"
              variant="filled"
              status="warning"
              mode="date"
              placeholder="小尺寸填充警告狀態"
              minDate={new Date()}
            />
          </div>
        </CodeExample>
      </div>

      {/* 使用方式 */}
      <div className="component-docs-section">
        <h2 className="component-docs-section-title">💻 使用方式</h2>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">基本用法</h4>
          <pre className="component-docs-code">{`import { DatePicker } from 'eonui';

// 基本日期選擇器
<DatePicker mode="date" placeholder="選擇日期" />

// 帶樣式的日期選擇器
<DatePicker
  variant="filled"
  size="lg"
  mode="datetime"
  placeholder="大尺寸填充樣式"
/>

// 可清除的日期選擇器
<DatePicker
  mode="date"
  clearable
  placeholder="選擇日期..."
/>

// 不同狀態
<DatePicker
  status="error"
  placeholder="錯誤狀態"
  mode="date"
/>

<DatePicker
  status="success"
  placeholder="成功狀態"
  mode="time"
/>`}</pre>
        </div>

        <div className="component-docs-code-block">
          <h4 className="component-docs-code-title">進階用法</h4>
          <pre className="component-docs-code">{`// 受控組件
const [date, setDate] = useState<Date | null>(null);

<DatePicker
  value={date}
  onChange={(newDate, dateString) => {
    setDate(newDate);
    console.log('選中日期:', dateString);
  }}
  onClear={() => setDate(null)}
  clearable
  mode="date"
/>

// 日期範圍限制
<DatePicker
  mode="date"
  minDate={new Date()} // 今天開始
  maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30天內
  placeholder="選擇未來30天內的日期"
/>

// 禁用特定日期
<DatePicker
  mode="date"
  disabledDates={[
    new Date('2024-01-01'), // 元旦
    new Date('2024-12-25'), // 聖誕節
  ]}
  placeholder="選擇日期（排除節日）"
/>

// 禁用週末
<DatePicker
  mode="date"
  disabledDates={(date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 週日和週六
  }}
  placeholder="選擇工作日"
/>

// 自訂格式
<DatePicker
  mode="datetime"
  format="YYYY年MM月DD日 HH時mm分"
  placeholder="自訂格式顯示"
/>

// 組合使用
<DatePicker
  mode="datetime"
  size="lg"
  variant="outline"
  status="success"
  clearable
  minDate={new Date()}
  format="YYYY/MM/DD HH:mm"
  placeholder="選擇日期時間..."
/>

// 自訂樣式
<DatePicker
  className="border-blue-500 focus:ring-blue-500"
  placeholder="自訂樣式"
  mode="date"
/>`}</pre>
        </div>
      </div>

      {/* 開始使用提示 */}
      <div className="component-docs-cta">
        <h3 className="component-docs-cta-title">🚀 開始使用</h3>
        <p className="component-docs-cta-text">
          現在你已經了解了 DatePicker 組件的所有功能，可以在你的項目中開始使用了！
          這個日期選擇器組件提供了豐富的自訂選項，適用於各種日期時間選擇場景。
        </p>
      </div>
    </div>
  );
};

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => <DatePickerDocs />,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outline'],
      description: '日期選擇器的視覺樣式變體',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '日期選擇器的大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: '日期選擇器的狀態',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    mode: {
      control: { type: 'select' },
      options: ['date', 'time', 'datetime'],
      description: '選擇器模式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'date' },
      },
    },
    clearable: {
      control: { type: 'boolean' },
      description: '是否顯示清除按鈕',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    format: {
      control: { type: 'text' },
      description: '日期格式化字串',
      table: {
        type: { summary: 'string' },
      },
    },
    showToday: {
      control: { type: 'boolean' },
      description: '是否顯示今天按鈕',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showNow: {
      control: { type: 'boolean' },
      description: '是否顯示現在按鈕（時間模式）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showSeconds: {
      control: { type: 'boolean' },
      description: '是否顯示秒數選擇（時間和日期時間模式）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    timePickerStyle: {
      control: { type: 'select' },
      options: ['button', 'scroll'],
      description: '時間選擇器樣式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: '佔位符文字',
      table: {
        type: { summary: 'string' },
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
      description: '值改變時的回調函數',
      table: {
        type: { summary: '(date: Date | null, dateString: string) => void' },
      },
    },
    onClear: {
      action: 'cleared',
      description: '清除按鈕的回調函數',
      table: {
        type: { summary: '() => void' },
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
  args: {
    placeholder: '請選擇日期',
    variant: 'default',
    size: 'md',
    status: 'default',
    mode: 'date',
    clearable: false,
    showToday: true,
    showNow: true,
  },
};

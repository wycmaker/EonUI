import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./iframe-DtrAF50Y.js";import{P as v,C as T}from"./blocks-CAYfFhLU.js";import{C as c}from"./CodeExample-vFRyXKH9.js";import{T as d,a as r}from"./Table-DVawvMtd.js";/* empty css                       */import{B as x}from"./Button-BYg5JYyV.js";import{I as j}from"./Input-Bd2b6GDo.js";import{S as C}from"./Select-DePU6ZRl.js";import"./preload-helper-Ll21cQ8F.js";import"./index-DDMkSrZn.js";import"./cn-Dtjc6EhN.js";import"./icons-B4aNx7RA.js";import"./clearable-C08SD5GV.js";import"./formStyles-D_LMpAhg.js";import"./useClickOutside-DMt3zXhd.js";import"./usePortal-hRK3-VjC.js";const i=[{id:1,name:"張三",email:"zhang.san@example.com",age:28,role:"前端開發",status:"active",joinDate:new Date("2023-01-15"),salary:65e3},{id:2,name:"李四",email:"li.si@example.com",age:32,role:"後端開發",status:"active",joinDate:new Date("2022-08-20"),salary:75e3},{id:3,name:"王五",email:"wang.wu@example.com",age:25,role:"設計師",status:"inactive",joinDate:new Date("2023-06-10"),salary:55e3},{id:4,name:"趙六",email:"zhao.liu@example.com",age:30,role:"產品經理",status:"active",joinDate:new Date("2021-12-05"),salary:8e4},{id:5,name:"錢七",email:"qian.qi@example.com",age:27,role:"測試工程師",status:"active",joinDate:new Date("2023-03-12"),salary:6e4}],K=()=>{const[t,l]=h.useState(i),[m,y]=h.useState(null),[o,b]=h.useState({}),g=a=>{y(a.id),b(a)},u=()=>{m&&o&&(l(a=>a.map(s=>s.id===m?{...s,...o}:s)),y(null),b({}))},N=()=>{y(null),b({})},f=a=>{confirm("確定要刪除此用戶嗎？")&&l(s=>s.filter(n=>n.id!==a))};return e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-3",children:"用戶管理表格"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"這個表格展示了完整的 CRUD 操作，包括排序、編輯和刪除功能。"}),e.jsxs(d,{value:t,variant:"bordered",size:"md",hover:!0,stickyHeader:!0,maxHeight:"400px",className:"border rounded-lg",children:[e.jsx(r,{dataKey:"id",title:"ID",width:"60px",sortable:!0,align:"center"}),e.jsx(r,{dataKey:"name",title:"姓名",width:"120px",sortable:!0,children:(a,s)=>m===s.id?e.jsx(j,{size:"sm",value:o.name||"",onChange:n=>b({...o,name:n.target.value})}):e.jsx("span",{className:"font-medium text-gray-900",children:String(a)})}),e.jsx(r,{dataKey:"email",title:"電子郵件",width:"200px",sortable:!0,children:(a,s)=>m===s.id?e.jsx(j,{size:"sm",type:"email",value:o.email||"",onChange:n=>b({...o,email:n.target.value})}):e.jsx("a",{href:`mailto:${String(a)}`,className:"text-primary-600 hover:text-primary-800",children:String(a)})}),e.jsx(r,{dataKey:"age",title:"年齡",width:"80px",sortable:!0,align:"center",children:(a,s)=>m===s.id?e.jsx(j,{size:"sm",type:"number",value:o.age||"",onChange:n=>b({...o,age:parseInt(n.target.value)})}):e.jsxs("span",{children:[String(a),"歲"]})}),e.jsx(r,{dataKey:"role",title:"職位",width:"120px",sortable:!0,children:(a,s)=>m===s.id?e.jsx(C,{size:"sm",value:o.role,onChange:n=>b({...o,role:n}),options:[{label:"前端開發",value:"前端開發"},{label:"後端開發",value:"後端開發"},{label:"設計師",value:"設計師"},{label:"產品經理",value:"產品經理"},{label:"測試工程師",value:"測試工程師"}]}):e.jsx("span",{className:"px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",children:String(a)})}),e.jsx(r,{dataKey:"status",title:"狀態",width:"80px",sortable:!0,align:"center",children:a=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${a==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:a==="active"?"活躍":"停用"})}),e.jsx(r,{dataKey:"salary",title:"薪資",width:"100px",sortable:!0,align:"right",children:a=>`NT$${a.toLocaleString()}`}),e.jsx(r,{dataKey:"joinDate",title:"加入日期",width:"120px",sortable:!0,children:a=>a.toLocaleDateString("zh-TW")}),e.jsx(r,{dataKey:"actions",title:"操作",width:"150px",align:"center",children:(a,s)=>e.jsx("div",{className:"flex flex-wrap gap-1 justify-center",children:m===s.id?e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"xs",onClick:u,children:"保存"}),e.jsx(x,{size:"xs",variant:"outline",onClick:N,children:"取消"})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"xs",variant:"outline",onClick:()=>g(s),children:"編輯"}),e.jsx(x,{size:"xs",variant:"outline",onClick:()=>f(s.id),className:"text-red-600 hover:text-red-800 border-red-300 hover:border-red-500",children:"刪除"})]})})})]})]})})},w=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Table 表格"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的表格組件，支援資料展示、排序、固定欄位、滾動等功能。 使用 Context 管理表格狀態，TableColumn 定義欄位配置，支援泛型提供完整的型別安全性。 遵循 HTML 語意化標籤和無障礙標準，適用於各種資料展示場景。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Table 的各種屬性："}),e.jsx(v,{}),e.jsx(T,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(c,{title:"🔄 實際使用範例",description:"以下是完整的表格使用範例，展示各種功能組合：",code:`const [selectedRows, setSelectedRows] = useState<string[]>([]);
const [editingId, setEditingId] = useState<string | null>(null);

<Table<User>
  data={users}
  loading={false}
  selectable
  selectedRowKeys={selectedRows}
  onSelectedRowsChange={setSelectedRows}
  pagination={{
    current: 1,
    pageSize: 10,
    total: users.length,
  }}
>
  <TableColumn dataKey="name" title="姓名" sortable />
  <TableColumn dataKey="age" title="年齡" sortable />
  <TableColumn dataKey="role" title="職位" />
</Table>`,children:e.jsx(K,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(c,{title:"🎯 基本用法",description:"Table 組件支援兩種定義欄位的方式：通過 columns prop 或使用 TableColumn 子組件。",code:`// 方法1：使用 columns 屬性定義欄位
<Table<User>
  value={userData}
  columns={[
    { key: 'id', title: 'ID', width: '60px', sortable: true },
    { key: 'name', title: '姓名', width: '120px', sortable: true },
    { key: 'email', title: '電子郵件', sortable: true },
    { key: 'role', title: '職位', sortable: true },
  ]}
  variant="default"
/>

// 方法2：使用 TableColumn 組件定義欄位
<Table<User> value={userData} variant="striped">
  <TableColumn dataKey="id" title="ID" width="60px" sortable />
  <TableColumn dataKey="name" title="姓名" sortable />
  <TableColumn dataKey="email" title="電子郵件" sortable />
  <TableColumn dataKey="role" title="職位" sortable />
</Table>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"使用 columns 屬性定義欄位"}),e.jsx(d,{value:i.slice(0,3),columns:[{key:"id",title:"ID",width:"60px",sortable:!0,align:"center"},{key:"name",title:"姓名",width:"120px",sortable:!0},{key:"email",title:"電子郵件",width:"200px",sortable:!0},{key:"role",title:"職位",width:"120px",sortable:!0}],variant:"default",size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"使用 TableColumn 組件定義欄位"}),e.jsxs(d,{value:i.slice(0,3),variant:"striped",size:"md",children:[e.jsx(r,{dataKey:"id",title:"ID",width:"60px",sortable:!0,align:"center"}),e.jsx(r,{dataKey:"name",title:"姓名",width:"120px",sortable:!0}),e.jsx(r,{dataKey:"email",title:"電子郵件",width:"200px",sortable:!0}),e.jsx(r,{dataKey:"role",title:"職位",width:"120px",sortable:!0})]})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(c,{title:"🎨 樣式變體",description:"Table 組件提供了三種不同的樣式變體：",code:`// 預設樣式
<Table<User> value={data} variant="default" hover>
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
  <TableColumn dataKey="status" title="狀態" />
</Table>

// 條紋樣式
<Table<User> value={data} variant="striped" hover>
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
  <TableColumn dataKey="status" title="狀態" />
</Table>

// 邊框樣式
<Table<User> value={data} variant="bordered" hover>
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
  <TableColumn dataKey="status" title="狀態" />
</Table>`,children:e.jsx("div",{className:"space-y-6",children:["default","striped","bordered"].map(t=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:[t==="default"&&"預設樣式",t==="striped"&&"條紋樣式",t==="bordered"&&"邊框樣式"]}),e.jsxs(d,{value:i.slice(0,3),variant:t,hover:!0,children:[e.jsx(r,{dataKey:"name",title:"姓名",width:"120px"}),e.jsx(r,{dataKey:"email",title:"電子郵件",width:"200px"}),e.jsx(r,{dataKey:"role",title:"職位",width:"120px"}),e.jsx(r,{dataKey:"status",title:"狀態",width:"80px",align:"center",children:l=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs ${l==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:l==="active"?"活躍":"停用"})})]})]},t))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"樣式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"default："}),"簡潔的預設樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"striped："}),"條紋樣式，提高行的可讀性"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"bordered："}),"邊框樣式，清晰的邊界分隔"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(c,{title:"🔄 大小選項範例",description:"支援三種不同的大小選項：",code:`// 小尺寸表格
<Table<User> value={data} size="sm" variant="bordered">
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
</Table>

// 中等尺寸表格（預設）
<Table<User> value={data} size="md" variant="bordered">
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
</Table>

// 大尺寸表格
<Table<User> value={data} size="lg" variant="bordered">
  <TableColumn dataKey="name" title="姓名" />
  <TableColumn dataKey="email" title="電子郵件" />
  <TableColumn dataKey="role" title="職位" />
</Table>`,children:e.jsx("div",{className:"space-y-6",children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-2 text-gray-600",children:["大小：",t.toUpperCase()]}),e.jsxs(d,{value:i.slice(0,2),size:t,variant:"bordered",children:[e.jsx(r,{dataKey:"name",title:"姓名"}),e.jsx(r,{dataKey:"email",title:"電子郵件"}),e.jsx(r,{dataKey:"role",title:"職位"})]})]},t))})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"緊湊型表格，適用於空間有限的場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"寬鬆型表格，適用於需要舒適閱讀的場景"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(c,{title:"🔄 排序功能範例",description:"支援欄位排序功能，點擊表頭可以切換排序方式：",code:`// 啟用欄位排序功能
<Table<User>
  value={data}
  variant="default"
  defaultSortConfig={{ key: 'age', direction: 'asc' }}
>
  <TableColumn<User> dataKey="name" title="姓名" sortable />
  <TableColumn<User> dataKey="age" title="年齡" sortable align="center">
    {(value) => \`\${value}歲\`}
  </TableColumn>
  <TableColumn<User> dataKey="salary" title="薪資" sortable align="right">
    {(value) => \`NT$\${(value as number).toLocaleString()}\`}
  </TableColumn>
  <TableColumn<User> dataKey="joinDate" title="加入日期" sortable>
    {(value) => (value as Date).toLocaleDateString('zh-TW')}
  </TableColumn>
</Table>`,children:e.jsxs(d,{value:i,variant:"default",defaultSortConfig:{key:"age",direction:"asc"},children:[e.jsx(r,{dataKey:"name",title:"姓名",sortable:!0}),e.jsx(r,{dataKey:"age",title:"年齡",sortable:!0,align:"center",children:t=>`${t}歲`}),e.jsx(r,{dataKey:"salary",title:"薪資",sortable:!0,align:"right",children:t=>`NT$${t.toLocaleString()}`}),e.jsx(r,{dataKey:"joinDate",title:"加入日期",sortable:!0,children:t=>t.toLocaleDateString("zh-TW")})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"排序功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:["設置 ",e.jsx("code",{children:"sortable"})," 屬性啟用欄位排序"]}),e.jsx("li",{children:"點擊表頭可切換升序、降序、無排序三種狀態"}),e.jsx("li",{children:"支援預設排序配置和排序變更回調"}),e.jsx("li",{children:"具備完整的無障礙支援（aria-sort）"})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(c,{title:"🔄 自訂渲染範例",description:"使用 TableColumn 的 children 函數可以自訂單元格的渲染內容：",code:`// 使用 children 函數自訂單元格渲染
<Table<User> value={data} variant="striped">
  <TableColumn<User> dataKey="name" title="用戶資訊" width="200px">
    {(_, record) => (
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
          {record.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-gray-900">{record.name}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    )}
  </TableColumn>

  <TableColumn<User> dataKey="status" title="狀態" align="center">
    {(value, record) => (
      <div className="flex flex-col items-center space-y-1">
        <span className={\`px-2 py-1 rounded-full text-xs font-medium \${
          value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }\`}>
          {value === 'active' ? '活躍' : '停用'}
        </span>
        <span className="text-xs text-gray-500">{record.age}歲</span>
      </div>
    )}
  </TableColumn>

  <TableColumn<User> dataKey="id" title="操作" align="center">
    {(_, record) => (
      <div className="space-x-2">
        <Button size="xs" variant="outline">查看</Button>
        <Button size="xs" variant="outline">編輯</Button>
      </div>
    )}
  </TableColumn>
</Table>`,children:e.jsxs(d,{value:i.slice(0,4),variant:"striped",children:[e.jsx(r,{dataKey:"name",title:"用戶資訊",width:"200px",children:(t,l)=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-medium text-sm",children:l.name.charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:l.name}),e.jsx("div",{className:"text-sm text-gray-500",children:l.email})]})]})}),e.jsx(r,{dataKey:"role",title:"職位與薪資",width:"150px",children:(t,l)=>e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:l.role}),e.jsxs("div",{className:"text-sm text-gray-500",children:["NT$",l.salary.toLocaleString()]})]})}),e.jsx(r,{dataKey:"status",title:"狀態",width:"100px",align:"center",children:(t,l)=>e.jsxs("div",{className:"flex flex-col items-center space-y-1",children:[e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${t==="active"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t==="active"?"活躍":"停用"}),e.jsxs("span",{className:"text-xs text-gray-500",children:[l.age,"歲"]})]})}),e.jsx(r,{dataKey:"id",title:"操作",width:"150px",align:"center",children:(t,l)=>e.jsxs("div",{className:"",children:[e.jsx(x,{size:"xs",variant:"outline",children:"查看"}),e.jsx(x,{size:"xs",variant:"outline",children:"編輯"})]})})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(c,{title:"🔄 固定欄位和滾動範例",description:"支援固定欄位和水平/垂直滾動功能：",code:`// 固定表頭和最大高度
<Table<User>
  value={data}
  variant="bordered"
  stickyHeader
  maxHeight="200px"
>
  <TableColumn dataKey="name" title="姓名" width="120px" />
  <TableColumn dataKey="email" title="電子郵件" width="200px" />
  <TableColumn dataKey="role" title="職位" width="120px" />
  <TableColumn dataKey="age" title="年齡" width="80px" align="center" />
  <TableColumn dataKey="salary" title="薪資" width="100px" align="right">
    {(value) => \`NT$\${value.toLocaleString()}\`}
  </TableColumn>
</Table>

// 水平滾動和固定欄位
<Table<User>
  value={data}
  variant="striped"
  maxWidth="600px"
>
  <TableColumn dataKey="id" title="ID" width="60px" fixed="left" />
  <TableColumn dataKey="name" title="姓名" width="500px" />
  <TableColumn dataKey="email" title="電子郵件" width="200px" />
  <TableColumn dataKey="role" title="職位" width="120px" />
  <TableColumn dataKey="actions" title="操作" width="120px" fixed="right">
    {() => (
      <div className="space-x-2">
        <Button size="xs" variant="outline">編輯</Button>
        <Button size="xs" variant="outline">刪除</Button>
      </div>
    )}
  </TableColumn>
</Table>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"固定表頭和最大高度"}),e.jsxs(d,{value:i,variant:"bordered",stickyHeader:!0,maxHeight:"200px",children:[e.jsx(r,{dataKey:"name",title:"姓名",width:"120px"}),e.jsx(r,{dataKey:"email",title:"電子郵件",width:"200px"}),e.jsx(r,{dataKey:"role",title:"職位",width:"120px"}),e.jsx(r,{dataKey:"age",title:"年齡",width:"80px",align:"center"}),e.jsx(r,{dataKey:"salary",title:"薪資",width:"100px",align:"right",children:t=>`NT$${t.toLocaleString()}`})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"水平滾動和固定欄位"}),e.jsxs(d,{value:i.slice(0,3),variant:"striped",maxWidth:"600px",children:[e.jsx(r,{dataKey:"id",title:"ID",width:"60px",fixed:"left"}),e.jsx(r,{dataKey:"name",title:"姓名",width:"500px"}),e.jsx(r,{dataKey:"email",title:"電子郵件",width:"200px"}),e.jsx(r,{dataKey:"role",title:"職位",width:"120px"}),e.jsx(r,{dataKey:"age",title:"年齡",width:"80px"}),e.jsx(r,{dataKey:"salary",title:"薪資",width:"100px"}),e.jsx(r,{dataKey:"joinDate",title:"加入日期",width:"120px"}),e.jsx(r,{dataKey:"actions",title:"操作",width:"120px",fixed:"right",children:()=>e.jsxs("div",{className:"",children:[e.jsx(x,{size:"xs",variant:"outline",children:"編輯"}),e.jsx(x,{size:"xs",variant:"outline",children:"刪除"})]})})]})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"固定和滾動功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"stickyHeader："}),"固定表頭，垂直滾動時表頭保持可見"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"maxHeight："}),"設置最大高度，啟用垂直滾動"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"maxWidth："}),"設置最大寬度，啟用水平滾動"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"fixed："}),"固定欄位到左側或右側，水平滾動時保持可見"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(c,{title:"🔄 狀態展示範例",description:"支援載入狀態和空資料狀態：",code:`// 載入狀態
<Table<User>
  value={[]}
  loading
  columns={[
    { key: 'name', title: '姓名' },
    { key: 'email', title: '電子郵件' },
    { key: 'role', title: '職位' },
  ]}
/>

// 空資料狀態
<Table<User>
  value={[]}
  emptyText="目前沒有用戶資料"
  columns={[
    { key: 'name', title: '姓名' },
    { key: 'email', title: '電子郵件' },
    { key: 'role', title: '職位' },
  ]}
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"載入狀態"}),e.jsx(d,{value:[],loading:!0,columns:[{key:"name",title:"姓名"},{key:"email",title:"電子郵件"},{key:"role",title:"職位"}]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"空資料狀態"}),e.jsx(d,{value:[],emptyText:"目前沒有用戶資料",columns:[{key:"name",title:"姓名"},{key:"email",title:"電子郵件"},{key:"role",title:"職位"}]})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📋 Table Props"}),e.jsx("p",{className:"component-docs-section-description",children:"Table 組件的完整屬性說明，幫助你更好地配置表格："}),e.jsx("div",{className:"component-docs-info-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"屬性名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"類型"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"必填"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"預設值"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"value"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"T[]"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:e.jsx("span",{className:"text-red-600 font-semibold",children:"是"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表格資料陣列"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"columns"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"ColumnDef<T>[]"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"[]"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位定義陣列，可與 TableColumn 子組件混用"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"variant"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'default' | 'striped' | 'bordered'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'default'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表格樣式變體"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"size"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'sm' | 'md' | 'lg'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'md'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表格大小"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"sortable"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"true"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"是否啟用全域排序功能"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"hover"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"true"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"是否顯示 hover 效果"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"stickyHeader"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"false"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"是否固定表頭"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"loading"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"false"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"載入狀態"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"emptyText"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'暫無資料'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"空資料顯示文字"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"maxHeight"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string | number"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表格最大高度，啟用垂直滾動"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"maxWidth"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string | number"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表格最大寬度，啟用水平滾動"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"defaultSortConfig"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"SortConfig"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"{ key: '', direction: null }"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"預設排序配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"onSortChange"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"(config: SortConfig) => void"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"排序變更回調函數。如果提供則為外部控制排序，如果不提供則為內部自動排序"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"renderCell"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"(value, record, index, key) => ReactNode"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"全域自訂單元格渲染函數"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"className"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂 CSS 類名"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"onChange"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"(data: T[]) => void"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"值變更回調"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"onBlur"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"() => void"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"失焦事件"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"children"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"ReactNode"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"TableColumn 子組件"})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📋 TableColumn Props"}),e.jsx("p",{className:"component-docs-section-description",children:"TableColumn 組件的完整屬性說明，用於定義欄位配置："}),e.jsx("div",{className:"component-docs-info-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"屬性名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"類型"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"必填"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"預設值"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"dataKey"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"keyof T"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:e.jsx("span",{className:"text-red-600 font-semibold",children:"是"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位鍵名，對應資料物件的屬性"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"title"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"dataKey 的字串值"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位標題，顯示在表頭"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"width"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string | number"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位寬度，支援 CSS 值或數字（px）"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"sortable"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"false"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"該欄位是否可排序"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"align"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'left' | 'center' | 'right'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'left'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"文字對齊方式"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"fixed"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'left' | 'right'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"固定欄位到左側或右側"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"className"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂 CSS 類名"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"children"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"(value, record, index) => ReactNode"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂渲染函數，用於自訂單元格內容"})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📋 ColumnDef 類型"}),e.jsx("p",{className:"component-docs-section-description",children:"ColumnDef 介面定義，用於 columns 屬性："}),e.jsx("div",{className:"component-docs-info-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"屬性名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"類型"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"必填"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"key"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"keyof T"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:e.jsx("span",{className:"text-red-600 font-semibold",children:"是"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位鍵名"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"title"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:e.jsx("span",{className:"text-red-600 font-semibold",children:"是"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位標題"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"width"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string | number"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位寬度"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"sortable"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"是否可排序"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"align"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'left' | 'center' | 'right'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"文字對齊方式"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"fixed"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'left' | 'right'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"固定欄位位置"})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📋 SortConfig 類型"}),e.jsx("p",{className:"component-docs-section-description",children:"SortConfig 介面定義，用於排序配置："}),e.jsx("div",{className:"component-docs-info-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"屬性名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"類型"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"key"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"排序欄位的鍵名"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"direction"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'asc' | 'desc' | null"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"排序方向：升序、降序或無排序"})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Table, TableColumn } from 'eonui';

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
</Table>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"自訂渲染"}),e.jsx("pre",{className:"component-docs-code",children:`// 自訂單元格渲染
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
</Table>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階功能"}),e.jsx("pre",{className:"component-docs-code",children:`// 排序和回調
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
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Table 組件的所有功能，可以在你的項目中開始使用了！ Table 組件提供了完整的資料展示解決方案，支援排序、自訂渲染、固定欄位等豐富功能。"})]})]}),q={title:"Data Display/Table",component:d,parameters:{layout:"fullscreen",docs:{page:()=>e.jsx(w,{})}},argTypes:{columns:{control:!1,description:"欄位定義陣列",table:{type:{summary:"ColumnDef<T>[]"}}},variant:{control:{type:"select"},options:["default","striped","bordered",["striped","bordered"]],description:"表格樣式變體（可以是單一樣式或多個樣式的陣列）",table:{type:{summary:"'default' | 'striped' | 'bordered' | ('striped' | 'bordered')[]"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"表格大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},sortable:{control:{type:"boolean"},description:"是否啟用排序功能",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hover:{control:{type:"boolean"},description:"是否顯示 hover 效果",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stickyHeader:{control:{type:"boolean"},description:"是否固定表頭",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"載入狀態",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},emptyText:{control:{type:"text"},description:"空資料顯示文字",table:{type:{summary:"string"},defaultValue:{summary:"暫無資料"}}},maxHeight:{control:{type:"text"},description:"表格最大高度",table:{type:{summary:"string | number"}}},maxWidth:{control:{type:"text"},description:"表格最大寬度",table:{type:{summary:"string | number"}}},value:{control:!1,description:"表格資料陣列",table:{type:{summary:"T[]"}}},onChange:{control:!1,description:"值變更回調",table:{type:{summary:"(data: T[]) => void"}}},onBlur:{control:!1,description:"失焦事件",table:{type:{summary:"() => void"}}}},tags:["autodocs"]},p={args:{variant:"default",size:"md",sortable:!0,hover:!0,stickyHeader:!1,loading:!1,emptyText:"暫無資料"},render:t=>e.jsxs(d,{value:i.slice(0,3),variant:t.variant,size:t.size,sortable:t.sortable,hover:t.hover,stickyHeader:t.stickyHeader,loading:t.loading,emptyText:t.emptyText,children:[e.jsx(r,{dataKey:"name",title:"姓名",sortable:!0}),e.jsx(r,{dataKey:"email",title:"電子郵件",sortable:!0}),e.jsx(r,{dataKey:"role",title:"職位",sortable:!0}),e.jsx(r,{dataKey:"status",title:"狀態",align:"center"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    sortable: true,
    hover: true,
    stickyHeader: false,
    loading: false,
    emptyText: '暫無資料'
  },
  render: args => <Table<User> value={sampleData.slice(0, 3)} variant={args.variant} size={args.size} sortable={args.sortable} hover={args.hover} stickyHeader={args.stickyHeader} loading={args.loading} emptyText={args.emptyText}>
      <TableColumn<User> dataKey="name" title="姓名" sortable />
      <TableColumn<User> dataKey="email" title="電子郵件" sortable />
      <TableColumn<User> dataKey="role" title="職位" sortable />
      <TableColumn<User> dataKey="status" title="狀態" align="center" />
    </Table>
}`,...p.parameters?.docs?.source}}};const A=["Docs"];export{p as Docs,A as __namedExportsOrder,q as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-CWGlHkPv.js";import{P as K,C as Z}from"./blocks-iZvN7QCr.js";import{C as S}from"./CodeExample-2qKpfjti.js";import{c as D}from"./cn-Dtjc6EhN.js";/* empty css                       */import{I as t}from"./Input-BP7vwIJK.js";import{S as z}from"./Select-DcFbpeG9.js";import{a as O,C as b}from"./Checkbox-QxAPTZ3H.js";import{R as W,a as C}from"./Radio-1jHub3K0.js";import{T as G}from"./Textarea-CPRPu-Lg.js";import{B as w}from"./Button-DXU_lmna.js";import{T as H,a as $}from"./Table-6xTlyTJp.js";import"./preload-helper-Ll21cQ8F.js";import"./index-5ApEmjN3.js";import"./clearable-C08SD5GV.js";import"./icons-B4aNx7RA.js";import"./formStyles-D_LMpAhg.js";import"./useClickOutside-BYqibX9n.js";import"./usePortal-D2dcPcgw.js";const T=i.createContext(null),P=()=>{const r=i.useContext(T);if(!r)throw new Error("useFormContext must be used within a Form component");return r};try{T.displayName="FormContext",T.__docgenInfo={description:`Form Context
用於在 Form 組件樹中共享表單狀態和方法`,displayName:"FormContext",props:{}}}catch{}try{P.displayName="useFormContext",P.__docgenInfo={description:`useFormContext Hook
獲取 Form Context 的值，必須在 Form 組件內使用`,displayName:"useFormContext",props:{}}}catch{}const h=({initialValues:r={},onSubmit:o,className:v,children:f,...E})=>{const[m,R]=i.useState({values:{...r},errors:{},fields:{}}),q=i.useCallback((a,c)=>{R(x=>({...x,values:{...x.values,[a]:c}}))},[]),_=i.useCallback(a=>m.values[a],[m.values]),j=i.useCallback((a,c)=>{R(x=>({...x,errors:{...x.errors,[a]:c}}))},[]),n=i.useCallback(a=>m.errors[a]||null,[m.errors]),N=i.useCallback((a,c=[])=>{R(x=>({...x,fields:{...x.fields,[a]:{name:a,rules:c}}}))},[]),B=i.useCallback(a=>{R(c=>{const{[a]:x,...I}=c.fields,{[a]:u,...k}=c.errors,{[a]:d,...p}=c.values;return{...c,fields:I,errors:k,values:p}})},[]),g=i.useCallback((a,c=[],x,I)=>{const u=I!==void 0?I:m.values[a],k=x?c.filter(d=>d.trigger?(Array.isArray(d.trigger)?d.trigger:[d.trigger]).includes(x):!0):c;for(const d of k){if(d.required&&(u==null||u==="")){const p={message:d.message||`${a} 為必填欄位`,rule:"required"};return j(a,p),!1}if(!(!d.required&&(u==null||u===""))){if(d.minLength!==void 0&&typeof u=="string"&&u.length<d.minLength){const p={message:d.message||`${a} 最少需要 ${d.minLength} 個字元`,rule:"minLength"};return j(a,p),!1}if(d.maxLength!==void 0&&typeof u=="string"&&u.length>d.maxLength){const p={message:d.message||`${a} 最多只能 ${d.maxLength} 個字元`,rule:"maxLength"};return j(a,p),!1}if(d.pattern&&typeof u=="string"&&!d.pattern.test(u)){const p={message:d.message||`${a} 格式不正確`,rule:"pattern"};return j(a,p),!1}if(d.validator){const p=d.validator(u);if(p)return j(a,{message:p,rule:"custom"}),!1}}}return j(a,null),!0},[m.values,j]),y=i.useCallback(()=>{let a=!0;return Object.keys(m.fields).forEach(x=>{const I=m.fields[x];I&&(g(x,I.rules)||(a=!1))}),a},[m.fields,g]),J=i.useCallback(a=>{a.preventDefault(),y()&&o&&o(m.values)},[o,m.values,y]),V={values:m.values,errors:m.errors,setValue:q,getValue:_,setFieldError:j,getFieldError:n,validateField:g,validateForm:y,registerField:N,unregisterField:B};return e.jsx(T.Provider,{value:V,children:e.jsx("form",{onSubmit:J,className:D("space-y-4",v),...E,children:f})})};try{h.displayName="Form",h.__docgenInfo={description:"",displayName:"Form",props:{initialValues:{defaultValue:{value:"{}"},description:"初始值",name:"initialValues",required:!1,type:{name:"Record<string, unknown> | undefined"}},onSubmit:{defaultValue:null,description:"表單提交處理",name:"onSubmit",required:!1,type:{name:"((values: Record<string, unknown>) => void) | undefined"}},className:{defaultValue:null,description:"自訂 CSS 類名",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"子元素",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Q=({name:r,label:o,required:v=!1,rules:f=[],layout:E="vertical",labelWidth:m="120px",className:R,children:q})=>{const{values:_,setValue:j,getValue:n,getFieldError:N,setFieldError:B,validateField:g,registerField:y,unregisterField:J}=P();i.useEffect(()=>(y(r,f),n(r)===void 0&&j(r,""),()=>{J(r)}),[r]),i.useEffect(()=>{y(r,f)},[JSON.stringify(f)]);const V=i.useCallback((F,L)=>{setTimeout(()=>{f&&f.length>0?g(r,f,F,L):B(r,null)},0)},[r,f,g]),a=i.useCallback(F=>{let L;if(F&&typeof F=="object"&&"target"in F){const U=F.target;L=U.type==="checkbox"?U.checked:U.value}else L=F;j(r,L),V("onChange",L)},[r,j,V]),c=i.useCallback(F=>{V("onBlur")},[V]),x=_[r],I=i.useMemo(()=>x||"",[x]),u=i.useMemo(()=>{if(!i.isValidElement(q))return q;const F={value:I,onChange:a,onBlur:c};return i.cloneElement(q,F)},[q,I,a,c]),k=N(r),d=k!==null,p=()=>o?e.jsx("label",{className:D("block text-sm font-medium text-gray-700",v&&'after:content-["*"] after:text-red-500 after:ml-1',d&&"text-red-600"),children:o}):null,M=()=>d?e.jsx("div",{className:"mt-1 text-sm text-red-600",role:"alert",children:k.message}):null;return E==="vertical"?e.jsxs("div",{className:D("space-y-2",R),children:[p(),u,M()]}):e.jsxs("div",{className:D("space-y-1",R),children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{style:{width:m,flexShrink:0},children:p()}),e.jsx("div",{className:"flex-1",children:u})]}),d&&e.jsx("div",{style:{marginLeft:`calc(${m} + 1rem)`},children:M()})]})},s=i.memo(Q);s.displayName="FormItem";const l={required:(r,o)=>({required:!0,message:r,trigger:o}),minLength:(r,o,v)=>({minLength:r,message:o,trigger:v}),maxLength:(r,o,v)=>({maxLength:r,message:o,trigger:v}),email:(r,o)=>({pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:r||"請輸入有效的電子郵件地址",trigger:o}),phone:(r,o)=>({pattern:/^09\d{8}$/,message:r||"請輸入有效的手機號碼（09xxxxxxxx）",trigger:o}),number:(r,o)=>({pattern:/^\d+$/,message:r||"請輸入有效的數字",trigger:o}),pattern:(r,o,v)=>({pattern:r,message:o,trigger:v}),custom:(r,o)=>({validator:r,trigger:o}),password:(r,o)=>({pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,message:r||"密碼必須包含至少8個字元，包括大小寫字母和數字",trigger:o})},X=[{id:1,name:"張三",email:"zhang.san@company.com",department:"技術部",role:"前端工程師",status:"active"},{id:2,name:"李四",email:"li.si@company.com",department:"技術部",role:"後端工程師",status:"active"},{id:3,name:"王五",email:"wang.wu@company.com",department:"設計部",role:"UI設計師",status:"inactive"},{id:4,name:"趙六",email:"zhao.liu@company.com",department:"產品部",role:"產品經理",status:"active"},{id:5,name:"錢七",email:"qian.qi@company.com",department:"測試部",role:"QA工程師",status:"active"}],Y=()=>{const[r,o]=i.useState({}),[v,f]=i.useState({}),[E,m]=i.useState({}),R=n=>{alert(`基本表單提交: ${JSON.stringify(n,null,2)}`)},q=n=>{o(n),alert(`驗證表單提交: ${JSON.stringify(n,null,2)}`)},_=n=>{f(n),alert(`觸發時機表單提交: ${JSON.stringify(n,null,2)}`)},j=n=>{m(n)};return e.jsxs("div",{className:"space-y-8 w-full",children:[e.jsx("div",{className:"max-w-md",children:e.jsx(S,{title:"🔄 基本表單",description:"Form 組件的基本使用方式：",code:`<Form onSubmit={handleBasicSubmit}>
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
</Form>`,children:e.jsxs(h,{onSubmit:R,children:[e.jsx(s,{name:"basicUsername",label:"使用者名稱",required:!0,children:e.jsx(t,{placeholder:"請輸入使用者名稱"})}),e.jsx(s,{name:"basicEmail",label:"電子郵件",children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})}),e.jsx(w,{type:"submit",children:"提交"})]})})}),e.jsx("div",{className:"max-w-md",children:e.jsxs(S,{title:"🔄 驗證功能",description:"Form 組件的驗證功能：",code:`<Form onSubmit={handleValidationSubmit}>
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
</Form>`,children:[e.jsxs(h,{onSubmit:q,children:[e.jsx(s,{name:"validatedUsername",label:"使用者名稱",required:!0,rules:[l.required("使用者名稱為必填"),l.minLength(3,"使用者名稱至少需要3個字元")],children:e.jsx(t,{placeholder:"請輸入使用者名稱"})}),e.jsx(s,{name:"validatedEmail",label:"電子郵件",required:!0,rules:[l.required("電子郵件為必填"),l.email()],children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})}),e.jsx(s,{name:"phone",label:"手機號碼",rules:[l.phone()],children:e.jsx(t,{placeholder:"請輸入手機號碼（選填）"})}),e.jsx(s,{name:"gender",label:"性別",required:!0,rules:[l.required("請選擇性別")],children:e.jsx(z,{options:[{value:"male",label:"男性"},{value:"female",label:"女性"},{value:"other",label:"其他"}],placeholder:"請選擇性別"})}),e.jsx(s,{name:"interests",label:"興趣愛好",children:e.jsxs(O,{children:[e.jsx(b,{value:"reading",children:"閱讀"}),e.jsx(b,{value:"music",children:"音樂"}),e.jsx(b,{value:"sports",children:"運動"}),e.jsx(b,{value:"travel",children:"旅遊"})]})}),e.jsx(s,{name:"bio",label:"自我介紹",rules:[l.maxLength(200,"自我介紹不能超過200字")],children:e.jsx(G,{placeholder:"請簡單介紹一下自己...",rows:3})}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",variant:"primary",children:"提交"})})]}),Object.keys(r).length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("strong",{children:"提交的值："}),e.jsx("pre",{children:JSON.stringify(r,null,2)})]})]})}),e.jsxs("div",{className:"max-w-md",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"不同驗證時機"}),e.jsxs(h,{onSubmit:_,children:[e.jsx(s,{name:"onChange",label:"輸入時驗證",rules:[l.required("此欄位為必填","onChange"),l.minLength(3,"至少需要3個字元","onChange")],children:e.jsx(t,{placeholder:"輸入時立即驗證"})}),e.jsx(s,{name:"onBlur",label:"失焦時驗證",rules:[l.required("此欄位為必填","onBlur"),l.email("請輸入有效的電子郵件","onBlur")],children:e.jsx(t,{placeholder:"失焦時才驗證"})}),e.jsx(s,{name:"onSubmit",label:"提交時驗證",rules:[l.required("此欄位為必填","onSubmit"),l.phone("請輸入有效的手機號碼","onSubmit")],children:e.jsx(t,{placeholder:"只在提交時驗證"})}),e.jsx(s,{name:"category",label:"分類選擇",rules:[l.required("請選擇分類","onSubmit")],children:e.jsxs(W,{children:[e.jsx(C,{value:"personal",children:"個人"}),e.jsx(C,{value:"business",children:"商業"}),e.jsx(C,{value:"other",children:"其他"})]})}),e.jsx(s,{name:"agreement",label:"同意條款",rules:[l.custom(n=>n?null:"請同意使用條款","onSubmit")],children:e.jsx(b,{value:"agree",children:"我同意使用條款和隱私政策"})}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",variant:"primary",children:"提交（會觸發所有驗證）"})})]}),Object.keys(v).length>0&&e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("strong",{children:"提交的值："}),e.jsx("pre",{children:JSON.stringify(v,null,2)})]})]}),e.jsxs("div",{className:"w-full max-w-4xl",children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"複雜表單 + Table 組件整合"}),e.jsxs(h,{onSubmit:j,initialValues:{teamMembers:X},children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h5",{className:"font-medium text-gray-600 mb-3",children:"基本資訊"}),e.jsx(s,{name:"projectName",label:"專案名稱",required:!0,rules:[l.required("專案名稱為必填"),l.minLength(2,"專案名稱至少需要2個字元")],children:e.jsx(t,{placeholder:"請輸入專案名稱"})}),e.jsx(s,{name:"projectType",label:"專案類型",required:!0,rules:[l.required("請選擇專案類型")],children:e.jsx(z,{options:[{value:"web",label:"Web 應用"},{value:"mobile",label:"移動應用"},{value:"desktop",label:"桌面應用"},{value:"api",label:"API 服務"}],placeholder:"請選擇專案類型"})}),e.jsx(s,{name:"priority",label:"優先級",required:!0,rules:[l.required("請選擇優先級")],children:e.jsxs(W,{children:[e.jsx(C,{value:"high",children:"高"}),e.jsx(C,{value:"medium",children:"中"}),e.jsx(C,{value:"low",children:"低"})]})}),e.jsx(s,{name:"features",label:"功能特性",children:e.jsxs(O,{children:[e.jsx(b,{value:"responsive",children:"響應式設計"}),e.jsx(b,{value:"multilang",children:"多語言支援"}),e.jsx(b,{value:"analytics",children:"數據分析"}),e.jsx(b,{value:"security",children:"安全加密"})]})}),e.jsx(s,{name:"description",label:"專案描述",rules:[l.maxLength(500,"描述不能超過500字")],children:e.jsx(G,{placeholder:"請描述專案的主要功能和目標...",rows:4})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h5",{className:"font-medium text-gray-600 mb-3",children:"團隊成員選擇"}),e.jsx(s,{name:"teamMembers",label:"選擇團隊成員",required:!0,rules:[l.custom(n=>{const N=n||[];return console.log("Form validation - members:",N),N.length>0?null:"請至少選擇一個團隊成員"},"onSubmit")],children:e.jsxs(H,{value:[],size:"sm",variant:"bordered",maxHeight:"300px",children:[e.jsx($,{dataKey:"name",title:"姓名",width:"120px",sortable:!0,children:(n,N,B,g)=>e.jsx(t,{size:"sm",value:n,onChange:y=>g(y.target.value),placeholder:"請輸入姓名"})}),e.jsx($,{dataKey:"department",title:"部門",width:"120px",sortable:!0,children:(n,N,B,g)=>e.jsx(z,{size:"sm",value:n,options:[{value:"技術部",label:"技術部"},{value:"設計部",label:"設計部"},{value:"產品部",label:"產品部"},{value:"測試部",label:"測試部"},{value:"營運部",label:"營運部"}],onChange:y=>g(y),placeholder:"選擇部門"})}),e.jsx($,{dataKey:"role",title:"職位",width:"140px",sortable:!0,children:(n,N,B,g)=>e.jsx(t,{size:"sm",value:n,onChange:y=>g(y.target.value),placeholder:"請輸入職位"})}),e.jsx($,{dataKey:"status",title:"狀態",width:"100px",align:"center",children:(n,N,B,g)=>e.jsx(z,{size:"sm",value:n,options:[{value:"active",label:"在職"},{value:"inactive",label:"離職"}],onChange:y=>g(y)})})]})}),e.jsx(s,{name:"budget",label:"預算範圍",required:!0,rules:[l.required("請輸入預算"),l.custom(n=>{const N=Number(n);return isNaN(N)||N<=0?"請輸入有效的預算金額":null},"onBlur")],children:e.jsx(t,{type:"number",placeholder:"請輸入預算金額",min:"0"})}),e.jsx(s,{name:"deadline",label:"截止日期",required:!0,rules:[l.required("請選擇截止日期")],children:e.jsx(t,{type:"date",min:new Date().toISOString().split("T")[0]})}),e.jsx(s,{name:"notifications",label:"通知設定",children:e.jsxs(O,{children:[e.jsx(b,{value:"email",children:"郵件通知"}),e.jsx(b,{value:"sms",children:"簡訊通知"}),e.jsx(b,{value:"push",children:"推播通知"})]})})]})]}),e.jsx("div",{className:"pt-6 border-t mt-6",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(w,{type:"submit",variant:"primary",children:"建立專案"}),e.jsx(w,{type:"button",variant:"outline",onClick:()=>m({}),children:"清除"})]})})]}),Object.keys(E).length>0&&e.jsxs("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:[e.jsx("h6",{className:"font-medium mb-2",children:"提交的表單資料："}),e.jsx("pre",{className:"text-sm text-gray-700 whitespace-pre-wrap",children:JSON.stringify(E,null,2)})]})]})]})},ee=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Form 表單"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的表單組件，提供完整的表單狀態管理和驗證功能。 支援多種驗證時機、自訂驗證規則，以及靈活的佈局選項。 設計風格簡潔現代，與其他組件保持一致的視覺體驗。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Form 的各種屬性："}),e.jsx(K,{}),e.jsx(Z,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(S,{title:"🔄 實際使用範例",description:"以下是實際的表單範例，展示各種功能組合：",code:`// 互動式表單範例
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
);`,children:e.jsx(Y,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎯 驗證規則"}),e.jsx("p",{className:"component-docs-section-description",children:"Form 支援多種內建驗證規則："}),e.jsx("div",{className:"component-docs-showcase",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(S,{title:"🔄 必填驗證",description:"使用 Rules.required() 進行必填驗證：",code:`<FormItem
  name="required"
  label="必填欄位"
  rules={[Rules.required('此欄位為必填')]}
>
  <Input placeholder="請輸入內容" />
</FormItem>`,children:e.jsx(h,{children:e.jsx(s,{name:"required",label:"必填欄位",rules:[l.required("此欄位為必填")],children:e.jsx(t,{placeholder:"請輸入內容"})})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"使用 Rules.required() 進行必填驗證"})]}),e.jsxs("div",{children:[e.jsx(S,{title:"🔄 長度驗證",description:"使用 Rules.minLength() 和 Rules.maxLength() 限制長度：",code:`<FormItem
  name="length"
  label="長度限制"
  rules={[
    Rules.minLength(3, '至少需要3個字元'),
    Rules.maxLength(10, '最多只能10個字元'),
  ]}
>
  <Input placeholder="請輸入3-10個字元" />
</FormItem>`,children:e.jsx(h,{children:e.jsx(s,{name:"length",label:"長度限制",rules:[l.minLength(3,"至少需要3個字元"),l.maxLength(10,"最多只能10個字元")],children:e.jsx(t,{placeholder:"請輸入3-10個字元"})})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"使用 Rules.minLength() 和 Rules.maxLength() 限制長度"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"格式驗證"}),e.jsxs(h,{children:[e.jsx(s,{name:"email",label:"電子郵件",rules:[l.email()],children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})}),e.jsx(s,{name:"phone",label:"手機號碼",rules:[l.phone()],children:e.jsx(t,{placeholder:"請輸入手機號碼"})})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"使用 Rules.email() 和 Rules.phone() 進行格式驗證"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"內建驗證規則："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.required()："}),"必填驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.minLength()："}),"最小長度驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.maxLength()："}),"最大長度驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.email()："}),"電子郵件格式驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.phone()："}),"手機號碼格式驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.number()："}),"數字格式驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.password()："}),"密碼強度驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rules.custom()："}),"自訂驗證函數"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🔄 驗證時機範例",description:"支援三種不同的驗證觸發時機，可以根據需求靈活配置：",code:`// 輸入時驗證 (onChange)
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
</FormItem>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"輸入時驗證 (onChange)"}),e.jsx(h,{children:e.jsx(s,{name:"onChangeExample",label:"即時驗證",rules:[l.required("此欄位為必填","onChange")],children:e.jsx(t,{placeholder:"輸入時立即驗證"})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"適合必填檢查和即時反饋"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"失焦時驗證 (onBlur)"}),e.jsx(h,{children:e.jsx(s,{name:"onBlurExample",label:"失焦驗證",rules:[l.email("請輸入有效的電子郵件","onBlur")],children:e.jsx(t,{placeholder:"失焦時才驗證"})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"適合格式檢查，避免輸入過程中的干擾"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"提交時驗證 (onSubmit)"}),e.jsxs(h,{children:[e.jsx(s,{name:"onSubmitExample",label:"提交驗證",rules:[l.phone("請輸入有效的手機號碼","onSubmit")],children:e.jsx(t,{placeholder:"只在提交時驗證"})}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",variant:"primary",children:"提交測試"})})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"適合複雜驗證，只在最終提交時檢查"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"混合驗證時機"}),e.jsx(h,{children:e.jsx(s,{name:"mixedExample",label:"混合驗證",rules:[l.required("此欄位為必填",["onChange","onBlur"]),l.minLength(6,"至少需要6個字元","onBlur"),l.maxLength(20,"最多20個字元","onSubmit")],children:e.jsx(t,{placeholder:"不同規則在不同時機驗證"})})}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"必填在輸入/失焦時驗證，長度在不同時機驗證"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"驗證時機說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"onChange："}),"輸入時立即驗證，適合必填檢查"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onBlur："}),"失焦後驗證，適合格式檢查"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onSubmit："}),"提交時驗證，適合複雜驗證"]}),e.jsx("li",{children:"支援多重觸發時機，如 ['onChange', 'onBlur']"}),e.jsx("li",{children:"提交時會觸發所有規則的驗證，確保完整性"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🔄 佈局選項範例",description:"支援垂直和水平兩種佈局方式：",code:`// 垂直佈局（預設）
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
</Form>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"垂直佈局（預設）"}),e.jsx("div",{className:"max-w-md",children:e.jsxs(h,{children:[e.jsx(s,{name:"verticalName",label:"姓名",required:!0,children:e.jsx(t,{placeholder:"請輸入姓名"})}),e.jsx(s,{name:"verticalEmail",label:"電子郵件",children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"水平佈局"}),e.jsx("div",{className:"max-w-lg",children:e.jsxs(h,{children:[e.jsx(s,{name:"horizontalName",label:"姓名",required:!0,layout:"horizontal",labelWidth:"100px",children:e.jsx(t,{placeholder:"請輸入姓名"})}),e.jsx(s,{name:"horizontalAge",label:"年齡",layout:"horizontal",labelWidth:"100px",children:e.jsx(t,{type:"number",placeholder:"請輸入年齡"})})]})})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"佈局配置："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"vertical："}),"垂直佈局，標籤在上方（預設）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"horizontal："}),"水平佈局，標籤在左側"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"labelWidth："}),"水平佈局時的標籤寬度"]}),e.jsx("li",{children:"支援 required 標記，自動顯示紅色星號"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🔄 初始值設定範例",description:"支援設定表單的初始值：",code:`// 設定表單初始值
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
</Form>`,children:e.jsx("div",{className:"max-w-md",children:e.jsxs(h,{initialValues:{prefilledName:"John Doe",prefilledEmail:"john@example.com",prefilledBio:"這是一段預設的自我介紹"},children:[e.jsx(s,{name:"prefilledName",label:"姓名",required:!0,children:e.jsx(t,{placeholder:"請輸入姓名"})}),e.jsx(s,{name:"prefilledEmail",label:"電子郵件",children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})}),e.jsx(s,{name:"prefilledBio",label:"自我介紹",children:e.jsx(t,{placeholder:"請輸入自我介紹"})}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",variant:"primary",children:"提交"})})]})})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"初始值功能："}),e.jsxs("ul",{children:[e.jsx("li",{children:"使用 initialValues 屬性設定表單初始值"}),e.jsx("li",{children:"支援任何類型的值（字串、數字、布林值等）"}),e.jsx("li",{children:"初始值會在組件掛載時自動填入對應的欄位"}),e.jsx("li",{children:"適用於編輯表單或預填表單場景"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"📋 FormItem Props"}),e.jsx("p",{className:"component-docs-section-description",children:"FormItem 組件的完整屬性說明，幫助你更好地配置表單項目："}),e.jsx("div",{className:"component-docs-info-card",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"屬性名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"類型"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"必填"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"預設值"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"name"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:e.jsx("span",{className:"text-red-600 font-semibold",children:"是"})}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位名稱，用於表單值的鍵名，必須在同一表單中唯一"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"label"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"欄位標籤文字，顯示在輸入框上方或左側"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"required"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"boolean"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"false"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"是否為必填欄位，會在標籤後顯示紅色星號 *"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"rules"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"ValidationRule[]"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"[]"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"驗證規則陣列，定義欄位的驗證邏輯"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"layout"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'vertical' | 'horizontal'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'vertical'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"標籤與輸入框的佈局方式"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"labelWidth"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"'120px'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"水平佈局時標籤的寬度"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"className"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"string"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂 CSS 類名，用於客製化樣式"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"children"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"React.ReactNode"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"否"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"-"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"表單控制項組件，如 Input、Select、Radio 等"})]})]})]})})})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎯 Rules 驗證規則詳解"}),e.jsx("p",{className:"component-docs-section-description",children:"Rules 提供了豐富的驗證規則工廠函數，每個函數都支援自訂錯誤訊息和觸發時機："}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"規則名稱"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"參數"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"使用範例"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.required"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"必填驗證，檢查值是否為空"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.required('此欄位為必填')"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.minLength"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"length, message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"最小長度驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.minLength(3, '至少3個字元')"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.maxLength"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"length, message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"最大長度驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.maxLength(50, '最多50字元')"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.email"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"電子郵件格式驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.email('請輸入正確格式')"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.phone"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"手機號碼格式驗證（台灣格式）"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.phone('請輸入正確手機號碼')"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.number"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"數字格式驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.number('請輸入數字')"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.password"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"密碼強度驗證（至少8字元，包含大小寫字母和數字）"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.password('密碼強度不足')"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.pattern"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"regex, message?, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂正規表達式驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.pattern(/^[A-Z]/, '須大寫開頭')"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"Rules.custom"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"validator, trigger?"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"自訂驗證函數"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm font-mono",children:"Rules.custom((v) => v === 'admin' ? '不可用' : null)"})]})]})]})}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"觸發時機參數"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-blue-50",children:[e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"觸發時機"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"說明"}),e.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800",children:"適用場景"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"'onChange'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"輸入時立即驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"必填檢查、即時反饋"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"'onBlur'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"失焦後驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"格式檢查、避免輸入干擾"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"'onSubmit'"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"提交時驗證"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"複雜驗證、最終檢查"})]}),e.jsxs("tr",{className:"bg-gray-50",children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"['onChange', 'onBlur']"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"多重觸發時機"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"組合驗證需求"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border border-gray-300 px-4 py-2 font-mono text-sm",children:"undefined"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"所有時機都觸發（預設）"}),e.jsx("td",{className:"border border-gray-300 px-4 py-2 text-sm",children:"通用驗證"})]})]})]})})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Form, FormItem, Rules } from 'eonui';

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
</Form>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 不同驗證時機
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
</FormItem>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Form 組件的所有功能，可以在你的項目中開始使用了！ 這個表單組件提供了完整的狀態管理和驗證功能，適用於各種表單場景。"})]})]}),ve={title:"Form/Form",component:h,parameters:{layout:"centered",docs:{page:()=>e.jsx(ee,{})}},argTypes:{initialValues:{control:{type:"object"},description:"表單的初始值",table:{type:{summary:"Record<string, unknown>"}}},onSubmit:{action:"submitted",description:"表單提交時的回調函數",table:{type:{summary:"(values: Record<string, unknown>) => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},A={render:r=>e.jsx("div",{className:"max-w-md",children:e.jsxs(h,{...r,children:[e.jsx(s,{name:"username",label:"使用者名稱",required:!0,rules:[l.required("使用者名稱為必填"),l.minLength(2,"至少需要2個字元")],children:e.jsx(t,{placeholder:"請輸入使用者名稱"})}),e.jsx(s,{name:"email",label:"電子郵件",rules:[l.email("請輸入正確的電子郵件格式")],children:e.jsx(t,{type:"email",placeholder:"請輸入電子郵件"})}),e.jsx(s,{name:"gender",label:"性別",required:!0,rules:[l.required("請選擇性別")],children:e.jsx(z,{options:[{value:"male",label:"男性"},{value:"female",label:"女性"},{value:"other",label:"其他"}],placeholder:"請選擇性別"})}),e.jsx(s,{name:"hobbies",label:"興趣愛好",children:e.jsxs(O,{children:[e.jsx(b,{value:"reading",children:"閱讀"}),e.jsx(b,{value:"music",children:"音樂"}),e.jsx(b,{value:"sports",children:"運動"})]})}),e.jsx(s,{name:"contactMethod",label:"聯絡方式",required:!0,rules:[l.required("請選擇聯絡方式")],children:e.jsxs(W,{children:[e.jsx(C,{value:"email",children:"電子郵件"}),e.jsx(C,{value:"phone",children:"電話"}),e.jsx(C,{value:"sms",children:"簡訊"})]})}),e.jsx(s,{name:"message",label:"留言",rules:[l.maxLength(500,"留言不能超過500字")],children:e.jsx(G,{placeholder:"請輸入您的留言...",rows:3})}),e.jsx("div",{className:"pt-4",children:e.jsx(w,{type:"submit",variant:"primary",children:"提交表單"})})]})}),args:{onSubmit:r=>{console.log("表單提交:",r),alert(`表單提交成功！

${JSON.stringify(r,null,2)}`)}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-md">
      <Form {...args}>
        <FormItem name="username" label="使用者名稱" required rules={[Rules.required('使用者名稱為必填'), Rules.minLength(2, '至少需要2個字元')]}>
          <Input placeholder="請輸入使用者名稱" />
        </FormItem>

        <FormItem name="email" label="電子郵件" rules={[Rules.email('請輸入正確的電子郵件格式')]}>
          <Input type="email" placeholder="請輸入電子郵件" />
        </FormItem>

        <FormItem name="gender" label="性別" required rules={[Rules.required('請選擇性別')]}>
          <Select options={[{
          value: 'male',
          label: '男性'
        }, {
          value: 'female',
          label: '女性'
        }, {
          value: 'other',
          label: '其他'
        }]} placeholder="請選擇性別" />
        </FormItem>

        <FormItem name="hobbies" label="興趣愛好">
          <CheckboxGroup>
            <Checkbox value="reading">閱讀</Checkbox>
            <Checkbox value="music">音樂</Checkbox>
            <Checkbox value="sports">運動</Checkbox>
          </CheckboxGroup>
        </FormItem>

        <FormItem name="contactMethod" label="聯絡方式" required rules={[Rules.required('請選擇聯絡方式')]}>
          <RadioGroup>
            <Radio value="email">電子郵件</Radio>
            <Radio value="phone">電話</Radio>
            <Radio value="sms">簡訊</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem name="message" label="留言" rules={[Rules.maxLength(500, '留言不能超過500字')]}>
          <Textarea placeholder="請輸入您的留言..." rows={3} />
        </FormItem>

        <div className="pt-4">
          <Button type="submit" variant="primary">
            提交表單
          </Button>
        </div>
      </Form>
    </div>,
  args: {
    onSubmit: (values: Record<string, unknown>) => {
      // eslint-disable-next-line no-console
      console.log('表單提交:', values);
      alert(\`表單提交成功！\\n\\n\${JSON.stringify(values, null, 2)}\`);
    }
  }
}`,...A.parameters?.docs?.source}}};const fe=["Docs"];export{A as Docs,fe as __namedExportsOrder,ve as default};

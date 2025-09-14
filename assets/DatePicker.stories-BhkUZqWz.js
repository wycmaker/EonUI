import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as me,r as u}from"./iframe-DtrAF50Y.js";import{r as he,P as xe,C as pe}from"./blocks-CAYfFhLU.js";import{C as S}from"./CodeExample-vFRyXKH9.js";import{u as fe}from"./useClickOutside-DMt3zXhd.js";import{u as je}from"./usePortal-hRK3-VjC.js";import{c as ae}from"./cn-Dtjc6EhN.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-DDMkSrZn.js";const I=(a,i,n,c=!1)=>{if(!a)return"";const t=a.getFullYear(),l=String(a.getMonth()+1).padStart(2,"0"),p=String(a.getDate()).padStart(2,"0"),h=String(a.getHours()).padStart(2,"0"),o=String(a.getMinutes()).padStart(2,"0"),j=String(a.getSeconds()).padStart(2,"0");if(!i)switch(n){case"date":return`${t}-${l}-${p}`;case"time":return c?`${h}:${o}:${j}`:`${h}:${o}`;case"datetime":return c?`${t}-${l}-${p} ${h}:${o}:${j}`:`${t}-${l}-${p} ${h}:${o}`;default:return`${t}-${l}-${p}`}return i.replace("YYYY",String(t)).replace("MM",l).replace("DD",p).replace("HH",h).replace("mm",o).replace("ss",j)},U=(a,i)=>{if(!a)return null;try{let n;if(i==="time"){const c=new Date,t=a.split(":");if(t.length>=2)n=new Date(c),n.setHours(parseInt(t[0]||"0",10)),n.setMinutes(parseInt(t[1]||"0",10)),n.setSeconds(t[2]?parseInt(t[2],10):0);else return null}else n=new Date(a);return isNaN(n.getTime())?null:n}catch{return null}},J=(a,i)=>a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()&&a.getDate()===i.getDate(),K=(a,i,n,c)=>{if(i){const t=typeof i=="string"?new Date(i):i;if(a<t)return!0}if(n){const t=typeof n=="string"?new Date(n):n;if(a>t)return!0}return c?typeof c=="function"?c(a):c.some(t=>J(a,t)):!1},te=({currentDate:a,selectedDate:i,onDateSelect:n,minDate:c,maxDate:t,disabledDates:l,showToday:p=!0})=>{const[h,o]=u.useState(a),j=h.getFullYear(),D=h.getMonth(),x=new Date(j,D,1),H=new Date(x);H.setDate(H.getDate()-x.getDay());const C=[],f=new Date(H);for(let d=0;d<42;d++)C.push(new Date(f)),f.setDate(f.getDate()+1);const b=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],z=["日","一","二","三","四","五","六"],v=()=>{o(new Date(j,D-1,1))},T=()=>{o(new Date(j,D+1,1))},V=()=>{const d=new Date;o(d),n(d)},_=p&&!K(new Date,c,t,l);return e.jsxs("div",{className:"p-4 bg-white border rounded-lg shadow-lg w-full",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{type:"button",onClick:v,className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("div",{className:"text-lg font-semibold",children:[j,"年 ",b[D]]}),e.jsx("button",{type:"button",onClick:T,className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:z.map(d=>e.jsx("div",{className:"p-2 text-center text-sm font-medium text-gray-500",children:d},d))}),e.jsx("div",{className:"grid grid-cols-7 gap-1",children:C.map((d,$)=>{const E=d.getMonth()===D,P=J(d,new Date),w=i&&J(d,i),r=K(d,c,t,l);return e.jsx("button",{type:"button",onClick:()=>!r&&n(d),disabled:r,className:ae("p-2 text-sm rounded hover:bg-gray-100 transition-colors",!E&&"text-gray-400",E&&"text-gray-900",P&&"bg-blue-100 text-blue-600 font-semibold",w&&"bg-primary-600 text-white hover:bg-primary-700",r&&"cursor-not-allowed opacity-50 hover:bg-transparent"),children:d.getDate()},$)})}),_&&e.jsx("div",{className:"mt-4 pt-4 border-t",children:e.jsx("button",{type:"button",onClick:V,className:"w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",children:"今天"})})]})},se=({selectedTime:a,onTimeSelect:i,minDate:n,maxDate:c,disabledDates:t,showSeconds:l=!1,style:p="button",showConfirmButton:h=!1,showNow:o=!0,onConfirm:j,onCancel:D})=>{const[x,H]=u.useState(a?.getHours()||0),[C,f]=u.useState(a?.getMinutes()||0),[b,z]=u.useState(a?.getSeconds()||0),v=(r,M,F=0)=>{const N=new Date;N.setHours(r,M,l?F:0,0),h||i(N)},T=r=>{H(r),v(r,C,b)},V=r=>{f(r),v(x,r,b)},_=r=>{z(r),v(x,C,r)},d=()=>{const r=new Date,M=r.getHours(),F=r.getMinutes(),N=r.getSeconds();H(M),f(F),z(N),v(M,F,N)},$=()=>{const r=new Date;r.setHours(x,C,l?b:0,0),i(r),j?.()},E=()=>{D?.()},P=o&&!K(new Date,n,c,t),w=({value:r,max:M,onChange:F,label:N})=>{const[Y,L]=u.useState(!1),B=Array.from({length:M},(k,A)=>A),m=u.useRef(null);u.useEffect(()=>{const k=A=>{m.current&&!m.current.contains(A.target)&&L(!1)};return Y&&document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[Y]);const q=k=>{F(k),L(!1)};return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-2",children:N}),e.jsxs("div",{className:"relative",ref:m,children:[e.jsxs("button",{type:"button",className:"my-2 w-16 h-10 px-2 py-1 text-lg font-mono bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 flex items-center justify-center",onClick:()=>L(!Y),children:[String(r).padStart(2,"0"),e.jsx("svg",{className:`w-4 h-4 ml-1 transition-transform ${Y?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),Y&&e.jsx("div",{className:"absolute top-full left-0 mt-1 w-16 max-h-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 overflow-y-auto",children:B.map(k=>e.jsx("button",{type:"button",className:`w-full px-2 py-1 text-lg font-mono text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${k===r?"bg-primary-600 text-white hover:bg-primary-700":"text-gray-700"}`,onClick:()=>q(k),children:String(k).padStart(2,"0")},k))})]})]})};return p==="scroll"?e.jsxs("div",{className:"p-4 bg-white border rounded-lg shadow-lg w-full",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-6 mb-4",children:[e.jsx(w,{value:x,max:24,onChange:T,label:"時"}),e.jsx(w,{value:C,max:60,onChange:V,label:"分"}),l&&e.jsx(w,{value:b,max:60,onChange:_,label:"秒"})]}),h&&e.jsxs("div",{className:"flex space-x-2 pt-4 border-t",children:[e.jsx("button",{type:"button",onClick:E,className:"flex-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",children:"取消"}),e.jsx("button",{type:"button",onClick:$,className:"flex-1 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded transition-colors",children:"確認"})]}),P&&!h&&e.jsx("div",{className:"pt-4 border-t",children:e.jsx("button",{type:"button",onClick:d,className:"w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",children:"現在"})})]}):e.jsxs("div",{className:"p-4 bg-white border rounded-lg shadow-lg w-full",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-4 mb-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{type:"button",onClick:()=>T((x+1)%24),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})}),e.jsx("div",{className:"px-3 py-2 text-lg font-mono border rounded",children:String(x).padStart(2,"0")}),e.jsx("button",{type:"button",onClick:()=>T((x-1+24)%24),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),e.jsx("div",{className:"text-lg font-mono",children:":"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{type:"button",onClick:()=>V((C+1)%60),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})}),e.jsx("div",{className:"px-3 py-2 text-lg font-mono border rounded",children:String(C).padStart(2,"0")}),e.jsx("button",{type:"button",onClick:()=>V((C-1+60)%60),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),l&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-lg font-mono",children:":"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("button",{type:"button",onClick:()=>_((b+1)%60),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})}),e.jsx("div",{className:"px-3 py-2 text-lg font-mono border rounded",children:String(b).padStart(2,"0")}),e.jsx("button",{type:"button",onClick:()=>_((b-1+60)%60),className:"p-1 hover:bg-gray-100 rounded",children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]})]})]}),h&&e.jsxs("div",{className:"flex space-x-2 pt-4 border-t",children:[e.jsx("button",{type:"button",onClick:E,className:"flex-1 px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",children:"取消"}),e.jsx("button",{type:"button",onClick:$,className:"flex-1 px-3 py-2 text-sm bg-primary-600 text-white hover:bg-primary-700 rounded transition-colors",children:"確認"})]}),P&&e.jsx("div",{className:"pt-4 border-t",children:e.jsx("button",{type:"button",onClick:d,className:"w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors",children:"現在"})})]})},s=me.forwardRef(({className:a,variant:i="default",size:n="md",status:c="default",mode:t="date",value:l,defaultValue:p,clearable:h=!1,minDate:o,maxDate:j,disabledDates:D,format:x,showToday:H=!0,showNow:C=!0,showSeconds:f=!1,timePickerStyle:b="button",autoComplete:z="off",onChange:v,onClear:T,disabled:V,placeholder:_,...d},$)=>{const[E,P]=u.useState(()=>l!==void 0?typeof l=="string"?U(l,t):l:p!==void 0?typeof p=="string"?U(p,t):p:null),[w,r]=u.useState(!1),[M,F]=u.useState(""),[N,Y]=u.useState(null),L=u.useRef(null),B=u.useRef(null),m=l!==void 0?typeof l=="string"?U(l,t):l:E,{position:q,calculatePosition:k}=je({triggerRef:L,isOpen:w,offset:4}),A=u.useCallback(()=>{if(t==="time"&&N){const y=N;l===void 0&&P(y);const g=I(y,x||"",t,f);v?.(y,g),Y(null)}},[t,N,l,P,x,f,v]);u.useEffect(()=>{const y=I(m,x||"",t,f);F(y)},[m,x,t,f]),fe([L,B],()=>{t==="time"&&A(),r(!1)},w);const re="w-full rounded-md transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",le={default:"bg-white border border-gray-300 focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]",filled:"bg-gray-50 border border-transparent focus:bg-white focus:border-2 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]",outline:"bg-transparent border-2 border-gray-300 focus:border-primary-600 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"},ne={sm:"h-8 px-3 py-1 text-sm",md:"h-10 px-3 py-2 text-sm",lg:"h-12 px-4 py-3 text-base"},oe={default:"",error:"border-error-600 focus:border-2 focus:border-error-600 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]",success:"border-success-600 focus:border-2 focus:border-success-600 focus:shadow-[0_0_0_3px_rgba(34,197,94,0.1)]",warning:"border-warning-600 focus:border-2 focus:border-warning-600 focus:shadow-[0_0_0_3px_rgba(234,179,8,0.1)]"},Q=y=>{let g;if(t==="datetime"){g=new Date(y);const W=m||new Date;g.setHours(W.getHours(),W.getMinutes(),W.getSeconds(),W.getMilliseconds())}else g=y;l===void 0&&P(g);const G=I(g,x||"",t,f);v?.(g,G),t==="date"&&r(!1)},X=y=>{if(t==="time")Y(y);else{let g;t==="datetime"&&m?(g=new Date(m),g.setHours(y.getHours(),y.getMinutes(),f?y.getSeconds():0,0)):g=y,l===void 0&&P(g);const G=I(g,x||"",t,f);v?.(g,G)}},Z=()=>{A(),r(!1)},ee=()=>{Y(null),r(!1)},ie=()=>{l===void 0&&P(null),F(""),v?.(null,""),T?.(),r(!1)},de=()=>{V||(w||k(),r(!w),!w&&t==="time"&&Y(m))},O=h&&m&&!V,ce=ae(re,le[i],ne[n],oe[c],O&&"pr-10",a),ue=()=>{switch(t){case"date":return"請選擇日期";case"time":return"請選擇時間";case"datetime":return"請選擇日期時間";default:return"請選擇"}};return e.jsxs("div",{ref:L,className:"relative inline-block w-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{ref:$,type:"text",value:M,placeholder:_||ue(),onClick:de,readOnly:!0,disabled:V,className:ce,"aria-invalid":c==="error",autoComplete:z,...d}),e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",children:!O&&e.jsx("svg",{className:"h-4 w-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:t==="time"?e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}):e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),O&&e.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3",children:e.jsx("button",{type:"button",onClick:ie,className:"text-gray-400 hover:text-gray-600 focus:text-gray-600 focus:outline-none pointer-events-auto","aria-label":"清除選擇",tabIndex:0,children:e.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})})]}),w&&he.createPortal(e.jsxs("div",{ref:B,className:"absolute bg-white border border-gray-300 rounded-md shadow-lg z-50",style:{top:q.top,left:q.left,width:"max-content"},children:[t==="date"&&e.jsx("div",{className:"w-80",children:e.jsx(te,{currentDate:m||new Date,selectedDate:m,onDateSelect:Q,minDate:o,maxDate:j,disabledDates:D})}),t==="time"&&e.jsx("div",{className:b==="scroll"?"w-80":"w-64",children:e.jsx(se,{selectedTime:t==="time"&&N||m,onTimeSelect:X,minDate:o,maxDate:j,disabledDates:D,showSeconds:f,style:b,showConfirmButton:!1,onConfirm:Z,onCancel:ee})}),t==="datetime"&&e.jsxs("div",{className:"w-80",children:[e.jsx(te,{currentDate:m||new Date,selectedDate:m,onDateSelect:Q,minDate:o,maxDate:j,showToday:!1,disabledDates:D}),e.jsx(se,{selectedTime:m,onTimeSelect:X,minDate:o,maxDate:j,disabledDates:D,showSeconds:f,style:"scroll",showConfirmButton:!1,showNow:!1,onConfirm:Z,onCancel:ee})]})]}),document.body)]})});s.displayName="DatePicker";try{s.displayName="DatePicker",s.__docgenInfo={description:"",displayName:"DatePicker",props:{variant:{defaultValue:{value:"default"},description:"日期選擇器的視覺樣式變體",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"outline"'},{value:'"default"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"日期選擇器的大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},status:{defaultValue:{value:"default"},description:"日期選擇器的狀態",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'}]}},mode:{defaultValue:{value:"date"},description:"選擇器模式",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"time"'},{value:'"datetime"'}]}},value:{defaultValue:null,description:"當前值（Date 對象或 ISO 字串）",name:"value",required:!1,type:{name:"string | Date | null | undefined"}},defaultValue:{defaultValue:null,description:"預設值",name:"defaultValue",required:!1,type:{name:"string | Date | null | undefined"}},clearable:{defaultValue:{value:"false"},description:"是否顯示清除按鈕",name:"clearable",required:!1,type:{name:"boolean | undefined"}},minDate:{defaultValue:null,description:"最小日期",name:"minDate",required:!1,type:{name:"string | Date | undefined"}},maxDate:{defaultValue:null,description:"最大日期",name:"maxDate",required:!1,type:{name:"string | Date | undefined"}},disabledDates:{defaultValue:null,description:"禁用的日期（函數或日期陣列）",name:"disabledDates",required:!1,type:{name:"Date[] | ((date: Date) => boolean) | undefined"}},format:{defaultValue:null,description:"日期格式化字串",name:"format",required:!1,type:{name:"string | undefined"}},showToday:{defaultValue:{value:"true"},description:"是否顯示今天按鈕",name:"showToday",required:!1,type:{name:"boolean | undefined"}},showNow:{defaultValue:{value:"true"},description:"是否顯示現在按鈕（時間模式）",name:"showNow",required:!1,type:{name:"boolean | undefined"}},showSeconds:{defaultValue:{value:"false"},description:"是否顯示秒數（時間和日期時間模式）",name:"showSeconds",required:!1,type:{name:"boolean | undefined"}},timePickerStyle:{defaultValue:{value:"button"},description:"時間選擇器樣式（按鈕式或滾輪式）",name:"timePickerStyle",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"scroll"'}]}},autoComplete:{defaultValue:{value:"off"},description:"自動完成屬性",name:"autoComplete",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"值改變時的回調",name:"onChange",required:!1,type:{name:"((date: Date | null, dateString: string) => void) | undefined"}},onClear:{defaultValue:null,description:"清除按鈕的回調函數",name:"onClear",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const ge=()=>{const[a,i]=u.useState(null),[n,c]=u.useState(null),[t,l]=u.useState(null),[p,h]=u.useState(null);return e.jsxs("div",{className:"space-y-8 w-full max-w-md",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"日期選擇"}),e.jsx(s,{mode:"date",value:a,onChange:o=>i(o),clearable:!0,placeholder:"選擇日期"}),a&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["選中日期：",a.toLocaleDateString("zh-TW")]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"時間選擇"}),e.jsx(s,{mode:"time",value:n,onChange:o=>c(o),clearable:!0,placeholder:"選擇時間"}),n&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["選中時間：",n.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"日期時間選擇"}),e.jsx(s,{mode:"datetime",value:t,onChange:o=>l(o),clearable:!0,placeholder:"選擇日期和時間"}),t&&e.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:["選中日期時間：",t.toLocaleString("zh-TW")]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"限制範圍（未來30天）"}),e.jsx(s,{mode:"date",value:p,onChange:o=>h(o),minDate:new Date,maxDate:new Date(Date.now()+720*60*60*1e3),clearable:!0,placeholder:"選擇未來30天內的日期"})]})]})},ye=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"DatePicker 日期選擇器"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的日期選擇器組件，支援日期、時間、日期時間三種模式。 提供豐富的自訂選項，包括日期範圍限制、禁用日期、自訂格式等功能。 設計風格與其他 Input 組件保持一致，支援多種樣式變體和狀態。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 DatePicker 的各種屬性："}),e.jsx(xe,{}),e.jsx(pe,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(S,{title:"🔄 實際使用範例",description:"以下是實際的日期選擇器範例，展示各種功能組合：",code:`const [date, setDate] = useState(new Date());
const [time, setTime] = useState('12:00');
const [datetime, setDatetime] = useState(new Date());

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
/>`,children:e.jsx(ge,{})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🎯 選擇器模式",description:"DatePicker 支援三種不同的選擇模式：",code:`// 日期模式 - 僅選擇日期
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
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"日期模式 (date)"}),e.jsx(s,{mode:"date",placeholder:"選擇日期",defaultValue:new Date}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"僅選擇日期，格式：YYYY-MM-DD"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"時間模式 (time)"}),e.jsx(s,{mode:"time",placeholder:"選擇時間",defaultValue:new Date}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"僅選擇時間，格式：HH:mm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"日期時間模式 (datetime)"}),e.jsx(s,{mode:"datetime",placeholder:"選擇日期和時間",defaultValue:new Date}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"同時選擇日期和時間，格式：YYYY-MM-DD HH:mm"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"date："}),"僅日期選擇，顯示日曆面板"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"time："}),"僅時間選擇，顯示時間選擇器"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"datetime："}),"日期和時間選擇，同時顯示日曆和時間選擇器"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🎨 樣式變體",description:"DatePicker 組件提供了三種不同的樣式變體：",code:`// 預設樣式
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"default",placeholder:"預設樣式",mode:"date"}),e.jsx(s,{variant:"filled",placeholder:"填充樣式",mode:"date"}),e.jsx(s,{variant:"outline",placeholder:"外框樣式",mode:"date"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"使用建議："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"標準樣式，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Filled："}),"填充樣式，適用於需要視覺區分的設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Outline："}),"外框樣式，適用於需要強調邊界的設計"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"📏 大小選項",description:"支援三種不同的大小選項，所有尺寸都符合 WCAG 最小觸控目標要求：",code:`// 小尺寸 (32px)
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"sm",placeholder:"小尺寸 (32px)",mode:"date"}),e.jsx(s,{size:"md",placeholder:"中等尺寸 (40px)",mode:"date"}),e.jsx(s,{size:"lg",placeholder:"大尺寸 (48px)",mode:"date"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"尺寸指南："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"sm："}),"32px 高度，適用於緊湊的界面設計"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"md："}),"40px 高度，標準大小，適用於大多數場景"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"lg："}),"48px 高度，適用於重要的日期選擇"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🚦 狀態展示",description:"日期選擇器支援多種狀態，提供清晰的視覺反饋：",code:`// 預設狀態
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{status:"default",placeholder:"預設狀態",mode:"date"}),e.jsx(s,{status:"error",placeholder:"錯誤狀態",mode:"date"}),e.jsx(s,{status:"success",placeholder:"成功狀態",mode:"date"}),e.jsx(s,{status:"warning",placeholder:"警告狀態",mode:"date"})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"狀態說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Default："}),"預設狀態，無特殊提示"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error："}),"錯誤狀態，紅色邊框表示選擇錯誤"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Success："}),"成功狀態，綠色邊框表示選擇正確"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Warning："}),"警告狀態，黃色邊框提醒用戶注意"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"📅 日期範圍限制",description:"支援最小日期、最大日期和禁用日期功能。當設置日期限制時，如果「今天」或「現在」不在允許範圍內，相應的快捷按鈕會自動隱藏：",code:`// 最小日期限制（今天開始）
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
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"最小日期限制（今天開始）"}),e.jsx(s,{mode:"date",minDate:new Date,placeholder:"只能選擇今天及以後的日期"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"最大日期限制（本月內）"}),e.jsx(s,{mode:"date",maxDate:new Date(new Date().getFullYear(),new Date().getMonth()+1,0),placeholder:"只能選擇本月內的日期"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"日期範圍（未來7天）"}),e.jsx(s,{mode:"date",minDate:new Date,maxDate:new Date(Date.now()+10080*60*1e3),placeholder:"只能選擇未來7天內的日期"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"範圍限制功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"minDate："}),"設定最小可選日期"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"maxDate："}),"設定最大可選日期"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"disabledDates："}),"禁用特定日期（陣列或函數）"]}),e.jsx("li",{children:"超出範圍的日期會顯示為禁用狀態"})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🎨 自訂格式",description:"支援自訂日期時間顯示格式：",code:`// 預設格式
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
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"預設格式"}),e.jsx(s,{mode:"date",placeholder:"YYYY-MM-DD",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂日期格式"}),e.jsx(s,{mode:"date",format:"YYYY年MM月DD日",placeholder:"YYYY年MM月DD日",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂時間格式"}),e.jsx(s,{mode:"time",format:"HH時mm分",placeholder:"HH時mm分",defaultValue:new Date})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自訂日期時間格式"}),e.jsx(s,{mode:"datetime",format:"YYYY/MM/DD HH:mm",placeholder:"YYYY/MM/DD HH:mm",defaultValue:new Date})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"格式化標記："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"YYYY："}),"四位數年份"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"MM："}),"兩位數月份"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DD："}),"兩位數日期"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HH："}),"兩位數小時（24小時制）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"mm："}),"兩位數分鐘"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ss："}),"兩位數秒數"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"⏰ 時間選擇器進階功能",description:"時間選擇器支援秒數顯示和下拉選單式選擇等進階功能：",code:`// 秒數支援
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
/>`,children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"秒數支援"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{mode:"time",showSeconds:!0,placeholder:"包含秒數的時間選擇"}),e.jsx(s,{mode:"datetime",showSeconds:!0,placeholder:"包含秒數的日期時間選擇"})]}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["設置 showSeconds=",!0," 來顯示秒數選擇"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"下拉選單式時間選擇器"}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(s,{mode:"time",timePickerStyle:"scroll",placeholder:"下拉選單式時間選擇"}),e.jsx(s,{mode:"time",timePickerStyle:"scroll",showSeconds:!0,placeholder:"下拉選單式時間選擇（含秒）"})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:'設置 timePickerStyle="scroll" 來使用下拉選單式選擇器'})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"自動應用模式"}),e.jsx(s,{mode:"time",timePickerStyle:"scroll",placeholder:"關閉時自動應用時間選擇"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"time 模式下，選擇時間後關閉選擇器會自動應用選中的時間"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"日期時間組合（下拉選單式）"}),e.jsx(s,{mode:"datetime",timePickerStyle:"scroll",showSeconds:!0,placeholder:"下拉選單式日期時間選擇"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"日期時間模式下，日曆和下拉選單式時間選擇器並排顯示"})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"時間選擇器功能："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"showSeconds："}),"是否顯示秒數選擇（預設 false）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"timePickerStyle："}),"時間選擇器樣式，'button'（按鈕式）或 'scroll'（下拉選單式）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"按鈕式："}),"使用上下箭頭按鈕調整時間，選擇後立即生效"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"下拉選單式："}),"使用下拉選單選擇時間，time 模式下關閉時自動應用選中的時間"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"智能寬度："}),"下拉選單式選擇器會根據是否顯示秒數自動調整寬度"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(S,{title:"🗑️ 清除功能",description:"支援清除按鈕功能：",code:`// 可清除的日期選擇器
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{mode:"date",clearable:!0,placeholder:"可清除的日期選擇器",defaultValue:new Date}),e.jsx(s,{mode:"time",clearable:!0,placeholder:"可清除的時間選擇器",defaultValue:new Date}),e.jsx(s,{mode:"datetime",clearable:!0,placeholder:"可清除的日期時間選擇器",defaultValue:new Date})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"清除功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"clearable："}),"啟用清除按鈕"]}),e.jsx("li",{children:"清除按鈕在有選中值時顯示"}),e.jsx("li",{children:"支援無障礙標籤和鍵盤操作"}),e.jsx("li",{children:"清除後會觸發 onChange 和 onClear 回調"})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(S,{title:"🚫 禁用狀態",description:"展示禁用狀態下的各種樣式：",code:`// 禁用的日期選擇器
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{disabled:!0,placeholder:"禁用的日期選擇器",mode:"date"}),e.jsx(s,{disabled:!0,variant:"filled",placeholder:"禁用的填充樣式",mode:"time"}),e.jsx(s,{disabled:!0,defaultValue:new Date,mode:"datetime"})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(S,{title:"🔗 組合使用",description:"展示各種屬性的組合使用：",code:`// 大尺寸外框成功狀態，帶清除功能和自訂格式
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
/>`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{size:"lg",variant:"outline",status:"success",mode:"datetime",clearable:!0,placeholder:"大尺寸外框成功狀態",defaultValue:new Date,format:"YYYY年MM月DD日 HH:mm"}),e.jsx(s,{size:"sm",variant:"filled",status:"warning",mode:"date",placeholder:"小尺寸填充警告狀態",minDate:new Date})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { DatePicker } from 'eonui';

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
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階用法"}),e.jsx("pre",{className:"component-docs-code",children:`// 受控組件
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
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 DatePicker 組件的所有功能，可以在你的項目中開始使用了！ 這個日期選擇器組件提供了豐富的自訂選項，適用於各種日期時間選擇場景。"})]})]}),Ve={title:"Form/DatePicker",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(ye,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"日期選擇器的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"日期選擇器的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"日期選擇器的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},mode:{control:{type:"select"},options:["date","time","datetime"],description:"選擇器模式",table:{type:{summary:"string"},defaultValue:{summary:"date"}}},clearable:{control:{type:"boolean"},description:"是否顯示清除按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},format:{control:{type:"text"},description:"日期格式化字串",table:{type:{summary:"string"}}},showToday:{control:{type:"boolean"},description:"是否顯示今天按鈕",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showNow:{control:{type:"boolean"},description:"是否顯示現在按鈕（時間模式）",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showSeconds:{control:{type:"boolean"},description:"是否顯示秒數選擇（時間和日期時間模式）",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},timePickerStyle:{control:{type:"select"},options:["button","scroll"],description:"時間選擇器樣式",table:{type:{summary:"string"},defaultValue:{summary:"button"}}},placeholder:{control:{type:"text"},description:"佔位符文字",table:{type:{summary:"string"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"值改變時的回調函數",table:{type:{summary:"(date: Date | null, dateString: string) => void"}}},onClear:{action:"cleared",description:"清除按鈕的回調函數",table:{type:{summary:"() => void"}}},className:{control:{type:"text"},description:"自訂 CSS 類名",table:{type:{summary:"string"}}}},tags:["autodocs"]},R={args:{placeholder:"請選擇日期",variant:"default",size:"md",status:"default",mode:"date",clearable:!1,showToday:!0,showNow:!0}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '請選擇日期',
    variant: 'default',
    size: 'md',
    status: 'default',
    mode: 'date',
    clearable: false,
    showToday: true,
    showNow: true
  }
}`,...R.parameters?.docs?.source}}};const Fe=["Docs"];export{R as Docs,Fe as __namedExportsOrder,Ve as default};

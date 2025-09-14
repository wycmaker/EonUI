import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as ne}from"./iframe-CWGlHkPv.js";import{P as oe,C as ce}from"./blocks-iZvN7QCr.js";import{C as g}from"./CodeExample-2qKpfjti.js";import{c as O}from"./cn-Dtjc6EhN.js";import{c as de}from"./formStyles-D_LMpAhg.js";import{U as K,k as ue,D as H,S as q,i as J,j as D,l as me}from"./icons-B4aNx7RA.js";/* empty css                       */import"./preload-helper-Ll21cQ8F.js";import"./index-5ApEmjN3.js";let Q=0;const pe=()=>(Q+=1,`upload-${Date.now()}-${Q}`),T=t=>{if(t===0)return"0 B";const i=1024,c=["B","KB","MB","GB","TB"],u=Math.floor(Math.log(t)/Math.log(i));return`${parseFloat((t/Math.pow(i,u)).toFixed(2))} ${c[u]}`},E=t=>t.type.startsWith("image/"),xe=t=>new Promise((i,c)=>{if(!E(t)){c(new Error("Only image files can be previewed"));return}const u=new FileReader;u.onload=p=>{i(p.target?.result)},u.onerror=()=>{c(new Error("Failed to read file"))},u.readAsDataURL(t)}),he=(t={})=>{const{enabled:i=!0,onDragEnter:c,onDragLeave:u,onDrop:p,accept:h,maxFiles:l}=t,[y,s]=f.useState(!1),[M,L]=f.useState(0),N=f.useCallback(n=>{let x=Array.from(n);if(h){const v=h.split(",").map(w=>w.trim().toLowerCase());x=x.filter(w=>v.some(b=>{if(b.startsWith(".")){const C=b.slice(1);return w.name.toLowerCase().endsWith(`.${C}`)}else if(b.includes("*")){const[C]=b.split("/");return w.type.startsWith(C+"/")}else return w.type===b}))}return l&&x.length>l&&(x=x.slice(0,l)),x},[h,l]),V=f.useCallback(n=>{i&&(n.preventDefault(),n.stopPropagation())},[i]),j=f.useCallback(n=>{i&&(n.preventDefault(),n.stopPropagation(),L(x=>x+1),y||s(!0),c?.(n))},[i,y,c]),k=f.useCallback(n=>{i&&(n.preventDefault(),n.stopPropagation(),L(x=>{const v=x-1;return v===0&&s(!1),v}),u?.(n))},[i,u]),B=f.useCallback(n=>{if(!i)return;n.preventDefault(),n.stopPropagation(),s(!1),L(0);const x=Array.from(n.dataTransfer.files),v=N(x);v.length>0&&p?.(v,n)},[i,N,p]);return{isDragging:y,dragProps:{onDragOver:V,onDragEnter:j,onDragLeave:k,onDrop:B}}},fe=({items:t,listType:i,onRemove:c,onPreview:u,disabled:p=!1})=>{if(t.length===0)return null;const h=()=>e.jsx("div",{className:"mt-4 space-y-2",children:t.map(s=>e.jsx("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-md border",children:e.jsxs("div",{className:"flex items-center space-x-3 flex-1 min-w-0",children:[e.jsx("div",{className:"flex-shrink-0",children:E(s)?e.jsx(ue,{className:"h-5 w-5 text-blue-500"}):e.jsx(H,{className:"h-5 w-5 text-gray-500"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{type:"button",onClick:()=>u?.(s),className:"text-sm font-medium text-primary hover:text-primary-dark truncate cursor-pointer",disabled:p,children:s.name}),s.status==="uploading"&&e.jsx(q,{className:"h-4 w-4 text-primary"}),s.status==="done"&&e.jsx(J,{className:"h-4 w-4 text-success"}),s.status==="error"&&e.jsx(D,{className:"h-4 w-4 text-error"})]}),e.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:[T(s.size),s.status==="uploading"&&s.percent!==void 0&&e.jsxs("span",{className:"ml-2",children:["(",s.percent,"%)"]})]}),s.status==="uploading"&&s.percent!==void 0&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1 mt-2",children:e.jsx("div",{className:"bg-primary h-1 rounded-full transition-all duration-300",style:{width:`${s.percent}%`},role:"progressbar","aria-valuenow":s.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${s.name} 上傳進度 ${s.percent}%`})})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("button",{type:"button",onClick:()=>c(s),disabled:p,className:"text-gray-400 hover:text-error focus:text-error focus:outline-none disabled:cursor-not-allowed disabled:opacity-50","aria-label":"移除檔案",children:e.jsx(D,{className:"h-4 w-4"})})})]})},s.uid))}),l=()=>e.jsx("div",{className:"mt-4 space-y-2",children:t.map(s=>e.jsx("div",{className:"flex items-center justify-between p-2 bg-gray-50 rounded-md border",children:e.jsxs("div",{className:"flex items-center space-x-3 flex-1 min-w-0",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded border overflow-hidden bg-gray-100",children:E(s)&&s.url?e.jsx("img",{src:s.url,alt:s.name,className:"w-full h-full object-cover cursor-pointer",onClick:()=>u?.(s)}):e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx("svg",{className:"h-6 w-6 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm font-medium text-gray-900 truncate",children:s.name}),s.status==="uploading"&&e.jsx(q,{className:"h-4 w-4 text-primary"}),s.status==="done"&&e.jsx(J,{className:"h-4 w-4 text-success"}),s.status==="error"&&e.jsx(D,{className:"h-4 w-4 text-error"})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[T(s.size),s.status==="uploading"&&s.percent!==void 0&&e.jsxs("span",{className:"ml-2",children:["(",s.percent,"%)"]})]}),s.status==="uploading"&&s.percent!==void 0&&e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1 mt-1",children:e.jsx("div",{className:"bg-primary h-1 rounded-full transition-all duration-300",style:{width:`${s.percent}%`},role:"progressbar","aria-valuenow":s.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${s.name} 上傳進度 ${s.percent}%`})})]}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("button",{type:"button",onClick:()=>c(s),disabled:p,className:"text-gray-400 hover:text-error focus:text-error focus:outline-none disabled:cursor-not-allowed disabled:opacity-50","aria-label":"移除檔案",children:e.jsx(D,{className:"h-4 w-4"})})})]})},s.uid))}),y=()=>e.jsx("div",{className:"mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:t.map(s=>e.jsxs("div",{className:"relative group border rounded-lg overflow-hidden bg-gray-50 aspect-square",children:[e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:E(s)&&s.url?e.jsx("img",{src:s.url,alt:s.name,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx(H,{className:"h-8 w-8 text-gray-400"})})}),s.status==="uploading"&&e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",role:"progressbar","aria-valuenow":s.percent||0,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${s.name} 上傳進度 ${s.percent||0}%`,children:e.jsxs("div",{className:"text-center text-white",children:[e.jsx(q,{className:"h-6 w-6 mx-auto mb-2"}),e.jsxs("div",{className:"text-xs",children:[s.percent||0,"%"]})]})}),s.status==="error"&&e.jsx("div",{className:"absolute inset-0 bg-red-500 bg-opacity-50 flex items-center justify-center",role:"alert","aria-label":`${s.name} 上傳失敗`,children:e.jsx(D,{className:"h-6 w-6 text-white"})}),e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100",children:e.jsxs("div",{className:"flex space-x-2",children:[s.url&&e.jsx("button",{type:"button",onClick:()=>u?.(s),className:"p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all","aria-label":"預覽",children:e.jsx(me,{className:"h-4 w-4 text-gray-700"})}),e.jsx("button",{type:"button",onClick:()=>c(s),disabled:p,className:"p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all disabled:cursor-not-allowed disabled:opacity-50","aria-label":"移除檔案",children:e.jsx(D,{className:"h-4 w-4 text-gray-700"})})]})}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2",children:e.jsx("div",{className:"text-xs truncate",title:s.name,children:s.name})})]},s.uid))});switch(i){case"picture":return l();case"picture-card":return y();default:return h()}},a=ne.forwardRef(({className:t,variant:i="default",size:c="md",status:u="default",multiple:p=!1,accept:h,maxSize:l,maxCount:y,dragger:s=!1,listType:M="text",showUploadList:L=!0,fileList:N,defaultFileList:V=[],disabled:j=!1,customRequest:k,beforeUpload:B,onChange:n,onRemove:x,onPreview:v,onDrop:w,children:b,...C},X)=>{const[Y,P]=f.useState(V),z=f.useRef(null),F=N??Y,{isDragging:I,dragProps:Z}=he({enabled:s&&!j,accept:h,maxFiles:y,onDrop:r=>{w?.(r),R(r)}}),ee=r=>!(l&&r.size>l||y&&F.length>=y),se=r=>{if(k){const m=new File([],r.name,{type:r.type});k({file:m,onProgress:d=>{U(r.uid,{percent:d})},onSuccess:d=>{U(r.uid,{status:"done",percent:100,response:d})},onError:d=>{U(r.uid,{status:"error",error:d})}})}else{let m=0;const d=setInterval(()=>{m+=Math.random()*30,m>=100?(m=100,clearInterval(d),U(r.uid,{status:"done",percent:100})):U(r.uid,{percent:Math.floor(m)})},200)}},U=(r,m)=>{const d=F.map(o=>o.uid===r?{...o,...m}:o);N===void 0&&P(d);const A=d.find(o=>o.uid===r);A&&n?.({file:A,fileList:d})},R=async r=>{if(j)return;const m=[];for(const o of r)if(ee(o)){if(B)try{if(!await B(o,r))continue}catch{continue}m.push(o)}if(m.length===0)return;const d=m.map(o=>({uid:pe(),name:o.name,size:o.size,type:o.type,status:"uploading",percent:0}));d.forEach((o,$)=>{if(E(o)){const W=m[$];W&&xe(W).then(G=>{U(o.uid,{url:G})}).catch(G=>{})}});const A=[...F,...d];N===void 0&&P(A),d.forEach(o=>{n?.({file:o,fileList:A})}),d.forEach(o=>{se(o)})},te=r=>{const m=Array.from(r.target.files||[]);R(m),z.current&&(z.current.value="")},ae=async r=>{if(j)return;if(x)try{if(!await x(r))return}catch{return}const m=F.filter(d=>d.uid!==r.uid);N===void 0&&P(m),n?.({file:{...r,status:"removed"},fileList:m})},_=()=>{j||z.current?.click()},re=de(i,c,u),ie=O("relative overflow-hidden cursor-pointer transition-all duration-200",re,s&&["border-dashed min-h-32 flex flex-col items-center justify-center p-6",I&&"border-primary-600 bg-primary-50",!I&&"hover:border-gray-400"],!s&&"inline-flex items-center",j&&"cursor-not-allowed opacity-50",t),le=()=>b||(s?e.jsxs("div",{className:"text-center",children:[e.jsx(K,{className:O("mx-auto h-12 w-12 mb-4",I?"text-primary-600":"text-gray-400")}),e.jsxs("div",{className:"text-gray-600",children:[e.jsx("div",{className:"mb-1",children:"點擊或拖拽檔案到此區域上傳"}),e.jsxs("div",{className:"text-sm text-gray-500",children:[p?"支援多檔案上傳":"支援單檔案上傳",l&&e.jsxs("span",{className:"ml-1",children:["，檔案大小不超過 ",T(l)]})]})]})]}):e.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2",children:[e.jsx(K,{className:"h-5 w-5 text-gray-500"}),e.jsx("span",{className:"text-gray-700",children:"選擇檔案"})]}));return e.jsxs("div",{ref:X,...C,children:[e.jsx("input",{ref:z,type:"file",className:"hidden",multiple:p,accept:h,onChange:te,disabled:j}),e.jsx("div",{className:ie,onClick:_,...Z,role:"button",tabIndex:j?-1:0,"aria-label":"選擇檔案上傳",onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),_())},children:le()}),L&&F.length>0&&e.jsx(fe,{items:F,listType:M,onRemove:ae,onPreview:v,disabled:j})]})});a.displayName="Upload";try{a.displayName="Upload",a.__docgenInfo={description:"",displayName:"Upload",props:{variant:{defaultValue:{value:"default"},description:"上傳組件的視覺樣式變體",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"outline"'},{value:'"default"'},{value:'"filled"'}]}},size:{defaultValue:{value:"md"},description:"上傳組件的大小",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},status:{defaultValue:{value:"default"},description:"上傳組件的狀態",name:"status",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"default"'}]}},multiple:{defaultValue:{value:"false"},description:"是否支援多檔案上傳",name:"multiple",required:!1,type:{name:"boolean | undefined"}},accept:{defaultValue:null,description:"接受的檔案類型",name:"accept",required:!1,type:{name:"string | undefined"}},maxSize:{defaultValue:null,description:"最大檔案大小（bytes）",name:"maxSize",required:!1,type:{name:"number | undefined"}},maxCount:{defaultValue:null,description:"最大檔案數量",name:"maxCount",required:!1,type:{name:"number | undefined"}},dragger:{defaultValue:{value:"false"},description:"是否支援拖拽上傳",name:"dragger",required:!1,type:{name:"boolean | undefined"}},listType:{defaultValue:{value:"text"},description:"上傳列表顯示類型",name:"listType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"text"'},{value:'"picture"'},{value:'"picture-card"'}]}},showUploadList:{defaultValue:{value:"true"},description:"是否顯示上傳列表",name:"showUploadList",required:!1,type:{name:"boolean | undefined"}},fileList:{defaultValue:null,description:"檔案列表",name:"fileList",required:!1,type:{name:"UploadFile[] | undefined"}},defaultFileList:{defaultValue:{value:"[]"},description:"預設檔案列表",name:"defaultFileList",required:!1,type:{name:"UploadFile[] | undefined"}},disabled:{defaultValue:{value:"false"},description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean | undefined"}},customRequest:{defaultValue:null,description:"自訂上傳實作",name:"customRequest",required:!1,type:{name:"((options: { file: File; onProgress: (percent: number) => void; onSuccess: (response?: unknown) => void; onError: (error: unknown) => void; }) => void) | undefined"}},beforeUpload:{defaultValue:null,description:"上傳前的回調，可用於檔案驗證",name:"beforeUpload",required:!1,type:{name:"((file: File, fileList: File[]) => boolean | Promise<boolean>) | undefined"}},onChange:{defaultValue:null,description:"檔案上傳時的回調",name:"onChange",required:!1,type:{name:"((info: { file: UploadFile; fileList: UploadFile[]; }) => void) | undefined"}},onRemove:{defaultValue:null,description:"檔案移除時的回調",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => boolean | Promise<boolean>) | undefined"}},onPreview:{defaultValue:null,description:"點擊檔案連結或預覽圖時的回調",name:"onPreview",required:!1,type:{name:"((file: UploadFile) => void) | undefined"}},onDrop:{defaultValue:null,description:"拖拽檔案時的回調",name:"onDrop",required:!1,type:{name:"((files: File[]) => void) | undefined"}},children:{defaultValue:null,description:"上傳區域內容",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ge=()=>{const[t,i]=f.useState([]),[c,u]=f.useState([]),[p,h]=f.useState([]);return e.jsxs("div",{className:"space-y-8 w-full max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"基本檔案上傳"}),e.jsx(a,{fileList:t,onChange:({fileList:l})=>i(l),multiple:!0,accept:"image/*,.pdf,.doc,.docx",maxSize:5*1024*1024,children:e.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 rounded-md bg-white hover:bg-gray-50 cursor-pointer",children:[e.jsx("svg",{className:"h-5 w-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),e.jsx("span",{className:"text-gray-700",children:"選擇檔案"})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"圖片上傳（圖片列表）"}),e.jsx(a,{fileList:c,onChange:({fileList:l})=>u(l),listType:"picture",multiple:!0,accept:"image/*",maxCount:5,onPreview:l=>{l.url&&window.open(l.url,"_blank")}})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-700",children:"拖拽上傳"}),e.jsx(a,{fileList:p,onChange:({fileList:l})=>h(l),dragger:!0,multiple:!0,accept:"image/*",listType:"picture-card",maxSize:2*1024*1024})]})]})},je=()=>e.jsxs("div",{className:"component-docs-container",children:[e.jsxs("div",{className:"component-docs-header",children:[e.jsx("h1",{className:"component-docs-title",children:"Upload 檔案上傳"}),e.jsx("p",{className:"component-docs-description",children:"EonUI 的檔案上傳組件，支援點擊選擇、拖拽上傳、進度顯示、檔案預覽等功能。 提供多種顯示模式和豐富的自訂選項，適用於各種檔案上傳場景。"})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"🎮 互動式範例"}),e.jsx("p",{className:"component-docs-section-description",children:"使用下方的控制面板來即時調整 Upload 的各種屬性："}),e.jsx(oe,{}),e.jsx(ce,{})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(g,{title:"🔄 實際使用範例",description:"以下是實際的檔案上傳範例，展示各種功能組合：",code:`// 互動式 Upload 範例
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
);`,children:e.jsx(ge,{})})}),e.jsx("div",{className:"component-docs-section",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(g,{title:"🔄 預設樣式上傳",description:"基本的檔案上傳：",code:`// 基本的檔案上傳
<Upload multiple accept=".pdf,.doc,.docx" />`,children:e.jsx(a,{multiple:!0,accept:".pdf,.doc,.docx"})}),e.jsx(g,{title:"🔄 拖拽上傳",description:"支援拖拽的檔案上傳：",code:`// 支援拖拽的檔案上傳
<Upload dragger multiple accept="image/*" />`,children:e.jsx(a,{dragger:!0,multiple:!0,accept:"image/*"})})]})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(g,{title:"🖼️ 顯示模式",description:"支援三種不同的檔案列表顯示模式：",code:`// 文字模式 (text)
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
/>`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"文字模式 (text)"}),e.jsx(a,{listType:"text",defaultFileList:[{uid:"1",name:"document.pdf",size:1024e3,type:"application/pdf",status:"done"},{uid:"2",name:"presentation.pptx",size:2048e3,type:"application/vnd.openxmlformats-officedocument.presentationml.presentation",status:"done"}]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"圖片模式 (picture)"}),e.jsx(a,{listType:"picture",defaultFileList:[{uid:"1",name:"image1.jpg",size:512e3,type:"image/jpeg",status:"done",url:"https://via.placeholder.com/100x100?text=IMG1"},{uid:"2",name:"image2.png",size:256e3,type:"image/png",status:"done",url:"https://via.placeholder.com/100x100?text=IMG2"}]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"圖片卡片模式 (picture-card)"}),e.jsx(a,{listType:"picture-card",defaultFileList:[{uid:"1",name:"photo1.jpg",size:512e3,type:"image/jpeg",status:"done",url:"https://via.placeholder.com/150x150?text=Photo1"},{uid:"2",name:"photo2.jpg",size:256e3,type:"image/jpeg",status:"done",url:"https://via.placeholder.com/150x150?text=Photo2"},{uid:"3",name:"photo3.jpg",size:384e3,type:"image/jpeg",status:"uploading",percent:65}]})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"顯示模式說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"text："}),"文字列表模式，適用於各種檔案類型"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"picture："}),"圖片模式，顯示小型預覽圖，適用於圖片上傳"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"picture-card："}),"圖片卡片模式，顯示大型預覽圖，適用於相簿功能"]})]})]})]}),e.jsx("div",{className:"component-docs-section",children:e.jsx(g,{title:"🔄 樣式變體範例",description:"不同的樣式變體：",code:`// 不同的樣式變體
<Upload variant="default" />   // 預設樣式
<Upload variant="filled" />    // 填充樣式
<Upload variant="outline" />   // 外框樣式`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"預設樣式"}),e.jsx(a,{variant:"default"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"填充樣式"}),e.jsx(a,{variant:"filled"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"外框樣式"}),e.jsx(a,{variant:"outline"})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(g,{title:"🔄 大小選項範例",description:"不同大小的上傳組件：",code:`// 不同大小的上傳組件
<Upload size="sm" />   // 小尺寸
<Upload size="md" />   // 中等尺寸（預設）
<Upload size="lg" />   // 大尺寸`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"小尺寸"}),e.jsx(a,{size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"中等尺寸（預設）"}),e.jsx(a,{size:"md"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"大尺寸"}),e.jsx(a,{size:"lg"})]})]})})}),e.jsx("div",{className:"component-docs-section",children:e.jsx(g,{title:"🔄 狀態展示範例",description:"不同狀態的上傳組件：",code:`// 不同狀態的上傳組件
<Upload status="default" />  // 預設狀態
<Upload status="success" />  // 成功狀態
<Upload status="warning" />  // 警告狀態
<Upload status="error" />    // 錯誤狀態`,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"預設狀態"}),e.jsx(a,{status:"default"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"成功狀態"}),e.jsx(a,{status:"success"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"警告狀態"}),e.jsx(a,{status:"warning"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2 text-gray-600",children:"錯誤狀態"}),e.jsx(a,{status:"error"})]})]})})}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(g,{title:"🔄 進階功能範例",description:"Upload 組件支援多項進階功能，提供完整的檔案上傳體驗：",code:`// 檔案限制
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
<Upload disabled dragger />`,children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"檔案限制"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"text-sm text-gray-600",children:"只允許圖片，最大 1MB，最多 3 個檔案"}),e.jsx(a,{accept:"image/*",maxSize:1024*1024,maxCount:3,multiple:!0,dragger:!0})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"上傳前驗證"}),e.jsx(a,{beforeUpload:t=>{const i=t.type.startsWith("image/"),c=t.size<2*1024*1024;return i?c?!0:(alert("檔案大小不能超過 2MB！"),!1):(alert("只能上傳圖片檔案！"),!1)},dragger:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-3 text-gray-600",children:"禁用狀態"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{disabled:!0}),e.jsx(a,{disabled:!0,dragger:!0})]})]})]})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"進階功能說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"檔案類型限制："}),"使用 accept 屬性限制可選擇的檔案類型"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"檔案大小限制："}),"使用 maxSize 屬性限制單個檔案的最大大小"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"檔案數量限制："}),"使用 maxCount 屬性限制最多可上傳的檔案數量"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"上傳前驗證："}),"使用 beforeUpload 回調進行自訂驗證"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"拖拽支援："}),"設定 dragger=",!0," 啟用拖拽上傳功能"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(g,{title:"🔄 事件處理範例",description:"Upload 組件提供豐富的事件回調，方便進行自訂處理：",code:`// 事件處理設定
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
/>`,children:e.jsx(a,{onChange:({file:t,fileList:i})=>{},onRemove:t=>window.confirm(`確定要移除 ${t.name} 嗎？`),onPreview:t=>{t.url&&window.open(t.url,"_blank")},onDrop:t=>{},dragger:!0,listType:"picture"})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"事件回調說明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"onChange："}),"檔案狀態變更時觸發（上傳、完成、錯誤等）"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onRemove："}),"移除檔案時觸發，回傳 false 可阻止移除"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onPreview："}),"點擊檔案預覽時觸發"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onDrop："}),"拖拽檔案時觸發"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"beforeUpload："}),"上傳前觸發，可用於檔案驗證"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(g,{title:"🔄 自訂上傳範例",description:"支援自訂上傳邏輯，可整合任何上傳服務：",code:`// 自訂上傳邏輯
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
/>`,children:e.jsx(a,{customRequest:({file:t,onProgress:i,onSuccess:c,onError:u})=>{new FormData().append("file",t);let h=0;const l=setInterval(()=>{h+=10,i(h),h>=100&&(clearInterval(l),setTimeout(()=>{c({url:"https://example.com/uploaded-file.jpg",id:Math.random().toString(36).substr(2,9)})},500))},200);return()=>{clearInterval(l)}},dragger:!0})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"自訂上傳參數："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"file："}),"要上傳的檔案物件"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onProgress："}),"更新上傳進度的回調函數"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onSuccess："}),"上傳成功時的回調函數"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"onError："}),"上傳失敗時的回調函數"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx(g,{title:"🔄 無障礙支援範例",description:"Upload 組件遵循 WCAG 2.1 AA 標準，提供完整的無障礙性支援：",code:`// 無障礙支援設定
<Upload
  dragger
  aria-label="檔案上傳區域"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // 鍵盤啟動上傳
    }
  }}
/>`,children:e.jsx(a,{dragger:!0,"aria-label":"檔案上傳區域",onKeyDown:t=>{t.key==="Enter"||t.key}})}),e.jsxs("div",{className:"component-docs-info-card",children:[e.jsx("strong",{children:"無障礙性特色："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"鍵盤導航："}),"支援 Tab、Enter、Space 鍵操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"螢幕閱讀器："}),"提供適當的 ARIA 標籤和狀態"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"焦點指示器："}),"清晰的焦點環，符合視覺標準"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"進度通知："}),"上傳進度變更時提供適當的通知"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"錯誤處理："}),"提供清晰的錯誤訊息和狀態指示"]})]})]})]}),e.jsxs("div",{className:"component-docs-section",children:[e.jsx("h2",{className:"component-docs-section-title",children:"💻 使用方式"}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"基本用法"}),e.jsx("pre",{className:"component-docs-code",children:`import { Upload } from 'eonui';

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
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"受控組件"}),e.jsx("pre",{className:"component-docs-code",children:`const [fileList, setFileList] = useState([]);

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
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"自訂上傳"}),e.jsx("pre",{className:"component-docs-code",children:`<Upload
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
/>`})]}),e.jsxs("div",{className:"component-docs-code-block",children:[e.jsx("h4",{className:"component-docs-code-title",children:"進階配置"}),e.jsx("pre",{className:"component-docs-code",children:`<Upload
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
/>`})]})]}),e.jsxs("div",{className:"component-docs-cta",children:[e.jsx("h3",{className:"component-docs-cta-title",children:"🚀 開始使用"}),e.jsx("p",{className:"component-docs-cta-text",children:"現在你已經了解了 Upload 組件的所有功能，可以在你的項目中開始使用了！ Upload 組件提供了完整的檔案上傳解決方案，支援多種顯示模式和豐富的自訂選項。"})]})]}),Ae={title:"Form/Upload",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(je,{})}},argTypes:{variant:{control:{type:"select"},options:["default","filled","outline"],description:"上傳組件的視覺樣式變體",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"上傳組件的大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:{type:"select"},options:["default","error","success","warning"],description:"上傳組件的狀態",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},multiple:{control:{type:"boolean"},description:"是否支援多檔案上傳",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dragger:{control:{type:"boolean"},description:"是否支援拖拽上傳",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},listType:{control:{type:"select"},options:["text","picture","picture-card"],description:"上傳列表顯示類型",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},showUploadList:{control:{type:"boolean"},description:"是否顯示上傳列表",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},accept:{control:{type:"text"},description:"接受的檔案類型",table:{type:{summary:"string"}}},maxSize:{control:{type:"number"},description:"最大檔案大小（bytes）",table:{type:{summary:"number"}}},maxCount:{control:{type:"number"},description:"最大檔案數量",table:{type:{summary:"number"}}},disabled:{control:{type:"boolean"},description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"檔案上傳時的回調",table:{type:{summary:"(info: { file: UploadFile; fileList: UploadFile[] }) => void"}}},onRemove:{action:"removed",description:"檔案移除時的回調",table:{type:{summary:"(file: UploadFile) => boolean | Promise<boolean>"}}},onPreview:{action:"previewed",description:"點擊檔案預覽時的回調",table:{type:{summary:"(file: UploadFile) => void"}}},children:{control:!1,description:"上傳區域內容",table:{type:{summary:"ReactNode"}}}},tags:["autodocs"]},S={args:{variant:"default",size:"md",status:"default",multiple:!1,dragger:!1,listType:"text",showUploadList:!0,disabled:!1}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    status: 'default',
    multiple: false,
    dragger: false,
    listType: 'text',
    showUploadList: true,
    disabled: false
  }
}`,...S.parameters?.docs?.source}}};const Ee=["Docs"];export{S as Docs,Ee as __namedExportsOrder,Ae as default};

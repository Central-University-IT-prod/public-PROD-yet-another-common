import{i as ue,r as M,u as E,t as de,a as Q,c as ce,o as U,n as X,g as fe,b as ge,d as Y,w as H,e as O,f as he,s as me,h as ee,j as m,k,l as _,m as n,p as P,v as q,q as pe,F as J,x as W,y as F,z as we,A as ve,B as ye,C as R,D as be,E as ke}from"./index-Cxdx-ytl.js";import{t as I}from"./toggleSidebar-yCkJPOES.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";function oe(e){return fe()?(ge(e),!0):!1}function L(e){return typeof e=="function"?e():E(e)}const xe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _e=Object.prototype.toString,Me=e=>_e.call(e)==="[object Object]",ne=()=>{};function Se(e,t){function o(...i){return new Promise((r,l)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(l)})}return o}const re=e=>e();function Ce(e=re){const t=M(!0);function o(){t.value=!1}function i(){t.value=!0}const r=(...l)=>{t.value&&e(...l)};return{isActive:Q(t),pause:o,resume:i,eventFilter:r}}function $e(e){return e||Y()}function Ae(...e){if(e.length!==1)return de(...e);const t=e[0];return typeof t=="function"?Q(ce(()=>({get:t,set:ne}))):M(t)}function ze(e,t,o={}){const{eventFilter:i=re,...r}=o;return H(e,Se(i,t),r)}function Oe(e,t,o={}){const{eventFilter:i,...r}=o,{eventFilter:l,pause:s,resume:d,isActive:c}=Ce(i);return{stop:ze(e,t,{...r,eventFilter:l}),pause:s,resume:d,isActive:c}}function se(e,t=!0,o){$e()?U(e,o):t?e():X(e)}function Le(e=!1,t={}){const{truthyValue:o=!0,falsyValue:i=!1}=t,r=ue(e),l=M(e);function s(d){if(arguments.length)return l.value=d,l.value;{const c=L(o);return l.value=l.value===c?L(i):c,l.value}}return r?s:[l,s]}function ae(e){var t;const o=L(e);return(t=o==null?void 0:o.$el)!=null?t:o}const j=xe?window:void 0;function G(...e){let t,o,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,i,r]=e,t=j):[t,o,i,r]=e,!t)return ne;Array.isArray(o)||(o=[o]),Array.isArray(i)||(i=[i]);const l=[],s=()=>{l.forEach(p=>p()),l.length=0},d=(p,u,v,w)=>(p.addEventListener(u,v,w),()=>p.removeEventListener(u,v,w)),c=H(()=>[ae(t),L(r)],([p,u])=>{if(s(),!p)return;const v=Me(u)?{...u}:u;l.push(...o.flatMap(w=>i.map(y=>d(p,w,y,v))))},{immediate:!0,flush:"post"}),f=()=>{c(),s()};return oe(f),f}function je(){const e=M(!1),t=Y();return t&&U(()=>{e.value=!0},t),e}function Ve(e){const t=je();return O(()=>(t.value,!!e()))}function Ee(e,t={}){const{window:o=j}=t,i=Ve(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let r;const l=M(!1),s=f=>{l.value=f.matches},d=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},c=he(()=>{i.value&&(d(),r=o.matchMedia(L(e)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),l.value=r.matches)});return oe(()=>{c(),d(),r=void 0}),l}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__",Fe=Be();function Be(){return Z in T||(T[Z]=T[Z]||{}),T[Z]}function ie(e,t){return Fe[e]||t}function De(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Ne={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},K="vueuse-storage";function Te(e,t,o,i={}){var r;const{flush:l="pre",deep:s=!0,listenToStorageChanges:d=!0,writeDefaults:c=!0,mergeDefaults:f=!1,shallow:p,window:u=j,eventFilter:v,onError:w=a=>{console.error(a)},initOnMounted:y}=i,b=(p?me:M)(typeof t=="function"?t():t);if(!o)try{o=ie("getDefaultStorage",()=>{var a;return(a=j)==null?void 0:a.localStorage})()}catch(a){w(a)}if(!o)return b;const S=L(t),V=De(S),C=(r=i.serializer)!=null?r:Ne[V],{pause:B,resume:g}=Oe(b,()=>D(b.value),{flush:l,deep:s,eventFilter:v});u&&d&&se(()=>{G(u,"storage",x),G(u,K,N),y&&x()}),y||x();function $(a,h){u&&u.dispatchEvent(new CustomEvent(K,{detail:{key:e,oldValue:a,newValue:h,storageArea:o}}))}function D(a){try{const h=o.getItem(e);if(a==null)$(h,null),o.removeItem(e);else{const A=C.write(a);h!==A&&(o.setItem(e,A),$(h,A))}}catch(h){w(h)}}function z(a){const h=a?a.newValue:o.getItem(e);if(h==null)return c&&S!=null&&o.setItem(e,C.write(S)),S;if(!a&&f){const A=C.read(h);return typeof f=="function"?f(A,S):V==="object"&&!Array.isArray(A)?{...S,...A}:A}else return typeof h!="string"?h:C.read(h)}function x(a){if(!(a&&a.storageArea!==o)){if(a&&a.key==null){b.value=S;return}if(!(a&&a.key!==e)){B();try{(a==null?void 0:a.newValue)!==C.write(b.value)&&(b.value=z(a))}catch(h){w(h)}finally{a?X(g):g()}}}}function N(a){x(a.detail)}return b}function le(e){return Ee("(prefers-color-scheme: dark)",e)}function Ze(e={}){const{selector:t="html",attribute:o="class",initialValue:i="auto",window:r=j,storage:l,storageKey:s="vueuse-color-scheme",listenToStorageChanges:d=!0,storageRef:c,emitAuto:f,disableTransition:p=!0}=e,u={auto:"",light:"light",dark:"dark",...e.modes||{}},v=le({window:r}),w=O(()=>v.value?"dark":"light"),y=c||(s==null?Ae(i):Te(s,i,l,{window:r,listenToStorageChanges:d})),b=O(()=>y.value==="auto"?w.value:y.value),S=ie("updateHTMLAttrs",(g,$,D)=>{const z=typeof g=="string"?r==null?void 0:r.document.querySelector(g):ae(g);if(!z)return;let x;if(p&&(x=r.document.createElement("style"),x.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),r.document.head.appendChild(x)),$==="class"){const N=D.split(/\s/g);Object.values(u).flatMap(a=>(a||"").split(/\s/g)).filter(Boolean).forEach(a=>{N.includes(a)?z.classList.add(a):z.classList.remove(a)})}else z.setAttribute($,D);p&&(r.getComputedStyle(x).opacity,document.head.removeChild(x))});function V(g){var $;S(t,o,($=u[g])!=null?$:g)}function C(g){e.onChanged?e.onChanged(g,V):V(g)}H(b,C,{flush:"post",immediate:!0}),se(()=>C(b.value));const B=O({get(){return f?y.value:b.value},set(g){y.value=g}});try{return Object.assign(B,{store:y,system:w,state:b})}catch{return B}}function Re(e={}){const{valueDark:t="dark",valueLight:o="",window:i=j}=e,r=Ze({...e,onChanged:(d,c)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,d==="dark",c,d):c(d)},modes:{dark:t,light:o}}),l=O(()=>r.system?r.system.value:le({window:i}).value?"dark":"light");return O({get(){return r.value==="dark"},set(d){const c=d?"dark":"light";l.value===c?r.value="auto":r.value=c}})}const We=ee({name:"ModalNewOrganization",props:{isShown:Boolean,closeModal:Function},data(){return{name:"",description:""}},methods:{async createOrganization(){W.createOrganization({name:this.name,description:this.description}).then(e=>{F.data.organizations=[...F.data.organizations,e]}).finally(()=>{this.closeModal()})}}}),He={key:1,class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"},Je={class:"relative p-4 w-full max-w-md max-h-full top-0 right-0 left-0 z-50"},Pe={class:"relative bg-white rounded-lg shadow dark:bg-gray-700 min-w-80"},qe={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"},Ie=n("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"},"Создай организацию",-1),Ge=n("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Ke=n("span",{class:"sr-only"},"Close modal",-1),Qe=[Ge,Ke],Ue=["onsubmit"],Xe={class:"grid gap-4 mb-4 grid-cols-2"},Ye={class:"col-span-2"},et=n("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Название",-1),tt={class:"col-span-2"},ot=n("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Описание",-1),nt=n("svg",{class:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1);function rt(e,t,o,i,r,l){return m(),k(J,null,[e.isShown?(m(),k("div",{key:0,onClick:t[0]||(t[0]=(...s)=>e.closeModal&&e.closeModal(...s)),class:"top-0 left-0 h-screen w-screen bg-gray-900 fixed opacity-20 z-40"})):_("",!0),e.isShown?(m(),k("div",He,[n("div",Je,[n("div",Pe,[n("div",qe,[Ie,n("button",{onClick:t[1]||(t[1]=(...s)=>e.closeModal&&e.closeModal(...s)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal"},Qe)]),n("form",{onsubmit:s=>s.preventDefault(),class:"p-4 md:p-5"},[n("div",Xe,[n("div",Ye,[et,P(n("input",{type:"text",name:"name",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Название организации",required:"","onUpdate:modelValue":t[2]||(t[2]=s=>e.name=s)},null,512),[[q,e.name]])]),n("div",tt,[ot,P(n("textarea",{id:"description",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Описание организации","onUpdate:modelValue":t[3]||(t[3]=s=>e.description=s)},null,512),[[q,e.description]])])]),n("button",{onClick:t[4]||(t[4]=(...s)=>e.createOrganization&&e.createOrganization(...s)),type:"submit",class:"text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[nt,pe(" Добавить организацию ")])],8,Ue)])])])):_("",!0)],64)}const st=te(We,[["render",rt]]),at=ee({name:"ModalLogout",props:{isShown:Boolean,closeModal:Function},methods:{async logout(){localStorage.removeItem("token"),F.auth.isAuth=!1,await we.push("/login")}}}),it={key:0,class:"top-0 left-0 h-screen w-screen bg-gray-900 fixed opacity-20 z-40"},lt={key:1,class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"},ut={class:"relative p-4 w-full max-w-md max-h-full"},dt={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},ct=n("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),ft=n("span",{class:"sr-only"},"Выход",-1),gt=[ct,ft],ht={class:"p-4 md:p-5 text-center"},mt=n("svg",{class:"mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1),pt=n("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"}," Выйти из аккаунта? ",-1),wt={class:"flex"};function vt(e,t,o,i,r,l){return m(),k(J,null,[e.isShown?(m(),k("div",it)):_("",!0),e.isShown?(m(),k("div",lt,[n("div",ut,[n("div",dt,[n("button",{onClick:t[0]||(t[0]=(...s)=>e.closeModal&&e.closeModal(...s)),type:"button",class:"absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"popup-modal"},gt),n("div",ht,[mt,pt,n("div",wt,[n("button",{onClick:t[1]||(t[1]=(...s)=>e.logout&&e.logout(...s)),type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"}," Уверен "),n("button",{onClick:t[2]||(t[2]=(...s)=>e.closeModal&&e.closeModal(...s)),type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}," Отмена ")])])])])])):_("",!0)],64)}const yt=te(at,[["render",vt]]),bt={key:0,class:"flex"},kt={class:"bg-white border-gray-200 lg:px-6 sm:px-8 px-2 py-2.5 dark:bg-gray-800 w-screen shrink absolute z-50 shadow-md top-0"},xt={class:"flex md:content-center justify-between items-center max-w-screen"},_t={class:"flex items-center mr-10"},Mt=n("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[n("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M5 7h14M5 12h14M5 17h14"})],-1),St=[Mt],Ct={class:"cursor-pointer flex text-nowrap items-center font-medium text-xl max-w-80 dark:text-neutral-200",href:"/"},$t=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[n("path",{d:"M16 12L4 12M16 12L12 16M16 12L12 8M15 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H15",stroke:"#FF4A4A","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),At=[$t],zt={key:0,class:"flex items-center"},Ot=n("svg",{class:"w-4 h-4 flex text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[n("path",{stroke:"#FFF","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14m-7 7V5"})],-1),Lt=n("p",{class:"md:flex hidden"},"Организация",-1),jt=[Ot,Lt],Vt={class:"flex w-full justify-end"},Et={key:0,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Ft=n("path",{"fill-rule":"evenodd",d:"M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z","clip-rule":"evenodd"},null,-1),Bt=[Ft],Dt={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},Nt=n("path",{"fill-rule":"evenodd",d:"M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z","clip-rule":"evenodd"},null,-1),Tt=[Nt],Ht={__name:"MainLayout",setup(e){const t=M(),o=M(),i=M([]),r=M(""),l=Re(),s=Le(l),d=()=>{t.value=!t.value},c=()=>{o.value=!o.value},f=()=>{t.value=!1},p=()=>{o.value=!1};return ve(()=>{W.getProfile().then(u=>{F.auth.username=u.name,F.auth.id=u.id,r.value=u}),W.getOrganizations().then(u=>{i.value=u})}),(u,v)=>{const w=ye("RouterView");return m(),k(J,null,[r.value.name?(m(),k("div",bt,[u.$route.name!="AllOrganization"?(m(),R(w,{key:0,class:"flex"})):_("",!0),n("nav",kt,[n("div",xt,[n("div",_t,[u.$route.name!="AllOrganization"?(m(),k("button",{key:0,onClick:v[0]||(v[0]=(...y)=>E(I)&&E(I)(...y)),type:"button",class:"text-gray-400 sm:hidden bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal"},St)):_("",!0),n("a",Ct,be(r.value.name),1),n("button",{class:"ml-3 bg-red-100 p-[2px] hover:bg-red-200 rounded flex",onClick:c},At)]),u.$route.name=="AllOrganization"?(m(),k("div",zt,[n("button",{onClick:d,class:"flex items-center justify-between text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button"},jt)])):_("",!0),n("div",Vt,[n("button",{class:"flex",onClick:v[1]||(v[1]=y=>E(s)())},[E(l)?(m(),k("svg",Dt,Tt)):(m(),k("svg",Et,Bt))])])])])])):_("",!0),u.$route.name=="AllOrganization"?(m(),R(w,{key:1,class:"flex mt-20"})):_("",!0),t.value?(m(),R(st,{key:2,isShown:t.value,closeModal:f},null,8,["isShown"])):_("",!0),ke(yt,{isShown:o.value,closeModal:p},null,8,["isShown"])],64)}}};export{Ht as default};

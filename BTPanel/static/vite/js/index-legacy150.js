System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./index-legacy73.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./index-legacy59.js?v=1723125373998","./index-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./index-legacy70.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./site-legacy2.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998","./site-legacy.js?v=1723125373998","./index-legacy144.js?v=1723125373998","./Tabs-legacy.js?v=1723125373998","./index-legacy105.js?v=1723125373998","./use-theme-vars-legacy.js?v=1723125373998","./index-legacy77.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy13.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1723125373998","./InputGroupLabel-legacy.js?v=1723125373998","./InputGroup-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1723125373998","./file-legacy2.js?v=1723125373998","./Spin-legacy.js?v=1723125373998","./refersh-legacy.js?v=1723125373998","./php-legacy.js?v=1723125373998","./Space-legacy.js?v=1723125373998","./Alert-legacy.js?v=1723125373998","./index-legacy145.js?v=1723125373998","./Image-legacy.js?v=1723125373998","./_createCompounder-legacy.js?v=1723125373998"],(function(e,l){"use strict";var a,t,n,s,u,c,i,g,y,_,p,r,d,j,o,v,x,m,f,h,b,k,T;return{setters:[e=>{a=e._},e=>{t=e.u,n=e._},e=>{s=e._},e=>{u=e.u},e=>{c=e.m,i=e.d},e=>{g=e.h,y=e.k,_=e.B,p=e.G},e=>{r=e.l,d=e.ad,j=e.S,o=e.Z,v=e.P,x=e.V,m=e.W,f=e.q,h=e.a3,b=e.af,k=e._,T=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},w={key:0};e("default",r({__name:"index",setup(e){const{t:r}=d(),{keys:S,table:P,columns:M}=t([{key:"name",title:r("Site.TableRow.Name"),ellipsis:{tooltip:{width:"trigger"}}}]),W=async()=>{g({title:r("WP.Migrate.Title"),content:r("WP.Migrate.Tips.3"),onConfirm:async({hide:e})=>{await c(),$(),e()}})},{loading:C,setLoading:L}=u(),$=async()=>{try{L(!0);const{message:e}=await i();y(e)?P.data=e?e.map((e=>({name:e}))):[]:(P.data=[],P.total=0)}finally{S.value=[],L(!1)}};return $(),(e,t)=>{const u=_,c=p,i=s,g=n,y=a;return j(),o("div",l,[v(y,null,{toolsLeft:x((()=>[v(c,{class:"flex-nowrap!","items-center":""},{default:x((()=>[v(u,{type:"primary",disabled:!m(P).data.length,onClick:W},{default:x((()=>[f(h(e.$t("Site.TableOP.Migrate")),1)])),_:1},8,["disabled"]),m(P).data.length?b("",!0):(j(),o("span",w,h(e.$t("WP.Migrate.Tips.2")),1))])),_:1}),v(i,null,{default:x((()=>[k("span",null,h(e.$t("WP.Migrate.Tips.4")),1)])),_:1})])),table:x((()=>[v(g,{"checked-row-keys":m(S),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>T(S)?S.value=e:null),loading:m(C),"loading-num":3,"max-height":340,data:m(P).data,columns:m(M)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:x((()=>[v(i,null,{default:x((()=>[k("li",null,h(e.$t("WP.Migrate.Tips.1")),1)])),_:1})])),_:1})])}}}))}}}));
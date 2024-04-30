(function(){"use strict";var e={3999:function(e,n,t){var o=t(5130),r=t(6768);function a(e,n,t,o,a,i){const u=(0,r.g2)("Navbar"),l=(0,r.g2)("router-view"),s=(0,r.g2)("Footer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(u,{logo:a.logo_src,alt:a.app_name},null,8,["logo","alt"]),(0,r.bF)(l),(0,r.bF)(s)],64)}const i={id:"nav"},u=["src","alt"];function l(e,n,t,o,a,l){const s=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",i,[(0,r.bF)(s,{to:"/",id:"logo-url"},{default:(0,r.k6)((()=>[(0,r.Lk)("img",{src:t.logo,alt:t.alt,id:"logo"},null,8,u)])),_:1}),(0,r.bF)(s,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(s,{to:"/Pedidos"},{default:(0,r.k6)((()=>[(0,r.eW)("Pedidos")])),_:1})])}var s={name:"Navbar",props:["logo","alt"]},c=t(1241);const d=(0,c.A)(s,[["render",l],["__scopeId","data-v-4448e562"]]);var f=d;const p=e=>((0,r.Qi)("data-v-28103541"),e=e(),(0,r.jt)(),e),m={id:"footer"},v=p((()=>(0,r.Lk)("p",null,"Make Your Burger © 2024",-1))),g=[v];function b(e,n,t,o,a,i){return(0,r.uX)(),(0,r.CE)("div",m,g)}var h={name:"Footer"};const k=(0,c.A)(h,[["render",b],["__scopeId","data-v-28103541"]]);var y=k,_={components:{Navbar:f,Footer:y},data(){return{logo_src:"/img/logo.png",app_name:"Make Your Burger"}}};const L=(0,c.A)(_,[["render",a]]);var E=L,C=t(1387);const F={class:"main-container"},w=(0,r.Lk)("h1",null,"Monte o seu burger:",-1);function A(e,n,t,o,a,i){const u=(0,r.g2)("Banner"),l=(0,r.g2)("BurgerForm");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(u),(0,r.Lk)("div",F,[w,(0,r.bF)(l)])],64)}const j=e=>((0,r.Qi)("data-v-7fc1ea31"),e=e(),(0,r.jt)(),e),B={id:"main-banner"},O=j((()=>(0,r.Lk)("h1",null,"Make Your Burger",-1))),S=[O];function N(e,n,t,o,a,i){return(0,r.uX)(),(0,r.CE)("div",B,S)}var P={name:"Banner"};const X=(0,c.A)(P,[["render",N],["__scopeId","data-v-7fc1ea31"]]);var I=X,T=t(4232);const x=e=>((0,r.Qi)("data-v-f986ab16"),e=e(),(0,r.jt)(),e),M={class:"input-container"},K=x((()=>(0,r.Lk)("label",{for:"name"},"Nome do cliente:",-1))),U={class:"input-container"},D=x((()=>(0,r.Lk)("label",{for:"bread"},"Escolha o pão:",-1))),H=x((()=>(0,r.Lk)("option",{value:""},"Escolha o seu pão",-1))),V=["value"],Q={class:"input-container"},W=x((()=>(0,r.Lk)("label",{for:"meat"},"Escolha a carne do seu burger:",-1))),Y=x((()=>(0,r.Lk)("option",{value:""},"Selecione o tipo de carne",-1))),q=["value"],J={id:"optional-container",class:"input-container"},z=x((()=>(0,r.Lk)("label",{id:"optional-title",for:"optional"},"Selecione os opcionais:",-1))),G=["value"],$=x((()=>(0,r.Lk)("div",{class:"input-container"},[(0,r.Lk)("input",{type:"submit",class:"submit-btn",value:"Criar meu Burger!"})],-1)));function R(e,n,t,a,i,u){const l=(0,r.g2)("Message");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bo)((0,r.bF)(l,{message:i.message},null,8,["message"]),[[o.aG,i.message]]),(0,r.Lk)("div",null,[(0,r.Lk)("form",{id:"burger-form",onSubmit:n[4]||(n[4]=(...e)=>u.createBurger&&u.createBurger(...e))},[(0,r.Lk)("div",M,[K,(0,r.bo)((0,r.Lk)("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":n[0]||(n[0]=e=>i.name=e),placeholder:"Digite o seu nome"},null,512),[[o.Jo,i.name]])]),(0,r.Lk)("div",U,[D,(0,r.bo)((0,r.Lk)("select",{name:"bread",id:"bread","onUpdate:modelValue":n[1]||(n[1]=e=>i.bread=e)},[H,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.breads,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.tipo},(0,T.v_)(e.tipo),9,V)))),128))],512),[[o.u1,i.bread]])]),(0,r.Lk)("div",Q,[W,(0,r.bo)((0,r.Lk)("select",{name:"meat",id:"meat","onUpdate:modelValue":n[2]||(n[2]=e=>i.meat=e)},[Y,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.meats,(e=>((0,r.uX)(),(0,r.CE)("option",{key:e.id,value:e.tipo},(0,T.v_)(e.tipo),9,q)))),128))],512),[[o.u1,i.meat]])]),(0,r.Lk)("div",J,[z,((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.optionaldata,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"checkbox-container",key:e.id},[(0,r.bo)((0,r.Lk)("input",{type:"checkbox",id:"optional",name:"optional","onUpdate:modelValue":n[3]||(n[3]=e=>i.optional=e),value:e.tipo},null,8,G),[[o.lH,i.optional]]),(0,r.Lk)("span",null,(0,T.v_)(e.tipo),1)])))),128))]),$],32)])])}var Z=t(6243),ee={name:"BurgerForm",data(){return{breads:null,meats:null,optionaldata:null,name:null,bread:null,meat:null,optional:[],status:[],message:null}},methods:{async getIngredientes(){const e=await fetch("http://localhost:3000/ingredientes"),n=await e.json();this.breads=n.paes,this.meats=n.carnes,this.optionaldata=n.opcionais},async createBurger(e){e.preventDefault();const n={nome:this.name,pao:this.bread,carne:this.meat,opcionais:Array.from(this.optional),status:"Solicitado"},t=JSON.stringify(n),o=await fetch("http://localhost:3000/burgers",{method:"POST",headers:{"Content-type":"application/json"},body:t}),r=await o.json();this.message=`Pedido Nº ${r.id} realizado com sucesso`,setTimeout((()=>{this.message=null}),3e3),this.name=null,this.bread=null,this.meat=null,this.optional=[],console.log(r)}},mounted(){this.getIngredientes()},components:{Message:Z.A}};const ne=(0,c.A)(ee,[["render",R],["__scopeId","data-v-f986ab16"]]);var te=ne,oe={name:"Home",components:{Banner:I,BurgerForm:te}};const re=(0,c.A)(oe,[["render",A]]);var ae=re;const ie=[{path:"/",name:"home",component:ae},{path:"/Pedidos",name:"Pedidos",component:()=>t.e(263).then(t.bind(t,921))}],ue=(0,C.aE)({history:(0,C.LA)("/make_burger/"),routes:ie});var le=ue;(0,o.Ef)(E).use(le).mount("#app")},6243:function(e,n,t){t.d(n,{A:function(){return c}});var o=t(6768),r=t(4232);const a={class:"message-container"};function i(e,n,t,i,u,l){return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.Lk)("p",null,(0,r.v_)(t.message),1)])}var u={name:"Message",props:{message:String}},l=t(1241);const s=(0,l.A)(u,[["render",i],["__scopeId","data-v-29f6a635"]]);var c=s}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/pedidos.d0921575.js"}}(),function(){t.miniCssF=function(e){return"css/pedidos.23cd56bf.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="make_burger:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/make_burger/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,u=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=u,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=u,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={263:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],l=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var c=l(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=self["webpackChunkmake_burger"]=self["webpackChunkmake_burger"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(3999)}));o=t.O(o)})();
//# sourceMappingURL=app.0ace11b2.js.map
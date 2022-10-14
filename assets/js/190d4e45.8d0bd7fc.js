"use strict";(self.webpackChunkeduardodemoura_com=self.webpackChunkeduardodemoura_com||[]).push([[845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||c;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>E,default:()=>C,frontMatter:()=>O,metadata:()=>k,toc:()=>j});var n=r(7462),i=r(7294),c=r(3905),a=r(6010),o=r(2802),l=r(9960),u=r(3919),s=r(5999);const m="cardContainer_fWXF",p="cardTitle_rnsV",f="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return i.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",m)},r)}function y(e){let{href:t,icon:r,title:n,description:c}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:n},r," ",n),c&&i.createElement("p",{className:(0,a.Z)("text--truncate",f),title:c},c))}function v(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?i.createElement(y,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,u.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.xz)(t.docId??void 0);return i.createElement(y,{href:t.href,icon:r,title:t.label,description:null==n?void 0:n.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(v,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return i.createElement(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return i.createElement(b,e);const n=(0,o.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",r)},n.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(h,{item:e})))))}const O={},E="Curriculum Vitae",k={unversionedId:"curriculum-vitae/curriculum-vitae",id:"curriculum-vitae/curriculum-vitae",title:"Curriculum Vitae",description:"Click here to view the PDF version",source:"@site/docs/curriculum-vitae/curriculum-vitae.md",sourceDirName:"curriculum-vitae",slug:"/curriculum-vitae/",permalink:"/docs/curriculum-vitae/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/docs/about"},next:{title:"Flixbus (Nov 21 - Current)",permalink:"/docs/curriculum-vitae/flixbus"}},x={},j=[{value:"My experiences as a Software Engineer:",id:"my-experiences-as-a-software-engineer",level:3}],P={toc:j};function C(e){let{components:t,...i}=e;return(0,c.kt)("wrapper",(0,n.Z)({},P,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"curriculum-vitae"},"Curriculum Vitae"),(0,c.kt)("admonition",{title:"Looking for the PDF version?",type:"tip"},(0,c.kt)("p",{parentName:"admonition"},(0,c.kt)("a",{target:"_blank",href:r(1670).Z},"Click here to view the PDF version"))),(0,c.kt)("h3",{id:"my-experiences-as-a-software-engineer"},"My experiences as a Software Engineer:"),(0,c.kt)(w,{mdxType:"DocCardList"}))}C.isMDXComponent=!0},1670:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/cv-eduardo-de-moura-5d5d5fade13f3f5f02343c2c44946477.pdf"}}]);
"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[456],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66569:(e,t,r)=>{r.d(t,{k:()=>l});var n=r(67294),a=r(39960),o=r(44996);const i={linkCard:"linkCard_uxt7",icon:"icon_lqTJ",cardHeader:"cardHeader_NaDd",cardBody:"cardBody_svEQ",paragraph:"paragraph_UbEf"};function c(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:i.linkCard},r)}function s(e){let{title:t,icon:r,body:a}=e;return n.createElement("div",{className:"card"},n.createElement("div",{className:`card__header ${i.cardHeader}`},n.createElement("img",{className:i.icon,src:(0,o.Z)(`/img/${r}`),alt:`${t} category`,title:`${t} category`,width:"48px",height:"48px"}),n.createElement("h2",{title:t,className:"text--truncate"},t)),n.createElement("div",{className:`card__body ${i.cardBody}`},n.createElement("p",{className:`${i.paragraph}`},a)))}const l=e=>n.createElement(c,{href:e.href},n.createElement(s,e))},97048:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(67294),a=r(53438),o=r(66569);const i="icon-tutorial.svg";function c(e){let{item:t}=e;const r=function(){try{return(0,a.jA)()}catch{return}}()?.customProps?.icon,c={title:t.label,icon:t.customProps?.icon||r||i,href:t.href,body:t.customProps?.description??("link"===t.type&&(0,a.xz)(t.docId??void 0)).description??void 0};return n.createElement(o.k,c)}const s={container:"container_Mg1N"};function l(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(p,{items:r.items,className:t})}function p(e){const{items:t,className:r}=e;if(!t)return n.createElement(l,e);const o=(0,a.MN)(t);return n.createElement("section",{className:`${s.container} ${r}`},o.map(((e,t)=>n.createElement("article",{key:t},n.createElement(c,{item:e})))))}},36788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));r(97048);const o={title:"Overview",description:"Arrow comprises different libraries, each improving or extending one commonly-used library in the Kotlin ecosystem or a particular Kotlin language feature.",sidebar_position:1,sidebar_custom_props:{icon:"icon-docs.svg"}},i="<decorated-text icon={frontMatter.sidebar_custom_props.icon} title={frontMatter.title} />",c={unversionedId:"learn/overview",id:"learn/overview",title:"Overview",description:"Arrow comprises different libraries, each improving or extending one commonly-used library in the Kotlin ecosystem or a particular Kotlin language feature.",source:"@site/content/docs/learn/overview.md",sourceDirName:"learn",slug:"/learn/overview",permalink:"/learn/overview",draft:!1,editUrl:"https://github.com/xebia-functional/xef-website/edit/main/content/docs/learn/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",description:"Arrow comprises different libraries, each improving or extending one commonly-used library in the Kotlin ecosystem or a particular Kotlin language feature.",sidebar_position:1,sidebar_custom_props:{icon:"icon-docs.svg"}},sidebar:"learnSidebar",next:{title:"Quickstart",permalink:"/learn/quickstart/"}},s={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"decorated-text-iconfrontmattersidebar_custom_propsicon-titlefrontmattertitle-"},(0,a.kt)("decorated-text",{icon:o.sidebar_custom_props.icon,title:o.title})),(0,a.kt)("p",null,"In recent months, the world of AI has changed drastically. The impact of the\ngeneral availability of Large Language Models, like ",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"ChatGPT"),", ",(0,a.kt)("a",{parentName:"p",href:"https://bard.google.com/"},"Bard"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.databricks.com/product/machine-learning/large-language-models"},"Dolly"),"\nis hard to overstate. These only complement existing techniques in\nimage generation, classification, speech recognition, and many others. At the\ntime of writing this post, ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/models"},"Hugging Face Hub"),", the leading repository of models, has more than 200,000 of them! The challenge is how to\nintegrate these techniques into a broader system. AI is not a goal in itself but\na tool in your journey to offer the best experience to your customers."),(0,a.kt)("p",null,"The possibilities are endless: Summarize the most important events in the\ncustomer's account. Generate queries to the database from a natural language\ndescription. Help customer service provide a sequence of steps to resolve an\nissue. Identify the important parts of a PDF invoice. These are tasks where AI\ncan make an impact ",(0,a.kt)("em",{parentName:"p"},"now"),"."),(0,a.kt)("p",null,"However, the ecosystem is quite fragmented, usually requiring a different library for\neach different service. This is where ",(0,a.kt)("a",{parentName:"p",href:"https://xef.ai"},"xef.ai")," enters the game:\na project whose goal is to offer a convenient interface to these modern AI\ntechniques so your team can quickly move from ideas to proofs of concepts to\nintegrating AI into your business processes."),(0,a.kt)("p",null,"Just bring xef.ai in your project, connect it to the right AI models and data sources, and start asking questions."))}u.isMDXComponent=!0}}]);
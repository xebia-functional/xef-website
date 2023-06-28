"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[169],{45104:(e,t,a)=>{a.d(t,{j:()=>c});var r=a(67294),i=a(39960);const n={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function c(e){let{title:t,ctaList:a,className:c}=e;return r.createElement("div",{className:`${n.wrapperContainer} ${c}`},r.createElement("div",{className:`container ${n.container}`},r.createElement("h1",null,t),r.createElement("div",{className:n.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return r.createElement(i.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},8730:(e,t,a)=>{a.d(t,{T:()=>l});var r=a(67294),i=a(39960),n=a(44996);const c={borderlessCard:"borderlessCard_sjEN",infoMode:"infoMode_oa1U",icon:"icon_c5iy",cardHeader:"cardHeader_Melu",title:"title_AiRZ",cardBody:"cardBody__x5U",cardFooter:"cardFooter_BYOD",link:"link_YPJo"};function l(e){let{title:t,icon:a,href:l,body:o}=e;const s=!l,m=s?"64px":"32px";return r.createElement("div",{className:`card ${c.borderlessCard} ${s&&c.infoMode}`},r.createElement("div",{className:`card__header ${c.cardHeader}`},r.createElement("img",{className:c.icon,src:(0,n.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,height:m,width:m}),r.createElement("h3",{className:c.title},t)),r.createElement("div",{className:`card__body ${c.cardBody}`},r.createElement("p",null,o)),!s&&r.createElement("div",{className:`card__footer ${c.cardFooter}`},r.createElement("strong",null,r.createElement(i.Z,{href:l,className:c.link},"Learn more"))))}},78914:(e,t,a)=>{a.d(t,{V:()=>l});var r=a(67294),i=a(39960);const n={hero:"hero_wgFg",container:"container_Iw7w",contentContainer:"contentContainer_Lap5",max:"max_mnXO",description:"description_ZLxN",playvideo:"playvideo_WyNp",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};var c=a(44996);function l(e){let{title:t,subtitle:a,ctaList:l,className:o}=e;return r.createElement("div",{className:`hero ${n.hero} ${o}`},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--5"},r.createElement("div",{className:`${n.col}`},r.createElement("h1",{className:`hero__title ${n.max}`},t),a&&r.createElement("h2",{className:`${n.subtitle} ${n.max}`},a),r.createElement("div",null,r.createElement("p",{className:`${n.max} ${n.description}`},"XEF is a library to bring the power of modern AI to your application or service, in the form of LLM (Large Language Models), image generation, and many others.")),r.createElement("div",{className:`${n.ctaList} ${n.max}`},l&&l.map((e=>{let{title:t,href:a,elementClassName:n=""}=e;return r.createElement(i.Z,{key:t,href:a,className:`button button--primary button--lg ${n}`},t)}))))),r.createElement("div",{className:"col col--7"},r.createElement("div",{className:`${n.playvideo}`},r.createElement("a",{href:"https://vimeo.com/836615540"},r.createElement("img",{src:(0,c.Z)("/img/play-video.svg"),alt:""})))))))}},66569:(e,t,a)=>{a.d(t,{k:()=>s});var r=a(67294),i=a(39960),n=a(44996);const c={linkCard:"linkCard_uxt7",icon:"icon_lqTJ",cardHeader:"cardHeader_NaDd",cardBody:"cardBody_svEQ",paragraph:"paragraph_UbEf"};function l(e){let{href:t,children:a}=e;return r.createElement(i.Z,{href:t,className:c.linkCard},a)}function o(e){let{title:t,icon:a,body:i}=e;return r.createElement("div",{className:"card"},r.createElement("div",{className:`card__header ${c.cardHeader}`},r.createElement("img",{className:c.icon,src:(0,n.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,width:"48px",height:"48px"}),r.createElement("h2",{title:t,className:"text--truncate"},t)),r.createElement("div",{className:`card__body ${c.cardBody}`},r.createElement("p",{className:`${c.paragraph}`},i)))}const s=e=>r.createElement(l,{href:e.href},r.createElement(o,e))},39867:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(87462),i=a(67294),n=a(52263),c=a(39960),l=a(55707),o=a(78914),s=a(66569),m=a(8730),d=a(45104);const h={hero:{title:"More libraries",subtitle:"Libraries that complement the xef ecosystem"},libraries:[{title:"Quiver",href:"https://cashapp.github.io/quiver/",icon:"icon-support.svg",body:"Additional functional programming idioms over and above what is available from Arrow."},{title:"Hoplite",href:"https://github.com/sksamuel/hoplite",icon:"icon-quickstart.svg",body:"Boilerplate-free Kotlin config library for loading configuration files as data classes"},{title:"Tribune",href:"https://github.com/sksamuel/tribune",icon:"icon-typed-errors.svg",body:"Toolset for creating simple parsers from raw input types, to properly validated parsed types"},{title:"Parsus",href:"https://github.com/alllex/parsus",icon:"icon-quote.svg",body:"Parser-combinators with Kotlin Coroutines"}],banner:{title:"Do you want to know more about xef.ai?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},u={verticalRhythm:"verticalRhythm_ciyB",textContainer:"textContainer_sUD0",featuresContainer:"featuresContainer_C4bu container",quotesContainer:"quotesContainer__RHU container",navigationContainer:"navigationContainer_fCvS"};function p(){const{siteConfig:e}=(0,n.Z)();return i.createElement(l.Z,{title:"More libraries",description:e.tagline},i.createElement(o.V,{title:h.hero.title,subtitle:h.hero.subtitle,ctaList:h.hero.ctaList,className:u.verticalRhythm}),i.createElement("main",null,i.createElement("section",{className:`${u.featuresContainer} ${u.verticalRhythm}`},h.libraries.map((e=>i.createElement(s.k,(0,r.Z)({key:e.title},e))))),i.createElement("section",{className:`container text--center ${u.textContainer} ${u.verticalRhythm}`},i.createElement("h1",null,"Even more libraries?"),i.createElement("p",null,"We'd love to",i.createElement(c.Z,{href:"https://github.com/xebia-functional/xef-website/issues"}," hear "),"about other library which complements the xef libraries and should be featured here!")),h.navs&&i.createElement("section",{className:`container ${u.navigationContainer} ${u.verticalRhythm}`},h.navs.map((e=>i.createElement(m.T,(0,r.Z)({key:e.title},e))))),i.createElement("section",null,i.createElement(d.j,{title:h.banner.title,ctaList:h.banner.ctaList}))))}}}]);
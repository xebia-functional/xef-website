"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[9243,4576],{45104:(e,t,a)=>{a.d(t,{j:()=>r});var i=a(67294),n=a(39960);const l={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function r(e){let{title:t,ctaList:a,className:r}=e;return i.createElement("div",{className:`${l.wrapperContainer} ${r}`},i.createElement("div",{className:`container ${l.container}`},i.createElement("h1",null,t),i.createElement("div",{className:l.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return i.createElement(n.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},8730:(e,t,a)=>{a.d(t,{T:()=>s});var i=a(67294),n=a(39960),l=a(44996);const r={borderlessCard:"borderlessCard_sjEN",infoMode:"infoMode_oa1U",icon:"icon_c5iy",cardHeader:"cardHeader_Melu",title:"title_AiRZ",cardBody:"cardBody__x5U",cardFooter:"cardFooter_BYOD",link:"link_YPJo"};function s(e){let{title:t,icon:a,href:s,body:c}=e;const o=!s,m=o?"64px":"32px";return i.createElement("div",{className:`card ${r.borderlessCard} ${o&&r.infoMode}`},i.createElement("div",{className:`card__header ${r.cardHeader}`},i.createElement("img",{className:r.icon,src:(0,l.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,height:m,width:m}),i.createElement("h3",{className:r.title},t)),i.createElement("div",{className:`card__body ${r.cardBody}`},i.createElement("p",null,c)),!o&&i.createElement("div",{className:`card__footer ${r.cardFooter}`},i.createElement("strong",null,i.createElement(n.Z,{href:s,className:r.link},"Learn more"))))}},78914:(e,t,a)=>{a.d(t,{V:()=>s});var i=a(67294),n=a(39960);const l={hero:"hero_wgFg",container:"container_Iw7w",contentContainer:"contentContainer_Lap5",max:"max_mnXO",description:"description_ZLxN",playvideo:"playvideo_WyNp",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};var r=a(44996);function s(e){let{title:t,subtitle:a,ctaList:s,className:c}=e;return i.createElement("div",{className:`hero ${l.hero} ${c}`},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col col--5"},i.createElement("div",{className:`${l.col}`},i.createElement("h1",{className:`hero__title ${l.max}`},t),a&&i.createElement("h2",{className:`${l.subtitle} ${l.max}`},a),i.createElement("div",null,i.createElement("p",{className:`${l.max} ${l.description}`},"XEF is a library to bring the power of modern AI to your application or service, in the form of LLM (Large Language Models), image generation, and many others.")),i.createElement("div",{className:`${l.ctaList} ${l.max}`},s&&s.map((e=>{let{title:t,href:a,elementClassName:l=""}=e;return i.createElement(n.Z,{key:t,href:a,className:`button button--primary button--lg ${l}`},t)}))))),i.createElement("div",{className:"col col--7"},i.createElement("div",{className:`${l.playvideo}`},i.createElement("a",{href:"https://vimeo.com/836615540"},i.createElement("img",{src:(0,r.Z)("/img/play-video.svg"),alt:""})))))))}},54469:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i.default});var i=a(3555)},3555:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(87462),n=a(67294),l=a(52263),r=a(55707),s=a(78914),c=a(8730),o=a(45104);const m={hero:{title:"Support",subtitle:"Morbi ornare arcu massa, a sodales augue vulputate quis. Nunc faucibus lectus augue, posuere pulvina",ctaList:[{title:"Our Slack channel",href:"/learn/overview"}]},links:[{title:"Documentation",href:"/learn/quickstart",icon:"icon-quickstart.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"GitHub",href:"https://github.com/xebia-functional/xef",icon:"icon-typed-errors.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Slack channel",href:"/learn/quickstart",icon:"icon-immutable-data.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Stack Overflow",href:"/learn/quickstart",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Blog",href:"/community/blog",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."},{title:"Events",href:"/community/events",icon:"icon-design.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus vel..."}],banner:{title:"Do you want to know more about xef.ai?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},u={verticalRhythm:"verticalRhythm_kkKO",textContainer:"textContainer_noJu",navigationContainer:"navigationContainer_g_p8"};function d(){const{siteConfig:e}=(0,l.Z)();return n.createElement(r.Z,{title:"Support",description:e.tagline},n.createElement(s.V,{title:m.hero.title,subtitle:m.hero.subtitle,ctaList:m.hero.ctaList,className:u.verticalRhythm}),n.createElement("main",null,n.createElement("section",{className:`container text--center ${u.textContainer}`},n.createElement("h1",null,"Community support"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est")),n.createElement("section",{className:`container ${u.navigationContainer} ${u.verticalRhythm}`},m.links.map((e=>n.createElement(c.T,(0,i.Z)({key:e.title},e))))),n.createElement("section",null,n.createElement(o.j,{title:m.banner.title,ctaList:m.banner.ctaList}))))}}}]);
"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[578,884],{45104:(e,t,a)=>{a.d(t,{j:()=>s});var i=a(67294),n=a(39960);const r={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function s(e){let{title:t,ctaList:a,className:s}=e;return i.createElement("div",{className:`${r.wrapperContainer} ${s}`},i.createElement("div",{className:`container ${r.container}`},i.createElement("h1",null,t),i.createElement("div",{className:r.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return i.createElement(n.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},8730:(e,t,a)=>{a.d(t,{T:()=>l});var i=a(67294),n=a(39960),r=a(44996);const s={borderlessCard:"borderlessCard_sjEN",infoMode:"infoMode_oa1U",icon:"icon_c5iy",cardHeader:"cardHeader_Melu",title:"title_AiRZ",cardBody:"cardBody__x5U",cardFooter:"cardFooter_BYOD",link:"link_YPJo"};function l(e){let{title:t,icon:a,href:l,body:o}=e;const c=!l,m=c?"64px":"32px";return i.createElement("div",{className:`card ${s.borderlessCard} ${c&&s.infoMode}`},i.createElement("div",{className:`card__header ${s.cardHeader}`},i.createElement("img",{className:s.icon,src:(0,r.Z)(`/img/${a}`),alt:`${t} category`,title:`${t} category`,height:m,width:m}),i.createElement("h3",{className:s.title},t)),i.createElement("div",{className:`card__body ${s.cardBody}`},i.createElement("p",null,o)),!c&&i.createElement("div",{className:`card__footer ${s.cardFooter}`},i.createElement("strong",null,i.createElement(n.Z,{href:l,className:s.link},"Learn more"))))}},78914:(e,t,a)=>{a.d(t,{V:()=>s});var i=a(67294),n=a(39960);const r={hero:"hero_wgFg",container:"container_Iw7w",contentContainer:"contentContainer_Lap5",max:"max_mnXO",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function s(e){let{title:t,subtitle:a,ctaList:s,className:l}=e;return i.createElement("div",{className:`hero ${r.hero} ${l}`},i.createElement("div",{className:`${r.container}`},i.createElement("div",{className:`${r.contentContainer}`},i.createElement("h1",{className:`hero__title ${r.max}`},t),a&&i.createElement("h2",{className:`${r.subtitle} ${r.max}`},a),i.createElement("div",{className:`${r.ctaList} ${r.max}`},s&&s.map((e=>{let{title:t,href:a,elementClassName:r=""}=e;return i.createElement(n.Z,{key:t,href:a,className:`button button--primary button--lg ${r}`},t)}))))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>g,VW:()=>p});var i=a(87462),n=a(67294),r=a(60490),s=a(25935),l=a(39960),o=a(44996);const c={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",fit:"fit_iHw2",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},m=["webm","mp4","mpg","mpeg","ogv"],u=["webp","png","jpg","jpeg","gif"];function d(e){let{title:t="Case study",subtitle:a,image:i=(0,o.Z)("/img/sample-image.jpg"),body:d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:p,linkText:g="Learn more",landscapeMode:v=!1,overlay:E=!0}=e;const b=`${i.split(".").pop()}`,h=m.includes(b),f=u.includes(b),y=(0,s.ZP)(t),_=r.zD(t).text();return n.createElement("div",{className:`card ${c.card} ${v&&c.landscapeMode}`},n.createElement("div",{className:`card__image ${c.imageContainer} ${E?c.overlay:""}`},f&&n.createElement("img",{className:`${c.image} ${E?"":c.fit}`,src:i,alt:`${_}`,title:`${_}`}),h&&n.createElement("video",{className:c.image,width:"100%",height:"100%",src:i,title:`${_}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,disablePictureInPicture:!0},`${_} video`)),n.createElement("div",{className:`card__body ${c.body}`},n.createElement("h2",{className:c.title},y),n.createElement("h5",{className:c.subtitle},a),n.createElement("p",{className:c.text},d),n.createElement("strong",null,n.createElement(l.Z,{href:p,className:c.link},g))))}const p=e=>n.createElement(d,(0,i.Z)({landscapeMode:!0},e)),g=e=>n.createElement(d,(0,i.Z)({landscapeMode:!1},e))},48818:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i.default});var i=a(94631)},94631:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var i=a(87462),n=a(67294),r=a(52263),s=a(55707),l=a(78914),o=a(61728),c=a(44996);const m={quoteCard:"quoteCard_rWDi"};function u(e){let{name:t,position:a,image:i,body:r}=e;return n.createElement("div",{className:`card ${m.quoteCard}`},n.createElement("div",{className:"card__body"},n.createElement("p",null,r)),n.createElement("div",{className:"card__footer avatar"},i&&n.createElement("div",{className:"avatar__photo-wrapper"},n.createElement("img",{className:"avatar__photo",src:(0,c.Z)(`/img/${i}`),alt:t,title:t})),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},t),n.createElement("small",{className:"avatar__subtitle"},a))))}var d=a(8730),p=a(45104);const g={hero:{title:"Training",subtitle:"Morbi ornare arcu massa, a sodales augue vulputate quis. Nunc faucibus lectus augue, posuere pulvina",ctaList:[{title:"Learn about our courses",href:"/learn/overview"}]},info:[{title:"Awesome courses",icon:"icon-courses.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus"},{title:"Different levels",icon:"icon-level.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus"},{title:"Based on the community",icon:"icon-community.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada. Donec sed massa finibus, laoreet tellus"}],trainings:[{title:"Training 1",subtitle:"By Xebia Functional",href:"/learn/overview",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Training 2",subtitle:"By Xebia Functional",href:"/learn/overview",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Training 3",subtitle:"By Xebia Functional",href:"/learn/overview",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Training 4",subtitle:"By Xebia Functional",href:"/learn/overview",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."}],quotes:[{name:"Francico D\xedaz",position:"Principal at Xebia Functional",image:"quoted-person-a.jpg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est . Etiam eu turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est . Etiam eu turpis"},{name:"Vicky Ruste",position:"Software Engineer",image:"quoted-person-b.jpg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est . Etiam eu turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est . Etiam eu turpis"}],navs:[{title:"Support",href:"/community/support",icon:"icon-support.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing eliorem ipsum dolor sit amet"},{title:"Blog",href:"/community/blog",icon:"icon-blog.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing eliorem ipsum dolor sit amet"},{title:"Events",href:"/community/events",icon:"icon-events.svg",body:"Lorem ipsum dolor sit amet, consectetur adipiscing eliorem ipsum dolor sit amet"}],banner:{title:"Do you want to know more about xef.ai?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},v={verticalRhythm:"verticalRhythm_GWpV",textContainer:"textContainer_cKOH",featuresContainer:"featuresContainer_el11 container",quotesContainer:"quotesContainer_sS6J container",projectsContainer:"projectsContainer_IXzV",navigationContainer:"navigationContainer_uwuC"};function E(){const{siteConfig:e}=(0,r.Z)();return n.createElement(s.Z,{title:"Training",description:e.tagline},n.createElement(l.V,{title:g.hero.title,subtitle:g.hero.subtitle,ctaList:g.hero.ctaList,className:v.verticalRhythm}),n.createElement("main",null,n.createElement("section",{className:`container text--center ${v.textContainer} ${v.verticalRhythm}`},n.createElement("h1",null,"Learn with xef"),n.createElement("p",null,"xef is composed of different libraries that greatly improve your developer experience using Kotlin")),n.createElement("section",{className:`container ${v.navigationContainer} ${v.verticalRhythm}`},g.info.map((e=>n.createElement(d.T,(0,i.Z)({key:e.title},e))))),n.createElement("section",{className:`container text--center ${v.textContainer} ${v.verticalRhythm}`},n.createElement("h1",null,"Start learning now"),n.createElement("p",null,"xef is composed of different libraries that greatly improve your developer experience using Kotlin")),n.createElement("section",{className:`container ${v.projectsContainer} ${v.verticalRhythm}`},g.trainings.map((e=>n.createElement(o.VW,(0,i.Z)({key:e.title},e))))),n.createElement("section",{className:`container text--center ${v.textContainer} ${v.verticalRhythm}`},n.createElement("h1",null,"About our courses"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est")),n.createElement("section",{className:`${v.quotesContainer} ${v.verticalRhythm}`},g.quotes.map((e=>n.createElement(u,(0,i.Z)({key:e.name},e))))),n.createElement("section",{className:`container ${v.navigationContainer} ${v.verticalRhythm}`},g.navs.map((e=>n.createElement(d.T,(0,i.Z)({key:e.title},e))))),n.createElement("section",null,n.createElement(p.j,{title:g.banner.title,ctaList:g.banner.ctaList}))))}}}]);
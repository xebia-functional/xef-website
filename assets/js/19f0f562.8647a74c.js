"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[3394,4531],{45104:(e,t,a)=>{a.d(t,{j:()=>s});var i=a(67294),l=a(39960);const n={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function s(e){let{title:t,ctaList:a,className:s}=e;return i.createElement("div",{className:`${n.wrapperContainer} ${s}`},i.createElement("div",{className:`container ${n.container}`},i.createElement("h1",null,t),i.createElement("div",{className:n.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return i.createElement(l.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},78914:(e,t,a)=>{a.d(t,{V:()=>r});var i=a(67294),l=a(39960);const n={hero:"hero_wgFg",container:"container_Iw7w",contentContainer:"contentContainer_Lap5",max:"max_mnXO",description:"description_ZLxN",playvideo:"playvideo_WyNp",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};var s=a(44996);function r(e){let{title:t,subtitle:a,ctaList:r,className:c}=e;return i.createElement("div",{className:`hero ${n.hero} ${c}`},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col col--5"},i.createElement("div",{className:`${n.col}`},i.createElement("h1",{className:`hero__title ${n.max}`},t),a&&i.createElement("h2",{className:`${n.subtitle} ${n.max}`},a),i.createElement("div",null,i.createElement("p",{className:`${n.max} ${n.description}`},"XEF is a library to bring the power of modern AI to your application or service, in the form of LLM (Large Language Models), image generation, and many others.")),i.createElement("div",{className:`${n.ctaList} ${n.max}`},r&&r.map((e=>{let{title:t,href:a,elementClassName:n=""}=e;return i.createElement(l.Z,{key:t,href:a,className:`button button--primary button--lg ${n}`},t)}))))),i.createElement("div",{className:"col col--7"},i.createElement("div",{className:`${n.playvideo}`},i.createElement("a",{href:"https://vimeo.com/836615540"},i.createElement("img",{src:(0,s.Z)("/img/play-video.svg"),alt:""})))))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>v,VW:()=>p});var i=a(87462),l=a(67294),n=a(60490),s=a(25935),r=a(39960),c=a(44996);const o={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",fit:"fit_iHw2",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},m=["webm","mp4","mpg","mpeg","ogv"],u=["webp","png","jpg","jpeg","gif","svg"];function d(e){let{title:t="Case study",subtitle:a,image:i=(0,c.Z)("/img/sample-image.jpg"),body:d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:p,linkText:v="Learn more",landscapeMode:b=!1,overlay:E=!0}=e;const g=`${i.split(".").pop()}`,h=m.includes(g),f=u.includes(g),y=(0,s.ZP)(t),N=n.zD(t).text();return l.createElement("div",{className:`card ${o.card} ${b&&o.landscapeMode}`},l.createElement("div",{className:`card__image ${o.imageContainer} ${E?o.overlay:""}`},f&&l.createElement("img",{className:`${o.image} ${E?"":o.fit}`,src:i,alt:`${N}`,title:`${N}`}),h&&l.createElement("video",{className:o.image,width:"100%",height:"100%",src:i,title:`${N}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,disablePictureInPicture:!0},`${N} video`)),l.createElement("div",{className:`card__body ${o.body}`},l.createElement("h2",{className:o.title},y),l.createElement("h5",{className:o.subtitle},a),l.createElement("p",{className:o.text},d),l.createElement("strong",null,l.createElement(r.Z,{href:p,className:o.link},v))))}const p=e=>l.createElement(d,(0,i.Z)({landscapeMode:!0},e)),v=e=>l.createElement(d,(0,i.Z)({landscapeMode:!1},e))},7132:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(87462),l=a(67294),n=a(52263),s=a(55707),r=a(78914),c=a(61728),o=a(45104);const m={hero:{title:"Events",subtitle:"Morbi ornare arcu massa, a sodales augue vulputate quis. Nunc faucibus lectus augue, posuere pulvina",ctaList:[{title:"Some link",href:"/learn/overview"}]},events:[{title:"Event 1",subtitle:"Amsterdam, June 14, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 2",subtitle:"C\xe1diz, September 23, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Event 3",subtitle:"London, October 1, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Event 4",subtitle:"Lisbon, October 17, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 5",subtitle:"Berlin, November 14, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 6",subtitle:"Barcelona, December 6, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."}],banner:{title:"Do you want to know more about xef.ai?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},u={verticalRhythm:"verticalRhythm_qgCE",projectsContainer:"projectsContainer_EIUV"};function d(){const{siteConfig:e}=(0,n.Z)();return l.createElement(s.Z,{title:"Events",description:e.tagline},l.createElement(r.V,{title:m.hero.title,subtitle:m.hero.subtitle,ctaList:m.hero.ctaList,className:u.verticalRhythm}),l.createElement("main",null,l.createElement("section",{className:`container ${u.projectsContainer} ${u.verticalRhythm}`},m.events.map((e=>l.createElement(c.VW,(0,i.Z)({key:e.title},e))))),l.createElement("section",null,l.createElement(o.j,{title:m.banner.title,ctaList:m.banner.ctaList}))))}},53194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i.default});var i=a(7132)}}]);
"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[531],{45104:(e,t,a)=>{a.d(t,{j:()=>s});var i=a(67294),l=a(39960);const n={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function s(e){let{title:t,ctaList:a,className:s}=e;return i.createElement("div",{className:`${n.wrapperContainer} ${s}`},i.createElement("div",{className:`container ${n.container}`},i.createElement("h1",null,t),i.createElement("div",{className:n.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return i.createElement(l.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},78914:(e,t,a)=>{a.d(t,{V:()=>s});var i=a(67294),l=a(39960);const n={hero:"hero_wgFg",container:"container_Iw7w",contentContainer:"contentContainer_Lap5",max:"max_mnXO",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function s(e){let{title:t,subtitle:a,ctaList:s,className:r}=e;return i.createElement("div",{className:`hero ${n.hero} ${r}`},i.createElement("div",{className:`${n.container}`},i.createElement("div",{className:`${n.contentContainer}`},i.createElement("h1",{className:`hero__title ${n.max}`},t),a&&i.createElement("h2",{className:`${n.subtitle} ${n.max}`},a),i.createElement("div",{className:`${n.ctaList} ${n.max}`},s&&s.map((e=>{let{title:t,href:a,elementClassName:n=""}=e;return i.createElement(l.Z,{key:t,href:a,className:`button button--primary button--lg ${n}`},t)}))))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>b,VW:()=>p});var i=a(87462),l=a(67294),n=a(60490),s=a(25935),r=a(39960),c=a(44996);const o={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",fit:"fit_iHw2",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},m=["webm","mp4","mpg","mpeg","ogv"],u=["webp","png","jpg","jpeg","gif"];function d(e){let{title:t="Case study",subtitle:a,image:i=(0,c.Z)("/img/sample-image.jpg"),body:d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:p,linkText:b="Learn more",landscapeMode:E=!1,overlay:v=!0}=e;const g=`${i.split(".").pop()}`,h=m.includes(g),f=u.includes(g),_=(0,s.ZP)(t),y=n.zD(t).text();return l.createElement("div",{className:`card ${o.card} ${E&&o.landscapeMode}`},l.createElement("div",{className:`card__image ${o.imageContainer} ${v?o.overlay:""}`},f&&l.createElement("img",{className:`${o.image} ${v?"":o.fit}`,src:i,alt:`${y}`,title:`${y}`}),h&&l.createElement("video",{className:o.image,width:"100%",height:"100%",src:i,title:`${y}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,disablePictureInPicture:!0},`${y} video`)),l.createElement("div",{className:`card__body ${o.body}`},l.createElement("h2",{className:o.title},_),l.createElement("h5",{className:o.subtitle},a),l.createElement("p",{className:o.text},d),l.createElement("strong",null,l.createElement(r.Z,{href:p,className:o.link},b))))}const p=e=>l.createElement(d,(0,i.Z)({landscapeMode:!0},e)),b=e=>l.createElement(d,(0,i.Z)({landscapeMode:!1},e))},7132:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var i=a(87462),l=a(67294),n=a(52263),s=a(55707),r=a(78914),c=a(61728),o=a(45104);const m={hero:{title:"Events",subtitle:"Morbi ornare arcu massa, a sodales augue vulputate quis. Nunc faucibus lectus augue, posuere pulvina",ctaList:[{title:"Some link",href:"/learn/overview"}]},events:[{title:"Event 1",subtitle:"Amsterdam, June 14, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 2",subtitle:"C\xe1diz, September 23, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Event 3",subtitle:"London, October 1, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie"},{title:"Event 4",subtitle:"Lisbon, October 17, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 5",subtitle:"Berlin, November 14, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."},{title:"Event 6",subtitle:"Barcelona, December 6, 2023",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium ligula nec mi facilisis malesuada."}],banner:{title:"Do you want to know more about xef.ai?",ctaList:[{title:"Read the docs",href:"/learn/overview"}]}},u={verticalRhythm:"verticalRhythm_qgCE",projectsContainer:"projectsContainer_EIUV"};function d(){const{siteConfig:e}=(0,n.Z)();return l.createElement(s.Z,{title:"Events",description:e.tagline},l.createElement(r.V,{title:m.hero.title,subtitle:m.hero.subtitle,ctaList:m.hero.ctaList,className:u.verticalRhythm}),l.createElement("main",null,l.createElement("section",{className:`container ${u.projectsContainer} ${u.verticalRhythm}`},m.events.map((e=>l.createElement(c.VW,(0,i.Z)({key:e.title},e))))),l.createElement("section",null,l.createElement(o.j,{title:m.banner.title,ctaList:m.banner.ctaList}))))}}}]);
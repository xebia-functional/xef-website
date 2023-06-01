"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[358],{99703:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(95999),l=a(32244);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&n.createElement(l.Z,{permalink:r,title:n.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},32244:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(86010),l=a(39960);function r(e){const{permalink:t,title:a,subLabel:r,isNext:s}=e;return n.createElement(l.Z,{className:(0,i.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},45104:(e,t,a)=>{a.d(t,{j:()=>r});var n=a(67294),i=a(39960);const l={wrapperContainer:"wrapperContainer_h3Ft",container:"container_maos",ctaList:"ctaList_bsH0"};function r(e){let{title:t,ctaList:a,className:r}=e;return n.createElement("div",{className:`${l.wrapperContainer} ${r}`},n.createElement("div",{className:`container ${l.container}`},n.createElement("h1",null,t),n.createElement("div",{className:l.ctaList},a&&a.map((e=>{let{title:t,href:a}=e;return n.createElement(i.Z,{key:t,href:a,className:"button button--primary"},t)})))))}},64150:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(87462),i=a(67294),l=a(39960),r=a(44996),s=a(52263),c=a(1944),o=a(35281),m=a(55707),d=a(99703),p=a(90197),g=a(78914),u=a(61728),b=a(45104);const h={hero:{title:"Blog",subtitle:"The latest news, posts, and talks from the xef community",ctaList:[{title:"Learn more about xef",href:"/learn/overview"}]},banner:{title:"Do you want to publish a new post?",ctaList:[{title:"Contact us",href:"https://github.com/xebia-functional/xef-website"}]}},E={verticalRhythm:"verticalRhythm_OY3_",linksContainer:"linksContainer_nsSm container text--center",projectsContainer:"projectsContainer_L4HT"},v=(e,t)=>e?`${e}, ${t}`:`${t}`;function _(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.Z)(),{blogDescription:n,blogTitle:l,permalink:r}=t,o="/"===r?a:l;return i.createElement(i.Fragment,null,i.createElement(c.d,{title:o,description:n}),i.createElement(p.Z,{tag:"blog_posts_list"}))}function f(e){const{metadata:t,items:a}=e,s=a.map((e=>({title:e.content.metadata.title,subtitle:v(e.content.metadata.authors[0]?.name,e.content.metadata.formattedDate),image:e.content.frontMatter.image,body:e.content.metadata.description,href:e.content.metadata.permalink})));return i.createElement(m.Z,null,i.createElement(g.V,{title:h.hero.title,subtitle:h.hero.subtitle,ctaList:h.hero.ctaList,className:E.verticalRhythm}),i.createElement("main",null,i.createElement("section",{className:`container ${E.projectsContainer} ${E.verticalRhythm}`},s.map((e=>i.createElement(u.fe,(0,n.Z)({key:e.title},e))))),i.createElement("section",{className:`container ${E.verticalRhythm}`},i.createElement(d.Z,{metadata:t})),i.createElement("section",null,i.createElement(b.j,{title:h.banner.title,ctaList:h.banner.ctaList})),i.createElement("section",{className:`margin-top--md margin-bottom--md ${E.linksContainer}`},i.createElement(l.Z,{href:"/community/blog/archive"},"Archive"),i.createElement("a",{href:(0,r.Z)("/community/blog/atom.xml")},"Atom feed"),i.createElement("a",{href:(0,r.Z)("/community/blog/rss.xml")},"RSS Feed"))))}function N(e){return i.createElement(c.FG,{className:`${o.k.wrapper.blogPages} ${o.k.page.blogListPage}`},i.createElement(_,e),i.createElement(f,e))}},78914:(e,t,a)=>{a.d(t,{V:()=>r});var n=a(67294),i=a(39960);const l={hero:"hero_wgFg",max:"max_mnXO",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function r(e){let{title:t,subtitle:a,ctaList:r,className:s}=e;return n.createElement("div",{className:`hero ${l.hero} ${s}`},n.createElement("div",{className:"container"},n.createElement("h1",{className:`hero__title ${l.max}`},t),a&&n.createElement("h2",{className:`${l.subtitle} ${l.max}`},a),n.createElement("div",{className:l.ctaList},r&&r.map((e=>{let{title:t,href:a,elementClassName:l=""}=e;return n.createElement(i.Z,{key:t,href:a,className:`button button--primary button--lg ${l}`},t)})))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>u,VW:()=>g});var n=a(87462),i=a(67294),l=a(60490),r=a(25935),s=a(39960),c=a(44996);const o={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},m=[".mpg",".mpeg",".mp4",".ogv",".webm"],d=[".gif",".jpg",".jpeg",".png"];function p(e){let{title:t="Case study",subtitle:a,image:n=(0,c.Z)("/img/sample-image.jpg"),body:p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:g,linkText:u="Learn more",landscapeMode:b=!1,overlay:h=!0}=e;const E=`.${n.split(".").pop()}`,v=m.includes(E),_=d.includes(E),f=(0,r.ZP)(t),N=l.zD(t).text();return i.createElement("div",{className:`card ${o.card} ${b&&o.landscapeMode}`},i.createElement("div",{className:`card__image ${o.imageContainer} ${h?o.overlay:""}`},_&&i.createElement("img",{className:o.image,src:n,alt:`${N}`,title:`${N}`}),v&&i.createElement("video",{className:o.image,width:"100%",height:"100%",src:n,title:`${N}`,autoPlay:!0,loop:!0,muted:!0,disablePictureInPicture:!0},`${N} video`)),i.createElement("div",{className:`card__body ${o.body}`},i.createElement("h2",{className:o.title},f),i.createElement("h5",{className:o.subtitle},a),i.createElement("p",{className:o.text},p),i.createElement("strong",{className:o.linkContainer},i.createElement(s.Z,{href:g,className:o.link},u))))}const g=e=>i.createElement(p,(0,n.Z)({landscapeMode:!0},e)),u=e=>i.createElement(p,(0,n.Z)({landscapeMode:!1},e))}}]);
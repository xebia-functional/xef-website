"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[457],{99703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(95999),r=a(32244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},32244:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(86010),r=a(39960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},88824:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}},96816:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var l=a(87462),n=a(67294),r=a(95999),s=a(88824),o=a(1944),i=a(35281),c=a(55707),m=a(99703),u=a(90197),g=a(78914),p=a(61728);const d={verticalRhythm:"verticalRhythm_lbfJ",projectsContainer:"projectsContainer_hH85"},h=(e,t)=>e?`${e}, ${t}`:`${t}`;function b(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:"{nPosts} tagged with \u201c{tagName}\u201d"},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=b(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function f(e){const{tag:t,listMetadata:a,items:r}=e,s=b(t),o={title:"View All Tags",href:t.allTagsPath},i=r.map((e=>({title:e.content.metadata.title,subtitle:h(e.content.metadata.authors[0]?.name,e.content.metadata.formattedDate),image:e.content.frontMatter.image,body:e.content.metadata.description,href:e.content.metadata.permalink})));return n.createElement(c.Z,null,n.createElement(g.V,{title:t.label,subtitle:s,ctaList:[o],className:d.verticalRhythm}),n.createElement("main",null,n.createElement("section",{className:`container ${d.projectsContainer} ${d.verticalRhythm}`},i.map((e=>n.createElement(p.fe,(0,l.Z)({key:e.title},e))))),n.createElement("section",{className:`container ${d.verticalRhythm}`},n.createElement(m.Z,{metadata:a}))))}function v(e){return n.createElement(o.FG,{className:`${i.k.wrapper.blogPages} ${i.k.page.blogTagPostListPage}`},n.createElement(E,e),n.createElement(f,e))}},78914:(e,t,a)=>{a.d(t,{V:()=>s});var l=a(67294),n=a(39960);const r={hero:"hero_wgFg",max:"max_mnXO",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function s(e){let{title:t,subtitle:a,ctaList:s,className:o}=e;return l.createElement("div",{className:`hero ${r.hero} ${o}`},l.createElement("div",{className:"container"},l.createElement("h1",{className:`hero__title ${r.max}`},t),a&&l.createElement("h2",{className:`${r.subtitle} ${r.max}`},a),l.createElement("div",{className:r.ctaList},s&&s.map((e=>{let{title:t,href:a,elementClassName:r=""}=e;return l.createElement(n.Z,{key:t,href:a,className:`button button--primary button--lg ${r}`},t)})))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>d,VW:()=>p});var l=a(87462),n=a(67294),r=a(60490),s=a(25935),o=a(39960),i=a(44996);const c={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},m=[".mpg",".mpeg",".mp4",".ogv",".webm"],u=[".gif",".jpg",".jpeg",".png"];function g(e){let{title:t="Case study",subtitle:a,image:l=(0,i.Z)("/img/sample-image.jpg"),body:g="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:p,linkText:d="Learn more",landscapeMode:h=!1,overlay:b=!0}=e;const E=`.${l.split(".").pop()}`,f=m.includes(E),v=u.includes(E),_=(0,s.ZP)(t),N=r.zD(t).text();return n.createElement("div",{className:`card ${c.card} ${h&&c.landscapeMode}`},n.createElement("div",{className:`card__image ${c.imageContainer} ${b?c.overlay:""}`},v&&n.createElement("img",{className:c.image,src:l,alt:`${N}`,title:`${N}`}),f&&n.createElement("video",{className:c.image,width:"100%",height:"100%",src:l,title:`${N}`,autoPlay:!0,loop:!0,muted:!0,disablePictureInPicture:!0},`${N} video`)),n.createElement("div",{className:`card__body ${c.body}`},n.createElement("h2",{className:c.title},_),n.createElement("h5",{className:c.subtitle},a),n.createElement("p",{className:c.text},g),n.createElement("strong",{className:c.linkContainer},n.createElement(o.Z,{href:p,className:c.link},d))))}const p=e=>n.createElement(g,(0,l.Z)({landscapeMode:!0},e)),d=e=>n.createElement(g,(0,l.Z)({landscapeMode:!1},e))}}]);
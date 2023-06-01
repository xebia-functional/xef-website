"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[237],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),s=a(16550),o=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,c]=f({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),b=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var b=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(m(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,i.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(E,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},78914:(e,t,a)=>{a.d(t,{V:()=>l});var n=a(67294),r=a(39960);const i={hero:"hero_wgFg",max:"max_mnXO",subtitle:"subtitle_oBSE",ctaList:"ctaList_HWQC"};function l(e){let{title:t,subtitle:a,ctaList:l,className:s}=e;return n.createElement("div",{className:`hero ${i.hero} ${s}`},n.createElement("div",{className:"container"},n.createElement("h1",{className:`hero__title ${i.max}`},t),a&&n.createElement("h2",{className:`${i.subtitle} ${i.max}`},a),n.createElement("div",{className:i.ctaList},l&&l.map((e=>{let{title:t,href:a,elementClassName:i=""}=e;return n.createElement(r.Z,{key:t,href:a,className:`button button--primary button--lg ${i}`},t)})))))}},61728:(e,t,a)=>{a.d(t,{fe:()=>f,VW:()=>p});var n=a(87462),r=a(67294),i=a(60490),l=a(25935),s=a(39960),o=a(44996);const c={card:"card_kS7d",overlay:"overlay_AVdA",landscapeMode:"landscapeMode_EDP6",body:"body_EfH_",imageContainer:"imageContainer_J6oq",image:"image_PLQf",title:"title_oipf",subtitle:"subtitle_T9Mx",text:"text_YbZW",link:"link_nJqJ"},u=[".mpg",".mpeg",".mp4",".ogv",".webm"],m=[".gif",".jpg",".jpeg",".png"];function d(e){let{title:t="Case study",subtitle:a,image:n=(0,o.Z)("/img/sample-image.jpg"),body:d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie",href:p,linkText:f="Learn more",landscapeMode:g=!1,overlay:b=!0}=e;const h=`.${n.split(".").pop()}`,v=u.includes(h),E=m.includes(h),y=(0,l.ZP)(t),C=i.zD(t).text();return r.createElement("div",{className:`card ${c.card} ${g&&c.landscapeMode}`},r.createElement("div",{className:`card__image ${c.imageContainer} ${b?c.overlay:""}`},E&&r.createElement("img",{className:c.image,src:n,alt:`${C}`,title:`${C}`}),v&&r.createElement("video",{className:c.image,width:"100%",height:"100%",src:n,title:`${C}`,autoPlay:!0,loop:!0,muted:!0,disablePictureInPicture:!0},`${C} video`)),r.createElement("div",{className:`card__body ${c.body}`},r.createElement("h2",{className:c.title},y),r.createElement("h5",{className:c.subtitle},a),r.createElement("p",{className:c.text},d),r.createElement("strong",{className:c.linkContainer},r.createElement(s.Z,{href:p,className:c.link},f))))}const p=e=>r.createElement(d,(0,n.Z)({landscapeMode:!0},e)),f=e=>r.createElement(d,(0,n.Z)({landscapeMode:!1},e))},83666:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(87462),r=a(67294),i=a(25935),l=a(52263),s=a(55707),o=a(90814),c=a(74866),u=a(85162),m=a(78914),d=a(61728);const p={hero:{title:"<span class='emphasize'>&lt;Modern AI&gt;</span> made easy.",ctaList:[{title:"What is xef",href:"/learn/overview",elementClassName:"button--special"},{title:"Quickstart",href:"/learn/quickstart",elementClassName:"button--special button--outline"}]},features:[{title:"Discover <span class='emphasize'>xef.ai</span>",href:"/learn/overview",image:"/img/ilus-1.png",body:"xef.ai offers a convenient interface to modern AI techniques, including Large Language Models, so your team can quickly move from ideas to proofs of concept to integrating AI in your business processes."},{title:"Try <span class='emphasize'>xef.ai</span>",href:"/learn/quickstart",image:"/img/xef-logo-animation-1sec-loop-720p.webm",linkText:"Get started",body:"Summarize the most important events in the customer's account. Generate queries to the database from a natural language description. Identify the important parts of a PDF invoice. The possibilities are endless."}]},f={verticalRhythm:"verticalRhythm_yh8W",textContainer:"textContainer_n5O4",featuresContainer:"featuresContainer_hwgM container",quotesContainer:"quotesContainer__Qcv container",projectsContainer:"projectsContainer_IRh5",navigationContainer:"navigationContainer_Aik1",usageWrapperContainer:"usageWrapperContainer_uUHj",usageContainer:"usageContainer_sNYk",codeWrapperContainer:"codeWrapperContainer_jkIY",codeContainer:"codeContainer_WsEn"};function g(){const{siteConfig:e}=(0,l.Z)();return r.createElement(s.Z,{description:e.tagline},r.createElement(m.V,{title:(0,i.ZP)(p.hero.title),ctaList:p.hero.ctaList,className:"margin-bottom--xl"}),r.createElement("main",{id:"discover"},r.createElement("section",{className:`${f.featuresContainer} ${f.verticalRhythm}`},p.features.map((e=>r.createElement(d.VW,(0,n.Z)({key:e.title},e,{overlay:!1}))))),r.createElement("section",{className:`${f.codeWrapperContainer}`},r.createElement("div",{className:`container ${f.codeContainer}`},r.createElement("h1",{className:"margin-bottom--lg"},"Discover its potential"),r.createElement(c.Z,null,r.createElement(u.Z,{value:"scala",label:"Scala"},r.createElement(o.Z,{language:"scala",showLineNumbers:!0},'final case class Population(size: Int, description: String) derives ScalaSerialDescriptor, Decoder\n\nfinal case class Image(description: String, url: String) derives ScalaSerialDescriptor, Decoder\n\n@main def runPopulation: Unit =\n  ai {\n    val cadiz: Population = prompt("Population of C\xe1diz, Spain.")\n    val seattle: Population = prompt("Population of Seattle, WA.")\n    println(s"The population of C\xe1diz is ${cadiz.size} and the population of Seattle is ${seattle.size}")\n    val img: Image = image("A hybrid city of C\xe1diz, Spain and Seattle, US.")\n    println(s"Image ${img.description} available at ${img.url}")\n  }')),r.createElement(u.Z,{value:"kotlin",label:"Kotlin"},r.createElement(o.Z,{language:"kotlin",showLineNumbers:!0},'@Serializable\ndata class Population(val size: Int, val description: String)\n\n@Serializable\ndata class Image(val description: String, val url: String)\n\nsuspend fun main() =\n    ai {\n        val cadiz: Population = prompt("Population of C\xe1diz, Spain.")\n        val seattle: Population = prompt("Population of Seattle, WA.")\n        println("The population of C\xe1diz is ${cadiz.size} and the population of Seattle is ${seattle.size}")\n        val img: Image = image("A hybrid city of C\xe1diz, Spain and Seattle, US.")\n        println("Image ${img.description} available at ${img.url}")\n    }.getOrThrow()\n              ')))))))}}}]);
"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},99810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={id:"kotlin",title:"Kotlin",sidebar_position:1,description:"Get xef.ai up and running in Kotlin",sidebar_custom_props:{icon:"kotlin-icon.svg"}},s='<decorated-text icon="kotlin-icon.svg" title="Quickstart - Kotlin" />',u={unversionedId:"learn/quickstart/kotlin",id:"learn/quickstart/kotlin",title:"Kotlin",description:"Get xef.ai up and running in Kotlin",source:"@site/content/docs/learn/quickstart/kotlin.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/kotlin",permalink:"/learn/quickstart/kotlin",draft:!1,editUrl:"https://github.com/xebia-functional/xef-website/edit/main/content/docs/learn/quickstart/kotlin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"kotlin",title:"Kotlin",sidebar_position:1,description:"Get xef.ai up and running in Kotlin",sidebar_custom_props:{icon:"kotlin-icon.svg"}},sidebar:"learnSidebar",previous:{title:"Quickstart",permalink:"/learn/quickstart/"},next:{title:"Scala",permalink:"/learn/quickstart/scala"}},c={},p=[{value:"Getting the libraries",id:"getting-the-libraries",level:2},{value:"Your first prompt",id:"your-first-prompt",level:2},{value:"Structure",id:"structure",level:2},{value:"Prompt templates",id:"prompt-templates",level:2},{value:"Context",id:"context",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decorated-text-iconkotlin-iconsvg-titlequickstart---kotlin-"},(0,r.kt)("decorated-text",{icon:"kotlin-icon.svg",title:"Quickstart - Kotlin"})),(0,r.kt)("h2",{id:"getting-the-libraries"},"Getting the libraries"),(0,r.kt)("p",null,"Libraries are published in Maven Central. You may need to  add that repository explicitly\nin your build, if you haven't done it before. Then add the library in the usual way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'repositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation("com.xebia:xef-core:<version>")\n}\n')),(0,r.kt)("p",null,"We publish all libraries at once under the same version, so\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sec:sharing-catalogs"},"version catalogs"),"\ncould be useful."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," block connects to ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"OpenAI"),".\nTo use their services you should provide the corresponding API key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN"),"\nenvironment variable, and have enough credits."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"gradle",label:"Gradle",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"env OPENAI_TOKEN=<your-token> <gradle-command>\n"))),(0,r.kt)(i.Z,{value:"intellij",label:"IntelliJ",mdxType:"TabItem"},(0,r.kt)("p",null,"Set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN=xxx")," in the properties."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This library may transmit source code and potentially user input data to third-party services as part of its functionality.\nDevelopers integrating this library into their applications should be aware of this behavior and take necessary precautions to ensure that sensitive data is not inadvertently transmitted.\nRead our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xebia-functional/xef#%EF%B8%8F-data-transmission-disclosure"},(0,r.kt)("em",{parentName:"a"},"Data Transmission Disclosure"))," for further information.")),(0,r.kt)("h2",{id:"your-first-prompt"},"Your first prompt"),(0,r.kt)("p",null,"After adding the library to your project\nyou get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," function, which is your port of entry to the modern AI world.\nInside of it, you can ",(0,r.kt)("em",{parentName:"p"},"prompt")," for information, which means posing the question to an LLM\n(Large Language Model). The easiest way is to just get the information back as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.xebia.functional.xef.auto.*\n\nfun books(topic: String): List<String> = ai {\n    promptMessage("Give me a selection of books about $topic")\n}.getOrThrow()\n')),(0,r.kt)("p",null,"In the example above we ",(0,r.kt)("em",{parentName:"p"},"execute")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," block with ",(0,r.kt)("inlineCode",{parentName:"p"},"getOrThrow"),", that throws an exception\nwhenever a problem is found (for example, if your API key is not correct). If you want more\ncontrol, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getOrElse")," (to which you provide a custom handler for errors), or\n",(0,r.kt)("inlineCode",{parentName:"p"},"toEither")," (which returns the result using\n",(0,r.kt)("a",{parentName:"p",href:"https://arrow-kt.io/learn/typed-errors/either-and-ior/"},(0,r.kt)("inlineCode",{parentName:"a"},"Either")," from Arrow"),")."),(0,r.kt)("p",null,"In the next examples we'll write functions that rely on ",(0,r.kt)("inlineCode",{parentName:"p"},"ai"),"'s DSL functionality,\nbut without actually extracting the values yet using ",(0,r.kt)("inlineCode",{parentName:"p"},"getOrThrow")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"getOrElse"),".\nWe'll eventually call this functions from an ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," block as we've shown above, and\nthis allows us to build larger pipelines, and only extract the final result at the end."),(0,r.kt)("p",null,"This can be done by either writing an extension function on ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope"),",\nor by using the form ",(0,r.kt)("inlineCode",{parentName:"p"},"AI<Something>"),". Let's compare the two:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.xebia.functional.xef.auto.*\n\nsuspend fun AIScope.books(topic: String): String =\n  promptMessage("Give me a selection of books about $topic")\n\nfun books2(topic: String): AI<String> =\n  promptMessage("Give me a selection of books about $topic")\n')),(0,r.kt)("p",null,"Both functions are equivalent, but the first is considered most idiomatic, and can be compared to\n",(0,r.kt)("inlineCode",{parentName:"p"},"CoroutineScope")," from KotlinX Coroutines which gives access to concurrency primitives like ",(0,r.kt)("inlineCode",{parentName:"p"},"launch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),".\nThe second form is useful when you want to create an extension function on something else than ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope"),",\nand you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," to extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," value from ",(0,r.kt)("inlineCode",{parentName:"p"},"AI<String>")," within an ",(0,r.kt)("inlineCode",{parentName:"p"},"ai")," block or an ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope"),"."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," function above may be hard to parse back from the\nstrings we obtain. Fortunately, you can also ask xef.ai to give you back the information\nusing a ",(0,r.kt)("em",{parentName:"p"},"custom type"),". The library takes care of instructing the LLM on building such\na structure, and deserialize the result back for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.xebia.functional.xef.auto.*\n\n@Serializable\ndata class Book(val title: String, val author: String)\n\nsuspend fun AIScope.books(topic: String): AI<List<Book>> =\n    prompt("Give me a selection of books about $topic")\n')),(0,r.kt)("p",null,"xef.ai reuses ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/serialization.html"},"Kotlin's common serialization"),",\nwhich requires adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," plug-in to your build, and mark each\nclass as ",(0,r.kt)("inlineCode",{parentName:"p"},"@Serializable"),". The LLM is usually able to detect which kind of information should\ngo on each field based on its name (like ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," above)."),(0,r.kt)("h2",{id:"prompt-templates"},"Prompt templates"),(0,r.kt)("p",null,"The function ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," uses naive string interpolation to make the topic part of the question\nto the LLM. As the prompt gets bigger, though, you may want to break it into smaller parts.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPrompt")," function is the tool here: inside of it you can include any string or\nsmaller prompt by prefixing it with ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),"\n(this is known as the ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/type-safe-builders.html"},"builder pattern"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.xebia.functional.xef.auto.*\n\n@Serializable\ndata class Book(val title: String, val author: String)\n\nsuspend fun AIScope.books(topic: String): List<Book> {\n  val prompt = buildPrompt {\n    + "Give me a selection of books about the following topic:"\n    + topic\n  }\n  return prompt(prompt)\n}\n')),(0,r.kt)("p",null,"In a larger AI application it's common to end up with quite some template for prompts.\nOnline material like ",(0,r.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"this course"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/intro"},"this tutorial")," explain some of the most important patterns,\nsome of them readily available in xef.ai."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"LLMs have knowledge about a broad variety of topics. But by construction they are not able\nto respond to questions about information not available in their training set. However, you\noften want to supplement the LLM with more data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transient information referring to the current moment, like the current weather, or\nthe trends in the stock market in the past 10 days."),(0,r.kt)("li",{parentName:"ul"},"Non-public information, for example for summarizing a piece of text you're creating\nwithin you organization.")),(0,r.kt)("p",null,"These additional pieces of information are called the ",(0,r.kt)("em",{parentName:"p"},"context")," in xef.ai, and are attached\nto every question to the LLM. Although you can add arbitrary strings to the context at any\npoint, the most common mode of usage is using an ",(0,r.kt)("em",{parentName:"p"},"agent")," to consult an external service,\nand make its response part of the context. One such agent is ",(0,r.kt)("inlineCode",{parentName:"p"},"search"),", which uses a web\nsearch service to enrich that context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.xebia.functional.xef.auto.*\n\nsuspend fun AIScope.whatToWear(place: String): List<String> =\n  context(search("Weather in $place")) {\n    promptMessage("Knowing this forecast, what clothes do you recommend I should wear?")\n  }\n')),(0,r.kt)("admonition",{title:"Better vector stores",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The underlying mechanism of the context is a ",(0,r.kt)("em",{parentName:"p"},"vector store"),", a data structure which\nsaves a set of strings, and is able to find those similar to another given one.\nBy default xef.ai uses an ",(0,r.kt)("em",{parentName:"p"},"in-memory")," vector store, since it provides maximum\ncompatibility across platforms. However, if you foresee your context growing above\nthe hundreds of elements, you may consider switching to another alternative, like\nLucene or PostgreSQL."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"import com.xebia.functional.xef.auto.*\nimport com.xebia.functional.xef.vectorstores\n\nsuspend fun AIScope.books(topic: String): List<Book> =\n  withContextStore(InMemoryLuceneBuilder(LUCENE_PATH)) { /* do stuff */ }\n"))))}h.isMDXComponent=!0}}]);
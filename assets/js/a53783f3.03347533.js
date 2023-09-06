"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},80668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={id:"scala",title:"Scala",sidebar_position:2,description:"Get xef.ai up and running in Scala",sidebar_custom_props:{icon:"scala-icon.svg"}},s='<decorated-text icon="scala-icon.svg" title="Quickstart - Scala" />',c={unversionedId:"learn/quickstart/scala",id:"learn/quickstart/scala",title:"Scala",description:"Get xef.ai up and running in Scala",source:"@site/content/docs/learn/quickstart/scala.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/scala",permalink:"/learn/quickstart/scala",draft:!1,editUrl:"https://github.com/xebia-functional/xef-website/edit/main/content/docs/learn/quickstart/scala.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"scala",title:"Scala",sidebar_position:2,description:"Get xef.ai up and running in Scala",sidebar_custom_props:{icon:"scala-icon.svg"}},sidebar:"learnSidebar",previous:{title:"Kotlin",permalink:"/learn/quickstart/kotlin"},next:{title:"Java",permalink:"/learn/quickstart/java"}},u={},p=[{value:"Getting the libraries",id:"getting-the-libraries",level:2},{value:"Your first prompt",id:"your-first-prompt",level:2},{value:"Structure",id:"structure",level:2},{value:"@Description annotations",id:"description-annotations",level:2},{value:"Context",id:"context",level:2}],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decorated-text-iconscala-iconsvg-titlequickstart---scala-"},(0,r.kt)("decorated-text",{icon:"scala-icon.svg",title:"Quickstart - Scala"})),(0,r.kt)("h2",{id:"getting-the-libraries"},"Getting the libraries"),(0,r.kt)("p",null,"Just add the library to your SBT build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.xebia" %% "xef-scala" % "<version>"\n')),(0,r.kt)("admonition",{title:"Version compatibility",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"xef-scala")," is currently only available for Scala 3.")),(0,r.kt)("p",null,"The Scala module depends on project ",(0,r.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/loom/"},"Loom"),",\nso you will need at least Java 19 to use the library. Furthermore, you need to pass\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable-preview")," flag."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sbt",label:"SBT",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sbt -J--enable-preview <your-command>\n"))),(0,r.kt)(i.Z,{value:"intellij",label:"IntelliJ",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",null,"Set the Java version to at least 19."),(0,r.kt)("li",null,"Set VM options to ",(0,r.kt)("code",null,"--enable-preview"),".")))),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"conversation")," block connects to ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"OpenAI"),".\nTo use their services you should provide the corresponding API key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN"),"\nenvironment variable, and have enough credits."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sbt",label:"SBT",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"env OPENAI_TOKEN=<your-token> <sbt-command>\n"))),(0,r.kt)(i.Z,{value:"intellij",label:"IntelliJ",mdxType:"TabItem"},(0,r.kt)("p",null,"Set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN=xxx")," in the properties."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This library may transmit source code and potentially user input data to third-party services as part of its functionality.\nDevelopers integrating this library into their applications should be aware of this behavior and take necessary precautions to ensure that sensitive data is not inadvertently transmitted.\nRead our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xebia-functional/xef#%EF%B8%8F-data-transmission-disclosure"},(0,r.kt)("em",{parentName:"a"},"Data Transmission Disclosure"))," for further information.")),(0,r.kt)("h2",{id:"your-first-prompt"},"Your first prompt"),(0,r.kt)("p",null,"After adding the library to your project,\nyou get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"conversation")," function, which is your gate to the modern AI world.\nInside of it, you can ",(0,r.kt)("em",{parentName:"p"},"prompt")," for information, which means posing the question to an LLM\n(Large Language Model). The easiest way is to just get the information back as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.xebia.functional.xef.scala.auto.*\n\n@main def runBook: Unit = conversation {\n  val topic: String = "functional programming"\n  val result = promptMessage(s"Give me a selection of books about $topic")\n  println(result)\n}\n')),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," function above may be hard to parse back from the\nstrings we obtain. Fortunately, you can also ask xef.ai to give you back the information\nusing a ",(0,r.kt)("em",{parentName:"p"},"custom type"),". The library takes care of instructing the LLM on building such\na structure, and deserialize the result back for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.xebia.functional.xef.scala.conversation.*\nimport io.circe.Decoder\nimport com.xebia.functional.xef.prompt.Prompt\n\ncase class Book(name: String, author: String, summary: String) derives SerialDescriptor, Decoder\n\ndef summarizeBook(title: String, author: String)(using conversation: ScalaConversation): Book =\n  prompt(Prompt(s"$title by $author summary."))\n\n@main def runBook: Unit =\n  conversation {\n    val toKillAMockingBird = summarizeBook("To Kill a Mockingbird", "Harper Lee")\n    println(s"${toKillAMockingBird.name} by ${toKillAMockingBird.author} summary:\\n ${toKillAMockingBird.summary}")\n  }\n')),(0,r.kt)("p",null,"xef.ai for Scala uses ",(0,r.kt)("inlineCode",{parentName:"p"},"xef-core"),", which it's based on Kotlin. Hence, the core\nreuses ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/serialization.html"},"Kotlin's common serialization"),", and\nScala uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/circe/circe"},"circe")," to derive the required serializable instance.\nThe LLM is usually able to detect which kind of information should\ngo on each field based on its name (like ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," above)."),(0,r.kt)("p",null,"For those cases where the LLM is not able to infer the type, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Description")," annotation:"),(0,r.kt)("h2",{id:"description-annotations"},"@Description annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.xebia.functional.xef.scala.conversation.Description\nimport com.xebia.functional.xef.scala.conversation.*\nimport io.circe.Decoder\nimport com.xebia.functional.xef.prompt.Prompt\n\n@Description("A book")\ncase class Book(\n                 @Description("the name of the book") name: String,\n                 @Description("the author of the book") author: String,\n                 @Description("A 50 word paragraph with a summary of this book") summary: String\n               ) derives SerialDescriptor, Decoder\n\ndef summarizeBook(title: String, author: String)(using conversation: ScalaConversation): Book =\n  prompt(Prompt(s"$title by $author summary."))\n\n@main def runBook: Unit =\n  conversation {\n    val toKillAMockingBird = summarizeBook("To Kill a Mockingbird", "Harper Lee")\n    println(s"${toKillAMockingBird.name} by ${toKillAMockingBird.author} summary:\\n ${toKillAMockingBird.summary}")\n  }\n')),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"LLMs have knowledge about a broad variety of topics. But by construction they are not able\nto respond to questions about information not available in their training set. However, you\noften want to supplement the LLM with more data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transient information referring to the current moment, like the current weather, or\nthe trends in the stock market in the past 10 days."),(0,r.kt)("li",{parentName:"ul"},"Non-public information, for example for summarizing a piece of text you're creating\nwithin you organization.")),(0,r.kt)("p",null,"These additional pieces of information are called the ",(0,r.kt)("em",{parentName:"p"},"context")," in xef.ai, and are attached\nto every question to the LLM. Although you can add arbitrary strings to the context at any\npoint, the most common mode of usage is using an ",(0,r.kt)("em",{parentName:"p"},"agent")," to consult an external service,\nand make its response part of the context. One such agent is ",(0,r.kt)("inlineCode",{parentName:"p"},"search"),", which uses a web\nsearch service to enrich that context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import com.xebia.functional.xef.reasoning.serpapi.Search\nimport com.xebia.functional.xef.scala.conversation.*\nimport com.xebia.functional.xef.conversation.llm.openai.OpenAI\nimport io.circe.Decoder\nimport com.xebia.functional.xef.prompt.Prompt\n\nprivate final case class MealPlanRecipe(name: String, ingredients: List[String]) derives SerialDescriptor, Decoder\n\nprivate final case class MealPlan(name: String, recipes: List[MealPlanRecipe]) derives SerialDescriptor, Decoder\n\n@main def runMealPlan: Unit =\n  conversation {\n    val search = Search(OpenAI.FromEnvironment.DEFAULT_CHAT, summon[ScalaConversation], 3)\n    addContext(search.search("gall bladder stones meals").get())\n    val mealPlan = prompt[MealPlan](Prompt("Meal plan for the week for a person with gall bladder stones that includes 5 recipes."))\n    println(mealPlan)\n  }\n')),(0,r.kt)("admonition",{title:"Better vector stores",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The underlying mechanism of the context is a ",(0,r.kt)("em",{parentName:"p"},"vector store"),", a data structure which\nsaves a set of strings, and is able to find those similar to another given one.\nBy default, xef.ai uses an ",(0,r.kt)("em",{parentName:"p"},"in-memory")," vector store, since it provides maximum\ncompatibility across platforms. However, if you foresee your context growing above\nthe hundreds of elements, you may consider switching to another alternative, like\nLucene or PostgreSQL.")))}f.isMDXComponent=!0}}]);
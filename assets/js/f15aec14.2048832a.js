"use strict";(self.webpackChunkxef_website=self.webpackChunkxef_website||[]).push([[289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(p(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},10111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={id:"java",title:"Java",sidebar_position:3,description:"Get xef.ai up and running in Java",sidebar_custom_props:{icon:"java-icon.svg"}},c='<decorated-text icon="java-icon.svg" title="Quickstart - Java" />',s={unversionedId:"learn/quickstart/java",id:"learn/quickstart/java",title:"Java",description:"Get xef.ai up and running in Java",source:"@site/content/docs/learn/quickstart/java.md",sourceDirName:"learn/quickstart",slug:"/learn/quickstart/java",permalink:"/learn/quickstart/java",draft:!1,editUrl:"https://github.com/xebia-functional/xef-website/edit/main/content/docs/learn/quickstart/java.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"java",title:"Java",sidebar_position:3,description:"Get xef.ai up and running in Java",sidebar_custom_props:{icon:"java-icon.svg"}},sidebar:"learnSidebar",previous:{title:"Scala",permalink:"/learn/quickstart/scala"},next:{title:"More examples",permalink:"/learn/examples"}},u={},p=[{value:"Getting the libraries",id:"getting-the-libraries",level:2},{value:"Your first prompt",id:"your-first-prompt",level:2},{value:"Structure",id:"structure",level:2},{value:"Context",id:"context",level:2},{value:"Project Loom",id:"project-loom",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decorated-text-iconjava-iconsvg-titlequickstart---java-"},(0,r.kt)("decorated-text",{icon:"java-icon.svg",title:"Quickstart - Java"})),(0,r.kt)("h2",{id:"getting-the-libraries"},"Getting the libraries"),(0,r.kt)("p",null,"Libraries are published in Maven Central. You may need to  add that repository explicitly\nin your build, if you haven't done it before. Then add the library in the usual way."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"maven",label:"Maven",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.xebia</groupId>\n    <artifactId>xef-java</artifactId>\n    <version>0.0.2</version>\n    <type>pom</type>\n</dependency>\n"))),(0,r.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'repositories {\n  mavenCentral()\n}\n\ndependencies {\n  implementation("com.xebia:xef-java:<version>")\n}\n')))),(0,r.kt)("p",null,"We publish all libraries at once under the same version, so\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/platforms.html#sec:sharing-catalogs"},"version catalogs"),"\ncould be useful."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," block connects to ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/"},"OpenAI"),".\nTo use their services you should provide the corresponding API key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN"),"\nenvironment variable, and have enough credits."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"intellij",label:"IntelliJ",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"OPENAI_TOKEN=xxx")," in the properties.")),(0,r.kt)(i.Z,{value:"gradle",label:"Gradle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"env OPENAI_TOKEN=<your-token> <gradle-command>\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This library may transmit source code and potentially user input data to third-party services as part of its functionality.\nDevelopers integrating this library into their applications should be aware of this behavior and take necessary precautions to ensure that sensitive data is not inadvertently transmitted.\nRead our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xebia-functional/xef#%EF%B8%8F-data-transmission-disclosure"},(0,r.kt)("em",{parentName:"a"},"Data Transmission Disclosure"))," for further information.")),(0,r.kt)("h2",{id:"your-first-prompt"},"Your first prompt"),(0,r.kt)("p",null,"After adding the library to your project\nyou get access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," class, which is your port of entry to the modern AI world.\nInside of it, you can ",(0,r.kt)("em",{parentName:"p"},"prompt")," for information, which means posing the question to an LLM\n(Large Language Model). The easiest way is to just get the information back as a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.example;\n\nimport com.xebia.functional.xef.java.auto.AIScope;\n\nimport java.util.concurrent.ExecutionException;\n\npublic class Example {\n  public static void main(String[] args) throws ExecutionException, InterruptedException {\n    try (AIScope scope = new AIScope()) {\n      String topic = "artificial intelligence";\n      scope.promptMessage("Give me a selection of books about " + topic)\n              .thenAccept(System.out::println)\n              .get();\n    }\n  }\n}\n')),(0,r.kt)("p",null,"In the example above we create an ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"try-with-resources")," syntax,\nwhich ensures that the scope is closed at the end of the block.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," gives us access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"promptMessage")," & co functions, which allow us to interact with the LLM."),(0,r.kt)("p",null,"All the functions of ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," are returned as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Future")," for maximum backward compatibility until JDK8,\nbut you can inject ",(0,r.kt)("inlineCode",{parentName:"p"},"Executors.newVirtualThreadPerTaskExecutor()")," to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Future"),"s work on virtual threads."),(0,r.kt)("p",null,"Remember that exceptions in ",(0,r.kt)("inlineCode",{parentName:"p"},"Future"),"are wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutionException"),",\nso to inspect the actual exception you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"getCause()")," on it.\n",(0,r.kt)("em",{parentName:"p"},"Structured Concurrency")," is implemented under the hood by Kotlin's ",(0,r.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),",\nand all futures are cancelled when the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," is closed and ",(0,r.kt)("inlineCode",{parentName:"p"},"Future#get")," will throw ",(0,r.kt)("inlineCode",{parentName:"p"},"CancellationException"),"."),(0,r.kt)("p",null,"In the next examples we'll write functions that rely on ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope"),"'s DSL functionality"),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The output from the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," function above may be hard to parse back from the\nstrings we obtain. Fortunately, you can also ask xef.ai to give you back the information\nusing a ",(0,r.kt)("em",{parentName:"p"},"custom type"),". The library takes care of instructing the LLM on building such\na structure, and deserialize the result back for you."),(0,r.kt)("p",null,"We can thus define a ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," class that describes the desired response we want to receive from the LLM.\nRelying on ",(0,r.kt)("a",{parentName:"p",href:"https://beanvalidation.org"},"Jakarta validation")," we can also specify which fields are mandatory using ",(0,r.kt)("inlineCode",{parentName:"p"},"NotNull"),",\nor include additional constraints in the ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org"},"Json Schema"),"."),(0,r.kt)("p",null,"xef.ai reuses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson-databind"},"Jackson"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/victools/jsonschema-generator"},"JsonSchema generator")," to parse and generate the Json Schema V7 for you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package my.example;\n\nimport jakarta.validation.constraints.NotNull;\n\npublic class Book {\n  @NotNull public String title;\n  @NotNull public String author;\n  @NotNull public int year;\n  @NotNull public String genre;\n\n  @Override\n  public String toString() {\n    return \"Book{\" +\n            \"title='\" + title + '\\'' +\n            \", author='\" + author + '\\'' +\n            \", year=\" + year +\n            \", genre='\" + genre + '\\'' +\n            '}';\n  }\n}\n")),(0,r.kt)("p",null,"Using the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),", we can rewrite our previous example as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.example;\n\nimport com.xebia.functional.xef.java.auto.AIScope;\nimport jakarta.validation.constraints.NotNull;\n\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class Example {\n\n    private final AIScope scope;\n\n    public Example(AIScope scope) {\n        this.scope = scope;\n    }\n    \n    public CompletableFuture<Book> bookSelection(String topic) {\n        return scope.prompt("Give me a selection of books about " + topic, Example.Book.class);\n    }\n\n    public static void main(String[] args) throws ExecutionException, InterruptedException {\n        try (AIScope scope = new AIScope()) {\n            Example example = new Example(scope);\n            example.bookSelection("artificial intelligence")\n                    .thenAccept(System.out::println)\n                    .get();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Here we also show how you can easily capture the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," in a class,\nand build and compose additional functionality on top.\nIf you're using any dependency injection framework, you can also construct ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," and inject it as usual.\nMake sure that the dependency injection framework properly closes the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," when the application shuts down."),(0,r.kt)("p",null,"In a larger AI application it's common to end up with quite some template for prompts.\nOnline material like ",(0,r.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/"},"this course"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/intro"},"this tutorial")," explain some of the most important patterns,\nsome of them readily available in xef.ai."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"LLMs have knowledge about a broad variety of topics. But by construction they are not able\nto respond to questions about information not available in their training set. However, you\noften want to supplement the LLM with more data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transient information referring to the current moment, like the current weather, or\nthe trends in the stock market in the past 10 days."),(0,r.kt)("li",{parentName:"ul"},"Non-public information, for example for summarizing a piece of text you're creating\nwithin you organization.")),(0,r.kt)("p",null,"These additional pieces of information are called the ",(0,r.kt)("em",{parentName:"p"},"context")," in xef.ai, and are attached\nto every question to the LLM. Although you can add arbitrary strings to the context at any\npoint, the most common mode of usage is using an ",(0,r.kt)("em",{parentName:"p"},"agent")," to consult an external service,\nand make its response part of the context. One such agent is ",(0,r.kt)("inlineCode",{parentName:"p"},"search"),", which uses a web\nsearch service to enrich that context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.example;\n\nimport java.util.concurrent.CompletableFuture;\n\npublic class Weather {\n    private final AIScope scope;\n\n    public Weather(AIScope scope) {\n        this.scope = scope;\n    }\n\n    public CompletableFuture<String> recommendation() {\n        return scope.contextScope(scope.search("Weather in $place"), () ->\n          scope.promptMessage("Knowing this forecast, what clothes do you recommend I should wear?")\n        );\n    }\n}\n')),(0,r.kt)("admonition",{title:"Better vector stores",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The underlying mechanism of the context is a ",(0,r.kt)("em",{parentName:"p"},"vector store"),", a data structure which\nsaves a set of strings, and is able to find those similar to another given one.\nBy default xef.ai uses an ",(0,r.kt)("em",{parentName:"p"},"in-memory")," vector store, since it provides maximum\ncompatibility across platforms. However, if you foresee your context growing above\nthe hundreds of elements, you may consider switching to another alternative, like\nLucene or PostgreSQL."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package my.example;\n\nimport com.xebia.functional.xef.vectorstores.LuceneKt;\n\nimport java.nio.file.Path;\nimport java.util.concurrent.CompletableFuture;\n\npublic class VectorStore {\n\n    private final AIScope scope;\n\n    public VectorStore(AIScope scope) {\n        this.scope = scope;\n    }\n\n    public void example() {\n        Path LUCENE_PATH = Path.of("lucene");\n        scope.contextScope(\n            LuceneKt.InMemoryLuceneBuilder(LUCENE_PATH),\n            () -> CompletableFuture.completedFuture("do stuff")\n        );\n    }\n\n}\n'))),(0,r.kt)("h2",{id:"project-loom"},"Project Loom"),(0,r.kt)("p",null,"As mentioned above, xef.ai is designed to work with Project Loom.\nAll the functions of ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," are returned as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Future")," for maximum backward compatibility until JDK8,\nbut using Loom we can just use ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," to wait for the result. In order to use ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualThreads"),", and benefit from\nnon-blocking behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualThread")," all you need to do is initialise the ",(0,r.kt)("inlineCode",{parentName:"p"},"AIScope")," with a Loom compatible ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecutorService"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.xebia.functional.xef.java.auto;\n\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Executors;\n\npublic class Loom {\n\n  private static class Fact {\n    public String topic;\n    public String content;\n\n    @Override\n    public String toString() {\n      return "FactClass{" +\n              "topic=\'" + topic + \'\\\'\' +\n              ", content=\'" + content + \'\\\'\' +\n              \'}\';\n    }\n  }\n\n  public static void main(String[] args) throws ExecutionException, InterruptedException {\n    try (AIScope scope = new AIScope(Executors.newVirtualThreadPerTaskExecutor())) {\n      var fact1 = scope.prompt("A fascinating fact about you", Fact.class).get();\n      var fact2 = scope.prompt("An interesting fact about me", Fact.class).get();\n      var result = String.format("""\n                      |Fact 1: %s.\n                      |Fact 2: %s\n                      |Make your next move:""",\n              fact1,\n              fact2\n      );\n      System.out.println(result);\n    }\n  }\n}\n')))}h.isMDXComponent=!0}}]);
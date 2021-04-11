(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(138)),i={id:"delay-render",title:"delayRender() and continueRender()",sidebar_label:"delayRender()"},l={unversionedId:"delay-render",id:"delay-render",isDocsHomePage:!1,title:"delayRender() and continueRender()",description:"By calling delayRender, you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete.",source:"@site/docs/delay-render.md",slug:"/delay-render",permalink:"/docs/delay-render",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/delay-render.md",version:"current",sidebar_label:"delayRender()",sidebar:"someSidebar",previous:{title:"continueRender()",permalink:"/docs/continue-render"},next:{title:"interpolate()",permalink:"/docs/interpolate"}},c=[{value:"Useful to know",id:"useful-to-know",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],d={toc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By calling ",Object(o.b)("inlineCode",{parentName:"p"},"delayRender"),", you are signaling that a frame should not be immediately rendered and instead should wait on an asynchronous task to complete."),Object(o.b)("p",null,"This method is useful if you for example want to call an API to fetch data before you before you render."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"delayRender")," returns an identifier. Once you have fetched data or finished the asynchronous task, you should call ",Object(o.b)("inlineCode",{parentName:"p"},"continueRender(identifier)")," to let Remotion know that you are now ready to render."),Object(o.b)("h2",{id:"useful-to-know"},"Useful to know"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You need to call ",Object(o.b)("inlineCode",{parentName:"p"},"continueRender()")," within 30 seconds of page load. This is the default timeout of puppeteer and it will throw if you miss to call ",Object(o.b)("inlineCode",{parentName:"p"},"continueRender()"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For every frame that is rendered, the whole page is reloaded, so the whole lifecycle of ",Object(o.b)("inlineCode",{parentName:"p"},"delayRender")," and ",Object(o.b)("inlineCode",{parentName:"p"},"continueRender")," happens on every frame. If you are doing an API request, you can speed up the render and avoid rate limits by caching the request, for example by storing the data in ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can call ",Object(o.b)("inlineCode",{parentName:"p"},"delayRender")," multiple times. The render will be blocked for as long as at least one blocking handle exists and that has not been cleared by ",Object(o.b)("inlineCode",{parentName:"p"},"continueRender()"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You should put ",Object(o.b)("inlineCode",{parentName:"p"},"delayRender()")," calls inside your components rather than placing them as a top-level statement, to avoid blocking a render if a different composition is rendered. Also, in the example below the call is wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"useState()")," to avoid creating multiple blocking calls when the component rerenders."))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {useEffect, useState} from 'react';\nimport {continueRender, delayRender} from 'remotion';\n\nexport const MyVideo = () => {\n  const [data, setData] = useState(null);\n  const [handle] = useState(() => delayRender());\n\n  const fetchData = async () => {\n    const response = await fetch('http://example.com/api');\n    const json = await response.json();\n    setData(json);\n\n    continueRender(handle);\n  }\n\n  useEffect(() => {\n    fetchData();\n  },\xa0[]);\n\n  return (\n    <div>\n      {data ? (\n        <div>This video has data from an API! {JSON.stringify(data)}</div>\n      ) : null}\n    </div>\n  );\n}\n\n")),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/data-fetching"}),"Data fetching"))))}s.isMDXComponent=!0},138:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),b=a,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return t?r.a.createElement(m,l(l({ref:n},d),{},{components:t})):r.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
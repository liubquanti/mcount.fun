"use strict";(self.webpackChunkmine_count=self.webpackChunkmine_count||[]).push([[416],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>f});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3920:(e,t,n)=>{n(1504)},5040:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(1504);const a={container:"container_usuQ",children:"children_AcWt",popup:"popup_N1vF",containerHover:"containerHover__1Ny",popupText:"popupText_TNeV",popupTriangle:"popupTriangle_VKJW"};function i(e){let{children:t,onClickOutside:n}=e;const a=(0,r.useRef)(null);function i(e){a.current&&!a.current.contains(e.target)&&n(e)}return(0,r.useEffect)((()=>(document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i))),[]),r.createElement("span",{ref:a},t)}var o=n(6528);function s(e){let{children:t,title:n,mode:s="hover"}=e;const[c,l]=(0,r.useState)(!1),{isDarkTheme:u}=(0,o.U)();return r.createElement(i,{onClickOutside:()=>l(!1)},r.createElement("span",{className:`${a.container} ${"hover"===s?a.containerHover:""}`},r.createElement("span",{onClick:()=>l(!c),className:a.children},t),r.createElement("span",{className:a.popup,style:{display:"click"===s&&c?"block":"none"}},r.createElement("span",{className:a.popupText,style:{backgroundColor:u?"#dadae0":"#2f3136",color:u?"#000":"#fff"}},n),r.createElement("span",{className:a.popupTriangle,style:{borderTopColor:u?"#dadae0":"#2f3136"}}))))}const c={container:"container_Ak5I",widget:"widget_DC7_",userAvatar:"userAvatar_H_Vg",userTag:"userTag_BirN",userUsername:"userUsername_uIS0",userDiscriminator:"userDiscriminator_chY_"};function l(e){let{data:t}=e;const{isDarkTheme:n}=(0,o.U)();return r.createElement(s,{title:r.createElement("span",null,r.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===t.type?t.id:t.username),r.createElement("a",{href:t.url??"",style:{color:"inherit"},target:"_blank",rel:"noreferrer"},r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},r.createElement("span",{className:c.container},r.createElement("span",{className:c.widget,style:{backgroundColor:n?"#2f3136":"#dadae0"}},r.createElement("img",{src:t.avatarUrl,alt:"",className:c.userAvatar}),r.createElement("span",{className:c.userTag},"discord"===t.type?r.createElement(r.Fragment,null,r.createElement("span",{className:c.userUsername,style:{color:n?"#fff":"#000"}},t.name),r.createElement("span",{className:c.userDiscriminator},t.discriminator&&!["0","0000"].includes(t.discriminator)?"#"+t.discriminator:"")):r.createElement("span",{className:c.userUsername,style:{color:n?"#fff":"#000"}},t.name)))))}},2692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(5072),a=(n(1504),n(5788));n(5040),n(3920);const i={title:"\u2744\ufe0f \u2507 Infinite Winter",sidebar_position:5,description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440."},o="\u0421\u0435\u0437\u043e\u043d 5 - Infinite Winter \u2744\ufe0f",s={unversionedId:"past-seasons/Infinite Winter",id:"past-seasons/Infinite Winter",title:"\u2744\ufe0f \u2507 Infinite Winter",description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440.",source:"@site/wiki/past-seasons/Infinite Winter.md",sourceDirName:"past-seasons",slug:"/past-seasons/Infinite Winter",permalink:"/en/past-seasons/Infinite Winter",draft:!1,editUrl:"https://github.com/liubquanti-dev/mcount.fun/edit/main/wiki/past-seasons/Infinite Winter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u2744\ufe0f \u2507 Infinite Winter",sidebar_position:5,description:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u0441\u0435\u0440\u0432\u0435\u0440."},sidebar:"tutorialSidebar",previous:{title:"\u2b50 \u2507 To The Pole",permalink:"/en/past-seasons/To The Pole"},next:{title:"\ud83c\udfab \u2507 \u042f\u043a \u0434\u043e\u0454\u0434\u043d\u0430\u0442\u0438\u0441\u044f \u0434\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430?",permalink:"/en/join"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u0441\u0435\u0437\u043e\u043d-5---infinite-winter-\ufe0f"},"\u0421\u0435\u0437\u043e\u043d 5 - Infinite Winter \u2744\ufe0f"))}m.isMDXComponent=!0}}]);
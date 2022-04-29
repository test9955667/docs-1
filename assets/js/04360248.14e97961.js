"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3227],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,a=function(t,e){if(null==t)return{};var r,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=o.createContext({}),p=function(t){var e=o.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return o.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var r=t.components,a=t.mdxType,n=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||n;return r?o.createElement(m,l(l({ref:e},u),{},{components:r})):o.createElement(m,l({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=r.length,l=new Array(n);l[0]=f;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3222:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),l=["components"],c={},i="ICollateralizationOracle",p={unversionedId:"protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle",id:"protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle",title:"ICollateralizationOracle",description:"Functions",source:"@site/docs/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle.md",sourceDirName:"protocol/smart-contract-api/oracle/collateralization",slug:"/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IPausable",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper"},next:{title:"ICollateralizationOracleWrapper",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracleWrapper"}},u={},s=[{value:"Functions",id:"functions",level:2},{value:"pcvStats",id:"pcvstats",level:3},{value:"isOvercollateralized",id:"isovercollateralized",level:3}],f={toc:s};function d(t){var e=t.components,r=(0,a.Z)(t,l);return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"icollateralizationoracle"},"ICollateralizationOracle"),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"pcvstats"},"pcvStats"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function pcvStats() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)\n")),(0,n.kt)("h3",{id:"isovercollateralized"},"isOvercollateralized"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"function isOvercollateralized() external returns (bool)\n")))}d.isMDXComponent=!0}}]);
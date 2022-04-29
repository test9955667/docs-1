"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3180],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=m(n),s=r,f=c["".concat(u,".").concat(s)]||c[s]||d[s]||i;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},407:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u="IPSMRouter",m={unversionedId:"protocol/smart-contract-api/peg/IPSMRouter",id:"protocol/smart-contract-api/peg/IPSMRouter",title:"IPSMRouter",description:"Functions",source:"@site/docs/protocol/smart-contract-api/peg/IPSMRouter.md",sourceDirName:"protocol/smart-contract-api/peg",slug:"/protocol/smart-contract-api/peg/IPSMRouter",permalink:"/docs/docs/protocol/smart-contract-api/peg/IPSMRouter",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/peg/IPSMRouter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FixedPricePSM",permalink:"/docs/docs/protocol/smart-contract-api/peg/FixedPricePSM"},next:{title:"IPegStabilityModule",permalink:"/docs/docs/protocol/smart-contract-api/peg/IPegStabilityModule"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"psm",id:"psm",level:3},{value:"fei",id:"fei",level:3},{value:"getMintAmountOut",id:"getmintamountout",level:3},{value:"Parameters",id:"parameters",level:4},{value:"getRedeemAmountOut",id:"getredeemamountout",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"getMaxMintAmountOut",id:"getmaxmintamountout",level:3},{value:"getMaxRedeemAmountOut",id:"getmaxredeemamountout",level:3},{value:"mint",id:"mint",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"redeem",id:"redeem",level:3},{value:"Parameters",id:"parameters-3",level:4}],c={toc:d};function s(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ipsmrouter"},"IPSMRouter"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"psm"},"psm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function psm() external returns (contract IPegStabilityModule)\n")),(0,i.kt)("p",null,"reference to the PegStabilityModule that this router interacts with"),(0,i.kt)("h3",{id:"fei"},"fei"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function fei() external returns (contract IFei)\n")),(0,i.kt)("p",null,"reference to the FEI contract used."),(0,i.kt)("h3",{id:"getmintamountout"},"getMintAmountOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getMintAmountOut(\n    uint256 amountIn\n) external returns (uint256 amountFeiOut)\n")),(0,i.kt)("p",null,"calculate the amount of FEI out for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"amountIn")," of underlying"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"getredeemamountout"},"getRedeemAmountOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getRedeemAmountOut(\n    uint256 amountFeiIn\n) external returns (uint256 amountOut)\n")),(0,i.kt)("p",null,"calculate the amount of underlying out for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"amountFeiIn")," of FEI"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amountFeiIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"getmaxmintamountout"},"getMaxMintAmountOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getMaxMintAmountOut() external returns (uint256)\n")),(0,i.kt)("p",null,"the maximum mint amount out"),(0,i.kt)("h3",{id:"getmaxredeemamountout"},"getMaxRedeemAmountOut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getMaxRedeemAmountOut() external returns (uint256)\n")),(0,i.kt)("p",null,"the maximum redeem amount out"),(0,i.kt)("h3",{id:"mint"},"mint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(\n    address _to,\n    uint256 _minAmountOut,\n    uint256 ethAmountIn\n) external returns (uint256)\n")),(0,i.kt)("p",null,"Mints fei to the given address, with a minimum amount required"),(0,i.kt)("p",null,"This wraps ETH and then calls into the PSM to mint the fei. We return the amount of fei minted."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_to")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The address to mint fei to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_minAmountOut")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The minimum amount of fei to mint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ethAmountIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redeem"},"redeem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeem(\n    address to,\n    uint256 amountFeiIn,\n    uint256 minAmountOut\n) external returns (uint256 amountOut)\n")),(0,i.kt)("p",null,"Redeems fei for ETH\nFirst pull user FEI into this contract\nThen call redeem on the PSM to turn the FEI into weth\nWithdraw all weth to eth in the router\nSend the eth to the specified recipient"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"to")),(0,i.kt)("td",{parentName:"tr",align:"left"},"address"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the address to receive the eth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amountFeiIn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the amount of FEI to redeem")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"minAmountOut")),(0,i.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,i.kt)("td",{parentName:"tr",align:"left"},"the minimum amount of weth to receive")))))}s.isMDXComponent=!0}}]);
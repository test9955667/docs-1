"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1780],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4366:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={},u="Overview",s={unversionedId:"ERC-4626/Overview",id:"ERC-4626/Overview",title:"Overview",description:"About ERC-4626",source:"@site/docs/ERC-4626/Overview.md",sourceDirName:"ERC-4626",slug:"/ERC-4626/Overview",permalink:"/docs/docs/ERC-4626/Overview",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/ERC-4626/Overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Timed",permalink:"/docs/docs/protocol/smart-contract-api/utils/Timed"},next:{title:"Turbo Overview",permalink:"/docs/docs/Turbo/Overview"}},c={},p=[{value:"About ERC-4626",id:"about-erc-4626",level:2},{value:"ERC4626Router and Base",id:"erc4626router-and-base",level:2},{value:"Using the Router",id:"using-the-router",level:3},{value:"Extending the Router",id:"extending-the-router",level:3},{value:"xERC4626",id:"xerc4626",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("h2",{id:"about-erc-4626"},"About ERC-4626"),(0,i.kt)("p",null,"EIP-4626: The Tokenized Vault Standard is an ethereum application developer interface for building token vaults and strategies. It is meant to consolidate development efforts around \u201csingle token strategies\u201d such as lending, yield aggregators, and single-sided staking."),(0,i.kt)("p",null,"Full details about the ERC are available in the official spec: ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-4626"},"https://eips.ethereum.org/EIPS/eip-4626")," "),(0,i.kt)("h2",{id:"erc4626router-and-base"},"ERC4626Router and Base"),(0,i.kt)("p",null,"ERC-4626 standardizes the interface around depositing and withdrawing tokens from strategies."),(0,i.kt)("p",null,"The ERC4626 Router is an ecosystem utility contract (like WETH) which can route tokens in and out of multiple ERC-4626 strategies in a single call. Its architecture was inspired by the Uniswap V3 multicall router."),(0,i.kt)("p",null,"Basic supported features include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"withdrawing from some Vault A and redepositing to Vault B\nwrapping and unwrapping WETH"),(0,i.kt)("li",{parentName:"ul"},"managing token approvals/transfers"),(0,i.kt)("li",{parentName:"ul"},"slippage protection")),(0,i.kt)("p",null,"Ultimately the ERC4626 router can support an arbitrary number of withdrawals, deposits, and even distinct token types in a single call, subject to the block gas limit."),(0,i.kt)("p",null,"The router is split between the base ERC4626RouterBase which only handles the ERC4626 mutable methods (deposit/withdraw/mint/redeem) and the main router ERC4626Router which includes support for common routing flows and max logic."),(0,i.kt)("h3",{id:"using-the-router"},"Using the Router"),(0,i.kt)("p",null,"The router will be deployed to router.4626.eth as soon as the contracts are frozen and reviewed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ERC4626RouterBase - basic ERC4626 methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ERC4626Router - combined ERC4626 methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PeripheryPayments - WETH and ERC-20 utility methods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multicall - multicall utility")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PeripheryPayments - user approvals to the router with EIP-712 and EIP-2612"))),(0,i.kt)("p",null,"It is REQUIRED to use multicall to interact across multi-step user flows. The router is stateless other than holding token approvals for vaults it interacts with. Any tokens that end a transaction in the router can be permissionlessly withdrawn by any address, likely an MEV searcher, so make sure to complete all multicalls with token withdrawals to an end user address."),(0,i.kt)("p",null,"It is recommended to max approve vaults, and check whether a vault is already approved before interacting with the vault. This can save user gas. In cases where the number of required steps in a user flow is reduced to 1, a direct call can be used instead of multicall."),(0,i.kt)("h3",{id:"extending-the-router"},"Extending the Router"),(0,i.kt)("p",null,"The router can be imported and extended. Many ERC-4626 use cases include additional methods which may want to be included in a multicall router."),(0,i.kt)("p",null,"Importing via npm: coming soon\nImporting via forge: forge install Fei-Protocol/ERC4626"),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tribe Turbo - Turbo Router")),(0,i.kt)("h2",{id:"xerc4626"},"xERC4626"),(0,i.kt)("p",null,"An \u201cxToken\u201d popularized by SushiSwap with xSUSHI is a single-sided autocompounding token rewards module."),(0,i.kt)("p",null,"xTokens were improved apon by Zephram Lou with xERC20 to include manipulation resistant reward distributions."),(0,i.kt)("p",null,"Because xTokens are a perfect use case of ERC-4626, a base utility called xERC4626 is included in this repo."),(0,i.kt)("p",null,"xERC4626 improvements:"),(0,i.kt)("p",null,"4626 complete interface compatibility\ncompletely internal accounting to prevent all forms of exchange rate manipulation\nxERC4626 examples:"),(0,i.kt)("p",null,"xTRIBE - coming soon"))}m.isMDXComponent=!0}}]);
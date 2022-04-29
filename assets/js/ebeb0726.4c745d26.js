"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2844],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,N=m["".concat(u,".").concat(k)]||m[k]||s[k]||a;return n?l.createElement(N,i(i({ref:t},d),{},{components:n})):l.createElement(N,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},u="Tribe DAO Operators",p={unversionedId:"Turbo/TribeDAO",id:"Turbo/TribeDAO",title:"Tribe DAO Operators",description:"Adding new collaterals",source:"@site/docs/Turbo/TribeDAO.md",sourceDirName:"Turbo",slug:"/Turbo/TribeDAO",permalink:"/docs/docs/Turbo/TribeDAO",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/Turbo/TribeDAO.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Liquidations and Debt",permalink:"/docs/docs/Turbo/LiquidationsAndDebt"},next:{title:"Mainnet Deployment Addresses",permalink:"/docs/docs/Turbo/MainnetAddresses"}},d={},s=[{value:"Adding new collaterals",id:"adding-new-collaterals",level:2},{value:"Adding new strategies",id:"adding-new-strategies",level:2},{value:"Setting custom Safe revenue split",id:"setting-custom-safe-revenue-split",level:2},{value:"Executing Gibber",id:"executing-gibber",level:2},{value:"Access Control Summary",id:"access-control-summary",level:2},{value:"GIBBER_ROLE",id:"gibber_role",level:3},{value:"ROUTER_ROLE",id:"router_role",level:3},{value:"SAVIOR_ROLE",id:"savior_role",level:3},{value:"TURBO_ADMIN_ROLE",id:"turbo_admin_role",level:3},{value:"GUARDIAN_ROLE",id:"guardian_role",level:3},{value:"GOVERN_ROLE",id:"govern_role",level:3},{value:"TURBO_STRATEGIST_ROLE",id:"turbo_strategist_role",level:3}],m={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tribe-dao-operators"},"Tribe DAO Operators"),(0,a.kt)("h2",{id:"adding-new-collaterals"},"Adding new collaterals"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.addCollateral()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForCollateral()")),(0,a.kt)("li",{parentName:"ol"},"(Optional) ",(0,a.kt)("inlineCode",{parentName:"li"},"TurboClerk.setCustomFeePercentageForCollateral()"))),(0,a.kt)("h2",{id:"adding-new-strategies"},"Adding new strategies"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForVault()"))),(0,a.kt)("h2",{id:"setting-custom-safe-revenue-split"},"Setting custom Safe revenue split"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboClerk.setCustomFeePercentageForSafe()"))),(0,a.kt)("h2",{id:"executing-gibber"},"Executing Gibber"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'TurboAdmin.schedule(gibber, abi.encodeWithSignature("impoundAll(address,address)",safe,to))'),". Use ",(0,a.kt)("a",{parentName:"li",href:"https://ethtx.info/"},"https://ethtx.info/")," to read tx data and save the salt."),(0,a.kt)("li",{parentName:"ol"},"Wait 15 day timelock"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'TurboAdmin.execute(gibber,abi.encodeWithSignature("impoundAll(address,address)",safe,to), salt)')," (get salt from tx data of 1.)")),(0,a.kt)("h2",{id:"access-control-summary"},"Access Control Summary"),(0,a.kt)("p",null,"These are the roles which are in Tribe Turbo, their powers, and their holders."),(0,a.kt)("h3",{id:"gibber_role"},"GIBBER_ROLE"),(0,a.kt)("p",null,"HIGH CLEARANCE. capable of calling ",(0,a.kt)("inlineCode",{parentName:"p"},"gib")," to impound collateral. "),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gibber")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.gib"))),(0,a.kt)("h3",{id:"router_role"},"ROUTER_ROLE"),(0,a.kt)("p",null,"HIGH CLEARANCE. Optional module which can interact with any user's vault by default."),(0,a.kt)("p",null,"The router itself replicates access control so that other users can't interact"),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"router")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.boost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.less")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.slurp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.sweep")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.deposit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.mint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.withdraw")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.redeem"))),(0,a.kt)("h3",{id:"savior_role"},"SAVIOR_ROLE"),(0,a.kt)("p",null,"Capable of lessing any vault. Exposed on optional TurboSavior module."),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"savior")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.less"))),(0,a.kt)("h3",{id:"turbo_admin_role"},"TURBO_ADMIN_ROLE"),(0,a.kt)("p",null,"Operational admin of Turbo, can whitelist collaterals, strategies, and configure most parameters."),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fei dao timelock"),(0,a.kt)("li",{parentName:"ul"},"turbo pod if ",(0,a.kt)("a",{parentName:"li",href:"https://tribe.fei.money/t/fip-82-governance-enhancements/3945/23"},"FIP-82")," passes"),(0,a.kt)("li",{parentName:"ul"},"master"),(0,a.kt)("li",{parentName:"ul"},"admin")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.slurp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.less")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboMaster.createSafe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboMaster.setBooster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboMaster.setDefaultSafeAuthority")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboMaster.sweep")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboClerk.setDefaultFeePercentage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboClerk.setCustomFeePercentageForCollateral")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboClerk.setCustomFeePercentageForSafe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setFreezeStatus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForVault")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForCollateral")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSavior.setMinDebtPercentageForSaving")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCapsByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketBorrowCaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketBorrowCapsByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMintPausedByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMintPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setBorrowPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setBorrowPausedByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.oracleAdd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.addCollateral")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._deployMarket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._addRewardsDistributor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setCloseFactor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setCollateralFactor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setLiquidationIncentive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.schedule"))),(0,a.kt)("h3",{id:"guardian_role"},"GUARDIAN_ROLE"),(0,a.kt)("p",null,"Pause and security Guardian role."),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tribe Security Guardian")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboSafe.less")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setFreezeStatus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCapsByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketBorrowCaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketBorrowCapsByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMintPausedByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMintPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setBorrowPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setBorrowPausedByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setTransferPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setSeizePaused"))),(0,a.kt)("h3",{id:"govern_role"},"GOVERN_ROLE"),(0,a.kt)("p",null,"HIGH CLEARANCE. Capable of critical governance functionality on TurboAdmin such as oracle upgrades. "),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fei DAO Timelock")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setBorrowCapGuardian")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setPauseGuardian")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.oracleChangeAdmin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setWhitelistEnforcement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setPriceOracle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMintPaused")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._unsupportMarket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._toggleAutoImplementations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.scheduleSetPendingAdmin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.schedule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.cancel"))),(0,a.kt)("h3",{id:"turbo_strategist_role"},"TURBO_STRATEGIST_ROLE"),(0,a.kt)("p",null,"Limited version of TURBO_ADMIN_ROLE which can manage collateral and vault parameters."),(0,a.kt)("p",null,"Holders:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None initially")),(0,a.kt)("p",null,"Powers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForVault")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboBooster.setBoostCapForCollateral")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCaps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin._setMarketSupplyCapsByUnderlying")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TurboAdmin.addCollateral"))))}k.isMDXComponent=!0}}]);
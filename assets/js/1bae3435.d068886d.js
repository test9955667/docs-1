"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8220],{4907:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(6687);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6099:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=a(5177),n=a(4416),l=(a(6687),a(4907)),i=["components"],o={},p="ReserveStabilizer",s={unversionedId:"protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer",id:"protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer",title:"ReserveStabilizer",description:"Functions",source:"@site/docs/protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer.md",sourceDirName:"protocol/smart-contract-api/tribe/stabilizer",slug:"/protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer",permalink:"/docs/docs/protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/protocol/smart-contract-api/tribe/stabilizer/ReserveStabilizer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ITribeReserveStabilizer",permalink:"/docs/docs/protocol/smart-contract-api/tribe/stabilizer/ITribeReserveStabilizer"},next:{title:"TribeReserveStabilizer",permalink:"/docs/docs/protocol/smart-contract-api/tribe/stabilizer/TribeReserveStabilizer"}},d={},c=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"exchangeFei",id:"exchangefei",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"getAmountOut",id:"getamountout",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"withdraw",id:"withdraw",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"deposit",id:"deposit",level:3},{value:"balance",id:"balance",level:3},{value:"balanceReportedIn",id:"balancereportedin",level:3},{value:"setUsdPerFeiRate",id:"setusdperfeirate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"_transfer",id:"_transfer",level:3},{value:"Parameters",id:"parameters-5",level:4}],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"reservestabilizer"},"ReserveStabilizer"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    address _oracle,\n    address _backupOracle,\n    contract IERC20 _token,\n    uint256 _usdPerFeiBasisPoints\n) public\n")),(0,l.kt)("p",null,"ERC20 Reserve Stabilizer constructor"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_core")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fei Core to reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_oracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the price oracle to reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_backupOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the backup oracle to reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_token")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract IERC20"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the ERC20 token for this stabilizer, 0x0 if TRIBE or ETH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_usdPerFeiBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the USD price per FEI to sell tokens at")))),(0,l.kt)("h3",{id:"exchangefei"},"exchangeFei"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function exchangeFei(\n    uint256 feiAmount\n) public returns (uint256 amountOut)\n")),(0,l.kt)("p",null,"exchange FEI for tokens from the reserves"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"feiAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"of FEI to sell")))),(0,l.kt)("h3",{id:"getamountout"},"getAmountOut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function getAmountOut(\n    uint256 amountFeiIn\n) public returns (uint256)\n")),(0,l.kt)("p",null,"returns the amount out of tokens from the reserves for a given amount of FEI"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountFeiIn")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the amount of FEI in")))),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(\n    address to,\n    uint256 amountOut\n) external\n")),(0,l.kt)("p",null,"withdraw tokens from the reserves"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"address to send tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to send")))),(0,l.kt)("h3",{id:"deposit"},"deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit() external\n")),(0,l.kt)("p",null,"new PCV deposited to the stabilizer"),(0,l.kt)("p",null,"no-op because the token transfer already happened"),(0,l.kt)("h3",{id:"balance"},"balance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balance() public returns (uint256)\n")),(0,l.kt)("p",null,"returns the amount of the held ERC-20"),(0,l.kt)("h3",{id:"balancereportedin"},"balanceReportedIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function balanceReportedIn() public returns (address)\n")),(0,l.kt)("p",null,"display the related token of the balance reported"),(0,l.kt)("h3",{id:"setusdperfeirate"},"setUsdPerFeiRate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setUsdPerFeiRate(\n    uint256 newUsdPerFeiBasisPoints\n) external\n")),(0,l.kt)("p",null,"sets the USD per FEI exchange rate rate"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"newUsdPerFeiBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the USD per FEI exchange rate denominated in basis points (1/10000)")))),(0,l.kt)("h3",{id:"_transfer"},"_transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _transfer(\n    address to,\n    uint256 amount\n) internal\n")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"to")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);
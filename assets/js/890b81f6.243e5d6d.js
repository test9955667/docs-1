"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6371],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(v,i(i({ref:t},p),{},{components:n})):o.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s=void 0,l={unversionedId:"protocol/Governance/DAO",id:"protocol/Governance/DAO",title:"DAO",description:"The Fei Protocol makes use of a three tiered governance structure: token governance, optimistic governance and security guardian powers.",source:"@site/docs/protocol/Governance/DAO.md",sourceDirName:"protocol/Governance",slug:"/protocol/Governance/DAO",permalink:"/docs/docs/protocol/Governance/DAO",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/Governance/DAO.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Access control",permalink:"/docs/docs/protocol/Governance/Access control"},next:{title:"Developer environment",permalink:"/docs/docs/protocol/Development/Developer environment"}},p={},u=[{value:"Token governance via the DAO",id:"token-governance-via-the-dao",level:2},{value:"Optimistic governance via a Gnosis Safe and timelock",id:"optimistic-governance-via-a-gnosis-safe-and-timelock",level:2},{value:"Security guardian",id:"security-guardian",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Fei Protocol makes use of a three tiered governance structure: token governance, optimistic governance and security guardian powers. "),(0,a.kt)("p",null,"Token governance is implemented as a DAO, optimistic as a Gnosis Safe/Multisig attached to a timelock and the security guardian as a multisig that can act immediately. Each has different powers and responsibilities and taken together, they enable lean and trust minimised DAO governance. "),(0,a.kt)("h2",{id:"token-governance-via-the-dao"},"Token governance via the DAO"),(0,a.kt)("p",null,'Token governance has "executive powers" over the protocol and is implemented as a DAO, ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/dao/governor/FeiDAO.sol"},"FeiDAO.sol"),". This is an instance of OpenZeppelin's OZ Governor, with a module to make it compatible with GovernorBravo. The DAO has a quorum of 25M TRIBE, with a minimum proposal threshold of 2.5M TRIBE. "),(0,a.kt)("p",null,"It has ultimate power over the FEI protocol and, amongst other powers, is able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint FEI"),(0,a.kt)("li",{parentName:"ul"},"Create and grant new access roles"),(0,a.kt)("li",{parentName:"ul"},"Move PCV arbitrarily ")),(0,a.kt)("h2",{id:"optimistic-governance-via-a-gnosis-safe-and-timelock"},"Optimistic governance via a Gnosis Safe and timelock"),(0,a.kt)("p",null,"Most proposals do not require a full expensive DAO vote, and instead they can be approved in an optimistic fashion. A process referred to as OA (optimistic approval) exists to perform this - it is implemented as a Gnosis Safe multisig attached to a timelock contract. The timelock is present to give a user time to leave the Fei ecosystem if they disagree with a proposal."),(0,a.kt)("p",null,"The multisig is a 4 of 7 multisig, with a 4 day timelock. The owners are actors invested in the success of Fei - core team members and engaged community members. "),(0,a.kt)("p",null,"The timelock contract is a standard OZ ",(0,a.kt)("inlineCode",{parentName:"p"},"TimelockController.sol"),'. It can be thought of as the "executor" of OA proposals and is granted various roles through which it can operate on the protocol: ',(0,a.kt)("inlineCode",{parentName:"p"},"ORACLE_ADMIN_ROLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SWAP_ADMIN_ROLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TRIBAL_CHIEF_ADMIN_ROLE"),"."),(0,a.kt)("p",null,"It is important to note, that any proposal in the OA timelock can be vetoed by the DAO and the Security guardian. "),(0,a.kt)("h2",{id:"security-guardian"},"Security guardian"),(0,a.kt)("p",null,"The security guardian is a Gnosis Safe which has limited security related powers to pause parts of the protocol during an emergency. It can act immediately without a timelock and is held by a 3 of 8 multisig."),(0,a.kt)("p",null,"The guardian has a set of predefined behaviours it can act on including"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pausing contracts"),(0,a.kt)("li",{parentName:"ul"},"Vetoing malicious optimistic or token governance proposals")))}m.isMDXComponent=!0}}]);
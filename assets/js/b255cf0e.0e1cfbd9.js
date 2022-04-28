"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9450],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5062:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={},d="IPausable",p={unversionedId:"protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper",id:"protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper",title:"IPausable",description:"Functions",source:"@site/docs/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper.md",sourceDirName:"protocol/smart-contract-api/oracle/collateralization",slug:"/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper",editUrl:"https://github.com/fei-protocol/docs/tree/gh-pages/docs/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleWrapper.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CollateralizationOracleGuardian",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/CollateralizationOracleGuardian"},next:{title:"ICollateralizationOracle",permalink:"/docs/docs/protocol/smart-contract-api/oracle/collateralization/ICollateralizationOracle"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"paused",id:"paused",level:3},{value:"Functions",id:"functions-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"initialize",id:"initialize",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"setCollateralizationOracle",id:"setcollateralizationoracle",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"setDeviationThresholdBasisPoints",id:"setdeviationthresholdbasispoints",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"setValidityDuration",id:"setvalidityduration",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"setReadPauseOverride",id:"setreadpauseoverride",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"setCache",id:"setcache",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"update",id:"update",level:3},{value:"updateIfOutdated",id:"updateifoutdated",level:3},{value:"_update",id:"_update",level:3},{value:"_setCache",id:"_setcache",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"isOutdated",id:"isoutdated",level:3},{value:"read",id:"read",level:3},{value:"Return Values",id:"return-values",level:4},{value:"isExceededDeviationThreshold",id:"isexceededdeviationthreshold",level:3},{value:"_isExceededDeviationThreshold",id:"_isexceededdeviationthreshold",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"isOutdatedOrExceededDeviationThreshold",id:"isoutdatedorexceededdeviationthreshold",level:3},{value:"pcvStats",id:"pcvstats",level:3},{value:"Return Values",id:"return-values-1",level:4},{value:"isOvercollateralized",id:"isovercollateralized",level:3},{value:"pcvStatsCurrent",id:"pcvstatscurrent",level:3},{value:"Return Values",id:"return-values-2",level:4},{value:"_readNotPaused",id:"_readnotpaused",level:3}],u={toc:c};function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ipausable"},"IPausable"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"paused"},"paused"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function paused() external returns (bool)\n")),(0,l.kt)("h1",{id:"collateralizationoraclewrapper"},"CollateralizationOracleWrapper"),(0,l.kt)("p",null,"Reads a list of PCVDeposit that report their amount of collateral\nand the amount of protocol-owned FEI they manage, to deduce the\nprotocol-wide collateralization ratio."),(0,l.kt)("h2",{id:"functions-1"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n    address _core,\n    uint256 _validityDuration\n) public\n")),(0,l.kt)("p",null,"CollateralizationOracleWrapper constructor"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_core")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_validityDuration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the duration after which a reading becomes outdated.")))),(0,l.kt)("h3",{id:"initialize"},"initialize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialize(\n    address _core,\n    address _collateralizationOracle,\n    uint256 _validityDuration,\n    uint256 _deviationThresholdBasisPoints\n) public\n")),(0,l.kt)("p",null,"CollateralizationOracleWrapper initializer"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_core")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Fei Core for reference.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_collateralizationOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the CollateralizationOracle to inspect.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_validityDuration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the duration after which a reading becomes outdated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_deviationThresholdBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"threshold for deviation after which")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"keepers should call the update() function."),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setcollateralizationoracle"},"setCollateralizationOracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCollateralizationOracle(\n    address _newCollateralizationOracle\n) external\n")),(0,l.kt)("p",null,"set the address of the CollateralizationOracle to inspect, and\nto cache values from."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_newCollateralizationOracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the address of the new oracle.")))),(0,l.kt)("h3",{id:"setdeviationthresholdbasispoints"},"setDeviationThresholdBasisPoints"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setDeviationThresholdBasisPoints(\n    uint256 _newDeviationThresholdBasisPoints\n) external\n")),(0,l.kt)("p",null,"set the deviation threshold in basis points, used to detect if the\ncached value deviated significantly from the actual fresh readings."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_newDeviationThresholdBasisPoints")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new value to set.")))),(0,l.kt)("h3",{id:"setvalidityduration"},"setValidityDuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setValidityDuration(\n    uint256 _validityDuration\n) external\n")),(0,l.kt)("p",null,"set the validity duration of the cached collateralization values."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_validityDuration")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new validity duration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"This function will emit a DurationUpdate event from Timed.sol"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"setreadpauseoverride"},"setReadPauseOverride"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setReadPauseOverride(\n    bool _readPauseOverride\n) external\n")),(0,l.kt)("p",null,"set the readPauseOverride flag"),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_readPauseOverride")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the new flag for readPauseOverride")))),(0,l.kt)("h3",{id:"setcache"},"setCache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setCache(\n    uint256 _cachedProtocolControlledValue,\n    uint256 _cachedUserCirculatingFei,\n    int256 _cachedProtocolEquity\n) external\n")),(0,l.kt)("p",null,"governor or admin override to directly write to the cache"),(0,l.kt)("p",null,"used in emergencies where the underlying oracle is compromised or failing"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedProtocolControlledValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedUserCirculatingFei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedProtocolEquity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function update() external\n")),(0,l.kt)("p",null,"update reading of the CollateralizationOracle"),(0,l.kt)("h3",{id:"updateifoutdated"},"updateIfOutdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function updateIfOutdated() external\n")),(0,l.kt)("p",null,"this method reverts if the oracle is not outdated\nIt is useful if the caller is incentivized for calling only when the deviation threshold or frequency has passed"),(0,l.kt)("h3",{id:"_update"},"_update"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _update() internal returns (bool)\n")),(0,l.kt)("h3",{id:"_setcache"},"_setCache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _setCache(\n    uint256 _cachedProtocolControlledValue,\n    uint256 _cachedUserCirculatingFei,\n    int256 _cachedProtocolEquity\n) internal\n")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedProtocolControlledValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedUserCirculatingFei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"_cachedProtocolEquity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"isoutdated"},"isOutdated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function isOutdated() public returns (bool outdated)\n")),(0,l.kt)("h3",{id:"read"},"read"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function read() external returns (struct Decimal.D256 collateralRatio, bool validityStatus)\n")),(0,l.kt)("p",null,"Get the current collateralization ratio of the protocol, from cache."),(0,l.kt)("h4",{id:"return-values"},"Return Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"collateralRatio")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct Decimal.D256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the current collateral ratio of the protocol.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"validityStatus")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},"the current oracle validity status (false if any")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    of the oracles for tokens held in the PCV are invalid, or if\n    this contract is paused). |\n")),(0,l.kt)("h3",{id:"isexceededdeviationthreshold"},"isExceededDeviationThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function isExceededDeviationThreshold() public returns (bool obsolete)\n")),(0,l.kt)("h3",{id:"_isexceededdeviationthreshold"},"_isExceededDeviationThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _isExceededDeviationThreshold(\n    uint256 cached,\n    uint256 current\n) internal returns (bool)\n")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cached")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"current")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"isoutdatedorexceededdeviationthreshold"},"isOutdatedOrExceededDeviationThreshold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function isOutdatedOrExceededDeviationThreshold() external returns (bool)\n")),(0,l.kt)("h3",{id:"pcvstats"},"pcvStats"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function pcvStats() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)\n")),(0,l.kt)("p",null,"returns the Protocol-Controlled Value, User-circulating FEI, and\nProtocol Equity. If there is a fresh cached value, return it.\nOtherwise, call the CollateralizationOracle to get fresh data."),(0,l.kt)("h4",{id:"return-values-1"},"Return Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"protocolControlledValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the total USD value of all assets held")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"by the protocol."),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"userCirculatingFei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the number of FEI not owned by the protocol.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"protocolEquity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the difference between PCV and user circulating FEI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"If there are more circulating FEI than $ in the PCV, equity is 0."),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"validityStatus")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the current oracle validity status (false if any")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    of the oracles for tokens held in the PCV are invalid, or if\n    this contract is paused). |\n")),(0,l.kt)("h3",{id:"isovercollateralized"},"isOvercollateralized"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function isOvercollateralized() external returns (bool)\n")),(0,l.kt)("p",null,"returns true if the protocol is overcollateralized. Overcollateralization\nis defined as the protocol having more assets in its PCV (Protocol\nControlled Value) than the circulating (user-owned) FEI, i.e.\na positive Protocol Equity."),(0,l.kt)("h3",{id:"pcvstatscurrent"},"pcvStatsCurrent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function pcvStatsCurrent() external returns (uint256 protocolControlledValue, uint256 userCirculatingFei, int256 protocolEquity, bool validityStatus)\n")),(0,l.kt)("p",null,"returns the Protocol-Controlled Value, User-circulating FEI, and\nProtocol Equity, from an actual fresh call to the CollateralizationOracle."),(0,l.kt)("h4",{id:"return-values-2"},"Return Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"protocolControlledValue")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the total USD value of all assets held")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"by the protocol."),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"userCirculatingFei")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the number of FEI not owned by the protocol.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"protocolEquity")),(0,l.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the difference between PCV and user circulating FEI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"If there are more circulating FEI than $ in the PCV, equity is 0."),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"validityStatus")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,l.kt)("td",{parentName:"tr",align:"left"},": the current oracle validity status (false if any")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    of the oracles for tokens held in the PCV are invalid, or if\n    this contract is paused). |\n")),(0,l.kt)("h3",{id:"_readnotpaused"},"_readNotPaused"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function _readNotPaused() internal returns (bool)\n")))}m.isMDXComponent=!0}}]);
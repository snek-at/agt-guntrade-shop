(self.webpackChunkagt_guntrade_shop=self.webpackChunkagt_guntrade_shop||[]).push([[327],{32697:function(e,t,n){var i=n(42997).w_;e.exports.z=function(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"18",cy:"6",r:"3"}},{tag:"path",attr:{d:"M18,19H5V6h8c0-0.712,0.153-1.387,0.422-2H5C3.897,4,3,4.897,3,6v13c0,1.103,0.897,2,2,2h13c1.103,0,2-0.897,2-2v-8.422 C19.387,10.847,18.712,11,18,11V19z"}}]})(e)}},42564:function(e,t,n){var i=n(42997).w_;e.exports.r=function(e){return i({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 2h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2z"}}]})(e)}},25512:function(e,t,n){var i=n(42997).w_;e.exports.H=function(e){return i({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z",clipRule:"evenodd"}}]})(e)}},4226:function(e,t,n){var i=n(42997).w_;e.exports.C=function(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zM160 368H80a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h80zm128-16a16 16 0 0 1-16 16h-80v-48h80a16 16 0 0 1 16 16zm160-128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32z"}}]})(e)}},30473:function(e,t){"use strict";var n=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)},i=function(e){var t,n;return{pathname:e||(t=window.location.href,-1===(n=t.indexOf("#"))?"":t.substring(n+1)),search:""}};t.Z=function(){var e=i();return function(e){""===e.pathname&&n("/")}(e),{get location(){return i()},addEventListener:function(e,t){window.addEventListener(e,t)},removeEventListener:function(e,t){window.removeEventListener(e,t)},history:{state:e,pushState:function(t,n,r){var o;e=i(r),o=r,window.location.hash=o},replaceState:function(t,r,o){e=i(o),n(o)}}}}},99691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var i=n(55456),r=n(59694),o=n(30473),a=n(3013),l=n(73321),c=n(67294),d=n(32672),u=n(88837),s=function(e){var t=e.label,n=e.children;return(0,u.BX)(a.Box,{children:[(0,u.tZ)(a.Text,{px:"3",fontSize:"xs",fontWeight:"semibold",textTransform:"uppercase",letterSpacing:"widest",color:"gray.500",mb:"3",children:t}),(0,u.tZ)(a.Stack,{spacing:"1",children:n})]})},h=n(84527),f=function(e){var t=e.active,n=e.subtle,i=e.icon,r=e.children,o=e.label,l=e.endElement,c=e.onClick;return(0,u.BX)(a.HStack,{onClick:c,w:"full",px:"3",py:"2",cursor:"pointer",userSelect:"none",rounded:"md",transition:"all 0.2s",bg:t?"gray.700":void 0,_hover:{bg:"gray.700"},_active:{bg:"gray.600"},children:[(0,u.tZ)(a.Box,{fontSize:"lg",color:t?"currentcolor":"gray.400",children:i}),(0,u.tZ)(a.Box,{flex:"1",fontWeight:"inherit",color:n?"gray.400":void 0,children:o}),l&&!r&&(0,u.tZ)(a.Box,{children:l}),r&&(0,u.tZ)(a.Box,{fontSize:"xs",flexShrink:0,as:h.AV3})]})},p=function(e){var t=e.toolbar,n=e.content,i=e.sidebarItems,r=e.onSidebarItemClick,o=e.onSettingsClick,c=e.onHelpClick;return(0,u.BX)(a.Box,{height:"100vh",overflow:"hidden",position:"relative",children:[t,(0,u.BX)(a.Flex,{h:"calc(100vh - 54px)",id:"app-container",children:[(0,u.tZ)(a.Box,{w:"64",bg:"gray.900",color:"white",fontSize:"sm",children:(0,u.BX)(a.Flex,{h:"100%",direction:"column",px:"4",py:"4",children:[(0,u.BX)(a.Stack,{spacing:"8",flex:"1",children:[(0,u.tZ)(a.Stack,{spacing:"1",children:i.ungrouped.map((function(e){return(0,u.tZ)(f,{active:e.path===i.activePath,icon:e.icon,label:e.label,onClick:function(){return r(e.path)}},e.path)}))}),Object.entries(i.grouped).map((function(e){var t=e[0],n=e[1];return(0,u.tZ)(s,{label:n.label,children:n.items.map((function(e){return(0,u.tZ)(f,{active:e.path===i.activePath,icon:e.icon,label:e.label,onClick:function(){return r(e.path)}},e.path)}))},t)}))]}),(0,u.tZ)(a.Spacer,{}),(0,u.BX)(a.Stack,{children:[(0,u.tZ)(f,{subtle:!0,icon:(0,u.tZ)(d.MBj,{}),label:"Settings",onClick:o}),(0,u.tZ)(f,{subtle:!0,icon:(0,u.tZ)(d.EF3,{}),label:"Help & Support",endElement:(0,u.tZ)(a.Circle,{size:"2",bg:"blue.400"}),onClick:c})]})]})}),(0,u.tZ)(a.Box,{bg:(0,l.ff)("gray.50","gray.700"),w:"100%",h:"100%",overflowY:"hidden",children:(0,u.tZ)(a.Box,{rounded:"lg",bg:"white",m:"4",p:"2",children:n})})]})]})},g=n(45018),v=n(5008),m=n(25512),b=n(4226),Z=n(42564),x=n(32697),w=n(16985),k=n(32662),B=n(55971),C=n(38969),y=function(e){return(0,u.tZ)(a.Box,Object.assign({bg:(0,l.ff)("white","gray.700"),py:"8",px:{base:"4",md:"10"},shadow:"base",rounded:{sm:"lg"}},e))},S=n(63366),z=["children"],X=function(e){var t=e.children,n=(0,S.Z)(e,z);return(0,u.BX)(a.Flex,Object.assign({align:"center",color:"gray.300"},n,{children:[(0,u.tZ)(a.Box,{flex:"1",children:(0,u.tZ)(a.Divider,{borderColor:"currentcolor"})}),(0,u.tZ)(a.Text,{as:"span",px:"3",color:(0,l.ff)("gray.600","gray.400"),fontWeight:"medium",children:t}),(0,u.tZ)(a.Box,{flex:"1",children:(0,u.tZ)(a.Divider,{borderColor:"currentcolor"})})]}))},H=n(41551),L=function(e){return(0,u.tZ)(H.m$.a,Object.assign({marginStart:"1",href:"#",color:(0,l.ff)("teal.500","teal.200"),_hover:{color:(0,l.ff)("teal.600","teal.300")},display:{base:"block",sm:"inline"}},e))},P=n(29802),j=n(28569),M=n(95422),_=n(14893),R=c.forwardRef((function(e,t){var n=(0,M.qY)(),i=n.isOpen,r=n.onToggle,o=c.useRef(null),d=(0,M.qq)(o,t);return(0,u.BX)(P.NI,{id:"password",children:[(0,u.BX)(a.Flex,{justify:"space-between",children:[(0,u.tZ)(P.lX,{children:"Password"}),(0,u.tZ)(a.Box,{as:"a",color:(0,l.ff)("teal.600","blue.200"),fontWeight:"semibold",fontSize:"sm",children:"Forgot Password?"})]}),(0,u.BX)(j.BZ,{children:[(0,u.tZ)(j.xH,{children:(0,u.tZ)(w.hU,{bg:"transparent !important",variant:"ghost","aria-label":i?"Mask password":"Reveal password",icon:i?(0,u.tZ)(_.MBb,{}):(0,u.tZ)(_.Rbo,{}),onClick:function(){r();var e=o.current;if(e){e.focus({preventScroll:!0});var t=2*e.value.length;requestAnimationFrame((function(){e.setSelectionRange(t,t)}))}}})}),(0,u.tZ)(j.II,Object.assign({ref:d,name:"password",type:i?"text":"password",autoComplete:"current-password",required:!0},e))]})]})}));R.displayName="PasswordField";var O=function(e){return(0,u.tZ)(H.m$.form,Object.assign({onSubmit:function(t){t.preventDefault();var n=t.target.email.value,i=t.target.password.value;e.onLogin(n,i)}},e,{children:(0,u.BX)(a.Stack,{spacing:"6",children:[(0,u.BX)(P.NI,{id:"email",children:[(0,u.tZ)(P.lX,{children:"Email address"}),(0,u.tZ)(j.II,{name:"email",type:"email",autoComplete:"email",required:!0,focusBorderColor:"teal.500"})]}),(0,u.tZ)(R,{focusBorderColor:"teal.500"}),(0,u.tZ)(w.zx,{type:"submit",colorScheme:"teal",size:"lg",fontSize:"md",children:"Sign in"})]})}))},V=function(e){return(0,u.tZ)(a.Box,{bg:(0,l.ff)("gray.50","inherit"),minH:"100vh",py:"12",px:{base:"4",lg:"8"},children:(0,u.BX)(a.Box,{maxW:"md",mx:"auto",children:[(0,u.tZ)(C.N,{mx:"auto",boxSize:"16",display:"block",mb:{base:"10",md:"15"}}),(0,u.tZ)(a.Heading,{textAlign:"center",size:"xl",fontWeight:"extrabold",children:"Sign in to Jaen Admin"}),(0,u.BX)(a.Text,{mt:"4",mb:"8",align:"center",maxW:"md",fontWeight:"medium",children:[(0,u.tZ)(a.Text,{as:"span",children:"Don't have an account?"}),(0,u.tZ)(L,{onClick:e.onLiveDemo,children:"Use the live demo"})]}),(0,u.BX)(y,{children:[(0,u.tZ)(O,{onLogin:e.onLogin}),(0,u.tZ)(X,{mt:"6",children:"or visit"}),(0,u.BX)(a.SimpleGrid,{mt:"6",columns:3,spacing:"3",children:[(0,u.BX)(w.zx,{color:"currentColor",variant:"outline",onClick:e.onDocsClick,children:[(0,u.tZ)(k.TX,{children:"Docs"}),(0,u.tZ)(B.Mp$,{})]}),(0,u.BX)(w.zx,{color:"currentColor",variant:"outline",onClick:e.onHomeClick,children:[(0,u.tZ)(k.TX,{children:"Home"}),(0,u.tZ)(B.xng,{})]})]})]})]})})},E=n(46236),I=n(62105),D=function(e){var t=(0,i.TL)();return(0,u.tZ)(V,{onLogin:function(e,n){t((0,E.x4)({email:e,password:n}))},onLiveDemo:function(){t((0,E.NM)({}))},onHomeClick:function(){(0,I.c4)("/")},onDocsClick:function(){var e;"undefined"!=typeof window&&(null===(e=window.open("https://snek.at/products/jaen","_blank"))||void 0===e||e.focus())}})};var F=(0,g.ZP)((function(){return Promise.all([n.e(532),n.e(577),n.e(682),n.e(452),n.e(383),n.e(257)]).then(n.bind(n,92477))}),{fallback:(0,u.tZ)("div",{children:"Loading..."})}),T=(0,g.ZP)((function(){return Promise.all([n.e(532),n.e(577),n.e(383),n.e(923)]).then(n.bind(n,68923))}),{fallback:(0,u.tZ)("div",{children:"Loading..."})}),A=(0,g.ZP)((function(){return Promise.resolve().then(n.bind(n,45799))}),{fallback:(0,u.tZ)("div",{children:"Loading..."})}),N=(0,g.ZP)((function(){return Promise.all([n.e(532),n.e(577),n.e(452),n.e(383),n.e(855)]).then(n.bind(n,21855))}),{fallback:(0,u.tZ)("div",{children:"Loading..."})}),W=(0,g.ZP)((function(){return n.e(681).then(n.bind(n,81681))}),{fallback:(0,u.tZ)("div",{children:"Loading..."})}),q=function(e){var t=(0,r.useNavigate)(),n="undefined"!=typeof window?window.location.hash:"";c.useEffect((function(){document.title="Jaen Admin"}),[]);var i={"/":(0,u.tZ)(W,{}),"/pages":(0,u.tZ)(F,{}),"/files":(0,u.tZ)(T,{}),"/notifications":(0,u.tZ)(A,{}),"/settings":(0,u.tZ)(N,{})},o=c.useMemo((function(){var e,t=n.split("#")[1];"/"!==(null===(e=t)||void 0===e?void 0:e.charAt(0))&&(t="/"+t);for(var r=0,o=Object.entries(i);r<o.length;r++){var a=o[r],l=a[0],c=a[1];if(l===t)return{path:l,content:c}}var d=Object.entries(i)[0];if(d)return{path:d[0],content:d[1]};throw new Error("No routes found")}),[n]),a=c.useCallback((function(e){return t(e)}),[t]),l=c.useCallback((function(){"undefined"!=typeof window&&window.open("https://snek.at/docs/jaen/jaen-admin","_blank")}),[]);return(0,u.tZ)(p,{toolbar:(0,u.tZ)(v.Z,{}),sidebarItems:{activePath:o.path,ungrouped:[{path:"/",icon:(0,u.tZ)(m.H,{}),label:"Home"}],grouped:{site:{label:"Your Site",items:[{path:"/pages",icon:(0,u.tZ)(b.C,{}),label:"Pages"},{path:"/files",icon:(0,u.tZ)(Z.r,{}),label:"Files"},{path:"/notifications",icon:(0,u.tZ)(x.z,{}),label:"Notifications"}]}}},content:o.content,onSidebarItemClick:a,onSettingsClick:function(){return t("/settings")},onHelpClick:l})},Y=(0,i.Xt)((function(e){if("undefined"==typeof window)return null;var t=(0,o.Z)(),n=(0,r.createHistory)(t),a=(0,i.CG)((function(e){return e.auth.isAuthenticated}));return(0,u.tZ)(r.LocationProvider,{history:n,children:(0,u.tZ)(r.Router,{primary:!1,children:a?(0,u.tZ)(q,{default:!0,path:"/"}):(0,u.tZ)(D,{default:!0,path:"/login"})})})}))}}]);
//# sourceMappingURL=component---node-modules-jaenjs-jaen-src-ui-admin-page-tsx-7129ad93e84225cd2a27.js.map
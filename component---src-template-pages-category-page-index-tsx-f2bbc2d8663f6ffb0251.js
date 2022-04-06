"use strict";(self.webpackChunkagt_guntrade_shop=self.webpackChunkagt_guntrade_shop||[]).push([[459],{25872:function(t,e,n){n.d(e,{c4:function(){return m},wc:function(){return h},mq:function(){return u},Lm:function(){return p}});var i=Symbol.for("di"),r=!1;function a(t,e){void 0===e&&(e="");var n=t.displayName||t.name;return n&&e?"".concat(e,"(").concat(n,")"):n}function c(t,e){var n;return e.displayName=a(e)||a(t,"di"),e[i]&&e[i]!==t&&(n='You are trying to use replacement "'.concat(e.displayName,'" on multiple injectables. ')+"That will override only the last dependency, as each replacement is uniquely linked.",r||(console.error("Warning:",n),r=!0)),e[i]=t,e}var o=n(75937),l=n(67294),d=n(3013),s=n(88837),u=["0em","30em","48em","62em","80em","96em"].map((function(t){return"@media (min-width: "+t+")"})),m=c((function(t){return t.gimg}),(function(t){return(0,s.tZ)(o.Ee,{className:t.gimg.props.imgClassName,alt:t.gimg.props.alt,src:t.gimg.props.src})})),g=function(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)},p=function(){var t=l.useState(),e=t[0],n=t[1];return l.useEffect((function(){n(g());var t=function(){n(g())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),e};function h(t,e,n){void 0===e&&(e=6),void 0===n&&(n=(0,s.tZ)(d.Box,{}));var i=e-(t.length%e||e);return i>0?Array(i).fill(n):[]}},56341:function(t,e,n){n.d(e,{D:function(){return u}});var i,r=n(3013),a=n(34633),c=n(1018),o=n(25872),l=n(81880),d=(0,n(13252).Z)(r.Box)(i||(i=(0,l.Z)(["\n  .banner-image {\n    height: 200px;\n    width: 100%;\n    object-fit: cover;\n  }\n"]))),s=n(88837),u=function(t){return(0,s.BX)(r.Box,{position:"relative",color:"white",children:[(0,s.tZ)(d,{children:(0,s.tZ)(o.c4,{gimg:(0,s.tZ)(a.S,{src:"https://i.imgur.com/8zG2Ymd.jpeg",alt:"bg",imgClassName:"banner-image",__imageData:n(39270)})})}),(0,s.tZ)(r.Flex,{position:"absolute",top:"5",w:"100%",justifyContent:"center",alignItems:"center",children:(0,s.BX)(r.Box,{w:"8xl",children:[(0,s.tZ)(c.O,{path:t.path}),(0,s.tZ)(r.Heading,{size:"2xl",my:"8",children:t.title})]})})]})}},67576:function(t,e,n){n.d(e,{v:function(){return p}});var i,r=n(3013),a=n(73321),c=n(34633),o=n(67294),l=n(81880),d=n(4382),s=n(88837);function u(t){var e=t.image,n=t.tags;return(0,s.BX)(r.Box,{className:"background",borderRadius:"md",boxShadow:"lg",bg:(0,a.ff)("gray.200","gray.600"),overflow:"hidden",position:"relative",children:[(0,s.tZ)(c.G,{onDragStart:function(t){return t.preventDefault()},draggable:"false",image:e.gatsbyImageData,alt:e.alt}),(0,s.tZ)(r.Flex,{position:"absolute",top:"0",left:"0",right:"0",p:2,children:n.map((function(t){return(0,s.tZ)(r.Badge,{variant:"solid",fontSize:"sm",fontWeight:"semibold",rounded:"md",px:2,mr:2,color:(e=t.color,i=null===(n=e.replace("#","").match(/../g))||void 0===n?void 0:n.map((function(t){return parseInt(t,16)})),.2126*i[0]+.7152*i[1]+.0722*i[2]>140?"black":"white"),bgColor:t.color,textTransform:"none",children:t.name},t.name);var e,n,i}))})]})}function m(t){var e=parseFloat(t.price).toFixed(2)+" €";if(t.discountPrice){var n=parseFloat(t.discountPrice).toFixed(2)+" €";return(0,s.BX)(r.Flex,{direction:"row",wrap:"wrap",justifyContent:{base:"center",md:"flex-start"},children:[(0,s.tZ)(r.Text,{fontSize:"sm",fontWeight:"semibold",color:"gray.600",textDecoration:"line-through",children:e}),(0,s.tZ)(r.Text,{fontSize:"sm",fontWeight:"bold",color:"red.500",ml:2,children:n})]})}return(0,s.tZ)(r.Box,{fontSize:"sm",fontWeight:"semibold",mb:2,children:(0,s.tZ)(r.Text,{children:e})})}function g(t){t.id;var e=t.image,n=t.name,a=t.categoriesString,c=t.price,g=t.discountPrice,p=t.createdAt,h=o.useState(function(t){if(void 0===t&&(t=[]),new Date(p).getTime()>Date.now()-6048e5&&t.push({name:"Neu",color:"#00ff00"}),g){var e=-100*(1-parseFloat(g)/parseFloat(c));t.push({name:e.toFixed(0)+"%",color:"#ff0000"})}return t}()),f=h[0];h[1];return(0,s.BX)(r.VStack,{css:(0,d.iv)(i||(i=(0,l.Z)(["\n  &:hover {\n    .background {\n      box-shadow: var(--chakra-shadows-xl);\n    }\n  }\n"]))),boxSize:"full",cursor:"pointer",textAlign:{base:"center",md:"left"},children:[(0,s.tZ)(u,{image:e,tags:f}),(0,s.BX)(r.Box,{w:"100%",children:[(0,s.tZ)(r.Text,{fontSize:"sm",isTruncated:!0,children:a||"-"}),(0,s.tZ)(r.Text,{fontWeight:"semibold",children:n}),(0,s.tZ)(m,{price:c,discountPrice:g})]})]})}function p(t){var e,n=t.tags.filter((function(t){return!t.startsWith("Kategorie:")})).map((function(t){return t.split(":")[1]})).join(", ");return(0,s.tZ)(g,{createdAt:t.createdAt,id:t.id,tags:[],image:t.featuredImage,name:t.title,categoriesString:n,price:t.contextualPricing.maxVariantPricing.price.amount,discountPrice:null===(e=t.contextualPricing.maxVariantPricing.compareAtPrice)||void 0===e?void 0:e.amount})}},96693:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});n(27207);var i,r=n(3013),a=n(34633),c=n(1018),o=n(25872),l=n(81880),d=((0,n(13252).Z)(r.Box)(i||(i=(0,l.Z)(["\n  .banner-image {\n    height: 30vh;\n    width: 100%;\n    object-fit: cover;\n  }\n"]))),n(67294),n(8532)),s=n(56341),u=n(62105),m=n(67576),g=n(88837),p=function(t){var e=t.items,n=(0,o.wc)(e);return(0,g.BX)(r.SimpleGrid,Object.assign({spacing:"4"},t,{minChildWidth:"200px",py:"8",children:[e.map((function(e,n){var i,c;return(0,g.BX)(r.Link,{as:u.rU,to:t.getPath(e.title,e.handle,e.totalProducts),borderRadius:"lg",overflow:"hidden",position:"relative",p:"4",mb:"4",cursor:"pointer",_hover:{transform:"scale(1.05)",color:"agt.blue"},children:[(0,g.tZ)(r.AspectRatio,{ratio:1,children:(0,g.tZ)(r.VStack,{children:(0,g.tZ)(a.G,{alt:(null===(i=e.image)||void 0===i?void 0:i.alt)||e.title,image:null===(c=e.image)||void 0===c?void 0:c.gatsbyImageData,style:{minHeight:"100%",minWidth:"100%",objectFit:"cover",objectPosition:"center"}})})}),(0,g.tZ)(r.Text,{textAlign:"center",children:e.title+" ("+e.totalProducts+")"})]},n)})),n]}))},h=function(t){return(0,g.BX)(d.I,{withSearch:!0,activePath:t.path,children:[(0,g.tZ)(s.D,{title:t.title,path:t.path}),(0,g.tZ)(c.V,{children:(0,g.BX)(r.VStack,{spacing:16,align:"left",children:[(0,g.tZ)(p,Object.assign({},t.category)),(0,g.BX)(r.VStack,{spacing:8,children:[(0,g.tZ)(r.Heading,{textAlign:"center",size:"2xl",borderBottom:"1px solid",children:t.productGrid.title}),(0,g.tZ)(r.SimpleGrid,{columns:{base:2,md:5},spacing:"4",children:t.productGrid.items.map((function(e,n){return(0,g.tZ)(r.Link,{as:u.rU,to:t.productGrid.getPath(e.handle),children:(0,m.v)(e)},e.id)}))})]})]})})]})},f=function(t){var e=t.pageContext,n=t.path;return(0,g.tZ)(h,{title:e.category.title,path:n,category:Object.assign({},e.category,{getPath:function(t,e,i){var r=n.replace(/\/$/,""),a=t.split(":"),c=r.split("/");return 0===i?r:"Alle Produkte"===t?r+"/products/":e.startsWith("a-")?"/"+a[a.length-1].toLowerCase().replaceAll(" ","-")+"/"+c[c.length-1]:r+"/"+a[a.length-1].toLowerCase().replaceAll(" ","-")}}),productGrid:Object.assign({},e.productGrid,{getPath:function(t){return"/products/"+t}})})}},39270:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/6698c92312e15b4d499cb5be14c016bc/cc220/8zG2Ymd.jpg","srcSet":"/static/6698c92312e15b4d499cb5be14c016bc/d4287/8zG2Ymd.jpg 750w,\\n/static/6698c92312e15b4d499cb5be14c016bc/10529/8zG2Ymd.jpg 1080w,\\n/static/6698c92312e15b4d499cb5be14c016bc/142f6/8zG2Ymd.jpg 1366w,\\n/static/6698c92312e15b4d499cb5be14c016bc/cc220/8zG2Ymd.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/6698c92312e15b4d499cb5be14c016bc/f1626/8zG2Ymd.webp 750w,\\n/static/6698c92312e15b4d499cb5be14c016bc/f3f4e/8zG2Ymd.webp 1080w,\\n/static/6698c92312e15b4d499cb5be14c016bc/40ee4/8zG2Ymd.webp 1366w,\\n/static/6698c92312e15b4d499cb5be14c016bc/2bac2/8zG2Ymd.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":737}')}}]);
//# sourceMappingURL=component---src-template-pages-category-page-index-tsx-f2bbc2d8663f6ffb0251.js.map
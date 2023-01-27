"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[877],{9877:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t=r(1087),i=r(1413),a=r(751),o=r(7872),c=r(3329),l=(0,o.G)((function(n,e){return(0,c.jsx)(a.K,(0,i.Z)((0,i.Z)({align:"center"},n),{},{direction:"column",ref:e}))}));l.displayName="VStack";var s=r(9439),u=r(2625);var d=r(9216),f=r(2791);var m=r(5310),p=r(6992);function h(n){var e,r,t=(0,p.Kn)(n)?n:{fallback:null!=n?n:"base"},a=(0,m.F)().__breakpoints.details.map((function(n){var e=n.minMaxQuery;return{breakpoint:n.breakpoint,query:e.replace("@media screen and ","")}})),o=a.map((function(n){return n.breakpoint===t.fallback})),c=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.ssr,t=void 0===r||r,a=e.fallback,o=(0,d.O)().getWindow,c=Array.isArray(n)?n:[n],l=Array.isArray(a)?a:[a];l=l.filter((function(n){return null!=n}));var u=(0,f.useState)((function(){return c.map((function(n,e){return{media:n,matches:t?!!l[e]:o().matchMedia(n).matches}}))})),m=(0,s.Z)(u,2),p=m[0],h=m[1];return(0,f.useEffect)((function(){var n=o();h(c.map((function(e){return{media:e,matches:n.matchMedia(e).matches}})));var e=c.map((function(e){return n.matchMedia(e)})),r=function(n){h((function(e){return e.slice().map((function(e){return e.media===n.media?(0,i.Z)((0,i.Z)({},e),{},{matches:n.matches}):e}))}))};return e.forEach((function(n){"function"===typeof n.addListener?n.addListener(r):n.addEventListener("change",r)})),function(){e.forEach((function(n){"function"===typeof n.removeListener?n.removeListener(r):n.removeEventListener("change",r)}))}}),[o]),p.map((function(n){return n.matches}))}(a.map((function(n){return n.query})),{fallback:o,ssr:t.ssr});return null!=(r=null==(e=a[c.findIndex((function(n){return 1==n}))])?void 0:e.breakpoint)?r:t.fallback}function g(n,e){var r,t=h((0,p.Kn)(e)?e:{fallback:null!=e?e:"base"}),i=(0,m.F)();if(t){var a=Array.from((null==(r=i.__breakpoints)?void 0:r.keys)||[]);return function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.AV,t=Object.keys(n).indexOf(e);if(-1!==t)return n[e];for(var i=r.indexOf(e);i>=0;){var a=r[i];if(n.hasOwnProperty(a)){t=i;break}i-=1}if(-1!==t){return n[r[t]]}}(Array.isArray(n)?Object.fromEntries(Object.entries((0,u.Yq)(n,a)).map((function(n){var e=(0,s.Z)(n,2);return[e[0],e[1]]}))):n,t,a)}}var v=r(176),x=r(9229),b=r(4224),y=r(2643),k=function(){return(0,c.jsx)(v.k,{w:"full",h:"100vh",backgroundImage:"url(".concat(y,")"),backgroundSize:"cover",backgroundPosition:"center center",children:(0,c.jsx)(l,{w:"full",justify:"center",px:g({base:4,md:8}),bgGradient:"linear(to-r, blackAlpha.600, transparent)",children:(0,c.jsxs)(a.K,{maxW:"2xl",align:"flex-start",spacing:6,children:[(0,c.jsx)(x.x,{color:"white",fontWeight:700,lineHeight:1.2,fontSize:g({base:"3xl",md:"4xl"}),children:"Welcome to the phonebook to take advantage of all the features, register or login."}),(0,c.jsxs)(a.K,{direction:"row",children:[(0,c.jsx)(b.z,{as:t.OL,to:"register",bg:"blue.400",rounded:"full",color:"white",_hover:{bg:"blue.500"},children:"Sing up"}),(0,c.jsx)(b.z,{as:t.OL,to:"login",bg:"whiteAlpha.300",rounded:"full",color:"white",_hover:{bg:"whiteAlpha.500"},children:"Sign in"})]})]})})})}},2643:function(n,e,r){n.exports=r.p+"static/media/Laptop.8aa767a1e34449f2f139.png"},2625:function(n,e,r){r.d(e,{AV:function(){return i},XQ:function(){return a},Yq:function(){return o}});var t=r(6992),i=Object.freeze(["base","sm","md","lg","xl","2xl"]);function a(n,e){return Array.isArray(n)?n.map((function(n){return null===n?null:e(n)})):(0,t.Kn)(n)?Object.keys(n).reduce((function(r,t){return r[t]=e(n[t]),r}),{}):null!=n?e(n):null}function o(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={};return n.forEach((function(n,t){var i=e[t];null!=n&&(r[i]=n)})),r}},4224:function(n,e,r){r.d(e,{z:function(){return j}});var t=r(4925),i=r(1413),a=r(9439),o=r(2791);var c=(0,r(9886).k)({strict:!1,name:"ButtonGroupContext"}),l=(0,a.Z)(c,2),s=(l[0],l[1]),u=r(2952),d=r(6992),f=r(3329),m=["children","className"];function p(n){var e=n.children,r=n.className,a=(0,t.Z)(n,m),c=(0,o.isValidElement)(e)?(0,o.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,l=(0,d.cx)("chakra-button__icon",r);return(0,f.jsx)(u.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:l,children:c}))}p.displayName="ButtonIcon";var h=r(4942),g=r(3204),v=["label","placement","spacing","children","className","__css"];function x(n){var e=n.label,r=n.placement,a=n.spacing,c=void 0===a?"0.5rem":a,l=n.children,s=void 0===l?(0,f.jsx)(g.$,{color:"currentColor",width:"1em",height:"1em"}):l,m=n.className,p=n.__css,x=(0,t.Z)(n,v),b=(0,d.cx)("chakra-button__spinner",m),y="start"===r?"marginEnd":"marginStart",k=(0,o.useMemo)((function(){var n;return(0,i.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,h.Z)(n,y,e?c:0),(0,h.Z)(n,"fontSize","1em"),(0,h.Z)(n,"lineHeight","normal"),n),p)}),[p,e,y,c]);return(0,f.jsx)(u.m.div,(0,i.Z)((0,i.Z)({className:b},x),{},{__css:k,children:s}))}x.displayName="ButtonSpinner";var b=r(4591),y=r(7872),k=r(581),_=r(9477),Z=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],j=(0,y.G)((function(n,e){var r=s(),c=(0,k.mq)("Button",(0,i.Z)((0,i.Z)({},r),n)),l=(0,_.Lr)(n),m=l.isDisabled,p=void 0===m?null==r?void 0:r.isDisabled:m,h=l.isLoading,g=l.isActive,v=l.children,y=l.leftIcon,j=l.rightIcon,N=l.loadingText,S=l.iconSpacing,A=void 0===S?"0.5rem":S,E=l.type,I=l.spinner,W=l.spinnerPlacement,B=void 0===W?"start":W,L=l.className,C=l.as,O=(0,t.Z)(l,Z),q=(0,o.useMemo)((function(){var n=(0,i.Z)((0,i.Z)({},null==c?void 0:c._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},c),!!r&&{_focus:n})}),[c,r]),T=function(n){var e=(0,o.useState)(!n),r=(0,a.Z)(e,2),t=r[0],i=r[1];return{ref:(0,o.useCallback)((function(n){n&&i("BUTTON"===n.tagName)}),[]),type:t?"button":void 0}}(C),M=T.ref,z=T.type,D={rightIcon:j,leftIcon:y,iconSpacing:A,children:v};return(0,f.jsxs)(u.m.button,(0,i.Z)((0,i.Z)({ref:(0,b.qq)(e,M),as:C,type:null!=E?E:z,"data-active":(0,d.PB)(g),"data-loading":(0,d.PB)(h),__css:q,className:(0,d.cx)("chakra-button",L)},O),{},{disabled:p||h,children:[h&&"start"===B&&(0,f.jsx)(x,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:A,children:I}),h?N||(0,f.jsx)(u.m.span,{opacity:0,children:(0,f.jsx)(w,(0,i.Z)({},D))}):(0,f.jsx)(w,(0,i.Z)({},D)),h&&"end"===B&&(0,f.jsx)(x,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:A,children:I})]}))}));function w(n){var e=n.leftIcon,r=n.rightIcon,t=n.children,i=n.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(p,{marginEnd:i,children:e}),t,r&&(0,f.jsx)(p,{marginStart:i,children:r})]})}j.displayName="Button"},176:function(n,e,r){r.d(e,{k:function(){return s}});var t=r(1413),i=r(4925),a=r(7872),o=r(2952),c=r(3329),l=["direction","align","justify","wrap","basis","grow","shrink"],s=(0,a.G)((function(n,e){var r=n.direction,a=n.align,s=n.justify,u=n.wrap,d=n.basis,f=n.grow,m=n.shrink,p=(0,i.Z)(n,l),h={display:"flex",flexDirection:r,alignItems:a,justifyContent:s,flexWrap:u,flexBasis:d,flexGrow:f,flexShrink:m};return(0,c.jsx)(o.m.div,(0,t.Z)({ref:e,__css:h},p))}));s.displayName="Flex"},751:function(n,e,r){r.d(e,{K:function(){return g}});var t=r(4942),i=r(1413),a=r(4925),o=r(2952),c=r(3329),l=function(n){return(0,c.jsx)(o.m.div,(0,i.Z)((0,i.Z)({className:"chakra-stack__item"},n),{},{__css:(0,i.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},n.__css)}))};l.displayName="StackItem";var s=r(2625),u="& > *:not(style) ~ *:not(style)";var d=r(7872),f=r(6992),m=r(7200),p=r(2791),h=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],g=(0,d.G)((function(n,e){var r=n.isInline,d=n.direction,g=n.align,v=n.justify,x=n.spacing,b=void 0===x?"0.5rem":x,y=n.wrap,k=n.children,_=n.divider,Z=n.className,j=n.shouldWrapChildren,w=(0,a.Z)(n,h),N=r?"row":null!=d?d:"column",S=(0,p.useMemo)((function(){return function(n){var e=n.spacing,r=n.direction,i={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return(0,t.Z)({flexDirection:r},u,(0,s.XQ)(r,(function(n){return i[n]})))}({direction:N,spacing:b})}),[N,b]),A=(0,p.useMemo)((function(){return function(n){var e=n.spacing,r=n.direction,t={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,s.XQ)(r,(function(n){return t[n]}))}}({spacing:b,direction:N})}),[b,N]),E=!!_,I=!j&&!E,W=(0,p.useMemo)((function(){var n=(0,m.W)(k);return I?n:n.map((function(e,r){var t="undefined"!==typeof e.key?e.key:r,i=r+1===n.length,a=j?(0,c.jsx)(l,{children:e},t):e;if(!E)return a;var o=(0,p.cloneElement)(_,{__css:A}),s=i?null:o;return(0,c.jsxs)(p.Fragment,{children:[a,s]},t)}))}),[_,A,E,I,j,k]),B=(0,f.cx)("chakra-stack",Z);return(0,c.jsx)(o.m.div,(0,i.Z)((0,i.Z)({ref:e,display:"flex",alignItems:g,justifyContent:v,flexDirection:S.flexDirection,flexWrap:y,className:B,__css:E?{}:(0,t.Z)({},u,S[u])},w),{},{children:W}))}));g.displayName="Stack"},9229:function(n,e,r){r.d(e,{x:function(){return m}});var t=r(1413),i=r(4925),a=r(7872),o=r(581),c=r(9477),l=r(2952),s=r(6992),u=r(5246),d=r(3329),f=["className","align","decoration","casing"],m=(0,a.G)((function(n,e){var r=(0,o.mq)("Text",n),a=(0,c.Lr)(n),m=(a.className,a.align,a.decoration,a.casing,(0,i.Z)(a,f)),p=(0,u.oA)({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,d.jsx)(l.m.p,(0,t.Z)((0,t.Z)((0,t.Z)({ref:e,className:(0,s.cx)("chakra-text",n.className)},p),m),{},{__css:r}))}));m.displayName="Text"},7200:function(n,e,r){r.d(e,{W:function(){return i}});var t=r(2791);function i(n){return t.Children.toArray(n).filter((function(n){return(0,t.isValidElement)(n)}))}},4591:function(n,e,r){r.d(e,{lq:function(){return a},qq:function(){return o}});var t=r(2791);function i(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(r){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}function a(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(n){e.forEach((function(e){i(e,n)}))}}function o(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(0,t.useMemo)((function(){return a.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=877.fdc7d614.chunk.js.map
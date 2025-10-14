import{r as t}from"./iframe-BiU2suBC.js";import{P as H}from"./index-DF-uitis.js";import{P as $}from"./index-7qFhJqzR.js";import{c as xe}from"./index-BT5_MN2X.js";import{u as R}from"./index-vBP3oNXZ.js";import{u as T}from"./index-BUJQGk3H.js";import{u as ye}from"./index-DrzUb6Kr.js";import{u as Ee}from"./index-ynW3WxUC.js";import{c as Te}from"./index-BdQq_4o_.js";import{c as N}from"./index-Dc_FVRD7.js";import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{a as oe}from"./utils-DgWKjmuI.js";import{S as ne}from"./separator-CDgTfpW6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function Ne(e,r){return t.useReducer((o,a)=>r[o][a]??o,e)}var Q="ScrollArea",[ae]=xe(Q),[Ae,g]=ae(Q),le=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:a="hover",dir:n,scrollHideDelay:l=600,...s}=e,[c,i]=t.useState(null),[h,d]=t.useState(null),[p,m]=t.useState(null),[f,v]=t.useState(null),[_,G]=t.useState(null),[E,j]=t.useState(0),[K,V]=t.useState(0),[W,D]=t.useState(!1),[O,M]=t.useState(!1),b=R(r,C=>i(C)),w=ye(n);return u.jsx(Ae,{scope:o,type:a,dir:w,scrollHideDelay:l,scrollArea:c,viewport:h,onViewportChange:d,content:p,onContentChange:m,scrollbarX:f,onScrollbarXChange:v,scrollbarXEnabled:W,onScrollbarXEnabledChange:D,scrollbarY:_,onScrollbarYChange:G,scrollbarYEnabled:O,onScrollbarYEnabledChange:M,onCornerWidthChange:j,onCornerHeightChange:V,children:u.jsx(H.div,{dir:w,...s,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":K+"px",...e.style}})})});le.displayName=Q;var se="ScrollAreaViewport",ce=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:a,nonce:n,...l}=e,s=g(se,o),c=t.useRef(null),i=R(r,c,s.onViewportChange);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),u.jsx(H.div,{"data-radix-scroll-area-viewport":"",...l,ref:i,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style},children:u.jsx("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});ce.displayName=se;var x="ScrollAreaScrollbar",Z=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(x,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=n,c=e.orientation==="horizontal";return t.useEffect(()=>(c?l(!0):s(!0),()=>{c?l(!1):s(!1)}),[c,l,s]),n.type==="hover"?u.jsx(Ce,{...a,ref:r,forceMount:o}):n.type==="scroll"?u.jsx(Pe,{...a,ref:r,forceMount:o}):n.type==="auto"?u.jsx(ie,{...a,ref:r,forceMount:o}):n.type==="always"?u.jsx(ee,{...a,ref:r}):null});Z.displayName=x;var Ce=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(x,e.__scopeScrollArea),[l,s]=t.useState(!1);return t.useEffect(()=>{const c=n.scrollArea;let i=0;if(c){const h=()=>{window.clearTimeout(i),s(!0)},d=()=>{i=window.setTimeout(()=>s(!1),n.scrollHideDelay)};return c.addEventListener("pointerenter",h),c.addEventListener("pointerleave",d),()=>{window.clearTimeout(i),c.removeEventListener("pointerenter",h),c.removeEventListener("pointerleave",d)}}},[n.scrollArea,n.scrollHideDelay]),u.jsx($,{present:o||l,children:u.jsx(ie,{"data-state":l?"visible":"hidden",...a,ref:r})})}),Pe=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(x,e.__scopeScrollArea),l=e.orientation==="horizontal",s=J(()=>i("SCROLL_END"),100),[c,i]=Ne("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return t.useEffect(()=>{if(c==="idle"){const h=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[c,n.scrollHideDelay,i]),t.useEffect(()=>{const h=n.viewport,d=l?"scrollLeft":"scrollTop";if(h){let p=h[d];const m=()=>{const f=h[d];p!==f&&(i("SCROLL"),s()),p=f};return h.addEventListener("scroll",m),()=>h.removeEventListener("scroll",m)}},[n.viewport,l,i,s]),u.jsx($,{present:o||c!=="hidden",children:u.jsx(ee,{"data-state":c==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:N(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:N(e.onPointerLeave,()=>i("POINTER_LEAVE"))})})}),ie=t.forwardRef((e,r)=>{const o=g(x,e.__scopeScrollArea),{forceMount:a,...n}=e,[l,s]=t.useState(!1),c=e.orientation==="horizontal",i=J(()=>{if(o.viewport){const h=o.viewport.offsetWidth<o.viewport.scrollWidth,d=o.viewport.offsetHeight<o.viewport.scrollHeight;s(c?h:d)}},10);return P(o.viewport,i),P(o.content,i),u.jsx($,{present:a||l,children:u.jsx(ee,{"data-state":l?"visible":"hidden",...n,ref:r})})}),ee=t.forwardRef((e,r)=>{const{orientation:o="vertical",...a}=e,n=g(x,e.__scopeScrollArea),l=t.useRef(null),s=t.useRef(0),[c,i]=t.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=pe(c.viewport,c.content),d={...a,sizes:c,onSizesChange:i,hasThumb:h>0&&h<1,onThumbChange:m=>l.current=m,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:m=>s.current=m};function p(m,f){return Ie(m,s.current,c,f)}return o==="horizontal"?u.jsx(Re,{...d,ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const m=n.viewport.scrollLeft,f=re(m,c,n.dir);l.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:m=>{n.viewport&&(n.viewport.scrollLeft=m)},onDragScroll:m=>{n.viewport&&(n.viewport.scrollLeft=p(m,n.dir))}}):o==="vertical"?u.jsx(_e,{...d,ref:r,onThumbPositionChange:()=>{if(n.viewport&&l.current){const m=n.viewport.scrollTop,f=re(m,c);l.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:m=>{n.viewport&&(n.viewport.scrollTop=m)},onDragScroll:m=>{n.viewport&&(n.viewport.scrollTop=p(m))}}):null}),Re=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,l=g(x,e.__scopeScrollArea),[s,c]=t.useState(),i=t.useRef(null),h=R(r,i,l.onScrollbarXChange);return t.useEffect(()=>{i.current&&c(getComputedStyle(i.current))},[i]),u.jsx(me,{"data-orientation":"horizontal",...n,ref:h,sizes:o,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":q(o)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,p)=>{if(l.viewport){const m=l.viewport.scrollLeft+d.deltaX;e.onWheelScroll(m),be(m,p)&&d.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&a({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:X(s.paddingLeft),paddingEnd:X(s.paddingRight)}})}})}),_e=t.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,l=g(x,e.__scopeScrollArea),[s,c]=t.useState(),i=t.useRef(null),h=R(r,i,l.onScrollbarYChange);return t.useEffect(()=>{i.current&&c(getComputedStyle(i.current))},[i]),u.jsx(me,{"data-orientation":"vertical",...n,ref:h,sizes:o,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":q(o)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,p)=>{if(l.viewport){const m=l.viewport.scrollTop+d.deltaY;e.onWheelScroll(m),be(m,p)&&d.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&a({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:X(s.paddingTop),paddingEnd:X(s.paddingBottom)}})}})}),[De,de]=ae(x),me=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:a,hasThumb:n,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:c,onThumbPositionChange:i,onDragScroll:h,onWheelScroll:d,onResize:p,...m}=e,f=g(x,o),[v,_]=t.useState(null),G=R(r,b=>_(b)),E=t.useRef(null),j=t.useRef(""),K=f.viewport,V=a.content-a.viewport,W=T(d),D=T(i),O=J(p,10);function M(b){if(E.current){const w=b.clientX-E.current.left,C=b.clientY-E.current.top;h({x:w,y:C})}}return t.useEffect(()=>{const b=w=>{const C=w.target;v?.contains(C)&&W(w,V)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[K,v,V,W]),t.useEffect(D,[a,D]),P(v,O),P(f.content,O),u.jsx(De,{scope:o,scrollbar:v,hasThumb:n,onThumbChange:T(l),onThumbPointerUp:T(s),onThumbPositionChange:D,onThumbPointerDown:T(c),children:u.jsx(H.div,{...m,ref:G,style:{position:"absolute",...m.style},onPointerDown:N(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),E.current=v.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),M(b))}),onPointerMove:N(e.onPointerMove,M),onPointerUp:N(e.onPointerUp,b=>{const w=b.target;w.hasPointerCapture(b.pointerId)&&w.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=j.current,f.viewport&&(f.viewport.style.scrollBehavior=""),E.current=null})})})}),Y="ScrollAreaThumb",he=t.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=de(Y,e.__scopeScrollArea);return u.jsx($,{present:o||n.hasThumb,children:u.jsx(Be,{ref:r,...a})})}),Be=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:a,...n}=e,l=g(Y,o),s=de(Y,o),{onThumbPositionChange:c}=s,i=R(r,p=>s.onThumbChange(p)),h=t.useRef(void 0),d=J(()=>{h.current&&(h.current(),h.current=void 0)},100);return t.useEffect(()=>{const p=l.viewport;if(p){const m=()=>{if(d(),!h.current){const f=ze(p,c);h.current=f,c()}};return c(),p.addEventListener("scroll",m),()=>p.removeEventListener("scroll",m)}},[l.viewport,d,c]),u.jsx(H.div,{"data-state":s.hasThumb?"visible":"hidden",...n,ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:N(e.onPointerDownCapture,p=>{const f=p.target.getBoundingClientRect(),v=p.clientX-f.left,_=p.clientY-f.top;s.onThumbPointerDown({x:v,y:_})}),onPointerUp:N(e.onPointerUp,s.onThumbPointerUp)})});he.displayName=Y;var te="ScrollAreaCorner",ue=t.forwardRef((e,r)=>{const o=g(te,e.__scopeScrollArea),a=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&a?u.jsx(ke,{...e,ref:r}):null});ue.displayName=te;var ke=t.forwardRef((e,r)=>{const{__scopeScrollArea:o,...a}=e,n=g(te,o),[l,s]=t.useState(0),[c,i]=t.useState(0),h=!!(l&&c);return P(n.scrollbarX,()=>{const d=n.scrollbarX?.offsetHeight||0;n.onCornerHeightChange(d),i(d)}),P(n.scrollbarY,()=>{const d=n.scrollbarY?.offsetWidth||0;n.onCornerWidthChange(d),s(d)}),h?u.jsx(H.div,{...a,ref:r,style:{width:l,height:c,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function X(e){return e?parseInt(e,10):0}function pe(e,r){const o=e/r;return isNaN(o)?0:o}function q(e){const r=pe(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-o)*r;return Math.max(a,18)}function Ie(e,r,o,a="ltr"){const n=q(o),l=n/2,s=r||l,c=n-s,i=o.scrollbar.paddingStart+s,h=o.scrollbar.size-o.scrollbar.paddingEnd-c,d=o.content-o.viewport,p=a==="ltr"?[0,d]:[d*-1,0];return fe([i,h],p)(e)}function re(e,r,o="ltr"){const a=q(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=r.scrollbar.size-n,s=r.content-r.viewport,c=l-a,i=o==="ltr"?[0,s]:[s*-1,0],h=Te(e,i);return fe([0,s],[0,c])(h)}function fe(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(e[1]-e[0]);return r[0]+a*(o-e[0])}}function be(e,r){return e>0&&e<r}var ze=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},a=0;return(function n(){const l={left:e.scrollLeft,top:e.scrollTop},s=o.left!==l.left,c=o.top!==l.top;(s||c)&&r(),o=l,a=window.requestAnimationFrame(n)})(),()=>window.cancelAnimationFrame(a)};function J(e,r){const o=T(e),a=t.useRef(0);return t.useEffect(()=>()=>window.clearTimeout(a.current),[]),t.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(o,r)},[o,r])}function P(e,r){const o=T(r);Ee(()=>{let a=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(a),n.unobserve(e)}}},[e,o])}var ge=le,Le=ce,He=ue;const S=t.forwardRef(({className:e,children:r,...o},a)=>t.createElement(ge,{ref:a,className:oe("relative overflow-hidden",e),...o},t.createElement(Le,{className:"h-full w-full rounded-[inherit]"},r),t.createElement(A,null),t.createElement(He,null)));S.displayName=ge.displayName;const A=t.forwardRef(({className:e,orientation:r="vertical",...o},a)=>t.createElement(Z,{ref:a,orientation:r,className:oe("flex touch-none transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...o},t.createElement(he,{className:"bg-border relative flex-1 rounded-full"})));A.displayName=Z.displayName;try{S.displayName="ScrollArea",S.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{A.displayName="ScrollBar",A.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:y,waitFor:we,within:ve}=__STORYBOOK_MODULE_TEST__,je=Array.from({length:50}).map((e,r,o)=>`v1.2.0-beta.${o.length-r}`),Ve=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}];function Se(){return t.createElement(S,{className:"h-72 w-48 rounded-md border"},t.createElement("div",{className:"p-4"},t.createElement("h4",{className:"mb-4 text-sm leading-none font-medium"},"Tags"),je.map(e=>t.createElement(t.Fragment,{key:e},t.createElement("div",{className:"text-sm"},e),t.createElement(ne,{className:"my-2"})))))}function We(){return t.createElement(S,{className:"w-96 rounded-md border whitespace-nowrap"},t.createElement("div",{className:"flex w-max space-x-4 p-4"},Ve.map(e=>t.createElement("figure",{key:e.artist,className:"shrink-0"},t.createElement("div",{className:"overflow-hidden rounded-md"},t.createElement("img",{src:e.art,alt:`Photo by ${e.artist}`,className:"aspect-[3/4] h-fit w-fit object-cover"})),t.createElement("figcaption",{className:"text-muted-foreground pt-2 text-xs"},"Photo by"," ",t.createElement("span",{className:"text-foreground font-semibold"},e.artist))))),t.createElement(A,{orientation:"horizontal"}))}const nt={title:"ui/ScrollArea",component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Augments native scroll functionality for custom, cross-browser styling."}}},excludeStories:/.*Demo$/,argTypes:{className:{control:"text",description:"Additional CSS classes to apply"},children:{control:!1,description:"Content to be scrolled"}}},B={render:()=>t.createElement(Se,null)},k={render:()=>t.createElement(S,{className:"h-[200px] w-[350px] rounded-md border p-4"},"Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop. The laughter spread throughout the kingdom, bringing joy and happiness to everyone. Even the grumpy king couldn't help but chuckle at some of the jokes. From that day on, Jokester became a beloved figure in the kingdom, bringing laughter and joy to all.")},I={render:()=>t.createElement(We,null)},z={render:()=>t.createElement(S,{className:"h-[400px] w-[250px] rounded-md border"},t.createElement("div",{className:"p-4"},t.createElement("h4",{className:"mb-4 text-sm leading-none font-medium"},"Notifications"),Array.from({length:20}).map((e,r)=>t.createElement(t.Fragment,{key:r},t.createElement("div",{className:"py-2"},t.createElement("p",{className:"text-sm font-medium"},"Notification ",r+1),t.createElement("p",{className:"text-muted-foreground text-sm"},"This is a sample notification message that might be longer than expected and needs scrolling.")),r<19&&t.createElement(ne,null)))))},L={render:()=>t.createElement(S,{className:"h-[300px] w-[300px] rounded-md border"},t.createElement("div",{className:"p-4"},t.createElement("table",{className:"w-[600px]"},t.createElement("thead",null,t.createElement("tr",{className:"border-b"},t.createElement("th",{className:"p-2 text-left"},"Name"),t.createElement("th",{className:"p-2 text-left"},"Email"),t.createElement("th",{className:"p-2 text-left"},"Status"),t.createElement("th",{className:"p-2 text-left"},"Role"),t.createElement("th",{className:"p-2 text-left"},"Last Active"))),t.createElement("tbody",null,Array.from({length:30}).map((e,r)=>t.createElement("tr",{key:r,className:"border-b"},t.createElement("td",{className:"p-2"},"User ",r+1),t.createElement("td",{className:"p-2"},"user",r+1,"@example.com"),t.createElement("td",{className:"p-2"},"Active"),t.createElement("td",{className:"p-2"},"Member"),t.createElement("td",{className:"p-2"},"2024-01-",r%28+1)))))),t.createElement(A,{orientation:"horizontal"}))},F={name:"when content overflows, should be scrollable",tags:["!dev","!autodocs"],render:()=>t.createElement(Se,null),play:async({canvasElement:e})=>{const r=ve(e),o=await r.findByText(/v1\.2\.0-beta\.50/i);await y(o).toBeInTheDocument();const a=e.querySelector("[data-radix-scroll-area-viewport]");a&&(await y(a.scrollHeight).toBeGreaterThan(a.clientHeight),a.scrollTop=a.scrollHeight,await we(async()=>{const n=await r.findByText(/v1\.2\.0-beta\.1$/);await y(n).toBeInTheDocument()}))}},U={name:"when horizontal content overflows, should scroll horizontally",tags:["!dev","!autodocs"],render:()=>{const e=Array.from({length:10}).map((r,o)=>({id:o+1,title:`Item ${o+1}`,content:`Content for item ${o+1}`}));return t.createElement(S,{className:"w-[400px] rounded-md border whitespace-nowrap","data-testid":"scroll-area"},t.createElement("div",{className:"flex w-max space-x-4 p-4","data-testid":"scroll-content"},e.map(r=>t.createElement("div",{key:r.id,className:"w-[200px] shrink-0 rounded-md border p-4","data-testid":`item-${r.id}`},t.createElement("h4",{className:"mb-2 text-sm font-semibold"},r.title),t.createElement("p",{className:"text-muted-foreground text-sm"},r.content)))),t.createElement(A,{orientation:"horizontal","data-testid":"horizontal-scrollbar"}))},play:async({canvasElement:e})=>{const r=ve(e),o=r.getByTestId("scroll-area");await y(o).toBeInTheDocument();const a=r.getByTestId("horizontal-scrollbar");await y(a).toBeInTheDocument();const n=r.getByTestId("item-1");await y(n).toBeInTheDocument(),await y(n).toHaveTextContent("Item 1");const l=e.querySelector("[data-radix-scroll-area-viewport]");l&&(await y(l.scrollWidth).toBeGreaterThan(l.clientWidth),l.scrollLeft=l.scrollWidth/2,await we(async()=>{const s=r.getByTestId("item-5");await y(s).toBeInTheDocument()}))}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollAreaDemo />
}`,...B.parameters?.docs?.source},description:{story:"The default form of the scroll area with vertical scrolling.",...B.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop. The laughter
      spread throughout the kingdom, bringing joy and happiness to everyone.
      Even the grumpy king couldn't help but chuckle at some of the jokes. From
      that day on, Jokester became a beloved figure in the kingdom, bringing
      laughter and joy to all.
    </ScrollArea>
}`,...k.parameters?.docs?.source},description:{story:"Basic usage with simple text content.",...k.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollAreaHorizontalDemo />
}`,...I.parameters?.docs?.source},description:{story:"Horizontal scrolling with images.",...I.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[400px] w-[250px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Notifications</h4>
        {Array.from({
        length: 20
      }).map((_, i) => <React.Fragment key={i}>
            <div className="py-2">
              <p className="text-sm font-medium">Notification {i + 1}</p>
              <p className="text-muted-foreground text-sm">
                This is a sample notification message that might be longer than
                expected and needs scrolling.
              </p>
            </div>
            {i < 19 && <Separator />}
          </React.Fragment>)}
      </div>
    </ScrollArea>
}`,...z.parameters?.docs?.source},description:{story:"Vertical scrolling with custom height.",...z.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-[300px] w-[300px] rounded-md border">
      <div className="p-4">
        <table className="w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({
            length: 30
          }).map((_, i) => <tr key={i} className="border-b">
                <td className="p-2">User {i + 1}</td>
                <td className="p-2">user{i + 1}@example.com</td>
                <td className="p-2">Active</td>
                <td className="p-2">Member</td>
                <td className="p-2">2024-01-{i % 28 + 1}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...L.parameters?.docs?.source},description:{story:"Both horizontal and vertical scrolling.",...L.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "when content overflows, should be scrollable",
  tags: ["!dev", "!autodocs"],
  render: () => <ScrollAreaDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Scroll Area가 콘텐츠가 넘칠 때 스크롤 가능한지 확인
    // 첫 번째 태그 확인 (v1.2.0-beta.50)
    const firstTag = await canvas.findByText(/v1\\.2\\.0-beta\\.50/i);
    await expect(firstTag).toBeInTheDocument();

    // 스크롤 영역을 찾아서 스크롤 다운
    const scrollViewport = canvasElement.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollViewport) {
      // 스크롤 가능 여부 확인 (scrollHeight > clientHeight)
      await expect(scrollViewport.scrollHeight).toBeGreaterThan(scrollViewport.clientHeight);

      // 스크롤 다운
      scrollViewport.scrollTop = scrollViewport.scrollHeight;

      // 스크롤 후 마지막 태그가 보이는지 확인
      await waitFor(async () => {
        const lastTagVisible = await canvas.findByText(/v1\\.2\\.0-beta\\.1$/);
        await expect(lastTagVisible).toBeInTheDocument();
      });
    }
  }
}`,...F.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "when horizontal content overflows, should scroll horizontally",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const items = Array.from({
      length: 10
    }).map((_, i) => ({
      id: i + 1,
      title: \`Item \${i + 1}\`,
      content: \`Content for item \${i + 1}\`
    }));
    return <ScrollArea className="w-[400px] rounded-md border whitespace-nowrap" data-testid="scroll-area">
        <div className="flex w-max space-x-4 p-4" data-testid="scroll-content">
          {items.map(item => <div key={item.id} className="w-[200px] shrink-0 rounded-md border p-4" data-testid={\`item-\${item.id}\`}>
              <h4 className="mb-2 text-sm font-semibold">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.content}</p>
            </div>)}
        </div>
        <ScrollBar orientation="horizontal" data-testid="horizontal-scrollbar" />
      </ScrollArea>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Scroll Area가 수평 스크롤을 지원하고 horizontal ScrollBar가 표시되는지 확인

    // Scroll Area 존재 확인
    const scrollArea = canvas.getByTestId("scroll-area");
    await expect(scrollArea).toBeInTheDocument();

    // Horizontal ScrollBar 확인
    const horizontalScrollbar = canvas.getByTestId("horizontal-scrollbar");
    await expect(horizontalScrollbar).toBeInTheDocument();

    // 첫 번째 아이템 확인
    const firstItem = canvas.getByTestId("item-1");
    await expect(firstItem).toBeInTheDocument();
    await expect(firstItem).toHaveTextContent("Item 1");

    // 스크롤 viewport 찾기
    const scrollViewport = canvasElement.querySelector("[data-radix-scroll-area-viewport]");
    if (scrollViewport) {
      // 수평 스크롤 가능 여부 확인 (scrollWidth > clientWidth)
      await expect(scrollViewport.scrollWidth).toBeGreaterThan(scrollViewport.clientWidth);

      // 수평 스크롤 (오른쪽으로)
      scrollViewport.scrollLeft = scrollViewport.scrollWidth / 2;

      // 스크롤 후 중간 아이템 확인
      await waitFor(async () => {
        const middleItem = canvas.getByTestId("item-5");
        await expect(middleItem).toBeInTheDocument();
      });
    }
  }
}`,...U.parameters?.docs?.source}}};const at=["ScrollAreaDemo","ScrollAreaHorizontalDemo","Default","BasicUsage","HorizontalScrolling","CustomHeight","BothDirections","ShouldScroll","ShouldScrollHorizontally"];export{k as BasicUsage,L as BothDirections,z as CustomHeight,B as Default,I as HorizontalScrolling,Se as ScrollAreaDemo,We as ScrollAreaHorizontalDemo,F as ShouldScroll,U as ShouldScrollHorizontally,at as __namedExportsOrder,nt as default};

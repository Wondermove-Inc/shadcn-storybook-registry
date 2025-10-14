import{r,e as n}from"./iframe-BiU2suBC.js";import{c as N}from"./index-Dc_FVRD7.js";import{c as le}from"./index-BT5_MN2X.js";import{P as me}from"./index-DF-uitis.js";import{c as $,R as Ce,S as pe,A as xe,P as ge,C as fe,I as he,b as ve,d as Me,a as De,e as _e,f as be,g as ye,L as Ee,h as we,G as Ie,i as Re}from"./index-aDS8GPlc.js";import{u as ke}from"./index-BUJQGk3H.js";import{u as Ae}from"./index-CpP8DfwQ.js";import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{a as v}from"./utils-DgWKjmuI.js";import{C as Be}from"./chevron-right-C1Com0QT.js";import{C as Ne}from"./check-DwuV1CBk.js";import{C as Te}from"./circle-_0ReNRZy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./index-BEeKTTV4.js";import"./index-DrzUb6Kr.js";import"./index-BX5uZP6s.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-WGaa5q18.js";import"./createLucideIcon-ng3sinjr.js";var L="ContextMenu",[Se]=le(L,[$]),d=$(),[Fe,q]=Se(L),U=e=>{const{__scopeContextMenu:t,children:a,onOpenChange:o,dir:u,modal:x=!0}=e,[l,c]=r.useState(!1),k=d(t),A=ke(o),p=r.useCallback(B=>{c(B),A(B)},[A]);return i.jsx(Fe,{scope:t,open:l,onOpenChange:p,modal:x,children:i.jsx(Ce,{...k,dir:u,open:l,onOpenChange:p,modal:x,children:a})})};U.displayName=L;var V="ContextMenuTrigger",H=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,disabled:o=!1,...u}=e,x=q(V,a),l=d(a),c=r.useRef({x:0,y:0}),k=r.useRef({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...c.current})}),A=r.useRef(0),p=r.useCallback(()=>window.clearTimeout(A.current),[]),B=D=>{c.current={x:D.clientX,y:D.clientY},x.onOpenChange(!0)};return r.useEffect(()=>p,[p]),r.useEffect(()=>void(o&&p()),[o,p]),i.jsxs(i.Fragment,{children:[i.jsx(xe,{...l,virtualRef:k}),i.jsx(me.span,{"data-state":x.open?"open":"closed","data-disabled":o?"":void 0,...u,ref:t,style:{WebkitTouchCallout:"none",...e.style},onContextMenu:o?e.onContextMenu:N(e.onContextMenu,D=>{p(),B(D),D.preventDefault()}),onPointerDown:o?e.onPointerDown:N(e.onPointerDown,F(D=>{p(),A.current=window.setTimeout(()=>B(D),700)})),onPointerMove:o?e.onPointerMove:N(e.onPointerMove,F(p)),onPointerCancel:o?e.onPointerCancel:N(e.onPointerCancel,F(p)),onPointerUp:o?e.onPointerUp:N(e.onPointerUp,F(p))})]})});H.displayName=V;var Pe="ContextMenuPortal",W=e=>{const{__scopeContextMenu:t,...a}=e,o=d(t);return i.jsx(ge,{...o,...a})};W.displayName=Pe;var X="ContextMenuContent",K=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=q(X,a),x=d(a),l=r.useRef(!1);return i.jsx(fe,{...x,...o,ref:t,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:c=>{e.onCloseAutoFocus?.(c),!c.defaultPrevented&&l.current&&c.preventDefault(),l.current=!1},onInteractOutside:c=>{e.onInteractOutside?.(c),!c.defaultPrevented&&!u.modal&&(l.current=!0)},style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});K.displayName=X;var Oe="ContextMenuGroup",Y=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(Ie,{...u,...o,ref:t})});Y.displayName=Oe;var Ge="ContextMenuLabel",J=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(Ee,{...u,...o,ref:t})});J.displayName=Ge;var je="ContextMenuItem",Q=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(he,{...u,...o,ref:t})});Q.displayName=je;var Le="ContextMenuCheckboxItem",Z=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(_e,{...u,...o,ref:t})});Z.displayName=Le;var ze="ContextMenuRadioGroup",ee=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(ye,{...u,...o,ref:t})});ee.displayName=ze;var $e="ContextMenuRadioItem",te=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(we,{...u,...o,ref:t})});te.displayName=$e;var qe="ContextMenuItemIndicator",ne=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(be,{...u,...o,ref:t})});ne.displayName=qe;var Ue="ContextMenuSeparator",ae=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(De,{...u,...o,ref:t})});ae.displayName=Ue;var Ve="ContextMenuArrow",He=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(Re,{...u,...o,ref:t})});He.displayName=Ve;var oe="ContextMenuSub",re=e=>{const{__scopeContextMenu:t,children:a,onOpenChange:o,open:u,defaultOpen:x}=e,l=d(t),[c,k]=Ae({prop:u,defaultProp:x??!1,onChange:o,caller:oe});return i.jsx(pe,{...l,open:c,onOpenChange:k,children:a})};re.displayName=oe;var We="ContextMenuSubTrigger",ue=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(ve,{...u,...o,ref:t})});ue.displayName=We;var Xe="ContextMenuSubContent",se=r.forwardRef((e,t)=>{const{__scopeContextMenu:a,...o}=e,u=d(a);return i.jsx(Me,{...u,...o,ref:t,style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});se.displayName=Xe;function F(e){return t=>t.pointerType!=="mouse"?e(t):void 0}var Ke=U,Ye=H,ie=W,Je=K,Qe=Y,Ze=J,et=Q,tt=Z,nt=ee,at=te,ce=ne,ot=ae,rt=re,ut=ue,st=se;const _=Ke,b=r.forwardRef((e,t)=>r.createElement(Ye,{ref:t,"data-slot":"context-menu-trigger",...e}));b.displayName="ContextMenuTrigger";const j=r.forwardRef((e,t)=>r.createElement(Qe,{ref:t,"data-slot":"context-menu-group",...e}));j.displayName="ContextMenuGroup";const z=ie,S=rt,y=r.forwardRef((e,t)=>r.createElement(nt,{ref:t,"data-slot":"context-menu-radio-group",...e}));y.displayName="ContextMenuRadioGroup";const E=r.forwardRef(({className:e,inset:t,children:a,...o},u)=>r.createElement(ut,{ref:u,"data-slot":"context-menu-sub-trigger","data-inset":t,className:v("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...o},a,r.createElement(Be,{className:"ml-auto"})));E.displayName="ContextMenuSubTrigger";const w=r.forwardRef(({className:e,...t},a)=>r.createElement(st,{ref:a,"data-slot":"context-menu-sub-content",className:v("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",e),...t}));w.displayName="ContextMenuSubContent";const I=r.forwardRef(({className:e,...t},a)=>r.createElement(ie,null,r.createElement(Je,{ref:a,"data-slot":"context-menu-content",className:v("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",e),...t})));I.displayName="ContextMenuContent";const s=r.forwardRef(({className:e,inset:t,variant:a="default",...o},u)=>r.createElement(et,{ref:u,"data-slot":"context-menu-item","data-inset":t,"data-variant":a,className:v("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...o}));s.displayName="ContextMenuItem";const f=r.forwardRef(({className:e,children:t,checked:a,...o},u)=>r.createElement(tt,{ref:u,"data-slot":"context-menu-checkbox-item",className:v("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),checked:a,...o},r.createElement("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},r.createElement(ce,null,r.createElement(Ne,{className:"size-4"}))),t));f.displayName="ContextMenuCheckboxItem";const h=r.forwardRef(({className:e,children:t,...a},o)=>r.createElement(at,{ref:o,"data-slot":"context-menu-radio-item",className:v("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...a},r.createElement("span",{className:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},r.createElement(ce,null,r.createElement(Te,{className:"size-2 fill-current"}))),t));h.displayName="ContextMenuRadioItem";const R=r.forwardRef(({className:e,inset:t,...a},o)=>r.createElement(Ze,{ref:o,"data-slot":"context-menu-label","data-inset":t,className:v("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",e),...a}));R.displayName="ContextMenuLabel";const C=r.forwardRef(({className:e,...t},a)=>r.createElement(ot,{ref:a,"data-slot":"context-menu-separator",className:v("bg-border -mx-1 my-1 h-px",e),...t}));C.displayName="ContextMenuSeparator";const g=r.forwardRef(({className:e,...t},a)=>r.createElement("span",{ref:a,"data-slot":"context-menu-shortcut",className:v("text-muted-foreground ml-auto text-xs tracking-widest",e),...t}));g.displayName="ContextMenuShortcut";try{_.displayName="ContextMenu",_.__docgenInfo={description:`🎯 목적: ContextMenu Root 컴포넌트
📝 주의사항: Radix UI ContextMenu.Root primitive는 ref를 지원하지 않음`,displayName:"ContextMenu",props:{}}}catch{}try{f.displayName="ContextMenuCheckboxItem",f.__docgenInfo={description:`🎯 목적: ContextMenuCheckboxItem 컴포넌트에 forwardRef 적용
📝 주의사항: CheckIcon indicator 포함`,displayName:"ContextMenuCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{I.displayName="ContextMenuContent",I.__docgenInfo={description:`🎯 목적: ContextMenuContent 컴포넌트에 forwardRef 적용
📝 주의사항: Portal 내부에서 렌더링`,displayName:"ContextMenuContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{j.displayName="ContextMenuGroup",j.__docgenInfo={description:"🎯 목적: ContextMenuGroup 컴포넌트에 forwardRef 적용",displayName:"ContextMenuGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{s.displayName="ContextMenuItem",s.__docgenInfo={description:`🎯 목적: ContextMenuItem 컴포넌트에 forwardRef 적용
📝 주의사항: inset prop, variant prop (default/destructive)`,displayName:"ContextMenuItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"destructive"'}]}}}}}catch{}try{R.displayName="ContextMenuLabel",R.__docgenInfo={description:`🎯 목적: ContextMenuLabel 컴포넌트에 forwardRef 적용
📝 주의사항: inset prop 지원`,displayName:"ContextMenuLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{z.displayName="ContextMenuPortal",z.__docgenInfo={description:`🎯 목적: ContextMenuPortal 컴포넌트
📝 주의사항: Portal은 ref를 지원하지 않음`,displayName:"ContextMenuPortal",props:{}}}catch{}try{y.displayName="ContextMenuRadioGroup",y.__docgenInfo={description:"🎯 목적: ContextMenuRadioGroup 컴포넌트에 forwardRef 적용",displayName:"ContextMenuRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{h.displayName="ContextMenuRadioItem",h.__docgenInfo={description:`🎯 목적: ContextMenuRadioItem 컴포넌트에 forwardRef 적용
📝 주의사항: CircleIcon indicator 포함`,displayName:"ContextMenuRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{C.displayName="ContextMenuSeparator",C.__docgenInfo={description:"🎯 목적: ContextMenuSeparator 컴포넌트에 forwardRef 적용",displayName:"ContextMenuSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{g.displayName="ContextMenuShortcut",g.__docgenInfo={description:`🎯 목적: ContextMenuShortcut 컴포넌트에 forwardRef 적용
📝 주의사항: HTML span 요소 사용`,displayName:"ContextMenuShortcut",props:{}}}catch{}try{S.displayName="ContextMenuSub",S.__docgenInfo={description:`🎯 목적: ContextMenuSub 컴포넌트
📝 주의사항: Sub는 ref를 지원하지 않음`,displayName:"ContextMenuSub",props:{}}}catch{}try{w.displayName="ContextMenuSubContent",w.__docgenInfo={description:"🎯 목적: ContextMenuSubContent 컴포넌트에 forwardRef 적용",displayName:"ContextMenuSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{E.displayName="ContextMenuSubTrigger",E.__docgenInfo={description:`🎯 목적: ContextMenuSubTrigger 컴포넌트에 forwardRef 적용
📝 주의사항: inset prop, ChevronRightIcon 포함`,displayName:"ContextMenuSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{b.displayName="ContextMenuTrigger",b.__docgenInfo={description:"🎯 목적: ContextMenuTrigger 컴포넌트에 forwardRef 적용",displayName:"ContextMenuTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:m,userEvent:M,waitFor:G,within:de}=__STORYBOOK_MODULE_TEST__,Pt={title:"ui/ContextMenu",component:_,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Displays a menu to the user — such as a set of actions or functions —
triggered by a button.`}}},excludeStories:/.*Demo$/,argTypes:{modal:{control:"boolean",description:"Whether the context menu should be modal (blocking interaction with the rest of the page)"}},args:{modal:!0},render:e=>n.createElement(_,{modal:e.modal},n.createElement(b,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"},"Right click here"),n.createElement(I,{className:"w-52"},n.createElement(s,{inset:!0},"Back",n.createElement(g,null,"⌘[")),n.createElement(s,{inset:!0,disabled:!0},"Forward",n.createElement(g,null,"⌘]")),n.createElement(s,{inset:!0},"Reload",n.createElement(g,null,"⌘R")),n.createElement(S,null,n.createElement(E,{inset:!0},"More Tools"),n.createElement(w,{className:"w-44"},n.createElement(s,null,"Save Page..."),n.createElement(s,null,"Create Shortcut..."),n.createElement(s,null,"Name Window..."),n.createElement(C,null),n.createElement(s,null,"Developer Tools"),n.createElement(C,null),n.createElement(s,{variant:"destructive"},"Delete"))),n.createElement(C,null),n.createElement(f,{checked:!0},"Show Bookmarks"),n.createElement(f,null,"Show Full URLs"),n.createElement(C,null),n.createElement(y,{value:"pedro"},n.createElement(R,{inset:!0},"People"),n.createElement(h,{value:"pedro"},"Pedro Duarte"),n.createElement(h,{value:"colm"},"Colm Tuite"))))},T={},P={name:"when right click on trigger, should open context menu",tags:["!dev","!autodocs"],play:async({canvasElement:e})=>{const t=de(e),a=t.getByText(/right click here/i);await m(a).toBeInTheDocument(),await M.pointer([{target:a},{keys:"[MouseRight]",target:a}]),await G(async()=>{const u=await t.findByRole("menuitem",{name:/back/i});await m(u).toBeInTheDocument()});const o=t.getByRole("menuitem",{name:/reload/i});await m(o).toBeInTheDocument(),await M.click(o)}},O={name:"when hovering submenu trigger, should open submenu and toggle checkbox items",tags:["!dev","!autodocs"],render:()=>n.createElement(_,null,n.createElement(b,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm","data-testid":"context-trigger"},"Right click here"),n.createElement(I,{className:"w-52"},n.createElement(s,{"data-testid":"back-item"},"Back"),n.createElement(S,null,n.createElement(E,{"data-testid":"submenu-trigger"},"More Tools"),n.createElement(w,{className:"w-44"},n.createElement(s,{"data-testid":"save-page-item"},"Save Page..."),n.createElement(s,{"data-testid":"developer-tools-item"},"Developer Tools"))),n.createElement(C,null),n.createElement(f,{"data-testid":"bookmarks-checkbox",defaultChecked:!0},"Show Bookmarks"),n.createElement(f,{"data-testid":"urls-checkbox"},"Show Full URLs"),n.createElement(C,null),n.createElement(y,{value:"pedro"},n.createElement(R,null,"People"),n.createElement(h,{value:"pedro","data-testid":"pedro-radio"},"Pedro Duarte"),n.createElement(h,{value:"colm","data-testid":"colm-radio"},"Colm Tuite")))),play:async({canvasElement:e})=>{const t=de(e),a=t.getByTestId("context-trigger");await m(a).toBeInTheDocument(),await M.pointer([{target:a},{keys:"[MouseRight]",target:a}]),await G(async()=>{const c=await t.findByTestId("back-item");await m(c).toBeInTheDocument()});const o=t.getByTestId("submenu-trigger");await m(o).toBeInTheDocument(),await M.hover(o),await G(async()=>{const c=await t.findByTestId("save-page-item");await m(c).toBeInTheDocument()}),await M.unhover(o);const u=t.getByTestId("bookmarks-checkbox");await m(u).toBeInTheDocument(),await m(u).toHaveAttribute("data-state","checked"),await M.click(u),await m(u).toHaveAttribute("data-state","unchecked"),await M.pointer([{target:a},{keys:"[MouseRight]",target:a}]),await G(async()=>{const c=await t.findByTestId("pedro-radio");await m(c).toBeInTheDocument()});const x=t.getByTestId("pedro-radio");await m(x).toHaveAttribute("data-state","checked");const l=t.getByTestId("colm-radio");await M.click(l),await m(l).toHaveAttribute("data-state","checked")}};function Ot(){return n.createElement(_,null,n.createElement(b,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"},"Right click here"),n.createElement(I,{className:"w-52"},n.createElement(s,{inset:!0},"Back",n.createElement(g,null,"⌘[")),n.createElement(s,{inset:!0,disabled:!0},"Forward",n.createElement(g,null,"⌘]")),n.createElement(s,{inset:!0},"Reload",n.createElement(g,null,"⌘R")),n.createElement(S,null,n.createElement(E,{inset:!0},"More Tools"),n.createElement(w,{className:"w-44"},n.createElement(s,null,"Save Page..."),n.createElement(s,null,"Create Shortcut..."),n.createElement(s,null,"Name Window..."),n.createElement(C,null),n.createElement(s,null,"Developer Tools"),n.createElement(C,null),n.createElement(s,{variant:"destructive"},"Delete"))),n.createElement(C,null),n.createElement(f,{checked:!0},"Show Bookmarks"),n.createElement(f,null,"Show Full URLs"),n.createElement(C,null),n.createElement(y,{value:"pedro"},n.createElement(R,{inset:!0},"People"),n.createElement(h,{value:"pedro"},"Pedro Duarte"),n.createElement(h,{value:"colm"},"Colm Tuite"))))}T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"{}",...T.parameters?.docs?.source},description:{story:"The default form of the context menu with all features.",...T.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "when right click on trigger, should open context menu",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Context Menu가 우클릭으로 열리고, 메뉴 아이템 선택이 가능한지 확인
    const trigger = canvas.getByText(/right click here/i);
    await expect(trigger).toBeInTheDocument();

    // 트리거에 우클릭하여 컨텍스트 메뉴 열기
    await userEvent.pointer([{
      target: trigger
    }, {
      keys: "[MouseRight]",
      target: trigger
    }]);

    // 메뉴가 열렸는지 확인 (메뉴 아이템 확인)
    await waitFor(async () => {
      const backItem = await canvas.findByRole("menuitem", {
        name: /back/i
      });
      await expect(backItem).toBeInTheDocument();
    });

    // 다른 메뉴 아이템들도 확인
    const reloadItem = canvas.getByRole("menuitem", {
      name: /reload/i
    });
    await expect(reloadItem).toBeInTheDocument();

    // 메뉴 아이템 클릭
    await userEvent.click(reloadItem);
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "when hovering submenu trigger, should open submenu and toggle checkbox items",
  tags: ["!dev", "!autodocs"],
  render: () => <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm" data-testid="context-trigger">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem data-testid="back-item">Back</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger data-testid="submenu-trigger">
            More Tools
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem data-testid="save-page-item">
              Save Page...
            </ContextMenuItem>
            <ContextMenuItem data-testid="developer-tools-item">
              Developer Tools
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem data-testid="bookmarks-checkbox" defaultChecked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem data-testid="urls-checkbox">
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro" data-testid="pedro-radio">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm" data-testid="colm-radio">
            Colm Tuite
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Context Menu의 서브메뉴 열기, 체크박스/라디오 아이템 토글 기능 확인

    // 트리거 우클릭하여 컨텍스트 메뉴 열기
    const trigger = canvas.getByTestId("context-trigger");
    await expect(trigger).toBeInTheDocument();
    await userEvent.pointer([{
      target: trigger
    }, {
      keys: "[MouseRight]",
      target: trigger
    }]);

    // 메뉴가 열렸는지 확인
    await waitFor(async () => {
      const backItem = await canvas.findByTestId("back-item");
      await expect(backItem).toBeInTheDocument();
    });

    // 서브메뉴 트리거 확인
    const submenuTrigger = canvas.getByTestId("submenu-trigger");
    await expect(submenuTrigger).toBeInTheDocument();

    // 서브메뉴 트리거에 호버하여 서브메뉴 열기
    await userEvent.hover(submenuTrigger);

    // 서브메뉴 아이템이 나타나는지 확인
    await waitFor(async () => {
      const savePageItem = await canvas.findByTestId("save-page-item");
      await expect(savePageItem).toBeInTheDocument();
    });

    // 서브메뉴에서 나가기
    await userEvent.unhover(submenuTrigger);

    // 체크박스 아이템 확인
    const bookmarksCheckbox = canvas.getByTestId("bookmarks-checkbox");
    await expect(bookmarksCheckbox).toBeInTheDocument();
    await expect(bookmarksCheckbox).toHaveAttribute("data-state", "checked");

    // 체크박스 클릭하여 토글 (checked → unchecked)
    await userEvent.click(bookmarksCheckbox);
    await expect(bookmarksCheckbox).toHaveAttribute("data-state", "unchecked");

    // 메뉴를 다시 열어서 라디오 아이템 테스트
    await userEvent.pointer([{
      target: trigger
    }, {
      keys: "[MouseRight]",
      target: trigger
    }]);
    await waitFor(async () => {
      const pedroRadio = await canvas.findByTestId("pedro-radio");
      await expect(pedroRadio).toBeInTheDocument();
    });

    // Pedro가 선택되어 있는지 확인
    const pedroRadio = canvas.getByTestId("pedro-radio");
    await expect(pedroRadio).toHaveAttribute("data-state", "checked");

    // Colm 선택
    const colmRadio = canvas.getByTestId("colm-radio");
    await userEvent.click(colmRadio);
    await expect(colmRadio).toHaveAttribute("data-state", "checked");
  }
}`,...O.parameters?.docs?.source}}};const Gt=["Default","ShouldOpenContextMenu","ShouldOpenSubmenuAndToggleItems","ContextMenuDemo"];export{Ot as ContextMenuDemo,T as Default,P as ShouldOpenContextMenu,O as ShouldOpenSubmenuAndToggleItems,Gt as __namedExportsOrder,Pt as default};

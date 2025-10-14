import{r as e}from"./iframe-BiU2suBC.js";import{C as pe,a as me,b as be}from"./collapsible-BBlLZhT-.js";import{D as X,a as J,b as Q,e as E}from"./dropdown-menu-CLAbh3UN.js";import{S as W}from"./index-vBP3oNXZ.js";import{c as Ae}from"./index-dSc6CJZX.js";import{B as Be}from"./button-o25yRkrR.js";import{I as we}from"./input-BRT9-IAl.js";import{S as Me}from"./separator-CDgTfpW6.js";import{S as ve,b as ye,c as _e,d as xe,e as Ne}from"./sheet-CzHa_wgz.js";import{S as ce}from"./skeleton-Bup3GAzJ.js";import{a as Re,b as Ie,c as Fe,T as Ge}from"./tooltip-CSn3Cxo6.js";import{a as i}from"./utils-DgWKjmuI.js";import{c as re}from"./createLucideIcon-ng3sinjr.js";import{C as ke}from"./calendar-BJ6ZmEyF.js";import{S as Te}from"./search-Da9byjLw.js";import{S as De}from"./settings-Bal7ml-7.js";import{C as O}from"./chevron-down-DnTtteVn.js";import{E as Le}from"./ellipsis-B5OVhsnz.js";import{C as He}from"./chevron-right-C1Com0QT.js";import{P as Pe}from"./plus-ZOuFRyTD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUO4hgFb.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-7qFhJqzR.js";import"./index-Ds7joiVY.js";import"./check-DwuV1CBk.js";import"./circle-_0ReNRZy.js";import"./index-aDS8GPlc.js";import"./index-BEeKTTV4.js";import"./index-DrzUb6Kr.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-WGaa5q18.js";import"./index-BZmy0mfy.js";import"./x-CCE6G7Ad.js";import"./index-B3LxitfY.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],fe=re("house",Oe);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],qe=re("inbox",ze);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],We=re("panel-left",Ve);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Se=re("user-round",Ue),ie=768;function Ke(){const[a,n]=e.useState(void 0);return e.useEffect(()=>{const t=window.matchMedia(`(max-width: ${ie-1}px)`),r=()=>{n(window.innerWidth<ie)};return t.addEventListener("change",r),n(window.innerWidth<ie),()=>t.removeEventListener("change",r)},[]),!!a}const $e="sidebar_state",je=3600*24*7,Ye="16rem",Xe="18rem",Je="3rem",Qe="b",Ee=e.createContext(null);function ue(){const a=e.useContext(Ee);if(!a)throw new Error("useSidebar must be used within a SidebarProvider.");return a}const C=e.forwardRef(({defaultOpen:a=!0,open:n,onOpenChange:t,className:r,style:u,children:s,...h},_)=>{const A=Ke(),[M,B]=e.useState(!1),[U,ge]=e.useState(a),x=n??U,K=e.useCallback(S=>{const w=typeof S=="function"?S(x):S;t?t(w):ge(w),document.cookie=`${$e}=${w}; path=/; max-age=${je}`},[t,x]),$=e.useCallback(()=>A?B(S=>!S):K(S=>!S),[A,K,B]);e.useEffect(()=>{const S=w=>{w.key===Qe&&(w.metaKey||w.ctrlKey)&&(w.preventDefault(),$())};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[$]);const se=x?"expanded":"collapsed",he=e.useMemo(()=>({state:se,open:x,setOpen:K,isMobile:A,openMobile:M,setOpenMobile:B,toggleSidebar:$}),[se,x,K,A,M,B,$]);return e.createElement(Ee.Provider,{value:he},e.createElement(Re,{delayDuration:0},e.createElement("div",{ref:_,"data-slot":"sidebar-wrapper",style:{"--sidebar-width":Ye,"--sidebar-width-icon":Je,...u},className:i("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",r),...h},s)))});C.displayName="SidebarProvider";const c=e.forwardRef(({side:a="left",variant:n="sidebar",collapsible:t="offcanvas",className:r,children:u,...s},h)=>{const{isMobile:_,state:A,openMobile:M,setOpenMobile:B}=ue();return t==="none"?e.createElement("div",{ref:h,"data-slot":"sidebar",className:i("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",r),...s},u):_?e.createElement(ve,{open:M,onOpenChange:B,...s},e.createElement(ye,{"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:{"--sidebar-width":Xe},side:a},e.createElement(_e,{className:"sr-only"},e.createElement(xe,null,"Sidebar"),e.createElement(Ne,null,"Displays the mobile sidebar.")),e.createElement("div",{ref:h,className:"flex h-full w-full flex-col"},u))):e.createElement("div",{ref:h,className:"group peer text-sidebar-foreground hidden md:block","data-state":A,"data-collapsible":A==="collapsed"?t:"","data-variant":n,"data-side":a,"data-slot":"sidebar"},e.createElement("div",{"data-slot":"sidebar-gap",className:i("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",n==="floating"||n==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)")}),e.createElement("div",{"data-slot":"sidebar-container",className:i("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",a==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",n==="floating"||n==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",r),...s},e.createElement("div",{"data-sidebar":"sidebar","data-slot":"sidebar-inner",className:"bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"},u)))});c.displayName="Sidebar";const p=e.forwardRef(({className:a,onClick:n,...t},r)=>{const{toggleSidebar:u}=ue();return e.createElement(Be,{ref:r,"data-sidebar":"trigger","data-slot":"sidebar-trigger",variant:"ghost",size:"icon",className:i("size-7",a),onClick:s=>{n?.(s),u()},...t},e.createElement(We,null),e.createElement("span",{className:"sr-only"},"Toggle Sidebar"))});p.displayName="SidebarTrigger";const z=e.forwardRef(({className:a,...n},t)=>{const{toggleSidebar:r}=ue();return e.createElement("button",{ref:t,"data-sidebar":"rail","data-slot":"sidebar-rail","aria-label":"Toggle Sidebar",tabIndex:-1,onClick:r,title:"Toggle Sidebar",className:i("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex","in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",a),...n})});z.displayName="SidebarRail";const Z=e.forwardRef(({className:a,...n},t)=>e.createElement("main",{ref:t,"data-slot":"sidebar-inset",className:i("bg-background relative flex w-full flex-1 flex-col","md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",a),...n}));Z.displayName="SidebarInset";const le=e.forwardRef(({className:a,...n},t)=>e.createElement(we,{ref:t,"data-slot":"sidebar-input","data-sidebar":"input",className:i("bg-background h-8 w-full shadow-none",a),...n}));le.displayName="SidebarInput";const q=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-header","data-sidebar":"header",className:i("flex flex-col gap-2 p-2",a),...n}));q.displayName="SidebarHeader";const V=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-footer","data-sidebar":"footer",className:i("flex flex-col gap-2 p-2",a),...n}));V.displayName="SidebarFooter";const oe=e.forwardRef(({className:a,...n},t)=>e.createElement(Me,{ref:t,"data-slot":"sidebar-separator","data-sidebar":"separator",className:i("bg-sidebar-border mx-2 w-auto",a),...n}));oe.displayName="SidebarSeparator";const m=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-content","data-sidebar":"content",className:i("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",a),...n}));m.displayName="SidebarContent";const b=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-group","data-sidebar":"group",className:i("relative flex w-full min-w-0 flex-col p-2",a),...n}));b.displayName="SidebarGroup";const D=e.forwardRef(({className:a,asChild:n=!1,...t},r)=>{const u=n?W:"div";return e.createElement(u,{ref:r,"data-slot":"sidebar-group-label","data-sidebar":"group-label",className:i("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",a),...t})});D.displayName="SidebarGroupLabel";const ee=e.forwardRef(({className:a,asChild:n=!1,...t},r)=>{const u=n?W:"button";return e.createElement(u,{ref:r,"data-slot":"sidebar-group-action","data-sidebar":"group-action",className:i("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 md:after:hidden","group-data-[collapsible=icon]:hidden",a),...t})});ee.displayName="SidebarGroupAction";const f=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-group-content","data-sidebar":"group-content",className:i("w-full text-sm",a),...n}));f.displayName="SidebarGroupContent";const d=e.forwardRef(({className:a,...n},t)=>e.createElement("ul",{ref:t,"data-slot":"sidebar-menu","data-sidebar":"menu",className:i("flex w-full min-w-0 flex-col gap-1",a),...n}));d.displayName="SidebarMenu";const l=e.forwardRef(({className:a,...n},t)=>e.createElement("li",{ref:t,"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",className:i("group/menu-item relative",a),...n}));l.displayName="SidebarMenuItem";const Ze=Ae("peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}}),o=e.forwardRef(({asChild:a=!1,isActive:n=!1,variant:t="default",size:r="default",tooltip:u,className:s,...h},_)=>{const A=a?W:"button",{isMobile:M,state:B}=ue(),U=e.createElement(A,{ref:_,"data-slot":"sidebar-menu-button","data-sidebar":"menu-button","data-size":r,"data-active":n,className:i(Ze({variant:t,size:r}),s),...h});return u?(typeof u=="string"&&(u={children:u}),e.createElement(Ie,null,e.createElement(Fe,{asChild:!0},U),e.createElement(Ge,{side:"right",align:"center",hidden:B!=="collapsed"||M,...u}))):U});o.displayName="SidebarMenuButton";const ae=e.forwardRef(({className:a,asChild:n=!1,showOnHover:t=!1,...r},u)=>{const s=n?W:"button";return e.createElement(s,{ref:u,"data-slot":"sidebar-menu-action","data-sidebar":"menu-action",className:i("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","after:absolute after:-inset-2 md:after:hidden","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",t&&"peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",a),...r})});ae.displayName="SidebarMenuAction";const ne=e.forwardRef(({className:a,...n},t)=>e.createElement("div",{ref:t,"data-slot":"sidebar-menu-badge","data-sidebar":"menu-badge",className:i("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none","peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground","peer-data-[size=sm]/menu-button:top-1","peer-data-[size=default]/menu-button:top-1.5","peer-data-[size=lg]/menu-button:top-2.5","group-data-[collapsible=icon]:hidden",a),...n}));ne.displayName="SidebarMenuBadge";const de=e.forwardRef(({className:a,showIcon:n=!1,...t},r)=>{const u=e.useMemo(()=>`${Math.floor(Math.random()*40)+50}%`,[]);return e.createElement("div",{ref:r,"data-slot":"sidebar-menu-skeleton","data-sidebar":"menu-skeleton",className:i("flex h-8 items-center gap-2 rounded-md px-2",a),...t},n&&e.createElement(ce,{className:"size-4 rounded-md","data-sidebar":"menu-skeleton-icon"}),e.createElement(ce,{className:"h-4 max-w-(--skeleton-width) flex-1","data-sidebar":"menu-skeleton-text",style:{"--skeleton-width":u}}))});de.displayName="SidebarMenuSkeleton";const te=e.forwardRef(({className:a,...n},t)=>e.createElement("ul",{ref:t,"data-slot":"sidebar-menu-sub","data-sidebar":"menu-sub",className:i("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",a),...n}));te.displayName="SidebarMenuSub";const v=e.forwardRef(({className:a,...n},t)=>e.createElement("li",{ref:t,"data-slot":"sidebar-menu-sub-item","data-sidebar":"menu-sub-item",className:i("group/menu-sub-item relative",a),...n}));v.displayName="SidebarMenuSubItem";const y=e.forwardRef(({asChild:a=!1,size:n="md",isActive:t=!1,className:r,...u},s)=>{const h=a?W:"a";return e.createElement(h,{ref:s,"data-slot":"sidebar-menu-sub-button","data-sidebar":"menu-sub-button","data-size":n,"data-active":t,className:i("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0","data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",n==="sm"&&"text-xs",n==="md"&&"text-sm","group-data-[collapsible=icon]:hidden",r),...u})});y.displayName="SidebarMenuSubButton";try{c.displayName="Sidebar",c.__docgenInfo={description:`🎯 목적: Sidebar 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용, collapsible과 mobile 상태에 따라 다른 렌더링
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"Sidebar",props:{variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inset"'},{value:'"sidebar"'},{value:'"floating"'}]}},collapsible:{defaultValue:{value:"offcanvas"},description:"",name:"collapsible",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"none"'},{value:'"icon"'},{value:'"offcanvas"'}]}},side:{defaultValue:{value:"left"},description:"",name:"side",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}}}}}catch{}try{m.displayName="SidebarContent",m.__docgenInfo={description:`🎯 목적: SidebarContent 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarContent",props:{}}}catch{}try{V.displayName="SidebarFooter",V.__docgenInfo={description:`🎯 목적: SidebarFooter 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarFooter",props:{}}}catch{}try{b.displayName="SidebarGroup",b.__docgenInfo={description:`🎯 목적: SidebarGroup 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarGroup",props:{}}}catch{}try{ee.displayName="SidebarGroupAction",ee.__docgenInfo={description:`🎯 목적: SidebarGroupAction 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Slot 패턴 지원, asChild prop으로 컴포넌트 교체 가능
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarGroupAction",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{f.displayName="SidebarGroupContent",f.__docgenInfo={description:`🎯 목적: SidebarGroupContent 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarGroupContent",props:{}}}catch{}try{D.displayName="SidebarGroupLabel",D.__docgenInfo={description:`🎯 목적: SidebarGroupLabel 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Slot 패턴 지원, asChild prop으로 컴포넌트 교체 가능
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarGroupLabel",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{q.displayName="SidebarHeader",q.__docgenInfo={description:`🎯 목적: SidebarHeader 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarHeader",props:{}}}catch{}try{le.displayName="SidebarInput",le.__docgenInfo={description:`🎯 목적: SidebarInput 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Input 컴포넌트 래퍼
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarInput",props:{}}}catch{}try{Z.displayName="SidebarInset",Z.__docgenInfo={description:`🎯 목적: SidebarInset 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML main 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarInset",props:{}}}catch{}try{d.displayName="SidebarMenu",d.__docgenInfo={description:`🎯 목적: SidebarMenu 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML ul 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenu",props:{}}}catch{}try{ae.displayName="SidebarMenuAction",ae.__docgenInfo={description:`🎯 목적: SidebarMenuAction 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Slot 패턴 지원, asChild prop으로 컴포넌트 교체 가능, showOnHover 기능 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuAction",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},showOnHover:{defaultValue:{value:"false"},description:"",name:"showOnHover",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{ne.displayName="SidebarMenuBadge",ne.__docgenInfo={description:`🎯 목적: SidebarMenuBadge 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuBadge",props:{}}}catch{}try{o.displayName="SidebarMenuButton",o.__docgenInfo={description:`🎯 목적: SidebarMenuButton 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Slot 패턴 지원, asChild prop으로 컴포넌트 교체 가능, tooltip 기능 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuButton",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:'string | (Omit<TooltipContentProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>) | undefined'}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null | undefined'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null | undefined'}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{l.displayName="SidebarMenuItem",l.__docgenInfo={description:`🎯 목적: SidebarMenuItem 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML li 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuItem",props:{}}}catch{}try{de.displayName="SidebarMenuSkeleton",de.__docgenInfo={description:`🎯 목적: SidebarMenuSkeleton 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용, showIcon prop 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuSkeleton",props:{showIcon:{defaultValue:{value:"false"},description:"",name:"showIcon",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{te.displayName="SidebarMenuSub",te.__docgenInfo={description:`🎯 목적: SidebarMenuSub 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML ul 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuSub",props:{}}}catch{}try{y.displayName="SidebarMenuSubButton",y.__docgenInfo={description:`🎯 목적: SidebarMenuSubButton 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Slot 패턴 지원, asChild prop으로 컴포넌트 교체 가능, size와 isActive prop 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuSubButton",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'}]}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{v.displayName="SidebarMenuSubItem",v.__docgenInfo={description:`🎯 목적: SidebarMenuSubItem 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML li 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarMenuSubItem",props:{}}}catch{}try{C.displayName="SidebarProvider",C.__docgenInfo={description:`🎯 목적: SidebarProvider 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML div 요소 사용, Context Provider 내부 구조 유지
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarProvider",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean | undefined"}},defaultOpen:{defaultValue:{value:"true"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean | undefined"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void) | undefined"}}}}}catch{}try{z.displayName="SidebarRail",z.__docgenInfo={description:`🎯 목적: SidebarRail 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML button 요소 사용, toggleSidebar 기능 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarRail",props:{}}}catch{}try{oe.displayName="SidebarSeparator",oe.__docgenInfo={description:`🎯 목적: SidebarSeparator 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Separator 컴포넌트 래퍼
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarSeparator",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{p.displayName="SidebarTrigger",p.__docgenInfo={description:`🎯 목적: SidebarTrigger 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Button 컴포넌트 래퍼, toggleSidebar 기능 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"SidebarTrigger",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}}}}}catch{}const{expect:j,userEvent:Ce,within:ea}=__STORYBOOK_MODULE_TEST__,g=[{title:"Home",url:"#",icon:fe},{title:"Inbox",url:"#",icon:qe},{title:"Calendar",url:"#",icon:ke},{title:"Search",url:"#",icon:Te},{title:"Settings",url:"#",icon:De}],ja={title:"ui/Sidebar",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A composable, themeable and customizable sidebar component."}}}},N={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title)))))))))),e.createElement("main",null,e.createElement(p,null)))},R={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(q,null,e.createElement(d,null,e.createElement(l,null,e.createElement(X,null,e.createElement(J,{asChild:!0},e.createElement(o,null,"Select Workspace",e.createElement(O,{className:"ml-auto"}))),e.createElement(Q,{side:"right",className:"w-[--radix-popper-anchor-width]"},e.createElement(E,null,e.createElement("span",null,"Acme Inc")),e.createElement(E,null,e.createElement("span",null,"Acme Corp."))))))),e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title)))))))))),e.createElement("main",null,e.createElement(p,null)))},I={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title))))))))),e.createElement(V,null,e.createElement(d,null,e.createElement(l,null,e.createElement(X,null,e.createElement(J,{asChild:!0},e.createElement(o,null,e.createElement(Se,null)," Username",e.createElement(O,{className:"ml-auto"}))),e.createElement(Q,{side:"right",className:"w-[--radix-popper-anchor-width]"},e.createElement(E,null,e.createElement("span",null,"Account")),e.createElement(E,null,e.createElement("span",null,"Billing")),e.createElement(E,null,e.createElement("span",null,"Sign out")))))))),e.createElement("main",null,e.createElement(p,null)))},F={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(pe,{defaultOpen:!0,className:"group/collapsible"},e.createElement(b,null,e.createElement(D,{asChild:!0},e.createElement(me,null,"Help",e.createElement(O,{className:"ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"}))),e.createElement(be,null,e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title)))))))))))),e.createElement("main",null,e.createElement(p,null)))},G={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title))),e.createElement(ae,null,e.createElement(Le,null))))))))),e.createElement("main",null,e.createElement(p,null)))},k={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map((a,n)=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title))),n===1&&e.createElement(ne,null,"24")))))))),e.createElement("main",null,e.createElement(p,null)))},T={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,e.createElement(l,null,e.createElement(o,{asChild:!0},e.createElement("a",{href:"#"},e.createElement(fe,null),e.createElement("span",null,"Home")))),e.createElement(pe,{defaultOpen:!0},e.createElement(l,null,e.createElement(o,{asChild:!0},e.createElement(me,null,e.createElement(De,null),e.createElement("span",null,"Settings"),e.createElement(He,{className:"ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"}))),e.createElement(be,null,e.createElement(te,null,e.createElement(v,null,e.createElement(y,{asChild:!0},e.createElement("a",{href:"#"},"General"))),e.createElement(v,null,e.createElement(y,{asChild:!0},e.createElement("a",{href:"#"},"Team"))),e.createElement(v,null,e.createElement(y,{asChild:!0},e.createElement("a",{href:"#"},"Billing")))))))))))),e.createElement("main",null,e.createElement(p,null)))},L={render:()=>{const[a,n]=e.useState(!1);return e.createElement(C,{open:a,onOpenChange:n},e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(t=>e.createElement(l,{key:t.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:t.url},e.createElement(t.icon,null),e.createElement("span",null,t.title)))))))))),e.createElement("main",{className:"flex flex-1 flex-col gap-4 p-4"},e.createElement("div",{className:"flex items-center gap-4"},e.createElement(p,null),e.createElement("span",null,"Sidebar is ",a?"open":"closed"))))}},H={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title))))))))),e.createElement(z,null)),e.createElement("main",null,e.createElement(p,null)))},P={render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(q,null,e.createElement(d,null,e.createElement(l,null,e.createElement(X,null,e.createElement(J,{asChild:!0},e.createElement(o,null,"Select Workspace",e.createElement(O,{className:"ml-auto"}))),e.createElement(Q,{side:"right",className:"w-[--radix-popper-anchor-width]"},e.createElement(E,null,e.createElement("span",null,"Acme Inc")),e.createElement(E,null,e.createElement("span",null,"Acme Corp."))))))),e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(ee,null,e.createElement(Pe,null)," ",e.createElement("span",{className:"sr-only"},"Add Project")),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title))))))))),e.createElement(V,null,e.createElement(d,null,e.createElement(l,null,e.createElement(X,null,e.createElement(J,{asChild:!0},e.createElement(o,null,e.createElement(Se,null)," Username",e.createElement(O,{className:"ml-auto"}))),e.createElement(Q,{side:"right",className:"w-[--radix-popper-anchor-width]"},e.createElement(E,null,e.createElement("span",null,"Account")),e.createElement(E,null,e.createElement("span",null,"Billing")),e.createElement(E,null,e.createElement("span",null,"Sign out"))))))),e.createElement(z,null)),e.createElement(Z,null,e.createElement("header",{className:"flex h-16 shrink-0 items-center gap-2 border-b px-4"},e.createElement(p,{className:"-ml-1"}),e.createElement("div",{className:"flex-1"},e.createElement("h1",{className:"text-xl font-semibold"},"Application"))),e.createElement("main",{className:"flex-1 p-4"},e.createElement("p",{className:"text-muted-foreground"},"This is a full example with header, footer, groups, and rail."))))},Y={name:"when sidebar trigger is clicked, should toggle sidebar visibility",tags:["!dev","!autodocs"],render:()=>e.createElement(C,null,e.createElement(c,null,e.createElement(m,null,e.createElement(b,null,e.createElement(D,null,"Application"),e.createElement(f,null,e.createElement(d,null,g.map(a=>e.createElement(l,{key:a.title},e.createElement(o,{asChild:!0},e.createElement("a",{href:a.url},e.createElement(a.icon,null),e.createElement("span",null,a.title)))))))))),e.createElement("main",null,e.createElement(p,null))),play:async({canvasElement:a})=>{const n=ea(a),t=n.getByRole("button",{name:/toggle sidebar/i});await j(t).toBeInTheDocument();const r=n.getByRole("link",{name:/home/i}),u=n.getByRole("link",{name:/inbox/i}),s=n.getByRole("link",{name:/calendar/i});await j(r).toBeInTheDocument(),await j(u).toBeInTheDocument(),await j(s).toBeInTheDocument(),await Ce.click(t),await Ce.click(r)}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...N.parameters?.docs?.source},description:{story:"Basic sidebar example from official docs.",...N.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Select Workspace
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...R.parameters?.docs?.source},description:{story:"Sidebar with header dropdown from official docs.",...R.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...I.parameters?.docs?.source},description:{story:"Sidebar with footer dropdown from official docs.",...I.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  Help
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map(item => <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>)}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...F.parameters?.docs?.source},description:{story:"Collapsible sidebar group from official docs.",...F.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...G.parameters?.docs?.source},description:{story:"Sidebar with menu action from official docs.",...G.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {index === 1 && <SidebarMenuBadge>24</SidebarMenuBadge>}
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...k.parameters?.docs?.source},description:{story:"Sidebar with menu badge from official docs.",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Home />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <CollapsibleTrigger>
                        <Settings />
                        <span>Settings</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                    </SidebarMenuButton>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">General</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">Team</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">Billing</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...T.parameters?.docs?.source},description:{story:"Sidebar with submenu from official docs.",...T.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(item => <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>)}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <span>Sidebar is {open ? "open" : "closed"}</span>
          </div>
        </main>
      </SidebarProvider>;
  }
}`,...L.parameters?.docs?.source},description:{story:"Controlled sidebar from official docs.",...L.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
}`,...H.parameters?.docs?.source},description:{story:"Sidebar with rail from official docs.",...H.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Select Workspace
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex-1">
            <h1 className="text-xl font-semibold">Application</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            This is a full example with header, footer, groups, and rail.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
}`,...P.parameters?.docs?.source},description:{story:"Full sidebar example with all features from official docs.",...P.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "when sidebar trigger is clicked, should toggle sidebar visibility",
  tags: ["!dev", "!autodocs"],
  render: () => <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(item => <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Sidebar Trigger 버튼이 존재하고 클릭 가능한지, 메뉴 아이템들이 올바르게 렌더링되는지 확인
    const triggerButton = canvas.getByRole("button", {
      name: /toggle sidebar/i
    });
    await expect(triggerButton).toBeInTheDocument();

    // 메뉴 아이템들이 존재하는지 확인
    const homeLink = canvas.getByRole("link", {
      name: /home/i
    });
    const inboxLink = canvas.getByRole("link", {
      name: /inbox/i
    });
    const calendarLink = canvas.getByRole("link", {
      name: /calendar/i
    });
    await expect(homeLink).toBeInTheDocument();
    await expect(inboxLink).toBeInTheDocument();
    await expect(calendarLink).toBeInTheDocument();

    // Trigger 버튼 클릭
    await userEvent.click(triggerButton);

    // 메뉴 아이템 클릭 가능 확인
    await userEvent.click(homeLink);
  }
}`,...Y.parameters?.docs?.source}}};const Ya=["BasicStructure","WithHeaderDropdown","WithFooterDropdown","CollapsibleGroup","WithMenuAction","WithMenuBadge","WithSubmenu","Controlled","WithRail","FullExample","ShouldToggleSidebar"];export{N as BasicStructure,F as CollapsibleGroup,L as Controlled,P as FullExample,Y as ShouldToggleSidebar,I as WithFooterDropdown,R as WithHeaderDropdown,G as WithMenuAction,k as WithMenuBadge,H as WithRail,T as WithSubmenu,Ya as __namedExportsOrder,ja as default};

import{r as o,e as t}from"./iframe-BiU2suBC.js";import{A as I,a as F,b as O}from"./avatar-D8dvIAsW.js";import{B as k}from"./button-o25yRkrR.js";import{a as Q}from"./utils-DgWKjmuI.js";import{c as p}from"./index-Dc_FVRD7.js";import{c as X}from"./index-BT5_MN2X.js";import{u as Z}from"./index-CpP8DfwQ.js";import{u as ee}from"./index-vBP3oNXZ.js";import{c as M,R as te,A as ne,C as re,a as ae}from"./index-6_FvH4og.js";import{P as oe}from"./index-B1tj0AfO.js";import{P as U}from"./index-7qFhJqzR.js";import{P as se}from"./index-DF-uitis.js";import{D as ie}from"./index-BX5uZP6s.js";import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUJQGk3H.js";import"./index-ynW3WxUC.js";import"./index-wLFCSCG5.js";import"./index-dSc6CJZX.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-DJRgpZyQ.js";var P,_="HoverCard",[V]=X(_,[M]),A=M(),[ce,S]=V(_),J=e=>{const{__scopeHoverCard:n,children:r,open:i,defaultOpen:s,onOpenChange:c,openDelay:v=700,closeDelay:m=300}=e,l=A(n),x=o.useRef(0),h=o.useRef(0),D=o.useRef(!1),C=o.useRef(!1),[E,a]=Z({prop:i,defaultProp:s??!1,onChange:c,caller:_}),T=o.useCallback(()=>{clearTimeout(h.current),x.current=window.setTimeout(()=>a(!0),v)},[v,a]),G=o.useCallback(()=>{clearTimeout(x.current),!D.current&&!C.current&&(h.current=window.setTimeout(()=>a(!1),m))},[m,a]),Y=o.useCallback(()=>a(!1),[a]);return o.useEffect(()=>()=>{clearTimeout(x.current),clearTimeout(h.current)},[]),d.jsx(ce,{scope:n,open:E,onOpenChange:a,onOpen:T,onClose:G,onDismiss:Y,hasSelectionRef:D,isPointerDownOnContentRef:C,children:d.jsx(te,{...l,children:r})})};J.displayName=_;var q="HoverCardTrigger",$=o.forwardRef((e,n)=>{const{__scopeHoverCard:r,...i}=e,s=S(q,r),c=A(r);return d.jsx(ne,{asChild:!0,...c,children:d.jsx(se.a,{"data-state":s.open?"open":"closed",...i,ref:n,onPointerEnter:p(e.onPointerEnter,B(s.onOpen)),onPointerLeave:p(e.onPointerLeave,B(s.onClose)),onFocus:p(e.onFocus,s.onOpen),onBlur:p(e.onBlur,s.onClose),onTouchStart:p(e.onTouchStart,v=>v.preventDefault())})})});$.displayName=q;var L="HoverCardPortal",[de,le]=V(L,{forceMount:void 0}),W=e=>{const{__scopeHoverCard:n,forceMount:r,children:i,container:s}=e,c=S(L,n);return d.jsx(de,{scope:n,forceMount:r,children:d.jsx(U,{present:r||c.open,children:d.jsx(oe,{asChild:!0,container:s,children:i})})})};W.displayName=L;var N="HoverCardContent",z=o.forwardRef((e,n)=>{const r=le(N,e.__scopeHoverCard),{forceMount:i=r.forceMount,...s}=e,c=S(N,e.__scopeHoverCard);return d.jsx(U,{present:i||c.open,children:d.jsx(me,{"data-state":c.open?"open":"closed",...s,onPointerEnter:p(e.onPointerEnter,B(c.onOpen)),onPointerLeave:p(e.onPointerLeave,B(c.onClose)),ref:n})})});z.displayName=N;var me=o.forwardRef((e,n)=>{const{__scopeHoverCard:r,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:c,onInteractOutside:v,...m}=e,l=S(N,r),x=A(r),h=o.useRef(null),D=ee(n,h),[C,E]=o.useState(!1);return o.useEffect(()=>{if(C){const a=document.body;return P=a.style.userSelect||a.style.webkitUserSelect,a.style.userSelect="none",a.style.webkitUserSelect="none",()=>{a.style.userSelect=P,a.style.webkitUserSelect=P}}},[C]),o.useEffect(()=>{if(h.current){const a=()=>{E(!1),l.isPointerDownOnContentRef.current=!1,setTimeout(()=>{document.getSelection()?.toString()!==""&&(l.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",a),()=>{document.removeEventListener("pointerup",a),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!1}}},[l.isPointerDownOnContentRef,l.hasSelectionRef]),o.useEffect(()=>{h.current&&ve(h.current).forEach(T=>T.setAttribute("tabindex","-1"))}),d.jsx(ie,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:v,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:p(c,a=>{a.preventDefault()}),onDismiss:l.onDismiss,children:d.jsx(re,{...x,...m,onPointerDown:p(m.onPointerDown,a=>{a.currentTarget.contains(a.target)&&E(!0),l.hasSelectionRef.current=!1,l.isPointerDownOnContentRef.current=!0}),ref:D,style:{...m.style,userSelect:C?"text":void 0,WebkitUserSelect:C?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),ue="HoverCardArrow",pe=o.forwardRef((e,n)=>{const{__scopeHoverCard:r,...i}=e,s=A(r);return d.jsx(ae,{...s,...i,ref:n})});pe.displayName=ue;function B(e){return n=>n.pointerType==="touch"?void 0:e()}function ve(e){const n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;r.nextNode();)n.push(r.currentNode);return n}var he=J,Ce=$,fe=W,ge=z;const f=he,g=o.forwardRef((e,n)=>o.createElement(Ce,{ref:n,"data-slot":"hover-card-trigger",...e}));g.displayName="HoverCardTrigger";const y=o.forwardRef(({className:e,align:n="center",sideOffset:r=4,...i},s)=>o.createElement(fe,{"data-slot":"hover-card-portal"},o.createElement(ge,{ref:s,"data-slot":"hover-card-content",align:n,sideOffset:r,className:Q("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",e),...i})));y.displayName="HoverCardContent";try{f.displayName="HoverCard",f.__docgenInfo={description:`🎯 목적: HoverCard Root 컴포넌트
📝 주의사항: Radix UI HoverCard.Root primitive는 ref를 지원하지 않음`,displayName:"HoverCard",props:{}}}catch{}try{y.displayName="HoverCardContent",y.__docgenInfo={description:`🎯 목적: HoverCardContent 컴포넌트에 forwardRef 적용
📝 주의사항: Portal 내부에서 렌더링, align/sideOffset props 지원`,displayName:"HoverCardContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{g.displayName="HoverCardTrigger",g.__docgenInfo={description:"🎯 목적: HoverCardTrigger 컴포넌트에 forwardRef 적용",displayName:"HoverCardTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:u,userEvent:R,waitFor:j,within:K}=__STORYBOOK_MODULE_TEST__,Ue={title:"ui/HoverCard",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A hover card with avatar and profile information."}}},argTypes:{openDelay:{control:"number",description:"The duration from when the mouse enters the trigger until the hover card opens (ms)"},closeDelay:{control:"number",description:"The duration from when the mouse leaves the trigger until the hover card closes (ms)"}},args:{openDelay:700,closeDelay:300},render:e=>t.createElement(f,{openDelay:e.openDelay,closeDelay:e.closeDelay},t.createElement(g,{asChild:!0},t.createElement(k,{variant:"link"},"@nextjs")),t.createElement(y,{className:"w-80"},t.createElement("div",{className:"flex justify-between gap-4"},t.createElement(I,null,t.createElement(F,{src:"https://github.com/vercel.png"}),t.createElement(O,null,"VC")),t.createElement("div",{className:"space-y-1"},t.createElement("h4",{className:"text-sm font-semibold"},"@nextjs"),t.createElement("p",{className:"text-sm"},"The React Framework – created and maintained by @vercel."),t.createElement("div",{className:"text-muted-foreground text-xs"},"Joined December 2021")))))},w={render:e=>t.createElement(f,{openDelay:e.openDelay,closeDelay:e.closeDelay},t.createElement(g,{asChild:!0},t.createElement(k,{variant:"link"},"@nextjs")),t.createElement(y,{className:"w-80"},t.createElement("div",{className:"flex justify-between gap-4"},t.createElement(I,null,t.createElement(F,{src:"https://github.com/vercel.png"}),t.createElement(O,null,"VC")),t.createElement("div",{className:"space-y-1"},t.createElement("h4",{className:"text-sm font-semibold"},"@nextjs"),t.createElement("p",{className:"text-sm"},"The React Framework – created and maintained by @vercel."),t.createElement("div",{className:"text-muted-foreground text-xs"},"Joined December 2021")))))},b={name:"when hovering over trigger, should show hover card content",tags:["!dev","!autodocs"],play:async({canvasElement:e})=>{const n=K(e),r=n.getByRole("button",{name:/@nextjs/i});await u(r).toBeInTheDocument(),await R.hover(r),await j(async()=>{const s=await n.findByRole("heading",{name:/@nextjs/i});await u(s).toBeInTheDocument()});const i=n.getByText(/the react framework – created and maintained by @vercel/i);await u(i).toBeInTheDocument(),await R.unhover(r)}},H={name:"when unhover from trigger, should hide hover card content",tags:["!dev","!autodocs"],render:()=>t.createElement(f,null,t.createElement(g,{asChild:!0},t.createElement(k,{variant:"link","data-testid":"hover-trigger"},"@nextjs")),t.createElement(y,{className:"w-80","data-testid":"hover-content"},t.createElement("div",{className:"flex justify-between gap-4"},t.createElement(I,null,t.createElement(F,{src:"https://github.com/vercel.png"}),t.createElement(O,null,"VC")),t.createElement("div",{className:"space-y-1"},t.createElement("h4",{className:"text-sm font-semibold","data-testid":"profile-name"},"@nextjs"),t.createElement("p",{className:"text-sm","data-testid":"profile-description"},"The React Framework – created and maintained by @vercel."),t.createElement("div",{className:"text-muted-foreground text-xs","data-testid":"joined-date"},"Joined December 2021"))))),play:async({canvasElement:e})=>{const n=K(e),r=n.getByTestId("hover-trigger");await u(r).toBeInTheDocument();const i=n.queryByTestId("hover-content");u(i).not.toBeInTheDocument(),await R.hover(r),await j(async()=>{const m=await n.findByTestId("profile-name");await u(m).toBeInTheDocument()},{timeout:1e3});const s=n.getByTestId("profile-name");await u(s).toHaveTextContent("@nextjs");const c=n.getByTestId("profile-description");await u(c).toHaveTextContent("The React Framework – created and maintained by @vercel.");const v=n.getByTestId("joined-date");await u(v).toHaveTextContent("Joined December 2021"),await R.unhover(r),await j(()=>{const m=n.queryByTestId("hover-content");u(m).not.toBeInTheDocument()},{timeout:1e3})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <HoverCard openDelay={args.openDelay} closeDelay={args.closeDelay}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...w.parameters?.docs?.source},description:{story:"The default hover card showing user profile information.",...w.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "when hovering over trigger, should show hover card content",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Hover Card가 트리거에 호버 시 열리고, 콘텐츠가 표시되는지 확인
    const trigger = canvas.getByRole("button", {
      name: /@nextjs/i
    });
    await expect(trigger).toBeInTheDocument();

    // 트리거에 호버하여 Hover Card 열기
    await userEvent.hover(trigger);

    // Hover Card 콘텐츠가 표시되는지 확인
    await waitFor(async () => {
      const heading = await canvas.findByRole("heading", {
        name: /@nextjs/i
      });
      await expect(heading).toBeInTheDocument();
    });

    // 추가 콘텐츠 확인
    const description = canvas.getByText(/the react framework – created and maintained by @vercel/i);
    await expect(description).toBeInTheDocument();

    // 호버 해제
    await userEvent.unhover(trigger);
  }
}`,...b.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "when unhover from trigger, should hide hover card content",
  tags: ["!dev", "!autodocs"],
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" data-testid="hover-trigger">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80" data-testid="hover-content">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold" data-testid="profile-name">
              @nextjs
            </h4>
            <p className="text-sm" data-testid="profile-description">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-muted-foreground text-xs" data-testid="joined-date">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Hover Card가 호버 해제 시 사라지고, 모든 콘텐츠가 올바르게 표시되는지 확인

    // 트리거 확인
    const trigger = canvas.getByTestId("hover-trigger");
    await expect(trigger).toBeInTheDocument();

    // Hover Card 콘텐츠가 초기에는 보이지 않음
    const content = canvas.queryByTestId("hover-content");
    expect(content).not.toBeInTheDocument();

    // 트리거에 호버하여 Hover Card 열기
    await userEvent.hover(trigger);

    // Hover Card 콘텐츠가 표시될 때까지 대기
    await waitFor(async () => {
      const profileName = await canvas.findByTestId("profile-name");
      await expect(profileName).toBeInTheDocument();
    }, {
      timeout: 1000
    });

    // 모든 콘텐츠 확인
    const profileName = canvas.getByTestId("profile-name");
    await expect(profileName).toHaveTextContent("@nextjs");
    const profileDescription = canvas.getByTestId("profile-description");
    await expect(profileDescription).toHaveTextContent("The React Framework – created and maintained by @vercel.");
    const joinedDate = canvas.getByTestId("joined-date");
    await expect(joinedDate).toHaveTextContent("Joined December 2021");

    // 호버 해제
    await userEvent.unhover(trigger);

    // Hover Card 콘텐츠가 사라지는지 확인
    await waitFor(() => {
      const hiddenContent = canvas.queryByTestId("hover-content");
      expect(hiddenContent).not.toBeInTheDocument();
    }, {
      timeout: 1000
    });
  }
}`,...H.parameters?.docs?.source}}};const Ve=["Default","ShouldShowHoverCard","ShouldHideOnUnhover"];export{w as Default,H as ShouldHideOnUnhover,b as ShouldShowHoverCard,Ve as __namedExportsOrder,Ue as default};

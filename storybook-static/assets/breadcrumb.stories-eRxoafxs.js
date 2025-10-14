import{r as a,e,L as _}from"./iframe-BiU2suBC.js";import{a as i}from"./utils-DgWKjmuI.js";import{C as A}from"./chevron-right-C1Com0QT.js";import{E as I}from"./ellipsis-B5OVhsnz.js";import{S as L}from"./index-vBP3oNXZ.js";import{D as S,a as F,b as N,e as h}from"./dropdown-menu-CLAbh3UN.js";import{c as v}from"./createLucideIcon-ng3sinjr.js";import{C as R}from"./chevron-down-DnTtteVn.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-D_zvdyIk.js";import"./check-DwuV1CBk.js";import"./circle-_0ReNRZy.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-aDS8GPlc.js";import"./index-BEeKTTV4.js";import"./index-DrzUb6Kr.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-WGaa5q18.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],E=v("slash",x),m=a.forwardRef(({...r},t)=>a.createElement("nav",{ref:t,"aria-label":"breadcrumb","data-slot":"breadcrumb",...r}));m.displayName="Breadcrumb";const l=a.forwardRef(({className:r,...t},u)=>a.createElement("ol",{ref:u,"data-slot":"breadcrumb-list",className:i("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",r),...t}));l.displayName="BreadcrumbList";const n=a.forwardRef(({className:r,...t},u)=>a.createElement("li",{ref:u,"data-slot":"breadcrumb-item",className:i("inline-flex items-center gap-1.5",r),...t}));n.displayName="BreadcrumbItem";const c=a.forwardRef(({asChild:r,className:t,...u},d)=>{const k=r?L:"a";return a.createElement(k,{ref:d,"data-slot":"breadcrumb-link",className:i("hover:text-foreground transition-colors",t),...u})});c.displayName="BreadcrumbLink";const s=a.forwardRef(({className:r,...t},u)=>a.createElement("span",{ref:u,"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:i("text-foreground font-normal",r),...t}));s.displayName="BreadcrumbPage";const o=a.forwardRef(({children:r,className:t,...u},d)=>a.createElement("li",{ref:d,"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:i("[&>svg]:size-3.5",t),...u},r??a.createElement(A,null)));o.displayName="BreadcrumbSeparator";const f=a.forwardRef(({className:r,...t},u)=>a.createElement("span",{ref:u,"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:i("flex size-9 items-center justify-center",r),...t},a.createElement(I,{className:"size-4"}),a.createElement("span",{className:"sr-only"},"More")));f.displayName="BreadcrumbEllipsis";try{m.displayName="Breadcrumb",m.__docgenInfo={description:`🎯 목적: Breadcrumb 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: aria-label="breadcrumb" 접근성 속성 유지 필수
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"Breadcrumb",props:{}}}catch{}try{f.displayName="BreadcrumbEllipsis",f.__docgenInfo={description:`🎯 목적: BreadcrumbEllipsis 컴포넌트에 forwardRef 적용
📝 주의사항: MoreHorizontal 아이콘 유지`,displayName:"BreadcrumbEllipsis",props:{}}}catch{}try{n.displayName="BreadcrumbItem",n.__docgenInfo={description:"🎯 목적: BreadcrumbItem 컴포넌트에 forwardRef 적용",displayName:"BreadcrumbItem",props:{}}}catch{}try{c.displayName="BreadcrumbLink",c.__docgenInfo={description:`🎯 목적: BreadcrumbLink 컴포넌트에 forwardRef 적용
📝 주의사항: asChild 패턴 지원 (Radix UI Slot 호환)`,displayName:"BreadcrumbLink",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{l.displayName="BreadcrumbList",l.__docgenInfo={description:`🎯 목적: BreadcrumbList 컴포넌트에 forwardRef 적용
📝 주의사항: ol 태그 사용, flex 레이아웃 유지`,displayName:"BreadcrumbList",props:{}}}catch{}try{s.displayName="BreadcrumbPage",s.__docgenInfo={description:`🎯 목적: BreadcrumbPage 컴포넌트에 forwardRef 적용
📝 주의사항: aria-current="page" 접근성 속성 유지`,displayName:"BreadcrumbPage",props:{}}}catch{}try{o.displayName="BreadcrumbSeparator",o.__docgenInfo={description:`🎯 목적: BreadcrumbSeparator 컴포넌트에 forwardRef 적용
📝 주의사항: ChevronRight 아이콘 기본값 유지`,displayName:"BreadcrumbSeparator",props:{}}}catch{}const{expect:g,userEvent:y,within:M}=__STORYBOOK_MODULE_TEST__;function w(){return e.createElement(m,null,e.createElement(l,null,e.createElement(n,null,e.createElement(c,{href:"/"},"Home")),e.createElement(o,null),e.createElement(n,null,e.createElement(c,{href:"/components"},"Components")),e.createElement(o,null),e.createElement(n,null,e.createElement(s,null,"Breadcrumb"))))}const pe={title:"ui/Breadcrumb",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}},excludeStories:/.*Demo$/},p={render:()=>e.createElement(w,null)},C={render:()=>e.createElement(m,null,e.createElement(l,null,e.createElement(n,null,e.createElement(c,{href:"/"},"Home")),e.createElement(o,null,e.createElement(E,null)),e.createElement(n,null,e.createElement(c,{href:"/components"},"Components")),e.createElement(o,null,e.createElement(E,null)),e.createElement(n,null,e.createElement(s,null,"Breadcrumb"))))},b={render:()=>e.createElement(m,null,e.createElement(l,null,e.createElement(n,null,e.createElement(c,{asChild:!0},e.createElement(_,{to:"/"},"Home"))),e.createElement(o,null,e.createElement(E,null)),e.createElement(n,null,e.createElement(S,null,e.createElement(F,{className:"flex items-center gap-1"},"Components",e.createElement(R,null)),e.createElement(N,{align:"start"},e.createElement(h,null,"Documentation"),e.createElement(h,null,"Themes"),e.createElement(h,null,"GitHub")))),e.createElement(o,null,e.createElement(E,null)),e.createElement(n,null,e.createElement(s,null,"Breadcrumb"))))},B={render:()=>e.createElement(m,null,e.createElement(l,null,e.createElement(n,null,e.createElement(c,{asChild:!0},e.createElement(_,{to:"/"},"Home"))),e.createElement(o,null),e.createElement(n,null,e.createElement(f,null)),e.createElement(o,null),e.createElement(n,null,e.createElement(c,{asChild:!0},e.createElement(_,{to:"/docs/components"},"Components"))),e.createElement(o,null),e.createElement(n,null,e.createElement(s,null,"Breadcrumb"))))},D={name:"when breadcrumb link is clicked, should have correct href",tags:["!dev","!autodocs"],render:()=>e.createElement(w,null),play:async({canvasElement:r})=>{const t=M(r),u=t.getByRole("link",{name:/home/i}),d=t.getByRole("link",{name:/components/i});await g(u).toHaveAttribute("href","/"),await g(d).toHaveAttribute("href","/components"),await y.click(u),await y.click(d)}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <BreadcrumbDemo />
}`,...p.parameters?.docs?.source},description:{story:"The default form of the breadcrumb.",...p.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...C.parameters?.docs?.source},description:{story:"Custom separator example.",...C.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Components
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...b.parameters?.docs?.source},description:{story:"Breadcrumb with dropdown.",...b.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/docs/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...B.parameters?.docs?.source},description:{story:"Collapsed breadcrumb with ellipsis.",...B.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "when breadcrumb link is clicked, should have correct href",
  tags: ["!dev", "!autodocs"],
  render: () => <BreadcrumbDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Breadcrumb 링크가 올바른 href를 가지고 있는지 확인
    const homeLink = canvas.getByRole("link", {
      name: /home/i
    });
    const componentsLink = canvas.getByRole("link", {
      name: /components/i
    });
    await expect(homeLink).toHaveAttribute("href", "/");
    await expect(componentsLink).toHaveAttribute("href", "/components");

    // 링크 클릭 가능 확인
    await userEvent.click(homeLink);
    await userEvent.click(componentsLink);
  }
}`,...D.parameters?.docs?.source}}};const Ce=["BreadcrumbDemo","Default","CustomSeparator","WithDropdown","Collapsed","ShouldNavigateWhenClicked"];export{w as BreadcrumbDemo,B as Collapsed,C as CustomSeparator,p as Default,D as ShouldNavigateWhenClicked,b as WithDropdown,Ce as __namedExportsOrder,pe as default};

import{r as u,e as n}from"./iframe-BiU2suBC.js";import{b as E}from"./button-o25yRkrR.js";import{a as o}from"./utils-DgWKjmuI.js";import{C as _}from"./chevron-left-CTb55qQx.js";import{E as v}from"./ellipsis-B5OVhsnz.js";import{C as y}from"./chevron-right-C1Com0QT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./createLucideIcon-ng3sinjr.js";const p=u.forwardRef(({className:e,...a},t)=>u.createElement("nav",{ref:t,role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center",e),...a}));p.displayName="Pagination";const d=u.forwardRef(({className:e,...a},t)=>u.createElement("ul",{ref:t,"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",e),...a}));d.displayName="PaginationContent";const i=u.forwardRef((e,a)=>u.createElement("li",{ref:a,"data-slot":"pagination-item",...e}));i.displayName="PaginationItem";const r=u.forwardRef(({className:e,isActive:a,size:t="icon",...l},c)=>u.createElement("a",{ref:c,"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:o(E({variant:a?"outline":"ghost",size:t}),e),...l}));r.displayName="PaginationLink";const m=u.forwardRef(({className:e,...a},t)=>u.createElement(r,{ref:t,"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5",e),...a},u.createElement(_,null),u.createElement("span",{className:"hidden sm:block"},"Previous")));m.displayName="PaginationPrevious";const f=u.forwardRef(({className:e,...a},t)=>u.createElement(r,{ref:t,"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5",e),...a},u.createElement("span",{className:"hidden sm:block"},"Next"),u.createElement(y,null)));f.displayName="PaginationNext";const g=u.forwardRef(({className:e,...a},t)=>u.createElement("span",{ref:t,"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center",e),...a},u.createElement(v,{className:"size-4"}),u.createElement("span",{className:"sr-only"},"More pages")));g.displayName="PaginationEllipsis";try{p.displayName="Pagination",p.__docgenInfo={description:`🎯 목적: Pagination 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML nav 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"Pagination",props:{}}}catch{}try{d.displayName="PaginationContent",d.__docgenInfo={description:`🎯 목적: PaginationContent 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML ul 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationContent",props:{}}}catch{}try{g.displayName="PaginationEllipsis",g.__docgenInfo={description:`🎯 목적: PaginationEllipsis 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML span 요소 사용, 더 많은 페이지가 있음을 표시
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationEllipsis",props:{}}}catch{}try{i.displayName="PaginationItem",i.__docgenInfo={description:`🎯 목적: PaginationItem 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML li 요소 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationItem",props:{}}}catch{}try{r.displayName="PaginationLink",r.__docgenInfo={description:`🎯 목적: PaginationLink 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: HTML a 요소 사용, isActive 상태에 따라 variant 변경
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationLink",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{f.displayName="PaginationNext",f.__docgenInfo={description:`🎯 목적: PaginationNext 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: PaginationLink 컴포넌트 사용 (이미 forwardRef 지원)
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationNext",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{m.displayName="PaginationPrevious",m.__docgenInfo={description:`🎯 목적: PaginationPrevious 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: PaginationLink 컴포넌트 사용 (이미 forwardRef 지원)
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"PaginationPrevious",props:{size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:C,userEvent:A,within:w}=__STORYBOOK_MODULE_TEST__;function P(){return n.createElement(p,null,n.createElement(d,null,n.createElement(i,null,n.createElement(m,{href:"#"})),n.createElement(i,null,n.createElement(r,{href:"#"},"1")),n.createElement(i,null,n.createElement(r,{href:"#",isActive:!0},"2")),n.createElement(i,null,n.createElement(r,{href:"#"},"3")),n.createElement(i,null,n.createElement(g,null)),n.createElement(i,null,n.createElement(f,{href:"#"}))))}const z={title:"ui/Pagination",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination with page navigation, next and previous links."}}}},s={},D={name:"when pagination links are clicked, should have correct href",tags:["!dev","!autodocs"],play:async({canvasElement:e})=>{const a=w(e),t=a.getByRole("link",{name:/previous/i}),l=a.getByRole("link",{name:/next/i}),c=a.getByRole("link",{name:/^1$/i}),B=a.getByRole("link",{name:/^2$/i});await C(t).toHaveAttribute("href","#"),await C(l).toHaveAttribute("href","#"),await C(c).toHaveAttribute("href","#"),await C(B).toHaveAttribute("href","#"),await C(B).toHaveAttribute("aria-current","page"),await A.click(c),await A.click(l),await A.click(t)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The default form of the pagination with active state.",...s.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "when pagination links are clicked, should have correct href",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Pagination 링크들이 올바른 href를 가지고 클릭 가능한지 확인
    const previousLink = canvas.getByRole("link", {
      name: /previous/i
    });
    const nextLink = canvas.getByRole("link", {
      name: /next/i
    });
    const pageOneLink = canvas.getByRole("link", {
      name: /^1$/i
    });
    const pageTwoLink = canvas.getByRole("link", {
      name: /^2$/i
    });

    // href 속성 확인
    await expect(previousLink).toHaveAttribute("href", "#");
    await expect(nextLink).toHaveAttribute("href", "#");
    await expect(pageOneLink).toHaveAttribute("href", "#");
    await expect(pageTwoLink).toHaveAttribute("href", "#");

    // 활성 상태 확인 (페이지 2가 활성)
    await expect(pageTwoLink).toHaveAttribute("aria-current", "page");

    // 링크 클릭 가능 확인
    await userEvent.click(pageOneLink);
    await userEvent.click(nextLink);
    await userEvent.click(previousLink);
  }
}`,...D.parameters?.docs?.source}}};const O=["Default","ShouldNavigateBetweenPages"];export{s as Default,D as ShouldNavigateBetweenPages,O as __namedExportsOrder,z as default};

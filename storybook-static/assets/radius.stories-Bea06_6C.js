import{e}from"./iframe-BiU2suBC.js";import{T as d,b as o,c as n,d as l,e as c,f as m}from"./table-C8pifwcw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgWKjmuI.js";const u=({value:s})=>{const t=window.getComputedStyle(document.body).getPropertyValue(s);return e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement("div",{className:"bg-card size-20 border-2",style:{borderRadius:t}}),e.createElement("p",{className:"text-center text-xs opacity-70"},s),e.createElement("p",{className:"text-center text-xs"},t))},x={title:"foundation/Radius",tags:["autodocs"],argTypes:{},render:s=>e.createElement(d,null,e.createElement(o,null,e.createElement(n,null,e.createElement(l,null,"Name"),e.createElement(l,null,e.createElement("span",{className:"sr-only"},"Preview")))),e.createElement(c,null,s.radius.map(({name:r,value:t})=>e.createElement(n,{key:r},e.createElement(m,null,r),e.createElement(m,null,e.createElement(u,{value:t})))))),parameters:{docs:{description:{component:"Radius tokens for the design system"}}}},a={args:{radius:[{name:"xs",value:"--radius-xs"},{name:"sm",value:"--radius-sm"},{name:"md",value:"--radius-md"},{name:"lg",value:"--radius-lg"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    radius: [{
      name: "xs",
      value: "--radius-xs"
    }, {
      name: "sm",
      value: "--radius-sm"
    }, {
      name: "md",
      value: "--radius-md"
    }, {
      name: "lg",
      value: "--radius-lg"
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"Border radius tokens used for UI elements like buttons, cards, and modals.",...a.parameters?.docs?.description}}};const y=["Core"];export{a as Core,y as __namedExportsOrder,x as default};

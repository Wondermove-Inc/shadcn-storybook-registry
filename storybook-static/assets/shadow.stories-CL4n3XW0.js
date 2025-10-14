import{e}from"./iframe-BiU2suBC.js";import{T as m,b as d,c as l,d as o,e as c,f as r}from"./table-C8pifwcw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgWKjmuI.js";const u=({value:s})=>{const n=window.getComputedStyle(document.body).getPropertyValue(s);return e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement("div",{className:"bg-card size-20 rounded-md",style:{boxShadow:n}}),e.createElement("p",{className:"text-center text-xs opacity-70"},s),e.createElement("p",{className:"text-center text-xs"},n))},i={title:"foundation/Shadow",tags:["autodocs"],argTypes:{},render:s=>e.createElement(m,null,e.createElement(d,null,e.createElement(l,null,e.createElement(o,null,"Name"),e.createElement(o,null,e.createElement("span",{className:"sr-only shadow-2xl"},"Preview")))),e.createElement(c,null,s.shadow.map(({name:t,value:n})=>e.createElement(l,{key:t},e.createElement(r,null,t),e.createElement(r,null,e.createElement(u,{value:n})))))),parameters:{docs:{description:{component:"Shadow tokens for the design system"}}}},a={args:{shadow:[{name:"xxs",value:"--shadow-2xs"},{name:"xs",value:"--shadow-xs"},{name:"sm",value:"--shadow-sm"},{name:"md",value:"--shadow-md"},{name:"lg",value:"--shadow-lg"},{name:"xl",value:"--shadow-xl"},{name:"2xl",value:"--shadow-2xl"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: [{
      name: "xxs",
      value: "--shadow-2xs"
    }, {
      name: "xs",
      value: "--shadow-xs"
    }, {
      name: "sm",
      value: "--shadow-sm"
    }, {
      name: "md",
      value: "--shadow-md"
    }, {
      name: "lg",
      value: "--shadow-lg"
    }, {
      name: "xl",
      value: "--shadow-xl"
    }, {
      name: "2xl",
      value: "--shadow-2xl"
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"Box shadow tokens used for UI elements like cards, modals, and overlays.",...a.parameters?.docs?.description}}};const v=["Core"];export{a as Core,v as __namedExportsOrder,i as default};

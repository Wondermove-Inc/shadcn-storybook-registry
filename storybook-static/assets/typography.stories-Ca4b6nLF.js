import{T as v,b as x,c as u,d as m,e as y,f as i}from"./table-C8pifwcw.js";import{e}from"./iframe-BiU2suBC.js";import"./utils-DgWKjmuI.js";import"./preload-helper-PPVm8Dsz.js";const h=({value:n,name:o,styleKey:s,children:g})=>{const c=window.getComputedStyle(document.body).getPropertyValue(n);return e.createElement(u,null,e.createElement(i,null,o),e.createElement(i,null,c.split(",").map((p,d)=>e.createElement("p",{key:`prop-${d}`},p))),e.createElement(i,null,e.createElement("div",{style:{[s]:c},className:"line-clamp-1"},g)))},S={title:"foundation/Typography/Tokens",tags:["autodocs"],argTypes:{},args:{children:"Typeface"},render:n=>e.createElement(v,null,e.createElement(x,null,e.createElement(u,null,e.createElement(m,null,"Name"),e.createElement(m,null,"Property"),e.createElement(m,null,e.createElement("span",{className:"sr-only"},"Preview")))),e.createElement(y,null,n.property.map(({name:o,value:s})=>e.createElement(h,{key:o,name:o,value:s,styleKey:n.key},n.children)))),parameters:{docs:{description:{component:"Typography tokens for the design system."}}}},t={args:{key:"fontFamily",property:[{name:"sans",value:"--font-sans"},{name:"serif",value:"--font-serif"},{name:"mono",value:"--font-mono"}]}},a={args:{key:"fontSize",property:[{name:"xs",value:"--text-xs"},{name:"sm",value:"--text-sm"},{name:"base",value:"--text-base"},{name:"lg",value:"--text-lg"},{name:"xl",value:"--text-xl"},{name:"2xl",value:"--text-2xl"},{name:"3xl",value:"--text-3xl"},{name:"4xl",value:"--text-4xl"},{name:"5xl",value:"--text-5xl"},{name:"6xl",value:"--text-6xl"}]}},l={args:{key:"fontWeight",property:[{name:"thin",value:"--font-weight-thin"},{name:"extralight",value:"--font-weight-extralight"},{name:"light",value:"--font-weight-light"},{name:"normal",value:"--font-weight-normal"},{name:"medium",value:"--font-weight-medium"},{name:"semibold",value:"--font-weight-semibold"},{name:"bold",value:"--font-weight-bold"},{name:"extrabold",value:"--font-weight-extrabold"},{name:"black",value:"--font-weight-black"}]}},r={args:{key:"letterSpacing",property:[{name:"tighter",value:"--tracking-tighter"},{name:"tight",value:"--tracking-tight"},{name:"normal",value:"--tracking-normal"},{name:"wide",value:"--tracking-wide"},{name:"wider",value:"--tracking-wider"},{name:"widest",value:"--tracking-widest"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    key: "fontFamily",
    property: [{
      name: "sans",
      value: "--font-sans"
    }, {
      name: "serif",
      value: "--font-serif"
    }, {
      name: "mono",
      value: "--font-mono"
    }]
  }
}`,...t.parameters?.docs?.source},description:{story:"Font family tokens for the design system.",...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    key: "fontSize",
    property: [{
      name: "xs",
      value: "--text-xs"
    }, {
      name: "sm",
      value: "--text-sm"
    }, {
      name: "base",
      value: "--text-base"
    }, {
      name: "lg",
      value: "--text-lg"
    }, {
      name: "xl",
      value: "--text-xl"
    }, {
      name: "2xl",
      value: "--text-2xl"
    }, {
      name: "3xl",
      value: "--text-3xl"
    }, {
      name: "4xl",
      value: "--text-4xl"
    }, {
      name: "5xl",
      value: "--text-5xl"
    }, {
      name: "6xl",
      value: "--text-6xl"
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"Font size tokens for the design system.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    key: "fontWeight",
    property: [{
      name: "thin",
      value: "--font-weight-thin"
    }, {
      name: "extralight",
      value: "--font-weight-extralight"
    }, {
      name: "light",
      value: "--font-weight-light"
    }, {
      name: "normal",
      value: "--font-weight-normal"
    }, {
      name: "medium",
      value: "--font-weight-medium"
    }, {
      name: "semibold",
      value: "--font-weight-semibold"
    }, {
      name: "bold",
      value: "--font-weight-bold"
    }, {
      name: "extrabold",
      value: "--font-weight-extrabold"
    }, {
      name: "black",
      value: "--font-weight-black"
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:"Font weight tokens for the design system.",...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    key: "letterSpacing",
    property: [{
      name: "tighter",
      value: "--tracking-tighter"
    }, {
      name: "tight",
      value: "--tracking-tight"
    }, {
      name: "normal",
      value: "--tracking-normal"
    }, {
      name: "wide",
      value: "--tracking-wide"
    }, {
      name: "wider",
      value: "--tracking-wider"
    }, {
      name: "widest",
      value: "--tracking-widest"
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:"Letter Spacing tokens for the design system.",...r.parameters?.docs?.description}}};const F=["FontFamily","FontSize","FontWeight","LetterSpacing"];export{t as FontFamily,a as FontSize,l as FontWeight,r as LetterSpacing,F as __namedExportsOrder,S as default};

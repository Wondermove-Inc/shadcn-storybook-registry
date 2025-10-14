import{e}from"./iframe-BiU2suBC.js";import{T as t,B as u,I as s,U as p}from"./toggle-CIG2ZjUd.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-ng3sinjr.js";import"./index-Dc_FVRD7.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";const{expect:g,userEvent:T,within:y}=__STORYBOOK_MODULE_TEST__;function m(){return e.createElement(t,{"aria-label":"Toggle italic"},e.createElement(u,{className:"h-4 w-4"}))}function E(){return e.createElement(t,{variant:"outline","aria-label":"Toggle italic"},e.createElement(s,{className:"h-4 w-4"}))}function h(){return e.createElement(t,{"aria-label":"Toggle italic"},e.createElement(s,{className:"h-4 w-4"}),"Italic")}function w(){return e.createElement(t,{size:"sm","aria-label":"Toggle italic"},e.createElement(s,{className:"h-4 w-4"}))}function b(){return e.createElement(t,{size:"lg","aria-label":"Toggle italic"},e.createElement(s,{className:"h-4 w-4"}))}function f(){return e.createElement(t,{"aria-label":"Toggle italic",disabled:!0},e.createElement(p,{className:"h-4 w-4"}))}const z={title:"ui/Toggle",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A two-state button that can be either on or off."}}},excludeStories:/.*Demo$|.*Outline$|.*WithText$|.*Sm$|.*Lg$|.*Disabled$/,render:()=>e.createElement(m,null)},o={},H={render:()=>e.createElement(E,null)},I={render:()=>e.createElement(h,null)},r={render:()=>e.createElement(w,null)},n={render:()=>e.createElement(b,null)},U={render:()=>e.createElement(f,null)},l={name:"when toggle is clicked, should change pressed state",tags:["!dev","!autodocs"],render:()=>e.createElement(m,null),play:async({canvasElement:d,step:i})=>{const c=y(d);await i("verify toggle is initially not pressed",async()=>{const a=c.getByRole("button");await g(a).toHaveAttribute("data-state","off")}),await i("click toggle to press it",async()=>{const a=c.getByRole("button");await T.click(a)}),await i("verify toggle is now pressed",async()=>{const a=c.getByRole("button");await g(a).toHaveAttribute("data-state","on")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"The default form of the toggle.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleSm />
}`,...r.parameters?.docs?.source},description:{story:"Small sized toggle.",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleLg />
}`,...n.parameters?.docs?.source},description:{story:"Large sized toggle.",...n.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "when toggle is clicked, should change pressed state",
  tags: ["!dev", "!autodocs"],
  render: () => <ToggleDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("verify toggle is initially not pressed", async () => {
      const toggle = canvas.getByRole("button");
      await expect(toggle).toHaveAttribute("data-state", "off");
    });
    await step("click toggle to press it", async () => {
      const toggle = canvas.getByRole("button");
      await userEvent.click(toggle);
    });
    await step("verify toggle is now pressed", async () => {
      const toggle = canvas.getByRole("button");
      await expect(toggle).toHaveAttribute("data-state", "on");
    });
  }
}`,...l.parameters?.docs?.source}}};const K=["ToggleDemo","ToggleOutline","ToggleWithText","ToggleSm","ToggleLg","ToggleDisabled","Default","Outline","WithText","Small","Large","Disabled","ShouldToggleState"];export{o as Default,U as Disabled,n as Large,H as Outline,l as ShouldToggleState,r as Small,m as ToggleDemo,f as ToggleDisabled,b as ToggleLg,E as ToggleOutline,w as ToggleSm,h as ToggleWithText,I as WithText,K as __namedExportsOrder,z as default};

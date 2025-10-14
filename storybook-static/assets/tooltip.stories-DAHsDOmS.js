import{T as c,a as m,b as h,c as u}from"./tooltip-CSn3Cxo6.js";import{P as g}from"./plus-ZOuFRyTD.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dc_FVRD7.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-BUJQGk3H.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";import"./index-B3LxitfY.js";import"./utils-DgWKjmuI.js";import"./createLucideIcon-ng3sinjr.js";const{expect:p,userEvent:d,waitFor:l,within:y}=__STORYBOOK_MODULE_TEST__,K={title:"ui/Tooltip",component:c,tags:["autodocs"],argTypes:{side:{options:["top","bottom","left","right"],control:{type:"radio"},description:"The preferred side of the anchor to render against"},align:{options:["start","center","end"],control:{type:"radio"},description:"The preferred alignment against the anchor"},children:{control:"text",description:"The content of the tooltip"}},args:{side:"top",align:"center",children:"Add to library"},parameters:{layout:"centered",docs:{description:{component:`A popup that displays information related to an element when the element
receives keyboard focus or the mouse hovers over it.`}}},render:e=>React.createElement(m,{delayDuration:700},React.createElement(h,null,React.createElement(u,null,React.createElement(g,{className:"h-4 w-4"}),React.createElement("span",{className:"sr-only"},"Add")),React.createElement(c,{side:e.side,align:e.align},e.children)))},t={},o={args:{side:"bottom"}},r={args:{side:"left"}},a={args:{side:"right"}},s={name:"when hovering over trigger, should show hover tooltip content",tags:["!dev","!autodocs"],play:async({canvasElement:e,step:i})=>{const n=await y(e.ownerDocument.body).findByRole("button",{name:/add/i});await i("hover over trigger",async()=>{await d.hover(n),await l(()=>p(e.ownerDocument.body.querySelector('[data-slot="tooltip-content"]')).toBeVisible())}),await i("unhover trigger",async()=>{await d.unhover(n),await l(()=>p(e.ownerDocument.body.querySelector('[data-slot="tooltip-content"]')).not.toBeVisible())})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"The default form of the tooltip.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    side: "bottom"
  }
}`,...o.parameters?.docs?.source},description:{story:"Use the `bottom` side to display the tooltip below the element.",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    side: "left"
  }
}`,...r.parameters?.docs?.source},description:{story:"Use the `left` side to display the tooltip to the left of the element.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    side: "right"
  }
}`,...a.parameters?.docs?.source},description:{story:"Use the `right` side to display the tooltip to the right of the element.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "when hovering over trigger, should show hover tooltip content",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole("button", {
      name: /add/i
    });
    await step("hover over trigger", async () => {
      await userEvent.hover(triggerBtn);
      await waitFor(() => expect(canvasElement.ownerDocument.body.querySelector('[data-slot="tooltip-content"]')).toBeVisible());
    });
    await step("unhover trigger", async () => {
      await userEvent.unhover(triggerBtn);
      await waitFor(() => expect(canvasElement.ownerDocument.body.querySelector('[data-slot="tooltip-content"]')).not.toBeVisible());
    });
  }
}`,...s.parameters?.docs?.source}}};const M=["Default","Bottom","Left","Right","ShouldShowOnHover"];export{o as Bottom,t as Default,r as Left,a as Right,s as ShouldShowOnHover,M as __namedExportsOrder,K as default};

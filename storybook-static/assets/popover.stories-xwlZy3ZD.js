import{e}from"./iframe-BiU2suBC.js";import{B as d}from"./button-o25yRkrR.js";import{I as o}from"./input-BRT9-IAl.js";import{L as a}from"./label-DQUVhDdS.js";import{P as i,a as u,b as g}from"./popover-C9OQbDuP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:v,userEvent:h,within:E}=__STORYBOOK_MODULE_TEST__;function s(){return e.createElement(i,null,e.createElement(u,{asChild:!0},e.createElement(d,{variant:"outline"},"Open popover")),e.createElement(g,{className:"w-80"},e.createElement("div",{className:"grid gap-4"},e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"leading-none font-medium"},"Dimensions"),e.createElement("p",{className:"text-muted-foreground text-sm"},"Set the dimensions for the layer.")),e.createElement("div",{className:"grid gap-2"},e.createElement("div",{className:"grid grid-cols-3 items-center gap-4"},e.createElement(a,{htmlFor:"width"},"Width"),e.createElement(o,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})),e.createElement("div",{className:"grid grid-cols-3 items-center gap-4"},e.createElement(a,{htmlFor:"maxWidth"},"Max. width"),e.createElement(o,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})),e.createElement("div",{className:"grid grid-cols-3 items-center gap-4"},e.createElement(a,{htmlFor:"height"},"Height"),e.createElement(o,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})),e.createElement("div",{className:"grid grid-cols-3 items-center gap-4"},e.createElement(a,{htmlFor:"maxHeight"},"Max. height"),e.createElement(o,{id:"maxHeight",defaultValue:"none",className:"col-span-2 h-8"}))))))}const Y={title:"ui/Popover",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays rich content in a portal, triggered by a button."}}}},t={render:()=>e.createElement(s,null)},r={name:"when popover trigger is clicked, should open popover",tags:["!dev","!autodocs"],render:()=>e.createElement(s,null),play:async({canvasElement:p,step:m})=>{const n=E(p);await m("click 'Open popover' button to open popover",async()=>{const l=n.getByRole("button",{name:/open popover/i});await h.click(l)});const c=await n.findByText(/Dimensions/i);await v(c).toBeVisible()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <PopoverDemo />
}`,...t.parameters?.docs?.source},description:{story:"The default form of the popover with a form for setting dimensions.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "when popover trigger is clicked, should open popover",
  tags: ["!dev", "!autodocs"],
  render: () => <PopoverDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click 'Open popover' button to open popover", async () => {
      const openButton = canvas.getByRole("button", {
        name: /open popover/i
      });
      await userEvent.click(openButton);
    });
    const popoverHeading = await canvas.findByText(/Dimensions/i);
    await expect(popoverHeading).toBeVisible();
  }
}`,...r.parameters?.docs?.source}}};const j=["Default","ShouldOpenPopover"];export{t as Default,r as ShouldOpenPopover,j as __namedExportsOrder,Y as default};

import{B as m}from"./button-o25yRkrR.js";import{C as c,a as d,b as u}from"./collapsible-BBlLZhT-.js";import{r as e}from"./iframe-BiU2suBC.js";import{C as x}from"./chevrons-up-down-DEqJJug6.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BUO4hgFb.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-7qFhJqzR.js";import"./index-Ds7joiVY.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-ng3sinjr.js";const{expect:l,userEvent:i}=__STORYBOOK_MODULE_TEST__;function p(){const[t,a]=e.useState(!1);return e.createElement(c,{open:t,onOpenChange:a,className:"flex w-[350px] flex-col gap-2"},e.createElement("div",{className:"flex items-center justify-between gap-4 px-4"},e.createElement("h4",{className:"text-sm font-semibold"},"@peduarte starred 3 repositories"),e.createElement(d,{asChild:!0},e.createElement(m,{variant:"ghost",size:"icon",className:"size-8"},e.createElement(x,null),e.createElement("span",{className:"sr-only"},"Toggle")))),e.createElement("div",{className:"rounded-md border px-4 py-2 font-mono text-sm"},"@radix-ui/primitives"),e.createElement(u,{className:"flex flex-col gap-2"},e.createElement("div",{className:"rounded-md border px-4 py-2 font-mono text-sm"},"@radix-ui/colors"),e.createElement("div",{className:"rounded-md border px-4 py-2 font-mono text-sm"},"@stitches/react")))}const z={title:"ui/Collapsible",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An interactive component which expands/collapses a panel."}}},excludeStories:/.*Demo$/},o={render:()=>e.createElement(p,null)},n={name:"when collapsible trigger is clicked, should show content",tags:["!dev","!autodocs"],render:()=>e.createElement(p,null),play:async({canvas:t,step:a})=>{const r=t.getByRole("button");await a("Open the collapsible",async()=>{await i.click(r,{delay:100});const s=await t.findByText("@radix-ui/colors");l(s).toBeVisible()}),await a("Close the collapsible",async()=>{await i.click(r,{delay:100});const s=t.queryByText("@radix-ui/colors");l(s).not.toBeInTheDocument()})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <CollapsibleDemo />
}`,...o.parameters?.docs?.source},description:{story:"The default form of the collapsible with repository list example.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "when collapsible trigger is clicked, should show content",
  tags: ["!dev", "!autodocs"],
  render: () => <CollapsibleDemo />,
  play: async ({
    canvas,
    step
  }) => {
    const trigger = canvas.getByRole("button");
    await step("Open the collapsible", async () => {
      await userEvent.click(trigger, {
        delay: 100
      });
      const content = await canvas.findByText("@radix-ui/colors");
      expect(content).toBeVisible();
    });
    await step("Close the collapsible", async () => {
      await userEvent.click(trigger, {
        delay: 100
      });
      const content = canvas.queryByText("@radix-ui/colors");
      expect(content).not.toBeInTheDocument();
    });
  }
}`,...n.parameters?.docs?.source}}};const U=["CollapsibleDemo","Default","ShouldOpenClose"];export{p as CollapsibleDemo,o as Default,n as ShouldOpenClose,U as __namedExportsOrder,z as default};

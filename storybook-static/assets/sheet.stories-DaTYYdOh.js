import{e}from"./iframe-BiU2suBC.js";import{B as t}from"./button-o25yRkrR.js";import{I as y}from"./input-BRT9-IAl.js";import{L as E}from"./label-DQUVhDdS.js";import{S as n,a as r,b as o,c as a,d as s,e as i,f as b,g as C}from"./sheet-CzHa_wgz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-BZmy0mfy.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-CpP8DfwQ.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./x-CCE6G7Ad.js";import"./createLucideIcon-ng3sinjr.js";const{expect:B,userEvent:D,within:O}=__STORYBOOK_MODULE_TEST__;function g(){return e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open")),e.createElement(o,null,e.createElement(a,null,e.createElement(s,null,"Edit profile"),e.createElement(i,null,"Make changes to your profile here. Click save when you're done.")),e.createElement("div",{className:"grid flex-1 auto-rows-min gap-6 px-4"},e.createElement("div",{className:"grid gap-3"},e.createElement(E,{htmlFor:"sheet-demo-name"},"Name"),e.createElement(y,{id:"sheet-demo-name",defaultValue:"Pedro Duarte"})),e.createElement("div",{className:"grid gap-3"},e.createElement(E,{htmlFor:"sheet-demo-username"},"Username"),e.createElement(y,{id:"sheet-demo-username",defaultValue:"@peduarte"}))),e.createElement(b,null,e.createElement(t,{type:"submit"},"Save changes"),e.createElement(C,{asChild:!0},e.createElement(t,{variant:"outline"},"Close")))))}const ee={title:"ui/Sheet",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Extends the Dialog component to display content that complements the main
content of the screen.`}}},excludeStories:/.*Demo$/},l={render:()=>e.createElement(g,null)},c={render:()=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Right")),e.createElement(o,{side:"right"},e.createElement(a,null,e.createElement(s,null,"Are you absolutely sure?"),e.createElement(i,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers."))))},m={render:()=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Left")),e.createElement(o,{side:"left"},e.createElement(a,null,e.createElement(s,null,"Are you absolutely sure?"),e.createElement(i,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers."))))},u={render:()=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Top")),e.createElement(o,{side:"top"},e.createElement(a,null,e.createElement(s,null,"Are you absolutely sure?"),e.createElement(i,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers."))))},d={render:()=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Bottom")),e.createElement(o,{side:"bottom"},e.createElement(a,null,e.createElement(s,null,"Are you absolutely sure?"),e.createElement(i,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers."))))},p={render:()=>e.createElement(n,null,e.createElement(r,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Custom Size")),e.createElement(o,{className:"w-[400px] sm:w-[540px]"},e.createElement(a,null,e.createElement(s,null,"Are you absolutely sure?"),e.createElement(i,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers."))))},h={name:"when sheet trigger is clicked, should open sheet",tags:["!dev","!autodocs"],render:()=>e.createElement(g,null),play:async({canvasElement:T,step:v})=>{const S=O(T);await v("click 'Open' button to open sheet",async()=>{const w=S.getByRole("button",{name:/^open$/i});await D.click(w)});const f=await S.findByText(/Edit profile/i);await B(f).toBeVisible()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SheetDemo />
}`,...l.parameters?.docs?.source},description:{story:"The default form of the sheet.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Right</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...c.parameters?.docs?.source},description:{story:"Sheet with side prop set to right (default).",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...m.parameters?.docs?.source},description:{story:"Sheet with side prop set to left.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...u.parameters?.docs?.source},description:{story:"Sheet with side prop set to top.",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...d.parameters?.docs?.source},description:{story:"Sheet with side prop set to bottom.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Custom Size</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...p.parameters?.docs?.source},description:{story:"Sheet with custom size.",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "when sheet trigger is clicked, should open sheet",
  tags: ["!dev", "!autodocs"],
  render: () => <SheetDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click 'Open' button to open sheet", async () => {
      const openButton = canvas.getByRole("button", {
        name: /^open$/i
      });
      await userEvent.click(openButton);
    });
    const sheetTitle = await canvas.findByText(/Edit profile/i);
    await expect(sheetTitle).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}};const te=["SheetDemo","Default","SideRight","SideLeft","SideTop","SideBottom","CustomSize","ShouldOpenSheet"];export{p as CustomSize,l as Default,g as SheetDemo,h as ShouldOpenSheet,d as SideBottom,m as SideLeft,c as SideRight,u as SideTop,te as __namedExportsOrder,ee as default};

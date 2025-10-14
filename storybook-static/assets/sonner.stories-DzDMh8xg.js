import{t as d}from"./index-DmqJAwmu.js";import{B as l}from"./button-o25yRkrR.js";import{T as a}from"./sonner-C3seWNUZ.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";const{expect:n,userEvent:u,waitFor:p,within:T}=__STORYBOOK_MODULE_TEST__;function b(){return React.createElement(l,{variant:"outline",onClick:()=>d("Event has been created",{description:"Sunday, December 03, 2023 at 9:00 AM",action:{label:"Undo",onClick:()=>console.log("Undo")}})},"Show Toast")}const R={title:"ui/Sonner",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An opinionated toast component for React."}}},excludeStories:/.*Demo$/,render:()=>React.createElement("div",{className:"flex min-h-[350px] items-center justify-center"},React.createElement(b,null),React.createElement(a,null))},t={},o={name:"when button clicked, should display toast",tags:["!dev","!autodocs"],play:async({canvasElement:s})=>{const e=T(s.ownerDocument.body),c=e.getByText("Show Toast");await u.click(c),await p(()=>{const m=e.getByText("Event has been created");n(m).toBeVisible()},{timeout:3e3});const r=e.getByText("Sunday, December 03, 2023 at 9:00 AM");await n(r).toBeVisible();const i=e.getByRole("button",{name:/undo/i});await n(i).toBeVisible()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:"The default form of the sonner toast.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "when button clicked, should display toast",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);

    // 🎯 목적: Toast 버튼 클릭 시 Toast가 표시되고 내용이 올바른지 확인
    const button = canvas.getByText("Show Toast");
    await userEvent.click(button);

    // Toast가 표시될 때까지 대기
    await waitFor(() => {
      const toastTitle = canvas.getByText("Event has been created");
      expect(toastTitle).toBeVisible();
    }, {
      timeout: 3000
    });

    // Toast description 확인
    const toastDescription = canvas.getByText("Sunday, December 03, 2023 at 9:00 AM");
    await expect(toastDescription).toBeVisible();

    // Undo 버튼 확인
    const undoButton = canvas.getByRole("button", {
      name: /undo/i
    });
    await expect(undoButton).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};const _=["SonnerDemo","Default","ShouldShowToast"];export{t as Default,o as ShouldShowToast,b as SonnerDemo,_ as __namedExportsOrder,R as default};

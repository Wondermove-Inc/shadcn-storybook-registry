import{u as I,a as O,o as A,F as R,b as _,c as M,d as z,e as W,f as Y,g as j,h as q}from"./form-DtlXXF_B.js";import{p as b}from"./index-w732yalD.js";import{r as e}from"./iframe-BiU2suBC.js";import{t as G}from"./index-DmqJAwmu.js";import{B as c}from"./button-o25yRkrR.js";import{C as h,f as F}from"./calendar-CPs6VEsL.js";import{I as N}from"./input-BRT9-IAl.js";import{L as g}from"./label-DQUVhDdS.js";import{P as f,a as E,b as w}from"./popover-C9OQbDuP.js";import{a as K}from"./utils-DgWKjmuI.js";import{C}from"./chevron-down-DnTtteVn.js";import{C as S}from"./calendar-BJ6ZmEyF.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-dSc6CJZX.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./index-DF-uitis.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:x,userEvent:P,waitFor:B,within:U}=__STORYBOOK_MODULE_TEST__;function L(){const[n,a]=e.useState(!1),[t,o]=e.useState(void 0);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date",className:"px-1"},"Date of birth"),e.createElement(f,{open:n,onOpenChange:a},e.createElement(E,{asChild:!0},e.createElement(c,{variant:"outline",id:"date",className:"w-48 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(C,null))),e.createElement(w,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(h,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:s=>{o(s),a(!1)}}))))}function $(){const[n,a]=e.useState();return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date-input",className:"px-1"},"Date"),e.createElement("div",{className:"relative"},e.createElement(N,{id:"date-input",type:"text",placeholder:"Select date",value:n?F(n,"PPP"):"",readOnly:!0,className:"pr-10"}),e.createElement(f,null,e.createElement(E,{asChild:!0},e.createElement(c,{variant:"ghost",size:"icon",className:"absolute top-0 right-0 h-full px-3"},e.createElement(S,{className:"h-4 w-4"}))),e.createElement(w,{className:"w-auto p-0",align:"end"},e.createElement(h,{mode:"single",selected:n,onSelect:a})))))}function H(){const[n,a]=e.useState(!1),[t,o]=e.useState(void 0);return e.createElement("div",{className:"flex gap-4"},e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date-picker",className:"px-1"},"Date"),e.createElement(f,{open:n,onOpenChange:a},e.createElement(E,{asChild:!0},e.createElement(c,{variant:"outline",id:"date-picker",className:"w-32 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(C,null))),e.createElement(w,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(h,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:s=>{o(s),a(!1)}})))),e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"time",className:"px-1"},"Time"),e.createElement(N,{type:"time",id:"time",name:"time",placeholder:"00:00",className:"w-28 font-normal"})))}function J(){const[n,a]=e.useState(!1),[t,o]=e.useState("In 2 days"),[s,l]=e.useState(b(t)||void 0),[T,y]=e.useState(s);function k(r){return r?r.toLocaleDateString("en-US",{day:"2-digit",month:"long",year:"numeric"}):""}return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date",className:"px-1"},"Schedule Date"),e.createElement("div",{className:"relative flex gap-2"},e.createElement(N,{id:"date",value:t,placeholder:"Tomorrow or next week",className:"bg-background pr-10",onChange:r=>{o(r.target.value);const D=b(r.target.value);D&&(l(D),y(D))},onKeyDown:r=>{r.key==="ArrowDown"&&(r.preventDefault(),a(!0))}}),e.createElement(f,{open:n,onOpenChange:a},e.createElement(E,{asChild:!0},e.createElement(c,{id:"date-picker",variant:"ghost",className:"absolute top-1/2 right-2 size-6 -translate-y-1/2"},e.createElement(S,{className:"size-3.5"}),e.createElement("span",{className:"sr-only"},"Select date"))),e.createElement(w,{className:"w-auto overflow-hidden p-0",align:"end"},e.createElement(h,{mode:"single",selected:s,captionLayout:"dropdown",month:T,onMonthChange:y,onSelect:r=>{l(r),o(k(r)),a(!1)}})))),e.createElement("div",{className:"text-muted-foreground px-1 text-sm"},"Your post will be published on"," ",e.createElement("span",{className:"font-medium"},k(s)),"."))}const V=A({dob:q({message:"A date of birth is required."})});function Q(){const n=I({resolver:O(V)});function a(t){G("You submitted the following values",{description:e.createElement("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4"},e.createElement("code",{className:"text-white"},JSON.stringify(t,null,2)))})}return e.createElement(R,{...n},e.createElement("form",{onSubmit:n.handleSubmit(a),className:"space-y-8"},e.createElement(_,{control:n.control,name:"dob",render:({field:t})=>e.createElement(M,{className:"flex flex-col"},e.createElement(z,null,"Date of birth"),e.createElement(f,null,e.createElement(E,{asChild:!0},e.createElement(W,null,e.createElement(c,{variant:"outline",className:K("w-[240px] pl-3 text-left font-normal",!t.value&&"text-muted-foreground")},t.value?F(t.value,"PPP"):e.createElement("span",null,"Pick a date"),e.createElement(S,{className:"ml-auto h-4 w-4 opacity-50"})))),e.createElement(w,{className:"w-auto p-0",align:"start"},e.createElement(h,{mode:"single",selected:t.value,onSelect:t.onChange,disabled:o=>o>new Date||o<new Date("1900-01-01"),captionLayout:"dropdown"}))),e.createElement(Y,null,"Your date of birth is used to calculate your age."),e.createElement(j,null))}),e.createElement(c,{type:"submit"},"Submit")))}const Te={title:"ui/DatePicker",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A date picker component that combines a calendar with a popover."}}},excludeStories:/.*Demo$|FormSchema/},i={},m={render:()=>e.createElement($,null)},d={render:()=>e.createElement(H,null)},u={render:()=>e.createElement(J,null)},p={render:()=>e.createElement(Q,null)},v={name:"when user clicks trigger and selects date, should display selected date",tags:["!dev","!autodocs"],render:()=>e.createElement(L,null),play:async({canvasElement:n})=>{const a=U(n),t=a.getByRole("button",{name:/select date/i});await x(t).toBeInTheDocument(),await P.click(t),await B(async()=>{const l=await a.findAllByRole("button");await x(l.length).toBeGreaterThan(1)});const s=a.getAllByRole("button").find(l=>l.textContent?.trim()==="15");s&&(await P.click(s),await B(()=>{x(t.textContent).not.toMatch(/select date/i)}))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source},description:{story:"Date of Birth Picker with dropdown calendar for month/year selection.",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PickerWithInputDemo />
}`,...m.parameters?.docs?.source},description:{story:"Date picker with input field.",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <DateAndTimePickerDemo />
}`,...d.parameters?.docs?.source},description:{story:"Date picker with time input field.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <NaturalLanguagePickerDemo />
}`,...u.parameters?.docs?.source},description:{story:`Natural Language Picker - parse natural language dates

Note: This example requires installing the chrono-node package:
npm install chrono-node`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FormDemo />
}`,...p.parameters?.docs?.source},description:{story:`Form Integration with React Hook Form

Note: This example requires additional packages:
npm install react-hook-form zod @hookform/resolvers/zod`,...p.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "when user clicks trigger and selects date, should display selected date",
  tags: ["!dev", "!autodocs"],
  render: () => <DatePickerDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Date Picker가 트리거 버튼 클릭으로 열리고, 날짜 선택 후 표시되는지 확인
    const triggerButton = canvas.getByRole("button", {
      name: /select date/i
    });
    await expect(triggerButton).toBeInTheDocument();

    // 트리거 버튼 클릭하여 Calendar 열기
    await userEvent.click(triggerButton);

    // Calendar가 열렸는지 확인 (날짜 버튼 확인)
    await waitFor(async () => {
      const dateButtons = await canvas.findAllByRole("button");
      await expect(dateButtons.length).toBeGreaterThan(1);
    });

    // 날짜 버튼 찾기 (15일 선택)
    const dateButtons = canvas.getAllByRole("button");
    const date15Button = dateButtons.find(button => button.textContent?.trim() === "15");
    if (date15Button) {
      // 날짜 클릭
      await userEvent.click(date15Button);

      // 선택된 날짜가 버튼에 표시되는지 확인 (Popover가 닫히고 날짜가 표시됨)
      await waitFor(() => {
        expect(triggerButton.textContent).not.toMatch(/select date/i);
      });
    }
  }
}`,...v.parameters?.docs?.source}}};const Ie=["DatePickerDemo","Default","PickerWithInput","DateAndTimePicker","NaturalLanguagePicker","FormIntegration","ShouldSelectDate"];export{d as DateAndTimePicker,L as DatePickerDemo,i as Default,p as FormIntegration,u as NaturalLanguagePicker,m as PickerWithInput,v as ShouldSelectDate,Ie as __namedExportsOrder,Te as default};

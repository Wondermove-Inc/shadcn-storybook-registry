import{C as v}from"./checkbox-D-xrJ2CG.js";import{I as x}from"./input-BRT9-IAl.js";import{L as d}from"./label-DQUVhDdS.js";import{r as e}from"./iframe-BiU2suBC.js";import"./utils-DgWKjmuI.js";import"./check-DwuV1CBk.js";import"./createLucideIcon-ng3sinjr.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BT5_MN2X.js";import"./index-Dc_FVRD7.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-BT53Il6f.js";import"./index-DJRgpZyQ.js";import"./index-7qFhJqzR.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,userEvent:m,within:p}=__STORYBOOK_MODULE_TEST__;function u(){return e.createElement("div",null,e.createElement("div",{className:"flex items-center space-x-2"},e.createElement(v,{id:"terms"}),e.createElement(d,{htmlFor:"terms"},"Accept terms and conditions")))}const N={title:"ui/Label",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Renders an accessible label associated with controls."}}},args:{children:"Label",htmlFor:"input"},excludeStories:/.*Demo$/},s={},l={render:()=>e.createElement(u,null)},r={name:"when label is clicked, should toggle the associated checkbox",tags:["!dev","!autodocs"],render:()=>e.createElement(u,null),play:async({canvasElement:n})=>{const t=p(n),o=t.getByText("Accept terms and conditions"),a=t.getByRole("checkbox");await c(a).not.toBeChecked(),await m.click(o),await c(a).toBeChecked(),await m.click(o),await c(a).not.toBeChecked()}},i={name:"when label with htmlFor is clicked, should focus the associated input",tags:["!dev","!autodocs"],render:()=>{const[n,t]=e.useState("");return e.createElement("div",{className:"flex flex-col gap-2"},e.createElement(d,{htmlFor:"email-input"},"Email Address"),e.createElement(x,{id:"email-input",type:"email",placeholder:"Enter your email",value:n,onChange:o=>t(o.target.value)}),e.createElement("div",{className:"text-muted-foreground text-sm","data-testid":"value-display"},"Value: ",n||"(empty)"))},play:async({canvasElement:n})=>{const t=p(n),o=t.getByText("Email Address"),a=t.getByPlaceholderText("Enter your email");await c(a).not.toHaveFocus(),await m.click(o),await c(a).toHaveFocus(),await m.type(a,"test@example.com");const h=t.getByTestId("value-display");await c(h).toHaveTextContent("Value: test@example.com")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The default form of the label.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <LabelDemo />
}`,...l.parameters?.docs?.source},description:{story:"Label with checkbox example.",...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "when label is clicked, should toggle the associated checkbox",
  tags: ["!dev", "!autodocs"],
  render: () => <LabelDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Accept terms and conditions");
    const checkbox = canvas.getByRole("checkbox") as HTMLInputElement;

    // 🎯 목적: Label 클릭 시 연결된 checkbox가 토글되는지 확인
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(label);
    await expect(checkbox).toBeChecked();
    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "when label with htmlFor is clicked, should focus the associated input",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [value, setValue] = React.useState("");
    return <div className="flex flex-col gap-2">
        <Label htmlFor="email-input">Email Address</Label>
        <Input id="email-input" type="email" placeholder="Enter your email" value={value} onChange={e => setValue(e.target.value)} />
        <div className="text-muted-foreground text-sm" data-testid="value-display">
          Value: {value || "(empty)"}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: htmlFor 속성으로 연결된 Label 클릭 시 Input에 포커스가 이동하는지 확인

    // Label과 Input 요소 찾기
    const label = canvas.getByText("Email Address");
    const input = canvas.getByPlaceholderText("Enter your email") as HTMLInputElement;

    // 초기 상태 확인
    await expect(input).not.toHaveFocus();

    // Label 클릭 시 Input에 포커스 이동
    await userEvent.click(label);
    await expect(input).toHaveFocus();

    // Input에 값 입력
    await userEvent.type(input, "test@example.com");

    // 값 표시 확인
    const valueDisplay = canvas.getByTestId("value-display");
    await expect(valueDisplay).toHaveTextContent("Value: test@example.com");
  }
}`,...i.parameters?.docs?.source}}};const O=["Default","WithCheckbox","ShouldToggleCheckboxWhenClicked","ShouldFocusInputWithHtmlFor"];export{s as Default,i as ShouldFocusInputWithHtmlFor,r as ShouldToggleCheckboxWhenClicked,l as WithCheckbox,O as __namedExportsOrder,N as default};

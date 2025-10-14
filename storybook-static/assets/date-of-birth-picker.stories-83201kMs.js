import{r as e}from"./iframe-BiU2suBC.js";import{B as m}from"./button-o25yRkrR.js";import{C as u}from"./calendar-CPs6VEsL.js";import{L as g}from"./label-DQUVhDdS.js";import{P as f,a as v,b as h}from"./popover-C9OQbDuP.js";import{C as w}from"./chevron-down-DnTtteVn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:c,userEvent:d,waitFor:p,within:B}=__STORYBOOK_MODULE_TEST__,V={title:"ui/Calendar/Blocks/Date of Birth Picker",tags:["autodocs"],parameters:{layout:"centered"}},s={render:()=>{const[o,n]=e.useState(!1),[t,r]=e.useState(void 0);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date",className:"px-1"},"Date of birth"),e.createElement(f,{open:o,onOpenChange:n},e.createElement(v,{asChild:!0},e.createElement(m,{variant:"outline",id:"date",className:"w-48 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(w,null))),e.createElement(h,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(u,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:a=>{r(a),n(!1)}}))))}},l={name:"when user clicks trigger and selects birth date, should display selected date",tags:["!dev","!autodocs"],render:()=>{const[o,n]=e.useState(!1),[t,r]=e.useState(void 0);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(g,{htmlFor:"date",className:"px-1"},"Date of birth"),e.createElement(f,{open:o,onOpenChange:n},e.createElement(v,{asChild:!0},e.createElement(m,{variant:"outline",id:"date",className:"w-48 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(w,null))),e.createElement(h,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(u,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:a=>{r(a),n(!1)}}))))},play:async({canvasElement:o})=>{const n=B(o),t=n.getByRole("button",{name:/select date/i});await c(t).toBeInTheDocument(),await d.click(t),await p(async()=>{const i=await n.findAllByRole("button");await c(i.length).toBeGreaterThan(1)});const a=n.getAllByRole("button").find(i=>i.textContent?.trim()==="15");a&&(await d.click(a),await p(()=>{c(t.textContent).not.toMatch(/select date/i)}))}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date" className="w-48 justify-between font-normal">
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar mode="single" selected={date} captionLayout="dropdown" onSelect={date => {
            setDate(date);
            setOpen(false);
          }} />
          </PopoverContent>
        </Popover>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "when user clicks trigger and selects birth date, should display selected date",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date" className="w-48 justify-between font-normal">
              {date ? date.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar mode="single" selected={date} captionLayout="dropdown" onSelect={date => {
            setDate(date);
            setOpen(false);
          }} />
          </PopoverContent>
        </Popover>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Date of Birth Picker가 트리거 버튼 클릭으로 열리고, 날짜 선택 후 표시되는지 확인
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
}`,...l.parameters?.docs?.source}}};const W=["Default","ShouldSelectBirthDate"];export{s as Default,l as ShouldSelectBirthDate,W as __namedExportsOrder,V as default};

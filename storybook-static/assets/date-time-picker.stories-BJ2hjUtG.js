import{r as e}from"./iframe-BiU2suBC.js";import{B as v}from"./button-o25yRkrR.js";import{C as f}from"./calendar-CPs6VEsL.js";import{I as w}from"./input-BRT9-IAl.js";import{L as p}from"./label-DQUVhDdS.js";import{P as g,a as h,b as x}from"./popover-C9OQbDuP.js";import{C as k}from"./chevron-down-DnTtteVn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:o,userEvent:l,waitFor:u,within:b}=__STORYBOOK_MODULE_TEST__,Z={title:"ui/Calendar/Blocks/Date and Time Picker",tags:["autodocs"],parameters:{layout:"centered"}},s={render:()=>{const[r,a]=e.useState(!1),[t,c]=e.useState(void 0);return e.createElement("div",{className:"flex gap-4"},e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(p,{htmlFor:"date-picker",className:"px-1"},"Date"),e.createElement(g,{open:r,onOpenChange:a},e.createElement(h,{asChild:!0},e.createElement(v,{variant:"outline",id:"date-picker",className:"w-32 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(k,null))),e.createElement(x,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(f,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:n=>{c(n),a(!1)}})))),e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(p,{htmlFor:"time-picker",className:"px-1"},"Time"),e.createElement(w,{type:"time",id:"time-picker",step:"1",defaultValue:"10:30:00",className:"bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"})))}},d={name:"when user selects date and enters time, should display both values",tags:["!dev","!autodocs"],render:()=>{const[r,a]=e.useState(!1),[t,c]=e.useState(void 0);return e.createElement("div",{className:"flex gap-4"},e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(p,{htmlFor:"date-picker",className:"px-1"},"Date"),e.createElement(g,{open:r,onOpenChange:a},e.createElement(h,{asChild:!0},e.createElement(v,{variant:"outline",id:"date-picker",className:"w-32 justify-between font-normal"},t?t.toLocaleDateString():"Select date",e.createElement(k,null))),e.createElement(x,{className:"w-auto overflow-hidden p-0",align:"start"},e.createElement(f,{mode:"single",selected:t,captionLayout:"dropdown",onSelect:n=>{c(n),a(!1)}})))),e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(p,{htmlFor:"time-picker",className:"px-1"},"Time"),e.createElement(w,{type:"time",id:"time-picker",step:"1",defaultValue:"10:30:00",className:"bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"})))},play:async({canvasElement:r})=>{const a=b(r),t=a.getByRole("button",{name:/select date/i});await o(t).toBeInTheDocument(),await l.click(t),await u(async()=>{const m=await a.findAllByRole("button");await o(m.length).toBeGreaterThan(1)});const n=a.getAllByRole("button").find(m=>m.textContent?.trim()==="15");n&&(await l.click(n),await u(()=>{o(t.textContent).not.toMatch(/select date/i)}));const i=a.getByRole("textbox",{name:/time/i});await o(i).toBeInTheDocument(),await o(i).toHaveValue("10:30:00"),await l.clear(i),await l.type(i,"14:30:00"),await u(()=>{o(i).toHaveValue("14:30:00")})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="date-picker" className="px-1">
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
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
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="time-picker" className="px-1">
            Time
          </Label>
          <Input type="time" id="time-picker" step="1" defaultValue="10:30:00" className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "when user selects date and enters time, should display both values",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return <div className="flex gap-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="date-picker" className="px-1">
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
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
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="time-picker" className="px-1">
            Time
          </Label>
          <Input type="time" id="time-picker" step="1" defaultValue="10:30:00" className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: DateTime Picker가 날짜와 시간을 모두 선택할 수 있는지 확인
    const dateButton = canvas.getByRole("button", {
      name: /select date/i
    });
    await expect(dateButton).toBeInTheDocument();

    // 날짜 선택: 트리거 버튼 클릭
    await userEvent.click(dateButton);

    // Calendar가 열렸는지 확인
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

      // 날짜가 선택되었는지 확인 (버튼 텍스트 변경)
      await waitFor(() => {
        expect(dateButton.textContent).not.toMatch(/select date/i);
      });
    }

    // 시간 입력: time input 찾기
    const timeInput = canvas.getByRole("textbox", {
      name: /time/i
    });
    await expect(timeInput).toBeInTheDocument();

    // 시간 값 확인 (기본값이 설정되어 있음)
    await expect(timeInput).toHaveValue("10:30:00");

    // 시간 변경
    await userEvent.clear(timeInput);
    await userEvent.type(timeInput, "14:30:00");

    // 변경된 시간 값 확인
    await waitFor(() => {
      expect(timeInput).toHaveValue("14:30:00");
    });
  }
}`,...d.parameters?.docs?.source}}};const $=["Default","ShouldSelectDateAndTime"];export{s as Default,d as ShouldSelectDateAndTime,$ as __namedExportsOrder,Z as default};

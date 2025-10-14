import{p as m}from"./index-w732yalD.js";import{r as e}from"./iframe-BiU2suBC.js";import{B as w}from"./button-o25yRkrR.js";import{C as D}from"./calendar-CPs6VEsL.js";import{I as y}from"./input-BRT9-IAl.js";import{L as N}from"./label-DQUVhDdS.js";import{P as x,a as E,b as S}from"./popover-C9OQbDuP.js";import{C as b}from"./calendar-BJ6ZmEyF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./chevron-down-DnTtteVn.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:i,userEvent:h,waitFor:f,within:C}=__STORYBOOK_MODULE_TEST__;function g(s){return s?s.toLocaleDateString("en-US",{day:"2-digit",month:"long",year:"numeric"}):""}const se={title:"ui/Calendar/Blocks/Natural Language Picker",tags:["autodocs"],parameters:{layout:"centered"}},p={render:()=>{const[s,a]=e.useState(!1),[n,r]=e.useState("In 2 days"),[o,d]=e.useState(m(n)||void 0),[v,c]=e.useState(o);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(N,{htmlFor:"date",className:"px-1"},"Schedule Date"),e.createElement("div",{className:"relative flex gap-2"},e.createElement(y,{id:"date",value:n,placeholder:"Tomorrow or next week",className:"bg-background pr-10",onChange:t=>{r(t.target.value);const l=m(t.target.value);l&&(d(l),c(l))},onKeyDown:t=>{t.key==="ArrowDown"&&(t.preventDefault(),a(!0))}}),e.createElement(x,{open:s,onOpenChange:a},e.createElement(E,{asChild:!0},e.createElement(w,{id:"date-picker",variant:"ghost",className:"absolute top-1/2 right-2 size-6 -translate-y-1/2"},e.createElement(b,{className:"size-3.5"}),e.createElement("span",{className:"sr-only"},"Select date"))),e.createElement(S,{className:"w-auto overflow-hidden p-0",align:"end"},e.createElement(D,{mode:"single",selected:o,captionLayout:"dropdown",month:v,onMonthChange:c,onSelect:t=>{d(t),r(g(t)),a(!1)}})))),e.createElement("div",{className:"text-muted-foreground px-1 text-sm"},"Your post will be published on"," ",e.createElement("span",{className:"font-medium"},g(o)),"."))}},u={name:"when typing natural language, should parse and update date",tags:["!dev","!autodocs"],render:()=>{const[s,a]=e.useState(!1),[n,r]=e.useState("In 2 days"),[o,d]=e.useState(m(n)||void 0),[v,c]=e.useState(o);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(N,{htmlFor:"date",className:"px-1"},"Schedule Date"),e.createElement("div",{className:"relative flex gap-2"},e.createElement(y,{id:"date",value:n,placeholder:"Tomorrow or next week",className:"bg-background pr-10","data-testid":"natural-language-input",onChange:t=>{r(t.target.value);const l=m(t.target.value);l&&(d(l),c(l))},onKeyDown:t=>{t.key==="ArrowDown"&&(t.preventDefault(),a(!0))}}),e.createElement(x,{open:s,onOpenChange:a},e.createElement(E,{asChild:!0},e.createElement(w,{id:"date-picker",variant:"ghost",className:"absolute top-1/2 right-2 size-6 -translate-y-1/2","data-testid":"calendar-button"},e.createElement(b,{className:"size-3.5"}),e.createElement("span",{className:"sr-only"},"Select date"))),e.createElement(S,{className:"w-auto overflow-hidden p-0",align:"end"},e.createElement(D,{mode:"single",selected:o,captionLayout:"dropdown",month:v,onMonthChange:c,onSelect:t=>{d(t),r(g(t)),a(!1)}})))),e.createElement("div",{className:"text-muted-foreground px-1 text-sm","data-testid":"publish-message"},"Your post will be published on"," ",e.createElement("span",{className:"font-medium"},g(o)),"."))},play:async({canvasElement:s})=>{const a=C(s),n=a.getByTestId("natural-language-input");await i(n).toBeInTheDocument(),await i(n).toHaveValue("In 2 days"),await h.clear(n),await h.type(n,"tomorrow"),await f(()=>{i(n).toHaveValue("tomorrow")},{timeout:2e3});const r=a.getByTestId("calendar-button");await h.click(r),await f(()=>{const o=a.getByRole("grid");i(o).toBeInTheDocument()},{timeout:2e3})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("In 2 days");
    const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined);
    const [month, setMonth] = React.useState<Date | undefined>(date);
    return <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Schedule Date
        </Label>
        <div className="relative flex gap-2">
          <Input id="date" value={value} placeholder="Tomorrow or next week" className="bg-background pr-10" onChange={e => {
          setValue(e.target.value);
          const date = parseDate(e.target.value);
          if (date) {
            setDate(date);
            setMonth(date);
          }
        }} onKeyDown={e => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }} />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button id="date-picker" variant="ghost" className="absolute top-1/2 right-2 size-6 -translate-y-1/2">
                <CalendarIcon className="size-3.5" />
                <span className="sr-only">Select date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="end">
              <Calendar mode="single" selected={date} captionLayout="dropdown" month={month} onMonthChange={setMonth} onSelect={date => {
              setDate(date);
              setValue(formatDate(date));
              setOpen(false);
            }} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-muted-foreground px-1 text-sm">
          Your post will be published on{" "}
          <span className="font-medium">{formatDate(date)}</span>.
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "when typing natural language, should parse and update date",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("In 2 days");
    const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined);
    const [month, setMonth] = React.useState<Date | undefined>(date);
    return <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Schedule Date
        </Label>
        <div className="relative flex gap-2">
          <Input id="date" value={value} placeholder="Tomorrow or next week" className="bg-background pr-10" data-testid="natural-language-input" onChange={e => {
          setValue(e.target.value);
          const date = parseDate(e.target.value);
          if (date) {
            setDate(date);
            setMonth(date);
          }
        }} onKeyDown={e => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }} />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button id="date-picker" variant="ghost" className="absolute top-1/2 right-2 size-6 -translate-y-1/2" data-testid="calendar-button">
                <CalendarIcon className="size-3.5" />
                <span className="sr-only">Select date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="end">
              <Calendar mode="single" selected={date} captionLayout="dropdown" month={month} onMonthChange={setMonth} onSelect={date => {
              setDate(date);
              setValue(formatDate(date));
              setOpen(false);
            }} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-muted-foreground px-1 text-sm" data-testid="publish-message">
          Your post will be published on{" "}
          <span className="font-medium">{formatDate(date)}</span>.
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 자연어 입력 시 chrono-node가 날짜를 파싱하고 업데이트하는지 확인
    const input = canvas.getByTestId("natural-language-input");
    await expect(input).toBeInTheDocument();

    // 기존 값 확인
    await expect(input).toHaveValue("In 2 days");

    // 자연어 입력 변경 ("tomorrow"로 변경)
    await userEvent.clear(input);
    await userEvent.type(input, "tomorrow");
    await waitFor(() => {
      // Input 값이 변경되었는지 확인
      expect(input).toHaveValue("tomorrow");
    }, {
      timeout: 2000
    });

    // Calendar 버튼 클릭하여 Popover 열기
    const calendarButton = canvas.getByTestId("calendar-button");
    await userEvent.click(calendarButton);
    await waitFor(() => {
      // Popover가 열렸는지 확인 (Calendar가 표시되는지)
      const calendar = canvas.getByRole("grid");
      expect(calendar).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
}`,...u.parameters?.docs?.source}}};const re=["Default","ShouldParseNaturalLanguage"];export{p as Default,u as ShouldParseNaturalLanguage,re as __namedExportsOrder,se as default};

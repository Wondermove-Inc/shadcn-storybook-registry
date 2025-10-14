import{r as e}from"./iframe-BiU2suBC.js";import{C as i}from"./calendar-CPs6VEsL.js";import{L as u}from"./label-DQUVhDdS.js";import{S as w,a as g,b as h,c as y,d as a}from"./select-CSn27UQI.js";import"./preload-helper-PPVm8Dsz.js";import"./button-o25yRkrR.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./chevron-down-DnTtteVn.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-BdQq_4o_.js";import"./index-Dc_FVRD7.js";import"./index-BEeKTTV4.js";import"./index-BT5_MN2X.js";import"./index-DrzUb6Kr.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-CpP8DfwQ.js";import"./index-BT53Il6f.js";import"./index-B3LxitfY.js";import"./check-DwuV1CBk.js";const{expect:s,userEvent:p,waitFor:m,within:S}=__STORYBOOK_MODULE_TEST__,$={title:"ui/Calendar/Blocks/Month and Year Selector",tags:["autodocs"],parameters:{layout:"centered"}},d={render:()=>{const[n,o]=e.useState("dropdown"),[t,r]=e.useState(new Date(2025,5,12));return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(i,{mode:"single",defaultMonth:t,selected:t,onSelect:r,captionLayout:n,className:"rounded-lg border shadow-sm"}),e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(u,{htmlFor:"dropdown",className:"px-1"},"Dropdown"),e.createElement(w,{value:n,onValueChange:l=>o(l)},e.createElement(g,{id:"dropdown",size:"sm",className:"bg-background w-full"},e.createElement(h,{placeholder:"Dropdown"})),e.createElement(y,{align:"center"},e.createElement(a,{value:"dropdown"},"Month and Year"),e.createElement(a,{value:"dropdown-months"},"Month Only"),e.createElement(a,{value:"dropdown-years"},"Year Only")))))}},c={name:"when changing dropdown mode, should update calendar display",tags:["!dev","!autodocs"],render:()=>{const[n,o]=e.useState("dropdown"),[t,r]=e.useState(new Date(2025,5,12));return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(i,{mode:"single",defaultMonth:t,selected:t,onSelect:r,captionLayout:n,className:"rounded-lg border shadow-sm"}),e.createElement("div",{className:"flex flex-col gap-3"},e.createElement(u,{htmlFor:"dropdown",className:"px-1"},"Dropdown"),e.createElement(w,{value:n,onValueChange:l=>o(l)},e.createElement(g,{id:"dropdown",size:"sm",className:"bg-background w-full","data-testid":"dropdown-trigger"},e.createElement(h,{placeholder:"Dropdown"})),e.createElement(y,{align:"center"},e.createElement(a,{value:"dropdown"},"Month and Year"),e.createElement(a,{value:"dropdown-months"},"Month Only"),e.createElement(a,{value:"dropdown-years"},"Year Only")))))},play:async({canvasElement:n})=>{const o=S(n),t=o.getByTestId("dropdown-trigger");await s(t).toBeInTheDocument(),await p.click(t),await m(()=>{const l=o.getByRole("option",{name:/month only/i});s(l).toBeInTheDocument()},{timeout:2e3});const r=o.getByRole("option",{name:/month only/i});await p.click(r),await m(()=>{s(t).toHaveTextContent(/month only/i)},{timeout:2e3})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [dropdown, setDropdown] = React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdown");
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
    return <div className="flex flex-col gap-4">
        <Calendar mode="single" defaultMonth={date} selected={date} onSelect={setDate} captionLayout={dropdown} className="rounded-lg border shadow-sm" />
        <div className="flex flex-col gap-3">
          <Label htmlFor="dropdown" className="px-1">
            Dropdown
          </Label>
          <Select value={dropdown} onValueChange={value => setDropdown(value as React.ComponentProps<typeof Calendar>["captionLayout"])}>
            <SelectTrigger id="dropdown" size="sm" className="bg-background w-full">
              <SelectValue placeholder="Dropdown" />
            </SelectTrigger>
            <SelectContent align="center">
              <SelectItem value="dropdown">Month and Year</SelectItem>
              <SelectItem value="dropdown-months">Month Only</SelectItem>
              <SelectItem value="dropdown-years">Year Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "when changing dropdown mode, should update calendar display",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [dropdown, setDropdown] = React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdown");
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
    return <div className="flex flex-col gap-4">
        <Calendar mode="single" defaultMonth={date} selected={date} onSelect={setDate} captionLayout={dropdown} className="rounded-lg border shadow-sm" />
        <div className="flex flex-col gap-3">
          <Label htmlFor="dropdown" className="px-1">
            Dropdown
          </Label>
          <Select value={dropdown} onValueChange={value => setDropdown(value as React.ComponentProps<typeof Calendar>["captionLayout"])}>
            <SelectTrigger id="dropdown" size="sm" className="bg-background w-full" data-testid="dropdown-trigger">
              <SelectValue placeholder="Dropdown" />
            </SelectTrigger>
            <SelectContent align="center">
              <SelectItem value="dropdown">Month and Year</SelectItem>
              <SelectItem value="dropdown-months">Month Only</SelectItem>
              <SelectItem value="dropdown-years">Year Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Dropdown 모드 변경 시 Calendar가 올바르게 업데이트되는지 확인
    const dropdownTrigger = canvas.getByTestId("dropdown-trigger");
    await expect(dropdownTrigger).toBeInTheDocument();

    // Dropdown 열기
    await userEvent.click(dropdownTrigger);
    await waitFor(() => {
      // "Month Only" 옵션 선택
      const monthOnlyOption = canvas.getByRole("option", {
        name: /month only/i
      });
      expect(monthOnlyOption).toBeInTheDocument();
    }, {
      timeout: 2000
    });

    // "Month Only" 선택
    const monthOnlyOption = canvas.getByRole("option", {
      name: /month only/i
    });
    await userEvent.click(monthOnlyOption);
    await waitFor(() => {
      // Dropdown이 "Month Only"로 변경되었는지 확인
      expect(dropdownTrigger).toHaveTextContent(/month only/i);
    }, {
      timeout: 2000
    });
  }
}`,...c.parameters?.docs?.source}}};const ee=["Default","ShouldChangeDropdownMode"];export{d as Default,c as ShouldChangeDropdownMode,ee as __namedExportsOrder,$ as default};

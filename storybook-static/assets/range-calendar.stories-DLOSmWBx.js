import{r as a}from"./iframe-BiU2suBC.js";import{C as c}from"./calendar-CPs6VEsL.js";import"./preload-helper-PPVm8Dsz.js";import"./button-o25yRkrR.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./chevron-down-DnTtteVn.js";const{expect:s,waitFor:d,within:i}=__STORYBOOK_MODULE_TEST__,v={title:"ui/Calendar/Blocks/Range Calendar",tags:["autodocs"],parameters:{layout:"centered"}},n={render:()=>{const[e,t]=a.useState(new Date(2025,5,12));return a.createElement(c,{mode:"single",defaultMonth:e,numberOfMonths:2,selected:e,onSelect:t,className:"rounded-lg border shadow-sm"})}},r={name:"when rendered, should display two months calendar",tags:["!dev","!autodocs"],render:()=>{const[e,t]=a.useState(new Date(2025,5,12));return a.createElement("div",{"data-testid":"range-calendar-container"},a.createElement(c,{mode:"single",defaultMonth:e,numberOfMonths:2,selected:e,onSelect:t,className:"rounded-lg border shadow-sm"}))},play:async({canvasElement:e})=>{const t=i(e),l=t.getByTestId("range-calendar-container");await s(l).toBeInTheDocument(),await d(()=>{const o=t.getAllByRole("grid");s(o.length).toBeGreaterThanOrEqual(2)},{timeout:2e3}),await d(()=>{const o=t.getAllByRole("gridcell");s(o.length).toBeGreaterThan(0)},{timeout:2e3})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
    return <Calendar mode="single" defaultMonth={date} numberOfMonths={2} selected={date} onSelect={setDate} className="rounded-lg border shadow-sm" />;
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "when rendered, should display two months calendar",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
    return <div data-testid="range-calendar-container">
        <Calendar mode="single" defaultMonth={date} numberOfMonths={2} selected={date} onSelect={setDate} className="rounded-lg border shadow-sm" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Range Calendar가 2개월을 동시에 표시하는지 확인
    const container = canvas.getByTestId("range-calendar-container");
    await expect(container).toBeInTheDocument();

    // Calendar grid 확인 (2개월 = 2개의 grid가 있어야 함)
    await waitFor(() => {
      const grids = canvas.getAllByRole("grid");
      expect(grids.length).toBeGreaterThanOrEqual(2);
    }, {
      timeout: 2000
    });

    // 날짜 버튼이 존재하는지 확인
    await waitFor(() => {
      const dateButtons = canvas.getAllByRole("gridcell");
      expect(dateButtons.length).toBeGreaterThan(0);
    }, {
      timeout: 2000
    });
  }
}`,...r.parameters?.docs?.source}}};const E=["Default","ShouldDisplayTwoMonths"];export{n as Default,r as ShouldDisplayTwoMonths,E as __namedExportsOrder,v as default};

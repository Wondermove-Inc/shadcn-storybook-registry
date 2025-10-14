import{r as e}from"./iframe-BiU2suBC.js";import{C as c}from"./calendar-CPs6VEsL.js";import"./preload-helper-PPVm8Dsz.js";import"./button-o25yRkrR.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./chevron-down-DnTtteVn.js";const{expect:m,userEvent:i,waitFor:u,within:p}=__STORYBOOK_MODULE_TEST__;function d(){const[t,r]=e.useState(new Date);return e.createElement(c,{mode:"single",selected:t,onSelect:r,className:"rounded-md border"})}const _={title:"ui/Calendar",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A date field component that allows users to enter and edit date."}}},excludeStories:/.*Demo$/,render:()=>e.createElement(d,null)},a={},n={render:()=>{const[t,r]=e.useState();return e.createElement("form",{className:"space-y-8"},e.createElement(c,{mode:"single",selected:t,onSelect:r,className:"rounded-md border"}))}},o={name:"when user clicks a date, should select it",tags:["!dev","!autodocs"],render:()=>e.createElement(d,null),play:async({canvasElement:t})=>{const s=p(t).getAllByRole("button").find(l=>l.textContent?.trim()==="15");s&&(await i.click(s),await u(()=>{m(s).toHaveAttribute("aria-selected","true")}))}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source},description:{story:"The default form of the calendar.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <form className="space-y-8">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </form>;
  }
}`,...n.parameters?.docs?.source},description:{story:"Calendar with form example.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "when user clicks a date, should select it",
  tags: ["!dev", "!autodocs"],
  render: () => <CalendarDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Calendar에서 날짜를 클릭하면 선택되고 시각적으로 표시되는지 확인
    // 날짜 버튼 찾기 (현재 월의 15일 찾기)
    const dateButtons = canvas.getAllByRole("button");
    const date15Button = dateButtons.find(button => button.textContent?.trim() === "15");
    if (date15Button) {
      // 날짜 클릭
      await userEvent.click(date15Button);

      // 선택된 날짜가 aria-selected 속성을 가지는지 확인
      await waitFor(() => {
        expect(date15Button).toHaveAttribute("aria-selected", "true");
      });
    }
  }
}`,...o.parameters?.docs?.source}}};const A=["CalendarDemo","Default","Form","ShouldSelectDate"];export{d as CalendarDemo,a as Default,n as Form,o as ShouldSelectDate,A as __namedExportsOrder,_ as default};

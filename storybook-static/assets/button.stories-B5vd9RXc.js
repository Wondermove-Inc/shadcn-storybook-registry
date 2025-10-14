import{e,L as g,r as f}from"./iframe-BiU2suBC.js";import{B as t}from"./button-o25yRkrR.js";import{C as y}from"./chevron-right-C1Com0QT.js";import{c as v}from"./createLucideIcon-ng3sinjr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],E=v("loader-circle",B);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],k=v("mail",L),{expect:b,fn:S,userEvent:w,within:R}=__STORYBOOK_MODULE_TEST__;function F(){return e.createElement(t,null,"Button")}const I={title:"ui/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a button or a component that looks like a button."}}},args:{children:"Button",variant:"default",size:"default",disabled:!1,onClick:S()},excludeStories:/.*Demo$/},r={},n={args:{variant:"secondary",children:"Secondary"}},a={args:{variant:"destructive",children:"Destructive"}},o={args:{variant:"outline",children:"Outline"}},s={args:{variant:"ghost",children:"Ghost"}},c={args:{variant:"link",children:"Link"}},i={render:()=>e.createElement(t,{variant:"outline",size:"icon"},e.createElement(y,{className:"h-4 w-4"}))},d={render:()=>e.createElement(t,null,e.createElement(k,{className:"mr-2 h-4 w-4"})," Login with Email")},u={render:()=>e.createElement(t,{disabled:!0},e.createElement(E,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait")},l={render:()=>e.createElement(t,{asChild:!0},e.createElement(g,{to:"/login"},"Login"))},m={render:()=>{const p=f.useRef(null);return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(t,{ref:p},"Target Button"),e.createElement(t,{variant:"outline",onClick:()=>p.current?.focus()},"Focus Button Above"))},play:async({canvasElement:p})=>{const h=R(p).getAllByRole("button");await w.click(h[1]),await b(h[0]).toHaveFocus()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:`기본 버튼 스타일입니다. 주요 액션이나 제출 버튼으로 사용하며,
가장 눈에 띄는 시각적 강조를 제공합니다.`,...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...n.parameters?.docs?.source},description:{story:`보조 액션에 사용하는 secondary variant입니다.
주요 버튼보다 덜 강조되며, 취소나 뒤로가기 같은 부차적인 액션에 적합합니다.`,...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...a.parameters?.docs?.source},description:{story:`삭제나 파괴적인 액션에 사용하는 destructive variant입니다.
빨간색 계열로 표시되어 사용자에게 신중한 결정을 유도합니다.`,...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...o.parameters?.docs?.source},description:{story:`테두리만 있는 outline variant입니다.
배경이 투명하여 가벼운 느낌을 주며, 보조 액션이나 필터 버튼에 적합합니다.`,...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...s.parameters?.docs?.source},description:{story:`테두리와 배경이 없는 ghost variant입니다.
호버 시에만 배경이 나타나며, 네비게이션이나 드롭다운 메뉴에 사용됩니다.`,...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link"
  }
}`,...c.parameters?.docs?.source},description:{story:`링크처럼 보이는 link variant입니다.
밑줄이 있는 텍스트 스타일로, 인라인 텍스트 내에서 버튼 기능이 필요할 때 사용합니다.`,...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
}`,...i.parameters?.docs?.source},description:{story:`아이콘만 표시하는 버튼입니다. size="icon"을 사용하여 정사각형 모양으로 만들며,
툴바나 액션 아이콘 버튼에 적합합니다. 접근성을 위해 aria-label 추가를 권장합니다.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
}`,...d.parameters?.docs?.source},description:{story:`텍스트와 아이콘을 함께 표시하는 버튼입니다.
아이콘을 텍스트 앞에 배치하여 버튼의 기능을 시각적으로 강조할 수 있습니다.`,...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
}`,...u.parameters?.docs?.source},description:{story:`로딩 상태를 표시하는 버튼입니다. disabled 상태와 함께 spinner 아이콘을 표시하여
비동기 작업이 진행 중임을 사용자에게 알립니다.`,...u.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Button asChild>
      <Link to="/login">Login</Link>
    </Button>
}`,...l.parameters?.docs?.source},description:{story:`asChild prop을 사용하여 Button의 스타일을 다른 컴포넌트에 적용합니다.
Next.js Link나 React Router Link 등을 버튼처럼 스타일링할 때 유용합니다.`,...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 🎯 목적: HTMLButtonElement에 대한 ref를 생성하여 focus() 메서드 접근
    const buttonRef = useRef<HTMLButtonElement>(null);
    return <div className="flex flex-col gap-4">
        <Button ref={buttonRef}>Target Button</Button>
        <Button variant="outline" onClick={() => buttonRef.current?.focus()}>
          Focus Button Above
        </Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // 🎯 목적: play function을 통해 ref 동작을 자동으로 테스트
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    // "Focus Button Above" 버튼 클릭하여 첫 번째 버튼에 focus 트리거
    await userEvent.click(buttons[1]);

    // 첫 번째 버튼이 포커스를 받았는지 검증
    await expect(buttons[0]).toHaveFocus();
  }
}`,...m.parameters?.docs?.source},description:{story:`Ref 사용 예제: Button에 ref를 전달하여 DOM 요소에 직접 접근합니다.
이 예제는 ref를 통한 focus 제어를 보여줍니다.`,...m.parameters?.docs?.description}}};const G=["ButtonDemo","Default","Secondary","Destructive","Outline","Ghost","LinkVariant","Icon","WithIcon","Loading","AsChild","WithRef"];export{l as AsChild,F as ButtonDemo,r as Default,a as Destructive,s as Ghost,i as Icon,c as LinkVariant,u as Loading,o as Outline,n as Secondary,d as WithIcon,m as WithRef,G as __namedExportsOrder,I as default};

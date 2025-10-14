import{e,r as u}from"./iframe-BiU2suBC.js";import{B as t}from"./button-o25yRkrR.js";import{C as l,a as s,b as i,c as d,d as E,e as m,f as h}from"./card-3RP-Jqzk.js";import{I as p}from"./input-BRT9-IAl.js";import{L as C}from"./label-DQUVhDdS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";const{expect:v,userEvent:b,within:w}=__STORYBOOK_MODULE_TEST__;function g(){return e.createElement(l,{className:"w-full max-w-sm"},e.createElement(s,null,e.createElement(i,null,"Login to your account"),e.createElement(d,null,"Enter your email below to login to your account"),e.createElement(E,null,e.createElement(t,{variant:"link"},"Sign Up"))),e.createElement(m,null,e.createElement("form",null,e.createElement("div",{className:"flex flex-col gap-6"},e.createElement("div",{className:"grid gap-2"},e.createElement(C,{htmlFor:"email"},"Email"),e.createElement(p,{id:"email",type:"email",placeholder:"m@example.com",required:!0})),e.createElement("div",{className:"grid gap-2"},e.createElement("div",{className:"flex items-center"},e.createElement(C,{htmlFor:"password"},"Password"),e.createElement("a",{href:"#",className:"ml-auto inline-block text-sm underline-offset-4 hover:underline"},"Forgot your password?")),e.createElement(p,{id:"password",type:"password",required:!0}))))),e.createElement(h,{className:"flex-col gap-2"},e.createElement(t,{type:"submit",className:"w-full"},"Login"),e.createElement(t,{variant:"outline",className:"w-full"},"Login with Google")))}const z={title:"ui/Card",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a card with header, content, and footer."}}},excludeStories:/.*Demo$/},a={render:()=>e.createElement(g,null)},n={parameters:{layout:"padded"},render:()=>{const c=u.useRef(null),r=u.useRef(null),o=u.useRef(null);return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"bg-background/95 sticky top-0 z-10 flex gap-2 rounded-md border p-2 backdrop-blur"},e.createElement(t,{variant:"outline",size:"sm",onClick:()=>c.current?.scrollIntoView({behavior:"smooth",block:"center"})},"Scroll to Card 1"),e.createElement(t,{variant:"outline",size:"sm",onClick:()=>r.current?.scrollIntoView({behavior:"smooth",block:"center"})},"Scroll to Card 2"),e.createElement(t,{variant:"outline",size:"sm",onClick:()=>o.current?.scrollIntoView({behavior:"smooth",block:"center"})},"Scroll to Card 3")),e.createElement(l,{ref:c,className:"w-full max-w-sm scroll-mt-20"},e.createElement(s,null,e.createElement(i,null,"Card 1"),e.createElement(d,null,"First card in the list")),e.createElement(m,null,e.createElement("p",{className:"text-sm"},"This is the first card that can be scrolled to using ref."))),e.createElement("div",{className:"h-96"}),e.createElement(l,{ref:r,className:"w-full max-w-sm scroll-mt-20"},e.createElement(s,null,e.createElement(i,null,"Card 2"),e.createElement(d,null,"Second card in the list")),e.createElement(m,null,e.createElement("p",{className:"text-sm"},"This is the second card that can be scrolled to using ref."))),e.createElement("div",{className:"h-96"}),e.createElement(l,{ref:o,className:"w-full max-w-sm scroll-mt-20"},e.createElement(s,null,e.createElement(i,null,"Card 3"),e.createElement(d,null,"Third card in the list")),e.createElement(m,null,e.createElement("p",{className:"text-sm"},"This is the third card that can be scrolled to using ref."))),e.createElement("div",{className:"h-96"}))},play:async({canvasElement:c})=>{const r=w(c),o=r.getByRole("button",{name:"Scroll to Card 2"});await b.click(o);const f=r.getByText("Card 2");await v(f).toBeVisible()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <CardDemo />
}`,...a.parameters?.docs?.source},description:{story:`기본 Card 컴포넌트입니다. Header, Content, Footer로 구성되어 정보를 그룹화하며,
로그인 폼 예제처럼 관련 콘텐츠를 하나의 시각적 단위로 묶습니다. 대시보드나 목록 UI에 적합합니다.`,...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => {
    // 🎯 목적: HTMLDivElement에 대한 ref를 생성하여 scrollIntoView() 메서드 접근
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    return <div className="flex flex-col gap-4">
        <div className="bg-background/95 sticky top-0 z-10 flex gap-2 rounded-md border p-2 backdrop-blur">
          <Button variant="outline" size="sm" onClick={() => card1Ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })}>
            Scroll to Card 1
          </Button>
          <Button variant="outline" size="sm" onClick={() => card2Ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })}>
            Scroll to Card 2
          </Button>
          <Button variant="outline" size="sm" onClick={() => card3Ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })}>
            Scroll to Card 3
          </Button>
        </div>

        <Card ref={card1Ref} className="w-full max-w-sm scroll-mt-20">
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
            <CardDescription>First card in the list</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the first card that can be scrolled to using ref.
            </p>
          </CardContent>
        </Card>

        <div className="h-96" />

        <Card ref={card2Ref} className="w-full max-w-sm scroll-mt-20">
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
            <CardDescription>Second card in the list</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the second card that can be scrolled to using ref.
            </p>
          </CardContent>
        </Card>

        <div className="h-96" />

        <Card ref={card3Ref} className="w-full max-w-sm scroll-mt-20">
          <CardHeader>
            <CardTitle>Card 3</CardTitle>
            <CardDescription>Third card in the list</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This is the third card that can be scrolled to using ref.
            </p>
          </CardContent>
        </Card>

        <div className="h-96" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // 🎯 목적: play function을 통해 ref 동작을 자동으로 테스트
    const canvas = within(canvasElement);
    const button2 = canvas.getByRole("button", {
      name: "Scroll to Card 2"
    });

    // "Scroll to Card 2" 버튼 클릭하여 스크롤 트리거
    await userEvent.click(button2);

    // Card 2가 뷰포트에 표시되는지 확인
    const card2 = canvas.getByText("Card 2");
    await expect(card2).toBeVisible();
  }
}`,...n.parameters?.docs?.source},description:{story:`Ref 사용 예제: Card에 ref를 전달하여 DOM 요소에 직접 접근합니다.
이 예제는 ref를 통한 scrollIntoView 제어를 보여줍니다.`,...n.parameters?.docs?.description}}};const _=["CardDemo","Default","WithRef"];export{g as CardDemo,a as Default,n as WithRef,_ as __namedExportsOrder,z as default};

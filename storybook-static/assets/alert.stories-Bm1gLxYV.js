import{r as i,e}from"./iframe-BiU2suBC.js";import{c as v}from"./index-dSc6CJZX.js";import{a as D}from"./utils-DgWKjmuI.js";import{C as y}from"./circle-check-CAVtplWb.js";import{c as A}from"./createLucideIcon-ng3sinjr.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],h=A("circle-alert",E);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]],f=A("popcorn",T),_=v("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",{variants:{variant:{default:"bg-secondary/20 text-foreground",destructive:"text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"}},defaultVariants:{variant:"default"}}),t=i.forwardRef(({className:r,variant:a,...s},m)=>i.createElement("div",{ref:m,"data-slot":"alert",role:"alert",className:D(_({variant:a}),r),...s}));t.displayName="Alert";const n=i.forwardRef(({className:r,...a},s)=>i.createElement("div",{ref:s,"data-slot":"alert-title",className:D("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",r),...a}));n.displayName="AlertTitle";const l=i.forwardRef(({className:r,...a},s)=>i.createElement("div",{ref:s,"data-slot":"alert-description",className:D("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",r),...a}));l.displayName="AlertDescription";try{t.displayName="Alert",t.__docgenInfo={description:`🎯 목적: Alert 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: role="alert" 속성 유지 필수 (접근성)
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | null | undefined'}}}}}catch{}try{l.displayName="AlertDescription",l.__docgenInfo={description:`🎯 목적: AlertDescription 컴포넌트에 forwardRef 적용
📝 주의사항: text-muted-foreground 스타일 유지`,displayName:"AlertDescription",props:{}}}catch{}try{n.displayName="AlertTitle",n.__docgenInfo={description:`🎯 목적: AlertTitle 컴포넌트에 forwardRef 적용
📝 주의사항: col-start-2 그리드 레이아웃 유지`,displayName:"AlertTitle",props:{}}}catch{}const{expect:C,within:x}=__STORYBOOK_MODULE_TEST__;function w(){return e.createElement("div",{className:"grid w-full max-w-xl items-start gap-4"},e.createElement(t,null,e.createElement(y,null),e.createElement(n,null,"Success! Your changes have been saved"),e.createElement(l,null,"This is an alert with icon, title and description.")),e.createElement(t,null,e.createElement(f,null),e.createElement(n,null,"This Alert has a title and an icon. No description.")),e.createElement(t,{variant:"destructive"},e.createElement(h,null),e.createElement(n,null,"Unable to process your payment."),e.createElement(l,null,e.createElement("p",null,"Please verify your billing information and try again."),e.createElement("ul",{className:"list-inside list-disc text-sm"},e.createElement("li",null,"Check your card details"),e.createElement("li",null,"Ensure sufficient funds"),e.createElement("li",null,"Verify billing address")))))}const F={title:"ui/Alert",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a callout for user attention."}}},args:{variant:"default"},excludeStories:/.*Demo$/},c={render:()=>e.createElement(w,null)},o={render:()=>e.createElement(t,null,e.createElement(y,null),e.createElement(n,null,"Success! Your changes have been saved"),e.createElement(l,null,"This is an alert with icon, title and description."))},u={render:()=>e.createElement(t,null,e.createElement(f,null),e.createElement(n,null,"This Alert has a title and an icon. No description."))},d={render:()=>e.createElement(t,{variant:"destructive"},e.createElement(h,null),e.createElement(n,null,"Unable to process your payment."),e.createElement(l,null,e.createElement("p",null,"Please verify your billing information and try again."),e.createElement("ul",{className:"list-inside list-disc text-sm"},e.createElement("li",null,"Check your card details"),e.createElement("li",null,"Ensure sufficient funds"),e.createElement("li",null,"Verify billing address"))))},p={name:"when rendered, should display alert content",tags:["!dev","!autodocs"],render:()=>e.createElement(t,{"data-testid":"test-alert"},e.createElement(y,null),e.createElement(n,null,"Success! Your changes have been saved"),e.createElement(l,null,"This is an alert with icon, title and description.")),play:async({canvasElement:r})=>{const a=x(r),s=a.getByTestId("test-alert");await C(s).toBeInTheDocument();const m=a.getByText("Success! Your changes have been saved");await C(m).toBeInTheDocument();const g=a.getByText(/alert with icon, title and description/i);await C(g).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDemo />
}`,...c.parameters?.docs?.source},description:{story:"The default form of the alert.",...c.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>
}`,...o.parameters?.docs?.source},description:{story:"Success alert with icon, title and description.",...o.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Alert>
      <PopcornIcon />
      <AlertTitle>
        This Alert has a title and an icon. No description.
      </AlertTitle>
    </Alert>
}`,...u.parameters?.docs?.source},description:{story:"Alert with title and icon only, no description.",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul className="list-inside list-disc text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>
    </Alert>
}`,...d.parameters?.docs?.source},description:{story:"Destructive alert with list content.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "when rendered, should display alert content",
  tags: ["!dev", "!autodocs"],
  render: () => <Alert data-testid="test-alert">
      <CheckCircle2Icon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>
        This is an alert with icon, title and description.
      </AlertDescription>
    </Alert>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Alert가 올바르게 렌더링되고 텍스트가 표시되는지 확인
    const alert = canvas.getByTestId("test-alert");
    await expect(alert).toBeInTheDocument();
    const title = canvas.getByText("Success! Your changes have been saved");
    await expect(title).toBeInTheDocument();
    const description = canvas.getByText(/alert with icon, title and description/i);
    await expect(description).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};const R=["AlertDemo","Default","Success","TitleOnly","Destructive","ShouldRenderAlert"];export{w as AlertDemo,c as Default,d as Destructive,p as ShouldRenderAlert,o as Success,u as TitleOnly,R as __namedExportsOrder,F as default};

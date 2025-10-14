import{e,r as d}from"./iframe-BiU2suBC.js";import{B as t}from"./button-o25yRkrR.js";import{D as p,a as g,b as E,c as f,d as D,e as v,f as x,g as C}from"./dialog-CEwfEVDk.js";import{I as m}from"./input-BRT9-IAl.js";import{L as c}from"./label-DQUVhDdS.js";import{c as b}from"./createLucideIcon-ng3sinjr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BZmy0mfy.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-CpP8DfwQ.js";import"./index-BX5uZP6s.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./x-CCE6G7Ad.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],O=b("copy",B),{expect:y,fn:S,userEvent:T,within:w}=__STORYBOOK_MODULE_TEST__;function k(){return e.createElement(p,null,e.createElement("form",null,e.createElement(g,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Dialog")),e.createElement(E,{className:"sm:max-w-[425px]"},e.createElement(f,null,e.createElement(D,null,"Edit profile"),e.createElement(v,null,"Make changes to your profile here. Click save when you're done.")),e.createElement("div",{className:"grid gap-4"},e.createElement("div",{className:"grid gap-3"},e.createElement(c,{htmlFor:"name-1"},"Name"),e.createElement(m,{id:"name-1",name:"name",defaultValue:"Pedro Duarte"})),e.createElement("div",{className:"grid gap-3"},e.createElement(c,{htmlFor:"username-1"},"Username"),e.createElement(m,{id:"username-1",name:"username",defaultValue:"@peduarte"}))),e.createElement(x,null,e.createElement(C,{asChild:!0},e.createElement(t,{variant:"outline"},"Cancel")),e.createElement(t,{type:"submit"},"Save changes")))))}function R(){return e.createElement(p,null,e.createElement(g,{asChild:!0},e.createElement(t,{variant:"outline"},"Share")),e.createElement(E,{className:"sm:max-w-md"},e.createElement(f,null,e.createElement(D,null,"Share link"),e.createElement(v,null,"Anyone who has this link will be able to view this.")),e.createElement("div",{className:"flex items-center space-x-2"},e.createElement("div",{className:"grid flex-1 gap-2"},e.createElement(c,{htmlFor:"link",className:"sr-only"},"Link"),e.createElement(m,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})),e.createElement(t,{type:"submit",size:"sm",className:"px-3"},e.createElement("span",{className:"sr-only"},"Copy"),e.createElement(O,{className:"h-4 w-4"}))),e.createElement(x,{className:"sm:justify-start"},e.createElement(C,{asChild:!0},e.createElement(t,{type:"button",variant:"secondary"},"Close")))))}const le={title:"ui/Dialog",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A dialog component for editing user profile information."}}},args:{onOpenChange:S()},excludeStories:/.*Demo$/},l={render:()=>e.createElement(k,null)},o={render:()=>e.createElement(R,null)},r={render:()=>{const u=d.useRef(null),[a,n]=d.useState(!1),[i,s]=d.useState(""),h=N=>{N.preventDefault(),s("Form submitted successfully!"),setTimeout(()=>{n(!1),s("")},3e3)};return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(p,{open:a,onOpenChange:n},e.createElement(g,{asChild:!0},e.createElement(t,{variant:"outline"},"Open Controlled Dialog")),e.createElement(E,{ref:u,className:"sm:max-w-[425px]"},e.createElement(f,null,e.createElement(D,null,"Controlled Dialog Example"),e.createElement(v,null,"This dialog can be controlled programmatically using state and ref.")),e.createElement("form",{onSubmit:h},e.createElement("div",{className:"grid gap-4"},e.createElement("div",{className:"grid gap-3"},e.createElement(c,{htmlFor:"email-input"},"Email"),e.createElement(m,{id:"email-input",type:"email",placeholder:"example@email.com",required:!0})),i&&e.createElement("div",{className:"text-sm text-green-600 dark:text-green-400"},i)),e.createElement(x,{className:"mt-4"},e.createElement(C,{asChild:!0},e.createElement(t,{type:"button",variant:"outline"},"Cancel")),e.createElement(t,{type:"submit"},"Submit"))))),e.createElement("div",{className:"flex gap-2"},e.createElement(t,{variant:"secondary",size:"sm",onClick:()=>n(!0)},"Open via State"),e.createElement(t,{variant:"secondary",size:"sm",onClick:()=>n(!1)},"Close via State")),e.createElement("p",{className:"text-muted-foreground text-sm"},"Dialog state: ",a?"Open":"Closed"))},play:async({canvasElement:u})=>{const a=w(u),n=a.getByRole("button",{name:"Open via State"});await T.click(n);const i=await a.findByText("Controlled Dialog Example");await y(i).toBeVisible();const s=a.getByText(/Dialog state:/);await y(s).toHaveTextContent("Dialog state: Open")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <DialogDemo />
}`,...l.parameters?.docs?.source},description:{story:`기본 Dialog 모달입니다. 프로필 수정 폼 예제로 제목, 설명, 입력 필드, 버튼을 포함하며,
중요한 작업이나 추가 정보 입력이 필요할 때 사용합니다. 모달 오버레이로 집중도를 높입니다.`,...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <CustomCloseButtonDemo />
}`,...o.parameters?.docs?.source},description:{story:`커스텀 닫기 버튼이 있는 Dialog입니다. 링크 공유 UI 예제로 읽기 전용 input과 복사 버튼을 제공하며,
DialogClose를 사용해 취소 액션을 구현합니다. 공유, 알림 등 정보 표시용 모달에 적합합니다.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 🎯 목적: Radix UI Dialog primitive의 ElementRef 타입을 사용하여 ref 생성
    const contentRef = useRef<React.ElementRef<typeof DialogPrimitive.Content>>(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setMessage("Form submitted successfully!");
      // 3초 후 Dialog 닫기
      setTimeout(() => {
        setOpen(false);
        setMessage("");
      }, 3000);
    };
    return <div className="flex flex-col gap-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Open Controlled Dialog</Button>
          </DialogTrigger>
          <DialogContent ref={contentRef} className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Controlled Dialog Example</DialogTitle>
              <DialogDescription>
                This dialog can be controlled programmatically using state and
                ref.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="email-input">Email</Label>
                  <Input id="email-input" type="email" placeholder="example@email.com" required />
                </div>
                {message && <div className="text-sm text-green-600 dark:text-green-400">
                    {message}
                  </div>}
              </div>
              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
            Open via State
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
            Close via State
          </Button>
        </div>

        <p className="text-muted-foreground text-sm">
          Dialog state: {open ? "Open" : "Closed"}
        </p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // 🎯 목적: play function을 통해 Dialog ref와 상태 제어를 테스트
    const canvas = within(canvasElement);

    // "Open via State" 버튼으로 Dialog 열기
    const openButton = canvas.getByRole("button", {
      name: "Open via State"
    });
    await userEvent.click(openButton);

    // Dialog가 열렸는지 확인
    const dialogTitle = await canvas.findByText("Controlled Dialog Example");
    await expect(dialogTitle).toBeVisible();

    // Dialog 상태 텍스트 확인
    const stateText = canvas.getByText(/Dialog state:/);
    await expect(stateText).toHaveTextContent("Dialog state: Open");
  }
}`,...r.parameters?.docs?.source},description:{story:`Ref 사용 예제: DialogContent에 ref를 전달하여 Radix UI primitive에 접근합니다.
이 예제는 프로그래매틱하게 Dialog를 열고 닫는 방법을 보여줍니다.`,...r.parameters?.docs?.description}}};const oe=["Default","CustomCloseButton","WithRef"];export{o as CustomCloseButton,l as Default,r as WithRef,oe as __namedExportsOrder,le as default};

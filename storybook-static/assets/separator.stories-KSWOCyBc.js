import{e}from"./iframe-BiU2suBC.js";import{S as t}from"./separator-CDgTfpW6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./utils-DgWKjmuI.js";const{expect:a,within:E}=__STORYBOOK_MODULE_TEST__;function b(){return e.createElement("div",null,e.createElement("div",{className:"space-y-1"},e.createElement("h4",{className:"text-sm leading-none font-medium"},"Radix Primitives"),e.createElement("p",{className:"text-muted-foreground text-sm"},"An open-source UI component library.")),e.createElement(t,{className:"my-4"}),e.createElement("div",{className:"flex h-5 items-center space-x-4 text-sm"},e.createElement("div",null,"Blog"),e.createElement(t,{orientation:"vertical"}),e.createElement("div",null,"Docs"),e.createElement(t,{orientation:"vertical"}),e.createElement("div",null,"Source")))}const j={title:"ui/Separator",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Visually or semantically separates content."}}},args:{orientation:"horizontal",decorative:!0,className:"w-64"},excludeStories:/.*Demo$/,argTypes:{className:{control:"text",description:"Additional CSS classes"},orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"The orientation of the separator"},decorative:{control:"boolean",description:"Whether the separator is purely decorative"}}},n={render:()=>e.createElement(b,null)},s={args:{orientation:"horizontal",className:"w-64"}},o={args:{orientation:"vertical",className:"h-16"}},c={args:{orientation:"horizontal",className:"w-96"}},i={args:{orientation:"vertical",className:"h-24"}},m={render:()=>e.createElement("div",{className:"w-full max-w-md space-y-4"},e.createElement(t,{className:"bg-primary"}),e.createElement(t,{className:"bg-secondary h-0.5"}),e.createElement(t,{className:"from-primary to-secondary h-1 bg-gradient-to-r"}),e.createElement("div",{className:"flex items-center space-x-4"},e.createElement("span",{className:"text-sm"},"Left"),e.createElement(t,{orientation:"vertical",className:"bg-primary h-6"}),e.createElement("span",{className:"text-sm"},"Right")))},l={render:()=>e.createElement("div",{className:"w-[350px] rounded-lg border p-4"},e.createElement("div",{className:"flex items-center justify-between"},e.createElement("h3",{className:"font-semibold"},"Notifications"),e.createElement("span",{className:"text-muted-foreground text-sm"},"3 unread")),e.createElement(t,{className:"my-3"}),e.createElement("div",{className:"space-y-3"},e.createElement("div",{className:"flex items-start space-x-2"},e.createElement("div",{className:"size-2 translate-y-1 rounded-full bg-sky-500"}),e.createElement("div",{className:"space-y-1"},e.createElement("p",{className:"text-sm leading-none font-medium"},"New message"),e.createElement("p",{className:"text-muted-foreground text-sm"},"You have a new message from Alex"))),e.createElement(t,null),e.createElement("div",{className:"flex items-start space-x-2"},e.createElement("div",{className:"size-2 translate-y-1 rounded-full bg-sky-500"}),e.createElement("div",{className:"space-y-1"},e.createElement("p",{className:"text-sm leading-none font-medium"},"Meeting reminder"),e.createElement("p",{className:"text-muted-foreground text-sm"},"Team standup in 30 minutes")))))},d={render:()=>e.createElement("div",{className:"flex items-center rounded-md border px-3"},e.createElement("button",{className:"hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm"},"Bold"),e.createElement("button",{className:"hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm"},"Italic"),e.createElement(t,{orientation:"vertical",className:"mx-2 h-6"}),e.createElement("button",{className:"hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm"},"Left"),e.createElement("button",{className:"hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm"},"Center"),e.createElement("button",{className:"hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm"},"Right"))},p={name:"when rendered, should display both horizontal and vertical separators",tags:["!dev","!autodocs"],render:()=>e.createElement("div",{className:"space-y-6","data-testid":"separator-container"},e.createElement("div",{className:"space-y-4"},e.createElement("h4",{className:"text-sm font-medium"},"Horizontal Separator"),e.createElement("div",{className:"text-muted-foreground text-sm"},"Content before separator"),e.createElement(t,{orientation:"horizontal","data-testid":"horizontal-separator"}),e.createElement("div",{className:"text-muted-foreground text-sm"},"Content after separator")),e.createElement("div",{className:"space-y-4"},e.createElement("h4",{className:"text-sm font-medium"},"Vertical Separator"),e.createElement("div",{className:"flex items-center space-x-4 text-sm"},e.createElement("span",{"data-testid":"item-1"},"Item 1"),e.createElement(t,{orientation:"vertical",className:"h-6","data-testid":"vertical-separator-1"}),e.createElement("span",{"data-testid":"item-2"},"Item 2"),e.createElement(t,{orientation:"vertical",className:"h-6","data-testid":"vertical-separator-2"}),e.createElement("span",{"data-testid":"item-3"},"Item 3")))),play:async({canvasElement:h})=>{const r=E(h),g=r.getByTestId("separator-container");await a(g).toBeInTheDocument();const u=r.getByTestId("horizontal-separator");await a(u).toBeInTheDocument(),await a(u).toHaveAttribute("data-orientation","horizontal");const v=r.getByTestId("vertical-separator-1");await a(v).toBeInTheDocument(),await a(v).toHaveAttribute("data-orientation","vertical");const x=r.getByTestId("vertical-separator-2");await a(x).toBeInTheDocument(),await a(x).toHaveAttribute("data-orientation","vertical");const N=r.getByTestId("item-1");await a(N).toHaveTextContent("Item 1");const f=r.getByTestId("item-2");await a(f).toHaveTextContent("Item 2");const y=r.getByTestId("item-3");await a(y).toHaveTextContent("Item 3")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SeparatorDemo />
}`,...n.parameters?.docs?.source},description:{story:"The default form of the separator demonstrating both orientations.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    className: "w-64"
  }
}`,...s.parameters?.docs?.source},description:{story:"Basic horizontal separator.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    className: "h-16"
  }
}`,...o.parameters?.docs?.source},description:{story:"Vertical separator.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    className: "w-96"
  }
}`,...c.parameters?.docs?.source},description:{story:"Horizontal separator with custom width.",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    className: "h-24"
  }
}`,...i.parameters?.docs?.source},description:{story:"Vertical separator with custom height.",...i.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">
      <Separator className="bg-primary" />
      <Separator className="bg-secondary h-0.5" />
      <Separator className="from-primary to-secondary h-1 bg-gradient-to-r" />
      <div className="flex items-center space-x-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" className="bg-primary h-6" />
        <span className="text-sm">Right</span>
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Separator with custom styling.",...m.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Notifications</h3>
        <span className="text-muted-foreground text-sm">3 unread</span>
      </div>
      <Separator className="my-3" />
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <div className="size-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">New message</p>
            <p className="text-muted-foreground text-sm">
              You have a new message from Alex
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-start space-x-2">
          <div className="size-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">Meeting reminder</p>
            <p className="text-muted-foreground text-sm">
              Team standup in 30 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Separator in a card layout.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center rounded-md border px-3">
      <button className="hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm">
        Bold
      </button>
      <button className="hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm">
        Italic
      </button>
      <Separator orientation="vertical" className="mx-2 h-6" />
      <button className="hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm">
        Left
      </button>
      <button className="hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm">
        Center
      </button>
      <button className="hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center rounded-md px-2 text-sm">
        Right
      </button>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"Separator in a toolbar.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "when rendered, should display both horizontal and vertical separators",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="space-y-6" data-testid="separator-container">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Horizontal Separator</h4>
        <div className="text-muted-foreground text-sm">
          Content before separator
        </div>
        <Separator orientation="horizontal" data-testid="horizontal-separator" />
        <div className="text-muted-foreground text-sm">
          Content after separator
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium">Vertical Separator</h4>
        <div className="flex items-center space-x-4 text-sm">
          <span data-testid="item-1">Item 1</span>
          <Separator orientation="vertical" className="h-6" data-testid="vertical-separator-1" />
          <span data-testid="item-2">Item 2</span>
          <Separator orientation="vertical" className="h-6" data-testid="vertical-separator-2" />
          <span data-testid="item-3">Item 3</span>
        </div>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Separator 컴포넌트가 horizontal과 vertical 방향을 올바르게 렌더링하는지 확인

    // Container 확인
    const container = canvas.getByTestId("separator-container");
    await expect(container).toBeInTheDocument();

    // Horizontal Separator 확인
    const horizontalSeparator = canvas.getByTestId("horizontal-separator");
    await expect(horizontalSeparator).toBeInTheDocument();
    await expect(horizontalSeparator).toHaveAttribute("data-orientation", "horizontal");

    // Vertical Separator 확인
    const verticalSeparator1 = canvas.getByTestId("vertical-separator-1");
    await expect(verticalSeparator1).toBeInTheDocument();
    await expect(verticalSeparator1).toHaveAttribute("data-orientation", "vertical");
    const verticalSeparator2 = canvas.getByTestId("vertical-separator-2");
    await expect(verticalSeparator2).toBeInTheDocument();
    await expect(verticalSeparator2).toHaveAttribute("data-orientation", "vertical");

    // Separated items 확인
    const item1 = canvas.getByTestId("item-1");
    await expect(item1).toHaveTextContent("Item 1");
    const item2 = canvas.getByTestId("item-2");
    await expect(item2).toHaveTextContent("Item 2");
    const item3 = canvas.getByTestId("item-3");
    await expect(item3).toHaveTextContent("Item 3");
  }
}`,...p.parameters?.docs?.source}}};const A=["SeparatorDemo","Default","Horizontal","Vertical","CustomWidth","CustomHeight","CustomStyling","InCard","InToolbar","ShouldRenderBothOrientations"];export{i as CustomHeight,m as CustomStyling,c as CustomWidth,n as Default,s as Horizontal,l as InCard,d as InToolbar,b as SeparatorDemo,p as ShouldRenderBothOrientations,o as Vertical,A as __namedExportsOrder,j as default};

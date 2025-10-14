import{r as e}from"./iframe-BiU2suBC.js";import{B as t}from"./badge-BEGAFUV-.js";import{c as x}from"./createLucideIcon-ng3sinjr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],p=x("badge-check",B),{expect:r,userEvent:g,within:h}=__STORYBOOK_MODULE_TEST__;function T(){return e.createElement("div",{className:"flex flex-col items-center gap-2"},e.createElement("div",{className:"flex w-full flex-wrap gap-2"},e.createElement(t,null,"Badge"),e.createElement(t,{variant:"secondary"},"Secondary"),e.createElement(t,{variant:"destructive"},"Destructive"),e.createElement(t,{variant:"outline"},"Outline")),e.createElement("div",{className:"flex w-full flex-wrap gap-2"},e.createElement(t,{variant:"secondary",className:"bg-blue-500 text-white dark:bg-blue-600"},e.createElement(p,null),"Verified"),e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"},"8"),e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",variant:"destructive"},"99"),e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",variant:"outline"},"20+")))}const V={title:"ui/Badge",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a badge or a component that looks like a badge."}}},args:{children:"Badge",variant:"default"},excludeStories:/.*Demo$/},s={},c={args:{variant:"secondary",children:"Secondary"}},i={args:{variant:"destructive",children:"Destructive"}},d={args:{variant:"outline",children:"Outline"}},l={render:()=>e.createElement(t,{variant:"secondary",className:"bg-blue-500 text-white dark:bg-blue-600"},e.createElement(p,null),"Verified")},u={render:()=>e.createElement("div",{className:"flex flex-wrap gap-2"},e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"},"8"),e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",variant:"destructive"},"99"),e.createElement(t,{className:"h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",variant:"outline"},"20+"))},m={name:"when user clicks buttons, should change badge variant dynamically",tags:["!dev","!autodocs"],render:()=>{const[o,a]=e.useState("default");return e.createElement("div",{className:"flex flex-col items-center gap-4"},e.createElement(t,{variant:o,"data-testid":"badge"},o.charAt(0).toUpperCase()+o.slice(1)," Badge"),e.createElement("div",{className:"flex gap-2"},e.createElement("button",{onClick:()=>a("default"),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"Default"),e.createElement("button",{onClick:()=>a("secondary"),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"Secondary"),e.createElement("button",{onClick:()=>a("destructive"),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"Destructive"),e.createElement("button",{onClick:()=>a("outline"),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"Outline")))},play:async({canvasElement:o})=>{const a=h(o),n=a.getByTestId("badge");await r(n).toBeInTheDocument(),await r(n).toHaveTextContent("Default Badge");const v=a.getByRole("button",{name:/Secondary/i});await g.click(v),await r(n).toHaveTextContent("Secondary Badge");const b=a.getByRole("button",{name:/Destructive/i});await g.click(b),await r(n).toHaveTextContent("Destructive Badge");const y=a.getByRole("button",{name:/Outline/i});await g.click(y),await r(n).toHaveTextContent("Outline Badge");const f=a.getByRole("button",{name:/Default/i});await g.click(f),await r(n).toHaveTextContent("Default Badge")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"The default form of the badge.",...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...c.parameters?.docs?.source},description:{story:"Secondary badge variant.",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...i.parameters?.docs?.source},description:{story:"Destructive badge variant.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...d.parameters?.docs?.source},description:{story:"Outline badge variant.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
      <BadgeCheckIcon />
      Verified
    </Badge>
}`,...l.parameters?.docs?.source},description:{story:"Badge with icon.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </Badge>
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
        99
      </Badge>
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
        20+
      </Badge>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Numeric badge examples.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "when user clicks buttons, should change badge variant dynamically",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [variant, setVariant] = React.useState<"default" | "secondary" | "destructive" | "outline">("default");
    return <div className="flex flex-col items-center gap-4">
        <Badge variant={variant} data-testid="badge">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
        </Badge>
        <div className="flex gap-2">
          <button onClick={() => setVariant("default")} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            Default
          </button>
          <button onClick={() => setVariant("secondary")} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            Secondary
          </button>
          <button onClick={() => setVariant("destructive")} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            Destructive
          </button>
          <button onClick={() => setVariant("outline")} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            Outline
          </button>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Badge variant가 버튼 클릭에 따라 동적으로 변경되는지 확인

    // 초기 상태 확인 (default)
    const badge = canvas.getByTestId("badge");
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveTextContent("Default Badge");

    // Secondary 버튼 클릭
    const secondaryButton = canvas.getByRole("button", {
      name: /Secondary/i
    });
    await userEvent.click(secondaryButton);
    await expect(badge).toHaveTextContent("Secondary Badge");

    // Destructive 버튼 클릭
    const destructiveButton = canvas.getByRole("button", {
      name: /Destructive/i
    });
    await userEvent.click(destructiveButton);
    await expect(badge).toHaveTextContent("Destructive Badge");

    // Outline 버튼 클릭
    const outlineButton = canvas.getByRole("button", {
      name: /Outline/i
    });
    await userEvent.click(outlineButton);
    await expect(badge).toHaveTextContent("Outline Badge");

    // 다시 Default로 돌아가기
    const defaultButton = canvas.getByRole("button", {
      name: /Default/i
    });
    await userEvent.click(defaultButton);
    await expect(badge).toHaveTextContent("Default Badge");
  }
}`,...m.parameters?.docs?.source},description:{story:"Badge variant 변경을 테스트합니다.",...m.parameters?.docs?.description}}};const H=["BadgeDemo","Default","Secondary","Destructive","Outline","WithIcon","Numeric","ShouldChangeVariant"];export{T as BadgeDemo,s as Default,i as Destructive,u as Numeric,d as Outline,c as Secondary,m as ShouldChangeVariant,l as WithIcon,H as __namedExportsOrder,V as default};

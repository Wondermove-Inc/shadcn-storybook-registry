import{B as D}from"./button-o25yRkrR.js";import{C as a}from"./checkbox-D-xrJ2CG.js";import{u as I,a as T,o as L,F as A,b as w,c as S,d as N,f as H,e as O,g as P,i as R,s as _}from"./form-DtlXXF_B.js";import{L as s}from"./label-DQUVhDdS.js";import{r as e}from"./iframe-BiU2suBC.js";import{t as $}from"./index-DmqJAwmu.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./check-DwuV1CBk.js";import"./createLucideIcon-ng3sinjr.js";import"./index-BT5_MN2X.js";import"./index-Dc_FVRD7.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-BT53Il6f.js";import"./index-DJRgpZyQ.js";import"./index-7qFhJqzR.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,fn:Y,userEvent:i,within:F}=__STORYBOOK_MODULE_TEST__;function pe(){return e.createElement("div",{className:"flex flex-col gap-6"},e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"terms"}),e.createElement(s,{htmlFor:"terms"},"Accept terms and conditions")),e.createElement("div",{className:"flex items-start gap-3"},e.createElement(a,{id:"terms-2",defaultChecked:!0}),e.createElement("div",{className:"grid gap-2"},e.createElement(s,{htmlFor:"terms-2"},"Accept terms and conditions"),e.createElement("p",{className:"text-muted-foreground text-sm"},"By clicking this checkbox, you agree to the terms and conditions."))),e.createElement("div",{className:"flex items-start gap-3"},e.createElement(a,{id:"toggle",disabled:!0}),e.createElement(s,{htmlFor:"toggle"},"Enable notifications")),e.createElement(s,{className:"hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"},e.createElement(a,{id:"toggle-2",defaultChecked:!0,className:"data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"}),e.createElement("div",{className:"grid gap-1.5 font-normal"},e.createElement("p",{className:"text-sm leading-none font-medium"},"Enable notifications"),e.createElement("p",{className:"text-muted-foreground text-sm"},"You can enable or disable notifications at any time."))))}const ke={title:"ui/Checkbox",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}},args:{defaultChecked:!1,disabled:!1,onCheckedChange:Y()},excludeStories:/.*Demo$/},h={},p={args:{defaultChecked:!0}},k={args:{disabled:!0}},b={render:()=>e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"terms"}),e.createElement(s,{htmlFor:"terms"},"Accept terms and conditions"))},u={render:()=>e.createElement("div",{className:"flex items-start gap-3"},e.createElement(a,{id:"terms-2",defaultChecked:!0}),e.createElement("div",{className:"grid gap-2"},e.createElement(s,{htmlFor:"terms-2"},"Accept terms and conditions"),e.createElement("p",{className:"text-muted-foreground text-sm"},"By clicking this checkbox, you agree to the terms and conditions.")))},x={render:()=>e.createElement("div",{className:"flex items-start gap-3"},e.createElement(a,{id:"toggle",disabled:!0}),e.createElement(s,{htmlFor:"toggle"},"Enable notifications"))},g={render:()=>e.createElement(s,{className:"hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950"},e.createElement(a,{id:"toggle-2",defaultChecked:!0,className:"data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"}),e.createElement("div",{className:"grid gap-1.5 font-normal"},e.createElement("p",{className:"text-sm leading-none font-medium"},"Enable notifications"),e.createElement("p",{className:"text-muted-foreground text-sm"},"You can enable or disable notifications at any time.")))},C={render:()=>e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"unchecked"}),e.createElement(s,{htmlFor:"unchecked"},"Unchecked")),e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"checked",defaultChecked:!0}),e.createElement(s,{htmlFor:"checked"},"Checked")),e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"disabled-unchecked",disabled:!0}),e.createElement(s,{htmlFor:"disabled-unchecked"},"Disabled Unchecked")),e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"disabled-checked",disabled:!0,defaultChecked:!0}),e.createElement(s,{htmlFor:"disabled-checked"},"Disabled Checked")))},f={name:"when the checkbox is clicked, should toggle between checked and not checked",tags:["!dev","!autodocs"],render:()=>e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"test-terms"}),e.createElement(s,{htmlFor:"test-terms"},"Accept terms and conditions")),play:async({canvasElement:c})=>{const t=F(c).getByRole("checkbox");await i.click(t),n(t).toBeChecked(),await i.click(t,{delay:100}),n(t).not.toBeChecked(),await i.click(t,{delay:100}),n(t).toBeChecked()}},E={name:"when parent checkbox is clicked with partial children selection, should show indeterminate state",tags:["!dev","!autodocs"],render:()=>{const[c,d]=e.useState([!0,!1,!1]),t=c.every(Boolean),r=c.every(o=>!o),m=!t&&!r;return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement("div",{className:"flex items-center gap-3"},e.createElement(a,{id:"parent",checked:m?"indeterminate":t,onCheckedChange:o=>{d([o===!0,o===!0,o===!0])},"data-testid":"parent-checkbox"}),e.createElement(s,{htmlFor:"parent",className:"font-semibold"},"Select All")),e.createElement("div",{className:"ml-6 flex flex-col gap-2"},["Option 1","Option 2","Option 3"].map((o,l)=>e.createElement("div",{key:l,className:"flex items-center gap-3"},e.createElement(a,{id:`child-${l}`,checked:c[l],onCheckedChange:B=>{const y=[...c];y[l]=B===!0,d(y)},"data-testid":`child-checkbox-${l}`}),e.createElement(s,{htmlFor:`child-${l}`},o)))),e.createElement("div",{className:"text-muted-foreground text-sm","data-testid":"state-display"},"State:"," ",t?"All Selected":m?"Partially Selected":"None Selected"))},play:async({canvasElement:c})=>{const d=F(c),t=d.getByTestId("parent-checkbox"),r=d.getByTestId("state-display");await n(r).toHaveTextContent("State: Partially Selected"),await n(t).toHaveAttribute("data-state","indeterminate");const m=d.getByTestId("child-checkbox-1");await i.click(m),await n(r).toHaveTextContent("State: Partially Selected"),await n(t).toHaveAttribute("data-state","indeterminate");const o=d.getByTestId("child-checkbox-2");await i.click(o),await n(r).toHaveTextContent("State: All Selected"),await n(t).toBeChecked(),await i.click(t),await n(r).toHaveTextContent("State: None Selected"),await n(t).not.toBeChecked();const l=d.getByTestId("child-checkbox-0");await i.click(l),await n(r).toHaveTextContent("State: Partially Selected"),await n(t).toHaveAttribute("data-state","indeterminate"),await i.click(t),await n(r).toHaveTextContent("State: All Selected"),await n(t).toBeChecked()}},U=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],M=L({items:R(_()).refine(c=>c.some(d=>d),{message:"You have to select at least one item."})});function W(){const c=I({resolver:T(M),defaultValues:{items:["recents","home"]}});function d(t){$("You submitted the following values",{description:e.createElement("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4"},e.createElement("code",{className:"text-white"},JSON.stringify(t,null,2)))})}return e.createElement(A,{...c},e.createElement("form",{onSubmit:c.handleSubmit(d),className:"space-y-8"},e.createElement(w,{control:c.control,name:"items",render:()=>e.createElement(S,null,e.createElement("div",{className:"mb-4"},e.createElement(N,{className:"text-base"},"Sidebar"),e.createElement(H,null,"Select the items you want to display in the sidebar.")),U.map(t=>e.createElement(w,{key:t.id,control:c.control,name:"items",render:({field:r})=>e.createElement(S,{key:t.id,className:"flex flex-row items-center gap-2"},e.createElement(O,null,e.createElement(a,{checked:r.value?.includes(t.id),onCheckedChange:m=>m?r.onChange([...r.value,t.id]):r.onChange(r.value?.filter(o=>o!==t.id))})),e.createElement(N,{className:"text-sm font-normal"},t.label))})),e.createElement(P,null))}),e.createElement(D,{type:"submit"},"Submit")))}const v={render:()=>e.createElement(W,null)};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source},description:{story:"The default form of the checkbox.",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Checkbox in checked state.",...p.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...k.parameters?.docs?.source},description:{story:"Disabled checkbox.",...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Basic checkbox with label.",...b.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-start gap-3">
      <Checkbox id="terms-2" defaultChecked />
      <div className="grid gap-2">
        <Label htmlFor="terms-2">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-sm">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:"Checkbox with default checked state.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-start gap-3">
      <Checkbox id="toggle" disabled />
      <Label htmlFor="toggle">Enable notifications</Label>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Disabled checkbox.",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
      <Checkbox id="toggle-2" defaultChecked className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-muted-foreground text-sm">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
}`,...g.parameters?.docs?.source},description:{story:"Custom styled checkbox with card-like appearance.",...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Disabled Unchecked</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled Checked</Label>
      </div>
    </div>
}`,...C.parameters?.docs?.source},description:{story:"Individual checkbox states",...C.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "when the checkbox is clicked, should toggle between checked and not checked",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="flex items-center gap-3">
      <Checkbox id="test-terms" />
      <Label htmlFor="test-terms">Accept terms and conditions</Label>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox, {
      delay: 100
    });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox, {
      delay: 100
    });
    expect(checkbox).toBeChecked();
  }
}`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "when parent checkbox is clicked with partial children selection, should show indeterminate state",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [checkedItems, setCheckedItems] = React.useState([true, false, false]);
    const allChecked = checkedItems.every(Boolean);
    const noneChecked = checkedItems.every(item => !item);
    const isIndeterminate = !allChecked && !noneChecked;
    return <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Checkbox id="parent" checked={isIndeterminate ? "indeterminate" : allChecked} onCheckedChange={checked => {
          setCheckedItems([checked === true, checked === true, checked === true]);
        }} data-testid="parent-checkbox" />
          <Label htmlFor="parent" className="font-semibold">
            Select All
          </Label>
        </div>
        <div className="ml-6 flex flex-col gap-2">
          {["Option 1", "Option 2", "Option 3"].map((label, index) => <div key={index} className="flex items-center gap-3">
              <Checkbox id={\`child-\${index}\`} checked={checkedItems[index]} onCheckedChange={checked => {
            const newItems = [...checkedItems];
            newItems[index] = checked === true;
            setCheckedItems(newItems);
          }} data-testid={\`child-checkbox-\${index}\`} />
              <Label htmlFor={\`child-\${index}\`}>{label}</Label>
            </div>)}
        </div>
        <div className="text-muted-foreground text-sm" data-testid="state-display">
          State:{" "}
          {allChecked ? "All Selected" : isIndeterminate ? "Partially Selected" : "None Selected"}
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 부모 Checkbox가 자식 Checkbox의 선택 상태에 따라 indeterminate 상태를 올바르게 표시하는지 확인

    const parentCheckbox = canvas.getByTestId("parent-checkbox");
    const stateDisplay = canvas.getByTestId("state-display");

    // 초기 상태: Option 1만 선택됨 (Partially Selected)
    await expect(stateDisplay).toHaveTextContent("State: Partially Selected");
    await expect(parentCheckbox).toHaveAttribute("data-state", "indeterminate");

    // Option 2 선택
    const child1Checkbox = canvas.getByTestId("child-checkbox-1");
    await userEvent.click(child1Checkbox);
    await expect(stateDisplay).toHaveTextContent("State: Partially Selected");
    await expect(parentCheckbox).toHaveAttribute("data-state", "indeterminate");

    // Option 3 선택 (모두 선택됨)
    const child2Checkbox = canvas.getByTestId("child-checkbox-2");
    await userEvent.click(child2Checkbox);
    await expect(stateDisplay).toHaveTextContent("State: All Selected");
    await expect(parentCheckbox).toBeChecked();

    // 부모 Checkbox 클릭으로 모두 선택 해제
    await userEvent.click(parentCheckbox);
    await expect(stateDisplay).toHaveTextContent("State: None Selected");
    await expect(parentCheckbox).not.toBeChecked();

    // Option 1 선택 (다시 Partially Selected)
    const child0Checkbox = canvas.getByTestId("child-checkbox-0");
    await userEvent.click(child0Checkbox);
    await expect(stateDisplay).toHaveTextContent("State: Partially Selected");
    await expect(parentCheckbox).toHaveAttribute("data-state", "indeterminate");

    // 부모 Checkbox 클릭으로 모두 선택
    await userEvent.click(parentCheckbox);
    await expect(stateDisplay).toHaveTextContent("State: All Selected");
    await expect(parentCheckbox).toBeChecked();
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxReactHookFormMultiple />
}`,...v.parameters?.docs?.source},description:{story:"Checkbox with React Hook Form",...v.parameters?.docs?.description}}};const be=["CheckboxDemo","Default","DefaultChecked","DefaultDisabled","Basic","Checked","Disabled","WithCard","States","ShouldToggleCheck","ShouldHandleIndeterminateState","WithForm"];export{b as Basic,pe as CheckboxDemo,u as Checked,h as Default,p as DefaultChecked,k as DefaultDisabled,x as Disabled,E as ShouldHandleIndeterminateState,f as ShouldToggleCheck,C as States,g as WithCard,v as WithForm,be as __namedExportsOrder,ke as default};

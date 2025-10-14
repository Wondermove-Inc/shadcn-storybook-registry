import{B as h}from"./button-o25yRkrR.js";import{D,a as B,b as M,c as S,d as b,e as t,j as o,f as r,g as I,h as y,k,i as T,l as w,m as C,n as g}from"./dropdown-menu-CLAbh3UN.js";import{r as e}from"./iframe-BiU2suBC.js";import"./index-dSc6CJZX.js";import"./utils-DgWKjmuI.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./chevron-right-C1Com0QT.js";import"./createLucideIcon-ng3sinjr.js";import"./check-DwuV1CBk.js";import"./circle-_0ReNRZy.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-CpP8DfwQ.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-aDS8GPlc.js";import"./index-BEeKTTV4.js";import"./index-DrzUb6Kr.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-WGaa5q18.js";import"./preload-helper-PPVm8Dsz.js";const{expect:u,userEvent:f,waitFor:R,within:x}=__STORYBOOK_MODULE_TEST__;function v(){return e.createElement(D,null,e.createElement(B,{asChild:!0},e.createElement(h,{variant:"outline"},"Open")),e.createElement(M,{className:"w-56",align:"start"},e.createElement(S,null,"My Account"),e.createElement(b,null,e.createElement(t,null,"Profile",e.createElement(o,null,"⇧⌘P")),e.createElement(t,null,"Billing",e.createElement(o,null,"⌘B")),e.createElement(t,null,"Settings",e.createElement(o,null,"⌘S")),e.createElement(t,null,"Keyboard shortcuts",e.createElement(o,null,"⌘K"))),e.createElement(r,null),e.createElement(b,null,e.createElement(t,null,"Team"),e.createElement(I,null,e.createElement(y,null,"Invite users"),e.createElement(k,null,e.createElement(T,null,e.createElement(t,null,"Email"),e.createElement(t,null,"Message"),e.createElement(r,null),e.createElement(t,null,"More...")))),e.createElement(t,null,"New Team",e.createElement(o,null,"⌘+T"))),e.createElement(r,null),e.createElement(t,null,"GitHub"),e.createElement(t,null,"Support"),e.createElement(t,{disabled:!0},"API"),e.createElement(r,null),e.createElement(t,null,"Log out",e.createElement(o,null,"⇧⌘Q"))))}function O(){const[a,n]=e.useState(!0),[i,s]=e.useState(!1),[d,E]=e.useState(!1);return e.createElement(D,null,e.createElement(B,{asChild:!0},e.createElement(h,{variant:"outline"},"Open")),e.createElement(M,{className:"w-56"},e.createElement(S,null,"Appearance"),e.createElement(r,null),e.createElement(w,{checked:a,onCheckedChange:n},"Status Bar"),e.createElement(w,{checked:i,onCheckedChange:s,disabled:!0},"Activity Bar"),e.createElement(w,{checked:d,onCheckedChange:E},"Panel")))}function P(){const[a,n]=e.useState("bottom");return e.createElement(D,null,e.createElement(B,{asChild:!0},e.createElement(h,{variant:"outline"},"Open")),e.createElement(M,{className:"w-56"},e.createElement(S,null,"Panel Position"),e.createElement(r,null),e.createElement(C,{value:a,onValueChange:n},e.createElement(g,{value:"top"},"Top"),e.createElement(g,{value:"bottom"},"Bottom"),e.createElement(g,{value:"right"},"Right"))))}const ue={title:"ui/DropdownMenu",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A comprehensive dropdown menu with shortcuts, submenus, and groups."}}},excludeStories:/.*Demo$/},l={},c={render:()=>e.createElement(O,null)},m={render:()=>e.createElement(P,null)},p={name:"when trigger is clicked, should open menu and select items",tags:["!dev","!autodocs"],render:()=>e.createElement(v,null),play:async({canvasElement:a})=>{const n=x(a),i=n.getByRole("button",{name:/open/i});await u(i).toBeInTheDocument(),await f.click(i);const s=await R(async()=>await n.findByRole("menuitem",{name:/profile/i}));await u(s).toBeInTheDocument();const d=n.getByRole("menuitem",{name:/billing/i}),E=n.getByRole("menuitem",{name:/settings/i});await u(d).toBeInTheDocument(),await u(E).toBeInTheDocument(),await f.click(s)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"The default dropdown menu with all features.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenuCheckboxesDemo />
}`,...c.parameters?.docs?.source},description:{story:"Dropdown menu with checkbox items for toggling options.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenuRadioGroupDemo />
}`,...m.parameters?.docs?.source},description:{story:"Dropdown menu with radio group for selecting single option.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "when trigger is clicked, should open menu and select items",
  tags: ["!dev", "!autodocs"],
  render: () => <DropdownMenuDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Dropdown Menu가 트리거 버튼 클릭으로 열리고, 메뉴 아이템 선택이 가능한지 확인
    const triggerButton = canvas.getByRole("button", {
      name: /open/i
    });
    await expect(triggerButton).toBeInTheDocument();

    // 트리거 버튼 클릭하여 드롭다운 메뉴 열기
    await userEvent.click(triggerButton);

    // 메뉴가 열렸는지 확인 (메뉴 아이템 확인)
    const profileItem = await waitFor(async () => {
      return await canvas.findByRole("menuitem", {
        name: /profile/i
      });
    });
    await expect(profileItem).toBeInTheDocument();

    // 다른 메뉴 아이템들도 확인
    const billingItem = canvas.getByRole("menuitem", {
      name: /billing/i
    });
    const settingsItem = canvas.getByRole("menuitem", {
      name: /settings/i
    });
    await expect(billingItem).toBeInTheDocument();
    await expect(settingsItem).toBeInTheDocument();

    // 메뉴 아이템 클릭
    await userEvent.click(profileItem);
  }
}`,...p.parameters?.docs?.source}}};const pe=["Default","Checkboxes","RadioGroup","ShouldOpenAndSelectMenuItem"];export{c as Checkboxes,l as Default,m as RadioGroup,p as ShouldOpenAndSelectMenuItem,pe as __namedExportsOrder,ue as default};

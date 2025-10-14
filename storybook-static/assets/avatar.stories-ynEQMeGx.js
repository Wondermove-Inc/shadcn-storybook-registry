import{e as a}from"./iframe-BiU2suBC.js";import{A as e,a as r,b as t}from"./avatar-D8dvIAsW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgWKjmuI.js";import"./index-BT5_MN2X.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-BUJQGk3H.js";import"./index-ynW3WxUC.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./index-wLFCSCG5.js";const{expect:d,waitFor:u,within:b}=__STORYBOOK_MODULE_TEST__;function R(){return a.createElement("div",{className:"flex flex-row flex-wrap items-center gap-12"},a.createElement(e,null,a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN")),a.createElement(e,{className:"rounded-lg"},a.createElement(r,{src:"https://github.com/evilrabbit.png",alt:"@evilrabbit"}),a.createElement(t,null,"ER")),a.createElement("div",{className:"*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"},a.createElement(e,null,a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN")),a.createElement(e,null,a.createElement(r,{src:"https://github.com/leerob.png",alt:"@leerob"}),a.createElement(t,null,"LR")),a.createElement(e,null,a.createElement(r,{src:"https://github.com/evilrabbit.png",alt:"@evilrabbit"}),a.createElement(t,null,"ER"))))}const T={title:"ui/Avatar",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An image element with a fallback for representing the user."}}},excludeStories:/.*Demo$/,argTypes:{className:{control:"text",description:"Additional CSS classes (e.g., 'h-16 w-16' for large size, 'rounded-lg' for square)"}},args:{className:""},render:m=>a.createElement(e,{className:m.className},a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN"))},l={},n={render:()=>a.createElement(e,null,a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN"))},c={render:()=>a.createElement(e,{className:"rounded-lg"},a.createElement(r,{src:"https://github.com/evilrabbit.png",alt:"@evilrabbit"}),a.createElement(t,null,"ER"))},s={render:()=>a.createElement("div",{className:"*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"},a.createElement(e,null,a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN")),a.createElement(e,null,a.createElement(r,{src:"https://github.com/leerob.png",alt:"@leerob"}),a.createElement(t,null,"LR")),a.createElement(e,null,a.createElement(r,{src:"https://github.com/evilrabbit.png",alt:"@evilrabbit"}),a.createElement(t,null,"ER")))},o={render:()=>a.createElement(e,null,a.createElement(t,null,"AB"))},i={name:"when image fails to load, should display fallback text",tags:["!dev","!autodocs"],render:()=>a.createElement("div",{className:"flex gap-4"},a.createElement(e,null,a.createElement(r,{src:"https://invalid-url-that-will-fail.example/image.png",alt:"@invalid"}),a.createElement(t,{"data-testid":"fallback"},"FB")),a.createElement(e,null,a.createElement(r,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.createElement(t,null,"CN"))),play:async({canvasElement:m})=>{const p=b(m);await u(async()=>{const g=await p.findByTestId("fallback");await d(g).toBeInTheDocument(),await d(g).toHaveTextContent("FB")},{timeout:3e3});const v=p.getAllByRole("img");await u(()=>{d(v.length).toBeGreaterThan(0)},{timeout:3e3})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"The default form of the avatar.",...l.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...n.parameters?.docs?.source},description:{story:"Basic avatar with image and fallback.",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar className="rounded-lg">
      <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
}`,...c.parameters?.docs?.source},description:{story:"Avatar with rounded corners.",...c.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Stacked avatars with grayscale effect.",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
}`,...o.parameters?.docs?.source},description:{story:"Avatar with only fallback (no image).",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "when image fails to load, should display fallback text",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://invalid-url-that-will-fail.example/image.png" alt="@invalid" />
        <AvatarFallback data-testid="fallback">FB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 이미지 로딩 실패 시 fallback 텍스트가 표시되는지 확인

    // Fallback이 표시될 때까지 대기
    await waitFor(async () => {
      const fallback = await canvas.findByTestId("fallback");
      await expect(fallback).toBeInTheDocument();
      await expect(fallback).toHaveTextContent("FB");
    }, {
      timeout: 3000
    });

    // 두 번째 Avatar는 정상 이미지이므로 img가 로드되어야 함
    const images = canvas.getAllByRole("img");
    await waitFor(() => {
      // 최소 하나의 이미지가 로드됨
      expect(images.length).toBeGreaterThan(0);
    }, {
      timeout: 3000
    });
  }
}`,...i.parameters?.docs?.source},description:{story:"Avatar 이미지 폴백을 테스트합니다.",...i.parameters?.docs?.description}}};const C=["AvatarDemo","Default","Basic","Rounded","Stacked","FallbackOnly","ShouldShowFallbackOnImageError"];export{R as AvatarDemo,n as Basic,l as Default,o as FallbackOnly,c as Rounded,i as ShouldShowFallbackOnImageError,s as Stacked,C as __namedExportsOrder,T as default};

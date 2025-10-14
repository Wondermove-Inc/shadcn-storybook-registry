import{r as e}from"./iframe-BiU2suBC.js";import{S as t}from"./skeleton-Bup3GAzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgWKjmuI.js";const{expect:n,waitFor:h,within:v}=__STORYBOOK_MODULE_TEST__;function f(){return e.createElement("div",{className:"flex items-center space-x-4"},e.createElement(t,{className:"h-12 w-12 rounded-full"}),e.createElement("div",{className:"space-y-2"},e.createElement(t,{className:"h-4 w-[250px]"}),e.createElement(t,{className:"h-4 w-[200px]"})))}function w(){return e.createElement("div",{className:"flex flex-col space-y-3"},e.createElement(t,{className:"h-[125px] w-[250px] rounded-xl"}),e.createElement("div",{className:"space-y-2"},e.createElement(t,{className:"h-4 w-[250px]"}),e.createElement(t,{className:"h-4 w-[200px]"})))}const S={title:"ui/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use to show a placeholder while content is loading."}}},excludeStories:/.*Demo$|SkeletonCard/,argTypes:{className:{control:"text",description:"Additional CSS classes for styling (e.g., 'h-12 w-12 rounded-full')"}},args:{className:"h-12 w-[250px]"},render:s=>e.createElement(t,{className:s.className})},o={},c={render:()=>e.createElement(w,null)},l={name:"when loading, should display skeleton, then show actual content",tags:["!dev","!autodocs"],render:()=>{const[s,a]=e.useState(!0);return e.useEffect(()=>{const r=setTimeout(()=>a(!1),2e3);return()=>clearTimeout(r)},[]),e.createElement("div",{className:"flex items-center space-x-4"},s?e.createElement(e.Fragment,null,e.createElement(t,{className:"h-12 w-12 rounded-full","data-testid":"skeleton-avatar"}),e.createElement("div",{className:"space-y-2"},e.createElement(t,{className:"h-4 w-[250px]","data-testid":"skeleton-line1"}),e.createElement(t,{className:"h-4 w-[200px]","data-testid":"skeleton-line2"}))):e.createElement(e.Fragment,null,e.createElement("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700","data-testid":"actual-avatar"},"👤"),e.createElement("div",{className:"space-y-2"},e.createElement("div",{className:"h-4 w-[250px]","data-testid":"actual-line1"},"John Doe"),e.createElement("div",{className:"h-4 w-[200px]","data-testid":"actual-line2"},"Software Engineer"))))},play:async({canvasElement:s})=>{const a=v(s),r=a.getByTestId("skeleton-avatar");await n(r).toBeInTheDocument();const i=a.getByTestId("skeleton-line1");await n(i).toBeInTheDocument();const d=a.getByTestId("skeleton-line2");await n(d).toBeInTheDocument(),await h(async()=>{const m=await a.findByTestId("actual-avatar");await n(m).toBeInTheDocument();const u=a.getByTestId("actual-line1");await n(u).toHaveTextContent("John Doe");const p=a.getByTestId("actual-line2");await n(p).toHaveTextContent("Software Engineer")},{timeout:3e3})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"The default form of the skeleton.",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SkeletonCard />
}`,...c.parameters?.docs?.source},description:{story:"Skeleton as a card placeholder.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "when loading, should display skeleton, then show actual content",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);
    return <div className="flex items-center space-x-4">
        {loading ? <>
            <Skeleton className="h-12 w-12 rounded-full" data-testid="skeleton-avatar" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" data-testid="skeleton-line1" />
              <Skeleton className="h-4 w-[200px]" data-testid="skeleton-line2" />
            </div>
          </> : <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700" data-testid="actual-avatar">
              👤
            </div>
            <div className="space-y-2">
              <div className="h-4 w-[250px]" data-testid="actual-line1">
                John Doe
              </div>
              <div className="h-4 w-[200px]" data-testid="actual-line2">
                Software Engineer
              </div>
            </div>
          </>}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 로딩 중일 때 Skeleton이 표시되고, 로딩 완료 후 실제 콘텐츠가 표시되는지 확인

    // 초기 로딩 상태 확인 (Skeleton 표시)
    const skeletonAvatar = canvas.getByTestId("skeleton-avatar");
    await expect(skeletonAvatar).toBeInTheDocument();
    const skeletonLine1 = canvas.getByTestId("skeleton-line1");
    await expect(skeletonLine1).toBeInTheDocument();
    const skeletonLine2 = canvas.getByTestId("skeleton-line2");
    await expect(skeletonLine2).toBeInTheDocument();

    // 로딩 완료 대기 (2초 후 실제 콘텐츠 표시)
    await waitFor(async () => {
      const actualAvatar = await canvas.findByTestId("actual-avatar");
      await expect(actualAvatar).toBeInTheDocument();
      const actualLine1 = canvas.getByTestId("actual-line1");
      await expect(actualLine1).toHaveTextContent("John Doe");
      const actualLine2 = canvas.getByTestId("actual-line2");
      await expect(actualLine2).toHaveTextContent("Software Engineer");
    }, {
      timeout: 3000
    });
  }
}`,...l.parameters?.docs?.source},description:{story:"Skeleton 로딩 상태를 테스트합니다.",...l.parameters?.docs?.description}}};const E=["SkeletonDemo","SkeletonCard","Default","Card","ShouldShowLoadingState"];export{c as Card,o as Default,l as ShouldShowLoadingState,w as SkeletonCard,f as SkeletonDemo,E as __namedExportsOrder,S as default};

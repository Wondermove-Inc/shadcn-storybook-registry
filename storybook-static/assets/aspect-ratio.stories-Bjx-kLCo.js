import{r as x,e}from"./iframe-BiU2suBC.js";import{P as A}from"./index-DF-uitis.js";import{j as R}from"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";var B="AspectRatio",N=x.forwardRef((t,r)=>{const{ratio:u=1/1,style:l,...v}=t;return R.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/u}%`},"data-radix-aspect-ratio-wrapper":"",children:R.jsx(A.div,{...v,ref:r,style:{...l,position:"absolute",top:0,right:0,bottom:0,left:0}})})});N.displayName=B;var D=N;const a=x.forwardRef((t,r)=>x.createElement(D,{ref:r,"data-slot":"aspect-ratio",...t}));a.displayName="AspectRatio";try{a.displayName="AspectRatio",a.__docgenInfo={description:`🎯 목적: AspectRatio 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Radix UI AspectRatio.Root primitive 사용
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"AspectRatio",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:o,within:T}=__STORYBOOK_MODULE_TEST__;function P(){return e.createElement("div",{className:"w-[450px]"},e.createElement(a,{ratio:16/9,className:"bg-muted rounded-lg"},e.createElement("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"})))}const F={title:"ui/AspectRatio",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays content within a desired ratio."}}},args:{ratio:16/9,className:"bg-muted rounded-lg w-[450px]"},excludeStories:/.*Demo$/},s={render:t=>e.createElement("div",{className:"w-[450px]"},e.createElement(a,{...t},e.createElement("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"})))},i={args:{ratio:16/9},render:t=>e.createElement("div",{className:"w-[450px]"},e.createElement(a,{...t},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-semibold text-white"},"16:9")))},n={args:{ratio:4/3},render:t=>e.createElement("div",{className:"w-[450px]"},e.createElement(a,{...t},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-lg font-semibold text-white"},"4:3")))},c={args:{ratio:1/1},render:t=>e.createElement("div",{className:"w-[300px]"},e.createElement(a,{...t},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-semibold text-white"},"1:1")))},d={args:{ratio:21/9},render:t=>e.createElement("div",{className:"w-[600px]"},e.createElement(a,{...t},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-lg font-semibold text-white"},"21:9")))},p={name:"when rendered with different ratios, should maintain correct aspect ratios",tags:["!dev","!autodocs"],render:()=>e.createElement("div",{className:"space-y-6","data-testid":"aspect-ratio-container"},e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"text-sm font-medium"},"16:9 (Widescreen)"),e.createElement("div",{className:"w-[450px]","data-testid":"ratio-16-9-container"},e.createElement(a,{ratio:16/9,"data-testid":"ratio-16-9"},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-semibold text-white"},"16:9")))),e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"text-sm font-medium"},"4:3 (Standard)"),e.createElement("div",{className:"w-[450px]","data-testid":"ratio-4-3-container"},e.createElement(a,{ratio:4/3,"data-testid":"ratio-4-3"},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-lg font-semibold text-white"},"4:3")))),e.createElement("div",{className:"space-y-2"},e.createElement("h4",{className:"text-sm font-medium"},"1:1 (Square)"),e.createElement("div",{className:"w-[300px]","data-testid":"ratio-1-1-container"},e.createElement(a,{ratio:1/1,"data-testid":"ratio-1-1"},e.createElement("div",{className:"flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-semibold text-white"},"1:1"))))),play:async({canvasElement:t})=>{const r=T(t),u=r.getByTestId("aspect-ratio-container");await o(u).toBeInTheDocument();const l=r.getByTestId("ratio-16-9");await o(l).toBeInTheDocument(),await o(l).toHaveTextContent("16:9");const w=r.getByTestId("ratio-16-9-container").querySelector('[data-testid="ratio-16-9"]');if(w){const{width:g,height:f}=w.getBoundingClientRect(),m=16/9,h=g/f,C=Math.abs(h-m)/m;await o(C).toBeLessThan(.02)}const b=r.getByTestId("ratio-4-3");await o(b).toBeInTheDocument(),await o(b).toHaveTextContent("4:3");const y=r.getByTestId("ratio-1-1");await o(y).toBeInTheDocument(),await o(y).toHaveTextContent("1:1");const E=r.getByTestId("ratio-1-1-container").querySelector('[data-testid="ratio-1-1"]');if(E){const{width:g,height:f}=E.getBoundingClientRect(),m=g/f,h=Math.abs(m-1);await o(h).toBeLessThan(.02)}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[450px]">
      <AspectRatio {...args}>
        <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale" />
      </AspectRatio>
    </div>
}`,...s.parameters?.docs?.source},description:{story:"The default 16:9 aspect ratio with Image.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-semibold text-white">
          16:9
        </div>
      </AspectRatio>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"16:9 aspect ratio (Widescreen).",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3
  },
  render: args => <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-lg font-semibold text-white">
          4:3
        </div>
      </AspectRatio>
    </div>
}`,...n.parameters?.docs?.source},description:{story:"4:3 aspect ratio (Standard).",...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1 / 1
  },
  render: args => <div className="w-[300px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-semibold text-white">
          1:1
        </div>
      </AspectRatio>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"1:1 aspect ratio (Square).",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 21 / 9
  },
  render: args => <div className="w-[600px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-lg font-semibold text-white">
          21:9
        </div>
      </AspectRatio>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"21:9 aspect ratio (Ultrawide).",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "when rendered with different ratios, should maintain correct aspect ratios",
  tags: ["!dev", "!autodocs"],
  render: () => <div className="space-y-6" data-testid="aspect-ratio-container">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">16:9 (Widescreen)</h4>
        <div className="w-[450px]" data-testid="ratio-16-9-container">
          <AspectRatio ratio={16 / 9} data-testid="ratio-16-9">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-semibold text-white">
              16:9
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">4:3 (Standard)</h4>
        <div className="w-[450px]" data-testid="ratio-4-3-container">
          <AspectRatio ratio={4 / 3} data-testid="ratio-4-3">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-lg font-semibold text-white">
              4:3
            </div>
          </AspectRatio>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">1:1 (Square)</h4>
        <div className="w-[300px]" data-testid="ratio-1-1-container">
          <AspectRatio ratio={1 / 1} data-testid="ratio-1-1">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-semibold text-white">
              1:1
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: AspectRatio 컴포넌트가 다양한 비율을 올바르게 유지하는지 확인

    // Container 확인
    const container = canvas.getByTestId("aspect-ratio-container");
    await expect(container).toBeInTheDocument();

    // 16:9 AspectRatio 확인
    const ratio169 = canvas.getByTestId("ratio-16-9");
    await expect(ratio169).toBeInTheDocument();
    await expect(ratio169).toHaveTextContent("16:9");

    // 16:9 컨테이너의 크기 확인
    const ratio169Container = canvas.getByTestId("ratio-16-9-container");
    const ratio169Element = ratio169Container.querySelector('[data-testid="ratio-16-9"]');
    if (ratio169Element) {
      const {
        width,
        height
      } = ratio169Element.getBoundingClientRect();
      // 16:9 비율 검증 (오차 허용 범위 ±2%)
      const expectedRatio = 16 / 9;
      const actualRatio = width / height;
      const ratioError = Math.abs(actualRatio - expectedRatio) / expectedRatio;
      await expect(ratioError).toBeLessThan(0.02);
    }

    // 4:3 AspectRatio 확인
    const ratio43 = canvas.getByTestId("ratio-4-3");
    await expect(ratio43).toBeInTheDocument();
    await expect(ratio43).toHaveTextContent("4:3");

    // 1:1 AspectRatio 확인
    const ratio11 = canvas.getByTestId("ratio-1-1");
    await expect(ratio11).toBeInTheDocument();
    await expect(ratio11).toHaveTextContent("1:1");

    // 1:1 정사각형 비율 검증
    const ratio11Container = canvas.getByTestId("ratio-1-1-container");
    const ratio11Element = ratio11Container.querySelector('[data-testid="ratio-1-1"]');
    if (ratio11Element) {
      const {
        width,
        height
      } = ratio11Element.getBoundingClientRect();
      // 1:1 비율 검증 (오차 허용 범위 ±2%)
      const actualRatio = width / height;
      const ratioError = Math.abs(actualRatio - 1);
      await expect(ratioError).toBeLessThan(0.02);
    }
  }
}`,...p.parameters?.docs?.source}}};const L=["AspectRatioDemo","Default","Widescreen","Standard","Square","Ultrawide","ShouldMaintainAspectRatio"];export{P as AspectRatioDemo,s as Default,p as ShouldMaintainAspectRatio,c as Square,n as Standard,d as Ultrawide,i as Widescreen,L as __namedExportsOrder,F as default};

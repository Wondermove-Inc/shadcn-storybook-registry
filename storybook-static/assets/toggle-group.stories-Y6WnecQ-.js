import{e,r as b}from"./iframe-BiU2suBC.js";import{c as W}from"./index-BT5_MN2X.js";import{P as L}from"./index-DF-uitis.js";import{c as V,I as X,R as Z}from"./index-WGaa5q18.js";import{a as ee,t as te,B as h,I as G,U as f}from"./toggle-CIG2ZjUd.js";import{u as O}from"./index-CpP8DfwQ.js";import{u as ae}from"./index-DrzUb6Kr.js";import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{a as U}from"./utils-DgWKjmuI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./index-Dc_FVRD7.js";import"./index-BEeKTTV4.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-BUJQGk3H.js";import"./createLucideIcon-ng3sinjr.js";import"./index-dSc6CJZX.js";var p="ToggleGroup",[M]=W(p,[V]),q=V(),z=e.forwardRef((t,l)=>{const{type:o,...a}=t;if(o==="single"){const n=a;return g.jsx(oe,{...n,ref:l})}if(o==="multiple"){const n=a;return g.jsx(le,{...n,ref:l})}throw new Error(`Missing prop \`type\` expected on \`${p}\``)});z.displayName=p;var[H,$]=M(p),oe=e.forwardRef((t,l)=>{const{value:o,defaultValue:a,onValueChange:n=()=>{},...i}=t,[s,u]=O({prop:o,defaultProp:a??"",onChange:n,caller:p});return g.jsx(H,{scope:t.__scopeToggleGroup,type:"single",value:e.useMemo(()=>s?[s]:[],[s]),onItemActivate:u,onItemDeactivate:e.useCallback(()=>u(""),[u]),children:g.jsx(K,{...i,ref:l})})}),le=e.forwardRef((t,l)=>{const{value:o,defaultValue:a,onValueChange:n=()=>{},...i}=t,[s,u]=O({prop:o,defaultProp:a??[],onChange:n,caller:p}),m=e.useCallback(d=>u((T=[])=>[...T,d]),[u]),P=e.useCallback(d=>u((T=[])=>T.filter(Q=>Q!==d)),[u]);return g.jsx(H,{scope:t.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:m,onItemDeactivate:P,children:g.jsx(K,{...i,ref:l})})});z.displayName=p;var[re,ne]=M(p),K=e.forwardRef((t,l)=>{const{__scopeToggleGroup:o,disabled:a=!1,rovingFocus:n=!0,orientation:i,dir:s,loop:u=!0,...m}=t,P=q(o),d=ae(s),T={role:"group",dir:d,...m};return g.jsx(re,{scope:o,rovingFocus:n,disabled:a,children:n?g.jsx(Z,{asChild:!0,...P,orientation:i,dir:d,loop:u,children:g.jsx(L.div,{...T,ref:l})}):g.jsx(L.div,{...T,ref:l})})}),A="ToggleGroupItem",Y=e.forwardRef((t,l)=>{const o=$(A,t.__scopeToggleGroup),a=ne(A,t.__scopeToggleGroup),n=q(t.__scopeToggleGroup),i=o.value.includes(t.value),s=a.disabled||t.disabled,u={...t,pressed:i,disabled:s},m=e.useRef(null);return a.rovingFocus?g.jsx(X,{asChild:!0,...n,focusable:!s,active:i,ref:m,children:g.jsx(j,{...u,ref:l})}):g.jsx(j,{...u,ref:l})});Y.displayName=A;var j=e.forwardRef((t,l)=>{const{__scopeToggleGroup:o,value:a,...n}=t,i=$(A,o),s={role:"radio","aria-checked":t.pressed,"aria-pressed":void 0},u=i.type==="single"?s:void 0;return g.jsx(ee,{...u,...n,ref:l,onPressedChange:m=>{m?i.onItemActivate(a):i.onItemDeactivate(a)}})}),se=z,ue=Y;const J=b.createContext({size:"default",variant:"default"});function c({className:t,variant:l,size:o,children:a,...n}){return b.createElement(se,{"data-slot":"toggle-group","data-variant":l,"data-size":o,className:U("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",t),...n},b.createElement(J.Provider,{value:{variant:l,size:o}},a))}const r=b.forwardRef(({className:t,children:l,variant:o,size:a,...n},i)=>{const s=b.useContext(J);return b.createElement(ue,{ref:i,"data-slot":"toggle-group-item","data-variant":s.variant||o,"data-size":s.size||a,className:U(te({variant:s.variant||o,size:s.size||a}),"min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",t),...n},l)});r.displayName="ToggleGroupItem";try{c.displayName="ToggleGroup",c.__docgenInfo={description:`🎯 목적: ToggleGroup 컴포넌트 (Radix UI Root primitive)
📝 주의사항: Root primitive는 ref를 지원하지 않음, Context Provider 포함
🔄 변경이력: 2025-10-11 - React 18/19 dual support 검토 (ref 미지원 확인)`,displayName:"ToggleGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null | undefined'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null | undefined'}}}}}catch{}try{r.displayName="ToggleGroupItem",r.__docgenInfo={description:`🎯 목적: ToggleGroupItem 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Radix UI Item primitive 사용, Context에서 variant와 size 상속
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"ToggleGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null | undefined'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null | undefined'}}}}}catch{}const{expect:R,userEvent:F,within:ie}=__STORYBOOK_MODULE_TEST__;function v(){return e.createElement(c,{variant:"outline",type:"multiple"},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}function x(){return e.createElement(c,{type:"multiple",variant:"outline"},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}function B(){return e.createElement(c,{type:"single"},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}function N(){return e.createElement(c,{type:"single",size:"sm"},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}function S(){return e.createElement(c,{type:"multiple",size:"lg"},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}function _(){return e.createElement(c,{type:"multiple",disabled:!0},e.createElement(r,{value:"bold","aria-label":"Toggle bold"},e.createElement(h,{className:"h-4 w-4"})),e.createElement(r,{value:"italic","aria-label":"Toggle italic"},e.createElement(G,{className:"h-4 w-4"})),e.createElement(r,{value:"strikethrough","aria-label":"Toggle strikethrough"},e.createElement(f,{className:"h-4 w-4"})))}const Se={title:"ui/ToggleGroup",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A set of two-state buttons that can be toggled on or off."}}}},C={args:{type:"multiple",variant:"outline"},render:()=>e.createElement(v,null)},y={args:{type:"multiple",variant:"outline"},render:()=>e.createElement(x,null)},E={args:{type:"single"},render:()=>e.createElement(B,null)},I={args:{type:"single",size:"sm"},render:()=>e.createElement(N,null)},w={args:{type:"multiple",size:"lg"},render:()=>e.createElement(S,null)},D={args:{type:"multiple",disabled:!0},render:()=>e.createElement(_,null)},k={name:"when toggle group item is clicked, should toggle selection",tags:["!dev","!autodocs"],args:{type:"multiple",variant:"outline"},render:()=>e.createElement(v,null),play:async({canvasElement:t,step:l})=>{const o=ie(t);await l("click 'Toggle bold' button",async()=>{const a=o.getByLabelText(/toggle bold/i);await F.click(a)}),await l("verify bold button is selected",async()=>{const a=o.getByLabelText(/toggle bold/i);await R(a).toHaveAttribute("data-state","on")}),await l("click 'Toggle italic' button",async()=>{const a=o.getByLabelText(/toggle italic/i);await F.click(a)}),await l("verify both bold and italic are selected (multiple type)",async()=>{const a=o.getByLabelText(/toggle bold/i),n=o.getByLabelText(/toggle italic/i);await R(a).toHaveAttribute("data-state","on"),await R(n).toHaveAttribute("data-state","on")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`function ToggleGroupDemo() {
  return <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function ToggleGroupOutline() {
  return <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`function ToggleGroupSingle() {
  return <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`function ToggleGroupSmall() {
  return <ToggleGroup type="single" size="sm">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`function ToggleGroupLarge() {
  return <ToggleGroup type="multiple" size="lg">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`function ToggleGroupDisabled() {
  return <ToggleGroup type="multiple" disabled>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>;
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    variant: "outline"
  },
  render: () => <ToggleGroupDemo />
}`,...C.parameters?.docs?.source},description:{story:"The default form of the toggle group.",...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    variant: "outline"
  },
  render: () => <ToggleGroupOutline />
}`,...y.parameters?.docs?.source},description:{story:"Toggle group with outline variant.",...y.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single"
  },
  render: () => <ToggleGroupSingle />
}`,...E.parameters?.docs?.source},description:{story:"Single selection toggle group.",...E.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: "single",
    size: "sm"
  },
  render: () => <ToggleGroupSmall />
}`,...I.parameters?.docs?.source},description:{story:"Small sized toggle group.",...I.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    size: "lg"
  },
  render: () => <ToggleGroupLarge />
}`,...w.parameters?.docs?.source},description:{story:"Large sized toggle group.",...w.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: "multiple",
    disabled: true
  },
  render: () => <ToggleGroupDisabled />
}`,...D.parameters?.docs?.source},description:{story:"Disabled toggle group.",...D.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "when toggle group item is clicked, should toggle selection",
  tags: ["!dev", "!autodocs"],
  args: {
    type: "multiple",
    variant: "outline"
  },
  render: () => <ToggleGroupDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click 'Toggle bold' button", async () => {
      const boldButton = canvas.getByLabelText(/toggle bold/i);
      await userEvent.click(boldButton);
    });
    await step("verify bold button is selected", async () => {
      const boldButton = canvas.getByLabelText(/toggle bold/i);
      await expect(boldButton).toHaveAttribute("data-state", "on");
    });
    await step("click 'Toggle italic' button", async () => {
      const italicButton = canvas.getByLabelText(/toggle italic/i);
      await userEvent.click(italicButton);
    });
    await step("verify both bold and italic are selected (multiple type)", async () => {
      const boldButton = canvas.getByLabelText(/toggle bold/i);
      const italicButton = canvas.getByLabelText(/toggle italic/i);
      await expect(boldButton).toHaveAttribute("data-state", "on");
      await expect(italicButton).toHaveAttribute("data-state", "on");
    });
  }
}`,...k.parameters?.docs?.source}}};const _e=["ToggleGroupDemo","ToggleGroupOutline","ToggleGroupSingle","ToggleGroupSmall","ToggleGroupLarge","ToggleGroupDisabled","Default","Outline","Single","Small","Large","Disabled","ShouldSelectItem"];export{C as Default,D as Disabled,w as Large,y as Outline,k as ShouldSelectItem,E as Single,I as Small,v as ToggleGroupDemo,_ as ToggleGroupDisabled,S as ToggleGroupLarge,x as ToggleGroupOutline,B as ToggleGroupSingle,N as ToggleGroupSmall,_e as __namedExportsOrder,Se as default};

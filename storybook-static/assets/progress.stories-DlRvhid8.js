import{r}from"./iframe-BiU2suBC.js";import{c as N}from"./index-BT5_MN2X.js";import{P as D}from"./index-DF-uitis.js";import{j as b}from"./jsx-runtime-D_zvdyIk.js";import{a as k}from"./utils-DgWKjmuI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";var y="Progress",f=100,[I]=N(y),[R,_]=I(y),T=r.forwardRef((e,t)=>{const{__scopeProgress:o,value:s=null,max:n,getValueLabel:x=A,...v}=e;(n||n===0)&&!C(n)&&console.error(S(`${n}`,"Progress"));const a=C(n)?n:f;s!==null&&!w(s,a)&&console.error($(`${s}`,"Progress"));const u=w(s,a)?s:null,E=g(u)?x(u,a):void 0;return b.jsx(R,{scope:o,value:u,max:a,children:b.jsx(D.div,{"aria-valuemax":a,"aria-valuemin":0,"aria-valuenow":g(u)?u:void 0,"aria-valuetext":E,role:"progressbar","data-state":B(u,a),"data-value":u??void 0,"data-max":a,...v,ref:t})})});T.displayName=y;var h="ProgressIndicator",P=r.forwardRef((e,t)=>{const{__scopeProgress:o,...s}=e,n=_(h,o);return b.jsx(D.div,{"data-state":B(n.value,n.max),"data-value":n.value??void 0,"data-max":n.max,...s,ref:t})});P.displayName=h;function A(e,t){return`${Math.round(e/t*100)}%`}function B(e,t){return e==null?"indeterminate":e===t?"complete":"loading"}function g(e){return typeof e=="number"}function C(e){return g(e)&&!isNaN(e)&&e>0}function w(e,t){return g(e)&&!isNaN(e)&&e<=t&&e>=0}function S(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function $(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var F=T,V=P;const c=r.forwardRef(({className:e,value:t,...o},s)=>r.createElement(F,{ref:s,"data-slot":"progress",className:k("relative h-2 w-full overflow-hidden rounded-full bg-gray-200",e),...o},r.createElement(V,{"data-slot":"progress-indicator",className:"h-full w-full flex-1 bg-blue-600 transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})));c.displayName="Progress";try{c.displayName="Progress",c.__docgenInfo={description:`🎯 목적: Progress 컴포넌트에 forwardRef 적용하여 React 18/19 호환성 제공
📝 주의사항: Radix UI Progress primitive 사용, value prop 전달 필수
🔄 변경이력: 2025-10-11 - React 18/19 dual support를 위한 forwardRef 추가`,displayName:"Progress",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{expect:i,userEvent:m,waitFor:p,within:O}=__STORYBOOK_MODULE_TEST__,z={title:"ui/Progress",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Displays an indicator showing the completion progress of a task, typically
displayed as a progress bar.`}}},excludeStories:/.*Demo$/,argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"The progress value (0-100)"},max:{control:"number",description:"The maximum progress value"}},args:{value:66,max:100},render:e=>r.createElement("div",{className:"w-[350px]"},r.createElement(c,{value:e.value,max:e.max,className:"w-full"}))},l={};function H(){const[e,t]=r.useState(13);return r.useEffect(()=>{const o=setTimeout(()=>t(66),500);return()=>clearTimeout(o)},[]),r.createElement("div",{className:"w-[350px]"},r.createElement(c,{value:e,className:"w-full"}))}const d={name:"when progress value changes, should update progress bar width",tags:["!dev","!autodocs"],render:()=>{const[e,t]=r.useState(0);return r.createElement("div",{className:"flex flex-col gap-4"},r.createElement("div",{className:"w-[350px]"},r.createElement(c,{value:e,"data-testid":"progress-bar"})),r.createElement("div",{className:"flex gap-2"},r.createElement("button",{onClick:()=>t(25),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"25%"),r.createElement("button",{onClick:()=>t(50),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"50%"),r.createElement("button",{onClick:()=>t(75),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"75%"),r.createElement("button",{onClick:()=>t(100),className:"rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700"},"100%")),r.createElement("div",{className:"text-center text-sm"},"Current: ",e,"%"))},play:async({canvasElement:e})=>{const t=O(e),o=t.getByTestId("progress-bar");await i(o).toBeInTheDocument();const s=t.getByRole("button",{name:/25%/i});await m.click(s),await p(()=>{const a=t.getByText(/Current: 25%/i);i(a).toBeInTheDocument()});const n=t.getByRole("button",{name:/50%/i});await m.click(n),await p(()=>{const a=t.getByText(/Current: 50%/i);i(a).toBeInTheDocument()});const x=t.getByRole("button",{name:/75%/i});await m.click(x),await p(()=>{const a=t.getByText(/Current: 75%/i);i(a).toBeInTheDocument()});const v=t.getByRole("button",{name:/100%/i});await m.click(v),await p(()=>{const a=t.getByText(/Current: 100%/i);i(a).toBeInTheDocument()})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source},description:{story:"The default animated progress bar that updates from 13% to 66% after 500ms.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "when progress value changes, should update progress bar width",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [progress, setProgress] = React.useState(0);
    return <div className="flex flex-col gap-4">
        <div className="w-[350px]">
          <Progress value={progress} data-testid="progress-bar" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setProgress(25)} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            25%
          </button>
          <button onClick={() => setProgress(50)} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            50%
          </button>
          <button onClick={() => setProgress(75)} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            75%
          </button>
          <button onClick={() => setProgress(100)} className="rounded bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
            100%
          </button>
        </div>
        <div className="text-center text-sm">Current: {progress}%</div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Progress 컴포넌트가 버튼 클릭에 따라 진행률이 업데이트되는지 확인

    // 초기 상태 확인 (0%)
    const progressBar = canvas.getByTestId("progress-bar");
    await expect(progressBar).toBeInTheDocument();

    // 25% 버튼 클릭
    const button25 = canvas.getByRole("button", {
      name: /25%/i
    });
    await userEvent.click(button25);
    await waitFor(() => {
      const currentText = canvas.getByText(/Current: 25%/i);
      expect(currentText).toBeInTheDocument();
    });

    // 50% 버튼 클릭
    const button50 = canvas.getByRole("button", {
      name: /50%/i
    });
    await userEvent.click(button50);
    await waitFor(() => {
      const currentText = canvas.getByText(/Current: 50%/i);
      expect(currentText).toBeInTheDocument();
    });

    // 75% 버튼 클릭
    const button75 = canvas.getByRole("button", {
      name: /75%/i
    });
    await userEvent.click(button75);
    await waitFor(() => {
      const currentText = canvas.getByText(/Current: 75%/i);
      expect(currentText).toBeInTheDocument();
    });

    // 100% 버튼 클릭
    const button100 = canvas.getByRole("button", {
      name: /100%/i
    });
    await userEvent.click(button100);
    await waitFor(() => {
      const currentText = canvas.getByText(/Current: 100%/i);
      expect(currentText).toBeInTheDocument();
    });
  }
}`,...d.parameters?.docs?.source},description:{story:"Progress 진행률 업데이트를 테스트합니다.",...d.parameters?.docs?.description}}};const J=["Default","ProgressDemo","ShouldUpdateProgressValue"];export{l as Default,H as ProgressDemo,d as ShouldUpdateProgressValue,J as __namedExportsOrder,z as default};

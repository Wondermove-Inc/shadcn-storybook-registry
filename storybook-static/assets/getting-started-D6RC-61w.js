import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CXINb8-q.js";import{M as t}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction/Getting Started"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsxs(e.p,{children:["Welcome to the ",n.jsx(e.strong,{children:"shadcn-storybook-registry"}),"!"]}),`
`,n.jsx(e.p,{children:"이 프로젝트는 shadcn/ui 컴포넌트의 Storybook 스토리를 제공하는 레지스트리입니다."}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"shadcn CLI를 사용하여 원하는 컴포넌트 스토리를 설치할 수 있습니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add http://localhost:3000/v2/r/button-story.json
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"설치한 스토리 파일을 Storybook에서 바로 사용할 수 있습니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@/components/ui/button";

export default function App() {
  return <Button variant="default">Click me</Button>;
}
`})}),`
`,n.jsx(e.h2,{id:"available-components",children:"Available Components"}),`
`,n.jsx(e.p,{children:"현재 46개 컴포넌트 스토리가 제공됩니다:"}),`
`,n.jsx(e.h3,{id:"ui-components-46개",children:"UI Components (46개)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form"}),": Button, Input, Checkbox, Radio, Select, Switch, Textarea, Label"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Layout"}),": Card, Separator, Aspect Ratio, Resizable, Scroll Area"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Navigation"}),": Accordion, Tabs, Breadcrumb, Navigation Menu, Menubar, Sidebar"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Overlay"}),": Dialog, Sheet, Drawer, Popover, Tooltip, Hover Card"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Feedback"}),": Alert, Progress, Skeleton, Sonner (Toast)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Data Display"}),": Badge, Avatar, Table, Calendar, Date Picker, Chart"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Interactive"}),`: Slider, Toggle, Toggle Group, Command, Combobox, Context
Menu, Dropdown Menu`]}),`
`]}),`
`,n.jsx(e.h3,{id:"design-tokens-5개",children:"Design Tokens (5개)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Color, Typography, Spacing, Shadow, Radius"}),`
`]}),`
`,n.jsx(e.h3,{id:"templates-1개",children:"Templates (1개)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Dashboard Template"}),`
`]}),`
`,n.jsx(e.h2,{id:"features",children:"Features"}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"CSF 3.0 Format"}),": 최신 Storybook 스토리 형식 ✅ ",n.jsx(e.strong,{children:"TypeScript"}),`: 완전한 타입
안전성 ✅ `,n.jsx(e.strong,{children:"Light/Dark Mode"}),": 테마 전환 지원 ✅ ",n.jsx(e.strong,{children:"Play Functions"}),`: 자동화된
인터랙션 테스트 ✅ `,n.jsx(e.strong,{children:"Args Controls"}),": 동적 props 조작 ✅ ",n.jsx(e.strong,{children:"Accessibility"}),`: WCAG
2.1 AA 준수`]}),`
`,n.jsx(e.h2,{id:"development",children:"Development"}),`
`,n.jsx(e.p,{children:"로컬 개발을 위해 다음 명령어를 사용하세요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Storybook 개발 서버 실행
npm run storybook

# Registry 빌드
npm run registry:build

# 테스트 실행
npm run test
`})}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/lloydrichards/shadcn-storybook-registry",rel:"nofollow",children:"GitHub Repository"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ui.shadcn.com",rel:"nofollow",children:"shadcn/ui Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://storybook.js.org",rel:"nofollow",children:"Storybook Documentation"})}),`
`]})]})}function j(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};

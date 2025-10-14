import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-CXINb8-q.js";import{M as r}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Introduction/Design Principles"}),`
`,n.jsx(i.h1,{id:"design-principles",children:"Design Principles"}),`
`,n.jsx(i.p,{children:"shadcn-storybook-registry의 핵심 디자인 원칙입니다."}),`
`,n.jsx(i.h2,{id:"accessibility-first",children:"Accessibility First"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"WCAG 2.1 AA"})," 준수를 최우선 목표로 합니다."]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"✅ Keyboard navigation support"}),`
`,n.jsx(i.li,{children:"✅ Screen reader friendly"}),`
`,n.jsx(i.li,{children:"✅ Semantic HTML"}),`
`,n.jsx(i.li,{children:"✅ ARIA attributes"}),`
`,n.jsx(i.li,{children:"✅ Color contrast compliance"}),`
`]}),`
`,n.jsx(i.p,{children:"모든 컴포넌트는 Storybook의 A11y addon을 통해 접근성 검증을 거칩니다."}),`
`,n.jsx(i.h2,{id:"responsive-design",children:"Responsive Design"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Mobile-first"})," 접근 방식으로 모든 화면 크기를 지원합니다."]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"📱 Mobile (375px)"}),`
`,n.jsx(i.li,{children:"📱 Tablet (768px)"}),`
`,n.jsx(i.li,{children:"💻 Desktop (1920px)"}),`
`]}),`
`,n.jsx(i.p,{children:`Storybook의 Viewport addon을 사용하여 다양한 화면 크기에서 컴포넌트를 테스트할
수 있습니다.`}),`
`,n.jsx(i.h2,{id:"dark-mode-support",children:"Dark Mode Support"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Light/Dark 테마"})," 완벽 지원:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"🌞 Light mode (default)"}),`
`,n.jsx(i.li,{children:"🌙 Dark mode"}),`
`,n.jsx(i.li,{children:"🎨 CSS custom properties로 쉬운 커스터마이징"}),`
`,n.jsx(i.li,{children:"🔄 Seamless theme switching"}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"@storybook/addon-themes"}),`를 통해 Storybook에서 테마를 즉시 전환하여 테스트할 수
있습니다.`]}),`
`,n.jsx(i.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(i.p,{children:"체계적인 디자인 토큰 시스템:"}),`
`,n.jsx(i.h3,{id:"color-system",children:"Color System"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Primary"}),": 브랜드 컬러"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Secondary"}),": 보조 컬러"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Accent"}),": 강조 컬러"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Destructive"}),": 경고/에러 상태"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Muted"}),": 배경 및 비활성"]}),`
`]}),`
`,n.jsx(i.h3,{id:"typography-scale",children:"Typography Scale"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"xs"}),": 0.75rem (12px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"sm"}),": 0.875rem (14px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"base"}),": 1rem (16px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"lg"}),": 1.125rem (18px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"xl"}),": 1.25rem (20px)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"2xl"})," ~ ",n.jsx(i.code,{children:"9xl"}),": 다양한 크기"]}),`
`]}),`
`,n.jsx(i.h3,{id:"spacing-system",children:"Spacing System"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"0.5rem ~ 8rem"}),`
`,n.jsx(i.li,{children:"Tailwind CSS spacing scale 기반"}),`
`,n.jsx(i.li,{children:"일관된 여백 및 패딩"}),`
`]}),`
`,n.jsx(i.h3,{id:"shadow-system",children:"Shadow System"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"sm"}),", ",n.jsx(i.code,{children:"base"}),", ",n.jsx(i.code,{children:"md"}),", ",n.jsx(i.code,{children:"lg"}),", ",n.jsx(i.code,{children:"xl"}),", ",n.jsx(i.code,{children:"2xl"})]}),`
`,n.jsx(i.li,{children:"깊이감 표현"}),`
`,n.jsx(i.li,{children:"Light/Dark 모드 별 최적화"}),`
`]}),`
`,n.jsx(i.h3,{id:"radius-system",children:"Radius System"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"sm"}),", ",n.jsx(i.code,{children:"base"}),", ",n.jsx(i.code,{children:"md"}),", ",n.jsx(i.code,{children:"lg"}),", ",n.jsx(i.code,{children:"full"})]}),`
`,n.jsx(i.li,{children:"모서리 둥글기 일관성"}),`
`]}),`
`,n.jsx(i.h2,{id:"component-composition",children:"Component Composition"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Atomic Design"})," 원칙 적용:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Atoms"}),": 기본 UI 요소 (Button, Input, Badge)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Molecules"}),": 조합된 컴포넌트 (Form Field, Card)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Organisms"}),": 복잡한 UI 블록 (Navigation, Sidebar)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Templates"}),": 페이지 레이아웃"]}),`
`]}),`
`,n.jsx(i.h2,{id:"type-safety",children:"Type Safety"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"TypeScript"})," 완벽 지원:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"satisfies Meta<typeof Component>"})," 패턴"]}),`
`,n.jsx(i.li,{children:"Explicit return types"}),`
`,n.jsx(i.li,{children:"Strict mode enabled"}),`
`,n.jsx(i.li,{children:"Type inference 최대 활용"}),`
`]}),`
`,n.jsx(i.h2,{id:"testing",children:"Testing"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"자동화된 테스트"})," 전략:"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"✅ Play functions로 인터랙션 테스트"}),`
`,n.jsx(i.li,{children:"✅ Vitest 유닛 테스트"}),`
`,n.jsx(i.li,{children:"✅ Playwright 브라우저 테스트"}),`
`,n.jsx(i.li,{children:"✅ A11y 자동 검증"}),`
`]}),`
`,n.jsx(i.h2,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"명확한 문서화"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"JSDoc 주석 필수"}),`
`,n.jsx(i.li,{children:"Storybook Autodocs 100% 적용"}),`
`,n.jsx(i.li,{children:"한국어 설명 제공"}),`
`,n.jsx(i.li,{children:"사용 예제 포함"}),`
`]}),`
`,n.jsx(i.h2,{id:"performance",children:"Performance"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"최적화된 성능"}),":"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Tree-shaking 지원"}),`
`,n.jsx(i.li,{children:"Lazy loading"}),`
`,n.jsx(i.li,{children:"Minimal bundle size"}),`
`,n.jsx(i.li,{children:"React 18/19 호환"}),`
`]})]})}function p(s={}){const{wrapper:i}={...l(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{p as default};

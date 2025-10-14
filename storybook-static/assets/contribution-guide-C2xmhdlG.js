import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CXINb8-q.js";import{M as o}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Introduction/Contribution Guide"}),`
`,n.jsx(e.h1,{id:"contribution-guide",children:"Contribution Guide"}),`
`,n.jsx(e.p,{children:"shadcn-storybook-registry에 기여하는 방법을 안내합니다."}),`
`,n.jsx(e.h2,{id:"adding-a-new-story",children:"Adding a New Story"}),`
`,n.jsx(e.p,{children:"새로운 컴포넌트 스토리를 추가하는 방법:"}),`
`,n.jsx(e.h3,{id:"1-create-story-file",children:"1. Create Story File"}),`
`,n.jsx(e.p,{children:"스토리 파일을 생성합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 파일 경로
src/registry/atoms/[component]-story/[component].stories.tsx
`})}),`
`,n.jsx(e.h3,{id:"2-follow-story-structure-pattern",children:"2. Follow Story Structure Pattern"}),`
`,n.jsx(e.p,{children:"CSF 3.0 형식을 따릅니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Component } from "@/components/ui/component";

/**
 * 컴포넌트의 목적과 사용법을 설명합니다.
 */
const meta: Meta<typeof Component> = {
  title: "ui/Component",
  component: Component,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 스토리 설명.
 */
export const Default: Story = {
  args: {
    variant: "default",
    children: "Example",
  },
};
`})}),`
`,n.jsx(e.h3,{id:"3-add-registry-entry",children:"3. Add Registry Entry"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"registry.json"}),"에 엔트리를 추가합니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "name": "component-story",
  "type": "registry:component",
  "title": "Component Story",
  "description": "Interactive Storybook stories for component",
  "categories": ["atoms", "storybook"],
  "registryDependencies": ["component"],
  "dependencies": ["lucide-react"],
  "files": [
    {
      "path": "src/registry/atoms/component-story/component.stories.tsx",
      "type": "registry:component"
    }
  ]
}
`})}),`
`,n.jsx(e.h3,{id:"4-build-registry",children:"4. Build Registry"}),`
`,n.jsx(e.p,{children:"Registry를 빌드합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run registry:build
`})}),`
`,n.jsx(e.h3,{id:"5-test-locally",children:"5. Test Locally"}),`
`,n.jsx(e.p,{children:"로컬에서 설치 테스트:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add http://localhost:3000/v2/r/component-story.json
`})}),`
`,n.jsx(e.h3,{id:"6-verify-in-storybook",children:"6. Verify in Storybook"}),`
`,n.jsx(e.p,{children:"Storybook에서 확인:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run storybook
# http://localhost:6006에서 스토리 확인
`})}),`
`,n.jsx(e.h3,{id:"7-run-quality-checks",children:"7. Run Quality Checks"}),`
`,n.jsx(e.p,{children:"품질 검사 실행:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run lint
npm run type-check
npm run test
`})}),`
`,n.jsx(e.h2,{id:"code-style-guidelines",children:"Code Style Guidelines"}),`
`,n.jsx(e.h3,{id:"typescript",children:"TypeScript"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"satisfies Meta<typeof Component>"})," 사용"]}),`
`,n.jsxs(e.li,{children:["Explicit types 선호 (",n.jsx(e.code,{children:"any"})," 금지)"]}),`
`,n.jsxs(e.li,{children:["Form 스키마는 ",n.jsx(e.code,{children:"zod"}),"로 정의"]}),`
`]}),`
`,n.jsx(e.h3,{id:"imports",children:"Imports"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Framework imports
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

// ALWAYS use @ imports
import { Button } from "@/components/ui/button";

// Icons
import { ChevronRight, Loader2 } from "lucide-react";
`})}),`
`,n.jsx(e.h3,{id:"story-naming",children:"Story Naming"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Default: 기본 사용 예제"}),`
`,n.jsx(e.li,{children:"Variants: 다양한 variant (outline, ghost, secondary 등)"}),`
`,n.jsx(e.li,{children:"States: Loading, Disabled"}),`
`,n.jsx(e.li,{children:"Sizes: Small, Default, Large"}),`
`]}),`
`,n.jsx(e.h3,{id:"play-functions",children:"Play Functions"}),`
`,n.jsx(e.p,{children:"인터랙티브 테스트 추가:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { expect, userEvent, within } from "storybook/test";

export const InteractionTest: Story = {
  name: "when user clicks, should show success message",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText("Success")).toBeInTheDocument();
  },
};
`})}),`
`,n.jsx(e.h2,{id:"documentation",children:"Documentation"}),`
`,n.jsx(e.h3,{id:"jsdoc-comments",children:"JSDoc Comments"}),`
`,n.jsx(e.p,{children:"모든 story export에 JSDoc 주석 추가:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`/**
 * Outline variant를 사용하여 보조 액션을 나타냅니다.
 */
export const Outline: Story = {
  args: { variant: "outline" },
};
`})}),`
`,n.jsx(e.h3,{id:"korean-comments",children:"Korean Comments"}),`
`,n.jsx(e.p,{children:"코드 주석은 한국어로 작성:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 🎯 목적: 사용자 입력 검증
// 📝 주의사항: 최소 6자 이상 필수
`})}),`
`,n.jsx(e.h2,{id:"commit-message-format",children:"Commit Message Format"}),`
`,n.jsx(e.p,{children:"Conventional Commits 형식 사용:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`feat: add Calendar story with date range picker

- Update registry.json with calendar-story entry
- Add Korean comments to date picker implementation
- Add Play function for interaction testing

Related to Component Story Enhancement

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
`})}),`
`,n.jsx(e.h2,{id:"pull-request-process",children:"Pull Request Process"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Fork the repository"}),`
`,n.jsx(e.li,{children:"Create a feature branch"}),`
`,n.jsx(e.li,{children:"Make your changes"}),`
`,n.jsx(e.li,{children:"Run all quality checks"}),`
`,n.jsx(e.li,{children:"Commit with proper message"}),`
`,n.jsx(e.li,{children:"Push to your fork"}),`
`,n.jsx(e.li,{children:"Create Pull Request"}),`
`]}),`
`,n.jsx(e.h2,{id:"questions",children:"Questions?"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/lloydrichards/shadcn-storybook-registry/issues",rel:"nofollow",children:"GitHub Issues"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/lloydrichards/shadcn-storybook-registry/discussions",rel:"nofollow",children:"Discussions"})}),`
`]}),`
`,n.jsx(e.p,{children:"Thank you for contributing! 🎉"})]})}function m(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};

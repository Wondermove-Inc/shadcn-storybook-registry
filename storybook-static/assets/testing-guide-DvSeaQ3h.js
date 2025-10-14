import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CXINb8-q.js";import{M as o}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Introduction/Testing Guide"}),`
`,n.jsx(e.h1,{id:"testing-guide",children:"Testing Guide"}),`
`,n.jsx(e.p,{children:"shadcn-storybook-registry의 테스트 전략과 작성 가이드입니다."}),`
`,n.jsx(e.h2,{id:"testing-strategy",children:"Testing Strategy"}),`
`,n.jsx(e.p,{children:"이 프로젝트는 3가지 테스트 레이어로 구성됩니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Play Functions"}),": Storybook 내에서 인터랙션 테스트"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vitest Unit Tests"}),": 컴포넌트 로직 단위 테스트"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Playwright Browser Tests"}),": 실제 브라우저 환경에서 E2E 테스트"]}),`
`]}),`
`,n.jsx(e.h2,{id:"play-functions",children:"Play Functions"}),`
`,n.jsxs(e.p,{children:["Storybook 9의 ",n.jsx(e.strong,{children:"Play Functions"}),"는 컴포넌트 인터랙션을 자동으로 테스트합니다."]}),`
`,n.jsx(e.h3,{id:"basic-structure",children:"Basic Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within, waitFor } from "storybook/test";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 버튼 클릭 시 상태가 변경되는지 테스트합니다.
 */
export const ShouldToggleOnClick: Story = {
  tags: ["!dev", "!autodocs"], // 👈 테스트 전용 스토리
  render: () => {
    const [clicked, setClicked] = React.useState(false);
    return (
      <Button onClick={() => setClicked(!clicked)}>
        {clicked ? "Clicked" : "Click me"}
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 버튼 클릭 시 텍스트가 변경되는지 확인
    const button = canvas.getByRole("button", { name: /click me/i });
    await expect(button).toBeInTheDocument();

    // 버튼 클릭
    await userEvent.click(button);

    // 텍스트 변경 확인
    await waitFor(() => {
      expect(button).toHaveTextContent("Clicked");
    });
  },
};
`})}),`
`,n.jsx(e.h3,{id:"story-naming-convention",children:"Story Naming Convention"}),`
`,n.jsxs(e.p,{children:["Play function 스토리는 ",n.jsx(e.strong,{children:n.jsx(e.code,{children:"Should..."})})," 패턴을 사용합니다:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.code,{children:"ShouldOpenDialog"})]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.code,{children:"ShouldSelectDate"})]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.code,{children:"ShouldValidateForm"})]}),`
`,n.jsxs(e.li,{children:["❌ ",n.jsx(e.code,{children:"TestDialog"})]}),`
`,n.jsxs(e.li,{children:["❌ ",n.jsx(e.code,{children:"CheckValidation"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"tags-configuration",children:"Tags Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`tags: ["!dev", "!autodocs"];
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"!dev"}),": Dev mode에서 숨김"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"!autodocs"}),": Autodocs 페이지에서 제외"]}),`
`]}),`
`,n.jsx(e.h3,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h4,{id:"1-button-interactions",children:"1. Button Interactions"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 버튼 찾기
const button = canvas.getByRole("button", { name: /submit/i });

// 클릭
await userEvent.click(button);

// 상태 확인
await expect(button).toBeDisabled();
`})}),`
`,n.jsx(e.h4,{id:"2-form-inputs",children:"2. Form Inputs"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Input 찾기
const input = canvas.getByRole("textbox", { name: /email/i });

// 텍스트 입력
await userEvent.type(input, "test@example.com");

// 값 확인
await expect(input).toHaveValue("test@example.com");
`})}),`
`,n.jsx(e.h4,{id:"3-dialogpopover-opening",children:"3. Dialog/Popover Opening"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 트리거 클릭
await userEvent.click(canvas.getByRole("button", { name: /open/i }));

// Dialog 열림 확인
await waitFor(async () => {
  const dialog = await canvas.findByRole("dialog");
  await expect(dialog).toBeInTheDocument();
});
`})}),`
`,n.jsx(e.h4,{id:"4-selectcombobox",children:"4. Select/Combobox"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Select 열기
await userEvent.click(canvas.getByRole("combobox"));

// 옵션 선택
const option = canvas.getByRole("option", { name: /option 1/i });
await userEvent.click(option);

// 선택 확인
await expect(canvas.getByRole("combobox")).toHaveTextContent("Option 1");
`})}),`
`,n.jsx(e.h4,{id:"5-keyboard-navigation",children:"5. Keyboard Navigation"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Tab 키
await userEvent.tab();

// Enter 키
await userEvent.keyboard("{Enter}");

// Escape 키
await userEvent.keyboard("{Escape}");

// Arrow keys
await userEvent.keyboard("{ArrowDown}");
`})}),`
`,n.jsx(e.h3,{id:"한국어-주석-필수",children:"한국어 주석 필수"}),`
`,n.jsxs(e.p,{children:["모든 Play function에는 ",n.jsx(e.code,{children:"🎯 목적"})," 주석을 포함해야 합니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 🎯 목적: Form 제출 시 validation 에러가 표시되는지 확인
  const submitButton = canvas.getByRole("button", { name: /submit/i });
  await userEvent.click(submitButton);

  // Validation 에러 확인
  await waitFor(() => {
    expect(canvas.getByText(/required/i)).toBeInTheDocument();
  });
},
`})}),`
`,n.jsx(e.h3,{id:"testing-async-operations",children:"Testing Async Operations"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Loading 상태 테스트
await userEvent.click(submitButton);

// Loading spinner 표시 확인
await expect(canvas.getByRole("status")).toBeInTheDocument();

// 완료 후 성공 메시지 확인
await waitFor(
  () => {
    expect(canvas.getByText(/success/i)).toBeInTheDocument();
  },
  { timeout: 3000 },
);
`})}),`
`,n.jsx(e.h2,{id:"vitest-unit-tests",children:"Vitest Unit Tests"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Vitest"}),"로 컴포넌트 로직을 단위 테스트합니다."]}),`
`,n.jsx(e.h3,{id:"running-tests",children:"Running Tests"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 모든 테스트 실행
npm run test

# 유닛 테스트만 실행
npm run test:unit

# Watch mode
npm run test:unit -- --watch
`})}),`
`,n.jsx(e.h3,{id:"test-file-structure",children:"Test File Structure"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("should render with default variant", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-primary");
  });

  it("should call onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button");
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
`})}),`
`,n.jsx(e.h3,{id:"mocking",children:"Mocking"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Mock 함수
const mockFn = vi.fn();

// Mock 모듈
vi.mock("@/lib/utils", () => ({
  cn: vi.fn((...classes) => classes.join(" ")),
}));

// Timer mock
vi.useFakeTimers();
vi.advanceTimersByTime(1000);
vi.useRealTimers();
`})}),`
`,n.jsx(e.h2,{id:"playwright-browser-tests",children:"Playwright Browser Tests"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Playwright"}),"로 실제 브라우저 환경에서 테스트합니다."]}),`
`,n.jsx(e.h3,{id:"running-tests-1",children:"Running Tests"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Storybook 테스트 실행
npm run test:storybook

# Storybook Test Runner
npm run storybook:test
`})}),`
`,n.jsx(e.h3,{id:"test-configuration",children:"Test Configuration"}),`
`,n.jsx(e.p,{children:"Storybook Test Runner는 모든 Play function을 자동으로 실행합니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// .storybook/test-runner.ts
import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // 추가 검증 로직
    const element = page.locator("#root");
    await expect(element).toBeVisible();
  },
};

export default config;
`})}),`
`,n.jsx(e.h2,{id:"accessibility-testing",children:"Accessibility Testing"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"A11y addon"}),"으로 접근성을 자동 검증합니다."]}),`
`,n.jsx(e.h3,{id:"configuration",children:"Configuration"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// .storybook/preview.ts
export const parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: "color-contrast",
          enabled: true,
        },
      ],
    },
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true,
    },
    manual: false,
  },
};
`})}),`
`,n.jsx(e.h3,{id:"testing-wcag-21-aa-compliance",children:"Testing WCAG 2.1 AA Compliance"}),`
`,n.jsx(e.p,{children:"모든 컴포넌트는 다음을 준수해야 합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Color Contrast"}),": 최소 4.5:1 비율"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Keyboard Navigation"}),": Tab, Enter, Escape, Arrow keys"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Screen Reader"}),": ARIA labels, roles, states"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Focus Management"}),": 논리적 포커스 순서"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Semantic HTML"}),": ",n.jsx(e.code,{children:"<button>"}),", ",n.jsx(e.code,{children:"<input>"}),", ",n.jsx(e.code,{children:"<label>"})," 등"]}),`
`]}),`
`,n.jsx(e.h3,{id:"keyboard-navigation-testing",children:"Keyboard Navigation Testing"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`export const ShouldNavigateWithKeyboard: Story = {
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 키보드로 모든 인터랙티브 요소에 접근 가능한지 확인

    // Tab으로 첫 번째 요소에 포커스
    await userEvent.tab();
    const firstButton = canvas.getAllByRole("button")[0];
    await expect(firstButton).toHaveFocus();

    // Tab으로 다음 요소로 이동
    await userEvent.tab();
    const secondButton = canvas.getAllByRole("button")[1];
    await expect(secondButton).toHaveFocus();

    // Enter로 버튼 활성화
    await userEvent.keyboard("{Enter}");

    // Escape로 닫기
    await userEvent.keyboard("{Escape}");
  },
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"1-test-isolation",children:"1. Test Isolation"}),`
`,n.jsx(e.p,{children:"각 테스트는 독립적이어야 합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 독립적인 테스트
export const ShouldOpenDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <Dialog open={open} onOpenChange={setOpen} />;
  },
  play: async ({ canvasElement }) => {
    // 테스트 로직
  },
};

// ❌ Bad: 외부 상태 의존
let globalState = false;
export const ShouldOpenDialog: Story = {
  play: async () => {
    globalState = true; // 다른 테스트에 영향
  },
};
`})}),`
`,n.jsx(e.h3,{id:"2-clear-assertions",children:"2. Clear Assertions"}),`
`,n.jsx(e.p,{children:"명확한 assertion을 사용하세요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 명확한 assertion
await expect(button).toHaveTextContent("Submit");
await expect(input).toHaveValue("test@example.com");
await expect(dialog).toBeVisible();

// ❌ Bad: 불명확한 assertion
await expect(button.textContent).toBe("Submit"); // DOM API 직접 사용
`})}),`
`,n.jsx(e.h3,{id:"3-waitfor-for-async",children:"3. WaitFor for Async"}),`
`,n.jsxs(e.p,{children:["비동기 동작은 ",n.jsx(e.code,{children:"waitFor"}),"를 사용하세요:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: waitFor 사용
await waitFor(() => {
  expect(canvas.getByText(/success/i)).toBeInTheDocument();
});

// ❌ Bad: 고정된 timeout
await new Promise((resolve) => setTimeout(resolve, 1000));
`})}),`
`,n.jsx(e.h3,{id:"4-user-centric-queries",children:"4. User-Centric Queries"}),`
`,n.jsx(e.p,{children:"사용자 관점의 쿼리를 사용하세요:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 역할 기반 쿼리
canvas.getByRole("button", { name: /submit/i });
canvas.getByRole("textbox", { name: /email/i });
canvas.getByLabelText(/password/i);

// ❌ Bad: 구현 세부사항 쿼리
canvas.getByClassName("btn-primary");
canvas.querySelector("#submit-button");
`})}),`
`,n.jsx(e.h2,{id:"common-issues",children:"Common Issues"}),`
`,n.jsx(e.h3,{id:"issue-1-element-not-found",children:"Issue 1: Element Not Found"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ 문제: 요소를 찾을 수 없음
const button = canvas.getByRole("button");

// ✅ 해결: 대기 후 찾기
await waitFor(async () => {
  const button = await canvas.findByRole("button");
  await expect(button).toBeInTheDocument();
});
`})}),`
`,n.jsx(e.h3,{id:"issue-2-timeout-errors",children:"Issue 2: Timeout Errors"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ 문제: 기본 timeout 초과
await waitFor(() => {
  expect(element).toBeInTheDocument();
});

// ✅ 해결: timeout 증가
await waitFor(
  () => {
    expect(element).toBeInTheDocument();
  },
  { timeout: 5000 },
);
`})}),`
`,n.jsx(e.h3,{id:"issue-3-multiple-elements",children:"Issue 3: Multiple Elements"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ 문제: 여러 버튼이 있을 때
const button = canvas.getByRole("button");

// ✅ 해결: 구체적인 name 사용
const submitButton = canvas.getByRole("button", { name: /submit/i });
const cancelButton = canvas.getByRole("button", { name: /cancel/i });
`})}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://storybook.js.org/docs/writing-tests/interaction-testing",rel:"nofollow",children:"Storybook Play Functions"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://testing-library.com/docs/queries/about",rel:"nofollow",children:"Testing Library Queries"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://vitest.dev",rel:"nofollow",children:"Vitest Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://playwright.dev",rel:"nofollow",children:"Playwright Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/WAI/WCAG21/quickref/",rel:"nofollow",children:"WCAG 2.1 Guidelines"})}),`
`]})]})}function p(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{p as default};

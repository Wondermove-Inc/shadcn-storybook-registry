import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { expect, fn, userEvent, within } from "storybook/test";

export function ButtonDemo() {
  return <Button>Button</Button>;
}

/**
 * Displays a button or a component that looks like a button.
 */
const meta = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    onClick: fn(),
  },
  excludeStories: /.*Demo$/,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the button.
 */
export const Default: Story = {};

/**
 * Secondary button variant.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

/**
 * Destructive button variant.
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

/**
 * Outline button variant.
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

/**
 * Ghost button variant.
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

/**
 * Link button variant.
 */
export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

/**
 * Icon button example.
 */
export const Icon: Story = {
  render: () => (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  ),
};

/**
 * Button with icon.
 */
export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};

/**
 * Loading button state.
 */
export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

/**
 * Button as child (link).
 */
export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  ),
};

/**
 * Ref 사용 예제: Button에 ref를 전달하여 DOM 요소에 직접 접근합니다.
 * 이 예제는 ref를 통한 focus 제어를 보여줍니다.
 */
export const WithRef: Story = {
  render: () => {
    // 🎯 목적: HTMLButtonElement에 대한 ref를 생성하여 focus() 메서드 접근
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div className="flex flex-col gap-4">
        <Button ref={buttonRef}>Target Button</Button>
        <Button variant="outline" onClick={() => buttonRef.current?.focus()}>
          Focus Button Above
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // 🎯 목적: play function을 통해 ref 동작을 자동으로 테스트
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    // "Focus Button Above" 버튼 클릭하여 첫 번째 버튼에 focus 트리거
    await userEvent.click(buttons[1]);

    // 첫 번째 버튼이 포커스를 받았는지 검증
    await expect(buttons[0]).toHaveFocus();
  },
};

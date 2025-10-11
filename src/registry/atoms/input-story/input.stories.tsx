import { expect, userEvent, within } from "storybook/test";
// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Displays a form input field or a component that looks like an input field.
 */
const meta = {
  title: "ui/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "w-96",
    type: "email",
    placeholder: "Email",
    disabled: false,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the input field.
 */
export const Default: Story = {};

/**
 * Use the file type to allow users to select and upload files.
 */
export const File: Story = {
  args: {
    type: "file",
    placeholder: undefined,
    className: "max-w-sm",
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input {...args} id="picture" />
    </div>
  ),
};

/**
 * Use the `disabled` prop to make the input non-interactive and appears faded,
 * indicating that input is not currently accepted.
 */
export const Disabled: Story = {
  args: { disabled: true },
};

/**
 * Use the `Label` component to includes a clear, descriptive label above or
 * alongside the input area to guide users.
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid items-center gap-1.5">
      <Label htmlFor="email">{args.placeholder}</Label>
      <Input {...args} id="email" />
    </div>
  ),
};

/**
 * Use a text element below the input field to provide additional instructions
 * or information to users.
 */
export const WithHelperText: Story = {
  render: (args) => (
    <div className="grid items-center gap-1.5">
      <Label htmlFor="email-2">{args.placeholder}</Label>
      <Input {...args} id="email-2" />
      <p className="text-foreground/60 text-sm">Enter your email address.</p>
    </div>
  ),
};

/**
 * Use the `Button` component to indicate that the input field can be submitted
 * or used to trigger an action.
 */
export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit" variant="outline">
        Subscribe
      </Button>
    </div>
  ),
};

export const ShouldEnterText: Story = {
  name: "when user enters text, should see it in the input field",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvas, step }) => {
    const input = await canvas.findByPlaceholderText(/email/i);
    const mockedInput = "mocked@shadcn.com";

    await step("focus and type into the input field", async () => {
      await userEvent.click(input);
      await userEvent.type(input, mockedInput);
    });

    expect(input).toHaveValue(mockedInput);
  },
};

/**
 * Ref 사용 예제: Input에 ref를 전달하여 DOM 요소에 직접 접근합니다.
 * 이 예제는 ref를 통한 focus와 select 제어를 보여줍니다.
 */
export const WithRef: Story = {
  render: () => {
    // 🎯 목적: HTMLInputElement에 대한 ref를 생성하여 focus()와 select() 메서드 접근
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div className="grid w-full max-w-sm items-center gap-4">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="target-input">Target Input</Label>
          <Input
            ref={inputRef}
            id="target-input"
            type="text"
            placeholder="Type something..."
            defaultValue="Example text"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => inputRef.current?.focus()}
          >
            Focus Input
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => inputRef.current?.select()}
          >
            Select Text
          </Button>
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    // 🎯 목적: play function을 통해 ref 동작을 자동으로 테스트
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Target Input") as HTMLInputElement;
    const focusButton = canvas.getByRole("button", { name: "Focus Input" });
    const selectButton = canvas.getByRole("button", { name: "Select Text" });

    // "Focus Input" 버튼 클릭하여 input에 focus 트리거
    await userEvent.click(focusButton);
    await expect(input).toHaveFocus();

    // "Select Text" 버튼 클릭하여 텍스트 선택 트리거
    await userEvent.click(selectButton);
    await expect(input.selectionStart).toBe(0);
    await expect(input.selectionEnd).toBe(input.value.length);
  },
};

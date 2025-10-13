import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bold, Code, Italic, Underline } from "lucide-react";

/**
 * Used to display textual user input from keyboard.
 * Shows keyboard keys and shortcuts in a visually distinct style.
 */
const meta = {
  title: "ui/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 키보드 키 표시입니다.
 * 단일 키를 표시할 때 사용합니다.
 */
export const Default: Story = {
  render: () => <Kbd>K</Kbd>,
};

/**
 * KbdDemo 예제입니다.
 * 특수 키와 일반 키 조합을 보여줍니다.
 */
export const Demo: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  ),
};

/**
 * KbdGroup을 사용한 텍스트 내 키보드 단축키 표시 예제입니다.
 * 문장 안에서 키보드 단축키를 표시할 때 사용합니다.
 */
export const GroupExample: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
    </div>
  ),
};

/**
 * 버튼과 함께 사용하는 예제입니다.
 * 버튼의 액션과 관련된 키보드 단축키를 표시합니다.
 */
export const ButtonExample: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" size="sm" className="pr-2">
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  ),
};

/**
 * 툴팁과 함께 사용하는 예제입니다.
 * 툴팁 내부에서 키보드 단축키 정보를 제공합니다.
 */
export const TooltipExample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              <Bold className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Bold
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>B</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              <Italic className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Italic
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>I</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              <Underline className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Underline
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>U</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              <Code className="h-3 w-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Code
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>E</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

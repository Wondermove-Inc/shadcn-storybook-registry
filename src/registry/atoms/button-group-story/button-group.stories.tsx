import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Archive,
  AlertTriangle,
  Clock,
  Plus,
  Minus,
  Copy,
  Clipboard,
  Search,
  Mic,
  UserPlus,
  ChevronDown,
  Send,
  MoreHorizontal,
} from "lucide-react";

/**
 * Button Group은 관련된 버튼들을 그룹화하여 하나의 단위로 표시하는 컴포넌트입니다.
 * shadcn/ui 공식 문서의 예제들을 기반으로 구현되었습니다.
 */
const meta: Meta<typeof ButtonGroup> = {
  title: "ui/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼 그룹 - Archive, Report, Snooze 액션
 */
export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <Archive />
        Archive
      </Button>
      <Button variant="outline">
        <AlertTriangle />
        Report
      </Button>
      <Button variant="outline">
        <Clock />
        Snooze
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 세로 방향 버튼 그룹 - Plus/Minus 아이콘 버튼
 */
export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline" size="icon">
        <Plus />
      </Button>
      <Button variant="outline" size="icon">
        <Minus />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 버튼 그룹 크기 - Small, Default, Large
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Default</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * 중첩된 버튼 그룹 - 숫자 버튼과 네비게이션 버튼
 */
export const Nested: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Previous</Button>
        <Button variant="outline">Next</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

/**
 * 구분자가 있는 버튼 그룹 - Copy와 Paste 분리
 */
export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">
        <Copy />
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline">
        <Clipboard />
        Paste
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 분할 버튼 - 메인 액션과 추가 액션
 */
export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Save</Button>
      <Button variant="outline" size="icon">
        <ChevronDown />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 입력과 통합 - 검색 입력과 검색 버튼
 */
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder="Search..." className="rounded-r-none" />
      <Button variant="outline">
        <Search />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 입력 그룹 - 음성 모드 토글과 입력
 */
export const InputGroup: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <Mic />
      </Button>
      <Input placeholder="Voice mode..." />
    </ButtonGroup>
  ),
};

/**
 * 드롭다운 메뉴와 함께 - Follow 버튼과 추가 액션
 */
export const WithDropdown: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Follow</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <UserPlus />
            Add to contacts
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MoreHorizontal />
            More options
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  ),
};

/**
 * Select와 통합 - 통화 선택, 입력, 전송
 */
export const WithSelect: Story = {
  render: () => (
    <ButtonGroup>
      <Select defaultValue="usd">
        <SelectTrigger className="w-20 rounded-r-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">USD</SelectItem>
          <SelectItem value="eur">EUR</SelectItem>
          <SelectItem value="gbp">GBP</SelectItem>
        </SelectContent>
      </Select>
      <Input placeholder="Amount" className="rounded-none" />
      <Button>
        <Send />
        Send
      </Button>
    </ButtonGroup>
  ),
};

/**
 * Popover와 통합 - Copilot 버튼과 추가 옵션
 */
export const WithPopover: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Copilot</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Help
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Feedback
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  ),
};

import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClipboardIcon,
  ClockIcon,
  Copy,
  ListFilterPlusIcon,
  MailCheckIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import * as React from "react";

/**
 * A container that groups related buttons together.
 * Automatically applies styling for grouped buttons and manages layout.
 */
const meta = {
  title: "ui/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼 그룹입니다.
 * 관련된 버튼들을 시각적으로 그룹화합니다.
 */
export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Button 1</Button>
      <Button variant="outline">Button 2</Button>
      <Button variant="outline">Button 3</Button>
    </ButtonGroup>
  ),
};

/**
 * ButtonGroupDemo 예제입니다.
 * 중첩된 버튼 그룹과 드롭다운 메뉴를 포함한 복잡한 레이아웃을 보여줍니다.
 */
export const Demo: Story = {
  render: function ButtonGroupDemo() {
    const [label, setLabel] = React.useState("personal");

    return (
      <ButtonGroup>
        <ButtonGroup className="hidden sm:flex">
          <Button variant="outline" size="icon" aria-label="Go Back">
            <ArrowLeftIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Snooze</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="More Options">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MailCheckIcon />
                  Mark as read
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ListFilterPlusIcon />
                  Add to filter
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ClockIcon />
                  Snooze until
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarPlusIcon />
                  Create event
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Apply label
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="important">
                      Important
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="later">
                      Later
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
};

/**
 * 수직 방향의 버튼 그룹입니다.
 * 미디어 컨트롤이나 수량 조절에 유용합니다.
 */
export const Vertical: Story = {
  render: () => (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 구분자를 포함한 버튼 그룹입니다.
 * 버튼 사이에 시각적 구분을 제공합니다.
 */
export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 다양한 크기의 버튼 그룹입니다.
 * 작은 크기의 버튼을 그룹화할 때 사용합니다.
 */
export const SizeVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * 중첩된 버튼 그룹입니다.
 * 복잡한 레이아웃을 위해 여러 그룹을 함께 사용할 수 있습니다.
 */
export const NestedGroups: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          4
        </Button>
        <Button variant="outline" size="sm">
          5
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm">
          <ArrowLeftIcon />
        </Button>
        <Button variant="outline" size="icon-sm">
          <ArrowLeftIcon className="rotate-180" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

/**
 * ButtonGroupText를 포함한 예제입니다.
 * 버튼과 함께 텍스트 정보를 표시할 때 사용합니다.
 */
export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Page</ButtonGroupText>
      <Button variant="outline" size="icon">
        <ArrowLeftIcon />
      </Button>
      <Button variant="outline" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="icon">
        <ArrowLeftIcon className="rotate-180" />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 입력 요소와 함께 사용하는 예제입니다.
 * Select나 다른 입력 컴포넌트와 버튼을 그룹화할 수 있습니다.
 */
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Select defaultValue="1">
        <SelectTrigger className="w-[100px]">10</SelectTrigger>
        <SelectContent>
          <SelectItem value="1">10</SelectItem>
          <SelectItem value="2">20</SelectItem>
          <SelectItem value="3">50</SelectItem>
          <SelectItem value="4">100</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline">Apply</Button>
    </ButtonGroup>
  ),
};

/**
 * 다양한 변형의 버튼 그룹입니다.
 * secondary, destructive 등 다른 variant와 함께 사용할 수 있습니다.
 */
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button variant="default">Default</Button>
        <Button variant="default">Button</Button>
        <Button variant="default">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive">Destructive</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="destructive">Group</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="ghost">Ghost</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Button</Button>
        <ButtonGroupSeparator />
        <Button variant="ghost">Group</Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * 아이콘 버튼 그룹입니다.
 * 툴바나 액션 버튼 그룹에 적합합니다.
 */
export const IconButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <Copy className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <ClipboardIcon className="h-4 w-4" />
      </Button>
      <ButtonGroupSeparator />
      <Button variant="outline" size="icon">
        <ArchiveIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Trash2Icon className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
};

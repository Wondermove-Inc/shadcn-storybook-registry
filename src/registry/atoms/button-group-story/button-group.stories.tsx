import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowLeft, ArrowRight, ChevronDown, Minus, Plus } from "lucide-react";

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
 * 기본 사용법입니다.
 * 두 개의 버튼을 그룹화합니다.
 */
export const BasicUsage: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Button 1</Button>
      <Button variant="outline">Button 2</Button>
    </ButtonGroup>
  ),
};

/**
 * 수직 방향의 버튼 그룹입니다.
 * 증가/감소 컨트롤에 적합합니다.
 */
export const Orientation: Story = {
  render: () => (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
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
 * 다양한 크기의 버튼 그룹입니다.
 * 작은 크기와 아이콘 버튼을 함께 사용합니다.
 */
export const Size: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
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
        <Button variant="outline" size="icon-sm">
          <Plus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
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
        <Button variant="outline" size="icon-lg">
          <Plus />
        </Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * 중첩된 버튼 그룹입니다.
 * 페이지네이션 컨트롤에 유용합니다.
 */
export const Nested: Story = {
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
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <ArrowLeft />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <ArrowRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};

/**
 * 구분자를 포함한 버튼 그룹입니다.
 * Copy와 Paste 버튼 사이에 구분선을 표시합니다.
 */
export const Separator: Story = {
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
 * 분할 버튼 예제입니다.
 * 메인 버튼과 아이콘 버튼을 구분합니다.
 */
export const Split: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon">
        <Plus />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * Input과 함께 사용하는 버튼 그룹입니다.
 * 검색 또는 필터 UI에 유용합니다.
 */
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder="Search..." className="w-[200px]" />
      <Button variant="outline">Search</Button>
    </ButtonGroup>
  ),
};

/**
 * Input Group 예제입니다.
 * 여러 입력 필드와 버튼을 그룹화합니다.
 */
export const InputGroup: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonGroup>
        <Input placeholder="First name" className="w-[150px]" />
        <Input placeholder="Last name" className="w-[150px]" />
        <Button variant="secondary">Submit</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <Plus />
        </Button>
        <Input placeholder="Quantity" className="w-[100px]" />
        <Button variant="outline" size="icon">
          <Minus />
        </Button>
      </ButtonGroup>
    </div>
  ),
};

/**
 * Dropdown Menu와 함께 사용하는 버튼 그룹입니다.
 * 분할 버튼 패턴에 드롭다운을 추가합니다.
 */
export const WithDropdownMenu: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Save</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon">
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Save as...</DropdownMenuItem>
          <DropdownMenuItem>Save and close</DropdownMenuItem>
          <DropdownMenuItem>Save all</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  ),
};

/**
 * Select와 함께 사용하는 버튼 그룹입니다.
 * 페이지 크기 선택에 유용합니다.
 */
export const WithSelect: Story = {
  render: () => (
    <ButtonGroup>
      <Select defaultValue="10">
        <SelectTrigger className="w-[80px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary">Apply</Button>
    </ButtonGroup>
  ),
};

/**
 * Popover와 함께 사용하는 버튼 그룹입니다.
 * 추가 설정이나 정보를 표시할 때 유용합니다.
 */
export const WithPopover: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Action</Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-2">
            <h4 className="font-medium">Advanced Settings</h4>
            <p className="text-muted-foreground text-sm">
              Configure advanced options for this action.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  ),
};

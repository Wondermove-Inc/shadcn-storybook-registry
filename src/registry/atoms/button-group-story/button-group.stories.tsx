import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowLeft, ArrowRight, Minus, Plus } from "lucide-react";

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
export const BasicUsage: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  ),
};

/**
 * 수직 방향의 버튼 그룹입니다.
 * 증가/감소 컨트롤에 적합합니다.
 */
export const Orientation: Story = {
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
 * 다양한 크기의 버튼 그룹입니다.
 * 작은 크기의 버튼과 아이콘 버튼을 포함합니다.
 */
export const SizeVariations: Story = {
  render: () => (
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
  ),
};

/**
 * 중첩된 버튼 그룹입니다.
 * 페이지네이션 컨트롤에 유용합니다.
 */
export const NestedGroups: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button size="sm">1</Button>
        <Button size="sm">2</Button>
        <Button size="sm">3</Button>
        <Button size="sm">4</Button>
        <Button size="sm">5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="icon-sm">
          <ArrowLeft />
        </Button>
        <Button size="icon-sm">
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
 * 메인 버튼과 드롭다운 트리거를 구분합니다.
 */
export const SplitButton: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <Plus />
      </Button>
    </ButtonGroup>
  ),
};

/**
 * 입력 필드와 함께 사용하는 버튼 그룹입니다.
 * Select 컴포넌트와 버튼을 결합합니다.
 */
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Select>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="10" />
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
 * 페이지네이션에 텍스트를 포함한 예제입니다.
 * ButtonGroupText 컴포넌트를 사용합니다.
 */
export const Pagination: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Page</ButtonGroupText>
      <Button size="icon-sm">
        <ArrowLeft />
      </Button>
      <Button size="sm">1</Button>
      <Button size="sm">2</Button>
      <Button size="sm">3</Button>
      <Button size="icon-sm">
        <ArrowRight />
      </Button>
    </ButtonGroup>
  ),
};

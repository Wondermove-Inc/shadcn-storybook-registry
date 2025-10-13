import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Search } from "lucide-react";

/**
 * Displays an animated loading indicator.
 * Used to communicate ongoing processes or data fetching.
 */
const meta = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 스피너입니다.
 * 로딩 상태를 표시할 때 사용합니다.
 */
export const Default: Story = {
  render: () => <Spinner />,
};

/**
 * SpinnerDemo 예제입니다.
 * 결제 처리 중과 같은 실제 사용 사례를 보여줍니다.
 */
export const Demo: Story = {
  render: () => (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  ),
};

/**
 * 다양한 크기의 스피너입니다.
 * size-3부터 size-8까지 다양한 크기로 사용할 수 있습니다.
 */
export const SizeVariations: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
};

/**
 * 다양한 색상의 스피너입니다.
 * Tailwind 텍스트 색상 클래스를 사용하여 색상을 변경할 수 있습니다.
 */
export const ColorVariations: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  ),
};

/**
 * 버튼과 함께 사용하는 예제입니다.
 * 버튼 내부에 로딩 상태를 표시합니다.
 */
export const ButtonExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button disabled>
        <Spinner className="mr-2 h-4 w-4" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Spinner className="mr-2 h-4 w-4" />
        Please wait
      </Button>
      <Button variant="secondary" disabled>
        <Spinner className="mr-2 h-4 w-4" />
        Saving changes
      </Button>
    </div>
  ),
};

/**
 * 입력 필드와 함께 사용하는 예제입니다.
 * 검색이나 데이터 로딩 중임을 표시합니다.
 */
export const InputExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2" />
        <Input
          type="search"
          placeholder="Search..."
          className="pr-10 pl-8"
          disabled
        />
        <Spinner className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            disabled
          />
          <Spinner className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>
    </div>
  ),
};

/**
 * 텍스트와 함께 인라인으로 사용하는 예제입니다.
 * 문장 내에서 로딩 상태를 표시할 때 사용합니다.
 */
export const InlineTextExample: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-muted-foreground flex items-center gap-2 text-sm">
        <Spinner className="size-3" />
        Loading user data...
      </p>
      <p className="flex items-center gap-2">
        Fetching results
        <Spinner className="size-4" />
      </p>
      <div className="flex items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-sm font-medium">Connecting to server</span>
      </div>
    </div>
  ),
};

/**
 * 카드 또는 컨테이너 내부에서 중앙에 위치한 스피너입니다.
 * 전체 섹션이 로딩 중일 때 사용합니다.
 */
export const CenteredExample: Story = {
  render: () => (
    <div className="flex h-[200px] w-[400px] items-center justify-center rounded-lg border">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <p className="text-muted-foreground text-sm">Loading content...</p>
      </div>
    </div>
  ),
};

/**
 * 오버레이와 함께 사용하는 예제입니다.
 * 콘텐츠 위에 로딩 오버레이를 표시합니다.
 */
export const OverlayExample: Story = {
  render: () => (
    <div className="relative h-[200px] w-[400px] rounded-lg border p-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Sample Content</h3>
        <p className="text-muted-foreground">
          This content is being updated in the background.
        </p>
      </div>
      <div className="bg-background/80 absolute inset-0 flex items-center justify-center rounded-lg backdrop-blur-sm">
        <Spinner className="size-8" />
      </div>
    </div>
  ),
};

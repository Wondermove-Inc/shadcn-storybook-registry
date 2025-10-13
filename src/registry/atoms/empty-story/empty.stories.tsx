import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  FileX,
  FolderOpen,
  Image,
  Inbox,
  Package,
  Search,
  Users,
} from "lucide-react";

/**
 * Use the Empty component to display a empty state.
 * Provides a flexible and visually appealing way to show empty or placeholder states.
 */
const meta = {
  title: "ui/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 빈 상태입니다. 아이콘, 제목, 설명으로 구성되며
 * 데이터가 없을 때 사용자에게 안내를 제공합니다.
 */
export const Default: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package />
        </EmptyMedia>
        <EmptyTitle>No products found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you're looking for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add your first product</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 파일이 없을 때 표시하는 빈 상태입니다.
 * 파일 아이콘과 업로드 버튼을 포함합니다.
 */
export const NoFiles: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileX />
        </EmptyMedia>
        <EmptyTitle>No files uploaded</EmptyTitle>
        <EmptyDescription>
          Upload a file to get started with your project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload file</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 검색 결과가 없을 때 표시하는 빈 상태입니다.
 * 검색어를 수정하거나 필터를 조정하도록 안내합니다.
 */
export const NoSearchResults: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          No results match your search criteria. Try different keywords.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Input placeholder="Try searching for something else..." />
        <Button variant="secondary">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 대용량 이미지나 일러스트레이션을 사용하는 빈 상태입니다.
 * variant="default"를 사용하여 더 큰 미디어를 표시할 수 있습니다.
 */
export const WithLargeImage: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="default">
          <div className="bg-muted flex h-32 w-32 items-center justify-center rounded-lg">
            <Image className="text-muted-foreground h-16 w-16" />
          </div>
        </EmptyMedia>
        <EmptyTitle>No images in gallery</EmptyTitle>
        <EmptyDescription>
          Upload your first image to create a beautiful gallery.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upload image</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 여러 액션 버튼을 포함하는 빈 상태입니다.
 * 주 액션과 보조 액션을 함께 제공할 수 있습니다.
 */
export const WithMultipleActions: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Users />
        </EmptyMedia>
        <EmptyTitle>No team members yet</EmptyTitle>
        <EmptyDescription>
          Invite team members to collaborate on your project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Invite team members</Button>
        <Button variant="link">Learn about permissions</Button>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 미니멀한 빈 상태입니다. 액션 버튼 없이
 * 간단한 정보만 제공합니다.
 */
export const Minimal: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>Inbox is empty</EmptyTitle>
        <EmptyDescription>
          All caught up! Check back later for new messages.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

/**
 * 폴더가 비어있을 때 표시하는 빈 상태입니다.
 * 폴더 생성이나 파일 업로드 액션을 제공합니다.
 */
export const EmptyFolder: Story = {
  render: () => (
    <Empty className="w-full max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>This folder is empty</EmptyTitle>
        <EmptyDescription>
          Create a new folder or upload files to organize your content.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="outline">Create folder</Button>
          <Button>Upload files</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
};

/**
 * 커스텀 스타일링 예제입니다.
 * 배경색과 테두리를 커스터마이징할 수 있습니다.
 */
export const CustomStyling: Story = {
  render: () => (
    <Empty className="border-primary/20 bg-primary/5 w-full max-w-md border-2">
      <EmptyHeader>
        <EmptyMedia variant="icon" className="bg-primary/10 text-primary">
          <Package />
        </EmptyMedia>
        <EmptyTitle>Premium feature</EmptyTitle>
        <EmptyDescription>
          Upgrade to premium to unlock this feature and many more.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Upgrade to premium</Button>
      </EmptyContent>
    </Empty>
  ),
};

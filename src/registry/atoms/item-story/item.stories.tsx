import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Bell,
  Calendar,
  Download,
  FileText,
  MoreVertical,
  Settings,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

/**
 * A versatile component that you can use to display any content.
 * Provides flexible layout options for displaying various types of content with consistent styling.
 */
const meta = {
  title: "ui/Item",
  component: Item,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Item 사용 예제입니다.
 * 아이콘, 제목, 설명, 액션으로 구성됩니다.
 */
export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Item>
        <ItemMedia variant="icon">
          <FileText />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document.pdf</ItemTitle>
          <ItemDescription>Last modified 2 hours ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

/**
 * ItemGroup을 사용하여 여러 Item을 그룹화할 수 있습니다.
 * ItemSeparator로 아이템 사이를 구분합니다.
 */
export const ItemGroupExample: Story = {
  render: () => (
    <div className="w-[400px]">
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">
            <Settings />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Settings</ItemTitle>
            <ItemDescription>Manage your account settings</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <Bell />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Notifications</ItemTitle>
            <ItemDescription>
              Configure notification preferences
            </ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item>
          <ItemMedia variant="icon">
            <Shield />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security</ItemTitle>
            <ItemDescription>
              Two-factor authentication and privacy
            </ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </div>
  ),
};

/**
 * outline variant를 사용하여 테두리가 있는 Item을 만들 수 있습니다.
 * 카드 형태의 UI에 적합합니다.
 */
export const OutlineVariant: Story = {
  render: () => (
    <div className="w-[400px]">
      <Item variant="outline">
        <ItemMedia variant="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=150&fit=crop"
            alt="Project thumbnail"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Modern Dashboard</ItemTitle>
          <ItemDescription>
            A beautiful and responsive admin dashboard template
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
        </ItemActions>
      </Item>
    </div>
  ),
};

/**
 * muted variant는 배경색이 있는 Item을 만들 수 있습니다.
 * 선택된 상태나 강조가 필요할 때 사용합니다.
 */
export const MutedVariant: Story = {
  render: () => (
    <div className="w-[400px]">
      <Item variant="muted">
        <ItemMedia variant="icon">
          <Star className="fill-yellow-500 text-yellow-500" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Featured Project</ItemTitle>
          <ItemDescription>
            This project has been starred by 1.2k users
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">View Project</Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

/**
 * 작은 크기의 Item입니다.
 * 컴팩트한 리스트나 사이드바에 적합합니다.
 */
export const SmallSize: Story = {
  render: () => (
    <div className="w-[350px]">
      <ItemGroup>
        <Item size="sm">
          <ItemMedia variant="icon">
            <Zap />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Quick Actions</ItemTitle>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemContent>
            <ItemTitle>Recent Files</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">12</Badge>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item size="sm">
          <ItemContent>
            <ItemTitle>Shared with Me</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Badge variant="secondary">3</Badge>
          </ItemActions>
        </Item>
      </ItemGroup>
    </div>
  ),
};

/**
 * asChild prop을 사용하여 Link로 렌더링할 수 있습니다.
 * 네비게이션 아이템에 유용합니다.
 */
export const AsLink: Story = {
  render: () => (
    <div className="w-[400px]">
      <Item asChild>
        <Link href="/profile">
          <ItemMedia>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>shadcn</ItemTitle>
            <ItemDescription>View profile and settings</ItemDescription>
          </ItemContent>
          <ItemActions>
            <MoreVertical className="h-4 w-4" />
          </ItemActions>
        </Link>
      </Item>
    </div>
  ),
};

/**
 * Header와 Footer를 사용한 복잡한 레이아웃입니다.
 * 더 많은 정보를 구조적으로 표시할 수 있습니다.
 */
export const WithHeaderFooter: Story = {
  render: () => (
    <div className="w-[450px]">
      <Item variant="outline">
        <ItemHeader>
          <ItemContent>
            <ItemTitle>Team Meeting</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Badge>Upcoming</Badge>
          </ItemActions>
        </ItemHeader>
        <ItemContent>
          <ItemDescription>
            Weekly sync-up with the product team to discuss Q4 roadmap
          </ItemDescription>
        </ItemContent>
        <ItemFooter>
          <ItemContent className="flex flex-row items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-sm">
                Today, 3:00 PM
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-sm">
                8 participants
              </span>
            </div>
          </ItemContent>
          <ItemActions>
            <Button size="sm">Join</Button>
          </ItemActions>
        </ItemFooter>
      </Item>
    </div>
  ),
};

/**
 * 여러 ItemMedia를 조합한 예제입니다.
 * 복잡한 미디어 표현이 가능합니다.
 */
export const MultipleMedia: Story = {
  render: () => (
    <div className="w-[400px]">
      <Item>
        <ItemMedia>
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 h-8 w-8">
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <Avatar className="-ml-2 h-8 w-8">
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Design System Updates</ItemTitle>
          <ItemDescription>
            4 people are collaborating on this file
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  ),
};

/**
 * 중첩된 Item 구조 예제입니다.
 * 계층적인 정보를 표시할 수 있습니다.
 */
export const NestedItems: Story = {
  render: () => (
    <div className="w-[450px]">
      <ItemGroup>
        <Item variant="muted">
          <ItemContent>
            <ItemTitle>Frontend Development</ItemTitle>
            <ItemDescription>3 courses available</ItemDescription>
          </ItemContent>
        </Item>
        <div className="pl-8">
          <Item size="sm">
            <ItemContent>
              <ItemTitle>React Fundamentals</ItemTitle>
              <ItemDescription>12 lessons · 3 hours</ItemDescription>
            </ItemContent>
          </Item>
          <ItemSeparator className="ml-4" />
          <Item size="sm">
            <ItemContent>
              <ItemTitle>Advanced TypeScript</ItemTitle>
              <ItemDescription>8 lessons · 2 hours</ItemDescription>
            </ItemContent>
          </Item>
          <ItemSeparator className="ml-4" />
          <Item size="sm">
            <ItemContent>
              <ItemTitle>Next.js Mastery</ItemTitle>
              <ItemDescription>15 lessons · 4 hours</ItemDescription>
            </ItemContent>
          </Item>
        </div>
      </ItemGroup>
    </div>
  ),
};

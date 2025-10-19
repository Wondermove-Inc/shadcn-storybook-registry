import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarTemplate } from "./sidebar";

/**
 * 🎯 목적: Sidebar 템플릿 스토리
 */
const meta = {
  title: "templates/Sidebar",
  component: SidebarTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `순수 사이드바 레이아웃 템플릿입니다. AppSidebar와 SidebarInset만 제공하며, 콘텐츠는 children으로 주입합니다. 하드코딩된 콘텐츠는 없으며, 사이드바 토글 기능은 별도 Header 컴포넌트에서 처리합니다.`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "사이드바 내부에 표시할 콘텐츠",
    },
  },
} satisfies Meta<typeof SidebarTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 사이드바 템플릿입니다.
 * 순수 레이아웃만 제공하며 콘텐츠는 비어있습니다.
 */
export const Default: Story = {};

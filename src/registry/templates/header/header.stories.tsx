import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./header";

/**
 * 🎯 목적: 모듈화된 헤더 컴포넌트 스토리
 */
const meta = {
  title: "templates/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `모듈화된 헤더 컴포넌트입니다. 검색 기능과 각종 패널 토글 버튼을 포함합니다.`,
      },
    },
  },
  argTypes: {
    searchQuery: {
      control: "text",
      description: "검색 입력 필드의 값",
    },
    onSearchChange: {
      action: "search changed",
      description: "검색 값 변경 시 호출되는 콜백",
    },
    onPanelLeftToggle: {
      action: "panel left toggled",
      description: "왼쪽 패널 토글 버튼 클릭 시 호출되는 콜백",
    },
    onPanelBottomToggle: {
      action: "panel bottom toggled",
      description: "하단 패널 토글 버튼 클릭 시 호출되는 콜백",
    },
    onAiAssistantToggle: {
      action: "ai assistant toggled",
      description: "AI 어시스턴트 버튼 클릭 시 호출되는 콜백",
    },
    onSettingsClick: {
      action: "settings clicked",
      description: "설정 버튼 클릭 시 호출되는 콜백",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 헤더 컴포넌트입니다.
 */
export const Default: Story = {
  args: {
    searchQuery: "",
  },
};

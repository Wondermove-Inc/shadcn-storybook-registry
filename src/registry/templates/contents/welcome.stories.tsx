import type { Meta, StoryObj } from "@storybook/react-vite";
import { Welcome } from "./welcome";

/**
 * Welcome 콘텐츠 컴포넌트 - Kubernetes IDE 환경의 웰컴 페이지
 *
 * baseStructure의 contents 영역에 들어갈 웰컴 콘텐츠를 제공합니다.
 * 탭 네비게이션, 메인 제목, 액션 카드, 도움말 정보를 포함합니다.
 */
const meta: Meta<typeof Welcome> = {
  title: "templates/Contents/Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Welcome 콘텐츠 - 완전한 웰컴 페이지 레이아웃
 */
export const Default: Story = {};

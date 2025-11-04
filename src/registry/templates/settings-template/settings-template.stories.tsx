import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsDialog } from "../../../../components/settings-dialog";

/**
 * 다이얼로그 내에 사이드바가 포함된 설정 템플릿입니다.
 *
 * 🎯 목적: Dialog 안에서 사용 가능한 Sidebar 컴포넌트 데모
 * ✨ 특징:
 * - Dialog 모달 내부에 Sidebar 레이아웃 구현
 * - 설정 카테고리별 네비게이션 제공
 * - 반응형 디자인 (모바일에서는 사이드바 숨김)
 * - Breadcrumb 네비게이션 포함
 * - 12개의 설정 카테고리 메뉴
 */
const meta = {
  title: "templates/Settings",
  component: SettingsDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Dialog 내부에 Sidebar가 포함된 설정 템플릿입니다. VS Code의 설정 페이지와 유사한 레이아웃으로, 좌측에는 설정 카테고리 네비게이션이, 우측에는 설정 내용이 표시됩니다. 모바일에서는 사이드바가 숨겨지고 콘텐츠만 표시됩니다.`,
      },
    },
  },
} satisfies Meta<typeof SettingsDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 설정 다이얼로그 템플릿입니다.
 *
 * 🎯 목적: Dialog 내 Sidebar 레이아웃의 완전한 기능 데모
 * ✨ 특징:
 * - 설정 카테고리: Notifications, Navigation, Home, Appearance 등 12개 메뉴
 * - 활성 메뉴: "Messages & media" 기본 선택
 * - 반응형 레이아웃: 데스크톱에서만 사이드바 표시
 * - Breadcrumb: Settings > Messages & media 경로 표시
 */
export const Default: Story = {
  render: () => {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center">
        <SettingsDialog />
      </div>
    );
  },
};

/**
 * 설정 다이얼로그를 위한 인터랙션 테스트입니다.
 *
 * 🎯 목적: Dialog 열기/닫기 및 사이드바 네비게이션 테스트
 * ✨ 테스트 항목:
 * - Dialog trigger 버튼 클릭
 * - 사이드바 메뉴 항목들 확인
 * - Breadcrumb 네비게이션 확인
 * - 콘텐츠 영역 렌더링 확인
 */
export const InteractionTest: Story = {
  tags: ["!dev", "!autodocs"],
  render: () => {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-4 text-lg font-semibold">
            Setting Dialog Template
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Dialog 내부에 Sidebar가 포함된 설정 템플릿을 테스트합니다.
          </p>
          <SettingsDialog />
        </div>
      </div>
    );
  },
};

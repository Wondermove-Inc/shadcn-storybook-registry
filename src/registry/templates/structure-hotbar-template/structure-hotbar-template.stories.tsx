import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Files, Blocks } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Hotbar } from "@/components/hotbar";

/**
 * VS Code Activity Bar 스타일의 Hotbar 템플릿입니다.
 *
 * 🎯 목적: 독립적으로 사용 가능한 Hotbar 컴포넌트 데모
 * ✨ 특징:
 * - VS Code Activity Bar와 동일한 세로 아이콘 바
 * - Explorer, Extensions, Daive App, Skuber App 등 순서로 배치
 * - 활성/비활성 상태 시각적 표시
 * - 하단에 Settings, Account 아이콘 배치
 * - 전체 메인 그룹에서 단일 활성 상태 관리 (1개만 선택 가능)
 */
const meta = {
  title: "templates/Hotbar",
  component: Hotbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `VS Code Activity Bar 스타일의 Hotbar 컴포넌트를 독립적으로 사용하는 템플릿입니다. Explorer, Extensions 기능 아이콘 다음에 애플리케이션 아이콘들이 배치되어 있으며, 전체 메인 그룹에서 단일 활성 상태로 관리됩니다.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <SidebarProvider
        style={
          {
            "--sidebar-width-icon": "3rem", // 48px - 공식 shadcn/ui 방법
          } as React.CSSProperties
        }
      >
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof Hotbar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * VS Code Activity Bar 스타일의 기본 Hotbar 템플릿입니다.
 *
 * 🎯 목적: 독립적으로 사용 가능한 Hotbar 컴포넌트의 완전한 기능 데모
 * ✨ 특징:
 * - 단일 메인 그룹: Explorer, Extensions, Daive App, Skuber App, SkuberIaaS App 순서로 배치
 * - 전체 그룹에서 단일 활성 상태 관리 (1개만 선택 가능)
 * - 클릭 시 상태 변경 및 시각적 피드백
 */
export const Default: Story = {
  render: () => {
    // 🎯 목적: 핫바 활성 아이템 상태 관리 - 단일 활성 상태
    const [activeItem, setActiveItem] = React.useState("explorer");

    // 🎯 목적: 핫바 아이템 클릭 핸들러 - 단일 활성 상태 관리
    const handleItemClick = (itemId: string) => {
      setActiveItem(itemId);
    };

    return (
      <div className="bg-background flex h-screen w-full">
        {/* VS Code Activity Bar 스타일 핫바 */}
        <Hotbar activeItem={activeItem} onItemClick={handleItemClick} />

        {/* 메인 콘텐츠 영역 */}
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Hotbar 템플릿</h2>
            <p className="text-muted-foreground text-sm">
              VS Code Activity Bar 스타일의 Hotbar 컴포넌트입니다.
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              현재 활성 아이템:{" "}
              <span className="font-medium">{activeItem}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Hotbar에 Badge 표시 기능이 포함된 예제입니다.
 *
 * 🎯 목적: Hotbar 아이콘에 알림 Badge가 표시되는 데모
 * ✨ 특징:
 * - 기본 Hotbar 기능 + Badge 알림 표시
 * - 독립적인 상태 관리 (Default와 완전 분리)
 * - 각 아이콘별 개별 Badge 상태 제어
 * - 전체 그룹에서 단일 활성 상태 관리
 */
export const Badge: Story = {
  render: () => {
    // 🎯 목적: Badge 예제용 독립적인 핫바 활성 아이템 상태 관리 - 단일 활성 상태
    const [activeItem, setActiveItem] = React.useState("skuber-app");

    // 🎯 목적: Badge가 있는 메인 아이템 목록 - 단일 그룹으로 통합
    const itemsWithBadge = [
      {
        id: "explorer",
        icon: Files,
        label: "Explorer",
        isActive: false,
      },
      {
        id: "extensions",
        icon: Blocks,
        label: "Extensions",
        isActive: false,
      },
      {
        id: "daive-app",
        icon: () => (
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_716_23729)">
              <circle
                cx="8"
                cy="8"
                r="7.335"
                stroke="currentColor"
                strokeWidth="1.33"
              />
              <circle
                cx="8"
                cy="8"
                r="4.335"
                stroke="currentColor"
                strokeWidth="1.33"
              />
              <circle cx="7" cy="7" r="1" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_716_23729">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Daive App",
        isActive: false,
        badge: 8,
        badgeVariant: "secondary" as const,
      },
      {
        id: "skuber-app",
        icon: () => (
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0_716_23743)">
              <path
                d="M8 0.334961C8.75979 0.334961 9.49491 0.445666 10.1895 0.652344C10.5414 0.757091 10.7424 1.12753 10.6377 1.47949C10.533 1.83139 10.1625 2.03226 9.81055 1.92773C9.23775 1.75726 8.63006 1.66504 8 1.66504C4.50128 1.66504 1.66504 4.50128 1.66504 8C1.66504 11.4987 4.50128 14.335 8 14.335C11.4987 14.335 14.335 11.4987 14.335 8C14.335 7.36994 14.2427 6.76225 14.0723 6.18945C13.9677 5.83755 14.1686 5.46703 14.5205 5.3623C14.8725 5.25765 15.2429 5.45859 15.3477 5.81055C15.5543 6.50509 15.665 7.24021 15.665 8C15.665 12.2333 12.2333 15.665 8 15.665C3.76674 15.665 0.334961 12.2333 0.334961 8C0.334961 3.76674 3.76674 0.334961 8 0.334961ZM8 3.25C10.6244 3.25 12.75 5.37754 12.75 8C12.75 10.6225 10.6225 12.75 8 12.75C5.37754 12.75 3.25 10.6225 3.25 8C3.25 5.37754 5.37557 3.25 8 3.25ZM7.43262 11.3379C7.25719 11.5113 7.05758 11.6436 6.84668 11.7383C7.21142 11.8507 7.59778 11.9121 8.00195 11.9121C8.40611 11.9121 8.79444 11.8506 9.15918 11.7383C8.94832 11.6437 8.74961 11.5113 8.57617 11.3379L8.00391 10.7666L7.43262 11.3379ZM5.25293 9.16504C4.81722 9.60278 4.81719 10.3113 5.25293 10.7471C5.69064 11.1828 6.39919 11.1828 6.83496 10.7471L7.4082 10.1729L5.82715 8.5918L5.25293 9.16504ZM8.59375 10.1729L9.16504 10.7451C9.60277 11.1808 10.3113 11.1808 10.7471 10.7451C11.1828 10.3074 11.1828 9.59885 10.7471 9.16309L10.1748 8.5918L8.59375 10.1729ZM6.41895 7.99805L6.42285 8.00195L8 8.79102H7.21094L7.99805 9.57812L9.5791 7.99805L8 7.20703H8.79102L8 6.41699L6.41895 7.99805ZM4.26367 6.84277C4.15131 7.20948 4.08984 7.59781 4.08984 8C4.08984 8.4022 4.1513 8.79053 4.26367 9.15527C4.35829 8.94244 4.49065 8.74375 4.66406 8.57031L5.23535 7.99805L4.66406 7.42578C4.49064 7.25235 4.3583 7.05364 4.26367 6.84277ZM11.7422 6.84668C11.6476 7.05755 11.5152 7.25429 11.3418 7.42773L10.7705 8L11.3418 8.57227C11.5152 8.74571 11.6476 8.94245 11.7422 9.15332V9.15527C11.8546 8.79053 11.916 8.40416 11.916 8.00195C11.916 7.59975 11.8546 7.21143 11.7422 6.84668ZM6.83496 5.25098C6.39722 4.81526 5.68868 4.81523 5.25293 5.25098C4.81719 5.6887 4.81722 6.39725 5.25293 6.83301L5.82715 7.40625L7.4082 5.8252L6.83496 5.25098ZM10.7471 5.25293C10.3094 4.81719 9.60081 4.81722 9.16504 5.25293L8.59375 5.8252L10.1748 7.40625L10.7471 6.83496C11.1828 6.39722 11.1828 5.68867 10.7471 5.25293ZM8.00195 4.08789C7.59975 4.08789 7.21338 4.14934 6.84863 4.26172C7.05951 4.35634 7.25624 4.48868 7.42969 4.66211L8.00195 5.2334L8.57422 4.66211C8.74766 4.48868 8.9444 4.35635 9.15527 4.26172H9.15723C8.79052 4.14935 8.40415 4.08789 8.00195 4.08789ZM13 0.875C13.3036 0.875106 13.5497 1.1212 13.5498 1.4248V2.4502H14.5752C14.8787 2.45041 15.1249 2.69646 15.125 3C15.1249 3.30354 14.8787 3.54959 14.5752 3.5498H13.5498V4.5752C13.5496 4.87871 13.3035 5.12489 13 5.125C12.6965 5.1249 12.4504 4.87871 12.4502 4.5752V3.5498H11.4248C11.1212 3.54971 10.8751 3.30361 10.875 3C10.8751 2.69639 11.1212 2.45029 11.4248 2.4502H12.4502V1.4248C12.4503 1.12119 12.6964 0.875099 13 0.875Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_716_23743">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Skuber App",
        isActive: false,
        badge: "N",
        badgeVariant: "destructive" as const,
      },
      {
        id: "skuberiaas-app",
        text: "IaaS",
        label: "SkuberIaaS App",
        isActive: false,
      },
    ];

    // 🎯 목적: Badge 예제용 독립적인 핫바 아이템 클릭 핸들러 - 단일 활성 상태 관리
    const handleItemClick = (itemId: string) => {
      setActiveItem(itemId);
    };

    return (
      <div className="bg-background flex h-screen w-full">
        {/* VS Code Activity Bar 스타일 핫바 - Badge 예제용 */}
        <Hotbar
          items={itemsWithBadge}
          activeItem={activeItem}
          onItemClick={handleItemClick}
        />

        {/* 메인 콘텐츠 영역 - Badge 예제 설명 */}
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Hotbar Badge 예제</h2>
            <p className="text-muted-foreground text-sm">
              Hotbar 아이콘에 Badge 알림이 표시되는 예제입니다.
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              현재 활성 아이템:{" "}
              <span className="font-medium">{activeItem}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

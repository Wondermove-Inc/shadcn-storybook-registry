import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Files, Plus } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Hotbar } from "@/components/hotbar";

/**
 * VS Code Activity Bar 스타일의 Hotbar 템플릿입니다.
 *
 * 🎯 목적: 독립적으로 사용 가능한 Hotbar 컴포넌트 데모
 * ✨ 특징:
 * - VS Code Activity Bar와 동일한 세로 아이콘 바
 * - Explorer, Search, Git, Extensions 등 주요 기능 아이콘
 * - 활성/비활성 상태 시각적 표시
 * - 하단에 Settings, Account 아이콘 배치
 * - 그룹별 독립적인 상태 관리 (상단 앱 그룹, 하단 기능 그룹)
 */
const meta = {
  title: "templates/Hotbar",
  component: Hotbar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `VS Code Activity Bar 스타일의 Hotbar 컴포넌트를 독립적으로 사용하는 템플릿입니다. 상단에는 애플리케이션 아이콘, 하단에는 기능 아이콘이 배치되어 있으며, 각 그룹은 독립적으로 활성 상태가 관리됩니다.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
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
 * - 상단 앱 그룹: DAIVE, Skuber 등 애플리케이션 아이콘
 * - 하단 기능 그룹: Explorer, Extensions 등 기능 아이콘
 * - 그룹별 독립적인 활성 상태 관리
 * - 클릭 시 상태 변경 및 시각적 피드백
 */
export const Default: Story = {
  render: () => {
    // 🎯 목적: 핫바 활성 아이템 상태 관리 - 그룹별 독립 관리
    const [activeTopItem, setActiveTopItem] = React.useState("daive-app");
    const [activeBottomItem, setActiveBottomItem] = React.useState("explorer");

    // 🎯 목적: 핫바 아이템 클릭 핸들러 - 그룹별 독립 관리
    const handleItemClick = (itemId: string) => {
      // 상단 그룹 앱 아이템 클릭 시
      if (itemId.startsWith("daive") || itemId.startsWith("skuber")) {
        setActiveTopItem(itemId);
      }
      // 하단 그룹 기능 아이템 클릭 시
      else if (
        itemId.startsWith("explorer") ||
        itemId.startsWith("extensions")
      ) {
        setActiveBottomItem(itemId);
      }
    };

    return (
      <div className="bg-background flex h-screen w-full">
        {/* VS Code Activity Bar 스타일 핫바 */}
        <Hotbar
          activeTopItem={activeTopItem}
          activeBottomItem={activeBottomItem}
          onItemClick={handleItemClick}
        />

        {/* 메인 콘텐츠 영역 */}
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Hotbar 템플릿</h2>
            <p className="text-muted-foreground text-sm">
              VS Code Activity Bar 스타일의 Hotbar 컴포넌트입니다.
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              현재 활성 아이템:{" "}
              <span className="font-medium">
                상단: {activeTopItem} | 하단: {activeBottomItem}
              </span>
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
 * - 클릭 시 Badge 카운트 변경 데모
 */
export const Badge: Story = {
  render: () => {
    // 🎯 목적: Badge 예제용 독립적인 핫바 활성 아이템 상태 관리
    const [activeTopItem, setActiveTopItem] = React.useState("skuber-app");
    const [activeBottomItem, setActiveBottomItem] = React.useState("explorer");

    // 🎯 목적: Badge가 있는 상단 앱 아이템 목록
    const topItemsWithBadge = [
      {
        id: "daive-app",
        imageUrl: "/images/apps/daive.svg",
        label: "Daive App",
        isActive: false,
        badge: 8,
        badgeVariant: "secondary" as const,
      },
      {
        id: "skuber-app",
        imageUrl: "/images/apps/skuber.svg",
        label: "Skuber App",
        isActive: false,
        badge: "N",
        badgeVariant: "destructive" as const,
      },
      {
        id: "skuberiaas-app",
        imageUrl: "/images/apps/skuberIaaS.svg",
        label: "SkuberIaaS App",
        isActive: false,
      },
    ];

    // 🎯 목적: Badge가 있는 하단 기능 아이템 목록
    const bottomItemsWithBadge = [
      {
        id: "explorer",
        icon: Files,
        label: "Explorer",
        isActive: false,
      },
      {
        id: "extensions",
        icon: Plus,
        label: "Extensions",
        isActive: false,
      },
    ];

    // 🎯 목적: Badge 예제용 독립적인 핫바 아이템 클릭 핸들러
    const handleItemClick = (itemId: string) => {
      // 상단 그룹 앱 아이템 클릭 시
      if (itemId.startsWith("daive") || itemId.startsWith("skuber")) {
        setActiveTopItem(itemId);
      }
      // 하단 그룹 기능 아이템 클릭 시
      else if (
        itemId.startsWith("explorer") ||
        itemId.startsWith("extensions")
      ) {
        setActiveBottomItem(itemId);
      }
    };

    return (
      <div className="bg-background flex h-screen w-full">
        {/* VS Code Activity Bar 스타일 핫바 - Badge 예제용 */}
        <Hotbar
          topItems={topItemsWithBadge}
          items={bottomItemsWithBadge}
          activeTopItem={activeTopItem}
          activeBottomItem={activeBottomItem}
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
              <span className="font-medium">
                상단: {activeTopItem} | 하단: {activeBottomItem}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

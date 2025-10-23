import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseStructureTemplate } from "./base-structure-template";
import { Header } from "@/registry/templates/header/header";
import { SidebarTemplate } from "@/registry/templates/sidebar/sidebar";
import { AIAssistant } from "@/registry/templates/ai-assistant/ai-assistant";
import { ResizableAppSidebar } from "@/components/resizable-app-sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Hotbar } from "@/components/hotbar";

/**
 * 모듈화된 베이스 구조 템플릿을 보여주는 Storybook 스토리입니다.
 *
 * 🎯 목적: Header, Sidebar, AI Assistant 템플릿을 조합한 완전한 3열 레이아웃 데모
 *
 * 특징:
 * - Header 템플릿의 검색 기능과 버튼 그룹 (AI Assistant 토글 버튼 포함)
 * - Sidebar 템플릿의 파일 트리와 네비게이션
 * - AI Assistant 템플릿의 설정 패널과 인터랙션
 * - 커스터마이징 가능한 메인 콘텐츠 영역
 * - UIDL 명세서에 따른 3열 레이아웃 구조
 */
const meta = {
  title: "templates/BaseStructure",
  component: BaseStructureTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Header, Sidebar, AI Assistant 템플릿을 조합한 모듈화된 베이스 구조 템플릿입니다. 3열 레이아웃 구조로 구성되며, 각 템플릿은 독립적으로 사용할 수도 있고 조합하여 완전한 레이아웃을 구성할 수도 있습니다.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BaseStructureTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: Header, VS Code Activity Bar 스타일 Hotbar, 리사이즈 가능한 Sidebar, AI Assistant가 결합된 완전한 4열 레이아웃 데모
 * ✨ 특징:
 * - VS Code Activity Bar 스타일의 좌측 핫바 (Explorer, Search, Git 등)
 * - 핫바 아이템 클릭 시 사이드바 자동 표시
 * - Header의 PanelLeft 버튼으로 사이드바 토글
 * - AI Assistant 패널 토글 및 닫기 기능
 */
export const Default: Story = {
  render: () => {
    // 🎯 목적: AI Assistant 표시 상태 관리
    const [isAIAssistantVisible, setIsAIAssistantVisible] =
      React.useState(true);

    // 🎯 목적: 사이드바 표시 상태 관리
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

    // 🎯 목적: 핫바 활성 아이템 상태 관리
    const [activeHotbarItem, setActiveHotbarItem] = React.useState("explorer");

    // 🎯 목적: AI Assistant 토글 핸들러
    const handleAIAssistantToggle = () => {
      setIsAIAssistantVisible((prev) => !prev);
    };

    // 🎯 목적: AI Assistant 닫기 핸들러
    const handleAIAssistantClose = () => {
      setIsAIAssistantVisible(false);
    };

    // 🎯 목적: 사이드바 토글 핸들러 (Header의 PanelLeft 버튼용)
    const handlePanelLeftToggle = () => {
      setIsSidebarVisible((prev) => !prev);
    };

    // 🎯 목적: 핫바 아이템 클릭 핸들러
    const handleHotbarItemClick = (itemId: string) => {
      setActiveHotbarItem(itemId);
      // 사이드바가 숨겨져 있다면 다시 표시
      if (!isSidebarVisible) {
        setIsSidebarVisible(true);
      }
    };

    return (
      <div className="bg-background h-screen w-full">
        <Header
          searchQuery=""
          onSearchChange={() => {}}
          onNavigationBack={() => {}}
          onNavigationForward={() => {}}
          onPanelLeftToggle={handlePanelLeftToggle}
          onAiAssistantToggle={handleAIAssistantToggle}
        />
        <div className="h-[calc(100vh-40px)] w-full">
          <div className="flex h-full">
            {/* 핫바 영역 (고정 크기) */}
            <div className="w-12 flex-shrink-0">
              <Hotbar
                activeItem={activeHotbarItem}
                onItemClick={handleHotbarItemClick}
                className="border-sidebar-border h-full border-r"
              />
            </div>

            {/* 사이드바 + 메인 콘텐츠 + AI Assistant 영역 (리사이즈 가능) */}
            <div className="flex-1">
              <ResizablePanelGroup
                direction="horizontal"
                className="h-full w-full"
              >
                {/* 사이드바 패널 - 조건부 렌더링 */}
                {isSidebarVisible && (
                  <>
                    <ResizablePanel defaultSize={15} minSize={15} maxSize={50}>
                      <ResizableAppSidebar className="border-r" />
                    </ResizablePanel>

                    {/* 사이드바 리사이즈 핸들 */}
                    <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />
                  </>
                )}

                {/* 메인 콘텐츠 패널 */}
                <ResizablePanel>
                  <div className="flex h-full flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                      <div className="bg-muted text-muted-foreground flex items-center justify-center gap-2 rounded-md px-3 py-2">
                        <span className="font-mono text-sm">contents-area</span>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground text-sm">
                          Header, 고정 Hotbar, 독립 리사이즈 Sidebar, AI
                          Assistant가 결합된 완전한 VS Code 스타일
                          레이아웃입니다.
                        </p>
                        <p className="text-muted-foreground mt-2 text-xs">
                          현재 활성 핫바 아이템:{" "}
                          <span className="font-medium">
                            {activeHotbarItem}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </ResizablePanel>

                {/* AI Assistant 패널 */}
                {isAIAssistantVisible && (
                  <>
                    <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />
                    <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                      <AIAssistant
                        onClose={handleAIAssistantClose}
                        onStart={() => {}}
                        className="h-full w-full"
                      />
                    </ResizablePanel>
                  </>
                )}
              </ResizablePanelGroup>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Header 템플릿만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Header 컴포넌트의 독립적인 사용법 데모
 */
export const HeaderOnly: Story = {
  render: () => (
    <div className="bg-background h-screen w-full">
      <Header
        searchQuery=""
        onSearchChange={() => {}}
        onNavigationBack={() => {}}
        onNavigationForward={() => {}}
        onPanelLeftToggle={() => {}}
        onAiAssistantToggle={() => {}}
      />
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold">Header 템플릿</h2>
          <p className="text-muted-foreground text-sm">
            Header 컴포넌트만 독립적으로 사용하는 예시입니다.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Sidebar 템플릿만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Sidebar 컴포넌트의 독립적인 사용법 데모
 */
export const SidebarOnly: Story = {
  render: () => (
    <div className="h-screen w-full">
      <SidebarTemplate defaultSidebarSize={15}>
        <div className="flex h-full items-center justify-center p-8">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Sidebar 템플릿</h2>
            <p className="text-muted-foreground text-sm">
              Sidebar 컴포넌트만 독립적으로 사용하는 예시입니다.
            </p>
          </div>
        </div>
      </SidebarTemplate>
    </div>
  ),
};

/**
 * AI Assistant 템플릿만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: AI Assistant 컴포넌트의 독립적인 사용법 데모
 */
export const AIAssistantOnly: Story = {
  render: () => (
    <div className="bg-background h-screen w-full">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        {/* 메인 콘텐츠 영역 */}
        <ResizablePanel>
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center">
              <h2 className="mb-2 text-lg font-semibold">
                AI Assistant 템플릿
              </h2>
              <p className="text-muted-foreground text-sm">
                AI Assistant 컴포넌트만 독립적으로 사용하는 예시입니다.
              </p>
            </div>
          </div>
        </ResizablePanel>

        {/* AI Assistant 리사이즈 핸들 */}
        <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

        {/* AI Assistant 패널 (Default 스토리와 동일한 사이즈 정책) */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
          <AIAssistant
            onClose={() => {}}
            onStart={() => {}}
            className="h-full w-full"
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

/**
 * Figma 디자인 기반 탭 인터페이스만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Skuber Management의 실제 탭 네비게이션 구조 정확히 재현 (UIDL + shadcn 컴포넌트 기반)
 * ✨ 특징:
 * - 좌측: Separator + Button Group (ChevronLeft/ChevronRight 아이콘)
 * - 중앙: 활성 탭 (dark 배경, primary 하단 보더, X 아이콘)
 * - 우측: Disabled 탭들 + Separator 구분선
 * - 디자인 토큰 사용 (하드코딩 금지), shadcn 컴포넌트만 활용
 */
export const TabOnly: Story = {
  render: () => (
    <div className="bg-background h-screen w-full">
      {/* UIDL 기반 탭 네비게이션 바 - shadcn 컴포넌트 사용 */}
      <div className="bg-sidebar flex w-full items-center overflow-hidden">
        {/* 첫 번째 Separator - 탭 영역 시작 구분선 (Figma API 기반: 20px 높이) */}
        <Separator orientation="vertical" className="h-px w-5" />

        {/* 중앙 활성 탭 */}
        <div className="bg-background border-primary flex flex-col border-b-2">
          <Button
            variant="ghost"
            className="text-foreground h-10 justify-between gap-2 rounded-lg bg-transparent px-6 py-2 hover:bg-transparent"
          >
            <span className="text-sm font-medium">tabname</span>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* 두 번째 Separator - 활성 탭과 비활성 탭 사이 구분선 (Figma API 기반: 20px 높이) */}
        <Separator orientation="vertical" className="h-px w-5" />

        {/* 우측 영역 - Disabled 탭들 */}
        <div className="border-border/10 bg-sidebar flex flex-1 items-center border-b">
          {/* 첫 번째 Disabled 탭 */}
          <Button
            variant="ghost"
            disabled
            className="text-foreground h-10 rounded-lg bg-transparent px-6 py-2 opacity-50 hover:bg-transparent"
          >
            <span className="text-sm font-medium">tabname</span>
          </Button>

          {/* 세 번째 Separator - 비활성 탭 사이 구분선 (Figma API 기반: 20px 높이) */}
          <Separator orientation="vertical" className="h-px w-5" />

          {/* 두 번째 Disabled 탭 */}
          <Button
            variant="ghost"
            disabled
            className="text-foreground h-10 rounded-lg bg-transparent px-6 py-2 opacity-50 hover:bg-transparent"
          >
            <span className="text-sm font-medium">tabname</span>
          </Button>
        </div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold">Tab 템플릿</h2>
          <p className="text-muted-foreground text-sm">
            Tab 컴포넌트만 독립적으로 사용하는 예시입니다.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * VS Code Activity Bar 스타일의 Hotbar만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Hotbar 컴포넌트의 독립적인 사용법 데모
 * ✨ 특징:
 * - VS Code Activity Bar와 동일한 세로 아이콘 바
 * - Explorer, Search, Git, Extensions 등 주요 기능 아이콘
 * - 활성/비활성 상태 시각적 표시
 * - 하단에 Settings, Account 아이콘 배치
 */
export const HotbarOnly: Story = {
  render: () => {
    // 🎯 목적: 활성 아이템 상태 관리
    const [activeItem, setActiveItem] = React.useState("explorer");

    // 🎯 목적: 핫바 아이템 클릭 핸들러
    const handleItemClick = (itemId: string) => {
      setActiveItem(itemId);
    };

    return (
      <div className="bg-background flex h-screen w-full">
        {/* VS Code Activity Bar 스타일 핫바 */}
        <Hotbar
          activeItem={activeItem}
          onItemClick={handleItemClick}
          className="border-sidebar-border border-r"
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
              <span className="font-medium">{activeItem}</span>
            </p>
          </div>
        </div>
      </div>
    );
  },
};

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
import { X, Maximize2, Bell, FileText, FileJson } from "lucide-react";
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
export const Structure: Story = {
  render: () => {
    // 🎯 목적: AI Assistant 표시 상태 관리
    const [isAIAssistantVisible, setIsAIAssistantVisible] =
      React.useState(true);

    // 🎯 목적: 사이드바 표시 상태 관리
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);

    // 🎯 목적: 핫바 활성 아이템 상태 관리
    const [activeHotbarItem, setActiveHotbarItem] = React.useState("explorer");

    // 🎯 목적: 하단 패널 표시 상태 관리
    const [isPanelVisible, setIsPanelVisible] = React.useState(true);

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

    // 🎯 목적: 하단 패널 토글 핸들러
    const handlePanelBottomToggle = () => {
      setIsPanelVisible((prev) => !prev);
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
          onPanelBottomToggle={handlePanelBottomToggle}
          onAiAssistantToggle={handleAIAssistantToggle}
          isPanelLeftActive={isSidebarVisible}
          isPanelBottomActive={isPanelVisible}
          isAiAssistantActive={isAIAssistantVisible}
        />
        <div className="h-[calc(100vh-64px)] w-full">
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
                    <ResizableHandle className="w-0 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />
                  </>
                )}

                {/* 메인 콘텐츠 패널 - VS Code 스타일로 패널을 포함하는 상하 분할 */}
                <ResizablePanel>
                  {isPanelVisible ? (
                    <ResizablePanelGroup
                      direction="vertical"
                      className="h-full"
                    >
                      {/* 상단: 메인 콘텐츠 영역 */}
                      <ResizablePanel defaultSize={60} minSize={10}>
                        <div className="flex h-full flex-1 flex-col gap-4 lg:gap-6">
                          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                            <div className="bg-muted text-muted-foreground flex items-center justify-center gap-2 rounded-md px-3 py-2">
                              <span className="font-mono text-sm">
                                contents-area
                              </span>
                            </div>
                            <div className="text-center">
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

                      {/* 상하 구분 리사이즈 핸들 */}
                      <ResizableHandle className="h-1 cursor-row-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

                      {/* 하단: VS Code 스타일 패널 */}
                      <ResizablePanel
                        defaultSize={40}
                        minSize={15}
                        maxSize={90}
                      >
                        <div className="bg-background border-border flex h-full w-full flex-col border-t">
                          {/* 패널 헤더 - 탭 버튼들과 컨트롤 버튼들 */}
                          <div className="bg-background flex h-10 w-full items-center justify-between px-2">
                            {/* 좌측: 패널 탭 버튼들 */}
                            <div className="flex items-center gap-1">
                              {[
                                { id: "PROBLEMS", label: "PROBLEMS" },
                                { id: "OUTPUT", label: "OUTPUT" },
                                { id: "DEBUG_CONSOLE", label: "DEBUG CONSOLE" },
                                { id: "TERMINAL", label: "TERMINAL" },
                                { id: "PORTS", label: "PORTS" },
                              ].map((tab) => (
                                <Button
                                  key={tab.id}
                                  variant="ghost"
                                  size="sm"
                                  className={`text-foreground h-8 px-3 text-xs font-medium transition-colors ${
                                    tab.id === "TERMINAL"
                                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                      : "hover:bg-sidebar-accent/50"
                                  }`}
                                >
                                  {tab.label}
                                </Button>
                              ))}
                            </div>

                            {/* 우측: 컨트롤 버튼들 */}
                            <div className="flex items-center gap-1">
                              {/* 확장 버튼 */}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="text-muted-foreground hover:text-foreground h-8 w-8"
                                title="Maximize Panel Size"
                              >
                                <Maximize2 className="h-4 w-4" />
                              </Button>

                              {/* 닫기 버튼 */}
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={handlePanelBottomToggle}
                                className="text-muted-foreground hover:text-foreground h-8 w-8"
                                title="Close Panel"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          {/* 패널 콘텐츠 영역 */}
                          <div className="bg-background flex w-full flex-1 items-center justify-center p-6">
                            <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md px-3 py-2">
                              <span className="font-mono text-sm">
                                panel-area
                              </span>
                            </div>
                          </div>
                        </div>
                      </ResizablePanel>
                    </ResizablePanelGroup>
                  ) : (
                    // 패널이 닫혔을 때: 전체 화면 콘텐츠 영역
                    <div className="flex h-full flex-1 flex-col gap-4 lg:gap-6">
                      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                        <div className="bg-muted text-muted-foreground flex items-center justify-center gap-2 rounded-md px-3 py-2">
                          <span className="font-mono text-sm">
                            contents-area
                          </span>
                        </div>
                        <div className="text-center">
                          <p className="text-muted-foreground mt-2 text-xs">
                            현재 활성 핫바 아이템:{" "}
                            <span className="font-medium">
                              {activeHotbarItem}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </ResizablePanel>

                {/* AI Assistant 패널 */}
                {isAIAssistantVisible && (
                  <>
                    <ResizableHandle className="w-0 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />
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

        {/* Footer - 최하단 고정 */}
        <footer className="bg-sidebar border-border flex h-6 w-full shrink-0 items-center justify-between gap-2 overflow-hidden border-t px-2">
          {/* 좌측: 텍스트 */}
          <span className="text-muted-foreground text-sm leading-5">
            *temporary footer
          </span>

          {/* 우측: 버튼 그룹 */}
          <div className="flex items-center">
            {/* PanelBottom 아이콘 버튼 */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePanelBottomToggle}
              className={`text-muted-foreground hover:text-foreground h-6 w-6 rounded-lg bg-transparent p-1 ${
                isPanelVisible ? "" : "opacity-50"
              }`}
              title="Panel Bottom"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10H14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                  stroke="currentColor"
                  strokeWidth="1.33"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            {/* Bell 아이콘 버튼 */}
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground h-6 w-6 rounded-lg bg-transparent p-1"
              title="Notifications"
            >
              <Bell className="h-3 w-3" />
            </Button>
          </div>
        </footer>
      </div>
    );
  },
};

/**
 * Header 템플릿만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Header 컴포넌트의 독립적인 사용법 데모
 */
export const StructureHeader: Story = {
  render: () => (
    <div className="bg-background h-screen w-full">
      <Header
        searchQuery=""
        onSearchChange={() => {}}
        onNavigationBack={() => {}}
        onNavigationForward={() => {}}
        onPanelLeftToggle={() => {}}
        onPanelBottomToggle={() => {}}
        onAiAssistantToggle={() => {}}
        isPanelBottomActive={true}
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
export const StructureSidebar: Story = {
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
export const StructureAIAssistant: Story = {
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
 * UIDL 기반 탭 인터페이스만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: UIDL 명세서에 따른 실제 탭 네비게이션 구조 정확히 재현
 * ✨ 특징:
 * - 각 탭 왼쪽에 파일 타입별 아이콘 (FileText, FileJson)
 * - 모든 탭 사이에 세로 Separator 구분선
 * - 활성 탭: 어두운 배경, 파란색 하단 보더, 닫기 X 버튼
 * - 비활성 탭: 투명도 적용, 호버 시 우측에 X 아이콘 표시
 * - gap-6 (24px) 내부 요소 간격으로 UIDL 데이터 기반 정확한 구조
 */
export const StructureTab: Story = {
  render: () => {
    // 🎯 목적: 탭 목록 상태 관리 (탭 제거 기능을 위해)
    const [tabs, setTabs] = React.useState([
      { id: "active", name: "main.tsx", type: "active", icon: FileText },
      { id: "tab1", name: "config.json", type: "inactive", icon: FileJson },
      { id: "tab2", name: "data.json", type: "inactive", icon: FileJson },
    ]);

    // 🎯 목적: 각 탭의 호버 상태 관리
    const [hoveredTab, setHoveredTab] = React.useState<string | null>(null);

    // 🎯 목적: 탭 제거 핸들러
    const handleTabClose = (tabId: string) => {
      setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    };

    return (
      <div className="bg-background h-screen w-full">
        {/* UIDL 기반 탭 네비게이션 바 */}
        <div className="bg-sidebar border-border flex w-full items-center overflow-hidden border-b">
          {/* 동적 탭 렌더링 */}
          {tabs.map((tab) => (
            <React.Fragment key={tab.id}>
              {/* 활성 탭 또는 비활성 탭 */}
              {tab.type === "active" ? (
                // 활성 탭 - 어두운 배경과 파란색 하단 보더
                <div className="bg-background border-primary flex flex-col border-b-2">
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="text-foreground hover:bg-sidebar/50 h-10 justify-center rounded-lg bg-transparent px-3 py-2"
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClose(tab.id);
                      }}
                      className="hover:bg-muted/50 rounded-sm p-0.5 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Button>
                </div>
              ) : (
                // 비활성 탭 - 투명도 적용, 호버 시 배경 변경
                <Button
                  variant="ghost"
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="text-foreground hover:bg-sidebar-accent/30 h-10 rounded-lg bg-transparent px-3 py-2 opacity-70 transition-all duration-200 hover:opacity-100"
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{tab.name}</span>
                  {/* 호버 시에만 X 아이콘 표시 */}
                  {hoveredTab === tab.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClose(tab.id);
                      }}
                      className="hover:bg-muted/50 rounded-sm p-0.5 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </Button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="flex h-full items-center justify-center p-8">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Tab 템플릿</h2>
            <p className="text-muted-foreground text-sm">
              UIDL 기반 Tab 컴포넌트 - 파일 아이콘과 Separator가 포함된 VS Code
              스타일 탭 인터페이스입니다.
            </p>
            <p className="text-muted-foreground mt-2 text-xs">
              탭에 마우스를 올려보세요. 비활성 탭은 호버 시 X 아이콘이 나타나고,
              X 버튼을 클릭하면 탭이 제거됩니다.
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              남은 탭 수: <span className="font-medium">{tabs.length}</span>개
            </p>
          </div>
        </div>
      </div>
    );
  },
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
export const StructureHotbar: Story = {
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

/**
 * VS Code 스타일의 Footer만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: UIDL 기반 Footer 컴포넌트의 독립적인 사용법 데모
 * ✨ 특징:
 * - UIDL 명세서에 따른 Footer 레이아웃 구조
 * - 좌측: "*temporary footer" 텍스트
 * - 우측: PanelBottom, Bell 아이콘 버튼
 * - shadcn/ui 컴포넌트 활용 (Button, lucide-react 아이콘)
 */
export const StructureFooter: Story = {
  render: () => {
    return (
      <div className="bg-background h-screen w-full">
        {/* 메인 콘텐츠 영역 */}
        <div className="flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="text-center">
              <h2 className="mb-2 text-lg font-semibold">Footer 템플릿</h2>
              <p className="text-muted-foreground text-sm">
                UIDL 기반 Footer 컴포넌트만 독립적으로 사용하는 예시입니다.
              </p>
            </div>
          </div>

          {/* UIDL 기반 Footer */}
          <footer className="bg-sidebar border-border flex h-6 w-full shrink-0 items-center justify-between gap-2 overflow-hidden border-t px-2">
            {/* 좌측: 텍스트 */}
            <span className="text-muted-foreground text-sm leading-5">
              *temporary footer
            </span>

            {/* 우측: 버튼 그룹 */}
            <div className="flex items-center">
              {/* PanelBottom 아이콘 버튼 */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg bg-transparent p-2"
                title="Panel Bottom"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10H14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>

              {/* Bell 아이콘 버튼 */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground h-8 w-8 rounded-lg bg-transparent p-2"
                title="Notifications"
              >
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </footer>
        </div>
      </div>
    );
  },
};

/**
 * VS Code 스타일의 하단 패널만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: UIDL 기반 Panel 컴포넌트의 독립적인 사용법 데모
 * ✨ 특징:
 * - VS Code 하단 패널 스타일의 탭 인터페이스
 * - PROBLEMS, OUTPUT, DEBUG CONSOLE, TERMINAL, PORTS 탭
 * - 활성/비활성 탭 상태 시각적 표시
 * - 우측에 확장/닫기 버튼 배치
 */
export const StructurePanel: Story = {
  render: () => {
    // 🎯 목적: 활성 탭 상태 관리
    const [activeTab, setActiveTab] = React.useState("TERMINAL");

    // 🎯 목적: 패널 표시 상태 관리
    const [isPanelVisible, setIsPanelVisible] = React.useState(true);

    // 🎯 목적: 패널 탭 목록 정의
    const panelTabs = [
      { id: "PROBLEMS", label: "PROBLEMS" },
      { id: "OUTPUT", label: "OUTPUT" },
      { id: "DEBUG_CONSOLE", label: "DEBUG CONSOLE" },
      { id: "TERMINAL", label: "TERMINAL" },
      { id: "PORTS", label: "PORTS" },
    ];

    // 🎯 목적: 탭 클릭 핸들러
    const handleTabClick = (tabId: string) => {
      setActiveTab(tabId);
    };

    // 🎯 목적: 패널 닫기 핸들러
    const handlePanelClose = () => {
      setIsPanelVisible(false);
    };

    // 🎯 목적: 패널 확장 핸들러
    const handlePanelExpand = () => {
      console.log("Panel expand clicked");
    };

    if (!isPanelVisible) {
      return (
        <div className="bg-background flex h-screen w-full items-center justify-center">
          <div className="text-center">
            <h2 className="mb-2 text-lg font-semibold">Panel 템플릿</h2>
            <p className="text-muted-foreground text-sm">
              패널이 닫혔습니다. 새로고침하여 다시 확인하세요.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-background h-screen w-full">
        {/* 🎯 목적: VS Code 스타일 패널 컨테이너 - 리사이징 가능 */}
        <ResizablePanelGroup direction="vertical" className="h-full">
          {/* 상단: 메인 콘텐츠 영역 */}
          <ResizablePanel defaultSize={60} minSize={10}>
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center">
                <h2 className="mb-2 text-lg font-semibold">Panel 템플릿</h2>
                <p className="text-muted-foreground text-sm">
                  VS Code 스타일의 하단 패널 컴포넌트입니다.
                </p>
                <p className="text-muted-foreground mt-2 text-xs">
                  현재 활성 탭: <span className="font-medium">{activeTab}</span>
                </p>
              </div>
            </div>
          </ResizablePanel>

          {/* 상하 구분 리사이즈 핸들 */}
          <ResizableHandle className="h-1 cursor-row-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

          {/* 하단: VS Code 스타일 패널 - 리사이징 가능 */}
          <ResizablePanel defaultSize={40} minSize={15} maxSize={90}>
            <div className="bg-background border-border flex h-full w-full flex-col border-t">
              {/* 패널 헤더 - 탭 버튼들과 컨트롤 버튼들 */}
              <div className="bg-background flex h-10 w-full items-center justify-between px-2">
                {/* 좌측: 패널 탭 버튼들 */}
                <div className="flex items-center gap-1">
                  {panelTabs.map((tab) => (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleTabClick(tab.id)}
                      className={`text-foreground h-8 px-3 text-xs font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent/50"
                      }`}
                    >
                      {tab.label}
                    </Button>
                  ))}
                </div>

                {/* 우측: 컨트롤 버튼들 */}
                <div className="flex items-center gap-1">
                  {/* 확장 버튼 */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePanelExpand}
                    className="text-muted-foreground hover:text-foreground h-8 w-8"
                    title="Maximize Panel Size"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>

                  {/* 닫기 버튼 */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handlePanelClose}
                    className="text-muted-foreground hover:text-foreground h-8 w-8"
                    title="Close Panel"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* 패널 콘텐츠 영역 */}
              <div className="bg-background flex w-full flex-1 items-center justify-center p-6">
                <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md px-3 py-2">
                  <span className="font-mono text-sm">panel-area</span>
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

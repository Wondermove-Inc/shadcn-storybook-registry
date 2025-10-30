import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Welcome } from "./welcome";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, FileText, FileJson, Terminal } from "lucide-react";

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

/**
 * 탭과 함께 표시된 Welcome 페이지 - BaseStructure의 StructureTab 적용
 */
export const WithTabs: Story = {
  render: () => {
    // 🎯 목적: 탭 목록 상태 관리 (BaseStructure StructureTab에서 가져옴)
    const [tabs, setTabs] = React.useState([
      { id: "welcome", name: "Welcome", type: "active", icon: FileText },
      {
        id: "explorer",
        name: "File Explorer",
        type: "inactive",
        icon: FileJson,
      },
      { id: "terminal", name: "Terminal", type: "inactive", icon: Terminal },
    ]);

    // 🎯 목적: 각 탭의 호버 상태 관리
    const [hoveredTab, setHoveredTab] = React.useState<string | null>(null);

    // 🎯 목적: 탭 제거 핸들러
    const handleTabClose = (tabId: string) => {
      if (tabs.length === 1) return;
      setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    };

    // 🎯 목적: 탭 클릭 시 활성 탭 전환 핸들러
    const handleTabClick = (tabId: string) => {
      setTabs((prevTabs) =>
        prevTabs.map((tab) => ({
          ...tab,
          type: tab.id === tabId ? "active" : "inactive",
        })),
      );
    };

    return (
      <div className="flex h-screen w-full flex-col">
        {/* BaseStructure StructureTab 기반 탭 네비게이션 바 */}
        <div className="bg-sidebar border-border flex min-h-[40px] w-full items-center overflow-hidden border-b">
          {/* 동적 탭 렌더링 */}
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              {/* 활성 탭 또는 비활성 탭 */}
              {tab.type === "active" ? (
                // 활성 탭 - 어두운 배경과 파란색 상단 보더, 하단 보더를 덮음, primary 아이콘, bold italic 텍스트
                <div className="bg-background border-primary after:bg-background relative z-10 -mb-px flex flex-col border-t-2 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-20 after:h-px">
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => handleTabClick(tab.id)}
                    className="text-foreground hover:bg-sidebar/50 h-10 justify-center rounded-none border-0 bg-transparent px-3 py-2 hover:border-0 focus-visible:border-0 active:border-0"
                  >
                    <tab.icon className="text-primary h-4 w-4" />
                    <span className="text-sm font-bold font-medium italic">
                      {tab.name}
                    </span>
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
                // 비활성 탭 - 더 약한 투명도와 배경, 호버 시 배경 변경, 하단 border 포함
                <div className="border-border relative border-b">
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => handleTabClick(tab.id)}
                    className="text-foreground hover:bg-sidebar-accent/30 bg-muted/20 h-10 rounded-none border-0 px-3 py-2 opacity-50 transition-all duration-200 hover:border-0 hover:opacity-100 focus-visible:border-0 active:border-0"
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                    {/* 🎯 목적: X 버튼을 항상 렌더링하여 공간 확보, hover 시에만 표시 */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClose(tab.id);
                      }}
                      className={`hover:bg-muted/50 rounded-sm p-0.5 transition-all ${
                        hoveredTab === tab.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Button>
                </div>
              )}

              {/* 탭 사이에 Separator 추가 (마지막 탭 제외) */}
              {index < tabs.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-border h-10 w-px"
                  style={{ height: "40px", width: "1px" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Welcome 컴포넌트 - showTabs=false로 내부 탭 숨김 */}
        <Welcome showTabs={false} />
      </div>
    );
  },
};

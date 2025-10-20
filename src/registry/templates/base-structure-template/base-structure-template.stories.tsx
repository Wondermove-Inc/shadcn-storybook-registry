import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseStructureTemplate } from "./base-structure-template";
import { Header } from "@/registry/templates/header/header";
import { SidebarTemplate } from "@/registry/templates/sidebar/sidebar";
import { AIAssistant } from "@/registry/templates/ai-assistant/ai-assistant";

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
 * 🎯 목적: 모듈화된 Header와 Sidebar가 결합된 완전한 레이아웃 데모
 */
export const Default: Story = {};

/**
 * Header 템플릿만 독립적으로 표시하는 스토리입니다.
 *
 * 🎯 목적: Header 컴포넌트의 독립적인 사용법 데모
 */
export const HeaderOnly: Story = {
  render: () => (
    <div className="h-screen w-full">
      <Header
        searchQuery=""
        onSearchChange={() => {}}
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
      <SidebarTemplate>
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
    <div className="bg-background flex h-screen w-full">
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold">AI Assistant 템플릿</h2>
          <p className="text-muted-foreground text-sm">
            AI Assistant 컴포넌트만 독립적으로 사용하는 예시입니다.
          </p>
        </div>
      </div>
      <AIAssistant
        onClose={() => {}}
        onStart={() => {}}
        className="w-[400px] shrink-0"
      />
    </div>
  ),
};

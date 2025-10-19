import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseStructureTemplate } from "./base-structure-template";

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
      <div >
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
 * 커스텀 콘텐츠가 포함된 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: children prop을 통한 콘텐츠 커스터마이징 예시
 */
export const WithCustomContent: Story = {
  render: () => (
    <BaseStructureTemplate>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">커스텀 콘텐츠 영역</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-sm font-semibold">카드 1</h3>
            <p className="text-muted-foreground text-xs">
              이곳에 실제 애플리케이션 콘텐츠를 배치할 수 있습니다.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-sm font-semibold">카드 2</h3>
            <p className="text-muted-foreground text-xs">
              Header와 Sidebar는 독립적으로 동작합니다.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-sm font-semibold">카드 3</h3>
            <p className="text-muted-foreground text-xs">
              모든 shadcn/ui 컴포넌트와 호환됩니다.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="mb-2 text-sm font-semibold">카드 4</h3>
            <p className="text-muted-foreground text-xs">
              반응형 디자인을 지원합니다.
            </p>
          </div>
        </div>
      </main>
    </BaseStructureTemplate>
  ),
};

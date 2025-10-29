import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingOverlay } from "@/components/ui/loading-overlay";

/**
 * LoadingOverlay 템플릿은 전체 화면 로딩 상태를 표시하는 데 사용됩니다.
 * shadcn/ui Spinner 컴포넌트와 심플한 배경 딤드를 활용한 심플하고 일관성 있는 디자인입니다.
 *
 * 🎯 목적: 애플리케이션 전체에서 일관된 로딩 상태 표시
 * ✨ 특징: Context API 기반 글로벌 상태 관리, useLoading 훅 제공
 */
const meta: Meta<typeof LoadingOverlay> = {
  title: "templates/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `글로벌 로딩 상태 관리를 위한 LoadingOverlay 템플릿입니다. LoadingProvider와 useLoading 훅을 통해 애플리케이션 전체에서 일관된 로딩 상태를 제공합니다.`,
      },
    },
  },
} satisfies Meta<typeof LoadingOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 LoadingOverlay - 메시지 없이 스피너만 표시
 */
export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full">
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-2 text-lg font-semibold">페이지 콘텐츠</h2>
          <p className="text-muted-foreground text-sm">
            로딩 오버레이가 이 콘텐츠 위에 표시됩니다.
          </p>
        </div>
      </div>
      <LoadingOverlay isVisible={true} />
    </div>
  ),
};

import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingOverlay } from "@/components/ui/loading-overlay";

/**
 * LoadingOverlay 템플릿은 전체 화면 로딩 상태를 표시하는 데 사용됩니다.
 * shadcn/ui Spinner 컴포넌트와 심플한 배경 딤드를 활용한 심플하고 일관성 있는 디자인입니다.
 *
 * 🎯 목적: 애플리케이션 전체에서 일관된 로딩 상태 표시
 * ✨ 특징: Context API 기반 글로벌 상태 관리, useLoading 훅 제공
 *
 * 📦 설치 방법:
 * 이 컴포넌트는 shadcn/ui 공식 컴포넌트가 아닌 커스텀 레지스트리의 컴포넌트입니다.
 * 팀/프로젝트 내에서 공유 가능한 커스텀 컴포넌트로, shadcn CLI와 호환되는 형식으로 제작되었습니다.
 *
 * ```bash
 * # 커스텀 레지스트리에서 설치
 * npx shadcn@latest add https://registry.lloydrichards.dev/v2/r/loading-overlay-template.json
 *
 * # 로컬 개발 시 테스트
 * npx shadcn@latest add http://localhost:3000/v2/r/loading-overlay-template.json
 * ```
 */
const meta: Meta<typeof LoadingOverlay> = {
  title: "templates/LoadingOverlay",
  component: LoadingOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
글로벌 로딩 상태 관리를 위한 LoadingOverlay 템플릿입니다. LoadingProvider와 useLoading 훅을 통해 애플리케이션 전체에서 일관된 로딩 상태를 제공합니다.

## 📦 설치 방법

이 컴포넌트는 **shadcn/ui 공식 컴포넌트가 아닌** 커스텀 레지스트리의 컴포넌트입니다.
팀/프로젝트 내에서 공유 가능한 커스텀 컴포넌트로, shadcn CLI와 호환되는 형식으로 제작되었습니다.

\`\`\`bash
# 커스텀 레지스트리에서 설치
npx shadcn@latest add https://registry.lloydrichards.dev/v2/r/loading-overlay-template.json

# 로컬 개발 시 테스트
npx shadcn@latest add http://localhost:3000/v2/r/loading-overlay-template.json
\`\`\`

## ✨ 주요 특징

- **검은색 딤드 배경**: Light/Dark 모드 모두 일관된 효과 (bg-black/50)
- **흰색 스피너**: 테마 변경과 관계없이 일관된 흰색 (text-white)
- **다양한 크기**: sm, md, lg, xl 4가지 크기 지원
- **Context API**: 글로벌 상태 관리로 어디서든 사용 가능
- **접근성**: aria-label과 role 속성으로 스크린 리더 지원
        `,
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

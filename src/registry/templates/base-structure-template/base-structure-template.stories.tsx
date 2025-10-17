import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BaseStructureTemplate } from "./base-structure-template";

/**
 * A comprehensive base structure template showcasing a file explorer interface.
 *
 * 🎯 목적: 파일 탐색기 인터페이스를 제공하는 완전한 베이스 구조 템플릿
 *
 * ## 주요 기능
 *
 * - **계층적 파일 트리**: 접을 수 있는 폴더와 파일 구조 탐색
 * - **파일 검색**: 실시간 파일 검색 기능
 * - **파일 미리보기**: 선택된 파일의 내용 표시 (TSX, CSS, JSON 지원)
 * - **AI 어시스턴트**: 코드 분석 및 질문 답변을 위한 채팅 인터페이스
 * - **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원
 * - **다크 모드**: 라이트/다크 테마 자동 지원
 *
 * ## 사용된 shadcn/ui 컴포넌트
 *
 * - **Sidebar**: 메인 사이드바 레이아웃 및 네비게이션
 * - **Input**: 파일 검색 입력 필드
 * - **Button**: 액션 버튼들 (저장, 공유, 설정 등)
 * - **Card**: 파일 내용 표시 카드
 * - **Badge**: 파일 확장자 표시
 * - **Collapsible**: 접을 수 있는 폴더 구조
 * - **Separator**: 시각적 구분선
 *
 * ## 설치 방법
 *
 * ```bash
 * npx shadcn@latest add base-structure-template
 * ```
 *
 * 이 명령으로 파일 탐색기 템플릿과 모든 필요한 의존성을 설치할 수 있습니다.
 */
const meta = {
  title: "templates/BaseStructure",
  component: BaseStructureTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
파일 탐색기 인터페이스를 제공하는 완전한 베이스 구조 템플릿입니다.

## 특징

- **📁 파일 트리**: 계층적 폴더/파일 구조 탐색
- **🔍 검색**: 실시간 파일 검색 기능
- **👁️ 미리보기**: 파일 내용 표시 (TSX, CSS, JSON)
- **🤖 AI 어시스턴트**: 코드 분석 및 질문 답변
- **📱 반응형**: 모바일/데스크톱 지원
- **🎨 테마**: 라이트/다크 모드 자동 지원

## 사용 사례

- 코드 에디터 인터페이스
- 파일 관리 시스템
- 프로젝트 탐색기
- 개발자 도구 대시보드
- 문서 관리 플랫폼

## 구성 요소

### 사이드바
- 파일 트리 네비게이션
- 검색 입력 필드
- 폴더 접기/펼치기

### 메인 영역
- 파일 내용 미리보기
- 구문 강조 표시
- 빈 상태 메시지

### AI 패널
- 채팅 인터페이스
- 컨텍스트 인식 도움말
- 파일별 맞춤 제안
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", display: "flex" }}>
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
 * 🎯 목적: 완전한 파일 탐색기 인터페이스 데모
 *
 * 이 스토리는 다음과 같은 기능을 보여줍니다:
 * - 왼쪽 사이드바의 파일 트리 탐색
 * - 상단 헤더의 검색 및 액션 버튼
 * - 중앙 메인 영역의 파일 내용 표시
 * - 우측 AI 어시스턴트 패널
 *
 * **사용법**:
 * 1. 사이드바에서 폴더를 클릭해서 펼치거나 접으세요
 * 2. 파일을 클릭하면 메인 영역에 내용이 표시됩니다
 * 3. 검색 필드에 파일명을 입력해 검색해보세요
 * 4. AI 어시스턴트에게 코드에 대해 질문해보세요
 */
export const Default: Story = {};

/**
 * 다크 모드가 활성화된 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: 다크 테마에서의 UI 표시 확인
 *
 * 모든 컴포넌트가 다크 모드에서 올바르게 표시되는지 확인할 수 있습니다:
 * - 배경색과 텍스트 색상의 대비
 * - 버튼과 입력 필드의 가독성
 * - 파일 확장자 배지의 색상 조화
 * - AI 어시스턴트 패널의 테마 적용
 */
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div className="dark" style={{ height: "100vh", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * 모바일 반응형 뷰의 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: 모바일 디바이스에서의 사용성 확인
 *
 * 모바일 환경에서의 주요 변화:
 * - 사이드바가 기본적으로 숨겨져 있음
 * - 햄버거 메뉴 버튼으로 사이드바 토글
 * - AI 어시스턴트 패널이 하단으로 이동
 * - 터치 친화적인 버튼 크기
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * 태블릿 반응형 뷰의 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: 태블릿 디바이스에서의 레이아웃 최적화 확인
 *
 * 태블릿 환경에서의 주요 특징:
 * - 사이드바와 메인 영역의 균형잡힌 비율
 * - AI 어시스턴트 패널의 적절한 너비
 * - 터치와 마우스 상호작용 모두 지원
 * - 세로/가로 방향 모두 최적화
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

/**
 * 사이드바가 축소된 상태의 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: 공간 효율성을 위한 축소 레이아웃 확인
 *
 * 이 스토리는 제한된 화면 공간에서의 사용성을 보여줍니다:
 * - 메인 콘텐츠 영역 확대
 * - 사이드바 토글 기능 활용
 * - 필수 기능들의 접근성 유지
 */
export const CollapsedSidebar: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", display: "flex", width: "1200px" }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * AI 어시스턴트 패널에 포커스된 베이스 구조 템플릿입니다.
 *
 * 🎯 목적: AI 상호작용 기능 강조 표시
 *
 * 이 변형은 AI 어시스턴트의 기능을 중점적으로 보여줍니다:
 * - 선택된 파일에 대한 컨텍스트 인식
 * - 채팅 인터페이스의 직관적 사용법
 * - 코드 분석 및 질문 답변 예시
 */
export const WithAIFocus: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartData } from "./chart-data";

/**
 * 🎯 목적: 스크린샷 기반 차트 데이터 대시보드 컴포넌트
 *
 * 스크린샷 디자인을 정확히 따라 구현된 다크 테마 대시보드 템플릿입니다.
 * shadcn/ui 컴포넌트(ToggleGroup, Chart, Card, Table)만을 사용하여 구현되었습니다.
 *
 * 구조:
 * - 상단: {Menuname} 텍스트와 Master/Worker 노드 토글
 * - 왼쪽: Hourly usage 바 차트 (파란색) + CPU/Memory 토글
 * - 오른쪽: Usage Type Distribution Chart - 3개의 Radial 차트 (CPU, Memory, Pods)
 * - 하단: ⚠️ Warnings (3) 섹션과 테이블
 * - 배경색: 완전 검은색 (#000000)
 */
const meta: Meta<typeof ChartData> = {
  title: "templates/Contents/Chart Data",
  component: ChartData,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
### ChartData 컴포넌트

스크린샷 디자인을 정확히 구현한 다크 테마 시스템 모니터링 대시보드입니다.

#### 구성 요소

- **헤더**: {Menuname} 텍스트와 Master/Worker Nodes 토글
- **Hourly usage 차트**: 파란색 바 차트로 시간별 사용량 표시 (3.7GiB)
- **Usage Type Distribution Chart**: CPU, Memory, Pods 3개의 동심원 Radial 차트
- **Warnings 섹션**: 노란색 경고 아이콘과 5개 행의 테이블

#### 사용된 shadcn/ui 컴포넌트

- **ToggleGroup**: Master/Worker 노드 및 CPU/Memory 전환
- **Chart**: BarChart (시간별 사용량), RadialBarChart (리소스 분포)
- **Card**: 차트와 테이블을 감싸는 카드 컴포넌트
- **Table**: 경고 정보를 표시하는 테이블
- **Badge**: Verified 상태 표시

#### 디자인 특징

- 완전 검은색 배경 (#000000)
- 회색 계열 카드 배경 (#1a1a1a)
- 파란색 차트와 토글 강조색
- 반응형 레이아웃
        `,
      },
    },
  },
} satisfies Meta<typeof ChartData>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 🎯 목적: 기본 차트 데이터 대시보드 표시
 *
 * 스크린샷과 동일한 전체 대시보드 뷰입니다.
 * 검은색 배경에 모든 차트와 테이블이 표시됩니다.
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
시스템 모니터링을 위한 기본 대시보드입니다.

- **헤더**: Master/Worker Nodes 토글로 노드 타입 전환
- **Hourly usage**: 15:00-20:00 시간대의 사용량을 파란색 바 차트로 표시
- **Usage Type Distribution**: CPU, Memory, Pods의 사용량을 동심원 차트로 시각화
- **Warnings**: 5개의 경고 항목을 테이블로 표시 (Badge, Verified 뱃지 포함)
        `,
      },
    },
  },
};

/**
 * 🎯 목적: 컴팩트한 모바일 뷰 시뮬레이션
 *
 * 모바일 기기에서의 레이아웃과 사용성을 확인할 수 있는 뷰입니다.
 * 차트가 세로로 배열되고 컨트롤이 적절히 배치됩니다.
 */
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: `
모바일 화면에 최적화된 레이아웃입니다.

- 차트가 세로로 스택 배열
- 토글 컨트롤이 컴팩트하게 배치
- 테이블이 모바일에 적합한 형태로 조정
- 터치 인터랙션 최적화
        `,
      },
    },
  },
};

/**
 * 🎯 목적: 다크 테마에서의 차트 표시
 *
 * 다크 모드에서 차트와 UI 요소들이 적절히 표시되는지 확인합니다.
 */
export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: `
다크 테마 적용 시의 모습입니다.

- 차트 색상이 다크 테마에 맞게 조정
- 텍스트와 배경의 적절한 대비
- 경고 뱃지 색상이 다크 모드에서도 가독성 유지
        `,
      },
    },
  },
};

/**
 * 🎯 목적: 커스텀 스타일링 예제
 *
 * className을 통해 추가적인 스타일링을 적용한 예제입니다.
 */
export const CustomStyling: Story = {
  args: {
    className:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900",
  },
  parameters: {
    docs: {
      description: {
        story: `
커스텀 배경 그라데이션이 적용된 버전입니다.

- 브랜드 색상에 맞춘 배경 그라데이션
- 차트와 카드의 투명도 조정
- 전체적인 비주얼 일관성 유지
        `,
      },
    },
  },
};

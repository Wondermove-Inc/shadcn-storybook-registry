# Color Display Issue & Storybook Ref Examples Plan

**Created**: 2025-01-15
**Updated**: 2025-01-15 (옵션 C 승인, 계획 재수립)
**Status**: Active - Ready to Implement
**Estimated Time**: 45분 (Phase 1) ~ 2시간 50분 (전체)

## Overview

사용자가 제기한 두 가지 이슈를 해결하기 위한 계획:

### ✅ Phase 1: Color Story 통합 (옵션 C - 확정)
- **문제**: color.stories.tsx 색상 미표시 + colors.stories.tsx와 중복
- **해결**: 두 파일의 장점을 결합한 통합 Color Story 생성
  - shadcn 디자인 토큰 (Table 형식, 다크모드 감지)
  - Tailwind 전체 팔레트 (Grid 형식)
  - 단일 진실 공급원 (Single Source of Truth)

### Phase 2: Storybook Ref 예제 추가 (선택적)
- 주요 컴포넌트 스토리에 ref 사용 예제 및 play function 테스트 추가
- 5개 컴포넌트 권장: Button, Input, Card, Dialog, Form

## Problem Analysis

### 1. Color vs Colors 파일 분석

현재 상황:
- **`src/registry/tokens/color-story/color.stories.tsx`** (등록됨)
  - **Title**: `foundation/Color`
  - **Registry Name**: `color-story`
  - **Registry Dependencies**: `table`
  - **Purpose**: shadcn/ui 디자인 시스템 토큰 (CSS 변수 기반)
  - **Display Method**: `getComputedStyle()`로 CSS 변수 값을 읽어서 `hsl()` 형식으로 표시
  - **Content**: --background, --primary, --card 등 실제 프로젝트에서 사용되는 디자인 토큰

- **`src/registry/foundation/colors/colors.stories.tsx`** (미등록)
  - **Title**: `foundation/Colors`
  - **Registry Name**: 없음 (registry.json에 미등록)
  - **Registry Dependencies**: 없음
  - **Purpose**: Tailwind CSS 전체 색상 팔레트 (하드코딩된 hex 값)
  - **Display Method**: Tailwind 색상 객체 직접 사용 + shadcn 토큰은 Tailwind 클래스 적용
  - **Content**: slate, gray, zinc 등 Tailwind 전체 색상 + shadcn 토큰

### 2. 차이점 및 문제점

**차이점**:
- `color-story`: 디자인 시스템 토큰 문서화 (registry에 등록됨)
- `colors`: Tailwind 전체 팔레트 + 토큰 (registry에 미등록, 중복 성격)

**문제점**:
1. **중복 성격**: 두 파일 모두 shadcn 토큰을 표시하고 있어 역할이 겹침
2. **Registry 불일치**: colors.stories.tsx는 registry.json에 등록되지 않음
3. **표시 방식 차이**: color는 CSS 변수 직접 읽기, colors는 Tailwind 클래스 사용
4. **색상 표시 가능성**: "color은 컬러가 표시되지 않습니다"는 사용자 피드백

## Tasks

### Phase 1: Color Display Investigation (필수)

#### Task 1-1: Color Story 실제 표시 확인
- [ ] Storybook 실행 후 `foundation/Color` 스토리 확인
- [ ] 각 스토리(Primary, Surface, State, Border, Chart, Sidebar)에서 색상이 정상 표시되는지 검증
- [ ] 색상이 표시되지 않는다면 원인 파악 (CSS 변수 로딩 타이밍, HSL 형식 문제 등)

**예상 소요 시간**: 15분

#### Task 1-2: Colors Story 실제 표시 확인
- [ ] Storybook 실행 후 `foundation/Colors` 스토리 확인
- [ ] shadcn 토큰 섹션과 Tailwind 팔레트 섹션 모두 확인
- [ ] 다크모드 전환 시 색상 업데이트 확인

**예상 소요 시간**: 10분

#### Task 1-3: 통합 Color Story 구현 (옵션 C - 권장)

**✅ 최종 결정**: 옵션 C - 두 파일의 장점을 결합한 새로운 통합 파일 생성

**선택 이유 (재분석)**:
1. **완전성**: shadcn 토큰 + Tailwind 팔레트 모두 제공 (가장 완전한 문서화)
2. **최고의 UX**: Table 형식 (color-story 장점) + 다크모드 감지 (colors 장점)
3. **중복 완전 제거**: 하나의 명확한 색상 문서만 존재
4. **확장성**: 미래에 추가 색상 시스템 통합 가능
5. **유지보수성**: 단일 진실 공급원 (Single Source of Truth)
6. **시간 투자**: 45분으로 합리적, 장기적으로 큰 이득

**구현 세부 계획**:

##### Step 1: 새 파일 구조 설계 (10분)
- [ ] 파일 위치: `src/registry/tokens/color-story/color.stories.tsx` (기존 파일 교체)
- [ ] Storybook 타이틀: `design/Color` (카테고리 명확화)
- [ ] 구조:
  ```
  1. Shadcn Design Tokens (Table 형식)
     - Primary, Surface, State, Border, Chart, Sidebar
  2. Tailwind Color Palette (Grid 형식)
     - 22개 색상 × 11개 shade = 242개 색상
  ```

##### Step 2: Shadcn Tokens 섹션 구현 (15분)
- [ ] `color-story`의 Table 구조 재사용 (이미 잘 설계됨)
- [ ] `document.body` → `document.documentElement` 버그 수정
- [ ] 다크모드 실시간 감지 추가 (`colors`의 MutationObserver 패턴)
- [ ] 6개 카테고리 유지: Primary, Surface, State, Border, Chart, Sidebar

##### Step 3: Tailwind Palette 섹션 구현 (15분)
- [ ] `colors`의 Tailwind 색상 객체 재사용
- [ ] Grid 레이아웃으로 깔끔한 표시
- [ ] 각 색상별로 접을 수 있는 Collapsible 추가 (선택적)

##### Step 4: Registry 및 파일 정리 (5분)
- [ ] `registry.json`의 `color-story` 항목 유지 (dependencies 확인)
- [ ] 기존 `color.stories.tsx` 백업 후 새 파일로 교체
- [ ] `colors.stories.tsx` 파일 삭제

**예상 소요 시간**: 45분

**대체 옵션 (기각)**:
- ~~옵션 A~~: 버그 수정만 하고 colors 삭제 - Tailwind 팔레트 손실
- ~~옵션 B~~: colors 유지, color 삭제 - Table UX 손실, Registry 재작업 필요

### Phase 2: Storybook Ref Examples (선택적)

#### Task 2-1: 주요 컴포넌트 선정
다음 컴포넌트들에 ref 예제를 추가할 것을 제안:
- [ ] Button (가장 기본적인 ref 사용)
- [ ] Input (focus 제어 예제)
- [ ] Card (scroll 관련 예제)
- [ ] Dialog (Radix UI primitive ref 예제)
- [ ] Form (react-hook-form ref 통합 예제)

**선정 이유**: 다양한 ref 사용 패턴을 보여줄 수 있는 대표적인 컴포넌트들

**예상 소요 시간**: 10분

#### Task 2-2: Ref Example Story 작성 패턴 정의
각 컴포넌트에 추가할 스토리 구조:
```typescript
/**
 * Ref 사용 예제: 컴포넌트에 ref를 전달하여 DOM 요소에 직접 접근합니다.
 */
export const WithRef: Story = {
  tags: ["!dev", "!autodocs"], // 테스트 전용 스토리
  render: () => {
    const ref = useRef<HTMLButtonElement>(null);

    return (
      <div className="space-y-4">
        <Button
          ref={ref}
          onClick={() => {
            console.log("Button element:", ref.current);
          }}
        >
          Click Me
        </Button>
        <Button
          variant="outline"
          onClick={() => ref.current?.focus()}
        >
          Focus Button Above
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole('button');

    // Ref를 통한 focus 테스트
    await userEvent.click(buttons[1]); // "Focus Button Above" 클릭
    await expect(buttons[0]).toHaveFocus();
  }
};
```

**예상 소요 시간**: 20분

#### Task 2-3: Button Story에 Ref 예제 추가
- [ ] `src/registry/atoms/button-story/button.stories.tsx` 파일 읽기
- [ ] WithRef 스토리 추가 (useRef 훅, play function 포함)
- [ ] TypeScript 타입 안전성 확인

**예상 소요 시간**: 20분

#### Task 2-4: Input Story에 Ref 예제 추가
- [ ] `src/registry/atoms/input-story/input.stories.tsx` 파일 읽기
- [ ] WithRef 스토리 추가 (focus 제어 예제)
- [ ] play function으로 focus 테스트

**예상 소요 시간**: 20분

#### Task 2-5: Card Story에 Ref 예제 추가
- [ ] `src/registry/atoms/card-story/card.stories.tsx` 파일 읽기
- [ ] WithRef 스토리 추가 (scroll 관련 예제)
- [ ] play function으로 ref 접근 테스트

**예상 소요 시간**: 20분

#### Task 2-6: Dialog Story에 Ref 예제 추가 (Radix UI)
- [ ] `src/registry/atoms/dialog-story/dialog.stories.tsx` 파일 읽기
- [ ] WithRef 스토리 추가 (ElementRef 사용 예제)
- [ ] Radix UI primitive ref forwarding 확인

**예상 소요 시간**: 25분

#### Task 2-7: Form Story에 Ref 예제 추가
- [ ] `src/registry/atoms/form-story/form.stories.tsx` 파일 읽기
- [ ] WithRef 스토리 추가 (react-hook-form ref 통합)
- [ ] play function으로 form validation 테스트

**예상 소요 시간**: 30분

#### Task 2-8: 검증 및 테스트
- [ ] `npm run lint` - ESLint 검사
- [ ] `npm run type-check` - TypeScript 타입 검증
- [ ] `npm run storybook` - Storybook에서 모든 ref 예제 확인
- [ ] play function이 모든 ref 스토리에서 정상 작동하는지 확인

**예상 소요 시간**: 20분

## Relevant Files

### Color Investigation
- `src/registry/tokens/color-story/color.stories.tsx` - 디자인 시스템 토큰 스토리 (등록됨)
- `src/registry/foundation/colors/colors.stories.tsx` - Tailwind 색상 팔레트 스토리 (미등록)
- `registry.json` - Registry 설정 파일

### Ref Examples
- `src/registry/atoms/button-story/button.stories.tsx` - Button 컴포넌트 스토리
- `src/registry/atoms/input-story/input.stories.tsx` - Input 컴포넌트 스토리
- `src/registry/atoms/card-story/card.stories.tsx` - Card 컴포넌트 스토리
- `src/registry/atoms/dialog-story/dialog.stories.tsx` - Dialog 컴포넌트 스토리
- `src/registry/atoms/form-story/form.stories.tsx` - Form 컴포넌트 스토리

## Notes

### Color Display Issue - 원인 발견 ✅
- 사용자 피드백: "color은 컬러가 표시되지 않습니다"
- **확인된 원인**: `color.stories.tsx:19`에서 `document.body` 사용 (❌)
  - CSS 변수는 `:root` (document.documentElement)에 정의됨
  - `document.body`에서 읽으면 빈 값 반환 → 색상 표시 안 됨
- **해결 방법**: `document.documentElement` 사용 (colors.stories.tsx는 이미 올바르게 구현됨)

### Ref Examples Best Practices
1. **TypeScript 타입 안전성**: `useRef<HTMLButtonElement>(null)` 형식 사용
2. **Play Function**: `@storybook/test` 패키지의 `within`, `userEvent`, `expect` 사용
3. **태그 설정**: `tags: ["!dev", "!autodocs"]`로 테스트 전용 스토리 표시
4. **한국어 주석**: 모든 ref 관련 코드에 한국어 설명 추가
5. **React 18/19 호환성**: 모든 컴포넌트가 이미 forwardRef 적용되어 있음

### Time Estimates (Updated)
- **Phase 1 (Color Integration)**: 45분
  - 파일 구조 설계: 10분
  - Shadcn Tokens 구현: 15분
  - Tailwind Palette 구현: 15분
  - Registry 및 정리: 5분
- **Phase 2 (Ref Examples)**: 2시간 5분 (선택적)
  - 컴포넌트 선정 및 패턴 정의: 30분
  - 5개 컴포넌트 ref 예제 추가: 115분
  - 검증 및 테스트: 20분
- **Total**: 45분 (Phase 1만) ~ 2시간 50분 (전체)

## Decision Points

### ✅ 확정된 결정
1. **Color 파일 통합**: ~~옵션 A/B~~ → **옵션 C 선택** (사용자 승인 완료)
   - 두 파일의 장점을 결합한 통합 Color Story 구현
   - shadcn 토큰 (Table) + Tailwind 팔레트 (Grid)
   - 단일 진실 공급원 (Single Source of Truth)

### 남은 결정 사항
2. **Ref 예제 범위**: 5개 컴포넌트 전부 vs 일부만 구현
   - **옵션 A**: 5개 전부 (Button, Input, Card, Dialog, Form) - 2시간 5분
   - **옵션 B**: 핵심 3개만 (Button, Input, Dialog) - 1시간 5분

   **권장**: 옵션 A (완전한 문서화, 다양한 ref 패턴 제시)

### 진행 체크포인트
- [x] ~~Color 파일 정리 방향 확정~~ (옵션 C 선택 완료)
- [ ] Phase 1 완료 후 사용자에게 보고 및 확인
- [ ] Phase 2 진행 여부 및 범위 최종 결정

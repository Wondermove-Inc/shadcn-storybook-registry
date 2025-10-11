# Lint 및 TypeCheck 문제 해결 계획

**작성일**: 2025-01-11
**상태**: 진행 중
**브랜치**: react-18-19-dual-support

## 📋 개요

프로젝트의 ESLint와 TypeScript type checking에서 발생하는 모든 에러를 해결하여 코드 품질을 보장하고 CI/CD 파이프라인을 통과할 수 있도록 합니다.

## 🎯 목표

- ESLint 에러 196개 → 0개로 감소
- TypeScript 타입 에러 28개 → 0개로 감소
- ESLint 경고 12,880개 → 최소화 (빌드 파일 제외)
- `npm run lint` 및 `npm run type-check` 명령어 성공

## 📊 문제 분석

### ESLint 에러 (196개)
1. **`.claude/hooks/*.cjs` 파일**: `require()` import 금지 에러 (7개)
2. **`analyze-*.js` 파일**: `require()` import 금지 에러 (2개)
3. **Typography 컴포넌트**: `any` 타입 사용 에러 (4개)
4. **Navigation Menu**: `<a>` 태그 대신 `<Link>` 사용 에러 (1개)
5. **빌드 파일 (`public/storybook/**`)**: 불필요한 검사 (12,880개 경고)

### TypeScript 에러 (28개)
1. **Typography 컴포넌트**: ref 타입 불일치 (2개)
2. **Chart 스토리**: `args` 누락, 타입 불일치 (17개)
3. **Form/Calendar**: zod schema `required_error` deprecated (3개)
4. **Radar Chart**: 타입 불일치 (6개)

## Relevant Files

- `eslint.config.mjs` - ESLint 설정 파일
- `src/components/ui/typography.tsx` - Typography UI 컴포넌트
- `src/registry/atoms/typography/typography.tsx` - Typography 스토리 컴포넌트
- `src/registry/atoms/chart-story/line-charts/line-charts.stories.tsx` - Line Chart 스토리
- `src/registry/atoms/chart-story/pie-charts/pie-charts.stories.tsx` - Pie Chart 스토리
- `src/registry/atoms/chart-story/bar-charts/bar-chart-label-custom.tsx` - Bar Chart 커스텀
- `src/registry/atoms/chart-story/radar-charts/*.tsx` - Radar Chart 컴포넌트들
- `src/registry/atoms/calendar-story/blocks/calendar-form.stories.tsx` - Calendar Form
- `src/registry/atoms/date-picker-story/date-picker.stories.tsx` - Date Picker
- `src/registry/atoms/radio-group-story/radio-group.stories.tsx` - Radio Group
- `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx` - Navigation Menu

## Notes

- 빌드된 Storybook 정적 파일들(`public/storybook/**`)이 ESLint 검사에 포함되어 12,880개의 불필요한 경고 발생
- Zod v4에서 `required_error` 옵션이 deprecated되어 `message`로 변경 필요
- Typography 컴포넌트는 동적으로 여러 HTML 요소를 렌더링하므로 ref 타입 처리가 복잡함
- Chart 스토리들은 Storybook 7→9 마이그레이션 과정에서 타입 정의가 변경됨

## Tasks

### ✅ Task 1: Git 상태 확인 및 기존 변경사항 커밋
이전 작업(React 18-19 dual support)의 변경사항을 커밋하여 작업 디렉토리를 클린 상태로 만듭니다.

- [x] `git status`로 변경된 파일 확인 (10개 파일)
- [x] forwardRef 관련 컴포넌트 변경사항 커밋
- [x] 문서 및 계획 파일 업데이트 커밋

### 🔄 Task 2: ESLint 설정 개선
ESLint 검사 범위를 조정하여 불필요한 에러와 경고를 제거합니다.

**목표**: `.claude/**` 및 `public/**` 디렉토리를 ESLint 검사에서 제외

**작업 내용**:
- [x] `eslint.config.mjs` 파일 수정
- [x] `ignores` 배열에 `.claude/**` 추가 (7개 에러 해결)
- [x] `ignores` 배열에 `public/**` 추가 (12,880개 경고 해결)
- [ ] ESLint 실행하여 결과 확인

**예상 결과**:
- ESLint 에러 196개 → 10개로 감소
- ESLint 경고 12,880개 → 소수로 감소

### ⏳ Task 3: Typography 컴포넌트 타입 에러 수정
Typography 컴포넌트에서 `any` 타입 사용을 제거하고 정확한 타입을 지정합니다.

**목표**: Typography 컴포넌트의 타입 안정성 확보

**작업 내용**:
- [ ] `src/components/ui/typography.tsx` 분석
  - 33번 줄: `ref={ref as any}` → 정확한 ref 타입 지정
  - 92, 117번 줄: `as any` 제거 및 올바른 타입 추론
- [ ] `src/registry/atoms/typography/typography.tsx` 분석
  - 33번 줄: `ref={ref as any}` → 정확한 ref 타입 지정
  - 92번 줄: `as any` 제거
- [ ] 동적 요소 타입을 위한 제네릭 타입 또는 union 타입 적용
- [ ] TypeScript 컴파일 확인

**기술적 고려사항**:
- Typography는 variant에 따라 다른 HTML 요소(`h1`, `h2`, `p`, `table` 등)를 렌더링
- `forwardRef`의 제네릭 타입을 정확히 지정해야 함
- `table` variant는 특별히 처리되므로 별도 타입 분기 필요

**예상 결과**:
- ESLint 에러 4개 해결
- TypeScript 에러 2개 해결

### ⏳ Task 4: Chart 스토리 타입 에러 수정
Storybook Story 타입 정의에서 누락된 `args` 속성을 추가합니다.

**목표**: Chart 관련 스토리들의 TypeScript 타입 에러 해결

**작업 내용**:
- [ ] `src/registry/atoms/chart-story/line-charts/line-charts.stories.tsx` 수정
  - `LinearDefault`, `LinearMultiple`, `LinearLabel`, `LinearStacked` 스토리에 `args: {}` 추가
- [ ] `src/registry/atoms/chart-story/pie-charts/pie-charts.stories.tsx` 수정
  - `PieDefault`, `PieDonut`, `PieLabel`, `PieDonutText`, `PieLegend`, `PieInteractive`, `PieSeparatorNone` 스토리에 `args: {}` 추가
- [ ] `src/registry/atoms/chart-story/bar-charts/bar-chart-label-custom.tsx` 수정
  - Bar 컴포넌트의 `layout` prop 제거 (recharts Bar 타입에 존재하지 않음)
- [ ] `src/registry/atoms/chart-story/line-charts/line-chart-label-custom.tsx` 수정
  - Legend의 `formatter` 함수 타입 수정
- [ ] TypeScript 컴파일 확인

**기술적 고려사항**:
- Storybook 9의 `StoryObj` 타입은 `args` 속성을 필수로 요구
- `render` 함수를 사용하는 경우에도 빈 `args: {}` 객체 필요
- recharts 컴포넌트의 정확한 props 타입 준수 필요

**예상 결과**:
- TypeScript 에러 17개 해결

### ⏳ Task 5: Zod Schema `required_error` Deprecated 수정
Zod v4에서 deprecated된 `required_error` 옵션을 `message`로 변경합니다.

**목표**: Zod schema 정의를 v4 API에 맞게 업데이트

**작업 내용**:
- [ ] `src/registry/atoms/calendar-story/blocks/calendar-form.stories.tsx` 수정
  - `z.date({ required_error: "..." })` → `z.date({ message: "..." })` 또는 `z.coerce.date().refine()` 사용
- [ ] `src/registry/atoms/date-picker-story/date-picker.stories.tsx` 수정
  - 동일한 패턴 수정
- [ ] `src/registry/atoms/radio-group-story/radio-group.stories.tsx` 수정
  - `z.enum(["all", "mentions", "none"], { required_error: "..." })` → `{ message: "..." }` 사용
- [ ] TypeScript 컴파일 확인

**기술적 고려사항**:
- Zod v4 마이그레이션 가이드 참조: `required_error`는 `message`로 통합됨
- `invalid_type_error`도 `message`로 통합됨
- Date validation의 경우 `z.coerce.date()`와 `.refine()` 조합이 권장됨

**예상 결과**:
- TypeScript 에러 3개 해결

### ⏳ Task 6: Navigation Menu `<a>` 태그 수정
Next.js 권장사항에 따라 `<a>` 태그를 `<Link>` 컴포넌트로 변경합니다.

**목표**: Next.js best practices 준수

**작업 내용**:
- [ ] `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx` 파일 열기
- [ ] 66번 줄 근처의 `<a href="/">` → `<Link href="/">` 변경
- [ ] 파일 상단에 `import Link from "next/link"` 추가 확인
- [ ] ESLint 확인

**예상 결과**:
- ESLint 에러 1개 해결

### ⏳ Task 7: Radar Chart 타입 에러 수정 (옵션)
Radar Chart 관련 타입 에러를 수정합니다.

**목표**: Radar Chart 컴포넌트의 타입 안정성 확보

**작업 내용**:
- [ ] `src/registry/atoms/chart-story/radar-charts/radar-chart-label-custom.tsx` 수정
  - 72번 줄: `value` prop 타입 에러 해결
  - 78번 줄: `y` undefined 체크 추가
- [ ] `src/registry/atoms/chart-story/radar-charts/radar-chart-legend.tsx` 수정
  - 61번 줄: `Margin` 타입에 `right`, `left` 속성 추가
- [ ] TypeScript 컴파일 확인

**예상 결과**:
- TypeScript 에러 4개 해결

### ⏳ Task 8: 검증 및 테스트
모든 수정 사항을 검증하고 프로젝트가 정상 동작하는지 확인합니다.

**작업 내용**:
- [ ] `npm run lint` 실행 → 0 errors 확인
- [ ] `npm run type-check` 실행 → 0 errors 확인
- [ ] `npm run storybook` 실행 → 정상 동작 확인
- [ ] 주요 컴포넌트 스토리 수동 테스트
  - Typography 컴포넌트 렌더링 확인
  - Chart 스토리들 렌더링 확인
  - Form/Calendar/Radio Group 동작 확인

**검증 기준**:
- ✅ ESLint: 0 errors (경고는 허용)
- ✅ TypeScript: 0 errors
- ✅ Storybook 빌드 성공
- ✅ 모든 스토리 정상 렌더링

### ⏳ Task 9: 최종 커밋 및 문서화
모든 변경사항을 커밋하고 문서를 업데이트합니다.

**작업 내용**:
- [ ] 변경된 파일들 스테이징
- [ ] Conventional Commits 형식으로 커밋 메시지 작성
- [ ] 이 계획 문서를 `docs/plan/complete/`로 이동
- [ ] CLAUDE.md 업데이트 (필요시)

**커밋 메시지 예시**:
```
fix: resolve all ESLint and TypeScript errors

- Update eslint.config.mjs to ignore .claude and public directories
- Fix Typography component type errors (remove 'any' types)
- Add missing 'args' to Chart story definitions
- Update Zod schemas to use 'message' instead of deprecated 'required_error'
- Replace <a> tags with Next.js <Link> component in Navigation Menu
- Fix Radar Chart type mismatches

Resolves: 196 ESLint errors, 28 TypeScript errors
Related to: React 18-19 Dual Support

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🎯 성공 기준

- [x] Git 작업 디렉토리 클린 상태
- [ ] `npm run lint` → 0 errors
- [ ] `npm run type-check` → 0 errors
- [ ] `npm run storybook` → 정상 실행
- [ ] 모든 스토리 정상 렌더링
- [ ] 계획 문서 complete로 이동

## ⚠️ 위험 요소 및 대응

### 위험 1: Typography 컴포넌트 타입 복잡도
- **문제**: 동적으로 다양한 HTML 요소를 렌더링하므로 타입 지정이 복잡
- **대응**: 각 variant별 타입 분기 처리 또는 제네릭 타입 활용

### 위험 2: Chart 라이브러리 타입 불일치
- **문제**: recharts 라이브러리의 타입 정의가 실제 동작과 다를 수 있음
- **대응**: recharts 공식 문서 및 타입 정의 파일 참조, 필요시 타입 단언 사용

### 위험 3: Zod v4 마이그레이션
- **문제**: Zod API 변경으로 기존 validation 로직이 동작하지 않을 수 있음
- **대응**: Zod v4 마이그레이션 가이드 준수, 테스트로 검증

## 📝 진행 상황

- **2025-01-11 15:00**: 계획 수립 완료
- **2025-01-11 15:05**: Task 1 완료 (기존 변경사항 커밋)
- **2025-01-11 15:10**: Task 2 진행 중 (ESLint 설정 개선)

## 🔗 관련 문서

- [CLAUDE.md](../../CLAUDE.md) - 프로젝트 개발 가이드
- [React 18-19 Dual Support Plan](./react-18-19-dual-support-complete.md) - 이전 작업
- [Project Structure Improvement](./2025-01-11-project-structure-improvement.md) - 구조 개선 계획

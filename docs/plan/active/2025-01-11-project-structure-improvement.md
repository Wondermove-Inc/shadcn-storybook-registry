# Project Structure Improvement Plan

**작성일**: 2025-01-11
**상태**: Active
**우선순위**: Medium
**예상 작업 시간**: 4-8시간

---

## 📋 Executive Summary

현재 shadcn-storybook-registry 프로젝트의 구조를 깊이 분석하여, 향후 확장성과 유지보수성을 향상시키기 위한 개선 필요 사항을 식별했습니다. 프로젝트는 전반적으로 잘 구조화되어 있으나, 몇 가지 영역에서 향후 확장 시 병목 현상이나 유지보수 어려움이 발생할 수 있는 패턴이 발견되었습니다.

---

## 🔍 현재 프로젝트 구조 분석 결과

### 1. 디렉토리 구조
```
shadcn-storybook-registry/
├── app/                          # Next.js 15 App Router
│   ├── globals.css              # Tailwind CSS v4 (최신)
│   ├── layout.tsx               # Root layout with analytics
│   └── registry/[name]/route.ts # Dynamic registry API
├── src/
│   ├── components/ui/           # 47개 shadcn/ui 컴포넌트
│   ├── hooks/                   # Custom hooks (use-mobile.ts)
│   ├── lib/                     # Utilities (utils.ts)
│   └── registry/                # ⚠️ 주요 작업 영역 (608KB)
│       ├── atoms/               # 50개 컴포넌트 스토리 디렉토리
│       ├── tokens/              # 5개 디자인 토큰 스토리 (16KB)
│       ├── foundation/          # 2개 foundation 스토리 (20KB)
│       └── templates/           # 1개 템플릿 (20KB)
├── .storybook/                  # Storybook 9 설정
├── docs/                        # 프로젝트 문서
│   ├── plan/active/             # 진행 중인 계획
│   └── plan/complete/           # 완료된 계획
├── registry.json                # Registry manifest (1154줄)
└── components.json              # shadcn CLI 설정
```

### 2. 핵심 통계
- **전체 스토리 파일**: 67개
- **shadcn/ui 컴포넌트**: 47개 (forwardRef 적용 진행 중)
- **Registry 항목**: 53개 (all-stories 포함)
- **Atoms 디렉토리**: 50개
- **의존성**: React 19.1.1, Next.js 15.5.4, Storybook 9.1.8, Tailwind v4

### 3. 기술 스택 현황
- ✅ **최신 기술 사용**: React 19, Next.js 15, Storybook 9, Tailwind v4
- ✅ **타입 안정성**: TypeScript 5.9.2, strict mode
- ✅ **테스트 전략**: Vitest dual project (unit + Storybook browser tests)
- ✅ **코드 품질**: ESLint, Prettier, Conventional Commits
- ✅ **배포**: Semantic Release, Vercel Analytics

---

## 🎯 식별된 개선 필요 사항

### 🔴 높은 우선순위 (High Priority)

#### 1. Registry.json 파일 관리성 문제
**현상**:
- registry.json이 1154줄로 매우 거대함
- 53개의 registry 항목이 단일 JSON 파일에 집중
- 새로운 스토리 추가 시 병합 충돌(merge conflict) 위험 높음
- 수동 편집 시 JSON 구조 오류 가능성

**영향**:
- 팀 협업 시 병합 충돌 빈번 발생 가능
- 대규모 확장 시 파일 관리 어려움
- 휴먼 에러 위험 증가

**해결 방안 옵션**:
- **옵션 A**: Registry 항목을 개별 JSON 파일로 분리 (예: `src/registry/atoms/button-story/registry.json`)
  - 장점: 병합 충돌 최소화, 모듈화, 명확한 책임 분리
  - 단점: 빌드 시 통합 로직 필요, 파일 수 증가
- **옵션 B**: Registry 생성 자동화 스크립트 개선
  - 장점: 빠른 구현, 기존 구조 유지
  - 단점: 근본적 문제 해결 안 됨

**권장**: 옵션 A (장기적 확장성 고려)

---

#### 2. Chart Story 구조 복잡도
**현상**:
- chart-story 디렉토리만 5개의 하위 디렉토리 보유 (pie-charts, line-charts, radar-charts, bar-charts, area-charts)
- 각 차트 타입마다 10개 이상의 파일 존재
- registry.json에는 단일 "chart-story" 항목으로만 등록

**영향**:
- 개별 차트 타입 설치 불가 (사용자가 모든 차트를 한 번에 설치해야 함)
- Atomic Design 원칙과 불일치
- 유지보수 시 영향 범위 파악 어려움

**해결 방안 옵션**:
- **옵션 A**: 차트 타입별 독립 registry 항목 생성
  - 예: `pie-chart-story`, `line-chart-story`, `bar-chart-story` 등
  - 장점: 세밀한 제어, 사용자 선택권 증가, Atomic Design 준수
  - 단점: Registry 항목 증가 (53 → 58개)
- **옵션 B**: 현재 구조 유지, 문서화만 강화
  - 장점: 변경 없음
  - 단점: 사용자 경험 개선 없음

**권장**: 옵션 A (사용자 경험 향상)

---

### 🟡 중간 우선순위 (Medium Priority)

#### 3. Calendar Story 하위 구조 불일치
**현상**:
- calendar-story/blocks/ 디렉토리에 6개의 독립 스토리 존재
  - range-calendar, date-of-birth-picker, natural-language-picker 등
- 메인 calendar.stories.tsx와 별도로 존재
- registry.json에는 calendar-story 단일 항목만 등록

**영향**:
- Chart와 유사한 문제 (세밀한 설치 불가)
- 일관성 없는 디렉토리 구조

**해결 방안**:
- Chart와 동일하게 독립 registry 항목 분리 고려
- 또는 메인 스토리에 통합

---

#### 4. Console.log 디버그 코드 잔존
**현상**:
```typescript
// src/registry/atoms/form-story/form.stories.tsx:47
console.log("onSubmit", values);

// src/registry/atoms/sonner-story/sonner.stories.tsx:19
onClick: () => console.log("Undo"),
```

**영향**:
- 프로덕션 빌드에 불필요한 로깅
- 코드 품질 저하

**해결 방안**:
- ESLint rule 추가: `no-console` 경고
- 또는 수동 제거 (2개 파일만 해당)

---

#### 5. 타입 정의 분산 관리
**현상**:
- 공통 타입 정의가 개별 스토리 파일에 분산
- 중복 타입 정의 가능성

**영향**:
- 타입 변경 시 여러 파일 수정 필요
- 일관성 유지 어려움

**해결 방안**:
- `src/registry/types/` 디렉토리 생성
- 공통 타입 정의 중앙화

---

### 🟢 낮은 우선순위 (Low Priority)

#### 6. Storybook 설정 파일 분산
**현상**:
- .storybook/ 디렉토리: main.ts, preview.ts, preview.css, vitest.setup.ts 등 5개 파일
- 현재는 관리 가능한 수준

**개선 방안**:
- 복잡도 증가 시 설정 모듈화 고려

---

#### 7. 문서화 구조
**현상**:
- docs/ 디렉토리 내 여러 문서 산재
- CLAUDE.md가 루트와 docs/ 양쪽에 존재

**개선 방안**:
- 문서 카테고리 명확화
- 중복 제거

---

## 📊 위험도 평가

### 높은 위험도 변경 사항
1. **Registry.json 분리**
   - 영향 범위: 빌드 시스템, CLI, API 라우트
   - 위험 요소: 기존 사용자 영향, 빌드 실패 가능성
   - 완화 방안: 점진적 마이그레이션, 하위 호환성 유지

### 중간 위험도 변경 사항
2. **Chart/Calendar Story 분리**
   - 영향 범위: Registry 구조, 사용자 설치 경험
   - 위험 요소: 기존 설치 스크립트 변경 필요
   - 완화 방안: Alias 제공, 문서화

### 낮은 위험도 변경 사항
3. **Console.log 제거, 타입 정의 중앙화**
   - 영향 범위: 개별 스토리 파일
   - 위험 요소: 거의 없음
   - 완화 방안: 철저한 테스트

---

## 🎯 권장 접근 방식

### Phase 1: 즉시 실행 가능한 개선 (1-2시간)
1. Console.log 제거 (2개 파일)
2. ESLint 규칙 강화 (no-console 추가)

### Phase 2: 단기 개선 (4-6시간)
1. 타입 정의 중앙화 (`src/registry/types/`)
2. Chart Story 분리 검토

### Phase 3: 중장기 개선 (8-12시간)
1. Registry.json 분리 아키텍처 설계
2. 빌드 시스템 개선
3. 마이그레이션 가이드 작성

---

## ❓ 사용자 의사결정 필요 사항

### 1. Registry 구조 개선 방향
**질문**: Registry.json을 단일 파일로 유지할까요, 아니면 개별 파일로 분리할까요?

- **옵션 A - 단일 파일 유지**
  - 현재 구조 유지
  - 빠른 구현
  - 협업 시 충돌 가능성 높음

- **옵션 B - 개별 파일 분리** ✅ 권장
  - 각 스토리 디렉토리에 registry.json 생성
  - 병합 충돌 최소화
  - 빌드 시스템 수정 필요

### 2. Chart/Calendar Story 세분화
**질문**: Chart와 Calendar를 하위 타입별로 독립 registry 항목으로 분리할까요?

- **옵션 A - 현재 구조 유지**
  - 변경 없음
  - 사용자가 전체 설치해야 함

- **옵션 B - 독립 항목 분리** ✅ 권장
  - 사용자 선택권 증가
  - Registry 항목 증가 (53 → 58개)

### 3. 작업 우선순위
**질문**: 어느 단계부터 시작할까요?

- **Phase 1만 실행** (1-2시간)
  - 즉시 개선 효과
  - 위험도 최소

- **Phase 1 + Phase 2 실행** (4-6시간) ✅ 권장
  - 단기적 개선 완료
  - 구조적 문제 일부 해결

- **전체 Phase 실행** (8-12시간)
  - 장기적 확장성 확보
  - 많은 시간 투자 필요

---

## 📝 Relevant Files

### 분석 대상 파일
- `registry.json` - 메인 registry manifest (1154줄)
- `components.json` - shadcn CLI 설정
- `package.json` - 의존성 및 스크립트
- `tsconfig.json` - TypeScript 설정
- `.storybook/main.ts` - Storybook 설정
- `app/registry/[name]/route.ts` - Registry API 라우트

### 영향받을 수 있는 파일
- `src/registry/atoms/chart-story/**` - Chart 하위 구조
- `src/registry/atoms/calendar-story/blocks/**` - Calendar 하위 구조
- `src/registry/atoms/form-story/form.stories.tsx` - console.log 제거 대상
- `src/registry/atoms/sonner-story/sonner.stories.tsx` - console.log 제거 대상

---

## 🎯 Notes

### 강점 (현재 프로젝트의 우수한 점)
1. ✅ **최신 기술 스택**: React 19, Next.js 15, Tailwind v4
2. ✅ **명확한 Atomic Design 구조**: atoms, tokens, foundation, templates
3. ✅ **우수한 테스트 전략**: Vitest dual project, Playwright integration
4. ✅ **강력한 개발 워크플로**: Conventional Commits, Semantic Release
5. ✅ **체계적인 문서화**: CLAUDE.md, 계획 문서 시스템

### 주의사항
1. ⚠️ 현재 react-18-19-dual-support 브랜치에서 forwardRef 작업 진행 중
2. ⚠️ 구조 변경 시 기존 사용자 영향 고려 필요
3. ⚠️ Registry 빌드 시스템 변경은 충분한 테스트 필요

### 참고 자료
- CLAUDE.md - 프로젝트 개발 가이드라인
- docs/component-comparison.md - 컴포넌트 비교 문서
- docs/test-strategy.md - 테스트 전략

---

## ✅ Success Criteria

### 계획 수립 완료 기준
- [x] 프로젝트 구조 전체 분석 완료
- [x] 개선 필요 사항 우선순위별 식별
- [x] 위험도 평가 완료
- [x] 사용자 의사결정 지점 명확화
- [x] 실행 가능한 옵션 제시

### 실행 완료 기준 (사용자 승인 후)
- [ ] 선택된 Phase의 모든 작업 완료
- [ ] 모든 테스트 통과 (lint, type-check, test:unit)
- [ ] Registry 빌드 성공 (registry:build)
- [ ] Storybook 정상 작동 확인
- [ ] 문서 업데이트 완료

---

**다음 단계**: 사용자의 의사결정을 받아 실행 계획 확정

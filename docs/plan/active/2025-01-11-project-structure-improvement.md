# Project Structure Improvement - Implementation Plan

**작성일**: 2025-01-11
**상태**: Approved - 실행 준비 완료
**타입**: Implementation Plan (구현 계획)

---

## 📋 Executive Summary

사용자 승인을 받아 다음 개선 작업을 진행합니다:

### ✅ 승인된 작업 범위
1. **Chart/Calendar Story 세분화** (옵션 A 선택)
2. **Registry 개별 파일 분리** (옵션 A 선택)
3. **Registry.json 개별 파일 분리까지 진행**

### 🎯 목표
- 사용자 경험 향상: 선택적 컴포넌트 설치 가능
- 개발 워크플로 개선: 병합 충돌 제로
- 장기적 확장성 확보: 독립적 컴포넌트 관리

---

## 🔍 현재 프로젝트 현황

### 기본 통계
- **전체 스토리**: 67개 파일
- **Registry 항목**: 53개 (all-stories 포함)
- **shadcn/ui 컴포넌트**: 47개
- **기술 스택**: React 19.1.1, Next.js 15.5.4, Storybook 9.1.8, Tailwind v4

### 디렉토리 구조
```
src/registry/
├── atoms/        608KB, 50개 컴포넌트 디렉토리
├── tokens/        16KB, 5개 디자인 토큰
├── foundation/    20KB, 2개 foundation 컴포넌트
└── templates/     20KB, 1개 템플릿

registry.json: 1154줄, 모든 registry 정보 포함
```

---

## 🎯 구현 계획

### Phase 1: Chart Story 세분화 (4-6시간)

#### 목표
Chart Story를 5개의 독립 항목으로 분리하여 사용자가 필요한 차트만 선택 설치 가능하도록 개선

#### 현재 구조
```
src/registry/atoms/chart-story/
├── chart.stories.tsx           # 메인
├── pie-charts/                 # 10개 파일
├── line-charts/                # 10개 파일
├── bar-charts/                 # 10개 파일
├── area-charts/                # 10개 파일
└── radar-charts/               # 10개 파일

registry.json:
- "chart-story" (단일 항목, 50개 파일 포함)
```

#### 개선 후 구조
```
src/registry/atoms/
├── pie-chart-story/
│   ├── pie-chart-simple.tsx
│   ├── pie-chart-donut.tsx
│   └── ... (10개 파일)
│   └── registry.json  ← 새로 추가
├── line-chart-story/
│   ├── line-chart-default.tsx
│   ├── line-chart-dots.tsx
│   └── ... (10개 파일)
│   └── registry.json  ← 새로 추가
├── bar-chart-story/
│   └── registry.json  ← 새로 추가
├── area-chart-story/
│   └── registry.json  ← 새로 추가
└── radar-chart-story/
    └── registry.json  ← 새로 추가
```

#### 작업 단계
1. **파일 재구조화**
   - `chart-story/pie-charts/` → `pie-chart-story/`로 이동
   - `chart-story/line-charts/` → `line-chart-story/`로 이동
   - `chart-story/bar-charts/` → `bar-chart-story/`로 이동
   - `chart-story/area-charts/` → `area-chart-story/`로 이동
   - `chart-story/radar-charts/` → `radar-chart-story/`로 이동

2. **개별 registry.json 생성**
   - 각 chart-story 디렉토리에 registry.json 추가
   - registryDependencies: ["chart"]
   - dependencies: ["recharts"]

3. **테스트**
   - `npm run registry:build`
   - `npx shadcn@latest add pie-chart-story` 개별 설치 테스트

---

### Phase 2: Calendar Story 세분화 (2-3시간)

#### 목표
Calendar Story의 blocks 항목들을 독립 registry 항목으로 분리

#### 현재 구조
```
src/registry/atoms/calendar-story/
├── calendar.stories.tsx
└── blocks/
    ├── range-calendar.stories.tsx
    ├── date-of-birth-picker.stories.tsx
    ├── natural-language-picker.stories.tsx
    ├── date-time-picker.stories.tsx
    ├── calendar-form.stories.tsx
    └── month-year-selector.stories.tsx

registry.json:
- "calendar-story" (단일 항목, 7개 파일 포함)
```

#### 개선 후 구조
```
src/registry/atoms/
├── calendar-story/
│   ├── calendar.stories.tsx
│   └── registry.json  ← 새로 추가
├── range-calendar-story/
│   ├── range-calendar.stories.tsx
│   └── registry.json  ← 새로 추가
├── date-of-birth-picker-story/
│   ├── date-of-birth-picker.stories.tsx
│   └── registry.json  ← 새로 추가
├── natural-language-picker-story/
│   └── registry.json  ← 새로 추가
├── date-time-picker-story/
│   └── registry.json  ← 새로 추가
├── calendar-form-story/
│   └── registry.json  ← 새로 추가
└── month-year-selector-story/
    └── registry.json  ← 새로 추가
```

#### 작업 단계
1. **파일 재구조화**
   - `calendar-story/blocks/*` → 개별 디렉토리로 이동

2. **개별 registry.json 생성**
   - 각 디렉토리에 registry.json 추가
   - registryDependencies: ["calendar", "input", "button", "popover" 등]
   - dependencies: ["date-fns", "chrono-node" 등]

3. **테스트**
   - 개별 설치 가능 여부 검증

---

### Phase 3: Registry.json 개별 파일 분리 (8-12시간)

#### 목표
1154줄의 단일 registry.json을 각 컴포넌트 디렉토리의 개별 registry.json으로 분리

#### 개선 후 전체 구조
```
src/registry/atoms/
├── button-story/
│   ├── button.stories.tsx
│   └── registry.json  ← 개별 registry 정의
├── accordion-story/
│   ├── accordion.stories.tsx
│   └── registry.json  ← 개별 registry 정의
└── ... (모든 컴포넌트 동일)

scripts/
└── build-registry.ts  ← 새로 추가 (통합 빌드 스크립트)

registry.json  ← 빌드 산출물 (자동 생성)
```

#### 작업 단계

##### 1. 빌드 스크립트 작성
```typescript
// scripts/build-registry.ts
import { glob } from 'glob';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

async function buildRegistry() {
  console.log('🔍 Finding individual registry.json files...');

  // 1. 모든 개별 registry.json 찾기
  const registryFiles = await glob('src/registry/**/registry.json', {
    ignore: ['node_modules/**']
  });

  console.log(`Found ${registryFiles.length} registry files`);

  // 2. 각 파일 읽기 및 병합
  const items = await Promise.all(
    registryFiles.map(async (file) => {
      const content = await readFile(file, 'utf-8');
      const item = JSON.parse(content);
      console.log(`  ✓ ${item.name}`);
      return item;
    })
  );

  // 3. 메인 registry.json 생성
  const mainRegistry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "shadcn-storybook-registry",
    homepage: "https://github.com/lloydrichards/shadcn-storybook-registry",
    author: "Lloyd Richards <lloyd.d.richards@gmail.com>",
    items
  };

  // 4. 파일 저장
  await writeFile(
    'registry.json',
    JSON.stringify(mainRegistry, null, 2),
    'utf-8'
  );

  console.log(`✅ Built registry.json with ${items.length} items`);
}

buildRegistry().catch(console.error);
```

##### 2. package.json 스크립트 업데이트
```json
{
  "scripts": {
    "registry:build": "tsx scripts/build-registry.ts && shadcn build -o ./public/v2/r",
    "registry:dev": "tsx scripts/build-registry.ts --watch && shadcn build -o ./public/v2/r --watch"
  }
}
```

##### 3. 점진적 마이그레이션
```bash
# Phase 3-1: 스크립트 테스트 (기존 registry.json 유지)
npm run registry:build
# → 기존과 동일한 registry.json 생성 확인

# Phase 3-2: 샘플 컴포넌트 5개 분리
# button, card, input, badge, label

# Phase 3-3: 나머지 전체 컴포넌트 분리
# 모든 atoms, tokens, foundation, templates

# Phase 3-4: 기존 registry.json을 registry.json.backup으로 백업
```

##### 4. 개별 registry.json 예시
```json
// src/registry/atoms/button-story/registry.json
{
  "name": "button-story",
  "type": "registry:file",
  "title": "Button Story",
  "description": "Interactive Storybook stories for button component",
  "categories": ["atoms", "storybook", "button"],
  "author": "Lloyd Richards <lloyd.d.richards@gmail.com>",
  "registryDependencies": ["button"],
  "dependencies": ["lucide-react"],
  "files": [{
    "path": "src/registry/atoms/button-story/button.stories.tsx",
    "type": "registry:component"
  }]
}
```

##### 5. 검증 단계
- [ ] 빌드 스크립트 실행 성공
- [ ] 생성된 registry.json이 기존과 동일한 구조
- [ ] `npm run registry:build` 정상 작동
- [ ] Storybook 정상 작동
- [ ] 개별 컴포넌트 설치 테스트

---

## 📊 예상 결과

### Registry 항목 변화
```
현재: 53개 항목
개선 후: 약 65개 항목

추가되는 항목:
- pie-chart-story, line-chart-story, bar-chart-story, area-chart-story, radar-chart-story (+5)
- range-calendar-story, date-of-birth-picker-story, natural-language-picker-story,
  date-time-picker-story, calendar-form-story, month-year-selector-story (+6)
- chart-story 제거 (-1)
- calendar-story는 유지 (기본 calendar만 포함)

최종: 약 63개 항목
```

### 사용자 경험 개선
```bash
# 현재
npx shadcn@latest add chart-story
→ 50개 파일 설치 (불필요한 40개 포함)

# 개선 후
npx shadcn@latest add pie-chart-story
→ 10개 파일만 설치 ✅
```

### 개발 워크플로 개선
```
병합 충돌 발생률: 90% 감소
새 컴포넌트 추가 시간: 15분 → 5분
코드 리뷰 시간: 10분 → 3분
```

---

## 🚨 위험 관리

### 높은 위험
1. **기존 사용자 영향**
   - 완화: 하위 호환성 유지 (기존 chart-story, calendar-story alias 제공)
   - 마이그레이션 가이드 작성

2. **빌드 시스템 실패**
   - 완화: 단계별 테스트, 백업 유지

### 중간 위험
3. **의존성 오류**
   - 완화: 각 registry.json에 정확한 의존성 명시

4. **파일 경로 오류**
   - 완화: 빌드 스크립트에 경로 검증 로직 추가

---

## ✅ 완료 기준

### Phase 1 완료 (Chart 세분화)
- [ ] 5개 독립 chart-story 디렉토리 생성
- [ ] 개별 registry.json 작성
- [ ] `npm run registry:build` 성공
- [ ] 개별 설치 테스트 통과
- [ ] Storybook 정상 작동
- [ ] Git 커밋

### Phase 2 완료 (Calendar 세분화)
- [ ] 6개 독립 calendar-related-story 디렉토리 생성
- [ ] 개별 registry.json 작성
- [ ] 테스트 통과
- [ ] Git 커밋

### Phase 3 완료 (Registry 분리)
- [ ] 빌드 스크립트 작성 및 테스트
- [ ] 모든 컴포넌트에 개별 registry.json 추가
- [ ] 통합 빌드 성공
- [ ] 전체 테스트 통과 (lint, type-check, test:unit)
- [ ] Registry 빌드 성공
- [ ] Storybook 정상 작동
- [ ] 문서 업데이트
- [ ] Git 커밋

---

## 📝 Relevant Files

### 수정이 필요한 파일
**Phase 1 (Chart 세분화)**:
- `src/registry/atoms/chart-story/**` → 5개 디렉토리로 분리
- `registry.json` → chart-story 제거, 5개 항목 추가

**Phase 2 (Calendar 세분화)**:
- `src/registry/atoms/calendar-story/blocks/**` → 6개 디렉토리로 분리
- `registry.json` → 6개 항목 추가

**Phase 3 (Registry 분리)**:
- `scripts/build-registry.ts` → 새로 작성
- `src/registry/**/registry.json` → 모든 컴포넌트에 추가 (약 50개)
- `package.json` → scripts 섹션 업데이트
- `registry.json` → 빌드 산출물로 변경

### 영향받는 파일
- `.gitignore` → registry.json 제외 (빌드 산출물이므로)
- `app/registry/[name]/route.ts` → 변경 없음 (최종 registry.json 사용)
- `CLAUDE.md` → 개발 가이드 업데이트

---

## 🎯 예상 작업 시간

| Phase | 예상 시간 | 난이도 |
|-------|---------|--------|
| Phase 1: Chart 세분화 | 4-6시간 | 낮음 |
| Phase 2: Calendar 세분화 | 2-3시간 | 낮음 |
| Phase 3: Registry 분리 | 8-12시간 | 중간 |
| **총 예상 시간** | **14-21시간** | **중간** |

---

## 🎬 다음 단계

### 즉시 실행 (사용자 승인 완료)
1. TodoWrite로 작업 목록 생성
2. Phase 1 시작: Chart Story 세분화
3. 각 Phase 완료 후 테스트 및 커밋
4. 전체 완료 후 사용자 보고

### 실행 순서
```
Phase 1: Chart 세분화
  ↓ (테스트 통과 후)
Phase 2: Calendar 세분화
  ↓ (테스트 통과 후)
Phase 3: Registry 분리
  ↓ (전체 테스트 통과 후)
최종 검증 및 문서화
```

---

**이 문서는 승인된 구현 계획입니다. 즉시 실행을 시작합니다.**

**작성일**: 2025-01-11
**최종 업데이트**: 2025-01-11
**승인**: 사용자 승인 완료

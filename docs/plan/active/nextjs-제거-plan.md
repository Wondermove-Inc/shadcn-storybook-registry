# Next.js 제거 및 Vite 전환 계획

**작성일**: 2025-01-15
**최종 업데이트**: 2025-01-15 (react-router-dom 옵션 추가)
**상태**: Active - 사용자 의사결정 대기
**예상 시간**:
- 옵션 A (`<a>` 태그): 5.5시간
- 옵션 B (react-router-dom): 7.5시간
**위험도**:
- 옵션 A: 낮음
- 옵션 B: 중간

---

## 📋 개요

### 목적
Next.js 의존성을 완전히 제거하고 Storybook을 순수 Vite 환경으로 전환하여 webpack5와의 충돌 없이 shadcn/ui 컴포넌트를 사용할 수 있도록 합니다.

### 현재 상태
- **프레임워크**: Next.js 15.5.4 + Storybook 9.1.8 (@storybook/nextjs-vite)
- **Next.js 의존성**: 6개 스토리 파일에서 사용 중
  - `next/link` 사용: 4개 파일
  - `next/image` 사용: 2개 파일

### 목표 상태
- **프레임워크**: Storybook 9.1.8 (@storybook/react-vite) 단독
- **Next.js 의존성**: 완전 제거
- **대체 방안**:
  - `next/link` → 일반 `<a>` 태그
  - `next/image` → 일반 `<img>` 태그

---

## 🔍 변경 영향도 분석

### 영향받는 파일들
1. `.storybook/main.ts` - Storybook 설정
2. `package.json` - 의존성 및 스크립트
3. `src/registry/atoms/button-story/button.stories.tsx`
4. `src/registry/atoms/breadcrumb-story/breadcrumb.stories.tsx`
5. `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx`
6. `src/registry/atoms/select-story/select.stories.tsx`
7. `src/registry/atoms/aspect-ratio-story/aspect-ratio.stories.tsx`
8. `src/registry/atoms/scroll-area-story/scroll-area.stories.tsx`
9. `CLAUDE.md` - 프로젝트 문서

**총 9개 파일 수정 예정**

### 영향받는 컴포넌트
- Button, Breadcrumb, Navigation Menu, Select, Aspect Ratio, Scroll Area 스토리

### Registry 의존성 변경
- Registry 시스템 자체는 변경 없음
- 스토리 파일 내용만 수정되므로 registry.json은 그대로 유지

### 위험 요소
- **호환성**: Storybook 9에서 @storybook/react-vite 공식 지원으로 위험 낮음
- **브레이킹 체인지**: 스토리 렌더링 방식은 동일하므로 낮음
- **Storybook 빌드 영향**: 프레임워크 변경으로 빌드 동작 차이 가능성 있으나 Vite가 더 빠름

### 필요한 테스트
- Storybook 개발 서버 정상 작동 확인
- 6개 수정된 스토리 렌더링 확인
- Registry 빌드 정상 동작 확인
- 테마 전환 기능 확인 (next-themes 의존)

### 문서 업데이트
- `CLAUDE.md`에서 Next.js 관련 섹션 제거
- Tech Stack 섹션 업데이트
- Essential Commands 섹션 업데이트

---

## 🚨 상위 작업 목록 (Phase 1 - High-Level Tasks)

### ✅ 작업 1: Storybook 프레임워크 변경
**예상 시간**: 1시간
**위험도**: 낮음

**상세 설명**:
Storybook의 프레임워크 어댑터를 Next.js용에서 순수 React용으로 변경합니다. Storybook 9는 @storybook/react-vite 패키지를 공식 지원하므로 안전하게 마이그레이션할 수 있습니다.

**수행 내역**:
- `.storybook/main.ts` 파일을 열어 `framework` 설정을 수정합니다
- `@storybook/nextjs-vite`에서 `@storybook/react-vite`로 import 경로 변경
- `framework.name` 속성을 `"@storybook/react-vite"`로 변경
- package.json의 devDependencies에서 `@storybook/nextjs-vite` 제거
- package.json의 devDependencies에 `@storybook/react-vite` 추가
- `npm install` 실행하여 새 패키지 설치

**검증 방법**:
- TypeScript 타입 오류 없는지 확인
- `npm run storybook` 실행하여 정상 구동 확인

---

### ✅ 작업 2: Next.js 관련 패키지 제거
**예상 시간**: 30분
**위험도**: 낮음

**상세 설명**:
package.json에서 Next.js 관련 패키지를 완전히 제거하고 관련 스크립트를 정리합니다. 다만 `next-themes`는 React에서 독립적으로 동작하므로 유지합니다.

**수행 내역**:
- package.json의 dependencies에서 `next` 패키지 제거
- package.json의 devDependencies에서 `eslint-config-next` 제거
- `next-themes`는 **유지** (이유: Next.js 없이도 React에서 독립 동작, theme-preview-story에서 사용 중)
- package.json의 scripts에서 다음 제거:
  - `"dev": "next dev --turbopack"` 제거
  - `"start": "next start"` 제거
  - `"build"` 스크립트를 `"build": "npm run storybook:build"`로 단순화
- `npm install` 실행하여 의존성 정리

**검증 방법**:
- `npm list next` 실행하여 next 패키지 완전 제거 확인
- package.json에 불필요한 Next.js 관련 항목 없는지 검토

---

### ✅ 작업 3: 스토리 파일의 next/link 교체
**예상 시간**: 1.5시간
**위험도**: 낮음

**상세 설명**:
4개 스토리 파일에서 Next.js의 Link 컴포넌트를 일반 HTML `<a>` 태그로 교체합니다. Storybook은 문서화 도구이므로 SPA 라우팅 기능이 불필요하며, href 속성만으로 충분합니다.

**수행 내역**:
각 파일에서 아래와 같은 변경 수행:

**1) `src/registry/atoms/button-story/button.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<Button asChild>
  <Link href="/login">Login</Link>
</Button>

// After
<Button asChild>
  <a href="/login">Login</a>
</Button>
```

**2) `src/registry/atoms/breadcrumb-story/breadcrumb.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<BreadcrumbLink asChild>
  <Link href="/">Home</Link>
</BreadcrumbLink>

// After
<BreadcrumbLink asChild>
  <a href="/">Home</a>
</BreadcrumbLink>
```

**3) `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<NavigationMenuLink asChild>
  <Link href="/docs">Documentation</Link>
</NavigationMenuLink>

// After
<NavigationMenuLink asChild>
  <a href="/docs">Documentation</a>
</NavigationMenuLink>
```

**4) `src/registry/atoms/select-story/select.stories.tsx`**
```tsx
// Before
import Link from "next/link";
// 파일 내 Link 사용 패턴 확인 후 동일하게 교체

// After
// <a> 태그로 교체
```

**주의사항**:
- `asChild` prop은 Radix UI의 Slot 패턴으로, 자식 요소로 전달되므로 그대로 유지
- href 속성값은 변경하지 않고 그대로 유지
- 다른 props나 className도 변경하지 않음

**검증 방법**:
- TypeScript 컴파일 오류 없는지 확인
- `npm run storybook`로 각 스토리 렌더링 확인
- 링크가 정상적으로 표시되는지 시각적 확인

---

### ✅ 작업 4: 스토리 파일의 next/image 교체
**예상 시간**: 1시간
**위험도**: 낮음

**상세 설명**:
2개 스토리 파일에서 Next.js의 Image 컴포넌트를 일반 HTML `<img>` 태그로 교체합니다. Next.js Image는 최적화 기능을 제공하지만, Storybook에서는 정적 이미지 표시만으로 충분합니다.

**수행 내역**:

**1) `src/registry/atoms/aspect-ratio-story/aspect-ratio.stories.tsx`**
```tsx
// Before
import Image from "next/image";
<AspectRatio ratio={16 / 9}>
  <Image
    src="/placeholder.jpg"
    alt="Photo"
    width={800}
    height={400}
    className="rounded-md object-cover"
  />
</AspectRatio>

// After
<AspectRatio ratio={16 / 9}>
  <img
    src="/placeholder.jpg"
    alt="Photo"
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
```

**2) `src/registry/atoms/scroll-area-story/scroll-area.stories.tsx`**
```tsx
// Before
import Image from "next/image";
<ScrollArea>
  <Image src="/image.jpg" alt="Image" width={300} height={200} />
</ScrollArea>

// After
<ScrollArea>
  <img src="/image.jpg" alt="Image" className="w-full h-auto" />
</ScrollArea>
```

**주의사항**:
- width/height props는 제거하고 className으로 크기 제어
- Tailwind CSS 유틸리티 클래스 사용 (`w-full`, `h-auto`, `object-cover` 등)
- alt 속성은 접근성을 위해 반드시 유지
- 이미지 경로는 변경하지 않음

**검증 방법**:
- TypeScript 컴파일 오류 없는지 확인
- `npm run storybook`로 각 스토리 렌더링 확인
- 이미지가 정상적으로 표시되고 aspect ratio가 유지되는지 확인

---

### ✅ 작업 5: Registry 빌드 및 검증
**예상 시간**: 1시간
**위험도**: 중간

**상세 설명**:
변경된 스토리 파일들이 Registry 시스템에서 정상적으로 빌드되고, Storybook에서 올바르게 렌더링되는지 전체적으로 검증합니다. 이 단계에서는 시스템 전체의 통합성을 확인합니다.

**수행 내역**:

**1) Registry 빌드 검증**
```bash
npm run registry:build
```
- `public/v2/r/` 디렉토리에 JSON 파일들이 정상 생성되는지 확인
- 6개 수정된 스토리의 JSON 파일이 올바른 의존성 정보를 포함하는지 확인
- 빌드 과정에서 에러나 경고 없는지 확인

**2) Storybook 빌드 테스트**
```bash
npm run storybook:build
```
- 빌드가 정상 완료되는지 확인
- 빌드 시간 측정 (Vite가 Next.js보다 빠를 것으로 예상)
- 빌드 결과물 크기 확인

**3) Storybook 개발 서버 테스트**
```bash
npm run storybook
```
- 포트 6006에서 Storybook 정상 구동 확인
- 6개 수정된 스토리를 하나씩 열어 렌더링 확인:
  1. Button Story - Link 버튼 정상 표시
  2. Breadcrumb Story - 링크 breadcrumb 정상 표시
  3. Navigation Menu Story - 네비게이션 링크 정상 표시
  4. Select Story - 링크 포함 select 정상 표시
  5. Aspect Ratio Story - 이미지 aspect ratio 유지 확인
  6. Scroll Area Story - 스크롤 내 이미지 정상 표시

**4) 테마 전환 기능 검증**
- Light/Dark 모드 전환이 정상 작동하는지 확인
- `next-themes` 라이브러리가 React 환경에서 정상 동작하는지 확인
- theme-preview-story에서 테마 전환 UI 확인

**5) 전체 품질 검증**
```bash
npm run lint
npm run type-check
npm run format:check
```
- ESLint 오류 없는지 확인
- TypeScript 타입 오류 없는지 확인
- 코드 포맷팅 규칙 준수 확인

**검증 체크리스트**:
- [ ] Registry JSON 파일 생성 성공
- [ ] Storybook 빌드 성공
- [ ] Storybook 개발 서버 정상 구동
- [ ] 6개 수정 스토리 모두 렌더링 정상
- [ ] 테마 전환 기능 정상 작동
- [ ] ESLint 오류 없음
- [ ] TypeScript 타입 오류 없음
- [ ] 코드 포맷팅 규칙 준수

**문제 발생 시 대응**:
- 빌드 오류 발생 시: 오류 메시지 분석 후 관련 파일 재확인
- 렌더링 문제 발생 시: 브라우저 콘솔 오류 확인 및 수정
- 2회 실패 시: 웹 검색으로 유사 사례 조사

---

### ✅ 작업 6: 문서 업데이트 및 완료
**예상 시간**: 30분
**위험도**: 낮음

**상세 설명**:
프로젝트 문서를 최신 상태로 업데이트하고 계획 파일을 정리합니다.

**수행 내역**:

**1) CLAUDE.md 업데이트**

다음 섹션들을 수정:

**Project Overview 섹션**:
```markdown
# Before
**Tech Stack:**
- **Framework**: Next.js 15 with TypeScript

# After
**Tech Stack:**
- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite (via Storybook)
```

**Essential Commands 섹션**:
```markdown
# 제거
### Development
npm run dev                          # Next.js 개발 서버

# 유지
### Development
npm run storybook                    # Storybook 개발 서버 (포트 6006)
npm run registry:dev                 # Registry 자동 재빌드 (watch 모드)
```

**2) 계획 파일 이동**
```bash
# 현재 계획 파일을 complete 디렉토리로 이동
mv docs/plan/active/nextjs-제거-plan.md docs/plan/complete/2025-01-15-nextjs-제거-plan.md
```

**3) README 확인**
- README.md 파일에 Next.js 관련 내용이 있다면 확인 및 수정

**검증 방법**:
- CLAUDE.md의 모든 링크와 코드 예제가 유효한지 확인
- 문서에 오타나 불일치 사항이 없는지 검토
- Git diff로 변경사항 최종 확인

---

## ❓ 의사결정 사항

### 🔄 결정 1: next/link 교체 방법 (사용자 선택 필요)

사용자가 react-router-dom 사용을 고려 중이므로 두 가지 옵션을 비교 분석합니다.

#### **옵션 A: 일반 `<a>` 태그로 교체** ⭐ 권장

**장점**:
- ✅ 최소 수정 원칙에 완벽히 부합
- ✅ 외부 의존성 추가 불필요 (0 dependencies)
- ✅ 간단하고 명확한 구현
- ✅ 예상 시간: 1.5시간 (계획대로)
- ✅ Storybook 문서화 목적에 충분

**단점**:
- ❌ SPA 라우팅 기능 없음 (하지만 Storybook에서는 불필요)

**구현 방법**:
```tsx
// Before
import Link from "next/link";
<Button asChild>
  <Link href="/login">Login</Link>
</Button>

// After (간단)
<Button asChild>
  <a href="/login">Login</a>
</Button>
```

---

#### **옵션 B: react-router-dom + Storybook Addon 도입**

**장점**:
- ✅ SPA 라우팅 기능 제공 (Link, useNavigate 등)
- ✅ 향후 확장성 (복잡한 라우팅 시나리오 대응)
- ✅ React 생태계 표준 라우터

**단점**:
- ❌ 추가 의존성 필요 (2개 패키지)
  - `react-router-dom` (필수)
  - `storybook-addon-remix-react-router` (Storybook 통합용)
- ❌ 추가 설정 필요 (.storybook/preview.ts에 decorator 추가)
- ❌ 예상 시간 증가: **+2시간** (총 3.5시간)
- ❌ 복잡도 증가 (Storybook에서 과도한 기능)
- ❌ 최소 수정 원칙 위반 가능성

**구현 방법**:
```tsx
// 1) 패키지 설치
npm install react-router-dom
npm install -D storybook-addon-remix-react-router

// 2) .storybook/main.ts 수정
export default {
  addons: [
    '@storybook/addon-themes',
    'storybook-addon-remix-react-router', // 추가
  ],
}

// 3) .storybook/preview.ts 수정
import { withRouter } from 'storybook-addon-remix-react-router';
export const decorators = [withRouter];

// 4) 스토리 파일 수정
import { Link } from 'react-router-dom';
<Button asChild>
  <Link to="/login">Login</Link>
</Button>
```

**추가 영향 파일**:
- `.storybook/main.ts` (addons 배열에 추가)
- `.storybook/preview.ts` (decorators 추가)
- `package.json` (2개 패키지 추가)
- 4개 스토리 파일 (next/link → react-router-dom/Link)

**위험 요소**:
- Storybook Addon 버전 호환성 (Storybook 9 → storybook-addon-remix-react-router@5)
- Router Context 설정 누락 시 오류 발생 가능
- 과도한 기능으로 인한 불필요한 복잡도

---

#### **📊 비교 분석표**

| 항목 | 옵션 A: `<a>` 태그 | 옵션 B: react-router-dom |
|------|-------------------|--------------------------|
| **추가 의존성** | 0개 | 2개 (react-router-dom + addon) |
| **설정 파일 수정** | 0개 | 2개 (.storybook/main.ts, preview.ts) |
| **코드 복잡도** | 매우 낮음 | 중간 (Router Context 관리) |
| **예상 작업 시간** | 1.5시간 | 3.5시간 (+2시간) |
| **최소 수정 원칙** | ✅ 완벽 준수 | ❌ 위반 가능성 |
| **Storybook 목적 부합** | ✅ 문서화에 충분 | ⚠️ 과도한 기능 |
| **향후 확장성** | 제한적 | 높음 |
| **위험도** | 낮음 | 중간 (호환성 이슈 가능) |

---

#### **🎯 권장사항**

**옵션 A (`<a>` 태그)**를 강력히 권장합니다.

**이유**:
1. **최소 수정 원칙 완벽 준수**: 사용자가 요청한 "Next.js 제거"라는 핵심 목적에만 집중
2. **Storybook 문서화 목적에 충분**: SPA 라우팅이 필요하지 않음
3. **빠른 구현**: 2시간 단축
4. **복잡도 최소화**: 추가 설정 및 의존성 없음
5. **위험도 낮음**: 검증된 HTML 표준 사용

**옵션 B는 다음 경우에만 고려**:
- 향후 복잡한 라우팅 기능이 필요한 경우 (현재 요구사항 없음)
- SPA 동작 시연이 스토리의 핵심 목적인 경우 (현재 아님)

**⚠️ 사용자 의사결정 필요**: 어떤 옵션을 선택하시겠습니까?
- **A 선택 시**: 기존 계획대로 진행 (총 5.5시간)
- **B 선택 시**: 계획 업데이트 필요 (총 7.5시간, 추가 작업 포함)

---

### 결정 2: next-themes 처리
**선택된 옵션**: next-themes 유지 (권장)

**이유**:
- `next-themes`는 Next.js 없이도 React에서 독립적으로 동작
- theme-preview-story에서 이미 사용 중
- 테마 전환 기능이 정상 작동
- 교체 시 불필요한 작업 증가 (2-3시간)

**대안 (선택 안 함)**: 다른 테마 라이브러리로 교체
- 사용자 요청 범위를 벗어남
- 기존 코드 대규모 수정 필요
- 오버스펙 위험

---

### 결정 3: 빌드 스크립트 구성
**선택된 옵션**: Storybook 전용 스크립트 (권장)

**변경 내용**:
```json
{
  "scripts": {
    "build": "npm run storybook:build",
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build",
    "registry:build": "shadcn build -o ./public/v2/r",
    "registry:dev": "shadcn build -o ./public/v2/r --watch"
  }
}
```

**이유**:
- 이 프로젝트는 Storybook Registry 프로젝트
- Storybook 개발 서버만으로 충분
- 명확한 목적과 단순한 구조

**대안 (선택 안 함)**: Vite dev server 추가
- 사용자 요청 범위를 벗어남
- 불필요한 Vite 설정 추가
- 프로젝트 복잡도 증가

---

## 📊 Relevant Files

- `.storybook/main.ts` - Storybook 프레임워크 설정
- `package.json` - 의존성 및 스크립트
- `src/registry/atoms/button-story/button.stories.tsx` - Button 스토리
- `src/registry/atoms/breadcrumb-story/breadcrumb.stories.tsx` - Breadcrumb 스토리
- `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx` - Navigation Menu 스토리
- `src/registry/atoms/select-story/select.stories.tsx` - Select 스토리
- `src/registry/atoms/aspect-ratio-story/aspect-ratio.stories.tsx` - Aspect Ratio 스토리
- `src/registry/atoms/scroll-area-story/scroll-area.stories.tsx` - Scroll Area 스토리
- `CLAUDE.md` - 프로젝트 개발 가이드 문서

---

## 📝 Notes

### 주의사항
1. **최소 수정 원칙**: 요청된 Next.js 제거만 수행하며 불필요한 개선 금지
2. **테스트 우선**: 각 단계마다 검증 후 다음 단계 진행
3. **오류 처리**: 2회 실패 시 웹 검색으로 해결 방안 모색
4. **문서화**: 모든 변경사항을 명확히 기록

### 성공 기준
- [ ] Next.js 패키지 완전 제거
- [ ] Storybook이 @storybook/react-vite로 정상 작동
- [ ] 6개 스토리 모두 정상 렌더링
- [ ] Registry 빌드 성공
- [ ] 모든 품질 검증 통과 (lint, type-check)
- [ ] 문서 업데이트 완료

### 예상 문제점 및 대응
- **Storybook 빌드 설정 차이**: Vite 설정이 다를 수 있으나 기본 설정으로 충분
- **이미지 경로 문제**: public/ 디렉토리 구조는 동일하므로 문제 없을 것으로 예상
- **테마 전환 이슈**: next-themes가 React 환경에서 정상 동작 확인됨

---

## ✅ Tasks

Phase 2 (세부 작업)는 사용자 승인 후 작성합니다.

- [ ] 작업 1: Storybook 프레임워크 변경
- [ ] 작업 2: Next.js 관련 패키지 제거
- [ ] 작업 3: 스토리 파일의 next/link 교체
- [ ] 작업 4: 스토리 파일의 next/image 교체
- [ ] 작업 5: Registry 빌드 및 검증
- [ ] 작업 6: 문서 업데이트 및 완료

---

---

## 🔄 옵션 B 선택 시 추가 계획 (react-router-dom 사용)

**⚠️ 이 섹션은 사용자가 옵션 B를 선택한 경우에만 적용됩니다.**

### 추가 작업 3-1: react-router-dom 및 Storybook Addon 설치
**예상 시간**: 30분
**위험도**: 낮음

**상세 설명**:
react-router-dom과 Storybook 통합을 위한 공식 Addon을 설치하고 기본 설정을 수행합니다.

**수행 내역**:
```bash
# 패키지 설치
npm install react-router-dom
npm install -D storybook-addon-remix-react-router
```

**검증 방법**:
- `package.json`에 두 패키지가 올바르게 추가되었는지 확인
- 버전 호환성 확인 (Storybook 9 → storybook-addon-remix-react-router@5)

---

### 추가 작업 3-2: Storybook 설정 업데이트
**예상 시간**: 30분
**위험도**: 중간

**상세 설명**:
Storybook의 메인 설정과 프리뷰 설정을 업데이트하여 react-router-dom을 모든 스토리에서 사용할 수 있도록 합니다.

**수행 내역**:

**1) `.storybook/main.ts` 수정**:
```typescript
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/registry/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "storybook-addon-remix-react-router", // 추가
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
export default config;
```

**2) `.storybook/preview.ts` 파일 확인 및 수정**:
```typescript
import type { Preview } from "@storybook/react";
import { withRouter } from 'storybook-addon-remix-react-router';

const preview: Preview = {
  decorators: [
    withRouter, // Router decorator 추가
  ],
  parameters: {
    // 기존 parameters 유지
  },
};

export default preview;
```

**검증 방법**:
- TypeScript 컴파일 오류 없는지 확인
- `npm run storybook` 실행하여 정상 구동 확인
- 브라우저 콘솔에서 Router Context 오류 없는지 확인

---

### 수정된 작업 3: next/link를 react-router-dom/Link로 교체
**예상 시간**: 2시간 (기존 1.5시간 + 30분 추가)
**위험도**: 중간

**상세 설명**:
4개 스토리 파일에서 Next.js의 Link를 react-router-dom의 Link로 교체합니다. href prop이 to prop으로 변경됩니다.

**수행 내역**:

**1) `src/registry/atoms/button-story/button.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<Button asChild>
  <Link href="/login">Login</Link>
</Button>

// After
import { Link } from 'react-router-dom';
<Button asChild>
  <Link to="/login">Login</Link>
</Button>
```

**2) `src/registry/atoms/breadcrumb-story/breadcrumb.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<BreadcrumbLink asChild>
  <Link href="/">Home</Link>
</BreadcrumbLink>

// After
import { Link } from 'react-router-dom';
<BreadcrumbLink asChild>
  <Link to="/">Home</Link>
</BreadcrumbLink>
```

**3) `src/registry/atoms/navigation-menu-story/navigation-menu.stories.tsx`**
```tsx
// Before
import Link from "next/link";
<NavigationMenuLink asChild>
  <Link href="/docs">Documentation</Link>
</NavigationMenuLink>

// After
import { Link } from 'react-router-dom';
<NavigationMenuLink asChild>
  <Link to="/docs">Documentation</Link>
</NavigationMenuLink>
```

**4) `src/registry/atoms/select-story/select.stories.tsx`**
```tsx
// Before
import Link from "next/link";
// 파일 내 Link 사용 패턴 확인 후 동일하게 교체

// After
import { Link } from 'react-router-dom';
// href → to prop 변경
```

**주의사항**:
- `href` → `to` prop 변경 필수
- `asChild` prop은 Radix UI의 Slot 패턴으로 그대로 유지
- 경로 값은 변경하지 않음 ("/login" → "/login" 그대로)
- 다른 props나 className도 변경하지 않음

**검증 방법**:
- TypeScript 컴파일 오류 없는지 확인
- `npm run storybook`로 각 스토리 렌더링 확인
- 링크가 정상적으로 표시되는지 시각적 확인
- React Router Link가 제공하는 기능 (prefetch, active state 등)이 올바르게 작동하는지 확인

---

### 옵션 B 선택 시 총 작업 시간 및 영향

**총 예상 시간**: 7.5시간 (기존 5.5시간 + 2시간 추가)

**추가 영향 파일**:
- `.storybook/main.ts` (addon 추가)
- `.storybook/preview.ts` (decorator 추가)
- `package.json` (2개 패키지 추가)

**총 영향 파일**: 11개 (기존 9개 + 2개)

**추가 위험 요소**:
- Storybook Addon 버전 호환성
- Router Context 누락 시 런타임 오류
- 복잡도 증가로 인한 유지보수 부담

---

**마지막 업데이트**: 2025-01-15 (react-router-dom 옵션 분석 추가)
**작성자**: Claude Code
**승인 상태**: 사용자 의사결정 대기 (옵션 A 또는 B 선택 필요)

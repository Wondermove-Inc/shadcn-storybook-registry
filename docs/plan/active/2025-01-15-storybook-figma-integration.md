# Storybook-Figma 연동 계획

**작성일**: 2025-01-15
**프로젝트**: shadcn-storybook-registry
**계획 유형**: Figma URL 필요한 디자이너-개발자 협업 도구 구축

---

## 🎯 목표 (Goal)

Figma 디자인과 Storybook 구현 간 **양방향 통합**을 구축하여 디자이너-개발자 협업을 혁신하고, Best Practice 점수를 **93/100에서 95/100으로 2점 추가 향상**시킵니다.

## 🎯 목적 (Purpose)

1. **디자이너-개발자 협업 도구 구축**: Figma ↔ Storybook 양방향 워크플로우 완성
2. **디자인-구현 일치 검증 자동화**: 수동 비교 작업 제거
3. **Design handoff 프로세스 간소화**: Figma에서 Storybook 직접 확인 가능
4. **피드백 루프 단축**: 디자이너가 실시간으로 구현 확인 및 피드백 제공
5. **Registry 시스템 Figma 메타데이터 통합**: 중앙 집중식 Figma URL 관리

## 📏 측정 기준 (Metric)

- **Best Practice 점수**: 93/100 → 95/100 (2점 향상)
- **Figma 연동률**: 0% → 100% (66/66 스토리)
- **addon-designs 설치**: ❌ → ✅ 완료
- **Chromatic 배포**: ❌ → ✅ 완료
- **Storybook Connect 연결**: ❌ → ✅ 완료
- **registry.json Figma 필드**: 0개 → 66개
- **디자이너-개발자 협업 시간**: 현재 대비 50% 단축

---

## 📋 Relevant Files

### Storybook 설정 파일
- `.storybook/main.ts` - addon-designs 추가
- `package.json` - chromatic 패키지 추가

### 스토리 파일 (66개 전체)
- `src/registry/atoms/*/**.stories.tsx` - 60+ 스토리에 Figma URL 추가
- `src/registry/tokens/*/**.stories.tsx` - 5개 토큰 스토리
- `src/registry/foundation/*/**.stories.tsx` - 1개
- `src/registry/templates/*/**.stories.tsx` - 1개

### Registry 시스템
- `registry.json` - 66개 항목에 figma 메타데이터 추가

### CI/CD
- `.github/workflows/chromatic.yml` - Chromatic 자동 배포 설정
- `.github/secrets/CHROMATIC_PROJECT_TOKEN` - Chromatic 프로젝트 토큰

### 스크립트 (자동화)
- `scripts/add-figma-urls.ts` - Figma URL 일괄 추가 스크립트 (생성 필요)
- `scripts/figma-mapping.json` - Figma URL 매핑 데이터 (생성 필요)

---

## 📝 Notes

### 현재 상태 (분석 보고서 기반)

**Figma 연동 상태**: ❌ **완전 부재 (0%)**

**검토 결과**:
- `package.json`: Figma 관련 애드온 없음
- `.storybook/main.ts`: addon-designs 등록 없음
- 스토리 파일 (66개): design parameters 사용 없음
- `registry.json`: figma 필드 없음
- Chromatic: addon 설치만 되어 있고 배포 없음

**현재 영향**:
- ❌ 디자이너가 Storybook에서 Figma 디자인 확인 불가
- ❌ 개발자가 구현 중 Figma 디자인 참고 어려움
- ❌ 디자인-구현 일치 검증이 완전히 수동 작업
- ❌ 디자이너-개발자 간 피드백 루프 느림

### Figma 연동 도구 (분석 보고서 권장사항)

#### 🔧 도구 1: @storybook/addon-designs
**목적**: Storybook에 Figma 디자인 embed (개발자 → Figma)

**장점**:
- ✅ 개발자가 Storybook에서 Figma 디자인 직접 확인
- ✅ 디자인-구현 비교가 한 화면에서 가능
- ✅ 무료 오픈소스
- ✅ 여러 디자인 도구 지원 (Figma, Sketch, Adobe XD)

**제한사항**:
- ⚠️ Figma URL 수동 추가 필요 (각 컴포넌트마다)
- ⚠️ 디자인 변경 시 URL 업데이트 필요

---

#### 🔗 도구 2: Storybook Connect for Figma
**목적**: Figma에 Storybook 스토리 embed (디자이너 → Storybook, 역방향)

**요구사항**:
- Chromatic에 Storybook 배포 필수
- Figma plugin "Storybook Connect" 설치

**장점**:
- ✅ **디자이너 친화적** - Figma 안에서 모든 작업 가능
- ✅ 실제 구현된 컴포넌트의 인터랙션 테스트
- ✅ 디자인 handoff 간소화
- ✅ 디자이너-개발자 간 피드백 루프 단축

**현재 프로젝트 상태**:
- `@chromatic-com/storybook` 애드온 이미 설치됨 ✅
- Chromatic 배포만 필요

---

### 이상적인 Figma 연동 워크플로우

```
1. [Figma 디자인 단계]
   - 디자이너가 Figma에서 컴포넌트 디자인
   - Component variants, properties 정의
   - Design Tokens 설정

      ↓ (Storybook Connect)

2. [Storybook 확인 단계]
   - 디자이너가 Figma에서 Storybook Connect 실행
   - 구현 여부 확인 (미구현 시 디자인 스펙 전달)

      ↓

3. [구현 단계]
   - 개발자가 Storybook에서 컴포넌트 구현
   - addon-designs로 Figma 디자인과 비교하며 작업
   - Design Tokens (CSS 변수) 활용

      ↓ (Storybook Connect)

4. [검증 단계]
   - 디자이너가 Figma에서 구현 확인
   - 인터랙션, 애니메이션, 반응형 동작 테스트
   - 피드백 제공

      ↓

5. [반복 단계]
   - 빠른 피드백 루프
   - 디자인 변경 시 Storybook 자동 반영
```

---

### 우선순위 컴포넌트 (5개)

분석 보고서에서 권장한 Figma URL 최우선 추가 대상:

1. **Button** (가장 기본)
   - 모든 UI의 기초
   - Variant: default, destructive, outline, secondary, ghost, link
   - Size: default, sm, lg, icon

2. **Card** (레이아웃)
   - 콘텐츠 컨테이너
   - CardHeader, CardTitle, CardDescription, CardContent, CardFooter

3. **Input** (Form)
   - 가장 많이 사용되는 Form 컴포넌트
   - Type: text, email, password, number, etc.

4. **Dialog** (Overlay)
   - 복잡한 오버레이 인터랙션
   - DialogTrigger, DialogContent, DialogHeader, DialogFooter

5. **Form** (복합)
   - React Hook Form + Zod 통합
   - 전체 Form 워크플로우 검증

---

### Chromatic 플랜 정보

**무료 플랜**:
- 5,000 스냅샷/월
- Unlimited 사용자
- Public 프로젝트

**유료 플랜**:
- Unlimited 스냅샷
- Private 프로젝트
- Advanced features
- $149/월부터

---

### registry.json Figma 메타데이터 스키마

분석 보고서 권장 구조:

```json
{
  "name": "button-story",
  "type": "registry:component",
  "title": "Button Story",
  "description": "Interactive Storybook stories demonstrating button component usage and variants",
  "categories": ["atoms", "storybook", "button", "interaction"],
  "figma": {
    "url": "https://www.figma.com/file/XXX/YYY?node-id=1:2",
    "nodeId": "1:2",
    "componentSetName": "Button"
  },  // 👈 Figma 메타데이터 추가
  "registryDependencies": ["button"],
  "dependencies": ["lucide-react"],
  "files": [...]
}
```

**장점**:
- Registry 시스템에서 Figma URL 중앙 관리
- 자동화 스크립트로 스토리 파일에 Figma URL 주입 가능
- 단일 소스 (Single Source of Truth)

---

### 제약 사항

- ⚠️ **Figma URL 필수**: 모든 작업에 Figma 디자인 파일과 URL 필요
- ⚠️ **디자이너 협업 필요**: Figma URL 수집, node-id 확인, Storybook Connect 설정
- ⚠️ **Chromatic 비용**: 무료 플랜 (5,000 스냅샷/월) 초과 시 유료 전환 필요
- ✅ **Figma 독립 계획 우선**: 본 계획은 "Figma 독립 계획" 완료 후 실행 권장

---

## ✅ Tasks

### Phase 1: addon-designs 설치 및 초기 설정

#### [ ] 1. @storybook/addon-designs 설치
**목적**: Storybook에 Figma 디자인 embed 기능 추가
**예상 시간**: 15분
**난이도**: ⭐ 쉬움

**작업 내용**:
1. addon-designs 설치:
   ```bash
   npx storybook@latest add @storybook/addon-designs
   ```

2. `.storybook/main.ts`에 자동 추가 확인:
   ```typescript
   addons: [
     "@chromatic-com/storybook",
     "@storybook/addon-docs",
     "@storybook/addon-a11y",
     "@storybook/addon-vitest",
     "@storybook/addon-themes",
     "@storybook/addon-designs",  // 👈 자동 추가 확인
   ],
   ```

3. Storybook 재시작 및 확인:
   ```bash
   npm run storybook
   # 스토리 패널에서 "Design" 탭 추가 확인
   ```

**완료 기준**: addon-designs 설치 완료, Storybook에 "Design" 탭 표시

---

#### [ ] 2. 우선순위 5개 컴포넌트에 Figma URL 추가
**목적**: Button, Card, Input, Dialog, Form에 Figma URL 연결하여 효과 즉시 검증
**예상 시간**: 45분 (9분/개)
**난이도**: ⭐ 쉬움

**작업 내용**:
1. **디자이너로부터 Figma URL 수집**:
   - Figma 파일 URL
   - 각 컴포넌트의 node-id
   - 예시: `https://www.figma.com/file/XXX/YYY?node-id=1:2`

2. **Button 컴포넌트 Figma URL 추가**:
   ```typescript
   // src/registry/atoms/button-story/button.stories.tsx

   import type { Meta, StoryObj } from "@storybook/nextjs-vite";
   import { Button } from "@/components/ui/button";

   const meta = {
     title: "ui/Button",
     component: Button,
     tags: ["autodocs"],
     parameters: {
       layout: "centered",
       design: {  // 👈 Figma URL 추가
         type: 'figma',
         url: 'https://www.figma.com/file/XXX/YYY?node-id=1:2',
       },
     },
   } satisfies Meta<typeof Button>;

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       variant: 'default',
       children: 'Button',
     },
   };
   ```

3. **나머지 4개 컴포넌트도 동일하게 추가**:
   - `src/registry/atoms/card-story/card.stories.tsx`
   - `src/registry/atoms/input-story/input.stories.tsx`
   - `src/registry/atoms/dialog-story/dialog.stories.tsx`
   - `src/registry/atoms/form-story/form.stories.tsx`

4. **Figma URL 형식**:
   ```
   https://www.figma.com/file/[FILE_ID]/[FILE_NAME]?node-id=[NODE_ID]
   ```

5. **검증**:
   ```bash
   npm run storybook
   # 5개 컴포넌트 스토리에서 "Design" 탭 클릭
   # Figma 디자인이 iframe으로 표시되는지 확인
   ```

**완료 기준**: 5개 우선순위 컴포넌트 Figma URL 추가 완료, Design 탭에서 Figma 디자인 확인 가능

---

### Phase 2: Chromatic 배포 및 Storybook Connect 설정

#### [ ] 3. Chromatic 프로젝트 생성 및 첫 배포
**목적**: Storybook을 Chromatic에 배포하여 Figma Connect 연결 준비
**예상 시간**: 1시간
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. **Chromatic 패키지 설치**:
   ```bash
   npm install --save-dev chromatic
   ```

2. **Chromatic 프로젝트 생성**:
   - https://www.chromatic.com/ 접속
   - "Sign up with GitHub" 클릭
   - GitHub 계정 연동 및 인증
   - "Create a project" 클릭
   - Repository 선택: `lloydrichards/shadcn-storybook-registry`
   - 프로젝트 토큰 발급받기: `chpt_xxxxxxxxxxxxx`

3. **package.json에 스크립트 추가**:
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --project-token=chpt_xxxxxxxxxxxxx",
       "chromatic:ci": "chromatic --exit-zero-on-changes"
     }
   }
   ```

4. **첫 배포 실행**:
   ```bash
   npm run chromatic
   # 66개 스토리 스냅샷 생성 (약 5-10분 소요)
   # 성공 시 Chromatic URL 출력: https://[YOUR-ID].chromatic.com
   ```

5. **Chromatic 대시보드 확인**:
   - 배포된 Storybook 확인
   - 66개 스토리 스냅샷 확인
   - Public URL 복사: `https://[YOUR-ID].chromatic.com`

6. **GitHub Secrets 설정** (CI/CD 준비):
   - GitHub Repository → Settings → Secrets and variables → Actions
   - "New repository secret" 클릭
   - Name: `CHROMATIC_PROJECT_TOKEN`
   - Secret: `chpt_xxxxxxxxxxxxx` (프로젝트 토큰)

**완료 기준**: Chromatic 첫 배포 완료, Public URL 확보, GitHub Secret 설정 완료

---

#### [ ] 4. Chromatic CI/CD 통합 (옵션)
**목적**: PR마다 자동으로 Chromatic 배포 및 Visual Regression 테스트
**예상 시간**: 30분
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. **GitHub Actions 워크플로우 파일 생성**:
   ```yaml
   # .github/workflows/chromatic.yml
   name: 'Chromatic Deployment'

   on:
     push:
       branches:
         - main
         - react-18-19-dual-support
     pull_request:

   jobs:
     chromatic:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repository
           uses: actions/checkout@v4
           with:
             fetch-depth: 0  # Chromatic은 전체 Git 히스토리 필요

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Run Chromatic
           run: npm run chromatic
           env:
             CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
   ```

2. **워크플로우 테스트**:
   ```bash
   git add .github/workflows/chromatic.yml
   git commit -m "ci: add Chromatic CI/CD workflow"
   git push
   # GitHub Actions 탭에서 워크플로우 실행 확인
   ```

3. **PR에서 Chromatic 확인**:
   - 새 PR 생성
   - Checks 탭에서 "Chromatic Deployment" 확인
   - UI 변경 사항 자동 감지 확인

**완료 기준**: GitHub Actions 워크플로우 생성 완료, PR에서 Chromatic 자동 실행 확인

---

#### [ ] 5. Figma Storybook Connect plugin 설치 및 연결
**목적**: 디자이너가 Figma 안에서 Storybook 스토리 직접 확인 가능하도록 설정
**예상 시간**: 30분
**난이도**: ⭐⭐ 보통 (디자이너 협업 필요)

**작업 내용**:
1. **Figma에서 plugin 설치** (디자이너 작업):
   - Figma 메뉴 → Plugins → Browse plugins in Community
   - "Storybook Connect" 검색
   - "Install" 클릭

2. **Chromatic URL 연결** (디자이너 작업):
   - Figma에서 아무 파일이나 열기
   - Plugins → Storybook Connect 실행
   - "Connect to Storybook" 버튼 클릭
   - Chromatic 프로젝트 URL 입력: `https://[YOUR-ID].chromatic.com`
   - "Connect" 클릭하여 인증

3. **Figma 프레임에 Storybook 스토리 연결** (디자이너 작업):
   - Button 컴포넌트 디자인 프레임 선택
   - Storybook Connect plugin에서 "Button" 스토리 검색
   - "Link to Frame" 클릭

4. **인터랙션 테스트** (디자이너 작업):
   - Figma에서 연결된 프레임 선택
   - Storybook Connect panel에서 실시간 Storybook 렌더링 확인
   - Variant, Size 등 Props 변경 테스트
   - Light/Dark 모드 전환 테스트

5. **5개 우선순위 컴포넌트 모두 연결**:
   - Button
   - Card
   - Input
   - Dialog
   - Form

**완료 기준**: Figma Storybook Connect plugin 설치 완료, 5개 컴포넌트 Figma 프레임에 연결, 디자이너가 실시간 Storybook 확인 가능

---

### Phase 3: 전체 스토리 Figma URL 매핑

#### [ ] 6. Figma URL 매핑 데이터 수집
**목적**: 나머지 61개 스토리의 Figma URL + node-id 수집 및 정리
**예상 시간**: 2시간 (디자이너와 협업)
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. **스프레드시트 생성** (Google Sheets 또는 Excel):
   ```
   | Story Name | Figma URL | Node ID | Component Set Name | Status |
   |------------|-----------|---------|-------------------|--------|
   | button-story | https://... | 1:2 | Button | ✅ Done |
   | card-story | https://... | 2:3 | Card | ✅ Done |
   | input-story | https://... | 3:4 | Input | ✅ Done |
   | dialog-story | https://... | 4:5 | Dialog | ✅ Done |
   | form-story | https://... | 5:6 | Form | ✅ Done |
   | accordion-story | https://... | 6:7 | Accordion | ⏳ TODO |
   | alert-story | https://... | 7:8 | Alert | ⏳ TODO |
   | ... | ... | ... | ... | ... |
   ```

2. **디자이너와 협업하여 Figma URL 수집**:
   - Figma 파일에서 각 컴포넌트 선택
   - "Copy link to selection" 클릭
   - URL 스프레드시트에 붙여넣기
   - node-id 추출: `?node-id=1:2` 부분

3. **66개 스토리 전체 목록** (분석 보고서 기반):

   **Atoms (60+개)**:
   - accordion, alert, alert-dialog, aspect-ratio, avatar
   - badge, breadcrumb, button
   - calendar, calendar-form, card, carousel, checkbox, collapsible, combobox, command, context-menu
   - data-table, date-picker, dialog, drawer, dropdown-menu
   - form
   - hover-card
   - input, input-otp
   - label
   - menubar
   - navigation-menu
   - pagination, popover, progress
   - radio-group, resizable
   - scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch
   - table, tabs, textarea, toggle, toggle-group, tooltip

   **Calendar Blocks (6개)**:
   - date-of-birth-picker, date-time-picker, month-year-selector, natural-language-picker, range-calendar, week-picker

   **Chart (5개)**:
   - area-chart, bar-chart, line-chart, pie-chart, radar-chart

   **Tokens (5개)**:
   - color, typography, spacing, shadow, radius

   **Foundation (1개)**:
   - typography-components

   **Templates (1개)**:
   - dashboard-template

4. **JSON 파일 생성**:
   ```json
   // scripts/figma-mapping.json
   {
     "button-story": {
       "url": "https://www.figma.com/file/XXX?node-id=1:2",
       "nodeId": "1:2",
       "componentSetName": "Button"
     },
     "card-story": {
       "url": "https://www.figma.com/file/XXX?node-id=2:3",
       "nodeId": "2:3",
       "componentSetName": "Card"
     },
     // ... 나머지 64개
   }
   ```

**완료 기준**: 66개 스토리 모두 Figma URL + node-id 수집 완료, `scripts/figma-mapping.json` 파일 생성

---

#### [ ] 7. 자동화 스크립트로 나머지 61개 스토리에 Figma URL 추가
**목적**: 수동 작업 최소화, 일괄 Figma URL 추가
**예상 시간**: 1시간 30분 (스크립트 작성 30분 + 실행 및 검증 1시간)
**난이도**: ⭐⭐⭐ 어려움

**작업 내용**:
1. **자동화 스크립트 작성**:
   ```typescript
   // scripts/add-figma-urls.ts
   import { readFileSync, writeFileSync } from 'fs';
   import { join } from 'path';

   // Figma URL 매핑 데이터 로드
   const figmaMapping = JSON.parse(
     readFileSync('scripts/figma-mapping.json', 'utf-8')
   );

   // 각 스토리 파일에 Figma URL 추가
   Object.entries(figmaMapping).forEach(([storyName, figmaData]: [string, any]) => {
     // 스토리 파일 경로 결정
     let storyPath: string;

     if (storyName.includes('chart')) {
       storyPath = `src/registry/atoms/chart-story/${storyName}.stories.tsx`;
     } else if (['color', 'typography', 'spacing', 'shadow', 'radius'].includes(storyName.replace('-story', ''))) {
       storyPath = `src/registry/tokens/${storyName}/${storyName.replace('-story', '')}.stories.tsx`;
     } else if (storyName === 'typography-components-story') {
       storyPath = 'src/registry/foundation/typography-components-story/typography-components.stories.tsx';
     } else if (storyName === 'dashboard-template-story') {
       storyPath = 'src/registry/templates/dashboard-template-story/dashboard-template.stories.tsx';
     } else {
       // Atoms
       storyPath = `src/registry/atoms/${storyName}/${storyName.replace('-story', '')}.stories.tsx`;
     }

     try {
       let content = readFileSync(storyPath, 'utf-8');

       // 이미 Figma URL이 있는지 확인
       if (content.includes('design:')) {
         console.log(`⏭️  Skip: ${storyName} (already has Figma URL)`);
         return;
       }

       // meta에 design parameter 추가
       const metaRegex = /(const meta.*?=\s*\{[\s\S]*?parameters:\s*\{)/;

       if (metaRegex.test(content)) {
         // parameters가 이미 있는 경우
         content = content.replace(
           metaRegex,
           `$1\n      design: {\n        type: 'figma',\n        url: '${figmaData.url}',\n      },`
         );
       } else {
         // parameters가 없는 경우
         const metaNoParamsRegex = /(const meta.*?=\s*\{[\s\S]*?)(tags:.*?\[.*?\],)/;
         content = content.replace(
           metaNoParamsRegex,
           `$1$2\n    parameters: {\n      design: {\n        type: 'figma',\n        url: '${figmaData.url}',\n      },\n    },`
         );
       }

       writeFileSync(storyPath, content);
       console.log(`✅ Success: ${storyName}`);
     } catch (error) {
       console.error(`❌ Error: ${storyName} - ${error.message}`);
     }
   });

   console.log('\n🎉 Figma URL 추가 완료!');
   ```

2. **스크립트 실행 권한 부여 및 실행**:
   ```bash
   chmod +x scripts/add-figma-urls.ts
   npx tsx scripts/add-figma-urls.ts
   ```

3. **수동 검증 (샘플 5개)**:
   - `src/registry/atoms/accordion-story/accordion.stories.tsx` 열어서 Figma URL 확인
   - `src/registry/atoms/alert-story/alert.stories.tsx` 열어서 Figma URL 확인
   - `src/registry/tokens/color-story/color.stories.tsx` 열어서 Figma URL 확인
   - `src/registry/atoms/chart-story/bar-charts.stories.tsx` 열어서 Figma URL 확인
   - `src/registry/templates/dashboard-template-story/dashboard-template.stories.tsx` 열어서 Figma URL 확인

4. **Storybook에서 전체 검증**:
   ```bash
   npm run storybook
   # 무작위로 10개 스토리 선택하여 "Design" 탭 확인
   # Figma 디자인이 정상적으로 로드되는지 확인
   ```

**완료 기준**: 자동화 스크립트 실행 완료, 61개 스토리 Figma URL 추가, Storybook에서 정상 동작 확인

---

#### [ ] 8. registry.json에 Figma 메타데이터 추가
**목적**: Registry 시스템에서 Figma URL 중앙 관리
**예상 시간**: 1시간
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. **registry.json 스키마 확장**:
   ```json
   {
     "$schema": "https://ui.shadcn.com/schema/registry.json",
     "name": "shadcn-storybook-registry",
     "homepage": "https://github.com/lloydrichards/shadcn-storybook-registry",
     "items": [
       {
         "name": "button-story",
         "type": "registry:component",
         "title": "Button Story",
         "description": "Interactive Storybook stories demonstrating button component usage and variants",
         "categories": ["atoms", "storybook", "button", "interaction"],
         "author": "Lloyd Richards <lloyd.d.richards@gmail.com>",
         "figma": {  // 👈 Figma 메타데이터 추가
           "url": "https://www.figma.com/file/XXX/YYY?node-id=1:2",
           "nodeId": "1:2",
           "componentSetName": "Button"
         },
         "registryDependencies": ["button"],
         "dependencies": ["lucide-react"],
         "files": [{
           "path": "src/registry/atoms/button-story/button.stories.tsx",
           "type": "registry:component"
         }]
       },
       // ... 나머지 65개
     ]
   }
   ```

2. **자동화 스크립트 작성**:
   ```typescript
   // scripts/update-registry-figma.ts
   import { readFileSync, writeFileSync } from 'fs';

   const registry = JSON.parse(readFileSync('registry.json', 'utf-8'));
   const figmaMapping = JSON.parse(readFileSync('scripts/figma-mapping.json', 'utf-8'));

   registry.items.forEach((item: any) => {
     const figmaData = figmaMapping[item.name];
     if (figmaData) {
       item.figma = {
         url: figmaData.url,
         nodeId: figmaData.nodeId,
         componentSetName: figmaData.componentSetName || item.title.replace(' Story', ''),
       };
     }
   });

   writeFileSync('registry.json', JSON.stringify(registry, null, 2));
   console.log('✅ registry.json에 Figma 메타데이터 추가 완료!');
   ```

3. **스크립트 실행**:
   ```bash
   npx tsx scripts/update-registry-figma.ts
   ```

4. **검증**:
   ```bash
   # registry.json 열어서 figma 필드 확인
   grep -A 5 '"figma"' registry.json | head -20

   # Registry 빌드 및 테스트
   npm run registry:build
   npm run dev
   # http://localhost:3000/v2/r/button-story.json 접속하여 figma 필드 확인
   ```

**완료 기준**: registry.json에 66개 항목 모두 figma 메타데이터 추가, Registry 빌드 성공, JSON 파일에서 figma 필드 확인

---

### Phase 4: 최종 검증 및 문서화

#### [ ] 9. 전체 시스템 통합 테스트
**목적**: Figma ↔ Storybook 양방향 통합 완전성 검증
**예상 시간**: 1시간
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. **Storybook → Figma 방향 테스트**:
   ```bash
   npm run storybook
   ```
   - 무작위 20개 스토리 선택
   - 각 스토리에서 "Design" 탭 클릭
   - Figma 디자인이 iframe으로 정상 로드되는지 확인
   - Figma에서 디자인 변경 시 Storybook에서 반영 확인

2. **Figma → Storybook 방향 테스트** (디자이너 협업):
   - Figma 열기
   - Storybook Connect plugin 실행
   - 무작위 20개 컴포넌트 프레임 선택
   - 각 프레임에서 Storybook 스토리 연결
   - 실시간 Storybook 렌더링 확인
   - Props 변경 (Variant, Size 등) 테스트

3. **Registry 시스템 테스트**:
   ```bash
   npm run registry:build
   npm run dev
   ```
   - 무작위 10개 스토리 Registry JSON 확인
   - `http://localhost:3000/v2/r/button-story.json` 접속
   - figma 필드 존재 확인
   - URL 형식 유효성 검증

4. **Chromatic 배포 테스트**:
   ```bash
   npm run chromatic
   ```
   - 배포 성공 확인
   - Chromatic 대시보드에서 모든 스토리 확인
   - Figma Connect에서 Chromatic URL 접속 확인

5. **CI/CD 테스트** (옵션):
   - 새 PR 생성
   - GitHub Actions에서 Chromatic 자동 실행 확인
   - PR Checks에서 UI 변경 사항 확인

**완료 기준**: 모든 방향의 통합 테스트 통과, Figma ↔ Storybook 양방향 통신 정상 동작

---

#### [ ] 10. Figma 연동 문서화
**목적**: 디자이너와 개발자를 위한 Figma 연동 가이드 작성
**예상 시간**: 30분
**난이도**: ⭐ 쉬움

**작업 내용**:
1. **README.md에 Figma 연동 섹션 추가**:
   ```markdown
   ## Figma Integration

   This project is fully integrated with Figma for seamless designer-developer collaboration.

   ### For Developers

   **Viewing Figma Designs in Storybook**:
   1. Open Storybook: `npm run storybook`
   2. Navigate to any story
   3. Click the "Design" tab
   4. View the Figma design alongside the implementation

   **Adding Figma URL to a Story**:
   ```typescript
   const meta = {
     title: "ui/Component",
     component: Component,
     parameters: {
       design: {
         type: 'figma',
         url: 'https://www.figma.com/file/XXX?node-id=1:2',
       },
     },
   } satisfies Meta<typeof Component>;
   ```

   ### For Designers

   **Viewing Storybook in Figma**:
   1. Install "Storybook Connect" plugin from Figma Community
   2. Run the plugin
   3. Connect to: `https://[YOUR-ID].chromatic.com`
   4. Select a component frame
   5. Search and link the corresponding Storybook story
   6. View live implementation with interactive props

   ### Chromatic

   All Storybook stories are automatically deployed to Chromatic:
   - **Production URL**: `https://[YOUR-ID].chromatic.com`
   - **Visual Regression Testing**: Enabled on every PR
   ```

2. **CLAUDE.md 업데이트**:
   - Figma 연동 섹션 추가
   - addon-designs 사용법 설명
   - Storybook Connect 설정 가이드
   - Chromatic 배포 방법

**완료 기준**: README.md와 CLAUDE.md에 Figma 연동 문서 추가 완료

---

## 📊 예상 완료 시간표

| Phase | 작업 내용 | 작업 수 | 예상 시간 | 누적 시간 |
|-------|-----------|--------|----------|-----------|
| **Phase 1** | addon-designs 설치 및 초기 설정 | 2개 | 1h | 1h |
| **Phase 2** | Chromatic 배포 및 Connect 설정 | 3개 | 2h | 3h |
| **Phase 3** | 전체 스토리 Figma URL 매핑 | 3개 | 4h 30min | 7h 30min |
| **Phase 4** | 최종 검증 및 문서화 | 2개 | 1h 30min | 9h |
| **총계** | - | **10개** | **9h** | - |

## 🎯 성과 지표 (KPI)

| 지표 | 현재 (Before) | 목표 (After) | 달성률 |
|------|---------------|--------------|--------|
| **Best Practice 점수** | 93/100 | 95/100 | +2점 |
| **Figma 연동률** | 0/66 (0%) | 66/66 (100%) | +100% |
| **addon-designs 설치** | ❌ | ✅ | 완료 |
| **Chromatic 배포** | ❌ | ✅ | 완료 |
| **Storybook Connect** | ❌ | ✅ | 완료 |
| **registry.json figma 필드** | 0개 | 66개 | +66개 |
| **디자이너-개발자 협업 시간** | 기준선 | -50% | 50% 단축 |

---

## 🔗 의존성

**이 계획은 다음 계획 완료 후 실행 권장**:
- ✅ "Storybook Best Practice 개선 - Figma 독립 계획" 완료 (93/100 점수 달성)
- ⚠️ Figma 디자인 파일 및 URL 확보 필수
- ⚠️ 디자이너 협업 필수 (Figma URL 수집, Storybook Connect 설정)

---

**마지막 업데이트**: 2025-01-15
**계획 작성자**: Claude AI (shadcn-storybook-registry)
**승인 대기**: 사용자 "Accept" 또는 "Go" 응답 필요

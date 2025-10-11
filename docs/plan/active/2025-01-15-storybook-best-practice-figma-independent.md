# Storybook Best Practice 개선 계획 - Figma 독립형

**작성일**: 2025-01-15
**프로젝트**: shadcn-storybook-registry
**계획 유형**: Figma URL 없이 진행 가능한 개선사항

---

## 🎯 목표 (Goal)

Figma URL이 없는 현재 상황에서 즉시 실행 가능한 Storybook 품질 개선을 통해 Best Practice 점수를 **78/100에서 93/100으로 15점 향상**시킵니다.

## 🎯 목적 (Purpose)

1. **개발자 경험(DX) 향상**: Interactive Controls, Play functions 확대로 Storybook 활용도 증대
2. **문서화 일관성 확보**: 12개 누락된 Autodocs 태그 수정, 문서 품질 통일
3. **테스트 자동화 강화**: Play functions 커버리지를 22.7%에서 53%+로 확대
4. **Best Practice 준수**: Storybook 9 공식 권장사항 완전 준수
5. **기술 부채 제거**: 미사용 패키지 정리, 충돌 경고 해결

## 📏 측정 기준 (Metric)

- **Best Practice 점수**: 78/100 → 93/100 (15점 향상)
- **Autodocs 커버리지**: 54/66 (81.8%) → 66/66 (100%)
- **Play functions 커버리지**: 15/66 (22.7%) → 35/66 (53%+)
- **Args 기반 Interactive Controls**: 0개 → 20개 이상 컴포넌트
- **Actions argTypesRegex 경고**: 발생 중 → 완전 제거
- **패키지 의존성**: storybook-dark-mode 제거 완료

---

## 📋 Relevant Files

### Storybook 설정 파일
- `.storybook/main.ts` - Storybook addon 설정 (Essentials, Viewport 추가)
- `.storybook/preview.ts` - Actions argTypesRegex 제거, Backgrounds 활성화, A11y 레벨 변경
- `package.json` - storybook-dark-mode 제거, chromatic 추가, storybook-design-token 추가 (옵션)

### 스토리 파일 (66개)
- `src/registry/atoms/*/**.stories.tsx` - 60+ 스토리 (Autodocs 태그, Args, Play functions, Actions)
- `src/registry/tokens/*/**.stories.tsx` - 5개 토큰 스토리 (storybook-design-token 마이그레이션 옵션)
- `src/registry/foundation/*/**.stories.tsx` - 1개
- `src/registry/templates/*/**.stories.tsx` - 1개

### 문서 및 설정
- `docs/getting-started.mdx` - Getting Started 가이드 (옵션)
- `docs/design-principles.mdx` - Design Principles (옵션)
- `docs/contribution-guide.mdx` - Contribution Guide (옵션)
- `docs/design-tokens.mdx` - Design Tokens 가이드 (옵션)
- `.github/workflows/chromatic.yml` - Chromatic CI/CD (Visual Regression 옵션)

---

## 📝 Notes

### 현재 상태 (분석 보고서 기반)

**점수**: 78/100 (B+ 등급)

**강점**:
- ✅ CSF 3.0 format 100% 준수 (66/66)
- ✅ TypeScript `satisfies Meta<typeof Component>` 패턴 완벽
- ✅ Light/Dark 테마 지원 완비 (`@storybook/addon-themes`)
- ✅ JSDoc 문서화 100%
- ✅ Registry 시스템 체계적 관리 (registry.json)

**약점**:
- ⚠️ **Autodocs 태그 12개 누락** (54/66 = 81.8%)
- ⚠️ **Play functions 매우 낮음** (15/66 = 22.7%)
- ⚠️ **Interactive Controls 제한적** - render 함수 패턴으로 고정
- ⚠️ **Actions argTypesRegex 경고** - Visual test addon 충돌
- ❌ **storybook-dark-mode 미사용** - package.json에만 존재
- ❌ **Viewport addon 미설치**
- ❌ **Backgrounds addon 비활성화** (`disable: true`)
- ❌ **A11y test level "todo"** - CI 실패 없음

### 분석 보고서 핵심 발견사항

**경고 메시지 (storybook.log)**:
```
Attention: We've detecting that you're using actions.argTypesRegex together with the visual test addon:

We recommend removing the argTypesRegex and assigning explicit action with the fn function from storybook/test instead:
https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
```

**스토리 패턴 문제**:
```typescript
// 문제 패턴: render 함수로 고정, Args 무시
export const Default: Story = {
  args: { type: "single" },  // 정의했지만 사용되지 않음
  render: () => <AccordionDemo />  // 고정된 데모
};

// 개선 패턴: Args 기반 Interactive
export const Default: Story = {
  args: { variant: 'default', children: 'Click me' },
  // render 함수 생략, args가 직접 컴포넌트에 전달됨
};
```

**Play Functions 대상 컴포넌트 (20개 추가 필요)**:
- **Form** (5개): Input, Textarea, Select, Radio, Switch
- **Overlay** (5개): Dialog, Sheet, Drawer, Popover, Tooltip
- **Navigation** (5개): Tabs, Accordion, Collapsible, Navigation Menu, Menubar
- **Interactive** (5개): Slider, Toggle, Toggle Group, Combobox, Command

### 제약 사항

- ✅ **Figma URL 없음**: 모든 작업이 Figma 정보 없이 진행 가능
- ✅ **디자이너 협업 불필요**: 개발자 단독으로 완료 가능
- ⚠️ **Chart 스토리 타입 이슈**: `@ts-expect-error` 주석 (Storybook 9 타입 시스템 이슈, 수정 불가)
- ⚠️ **Registry 빌드 필수**: 스토리 변경 후 `npm run registry:build` 실행

### 실행 순서

**Phase 1**: 필수 개선 (2h 35min) → 78→82점
**Phase 2**: 기반 도구 설치 (1h 45min) → 82→86점
**Phase 3**: Interactive 기능 확대 (18h) → 86→90점
**Phase 4**: 고급 기능 (13h) → 90→93점

---

## ✅ Tasks

### Phase 1: 필수 개선 (우선순위: 최고)

#### [✅] 1. Autodocs 태그 12개 누락 수정 ✅ **완료** (2025-01-15)
**목적**: 문서 생성 일관성 확보, Best Practice 준수
**예상 시간**: 30분
**난이도**: ⭐ 쉬움
**실제 소요**: ~30분 (Previous conversation에서 완료)

**작업 내용**:
1. Autodocs 태그 누락 파일 식별:
   ```bash
   # 전체 스토리 파일 확인
   find src/registry -name "*.stories.tsx" | wc -l  # 66개 확인

   # Autodocs 태그 있는 파일 확인
   grep -r 'tags:.*"autodocs"' src/registry --include="*.stories.tsx" | wc -l  # 54개

   # 누락된 12개 파일 찾기
   find src/registry -name "*.stories.tsx" | while read file; do
     if ! grep -q 'tags:.*"autodocs"' "$file"; then
       echo "$file"
     fi
   done
   ```

2. 각 누락 파일에 tags 추가:
   ```typescript
   // 수정 전
   const meta = {
     title: "ui/Component",
     component: Component,
     parameters: { layout: "centered" },
   } satisfies Meta<typeof Component>;

   // 수정 후
   const meta = {
     title: "ui/Component",
     component: Component,
     tags: ["autodocs"], // 👈 추가
     parameters: { layout: "centered" },
   } satisfies Meta<typeof Component>;
   ```

3. 검증:
   ```bash
   grep -r 'tags:.*"autodocs"' src/registry --include="*.stories.tsx" | wc -l  # 66개 확인
   npm run storybook  # Docs 탭에서 12개 스토리 추가 확인
   ```

**완료 기준**: 66/66 스토리 모두 autodocs 태그 보유, Storybook Docs 탭에서 모든 스토리 문서 확인 가능

---

#### [✅] 2. Actions argTypesRegex 경고 해결 ✅ **완료** (2025-01-15)
**목적**: Visual test addon 충돌 제거, Storybook 9 Best Practice 준수
**예상 시간**: 2시간
**난이도**: ⭐⭐ 보통
**실제 소요**: ~1시간 (26개 파일 식별, 7개 핵심 파일 수정으로 경고 완전 제거)

**완료 결과**:
- ✅ .storybook/preview.ts에서 `actions: { argTypesRegex: "^on.*" }` 제거
- ✅ 7개 핵심 컴포넌트에 `fn()` 추가: Button, Input, Checkbox, Radio, Select, Switch, Dialog
- ✅ storybook.log에서 argTypesRegex 경고 완전 제거 확인
- ✅ lint, type-check 모두 통과

**작업 내용**:
1. `.storybook/preview.ts`에서 argTypesRegex 제거:
   ```typescript
   // 수정 전
   parameters: {
     actions: { argTypesRegex: "^on.*" },  // ❌ 삭제
     // ...
   },

   // 수정 후
   parameters: {
     // actions 설정 완전 제거
     // ...
   },
   ```

2. onXxx props를 가진 스토리 파일 식별:
   ```bash
   # Button, Input, Form, Dialog, Command 등 이벤트 핸들러 있는 컴포넌트 검색
   grep -r "onClick\|onSubmit\|onChange\|onSelect" src/registry --include="*.stories.tsx"
   ```

3. 각 스토리에 명시적 action 추가:
   ```typescript
   // 수정 전
   export const Default: Story = {
     args: {
       onClick: undefined,  // 또는 생략
     }
   };

   // 수정 후
   import { fn } from 'storybook/test';

   export const Default: Story = {
     args: {
       onClick: fn(),  // 👈 명시적 action 함수
       onSubmit: fn(),
       onChange: fn(),
     }
   };
   ```

4. 주요 대상 컴포넌트 (약 20개):
   - **UI**: Button, Badge, Alert
   - **Form**: Input, Textarea, Checkbox, Radio, Select, Switch
   - **Overlay**: Dialog, Sheet, Drawer, Popover
   - **Interactive**: Command, Combobox, Tabs

5. 검증:
   ```bash
   npm run storybook  # 경고 메시지 사라짐 확인
   npm run test:storybook  # Visual test 안정성 확인
   ```

**완료 기준**: storybook.log에서 argTypesRegex 경고 완전 제거, Actions 탭에서 fn() 함수 정상 동작

---

#### [✅] 3. storybook-dark-mode 애드온 정리 ✅ **완료** (2025-01-15)
**목적**: 미사용 패키지 의존성 정리
**예상 시간**: 5분
**난이도**: ⭐ 쉬움
**실제 소요**: ~3분

**완료 결과**:
- ✅ package.json에서 storybook-dark-mode@4.0.2 제거 (16개 패키지 제거)
- ✅ Storybook 9 호환성 경고 제거
- ✅ @storybook/addon-themes (withThemeByClassName) 정상 작동 확인

**작업 내용**:
1. package.json 확인:
   ```bash
   grep "storybook-dark-mode" package.json  # 설치 확인
   ```

2. .storybook/main.ts 확인:
   ```bash
   grep "storybook-dark-mode" .storybook/main.ts  # 미등록 확인
   ```

3. 패키지 제거:
   ```bash
   npm uninstall storybook-dark-mode
   ```

4. 대안 확인 (현재 사용 중):
   - `@storybook/addon-themes`로 Light/Dark 테마 완벽 지원 중
   - withThemeByClassName decorator 활용

**완료 기준**: package.json에서 storybook-dark-mode 완전 제거, 테마 기능 정상 동작 유지

---

### Phase 2: 기반 도구 설치 (우선순위: 높음)

#### [✅] 4. Viewport addon 설치 및 설정 ✅ **완료** (2025-01-15)
**목적**: 반응형 디자인 테스트 도구 제공
**예상 시간**: 30분
**난이도**: ⭐ 쉬움
**실제 소요**: ~10분 (Storybook 9에 이미 내장되어 별도 설치 불필요)

**완료 결과**:
- ✅ Viewport는 Storybook 9 코어에 내장됨 (별도 addon 설치 불필요)
- ✅ .storybook/preview.ts에 viewport 설정 추가 (Mobile, Tablet, Desktop)
- ✅ defaultViewport를 'desktop'으로 설정
- ✅ HMR로 설정 즉시 적용 확인

**작업 내용**:
1. Viewport addon 설치 (Essentials 포함):
   ```typescript
   // .storybook/main.ts
   addons: [
     "@chromatic-com/storybook",
     "@storybook/addon-docs",
     "@storybook/addon-a11y",
     "@storybook/addon-vitest",
     "@storybook/addon-themes",
     "@storybook/addon-viewport", // 👈 추가
   ],
   ```

2. Viewport 설정 추가:
   ```typescript
   // .storybook/preview.ts
   parameters: {
     // ...
     viewport: {
       viewports: {
         mobile: {
           name: 'Mobile',
           styles: { width: '375px', height: '667px' },
           type: 'mobile',
         },
         tablet: {
           name: 'Tablet',
           styles: { width: '768px', height: '1024px' },
           type: 'tablet',
         },
         desktop: {
           name: 'Desktop',
           styles: { width: '1920px', height: '1080px' },
           type: 'desktop',
         },
       },
       defaultViewport: 'desktop',
     },
   },
   ```

3. 검증:
   ```bash
   npm run storybook
   # Storybook 툴바에서 Viewport 선택 도구 확인
   # Mobile/Tablet/Desktop 뷰포트 전환 테스트
   ```

**완료 기준**: Storybook 툴바에 Viewport 선택 도구 표시, 3개 프리셋 정상 동작

---

#### [✅] 5. Backgrounds addon 활성화 ✅ **완료** (2025-01-15)
**목적**: 다양한 배경색에서 컴포넌트 시각적 테스트
**예상 시간**: 15분
**난이도**: ⭐ 쉬움
**실제 소요**: ~5분

**완료 결과**:
- ✅ Backgrounds는 Storybook 9 코어에 내장됨 (별도 addon 설치 불필요)
- ✅ .storybook/preview.ts에서 `disable: false`로 활성화
- ✅ 3가지 배경색 추가: light (#ffffff), dark (#0a0a0a), gray (#f5f5f5)
- ✅ 기본값을 'light'로 설정

**작업 내용**:
1. `.storybook/preview.ts` 수정:
   ```typescript
   // 수정 전
   parameters: {
     backgrounds: {
       disable: true,  // ❌ 비활성화
     },
   },

   // 수정 후
   parameters: {
     backgrounds: {
       disable: false,  // 👈 활성화
       default: 'light',
       values: [
         { name: 'light', value: '#ffffff' },
         { name: 'dark', value: '#0a0a0a' },
         { name: 'gray', value: '#f5f5f5' },
       ],
     },
   },
   ```

2. Themes addon과의 차이점 이해:
   - **Themes addon**: CSS 클래스 변경 (`dark` 클래스 토글)
   - **Backgrounds addon**: 캔버스 배경색만 변경

3. 검증:
   ```bash
   npm run storybook
   # 툴바에서 Backgrounds 선택 도구 확인
   # Light/Dark/Gray 배경 전환 테스트
   ```

**완료 기준**: Storybook 툴바에 Backgrounds 도구 표시, 3가지 배경색 정상 전환

---

#### [✅] 6. Essentials addon 도입 (옵션) ✅ **완료** (2025-01-15)
**목적**: 개별 addon을 통합 관리, Measure/Outline 등 추가 도구 확보
**예상 시간**: 1시간
**난이도**: ⭐⭐ 보통
**실제 소요**: ~10분 (조사 및 확인)

**완료 결과**:
- ✅ **Storybook 9에서 addon-essentials가 제거됨** - 코어에 통합 완료
- ✅ **현재 프로젝트 구조가 이미 Storybook 9 권장 구조와 일치**
- ✅ Actions, Controls, Backgrounds, Viewport → Storybook 코어에 내장
- ✅ Measure, Outline → Storybook 코어에 내장 (toolbar에서 자동 제공)
- ✅ Docs → @storybook/addon-docs로 별도 설치됨 (필수)
- ✅ 추가 작업 불필요 - 모든 Essentials 기능이 이미 사용 가능

**작업 내용**:
1. 현재 개별 addon 확인:
   - `@storybook/addon-docs` → Essentials 포함
   - Actions, Controls → Essentials 포함
   - Backgrounds, Viewport → 위 작업으로 개별 설치 또는 Essentials 포함

2. `.storybook/main.ts` 마이그레이션:
   ```typescript
   // 수정 전
   addons: [
     "@chromatic-com/storybook",
     "@storybook/addon-docs",      // Essentials에 포함
     "@storybook/addon-a11y",
     "@storybook/addon-vitest",
     "@storybook/addon-themes",
     "@storybook/addon-viewport",  // Essentials에 포함
   ],

   // 수정 후
   addons: [
     "@chromatic-com/storybook",
     "@storybook/addon-essentials", // 👈 통합 addon
     "@storybook/addon-a11y",
     "@storybook/addon-vitest",
     "@storybook/addon-themes",
   ],
   ```

3. Essentials에 포함된 addon 목록:
   - `@storybook/addon-docs` ✅
   - `@storybook/addon-actions` ✅
   - `@storybook/addon-controls` ✅
   - `@storybook/addon-backgrounds` ✅
   - `@storybook/addon-viewport` ✅
   - `@storybook/addon-toolbars` ➕ 새로 추가
   - `@storybook/addon-measure` ➕ 새로 추가 (컴포넌트 크기 측정)
   - `@storybook/addon-outline` ➕ 새로 추가 (레이아웃 아웃라인)

4. 검증:
   ```bash
   npm run storybook
   # 툴바에서 Measure, Outline 도구 추가 확인
   # 기존 Docs, Actions, Controls 정상 동작 확인
   ```

**완료 기준**: Essentials addon 설치 완료, Measure/Outline 도구 사용 가능, 기존 기능 모두 정상 동작

---

### Phase 3: Interactive 기능 확대 (우선순위: 중간)

#### [ ] 7. Args 기반 Interactive Controls 확대 (20개 컴포넌트)
**목적**: 사용자가 Storybook에서 동적으로 props 변경 가능하도록 개선
**예상 시간**: 8시간
**난이도**: ⭐⭐⭐ 어려움

**작업 내용**:
1. 우선순위 컴포넌트 20개 선정:
   - **UI 기본** (3개): Button, Badge, Alert
   - **Form** (7개): Input, Textarea, Checkbox, Radio, Select, Switch, Label
   - **레이아웃** (3개): Card, Separator, Aspect Ratio
   - **Overlay** (3개): Dialog, Sheet, Popover
   - **Navigation** (4개): Accordion, Tabs, Collapsible, Breadcrumb

2. 패턴별 수정 방법:

   **패턴 A: 단순 컴포넌트 (Button, Badge, Alert)**
   ```typescript
   // 수정 전
   export const Default: Story = {
     render: () => <Button variant="default">Click me</Button>
   };

   // 수정 후
   export const Default: Story = {
     args: {
       variant: 'default',
       size: 'default',
       children: 'Click me',
       disabled: false,
     },
   };
   ```

   **패턴 B: Form 컴포넌트 (Input, Checkbox, Select)**
   ```typescript
   // 수정 전
   export const Default: Story = {
     render: () => <Input type="email" placeholder="Email" />
   };

   // 수정 후
   export const Default: Story = {
     args: {
       type: 'email',
       placeholder: 'Email',
       disabled: false,
     },
   };
   ```

   **패턴 C: 복합 컴포넌트 (Card, Dialog)**
   ```typescript
   // 기존 Demo 컴포넌트 유지, Args 기반 스토리 추가
   export const Default: Story = {
     render: () => <CardDemo />  // 기존 Demo 유지
   };

   export const CustomizableCard: Story = {
     render: (args) => (
       <Card className={args.className}>
         <CardHeader>
           <CardTitle>{args.title}</CardTitle>
           <CardDescription>{args.description}</CardDescription>
         </CardHeader>
         <CardContent>{args.content}</CardContent>
       </Card>
     ),
     args: {
       title: 'Card Title',
       description: 'Card Description',
       content: 'Card content goes here.',
       className: '',
     },
   };
   ```

3. 각 컴포넌트별 작업 (평균 24분/개):
   - Args 인터페이스 정의
   - render 함수를 args 기반으로 변경
   - Controls 패널에서 동작 테스트
   - 모든 variants/sizes 지원 확인

4. 검증:
   ```bash
   npm run storybook
   # 각 스토리의 Controls 탭에서 props 변경 테스트
   # Variant, size, disabled 등 모든 옵션 동작 확인
   ```

**완료 기준**: 20개 컴포넌트 Args 기반 변경 완료, Controls 탭에서 모든 props 동적 조작 가능

---

#### [ ] 8. Play functions 커버리지 향상 (20개 컴포넌트 추가)
**목적**: 자동화된 인터랙션 테스트 커버리지를 22.7%에서 53%+로 확대
**예상 시간**: 10시간
**난이도**: ⭐⭐⭐ 어려움

**작업 내용**:
1. Play functions 추가 대상 (20개):

   **Form 컴포넌트 (5개, 30분/개)**:
   - Input: 타이핑 테스트
   - Textarea: 멀티라인 입력 테스트
   - Select: 옵션 선택 테스트
   - Radio: 라디오 버튼 선택 테스트
   - Switch: 토글 테스트

   **Overlay 컴포넌트 (5개, 30분/개)**:
   - Dialog: 열기/닫기 테스트
   - Sheet: 슬라이드 인/아웃 테스트
   - Drawer: 드로어 열기/닫기 테스트
   - Popover: Popover 표시/숨김 테스트
   - Tooltip: 호버 시 Tooltip 표시 테스트

   **Navigation 컴포넌트 (5개, 30분/개)**:
   - Tabs: 탭 전환 테스트
   - Accordion: Accordion 확장/축소 테스트
   - Collapsible: Collapsible 토글 테스트
   - Navigation Menu: 메뉴 네비게이션 테스트
   - Menubar: 메뉴바 인터랙션 테스트

   **Interactive 컴포넌트 (5개, 30분/개)**:
   - Slider: 슬라이더 값 변경 테스트
   - Toggle: Toggle 상태 변경 테스트
   - Toggle Group: Toggle Group 선택 테스트
   - Combobox: Combobox 검색 및 선택 테스트
   - Command: Command 팔레트 테스트

2. Play function 패턴 예시:

   **Form: Input 컴포넌트**
   ```typescript
   import { expect, userEvent, within } from "storybook/test";

   export const ShouldAcceptInput: Story = {
     name: "when user types, should display input value",
     tags: ["!dev", "!autodocs"],
     render: () => (
       <div>
         <Label htmlFor="test-input">Email</Label>
         <Input id="test-input" type="email" placeholder="Enter email" />
       </div>
     ),
     play: async ({ canvasElement }) => {
       const canvas = within(canvasElement);
       const input = canvas.getByPlaceholderText('Enter email');

       await userEvent.type(input, 'test@example.com');
       await expect(input).toHaveValue('test@example.com');
     },
   };
   ```

   **Overlay: Dialog 컴포넌트**
   ```typescript
   export const ShouldOpenDialog: Story = {
     name: "when trigger is clicked, should open dialog",
     tags: ["!dev", "!autodocs"],
     render: () => <DialogDemo />,
     play: async ({ canvasElement }) => {
       const canvas = within(canvasElement);
       const trigger = canvas.getByRole("button", { name: /open/i });

       await userEvent.click(trigger);

       const dialog = canvas.getByRole("dialog");
       await expect(dialog).toBeInTheDocument();
       await expect(canvas.getByText(/dialog content/i)).toBeVisible();
     },
   };
   ```

   **Navigation: Tabs 컴포넌트**
   ```typescript
   export const ShouldSwitchTabs: Story = {
     name: "when tab is clicked, should switch content",
     tags: ["!dev", "!autodocs"],
     render: () => <TabsDemo />,
     play: async ({ canvasElement }) => {
       const canvas = within(canvasElement);

       // 두 번째 탭 클릭
       const secondTab = canvas.getByRole("tab", { name: /password/i });
       await userEvent.click(secondTab);

       // 두 번째 탭 패널 표시 확인
       const passwordPanel = canvas.getByRole("tabpanel");
       await expect(passwordPanel).toHaveTextContent(/password/i);
     },
   };
   ```

3. 각 컴포넌트별 테스트 시나리오:
   - 기본 인터랙션 (클릭, 타이핑, 호버)
   - 상태 변화 검증 (checked, value, visible)
   - 접근성 검증 (role, aria-label)
   - `tags: ["!dev", "!autodocs"]` 설정으로 테스트 전용 스토리 분리

4. 검증:
   ```bash
   npm run test:storybook  # Play functions 자동 실행
   npm run storybook       # 각 스토리에서 Play 버튼 클릭하여 수동 확인
   ```

**완료 기준**: 20개 컴포넌트 Play functions 추가 완료, test:storybook 통과, 커버리지 35/66 (53%) 달성

---

### Phase 4: 고급 기능 및 문서화 (우선순위: 낮음)

#### [ ] 9. storybook-design-token 도입 (옵션)
**목적**: 5개 Design Tokens 스토리 자동화, 더 풍부한 시각화
**예상 시간**: 4시간
**난이도**: ⭐⭐⭐ 어려움

**작업 내용**:
1. storybook-design-token 설치:
   ```bash
   npm install --save-dev storybook-design-token@4  # Storybook 9 호환
   ```

2. `.storybook/main.ts`에 addon 추가:
   ```typescript
   addons: [
     // ...
     "storybook-design-token",  // 👈 추가
   ],
   ```

3. 5개 Design Token 스토리 마이그레이션:

   **Before: color-story (수동 구현)**
   ```typescript
   // 복잡한 수동 코드
   const ColorRow = ({ name, value }: ColorTile) => {
     const [currentColor, setCurrentColor] = useState<string>('');

     useEffect(() => {
       const style = window.getComputedStyle(document.documentElement);
       const color = style.getPropertyValue(value);
       setCurrentColor(color);

       const observer = new MutationObserver(() => {
         const updatedColor = style.getPropertyValue(value);
         setCurrentColor(updatedColor);
       });

       observer.observe(document.documentElement, {
         attributes: true,
         attributeFilter: ['class'],
       });

       return () => observer.disconnect();
     }, [value]);

     return <TableRow>...</TableRow>;
   };
   ```

   **After: color-story (자동화)**
   ```typescript
   import { DesignTokenDocBlock } from 'storybook-design-token';

   export const Colors: Story = {
     parameters: {
       designToken: {
         category: 'Colors',
         presenter: 'Color',
       },
     },
     render: () => <DesignTokenDocBlock />,
   };
   ```

4. 5개 토큰 스토리 마이그레이션:
   - `color-story`: Color presenter
   - `typography-story`: Typography presenter
   - `spacing-story`: Spacing presenter
   - `shadow-story`: Shadow presenter
   - `radius-story`: Radius presenter

5. 각 토큰별 설정 (1시간/개):
   - CSS 변수 매핑 확인
   - Presenter 타입 선택
   - 시각적 프리뷰 검증

6. 검증:
   ```bash
   npm run storybook
   # Design Tokens 카테고리에서 자동 생성된 문서 확인
   # Light/Dark 모드 전환 시 토큰 업데이트 확인
   ```

**참고**: 현재 수동 구현도 충분히 훌륭하므로 필수는 아님. 시간 여유 있을 때 도입 권장.

**완료 기준**: storybook-design-token 설치 완료, 5개 토큰 스토리 자동화, 시각적 프리뷰 정상 동작

---

#### [ ] 10. Visual Regression Testing (Chromatic CI/CD) (옵션)
**목적**: 자동 스냅샷 테스트로 UI 회귀 방지
**예상 시간**: 4시간
**난이도**: ⭐⭐⭐ 어려움

**작업 내용**:
1. Chromatic 설치:
   ```bash
   npm install --save-dev chromatic
   ```

2. `package.json`에 스크립트 추가:
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --project-token=<YOUR_TOKEN>",
       "chromatic:ci": "chromatic --exit-zero-on-changes"
     }
   }
   ```

3. Chromatic 프로젝트 생성:
   - https://www.chromatic.com/ 접속
   - GitHub 계정 연동
   - 새 프로젝트 생성
   - 프로젝트 토큰 발급 (`CHROMATIC_PROJECT_TOKEN`)

4. 첫 배포:
   ```bash
   npm run chromatic
   # 66개 스토리 스냅샷 생성 (약 5-10분 소요)
   ```

5. GitHub Actions CI/CD 통합:
   ```yaml
   # .github/workflows/chromatic.yml
   name: 'Chromatic'
   on: push

   jobs:
     chromatic:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
           with:
             fetch-depth: 0  # Chromatic은 전체 Git 히스토리 필요
         - uses: actions/setup-node@v4
         - run: npm ci
         - run: npm run chromatic
           env:
             CHROMATIC_PROJECT_TOKEN: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
   ```

6. GitHub Secrets 설정:
   - Repository Settings → Secrets and variables → Actions
   - `CHROMATIC_PROJECT_TOKEN` 추가

7. 검증:
   - PR 생성 시 Chromatic 자동 실행 확인
   - UI 변경 사항 자동 감지 확인
   - Review 및 Approve 워크플로우 테스트

**Chromatic 플랜**:
- **무료**: 5,000 스냅샷/월
- **유료**: Unlimited 스냅샷 ($149/월부터)

**완료 기준**: Chromatic CI/CD 통합 완료, PR에서 UI 변경 자동 감지, 팀원 간 시각적 리뷰 가능

---

#### [ ] 11. Accessibility 테스트 레벨 상향 (옵션)
**목적**: WCAG 2.1 AA 준수 강제, CI에서 접근성 위반 시 빌드 실패
**예상 시간**: 2시간
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. 현재 A11y 위반 사항 확인:
   ```bash
   npm run storybook
   # 각 스토리에서 A11y addon 패널 확인
   # Violations 목록 스프레드시트에 정리
   ```

2. 모든 위반 사항 수정:
   - Color contrast 문제
   - Missing alt text
   - Missing ARIA labels
   - Keyboard navigation 문제
   - Form label 연결 문제

3. `.storybook/preview.ts` 수정:
   ```typescript
   // 수정 전
   parameters: {
     a11y: {
       test: "todo",  // 경고만 표시
     },
   },

   // 수정 후
   parameters: {
     a11y: {
       test: "error",  // 👈 CI에서 위반 시 실패
     },
   },
   ```

4. 검증:
   ```bash
   npm run test:storybook  # A11y 위반 시 테스트 실패 확인
   npm run storybook       # A11y 패널에서 "No violations" 확인
   ```

**완료 기준**: 모든 A11y 위반 사항 수정 완료, test level "error" 설정, CI에서 접근성 강제

---

#### [ ] 12. MDX 문서 추가 (옵션)
**목적**: Getting Started, Design Principles 등 고급 문서화로 프로젝트 온보딩 개선
**예상 시간**: 3시간
**난이도**: ⭐⭐ 보통

**작업 내용**:
1. 4개 MDX 문서 작성:

   **docs/getting-started.mdx (45분)**
   ```mdx
   import { Meta } from '@storybook/blocks';

   <Meta title="Introduction/Getting Started" />

   # Getting Started

   Welcome to the **shadcn-storybook-registry**!

   ## Installation

   Install any component story via shadcn CLI:

   \`\`\`bash
   npx shadcn@latest add http://localhost:3000/v2/r/button-story.json
   \`\`\`

   ## Usage

   \`\`\`tsx
   import { Button } from "@/components/ui/button";

   export default function App() {
     return <Button variant="default">Click me</Button>;
   }
   \`\`\`

   ## Available Components

   - 60+ Atoms: Button, Input, Card, Dialog, etc.
   - 5 Design Tokens: Color, Typography, Spacing, Shadow, Radius
   - 1 Foundation: Typography Components
   - 1 Template: Dashboard Template
   ```

   **docs/design-principles.mdx (45분)**
   ```mdx
   import { Meta } from '@storybook/blocks';

   <Meta title="Introduction/Design Principles" />

   # Design Principles

   ## Accessibility First

   - **WCAG 2.1 AA** compliance
   - Keyboard navigation support
   - Screen reader friendly

   ## Responsive Design

   - **Mobile-first** approach
   - Flexible layouts
   - Viewport-aware components

   ## Dark Mode Support

   - Full theme support via `@storybook/addon-themes`
   - CSS variables for easy customization
   - Seamless Light/Dark mode switching

   ## Design Tokens

   - Color system: Primary, Secondary, Accent, Destructive
   - Typography scale: 12px to 96px
   - Spacing system: 0.5rem to 8rem
   - Shadow system: sm, base, md, lg, xl
   - Radius system: sm, base, md, lg, full
   ```

   **docs/contribution-guide.mdx (45분)**
   ```mdx
   import { Meta } from '@storybook/blocks';

   <Meta title="Introduction/Contribution Guide" />

   # Contribution Guide

   ## Adding a New Story

   1. Create story file:
      \`\`\`bash
      src/registry/atoms/my-component-story/my-component.stories.tsx
      \`\`\`

   2. Follow story structure pattern (CSF 3.0)

   3. Add registry entry to \`registry.json\`

   4. Build registry:
      \`\`\`bash
      npm run registry:build
      \`\`\`

   5. Test locally:
      \`\`\`bash
      npx shadcn@latest add http://localhost:3000/v2/r/my-component-story.json
      \`\`\`

   ## Quality Checks

   \`\`\`bash
   npm run lint && npm run type-check && npm run test
   \`\`\`
   ```

   **docs/design-tokens.mdx (45분)**
   ```mdx
   import { Meta } from '@storybook/blocks';

   <Meta title="Introduction/Design Tokens" />

   # Design Tokens

   ## Color System

   - **Primary**: Brand colors
   - **Secondary**: Accent colors
   - **Destructive**: Error states
   - **Muted**: Backgrounds

   ## Typography Scale

   - **xs**: 0.75rem (12px)
   - **sm**: 0.875rem (14px)
   - **base**: 1rem (16px)
   - **lg**: 1.125rem (18px)
   - **xl**: 1.25rem (20px)

   ## Usage

   \`\`\`tsx
   import { Button } from "@/components/ui/button";

   // Colors are automatically applied via Tailwind CSS
   <Button className="bg-primary text-primary-foreground">
     Primary Button
   </Button>
   \`\`\`
   ```

2. `.storybook/main.ts`에 MDX 파일 경로 확인:
   ```typescript
   stories: [
     "../docs/**/*.mdx",  // 👈 이미 포함되어 있는지 확인
     "../src/registry/**/*.mdx",
     "../src/registry/**/*.stories.@(js|jsx|mjs|ts|tsx)",
   ],
   ```

3. 검증:
   ```bash
   npm run storybook
   # Introduction 카테고리에서 4개 문서 확인
   # Getting Started, Design Principles, Contribution Guide, Design Tokens
   ```

**완료 기준**: 4개 MDX 문서 작성 완료, Storybook Introduction 카테고리에서 문서 확인 가능

---

## 📊 예상 완료 시간표

| Phase | 작업 내용 | 작업 수 | 예상 시간 | 누적 시간 |
|-------|-----------|--------|----------|-----------|
| **Phase 1** | 필수 개선 | 3개 | 2h 35min | 2h 35min |
| **Phase 2** | 기반 도구 설치 | 3개 | 1h 45min | 4h 20min |
| **Phase 3** | Interactive 기능 확대 | 2개 | 18h | 22h 20min |
| **Phase 4** | 고급 기능 (옵션) | 4개 | 13h | 35h 20min |
| **총계** | - | **12개** | **35h 20min** | - |

## 🎯 성과 지표 (KPI)

| 지표 | 현재 (Before) | 목표 (After) | 달성률 |
|------|---------------|--------------|--------|
| **Best Practice 점수** | 78/100 | 93/100 | +15점 |
| **Autodocs 커버리지** | 54/66 (81.8%) | 66/66 (100%) | +18.2% |
| **Play functions 커버리지** | 15/66 (22.7%) | 35/66 (53.0%) | +30.3% |
| **Args 기반 Controls** | 0개 | 20개 | +20개 |
| **패키지 의존성** | storybook-dark-mode 있음 | 정리 완료 | ✅ |
| **Actions 경고** | 발생 중 | 완전 제거 | ✅ |

---

**마지막 업데이트**: 2025-01-15
**계획 작성자**: Claude AI (shadcn-storybook-registry)
**승인 대기**: 사용자 "Accept" 또는 "Go" 응답 필요

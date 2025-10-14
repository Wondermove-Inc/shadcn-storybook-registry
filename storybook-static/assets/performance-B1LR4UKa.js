import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CXINb8-q.js";import{M as s}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Introduction/Performance"}),`
`,n.jsx(e.h1,{id:"performance-optimization",children:"Performance Optimization"}),`
`,n.jsx(e.p,{children:"shadcn-storybook-registry의 성능 최적화 전략입니다."}),`
`,n.jsx(e.h2,{id:"tree-shaking",children:"Tree-Shaking"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Tree-shaking"}),"은 사용하지 않는 코드를 번들에서 제거하는 최적화 기법입니다."]}),`
`,n.jsx(e.h3,{id:"원리",children:"원리"}),`
`,n.jsx(e.p,{children:`Vite와 Webpack은 ES Modules의 정적 구조를 분석하여 사용되지 않는 export를
제거합니다:`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: Named exports (Tree-shaking 가능)
export function Button() {
  /* ... */
}
export function Dialog() {
  /* ... */
}
export function Card() {
  /* ... */
}

// 사용: Button만 import하면 나머지는 번들에서 제외
import { Button } from "@/components/ui";
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ Bad: Default export with object (Tree-shaking 불가)
export default {
  Button: function Button() {
    /* ... */
  },
  Dialog: function Dialog() {
    /* ... */
  },
  Card: function Card() {
    /* ... */
  },
};

// 전체 객체가 번들에 포함됨
import Components from "@/components/ui";
const { Button } = Components;
`})}),`
`,n.jsx(e.h3,{id:"shadcnui의-tree-shaking",children:"shadcn/ui의 Tree-Shaking"}),`
`,n.jsxs(e.p,{children:["shadcn/ui는 ",n.jsx(e.strong,{children:"개별 파일로 컴포넌트를 분리"}),`하여 최적의 tree-shaking을
제공합니다:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`src/components/ui/
├── button.tsx          # Button만 import 가능
├── dialog.tsx          # Dialog만 import 가능
├── card.tsx            # Card만 import 가능
└── ...
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ 필요한 컴포넌트만 번들에 포함
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Dialog는 번들에서 제외됨
`})}),`
`,n.jsx(e.h3,{id:"측정-방법",children:"측정 방법"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 프로덕션 빌드
npm run build

# 번들 크기 분석
npm run build -- --analyze

# 또는 Vite Bundle Visualizer
npm install -D vite-bundle-visualizer
`})}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: Named imports
import { Button, Card } from "@/components/ui";

// ✅ Good: 개별 파일 import
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// ❌ Bad: Wildcard import
import * as UI from "@/components/ui";

// ❌ Bad: 전체 index import
import UI from "@/components/ui";
`})}),`
`,n.jsx(e.h2,{id:"lazy-loading",children:"Lazy Loading"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Lazy Loading"}),"은 컴포넌트를 필요한 시점에 동적으로 로드하는 기법입니다."]}),`
`,n.jsx(e.h3,{id:"reactlazy",children:"React.lazy()"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import * as React from "react";

// ✅ Lazy loading
const HeavyChart = React.lazy(() => import("@/components/heavy-chart"));

function Dashboard() {
  return (
    <React.Suspense fallback={<Skeleton className="h-[400px]" />}>
      <HeavyChart data={data} />
    </React.Suspense>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"route-based-code-splitting",children:"Route-based Code Splitting"}),`
`,n.jsx(e.p,{children:"Next.js는 자동으로 페이지별 코드 스플리팅을 수행합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// app/dashboard/page.tsx - 자동 코드 스플리팅
export default function DashboardPage() {
  return <Dashboard />;
}

// app/settings/page.tsx - 별도 번들
export default function SettingsPage() {
  return <Settings />;
}
`})}),`
`,n.jsx(e.h3,{id:"dynamic-import-with-nextjs",children:"Dynamic Import with Next.js"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import dynamic from "next/dynamic";

// ✅ SSR 비활성화 + Lazy loading
const Chart = dynamic(() => import("@/components/ui/chart"), {
  ssr: false,
  loading: () => <Skeleton className="h-[400px]" />,
});

function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>
      <Chart data={data} />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"component-level-splitting",children:"Component-level Splitting"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ 조건부 렌더링 + Lazy loading
function UserProfile() {
  const [showSettings, setShowSettings] = React.useState(false);

  // Settings가 필요할 때만 로드
  const SettingsPanel = React.lazy(() => import("./settings-panel"));

  return (
    <div>
      <Button onClick={() => setShowSettings(true)}>Settings</Button>
      {showSettings && (
        <React.Suspense fallback={<Skeleton />}>
          <SettingsPanel />
        </React.Suspense>
      )}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"적용-대상",children:"적용 대상"}),`
`,n.jsx(e.p,{children:"다음 컴포넌트는 Lazy Loading 적용을 권장합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["📊 ",n.jsx(e.strong,{children:"Chart"}),": recharts 라이브러리가 큰 용량 (100KB+)"]}),`
`,n.jsxs(e.li,{children:["📝 ",n.jsx(e.strong,{children:"Rich Text Editor"}),": 에디터 라이브러리 (200KB+)"]}),`
`,n.jsxs(e.li,{children:["🗺️ ",n.jsx(e.strong,{children:"Map"}),": 지도 라이브러리 (500KB+)"]}),`
`,n.jsxs(e.li,{children:["📁 ",n.jsx(e.strong,{children:"File Uploader"}),": 파일 처리 라이브러리"]}),`
`,n.jsxs(e.li,{children:["🎨 ",n.jsx(e.strong,{children:"Color Picker"}),": 색상 선택 UI"]}),`
`]}),`
`,n.jsx(e.h3,{id:"측정-방법-1",children:"측정 방법"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Performance API로 로딩 시간 측정
const startTime = performance.now();

const HeavyComponent = React.lazy(() => {
  return import("./heavy-component").then((module) => {
    const endTime = performance.now();
    console.log(\`Loaded in \${endTime - startTime}ms\`);
    return module;
  });
});
`})}),`
`,n.jsx(e.h2,{id:"reactmemo",children:"React.memo()"}),`
`,n.jsx(e.p,{children:`**React.memo()**는 props가 변경되지 않으면 리렌더링을 스킵하는 고차
컴포넌트입니다.`}),`
`,n.jsx(e.h3,{id:"기본-사용법",children:"기본 사용법"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import * as React from "react";

// ✅ React.memo로 감싸기
const ExpensiveComponent = React.memo(function ExpensiveComponent({
  data,
}: {
  data: string;
}) {
  console.log("Rendering ExpensiveComponent");
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const data = "Static data";

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      {/* count가 변경되어도 ExpensiveComponent는 리렌더링 안 됨 */}
      <ExpensiveComponent data={data} />
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"custom-comparison-function",children:"Custom Comparison Function"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ 커스텀 비교 함수
const UserCard = React.memo(
  function UserCard({ user }: { user: User }) {
    return <Card>{user.name}</Card>;
  },
  (prevProps, nextProps) => {
    // true를 반환하면 리렌더링 스킵
    return prevProps.user.id === nextProps.user.id;
  }
);
`})}),`
`,n.jsx(e.h3,{id:"언제-사용할까",children:"언제 사용할까?"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 비싼 연산이 있는 컴포넌트
const HeavyList = React.memo(function HeavyList({ items }: { items: Item[] }) {
  const processedItems = items.map(expensiveCalculation);
  return <div>{processedItems}</div>;
});

// ❌ Bad: 간단한 컴포넌트 (오버헤드만 증가)
const SimpleButton = React.memo(function SimpleButton({ label }: { label: string }) {
  return <button>{label}</button>;
});
`})}),`
`,n.jsx(e.h3,{id:"props-안정성-확보",children:"Props 안정성 확보"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function Parent() {
  const [count, setCount] = React.useState(0);

  // ❌ Bad: 매번 새로운 객체 생성 (memo 무효화)
  const user = { name: "John" };

  // ✅ Good: useMemo로 안정화
  const user = React.useMemo(() => ({ name: "John" }), []);

  // ❌ Bad: 매번 새로운 함수 생성 (memo 무효화)
  const handleClick = () => console.log("Clicked");

  // ✅ Good: useCallback으로 안정화
  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);

  return <UserCard user={user} onClick={handleClick} />;
}
`})}),`
`,n.jsx(e.h2,{id:"usememo--usecallback",children:"useMemo() & useCallback()"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"useMemo"}),"와 ",n.jsx(e.strong,{children:"useCallback"}),`은 값과 함수를 메모이제이션하여 불필요한 재계산을
방지합니다.`]}),`
`,n.jsx(e.h3,{id:"usememo",children:"useMemo()"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import * as React from "react";

function SearchResults({ query, items }: { query: string; items: Item[] }) {
  // ✅ useMemo: 비싼 연산 결과 캐싱
  const filteredItems = React.useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  return (
    <div>
      {filteredItems.map((item) => (
        <Card key={item.id}>{item.name}</Card>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"usecallback",children:"useCallback()"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function Parent() {
  const [count, setCount] = React.useState(0);

  // ✅ useCallback: 함수 참조 안정화
  const handleClick = React.useCallback(() => {
    console.log("Clicked");
  }, []);

  // count가 변경되어도 handleClick 참조는 동일
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      <MemoizedChild onClick={handleClick} />
    </div>
  );
}

const MemoizedChild = React.memo(function Child({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log("Rendering Child");
  return <Button onClick={onClick}>Click me</Button>;
});
`})}),`
`,n.jsx(e.h3,{id:"언제-사용할까-1",children:"언제 사용할까?"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 비싼 연산
const expensiveValue = React.useMemo(() => {
  return items.reduce((acc, item) => acc + item.value, 0);
}, [items]);

// ❌ Bad: 단순 연산 (오버헤드만 증가)
const simpleValue = React.useMemo(() => {
  return a + b;
}, [a, b]);

// ✅ Good: 자식에게 전달되는 함수 (React.memo와 함께)
const handleClick = React.useCallback(() => {
  console.log("Clicked");
}, []);

// ❌ Bad: 자식이 memo되지 않은 경우
const handleClick = React.useCallback(() => {
  console.log("Clicked");
}, []);
<NonMemoizedChild onClick={handleClick} />
`})}),`
`,n.jsx(e.h2,{id:"virtual-scrolling",children:"Virtual Scrolling"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Virtual Scrolling"}),`은 보이는 영역만 렌더링하여 대량의 데이터를 효율적으로
표시합니다.`]}),`
`,n.jsx(e.h3,{id:"react-virtuoso",children:"React Virtuoso"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { Virtuoso } from "react-virtuoso";

function VirtualList({ items }: { items: Item[] }) {
  return (
    <Virtuoso
      style={{ height: "400px" }}
      data={items}
      itemContent={(index, item) => (
        <Card key={item.id}>
          {item.name}
        </Card>
      )}
    />
  );
}
`})}),`
`,n.jsx(e.h3,{id:"tanstack-virtual",children:"Tanstack Virtual"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useVirtualizer } from "@tanstack/react-virtual";

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: "400px", overflow: "auto" }}>
      <div
        style={{
          height: \`\${virtualizer.getTotalSize()}px\`,
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: \`\${virtualItem.size}px\`,
              transform: \`translateY(\${virtualItem.start}px)\`,
            }}
          >
            <Card>{items[virtualItem.index].name}</Card>
          </div>
        ))}
      </div>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"적용-대상-1",children:"적용 대상"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["📋 ",n.jsx(e.strong,{children:"Long Lists"}),": 100개 이상의 아이템"]}),`
`,n.jsxs(e.li,{children:["📊 ",n.jsx(e.strong,{children:"Table"}),": 대량의 행 데이터"]}),`
`,n.jsxs(e.li,{children:["💬 ",n.jsx(e.strong,{children:"Chat Messages"}),": 무한 스크롤 채팅"]}),`
`,n.jsxs(e.li,{children:["📁 ",n.jsx(e.strong,{children:"File Explorer"}),": 대량의 파일/폴더"]}),`
`]}),`
`,n.jsx(e.h2,{id:"image-optimization",children:"Image Optimization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Image Optimization"}),"은 이미지 로딩 성능을 최적화합니다."]}),`
`,n.jsx(e.h3,{id:"nextjs-image-component",children:"Next.js Image Component"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import Image from "next/image";

function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      {/* ✅ Next.js Image: 자동 최적화 */}
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        loading="lazy"
        placeholder="blur"
        blurDataURL={product.blurDataURL}
      />
    </Card>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"lazy-loading-images",children:"Lazy Loading Images"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={\`Gallery \${index}\`}
          loading="lazy" // ✅ Native lazy loading
          className="aspect-square object-cover"
        />
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"webp-format",children:"WebP Format"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ WebP 포맷 우선 사용, fallback to JPG
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>
`})}),`
`,n.jsx(e.h2,{id:"bundle-size-optimization",children:"Bundle Size Optimization"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Bundle Size"}),"를 최소화하여 초기 로딩 속도를 개선합니다."]}),`
`,n.jsx(e.h3,{id:"import-optimization",children:"Import Optimization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ Bad: 전체 라이브러리 import
import _ from "lodash";
import { format } from "date-fns";

// ✅ Good: 필요한 함수만 import
import debounce from "lodash/debounce";
import { format } from "date-fns/format";
`})}),`
`,n.jsx(e.h3,{id:"icon-optimization",children:"Icon Optimization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ Bad: 전체 lucide-react import (700KB+)
import * as Icons from "lucide-react";

// ✅ Good: 필요한 아이콘만 import
import { ChevronRight, User, Settings } from "lucide-react";
`})}),`
`,n.jsx(e.h3,{id:"package-analysis",children:"Package Analysis"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 번들 크기 분석
npm run build
npm install -D @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // Next.js config
})

# 실행
ANALYZE=true npm run build
`})}),`
`,n.jsx(e.h2,{id:"react-1819-optimizations",children:"React 18/19 Optimizations"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"React 18/19"}),"의 새로운 최적화 기능을 활용합니다."]}),`
`,n.jsx(e.h3,{id:"usetransition",children:"useTransition()"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import * as React from "react";

function SearchBox() {
  const [query, setQuery] = React.useState("");
  const [isPending, startTransition] = React.useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // 즉시 업데이트

    // ✅ 비긴급 업데이트는 transition으로
    startTransition(() => {
      // 무거운 검색 로직
      performSearch(value);
    });
  };

  return (
    <div>
      <Input
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending && <Skeleton />}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"usedeferredvalue",children:"useDeferredValue()"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function SearchResults({ query }: { query: string }) {
  // ✅ 비긴급 값을 지연시켜 UI 반응성 향상
  const deferredQuery = React.useDeferredValue(query);

  const results = useMemo(() => {
    return searchItems(deferredQuery);
  }, [deferredQuery]);

  return (
    <div>
      {results.map((item) => (
        <Card key={item.id}>{item.name}</Card>
      ))}
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"concurrent-features",children:"Concurrent Features"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ React 18 Concurrent Rendering
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
`})}),`
`,n.jsx(e.h2,{id:"performance-monitoring",children:"Performance Monitoring"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"성능 모니터링"}),"으로 병목 지점을 식별합니다."]}),`
`,n.jsx(e.h3,{id:"react-devtools-profiler",children:"React DevTools Profiler"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# React DevTools 설치
# Chrome/Firefox Extension

# Profiler 탭에서 성능 측정
1. Record 버튼 클릭
2. 테스트할 인터랙션 수행
3. Stop 버튼 클릭
4. Flamegraph에서 느린 컴포넌트 확인
`})}),`
`,n.jsx(e.h3,{id:"performance-api",children:"Performance API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function measurePerformance() {
  // ✅ 렌더링 시간 측정
  performance.mark("render-start");

  // 렌더링 로직
  renderComponent();

  performance.mark("render-end");
  performance.measure("render", "render-start", "render-end");

  const measure = performance.getEntriesByName("render")[0];
  console.log(\`Render time: \${measure.duration}ms\`);
}
`})}),`
`,n.jsx(e.h3,{id:"web-vitals",children:"Web Vitals"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

function reportWebVitals() {
  getCLS(console.log); // Cumulative Layout Shift
  getFID(console.log); // First Input Delay
  getFCP(console.log); // First Contentful Paint
  getLCP(console.log); // Largest Contentful Paint
  getTTFB(console.log); // Time to First Byte
}
`})}),`
`,n.jsx(e.h2,{id:"best-practices-summary",children:"Best Practices Summary"}),`
`,n.jsx(e.h3,{id:"do-",children:"DO ✅"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tree-shaking"}),": Named exports 사용"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lazy Loading"}),": 무거운 컴포넌트는 React.lazy()"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React.memo()"}),": 비싼 연산 컴포넌트에만 적용"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"useMemo/useCallback"}),": 비싼 연산과 React.memo 조합"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Virtual Scrolling"}),": 100개 이상 아이템"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Image Optimization"}),": Next.js Image, lazy loading"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import Optimization"}),": 필요한 함수만 import"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Concurrent Features"}),": useTransition, useDeferredValue"]}),`
`]}),`
`,n.jsx(e.h3,{id:"dont-",children:"DON'T ❌"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Over-optimization"}),": 단순 컴포넌트에 memo 남발"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Premature Optimization"}),": 측정 전 최적화"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Wildcard Imports"}),": ",n.jsx(e.code,{children:"import * as"})," 지양"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Inline Functions"}),": 자식이 memo된 경우 useCallback 필수"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Large Dependencies"}),": 전체 라이브러리 import 지양"]}),`
`]}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.dev/learn/render-and-commit",rel:"nofollow",children:"React Performance Optimization"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://nextjs.org/docs/advanced-features/measuring-performance",rel:"nofollow",children:"Next.js Performance"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://web.dev/vitals/",rel:"nofollow",children:"Web Vitals"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://webpack.js.org/guides/tree-shaking/",rel:"nofollow",children:"Bundle Size Optimization"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://virtuoso.dev/",rel:"nofollow",children:"React Virtuoso"})}),`
`]})]})}function h(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{h as default};

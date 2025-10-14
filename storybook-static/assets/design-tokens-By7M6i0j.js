import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-CXINb8-q.js";import{M as d}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Introduction/Design Tokens"}),`
`,n.jsx(e.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(e.p,{children:`shadcn-storybook-registry의 디자인 토큰 시스템입니다. 일관된 디자인 언어를 위한
체계적인 토큰 구조를 제공합니다.`}),`
`,n.jsx(e.h2,{id:"color-system",children:"Color System"}),`
`,n.jsx(e.h3,{id:"primary-colors",children:"Primary Colors"}),`
`,n.jsx(e.p,{children:"브랜드의 주요 색상으로 버튼, 링크 등 주요 인터랙티브 요소에 사용됩니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* CSS Variables */
--primary: 222.2 47.4% 11.2%;
--primary-foreground: 210 40% 98%;
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@/components/ui/button";

<Button variant="default">Primary Button</Button>;
`})}),`
`,n.jsx(e.h3,{id:"secondary-colors",children:"Secondary Colors"}),`
`,n.jsx(e.p,{children:"보조 색상으로 덜 강조되는 요소에 사용됩니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="secondary">Secondary Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"destructive-colors",children:"Destructive Colors"}),`
`,n.jsx(e.p,{children:"경고, 에러, 삭제 등 위험한 동작을 나타냅니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="destructive">Delete</Button>
<Alert variant="destructive">Error message</Alert>
`})}),`
`,n.jsx(e.h3,{id:"muted-colors",children:"Muted Colors"}),`
`,n.jsx(e.p,{children:"배경, 비활성 상태, 보조 텍스트에 사용됩니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--muted: 210 40% 96.1%;
--muted-foreground: 215.4 16.3% 46.9%;
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className="bg-muted text-muted-foreground">Muted content</div>
`})}),`
`,n.jsx(e.h3,{id:"accent-colors",children:"Accent Colors"}),`
`,n.jsx(e.p,{children:"강조가 필요한 요소에 사용됩니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`--accent: 210 40% 96.1%;
--accent-foreground: 222.2 47.4% 11.2%;
`})}),`
`,n.jsx(e.h2,{id:"typography-scale",children:"Typography Scale"}),`
`,n.jsx(e.h3,{id:"font-sizes",children:"Font Sizes"}),`
`,n.jsx(e.p,{children:"일관된 타이포그래피 계층을 위한 크기 시스템입니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Tailwind CSS Classes */
text-xs    /* 0.75rem (12px) */
text-sm    /* 0.875rem (14px) */
text-base  /* 1rem (16px) */
text-lg    /* 1.125rem (18px) */
text-xl    /* 1.25rem (20px) */
text-2xl   /* 1.5rem (24px) */
text-3xl   /* 1.875rem (30px) */
text-4xl   /* 2.25rem (36px) */
text-5xl   /* 3rem (48px) */
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<h1 className="text-4xl font-bold">Heading 1</h1>
<h2 className="text-3xl font-semibold">Heading 2</h2>
<p className="text-base">Body text</p>
<small className="text-sm text-muted-foreground">Helper text</small>
`})}),`
`,n.jsx(e.h3,{id:"font-weights",children:"Font Weights"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`font-normal    /* 400 */
font-medium    /* 500 */
font-semibold  /* 600 */
font-bold      /* 700 */
`})}),`
`,n.jsx(e.h3,{id:"line-heights",children:"Line Heights"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`leading-none    /* 1 */
leading-tight   /* 1.25 */
leading-normal  /* 1.5 */
leading-relaxed /* 1.625 */
`})}),`
`,n.jsx(e.h2,{id:"spacing-system",children:"Spacing System"}),`
`,n.jsx(e.p,{children:"Tailwind CSS 기반의 일관된 여백 시스템입니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Padding & Margin Scale */
p-0    /* 0px */
p-0.5  /* 0.125rem (2px) */
p-1    /* 0.25rem (4px) */
p-2    /* 0.5rem (8px) */
p-3    /* 0.75rem (12px) */
p-4    /* 1rem (16px) */
p-5    /* 1.25rem (20px) */
p-6    /* 1.5rem (24px) */
p-8    /* 2rem (32px) */
p-10   /* 2.5rem (40px) */
p-12   /* 3rem (48px) */
p-16   /* 4rem (64px) */
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Card className="p-6">
  <CardHeader className="pb-4">
    <CardTitle className="mb-2">Title</CardTitle>
  </CardHeader>
  <CardContent className="pt-0">Content with consistent spacing</CardContent>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"gap-system",children:"Gap System"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`gap-0   /* 0px */
gap-1   /* 0.25rem */
gap-2   /* 0.5rem */
gap-4   /* 1rem */
gap-6   /* 1.5rem */
gap-8   /* 2rem */
`})}),`
`,n.jsx(e.h2,{id:"shadow-system",children:"Shadow System"}),`
`,n.jsx(e.p,{children:"깊이감을 표현하는 그림자 시스템입니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* CSS Variables */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:
  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<div className="shadow-sm">Subtle elevation</div>
<div className="shadow-md">Medium elevation</div>
<div className="shadow-lg">High elevation</div>

<Card className="shadow-lg">
  Elevated card component
</Card>
`})}),`
`,n.jsx(e.h3,{id:"dark-mode-shadows",children:"Dark Mode Shadows"}),`
`,n.jsx(e.p,{children:"Dark mode에서 그림자는 자동으로 조정됩니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.dark {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.25);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3);
  /* ... */
}
`})}),`
`,n.jsx(e.h2,{id:"radius-system",children:"Radius System"}),`
`,n.jsx(e.p,{children:"모서리 둥글기를 제어하는 시스템입니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* CSS Variables */
--radius: 0.5rem; /* Default radius (8px) */
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tailwind Classes:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`rounded-none  /* 0px */
rounded-sm    /* calc(var(--radius) - 4px) */
rounded       /* calc(var(--radius) - 2px) */
rounded-md    /* calc(var(--radius)) */
rounded-lg    /* calc(var(--radius) + 2px) */
rounded-full  /* 9999px */
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button className="rounded-md">Default Radius</Button>
<Button className="rounded-full">Fully Rounded</Button>
<Avatar className="rounded-full">A</Avatar>

<Card className="rounded-lg">
  Card with larger radius
</Card>
`})}),`
`,n.jsx(e.h2,{id:"border-system",children:"Border System"}),`
`,n.jsx(e.p,{children:"테두리 스타일 시스템입니다."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* CSS Variables */
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"사용 예시:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Input className="border border-input focus-visible:ring-2 focus-visible:ring-ring" />

<div className="border rounded-md p-4">
  Bordered container
</div>
`})}),`
`,n.jsx(e.h2,{id:"using-design-tokens",children:"Using Design Tokens"}),`
`,n.jsx(e.h3,{id:"reading-css-variables-in-javascript",children:"Reading CSS Variables in JavaScript"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const styles = getComputedStyle(document.documentElement);
const primaryColor = styles.getPropertyValue("--primary");
const radius = styles.getPropertyValue("--radius");
`})}),`
`,n.jsx(e.h3,{id:"customizing-tokens",children:"Customizing Tokens"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"app/globals.css"}),"에서 토큰을 커스터마이징할 수 있습니다:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer base {
  :root {
    --primary: 210 100% 50%; /* Custom blue */
    --radius: 1rem; /* Larger default radius */
  }

  .dark {
    --primary: 210 100% 60%; /* Lighter blue for dark mode */
  }
}
`})}),`
`,n.jsx(e.h3,{id:"tailwind-integration",children:"Tailwind Integration"}),`
`,n.jsx(e.p,{children:"모든 디자인 토큰은 Tailwind CSS v4와 완벽하게 통합됩니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Color
<div className="bg-primary text-primary-foreground">Primary</div>

// Typography
<h1 className="text-4xl font-bold leading-tight">Heading</h1>

// Spacing
<div className="p-6 m-4 gap-2">Spaced content</div>

// Shadow
<div className="shadow-lg">Elevated</div>

// Radius
<div className="rounded-md">Rounded corners</div>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"1-use-semantic-tokens",children:"1. Use Semantic Tokens"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - semantic meaning
<Button variant="destructive">Delete</Button>

// ❌ Bad - hardcoded color
<Button className="bg-red-500">Delete</Button>
`})}),`
`,n.jsx(e.h3,{id:"2-maintain-consistency",children:"2. Maintain Consistency"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - consistent spacing
<div className="space-y-4">
  <div className="p-4">Item 1</div>
  <div className="p-4">Item 2</div>
</div>

// ❌ Bad - inconsistent spacing
<div>
  <div className="p-4">Item 1</div>
  <div className="p-3">Item 2</div>
</div>
`})}),`
`,n.jsx(e.h3,{id:"3-respect-dark-mode",children:"3. Respect Dark Mode"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - uses theme-aware tokens
<div className="bg-background text-foreground">Content</div>

// ❌ Bad - hardcoded colors don't adapt
<div className="bg-white text-black">Content</div>
`})}),`
`,n.jsx(e.h3,{id:"4-use-spacing-scale",children:"4. Use Spacing Scale"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - uses spacing scale
<div className="space-y-6">
  <section className="mb-4">Section 1</section>
  <section className="mb-4">Section 2</section>
</div>

// ❌ Bad - arbitrary values
<div>
  <section style={{ marginBottom: '17px' }}>Section 1</section>
  <section style={{ marginBottom: '23px' }}>Section 2</section>
</div>
`})}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://tailwindcss.com/docs",rel:"nofollow",children:"Tailwind CSS Documentation"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://ui.shadcn.com/docs/theming",rel:"nofollow",children:"shadcn/ui Theming"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"../design/color",children:"Design Tokens in Storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties Guide"})}),`
`]})]})}function p(s={}){const{wrapper:e}={...a(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{p as default};

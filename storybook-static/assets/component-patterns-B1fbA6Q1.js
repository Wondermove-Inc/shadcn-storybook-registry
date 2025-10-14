import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CXINb8-q.js";import{M as s}from"./blocks-CA9zFjHS.js";import"./iframe-BiU2suBC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";function t(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Introduction/Component Patterns"}),`
`,n.jsx(e.h1,{id:"component-patterns",children:"Component Patterns"}),`
`,n.jsx(e.p,{children:"shadcn-storybook-registry에서 사용하는 고급 컴포넌트 패턴입니다."}),`
`,n.jsx(e.h2,{id:"compound-components",children:"Compound Components"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Compound Components"}),` 패턴은 여러 컴포넌트가 암묵적으로 상태를 공유하는
패턴입니다.`]}),`
`,n.jsx(e.h3,{id:"개념",children:"개념"}),`
`,n.jsx(e.p,{children:"부모 컴포넌트가 Context를 통해 자식 컴포넌트들에게 상태를 제공합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Compound Components 패턴
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
`})}),`
`,n.jsx(e.h3,{id:"구현-예시-dialog",children:"구현 예시: Dialog"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import * as React from "react";

// Context로 상태 공유
const DialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

// 부모 컴포넌트
function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

// 자식 컴포넌트들이 Context 사용
function DialogTrigger({ children }: { children: React.ReactNode }) {
  const { setOpen } = React.useContext(DialogContext);
  return <button onClick={() => setOpen(true)}>{children}</button>;
}

function DialogContent({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;
  return (
    <div>
      {children}
      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"장점",children:"장점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"암묵적 상태 공유"}),": props drilling 제거"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"유연한 구성"}),": 컴포넌트 순서와 구조 자유롭게 변경 가능"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"가독성"}),": 컴포넌트 계층이 명확함"]}),`
`]}),`
`,n.jsx(e.h3,{id:"shadcnui-적용-사례",children:"shadcn/ui 적용 사례"}),`
`,n.jsx(e.p,{children:"다음 컴포넌트들이 Compound Components 패턴을 사용합니다:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dialog"}),": ",n.jsx(e.code,{children:"<Dialog>"}),", ",n.jsx(e.code,{children:"<DialogTrigger>"}),", ",n.jsx(e.code,{children:"<DialogContent>"}),", ",n.jsx(e.code,{children:"<DialogHeader>"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Popover"}),": ",n.jsx(e.code,{children:"<Popover>"}),", ",n.jsx(e.code,{children:"<PopoverTrigger>"}),", ",n.jsx(e.code,{children:"<PopoverContent>"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accordion"}),": ",n.jsx(e.code,{children:"<Accordion>"}),", ",n.jsx(e.code,{children:"<AccordionItem>"}),", ",n.jsx(e.code,{children:"<AccordionTrigger>"}),`,
`,n.jsx(e.code,{children:"<AccordionContent>"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tabs"}),": ",n.jsx(e.code,{children:"<Tabs>"}),", ",n.jsx(e.code,{children:"<TabsList>"}),", ",n.jsx(e.code,{children:"<TabsTrigger>"}),", ",n.jsx(e.code,{children:"<TabsContent>"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Select"}),": ",n.jsx(e.code,{children:"<Select>"}),", ",n.jsx(e.code,{children:"<SelectTrigger>"}),", ",n.jsx(e.code,{children:"<SelectContent>"}),", ",n.jsx(e.code,{children:"<SelectItem>"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"render-props",children:"Render Props"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Render Props"})," 패턴은 함수를 prop으로 전달하여 렌더링을 위임하는 패턴입니다."]}),`
`,n.jsx(e.h3,{id:"개념-1",children:"개념"}),`
`,n.jsx(e.p,{children:"컴포넌트가 렌더링 로직을 외부에서 주입받습니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Render Props 패턴
<DataProvider
  render={(data) => (
    <div>
      {data.map((item) => (
        <Card key={item.id}>{item.name}</Card>
      ))}
    </div>
  )}
/>
`})}),`
`,n.jsx(e.h3,{id:"구현-예시-dataprovider",children:"구현 예시: DataProvider"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface DataProviderProps<T> {
  data: T[];
  render: (data: T[]) => React.ReactNode;
  loading?: (isLoading: boolean) => React.ReactNode;
}

function DataProvider<T>({ data, render, loading }: DataProviderProps<T>) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState<T[]>([]);

  React.useEffect(() => {
    // 데이터 로딩 시뮬레이션
    setTimeout(() => {
      setItems(data);
      setIsLoading(false);
    }, 1000);
  }, [data]);

  if (isLoading && loading) {
    return <>{loading(isLoading)}</>;
  }

  return <>{render(items)}</>;
}

// 사용 예시
<DataProvider
  data={users}
  loading={(isLoading) => <Skeleton />}
  render={(users) => (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )}
/>;
`})}),`
`,n.jsx(e.h3,{id:"children-as-function",children:"Children as Function"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"children"}),"을 함수로 받는 변형 패턴:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface ToggleProps {
  children: (isOn: boolean, toggle: () => void) => React.ReactNode;
}

function Toggle({ children }: ToggleProps) {
  const [isOn, setIsOn] = React.useState(false);
  const toggle = () => setIsOn(!isOn);

  return <>{children(isOn, toggle)}</>;
}

// 사용 예시
<Toggle>
  {(isOn, toggle) => (
    <Button onClick={toggle}>{isOn ? "ON" : "OFF"}</Button>
  )}
</Toggle>;
`})}),`
`,n.jsx(e.h3,{id:"장점-1",children:"장점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"재사용성"}),": 로직과 렌더링 분리"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"유연성"}),": 다양한 UI를 동일한 로직으로 구현"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Type Safety"}),": TypeScript 제네릭으로 타입 안전성 확보"]}),`
`]}),`
`,n.jsx(e.h2,{id:"custom-hooks",children:"Custom Hooks"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Custom Hooks"}),"는 재사용 가능한 로직을 캡슐화하는 패턴입니다."]}),`
`,n.jsx(e.h3,{id:"개념-2",children:"개념"}),`
`,n.jsx(e.p,{children:"컴포넌트 로직을 함수로 추출하여 재사용합니다:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Custom Hook 패턴
function useDialog() {
  const [open, setOpen] = React.useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const toggleDialog = () => setOpen(!open);

  return { open, openDialog, closeDialog, toggleDialog };
}

// 사용 예시
function MyComponent() {
  const dialog = useDialog();

  return (
    <>
      <Button onClick={dialog.openDialog}>Open Dialog</Button>
      <Dialog open={dialog.open} onOpenChange={dialog.setOpen}>
        <DialogContent>Hello</DialogContent>
      </Dialog>
    </>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"구현-예시-usetoggle",children:"구현 예시: useToggle"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setTrue = React.useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse };
}
`})}),`
`,n.jsx(e.h3,{id:"구현-예시-uselocalstorage",children:"구현 예시: useLocalStorage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function useLocalStorage<T>(key: string, initialValue: T) {
  // 초기값 로드
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 값 저장
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// 사용 예시
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"shadcnui-custom-hooks",children:"shadcn/ui Custom Hooks"}),`
`,n.jsx(e.p,{children:"프로젝트에서 사용하는 주요 Custom Hooks:"}),`
`,n.jsx(e.h4,{id:"usetoast",children:"useToast"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useToast } from "@/hooks/use-toast";

function MyComponent() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Operation completed successfully",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
`})}),`
`,n.jsx(e.h4,{id:"usemobile",children:"useMobile"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { useMobile } from "@/hooks/use-mobile";

function ResponsiveComponent() {
  const isMobile = useMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
}
`})}),`
`,n.jsx(e.h3,{id:"장점-2",children:"장점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"로직 재사용"}),": 여러 컴포넌트에서 동일한 로직 공유"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"가독성"}),": 컴포넌트 코드 간결화"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"테스트 용이"}),": Hook을 독립적으로 테스트 가능"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"타입 안전성"}),": TypeScript 제네릭 활용"]}),`
`]}),`
`,n.jsx(e.h2,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Controlled"}),"와 ",n.jsx(e.strong,{children:"Uncontrolled"})," 컴포넌트 패턴입니다."]}),`
`,n.jsx(e.h3,{id:"controlled-components",children:"Controlled Components"}),`
`,n.jsx(e.p,{children:"상태를 부모 컴포넌트가 제어:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function ControlledInput() {
  const [value, setValue] = React.useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
`})}),`
`,n.jsx(e.h3,{id:"uncontrolled-components",children:"Uncontrolled Components"}),`
`,n.jsxs(e.p,{children:["상태를 DOM이 제어 (",n.jsx(e.code,{children:"ref"})," 사용):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function UncontrolledInput() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <Input ref={inputRef} defaultValue="Hello" />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"hybrid-pattern",children:"Hybrid Pattern"}),`
`,n.jsxs(e.p,{children:["shadcn/ui는 ",n.jsx(e.strong,{children:"Controlled와 Uncontrolled를 모두 지원"}),`하는 Hybrid 패턴을
사용합니다:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface DialogProps {
  open?: boolean; // Controlled
  defaultOpen?: boolean; // Uncontrolled
  onOpenChange?: (open: boolean) => void;
}

function Dialog({ open, defaultOpen, onOpenChange }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    defaultOpen ?? false
  );

  // Controlled인 경우 open 사용, Uncontrolled인 경우 내부 상태 사용
  const isOpen = open !== undefined ? open : uncontrolledOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (open === undefined) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    // Dialog 구현
    <div>{isOpen ? "Open" : "Closed"}</div>
  );
}

// Controlled 사용
<Dialog open={open} onOpenChange={setOpen} />

// Uncontrolled 사용
<Dialog defaultOpen={false} />
`})}),`
`,n.jsx(e.h3,{id:"선택-기준",children:"선택 기준"}),`
`,n.jsxs(e.p,{children:[`| Pattern          | 사용 시기                    | 예시                      |
| ---------------- | ---------------------------- | ------------------------- |
| `,n.jsx(e.strong,{children:"Controlled"}),`   | 부모가 상태를 관리해야 할 때 | Form validation, 동기화   |
| `,n.jsx(e.strong,{children:"Uncontrolled"}),` | 단순한 입력, 성능 최적화     | Simple forms, file inputs |
| `,n.jsx(e.strong,{children:"Hybrid"}),"       | 양쪽 모두 지원하고 싶을 때   | shadcn/ui 컴포넌트들      |"]}),`
`,n.jsx(e.h2,{id:"higher-order-components-hoc",children:"Higher-Order Components (HOC)"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"HOC"}),"는 컴포넌트를 인자로 받아 새로운 컴포넌트를 반환하는 함수입니다."]}),`
`,n.jsx(e.h3,{id:"개념-3",children:"개념"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// HOC 함수
function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: P & { isLoading: boolean }) {
    if (isLoading) {
      return <Skeleton />;
    }
    return <Component {...(props as P)} />;
  };
}

// 사용 예시
const UserCardWithLoading = withLoading(UserCard);

<UserCardWithLoading isLoading={true} user={user} />;
`})}),`
`,n.jsx(e.h3,{id:"구현-예시-withauth",children:"구현 예시: withAuth"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithAuthComponent(props: P) {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <LoginPage />;
    }

    return <Component {...props} user={user} />;
  };
}

// 사용 예시
const ProtectedDashboard = withAuth(Dashboard);
`})}),`
`,n.jsx(e.h3,{id:"주의사항",children:"주의사항"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["⚠️ ",n.jsx(e.strong,{children:"HOC는 Modern React에서는 Custom Hooks로 대체 권장"})]}),`
`,n.jsx(e.li,{children:"⚠️ Ref forwarding 필요"}),`
`,n.jsx(e.li,{children:"⚠️ 디버깅 어려움"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ HOC 대신
const UserCardWithLoading = withLoading(UserCard);

// ✅ Custom Hook 사용
function UserCardWithLoading(props) {
  const { isLoading } = useUserData();
  if (isLoading) return <Skeleton />;
  return <UserCard {...props} />;
}
`})}),`
`,n.jsx(e.h2,{id:"composition-pattern",children:"Composition Pattern"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Composition"})," 패턴은 작은 컴포넌트들을 조합하여 복잡한 UI를 구성합니다."]}),`
`,n.jsx(e.h3,{id:"개념-4",children:"개념"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Composition 패턴
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
`})}),`
`,n.jsx(e.h3,{id:"장점-3",children:"장점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"재사용성"}),": 작은 컴포넌트를 다양하게 조합"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"유연성"}),": 필요한 부분만 조합 가능"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"가독성"}),": 컴포넌트 구조가 명확"]}),`
`]}),`
`,n.jsx(e.h3,{id:"구현-예시-card",children:"구현 예시: Card"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col space-y-1.5 p-6" {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="text-2xl font-semibold leading-none tracking-tight" {...props}>
      {children}
    </h3>
  );
}

// 사용 예시: 필요한 부분만 조합
<Card>
  <CardHeader>
    <CardTitle>Only Title</CardTitle>
  </CardHeader>
</Card>

<Card>
  <CardContent>
    <p>Only Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"polymorphic-components",children:"Polymorphic Components"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Polymorphic Components"}),"는 ",n.jsx(e.code,{children:"as"}),` prop으로 렌더링할 HTML 태그를 동적으로
변경하는 패턴입니다.`]}),`
`,n.jsx(e.h3,{id:"개념-5",children:"개념"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Polymorphic Component
<Button as="a" href="/login">
  Login
</Button>

<Button as="div" onClick={handleClick}>
  Div Button
</Button>
`})}),`
`,n.jsx(e.h3,{id:"구현-예시",children:"구현 예시"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<E>;

function Button<E extends React.ElementType = "button">({
  as,
  children,
  ...props
}: PolymorphicProps<E>) {
  const Component = as || "button";
  return (
    <Component className="btn" {...props}>
      {children}
    </Component>
  );
}

// 사용 예시
<Button>Default Button</Button>
<Button as="a" href="/home">Link Button</Button>
<Button as="div" role="button">Div Button</Button>
`})}),`
`,n.jsx(e.h3,{id:"장점-4",children:"장점"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"유연성"}),": 동일한 스타일로 다양한 HTML 태그 사용"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Type Safety"}),": TypeScript로 prop 타입 자동 추론"]}),`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"접근성"}),": 올바른 semantic HTML 선택 가능"]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsx(e.h3,{id:"1-compound-components-우선-사용",children:"1. Compound Components 우선 사용"}),`
`,n.jsx(e.p,{children:"복잡한 상태 공유가 필요한 경우 Compound Components 사용:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: Compound Components
<Select>
  <SelectTrigger>Select</SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>

// ❌ Bad: 모든 props를 부모에게 전달
<Select
  trigger={<button>Select</button>}
  content={[{ value: "1", label: "Option 1" }]}
/>
`})}),`
`,n.jsx(e.h3,{id:"2-custom-hooks로-로직-분리",children:"2. Custom Hooks로 로직 분리"}),`
`,n.jsx(e.p,{children:"재사용 가능한 로직은 Custom Hook으로 추출:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: Custom Hook
function useFormValidation(schema) {
  const [errors, setErrors] = React.useState({});
  const validate = (data) => {
    // validation 로직
  };
  return { errors, validate };
}

// ❌ Bad: 컴포넌트 내부에 로직 중복
function Form1() {
  const [errors, setErrors] = React.useState({});
  // validation 로직 중복
}
`})}),`
`,n.jsx(e.h3,{id:"3-typescript-제네릭-활용",children:"3. TypeScript 제네릭 활용"}),`
`,n.jsx(e.p,{children:"타입 안전성을 위해 제네릭 사용:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Good: 제네릭으로 타입 안전성 확보
function useData<T>(fetcher: () => Promise<T>) {
  const [data, setData] = React.useState<T | null>(null);
  // ...
  return data;
}

// ❌ Bad: any 사용
function useData(fetcher: () => Promise<any>) {
  // ...
}
`})}),`
`,n.jsx(e.h2,{id:"resources",children:"Resources"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactpatterns.com",rel:"nofollow",children:"React Patterns"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://kentcdodds.com/blog/compound-components-with-react-hooks",rel:"nofollow",children:"Compound Components"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.dev/learn/reusing-logic-with-custom-hooks",rel:"nofollow",children:"Custom Hooks"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop",rel:"nofollow",children:"Render Props"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.benmvp.com/blog/polymorphic-react-components-typescript/",rel:"nofollow",children:"Polymorphic Components"})}),`
`]})]})}function u(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{u as default};

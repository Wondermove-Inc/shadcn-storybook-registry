import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useEffect, useState } from "react";

// 🎨 Tailwind 기본 색상 정의
const tailwindColors = {
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006",
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22",
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065",
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519",
  },
};

type Color = {
  name: string;
  value: string;
  description?: string;
};

// 🎨 shadcn 토큰 색상 타일 컴포넌트 (다크모드 감지 포함)
const ColorTile = ({ value }: Pick<Color, "value">) => {
  const [colorValue, setColorValue] = useState("");

  useEffect(() => {
    // 🌓 CSS 변수 값을 읽어서 표시용으로만 사용
    const updateColor = () => {
      const styles = getComputedStyle(document.documentElement);
      const cssValue = styles.getPropertyValue(value);
      setColorValue(cssValue.trim());
    };

    // 초기 로드 시 색상 읽기
    updateColor();

    // 🔄 MutationObserver로 다크모드 실시간 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateColor();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [value]);

  // 🎨 HSL 값을 쉼표 형식으로 변환 (React 인라인 스타일 호환성)
  // "0 0% 100%" → "0, 0%, 100%"
  const hslValue = colorValue.replace(/\s+/g, ", ");

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="size-20 rounded-md border"
        style={{ backgroundColor: `hsl(${hslValue})` }}
      />
      <p className="text-center text-xs opacity-70">{value}</p>
      <p className="text-center font-mono text-xs">{colorValue}</p>
    </div>
  );
};

/**
 * 🎨 shadcn/ui 디자인 시스템 색상 토큰 및 Tailwind CSS 색상 팔레트
 *
 * 이 스토리는 두 가지 색상 시스템을 제공합니다:
 * 1. **shadcn Design Tokens**: 프로젝트에서 사용되는 디자인 시스템 토큰 (CSS 변수)
 * 2. **Tailwind Palette**: Tailwind CSS의 전체 색상 팔레트 (22개 색상 × 11개 shade)
 *
 * 다크모드 전환 시 shadcn 토큰 값이 실시간으로 업데이트됩니다.
 */
const meta: Meta<{
  colors: Color[];
}> = {
  title: "foundation/Color",
  argTypes: {},
  render: (args) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>
            <span className="sr-only">Preview</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {args.colors.map(({ name, value, description }) => (
          <TableRow key={name}>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell className="text-muted-foreground text-sm">
              {description}
            </TableCell>
            <TableCell>
              <ColorTile value={value} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 🎯 Primary: 주요 색상 토큰
 *
 * 애플리케이션의 배경, 텍스트, 주요 브랜드 색상 등 기본 색상 토큰입니다.
 * 다크모드 전환 시 자동으로 업데이트됩니다.
 */
export const Primary: Story = {
  args: {
    colors: [
      {
        name: "Background",
        value: "--background",
        description: "애플리케이션의 메인 배경 색상",
      },
      {
        name: "Foreground",
        value: "--foreground",
        description: "애플리케이션의 메인 텍스트 색상",
      },
      {
        name: "Primary",
        value: "--primary",
        description: "주요 액션을 위한 브랜드 색상",
      },
      {
        name: "Primary Foreground",
        value: "--primary-foreground",
        description: "Primary 배경 위의 텍스트 색상",
      },
      {
        name: "Secondary",
        value: "--secondary",
        description: "덜 중요한 액션을 위한 보조 색상",
      },
      {
        name: "Secondary Foreground",
        value: "--secondary-foreground",
        description: "Secondary 배경 위의 텍스트 색상",
      },
    ],
  },
};

/**
 * 🗂️ Surface: 표면 색상 토큰
 *
 * 카드, 팝오버 등 UI 표면 요소를 위한 색상 토큰입니다.
 */
export const Surface: Story = {
  args: {
    colors: [
      {
        name: "Card",
        value: "--card",
        description: "카드 컴포넌트의 배경 색상",
      },
      {
        name: "Card Foreground",
        value: "--card-foreground",
        description: "Card 배경 위의 텍스트 색상",
      },
      {
        name: "Popover",
        value: "--popover",
        description: "팝오버 컴포넌트의 배경 색상",
      },
      {
        name: "Popover Foreground",
        value: "--popover-foreground",
        description: "Popover 배경 위의 텍스트 색상",
      },
    ],
  },
};

/**
 * ⚡ State: 상태 및 유틸리티 색상 토큰
 *
 * 비활성화, 강조, 파괴적 액션 등 다양한 상태를 나타내는 색상 토큰입니다.
 */
export const State: Story = {
  args: {
    colors: [
      {
        name: "Muted",
        value: "--muted",
        description: "비활성화/뮤트된 요소의 배경 색상",
      },
      {
        name: "Muted Foreground",
        value: "--muted-foreground",
        description: "보조 텍스트의 색상",
      },
      {
        name: "Accent",
        value: "--accent",
        description: "강조 및 하이라이트를 위한 색상",
      },
      {
        name: "Accent Foreground",
        value: "--accent-foreground",
        description: "Accent 배경 위의 텍스트 색상",
      },
      {
        name: "Destructive",
        value: "--destructive",
        description: "파괴적/에러 액션을 위한 색상",
      },
      {
        name: "Destructive Foreground",
        value: "--destructive-foreground",
        description: "Destructive 배경 위의 텍스트 색상",
      },
    ],
  },
};

/**
 * 🔲 Border: 테두리 및 입력 색상 토큰
 *
 * 폼 컨트롤과 구분선을 위한 색상 토큰입니다.
 */
export const Border: Story = {
  args: {
    colors: [
      {
        name: "Border",
        value: "--border",
        description: "UI 요소의 기본 테두리 색상",
      },
      {
        name: "Input",
        value: "--input",
        description: "입력 필드의 테두리 색상",
      },
      {
        name: "Ring",
        value: "--ring",
        description: "포커스 링 색상",
      },
    ],
  },
};

/**
 * 📊 Chart: 차트 색상 팔레트
 *
 * 데이터 시각화 컴포넌트를 위한 색상 팔레트입니다.
 */
export const Chart: Story = {
  args: {
    colors: [
      {
        name: "Chart 1",
        value: "--chart-1",
        description: "차트 팔레트의 첫 번째 색상",
      },
      {
        name: "Chart 2",
        value: "--chart-2",
        description: "차트 팔레트의 두 번째 색상",
      },
      {
        name: "Chart 3",
        value: "--chart-3",
        description: "차트 팔레트의 세 번째 색상",
      },
      {
        name: "Chart 4",
        value: "--chart-4",
        description: "차트 팔레트의 네 번째 색상",
      },
      {
        name: "Chart 5",
        value: "--chart-5",
        description: "차트 팔레트의 다섯 번째 색상",
      },
    ],
  },
};

/**
 * 🧭 Sidebar: 사이드바 색상 토큰
 *
 * 내비게이션 사이드바 컴포넌트를 위한 색상 토큰입니다.
 */
export const Sidebar: Story = {
  args: {
    colors: [
      {
        name: "Sidebar",
        value: "--sidebar",
        description: "사이드바의 배경 색상",
      },
      {
        name: "Sidebar Foreground",
        value: "--sidebar-foreground",
        description: "사이드바의 텍스트 색상",
      },
      {
        name: "Sidebar Primary",
        value: "--sidebar-primary",
        description: "사이드바의 주요 색상",
      },
      {
        name: "Sidebar Primary Foreground",
        value: "--sidebar-primary-foreground",
        description: "Sidebar Primary 배경 위의 텍스트 색상",
      },
      {
        name: "Sidebar Accent",
        value: "--sidebar-accent",
        description: "사이드바의 강조 색상",
      },
      {
        name: "Sidebar Accent Foreground",
        value: "--sidebar-accent-foreground",
        description: "Sidebar Accent 배경 위의 텍스트 색상",
      },
      {
        name: "Sidebar Border",
        value: "--sidebar-border",
        description: "사이드바의 테두리 색상",
      },
      {
        name: "Sidebar Ring",
        value: "--sidebar-ring",
        description: "사이드바의 포커스 링 색상",
      },
    ],
  },
};

/**
 * 🎨 Tailwind Palette: Tailwind CSS 전체 색상 팔레트
 *
 * Tailwind CSS의 22개 색상 시스템 (각 11개 shade: 50-950)과 shadcn 토큰을 함께 보여줍니다.
 * 다크모드 전환 시 shadcn 토큰 값이 실시간으로 업데이트됩니다.
 */
export const TailwindPalette: Story = {
  render: () => {
    const [tokens, setTokens] = useState<Record<string, string>>({});
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 🌓 CSS 변수 값을 가져오는 함수 (다크모드 실시간 감지)
    const updateTokens = () => {
      const styles = getComputedStyle(document.documentElement);
      const tokenList = [
        "--background",
        "--foreground",
        "--primary",
        "--primary-foreground",
        "--secondary",
        "--secondary-foreground",
        "--muted",
        "--muted-foreground",
        "--accent",
        "--accent-foreground",
        "--destructive",
        "--destructive-foreground",
        "--border",
        "--input",
        "--ring",
        "--card",
        "--card-foreground",
        "--popover",
        "--popover-foreground",
        "--chart-1",
        "--chart-2",
        "--chart-3",
        "--chart-4",
        "--chart-5",
        "--sidebar",
        "--sidebar-foreground",
        "--sidebar-primary",
        "--sidebar-primary-foreground",
        "--sidebar-accent",
        "--sidebar-accent-foreground",
        "--sidebar-border",
        "--sidebar-ring",
      ];
      const newValues: Record<string, string> = {};
      tokenList.forEach((token) => {
        newValues[token] = styles.getPropertyValue(token).trim();
      });
      setTokens(newValues);
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // 🔄 초기 로드 및 다크모드 변경 감지
    useEffect(() => {
      updateTokens();

      // MutationObserver로 클래스 변경 감지
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "class"
          ) {
            updateTokens();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => {
        observer.disconnect();
      };
    }, []);

    // 단일 컬러 박스 컴포넌트
    const ColorBox = ({ name, value }: { name: string; value: string }) => (
      <div key={name} style={{ textAlign: "center" }}>
        <div
          style={{
            background: value || "transparent",
            width: "100%",
            height: "60px",
            borderRadius: "8px",
            border: isDarkMode ? "1px solid #333" : "1px solid #e5e5e5",
          }}
        />
        <p style={{ fontSize: "12px", marginTop: "4px" }}>{name}</p>
        <code style={{ fontSize: "10px" }}>{value || "-"}</code>
      </div>
    );

    // Tailwind 팔레트 렌더링 함수
    const renderTailwindColors = (
      colors: Record<string, string | Record<string, string>>,
      parent = "",
    ) => {
      return Object.entries(colors).map(([name, value]) => {
        const key = parent ? `${parent}-${name}` : name;
        if (typeof value === "string") {
          return <ColorBox key={key} name={key} value={value} />;
        }
        if (typeof value === "object") {
          return (
            <div key={key} style={{ marginBottom: "2rem", width: "100%" }}>
              <h3
                style={{ marginBottom: "0.5rem", textTransform: "capitalize" }}
              >
                {name}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(11, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {renderTailwindColors(value, name)}
              </div>
            </div>
          );
        }
        return null;
      });
    };

    // Tailwind 클래스 매핑으로 shadcn 토큰 표시
    const tokenClassMap: Record<string, string> = {
      "--background": "bg-background",
      "--foreground": "bg-foreground",
      "--primary": "bg-primary",
      "--primary-foreground": "bg-primary-foreground",
      "--secondary": "bg-secondary",
      "--secondary-foreground": "bg-secondary-foreground",
      "--muted": "bg-muted",
      "--muted-foreground": "bg-muted-foreground",
      "--accent": "bg-accent",
      "--accent-foreground": "bg-accent-foreground",
      "--destructive": "bg-destructive",
      "--destructive-foreground": "bg-destructive-foreground",
      "--border": "bg-border",
      "--input": "bg-input",
      "--ring": "bg-ring",
      "--card": "bg-card",
      "--card-foreground": "bg-card-foreground",
      "--popover": "bg-popover",
      "--popover-foreground": "bg-popover-foreground",
      "--chart-1": "bg-chart-1",
      "--chart-2": "bg-chart-2",
      "--chart-3": "bg-chart-3",
      "--chart-4": "bg-chart-4",
      "--chart-5": "bg-chart-5",
      "--sidebar": "bg-[hsl(var(--sidebar))]",
      "--sidebar-foreground": "bg-[hsl(var(--sidebar-foreground))]",
      "--sidebar-primary": "bg-[hsl(var(--sidebar-primary))]",
      "--sidebar-primary-foreground":
        "bg-[hsl(var(--sidebar-primary-foreground))]",
      "--sidebar-accent": "bg-[hsl(var(--sidebar-accent))]",
      "--sidebar-accent-foreground":
        "bg-[hsl(var(--sidebar-accent-foreground))]",
      "--sidebar-border": "bg-[hsl(var(--sidebar-border))]",
      "--sidebar-ring": "bg-[hsl(var(--sidebar-ring))]",
    };

    return (
      <div>
        {/* 현재 테마 표시 */}
        <div
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            background: isDarkMode ? "#333" : "#f5f5f5",
            borderRadius: "4px",
          }}
        >
          <strong>Current Theme:</strong>{" "}
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </div>

        {/* shadcn 토큰 */}
        <h2 style={{ marginBottom: "1rem" }}>Shadcn Design Tokens</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {Object.entries(tokenClassMap).map(([token, className]) => {
            const value = tokens[token];
            return (
              <div key={token} style={{ textAlign: "center" }}>
                <div
                  className={className}
                  style={{
                    width: "100%",
                    height: "60px",
                    borderRadius: "8px",
                    border:
                      token === "--card" || token === "--background"
                        ? isDarkMode
                          ? "2px solid #666"
                          : "2px solid #ccc"
                        : isDarkMode
                          ? "1px solid #333"
                          : "1px solid #e5e5e5",
                  }}
                />
                <p style={{ fontSize: "12px", marginTop: "4px" }}>{token}</p>
                <code style={{ fontSize: "10px" }}>
                  {value || "loading..."}
                </code>
              </div>
            );
          })}
        </div>

        {/* Tailwind 팔레트 */}
        <h2 style={{ marginBottom: "1rem" }}>Tailwind Color Palette</h2>
        {renderTailwindColors(tailwindColors)}
      </div>
    );
  },
};

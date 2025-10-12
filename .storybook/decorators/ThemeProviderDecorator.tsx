import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "next-themes";

/**
 * 🎯 목적: next-themes ThemeProvider를 Storybook 환경에 통합
 *
 * Storybook의 globals.theme에서 light/dark 모드를 추출하여 ThemeProvider에 전달합니다.
 * 이를 통해 ThemeSwitcher 컴포넌트가 Storybook에서 정상 동작합니다.
 *
 * @example
 * // Storybook globals.theme 형식: "blue-light", "red-dark" 등
 * // 추출된 mode: "light" 또는 "dark"
 */
export const withThemeProvider: Decorator = (Story, context) => {
  // Storybook globals.theme에서 light/dark 추출
  // 예: "blue-light" → "light", "red-dark" → "dark"
  const globalTheme = context.globals.theme || "blue-light";
  const mode = globalTheme.includes("-dark") ? "dark" : "light";

  return (
    <ThemeProvider
      forcedTheme={mode}
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      <Story />
    </ThemeProvider>
  );
};

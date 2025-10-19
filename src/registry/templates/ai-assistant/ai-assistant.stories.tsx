import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIAssistant } from "./ai-assistant";

/**
 * AI Assistant 설정 패널 템플릿을 보여주는 Storybook 스토리입니다.
 *
 * 🎯 목적: AI Assistant 설정 패널의 다양한 상태와 인터랙션 데모
 *
 * 특징:
 * - AI Provider 선택 (OpenAI, Anthropic, Google)
 * - API Key 입력 및 검증
 * - 다크 테마 최적화 디자인
 * - shadcn/ui 컴포넌트 활용
 */
const meta = {
  title: "templates/AIAssistant",
  component: AIAssistant,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `AI Assistant 설정 패널 템플릿입니다. AI Provider 선택, API Key 입력, 시작 버튼 등의 기능을 제공하며, 다크 테마에 최적화되어 있습니다.`,
      },
    },
  },
  argTypes: {
    onClose: {
      description: "닫기 버튼 클릭 시 호출되는 콜백 함수",
    },
    onStart: {
      description: "시작 버튼 클릭 시 호출되는 콜백 함수",
    },
    className: {
      description: "추가 CSS 클래스명",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          height: "600px",
          display: "flex",
          backgroundColor: "#0A0A0A",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AIAssistant>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 AI Assistant 설정 패널입니다.
 *
 * 🎯 목적: 표준 AI Assistant 설정 패널 데모
 */
export const Default: Story = {
  args: {
    onClose: () => console.log("AI Assistant closed"),
    onStart: (provider: string, apiKey: string) =>
      console.log("AI Assistant started:", { provider, apiKey }),
  },
};

/**
 * 인터랙티브 AI Assistant 패널입니다.
 *
 * 🎯 목적: 실제 동작하는 AI Assistant 설정 패널 데모
 */
export const Interactive: Story = {
  render: () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [result, setResult] = React.useState<{
      provider: string;
      apiKey: string;
    } | null>(null);

    const handleClose = React.useCallback(() => {
      setIsVisible(false);
      console.log("AI Assistant closed");
    }, []);

    const handleStart = React.useCallback(
      (provider: string, apiKey: string) => {
        setResult({ provider, apiKey: apiKey.replace(/./g, "*") });
        console.log("AI Assistant started:", { provider, apiKey });
      },
      [],
    );

    return (
      <div
        style={{
          width: "400px",
          height: "600px",
          display: "flex",
          backgroundColor: "#0A0A0A",
        }}
      >
        {isVisible ? (
          <AIAssistant onClose={handleClose} onStart={handleStart} />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-white">
            <h3 className="mb-2 text-lg font-semibold">AI Assistant 닫힘</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              패널이 닫혔습니다.
            </p>
            <button
              onClick={() => setIsVisible(true)}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
            >
              다시 열기
            </button>
            {result && (
              <div className="mt-4 rounded-md bg-white/10 p-3 text-xs">
                <p>설정된 Provider: {result.provider}</p>
                <p>API Key: {result.apiKey}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
};

/**
 * 커스텀 스타일이 적용된 AI Assistant 패널입니다.
 *
 * 🎯 목적: 커스텀 클래스명을 통한 스타일 커스터마이징 예시
 */
export const CustomStyled: Story = {
  args: {
    onClose: () => console.log("AI Assistant closed"),
    onStart: (provider: string, apiKey: string) =>
      console.log("AI Assistant started:", { provider, apiKey }),
    className: "border-2 border-blue-500/20 rounded-lg",
  },
};

/**
 * 완전한 사이드 패널로 사용되는 AI Assistant입니다.
 *
 * 🎯 목적: 전체 화면 사이드바로 사용되는 예시
 */
export const AsSidePanel: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          backgroundColor: "#0A0A0A",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#1A1A1A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="text-center text-white">
            <h2 className="mb-2 text-xl font-semibold">메인 콘텐츠 영역</h2>
            <p className="text-muted-foreground">
              AI Assistant가 우측에 표시됩니다.
            </p>
          </div>
        </div>
        <Story />
      </div>
    ),
  ],
  args: {
    onClose: () => console.log("AI Assistant closed"),
    onStart: (provider: string, apiKey: string) =>
      console.log("AI Assistant started:", { provider, apiKey }),
    className: "w-96 h-full",
  },
};

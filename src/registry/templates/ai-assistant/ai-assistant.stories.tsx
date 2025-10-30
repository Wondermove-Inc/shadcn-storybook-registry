import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AIAssistant } from "@/registry/templates/ai-assistant/ai-assistant";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";
import {
  History,
  X,
  Infinity,
  ChevronDown,
  ArrowUp,
  ChevronRight,
  Copy,
  MoreHorizontal,
  TrendingUp,
  Expand,
} from "lucide-react";

/**
 * AI Assistant 기본 시작 템플릿입니다.
 *
 * 🎯 목적: AI Assistant 컴포넌트의 독립적인 사용법 데모
 * ✨ 특징:
 * - ResizablePanelGroup을 사용한 반응형 레이아웃
 * - 메인 콘텐츠 영역과 AI Assistant 패널 분리
 * - 사용자가 패널 크기를 조절할 수 있는 리사이즈 핸들
 * - AI Assistant 패널의 기본 사이즈 정책 (25% 기본, 20-40% 범위)
 */
const meta: Meta = {
  title: "templates/AI Assistant",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "AI Assistant 컴포넌트만 독립적으로 사용하는 예시입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * AI Assistant의 기본 사용 예시입니다.
 * 메인 콘텐츠 영역과 함께 리사이즈 가능한 패널로 구성되어 있습니다.
 */
export const Start: Story = {
  render: () => (
    <div className="bg-background h-screen w-full">
      <ResizablePanelGroup direction="horizontal" className="h-full w-full">
        {/* 메인 콘텐츠 영역 */}
        <ResizablePanel minSize={15}>
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center">
              <h2 className="mb-2 text-lg font-semibold">
                AI Assistant 템플릿
              </h2>
              <p className="text-muted-foreground text-sm">
                AI Assistant 컴포넌트만 독립적으로 사용하는 예시입니다.
              </p>
            </div>
          </div>
        </ResizablePanel>

        {/* AI Assistant 리사이즈 핸들 */}
        <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

        {/* AI Assistant 패널 (Default 스토리와 동일한 사이즈 정책) */}
        <ResizablePanel defaultSize={20} minSize={8} maxSize={80}>
          <AIAssistant
            onClose={() => {}}
            onStart={() => {}}
            className="h-full w-full"
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

/**
 * AI Assistant의 채팅 시작 전 상태입니다.
 * 사용자가 첫 메시지를 입력하기 전의 인터페이스를 보여줍니다.
 */
export const BeforeUtterance: Story = {
  render: () => {
    // 🎯 목적: 채팅 입력 상태 관리
    const [message, setMessage] = React.useState("");

    // 🎯 목적: send 버튼 활성화 여부 계산
    const isSendEnabled = message.trim().length > 0;

    // 🎯 목적: Past Chats 펼침/접힘 상태 관리
    const [isPastChatsExpanded, setIsPastChatsExpanded] = React.useState(false);

    return (
      <div className="bg-background h-screen w-full">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          {/* 메인 콘텐츠 영역 */}
          <ResizablePanel>
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center">
                <h2 className="mb-2 text-lg font-semibold">
                  AI Assistant 템플릿
                </h2>
                <p className="text-muted-foreground text-sm">
                  채팅 시작 전 상태의 AI Assistant 인터페이스입니다.
                </p>
              </div>
            </div>
          </ResizablePanel>

          {/* AI Assistant 리사이즈 핸들 */}
          <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

          {/* AI Assistant 패널 - Before Utterance 상태 */}
          <ResizablePanel defaultSize={20} minSize={8} maxSize={80}>
            <aside className="border-border bg-sidebar flex h-full shrink-0 flex-col justify-between gap-4 border-l p-4">
              {/* 🎯 목적: 헤더 섹션 */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-foreground text-lg leading-7 font-semibold">
                    Skuber+ AI Assistant
                  </h3>

                  <div className="flex items-center">
                    {/* History 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <History className="h-4 w-4" />
                      <span className="sr-only">History</span>
                    </Button>

                    {/* Close 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close AI Assistant</span>
                    </Button>
                  </div>
                </div>

                {/* 🎯 목적: InputGroup 컴포넌트 기반 채팅 입력 영역 */}
                <div
                  className="bg-secondary border-border flex w-full flex-col rounded-lg border shadow-sm"
                  style={{ maxHeight: "400px" }}
                >
                  {/* Textarea 영역 with ScrollArea */}
                  <ScrollArea className="max-h-96 p-3">
                    <Textarea
                      placeholder="Ask, Search or Chat..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="text-primary placeholder:text-muted-foreground min-h-0 resize-none border-0 bg-transparent p-0 text-sm leading-5 focus-visible:ring-0"
                      rows={1}
                    />
                  </ScrollArea>

                  {/* InputGroupAddonBlock - 하단 컨트롤 영역 */}
                  <div className="flex items-center justify-between px-3 pt-1.5 pb-3">
                    {/* 좌측 컨트롤 그룹 */}
                    <div className="flex items-center gap-2">
                      {/* Agent InputGroupButton */}
                      <div className="flex items-start">
                        <div className="bg-background/50 border-border flex h-7 items-center justify-center gap-1.5 rounded-full border px-2.5 shadow-sm">
                          <Infinity className="h-4 w-4" />
                          <span className="text-foreground text-xs leading-4 font-medium">
                            Agent
                          </span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Auto InputGroupButton */}
                      <div className="flex items-start">
                        <div className="flex h-6 items-center justify-center gap-1 rounded-sm bg-transparent px-2">
                          <span className="text-muted-foreground text-sm leading-5 font-medium">
                            Auto
                          </span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* 우측 전송 버튼 그룹 */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-start">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all ${
                            isSendEnabled
                              ? "bg-primary hover:bg-primary/90 cursor-pointer"
                              : "bg-muted cursor-not-allowed opacity-50"
                          }`}
                        >
                          <ArrowUp
                            className={`h-4 w-4 ${isSendEnabled ? "text-primary-foreground" : "text-muted-foreground"}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🎯 목적: Past Chats 섹션 */}
              <div className="flex w-full flex-col gap-0">
                {/* Past Chats 버튼 */}
                <div className="flex w-full shrink-0 items-center justify-between">
                  <Button
                    variant="ghost"
                    onClick={() => setIsPastChatsExpanded(!isPastChatsExpanded)}
                    className="flex h-9 items-center justify-center gap-2 px-4 py-2 text-sm font-medium"
                  >
                    Past Chats
                    {isPastChatsExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>

                  {isPastChatsExpanded && (
                    <Button
                      variant="ghost"
                      className="flex h-8 items-center justify-center gap-2 px-3 py-2 text-xs font-medium"
                    >
                      View All
                    </Button>
                  )}
                </div>

                {/* 펼쳐진 채팅 리스트 */}
                {isPastChatsExpanded && (
                  <div className="flex w-full flex-col">
                    {/* 채팅 아이템 1 */}
                    <div className="hover:bg-muted/50 flex shrink-0 items-start gap-2.5 rounded-lg px-4 py-3">
                      <div className="flex shrink-0 flex-grow flex-col items-start justify-center gap-1">
                        <span className="text-muted-foreground self-stretch text-sm leading-5">
                          past-chat-1
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 self-stretch">
                        <span className="text-muted-foreground text-xs leading-4">
                          1h
                        </span>
                      </div>
                    </div>

                    {/* 채팅 아이템 2 */}
                    <div className="hover:bg-muted/50 flex shrink-0 items-start gap-2.5 rounded-lg px-4 py-3">
                      <div className="flex shrink-0 flex-grow flex-col items-start justify-center gap-1">
                        <span className="text-muted-foreground self-stretch text-sm leading-5">
                          past-chat-2
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 self-stretch">
                        <span className="text-muted-foreground text-xs leading-4">
                          4d
                        </span>
                      </div>
                    </div>

                    {/* 채팅 아이템 3 */}
                    <div className="hover:bg-muted/50 flex shrink-0 items-start gap-2.5 rounded-lg px-4 py-3">
                      <div className="flex shrink-0 flex-grow flex-col items-start justify-center gap-1">
                        <span className="text-muted-foreground self-stretch text-sm leading-5">
                          past-chat-3
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 self-stretch">
                        <span className="text-muted-foreground text-xs leading-4">
                          5d
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

/**
 * AI Assistant의 채팅 응답 후 상태입니다.
 * AI가 응답을 완료한 후의 인터페이스를 보여줍니다.
 */
export const AnswersText: Story = {
  render: () => {
    // 🎯 목적: 채팅 입력 상태 관리 (InputGroup용)
    const [message, setMessage] = React.useState("");

    // 🎯 목적: send 버튼 활성화 여부 계산
    const isSendEnabled = message.trim().length > 0;

    // 🎯 목적: 사용자 발화 버튼 편집 상태 관리
    const [isEditingUserMessage, setIsEditingUserMessage] =
      React.useState(false);
    const [userMessageText, setUserMessageText] = React.useState(
      "최근 일주일 동안 생성되거나 변경된 IAM 사용자 내역을 알고싶어.",
    );

    return (
      <div className="bg-background h-screen w-full">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          {/* 메인 콘텐츠 영역 */}
          <ResizablePanel>
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center">
                <h2 className="mb-2 text-lg font-semibold">
                  AI Assistant 템플릿
                </h2>
                <p className="text-muted-foreground text-sm">
                  AI 응답 완료 후 상태의 AI Assistant 인터페이스입니다.
                </p>
              </div>
            </div>
          </ResizablePanel>

          {/* AI Assistant 리사이즈 핸들 */}
          <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

          {/* AI Assistant 패널 - After Utterance 상태 */}
          <ResizablePanel defaultSize={20} minSize={8} maxSize={80}>
            <aside className="border-border bg-sidebar relative flex h-full shrink-0 flex-col border-l p-4">
              {/* 🎯 목적: 헤더 섹션 */}
              <div className="flex shrink-0 flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-foreground text-lg leading-7 font-semibold">
                    New chat
                  </h3>

                  <div className="flex items-center">
                    {/* History 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <History className="h-4 w-4" />
                      <span className="sr-only">History</span>
                    </Button>

                    {/* Close 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close AI Assistant</span>
                    </Button>
                  </div>
                </div>

                {/* 🎯 목적: AI 응답 섹션 (스크롤 가능) - InputGroup 공간 제외 */}
                <div className="min-h-0 flex-1">
                  <ScrollArea className="h-full">
                    <div className="flex flex-col items-end gap-4">
                      {/* 사용자 질문 버튼 또는 편집 InputGroup */}
                      {isEditingUserMessage ? (
                        <div
                          className="bg-secondary border-border flex w-full flex-col rounded-lg border shadow-sm"
                          style={{ maxHeight: "400px" }}
                        >
                          {/* Textarea 영역 with ScrollArea */}
                          <ScrollArea className="max-h-96 p-3">
                            <Textarea
                              value={userMessageText}
                              onChange={(e) =>
                                setUserMessageText(e.target.value)
                              }
                              onBlur={() => setIsEditingUserMessage(false)}
                              className="text-primary placeholder:text-muted-foreground min-h-0 resize-none border-0 bg-transparent p-0 text-sm leading-5 focus-visible:ring-0"
                              rows={1}
                              autoFocus
                            />
                          </ScrollArea>

                          {/* InputGroupAddonBlock - 하단 컨트롤 영역 */}
                          <div className="flex items-center justify-between px-3 pt-1.5 pb-3">
                            {/* 좌측 컨트롤 그룹 */}
                            <div className="flex items-center gap-2">
                              {/* Agent InputGroupButton */}
                              <div className="flex items-start">
                                <div className="bg-background/50 border-border flex h-7 items-center justify-center gap-1.5 rounded-full border px-2.5 shadow-sm">
                                  <Infinity className="h-4 w-4" />
                                  <span className="text-foreground text-xs leading-4 font-medium">
                                    Agent
                                  </span>
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </div>

                              {/* Auto InputGroupButton */}
                              <div className="flex items-start">
                                <div className="flex h-6 items-center justify-center gap-1 rounded-sm bg-transparent px-2">
                                  <span className="text-muted-foreground text-sm leading-5 font-medium">
                                    Auto
                                  </span>
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </div>
                            </div>

                            {/* 우측 전송 버튼 그룹 */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-start">
                                <div
                                  className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all ${
                                    userMessageText.trim().length > 0
                                      ? "bg-primary hover:bg-primary/90 cursor-pointer"
                                      : "bg-muted cursor-not-allowed opacity-50"
                                  }`}
                                >
                                  <ArrowUp
                                    className={`h-4 w-4 ${userMessageText.trim().length > 0 ? "text-primary-foreground" : "text-muted-foreground"}`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="h-auto w-full cursor-pointer justify-start text-left text-sm font-medium break-words whitespace-normal"
                          onClick={() => setIsEditingUserMessage(true)}
                        >
                          {userMessageText}
                        </Button>
                      )}

                      {/* AI 응답 콘텐츠 */}
                      <div className="flex flex-col items-start gap-5 self-stretch">
                        {/* Blockquote */}
                        <div className="flex w-full flex-col items-start">
                          <div className="border-border flex w-full shrink-0 items-center gap-2 border-l-2 px-0 py-0 pl-4">
                            <span className="text-foreground flex-grow text-sm leading-5">
                              최근 7일간 생성되거나 변경된 IAM 사용자 내역은
                              다음과 같습니다.
                            </span>
                          </div>
                        </div>

                        {/* 상세 응답 텍스트 */}
                        <div className="text-foreground self-stretch text-sm leading-5">
                          <p>1. [2025-10-21 14:23:10 UTC]</p>
                          <p className="ml-3">사용자 'data-engineer' 생성됨</p>
                          <p className="ml-3">생성자: admin@cluster.local</p>
                          <p className="ml-3">부여된 권한: read-only-access</p>
                          <br />
                          <p>2. [2025-10-20 09:47:35 UTC]</p>
                          <p className="ml-3">
                            사용자 'devops-agent'의 정책이 수정됨
                          </p>
                          <p className="ml-3">
                            변경 사항: S3FullAccess → S3ReadOnlyAccess
                          </p>
                          <p className="ml-3">
                            수정자: security-admin@cluster.local
                          </p>
                          <br />
                          <p>3. [2025-10-19 18:02:12 UTC]</p>
                          <p className="ml-3">사용자 'temp-user-01'이 삭제됨</p>
                          <p className="ml-3">삭제자: admin@cluster.local</p>
                        </div>

                        {/* Separator */}
                        <div className="bg-border h-px w-full" />

                        {/* 요약 섹션 */}
                        <div className="text-foreground w-full text-sm leading-5">
                          <p>요약:</p>
                          <p>신규 생성: 1명</p>
                          <p>정책 변경: 1건</p>
                          <p>삭제: 1명</p>
                        </div>
                      </div>

                      {/* Copy/More 버튼 */}
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                        >
                          <Copy className="h-4 w-4" />
                          <span className="sr-only">Copy response</span>
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>

              {/* 🎯 목적: InputGroup 컴포넌트 (뷰포트 하단 고정) */}
              <div
                className="bg-secondary border-border absolute right-4 bottom-4 left-4 flex flex-col rounded-lg border shadow-sm"
                style={{ maxHeight: "400px" }}
              >
                {/* Textarea 영역 with ScrollArea */}
                <ScrollArea className="max-h-96 p-3">
                  <Textarea
                    placeholder="Ask, Search or Chat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-primary placeholder:text-muted-foreground min-h-0 resize-none border-0 bg-transparent p-0 text-sm leading-5 focus-visible:ring-0"
                    rows={1}
                  />
                </ScrollArea>

                {/* InputGroupAddonBlock - 하단 컨트롤 영역 */}
                <div className="flex items-center justify-between px-3 pt-1.5 pb-3">
                  {/* 좌측 컨트롤 그룹 */}
                  <div className="flex items-center gap-2">
                    {/* Agent InputGroupButton */}
                    <div className="flex items-start">
                      <div className="bg-background/50 border-border flex h-7 items-center justify-center gap-1.5 rounded-full border px-2.5 shadow-sm">
                        <Infinity className="h-4 w-4" />
                        <span className="text-foreground text-xs leading-4 font-medium">
                          Agent
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Auto InputGroupButton */}
                    <div className="flex items-start">
                      <div className="flex h-6 items-center justify-center gap-1 rounded-sm bg-transparent px-2">
                        <span className="text-muted-foreground text-sm leading-5 font-medium">
                          Auto
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* 우측 전송 버튼 그룹 */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-start">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all ${
                          isSendEnabled
                            ? "bg-primary hover:bg-primary/90 cursor-pointer"
                            : "bg-muted cursor-not-allowed opacity-50"
                        }`}
                      >
                        <ArrowUp
                          className={`h-4 w-4 ${isSendEnabled ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

/**
 * AI Assistant의 차트 답변 예시입니다.
 * 차트 카드 형태로 IAM 사용자 활동 데이터를 시각화하여 보여줍니다.
 */
export const AnswersChart: Story = {
  render: () => {
    // 🎯 목적: 채팅 입력 상태 관리 (InputGroup용)
    const [message, setMessage] = React.useState("");

    // 🎯 목적: send 버튼 활성화 여부 계산
    const isSendEnabled = message.trim().length > 0;

    // 🎯 목적: 사용자 발화 버튼 편집 상태 관리
    const [isEditingUserMessage, setIsEditingUserMessage] =
      React.useState(false);
    const [userMessageText, setUserMessageText] = React.useState(
      "최근 일주일 동안 생성되거나 변경된 IAM 사용자 내역을 알고싶어.",
    );

    // 🎯 목적: 차트 Dialog 상태 관리
    const [openDialogs, setOpenDialogs] = React.useState({
      chart1: false,
      chart2: false,
      chart3: false,
      chart4: false,
    });

    // 🎯 목적: Dialog 열기/닫기 핸들러
    const handleDialogChange = (
      chartId: keyof typeof openDialogs,
      isOpen: boolean,
    ) => {
      setOpenDialogs((prev) => ({ ...prev, [chartId]: isOpen }));
    };

    // 🎯 목적: 차트 데이터 정의 - UIDL 기반 6개월 데이터
    const chartData = [
      { period: "Jan", created: 12, modified: 8 },
      { period: "Feb", created: 19, modified: 13 },
      { period: "Mar", created: 3, modified: 15 },
      { period: "Apr", created: 5, modified: 2 },
      { period: "May", created: 2, modified: 7 },
      { period: "Jun", created: 15, modified: 11 },
    ];

    const chartConfig = {
      created: {
        label: "생성된 사용자",
        color: "var(--chart-1)",
      },
      modified: {
        label: "수정된 사용자",
        color: "var(--chart-2)",
      },
    };

    return (
      <div className="bg-background h-screen w-full">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          {/* 메인 콘텐츠 영역 */}
          <ResizablePanel>
            <div className="flex h-full items-center justify-center p-8">
              <div className="text-center">
                <h2 className="mb-2 text-lg font-semibold">
                  AI Assistant 템플릿
                </h2>
                <p className="text-muted-foreground text-sm">
                  AI 차트 답변 예시의 AI Assistant 인터페이스입니다.
                </p>
              </div>
            </div>
          </ResizablePanel>

          {/* AI Assistant 리사이즈 핸들 */}
          <ResizableHandle className="w-1 cursor-col-resize bg-transparent transition-colors hover:bg-blue-500/20 active:bg-blue-500/30" />

          {/* AI Assistant 패널 - Chart Answers 상태 */}
          <ResizablePanel defaultSize={20} minSize={8} maxSize={80}>
            <aside className="border-border bg-sidebar relative flex h-full shrink-0 flex-col border-l p-4">
              {/* 🎯 목적: 헤더 섹션 */}
              <div className="flex shrink-0 flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-foreground text-lg leading-7 font-semibold">
                    New chat
                  </h3>

                  <div className="flex items-center">
                    {/* History 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <History className="h-4 w-4" />
                      <span className="sr-only">History</span>
                    </Button>

                    {/* Close 버튼 */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close AI Assistant</span>
                    </Button>
                  </div>
                </div>

                {/* 🎯 목적: AI 응답 섹션 (스크롤 가능) - InputGroup 공간 제외 */}
                <div className="min-h-0 flex-1">
                  <ScrollArea className="h-full">
                    <div className="flex flex-col items-end gap-4">
                      {/* 사용자 질문 버튼 또는 편집 InputGroup */}
                      {isEditingUserMessage ? (
                        <div
                          className="bg-secondary border-border flex w-full flex-col rounded-lg border shadow-sm"
                          style={{ maxHeight: "400px" }}
                        >
                          {/* Textarea 영역 with ScrollArea */}
                          <ScrollArea className="max-h-96 p-3">
                            <Textarea
                              value={userMessageText}
                              onChange={(e) =>
                                setUserMessageText(e.target.value)
                              }
                              onBlur={() => setIsEditingUserMessage(false)}
                              className="text-primary placeholder:text-muted-foreground min-h-0 resize-none border-0 bg-transparent p-0 text-sm leading-5 focus-visible:ring-0"
                              rows={1}
                              autoFocus
                            />
                          </ScrollArea>

                          {/* InputGroupAddonBlock - 하단 컨트롤 영역 */}
                          <div className="flex items-center justify-between px-3 pt-1.5 pb-3">
                            {/* 좌측 컨트롤 그룹 */}
                            <div className="flex items-center gap-2">
                              {/* Agent InputGroupButton */}
                              <div className="flex items-start">
                                <div className="bg-background/50 border-border flex h-7 items-center justify-center gap-1.5 rounded-full border px-2.5 shadow-sm">
                                  <Infinity className="h-4 w-4" />
                                  <span className="text-foreground text-xs leading-4 font-medium">
                                    Agent
                                  </span>
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </div>

                              {/* Auto InputGroupButton */}
                              <div className="flex items-start">
                                <div className="flex h-6 items-center justify-center gap-1 rounded-sm bg-transparent px-2">
                                  <span className="text-muted-foreground text-sm leading-5 font-medium">
                                    Auto
                                  </span>
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </div>
                            </div>

                            {/* 우측 전송 버튼 그룹 */}
                            <div className="flex items-center gap-2">
                              <div className="flex items-start">
                                <div
                                  className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all ${
                                    userMessageText.trim().length > 0
                                      ? "bg-primary hover:bg-primary/90 cursor-pointer"
                                      : "bg-muted cursor-not-allowed opacity-50"
                                  }`}
                                >
                                  <ArrowUp
                                    className={`h-4 w-4 ${userMessageText.trim().length > 0 ? "text-primary-foreground" : "text-muted-foreground"}`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          className="h-auto w-full cursor-pointer justify-start text-left text-sm font-medium break-words whitespace-normal"
                          onClick={() => setIsEditingUserMessage(true)}
                        >
                          {userMessageText}
                        </Button>
                      )}

                      {/* AI 응답 콘텐츠 - 텍스트 부분만 (차트 제외) */}
                      <div className="flex w-full flex-col items-start gap-5">
                        {/* Blockquote */}
                        <div className="flex w-full flex-col items-start">
                          <div className="border-border flex w-full shrink-0 items-center gap-2 border-l-2 px-0 py-0 pl-4">
                            <span className="text-foreground flex-grow text-sm leading-5">
                              최근 7일간 IAM 사용자 활동 통계입니다.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>

                {/* 🎯 목적: 차트 카드 영역 - ScrollArea 외부에서 독립적인 횡스크롤 */}
                <div className="mt-4 w-full">
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {/* 차트 카드 1 - UIDL 기반 FrameChartCard 구조 */}
                    <div
                      data-slot="card"
                      className="bg-card w-80 flex-none rounded-xl border shadow-sm"
                    >
                      {/* 🎯 목적: 헤더 영역 - UIDL 사양에 따른 정렬과 타이포그래피 */}
                      <div className="flex items-start gap-2 p-4 pb-2">
                        <div className="flex flex-1 flex-col gap-1.5">
                          <h3 className="self-stretch text-base leading-none font-semibold">
                            Bar Chart - Multiple
                          </h3>
                          <p className="text-muted-foreground self-stretch text-sm leading-5">
                            January - June 2024
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => handleDialogChange("chart1", true)}
                        >
                          <Expand className="h-4 w-4" />
                          <span className="sr-only">Expand chart</span>
                        </Button>
                      </div>

                      {/* 🎯 목적: 차트 영역 - 235px 높이, 배경 그리드 */}
                      <div className="px-4">
                        <ChartContainer
                          config={chartConfig}
                          className="w-full"
                          style={{ height: "235px" }}
                        >
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="period"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <YAxis hide={true} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="created"
                              fill="var(--color-created)"
                              radius={4}
                            />
                            <Bar
                              dataKey="modified"
                              fill="var(--color-modified)"
                              radius={4}
                            />
                          </BarChart>
                        </ChartContainer>
                      </div>

                      {/* 🎯 목적: 푸터 영역 - UIDL 사양에 따른 구조 */}
                      <div className="flex flex-col items-start gap-2 self-stretch p-4 pt-2">
                        <div className="flex flex-shrink-0 items-center gap-2 self-stretch">
                          <span className="text-sm leading-none font-medium">
                            Trending up by 5.2% this month
                          </span>
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground self-stretch text-sm leading-none">
                          Showing total visitors for the last 6 months
                        </p>
                      </div>
                    </div>

                    {/* 🎯 목적: 첫 번째 차트 Dialog */}
                    <Dialog
                      open={openDialogs.chart1}
                      onOpenChange={(open) =>
                        handleDialogChange("chart1", open)
                      }
                    >
                      <DialogContent className="bg-background border-border flex h-[85%] max-w-[70%] flex-col sm:h-[90%] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
                        <DialogHeader className="gap-1.5">
                          <DialogTitle className="text-foreground text-lg font-semibold">
                            Bar Chart - Multiple
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground text-sm leading-5">
                            January - June 2024 • User Activity Analysis
                          </DialogDescription>
                        </DialogHeader>

                        {/* 🎯 목적: 확대된 차트 영역 */}
                        <div className="min-h-0 flex-1 p-4">
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <BarChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                dataKey="period"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar
                                dataKey="created"
                                fill="var(--color-created)"
                                radius={4}
                              />
                              <Bar
                                dataKey="modified"
                                fill="var(--color-modified)"
                                radius={4}
                              />
                            </BarChart>
                          </ChartContainer>
                        </div>

                        <DialogFooter className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDialogChange("chart1", false)}
                            className="bg-muted/30 border-border hover:bg-muted/50"
                          >
                            Close
                          </Button>
                        </DialogFooter>

                        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                    {/* 차트 카드 2 - Single Bar Chart */}
                    <div
                      data-slot="card"
                      className="bg-card w-80 flex-none rounded-xl border shadow-sm"
                    >
                      {/* 🎯 목적: 헤더 영역 - UIDL 사양에 따른 정렬과 타이포그래피 */}
                      <div className="flex items-start gap-2 p-4 pb-2">
                        <div className="flex flex-1 flex-col gap-1.5">
                          <h3 className="self-stretch text-base leading-none font-semibold">
                            Bar Chart - Single
                          </h3>
                          <p className="text-muted-foreground self-stretch text-sm leading-5">
                            Policy Changes - 2024
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => handleDialogChange("chart2", true)}
                        >
                          <Expand className="h-4 w-4" />
                          <span className="sr-only">Expand chart</span>
                        </Button>
                      </div>

                      {/* 🎯 목적: 차트 영역 - 235px 높이, 배경 그리드 */}
                      <div className="px-4">
                        <ChartContainer
                          config={chartConfig}
                          className="w-full"
                          style={{ height: "235px" }}
                        >
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="period"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <YAxis hide={true} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="modified"
                              fill="var(--color-modified)"
                              radius={4}
                            />
                          </BarChart>
                        </ChartContainer>
                      </div>

                      {/* 🎯 목적: 푸터 영역 - UIDL 사양에 따른 구조 */}
                      <div className="flex flex-col items-start gap-2 self-stretch p-4 pt-2">
                        <div className="flex flex-shrink-0 items-center gap-2 self-stretch">
                          <span className="text-sm leading-none font-medium">
                            Trending down by 2.1% this month
                          </span>
                          <TrendingUp className="h-4 w-4 rotate-180" />
                        </div>
                        <p className="text-muted-foreground self-stretch text-sm leading-none">
                          Showing policy modification trends for the last 6
                          months
                        </p>
                      </div>
                    </div>

                    {/* 🎯 목적: 두 번째 차트 Dialog */}
                    <Dialog
                      open={openDialogs.chart2}
                      onOpenChange={(open) =>
                        handleDialogChange("chart2", open)
                      }
                    >
                      <DialogContent className="bg-background border-border flex h-[85%] max-w-[70%] flex-col sm:h-[90%] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
                        <DialogHeader className="gap-1.5">
                          <DialogTitle className="text-foreground text-lg font-semibold">
                            Bar Chart - Single
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground text-sm leading-5">
                            Policy Changes - 2024 • Modification Trends
                          </DialogDescription>
                        </DialogHeader>

                        <div className="min-h-0 flex-1 p-4">
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <BarChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                dataKey="period"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar
                                dataKey="modified"
                                fill="var(--color-modified)"
                                radius={4}
                              />
                            </BarChart>
                          </ChartContainer>
                        </div>

                        <DialogFooter className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDialogChange("chart2", false)}
                            className="bg-muted/30 border-border hover:bg-muted/50"
                          >
                            Close
                          </Button>
                        </DialogFooter>

                        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                    {/* 차트 카드 3 - Stacked Bar Chart */}
                    <div
                      data-slot="card"
                      className="bg-card w-80 flex-none rounded-xl border shadow-sm"
                    >
                      {/* 🎯 목적: 헤더 영역 - UIDL 사양에 따른 정렬과 타이포그래피 */}
                      <div className="flex items-start gap-2 p-4 pb-2">
                        <div className="flex flex-1 flex-col gap-1.5">
                          <h3 className="self-stretch text-base leading-none font-semibold">
                            Bar Chart - Stacked
                          </h3>
                          <p className="text-muted-foreground self-stretch text-sm leading-5">
                            Activity Comparison - 2024
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => handleDialogChange("chart3", true)}
                        >
                          <Expand className="h-4 w-4" />
                          <span className="sr-only">Expand chart</span>
                        </Button>
                      </div>

                      {/* 🎯 목적: 차트 영역 - 235px 높이, 배경 그리드 */}
                      <div className="px-4">
                        <ChartContainer
                          config={chartConfig}
                          className="w-full"
                          style={{ height: "235px" }}
                        >
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="period"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <YAxis hide={true} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                              dataKey="created"
                              stackId="activity"
                              fill="var(--color-created)"
                              radius={[0, 0, 4, 4]}
                            />
                            <Bar
                              dataKey="modified"
                              stackId="activity"
                              fill="var(--color-modified)"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ChartContainer>
                      </div>

                      {/* 🎯 목적: 푸터 영역 - UIDL 사양에 따른 구조 */}
                      <div className="flex flex-col items-start gap-2 self-stretch p-4 pt-2">
                        <div className="flex flex-shrink-0 items-center gap-2 self-stretch">
                          <span className="text-sm leading-none font-medium">
                            Trending up by 8.7% this month
                          </span>
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground self-stretch text-sm leading-none">
                          Showing combined activity metrics for the last 6
                          months
                        </p>
                      </div>
                    </div>

                    {/* 🎯 목적: 세 번째 차트 Dialog */}
                    <Dialog
                      open={openDialogs.chart3}
                      onOpenChange={(open) =>
                        handleDialogChange("chart3", open)
                      }
                    >
                      <DialogContent className="bg-background border-border flex h-[85%] max-w-[70%] flex-col sm:h-[90%] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
                        <DialogHeader className="gap-1.5">
                          <DialogTitle className="text-foreground text-lg font-semibold">
                            Bar Chart - Stacked
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground text-sm leading-5">
                            Activity Comparison - 2024 • Combined Metrics
                          </DialogDescription>
                        </DialogHeader>

                        <div className="min-h-0 flex-1 p-4">
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <BarChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                dataKey="period"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar
                                dataKey="created"
                                stackId="activity"
                                fill="var(--color-created)"
                                radius={[0, 0, 4, 4]}
                              />
                              <Bar
                                dataKey="modified"
                                stackId="activity"
                                fill="var(--color-modified)"
                                radius={[4, 4, 0, 0]}
                              />
                            </BarChart>
                          </ChartContainer>
                        </div>

                        <DialogFooter className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDialogChange("chart3", false)}
                            className="bg-muted/30 border-border hover:bg-muted/50"
                          >
                            Close
                          </Button>
                        </DialogFooter>

                        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>

                    {/* 차트 카드 4 - Area Chart */}
                    <div
                      data-slot="card"
                      className="bg-card w-80 flex-none rounded-xl border shadow-sm"
                    >
                      {/* 🎯 목적: 헤더 영역 - UIDL 사양에 따른 정렬과 타이포그래피 */}
                      <div className="flex items-start gap-2 p-4 pb-2">
                        <div className="flex flex-1 flex-col gap-1.5">
                          <h3 className="self-stretch text-base leading-none font-semibold">
                            Area Chart - Total
                          </h3>
                          <p className="text-muted-foreground self-stretch text-sm leading-5">
                            Total Activity - 2024
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0"
                          onClick={() => handleDialogChange("chart4", true)}
                        >
                          <Expand className="h-4 w-4" />
                          <span className="sr-only">Expand chart</span>
                        </Button>
                      </div>

                      {/* 🎯 목적: 차트 영역 - 235px 높이, 배경 그리드 */}
                      <div className="px-4">
                        <ChartContainer
                          config={chartConfig}
                          className="w-full"
                          style={{ height: "235px" }}
                        >
                          <AreaChart
                            data={chartData.map((item) => ({
                              ...item,
                              total: item.created + item.modified,
                            }))}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="period"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <YAxis hide={true} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Area
                              dataKey="total"
                              fill="var(--chart-3)"
                              fillOpacity={0.6}
                              stroke="var(--chart-3)"
                              strokeWidth={2}
                            />
                          </AreaChart>
                        </ChartContainer>
                      </div>

                      {/* 🎯 목적: 푸터 영역 - UIDL 사양에 따른 구조 */}
                      <div className="flex flex-col items-start gap-2 self-stretch p-4 pt-2">
                        <div className="flex flex-shrink-0 items-center gap-2 self-stretch">
                          <span className="text-sm leading-none font-medium">
                            Trending up by 12.3% this month
                          </span>
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <p className="text-muted-foreground self-stretch text-sm leading-none">
                          Showing total activity progression for the last 6
                          months
                        </p>
                      </div>
                    </div>

                    {/* 🎯 목적: 네 번째 차트 Dialog */}
                    <Dialog
                      open={openDialogs.chart4}
                      onOpenChange={(open) =>
                        handleDialogChange("chart4", open)
                      }
                    >
                      <DialogContent className="bg-background border-border flex h-[85%] max-w-[70%] flex-col sm:h-[90%] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
                        <DialogHeader className="gap-1.5">
                          <DialogTitle className="text-foreground text-lg font-semibold">
                            Area Chart - Total
                          </DialogTitle>
                          <DialogDescription className="text-muted-foreground text-sm leading-5">
                            Total Activity - 2024 • Activity Progression
                          </DialogDescription>
                        </DialogHeader>

                        <div className="min-h-0 flex-1 p-4">
                          <ChartContainer
                            config={chartConfig}
                            className="h-full w-full"
                          >
                            <AreaChart
                              data={chartData.map((item) => ({
                                ...item,
                                total: item.created + item.modified,
                              }))}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                dataKey="period"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                              />
                              <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                              />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Area
                                dataKey="total"
                                fill="var(--chart-3)"
                                fillOpacity={0.6}
                                stroke="var(--chart-3)"
                                strokeWidth={2}
                              />
                            </AreaChart>
                          </ChartContainer>
                        </div>

                        <DialogFooter className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDialogChange("chart4", false)}
                            className="bg-muted/30 border-border hover:bg-muted/50"
                          >
                            Close
                          </Button>
                        </DialogFooter>

                        <DialogClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                {/* 🎯 목적: 주요 인사이트 섹션 - 차트 카드들 다음에 배치 */}
                <div>
                  <div className="text-foreground w-full text-sm leading-5">
                    <p>주요 인사이트:</p>
                    <p>• 금요일에 가장 많은 사용자 생성 (19명)</p>
                    <p>• 수요일에 가장 많은 정책 수정 (15건)</p>
                    <p>• 주말 활동량은 평일 대비 40% 감소</p>
                  </div>
                </div>

                {/* 🎯 목적: Copy/More 버튼 - 인사이트 섹션 다음에 배치 */}
                <div className="flex items-center justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy response</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 p-0 opacity-70 hover:opacity-100"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </div>
              </div>

              {/* 🎯 목적: InputGroup 컴포넌트 (뷰포트 하단 고정) */}
              <div
                className="bg-secondary border-border absolute right-4 bottom-4 left-4 flex flex-col rounded-lg border shadow-sm"
                style={{ maxHeight: "400px" }}
              >
                {/* Textarea 영역 with ScrollArea */}
                <ScrollArea className="max-h-96 p-3">
                  <Textarea
                    placeholder="Ask, Search or Chat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-primary placeholder:text-muted-foreground min-h-0 resize-none border-0 bg-transparent p-0 text-sm leading-5 focus-visible:ring-0"
                    rows={1}
                  />
                </ScrollArea>

                {/* InputGroupAddonBlock - 하단 컨트롤 영역 */}
                <div className="flex items-center justify-between px-3 pt-1.5 pb-3">
                  {/* 좌측 컨트롤 그룹 */}
                  <div className="flex items-center gap-2">
                    {/* Agent InputGroupButton */}
                    <div className="flex items-start">
                      <div className="bg-background/50 border-border flex h-7 items-center justify-center gap-1.5 rounded-full border px-2.5 shadow-sm">
                        <Infinity className="h-4 w-4" />
                        <span className="text-foreground text-xs leading-4 font-medium">
                          Agent
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Auto InputGroupButton */}
                    <div className="flex items-start">
                      <div className="flex h-6 items-center justify-center gap-1 rounded-sm bg-transparent px-2">
                        <span className="text-muted-foreground text-sm leading-5 font-medium">
                          Auto
                        </span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* 우측 전송 버튼 그룹 */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-start">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full shadow-sm transition-all ${
                          isSendEnabled
                            ? "bg-primary hover:bg-primary/90 cursor-pointer"
                            : "bg-muted cursor-not-allowed opacity-50"
                        }`}
                      >
                        <ArrowUp
                          className={`h-4 w-4 ${isSendEnabled ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

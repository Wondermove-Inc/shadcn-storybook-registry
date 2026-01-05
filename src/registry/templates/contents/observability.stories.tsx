import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Link, Plus, Loader2 } from "lucide-react";

/**
 * Skuber+ Observability 콘텐츠 컴포넌트 - URL 등록 화면
 *
 * 🎯 목적: Skuber+ Observability 서비스 사용을 위한 URL 등록 인터페이스
 * ✨ 특징:
 * - Empty 상태 UI로 사용자에게 URL 등록 안내
 * - InputGroup을 통한 URL 입력 필드
 * - 비활성화된 Register 버튼 (URL 입력 전)
 */
const meta: Meta = {
  title: "templates/Contents/Skuber+ Observability",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * 🎯 목적: Skuber+ Observability URL 등록 화면 - Empty 상태
 *
 * Skuber+ Observability 서비스를 사용하기 위해 URL을 등록하는 화면입니다.
 * URL이 입력되지 않은 초기 상태를 보여줍니다.
 */
export const Default: Story = {
  render: () => {
    // 🎯 목적: URL 입력 상태 관리
    const [url, setUrl] = React.useState("");

    // 🎯 목적: 에러 상태 관리
    const [hasError, setHasError] = React.useState(false);

    // 🎯 목적: 로딩 상태 관리
    const [isLoading, setIsLoading] = React.useState(false);

    // 🎯 목적: URL 유효성 검사 함수
    const isValidUrl = (urlString: string): boolean => {
      try {
        new URL(urlString);
        return true;
      } catch {
        return false;
      }
    };

    // 🎯 목적: Register 버튼 활성화 여부 결정 (1자 이상 입력 시 활성화)
    const isButtonDisabled = url.trim().length === 0 || isLoading;

    // 🎯 목적: input 변경 핸들러 (에러 상태 초기화)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(e.target.value);
      if (hasError) {
        setHasError(false);
      }
    };

    // 🎯 목적: Register 버튼 클릭 핸들러
    const handleRegister = () => {
      if (!isValidUrl(url)) {
        // URL 형식이 아닌 경우 에러 상태로 설정
        setHasError(true);
        return;
      }

      // URL 형식이 맞는 경우 로딩 상태로 설정
      setIsLoading(true);
      console.log("Register URL:", url);
    };

    return (
      <div className="bg-background flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-64">
        {/* 메인 스택 컨테이너 - Empty와 버튼 간격 gap-7 */}
        <div className="flex flex-col items-center gap-7">
          {/* 링크 아이콘 + Empty 컨테이너 - 간격 gap-6, 너비 480px 고정 */}
          <div className="flex w-[480px] flex-col items-center gap-6">
            {/* 링크 아이콘 */}
            <EmptyMedia className="mb-0">
              <Link className="text-foreground h-10 w-10" strokeWidth={1.5} />
            </EmptyMedia>

            {/* Empty 상태 컨테이너 */}
            <Empty className="w-[480px] gap-6 border-0 p-0 md:p-0">
              <EmptyHeader className="max-w-none gap-4">
                <div className="flex flex-col items-center gap-2">
                  {/* 제목 */}
                  <EmptyTitle className="text-foreground text-lg leading-7">
                    Connect Skuber+ Observability
                  </EmptyTitle>

                  {/* 설명 */}
                  <EmptyDescription className="text-muted-foreground text-center text-sm leading-[162.5%]">
                    Enter the Observability server URL to enable monitoring and
                    diagonstics.
                  </EmptyDescription>
                </div>
              </EmptyHeader>

              {/* URL 입력 필드 */}
              <EmptyContent className="w-[480px] max-w-none">
                <div className="flex w-full flex-col items-start gap-2">
                  <Input
                    placeholder="Enter Observability server URL..."
                    value={url}
                    onChange={handleInputChange}
                    aria-invalid={hasError}
                    style={{ width: "480px", minWidth: "480px" }}
                  />
                  {/* 에러 메시지 - 좌측 정렬 */}
                  {hasError && (
                    <p className="text-destructive text-left text-sm">
                      Please enter a valid URL
                    </p>
                  )}
                </div>
              </EmptyContent>
            </Empty>
          </div>

          {/* Connect 버튼 */}
          <Button
            disabled={isButtonDisabled}
            className="h-9 gap-2 px-4 py-2"
            onClick={handleRegister}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Connect</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Connect</span>
              </>
            )}
          </Button>
        </div>
      </div>
    );
  },
};

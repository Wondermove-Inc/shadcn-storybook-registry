"use client";

import React from "react";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

/**
 * 🎯 목적: 헤더 컴포넌트의 Props 타입 정의
 */
interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onNavigationBack?: () => void;
  onNavigationForward?: () => void;
  onPanelLeftToggle?: () => void;
  onPanelBottomToggle?: () => void;
  onAiAssistantToggle?: () => void;
  onSettingsClick?: () => void;
  /** 🎯 목적: 왼쪽 패널 활성화 상태 */
  isPanelLeftActive?: boolean;
  /** 🎯 목적: 하단 패널 활성화 상태 */
  isPanelBottomActive?: boolean;
  /** 🎯 목적: AI Assistant 활성화 상태 */
  isAiAssistantActive?: boolean;
}

/**
 * 🎯 목적: 검색 입력 그룹 컴포넌트 - InputGroup 컴포넌트 사용
 */
function SearchInputGroup({
  searchQuery = "",
  onSearchChange,
}: {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}) {
  return (
    <InputGroup className="h-7 w-[580px] shrink-0">
      <InputGroupAddon align="inline-start">
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search..."
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onSearchChange?.(e.target.value)
        }
        className="text-muted-foreground h-7"
      />
    </InputGroup>
  );
}

/**
 * 🎯 목적: 왼쪽 패널 토글 아이콘
 */
function PanelLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 🎯 목적: 하단 패널 토글 아이콘
 */
function PanelBottomIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10H14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 🎯 목적: AI 어시스턴트 아이콘
 */
function AiAssistantIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99998 5.33335V2.66669H5.33331M1.33331 9.33335H2.66665M13.3333 9.33335H14.6666M9.99998 8.66669V10M5.99998 8.66669V10M3.99998 5.33335H12C12.7364 5.33335 13.3333 5.93031 13.3333 6.66669V12C13.3333 12.7364 12.7364 13.3334 12 13.3334H3.99998C3.2636 13.3334 2.66665 12.7364 2.66665 12V6.66669C2.66665 5.93031 3.2636 5.33335 3.99998 5.33335Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 🎯 목적: 헤더 좌측 네비게이션 ButtonGroup 컴포넌트 - UIDL 구조에 따른 구현
 */
function NavigationButtonGroup({
  onNavigationBack,
  onNavigationForward,
}: {
  onNavigationBack?: () => void;
  onNavigationForward?: () => void;
}) {
  return (
    <div className="border-border/10 bg-sidebar flex h-10 items-center border-b px-1">
      <ButtonGroup>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onNavigationBack}
          aria-label="Previous"
          className="h-7 w-7 rounded-lg rounded-r-none bg-transparent p-1"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onNavigationForward}
          aria-label="Next"
          className="h-7 w-7 rounded-lg rounded-l-none bg-transparent p-1"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </ButtonGroup>
    </div>
  );
}

/**
 * 🎯 목적: 헤더 우측 버튼 그룹 컴포넌트
 */
function HeaderButtonGroup({
  onPanelLeftToggle,
  onPanelBottomToggle,
  onAiAssistantToggle,
  isPanelLeftActive = false,
  isPanelBottomActive = false,
  isAiAssistantActive = false,
}: {
  onPanelLeftToggle?: () => void;
  onPanelBottomToggle?: () => void;
  onAiAssistantToggle?: () => void;
  isPanelLeftActive?: boolean;
  isPanelBottomActive?: boolean;
  isAiAssistantActive?: boolean;
}) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {/* 왼쪽 패널 토글 버튼 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onPanelLeftToggle}
          className={`flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2 ${
            isPanelLeftActive ? "" : "opacity-50"
          }`}
        >
          <PanelLeftIcon />
        </Button>

        {/* 하단 패널 토글 버튼 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onPanelBottomToggle}
          className={`flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2 ${
            isPanelBottomActive ? "" : "opacity-50"
          }`}
        >
          <PanelBottomIcon />
        </Button>

        {/* AI 어시스턴트 버튼 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onAiAssistantToggle}
          className={`flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2 ${
            isAiAssistantActive ? "" : "opacity-50"
          }`}
        >
          <AiAssistantIcon />
        </Button>
      </div>
    </div>
  );
}

/**
 * 🎯 목적: 메인 헤더 컴포넌트 - 모듈화된 구조로 재사용 가능
 */
export function Header({
  searchQuery = "",
  onSearchChange,
  onNavigationBack,
  onNavigationForward,
  onPanelLeftToggle,
  onPanelBottomToggle,
  onAiAssistantToggle,
  isPanelLeftActive = false,
  isPanelBottomActive = false,
  isAiAssistantActive = false,
}: HeaderProps) {
  return (
    <header className="border-border bg-sidebar flex h-10 w-full shrink-0 items-center justify-between gap-[10px] overflow-hidden border-b p-2">
      {/* 중앙 검색 영역 - ButtonGroup과 SearchInput */}
      <div className="flex flex-grow items-center justify-center gap-2">
        <NavigationButtonGroup
          onNavigationBack={onNavigationBack}
          onNavigationForward={onNavigationForward}
        />
        <SearchInputGroup
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </div>

      {/* 우측 버튼 그룹 */}
      <HeaderButtonGroup
        onPanelLeftToggle={onPanelLeftToggle}
        onPanelBottomToggle={onPanelBottomToggle}
        onAiAssistantToggle={onAiAssistantToggle}
        isPanelLeftActive={isPanelLeftActive}
        isPanelBottomActive={isPanelBottomActive}
        isAiAssistantActive={isAiAssistantActive}
      />
    </header>
  );
}

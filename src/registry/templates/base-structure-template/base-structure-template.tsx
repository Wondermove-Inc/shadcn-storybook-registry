"use client";

import React from "react";
import { Header } from "@/registry/templates/header/header";
import { SidebarTemplate } from "@/registry/templates/sidebar/sidebar";

/**
 * 🎯 목적: BaseStructure 템플릿의 Props 타입 정의
 */
interface BaseStructureTemplateProps {
  children?: React.ReactNode;
}

/**
 * 🎯 목적: 모듈화된 베이스 구조 템플릿 컴포넌트
 * Header와 Sidebar 템플릿을 조합하여 완전한 레이아웃 제공
 *
 * 특징:
 * - Header 템플릿을 사용한 상단 헤더
 * - Sidebar 템플릿을 사용한 사이드바 레이아웃
 * - children으로 메인 콘텐츠 영역 커스터마이징 가능
 */
export function BaseStructureTemplate({
  children,
}: BaseStructureTemplateProps) {
  // 🎯 목적: 검색 쿼리 상태 관리
  const [searchQuery, setSearchQuery] = React.useState("");

  // 🎯 목적: Header의 검색 변경 핸들러
  const handleSearchChange = React.useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  // 🎯 목적: 사이드바 토글 핸들러 (Header에서 사용)
  const handlePanelLeftToggle = React.useCallback(() => {
    // 사이드바 토글 로직은 Header 컴포넌트 내부에서 처리됨
  }, []);

  return (
    <div className="flex h-screen w-full flex-col">
      {/* 🎯 목적: 상단 Header 영역 */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onPanelLeftToggle={handlePanelLeftToggle}
      />

      {/* 🎯 목적: 사이드바와 메인 콘텐츠 영역 */}
      <div className="flex flex-1">
        <SidebarTemplate>
          {children || (
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                <div className="bg-muted text-muted-foreground flex items-center justify-center gap-2 rounded-md px-3 py-2">
                  <span className="font-mono text-sm">main-content-area</span>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground text-sm">
                    이 영역은 children prop으로 커스터마이징할 수 있습니다.
                  </p>
                  <p className="text-muted-foreground text-xs">
                    검색 쿼리: "{searchQuery}"
                  </p>
                </div>
              </div>
            </main>
          )}
        </SidebarTemplate>
      </div>
    </div>
  );
}

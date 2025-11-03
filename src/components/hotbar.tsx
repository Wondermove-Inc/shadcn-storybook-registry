"use client";

import React from "react";
import {
  Files,
  Plus,
  CircleUserRound,
  Settings,
  BadgeCheck,
  Bell,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * 🎯 목적: Hotbar 아이템의 타입 정의 - 아이콘 또는 이미지 지원, Badge 표시 기능 포함
 */
export interface HotbarItem {
  id: string;
  icon?: React.ElementType; // lucide 아이콘 (선택적)
  imageUrl?: string; // 이미지 URL (선택적)
  label: string;
  isActive?: boolean;
  badge?: string | number; // Badge 텍스트 또는 숫자 (선택적)
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"; // Badge 스타일 (선택적)
}

/**
 * 🎯 목적: Hotbar 컴포넌트의 Props 타입 정의
 */
interface HotbarProps {
  topItems?: HotbarItem[];
  items?: HotbarItem[];
  footerItems?: HotbarItem[];
  activeTopItem?: string;
  activeBottomItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
  user?: {
    name: string;
    email: string;
    avatar: string;
  };
}

/**
 * 🎯 목적: 상단 App 아이템 목록 - 이미지 기반 앱 아이콘
 */
const topBigIconItems: HotbarItem[] = [
  {
    id: "daive-app",
    imageUrl: "/images/apps/daive.svg",
    label: "Daive App",
    isActive: false,
  },
  {
    id: "skuber-app",
    imageUrl: "/images/apps/skuber.svg",
    label: "Skuber App",
    isActive: false,
  },
  {
    id: "skuberiaas-app",
    imageUrl: "/images/apps/skuberIaaS.svg",
    label: "SkuberIaaS App",
    isActive: false,
  },
];

/**
 * 🎯 목적: 하단 기본 아이템 목록 - 기존 구현 유지
 */
const defaultHotbarItems: HotbarItem[] = [
  {
    id: "explorer",
    icon: Files,
    label: "Explorer",
    isActive: false,
  },
  {
    id: "extensions",
    icon: Plus,
    label: "Extensions",
    isActive: false,
  },
];

/**
 * 🎯 목적: Footer 아이템 목록 - UIDL 명세 적용
 */
const defaultFooterItems: HotbarItem[] = [
  {
    id: "user",
    icon: CircleUserRound,
    label: "User",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

/**
 * 🎯 목적: 기본 사용자 데이터 - CircleUserRound 버튼 클릭시 사용
 */
const defaultUser = {
  name: "사용자",
  email: "user@example.com",
  avatar: "",
};

/**
 * 🎯 목적: VS Code Activity Bar 스타일의 핫바 컴포넌트
 *
 * shadcn/ui 공식 패턴 적용:
 * - Sidebar, SidebarMenu, SidebarMenuButton 구조 사용
 * - SidebarFooter에서 NavUser 컴포넌트 활용
 * - UIDL 명세에 따른 아이콘 순서 적용
 */
export function Hotbar({
  topItems = topBigIconItems,
  items = defaultHotbarItems,
  footerItems = defaultFooterItems,
  activeTopItem,
  activeBottomItem,
  onItemClick,
  className,
  user = defaultUser,
}: HotbarProps) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar
      collapsible="none"
      className={cn("h-full w-14 border-r", className)}
    >
      <SidebarContent className="flex flex-1 flex-col justify-between">
        {/* 상단과 하단 그룹을 함께 묶기 */}
        <div>
          {/* 상단 Big Icon 그룹 */}
          <SidebarGroup className="p-3">
            <SidebarGroupContent className="px-0">
              <SidebarMenu className="gap-2">
                {topItems.map((item) => {
                  // 상단 그룹: activeTopItem이 설정된 경우 그것만 사용, 아니면 기본 isActive 사용
                  const isActive = activeTopItem
                    ? activeTopItem === item.id
                    : item.isActive;
                  return (
                    <SidebarMenuItem key={item.id}>
                      <div className="relative">
                        <SidebarMenuButton
                          tooltip={{
                            children: item.label,
                            hidden: false,
                          }}
                          onClick={() => onItemClick?.(item.id)}
                          isActive={isActive}
                          className={`h-8 w-8 items-center justify-center p-0 ${
                            isActive
                              ? "ring-accent-foreground rounded-md ring-[1.5px]"
                              : ""
                          }`}
                          size="sm"
                        >
                          {/* 이미지 또는 아이콘 조건부 렌더링 */}
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.label}
                              className="h-8 w-8"
                            />
                          ) : item.icon ? (
                            <item.icon />
                          ) : null}
                          <span className="sr-only">{item.label}</span>
                        </SidebarMenuButton>

                        {/* Badge 표시 - 아이콘 우상단에 배치 */}
                        {item.badge && (
                          <Badge
                            variant={item.badgeVariant || "destructive"}
                            className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 text-[10px] leading-none font-semibold"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* 구분선 */}
          <div className="flex justify-center py-0.5">
            <div className="w-8">
              <Separator />
            </div>
          </div>

          {/* 하단 기본 아이템 그룹 */}
          <SidebarGroup className="p-3">
            <SidebarGroupContent className="px-0">
              <SidebarMenu className="gap-2">
                {items.map((item) => {
                  // 하단 그룹: activeBottomItem이 설정된 경우 그것만 사용, 아니면 기본 isActive 사용
                  const isActive = activeBottomItem
                    ? activeBottomItem === item.id
                    : item.isActive;
                  return (
                    <SidebarMenuItem key={item.id}>
                      <div className="relative">
                        <SidebarMenuButton
                          tooltip={{
                            children: item.label,
                            hidden: false,
                          }}
                          onClick={() => onItemClick?.(item.id)}
                          isActive={isActive}
                          className="h-8 w-8 items-center justify-center"
                          size="sm"
                        >
                          {/* 이미지 또는 아이콘 조건부 렌더링 */}
                          {item.imageUrl ? (
                            <img
                              src={item.imageUrl}
                              alt={item.label}
                              className="h-8 w-8"
                            />
                          ) : item.icon ? (
                            <item.icon />
                          ) : null}
                          <span className="sr-only">{item.label}</span>
                        </SidebarMenuButton>

                        {/* Badge 표시 - 아이콘 우상단에 배치 */}
                        {item.badge && (
                          <Badge
                            variant={item.badgeVariant || "destructive"}
                            className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 text-[10px] leading-none font-semibold"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* 푸터 그룹 - 하단에 고정 */}
        <div className="flex flex-col items-center gap-2 p-3">
          {footerItems.map((item) => {
            // Footer 아이템들은 독립적으로 동작 (User는 드롭다운, Settings는 일반 버튼)
            const isActive = item.isActive;

            // User 버튼인 경우 드롭다운 메뉴 적용
            if (item.id === "user") {
              return (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <div className="relative">
                      <SidebarMenuButton
                        tooltip={{
                          children: item.label,
                          hidden: false,
                        }}
                        isActive={isActive}
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-8 w-8 items-center justify-center"
                        size="sm"
                      >
                        {/* 이미지 또는 아이콘 조건부 렌더링 */}
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.label}
                            className="h-6 w-6 object-contain"
                          />
                        ) : item.icon ? (
                          <item.icon />
                        ) : null}
                        <span className="sr-only">{item.label}</span>
                      </SidebarMenuButton>

                      {/* Badge 표시 - 아이콘 우상단에 배치 */}
                      {item.badge && (
                        <Badge
                          variant={item.badgeVariant || "destructive"}
                          className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 text-[10px] leading-none font-semibold"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="rounded-lg">
                            {user.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">
                            {user.name}
                          </span>
                          <span className="truncate text-xs">{user.email}</span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Sparkles />
                        업그레이드
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <BadgeCheck />
                        계정
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard />
                        결제
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Bell />
                        알림
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut />
                      로그아웃
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            // 다른 버튼들 (Settings 등)은 기본 버튼으로 처리
            return (
              <div key={item.id} className="relative">
                <SidebarMenuButton
                  tooltip={{
                    children: item.label,
                    hidden: false,
                  }}
                  onClick={() => onItemClick?.(item.id)}
                  isActive={isActive}
                  className="h-8 w-8 items-center justify-center"
                  size="sm"
                >
                  {/* 이미지 또는 아이콘 조건부 렌더링 */}
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="h-6 w-6 object-contain"
                    />
                  ) : item.icon ? (
                    <item.icon />
                  ) : null}
                  <span className="sr-only">{item.label}</span>
                </SidebarMenuButton>

                {/* Badge 표시 - 아이콘 우상단에 배치 */}
                {item.badge && (
                  <Badge
                    variant={item.badgeVariant || "destructive"}
                    className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 text-[10px] leading-none font-semibold"
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

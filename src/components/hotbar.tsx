"use client";

import React from "react";
import {
  Files,
  Plus,
  LayoutGrid,
  Search,
  GitBranch,
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
  SidebarFooter,
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
import { cn } from "@/lib/utils";

/**
 * 🎯 목적: Hotbar 아이템의 타입 정의 - UIDL 명세에 따른 아이콘 구조
 */
export interface HotbarItem {
  id: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
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
 * 🎯 목적: 상단 Big Icon 아이템 목록 - UIDL 명세 적용
 */
const topBigIconItems: HotbarItem[] = [
  {
    id: "gallery",
    icon: LayoutGrid,
    label: "Gallery",
  },
  {
    id: "search-big",
    icon: Search,
    label: "Search",
    isActive: true,
  },
  {
    id: "source-control",
    icon: GitBranch,
    label: "Source Control",
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
    isActive: true,
  },
  {
    id: "extensions",
    icon: Plus,
    label: "Extensions",
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
    <Sidebar collapsible="icon" className={cn("w-12 border-r", className)}>
      <SidebarContent>
        {/* 상단 Big Icon 그룹 */}
        <SidebarGroup className="py-2">
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="gap-2">
              {topItems.map((item) => {
                // 상단 그룹: activeTopItem이 설정된 경우 그것만 사용, 아니면 기본 isActive 사용
                const isActive = activeTopItem
                  ? activeTopItem === item.id
                  : item.isActive;
                return (
                  <SidebarMenuItem key={item.id}>
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
                      <item.icon />
                      <span className="sr-only">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 구분선 */}
        <div className="px-2">
          <Separator />
        </div>

        {/* 하단 기본 아이템 그룹 */}
        <SidebarGroup className="py-2">
          <SidebarGroupContent className="px-0">
            <SidebarMenu className="gap-2">
              {items.map((item) => {
                // 하단 그룹: activeBottomItem이 설정된 경우 그것만 사용, 아니면 기본 isActive 사용
                const isActive = activeBottomItem
                  ? activeBottomItem === item.id
                  : item.isActive;
                return (
                  <SidebarMenuItem key={item.id}>
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
                      <item.icon />
                      <span className="sr-only">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {footerItems.map((item) => {
          // Footer 아이템들은 독립적으로 동작 (User는 드롭다운, Settings는 일반 버튼)
          const isActive = item.isActive;

          // User 버튼인 경우 드롭다운 메뉴 적용
          if (item.id === "user") {
            return (
              <DropdownMenu key={item.id}>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    tooltip={{
                      children: item.label,
                      hidden: false,
                    }}
                    isActive={isActive}
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-8 w-8 items-center justify-center"
                    size="sm"
                  >
                    <item.icon />
                    <span className="sr-only">{item.label}</span>
                  </SidebarMenuButton>
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
            <SidebarMenuButton
              key={item.id}
              tooltip={{
                children: item.label,
                hidden: false,
              }}
              onClick={() => onItemClick?.(item.id)}
              isActive={isActive}
              className="h-8 w-8 items-center justify-center"
              size="sm"
            >
              <item.icon />
              <span className="sr-only">{item.label}</span>
            </SidebarMenuButton>
          );
        })}
      </SidebarFooter>
    </Sidebar>
  );
}

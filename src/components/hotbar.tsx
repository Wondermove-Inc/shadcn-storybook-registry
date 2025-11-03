"use client";

import React from "react";
import {
  Files,
  Blocks,
  CircleUserRound,
  Settings,
  BadgeCheck,
  Bell,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

/**
 * 🎯 목적: Daive App 커스텀 SVG 아이콘 컴포넌트
 */
const DaiveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_716_23729)">
      <circle
        cx="8"
        cy="8"
        r="7.335"
        stroke="currentColor"
        strokeWidth="1.33"
      />
      <circle
        cx="8"
        cy="8"
        r="4.335"
        stroke="currentColor"
        strokeWidth="1.33"
      />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_716_23729">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/**
 * 🎯 목적: Skuber Plus App 커스텀 SVG 아이콘 컴포넌트
 */
const SkuberPlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_716_23743)">
      <path
        d="M8 0.334961C8.75979 0.334961 9.49491 0.445666 10.1895 0.652344C10.5414 0.757091 10.7424 1.12753 10.6377 1.47949C10.533 1.83139 10.1625 2.03226 9.81055 1.92773C9.23775 1.75726 8.63006 1.66504 8 1.66504C4.50128 1.66504 1.66504 4.50128 1.66504 8C1.66504 11.4987 4.50128 14.335 8 14.335C11.4987 14.335 14.335 11.4987 14.335 8C14.335 7.36994 14.2427 6.76225 14.0723 6.18945C13.9677 5.83755 14.1686 5.46703 14.5205 5.3623C14.8725 5.25765 15.2429 5.45859 15.3477 5.81055C15.5543 6.50509 15.665 7.24021 15.665 8C15.665 12.2333 12.2333 15.665 8 15.665C3.76674 15.665 0.334961 12.2333 0.334961 8C0.334961 3.76674 3.76674 0.334961 8 0.334961ZM8 3.25C10.6244 3.25 12.75 5.37754 12.75 8C12.75 10.6225 10.6225 12.75 8 12.75C5.37754 12.75 3.25 10.6225 3.25 8C3.25 5.37754 5.37557 3.25 8 3.25ZM7.43262 11.3379C7.25719 11.5113 7.05758 11.6436 6.84668 11.7383C7.21142 11.8507 7.59778 11.9121 8.00195 11.9121C8.40611 11.9121 8.79444 11.8506 9.15918 11.7383C8.94832 11.6437 8.74961 11.5113 8.57617 11.3379L8.00391 10.7666L7.43262 11.3379ZM5.25293 9.16504C4.81722 9.60278 4.81719 10.3113 5.25293 10.7471C5.69064 11.1828 6.39919 11.1828 6.83496 10.7471L7.4082 10.1729L5.82715 8.5918L5.25293 9.16504ZM8.59375 10.1729L9.16504 10.7451C9.60277 11.1808 10.3113 11.1808 10.7471 10.7451C11.1828 10.3074 11.1828 9.59885 10.7471 9.16309L10.1748 8.5918L8.59375 10.1729ZM6.41895 7.99805L6.42285 8.00195L8 8.79102H7.21094L7.99805 9.57812L9.5791 7.99805L8 7.20703H8.79102L8 6.41699L6.41895 7.99805ZM4.26367 6.84277C4.15131 7.20948 4.08984 7.59781 4.08984 8C4.08984 8.4022 4.1513 8.79053 4.26367 9.15527C4.35829 8.94244 4.49065 8.74375 4.66406 8.57031L5.23535 7.99805L4.66406 7.42578C4.49064 7.25235 4.3583 7.05364 4.26367 6.84277ZM11.7422 6.84668C11.6476 7.05755 11.5152 7.25429 11.3418 7.42773L10.7705 8L11.3418 8.57227C11.5152 8.74571 11.6476 8.94245 11.7422 9.15332V9.15527C11.8546 8.79053 11.916 8.40416 11.916 8.00195C11.916 7.59975 11.8546 7.21143 11.7422 6.84668ZM6.83496 5.25098C6.39722 4.81526 5.68868 4.81523 5.25293 5.25098C4.81719 5.6887 4.81722 6.39725 5.25293 6.83301L5.82715 7.40625L7.4082 5.8252L6.83496 5.25098ZM10.7471 5.25293C10.3094 4.81719 9.60081 4.81722 9.16504 5.25293L8.59375 5.8252L10.1748 7.40625L10.7471 6.83496C11.1828 6.39722 11.1828 5.68867 10.7471 5.25293ZM8.00195 4.08789C7.59975 4.08789 7.21338 4.14934 6.84863 4.26172C7.05951 4.35634 7.25624 4.48868 7.42969 4.66211L8.00195 5.2334L8.57422 4.66211C8.74766 4.48868 8.9444 4.35635 9.15527 4.26172H9.15723C8.79052 4.14935 8.40415 4.08789 8.00195 4.08789ZM13 0.875C13.3036 0.875106 13.5497 1.1212 13.5498 1.4248V2.4502H14.5752C14.8787 2.45041 15.1249 2.69646 15.125 3C15.1249 3.30354 14.8787 3.54959 14.5752 3.5498H13.5498V4.5752C13.5496 4.87871 13.3035 5.12489 13 5.125C12.6965 5.1249 12.4504 4.87871 12.4502 4.5752V3.5498H11.4248C11.1212 3.54971 10.8751 3.30361 10.875 3C10.8751 2.69639 11.1212 2.45029 11.4248 2.4502H12.4502V1.4248C12.4503 1.12119 12.6964 0.875099 13 0.875Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_716_23743">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * 🎯 목적: Hotbar 아이템의 타입 정의 - 아이콘, 이미지, 텍스트 지원, Badge 표시 기능 포함
 */
export interface HotbarItem {
  id: string;
  icon?: React.ElementType; // lucide 아이콘 (선택적)
  imageUrl?: string; // 이미지 URL (선택적)
  text?: string; // 텍스트 아이콘 (선택적) - 예: "SI", "DA" 등
  label: string;
  isActive?: boolean;
  badge?: string | number; // Badge 텍스트 또는 숫자 (선택적)
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"; // Badge 스타일 (선택적)
}

/**
 * 🎯 목적: Hotbar 컴포넌트의 Props 타입 정의
 */
interface HotbarProps {
  items?: HotbarItem[];
  footerItems?: HotbarItem[];
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
  user?: {
    name: string;
    email: string;
    avatar: string;
  };
}

/**
 * 🎯 목적: 기본 아이템 목록 - Explorer, Extensions, App 아이콘들을 하나의 그룹으로 통합
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
    icon: Blocks,
    label: "Extensions",
    isActive: false,
  },
  {
    id: "daive-app",
    icon: DaiveIcon,
    label: "Daive App",
    isActive: false,
  },
  {
    id: "skuber-app",
    icon: SkuberPlusIcon,
    label: "Skuber App",
    isActive: false,
  },
  {
    id: "skuberiaas-app",
    text: "IaaS",
    label: "SkuberIaaS App",
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
 * - 단일 그룹 구조로 모든 메인 아이템을 하나의 그룹에서 관리
 */
export function Hotbar({
  items = defaultHotbarItems,
  footerItems = defaultFooterItems,
  activeItem,
  onItemClick,
  className,
  user = defaultUser,
}: HotbarProps) {
  const { isMobile } = useSidebar();
  return (
    <Sidebar
      collapsible="none"
      className={cn("h-full w-12 border-r", className)}
    >
      <SidebarContent className="flex w-12 flex-1 flex-col justify-between">
        {/* 메인 아이템 그룹 - 단일 그룹으로 통합 */}
        <div className="w-12">
          <SidebarGroup className="w-12 p-2">
            <SidebarGroupContent className="flex flex-col gap-2 px-0">
              <SidebarMenu className="w-8 gap-2">
                {items.map((item) => {
                  // 전체 그룹: activeItem이 설정된 경우 그것만 사용, 아니면 기본 isActive 사용
                  const isActive = activeItem
                    ? activeItem === item.id
                    : item.isActive;
                  return (
                    <SidebarMenuItem key={item.id} className="relative">
                      <SidebarMenuButton
                        tooltip={{
                          children: item.label,
                          hidden: false,
                        }}
                        onClick={() => onItemClick?.(item.id)}
                        isActive={isActive}
                        className="h-8 w-8 items-center justify-center p-0"
                        size="sm"
                      >
                        {/* 이미지, 아이콘, 텍스트 조건부 렌더링 */}
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.label}
                            className="h-8 w-8"
                          />
                        ) : item.icon ? (
                          <item.icon />
                        ) : item.text ? (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 p-0 text-xs font-semibold"
                          >
                            {item.text}
                          </Button>
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
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* 푸터 그룹 - 하단에 고정 */}
        <div className="flex w-12 flex-col items-center gap-2 p-2">
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
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-8 w-8 items-center justify-center p-0"
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
                  className="h-8 w-8 items-center justify-center p-0"
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

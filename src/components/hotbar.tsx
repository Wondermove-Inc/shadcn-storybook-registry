"use client";

import React from "react";
import { Files, Blocks } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
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
  items?: HotbarItem[];
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
 * 🎯 목적: VS Code Activity Bar 기본 아이템 목록 - UIDL 명세 적용
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
    icon: Blocks,
    label: "Extensions",
  },
];

/**
 * 🎯 목적: 기본 사용자 데이터
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
  items = defaultHotbarItems,
  activeItem,
  onItemClick,
  className,
  user = defaultUser,
}: HotbarProps) {
  return (
    <Sidebar
      collapsible="none"
      className={cn(
        "w-[calc(var(--sidebar-width-icon)+1px)] border-r",
        className,
      )}
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {items.map((item) => {
                const isActive = activeItem === item.id || item.isActive;
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.label,
                        hidden: false,
                      }}
                      onClick={() => onItemClick?.(item.id)}
                      isActive={isActive}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}

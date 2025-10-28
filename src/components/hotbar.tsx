"use client";

import React from "react";
import {
  Files,
  Search,
  GitBranch,
  Bug,
  Blocks,
  Settings,
  User,
  ChevronsUpDown,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * 🎯 목적: Hotbar 아이템의 타입 정의
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
}

/**
 * 🎯 목적: VS Code Activity Bar 기본 아이템 목록
 */
const defaultHotbarItems: HotbarItem[] = [
  {
    id: "explorer",
    icon: Files,
    label: "Explorer",
    isActive: true,
  },
  {
    id: "search",
    icon: Search,
    label: "Search",
  },
  {
    id: "source-control",
    icon: GitBranch,
    label: "Source Control",
  },
  {
    id: "run-debug",
    icon: Bug,
    label: "Run and Debug",
  },
  {
    id: "extensions",
    icon: Blocks,
    label: "Extensions",
  },
];

/**
 * 🎯 목적: VS Code Activity Bar 스타일의 핫바 컴포넌트
 *
 * 특징:
 * - 세로 방향으로 배치된 아이콘 버튼들
 * - 활성/비활성 상태 시각적 표시
 * - 각 아이콘은 클릭 가능하며 해당 패널을 토글
 * - shadcn Button 컴포넌트와 SidebarMenu 구조 활용
 * - VS Code의 Activity Bar와 동일한 UX 제공
 */
export function Hotbar({
  items = defaultHotbarItems,
  activeItem,
  onItemClick,
  className,
}: HotbarProps) {
  return (
    <div
      className={cn(
        "bg-sidebar flex w-12 flex-col items-center py-2",
        className,
      )}
    >
      {/* 🎯 목적: 상단 핫바 아이템들 */}
      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id || item.isActive;

          return (
            <Button
              key={item.id}
              variant="ghost"
              size="icon"
              onClick={() => onItemClick?.(item.id)}
              className={cn(
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-10 w-10 rounded-lg transition-colors",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
              title={item.label}
            >
              <IconComponent className="h-5 w-5" />
            </Button>
          );
        })}
      </div>

      {/* 🎯 목적: 하단 설정/사용자 영역 - NavUser 패턴 적용 */}
      <div className="mt-auto flex flex-col gap-1">
        {/* 설정 드롭다운 메뉴 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-10 w-10 rounded-lg transition-colors"
              title="Settings"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" side="right">
            <DropdownMenuLabel>설정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>기본 설정</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Sparkles className="mr-2 h-4 w-4" />
              <span>확장 기능</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 사용자 계정 드롭다운 메뉴 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-10 w-10 rounded-lg p-0 transition-colors"
              title="Account"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" side="right">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">사용자</p>
                <p className="text-muted-foreground text-xs leading-none">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>프로필</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>계정 설정</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

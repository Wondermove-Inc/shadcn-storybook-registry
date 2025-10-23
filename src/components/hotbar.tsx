"use client";

import React from "react";
import {
  FolderOpen,
  Search,
  GitBranch,
  Play,
  Puzzle,
  Settings,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    icon: FolderOpen,
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
    icon: Play,
    label: "Run and Debug",
  },
  {
    id: "extensions",
    icon: Puzzle,
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
        "bg-sidebar border-sidebar-border flex w-12 flex-col items-center border-r py-2",
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

      {/* 🎯 목적: 하단 설정/사용자 영역 */}
      <div className="mt-auto flex flex-col gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-10 w-10 rounded-lg transition-colors"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-10 w-10 rounded-lg transition-colors"
          title="Account"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

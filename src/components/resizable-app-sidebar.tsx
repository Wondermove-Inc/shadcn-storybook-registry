"use client";

import * as React from "react";
import {
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  Plus,
  BadgeAlert,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

// 🎯 목적: 파일 트리 항목의 타입 정의
interface FileTreeItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
  extension?: string;
}

// 🎯 목적: JSON 명세서에 따른 Changes 섹션 메뉴 아이템들
const changedFiles: FileTreeItem[] = [
  { id: "overview", name: "Clusters", type: "file", extension: "" },
  { id: "settings", name: "Nodes", type: "file", extension: "" },
  { id: "logs", name: "Workspaces", type: "file", extension: "" },
];

const projectFiles: FileTreeItem[] = [
  {
    id: "cluster-1",
    name: "kubernetes-admin@starlord-nfs-testcluster",
    type: "folder",
    children: [
      {
        id: "workloads",
        name: "Workloads",
        type: "folder",
        children: [
          {
            id: "config",
            name: "Config",
            type: "folder",
            children: [
              { id: "route", name: "route.ts", type: "file", extension: "ts" },
            ],
          },
          { id: "page", name: "page.tsx", type: "file", extension: "tsx" },
          { id: "layout", name: "layout.tsx", type: "file", extension: "tsx" },
          { id: "network", name: "Network", type: "folder", children: [] },
        ],
      },
    ],
  },
  {
    id: "cluster-2",
    name: "Cluster-2",
    type: "folder",
    children: [
      {
        id: "storage",
        name: "Storage",
        type: "folder",
        children: [
          {
            id: "pvc",
            name: "Persistent Volume Claims",
            type: "file",
            extension: "",
          },
          { id: "pv", name: "Persistent Volumes", type: "file", extension: "" },
        ],
      },
      { id: "header", name: "header.tsx", type: "file", extension: "tsx" },
      { id: "footer", name: "footer.tsx", type: "file", extension: "tsx" },
    ],
  },
  {
    id: "cluster-3",
    name: "Cluster-3",
    type: "folder",
    children: [],
  },
  {
    id: "cluster-4",
    name: "Cluster-4",
    type: "folder",
    children: [
      { id: "favicon", name: "favicon.ico", type: "file", extension: "ico" },
      { id: "vercel", name: "vercel.svg", type: "file", extension: "svg" },
    ],
  },
  { id: "file-1", name: "file-1", type: "file", extension: "" },
  { id: "file-2", name: "file-2", type: "file", extension: "" },
  { id: "file-3", name: "file-3", type: "file", extension: "" },
  { id: "file-4", name: "file-4", type: "file", extension: "" },
];

// 🎯 목적: 재귀적 파일 트리 렌더링 컴포넌트
interface TreeProps {
  item: FileTreeItem;
  onFileSelect?: (file: FileTreeItem) => void;
}

function Tree({ item, onFileSelect }: TreeProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.type === "folder") {
    return (
      <li className="group/menu-item relative">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 w-full min-w-0 justify-start gap-2 px-2 py-1 text-xs"
            >
              <ChevronRight className="transition-transform" />
              {isOpen ? (
                <FolderOpen className="h-4 w-4" />
              ) : (
                <Folder className="h-4 w-4" />
              )}
              <span className="truncate">{item.name}</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="border-sidebar-border ml-2 flex w-full min-w-0 flex-col gap-0 border-l pl-4">
              {item.children?.map((subItem) => (
                <Tree
                  key={subItem.id}
                  item={subItem}
                  onFileSelect={onFileSelect}
                />
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </li>
    );
  }

  return (
    <li className="group/menu-sub-item relative">
      <Button
        variant="ghost"
        onClick={() => onFileSelect?.(item)}
        className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-7 w-full min-w-0 justify-start gap-2 px-2 py-1 text-xs"
      >
        <File className="h-4 w-4" />
        <span className="truncate">{item.name}</span>
      </Button>
    </li>
  );
}

interface ResizableAppSidebarProps {
  onFileSelect?: (file: FileTreeItem) => void;
  className?: string;
}

/**
 * 🎯 목적: ResizablePanel과 호환되는 사이드바 컴포넌트
 * shadcn/ui Sidebar의 스타일링을 차용하되, 독립적인 div 구조로 구현
 * 📝 특징:
 * - ResizablePanelGroup과 완전히 호환
 * - shadcn/ui sidebar 스타일 클래스 사용
 * - 기존 AppSidebar와 동일한 UI/UX
 */
export function ResizableAppSidebar({
  onFileSelect,
  className,
}: ResizableAppSidebarProps) {
  // 🎯 목적: 파일 선택 핸들러 - 부모 컴포넌트에게 파일 선택 정보 전달
  const handleFileSelect = (file: FileTreeItem) => {
    onFileSelect?.(file);
  };

  return (
    <div
      className={`bg-sidebar flex h-full w-full flex-col ${className || ""}`}
    >
      {/* 🎯 목적: App 업데이트 알림 */}
      <div className="px-4 pt-4 pb-1">
        <div className="bg-secondary flex items-center gap-[10px] overflow-hidden rounded-lg px-4 py-3">
          {/* ItemMedia */}
          <div className="flex items-center">
            <BadgeAlert className="h-5 w-5 text-white" />
          </div>

          {/* ItemContent */}
          <div className="flex flex-1 flex-col items-start justify-center gap-1">
            <span className="text-sm leading-4 font-medium text-white">
              You can upgrade to 1.5
            </span>
          </div>

          {/* ItemActions */}
          <div className="flex items-center justify-end gap-2 self-stretch">
            <ChevronRight className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      {/* 🎯 목적: 콘텐츠 영역 */}
      <div className="flex min-h-0 flex-1 flex-col gap-0 overflow-auto">
        {/* Overview 그룹 */}
        <div className="relative flex w-full min-w-0 flex-col px-2 py-1">
          <div className="text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0">
            Overview
          </div>
          <div className="w-full text-xs">
            <ul className="flex w-full min-w-0 flex-col gap-0">
              {changedFiles.map((item) => (
                <li key={item.id} className="group/menu-item relative">
                  <Button
                    variant="ghost"
                    onClick={() => handleFileSelect(item)}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 w-full min-w-0 justify-start gap-2 px-2 py-1 text-xs"
                  >
                    <File className="h-4 w-4" />
                    <span className="truncate">{item.name}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Your Clusters 그룹 */}
        <div className="flex w-full min-w-0 flex-col px-2 py-1">
          <div className="flex h-8 items-center justify-between rounded-md px-2">
            <span className="text-sidebar-foreground/70 text-xs font-medium">
              Your Clusters
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-4 w-4 p-0"
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Add Cluster</span>
            </Button>
          </div>
          <div className="w-full text-xs">
            <ul className="flex w-full min-w-0 flex-col gap-0">
              {projectFiles.map((item) => (
                <Tree
                  key={item.id}
                  item={item}
                  onFileSelect={handleFileSelect}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import {
  ChevronRight,
  ChevronsUpDown,
  File,
  Folder,
  FolderOpen,
  GalleryVerticalEnd,
  Plus,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

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
  { id: "overview", name: "Overview", type: "file", extension: "" },
  { id: "settings", name: "Settings", type: "file", extension: "" },
  { id: "logs", name: "Logs", type: "file", extension: "" },
];

const projectFiles: FileTreeItem[] = [
  {
    id: "cluster-1",
    name: "Cluster-1",
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
      <SidebarMenuItem>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        >
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ChevronRight className="transition-transform" />
              {isOpen ? (
                <FolderOpen className="h-4 w-4" />
              ) : (
                <Folder className="h-4 w-4" />
              )}
              <span>{item.name}</span>
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children?.map((subItem) => (
                <Tree
                  key={subItem.id}
                  item={subItem}
                  onFileSelect={onFileSelect}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild onClick={() => onFileSelect?.(item)}>
        <a href="#">
          <File className="h-4 w-4" />
          <span>{item.name}</span>
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onFileSelect?: (file: FileTreeItem) => void;
}

export function AppSidebar({ onFileSelect, ...props }: AppSidebarProps) {
  // 🎯 목적: 파일 선택 핸들러 - 부모 컴포넌트에게 파일 선택 정보 전달
  const handleFileSelect = (file: FileTreeItem) => {
    onFileSelect?.(file);
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu className="p-2">
          <SidebarMenuItem>
            <SidebarMenuButton className="gap-2 p-2">
              <div className="flex h-8 w-8 items-center justify-center gap-2 rounded-lg bg-blue-600 p-2.5">
                <GalleryVerticalEnd className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-0.5">
                <span className="text-sm leading-none font-semibold">
                  Catalog
                </span>
                <span className="text-muted-foreground text-xs leading-none">
                  app
                </span>
              </div>
              <ChevronsUpDown className="h-4 w-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {changedFiles.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton onClick={() => handleFileSelect(item)}>
                    <File className="h-4 w-4" />
                    <span>{item.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Clusters</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Cluster</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {projectFiles.map((item) => (
                <Tree
                  key={item.id}
                  item={item}
                  onFileSelect={handleFileSelect}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

"use client";

import * as React from "react";
import {
  ChevronRight,
  ChevronsUpDown,
  File,
  Folder,
  FolderOpen,
  GalleryVerticalEnd,
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

// 🎯 목적: JSON 명세서에 따른 파일 트리 데이터 - 프로젝트 문서화 구조
const changedFiles: FileTreeItem[] = [
  { id: "readme", name: "README.md", type: "file", extension: "md" },
  {
    id: "api-hello-route",
    name: "api/hello/route.ts",
    type: "file",
    extension: "ts",
  },
  { id: "app-layout", name: "app/layout.tsx", type: "file", extension: "tsx" },
];

const projectFiles: FileTreeItem[] = [
  {
    id: "app",
    name: "app",
    type: "folder",
    children: [
      {
        id: "api",
        name: "api",
        type: "folder",
        children: [
          {
            id: "hello",
            name: "hello",
            type: "folder",
            children: [
              { id: "route", name: "route.ts", type: "file", extension: "ts" },
            ],
          },
        ],
      },
      { id: "favicon", name: "favicon.ico", type: "file", extension: "ico" },
      { id: "globals", name: "globals.css", type: "file", extension: "css" },
      { id: "layout", name: "layout.tsx", type: "file", extension: "tsx" },
      { id: "page", name: "page.tsx", type: "file", extension: "tsx" },
    ],
  },
  {
    id: "components",
    name: "components",
    type: "folder",
    children: [
      {
        id: "ui",
        name: "ui",
        type: "folder",
        children: [
          { id: "button", name: "button.tsx", type: "file", extension: "tsx" },
          { id: "card", name: "card.ts", type: "file", extension: "ts" },
        ],
      },
    ],
  },
  {
    id: "lib",
    name: "lib",
    type: "folder",
    children: [
      { id: "utils", name: "utils.ts", type: "file", extension: "ts" },
    ],
  },
  {
    id: "public",
    name: "public",
    type: "folder",
    children: [
      { id: "next", name: "next.svg", type: "file", extension: "svg" },
      { id: "vercel", name: "vercel.svg", type: "file", extension: "svg" },
    ],
  },
  { id: "gitignore", name: ".gitignore", type: "file", extension: "" },
  { id: "eslintrc", name: ".eslintrc.json", type: "file", extension: "json" },
  { id: "nextconfig", name: "next.config.js", type: "file", extension: "js" },
  { id: "package", name: "package.json", type: "file", extension: "json" },
  { id: "readme", name: "README.md", type: "file", extension: "md" },
  {
    id: "tailwindconfig",
    name: "tailwind.config.js",
    type: "file",
    extension: "js",
  },
  { id: "tsconfig", name: "tsconfig.json", type: "file", extension: "json" },
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
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 p-2.5">
                <GalleryVerticalEnd className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-1 flex-col items-start gap-0.5">
                <span className="text-sm font-semibold">Documentation</span>
                <span className="text-muted-foreground text-xs">v1.0.1</span>
              </div>
              <ChevronsUpDown className="h-4 w-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Changes</SidebarGroupLabel>
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
          <SidebarGroupLabel>Files</SidebarGroupLabel>
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

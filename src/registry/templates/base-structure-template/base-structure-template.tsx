"use client";

import React from "react";
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  FolderOpen,
  Search,
  Settings,
  Plus,
  MoreHorizontal,
  MessageSquare,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  SidebarProvider,
  SidebarTrigger,
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

// 🎯 목적: 파일 확장자별 색상 매핑 - 시각적 구분을 위한 배지 색상
const getFileTypeColor = (extension?: string): string => {
  switch (extension) {
    case "tsx":
    case "jsx":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "ts":
    case "js":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "css":
    case "scss":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    case "json":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "md":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

// 🎯 목적: 재귀적 파일 트리 렌더링 컴포넌트
interface FileTreeNodeProps {
  item: FileTreeItem;
  level: number;
  onFileSelect: (file: FileTreeItem) => void;
  selectedFileId?: string;
}

const FileTreeNode: React.FC<FileTreeNodeProps> = ({
  item,
  level,
  onFileSelect,
  selectedFileId,
}) => {
  const [isOpen, setIsOpen] = React.useState(level < 2); // 2단계까지 기본 열림
  const isSelected = selectedFileId === item.id;
  const paddingLeft = `${level * 16}px`; // 중첩 레벨에 따른 들여쓰기

  if (item.type === "folder") {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className={`hover:bg-accent hover:text-accent-foreground w-full justify-start ${
              isSelected ? "bg-accent text-accent-foreground" : ""
            }`}
            style={{ paddingLeft }}
          >
            {isOpen ? (
              <ChevronDown className="mr-2 h-4 w-4" />
            ) : (
              <ChevronRight className="mr-2 h-4 w-4" />
            )}
            {isOpen ? (
              <FolderOpen className="mr-2 h-4 w-4" />
            ) : (
              <Folder className="mr-2 h-4 w-4" />
            )}
            <span className="truncate">{item.name}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.children?.map((child) => (
            <FileTreeNode
              key={child.id}
              item={child}
              level={level + 1}
              onFileSelect={onFileSelect}
              selectedFileId={selectedFileId}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuButton
      className={`hover:bg-accent hover:text-accent-foreground w-full justify-start ${
        isSelected ? "bg-accent text-accent-foreground" : ""
      }`}
      style={{ paddingLeft }}
      onClick={() => onFileSelect(item)}
    >
      <File className="mr-2 h-4 w-4" />
      <span className="flex-1 truncate">{item.name}</span>
      {item.extension && (
        <Badge
          variant="secondary"
          className={`ml-2 text-xs ${getFileTypeColor(item.extension)}`}
        >
          {item.extension}
        </Badge>
      )}
    </SidebarMenuButton>
  );
};

// 🎯 목적: 메인 베이스 구조 템플릿 컴포넌트
export function BaseStructureTemplate() {
  const [selectedFile, setSelectedFile] = React.useState<FileTreeItem | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = React.useState("");
  const [chatMessage, setChatMessage] = React.useState("");

  // 🎯 목적: 파일 선택 핸들러 - 선택된 파일 상태 업데이트
  const handleFileSelect = (file: FileTreeItem) => {
    setSelectedFile(file);
  };

  // 🎯 목적: 검색 쿼리에 따른 파일 필터링 (실제 구현에서는 더 복잡한 로직 필요)
  const filteredProjectFiles = React.useMemo(() => {
    if (!searchQuery) return projectFiles;
    // 간단한 파일명 검색 (실제로는 더 정교한 검색 로직 필요)
    return projectFiles; // 여기서는 간단히 전체 트리 반환
  }, [searchQuery]);

  const filteredChangedFiles = React.useMemo(() => {
    if (!searchQuery) return changedFiles;
    return changedFiles; // 여기서는 간단히 전체 트리 반환
  }, [searchQuery]);

  return (
    <SidebarProvider>
      <div className="bg-background flex h-screen">
        {/* 사이드바 영역 - JSON 명세서에 따른 구조 */}
        <Sidebar className="border-r">
          {/* 프로젝트 헤더 */}
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Documentation v1.0.1
                </span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>
          </SidebarHeader>

          <SidebarContent>
            {/* Changes 섹션 */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Changes
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredChangedFiles.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        className="hover:bg-accent hover:text-accent-foreground w-full justify-start text-sm"
                        onClick={() => handleFileSelect(item)}
                      >
                        <File className="mr-2 h-4 w-4" />
                        <span className="flex-1 truncate">{item.name}</span>
                        {item.extension && (
                          <Badge
                            variant="secondary"
                            className={`ml-2 text-xs ${getFileTypeColor(item.extension)}`}
                          >
                            {item.extension}
                          </Badge>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Files 섹션 */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Files
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredProjectFiles.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <FileTreeNode
                        item={item}
                        level={0}
                        onFileSelect={handleFileSelect}
                        selectedFileId={selectedFile?.id}
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* 메인 콘텐츠 영역 */}
        <div className="flex flex-1 flex-col">
          {/* 상단 헤더 */}
          <header className="bg-background border-border flex h-auto w-full shrink-0 items-center justify-between gap-2.5 self-stretch overflow-hidden border-b p-2">
            {/* 왼쪽 여백 */}
            <div className="flex items-center"></div>

            {/* 중앙 검색 영역 */}
            <div className="flex flex-grow items-center justify-center gap-2">
              <div className="bg-background/[0.045] border-border flex h-9 w-[373px] shrink-0 items-center gap-2 rounded-lg border px-3 py-1 shadow-sm">
                <div className="flex items-center justify-center gap-2">
                  <Search className="text-muted-foreground h-4 w-4" />
                </div>
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-muted-foreground flex-grow border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* 우측 버튼 그룹 */}
            <div className="flex items-center">
              <div className="flex items-center">
                {/* 패널 토글 버튼 */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 2V14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>

                {/* 하단 패널 토글 버튼 (비활성화) */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2 opacity-50"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10H14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>

                {/* AI 어시스턴트 버튼 */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 5.33335V2.66669H5.33331M1.33331 9.33335H2.66665M13.3333 9.33335H14.6666M9.99998 8.66669V10M5.99998 8.66669V10M3.99998 5.33335H12C12.7364 5.33335 13.3333 5.93031 13.3333 6.66669V12C13.3333 12.7364 12.7364 13.3334 12 13.3334H3.99998C3.2636 13.3334 2.66665 12.7364 2.66665 12V6.66669C2.66665 5.93031 3.2636 5.33335 3.99998 5.33335Z"
                      stroke="currentColor"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>

                {/* 설정 버튼 */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex h-8 w-8 shrink-0 items-center justify-center gap-2 rounded-lg bg-transparent p-2"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          <div className="flex flex-1">
            {/* 메인 콘텐츠 */}
            <main className="flex-1 p-6">
              {selectedFile ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <File className="h-5 w-5" />
                      {selectedFile.name}
                      {selectedFile.extension && (
                        <Badge
                          className={getFileTypeColor(selectedFile.extension)}
                        >
                          {selectedFile.extension}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      {selectedFile.type === "file" ? (
                        <div className="space-y-2">
                          <div className="text-muted-foreground">
                            // {selectedFile.name} 파일의 내용
                          </div>
                          <div>
                            {selectedFile.extension === "tsx" && (
                              <div>
                                <div className="text-blue-600">import</div>{" "}
                                <div className="text-green-600">React</div>{" "}
                                <div className="text-blue-600">from</div>{" "}
                                <div className="text-orange-600">"react"</div>;
                              </div>
                            )}
                            {selectedFile.extension === "css" && (
                              <div>
                                <div className="text-purple-600">
                                  .container
                                </div>{" "}
                                {"{"}
                                <br />
                                <div className="ml-4">
                                  <div className="text-blue-600">display</div>:{" "}
                                  <div className="text-green-600">flex</div>;
                                </div>
                                <br />
                                {"}"}
                              </div>
                            )}
                            {selectedFile.extension === "json" && (
                              <div>
                                {"{"}
                                <br />
                                <div className="ml-4">
                                  <div className="text-blue-600">"name"</div>:{" "}
                                  <div className="text-green-600">
                                    "project"
                                  </div>
                                  ,
                                </div>
                                <br />
                                <div className="ml-4">
                                  <div className="text-blue-600">"version"</div>
                                  :{" "}
                                  <div className="text-green-600">"1.0.0"</div>
                                </div>
                                <br />
                                {"}"}
                              </div>
                            )}
                            {!["tsx", "css", "json"].includes(
                              selectedFile.extension || "",
                            ) && (
                              <div className="text-muted-foreground">
                                파일 내용을 표시할 수 없습니다.
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="text-muted-foreground">
                          폴더를 선택했습니다. 파일을 선택해주세요.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <File className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      파일을 선택해주세요
                    </h3>
                    <p className="text-muted-foreground">
                      왼쪽 사이드바에서 파일을 선택하면 내용을 확인할 수
                      있습니다.
                    </p>
                  </div>
                </div>
              )}
            </main>

            {/* AI 어시스턴트 패널 */}
            <aside className="bg-background border-border flex w-80 flex-col border-l">
              <div className="flex flex-col gap-9 p-6">
                {/* 헤더 */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg leading-7 font-semibold">
                    Skuber+ AI Assistant
                  </h3>
                  <p className="text-muted-foreground self-stretch text-sm leading-5">
                    Please set up the API key to use the AI Assistant.
                  </p>
                </div>

                {/* 닫기 아이콘 */}
                <div className="relative flex h-4 w-4 shrink-0 items-start rounded-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 p-0 opacity-70 hover:opacity-100"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.7">
                        <path
                          d="M12 4L4 12M4 4L12 12"
                          stroke="currentColor"
                          strokeWidth="1.33"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Button>
                </div>

                {/* 설정 폼 */}
                <div className="flex flex-col items-end gap-6 self-stretch">
                  {/* AI Provider 필드 */}
                  <div className="flex flex-col gap-3 self-stretch">
                    <label className="text-foreground self-stretch text-sm leading-5 font-medium">
                      AI Provider
                    </label>
                    <div className="bg-background border-border flex shrink-0 items-center gap-2 self-stretch rounded-lg border px-3 py-1 shadow-sm">
                      <span className="text-muted-foreground flex-1 text-sm leading-5">
                        OpenAI (GPT-4)
                      </span>
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="currentColor"
                            strokeWidth="1.33"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-muted-foreground"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* API Key 필드 */}
                  <div className="flex flex-col gap-3 self-stretch">
                    <label className="text-foreground self-stretch text-sm leading-5 font-medium">
                      API Key
                    </label>
                    <Input
                      type="text"
                      placeholder="Please enter the API key"
                      className="text-muted-foreground placeholder:text-muted-foreground"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                  </div>

                  {/* 시작 버튼 */}
                  <Button className="h-9 px-4 font-medium">
                    Start AI Assistant
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

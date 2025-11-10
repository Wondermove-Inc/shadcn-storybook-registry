import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Welcome } from "./welcome";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import {
  X,
  FileText,
  FileJson,
  Terminal,
  Plus,
  RefreshCcw,
  EllipsisVertical,
  CircleHelp,
} from "lucide-react";

/**
 * Welcome 콘텐츠 컴포넌트 - Kubernetes IDE 환경의 웰컴 페이지
 *
 * baseStructure의 contents 영역에 들어갈 웰컴 콘텐츠를 제공합니다.
 * 탭 네비게이션, 메인 제목, 액션 카드, 도움말 정보를 포함합니다.
 */
const meta: Meta<typeof Welcome> = {
  title: "templates/Contents/Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Welcome 콘텐츠 - 완전한 웰컴 페이지 레이아웃
 */
export const Default: Story = {};

/**
 * 탭과 함께 표시된 Welcome 페이지 - BaseStructure의 StructureTab 적용
 */
export const WithTabs: Story = {
  render: () => {
    // 🎯 목적: 탭 목록 상태 관리 (BaseStructure StructureTab에서 가져옴)
    const [tabs, setTabs] = React.useState([
      { id: "welcome", name: "Welcome", type: "active", icon: FileText },
      {
        id: "explorer",
        name: "File Explorer",
        type: "inactive",
        icon: FileJson,
      },
      { id: "terminal", name: "Terminal", type: "inactive", icon: Terminal },
    ]);

    // 🎯 목적: 각 탭의 호버 상태 관리
    const [hoveredTab, setHoveredTab] = React.useState<string | null>(null);

    // 🎯 목적: 탭 제거 핸들러
    const handleTabClose = (tabId: string) => {
      if (tabs.length === 1) return;
      setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));
    };

    // 🎯 목적: 탭 클릭 시 활성 탭 전환 핸들러
    const handleTabClick = (tabId: string) => {
      setTabs((prevTabs) =>
        prevTabs.map((tab) => ({
          ...tab,
          type: tab.id === tabId ? "active" : "inactive",
        })),
      );
    };

    return (
      <div className="flex h-screen w-full flex-col">
        {/* BaseStructure StructureTab 기반 탭 네비게이션 바 */}
        <div className="bg-sidebar border-border flex min-h-[40px] w-full items-center overflow-hidden border-b">
          {/* 동적 탭 렌더링 */}
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              {/* 활성 탭 또는 비활성 탭 */}
              {tab.type === "active" ? (
                // 활성 탭 - 어두운 배경과 파란색 상단 보더, 하단 보더를 덮음, primary 아이콘, bold italic 텍스트
                <div className="bg-background border-primary after:bg-background relative z-10 -mb-px flex flex-col border-t-2 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-20 after:h-px">
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => handleTabClick(tab.id)}
                    className="text-foreground hover:bg-sidebar/50 h-10 justify-center rounded-none border-0 bg-transparent px-3 py-2 hover:border-0 focus-visible:border-0 active:border-0"
                  >
                    <tab.icon className="text-primary h-4 w-4" />
                    <span className="text-sm font-bold font-medium italic">
                      {tab.name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClose(tab.id);
                      }}
                      className="hover:bg-muted/50 rounded-sm p-0.5 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Button>
                </div>
              ) : (
                // 비활성 탭 - 더 약한 투명도와 배경, 호버 시 배경 변경, 하단 border 포함
                <div className="border-border relative border-b">
                  <Button
                    variant="ghost"
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => handleTabClick(tab.id)}
                    className="text-foreground hover:bg-sidebar-accent/30 bg-muted/20 h-10 rounded-none border-0 px-3 py-2 opacity-50 transition-all duration-200 hover:border-0 hover:opacity-100 focus-visible:border-0 active:border-0"
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                    {/* 🎯 목적: X 버튼을 항상 렌더링하여 공간 확보, hover 시에만 표시 */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTabClose(tab.id);
                      }}
                      className={`hover:bg-muted/50 rounded-sm p-0.5 transition-all ${
                        hoveredTab === tab.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Button>
                </div>
              )}

              {/* 탭 사이에 Separator 추가 (마지막 탭 제외) */}
              {index < tabs.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-border h-10 w-px"
                  style={{ height: "40px", width: "1px" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Welcome 컴포넌트 - showTabs=false로 내부 탭 숨김 */}
        <Welcome showTabs={false} />
      </div>
    );
  },
};

/**
 * Home 페이지 - Skuber+ AI Assistant의 메인 대시보드
 *
 * 클러스터 관리, kubeconfig 동기화, 클러스터 목록 테이블을 포함한 완전한 홈 화면입니다.
 */
export const Home: Story = {
  render: () => {
    // 🎯 목적: 클러스터 테이블 데이터 관리
    const clusters = [
      { id: 1, name: "AzurProd", version: "1.01" },
      { id: 2, name: "GcloudStage", version: "1.01" },
      { id: 3, name: "OpenShift", version: "1.01" },
      { id: 4, name: "DigitalOceanddlMetrics Co", version: "1.01" },
      { id: 5, name: "Aws Development", version: "1.01" },
    ];

    return (
      <div className="flex h-screen w-full flex-col items-start gap-10 overflow-auto bg-[#0a0a0a] p-32">
        {/* 로고 및 타이틀 섹션 */}
        <div className="flex items-center gap-3">
          {/* 로고 심볼 */}
          <div className="relative h-12 w-12 flex-shrink-0">
            <div className="absolute top-0 left-0 h-12 w-12">
              {/* 배경 원 */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#125AED" />
                <circle
                  cx="24"
                  cy="24"
                  r="24"
                  fill="white"
                  fillOpacity="0.05"
                />
              </svg>
              {/* 로고 아이콘 */}
              <svg
                className="absolute top-[4.5px] left-[4.5px]"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4274 0C8.69355 0 0 8.70161 0 19.4274C0 30.1532 8.70161 38.8548 19.4274 38.8548C30.1532 38.8548 38.8548 30.1532 38.8548 19.4274C38.8548 8.70161 30.1613 0 19.4274 0ZM28.3226 17L21.8548 10.5323L24.1935 8.19355C25.9758 6.41129 28.871 6.41129 30.6613 8.19355C32.4435 9.97581 32.4435 12.871 30.6613 14.6613L28.3226 17ZM30.6613 24.1855C32.4435 25.9677 32.4435 28.8629 30.6613 30.6532C28.879 32.4355 25.9839 32.4355 24.1935 30.6532L21.8548 28.3145L28.3226 21.8468L30.6613 24.1855ZM19.4274 25.8871L16.2016 22.6613H19.4274L12.9758 19.4355L12.9597 19.4194L19.4274 12.9516L22.6613 16.1855H19.4274L25.8871 19.4194L19.4193 25.8871H19.4274ZM8.19355 30.6613C6.41129 28.879 6.41129 25.9839 8.19355 24.1935L10.5403 21.8468L17.0081 28.3145L14.6613 30.6613C12.879 32.4435 9.98387 32.4435 8.19355 30.6613ZM8.19355 14.6532C6.41129 12.871 6.41129 9.97581 8.19355 8.18548C9.9758 6.40322 12.871 6.40322 14.6613 8.18548L17.0081 10.5323L10.5403 17L8.19355 14.6532ZM24.1532 4.1371C23.2903 4.52419 22.4839 5.06452 21.7742 5.77419L19.4355 8.1129L17.0968 5.77419C16.3871 5.06452 15.5806 4.52419 14.7177 4.1371C16.2097 3.67742 17.7903 3.42742 19.4355 3.42742C21.0806 3.42742 22.6613 3.67742 24.1613 4.1371H24.1532ZM4.14516 14.6935C4.53226 15.5564 5.07258 16.371 5.78226 17.0806L8.12097 19.4194L5.78226 21.7581C5.07258 22.4677 4.53226 23.2823 4.14516 24.1532C3.68548 22.6613 3.43548 21.0726 3.43548 19.4274C3.43548 17.7823 3.68548 16.1935 4.14516 14.6935ZM14.7097 34.7177C15.5726 34.3306 16.3871 33.7903 17.1048 33.0806L19.4435 30.7419L21.7823 33.0806C22.4919 33.7903 23.3064 34.3306 24.1693 34.7177C22.6774 35.1774 21.0887 35.4274 19.4355 35.4274C17.7823 35.4274 16.2016 35.1774 14.7097 34.7177ZM34.7339 24.1452C34.3468 23.2823 33.8064 22.4758 33.0968 21.7661L30.7581 19.4274L33.0968 17.0887C33.8064 16.379 34.3468 15.5726 34.7339 14.7097C35.1935 16.2016 35.4435 17.7903 35.4435 19.4355C35.4435 21.0806 35.1935 22.6613 34.7339 24.1532V24.1452Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* 타이틀 텍스트 */}
          <div className="flex flex-col items-start gap-1.5">
            <span className="text-center text-3xl leading-none font-medium text-[#e5e5e5]">
              Skuber+ AI Assistant
            </span>
            <span className="text-left text-base leading-none font-light text-[#e5e5e5]">
              Kubernetes IDE · Simplified Cluster Management
            </span>
          </div>
        </div>

        {/* 카드 및 테이블 컨테이너 */}
        <div className="flex w-full flex-col items-start gap-7">
          {/* 액션 카드 섹션 */}
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-foreground text-base leading-none font-normal">
              Add Cluster
            </span>
            <div className="flex w-full items-stretch gap-4">
              {/* Add from kubeconfig 카드 */}
              <Item variant="muted" className="flex-1">
                <ItemContent>
                  <ItemTitle>Add from kubeconfig</ItemTitle>
                  <ItemDescription>
                    Add clusters directly from your kubeconfig file
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-[#e5e5e5] px-4 py-2 text-sm leading-5 text-[#171717]">
                    <Plus className="h-4 w-4" />
                    Add
                  </Button>
                </ItemActions>
              </Item>

              {/* Sync kubeconfig 카드 */}
              <Item variant="muted" className="flex-1">
                <ItemContent>
                  <ItemTitle>Sync kubeconfig</ItemTitle>
                  <ItemDescription>
                    Automatically sync and manage your kubeconfig files
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button
                    variant="outline"
                    className="flex h-9 items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#262626] px-4 py-2 text-sm leading-5 text-[#fafafa] shadow-sm"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    Sync
                  </Button>
                </ItemActions>
              </Item>
            </div>
          </div>

          {/* 테이블 섹션 */}
          <div className="flex w-full flex-col items-start gap-3">
            <span className="text-foreground text-base leading-none font-normal">
              Clusters Management
            </span>

            {/* 클러스터 테이블 */}
            <div className="w-full">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10">
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      Clusters
                    </TableHead>
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      <span className="sr-only">Checkbox</span>
                    </TableHead>
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      Display Name
                    </TableHead>
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      Version
                    </TableHead>
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      Nodes CPU/MEM
                    </TableHead>
                    <TableHead className="text-left text-sm font-medium text-[#fafafa]">
                      Pods Status
                    </TableHead>
                    <TableHead className="text-right text-sm font-medium text-[#fafafa]">
                      Setting
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clusters.map((cluster) => (
                    <TableRow
                      key={cluster.id}
                      className="border-b border-white/10"
                    >
                      {/* 클러스터 로고 */}
                      <TableCell>
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded">
                          <img
                            src="data:image/png;base64,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"
                            alt="Cluster Logo"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </TableCell>

                      {/* 체크박스 */}
                      <TableCell>
                        <Checkbox />
                      </TableCell>

                      {/* Display Name */}
                      <TableCell className="text-sm text-[#fafafa]">
                        {cluster.name}
                      </TableCell>

                      {/* Version */}
                      <TableCell className="text-sm text-[#fafafa]">
                        {cluster.version}
                      </TableCell>

                      {/* Nodes CPU/MEM */}
                      <TableCell className="text-sm text-[#fafafa]">
                        Table Cell Text
                      </TableCell>

                      {/* Pods Status */}
                      <TableCell className="text-sm text-[#fafafa]">
                        Table Cell Text
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-9 w-9 rounded-lg bg-transparent p-2"
                            >
                              <EllipsisVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* 도움말 섹션 */}
        <Item variant="outline" className="w-full">
          <ItemMedia variant="icon">
            <CircleHelp className="h-4 w-4" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Need Help?</ItemTitle>
            <ItemDescription>
              New login detected from unknown device.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              variant="outline"
              className="h-9 rounded-lg border border-white/15 bg-white/[0.045] px-4 py-2 text-sm text-[#fafafa] shadow-sm"
            >
              Get help
            </Button>
          </ItemActions>
        </Item>
      </div>
    );
  },
};

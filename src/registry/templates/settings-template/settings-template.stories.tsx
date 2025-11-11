import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsDialog } from "../../../../components/settings-dialog";
import {
  Settings,
  Network,
  Terminal,
  Layers,
  BarChart3,
  Hexagon,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

// 🎯 목적: 클러스터 설정 메뉴 데이터 - 클러스터 관련 6개 메뉴
const clusterMenuData = {
  nav: [
    { name: "General", icon: Settings },
    { name: "Proxy", icon: Network },
    { name: "Terminal", icon: Terminal },
    { name: "Namespace", icon: Layers },
    { name: "Metrics", icon: BarChart3 },
    { name: "Node Shell", icon: Hexagon },
  ],
};

// 🎯 목적: General 메뉴 콘텐츠 - 클러스터 일반 설정
function GeneralContent() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="cluster-name"
          className="text-foreground text-sm font-medium"
        >
          Cluster Name
        </Label>
        <Input
          id="cluster-name"
          type="text"
          placeholder="Enter cluster name"
          className="bg-input/30 border-border"
        />
      </div>

      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="auto-refresh"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Auto Refresh
            </Label>
            <Switch id="auto-refresh" />
          </div>
          <p className="text-muted-foreground text-sm">
            Automatically refresh cluster resources
          </p>
        </div>
      </div>
    </>
  );
}

// 🎯 목적: Proxy 메뉴 콘텐츠 - 클러스터 프록시 설정
function ClusterProxyContent() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="cluster-proxy"
          className="text-foreground text-sm font-medium"
        >
          Cluster Proxy
        </Label>
        <Input
          id="cluster-proxy"
          type="text"
          placeholder="Type proxy url"
          className="bg-input/30 border-border"
        />
      </div>
    </>
  );
}

// 🎯 목적: Terminal 메뉴 콘텐츠 - 클러스터 터미널 설정
function ClusterTerminalContent() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="terminal-theme"
          className="text-foreground text-sm font-medium"
        >
          Terminal Theme
        </Label>
        <Select defaultValue="dark">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

// 🎯 목적: Namespace 메뉴 콘텐츠 - 네임스페이스 설정
function NamespaceContent() {
  return (
    <>
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="default-namespace"
          className="text-foreground text-sm font-medium"
        >
          Default Namespace
        </Label>
        <Input
          id="default-namespace"
          type="text"
          placeholder="default"
          className="bg-input/30 border-border"
        />
      </div>
    </>
  );
}

// 🎯 목적: Metrics 메뉴 콘텐츠 - 메트릭 수집 설정
function MetricsContent() {
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="enable-metrics"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Enable Metrics Collection
            </Label>
            <Switch id="enable-metrics" />
          </div>
          <p className="text-muted-foreground text-sm">
            Collect and display cluster metrics
          </p>
        </div>
      </div>
    </>
  );
}

// 🎯 목적: Node Shell 메뉴 콘텐츠 - 노드 셸 접근 설정
function NodeShellContent() {
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="enable-node-shell"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Enable Node Shell Access
            </Label>
            <Switch id="enable-node-shell" />
          </div>
          <p className="text-muted-foreground text-sm">
            Allow direct shell access to cluster nodes
          </p>
        </div>
      </div>
    </>
  );
}

// 🎯 목적: 클러스터 전용 설정 다이얼로그 컴포넌트
function ClusterSettingsDialog() {
  const [open, setOpen] = React.useState(true);
  const [activeMenu, setActiveMenu] = React.useState("General");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Cluster Settings</Button>
      </DialogTrigger>
      <DialogContent className="flex h-[85vh] max-h-[900px] max-w-[70%] flex-col overflow-hidden p-0 sm:h-[90vh] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
        <DialogTitle className="sr-only">Cluster Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your cluster settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {clusterMenuData.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          isActive={item.name === activeMenu}
                          onClick={() => setActiveMenu(item.name)}
                        >
                          <item.icon />
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Cluster Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{activeMenu}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div
              className="flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 200px)" }}
            >
              <div className="flex flex-col gap-6 p-4 pt-0">
                {activeMenu === "General" && <GeneralContent />}
                {activeMenu === "Proxy" && <ClusterProxyContent />}
                {activeMenu === "Terminal" && <ClusterTerminalContent />}
                {activeMenu === "Namespace" && <NamespaceContent />}
                {activeMenu === "Metrics" && <MetricsContent />}
                {activeMenu === "Node Shell" && <NodeShellContent />}
              </div>
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

/**
 * 다이얼로그 내에 사이드바가 포함된 설정 템플릿입니다.
 *
 * 🎯 목적: Dialog 안에서 사용 가능한 Sidebar 컴포넌트 데모
 * ✨ 특징:
 * - Dialog 모달 내부에 Sidebar 레이아웃 구현
 * - 설정 카테고리별 네비게이션 제공
 * - 반응형 디자인 (모바일에서는 사이드바 숨김)
 * - Breadcrumb 네비게이션 포함
 * - 12개의 설정 카테고리 메뉴
 */
const meta = {
  title: "templates/Settings",
  component: SettingsDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Dialog 내부에 Sidebar가 포함된 설정 템플릿입니다. VS Code의 설정 페이지와 유사한 레이아웃으로, 좌측에는 설정 카테고리 네비게이션이, 우측에는 설정 내용이 표시됩니다. 모바일에서는 사이드바가 숨겨지고 콘텐츠만 표시됩니다.`,
      },
    },
  },
} satisfies Meta<typeof SettingsDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본 설정 다이얼로그 템플릿입니다.
 *
 * 🎯 목적: Dialog 내 Sidebar 레이아웃의 완전한 기능 데모
 * ✨ 특징:
 * - 설정 카테고리: Notifications, Navigation, Home, Appearance 등 12개 메뉴
 * - 활성 메뉴: "Messages & media" 기본 선택
 * - 반응형 레이아웃: 데스크톱에서만 사이드바 표시
 * - Breadcrumb: Settings > Messages & media 경로 표시
 */
export const Default: Story = {
  render: () => {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center">
        <SettingsDialog />
      </div>
    );
  },
};

/**
 * 클러스터 설정 다이얼로그 템플릿입니다.
 *
 * 🎯 목적: Default 스토리와 독립적인 클러스터 전용 설정 다이얼로그
 * ✨ 특징:
 * - 클러스터 전용 메뉴: General, Proxy, Terminal, Namespace, Metrics, Node Shell
 * - Default와 완전히 독립적인 구조
 * - 클러스터 관련 설정 시나리오에 특화
 */
export const ClusterSettings: Story = {
  render: () => {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center">
        <ClusterSettingsDialog />
      </div>
    );
  },
};

/**
 * 설정 다이얼로그를 위한 인터랙션 테스트입니다.
 *
 * 🎯 목적: Dialog 열기/닫기 및 사이드바 네비게이션 테스트
 * ✨ 테스트 항목:
 * - Dialog trigger 버튼 클릭
 * - 사이드바 메뉴 항목들 확인
 * - Breadcrumb 네비게이션 확인
 * - 콘텐츠 영역 렌더링 확인
 */
export const InteractionTest: Story = {
  tags: ["!dev", "!autodocs"],
  render: () => {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center p-8">
        <div className="text-center">
          <h2 className="mb-4 text-lg font-semibold">
            Setting Dialog Template
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Dialog 내부에 Sidebar가 포함된 설정 템플릿을 테스트합니다.
          </p>
          <SettingsDialog />
        </div>
      </div>
    );
  },
};

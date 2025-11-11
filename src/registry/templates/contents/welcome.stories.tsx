import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Welcome } from "./welcome";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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
 * 🎯 목적: 클러스터 테이블 행 데이터 타입 정의
 */
interface ClusterRowData {
  id: string;
  name: string;
  version: string;
  provider: string;
  podStatus: {
    running: number;
    pending: number;
    succeeded: number;
    unknown: number;
  };
}

/**
 * Home 페이지 - Skuber+ AI Assistant의 메인 대시보드
 *
 * 클러스터 관리, kubeconfig 동기화, 클러스터 목록 테이블을 포함한 완전한 홈 화면입니다.
 */
export const Home: Story = {
  render: () => {
    // 🎯 목적: 클러스터 테이블 데이터 관리 (프로바이더 정보 및 Pod Status 포함)
    const clusters: ClusterRowData[] = [
      {
        id: "1",
        name: "AzurProd",
        version: "1.01",
        provider: "azure",
        podStatus: { running: 45, pending: 3, succeeded: 12, unknown: 1 },
      },
      {
        id: "2",
        name: "GcloudStage",
        version: "1.01",
        provider: "gcp",
        podStatus: { running: 32, pending: 5, succeeded: 8, unknown: 2 },
      },
      {
        id: "3",
        name: "OpenShift",
        version: "1.01",
        provider: "openshift",
        podStatus: { running: 28, pending: 2, succeeded: 15, unknown: 0 },
      },
      {
        id: "4",
        name: "DigitalOceanddlMetrics Co",
        version: "1.01",
        provider: "digitalocean",
        podStatus: { running: 18, pending: 8, succeeded: 6, unknown: 3 },
      },
      {
        id: "5",
        name: "IBM Cloud Development",
        version: "1.01",
        provider: "ibm",
        podStatus: { running: 52, pending: 1, succeeded: 20, unknown: 1 },
      },
    ];

    // 🎯 목적: 각 클라우드 프로바이더별 로고 이미지 렌더링
    const getProviderLogo = (provider: string) => {
      const logoConfig: Record<string, { image: string; alt: string }> = {
        azure: { image: "/images/apps/azure.png", alt: "Microsoft Azure" },
        gcp: {
          image: "/images/apps/google-cloud.png",
          alt: "Google Cloud Platform",
        },
        openshift: { image: "/images/apps/openshift.png", alt: "OpenShift" },
        digitalocean: {
          image: "/images/apps/digital-ocean.png",
          alt: "DigitalOcean",
        },
        ibm: { image: "/images/apps/ibm-cloud.png", alt: "IBM Cloud" },
      };

      const config = logoConfig[provider] || {
        image: "",
        alt: "Unknown Provider",
      };

      return (
        <div
          className="flex h-10 w-10 items-center justify-center"
          style={{ filter: "grayscale(100%)" }}
        >
          {config.image ? (
            <img
              src={config.image}
              alt={config.alt}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-foreground text-xs font-bold">?</span>
          )}
        </div>
      );
    };

    // 🎯 목적: Pod Status를 가로 stacked bar chart로 시각화 (ChartContainer 기반)
    const PodStatusChart = ({
      podStatus,
    }: {
      podStatus: ClusterRowData["podStatus"];
    }) => {
      // 🎯 목적: 차트 데이터 (실제 Pod 수 저장, stackOffset="expand"로 비율 렌더링)
      const chartData = [
        {
          pods: "status",
          running: podStatus.running,
          pending: podStatus.pending,
          succeeded: podStatus.succeeded,
          unknown: podStatus.unknown,
        },
      ];

      // 🎯 목적: 전체 Pod 수 계산 (오른쪽 표시용)
      const total =
        podStatus.running +
        podStatus.pending +
        podStatus.succeeded +
        podStatus.unknown;

      // 🎯 목적: Chart 색상 설정 (Storybook chart CSS 변수 사용 - 역순)
      const chartConfig = {
        running: {
          label: "Running",
          color: "var(--chart-4)", // Chart color 4 - Pod 실행 중
        },
        pending: {
          label: "Pending",
          color: "var(--chart-3)", // Chart color 3 - Pod 대기 중
        },
        succeeded: {
          label: "Succeeded",
          color: "var(--chart-2)", // Chart color 2 - Pod 성공 완료
        },
        unknown: {
          label: "Unknown",
          color: "var(--chart-1)", // Chart color 1 - Pod 상태 알 수 없음
        },
      } satisfies ChartConfig;

      return (
        <div className="flex h-8 w-full items-center gap-2">
          {/* 가로 Stacked Bar Chart */}
          <div className="h-full flex-1">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                barSize={20}
                stackOffset="expand"
              >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="pods" hide />
                <ChartTooltip
                  content={<ChartTooltipContent hideLabel />}
                  cursor={false}
                  wrapperStyle={{ zIndex: 9999 }}
                />
                <Bar
                  dataKey="running"
                  stackId="stack"
                  fill="var(--color-running)"
                  radius={[4, 0, 0, 4]}
                />
                <Bar
                  dataKey="pending"
                  stackId="stack"
                  fill="var(--color-pending)"
                />
                <Bar
                  dataKey="succeeded"
                  stackId="stack"
                  fill="var(--color-succeeded)"
                />
                <Bar
                  dataKey="unknown"
                  stackId="stack"
                  fill="var(--color-unknown)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>

          {/* 전체 Pod 수 표시 */}
          <span className="text-muted-foreground text-xs font-medium">
            {total}
          </span>
        </div>
      );
    };

    return (
      <div className="bg-background flex h-screen w-full flex-col items-center overflow-auto p-5 pt-28">
        <div className="flex w-full max-w-[1280px] flex-col items-start gap-10">
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
              <span className="text-foreground text-center text-3xl leading-none font-medium">
                Skuber+ AI Assistant
              </span>
              <span className="text-foreground text-left text-base leading-none font-light">
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
                    <Button className="flex h-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm leading-5">
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
                      className="flex h-9 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm leading-5"
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

              {/* 클러스터 테이블 - 간단한 정적 테이블 */}
              <div className="w-full">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b">
                      <TableHead className="text-foreground w-[60px] text-left text-sm font-medium">
                        Clusters
                      </TableHead>
                      <TableHead className="text-foreground w-[150px] text-left text-sm font-medium">
                        Display Name
                      </TableHead>
                      <TableHead className="text-foreground w-[80px] text-left text-sm font-medium">
                        Version
                      </TableHead>
                      <TableHead className="text-foreground w-[200px] text-left text-sm font-medium">
                        Nodes CPU/MEM
                      </TableHead>
                      <TableHead className="text-foreground w-[200px] text-left text-sm font-medium">
                        Pods Status
                      </TableHead>
                      <TableHead className="text-foreground w-[80px] text-right text-sm font-medium">
                        Setting
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clusters.map((cluster) => (
                      <TableRow
                        key={cluster.id}
                        className="border-b hover:relative hover:z-[100]"
                      >
                        <TableCell className="text-foreground w-[60px]">
                          {getProviderLogo(cluster.provider)}
                        </TableCell>
                        <TableCell className="text-foreground w-[150px]">
                          <div className="text-sm">{cluster.name}</div>
                        </TableCell>
                        <TableCell className="text-foreground w-[80px]">
                          <div className="text-sm">{cluster.version}</div>
                        </TableCell>
                        <TableCell className="text-foreground w-[200px]">
                          <div className="text-sm">Table Cell Text</div>
                        </TableCell>
                        <TableCell className="text-foreground relative z-50 w-[200px]">
                          <PodStatusChart podStatus={cluster.podStatus} />
                        </TableCell>
                        <TableCell className="text-foreground w-[80px] text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 rounded-lg p-2"
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
                className="h-9 rounded-lg px-4 py-2 text-sm"
              >
                Get help
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>
    );
  },
};

"use client";

import React from "react";
import {
  Search,
  ChevronDown,
  EllipsisVertical,
  BadgeCheck,
  ChevronsRight,
  ExternalLink,
} from "lucide-react";
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
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

/**
 * 🎯 목적: CommonTable 테이블 행 데이터 타입 정의
 */
interface TableRowData {
  id: string;
  checked: boolean;
  column2: string;
  column3: string;
  column4: { text: string; href?: string };
  column5: {
    text: string;
    variant: "default" | "secondary" | "outline" | "verified";
  };
  column6: string;
  column7: boolean; // EllipsisVertical 아이콘 버튼 표시 여부
}

/**
 * 🎯 목적: 테이블 샘플 데이터 - UIDL 명세에 따른 6개 행 구성
 */
const tableData: TableRowData[] = [
  {
    id: "1",
    checked: false,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Badge", variant: "default" },
    column6: "Cell Text",
    column7: true,
  },
  {
    id: "2",
    checked: true,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Badge", variant: "secondary" },
    column6: "Cell Text",
    column7: true,
  },
  {
    id: "3",
    checked: false,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Verified", variant: "verified" },
    column6: "Cell Text",
    column7: true,
  },
  {
    id: "4",
    checked: true,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Badge", variant: "default" },
    column6: "Cell Text",
    column7: true,
  },
  {
    id: "5",
    checked: false,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Badge", variant: "secondary" },
    column6: "Cell Text",
    column7: true,
  },
  {
    id: "6",
    checked: false,
    column2: "Cell Text",
    column3: "Cell Text",
    column4: { text: "Link Button", href: "#" },
    column5: { text: "Verified", variant: "verified" },
    column6: "Cell Text",
    column7: true,
  },
];

/**
 * 🎯 목적: CommonTable 컴포넌트 Props 타입
 */
interface CommonTableProps {
  className?: string;
  showChart?: boolean; // 🎯 목적: 속성 패널에 차트 표시 여부
}

/**
 * 🎯 목적: Kubernetes 리소스를 위한 공통 테이블 컴포넌트
 *
 * 구성 요소:
 * - 상단 메뉴 (메뉴명, 네임스페이스 드롭다운, 검색 입력)
 * - 7개 열을 가진 데이터 테이블
 * - 헤더 행 (Head Text 레이블)
 * - 6개 데이터 행 (텍스트, 링크, 뱃지, 액션 버튼 포함)
 */
export function CommonTable({
  className,
  showChart = false,
}: CommonTableProps) {
  const [selectedNamespace, setSelectedNamespace] = React.useState("default");
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState(tableData);
  const [isPropertiesOpen, setIsPropertiesOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [selectedRowData, setSelectedRowData] =
    React.useState<TableRowData | null>(null);
  const [selectedRowId, setSelectedRowId] = React.useState<string | null>(null);

  // 🎯 목적: 차트 관련 상태 (showChart가 true일 때만 사용)
  const [selectedMetric, setSelectedMetric] = React.useState("cpu");

  // 🎯 목적: 차트 데이터 정의 (CPU/Memory 메트릭)
  const chartData = [
    { month: "Jan", usage: 200 },
    { month: "Feb", usage: 300 },
    { month: "Mar", usage: 250 },
    { month: "Apr", usage: 80 },
    { month: "May", usage: 200 },
    { month: "Jun", usage: 220 },
  ];

  // 🎯 목적: 차트 설정 (공식 shadcn/ui 스타일)
  const chartConfig = {
    usage: {
      label: selectedMetric === "cpu" ? "CPU Usage" : "Memory Usage",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  /**
   * 🎯 목적: 명시적 패널 닫기 함수 (닫기 버튼 클릭 시에만 사용)
   * 애니메이션 완료 후 실제 닫기 처리
   */
  const handleExplicitClose = () => {
    setIsAnimating(true);
    // 300ms 후 실제 닫기 (닫기 애니메이션 duration과 동일)
    setTimeout(() => {
      setIsPropertiesOpen(false);
      setIsAnimating(false);
      setSelectedRowData(null);
      setSelectedRowId(null);
    }, 300);
  };

  /**
   * 🎯 목적: 개별 체크박스 상태 변경 처리
   */
  const handleRowCheckChange = (id: string, checked: boolean) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, checked } : row)),
    );
  };

  /**
   * 🎯 목적: 전체 선택/해제 처리
   */
  const handleSelectAll = (checked: boolean) => {
    setData((prev) => prev.map((row) => ({ ...row, checked })));
  };

  /**
   * 🎯 목적: 현재 선택된 행 개수 계산
   */
  const selectedCount = data.filter((row) => row.checked).length;
  const isAllSelected = selectedCount === data.length;
  const isIndeterminate = selectedCount > 0 && selectedCount < data.length;

  /**
   * 🎯 목적: 테이블 행 클릭 시 속성창 열기/닫기 및 선택된 행 표시
   * - 새로운 행 클릭: 패널 열기 또는 데이터 업데이트
   * - 같은 행 재클릭: 패널 닫기 (토글 동작)
   */
  const handleRowClick = (e: React.MouseEvent, rowData: TableRowData) => {
    e.stopPropagation(); // 이벤트 전파 차단

    // 이미 선택된 행을 다시 클릭한 경우 패널 닫기
    if (isPropertiesOpen && selectedRowId === rowData.id) {
      handleExplicitClose();
      console.log("Panel closed by re-clicking selected row:", rowData.id);
      return;
    }

    // 패널이 이미 열려있고 다른 행을 클릭한 경우 데이터만 업데이트
    if (isPropertiesOpen) {
      setSelectedRowData(rowData);
      setSelectedRowId(rowData.id);
      console.log("Row data updated:", rowData);
      return;
    }

    // 패널이 닫혀있으면 데이터 설정 후 열기
    setSelectedRowData(rowData);
    setSelectedRowId(rowData.id);
    setIsPropertiesOpen(true);
    console.log("Panel opened with data:", rowData);
  };

  return (
    <div
      className={`relative flex h-screen w-full flex-col ${className || ""}`}
    >
      {/* 전체 콘텐츠 영역 - gap-5 패딩 */}
      <div className="flex-1 p-5">
        <div className="space-y-0.5">
          {/* 상단 메뉴 섹션 */}
          <div className="flex items-center justify-between gap-4">
            {/* 왼쪽: 메뉴 이름과 아이템 개수 */}
            <div className="flex items-center gap-1">
              <h2 className="text-foreground text-lg font-semibold">{`{Menuname}`}</h2>
              <span className="text-muted-foreground text-base font-light">
                ({data.length})
              </span>
            </div>

            {/* 오른쪽: 네임스페이스 드롭다운과 검색 */}
            <div className="flex items-center gap-2">
              {/* 네임스페이스 드롭다운 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() => console.log("Dropdown trigger clicked")}
                  >
                    Namespace: {selectedNamespace}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>All Namespaces</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedNamespace === "default"}
                    onCheckedChange={() => {
                      console.log("Default clicked");
                      setSelectedNamespace("default");
                    }}
                  >
                    default
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedNamespace === "cilium-secrets"}
                    onCheckedChange={() => {
                      console.log("cilium-secrets clicked");
                      setSelectedNamespace("cilium-secrets");
                    }}
                  >
                    cilium-secrets
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedNamespace === "kube-node-lease"}
                    onCheckedChange={() => {
                      console.log("kube-node-lease clicked");
                      setSelectedNamespace("kube-node-lease");
                    }}
                  >
                    kube-node-lease
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedNamespace === "kube-public"}
                    onCheckedChange={() => {
                      console.log("kube-public clicked");
                      setSelectedNamespace("kube-public");
                    }}
                  >
                    kube-public
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* 검색 입력 */}
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-[373px] pl-9"
                />
              </div>
            </div>
          </div>

          {/* 테이블 섹션 - header와 gap-4 간격 */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={isIndeterminate ? "indeterminate" : isAllSelected}
                    onCheckedChange={handleSelectAll}
                    aria-label="전체 선택"
                  />
                </TableHead>
                <TableHead>Head Text</TableHead>
                <TableHead>Head Text</TableHead>
                <TableHead>Head Text</TableHead>
                <TableHead>Head Text</TableHead>
                <TableHead>Head Text</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => {
                const isSelected = selectedRowId === row.id;
                return (
                  <TableRow
                    key={row.id}
                    data-table-row
                    className={`cursor-pointer border-l-2 transition-colors ${
                      isSelected
                        ? "bg-muted/50 border-l-primary"
                        : "hover:bg-muted/50 border-l-transparent"
                    }`}
                    onClick={(e) => handleRowClick(e, row)}
                  >
                    <TableCell>
                      <Checkbox
                        checked={row.checked}
                        onCheckedChange={(checked) =>
                          handleRowCheckChange(row.id, !!checked)
                        }
                        aria-label={`행 ${row.id} 선택`}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                    <TableCell>{row.column2}</TableCell>
                    <TableCell>{row.column3}</TableCell>
                    <TableCell>
                      <Button
                        variant="link"
                        className="text-primary h-auto p-0"
                      >
                        {row.column4.text}
                      </Button>
                    </TableCell>
                    <TableCell>
                      {row.column5.variant === "verified" ? (
                        <Badge
                          variant="secondary"
                          className="bg-blue-500 text-white dark:bg-blue-600"
                        >
                          <BadgeCheck className="h-3 w-3" />
                          {row.column5.text}
                        </Badge>
                      ) : (
                        <Badge
                          variant={
                            row.column5.variant as
                              | "default"
                              | "secondary"
                              | "outline"
                          }
                        >
                          {row.column5.text}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{row.column6}</TableCell>
                    <TableCell className="text-right">
                      {row.column7 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          aria-label="행 옵션"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EllipsisVertical className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 속성창 패널 - Sheet 대신 직접 구현 */}
      {(isPropertiesOpen || isAnimating) && (
        <div
          className={`bg-card fixed inset-y-0 right-0 z-50 flex h-full w-[700px] flex-col border-l shadow-lg transition ease-in-out ${
            isAnimating
              ? "animate-out slide-out-to-right duration-300"
              : "animate-in slide-in-from-right duration-[400ms]"
          }`}
        >
          {/* 고정 헤더 영역 */}
          <div className="flex-shrink-0 p-5 pb-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Button
                  variant="secondary"
                  size="icon-sm"
                  onClick={handleExplicitClose}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon-sm">
                  <EllipsisVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-muted-foreground text-sm leading-5">
                  {`{Menuname}`}
                </span>
                <h2 className="text-lg font-semibold">
                  {selectedRowData
                    ? `${selectedRowData.column2} (Row ${selectedRowData.id})`
                    : "Properties"}
                </h2>
              </div>
            </div>
          </div>

          {/* 스크롤 가능한 콘텐츠 영역 */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {/* 🎯 목적: 차트 영역 (showChart가 true일 때만 표시) */}
            {showChart && (
              <div className="space-y-6">
                {/* 토글 그룹 (Figma 설정에 따른 shadcn/ui ToggleGroup) */}
                <div className="flex justify-center">
                  <ToggleGroup
                    type="single"
                    value={selectedMetric}
                    onValueChange={(value) => value && setSelectedMetric(value)}
                    variant="outline"
                    size="default"
                    className="w-[280px]"
                  >
                    <ToggleGroupItem value="cpu" aria-label="CPU">
                      CPU
                    </ToggleGroupItem>
                    <ToggleGroupItem value="memory" aria-label="Memory">
                      Memory
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                {/* 차트 영역 */}
                <div className="h-[240px] w-full">
                  <ChartContainer
                    config={chartConfig}
                    className="h-full w-full"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <AreaChart
                      accessibilityLayer
                      data={chartData}
                      margin={{
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        width={40}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Area
                        dataKey="usage"
                        type="step"
                        fill="var(--color-usage)"
                        fillOpacity={0.4}
                        stroke="var(--color-usage)"
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
            )}
            {/* 속성 테이블 - UIDL 명세에 따른 Table 컴포넌트 사용 */}
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Created</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">
                      19d 4h 36m ago (2025-10-01T09:24:39+09:00)
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Name</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">
                      {selectedRowData
                        ? selectedRowData.column3
                        : "ciliumcidrgroups.cilium.io"}
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Labels</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <Badge
                      variant="outline"
                      className="bg-background border-border text-xs font-semibold"
                    >
                      {selectedRowData
                        ? `column5=${selectedRowData.column5.text}`
                        : "io.cilium.k8s.crd.schema.version=1.31.11"}
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Annotations</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <Badge
                      variant="outline"
                      className="bg-background border-border text-xs font-semibold"
                    >
                      freelens.app/resource-version=v1
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Resource</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-2">
                    <Button
                      variant="ghost"
                      className="text-foreground/80 hover:text-foreground h-8 px-3 text-sm font-medium underline"
                    >
                      Ciliumendpoints
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Conversion</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-1.5">
                    <Input
                      placeholder='{"strategy": "None"}'
                      className="text-muted-foreground bg-muted/50 h-9 font-mono text-sm"
                      readOnly
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <span className="text-foreground text-sm">Conditions</span>
                  </TableCell>
                  <TableCell className="border-border border-b px-2 py-[14px]">
                    <Badge className="bg-primary text-primary-foreground border-0 text-xs font-semibold">
                      NamesAccepted
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* Validation 섹션 - UIDL 명세에 따른 코드 블록 */}
            <div className="mt-8 flex flex-col gap-4">
              <span className="text-foreground text-base leading-none font-medium">
                Validation
              </span>
              <div className="bg-muted/30 flex w-full flex-col items-center justify-center rounded-[10px] border p-4">
                <div className="text-muted-foreground w-full text-left font-mono text-base leading-6">
                  <div>
                    import &#123; Button &#125; from
                    &quot;@/components/ui/button&quot;
                  </div>
                  <br />
                  <br />
                  <div>
                    export function{" "}
                    <span className="font-bold">ButtonOutline</span>() &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;return &lt;Button
                    variant=&quot;outline&quot;&gt;Outline&lt;/Button&gt;
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </div>

          {/* 고정 푸터 영역 */}
          <div className="bg-card flex-shrink-0 p-4">
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={handleExplicitClose}>
                Cancel
              </Button>
              <Button disabled>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

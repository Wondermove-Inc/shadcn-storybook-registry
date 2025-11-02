"use client";

import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { RadialBar, RadialBarChart } from "recharts";
import { TriangleAlert, BadgeCheck } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

/**
 * 🎯 목적: ChartData 컴포넌트 Props 타입 정의
 * 스크린샷 기반 다크 테마 대시보드 컴포넌트
 */
interface ChartDataProps {
  className?: string;
  variant?: "default" | "no-data";
}

/**
 * 🎯 목적: 시간별 사용량 데이터 (JSON UIDL 기반)
 */
const hourlyData = [
  { hour: "15:00", value: 953.7 },
  { hour: "16:00", value: 1600 },
  { hour: "17:00", value: 2800 },
  { hour: "18:00", value: 1800 },
  { hour: "19:00", value: 1200 },
  { hour: "20:00", value: 1600 },
];

/**
 * 🎯 목적: CPU 사용량 데이터 (Simple Radial Chart 형식)
 */
const cpuData = [
  { metric: "usage", value: 0.06, fill: "var(--color-usage)" },
  { metric: "requests", value: 1.1, fill: "var(--color-requests)" },
  { metric: "limits", value: 0.2, fill: "var(--color-limits)" },
  { metric: "allocatable", value: 4.0, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 4.0, fill: "var(--color-capacity)" },
];

/**
 * 🎯 목적: Memory 사용량 데이터 (Simple Radial Chart 형식)
 */
const memoryData = [
  { metric: "usage", value: 1.3, fill: "var(--color-usage)" },
  { metric: "requests", value: 304.0, fill: "var(--color-requests)" },
  { metric: "limits", value: 468.0, fill: "var(--color-limits)" },
  { metric: "allocatable", value: 3700, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 3800, fill: "var(--color-capacity)" },
];

/**
 * 🎯 목적: Pods 데이터 (Simple Radial Chart 형식)
 */
const podsData = [
  { metric: "usage", value: 15, fill: "var(--color-usage)" },
  { metric: "allocatable", value: 110, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 110, fill: "var(--color-capacity)" },
];

/**
 * 🎯 목적: 경고 테이블 데이터
 */
const warningData = [
  {
    id: "1",
    col1: "Table Cell Text",
    col2: "Table Cell Text",
    col3: "Table Cell Text",
    col4: "Table Cell Text",
    badge: "Badge",
  },
  {
    id: "2",
    col1: "Table Cell Text",
    col2: "Table Cell Text",
    col3: "Table Cell Text",
    col4: "Table Cell Text",
    badge: "Badge",
  },
  {
    id: "3",
    col1: "Table Cell Text",
    col2: "Table Cell Text",
    col3: "Table Cell Text",
    col4: "Table Cell Text",
    badge: "Badge",
  },
  {
    id: "4",
    col1: "Table Cell Text",
    col2: "Table Cell Text",
    col3: "Table Cell Text",
    col4: "Table Cell Text",
    badge: "Verified",
    isVerified: true,
  },
  {
    id: "5",
    col1: "Table Cell Text",
    col2: "Table Cell Text",
    col3: "Table Cell Text",
    col4: "Table Cell Text",
    badge: "Verified",
    isVerified: true,
  },
];

/**
 * 🎯 목적: No Data 상태용 빈 데이터
 */
const noDataHourlyData = [
  { hour: "15:00", value: 0 },
  { hour: "16:00", value: 0 },
  { hour: "17:00", value: 0 },
  { hour: "18:00", value: 0 },
  { hour: "19:00", value: 0 },
  { hour: "20:00", value: 0 },
];

const noDataCpuData = [
  { metric: "usage", value: 0, fill: "var(--color-usage)" },
  { metric: "requests", value: 0, fill: "var(--color-requests)" },
  { metric: "limits", value: 0, fill: "var(--color-limits)" },
  { metric: "allocatable", value: 0, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 0, fill: "var(--color-capacity)" },
];

const noDataMemoryData = [
  { metric: "usage", value: 0, fill: "var(--color-usage)" },
  { metric: "requests", value: 0, fill: "var(--color-requests)" },
  { metric: "limits", value: 0, fill: "var(--color-limits)" },
  { metric: "allocatable", value: 0, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 0, fill: "var(--color-capacity)" },
];

const noDataPodsData = [
  { metric: "usage", value: 0, fill: "var(--color-usage)" },
  { metric: "allocatable", value: 0, fill: "var(--color-allocatable)" },
  { metric: "capacity", value: 0, fill: "var(--color-capacity)" },
];

/**
 * 차트와 테이블 조합의 모니터링 차트데이터 입니다.
 */
export function ChartData({ className, variant = "default" }: ChartDataProps) {
  const [selectedNode, setSelectedNode] = React.useState("master");
  const [selectedMetric, setSelectedMetric] = React.useState("cpu");

  // 🎯 목적: variant에 따라 다른 데이터 선택
  const currentHourlyData =
    variant === "no-data" ? noDataHourlyData : hourlyData;
  const currentCpuData = variant === "no-data" ? noDataCpuData : cpuData;
  const currentMemoryData =
    variant === "no-data" ? noDataMemoryData : memoryData;
  const currentPodsData = variant === "no-data" ? noDataPodsData : podsData;

  // 🎯 목적: variant에 따라 '--' 또는 실제 값 표시
  const formatValue = (value: string | number) => {
    return variant === "no-data" ? "--" : value;
  };

  // 🎯 목적: 시간별 사용량 차트 설정
  const hourlyChartConfig = {
    hourly: {
      label: "Hourly Usage",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  // 🎯 목적: CPU Radial 차트 설정
  const cpuChartConfig = {
    value: {
      label: "CPU Value",
    },
    usage: {
      label: "Usage",
      color: "var(--chart-1)",
    },
    requests: {
      label: "Requests",
      color: "var(--chart-2)",
    },
    limits: {
      label: "Limits",
      color: "var(--chart-3)",
    },
    allocatable: {
      label: "Allocatable",
      color: "var(--chart-4)",
    },
    capacity: {
      label: "Capacity",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  // 🎯 목적: Memory Radial 차트 설정
  const memoryChartConfig = {
    value: {
      label: "Memory Value",
    },
    usage: {
      label: "Usage",
      color: "var(--chart-1)",
    },
    requests: {
      label: "Requests",
      color: "var(--chart-2)",
    },
    limits: {
      label: "Limits",
      color: "var(--chart-3)",
    },
    allocatable: {
      label: "Allocatable",
      color: "var(--chart-4)",
    },
    capacity: {
      label: "Capacity",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  // 🎯 목적: Pods Radial 차트 설정
  const podsChartConfig = {
    value: {
      label: "Pods Value",
    },
    usage: {
      label: "Usage",
      color: "var(--chart-1)",
    },
    allocatable: {
      label: "Allocatable",
      color: "var(--chart-2)",
    },
    capacity: {
      label: "Capacity",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig;

  return (
    <div className={`bg-background min-h-screen w-full p-5 ${className || ""}`}>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
        {/* 헤더와 차트 영역 */}
        <div className="flex flex-col gap-3">
          {/* 헤더 영역 */}
          <div className="flex items-center justify-between">
            <h1 className="text-foreground text-lg leading-none font-normal">
              {"{Menuname}"}
            </h1>

            {/* Master/Worker 노드 토글 */}
            <ToggleGroup
              type="single"
              value={selectedNode}
              onValueChange={(value) => value && setSelectedNode(value)}
              variant="outline"
              size="default"
              className="w-[360px]"
            >
              <ToggleGroupItem value="master" aria-label="Master Nodes">
                Master Nodes
              </ToggleGroupItem>
              <ToggleGroupItem value="worker" aria-label="Worker Nodes">
                Worker Nodes
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* 차트 영역 - 반응형 레이아웃 (900px 이하에서 세로 정렬) */}
          <div className="border-input flex flex-col rounded-md border lg:flex-row">
            {/* 왼쪽: 시간별 사용량 차트 */}
            <div className="border-input flex min-w-0 flex-1 flex-col items-start gap-4 border-b bg-transparent p-4 lg:border-r lg:border-b-0">
              {/* 제목과 토글 영역 */}
              <div className="flex items-center justify-between gap-5 self-stretch">
                <h3 className="text-foreground text-sm leading-none font-medium">
                  Hourly usage
                </h3>

                {/* CPU/Memory 토글 - shadcn/ui ToggleGroup */}
                <ToggleGroup
                  type="single"
                  value={selectedMetric}
                  onValueChange={(value) => value && setSelectedMetric(value)}
                  variant="outline"
                  size="sm"
                  className="w-[160px]"
                >
                  <ToggleGroupItem
                    value="cpu"
                    aria-label="CPU"
                    className="flex-1"
                  >
                    CPU
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="memory"
                    aria-label="Memory"
                    className="flex-1"
                  >
                    Memory
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* 차트 래퍼 */}
              <div className="flex flex-grow flex-col items-start gap-2.5 self-stretch">
                <ChartContainer
                  config={hourlyChartConfig}
                  className="h-[340px] w-full"
                >
                  <AreaChart
                    accessibilityLayer
                    data={currentHourlyData}
                    margin={{
                      left: 6,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="hour"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => {
                        if (value >= 1000) {
                          return `${(value / 1000).toFixed(1)}GiB`;
                        }
                        return `${value}MiB`;
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Area
                      dataKey="value"
                      type="step"
                      fill="var(--color-hourly)"
                      fillOpacity={0.4}
                      stroke="var(--color-hourly)"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>

            {/* 오른쪽: Usage Type Distribution Chart */}
            <div className="flex min-w-0 flex-1 flex-col items-start gap-2 self-stretch p-4">
              {/* 제목 */}
              <div className="flex h-8 items-center gap-2.5 self-stretch">
                <h3 className="text-foreground text-sm leading-none font-medium">
                  Usage Type Distribution Chart
                </h3>
              </div>

              {/* 카드들 */}
              <div className="flex min-w-0 flex-1 items-stretch gap-4 self-stretch">
                {/* CPU Card */}
                <Card className="bg-background flex min-w-0 flex-1 flex-col gap-1 rounded-md p-3">
                  <CardHeader className="items-center gap-0 p-0">
                    <CardTitle className="text-base">CPU</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 pb-2">
                    <ChartContainer
                      config={cpuChartConfig}
                      className="mx-auto aspect-square max-h-[120px]"
                    >
                      <RadialBarChart
                        data={currentCpuData}
                        innerRadius={20}
                        outerRadius={50}
                      >
                        <ChartTooltip
                          cursor={false}
                          content={
                            <ChartTooltipContent hideLabel nameKey="metric" />
                          }
                        />
                        <RadialBar dataKey="value" background />
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ItemGroup className="w-full gap-0.5">
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-1 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Usage: {formatValue("0.06")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-2 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Requests: {formatValue("1.10")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-3 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Limits: {formatValue("0.20")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-4 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Allocatable Capacity: {formatValue("4.00")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-5 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Capacity: {formatValue("4.00")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                    </ItemGroup>
                  </CardFooter>
                </Card>

                {/* Memory Card */}
                <Card className="bg-background flex min-w-0 flex-1 flex-col gap-1 rounded-md p-3">
                  <CardHeader className="items-center gap-0 p-0">
                    <CardTitle className="text-base">Memory</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 pb-2">
                    <ChartContainer
                      config={memoryChartConfig}
                      className="mx-auto aspect-square max-h-[120px]"
                    >
                      <RadialBarChart
                        data={currentMemoryData}
                        innerRadius={20}
                        outerRadius={50}
                      >
                        <ChartTooltip
                          cursor={false}
                          content={
                            <ChartTooltipContent hideLabel nameKey="metric" />
                          }
                        />
                        <RadialBar dataKey="value" background />
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ItemGroup className="w-full gap-0.5">
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-1 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Usage: {formatValue("1.3GiB")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-2 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Requests: {formatValue("304.0MiB")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-3 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Limits: {formatValue("468.0MiB")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-4 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Allocatable Capacity: {formatValue("3.7GiB")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-5 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Capacity: {formatValue("3.8GiB")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                    </ItemGroup>
                  </CardFooter>
                </Card>

                {/* Pods Card */}
                <Card className="bg-background flex min-w-0 flex-1 flex-col gap-1 rounded-md p-3">
                  <CardHeader className="items-center gap-0 p-0">
                    <CardTitle className="text-base">Pods</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 pb-2">
                    <ChartContainer
                      config={podsChartConfig}
                      className="mx-auto aspect-square max-h-[120px]"
                    >
                      <RadialBarChart
                        data={currentPodsData}
                        innerRadius={20}
                        outerRadius={50}
                      >
                        <ChartTooltip
                          cursor={false}
                          content={
                            <ChartTooltipContent hideLabel nameKey="metric" />
                          }
                        />
                        <RadialBar dataKey="value" background />
                      </RadialBarChart>
                    </ChartContainer>
                  </CardContent>
                  <CardFooter className="p-0">
                    <ItemGroup className="w-full gap-0.5">
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-1 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Usage: {formatValue("15")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-2 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Allocatable: {formatValue("110")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="gap-1.5 px-0.5 py-0 text-sm">
                        <ItemMedia variant="icon" className="h-2 w-2">
                          <div className="bg-chart-3 h-1 w-1 rounded-full" />
                        </ItemMedia>
                        <ItemContent>
                          <ItemTitle className="text-muted-foreground text-sm leading-normal font-normal">
                            Capacity: {formatValue("110")}
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                    </ItemGroup>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* 경고 테이블 */}
        <div className="flex flex-1 flex-col items-start gap-1 self-stretch">
          {/* 헤더 */}
          <div className="flex items-center gap-1">
            <TriangleAlert className="h-4 w-4 text-amber-500" />
            <span className="text-lg leading-none font-normal text-amber-500">
              Warnings
            </span>
            <span className="text-muted-foreground text-base leading-6 font-light">
              (3)
            </span>
          </div>

          {/* 테이블 */}
          <div className="flex flex-col items-start self-stretch">
            <Table className="w-full table-fixed">
              <TableHeader>
                <TableRow className="border-border h-[40px]">
                  <TableHead className="text-foreground w-1/5 text-sm leading-5 font-medium">
                    Head Text
                  </TableHead>
                  <TableHead className="text-foreground w-1/5 text-sm leading-5 font-medium">
                    Head Text
                  </TableHead>
                  <TableHead className="text-foreground w-1/5 text-sm leading-5 font-medium">
                    Head Text
                  </TableHead>
                  <TableHead className="text-foreground w-1/5 text-sm leading-5 font-medium">
                    Head Text
                  </TableHead>
                  <TableHead className="text-foreground w-1/5 text-sm leading-5 font-medium">
                    Head Text
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {warningData.map((row) => (
                  <TableRow key={row.id} className="border-border h-[52px]">
                    <TableCell className="text-foreground text-sm leading-5 font-normal">
                      {row.col1}
                    </TableCell>
                    <TableCell className="text-foreground text-sm leading-5 font-normal">
                      {row.col2}
                    </TableCell>
                    <TableCell className="text-foreground text-sm leading-5 font-normal">
                      {row.col3}
                    </TableCell>
                    <TableCell className="text-foreground text-sm leading-5 font-normal">
                      {row.col4}
                    </TableCell>
                    <TableCell>
                      {row.isVerified ? (
                        <Badge
                          variant="secondary"
                          className="bg-blue-500 text-white dark:bg-blue-600"
                        >
                          <BadgeCheck className="h-3 w-3" />
                          {row.badge}
                        </Badge>
                      ) : (
                        <Badge variant="default">{row.badge}</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Caption */}
          <div className="flex flex-shrink-0 items-center justify-center gap-2.5 self-stretch pt-4">
            <span className="text-muted-foreground flex-1 text-center text-sm leading-5 font-normal">
              Caption text
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

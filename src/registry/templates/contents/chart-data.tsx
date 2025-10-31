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
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { RadialBar, RadialBarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { TriangleAlert, BadgeCheck } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

/**
 * 🎯 목적: ChartData 컴포넌트 Props 타입 정의
 * 스크린샷 기반 다크 테마 대시보드 컴포넌트
 */
interface ChartDataProps {
  className?: string;
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
 * 🎯 목적: CPU 사용량 데이터
 */
const cpuData = [
  { name: "Usage", value: 0.06, fill: "#3b82f6" },
  { name: "Requests", value: 1.1, fill: "#60a5fa" },
  { name: "Limits", value: 0.2, fill: "#93bbfc" },
  { name: "Allocatable", value: 4.0, fill: "#dbeafe" },
];

/**
 * 🎯 목적: Memory 사용량 데이터
 */
const memoryData = [
  { name: "Usage", value: 1.3, fill: "#8b5cf6" },
  { name: "Requests", value: 304.0, fill: "#a78bfa" },
  { name: "Limits", value: 468.0, fill: "#c4b5fd" },
  { name: "Allocatable", value: 3700, fill: "#e9d5ff" },
];

/**
 * 🎯 목적: Pods 데이터
 */
const podsData = [
  { name: "Usage", value: 15, fill: "#ec4899" },
  { name: "Allocatable", value: 110, fill: "#f9a8d4" },
  { name: "Capacity", value: 110, fill: "#fce7f3" },
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
 * 차트와 테이블 조합의 모니터링 차트데이터 입니다.
 */
export function ChartData({ className }: ChartDataProps) {
  const [selectedNode, setSelectedNode] = React.useState("master");
  const [selectedMetric, setSelectedMetric] = React.useState("cpu");

  // 🎯 목적: 시간별 사용량 차트 설정
  const hourlyChartConfig = {
    hourly: {
      label: "Hourly Usage",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  // 🎯 목적: Radial 차트 설정
  const radialChartConfig = {
    value: {
      label: "Usage",
    },
  } satisfies ChartConfig;

  return (
    <div className={`bg-background min-h-screen w-full p-5 ${className || ""}`}>
      <div className="mx-auto max-w-[1400px] space-y-5">
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

        {/* 차트 영역 - 1단 레이아웃 */}
        <div className="border-input flex gap-6 rounded-md border">
          {/* 왼쪽: 시간별 사용량 차트 */}
          <div className="border-input flex flex-1 flex-col items-start gap-4 border-r bg-transparent p-4">
            {/* 제목과 토글 영역 */}
            <div className="flex items-center justify-between gap-5 self-stretch">
              <h3 className="text-foreground text-lg leading-none font-normal">
                Hourly usage
              </h3>

              {/* CPU/Memory 토글 - shadcn/ui ToggleGroup */}
              <ToggleGroup
                type="single"
                value={selectedMetric}
                onValueChange={(value) => value && setSelectedMetric(value)}
                variant="outline"
                size="sm"
                className="w-[200px]"
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
                  data={hourlyData}
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
          <div className="flex flex-1 flex-col items-start gap-4 self-stretch p-4">
            {/* 제목 */}
            <div className="flex items-center gap-2.5 self-stretch">
              <h3 className="text-foreground text-lg leading-none font-normal">
                Usage Type Distribution Chart
              </h3>
            </div>

            {/* 카드들 */}
            <div className="flex flex-1 items-start gap-4 self-stretch">
              {/* CPU Card */}
              <div className="flex flex-1 flex-col items-start gap-5 self-stretch overflow-hidden rounded-lg border border-[#e5e5e5] p-5 shadow-sm">
                <h4 className="text-base leading-none font-semibold text-[#fafafa]">
                  CPU
                </h4>
                <ChartContainer
                  config={radialChartConfig}
                  className="mx-auto h-[122px] w-[122px]"
                >
                  <RadialBarChart
                    data={cpuData}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={30}
                    outerRadius={60}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-gray-200 last:fill-transparent"
                      polarRadius={[55, 45, 35, 25]}
                    />
                    <RadialBar
                      dataKey="value"
                      cornerRadius={5}
                      fill="currentColor"
                    />
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 4]}
                      angleAxisId={0}
                      tick={false}
                    />
                  </RadialBarChart>
                </ChartContainer>
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Usages: 0.06
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Requests: 1.10
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Limits: 0.20
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Allocatable Capacity: 4.00
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Capacity: 4.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Memory Card */}
              <div className="flex flex-1 flex-col items-start gap-5 self-stretch overflow-hidden rounded-lg border border-[#e5e5e5] p-5 shadow-sm">
                <h4 className="text-base leading-none font-semibold text-[#fafafa]">
                  Memory
                </h4>
                <ChartContainer
                  config={radialChartConfig}
                  className="mx-auto h-[122px] w-[122px]"
                >
                  <RadialBarChart
                    data={memoryData}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={30}
                    outerRadius={60}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-gray-200 last:fill-transparent"
                      polarRadius={[55, 45, 35, 25]}
                    />
                    <RadialBar
                      dataKey="value"
                      cornerRadius={5}
                      fill="currentColor"
                    />
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 3700]}
                      angleAxisId={0}
                      tick={false}
                    />
                  </RadialBarChart>
                </ChartContainer>
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Usages: 1.3GiB
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Requests: 304.0MiB
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Limits: 468.0MiB
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Allocatable Capacity: 3.7GiB
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Capacity: 3.8GiB
                    </p>
                  </div>
                </div>
              </div>

              {/* Pods Card */}
              <div className="flex flex-1 flex-col items-start gap-5 self-stretch overflow-hidden rounded-lg border border-[#e5e5e5] p-5 shadow-sm">
                <h4 className="text-base leading-none font-semibold text-[#fafafa]">
                  Pods
                </h4>
                <ChartContainer
                  config={radialChartConfig}
                  className="mx-auto h-[122px] w-[122px]"
                >
                  <RadialBarChart
                    data={podsData}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={30}
                    outerRadius={60}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-gray-200 last:fill-transparent"
                      polarRadius={[55, 35, 25]}
                    />
                    <RadialBar
                      dataKey="value"
                      cornerRadius={5}
                      fill="currentColor"
                    />
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 110]}
                      angleAxisId={0}
                      tick={false}
                    />
                  </RadialBarChart>
                </ChartContainer>
                <div className="flex flex-col items-start self-stretch">
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Usages: 15
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Allocatable Capacity: 110
                    </p>
                  </div>
                  <div className="flex items-start gap-1 px-4 py-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border-2 border-[#fafafa]"></div>
                    </div>
                    <p className="flex-1 text-sm leading-5 text-[#a3a3a3]">
                      Capacity: 110
                    </p>
                  </div>
                </div>
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
                <TableRow className="border-border">
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
                  <TableRow key={row.id} className="border-border">
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

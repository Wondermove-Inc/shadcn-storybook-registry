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
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartConfig } from "@/components/ui/chart";
import { RadialBar, RadialBarChart, PolarGrid, PolarAngleAxis } from "recharts";
import { TriangleAlert } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

/**
 * 🎯 목적: ChartData 컴포넌트 Props 타입 정의
 * 스크린샷 기반 다크 테마 대시보드 컴포넌트
 */
interface ChartDataProps {
  className?: string;
}

/**
 * 🎯 목적: 시간별 사용량 데이터
 */
const hourlyData = [
  { hour: "15:00", value: 186 },
  { hour: "16:00", value: 305 },
  { hour: "17:00", value: 237 },
  { hour: "18:00", value: 73 },
  { hour: "19:00", value: 209 },
  { hour: "20:00", value: 214 },
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
 * 🎯 목적: 스크린샷 기반 차트 데이터 대시보드 컴포넌트
 *
 * 구조:
 * - 상단: Master/Worker 노드 토글
 * - 왼쪽: 시간별 사용량 바 차트 + CPU/Memory 토글
 * - 오른쪽: 3개의 Radial 차트 (CPU, Memory, Pods)
 * - 하단: 경고 테이블
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
    <div className={`min-h-screen w-full bg-black p-5 ${className || ""}`}>
      <div className="mx-auto max-w-[1400px] space-y-6">
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
        <div className="flex gap-6">
          {/* 왼쪽: 시간별 사용량 차트 */}
          <div className="flex flex-grow flex-col items-start gap-4 border-r border-white/15 bg-transparent p-4">
            {/* 제목과 토글 영역 */}
            <div className="flex items-center justify-between gap-5 self-stretch">
              <h3 className="text-lg leading-none font-normal text-[#e5e5e5]">
                Hourly usage
              </h3>

              {/* CPU/Memory 토글 - 커스텀 스타일 */}
              <div className="flex w-[200px] items-center">
                <div className="flex w-full">
                  <button
                    onClick={() => setSelectedMetric("cpu")}
                    className={`flex h-8 flex-grow items-center justify-center gap-2 rounded-l-lg border border-white/15 px-1.5 py-2.5 text-sm leading-5 font-medium shadow-sm ${
                      selectedMetric === "cpu"
                        ? "bg-gray-600 text-white"
                        : "bg-gray-600 text-white hover:bg-gray-500"
                    } `}
                  >
                    CPU
                  </button>
                  <button
                    onClick={() => setSelectedMetric("memory")}
                    className={`flex h-8 flex-grow items-center justify-center gap-2 rounded-r-lg border-t border-r border-b border-white/15 px-1.5 py-2.5 text-sm leading-5 font-medium shadow-sm ${
                      selectedMetric === "memory"
                        ? "bg-gray-600 text-white"
                        : "bg-gray-600 text-white hover:bg-gray-500"
                    } `}
                  >
                    Memory
                  </button>
                </div>
              </div>
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
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="hour"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 5)}
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
          <Card className="border-gray-800 bg-gray-900">
            <CardContent className="p-6">
              <h3 className="mb-6 text-base font-normal text-white">
                Usage Type Distribution Chart
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {/* CPU Chart */}
                <div className="text-center">
                  <h4 className="mb-4 text-sm font-normal text-white">CPU</h4>
                  <ChartContainer
                    config={radialChartConfig}
                    className="mx-auto h-[200px] w-[200px]"
                  >
                    <RadialBarChart
                      data={cpuData}
                      startAngle={90}
                      endAngle={-270}
                      innerRadius={30}
                      outerRadius={90}
                    >
                      <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-gray-800 last:fill-transparent"
                        polarRadius={[86, 74, 62, 50, 38]}
                      />
                      <RadialBar
                        dataKey="value"
                        cornerRadius={10}
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
                  <div className="mt-4 space-y-1 text-left text-xs text-gray-400">
                    <p>• Usages: 0.06</p>
                    <p>• Requests: 1.10</p>
                    <p>• Limits: 0.20</p>
                    <p>• Allocatable Capacity: 4.00</p>
                    <p>• Capacity: 4.00</p>
                  </div>
                </div>

                {/* Memory Chart */}
                <div className="text-center">
                  <h4 className="mb-4 text-sm font-normal text-white">
                    Memory
                  </h4>
                  <ChartContainer
                    config={radialChartConfig}
                    className="mx-auto h-[200px] w-[200px]"
                  >
                    <RadialBarChart
                      data={memoryData}
                      startAngle={90}
                      endAngle={-270}
                      innerRadius={30}
                      outerRadius={90}
                    >
                      <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-gray-800 last:fill-transparent"
                        polarRadius={[86, 74, 62, 50, 38]}
                      />
                      <RadialBar
                        dataKey="value"
                        cornerRadius={10}
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
                  <div className="mt-4 space-y-1 text-left text-xs text-gray-400">
                    <p>• Usages: 1.3GiB</p>
                    <p>• Requests: 304.0MiB</p>
                    <p>• Limits: 468.0MiB</p>
                    <p>• Allocatable Capacity: 3.7GiB</p>
                    <p>• Capacity: 3.8GiB</p>
                  </div>
                </div>

                {/* Pods Chart */}
                <div className="text-center">
                  <h4 className="mb-4 text-sm font-normal text-white">Pods</h4>
                  <ChartContainer
                    config={radialChartConfig}
                    className="mx-auto h-[200px] w-[200px]"
                  >
                    <RadialBarChart
                      data={podsData}
                      startAngle={90}
                      endAngle={-270}
                      innerRadius={30}
                      outerRadius={90}
                    >
                      <PolarGrid
                        gridType="circle"
                        radialLines={false}
                        stroke="none"
                        className="first:fill-gray-800 last:fill-transparent"
                        polarRadius={[86, 62, 38]}
                      />
                      <RadialBar
                        dataKey="value"
                        cornerRadius={10}
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
                  <div className="mt-4 space-y-1 text-left text-xs text-gray-400">
                    <p>• Usages: 15</p>
                    <p>• Allocatable Capacity: 110</p>
                    <p>• Capacity: 110</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 경고 테이블 */}
        <Card className="border-gray-800 bg-gray-900">
          <CardContent className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <TriangleAlert className="h-5 w-5 text-yellow-500" />
              <h3 className="text-base font-normal text-yellow-500">
                Warnings (3)
              </h3>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">Head Text</TableHead>
                  <TableHead className="text-gray-400">Head Text</TableHead>
                  <TableHead className="text-gray-400">Head Text</TableHead>
                  <TableHead className="text-gray-400">Head Text</TableHead>
                  <TableHead className="text-gray-400">Head Text</TableHead>
                  <TableHead className="text-gray-400"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {warningData.map((row) => (
                  <TableRow key={row.id} className="border-gray-800">
                    <TableCell className="text-gray-300">{row.col1}</TableCell>
                    <TableCell className="text-gray-300">{row.col2}</TableCell>
                    <TableCell className="text-gray-300">{row.col3}</TableCell>
                    <TableCell className="text-gray-300">{row.col4}</TableCell>
                    <TableCell>
                      {row.isVerified ? (
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                          ✓ {row.badge}
                        </Badge>
                      ) : (
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-300"
                        >
                          {row.badge}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <button className="text-gray-400 hover:text-gray-200">
                        ⋮
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 text-center">
              <button className="text-sm text-gray-400 hover:text-gray-200">
                Caption text
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

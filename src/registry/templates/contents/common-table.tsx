"use client";

import React from "react";
import {
  Search,
  ChevronDown,
  EllipsisVertical,
  BadgeCheck,
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
 * 🎯 목적: 네임스페이스 드롭다운 옵션
 */
const namespaceOptions = [
  "default",
  "cilium-secrets",
  "kube-node-lease",
  "kube-public",
];

/**
 * 🎯 목적: CommonTable 컴포넌트 Props 타입
 */
interface CommonTableProps {
  className?: string;
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
export function CommonTable({ className }: CommonTableProps) {
  const [selectedNamespace, setSelectedNamespace] = React.useState("default");
  const [searchValue, setSearchValue] = React.useState("");
  const [data, setData] = React.useState(tableData);

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

  return (
    <div className={`flex h-screen w-full flex-col ${className || ""}`}>
      {/* 상단 메뉴 섹션 */}
      <div className="flex items-center justify-between gap-4 border-b p-4">
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

      {/* 테이블 섹션 */}
      <div className="flex-1 p-4">
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
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox
                    checked={row.checked}
                    onCheckedChange={(checked) =>
                      handleRowCheckChange(row.id, !!checked)
                    }
                    aria-label={`행 ${row.id} 선택`}
                  />
                </TableCell>
                <TableCell>{row.column2}</TableCell>
                <TableCell>{row.column3}</TableCell>
                <TableCell>
                  <Button variant="link" className="text-primary h-auto p-0">
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
                    <Button variant="ghost" size="sm" aria-label="행 옵션">
                      <EllipsisVertical className="h-4 w-4" />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

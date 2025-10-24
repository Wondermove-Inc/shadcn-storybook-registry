import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

/**
 * 🎯 목적: 시각적 또는 의미적으로 콘텐츠를 분리하는 구분선 컴포넌트
 *
 * ⚠️ 중요 - 세로 Separator 사용 시 주의사항:
 * - 부모 컨테이너에 반드시 명시적 높이(min-h-[Npx] 또는 h-[Npx])가 필요합니다
 * - Radix UI의 data-[orientation=vertical]:h-full CSS가 사용자 높이 설정을 덮어씁니다
 * - 백업으로 인라인 스타일 style={{ height: 'Npx', width: '1px' }}을 함께 사용하세요
 *
 * @example
 * // ✅ 올바른 세로 Separator 사용법
 * <div className="flex items-center gap-2 min-h-[40px]">
 *   <Button>이전</Button>
 *   <Separator
 *     orientation="vertical"
 *     className="h-5 w-px bg-border"
 *     style={{ height: '20px', width: '1px' }}
 *   />
 *   <Button>다음</Button>
 * </div>
 *
 * @example
 * // ✅ 수평 Separator (일반적인 사용법)
 * <div>
 *   <div>위 콘텐츠</div>
 *   <Separator className="my-4" />
 *   <div>아래 콘텐츠</div>
 * </div>
 */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className,
      )}
      {...props}
    />
  );
}

export { Separator };

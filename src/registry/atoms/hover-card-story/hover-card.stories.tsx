import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-muted-foreground text-xs">
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

/**
 * A hover card with avatar and profile information.
 */
const meta = {
  title: "ui/HoverCard",
  component: HoverCardDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCardDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default hover card showing user profile information.
 */
export const Default: Story = {};

export const ShouldShowHoverCard: Story = {
  name: "when hovering over trigger, should show hover card content",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Hover Card가 트리거에 호버 시 열리고, 콘텐츠가 표시되는지 확인
    const trigger = canvas.getByRole("button", { name: /@nextjs/i });
    await expect(trigger).toBeInTheDocument();

    // 트리거에 호버하여 Hover Card 열기
    await userEvent.hover(trigger);

    // Hover Card 콘텐츠가 표시되는지 확인
    await waitFor(async () => {
      const heading = await canvas.findByRole("heading", {
        name: /@nextjs/i,
      });
      await expect(heading).toBeInTheDocument();
    });

    // 추가 콘텐츠 확인
    const description = canvas.getByText(
      /the react framework – created and maintained by @vercel/i,
    );
    await expect(description).toBeInTheDocument();

    // 호버 해제
    await userEvent.unhover(trigger);
  },
};

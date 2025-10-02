import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BadgeCheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          8
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
    </div>
  )
}

/**
 * Displays a badge or a component that looks like a badge.
 */
const meta = {
  title: "ui/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => <BadgeDemo />
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the badge.
 */
export const Default: Story = {};

/**
 * Secondary badge variant.
 */
export const Secondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>
};

/**
 * Destructive badge variant.
 */
export const Destructive: Story = {
  render: () => <Badge variant="destructive">Destructive</Badge>
};

/**
 * Outline badge variant.
 */
export const Outline: Story = {
  render: () => <Badge variant="outline">Outline</Badge>
};

/**
 * Badge with icon.
 */
export const WithIcon: Story = {
  render: () => (
    <Badge
      variant="secondary"
      className="bg-blue-500 text-white dark:bg-blue-600"
    >
      <BadgeCheckIcon />
      Verified
    </Badge>
  )
};

/**
 * Numeric badge examples.
 */
export const Numeric: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </Badge>
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
      >
        99
      </Badge>
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="outline"
      >
        20+
      </Badge>
    </div>
  )
};
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Skeleton } from "@/components/ui/skeleton";

// Default example from official docs
export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

// Card example from official docs
export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

/**
 * Use to show a placeholder while content is loading.
 */
const meta = {
  title: "atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$|SkeletonCard/,
  render: () => <SkeletonDemo />
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the skeleton.
 */
export const Default: Story = {};

/**
 * Skeleton as a card placeholder.
 */
export const Card: Story = {
  render: () => <SkeletonCard />
};
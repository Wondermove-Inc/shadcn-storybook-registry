import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";

const meta = {
  title: "ui/Chart/Line Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Line charts will be added here
 */
export const Placeholder: Story = {
  render: () => <div>Line Charts - Ready for examples</div>,
};
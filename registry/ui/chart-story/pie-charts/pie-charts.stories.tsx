import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";

const meta = {
  title: "ui/Chart/Pie Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Pie charts will be added here
 */
export const Placeholder: Story = {
  render: () => <div>Pie Charts - Ready for examples</div>,
};
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";

const meta = {
  title: "ui/Chart/Radar Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Radar charts will be added here
 */
export const Placeholder: Story = {
  render: () => <div>Radar Charts - Ready for examples</div>,
};
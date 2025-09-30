import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";

// Import all line chart components
import { ChartLineDefault } from "./line-chart-default";
import { ChartLineInteractive } from "./line-chart-interactive";
import { ChartLineLinear } from "./line-chart-linear";
import { ChartLineStep } from "./line-chart-step";
import { ChartLineMultiple } from "./line-chart-multiple";
import { ChartLineDots } from "./line-chart-dots";
import { ChartLineDotsCustom } from "./line-chart-dots-custom";
import { ChartLineDotsColors } from "./line-chart-dots-colors";
import { ChartLineLabel } from "./line-chart-label";
import { ChartLineLabelCustom } from "./line-chart-label-custom";

const meta = {
  title: "ui/Chart/Line Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ChartLineDefault />,
};

export const Interactive: Story = {
  render: () => <ChartLineInteractive />,
};

export const Linear: Story = {
  render: () => <ChartLineLinear />,
};

export const Step: Story = {
  render: () => <ChartLineStep />,
};

export const Multiple: Story = {
  render: () => <ChartLineMultiple />,
};

export const Dots: Story = {
  render: () => <ChartLineDots />,
};

export const DotsCustom: Story = {
  render: () => <ChartLineDotsCustom />,
};

export const DotsColors: Story = {
  render: () => <ChartLineDotsColors />,
};

export const Label: Story = {
  render: () => <ChartLineLabel />,
};

export const LabelCustom: Story = {
  render: () => <ChartLineLabelCustom />,
};
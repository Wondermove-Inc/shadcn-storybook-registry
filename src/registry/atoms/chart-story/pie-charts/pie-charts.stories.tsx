import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";

// Import all pie chart components
import { ChartPieSimple } from "./pie-chart-simple";
import { ChartPieSeparatorNone } from "./pie-chart-separator-none";
import { ChartPieLabel } from "./pie-chart-label";
import { ChartPieLabelCustom } from "./pie-chart-label-custom";
import { ChartPieLabelList } from "./pie-chart-label-list";
import { ChartPieLegend } from "./pie-chart-legend";
import { ChartPieDonut } from "./pie-chart-donut";
import { ChartPieDonutActive } from "./pie-chart-donut-active";
import { ChartPieDonutText } from "./pie-chart-donut-text";
import { ChartPieStacked } from "./pie-chart-stacked";
import { ChartPieInteractive } from "./pie-chart-interactive";

const meta = {
  title: "ui/Chart/Pie Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => <ChartPieSimple />,
};

export const SeparatorNone: Story = {
  render: () => <ChartPieSeparatorNone />,
};

export const Label: Story = {
  render: () => <ChartPieLabel />,
};

export const LabelCustom: Story = {
  render: () => <ChartPieLabelCustom />,
};

export const LabelList: Story = {
  render: () => <ChartPieLabelList />,
};

export const Legend: Story = {
  render: () => <ChartPieLegend />,
};

export const Donut: Story = {
  render: () => <ChartPieDonut />,
};

export const DonutActive: Story = {
  render: () => <ChartPieDonutActive />,
};

export const DonutText: Story = {
  render: () => <ChartPieDonutText />,
};

export const Stacked: Story = {
  render: () => <ChartPieStacked />,
};

export const Interactive: Story = {
  render: () => <ChartPieInteractive />,
};
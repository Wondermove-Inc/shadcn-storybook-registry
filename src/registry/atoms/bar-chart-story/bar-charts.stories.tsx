import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";
import { ChartBarInteractive } from "./bar-chart-interactive";
import { ChartBarDefault } from "./bar-chart-default";
import { ChartBarHorizontal } from "./bar-chart-horizontal";
import { ChartBarMultiple } from "./bar-chart-multiple";
import { ChartBarStacked } from "./bar-chart-stacked";
import { ChartBarLabel } from "./bar-chart-label";
import { ChartBarLabelCustom } from "./bar-chart-label-custom";
import { ChartBarMixed } from "./bar-chart-mixed";
import { ChartBarActive } from "./bar-chart-active";
import { ChartBarNegative } from "./bar-chart-negative";

const meta = {
  title: "ui/Chart/Bar Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Interactive bar chart with chart type selector
 */
export const Interactive: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarInteractive />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A simple bar chart
 */
export const Default: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarDefault />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Horizontal bar chart
 */
export const Horizontal: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarHorizontal />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Multiple bars side by side
 */
export const Multiple: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarMultiple />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Stacked bar chart with legend
 */
export const Stacked: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarStacked />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Bar chart with labels on top
 */
export const Label: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarLabel />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Bar chart with custom label positioning
 */
export const LabelCustom: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarLabelCustom />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Bar chart with different colors for each bar
 */
export const Mixed: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarMixed />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Bar chart with active state highlighting
 */
export const Active: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarActive />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Bar chart supporting negative values
 */
export const Negative: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartBarNegative />,
  parameters: {
    layout: "fullscreen",
  },
};
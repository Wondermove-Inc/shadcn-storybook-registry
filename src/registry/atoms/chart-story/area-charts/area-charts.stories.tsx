import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";
import { ChartAreaInteractive } from "./area-chart-interactive";
import { ChartAreaDefault } from "./area-chart-default";
import { ChartAreaLinear } from "./area-chart-linear";
import { ChartAreaStep } from "./area-chart-step";
import { ChartAreaLegend } from "./area-chart-legend";
import { ChartAreaStacked } from "./area-chart-stacked";
import { ChartAreaStackedExpand } from "./area-chart-stacked-expand";
import { ChartAreaIcons } from "./area-chart-icons";
import { ChartAreaGradient } from "./area-chart-gradient";
import { ChartAreaAxes } from "./area-chart-axes";

const meta = {
  title: "atoms/Chart/Area Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Interactive area chart with time range selector
 */
export const Interactive: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaInteractive />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A simple area chart showing desktop visitors
 */
export const Default: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaDefault />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with linear interpolation
 */
export const Linear: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaLinear />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with step interpolation
 */
export const Step: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaStep />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with legend showing multiple data series
 */
export const Legend: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaLegend />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Stacked area chart showing desktop and mobile visitors
 */
export const Stacked: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaStacked />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Stacked area chart with expanded view (100% stacked)
 */
export const StackedExpanded: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaStackedExpand />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with icons in the legend
 */
export const Icons: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaIcons />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with gradient fill
 */
export const Gradient: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaGradient />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Area chart with both X and Y axes
 */
export const Axes: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartAreaAxes />,
  parameters: {
    layout: "fullscreen",
  },
};
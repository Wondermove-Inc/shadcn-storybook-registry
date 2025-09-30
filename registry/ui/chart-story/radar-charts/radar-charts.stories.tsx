import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartContainer } from "@/components/ui/chart";
import { ChartRadarDefault } from "./radar-chart-default";
import { ChartRadarDots } from "./radar-chart-dots";
import { ChartRadarLinesOnly } from "./radar-chart-lines-only";
import { ChartRadarLabelCustom } from "./radar-chart-label-custom";
import { ChartRadarGridCustom } from "./radar-chart-grid-custom";
import { ChartRadarGridNone } from "./radar-chart-grid-none";
import { ChartRadarGridCircle } from "./radar-chart-grid-circle";
import { ChartRadarGridCircleNoLines } from "./radar-chart-grid-circle-no-lines";
import { ChartRadarGridCircleFill } from "./radar-chart-grid-circle-fill";
import { ChartRadarGridFill } from "./radar-chart-grid-fill";
import { ChartRadarMultiple } from "./radar-chart-multiple";
import { ChartRadarLegend } from "./radar-chart-legend";

const meta = {
  title: "ui/Chart/Radar Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A simple radar chart showing desktop visitors
 */
export const RadarDefault: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarDefault />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with dots on data points
 */
export const RadarDots: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarDots />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with lines only (no fill)
 */
export const RadarLinesOnly: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarLinesOnly />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with custom label formatting
 */
export const RadarLabelCustom: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarLabelCustom />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with custom grid configuration
 */
export const RadarGridCustom: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridCustom />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with no grid
 */
export const RadarGridNone: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridNone />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with circular grid
 */
export const RadarGridCircle: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridCircle />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with circular grid without radial lines
 */
export const RadarGridCircleNoLines: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridCircleNoLines />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with filled circular grid
 */
export const RadarGridCircleFill: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridCircleFill />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with filled grid
 */
export const RadarGridFill: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarGridFill />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with multiple data series
 */
export const RadarMultiple: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarMultiple />,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * A radar chart with legend for multiple series
 */
export const RadarLegend: Story = {
  args: {
    config: {},
    children: <div />,
  },
  render: () => <ChartRadarLegend />,
  parameters: {
    layout: "fullscreen",
  },
};
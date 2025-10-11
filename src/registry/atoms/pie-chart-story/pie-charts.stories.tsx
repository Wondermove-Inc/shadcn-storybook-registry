import { ChartContainer } from "@/components/ui/chart";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

// Import all pie chart components
import { ChartPieDonut } from "./pie-chart-donut";
import { ChartPieDonutActive } from "./pie-chart-donut-active";
import { ChartPieDonutText } from "./pie-chart-donut-text";
import { ChartPieInteractive } from "./pie-chart-interactive";
import { ChartPieLabel } from "./pie-chart-label";
import { ChartPieLabelCustom } from "./pie-chart-label-custom";
import { ChartPieLabelList } from "./pie-chart-label-list";
import { ChartPieLegend } from "./pie-chart-legend";
import { ChartPieSeparatorNone } from "./pie-chart-separator-none";
import { ChartPieSimple } from "./pie-chart-simple";
import { ChartPieStacked } from "./pie-chart-stacked";

const meta = {
  title: "ui/Chart/Pie Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieSimple />,
};

export const SeparatorNone: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieSeparatorNone />,
};

export const Label: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieLabel />,
};

export const LabelCustom: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieLabelCustom />,
};

export const LabelList: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieLabelList />,
};

export const Legend: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieLegend />,
};

export const Donut: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieDonut />,
};

export const DonutActive: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieDonutActive />,
};

export const DonutText: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieDonutText />,
};

export const Stacked: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieStacked />,
};

export const Interactive: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartPieInteractive />,
};

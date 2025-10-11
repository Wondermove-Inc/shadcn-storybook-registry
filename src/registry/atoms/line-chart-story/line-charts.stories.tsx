import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { ChartContainer } from "@/components/ui/chart";

// Import all line chart components
import { ChartLineDefault } from "./line-chart-default";
import { ChartLineDots } from "./line-chart-dots";
import { ChartLineDotsColors } from "./line-chart-dots-colors";
import { ChartLineDotsCustom } from "./line-chart-dots-custom";
import { ChartLineInteractive } from "./line-chart-interactive";
import { ChartLineLabel } from "./line-chart-label";
import { ChartLineLabelCustom } from "./line-chart-label-custom";
import { ChartLineLinear } from "./line-chart-linear";
import { ChartLineMultiple } from "./line-chart-multiple";
import { ChartLineStep } from "./line-chart-step";

const meta = {
  title: "ui/Chart/Line Charts",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineDefault />,
};

export const Interactive: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineInteractive />,
};

export const Linear: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineLinear />,
};

export const Step: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineStep />,
};

export const Multiple: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineMultiple />,
};

export const Dots: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineDots />,
};

export const DotsCustom: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineDotsCustom />,
};

export const DotsColors: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineDotsColors />,
};

export const Label: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineLabel />,
};

export const LabelCustom: Story = {
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineLabelCustom />,
};

export const ShouldRenderChart: Story = {
  name: "when chart is rendered, should display chart container and content",
  tags: ["!dev", "!autodocs"],
  // @ts-expect-error - Storybook 타입 시스템이 component: ChartContainer와 render 함수 조합을 올바르게 처리하지 못합니다
  args: {},
  render: () => <ChartLineDefault />,
  play: async ({ canvasElement }) => {
    // 🎯 목적: Line Chart가 정상적으로 렌더링되고 Chart container가 존재하는지 확인

    // ChartContainer가 렌더링되었는지 확인
    const chartContainer = canvasElement.querySelector("[data-chart]");
    await expect(chartContainer).toBeInTheDocument();
  },
};

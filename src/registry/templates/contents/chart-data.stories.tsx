import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartData } from "./chart-data";

/**
 * 차트와 테이블 조합의 모니터링 차트데이터 입니다.
 */
const meta: Meta<typeof ChartData> = {
  title: "templates/Contents/Chart Data",
  component: ChartData,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChartData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

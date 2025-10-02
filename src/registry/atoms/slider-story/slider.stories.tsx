// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="w-[350px]">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-full", className)}
        {...props}
      />
    </div>
  )
}

/**
 * An input where the user selects a value from within a given range.
 */
const meta = {
  title: "ui/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => <SliderDemo />
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the slider.
 */
export const Default: Story = {};

/**
 * Use the `inverted` prop to have the slider fill from right to left.
 */
export const Inverted: Story = {
  render: () => <SliderDemo inverted />
};

/**
 * Use the `disabled` prop to disable the slider.
 */
export const Disabled: Story = {
  render: () => <SliderDemo disabled />
};
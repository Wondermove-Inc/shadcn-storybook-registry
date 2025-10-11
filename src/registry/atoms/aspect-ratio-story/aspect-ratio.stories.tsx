import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  );
}

/**
 * Displays content within a desired ratio.
 */
const meta: Meta<typeof AspectRatio> = {
  title: "ui/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    ratio: 16 / 9,
    className: "bg-muted rounded-lg w-[450px]",
  },
  excludeStories: /.*Demo$/,
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default 16:9 aspect ratio with Image.
 */
export const Default: Story = {
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <Image
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
    </div>
  ),
};

/**
 * 16:9 aspect ratio (Widescreen).
 */
export const Widescreen: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-semibold text-white">
          16:9
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 4:3 aspect ratio (Standard).
 */
export const Standard: Story = {
  args: {
    ratio: 4 / 3,
  },
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 text-lg font-semibold text-white">
          4:3
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 1:1 aspect ratio (Square).
 */
export const Square: Story = {
  args: {
    ratio: 1 / 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-semibold text-white">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};

/**
 * 21:9 aspect ratio (Ultrawide).
 */
export const Ultrawide: Story = {
  args: {
    ratio: 21 / 9,
  },
  render: (args) => (
    <div className="w-[600px]">
      <AspectRatio {...args}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 text-lg font-semibold text-white">
          21:9
        </div>
      </AspectRatio>
    </div>
  ),
};

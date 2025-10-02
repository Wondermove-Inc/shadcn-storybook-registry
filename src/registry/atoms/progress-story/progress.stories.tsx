"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react"
import { Progress } from "@/components/ui/progress"

/**
 * Displays an indicator showing the completion progress of a task, typically
 * displayed as a progress bar.
 */
const meta = {
  title: "atoms/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="w-[350px]">
        <Progress value={progress} className="w-full" />
      </div>
    )
  }
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default animated progress bar that updates from 13% to 66% after 500ms.
 */
export const Default: Story = {};

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[350px]">
      <Progress value={progress} className="w-full" />
    </div>
  )
}

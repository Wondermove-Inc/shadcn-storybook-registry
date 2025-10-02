"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

/**
 * A date field component that allows users to enter and edit date.
 */
const meta = {
  title: "atoms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => <CalendarDemo />
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the calendar.
 */
export const Default: Story = {};

/**
 * Calendar with form example.
 */
export const Form: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <form className="space-y-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </form>
    )
  },
};
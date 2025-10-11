"use client"

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

const meta: Meta = {
  title: "ui/Calendar/Blocks/Range Calendar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(2025, 5, 12)
    );

    return (
      <Calendar
        mode="single"
        defaultMonth={date}
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border shadow-sm"
      />
    );
  },
};
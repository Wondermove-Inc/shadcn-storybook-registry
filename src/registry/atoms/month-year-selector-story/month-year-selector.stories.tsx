"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const meta: Meta = {
  title: "ui/Calendar/Blocks/Month and Year Selector",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [dropdown, setDropdown] =
      React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
        "dropdown",
      );
    const [date, setDate] = React.useState<Date | undefined>(
      new Date(2025, 5, 12),
    );

    return (
      <div className="flex flex-col gap-4">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          captionLayout={dropdown}
          className="rounded-lg border shadow-sm"
        />
        <div className="flex flex-col gap-3">
          <Label htmlFor="dropdown" className="px-1">
            Dropdown
          </Label>
          <Select
            value={dropdown}
            onValueChange={(value) =>
              setDropdown(
                value as React.ComponentProps<typeof Calendar>["captionLayout"],
              )
            }
          >
            <SelectTrigger
              id="dropdown"
              size="sm"
              className="bg-background w-full"
            >
              <SelectValue placeholder="Dropdown" />
            </SelectTrigger>
            <SelectContent align="center">
              <SelectItem value="dropdown">Month and Year</SelectItem>
              <SelectItem value="dropdown-months">Month Only</SelectItem>
              <SelectItem value="dropdown-years">Year Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  },
};

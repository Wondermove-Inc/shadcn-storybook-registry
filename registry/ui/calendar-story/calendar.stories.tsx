import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { addDays } from "date-fns";
import { expect, userEvent, fn } from "storybook/test";
import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

/**
 * A date field component that allows users to enter and edit date.
 */
const meta = {
  title: "ui/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: "boolean",
    },
    numberOfMonths: {
      control: "number",
      description: "Number of months to display",
    },
    showOutsideDays: {
      control: "boolean",
      description: "Show days that fall outside the current month",
    },
  },
  args: {
    mode: "single",
    selected: new Date(),
    onSelect: fn(),
    className: "rounded-md border shadow-sm",
    disabled: false,
    numberOfMonths: 1,
    showOutsideDays: true,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the calendar.
 */
export const Default: Story = {};

/**
 * Use the `multiple` mode to select multiple dates.
 */
export const Multiple: Story = {
  args: {
    min: 1,
    selected: [new Date(), addDays(new Date(), 2), addDays(new Date(), 8)],
    mode: "multiple",
  },
};

/**
 * Use the `range` mode to select a range of dates.
 */
export const Range: Story = {
  args: {
    selected: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    mode: "range",
  },
};

/**
 * Use the `disabled` prop to disable specific dates.
 */
export const Disabled: Story = {
  args: {
    disabled: [
      addDays(new Date(), 1),
      addDays(new Date(), 2),
      addDays(new Date(), 3),
      addDays(new Date(), 5),
    ],
  },
};

/**
 * Use the `numberOfMonths` prop to display multiple months.
 */
export const MultipleMonths: Story = {
  args: {
    numberOfMonths: 2,
    showOutsideDays: false,
  },
};

/**
 * Example from shadcn/ui documentation with dropdown caption
 */
export const WithDropdownCaption: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    );
  },
};

/**
 * Calendar with custom date restrictions
 */
export const WithDateRestrictions: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const disabledDays = [
      { dayOfWeek: [0, 6] }, // 주말 비활성화
      { from: new Date(2024, 11, 25), to: new Date(2024, 11, 31) }, // 크리스마스 주간
    ];

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border shadow-sm"
      />
    );
  },
};

/**
 * Calendar with custom modifiers for special dates
 */
export const WithCustomModifiers: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const bookedDays = [
      new Date(2024, 11, 12),
      new Date(2024, 11, 15),
      new Date(2024, 11, 20),
    ];

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={{
          booked: bookedDays,
        }}
        modifiersStyles={{
          booked: { 
            backgroundColor: "hsl(var(--destructive))",
            color: "hsl(var(--destructive-foreground))",
          }
        }}
        className="rounded-md border shadow-sm"
      />
    );
  },
};

export const ShouldNavigateMonthsWhenClicked: Story = {
  name: "when using the calendar navigation, should change months",
  tags: ["!dev", "!autodocs"],
  args: {
    defaultMonth: new Date(2000, 8),
  },
  play: async ({ canvas }) => {
    const title = await canvas.findByText(/2000/i);
    const startTitle = title.textContent || "";
    const backBtn = await canvas.findByRole("button", {
      name: /previous/i,
    });
    const nextBtn = await canvas.findByRole("button", {
      name: /next/i,
    });
    const steps = 6;
    for (let i = 0; i < steps / 2; i++) {
      await userEvent.click(backBtn);
      expect(title).not.toHaveTextContent(startTitle);
    }
    for (let i = 0; i < steps; i++) {
      await userEvent.click(nextBtn);
      if (i == steps / 2 - 1) {
        expect(title).toHaveTextContent(startTitle);
        continue;
      }
      expect(title).not.toHaveTextContent(startTitle);
    }
  },
};

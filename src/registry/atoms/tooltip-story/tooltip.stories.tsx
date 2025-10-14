// Replace nextjs-vite with the name of your framework
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Plus } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { expect, userEvent, waitFor, within } from "storybook/test";

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 */
const meta = {
  title: "ui/Tooltip",
  component: TooltipContent,
  tags: ["autodocs"],
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
      },
      description: "The preferred side of the anchor to render against",
    },
    align: {
      options: ["start", "center", "end"],
      control: {
        type: "radio",
      },
      description: "The preferred alignment against the anchor",
    },
    children: {
      control: "text",
      description: "The content of the tooltip",
    },
  },
  args: {
    side: "top",
    align: "center",
    children: "Add to library",
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <TooltipProvider delayDuration={700}>
      <Tooltip>
        <TooltipTrigger>
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add</span>
        </TooltipTrigger>
        <TooltipContent side={args.side} align={args.align}>
          {args.children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
} satisfies Meta<typeof TooltipContent>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tooltip.
 */
export const Default: Story = {};

/**
 * Use the `bottom` side to display the tooltip below the element.
 */
export const Bottom: Story = {
  args: {
    side: "bottom",
  },
};

/**
 * Use the `left` side to display the tooltip to the left of the element.
 */
export const Left: Story = {
  args: {
    side: "left",
  },
};

/**
 * Use the `right` side to display the tooltip to the right of the element.
 */
export const Right: Story = {
  args: {
    side: "right",
  },
};

export const ShouldShowOnHover: Story = {
  name: "when hovering over trigger, should show hover tooltip content",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement, step }) => {
    const canvasBody = within(canvasElement.ownerDocument.body);
    const triggerBtn = await canvasBody.findByRole("button", { name: /add/i });

    await step("hover over trigger", async () => {
      await userEvent.hover(triggerBtn);
      await waitFor(() =>
        expect(
          canvasElement.ownerDocument.body.querySelector(
            '[data-slot="tooltip-content"]',
          ),
        ).toBeVisible(),
      );
    });

    await step("unhover trigger", async () => {
      await userEvent.unhover(triggerBtn);
      await waitFor(() =>
        expect(
          canvasElement.ownerDocument.body.querySelector(
            '[data-slot="tooltip-content"]',
          ),
        ).not.toBeVisible(),
      );
    });
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Default example from official docs
export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}

// With Label example from official docs
export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}

// With Text example from official docs
export function TextareaWithText() {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-muted-foreground text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}

// With Button example from official docs
export function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}

// Disabled example from official docs
export function TextareaDisabled() {
  return <Textarea placeholder="Type your message here." disabled />
}

/**
 * Displays a form textarea or a component that looks like a textarea.
 */
const meta = {
  title: "atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$|.*WithLabel$|.*WithText$|.*WithButton$|.*Disabled$/,
  render: () => <TextareaDemo />
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the textarea.
 */
export const Default: Story = {};

/**
 * Textarea with a label.
 */
export const WithLabel: Story = {
  render: () => <TextareaWithLabel />
};

/**
 * Textarea with label and helper text.
 */
export const WithText: Story = {
  render: () => <TextareaWithText />
};

/**
 * Textarea with a button.
 */
export const WithButton: Story = {
  render: () => <TextareaWithButton />
};

/**
 * Disabled textarea.
 */
export const Disabled: Story = {
  render: () => <TextareaDisabled />
};
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link from "next/link";
import { ChevronRight, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Button</Button>
}

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => <ButtonDemo />
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the button.
 */
export const Default: Story = {};

/**
 * Secondary button variant.
 */
export const Secondary: Story = {
  render: () => <Button variant="secondary">Secondary</Button>
};

/**
 * Destructive button variant.
 */
export const Destructive: Story = {
  render: () => <Button variant="destructive">Destructive</Button>
};

/**
 * Outline button variant.
 */
export const Outline: Story = {
  render: () => <Button variant="outline">Outline</Button>
};

/**
 * Ghost button variant.
 */
export const Ghost: Story = {
  render: () => <Button variant="ghost">Ghost</Button>
};

/**
 * Link button variant.
 */
export const LinkVariant: Story = {
  render: () => <Button variant="link">Link</Button>
};

/**
 * Icon button example.
 */
export const Icon: Story = {
  render: () => (
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  ),
};

/**
 * Button with icon.
 */
export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  ),
};

/**
 * Loading button state.
 */
export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

/**
 * Button as child (link).
 */
export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  ),
};
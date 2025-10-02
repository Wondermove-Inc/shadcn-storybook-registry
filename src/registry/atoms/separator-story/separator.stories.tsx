import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Separator } from "@/components/ui/separator";

// Demo component from official docs
export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}

/**
 * Visually or semantically separates content.
 */
const meta = {
  title: "atoms/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator'
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative'
    }
  }
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the separator demonstrating both orientations.
 */
export const Default: Story = {
  render: () => <SeparatorDemo />
};

/**
 * Basic horizontal separator.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">
          This is the content of the first section.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">
          This is the content of the second section.
        </p>
      </div>
    </div>
  )
};

/**
 * Vertical separator for navigation items.
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  )
};

/**
 * Separator with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <Separator className="bg-primary" />
      <Separator className="bg-secondary h-0.5" />
      <Separator className="bg-gradient-to-r from-primary to-secondary h-1" />
      <div className="flex items-center space-x-4">
        <span className="text-sm">Left</span>
        <Separator orientation="vertical" className="h-6 bg-primary" />
        <span className="text-sm">Right</span>
      </div>
    </div>
  )
};

/**
 * Separator in a card layout.
 */
export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Notifications</h3>
        <span className="text-sm text-muted-foreground">3 unread</span>
      </div>
      <Separator className="my-3" />
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <div className="size-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">New message</p>
            <p className="text-sm text-muted-foreground">
              You have a new message from Alex
            </p>
          </div>
        </div>
        <Separator />
        <div className="flex items-start space-x-2">
          <div className="size-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Meeting reminder</p>
            <p className="text-sm text-muted-foreground">
              Team standup in 30 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Separator in a toolbar.
 */
export const InToolbar: Story = {
  render: () => (
    <div className="flex items-center rounded-md border px-3">
      <button className="flex h-10 items-center justify-center px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
        Bold
      </button>
      <button className="flex h-10 items-center justify-center px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
        Italic
      </button>
      <Separator orientation="vertical" className="mx-2 h-6" />
      <button className="flex h-10 items-center justify-center px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
        Left
      </button>
      <button className="flex h-10 items-center justify-center px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
        Center
      </button>
      <button className="flex h-10 items-center justify-center px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md">
        Right
      </button>
    </div>
  )
};
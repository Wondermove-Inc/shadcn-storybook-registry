import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

// Demo component from official docs
export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}

// Horizontal demo component from official docs
export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">
              Photo by{" "}
              <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 */
const meta = {
  title: "ui/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply'
    },
    children: {
      control: false,
      description: 'Content to be scrolled'
    }
  }
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the scroll area with vertical scrolling.
 */
export const Default: Story = {
  render: () => <ScrollAreaDemo />
};

/**
 * Basic usage with simple text content.
 */
export const BasicUsage: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving 
      jokes all over the place: under the king's pillow, in his soup, even in the 
      royal toilet. The king was furious, but he couldn't seem to stop Jokester. 
      And then, one day, the people of the kingdom discovered that the jokes left 
      by Jokester were so funny that they couldn't help but laugh. And once they 
      started laughing, they couldn't stop. The laughter spread throughout the 
      kingdom, bringing joy and happiness to everyone. Even the grumpy king couldn't 
      help but chuckle at some of the jokes. From that day on, Jokester became a 
      beloved figure in the kingdom, bringing laughter and joy to all.
    </ScrollArea>
  )
};

/**
 * Horizontal scrolling with images.
 */
export const HorizontalScrolling: Story = {
  render: () => <ScrollAreaHorizontalDemo />
};

/**
 * Vertical scrolling with custom height.
 */
export const CustomHeight: Story = {
  render: () => (
    <ScrollArea className="h-[400px] w-[250px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Notifications</h4>
        {Array.from({ length: 20 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="py-2">
              <p className="text-sm font-medium">Notification {i + 1}</p>
              <p className="text-sm text-muted-foreground">
                This is a sample notification message that might be longer than expected and needs scrolling.
              </p>
            </div>
            {i < 19 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
};

/**
 * Both horizontal and vertical scrolling.
 */
export const BothDirections: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[300px] rounded-md border">
      <div className="p-4">
        <table className="w-[600px]">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Role</th>
              <th className="text-left p-2">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 30 }).map((_, i) => (
              <tr key={i} className="border-b">
                <td className="p-2">User {i + 1}</td>
                <td className="p-2">user{i + 1}@example.com</td>
                <td className="p-2">Active</td>
                <td className="p-2">Member</td>
                <td className="p-2">2024-01-{(i % 28) + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
};
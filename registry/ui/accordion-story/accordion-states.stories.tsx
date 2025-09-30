import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Visual states of the Accordion component
 */
const meta = {
  title: "ui/Accordion/States",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * All visual states of accordion displayed together
 */
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Default State</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Default trigger - click me</AccordionTrigger>
            <AccordionContent>
              This is the default state of the accordion
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Hover State</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:underline">
              Hover over this trigger to see underline
            </AccordionTrigger>
            <AccordionContent>
              The trigger shows underline on hover
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Focus State</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Tab to this trigger to see focus ring
            </AccordionTrigger>
            <AccordionContent>
              The trigger shows a focus ring when focused
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Open State</h3>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>This accordion is open by default</AccordionTrigger>
            <AccordionContent>
              The chevron icon rotates 180 degrees when open
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Disabled State</h3>
        <Accordion type="single" collapsible className="w-full" disabled>
          <AccordionItem value="item-1">
            <AccordionTrigger disabled>Disabled accordion trigger</AccordionTrigger>
            <AccordionContent>
              This content cannot be accessed
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

/**
 * Interactive hover state demonstration
 */
export const HoverState: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>This shows the hover state</AccordionTrigger>
        <AccordionContent>
          The trigger is underlined on hover
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Focus state demonstration
 */
export const FocusState: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>This shows the focus state</AccordionTrigger>
        <AccordionContent>
          The trigger shows a focus ring
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
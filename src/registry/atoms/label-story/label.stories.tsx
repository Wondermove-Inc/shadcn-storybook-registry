import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  title: "ui/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Label",
    htmlFor: "input",
  },
  excludeStories: /.*Demo$/,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the label.
 */
export const Default: Story = {};

/**
 * Label with checkbox example.
 */
export const WithCheckbox: Story = {
  render: () => <LabelDemo />,
};

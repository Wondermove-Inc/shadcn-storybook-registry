import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

/**
 * Renders an accessible label associated with controls.
 */
const meta = {
  title: "atoms/Label",
  component: LabelDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LabelDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the label with checkbox.
 */
export const Default: Story = {};

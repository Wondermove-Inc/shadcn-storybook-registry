import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";

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

export const ShouldToggleCheckboxWhenClicked: Story = {
  name: "when label is clicked, should toggle the associated checkbox",
  tags: ["!dev", "!autodocs"],
  render: () => <LabelDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByText("Accept terms and conditions");
    const checkbox = canvas.getByRole("checkbox") as HTMLInputElement;

    // 🎯 목적: Label 클릭 시 연결된 checkbox가 토글되는지 확인
    await expect(checkbox).not.toBeChecked();

    await userEvent.click(label);
    await expect(checkbox).toBeChecked();

    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
  },
};

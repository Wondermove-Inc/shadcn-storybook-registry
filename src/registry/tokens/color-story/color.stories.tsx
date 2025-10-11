import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Replace nextjs-vite with the name of your framework
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

type Color = {
  name: string;
  value: string;
  description?: string;
};

const ColorTile = ({ value, name }: Pick<Color, "value" | "name">) => {
  const style = window.getComputedStyle(document.body);
  const colorValue = style.getPropertyValue(value);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="size-20 rounded-md border"
        style={{ backgroundColor: `hsl(${colorValue})` }}
      />
      <p className="text-center text-xs opacity-70">{value}</p>
      <p className="text-center font-mono text-xs">{colorValue}</p>
    </div>
  );
};

/**
 * Color tokens for the design system
 */
const meta: Meta<{
  colors: Color[];
}> = {
  title: "foundation/Color",
  argTypes: {},
  render: (args) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>
            <span className="sr-only">Preview</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {args.colors.map(({ name, value, description }) => (
          <TableRow key={name}>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell className="text-muted-foreground text-sm">
              {description}
            </TableCell>
            <TableCell>
              <ColorTile value={value} name={name} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Primary color tokens used throughout the application for backgrounds, text, and UI elements.
 */
export const Primary: Story = {
  args: {
    colors: [
      {
        name: "Background",
        value: "--background",
        description: "Main background color for the application",
      },
      {
        name: "Foreground",
        value: "--foreground",
        description: "Main text color for the application",
      },
      {
        name: "Primary",
        value: "--primary",
        description: "Primary brand color for key actions",
      },
      {
        name: "Primary Foreground",
        value: "--primary-foreground",
        description: "Text color on primary background",
      },
      {
        name: "Secondary",
        value: "--secondary",
        description: "Secondary color for less prominent actions",
      },
      {
        name: "Secondary Foreground",
        value: "--secondary-foreground",
        description: "Text color on secondary background",
      },
    ],
  },
};

/**
 * Semantic color tokens for cards, popovers, and overlays.
 */
export const Surface: Story = {
  args: {
    colors: [
      {
        name: "Card",
        value: "--card",
        description: "Background color for card components",
      },
      {
        name: "Card Foreground",
        value: "--card-foreground",
        description: "Text color on card background",
      },
      {
        name: "Popover",
        value: "--popover",
        description: "Background color for popover components",
      },
      {
        name: "Popover Foreground",
        value: "--popover-foreground",
        description: "Text color on popover background",
      },
    ],
  },
};

/**
 * State and utility color tokens for muted content, accents, and destructive actions.
 */
export const State: Story = {
  args: {
    colors: [
      {
        name: "Muted",
        value: "--muted",
        description: "Background color for muted/disabled elements",
      },
      {
        name: "Muted Foreground",
        value: "--muted-foreground",
        description: "Text color for muted/secondary text",
      },
      {
        name: "Accent",
        value: "--accent",
        description: "Accent color for highlights",
      },
      {
        name: "Accent Foreground",
        value: "--accent-foreground",
        description: "Text color on accent background",
      },
      {
        name: "Destructive",
        value: "--destructive",
        description: "Color for destructive/error actions",
      },
      {
        name: "Destructive Foreground",
        value: "--destructive-foreground",
        description: "Text color on destructive background",
      },
    ],
  },
};

/**
 * Border and input color tokens for form controls and separators.
 */
export const Border: Story = {
  args: {
    colors: [
      {
        name: "Border",
        value: "--border",
        description: "Default border color for UI elements",
      },
      {
        name: "Input",
        value: "--input",
        description: "Border color for input fields",
      },
      {
        name: "Ring",
        value: "--ring",
        description: "Focus ring color for interactive elements",
      },
    ],
  },
};

/**
 * Chart color palette for data visualization components.
 */
export const Chart: Story = {
  args: {
    colors: [
      {
        name: "Chart 1",
        value: "--chart-1",
        description: "First color in chart palette",
      },
      {
        name: "Chart 2",
        value: "--chart-2",
        description: "Second color in chart palette",
      },
      {
        name: "Chart 3",
        value: "--chart-3",
        description: "Third color in chart palette",
      },
      {
        name: "Chart 4",
        value: "--chart-4",
        description: "Fourth color in chart palette",
      },
      {
        name: "Chart 5",
        value: "--chart-5",
        description: "Fifth color in chart palette",
      },
    ],
  },
};

/**
 * Sidebar component color tokens for navigation.
 */
export const Sidebar: Story = {
  args: {
    colors: [
      {
        name: "Sidebar",
        value: "--sidebar",
        description: "Background color for sidebar",
      },
      {
        name: "Sidebar Foreground",
        value: "--sidebar-foreground",
        description: "Text color in sidebar",
      },
      {
        name: "Sidebar Primary",
        value: "--sidebar-primary",
        description: "Primary color in sidebar",
      },
      {
        name: "Sidebar Primary Foreground",
        value: "--sidebar-primary-foreground",
        description: "Text color on sidebar primary background",
      },
      {
        name: "Sidebar Accent",
        value: "--sidebar-accent",
        description: "Accent color in sidebar",
      },
      {
        name: "Sidebar Accent Foreground",
        value: "--sidebar-accent-foreground",
        description: "Text color on sidebar accent background",
      },
      {
        name: "Sidebar Border",
        value: "--sidebar-border",
        description: "Border color in sidebar",
      },
      {
        name: "Sidebar Ring",
        value: "--sidebar-ring",
        description: "Focus ring color in sidebar",
      },
    ],
  },
};

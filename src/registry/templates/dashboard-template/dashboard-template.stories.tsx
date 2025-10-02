import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DashboardTemplate } from "./dashboard-template";

/**
 * A complete dashboard template showcasing various shadcn/ui components in a real-world layout.
 * Based on the Figma design from shadcn UI Kit.
 */
const meta: Meta<typeof DashboardTemplate> = {
  title: "templates/Dashboard",
  component: DashboardTemplate,
  parameters: {
    layout: "fullscreen",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Q7c53iozMSDxpPnunZsEM6/shadcn-ui-kit-for-Figma---August-2025?node-id=15005-206422&m=dev",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default dashboard template with sample data.
 */
export const Default: Story = {};

/**
 * Dashboard template with dark mode enabled.
 */
export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

/**
 * Mobile responsive view of the dashboard.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Tablet responsive view of the dashboard.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
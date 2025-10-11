"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";

/**
 * Displays a menu to the user — such as a set of actions or functions —
 * triggered by a button.
 */
const meta = {
  title: "ui/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  excludeStories: /.*Demo$/,
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
} satisfies Meta<typeof ContextMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the context menu with all features.
 */
export const Default: Story = {};

export const ShouldOpenContextMenu: Story = {
  name: "when right click on trigger, should open context menu",
  tags: ["!dev", "!autodocs"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Context Menu가 우클릭으로 열리고, 메뉴 아이템 선택이 가능한지 확인
    const trigger = canvas.getByText(/right click here/i);
    await expect(trigger).toBeInTheDocument();

    // 트리거에 우클릭하여 컨텍스트 메뉴 열기
    await userEvent.pointer([
      { target: trigger },
      { keys: "[MouseRight]", target: trigger },
    ]);

    // 메뉴가 열렸는지 확인 (메뉴 아이템 확인)
    await waitFor(async () => {
      const backItem = await canvas.findByRole("menuitem", {
        name: /back/i,
      });
      await expect(backItem).toBeInTheDocument();
    });

    // 다른 메뉴 아이템들도 확인
    const reloadItem = canvas.getByRole("menuitem", { name: /reload/i });
    await expect(reloadItem).toBeInTheDocument();

    // 메뉴 아이템 클릭
    await userEvent.click(reloadItem);
  },
};

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}

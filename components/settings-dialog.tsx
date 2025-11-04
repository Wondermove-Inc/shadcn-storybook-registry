"use client";

import * as React from "react";
import { AppWindow, Network, Container, Code, Terminal } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const data = {
  nav: [
    { name: "App", icon: AppWindow },
    { name: "Proxy", icon: Network },
    { name: "Kubernetes", icon: Container },
    { name: "Editor", icon: Code },
    { name: "Terminal", icon: Terminal },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="h-[85%] max-w-[70%] flex-col overflow-hidden p-0 sm:h-[90%] sm:max-w-[65%] lg:max-w-[60%] xl:max-w-[55%]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === "App"}
                        >
                          <a href="#">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>App</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-8 overflow-y-auto p-4 pt-0">
              {/* Terminal shell path */}
              <div className="flex w-full flex-col gap-3">
                <Label
                  htmlFor="shell-path"
                  className="text-foreground text-sm font-medium"
                >
                  Terminal shell path
                </Label>
                <Input
                  id="shell-path"
                  type="text"
                  placeholder="/bin/zsh"
                  className="bg-input/30 border-border"
                />
              </div>

              {/* Terminal copy & paste */}
              <div className="flex items-start gap-3">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Label
                      htmlFor="copy-paste"
                      className="text-foreground flex-1 text-sm font-medium"
                    >
                      Terminal copy & paste
                    </Label>
                    <Switch id="copy-paste" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Copy on select and paste on right-click
                  </p>
                </div>
              </div>

              {/* Terminal theme */}
              <div className="flex w-full flex-col gap-3">
                <Label
                  htmlFor="terminal-theme"
                  className="text-foreground text-sm font-medium"
                >
                  Terminal theme
                </Label>
                <Select defaultValue="default-dark">
                  <SelectTrigger className="bg-input/30 border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Light Themes</SelectLabel>
                      <SelectItem value="default-light">
                        Default Light
                      </SelectItem>
                      <SelectItem value="red-light">Red Light</SelectItem>
                      <SelectItem value="orange-light">Orange Light</SelectItem>
                      <SelectItem value="green-light">Green Light</SelectItem>
                      <SelectItem value="blue-light">Blue Light</SelectItem>
                      <SelectItem value="yellow-light">Yellow Light</SelectItem>
                      <SelectItem value="violet-light">Violet Light</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Dark Themes</SelectLabel>
                      <SelectItem value="default-dark">Default Dark</SelectItem>
                      <SelectItem value="red-dark">Red Dark</SelectItem>
                      <SelectItem value="orange-dark">Orange Dark</SelectItem>
                      <SelectItem value="green-dark">Green Dark</SelectItem>
                      <SelectItem value="blue-dark">Blue Dark</SelectItem>
                      <SelectItem value="yellow-dark">Yellow Dark</SelectItem>
                      <SelectItem value="violet-dark">Violet Dark</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Font size */}
              <div className="flex w-full flex-col gap-3">
                <Label
                  htmlFor="font-size"
                  className="text-foreground text-sm font-medium"
                >
                  Font size
                </Label>
                <Select defaultValue="12">
                  <SelectTrigger className="bg-input/30 border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="13">13</SelectItem>
                    <SelectItem value="14">14</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="18">18</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Font family */}
              <div className="flex w-full flex-col gap-3">
                <Label
                  htmlFor="font-family"
                  className="text-foreground text-sm font-medium"
                >
                  Font family
                </Label>
                <Select defaultValue="robotomono">
                  <SelectTrigger className="bg-input/30 border-border w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="robotomono">RobotoMono</SelectItem>
                    <SelectItem value="firacode">Fira Code</SelectItem>
                    <SelectItem value="jetbrains">JetBrains Mono</SelectItem>
                    <SelectItem value="courier">Courier New</SelectItem>
                    <SelectItem value="consolas">Consolas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

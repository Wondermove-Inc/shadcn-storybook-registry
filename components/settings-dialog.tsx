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

// 🎯 목적: App 메뉴의 콘텐츠 영역 - 앱 관련 설정
function AppContent() {
  return (
    <>
      {/* Theme */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="app-theme"
          className="text-foreground text-sm font-medium"
        >
          Theme
        </Label>
        <Select defaultValue="default-dark">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Light Themes</SelectLabel>
              <SelectItem value="default-light">Default Light</SelectItem>
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

      {/* Extension install registry */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="extension-registry"
          className="text-foreground text-sm font-medium"
        >
          Extension install registry
        </Label>
        <p className="text-muted-foreground text-sm">
          This setting is to change the registry URL for installing extensions
          by name. If you are unable to access the default registry
          (https://registry.npmjs.org) you can change it in your .npmrc file or
          in the input below.
        </p>
        <Select defaultValue="custom">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default (npmjs.org)</SelectItem>
            <SelectItem value="custom">Custom URL</SelectItem>
          </SelectContent>
        </Select>
        <Input
          id="custom-registry-url"
          type="text"
          placeholder="Custom extension registry URL..."
          className="bg-input/30 border-border"
        />
      </div>

      {/* Start-up */}
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="app-startup"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Start-up
            </Label>
            <Switch id="app-startup" />
          </div>
          <p className="text-muted-foreground text-sm">
            Automatically start freelens on login
          </p>
        </div>
      </div>

      {/* Locate timezone */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="locate-timezone"
          className="text-foreground text-sm font-medium"
        >
          Locate timezone
        </Label>
        <Select defaultValue="asia-tokyo">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asia-tokyo">Asia/Tokyo</SelectItem>
            <SelectItem value="asia-seoul">Asia/Seoul</SelectItem>
            <SelectItem value="america-new-york">America/New_York</SelectItem>
            <SelectItem value="europe-london">Europe/London</SelectItem>
            <SelectItem value="australia-sydney">Australia/Sydney</SelectItem>
            <SelectItem value="utc">UTC</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

// 🎯 목적: Proxy 메뉴의 콘텐츠 영역 - 프록시 관련 설정
function ProxyContent() {
  return (
    <>
      {/* HTTP Proxy */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="http-proxy"
          className="text-foreground text-sm font-medium"
        >
          HTTP proxy
        </Label>
        <Input
          id="http-proxy"
          type="text"
          placeholder="Type HTTP proxy url (example: http://proxy.acme.org:8080)"
          className="bg-input/30 border-border"
        />
        <p className="text-muted-foreground text-sm">
          Proxy is used only for non-cluster communication.
        </p>
      </div>

      {/* Certificate Trust */}
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="certificate-trust"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Certificate trust - Allow untrusted certificate authorities
            </Label>
            <Switch id="certificate-trust" />
          </div>
          <p className="text-muted-foreground text-sm">
            This Will Make Freelens Trust Any Certificate Authority Without Any
            Validations. Needed With Some Corporate Proxies That Do Certificate
            Re-Writing. Does Not Affect Cluster Communications!
          </p>
        </div>
      </div>
    </>
  );
}

// 🎯 목적: Editor 메뉴의 콘텐츠 영역 - 에디터 관련 설정
function EditorContent() {
  return (
    <>
      {/* Minimap */}
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-3">
            <Label
              htmlFor="minimap"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Minimap
            </Label>
            <Switch id="minimap" />
          </div>
          <p className="text-muted-foreground text-sm">Show minimap</p>
        </div>
      </div>

      {/* Position */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="position"
          className="text-foreground text-sm font-medium"
        >
          Position
        </Label>
        <Select defaultValue="right">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Line numbers */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="line-numbers"
          className="text-foreground text-sm font-medium"
        >
          Line numbers
        </Label>
        <Select defaultValue="on">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="on">On</SelectItem>
            <SelectItem value="off">Off</SelectItem>
            <SelectItem value="relative">Relative</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tab size */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="tab-size"
          className="text-foreground text-sm font-medium"
        >
          Tab size
        </Label>
        <Select defaultValue="4">
          <SelectTrigger className="bg-input/30 border-border w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="8">8</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Font size */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="editor-font-size"
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
          htmlFor="editor-font-family"
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
    </>
  );
}

// 🎯 목적: Terminal 메뉴의 콘텐츠 영역 - 터미널 관련 설정 (App 메뉴와 동일)
function TerminalContent() {
  return (
    <>
      {/* Terminal shell path */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="terminal-shell-path"
          className="text-foreground text-sm font-medium"
        >
          Terminal shell path
        </Label>
        <Input
          id="terminal-shell-path"
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
              htmlFor="terminal-copy-paste"
              className="text-foreground flex-1 text-sm font-medium"
            >
              Terminal copy & paste
            </Label>
            <Switch id="terminal-copy-paste" />
          </div>
          <p className="text-muted-foreground text-sm">
            Copy on select and paste on right-click
          </p>
        </div>
      </div>

      {/* Terminal theme */}
      <div className="flex w-full flex-col gap-3">
        <Label
          htmlFor="terminal-terminal-theme"
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
              <SelectItem value="default-light">Default Light</SelectItem>
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
          htmlFor="terminal-font-size"
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
          htmlFor="terminal-font-family"
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
    </>
  );
}

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);
  const [activeMenu, setActiveMenu] = React.useState("App");

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
                          isActive={item.name === activeMenu}
                          onClick={() => setActiveMenu(item.name)}
                        >
                          <item.icon />
                          <span>{item.name}</span>
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
                      <BreadcrumbPage>{activeMenu}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 pt-0">
              {activeMenu === "App" && <AppContent />}
              {activeMenu === "Proxy" && <ProxyContent />}
              {activeMenu === "Kubernetes" && (
                <div className="flex h-32 items-center justify-center">
                  <p className="text-muted-foreground">
                    Kubernetes settings coming soon...
                  </p>
                </div>
              )}
              {activeMenu === "Editor" && <EditorContent />}
              {activeMenu === "Terminal" && <TerminalContent />}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

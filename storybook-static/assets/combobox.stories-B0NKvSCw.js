import{o as B,s as T,u as L,a as R,F as G,b as z,c as A,d as _,e as V,f as H,g as U}from"./form-DtlXXF_B.js";import{r as e}from"./iframe-BiU2suBC.js";import{t as W}from"./index-DmqJAwmu.js";import{B as m}from"./button-o25yRkrR.js";import{C as f,a as v,b as w,c as x,d as C,e as E}from"./command-BrAYqIcW.js";import{D as Y,a as q,b as J,c as K,d as $,e as D,f as O,g as Q,h as X,i as Z,j as ee}from"./dropdown-menu-CLAbh3UN.js";import{P as y,a as h,b as N}from"./popover-C9OQbDuP.js";import{a as S}from"./utils-DgWKjmuI.js";import{C as F}from"./chevrons-up-down-DEqJJug6.js";import{C as P}from"./check-DwuV1CBk.js";import{E as te}from"./ellipsis-B5OVhsnz.js";import"./label-DQUVhDdS.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dSc6CJZX.js";import"./index-BZmy0mfy.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-CpP8DfwQ.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./dialog-CEwfEVDk.js";import"./x-CCE6G7Ad.js";import"./createLucideIcon-ng3sinjr.js";import"./search-Da9byjLw.js";import"./chevron-right-C1Com0QT.js";import"./circle-_0ReNRZy.js";import"./index-aDS8GPlc.js";import"./index-BEeKTTV4.js";import"./index-DrzUb6Kr.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-WGaa5q18.js";const{expect:ne,userEvent:j,within:oe}=__STORYBOOK_MODULE_TEST__,c=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}];function M(){const[l,r]=e.useState(!1),[n,a]=e.useState("");return e.createElement(y,{open:l,onOpenChange:r},e.createElement(h,{asChild:!0},e.createElement(m,{variant:"outline",role:"combobox","aria-expanded":l,className:"w-[200px] justify-between"},n?c.find(t=>t.value===n)?.label:"Select framework...",e.createElement(F,{className:"opacity-50"}))),e.createElement(N,{className:"w-[200px] p-0"},e.createElement(f,null,e.createElement(v,{placeholder:"Search framework...",className:"h-9"}),e.createElement(w,null,e.createElement(x,null,"No framework found."),e.createElement(C,null,c.map(t=>e.createElement(E,{key:t.value,value:t.value,onSelect:o=>{a(o===n?"":o),r(!1)}},t.label,e.createElement(P,{className:S("ml-auto",n===t.value?"opacity-100":"opacity-0")}))))))))}const Ye={title:"ui/Combobox",component:M,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An autocomplete input that combines a button, dropdown menu, and command palette for selecting options."}}},excludeStories:/.*Demo$/,render:()=>e.createElement(M,null)},u={},p={render:()=>{const[l,r]=e.useState(!1),[n,a]=e.useState("");return e.createElement(y,{open:l,onOpenChange:r},e.createElement(h,{asChild:!0},e.createElement(m,{variant:"outline",role:"combobox","aria-expanded":l,className:"w-[200px] justify-between"},n?c.find(t=>t.value===n)?.label:"Select framework...",e.createElement(F,{className:"opacity-50"}))),e.createElement(N,{className:"w-[200px] p-0",side:"top"},e.createElement(f,null,e.createElement(v,{placeholder:"Search framework...",className:"h-9"}),e.createElement(w,null,e.createElement(x,null,"No framework found."),e.createElement(C,null,c.map(t=>e.createElement(E,{key:t.value,value:t.value,onSelect:o=>{a(o===n?"":o),r(!1)}},t.label,e.createElement(P,{className:S("ml-auto",n===t.value?"opacity-100":"opacity-0")}))))))))}},i={render:()=>{const l=B({framework:T().min(1,{message:"Please select a framework."})});function r(){const n=L({resolver:R(l)});function a(t){W("You submitted the following values:",{description:e.createElement("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4"},e.createElement("code",{className:"text-white"},JSON.stringify(t,null,2)))})}return e.createElement(G,{...n},e.createElement("form",{onSubmit:n.handleSubmit(a),className:"space-y-6"},e.createElement(z,{control:n.control,name:"framework",render:({field:t})=>e.createElement(A,{className:"flex flex-col"},e.createElement(_,null,"Framework"),e.createElement(y,null,e.createElement(h,{asChild:!0},e.createElement(V,null,e.createElement(m,{variant:"outline",role:"combobox",className:S("w-[200px] justify-between",!t.value&&"text-muted-foreground")},t.value?c.find(o=>o.value===t.value)?.label:"Select framework",e.createElement(F,{className:"opacity-50"})))),e.createElement(N,{className:"w-[200px] p-0"},e.createElement(f,null,e.createElement(v,{placeholder:"Search framework...",className:"h-9"}),e.createElement(w,null,e.createElement(x,null,"No framework found."),e.createElement(C,null,c.map(o=>e.createElement(E,{value:o.label,key:o.value,onSelect:()=>{n.setValue("framework",o.value)}},o.label,e.createElement(P,{className:S("ml-auto",o.value===t.value?"opacity-100":"opacity-0")})))))))),e.createElement(H,null,"This is the framework that you will use for your project."),e.createElement(U,null))}),e.createElement(m,{type:"submit"},"Submit")))}return e.createElement(r,null)}},d={render:()=>{const l=[{value:"backlog",label:"Backlog"},{value:"todo",label:"Todo"},{value:"in progress",label:"In Progress"},{value:"done",label:"Done"},{value:"canceled",label:"Canceled"}];function r(){const[n,a]=e.useState(!1),[t,o]=e.useState(null);return e.createElement("div",{className:"flex items-center gap-4"},e.createElement("p",{className:"text-muted-foreground text-sm"},"Status"),e.createElement(y,{open:n,onOpenChange:a},e.createElement(h,{asChild:!0},e.createElement(m,{variant:"outline",className:"w-[150px] justify-start"},t?e.createElement(e.Fragment,null,t.label):e.createElement(e.Fragment,null,"+ Set status"))),e.createElement(N,{className:"p-0",side:"right",align:"start"},e.createElement(f,null,e.createElement(v,{placeholder:"Change status..."}),e.createElement(w,null,e.createElement(x,null,"No results found."),e.createElement(C,null,l.map(s=>e.createElement(E,{key:s.value,value:s.value,onSelect:k=>{o(l.find(I=>I.value===k)||null),a(!1)}},s.label))))))))}return e.createElement(r,null)}},b={render:()=>{const l=["feature","bug","enhancement","documentation","design","question","maintenance"];function r(){const[n,a]=e.useState("feature"),[t,o]=e.useState(!1);return e.createElement("div",{className:"flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center"},e.createElement("p",{className:"text-sm leading-none font-medium"},e.createElement("span",{className:"bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs"},n),e.createElement("span",{className:"text-muted-foreground"},"Create a new project")),e.createElement(Y,{open:t,onOpenChange:o},e.createElement(q,{asChild:!0},e.createElement(m,{variant:"ghost",size:"sm"},e.createElement(te,null))),e.createElement(J,{align:"end",className:"w-[200px]"},e.createElement(K,null,"Actions"),e.createElement($,null,e.createElement(D,null,"Assign to..."),e.createElement(D,null,"Set due date..."),e.createElement(O,null),e.createElement(Q,null,e.createElement(X,null,"Apply label"),e.createElement(Z,{className:"p-0"},e.createElement(f,null,e.createElement(v,{placeholder:"Filter label...",autoFocus:!0,className:"h-9"}),e.createElement(w,null,e.createElement(x,null,"No label found."),e.createElement(C,null,l.map(s=>e.createElement(E,{key:s,value:s,onSelect:k=>{a(k),o(!1)}},s))))))),e.createElement(O,null),e.createElement(D,{className:"text-red-600"},"Delete",e.createElement(ee,null,"⌘⌫"))))))}return e.createElement(r,null)}},g={name:"when user opens combobox and selects option, should update value",tags:["!dev","!autodocs"],render:()=>e.createElement(M,null),play:async({canvasElement:l,step:r})=>{const n=oe(l);await r("click combobox button to open",async()=>{const a=n.getByRole("combobox");await j.click(a)}),await r("select 'Next.js' option",async()=>{const a=await n.findByText("Next.js",{selector:'[role="option"]'});await j.click(a)}),await r("verify combobox shows selected value",async()=>{const a=n.getByRole("combobox");await ne(a).toHaveTextContent("Next.js")})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"The default combobox with framework selection example.",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
            {value ? frameworks.find(framework => framework.value === value)?.label : "Select framework..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" side="top">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map(framework => <CommandItem key={framework.value} value={framework.value} onSelect={currentValue => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}>
                    {framework.label}
                    <Check className={cn("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")} />
                  </CommandItem>)}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Combobox with popover positioned above.",...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const FormSchema = z.object({
      framework: z.string().min(1, {
        message: "Please select a framework."
      })
    });
    function ComboboxForm() {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
      });
      function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values:", {
          description: <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
              <code className="text-white">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
        });
      }
      return <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="framework" render={({
            field
          }) => <FormItem className="flex flex-col">
                  <FormLabel>Framework</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" role="combobox" className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}>
                          {field.value ? frameworks.find(framework => framework.value === field.value)?.label : "Select framework"}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." className="h-9" />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {frameworks.map(framework => <CommandItem value={framework.label} key={framework.value} onSelect={() => {
                        form.setValue("framework", framework.value);
                      }}>
                                {framework.label}
                                <Check className={cn("ml-auto", framework.value === field.value ? "opacity-100" : "opacity-0")} />
                              </CommandItem>)}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    This is the framework that you will use for your project.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>;
    }
    return <ComboboxForm />;
  }
}`,...i.parameters?.docs?.source},description:{story:"Combobox in a form with React Hook Form.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    type Status = {
      value: string;
      label: string;
    };
    const statuses: Status[] = [{
      value: "backlog",
      label: "Backlog"
    }, {
      value: "todo",
      label: "Todo"
    }, {
      value: "in progress",
      label: "In Progress"
    }, {
      value: "done",
      label: "Done"
    }, {
      value: "canceled",
      label: "Canceled"
    }];
    function ComboboxPopover() {
      const [open, setOpen] = React.useState(false);
      const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null);
      return <div className="flex items-center gap-4">
          <p className="text-muted-foreground text-sm">Status</p>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[150px] justify-start">
                {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="right" align="start">
              <Command>
                <CommandInput placeholder="Change status..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {statuses.map(status => <CommandItem key={status.value} value={status.value} onSelect={value => {
                    setSelectedStatus(statuses.find(priority => priority.value === value) || null);
                    setOpen(false);
                  }}>
                        {status.label}
                      </CommandItem>)}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>;
    }
    return <ComboboxPopover />;
  }
}`,...d.parameters?.docs?.source},description:{story:"Status selection popover variant.",...d.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const labels = ["feature", "bug", "enhancement", "documentation", "design", "question", "maintenance"];
    function ComboboxDropdownMenu() {
      const [label, setLabel] = React.useState("feature");
      const [open, setOpen] = React.useState(false);
      return <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
          <p className="text-sm leading-none font-medium">
            <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
              {label}
            </span>
            <span className="text-muted-foreground">Create a new project</span>
          </p>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Assign to...</DropdownMenuItem>
                <DropdownMenuItem>Set due date...</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Apply label</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Filter label..." autoFocus={true} className="h-9" />
                      <CommandList>
                        <CommandEmpty>No label found.</CommandEmpty>
                        <CommandGroup>
                          {labels.map(label => <CommandItem key={label} value={label} onSelect={value => {
                          setLabel(value);
                          setOpen(false);
                        }}>
                              {label}
                            </CommandItem>)}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Delete
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>;
    }
    return <ComboboxDropdownMenu />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Combobox integrated in dropdown menu.",...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "when user opens combobox and selects option, should update value",
  tags: ["!dev", "!autodocs"],
  render: () => <ComboboxDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("click combobox button to open", async () => {
      const comboboxButton = canvas.getByRole("combobox");
      await userEvent.click(comboboxButton);
    });
    await step("select 'Next.js' option", async () => {
      // Wait for the options to appear
      const nextjsOption = await canvas.findByText("Next.js", {
        selector: '[role="option"]'
      });
      await userEvent.click(nextjsOption);
    });
    await step("verify combobox shows selected value", async () => {
      const comboboxButton = canvas.getByRole("combobox");
      await expect(comboboxButton).toHaveTextContent("Next.js");
    });
  }
}`,...g.parameters?.docs?.source}}};const qe=["ComboboxDemo","Default","PopoverPosition","WithForm","StatusPopover","DropdownMenuIntegration","ShouldSelectOption"];export{M as ComboboxDemo,u as Default,b as DropdownMenuIntegration,p as PopoverPosition,g as ShouldSelectOption,d as StatusPopover,i as WithForm,qe as __namedExportsOrder,Ye as default};

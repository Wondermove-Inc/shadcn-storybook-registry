import{e}from"./iframe-BiU2suBC.js";import{u as p,a as f,F as b,b as g,c as w,d as h,e as v,f as F,g as y,o as I,h as R}from"./form-DtlXXF_B.js";import{t as B}from"./index-DmqJAwmu.js";import{B as i}from"./button-o25yRkrR.js";import{f as E,C as S}from"./calendar-CPs6VEsL.js";import{P as x,a as C,b as N}from"./popover-C9OQbDuP.js";import{a as P}from"./utils-DgWKjmuI.js";import{C as D}from"./calendar-BJ6ZmEyF.js";import"./preload-helper-PPVm8Dsz.js";import"./label-DQUVhDdS.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-dSc6CJZX.js";import"./chevron-left-CTb55qQx.js";import"./createLucideIcon-ng3sinjr.js";import"./chevron-right-C1Com0QT.js";import"./chevron-down-DnTtteVn.js";import"./index-Dc_FVRD7.js";import"./index-BT5_MN2X.js";import"./index-BX5uZP6s.js";import"./index-BUJQGk3H.js";import"./index-Dc81zcfA.js";import"./index-Ds7joiVY.js";import"./index-ynW3WxUC.js";import"./index-6_FvH4og.js";import"./index-DJRgpZyQ.js";import"./index-B1tj0AfO.js";import"./index-7qFhJqzR.js";import"./index-CpP8DfwQ.js";const{expect:l,userEvent:c,waitFor:u,within:L}=__STORYBOOK_MODULE_TEST__,T=I({dob:R({message:"A date of birth is required."})}),pe={title:"ui/Calendar/Blocks/Form Integration",tags:["autodocs"],parameters:{layout:"centered"}},s={render:()=>{const n=p({resolver:f(T)});function a(t){B("You submitted the following values",{description:e.createElement("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4"},e.createElement("code",{className:"text-white"},JSON.stringify(t,null,2)))})}return e.createElement(b,{...n},e.createElement("form",{onSubmit:n.handleSubmit(a),className:"space-y-8"},e.createElement(g,{control:n.control,name:"dob",render:({field:t})=>e.createElement(w,{className:"flex flex-col"},e.createElement(h,null,"Date of birth"),e.createElement(x,null,e.createElement(C,{asChild:!0},e.createElement(v,null,e.createElement(i,{variant:"outline",className:P("w-[240px] pl-3 text-left font-normal",!t.value&&"text-muted-foreground")},t.value?E(t.value,"PPP"):e.createElement("span",null,"Pick a date"),e.createElement(D,{className:"ml-auto h-4 w-4 opacity-50"})))),e.createElement(N,{className:"w-auto p-0",align:"start"},e.createElement(S,{mode:"single",selected:t.value,onSelect:t.onChange,disabled:o=>o>new Date||o<new Date("1900-01-01"),captionLayout:"dropdown"}))),e.createElement(F,null,"Your date of birth is used to calculate your age."),e.createElement(y,null))}),e.createElement(i,{type:"submit"},"Submit")))}},m={name:"when user selects date and submits, should show success message",tags:["!dev","!autodocs"],render:()=>{const n=p({resolver:f(T)});function a(t){B("You submitted the following values",{description:e.createElement("pre",{className:"mt-2 w-[320px] rounded-md bg-neutral-950 p-4"},e.createElement("code",{className:"text-white"},JSON.stringify(t,null,2)))})}return e.createElement(b,{...n},e.createElement("form",{onSubmit:n.handleSubmit(a),className:"space-y-8"},e.createElement(g,{control:n.control,name:"dob",render:({field:t})=>e.createElement(w,{className:"flex flex-col"},e.createElement(h,null,"Date of birth"),e.createElement(x,null,e.createElement(C,{asChild:!0},e.createElement(v,null,e.createElement(i,{variant:"outline",className:P("w-[240px] pl-3 text-left font-normal",!t.value&&"text-muted-foreground")},t.value?E(t.value,"PPP"):e.createElement("span",null,"Pick a date"),e.createElement(D,{className:"ml-auto h-4 w-4 opacity-50"})))),e.createElement(N,{className:"w-auto p-0",align:"start"},e.createElement(S,{mode:"single",selected:t.value,onSelect:t.onChange,disabled:o=>o>new Date||o<new Date("1900-01-01"),captionLayout:"dropdown"}))),e.createElement(F,null,"Your date of birth is used to calculate your age."),e.createElement(y,null))}),e.createElement(i,{type:"submit"},"Submit")))},play:async({canvasElement:n})=>{const a=L(n),t=a.getByRole("button",{name:/pick a date/i});await l(t).toBeInTheDocument(),await c.click(t),await u(async()=>{const r=await a.findAllByRole("button");await l(r.length).toBeGreaterThan(1)});const d=a.getAllByRole("button").find(r=>r.textContent?.trim()==="15");if(d){await c.click(d),await u(()=>{l(t.textContent).not.toMatch(/pick a date/i)});const r=a.getByRole("button",{name:/submit/i});await c.click(r),await u(async()=>{const k=await a.findByText(/you submitted the following values/i);await l(k).toBeInTheDocument()})}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast("You submitted the following values", {
        description: <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control} name="dob" render={({
          field
        }) => <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} captionLayout="dropdown" />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "when user selects date and submits, should show success message",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema)
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast("You submitted the following values", {
        description: <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
      });
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control} name="dob" render={({
          field
        }) => <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date > new Date() || date < new Date("1900-01-01")} captionLayout="dropdown" />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: Calendar Form이 날짜 선택 후 제출 시 정상 작동하는지 확인
    const triggerButton = canvas.getByRole("button", {
      name: /pick a date/i
    });
    await expect(triggerButton).toBeInTheDocument();

    // 트리거 버튼 클릭하여 Calendar 열기
    await userEvent.click(triggerButton);

    // Calendar가 열렸는지 확인
    await waitFor(async () => {
      const dateButtons = await canvas.findAllByRole("button");
      await expect(dateButtons.length).toBeGreaterThan(1);
    });

    // 날짜 버튼 찾기 (15일 선택)
    const dateButtons = canvas.getAllByRole("button");
    const date15Button = dateButtons.find(button => button.textContent?.trim() === "15");
    if (date15Button) {
      // 날짜 클릭
      await userEvent.click(date15Button);

      // 날짜가 선택되었는지 확인 (버튼 텍스트 변경)
      await waitFor(() => {
        expect(triggerButton.textContent).not.toMatch(/pick a date/i);
      });

      // Submit 버튼 클릭
      const submitButton = canvas.getByRole("button", {
        name: /submit/i
      });
      await userEvent.click(submitButton);

      // Toast 메시지 확인
      await waitFor(async () => {
        const toastMessage = await canvas.findByText(/you submitted the following values/i);
        await expect(toastMessage).toBeInTheDocument();
      });
    }
  }
}`,...m.parameters?.docs?.source}}};const fe=["Default","ShouldSubmitWithSelectedDate"];export{s as Default,m as ShouldSubmitWithSelectedDate,fe as __namedExportsOrder,pe as default};

import{e,r as k}from"./iframe-BiU2suBC.js";import{F as g,o as S,s as p,u as I,a as R,b as f,c as b,d as y,e as w,f as h,g as E}from"./form-DtlXXF_B.js";import{B as v}from"./button-o25yRkrR.js";import{I as x}from"./input-BRT9-IAl.js";import"./preload-helper-PPVm8Dsz.js";import"./label-DQUVhDdS.js";import"./utils-DgWKjmuI.js";import"./index-DF-uitis.js";import"./index-Bjt_zW8z.js";import"./index-CtYre8eh.js";import"./index-vBP3oNXZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-dSc6CJZX.js";const{expect:u,userEvent:s,within:T}=__STORYBOOK_MODULE_TEST__,U={title:"ui/Form",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Building forms with React Hook Form and Zod."}}}},M=S({username:p().min(6,{message:"Username must be at least 6 characters."})}),F=n=>{const t=I({resolver:R(M),defaultValues:{username:""}});function a(r){console.log("onSubmit",r)}return e.createElement(g,{...n,...t},e.createElement("form",{onSubmit:t.handleSubmit(a),className:"space-y-8"},e.createElement(f,{control:t.control,name:"username",render:({field:r})=>e.createElement(b,null,e.createElement(y,null,"Username"),e.createElement(w,null,e.createElement("input",{className:"border-input bg-background w-full rounded-md border px-3 py-2",placeholder:"username",...r})),e.createElement(h,null,"This is your public display name."),e.createElement(E,null))}),e.createElement(v,{type:"submit"},"Submit")))},m={render:()=>e.createElement(F,null)},i={name:"when typing a valid username, should not show an error message",tags:["!dev","!autodocs"],render:()=>e.createElement(F,null),play:async({canvas:n,step:t})=>{await t("Type a valid username",async()=>{await s.type(await n.findByRole("textbox",{name:/username/i}),"mockuser")}),await t("Click the submit button",async()=>{await s.click(await n.findByRole("button",{name:/submit/i})),u(await n.queryByText(/username must be at least 6 characters/i,{exact:!0})).toBeNull()})}},c={name:"when typing a short username, should show an error message",tags:["!dev","!autodocs"],render:()=>e.createElement(F,null),play:async({canvas:n,step:t})=>{await t("Type a short username",async()=>{await s.type(await n.findByRole("textbox",{name:/username/i}),"fail")}),await t("Click the submit button",async()=>{await s.click(await n.findByRole("button",{name:/submit/i})),u(await n.queryByText(/username must be at least 6 characters/i,{exact:!0})).toBeVisible()})}},l={render:()=>{const n=k.useRef(null),t=S({email:p().email({message:"Invalid email address."}),password:p().min(8,{message:"Password must be at least 8 characters."})}),a=I({resolver:R(t),defaultValues:{email:"",password:""}});function r(o){console.log("Form submitted:",o)}return e.createElement("div",{className:"flex flex-col gap-4"},e.createElement(g,{...a},e.createElement("form",{onSubmit:a.handleSubmit(r),className:"space-y-6"},e.createElement(f,{control:a.control,name:"email",render:({field:{ref:o,...d}})=>e.createElement(b,null,e.createElement(y,null,"Email"),e.createElement(w,null,e.createElement(x,{ref:B=>{o(B),n.current=B},type:"email",placeholder:"example@email.com",...d})),e.createElement(h,null,"Your email address for account access."),e.createElement(E,null))}),e.createElement(f,{control:a.control,name:"password",render:({field:o})=>e.createElement(b,null,e.createElement(y,null,"Password"),e.createElement(w,null,e.createElement(x,{type:"password",placeholder:"Enter password",...o})),e.createElement(h,null,"Must be at least 8 characters long."),e.createElement(E,null))}),e.createElement("div",{className:"flex gap-2"},e.createElement(v,{type:"submit"},"Submit"),e.createElement(v,{type:"button",variant:"outline",onClick:()=>n.current?.focus()},"Focus Email Input")))))},play:async({canvasElement:n})=>{const t=T(n),a=t.getByRole("button",{name:"Focus Email Input"});await s.click(a);const r=t.getByLabelText("Email");await u(r).toHaveFocus(),await s.type(r,"invalid-email");const o=t.getByRole("button",{name:"Submit"});await s.click(o);const d=await t.findByText("Invalid email address.");await u(d).toBeVisible()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ProfileForm />
}`,...m.parameters?.docs?.source},description:{story:"The default form of the form.",...m.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "when typing a valid username, should not show an error message",
  tags: ["!dev", "!autodocs"],
  render: () => <ProfileForm />,
  play: async ({
    canvas,
    step
  }) => {
    await step("Type a valid username", async () => {
      await userEvent.type(await canvas.findByRole("textbox", {
        name: /username/i
      }), "mockuser");
    });
    await step("Click the submit button", async () => {
      await userEvent.click(await canvas.findByRole("button", {
        name: /submit/i
      }));
      expect(await canvas.queryByText(/username must be at least 6 characters/i, {
        exact: true
      })).toBeNull();
    });
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "when typing a short username, should show an error message",
  tags: ["!dev", "!autodocs"],
  render: () => <ProfileForm />,
  play: async ({
    canvas,
    step
  }) => {
    await step("Type a short username", async () => {
      await userEvent.type(await canvas.findByRole("textbox", {
        name: /username/i
      }), "fail");
    });
    await step("Click the submit button", async () => {
      await userEvent.click(await canvas.findByRole("button", {
        name: /submit/i
      }));
      expect(await canvas.queryByText(/username must be at least 6 characters/i, {
        exact: true
      })).toBeVisible();
    });
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    // 🎯 목적: react-hook-form과 함께 ref를 명시적으로 관리
    const inputRef = useRef<HTMLInputElement>(null);
    const formSchema = z.object({
      email: z.string().email({
        message: "Invalid email address."
      }),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters."
      })
    });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log("Form submitted:", values);
    }
    return <div className="flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="email" render={({
            field: {
              ref,
              ...fieldWithoutRef
            }
          }) => <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input ref={e => {
                ref(e);
                // React 18 호환성: ref.current는 read-only이므로 타입 단언 사용
                (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = e;
              }} type="email" placeholder="example@email.com" {...fieldWithoutRef} />
                  </FormControl>
                  <FormDescription>
                    Your email address for account access.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="password" render={({
            field
          }) => <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Must be at least 8 characters long.
                  </FormDescription>
                  <FormMessage />
                </FormItem>} />

            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline" onClick={() => inputRef.current?.focus()}>
                Focus Email Input
              </Button>
            </div>
          </form>
        </Form>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // 🎯 목적: play function을 통해 form ref와 validation을 테스트
    const canvas = within(canvasElement);

    // "Focus Email Input" 버튼으로 email input에 focus
    const focusButton = canvas.getByRole("button", {
      name: "Focus Email Input"
    });
    await userEvent.click(focusButton);

    // Email input이 포커스되었는지 확인
    const emailInput = canvas.getByLabelText("Email");
    await expect(emailInput).toHaveFocus();

    // 잘못된 이메일 입력
    await userEvent.type(emailInput, "invalid-email");

    // Submit 버튼 클릭
    const submitButton = canvas.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submitButton);

    // Validation 에러 메시지 확인
    const errorMessage = await canvas.findByText("Invalid email address.");
    await expect(errorMessage).toBeVisible();
  }
}`,...l.parameters?.docs?.source},description:{story:`Ref 사용 예제: FormControl을 통해 Input에 ref를 전달하여 DOM 요소에 접근합니다.
react-hook-form의 register 대신 ref를 명시적으로 전달하는 방법을 보여줍니다.`,...l.parameters?.docs?.description}}};const Y=["Default","ShouldSucceedWhenValidInput","ShouldShowErrorWhenInvalidInput","WithRef"];export{m as Default,c as ShouldShowErrorWhenInvalidInput,i as ShouldSucceedWhenValidInput,l as WithRef,Y as __namedExportsOrder,U as default};

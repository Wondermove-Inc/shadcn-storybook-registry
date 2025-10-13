import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * A composable component for building accessible form fields with labels, descriptions, and error messages.
 * Provides consistent layout and styling for form inputs.
 */
const meta = {
  title: "ui/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 필드 예제입니다.
 * 레이블과 입력 필드의 기본 조합을 보여줍니다.
 */
export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="default-field">Name</FieldLabel>
      <Input id="default-field" placeholder="Enter your name" />
    </Field>
  ),
};

/**
 * FieldDemo 예제입니다.
 * 결제 방법 폼을 통해 Field 컴포넌트의 다양한 기능을 보여줍니다.
 */
export const Demo: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-expiry-f52">
                    Expiry Date
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-expiry-f52"
                    placeholder="MM/YY"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvc-u31">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvc-u31" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
            <FieldSeparator>Or</FieldSeparator>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-digital-wallet-w8i">
                  Digital Wallet
                </FieldLabel>
                <Select>
                  <SelectTrigger id="checkout-7j9-digital-wallet-w8i">
                    <SelectValue placeholder="Select wallet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple-pay">Apple Pay</SelectItem>
                    <SelectItem value="google-pay">Google Pay</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-address-ert">
                  Address
                </FieldLabel>
                <Input
                  id="checkout-7j9-address-ert"
                  placeholder="123 Main St"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-city-l9r">City</FieldLabel>
                <Input
                  id="checkout-7j9-city-l9r"
                  placeholder="New York"
                  required
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-state-b4j">
                    State
                  </FieldLabel>
                  <Input id="checkout-7j9-state-b4j" placeholder="NY" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-zip-i6t">
                    ZIP Code
                  </FieldLabel>
                  <Input id="checkout-7j9-zip-i6t" placeholder="10001" />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal" className="items-center">
            <Checkbox id="checkout-7j9-save-info-d5m" />
            <FieldLabel htmlFor="checkout-7j9-save-info-d5m">
              Save this information for next time
            </FieldLabel>
          </Field>
          <Button type="submit" className="w-full">
            Complete Purchase
          </Button>
        </FieldGroup>
      </form>
    </div>
  ),
};

/**
 * 수직 방향 필드입니다.
 * 레이블이 입력 필드 위에 위치합니다.
 */
export const Vertical: Story = {
  render: () => (
    <Field orientation="vertical" className="w-[300px]">
      <FieldLabel htmlFor="vertical-field">Email</FieldLabel>
      <Input id="vertical-field" type="email" placeholder="example@email.com" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),
};

/**
 * 수평 방향 필드입니다.
 * 레이블과 입력 필드가 나란히 위치합니다.
 */
export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="w-[400px]">
      <FieldLabel htmlFor="horizontal-field">Username</FieldLabel>
      <Input id="horizontal-field" placeholder="@username" />
    </Field>
  ),
};

/**
 * 반응형 필드입니다.
 * 화면 크기에 따라 수직/수평 레이아웃이 자동으로 변경됩니다.
 */
export const Responsive: Story = {
  render: () => (
    <Field orientation="responsive" className="w-full max-w-[400px]">
      <FieldLabel htmlFor="responsive-field">Full Name</FieldLabel>
      <Input id="responsive-field" placeholder="John Doe" />
    </Field>
  ),
};

/**
 * 설명이 포함된 필드입니다.
 * 추가적인 도움말이나 안내를 제공합니다.
 */
export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="description-field">Password</FieldLabel>
      <Input id="description-field" type="password" />
      <FieldDescription>Must be at least 8 characters long</FieldDescription>
    </Field>
  ),
};

/**
 * 오류 상태의 필드입니다.
 * 유효성 검사 실패 시 오류 메시지를 표시합니다.
 */
export const WithError: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="error-field">Email</FieldLabel>
      <Input
        id="error-field"
        type="email"
        placeholder="example@email.com"
        aria-invalid="true"
        className="border-destructive"
      />
      <FieldError>Please enter a valid email address</FieldError>
    </Field>
  ),
};

/**
 * 여러 오류가 있는 필드입니다.
 * 여러 개의 유효성 검사 오류를 목록으로 표시합니다.
 */
export const WithMultipleErrors: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="multi-error-field">Password</FieldLabel>
      <Input
        id="multi-error-field"
        type="password"
        aria-invalid="true"
        className="border-destructive"
      />
      <FieldError
        errors={[
          { message: "Password must be at least 8 characters" },
          { message: "Password must contain at least one number" },
          { message: "Password must contain at least one special character" },
        ]}
      />
    </Field>
  ),
};

/**
 * FieldSet 예제입니다.
 * 관련 필드들을 그룹화합니다.
 */
export const WithFieldSet: Story = {
  render: () => (
    <FieldSet className="w-full max-w-[400px]">
      <FieldLegend>Personal Information</FieldLegend>
      <FieldDescription>Please provide your personal details</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="fieldset-name">Name</FieldLabel>
          <Input id="fieldset-name" placeholder="John Doe" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldset-email">Email</FieldLabel>
          <Input
            id="fieldset-email"
            type="email"
            placeholder="john@example.com"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldset-phone">Phone</FieldLabel>
          <Input id="fieldset-phone" type="tel" placeholder="+1234567890" />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/**
 * Textarea 필드 예제입니다.
 * 여러 줄의 텍스트 입력을 위한 필드입니다.
 */
export const WithTextarea: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="textarea-field">Message</FieldLabel>
      <Textarea
        id="textarea-field"
        placeholder="Type your message here..."
        rows={4}
      />
      <FieldDescription>Maximum 500 characters</FieldDescription>
    </Field>
  ),
};

/**
 * Select 필드 예제입니다.
 * 드롭다운 선택을 위한 필드입니다.
 */
export const WithSelect: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="select-field">Country</FieldLabel>
      <Select>
        <SelectTrigger id="select-field">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  ),
};

/**
 * Checkbox 필드 예제입니다.
 * 체크박스와 레이블을 수평으로 배치합니다.
 */
export const WithCheckbox: Story = {
  render: () => (
    <div className="space-y-3">
      <Field orientation="horizontal" className="items-center">
        <Checkbox id="terms-field" />
        <FieldLabel htmlFor="terms-field">
          I agree to the terms and conditions
        </FieldLabel>
      </Field>
      <Field orientation="horizontal" className="items-center">
        <Checkbox id="newsletter-field" />
        <FieldLabel htmlFor="newsletter-field">
          Subscribe to newsletter
        </FieldLabel>
      </Field>
    </div>
  ),
};

/**
 * Radio Group 필드 예제입니다.
 * 여러 옵션 중 하나를 선택할 수 있습니다.
 */
export const WithRadioGroup: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Notification Preferences</FieldLegend>
      <FieldDescription>
        Choose how you want to receive notifications
      </FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" className="items-center">
          <RadioGroupItem value="email" id="radio-email" />
          <FieldLabel htmlFor="radio-email">Email</FieldLabel>
        </Field>
        <Field orientation="horizontal" className="items-center">
          <RadioGroupItem value="sms" id="radio-sms" />
          <FieldLabel htmlFor="radio-sms">SMS</FieldLabel>
        </Field>
        <Field orientation="horizontal" className="items-center">
          <RadioGroupItem value="push" id="radio-push" />
          <FieldLabel htmlFor="radio-push">Push Notifications</FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  ),
};

/**
 * FieldSeparator 예제입니다.
 * 필드 그룹 사이에 구분선과 텍스트를 추가합니다.
 */
export const WithSeparator: Story = {
  render: () => (
    <FieldGroup className="w-full max-w-[400px]">
      <Field>
        <FieldLabel htmlFor="login-email">Email</FieldLabel>
        <Input id="login-email" type="email" placeholder="Enter your email" />
      </Field>
      <Field>
        <FieldLabel htmlFor="login-password">Password</FieldLabel>
        <Input id="login-password" type="password" />
      </Field>
      <FieldSeparator>Or continue with</FieldSeparator>
      <Button variant="outline" className="w-full">
        Sign in with Google
      </Button>
      <Button variant="outline" className="w-full">
        Sign in with GitHub
      </Button>
    </FieldGroup>
  ),
};

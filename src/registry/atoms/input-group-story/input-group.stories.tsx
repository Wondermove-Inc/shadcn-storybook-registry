import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Check,
  Copy,
  CreditCard,
  Info,
  Loader2,
  Mail,
  Search,
  Star,
} from "lucide-react";
import * as React from "react";

/**
 * A flexible container for grouping inputs with labels, icons, buttons, and more.
 * InputGroup provides consistent styling and layout for complex input compositions.
 */
const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 입력 그룹입니다.
 * 단순한 입력 필드를 보여줍니다.
 */
export const Default: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupInput placeholder="Enter text..." />
    </InputGroup>
  ),
};

/**
 * 아이콘과 함께 사용하는 입력 그룹입니다.
 * 검색, 이메일, 카드 번호 등 다양한 용도로 사용됩니다.
 */
export const Icon: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCard />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Check />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <Star />
          <Info />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 텍스트 라벨과 함께 사용하는 입력 그룹입니다.
 * 통화, URL, 단위 등을 표시합니다.
 */
export const Text: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Weight" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>kg</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 버튼과 함께 사용하는 입력 그룹입니다.
 * 복사, 정보 표시 등의 기능을 제공합니다.
 */
export const Button: Story = {
  render: () => {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleCopy = async () => {
      const input = document.querySelector(
        "[data-input-group-input]",
      ) as HTMLInputElement;
      if (input) {
        await navigator.clipboard.writeText(input.value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    };

    const handleSend = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput
            placeholder="Enter text to copy"
            data-input-group-input
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleCopy} size="icon-xs">
              {isCopied ? <Check /> : <Copy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Enter message" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleSend} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Enter API key" />
          <InputGroupAddon align="inline-end">
            <Popover>
              <PopoverTrigger asChild>
                <InputGroupButton size="icon-xs">
                  <Info />
                </InputGroupButton>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm">
                  Your API key is used to authenticate requests to our service.
                </p>
              </PopoverContent>
            </Popover>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

/**
 * 블록 레이아웃 입력 그룹입니다.
 * 라벨이나 도움말을 입력 필드 위아래에 배치합니다.
 */
export const Block: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-muted-foreground text-xs">
            Label
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Enter value" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter value" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            Helper text goes here
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-xs font-medium">
            Email Address
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="email@example.com" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            We'll never share your email with anyone else.
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 혼합 레이아웃 입력 그룹입니다.
 * 다양한 요소를 조합하여 사용합니다.
 */
export const Mixed: Story = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText className="text-xs font-medium">
              Price
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="block-end">
            <InputGroupText className="text-muted-foreground text-xs">
              Including VAT
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText className="text-xs font-medium">
              Password
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-end">
            <InputGroupText className="text-muted-foreground text-xs">
              Must be at least 8 characters
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

/**
 * Textarea와 함께 사용하는 입력 그룹입니다.
 * 여러 줄 입력을 위한 그룹입니다.
 */
export const Textarea: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message..." rows={4} />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-xs font-medium">
            Description
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Describe your issue..." rows={4} />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            Maximum 500 characters
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Write your comment..." rows={3} />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm">Post</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 에러 상태의 입력 그룹입니다.
 * 유효성 검사 실패 시 표시됩니다.
 */
export const Error: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput
          placeholder="Enter email"
          aria-invalid="true"
          defaultValue="invalid-email"
        />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-destructive text-xs">
            Please enter a valid email address
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <Mail />
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          placeholder="email@example.com"
          aria-invalid="true"
        />
        <InputGroupAddon align="inline-end">
          <Info className="text-destructive" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 비활성화된 입력 그룹입니다.
 * 사용자 입력을 받지 않는 상태입니다.
 */
export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Disabled input" disabled />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>Copy</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

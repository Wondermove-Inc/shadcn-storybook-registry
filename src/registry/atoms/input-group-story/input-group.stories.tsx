import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Check,
  ChevronDown,
  Copy,
  CreditCard,
  HelpCircle,
  Info,
  Loader2,
  Mail,
  Plus,
  Search,
  Star,
} from "lucide-react";
import * as React from "react";

/**
 * Groups input elements with related buttons, icons, or text.
 * Provides a consistent way to enhance inputs with additional functionality.
 */
const meta = {
  title: "ui/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

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
 * 텍스트와 함께 사용하는 입력 그룹입니다.
 * 통화, URL, 이메일 도메인 등을 표시합니다.
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
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 버튼과 함께 사용하는 입력 그룹입니다.
 * 복사, 정보 표시 등의 기능을 제공합니다.
 */
export const ButtonExample: Story = {
  render: () => {
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = async () => {
      const input = document.querySelector(
        "[data-input-1]",
      ) as HTMLInputElement;
      if (input) {
        await navigator.clipboard.writeText(input.value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    };

    return (
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput
            placeholder="npm install @radix-ui/react-icons"
            defaultValue="npm install @radix-ui/react-icons"
            data-input-1
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleCopy} size="icon-xs">
              {isCopied ? <Check /> : <Copy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Enter your password" type="password" />
          <InputGroupAddon align="inline-end">
            <Popover>
              <PopoverTrigger asChild>
                <InputGroupButton size="icon-xs">
                  <Info />
                </InputGroupButton>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">
                    Password requirements
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Your password must be at least 8 characters long and contain
                    at least one uppercase letter, one lowercase letter, and one
                    number.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

/**
 * 툴팁과 함께 사용하는 입력 그룹입니다.
 * 추가 정보를 제공합니다.
 */
export const TooltipExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="API Key" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton size="icon-xs">
                <HelpCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Find your API key in your account settings</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter domain name" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>e.g., example.com</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * Textarea와 함께 사용하는 입력 그룹입니다.
 * 여러 줄 입력을 지원합니다.
 */
export const TextareaExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" rows={4} />
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-muted-foreground text-xs">
            Bio
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Tell us about yourself" />
      </InputGroup>
    </div>
  ),
};

/**
 * 스피너와 함께 사용하는 입력 그룹입니다.
 * 로딩 상태를 표시합니다.
 */
export const SpinnerExample: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput placeholder="Checking availability..." />
          <InputGroupAddon>
            <Spinner className="h-4 w-4" />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Search users..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="sm"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Search"
              )}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

/**
 * 라벨과 함께 사용하는 입력 그룹입니다.
 * 폼 필드에 라벨을 추가합니다.
 */
export const LabelExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <div className="space-y-2">
        <Label htmlFor="email-1">Email</Label>
        <InputGroup>
          <InputGroupInput
            id="email-1"
            type="email"
            placeholder="Enter your email"
          />
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <Label htmlFor="username-1">Username</Label>
        </InputGroupAddon>
        <InputGroupInput id="username-1" placeholder="Enter username" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            Must be 3-20 characters
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 드롭다운과 함께 사용하는 입력 그룹입니다.
 * 추가 옵션을 제공합니다.
 */
export const DropdownExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Select action..." />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton size="icon-xs">
                <ChevronDown />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Copy</DropdownMenuItem>
              <DropdownMenuItem>Cut</DropdownMenuItem>
              <DropdownMenuItem>Paste</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 버튼 그룹과 함께 사용하는 입력 그룹입니다.
 * 여러 액션을 그룹화합니다.
 */
export const ButtonGroupExample: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput
          placeholder="Quantity"
          type="number"
          defaultValue="1"
        />
        <InputGroupAddon align="inline-end">
          <ButtonGroup>
            <Button size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
          </ButtonGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

/**
 * 커스텀 입력 예제입니다.
 * 복잡한 입력 시나리오를 보여줍니다.
 */
export const CustomInput: Story = {
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <Label htmlFor="password-1">Password</Label>
          </InputGroupAddon>
          <InputGroupInput
            id="password-1"
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
        <InputGroup>
          <InputGroupAddon align="block-start">
            <Label htmlFor="price-1">Price</Label>
          </InputGroupAddon>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput id="price-1" placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="block-end">
            <InputGroupText className="text-muted-foreground text-xs">
              Including tax
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
};

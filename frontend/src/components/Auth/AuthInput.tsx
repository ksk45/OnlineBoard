import { Eye, LockKeyhole, Mail, User } from "lucide-react";
import { useState, type JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// cssの条件分岐を記載
const inputField = tv({
  // slots：デフォルトのcssを記述
  slots: {
    label: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
    input:
      "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm",
    error: "mt-2 text-sm text-red-600 dark:text-red-500",
  },
  // variants: 条件に応じたcssを記述
  variants: {
    error: {
      true: {
        label: "text-red-700 dark:text-red-500",
        input:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border",
      },
    },
  },
});

// props定義
type AuthInputProps = VariantProps<typeof inputField> & {
  errorMessage?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// メイン処理
const AuthInput = (props: AuthInputProps) => {
  const { label, input, error } = inputField({
    error: !!props.errorMessage,
  });

  // inputのtype定義
  const types: Record<string, string> = {
    email: "email",
    pass: "password",
    pass_new: "password",
    pass_conf: "password",
  };
  const type = types[props.type] || "text";

  // input名定義
  const inputLabels: Record<string, string> = {
    email: "Email Address",
    pass: "Password",
    pass_new: "Password",
    pass_conf: "Confirm Password",
    name: "Name",
  };
  const inputLabel = inputLabels[props.type] || "Input value";

  // placeholderのアイコン定義
  const placeholderIconsClass = "absolute ml-2 text-gray-400";

  const placeholderIcons: Record<string, JSX.Element> = {
    email: <Mail className={placeholderIconsClass} />,
    pass: <LockKeyhole className={placeholderIconsClass} />,
    pass_new: <LockKeyhole className={placeholderIconsClass} />,
    pass_conf: <LockKeyhole className={placeholderIconsClass} />,
    name: <User className={placeholderIconsClass} />,
  };
  const placeholderIcon = placeholderIcons[props.type] || null;

  // placeholder定義
  const placeholders: Record<string, string> = {
    email: "Enter your email",
    pass: "Enter your password",
    pass_new: "Create a password",
    pass_conf: "Confirm your password",
    name: "Enter your Name",
  };
  const placeholder = placeholders[props.type] || "Enter value";

  // pass確認ボタン定義
  const [isVisible, setIsVisible] = useState(false);
  const togglePassVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <label className={label()}>{inputLabel}</label>
      <div className="relative flex items-center">
        {placeholderIcon}
        <input
          type={isVisible ? "text" : type}
          placeholder={placeholder}
          className={`${input()} pl-10`}
          required
          value={props.value}
          onChange={props.onChange}
        />
        {(props.type === "pass" || props.type === "pass_new") && (
          <button
            type="button"
            onClick={togglePassVisibility}
            className="absolute right-2 text-gray-400"
            tabIndex={-1}
          >
            <Eye />
          </button>
        )}
      </div>
      {props.errorMessage && (
        <div className={error()}>{props.errorMessage}</div>
      )}
    </div>
  );
};

export default AuthInput;

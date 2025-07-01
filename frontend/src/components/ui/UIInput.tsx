import type React from "react";
import type { InputHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

// props定義
interface UIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
}

const inputField = tv({
  // slots デフォルトcssを定義
  slots: {
    label: "mb-2 block text-sm font-medium text-gray-900",
    input:
      "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm pl-10",
    error: "mt-2 text-sm text-red-600",
  },
  // variants 条件に応じて追加・変更するcssを定義
  variants: {
    error: {
      true: {
        label: "text-red-700",
        input:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border",
      },
    },
  },
});

// メイン処理
const UIInput = ({
  inputLabel,
  leftIcon,
  rightIcon,
  errorMessage,
  className = "",
  ...props
}: UIInputProps) => {
  const { label, input, error } = inputField({
    error: !!errorMessage,
  });

  return (
    <div>
      <div className={label()}>{inputLabel}</div>
      <div className="relative flex items-center">
        {leftIcon}
        <input
          {...props}
          className={`${input()} ${className}`}
        />
        {rightIcon}
      </div>
      {errorMessage && (
        <div className={error()}>{errorMessage}</div>
      )}
    </div>
  );
};
export default UIInput;

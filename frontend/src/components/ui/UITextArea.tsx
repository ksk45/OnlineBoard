import type { TextareaHTMLAttributes } from "react";
import type React from "react";
import { tv } from "tailwind-variants";

// props定義
interface UITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
}

const inputField = tv({
  // slots デフォルトcssを定義
  slots: {
    label: "mb-2 block text-sm font-medium text-gray-900",
    textarea:
      "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm pl-3",
    error: "mt-2 text-sm text-red-600",
  },
  // variants 条件に応じて追加・変更するcssを定義
  variants: {
    error: {
      true: {
        label: "text-red-700",
        textarea:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border",
      },
    },
  },
});

// メイン処理
const UITextArea = ({
  inputLabel,
  leftIcon,
  rightIcon,
  errorMessage,
  className = "",
  ...props
}: UITextAreaProps) => {
  const { label, textarea, error } = inputField({
    error: !!errorMessage,
  });

  return (
    <div>
      <div className={label()}>{inputLabel}</div>
      <div className="relative flex items-center">
        {leftIcon}
        <textarea {...props} className={`${textarea()} ${className}`} />
        {rightIcon}
      </div>
      {errorMessage && <div className={error()}>{errorMessage}</div>}
    </div>
  );
};
export default UITextArea;

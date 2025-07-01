import type { ButtonHTMLAttributes, ReactNode } from "react";

// props定義
interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

// メイン処理
const UIButton = ({ children, className = "", ...props }: UIButtonProps) => {
  return (
    <button
      className={`w-full h-10 mx-auto rounded-xl flex items-center justify-center space-x-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default UIButton;

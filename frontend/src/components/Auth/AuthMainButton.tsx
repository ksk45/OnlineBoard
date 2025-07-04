import UIButton from "../ui/UIButton";
import { LogIn, User, UserPlus } from "lucide-react";
import type { AuthMode } from "../../types/auth";

// props定義
type AuthMainButtonProps = {
  authMode: AuthMode;
};

// ボタンラベル定義
const getButtonLabel = (authMode: AuthMode) => {
  switch (authMode) {
    case "signIn":
      return (
        <>
          <LogIn className="w-5" />
          <span>Sign In</span>
        </>
      );
    case "signUp":
      return (
        <>
          <UserPlus />
          <span>Create Account</span>
        </>
      );
    case "guest":
      return (
        <>
          <User />
          <span>Join as Guest</span>
        </>
      );
  }
};

// ボタンごとのスタイル定義
const getButtonGradient: Record<AuthMode, string> = {
  signIn: "from-blue-500 to-purple-600",
  signUp: "from-green-500 to-teal-600",
  guest: "from-orange-500 to-pink-600",
};

const AuthMainButton = ({ authMode }: AuthMainButtonProps) => {
  return (
    <UIButton
      className={`text-white bg-gradient-to-r ${getButtonGradient[authMode]}`}
      type="submit"
    >
      {getButtonLabel(authMode)}
    </UIButton>
  );
};

export default AuthMainButton;

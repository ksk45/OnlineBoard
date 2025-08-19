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
  signIn:
    "from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:from-blue-600 focus:to-purple-700",
  signUp:
    "from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:from-green-600 focus:to-teal-700",
  guest:
    "from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 focus:from-orange-600 focus:to-pink-700",
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

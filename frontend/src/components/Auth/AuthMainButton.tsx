import { LogIn, User, UserPlus } from "lucide-react";
import { tv } from "tailwind-variants";
import type { AuthMode } from "../../types/auth";

type AuthMainButtonProps = {
  authMode: AuthMode;
};

const styles = tv({
  base: "w-full h-10 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white flex items-center justify-center space-x-2",
  variants: {
    authMode: {
      signIn: "from-blue-500 to-purple-600",
      signUp: "from-green-500 to-teal-600",
      guest: "from-orange-500 to-pink-600",
    },
  },
  defaultVariants: {
    authMode: "signIn",
  },
});

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

const AuthMainButton = ({ authMode }: AuthMainButtonProps) => {
  return (
    <button type="button" className={styles({ authMode })}>
      {getButtonLabel(authMode)}
    </button>
  );
};

export default AuthMainButton;

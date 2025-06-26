import { Palette } from "lucide-react";
import type { AuthMode } from "../../types/auth";

type AuthHeaderProps = {
  authMode: AuthMode;
};

const AuthHeader = ({ authMode }: AuthHeaderProps) => {
  
  const getTitle = () => {
    switch (authMode) {
      case "signIn":
        return "Welcome";
      case "signUp":
        return "Create Account";
      case "guest":
        return "Join as Guest"
    }
  };

  
  return (
    <>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex justify-center items-center">
          <Palette size="33" className="text-white" />
        </div>
        <h2 className="text-3xl font-bold">{getTitle()}</h2>
      </div>
    </>
  );
};

export default AuthHeader;

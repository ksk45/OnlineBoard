import { User, UserPlus } from "lucide-react";
import type { AuthMode } from "../../types/auth";
import UIButton from "../ui/UIButton";

type AuthSubActionsProps = {
  authMode: AuthMode;
  handleSetAuthMode: (mode: AuthMode) => void;
};

const AuthSubActions = (props: AuthSubActionsProps) => {
  if (props.authMode === "signIn") {
    return (
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full">
            <UIButton
              className="bg-slate-300 text-slate-700"
              onClick={() => props.handleSetAuthMode("signUp")}
            >
              <UserPlus size="20" />
              <span>Sign Up</span>
            </UIButton>
          </div>
          <div className="w-full">
            <UIButton
              className="bg-emerald-200 text-emerald-600"
              onClick={() => props.handleSetAuthMode("guest")}
            >
              <User size="20" />
              <span>Guest</span>
            </UIButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <button className="text-slate-600" onClick={() => props.handleSetAuthMode("signIn")}>
        ←&emsp;Back to Sign In
      </button>
    </div>
  );
};

export default AuthSubActions;

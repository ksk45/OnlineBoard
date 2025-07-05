import { useEffect, useState, type JSX } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../components/Auth/AuthHeader";
import AuthSubActions from "../components/Auth/AuthSubActions";
import GuestForm from "../components/Auth/Form/GuestForm";
import SignInForm from "../components/Auth/Form/SignInForm";
import SignUpForm from "../components/Auth/Form/SignUpForm";
import type { AuthMode } from "../types/auth";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("signIn");
  const navigate = useNavigate();
  const location = useLocation();

  
  // authModeとURLを同時に変更する関数
  const handleSetAuthMode = (mode: AuthMode) => {
    setAuthMode(mode);
    switch (mode) {
      case "signIn":
        navigate("/");
        break;
      case "signUp":
        navigate("/sign-up");
        break;
      case "guest":
        // ゲストログインのパスを指定
        // navigate();
        break;
    }
  };

  // URLとauthModeを同期
  useEffect(() => {
    if (location.pathname === "/sign-up") {
      setAuthMode("signUp");
    }
    // 必要に応じて他のパスもここで制御可能
  }, [location.pathname]);

  // authModeに応じてフォームを切り替え
  const inputForm: Record<AuthMode, JSX.Element> = {
    signIn: <SignInForm authMode={authMode} />,
    signUp: <SignUpForm authMode={authMode} />,
    guest: <GuestForm />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-md w-full space-y-8 mx-auto">
        <AuthHeader authMode={authMode} />
        <div className="bg-white w-full h-auto p-15 rounded-2xl space-y-5 shadow-2xl">
          {inputForm[authMode]}
          <AuthSubActions authMode={authMode} handleSetAuthMode={handleSetAuthMode} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

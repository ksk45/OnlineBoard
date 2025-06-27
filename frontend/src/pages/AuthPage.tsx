import { useState, type JSX } from "react";
import AuthHeader from "../components/Auth/AuthHeader";
import AuthInput from "../components/Auth/AuthInput";
import AuthMainButton from "../components/Auth/AuthMainButton";
import type { AuthMode } from "../types/auth";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("signIn");

  // それぞれのフォームを定義
  // サインイン
  const signInForm = () => (
    <>
      <AuthInput type="email" />
      <AuthInput type="pass" errorMessage="不正な値です" />
      <AuthMainButton authMode={authMode} />
    </>
  );
  // サインアップ
  const signUpForm = () => (
    // TODO: サインアップ画面作成時に定義
    <></>
  );

  // ゲストログイン
  const guestForm = () => (
    //TODO: ゲストログイン画面作成時に定義
    <></>
  );

  // authModeに応じてフォームを切り替え
  const inputForm: Record<AuthMode, JSX.Element> = {
    signIn: signInForm(),
    signUp: signUpForm(),
    guest: guestForm(),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-md w-full space-y-8 mx-auto">
        <AuthHeader authMode={authMode} />
        <div className="bg-white w-full h-auto p-15 rounded-2xl space-y-4 shadow-2xl">
          {inputForm[authMode]}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

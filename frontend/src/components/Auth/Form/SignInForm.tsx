import React, { useState } from "react";
import type { AuthMode } from "../../../types/auth";
import {
  setUserAuthErrorMessage,
  validateEmailFormat,
  validateMaxLength,
  validateMinLength,
  validatePasswordComplexity,
  validateRequired,
} from "../../../utils/validation";
import AuthInput from "../AuthInput";
import AuthMainButton from "../AuthMainButton";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// props定義
type SignInFormProps = {
  authMode: AuthMode;
};

// サインイン画面のフォームセット
const SignInForm = (props: SignInFormProps) => {
  // useState定義
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [commonErrMessage, setCommonErrMessage] = useState("");

  // ユーザーコンテキスト取得
  const userContext = useUser();

  const navigate = useNavigate();

  // バリデーション関数
  const isValid = () => {
    // emailバリデーション
    const emailErr =
      [
        validateRequired(email, "メールアドレスは必須です"),
        validateMaxLength(email, 100),
        validateEmailFormat(email),
      ].find(Boolean) || "";
    setEmailErr(emailErr);

    // パスワードバリデーション
    const passwordErr =
      [
        validateRequired(password, "パスワードは必須です"),
        validateMinLength(password, 8),
        validateMaxLength(password, 64),
        validatePasswordComplexity(password),
      ].find(Boolean) || "";
    setPasswordErr(passwordErr);

    // バリデーションエラーがあればfalseを返す
    return !emailErr && !passwordErr;
  };

  // POSTエラー時、エラーセット
  const fieldErrorSet = (errorData: Record<string, string>) => {
    setEmailErr(errorData.email || "");
    setPasswordErr(errorData.password || "");
  }

  // POSTapi呼び出し
  const handleSubmit = async (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();

    // フォーム送信前にすべてのエラーメッセージをクリア
    setEmailErr("");
    setPasswordErr("");
    setCommonErrMessage("");

    // バリデーションチェック
    if (!isValid()) return;
    const res = await fetch("/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      userContext.setUser({
        userId: data.userId,
        userName: data.userName,
        email: data.email,
      });
      navigate("/menu");
    } else {
      const errorData = await res.json();
      if (res.status === 400) {
        if (errorData.fieldErrors) {
          fieldErrorSet(errorData.fieldErrors);
        } else {
          alert(`予期せぬエラーが発生しました`);
        }
      } else if (res.status === 401) {
        setCommonErrMessage(setUserAuthErrorMessage())
      } else {
        alert(`予期せぬエラーが発生しました`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {commonErrMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {commonErrMessage}
        </div>
      )}
      <AuthInput
        type="email"
        errorMessage={emailErr}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="pass"
        errorMessage={passwordErr}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthMainButton authMode={props.authMode} />
    </form>
  );
};

export default SignInForm;

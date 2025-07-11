import React, { useState } from "react";
import type { AuthMode } from "../../../types/auth";
import {
  validateEmailFormat,
  validateMaxLength,
  validateMinLength,
  validatePasswordComplexity,
  validateRequired,
} from "../../../utils/validation";
import AuthInput from "../AuthInput";
import AuthMainButton from "../AuthMainButton";

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

  // POSTapi呼び出し
  const handleSubmit = (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();
    // バリデーションチェック
    if (!isValid()) return;
  // const handleSubmit = async () => {
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    /** バックエンド実装までのダミー st */
    alert(`email: ${email} \npassword: ${password} \nログイン処理成功（ダミー）`);
    /** バックエンド実装までのダミー ed */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

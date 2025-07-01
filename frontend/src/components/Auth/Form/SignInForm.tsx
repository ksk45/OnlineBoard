import React, { useState } from "react";
import type { AuthMode } from "../../../types/auth";
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
  // POSTapi呼び出し
  const handleSubmit = (e: React.FormEvent) => {
  // const handleSubmit = async () => {
    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    /** バックエンド実装までのダミー st */
    e.preventDefault();
    alert(`email: ${email} \npassword: ${password} \nログイン処理成功（ダミー）`);
    /** バックエンド実装までのダミー ed */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput
        type="email"
        errorMessage=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="pass"
        errorMessage=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthMainButton authMode={props.authMode} />
    </form>
  );
};

export default SignInForm;

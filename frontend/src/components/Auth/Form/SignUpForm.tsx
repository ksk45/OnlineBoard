import React, { useState } from "react";
import type { AuthMode } from "../../../types/auth";
import {
  validateEmailFormat,
  validateLength,
  validateMaxLength,
  validatePasswordComplexity,
  validatePasswordMatch,
  validateRequired
} from "../../../utils/validation";
import AuthInput from "../AuthInput";
import AuthMainButton from "../AuthMainButton";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

// props定義
type SignUpFormProps = {
  authMode: AuthMode;
};

// サインアップ画面のフォームセット
const SignUpForm = (props: SignUpFormProps) => {
  // useState定義
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passNew, setPassNew] = useState("");
  const [passConf, setPassConf] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passNewErr, setPassNewErr] = useState("");
  const [passConfErr, setPassConfErr] = useState("");

  // ユーザーコンテキスト取得
  const userContext = useUser();

  const navigate = useNavigate();
  

  // バリデーション定義
  const isValid = () => {
    // nameバリデーション
    const nameErr =
      [
        validateRequired(name, "名前は必須です"),
        validateMaxLength(name, 100),
      ].find(Boolean) || "";
    setNameErr(nameErr);

    // emailバリデーション
    const emailErr =
      [
        validateRequired(email, "メールアドレスは必須です"),
        validateMaxLength(email, 100),
        validateEmailFormat(email),
      ].find(Boolean) || "";
    setEmailErr(emailErr);

    // パスワードバリデーション
    const passNewErr =
      [
        validateRequired(passNew, "パスワードは必須です"),
        // validateMinLength(passNew, 8),
        // validateMaxLength(passNew, 64),
        validateLength(passNew, 8, 64),
        validatePasswordComplexity(passNew),
        validatePasswordMatch(passNew, passConf),
      ].find(Boolean) || "";
      setPassNewErr(passNewErr);
      
      // Confirmパスワードバリデーション
      const passConfErr =
      [
        validateRequired(passConf, "パスワードは必須です"),
        // validateMinLength(passConf, 8),
        // validateMaxLength(passConf, 64),
        validateLength(passNew, 8, 64),
        validatePasswordComplexity(passConf),
        validatePasswordMatch(passNew, passConf),
      ].find(Boolean) || "";
    setPassConfErr(passConfErr);

    return !nameErr && !emailErr && !passNewErr && !passConfErr;
  };

  // POSTエラー時、エラーセット
  const fieldErrorSet = (errors: Record<string, string>) => {
    setNameErr(errors.name || "");
    setEmailErr(errors.email || "");
    setPassNewErr(errors.passNew || "");
    setPassConfErr(errors.passConf || "");
  }

  // POSTapi呼び出し
  const handleSubmit = async (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();
    // バリデーションチェック
    if (!isValid()) return;
    const res = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, passNew, passConf }),
    });
    
    if (res.ok) {
      const data = await res.json();
      userContext.setUser({
        userId: data.userId,
        userName: data.userName,
        email: data.mail,
      });
      navigate("/menu");
    } else {
      const errorData = await res.json();
      if (res.status === 400 || res.status === 409) {
        if (errorData.fieldErrors) {
          fieldErrorSet(errorData.fieldErrors);
        } else {
          alert(`予期せぬエラーが発生しました`);
        }
      } else {
        alert(`予期せぬエラーが発生しました`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput
        type="name"
        errorMessage={nameErr}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AuthInput
        type="email"
        errorMessage={emailErr}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="pass_new"
        errorMessage={passNewErr}
        value={passNew}
        onChange={(e) => setPassNew(e.target.value)}
      />
      <AuthInput
        type="pass_conf"
        errorMessage={passConfErr}
        value={passConf}
        onChange={(e) => setPassConf(e.target.value)}
      />
      <AuthMainButton authMode={props.authMode} />
    </form>
  );
};

export default SignUpForm;

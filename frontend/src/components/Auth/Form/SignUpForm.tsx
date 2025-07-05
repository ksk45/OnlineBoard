import { useState } from "react";
import type { AuthMode } from "../../../types/auth";
import AuthInput from "../AuthInput";
import AuthMainButton from "../AuthMainButton";
import {
  validateEmailFormat,
  validateMaxLength,
  validateMinLength,
  validatePasswordComplexity,
  validatePasswordMatch,
  validateRequired,
} from "../../../utils/validation";

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
  const [nameError, setNameErr] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passNewError, setPassNewError] = useState("");
  const [passConfError, setPassConfError] = useState("");

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
    setEmailError(emailErr);

    // パスワードバリデーション
    const passNewErr =
      [
        validateRequired(passNew, "パスワードは必須です"),
        validatePasswordMatch(passNew, passConf),
        validateMinLength(passNew, 8),
        validateMaxLength(passNew, 64),
        validatePasswordComplexity(passNew),
        validatePasswordMatch(passNew, passConf),
      ].find(Boolean) || "";
    setPassNewError(passNewErr);

    // Confirmパスワードバリデーション
    const passConfErr =
      [
        validateRequired(passConf, "パスワードは必須です"),
        validatePasswordMatch(passNew, passConf),
        validateMinLength(passConf, 8),
        validateMaxLength(passConf, 64),
        validatePasswordComplexity(passConf),
        validatePasswordMatch(passNew, passConf),
      ].find(Boolean) || "";
    setPassConfError(passConfErr);
  };

  return (
    <>
      <AuthInput
        type="name"
        errorMessage=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AuthInput
        type="email"
        errorMessage=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="pass_new"
        errorMessage=""
        value={passNew}
        onChange={(e) => setPassNew(e.target.value)}
      />
      <AuthInput
        type="pass_conf"
        errorMessage=""
        value={passConf}
        onChange={(e) => setPassConf(e.target.value)}
      />
      <AuthMainButton authMode={props.authMode} />
    </>
  );
};

export default SignUpForm;

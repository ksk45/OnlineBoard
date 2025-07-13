import React, { useState } from "react";
import AuthInput from "../AuthInput";
import { validateMaxLength, validateRequired } from "../../../utils/validation";
import AuthMainButton from "../AuthMainButton";

// ゲストログイン
const GuestForm = () => {
  // useState定義
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  // エラー定義
  const isValid = () => {
    const nameErr =
      [
        validateRequired(name, "名前は必須です"),
        validateMaxLength(name, 100),
      ].find(Boolean) || "";
    setNameErr(nameErr);

    // バリデーションエラーがあればfalseを返す
    return !nameErr;
  };

  return (
    <form className="space-y-4">
      <AuthInput
        errorMessage={nameErr}
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AuthMainButton authMode="guest" />
    </form>
  );
};

export default GuestForm;

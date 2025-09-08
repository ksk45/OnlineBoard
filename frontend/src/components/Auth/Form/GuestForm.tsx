import React, { useState } from "react";
import AuthInput from "../AuthInput";
import { validateMaxLength, validateRequired } from "../../../utils/validation";
import AuthMainButton from "../AuthMainButton";
import { useUser } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import UIErrorField from "../../ui/UIErrorField";

// ゲストログイン
const GuestForm = () => {
  // useState定義
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [commonErrMessage, setCommonErrMessage] = useState("");

  // ユーザーコンテキスト取得
  const userContext = useUser();
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();
    // バリデーションチェック
    if (!isValid()) return;

    // フォーム送信前にすべてのエラーメッセージをクリア
    setNameErr("");
    setCommonErrMessage("");

    userContext.setUser({
      userId: -1,
      userName: name,
      email: "guest",
    });
    navigate("/menu");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {commonErrMessage && <UIErrorField errorMessage={commonErrMessage} />}
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

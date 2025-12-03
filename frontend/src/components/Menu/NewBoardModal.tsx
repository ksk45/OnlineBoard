import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { validateMaxLength, validateRequired } from "../../utils/validation";
import UIButton from "../ui/UIButton";
import UIErrorField from "../ui/UIErrorField";
import UIInput from "../ui/UIInput";
import UITextArea from "../ui/UITextArea";

type NewBoardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};


const NewBoardModal = (props: NewBoardModalProps) => {
  
  const userContext = useUser();
  // useState定義
  const [wbName, setWbName] = useState("");
  const [wbDesc, setWbDesc] = useState("");
  const [wbNameErr, setWbNameErr] = useState("");
  const [commonErrMessage, setCommonErrMessage] = useState("");

  const navigate = useNavigate();

  // isOpenがfalseの場合は何も表示しない
  if (!props.isOpen) {
    return null;
  }

  // バリデーション定義
  const isValid = () => {
    const wbNameErr = [
      validateRequired(wbName, "ホワイトボード名は必須です"),
      validateMaxLength(wbName, 50),
    ].find(Boolean) || "";
    setWbNameErr(wbNameErr);

    return !wbNameErr;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();
    // バリデーションチェック
    if (!isValid()) return;

    // フォーム送信前にすべてのエラーメッセージをクリア
    setWbNameErr("");
    setCommonErrMessage("");

    const res = await fetch("api/board/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wbName, wbDesc, userContext: userContext.user }),
    });
    
    if (res.ok) {
      const data = await res.json();
      console.log("処理成功");
      navigate(`/board/${data.boardUuid}`);
    } else {
      console.log("処理失敗");
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center">
      <div className="w-100 h-130 bg-white space-y-4 rounded-2xl overflow-auto">
        <div className="flex justify-between border-b border-gray-300 p-5">
          <div className="text-lg font-bold">Create New WhiteBoard</div>
          <button
            className="pr-2 text-gray-400 cursor-pointer"
            onClick={props.onClose}
          >
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-5 space-y-4">
          {commonErrMessage && <UIErrorField errorMessage={commonErrMessage} />}
          <UIInput
            inputLabel="WhiteBoard Name *"
            placeholder="Enter whiteboard name"
            type="text"
            value={wbName}
            onChange={(e) => setWbName(e.target.value)}
            errorMessage={wbNameErr}
          />
          <UITextArea
            inputLabel="Description"
            placeholder="Optional description..."
            value={wbDesc}
            onChange={(e) => setWbDesc(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <div className="w-23">
              <UIButton
                className="h-9 px-4 bg-white border rounded-md border-gray-300"
                onClick={props.onClose}
              >
                Cancel
              </UIButton>
            </div>
            <div className="w-43">
              <UIButton className="h-9 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white">
                Create Whiteboard
              </UIButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBoardModal;

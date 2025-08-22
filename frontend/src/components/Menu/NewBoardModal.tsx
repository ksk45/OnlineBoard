import { X } from "lucide-react";
import UIButton from "../ui/UIButton";
import UIInput from "../ui/UIInput";
import UITextArea from "../ui/UITextArea";
import type React from "react";
import { useState } from "react";
import { validateMaxLength, validateRequired } from "../../utils/validation";

type NewBoardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};


const NewBoardModal = (props: NewBoardModalProps) => {
  
  // useState定義
  const [wbName, setWbName] = useState("");
  const [wbDesc, setWbDesc] = useState("");
  const [wbNameErr, setWbNameErr] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    // submitのデフォルト挙動（ページ遷移）をキャンセル
    e.preventDefault();
    // バリデーションチェック
    if (!isValid()) return;

    alert(`wbName: ${wbName}, wbDesc: ${wbDesc}`);
    
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

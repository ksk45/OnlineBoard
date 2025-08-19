import { X } from "lucide-react";
import UIButton from "../ui/UIButton";
import UIInput from "../ui/UIInput";
import UITextArea from "../ui/UITextArea";

type NewBoardModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewBoardModal = (props: NewBoardModalProps) => {
  // isOpenがfalseの場合は何も表示しない
  if (!props.isOpen) {
    return null;
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
          />
          <UITextArea
            inputLabel="Description"
            placeholder="Optional description..."
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

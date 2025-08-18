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
      <div className="w-100 h-130 bg-white space-y-8 rounded-2xl">
        <div className="flex justify-between border-b border-gray-300 p-5">
          <div className="text-lg font-bold">Create New WhiteBoard</div>
          <button
            className="ml-5 h-9 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white"
            onClick={props.onClose}
          >
          ボタン
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default NewBoardModal;

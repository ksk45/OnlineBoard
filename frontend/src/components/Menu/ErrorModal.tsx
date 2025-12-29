import { TriangleAlert } from "lucide-react";
import UIButton from "../ui/UIButton";
import { useNavigate } from "react-router-dom";

type ErrorModalProps = {
  isOpen: boolean;
};

const ErrorModal = (props: ErrorModalProps) => {
  const navigate = useNavigate();

  // メニューに遷移
  const handleGoHome = () => {
    navigate("/");
  };

  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-gray-500/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto">
        <div className="flex items-center space-x-3 text-red-600">
          <TriangleAlert className="w-6 h-6" />
          <h3 className="text-lg font-medium">エラーが発生しました</h3>
        </div>
        <div className="mt-4 text-gray-700 text-sm">
          <p>
            予期せぬエラーが発生しました。お手数ですが、時間をおいて再度アクセスしてください。
          </p>
        </div>
        <br />
        <UIButton
          className="border w-full py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100"
          onClick={handleGoHome}
        >
          <div>トップへ</div>
        </UIButton>
      </div>
    </div>
  );
};

export default ErrorModal;

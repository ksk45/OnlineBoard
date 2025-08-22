import { Palette } from "lucide-react";
import UIHeader from "../ui/UIHeader";
import { useUser } from "../../contexts/UserContext";

const MenuHeaderLeftContent = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex justify-center items-center mr-2">
        <Palette size="20" className="text-white" />
      </div>
      <h1 className="text-2xl font-bold m-0 p-0">OnlineBoard</h1>
    </div>
  );
};

const MenuHeaderRightContent = () => {
  const userContext = useUser();
  const userName = userContext.user ? userContext.user.userName : "AAA";
  const iconChar = userName ? userName[0] : "AAA";

  return (
    <div className="flex items-center space-x-2">
      {/* ユーザーアイコン */}
      {/* TODO: アイコンカラーの自動取得？ */}
      <div className="w-8 h-8 rounded-full bg-teal-300 flex items-center justify-center text-white font-bold">
        {iconChar}
      </div>

      {/* ユーザー名 */}
      <button>
        <div className="flex flex-col w-20">
          <span className="text-base font-semibold text-gray-800">
            {userName}
          </span>
          <span className="text-sm text-gray-500">
            {userContext.user ? "" : "Guest User"}
          </span>
        </div>
      </button>
    </div>
  );
};

const MenuHeader = () => {
  return (
    <UIHeader
      leftContent={MenuHeaderLeftContent()}
      rightContent={MenuHeaderRightContent()}
    />
  );
};

export default MenuHeader;

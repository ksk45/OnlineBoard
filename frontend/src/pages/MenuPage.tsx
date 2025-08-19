import { useState } from "react";
import MenuHeader from "../components/Menu/MenuHeader";
import NewBoardModal from "../components/Menu/NewBoardModal";
import { useUser } from "../contexts/UserContext";
import UIButton from "../components/ui/UIButton";

const MenuPage = () => {
  const userContext = useUser();
  const [isNewBoard, setIsNewBoard] = useState(false);

  return (
    <div>
      <MenuHeader />
      <h1>メニュー</h1>
      <div className="flex items-center justify-between w-14/15">
        <div>{/* TODO:検索ボックス */}</div>
        <div>
          <UIButton
            className="px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            onClick={() => setIsNewBoard(true)}
          >
            + New WhiteBoard
          </UIButton>
        </div>
      </div>
      <p>ここにメニューの内容が表示されます。</p>
      <p>現在のユーザー</p>
      <p>ID: {userContext.user ? userContext.user.userId : "未ログイン"}</p>
      <p>ユーザー名: {userContext.user ? userContext.user.userName : ""}</p>
      <p>メールアドレス: {userContext.user ? userContext.user.email : ""}</p>

      {/* 「+ New WhiteBoard」押下時のモーダル */}
      <NewBoardModal isOpen={isNewBoard} onClose={() => setIsNewBoard(false)} />
    </div>
  );
};

export default MenuPage;

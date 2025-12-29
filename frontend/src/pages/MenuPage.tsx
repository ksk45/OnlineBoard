import { useEffect, useState } from "react";
import BoardItem from "../components/Menu/BoardItem";
import MenuHeader from "../components/Menu/MenuHeader";
import NewBoardModal from "../components/Menu/NewBoardModal";
import UIButton from "../components/ui/UIButton";
import { useUser } from "../contexts/UserContext";
import type { MenuBoardDto } from "../types/board/MenuBoardDto";
import ErrorModal from "../components/Menu/ErrorModal";

const MenuPage = () => {
  const userContext = useUser();
  const [boards, setBoards] = useState<MenuBoardDto[]>([]);
  const [isNewBoard, setIsNewBoard] = useState(false);
  const [isError, setIsError] = useState(false);

  // 初期遷移時、GETapi呼び出し
  useEffect(() => {
    // 関数定義: GETapi呼び出し
    const fetchBoardData = async () => {
      console.log("get開始");
      const res = await fetch("/api/menu/");

      if (res.ok) {
        setIsError(false); // 初期処理: エラー表示をoffに
        const data = await res.json();
        setBoards(data.boardList);
      } else {
        setIsError(true);
      }
    };

    // 関数呼び出し: GETapi呼び出し
    fetchBoardData();
  }, []);

  return (
    <div>
      <MenuHeader />
      <div className="bg-gray-100">
        <div className="flex items-center justify-between w-14/15 pt-5">
          <div>メニュー{/* TODO:検索ボックス */}</div>
          <div>
            <UIButton
              className="px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              onClick={() => setIsNewBoard(true)}
            >
              + New WhiteBoard
            </UIButton>
          </div>
        </div>
        <p>現在のユーザー</p>
        <p>
          ID: {userContext.user ? userContext.user.userId : "未ログイン"},
          ユーザー名: {userContext.user ? userContext.user.userName : ""},
          メールアドレス: {userContext.user ? userContext.user.email : ""}
        </p>
        <div className="w-full p-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {boards.map((board) => (
            <BoardItem
              boardUuid={board.boardUuid}
              boardName={board.boardName}
              collaboratorNum={board.memberCount}
              boardCreatedAt={board.boardCreatedAt}
            />
          ))}
        </div>
      </div>

      {/* 「+ New WhiteBoard」押下時のモーダル */}
      <NewBoardModal isOpen={isNewBoard} onClose={() => setIsNewBoard(false)} />
      {/* 初期ロードエラー発生時のエラーモーダル */}
      <ErrorModal isOpen={isError} />
    </div>
  );
};

export default MenuPage;

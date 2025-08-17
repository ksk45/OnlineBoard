import MenuHeader from "../components/Menu/MenuHeader";
import { useUser } from "../contexts/UserContext";

const MenuPage = () => {
  const userContext = useUser();

  return (
    <div>
      <MenuHeader />
      <h1>メニュー</h1>
      <div className="flex items-center justify-between w-14/15">
        <div>
          {/* TODO:検索ボックス */}
        </div>
        <button className="h-9 px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white">
          + New WhiteBoard
        </button>
      </div>
      <p>ここにメニューの内容が表示されます。</p>
	  <p>現在のユーザー</p>
    <p>ID: {userContext.user ? userContext.user.userId : "未ログイン"}</p>
	  <p>ユーザー名: {userContext.user ? userContext.user.userName : ""}</p>
	  <p>メールアドレス: {userContext.user ? userContext.user.email : ""}</p>
    </div>
  );
};

export default MenuPage;

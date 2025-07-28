import { useUser } from "../contexts/UserContext";

const MenuPage = () => {
  const userContext = useUser();

  return (
    <div>
      <h1>メニュー</h1>
      <p>ここにメニューの内容が表示されます。</p>
	  <p>現在のユーザー: {userContext.user ? userContext.user.userName : "未ログイン"}</p>
    </div>
  );
};

export default MenuPage;

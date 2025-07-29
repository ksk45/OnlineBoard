import { useUser } from "../contexts/UserContext";

const MenuPage = () => {
  const userContext = useUser();

  return (
    <div>
      <h1>メニュー</h1>
      <p>ここにメニューの内容が表示されます。</p>
	  <p>現在のユーザー</p>
    <p>ID: {userContext.user ? userContext.user.userId : "未ログイン"}</p>
	  <p>ユーザー名: {userContext.user ? userContext.user.userName : ""}</p>
	  <p>メールアドレス: {userContext.user ? userContext.user.email : ""}</p>
    </div>
  );
};

export default MenuPage;

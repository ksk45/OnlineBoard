import { createContext, useContext, useState, type ReactNode } from "react";

// セッションユーザーの型定義
type User = {
	userId: number;
	userName: string;
	email: string;
} | null;

// ユーザーコンテキストの型定義
type UserContextType = {
	user: User;
	setUser: (user: User) => void;
};

// ユーザーコンテキスト
export const UserContext = createContext<UserContextType>({
	user: null,
	setUser: () => {},
});

// props定義
type UserProviderProps = {
	children: ReactNode;
};

// ユーザープロバイダー
export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<User>(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
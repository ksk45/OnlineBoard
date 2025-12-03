import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import BoardPage from "./pages/BoardPage";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/sign-up" element={<AuthPage />}></Route>
          <Route path="/guest" element={<AuthPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/board/:boardUuid" element={<BoardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
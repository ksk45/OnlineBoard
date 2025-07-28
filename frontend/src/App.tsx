import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import { UserProvider } from "./contexts/UserContext";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/sign-up" element={<AuthPage />}></Route>
          <Route path="/guest" element={<AuthPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
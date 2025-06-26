import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
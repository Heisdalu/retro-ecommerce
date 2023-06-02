import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/AuthPage/Login";
import SignUp from "./pages/AuthPage/SignUp";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="bg-white relative">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

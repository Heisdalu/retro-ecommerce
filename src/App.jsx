import Header from "./components/Header/Header";
// import Login from "./pages/AuthPage/Login";
// import SignUp from "./pages/AuthPage/SignUp";
// import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="bg-white relative">
      <Header />
      <HomePage />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <CartPage /> */}
    </div>
  );
}

export default App;

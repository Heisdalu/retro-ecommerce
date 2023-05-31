import Header from "./components/Header/Header";
import Login from "./pages/AuthPage/Login";
import SignUp from "./pages/AuthPage/SignUp";
// import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="bg-white">
      <Header />
      {/* <HomePage /> */}
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;

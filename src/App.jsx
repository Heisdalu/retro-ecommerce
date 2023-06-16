import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Login from "./pages/AuthPage/Login";
import SignUp from "./pages/AuthPage/SignUp";
import CartPage from "./pages/CartPage/CartPage";
import VisitorPage from "./pages/VisitorPage/VisitorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MainPage from "./pages/MainPage/MainPage";
import { useEffect } from "react";
import { fetchData } from "./redux/thunk/DataThunk";
import { useDispatch } from "react-redux";
import {
  updateCart,
  updateSaved,
} from "./redux/reducers/visitorSlice/VisitorProductSlice";
import useLocalStoage from "./hooks/localStorage/useLocalStoage";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { error, errorMessage } = useSelector((state) => state.visitor.data);
  const { localState } = useLocalStoage();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(updateCart(localState?.cart || []));
      dispatch(updateSaved(localState?.saved || []));
    }
  }, [dispatch, isAuthenticated, localState?.cart, localState?.saved]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white relative">
        <Header isAuthenticated={isAuthenticated} />

        {!error && (
          <div>
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <MainPage /> : <VisitorPage />}
              />
              <Route
                path="/login"
                element={<Login isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/sign-up"
                element={<SignUp isAuthenticated={isAuthenticated} />}
              />
              <Route path="/Cart" element={<CartPage />} />
              <Route path="*" element={<ErrorPage text="Page not found" />} />
            </Routes>
          </div>
        )}

        {/* if main data fails to fetch, show eror page */}
        {error && <ErrorPage text={errorMessage} />}
      </div>
    </>
  );
}

export default App;

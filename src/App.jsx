import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Login from "./pages/AuthPage/Login";
import SignUp from "./pages/AuthPage/SignUp";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/thunk/DataThunk";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import useLocalStoage from "./hooks/localStorage/useLocalStoage";
import { fetchUserProduct } from "./redux/thunk/UserProductThunk";
import { update_UserProduct_ForNot_SignedInUser } from "./redux/reducers/UserProductSlice";

function App() {
  const { isAuthenticated, userAuthDetail } = useSelector(
    (state) => state.auth
  );
  const { error, errorMessage } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { localState } = useLocalStoage();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserProduct(userAuthDetail.uid));
    } else {
      dispatch(update_UserProduct_ForNot_SignedInUser(localState));
    }
  }, [dispatch, isAuthenticated, localState, userAuthDetail.uid]);

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
              <Route path="/" element={<HomePage />} />
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

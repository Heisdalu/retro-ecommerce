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
import { fetchGuestProduct } from "./redux/thunk/guestProductThunk";
import useIdentifier from "./hooks/Identifier/useIdentifier";
import { fetchActiveUserProduct } from "./redux/thunk/activeUserProductThunk";
import useAuthObserver from "./hooks/auth/useAuthObserver";
import SavedPage from "./pages/Savedpage/SavedPage";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, userAuthDetail } = useSelector(
    (state) => state.auth
  );
  const { error, errorMessage } = useSelector((state) => state.data);

  const guestId = useIdentifier();
  useAuthObserver();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(fetchGuestProduct(guestId));
    } else {
      dispatch(fetchActiveUserProduct(userAuthDetail.uid));
    }
  }, [dispatch, guestId, isAuthenticated, userAuthDetail.uid]);

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
        toastClassName="toasifyFont "
      />
      <div className="bg-white relative">
        <Header
          isAuthenticated={isAuthenticated}
          displayName={userAuthDetail?.displayName}
        />
        {/* <MobileHamburger /> */}

        {!error && (
          <div>
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <MainPage userId={userAuthDetail.uid} />
                  ) : (
                    <VisitorPage userId={guestId} />
                  )
                }
              />
              <Route
                path="/login"
                element={<Login isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/sign-up"
                element={<SignUp isAuthenticated={isAuthenticated} />}
              />
              <Route
                path="/Cart"
                element={
                  <CartPage
                    userId={isAuthenticated ? userAuthDetail.uid : guestId}
                    isAuthenticated={isAuthenticated}
                  />
                }
              />
              <Route
                path="/saved"
                element={
                  <SavedPage
                    isAuthenticated={isAuthenticated}
                    userId={isAuthenticated ? userAuthDetail.uid : guestId}
                  />
                }
              />
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

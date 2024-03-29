/* eslint-disable react/display-name */
import pic from "../../assets/authIcon.png";
import logOutPic from "../../assets/logoutPic.png";
import LoginPic from "../../assets/signIn.png";
import signUp from "../../assets/signup.png";
import { ForwardedRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import welcomePic from "../../assets/welcome.png";
import { useSelector } from "react-redux";
import SavedIcon from "../../assets/icons/SavedIcon";
import useLogOut from "../../hooks/auth/useLogOut";
import { RootState } from "../../redux";

interface MobileHamburgerProps {
  toggleFunc: () => void;
}

const MobileHamburger = forwardRef(
  (
    { toggleFunc }: MobileHamburgerProps,
    ref: ForwardedRef<HTMLDivElement | null>
  ) => {
    const { LogOut } = useLogOut();

    const { isAuthenticated, userAuthDetail } = useSelector(
      (state: RootState) => state.auth
    );
    const logoutHandler = () => {
      toggleFunc();
      LogOut();
    };

    return (
      <>
        <div
          className="mobileModal fixed w-100 z-[100] flex flex-col bg-white md:hidden space-y-0.5 overflow-hidden max-h-[0]"
          ref={ref}
        >
          {isAuthenticated && (
            <div className="flex items-center px-1 pt-1.5">
              <img src={pic} alt="" className="h-[25px] mr-0.5" />
              <h1 className="text-[1.1rem] font-Inter font-500">
                Hi,{" "}
                {"displayName" in userAuthDetail && userAuthDetail?.displayName}
              </h1>
            </div>
          )}

          {!isAuthenticated && (
            <div className="px-1 pt-1.5 flex items-center">
              <img src={welcomePic} alt="" className="h-[20px] mr-0.5" />
              <h1 className="text-[1.1rem] font-Inter font-500">
                Welcome to Retro
              </h1>
            </div>
          )}

          <Link
            to="/saved"
            className="wish text-left py-0.5 px-1 flex items-center"
            onClick={toggleFunc}
          >
            <span className="block mr-0.5">
              <SavedIcon />
            </span>
            Wishlist
          </Link>

          {!isAuthenticated && (
            <Link
              to="/login"
              className="text-left py-0.5 px-1 flex items-center"
              onClick={toggleFunc}
            >
              <img src={LoginPic} alt="" className="h-[18px] mr-0.5" />
              Login
            </Link>
          )}

          {!isAuthenticated && (
            <Link
              to="/sign-up"
              className="text-left py-0.5 px-1 flex items-center pb-1.5"
              onClick={toggleFunc}
            >
              <img src={signUp} alt="" className="h-[18px] mr-0.5" />
              Sign Up
            </Link>
          )}

          {isAuthenticated && (
            <button
              className="text-left py-0.5 px-1 pb-1.5 flex items-center"
              onClick={logoutHandler}
            >
              <img src={logOutPic} alt="" className="h-[18px] mr-0.5" />
              Log out
            </button>
          )}
        </div>
      </>
    );
  }
);
export default MobileHamburger;

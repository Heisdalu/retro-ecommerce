import logOutPic from "../../assets/logoutPic.png";
import orderPic from "../../assets/orders.png";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SavedIcon from "../../assets/icons/SavedIcon";
import useLogOut from "../../hooks/auth/useLogOut";

// eslint-disable-next-line react/display-name
const HeaderModal = forwardRef((props, ref) => {
  const { LogOut } = useLogOut();

  const logoutHandler = () => {
    props.toggleHeader();
    LogOut();
  };

  return (
    <div
      className="hidden w-[150px] mt-[3px] md:hidden flex-col absolute top-[100%] left-[-10px] bg-white rounded-[4px] shadow-gx1 "
      ref={ref}
    >
      <Link
        to="/saved"
        className="mt-0.5 ml-[0.4rem] flex p-0.5 items-center hover:opacity-[0.5] active:opacity-[0.8] font-Inter font-400"
        onClick={props.toggleHeader}
      >
        {/* <img src={savedPic} alt="" className="h-[18px] mr-0.5" /> */}
        <div className="h-[18px] mr-0.5 flex items-center">
          <SavedIcon />
        </div>
        <span>Wishlist</span>
      </Link>
      <Link
        to="/orders"
        className="ml-0.5 flex p-0.5 items-center hover:opacity-[0.5] active:opacity-[0.8] font-Inter font-400"
        onClick={props.toggleHeader}
      >
        <img src={orderPic} alt="" className="h-[18px] mr-0.5" />
        Orders
      </Link>
      <button
        className="font-Inter font-400 ml-0.5 mb-0.5 text-left p-0.5 flex items-center hover:opacity-[0.5] active:opacity-[0.8]"
        onClick={logoutHandler}
      >
        <img src={logOutPic} alt="" className="h-[18px] mr-0.5" />
        Log out
      </button>
    </div>
  );
});
export default HeaderModal;

HeaderModal.propTypes = {
  toggleHeader: PropTypes.func,
};

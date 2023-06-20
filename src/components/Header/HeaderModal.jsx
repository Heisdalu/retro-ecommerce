import savedPic from "../../assets/saved.png";
import DownPic from "../../assets/down.png";
import logOutPic from "../../assets/logoutPic.png";
import orderPic from "../../assets/orders.png";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line react/display-name
const HeaderModal = forwardRef((props, ref) => {
  return (
    <div
      className="hidden w-[150px] mt-[3px] md:hidden flex-col absolute top-[100%] left-[-10px] bg-white rounded-[4px] shadow-gx1 "
      ref={ref}
    >
      <Link
        to="/saved"
        className="mt-0.5 ml-0.5 flex p-0.5 items-center hover:opacity-[0.5] active:opacity-[0.8]"
        onClick={props.toggleHeader}
      >
        <img src={savedPic} alt="" className="h-[18px] mr-0.5" />
        Saved
      </Link>
      <Link
        to="/orders"
        className="ml-0.5 flex p-0.5 items-center hover:opacity-[0.5] active:opacity-[0.8]"
        onClick={props.toggleHeader}
      >
        <img src={orderPic} alt="" className="h-[18px] mr-0.5" />
        Orders
      </Link>
      <button
        className="ml-0.5 mb-0.5 text-left p-0.5 flex items-center hover:opacity-[0.5] active:opacity-[0.8]"
        onClick={props.toggleHeader}
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

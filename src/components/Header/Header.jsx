import Hamburger from "../../assets/icons/Hamburger";
import CartIcon from "../../assets/icons/CartIcon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ isAuthenticated }) => {
  return (
    <header className="flex items-center p-1 py-[1.3rem] text-center border-b-1 sticky border-bc1 top-[0] z-[11] bg-white md:px-2">
      <button className="md:hidden">
        <Hamburger />
      </button>
      <h1 className="w-[100%] font-700 text-2 md:mr-auto md:w-[auto]">
        <Link to="/">RETRO</Link>
      </h1>
      {!isAuthenticated && (
        <Link
          to="sign-up"
          className="hidden py-0.5 px-1 md:block md:text-1 border-1  active:bg-black active:text-white rounded-[7px]"
        >
          Sign up
        </Link>
      )}
      {!isAuthenticated && (
        <Link
          to="login"
          className="hidden border-1 mx-1 py-0.5 px-1 md:block md:text-1 rounded-[7px] bg-black text-white active:bg-white active:text-black"
        >
          Login
        </Link>
      )}
      <Link to="cart" className="ml-auto md:ml-[0] relative">
        <div className="absolute top-[-15px] right-[0] bg-gray text-white text-0.75 rounded-[50%] w-[20px] h-[20px]">
          4
        </div>
        <CartIcon />
      </Link>
    </header>
  );
};
export default Header;

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

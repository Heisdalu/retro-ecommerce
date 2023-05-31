import Hamburger from "../../assets/icons/Hamburger";
import Cart from "../../assets/icons/Cart";

const Header = () => {
  return (
    <header className="flex items-center p-1 py-[1.3rem] text-center border-b-1 border-bc1 md:px-2">
      <button className="md:hidden">
        <Hamburger />
      </button>
      <h1 className="w-[100%] font-700 text-2 md:mr-auto md:w-[auto]">RETRO</h1>
      <button className="hidden py-0.5 px-1 md:block md:text-1 border-1  active:bg-black active:text-white rounded-[7px]">
        Sign up
      </button>
      <button className="hidden border-1 mx-1 py-0.5 px-1 md:block md:text-1 rounded-[7px] bg-black text-white active:bg-white active:text-black">
        Login
      </button>
      <button className="ml-auto md:ml-[0] relative">
        <div className="absolute top-[-15px] right-[0] bg-gray text-white text-0.75 rounded-[50%] w-[20px] h-[20px]">
          4
        </div>
        <Cart />
      </button>
    </header>
  );
};
export default Header;
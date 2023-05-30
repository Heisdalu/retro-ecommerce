import Hamburger from "../assets/icons/Hamburger";
import Cart from "../assets/icons/Cart";
import SearchBar from "../components/SearchBar/SearchBar";
import FavoriteList from "../components/FavoriteList/FavoriteList";

const HomePage = () => {
  return (
    <div>
      <header className="flex p-1 py-[1.3rem] text-center border-b-1 border-bc1 overflow-hiddencom">
        <button>
          <Hamburger />
        </button>
        <h1 className="w-[100%] font-700 text-2">RETRO</h1>
        <button className="ml-auto">
          <Cart />
        </button>
      </header>
      <SearchBar />
      <FavoriteList />
    </div>
  );
};
export default HomePage;

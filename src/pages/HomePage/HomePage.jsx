import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";

const HomePage = () => {
  return (
    <div>
      <div className="sticky top-[91px] z-[11] bg-white">
        <SearchBar />
        <FavoriteList />
      </div>
      <CardList />
    </div>
  );
};
export default HomePage;

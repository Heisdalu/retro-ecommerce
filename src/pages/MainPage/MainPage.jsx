import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Loading from "../../components/Loading/Loading";
import CardList from "../../components/CardList/CardList";

const MainPage = () => {


  console.log("main");
  return (
    <div>
      <div>
        <div className="sticky top-[91px] z-[11] bg-white md:static">
          <SearchBar />
          <FavoriteList />
        </div>

        {
          <div className="flex flex-col justify-center text-center mt-2">
            <Loading color="#000" style="h-[100px]" />
            <div>Please wait...</div>
          </div>
        }
        {/* <CardList dataItem={[]} /> */}
      </div>
    </div>
  );
};
export default MainPage;

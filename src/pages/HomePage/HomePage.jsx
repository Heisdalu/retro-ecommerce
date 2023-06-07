import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.data);

  console.log(data, loading, error);

  return (
    <div>
      {!error && (
        <div>
          <div className="sticky top-[91px] z-[11] bg-white md:static">
            <SearchBar />
            <FavoriteList />
          </div>

          {loading && (
            <div className="flex flex-col justify-center text-center mt-2">
              <Loading color="#000" style="h-[100px]" />
              <div>Please wait...</div>
            </div>
          )}
          <CardList dataItem={data} />
        </div>
      )}
    </div>
  );
};
export default HomePage;

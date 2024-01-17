import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";
import { GUESTS } from "../../constants/Types";
import { RootState } from "../../redux";

const VisitorPage = ({ userId }: { userId: string }) => {
  const { loading } = useSelector((state: RootState) => state.data);
  const product = useSelector((state: RootState) => state.visitor.data);
  const { mainData } = useSelector((state: RootState) => state.data);

  return (
    <div>
      <div>
        <div className="sticky top-[81px] z-[11] bg-white md:static">
          <SearchBar />
          <FavoriteList />
        </div>

        {loading && (
          <div className="flex flex-col justify-center text-center mt-2">
            <Loading color="#000" style="h-[100px]" />
            <div>Please wait...</div>
          </div>
        )}
        <CardList
          mainData={mainData}
          userProduct={product}
          userID={userId}
          databaseID={GUESTS}
        />
      </div>
    </div>
  );
};
export default VisitorPage;


import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { GUESTS } from "../../constants/Types";

const VisitorPage = ({ userId }) => {
  const { loading } = useSelector((state) => state.data);
  const product = useSelector((state) => state.visitor.data);
  const { mainData } = useSelector((state) => state.data);

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

VisitorPage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  userId: PropTypes.string,
};

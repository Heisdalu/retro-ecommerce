import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const VisitorPage = () => {
  const { visitorData, loading } = useSelector((state) => state.visitor.data);
  const product = useSelector((state) => state.visitor.product);

  return (
    <div>
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
        <CardList dataItem={visitorData} userProduct={product} />
      </div>
    </div>
  );
};
export default VisitorPage;

VisitorPage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

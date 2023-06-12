import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../redux/thunk/DataThunk";
import useLocalStoage from "../../hooks/localStorage/useLocalStoage";
import { updateProduct } from "../../redux/reducers/visitorSlice/VisitorProductSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { visitorData, loading } = useSelector((state) => state.visitor.data);
  const { visitorProduct } = useSelector((state) => state.visitor.product);
  const { localState } = useLocalStoage();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateProduct(localState));
  }, [dispatch, localState]);

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
        <CardList dataItem={visitorData} userProduct={visitorProduct} />
      </div>
    </div>
  );
};
export default HomePage;

HomePage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

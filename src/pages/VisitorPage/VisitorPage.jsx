import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../redux/thunk/DataThunk";
import useLocalStoage from "../../hooks/localStorage/useLocalStoage";
import {
  updateProduct,
  updateSaved,
} from "../../redux/reducers/visitorSlice/VisitorProductSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { visitorData, loading } = useSelector((state) => state.visitor.data);
  const product = useSelector((state) => state.visitor.product);
  const { localState } = useLocalStoage();

  // console.log(visitorSaved);

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log(localState?.cart);
    dispatch(updateProduct(localState?.cart || []));
    dispatch(updateSaved(localState?.saved || []));
  }, [dispatch, localState?.cart, localState?.saved]);

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
export default HomePage;

HomePage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

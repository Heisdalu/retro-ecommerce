import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import useIdentifier from "../../hooks/Identifier/useIdentifier";
import { useEffect } from "react";
import { updateID } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";
// import usefetchProduct from "../../hooks/fetchProduct/usefetchProduct";
import { fetchGuestProduct } from "../../redux/thunk/guestProductThunk";
import Card from "../../components/CardList/Card";
import { GUESTS } from "../../constants/Types";

const VisitorPage = () => {
  const { mainData, loading } = useSelector((state) => state.data);
  const product = useSelector((state) => state.visitor.visitorProduct.data);
  const dispatch = useDispatch();

  const { guestId } = useIdentifier();

  const allCards = mainData.map((item) => (
    <Card
      key={item?.id}
      itemDetail={item}
      userProduct={product}
      userID={guestId}
      databaseID={GUESTS}
    />
  ));

  useEffect(() => {
    if (guestId) {
      dispatch(updateID(guestId));
    }
  }, [dispatch, guestId]);

  useEffect(() => {
    if (guestId) {
      dispatch(fetchGuestProduct(guestId));
      console.log("fffff");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guestId]);

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
        <CardList>{allCards}</CardList>
      </div>
    </div>
  );
};
export default VisitorPage;

VisitorPage.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

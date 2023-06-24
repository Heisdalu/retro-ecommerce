import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Loading from "../../components/Loading/Loading";
import CardList from "../../components/CardList/CardList";
import { useDispatch, useSelector } from "react-redux";
import { GUESTS, USERS } from "../../constants/Types";
import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  transformCartData,
  transformSaveddata,
} from "../../helpers/CartLogic/CartHelper";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import { updateActiveData } from "../../redux/reducers/activeUserSlice/UserProductSlice";
import { updateVisitorData } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";
import { initial } from "../../constants/Types";

const MainPage = ({ userId, guestId }) => {
  const activeUserData = useSelector((state) => state.activeUser.data);
  const { resolved } = useSelector((state) => state.activeUser);
  const { cart, saved } = useSelector((state) => state.visitor.data);
  const { loading, mainData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // const { mainData } = useSelector((state) => state.data);

  const userRef = doc(db, USERS, userId);
  const guestRef = doc(db, GUESTS, guestId);
  useEffect(() => {
    const updateStore = async () => {
      const mergedData = {
        cart: transformCartData(cart, activeUserData.cart),
        saved: transformSaveddata(saved, activeUserData.saved),
      };

      console.log(mergedData);
      try {
        await Promise.allSettled([
          updateDoc(userRef, mergedData),
          deleteDoc(guestRef),
        ]);
        dispatch(updateActiveData(mergedData));
        dispatch(updateVisitorData(initial));
      } catch (e) {
        console.log(e);
      }
    };

    if ((cart.length || saved.length) && resolved) {
      updateStore();
    }

  }, [cart, resolved]);

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
          userProduct={activeUserData}
          userID={userId}
          databaseID={USERS}
        />
      </div>
    </div>
  );
};
export default MainPage;

MainPage.propTypes = {
  userId: PropTypes.string,
  guestId: PropTypes.string,
};

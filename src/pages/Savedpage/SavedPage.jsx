import { Link } from "react-router-dom";
import SavedCard from "../../components/Saved/SavedCard";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { userCartDetail } from "../../helpers/CartLogic/CartHelper";
import { GUESTS, USERS } from "../../constants/Types";
import {
  updateActiveUserCart,
  updateActiveUserSaved,
} from "../../redux/reducers/activeUserSlice/UserProductSlice";
import {
  updateVisitorCart,
  updateSaved,
} from "../../redux/reducers/visitorSlice/VisitorDetailSlice";

const SavedPage = ({ isAuthenticated, userId }) => {
  const visitorData = useSelector((state) => state.visitor);
  const activeUserData = useSelector((state) => state.activeUser);

  const genData = isAuthenticated ? activeUserData : visitorData;

  const userDetail = isAuthenticated
    ? userCartDetail(userId, USERS, updateActiveUserCart)
    : userCartDetail(userId, GUESTS, updateVisitorCart);

  const userSavedFunc = isAuthenticated ? updateActiveUserSaved : updateSaved;

  if (genData.loading)
    return (
      <Loading color="#000" style="h-[100px] md:h-[150px] mt-[5rem] mx-auto" />
    );

  if (genData.data.saved.length === 0)
    return (
      <div className="text-center mt-2 flex flex-col">
        <h1 className="text-2">Your wishlist is empty </h1>
        <Link
          to="/"
          className="activeHover border-1 p-1 mt-2 w-[150px] mx-auto rounded-[6px]"
        >
          Go back Home
        </Link>
      </div>
    );

  return (
    <div className="p-1 bg-white h-[calc(100vh-91px)] font-Inter md:max-w-[800px] md:mx-auto">
      <div className="flex items-center ">
        <h1 className="text-[1.2rem]">Saved ({genData.data.saved.length})</h1>
        <Link to="/" className="ml-1.5 bg-cartBg px-1 rounded-[10px] py-0.5">
          Continue Shopping
        </Link>
      </div>

      <section className="py-1 flex flex-col space-y-[1.2rem] mt-1 ">
        {genData.data.saved.map((el) => (
          <SavedCard
            key={el.id}
            item={el}
            data={genData.data}
            userDetail={userDetail}
            userSavedFunc={userSavedFunc}
          />
        ))}
      </section>
    </div>
  );
};
export default SavedPage;

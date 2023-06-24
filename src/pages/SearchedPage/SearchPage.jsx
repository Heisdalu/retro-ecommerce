import { useSelector } from "react-redux";
import { useParams } from "react-router";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import CardList from "../../components/CardList/CardList";
import { GUESTS, USERS } from "../../constants/Types";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchPage = ({ isAuthenticated, userId }) => {
  const { mainData } = useSelector((state) => state.data);
  const visitorData = useSelector((state) => state.visitor.data);
  const activeUserData = useSelector((state) => state.activeUser.data);

  // const
  const { id } = useParams();

  const userProduct = isAuthenticated ? activeUserData : visitorData;
  const databaseID = isAuthenticated ? USERS : GUESTS;

  const filterdata = mainData.filter(
    (el) =>
      el.title.toLocaleLowerCase().includes(id.toLocaleLowerCase()) ||
      el.group.toLocaleLowerCase().includes(id.toLocaleLowerCase())
  );


  if (filterdata.length === 0)
    return (
      <div className="mt-2 centerPos text-1.5 flex flex-col">
        <h1>No item found😥</h1>
        <Link
          to="/"
          className="mt-1.5 mx-auto text-0.875 md:text-1 font-Inter border-1 px-1 py-[10px] rounded-[6px]"
        >
          Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="mt-1 font flex flex-col">
      <Link
        to="/"
        className="mx-auto font-Inter border-1 px-1 py-[10px] rounded-[6px]"
      >
        Home
      </Link>
      <div className="flex items-center space-x-2 mb-1.5 sticky">
        <h1 className="my-1 px-1 w-100 font-Inter md:text-center md:text-1.5 break-words">
          <span className="font-700">Your search: </span>
          {id}
        </h1>
      </div>
      <FavoriteList />

      <div className="-mt-1">
        <CardList
          mainData={filterdata}
          userProduct={userProduct}
          userID={userId}
          databaseID={databaseID}
        />
      </div>
    </div>
  );
};
export default SearchPage;

SearchPage.propTypes = {
  isAuthenticated: PropTypes.bool,
  userId: PropTypes.string,
};

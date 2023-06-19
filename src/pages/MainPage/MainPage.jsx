import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import Loading from "../../components/Loading/Loading";
import CardList from "../../components/CardList/CardList";
import { useSelector } from "react-redux";
import { USERS } from "../../constants/Types";
import PropTypes from "prop-types";

const MainPage = ({ userId }) => {
  const activeUserData = useSelector((state) => state.activeUser.data);
  const { loading } = useSelector((state) => state.data);

  console.log("main");
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
        <CardList
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
};

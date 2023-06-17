import NotSavedIcon from "../../assets/icons/NotSavedIcon";
import SavedIcon from "../../assets/icons/SavedIcon";
import PropTypes from "prop-types";
import useCart from "../../hooks/product/useCart";
import { updateSaved } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";

const Count = ({ userSavedData, item, userID, databaseID }) => {
  const { SavedItem } = useCart();
  const isSavedItemPresent = userSavedData.find((el) => el?.id === item?.id);
  const savedData = isSavedItemPresent ? isSavedItemPresent : item;

  const clickHandler = () => {
    SavedItem(userSavedData, savedData, userID, updateSaved, databaseID);
  };

  return (
    <button
      className="text-0.75 absolute right-[3px] font-Inter font-400 top-[5px]
      "
      onClick={clickHandler}
    >
      {savedData.saved ? <SavedIcon /> : <NotSavedIcon />}
    </button>
  );
};
export default Count;

Count.propTypes = {
  userProduct: PropTypes.object,
  item: PropTypes.object,
  userSavedData: PropTypes.array,
  userID: PropTypes.string,
  databaseID: PropTypes.string,
};

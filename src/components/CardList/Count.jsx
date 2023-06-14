import NotSavedIcon from "../../assets/icons/NotSavedIcon";
import SavedIcon from "../../assets/icons/SavedIcon";
import PropTypes from "prop-types";
import useVisitorCart from "../../hooks/product/useVisitorCart";

const Count = ({ userProduct, item }) => {
  const { visitorSavedItem } = useVisitorCart();
  const isSavedItemPresent = userProduct.visitorSaved.find(
    (el) => el?.id === item?.id
  );
  const savedData = isSavedItemPresent ? isSavedItemPresent : item;

  const clickHandler = () => {
    visitorSavedItem(userProduct.visitorSaved, savedData);
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
};

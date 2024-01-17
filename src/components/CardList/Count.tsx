import NotSavedIcon from "../../assets/icons/NotSavedIcon";
import SavedIcon from "../../assets/icons/SavedIcon";
import useCart from "../../hooks/product/useCart";
import { updateActiveUserSaved } from "../../redux/reducers/activeUserSlice/UserProductSlice";
import { updateSaved } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";
import { productDetail, userStatusType } from "../../@types";
import { FC } from "react";

interface CountProps {
  userSavedData: productDetail[];
  item: productDetail;
  userID: string;
  databaseID: userStatusType;
  isAuthenticated: boolean;
}

const Count: FC<CountProps> = ({
  userSavedData,
  item,
  userID,
  databaseID,
  isAuthenticated,
}) => {
  const { SavedItem } = useCart();
  const updateFunc = isAuthenticated ? updateActiveUserSaved : updateSaved;
  const isSavedItemPresent = userSavedData.find((el) => el?.id === item?.id);
  const savedData = isSavedItemPresent ? isSavedItemPresent : item;

  const clickHandler = () => {
    SavedItem(userSavedData, savedData, userID, updateFunc, databaseID);
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


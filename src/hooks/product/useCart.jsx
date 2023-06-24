import { useState } from "react";
import { useDispatch } from "react-redux";
// import useLocalStoage from "../localStorage/useLocalStoage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/firebase-config";
import {
  AddToCartHelper,
  DeleteFromCartHelper,
  SavedItemHelper,
} from "../../helpers/CartLogic/CartHelper";
import { SuccessToast, FailedToast } from "../../helpers/Toast/Toast";

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [resolved, setResolved] = useState(false);
  const dispatch = useDispatch();

  const UpdateUserCartData = async (
    databaseID,
    userId,
    callback,
    data,
    message
  ) => {
    setLoading(true);
    const cartRef = doc(db, databaseID, userId);

    try {
      await updateDoc(cartRef, {
        cart: data,
      });
      SuccessToast(message);
      dispatch(callback(data));
      setResolved(true);
    } catch (e) {
      setError(true);
      setResolved(false);
      FailedToast("Failed to update. No/slow internet connection ");
    } finally {
      setLoading(false);
    }
  };

  const UpdateUserSavedItem = async (
    databaseID,
    userId,
    callback,
    data,
    message
  ) => {
    const savedRef = doc(db, databaseID, userId);
    try {
      await updateDoc(savedRef, {
        saved: data,
      });
      SuccessToast(message);
      dispatch(callback(data));
    } catch (e) {
      FailedToast("Failed to update. No/slow internet connection ");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productArr, item, userId, callback, databaseID) => {
    const data = AddToCartHelper(productArr, item);
    const message = "Item added successfully😊";
    UpdateUserCartData(databaseID, userId, callback, data, message);
  };

  const DeleteFromCart = (productArr, item, userId, callback, databaseID) => {
    const data = DeleteFromCartHelper(productArr, item);
    const message = "Item quantity updated";
    UpdateUserCartData(databaseID, userId, callback, data, message);
  };

  const RemoveFromCart = (productArr, item, userId, callback, databaseID) => {
    const data = productArr.filter((el) => el.id !== item.id);
    const message = "Item removed from your cart";
    UpdateUserCartData(databaseID, userId, callback, data, message);
  };

  const SavedItem = (savedArr, item, userId, callback, databaseID) => {
    // const newsavedArr = item.saved
    const data = SavedItemHelper(savedArr, item);
    const message = item.saved
      ? "Item removed from your wishlist"
      : "Item added to your wishlist";

    UpdateUserSavedItem(databaseID, userId, callback, data, message);
  };

  const RemoveFromSaved = (savedArr, item, userId, callback, databaseID) => {
    const data = savedArr.filter((el) => el.id !== item.id);
    const message = "Item removed from wishlist";
    UpdateUserSavedItem(databaseID, userId, callback, data, message);
  };

  return {
    loading,
    error,
    resolved,
    addToCart,
    DeleteFromCart,
    SavedItem,
    RemoveFromCart,
    RemoveFromSaved,
  };
};
export default useCart;

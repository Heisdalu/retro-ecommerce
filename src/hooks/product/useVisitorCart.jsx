import { useDispatch } from "react-redux";
import {
  updateCart,
  updateSaved,
} from "../../redux/reducers/visitorSlice/VisitorProductSlice";
import useLocalStoage from "../localStorage/useLocalStoage";
// import setItem from "../../helpers/setItem";

const useVisitorCart = () => {
  const dispatch = useDispatch();
  const { setItemLocalStorage } = useLocalStoage();

  const visitorAddToCart = (productArr, item) => {
    const isItemPresent = productArr.find((el) => el.id === item.id);

    if (isItemPresent) {
      const data = productArr.map((el) =>
        el.id === item.id ? { ...el, count: el.count + 1 } : el
      );
      dispatch(updateCart(data));
      return setItemLocalStorage({ cart: data });
    }

    const newArr = [...productArr, { ...item, count: 1 }];
    dispatch(updateCart(newArr));
    setItemLocalStorage({ cart: newArr });
  };

  const visitorDeleteFromCart = (productArr, item) => {
    const sameID = (val) => val.id === item.id;

    // delete item when count is 1 and operation is to be performed
    const newproductData =
      item.count - 1 <= 0
        ? productArr.filter((el) => el.id !== item.id)
        : productArr.map((el) =>
            sameID(el) ? { ...item, count: item.count - 1 } : el
          );

    dispatch(updateCart(newproductData));
    setItemLocalStorage({ cart: newproductData });
  };

  const visitorSavedItem = (savedArr, item) => {
    const newsavedArr = item.saved
      ? savedArr.filter((el) => el.id !== item.id)
      : [...savedArr, { ...item, saved: true }];

    dispatch(updateSaved(newsavedArr));
    setItemLocalStorage({ saved: newsavedArr });
  };

  return { visitorAddToCart, visitorDeleteFromCart, visitorSavedItem };
};
export default useVisitorCart;

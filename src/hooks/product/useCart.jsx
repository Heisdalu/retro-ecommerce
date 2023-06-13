import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/reducers/visitorSlice/VisitorProductSlice";
import { updateVistorData } from "../../redux/reducers/visitorSlice/VisitorDataSlice";
import useLocalStoage from "../localStorage/useLocalStoage";
// import setItem from "../../helpers/setItem";

const useCart = () => {
  const dispatch = useDispatch();
  const { setItemLocalStorage } = useLocalStoage();

  const visitorAddToCart = (dataArr, productArr, item) => {
    const isItemPresent = productArr.find((el) => el.id === item.id);
    const newVisitorData = dataArr.map((el) =>
      el.id === item.id ? { ...el, count: el.count + 1 } : el
    );

    if (isItemPresent) {
      const data = productArr.map((el) =>
        el.id === item.id ? { ...el, count: el.count + 1 } : el
      );

      // setItem(newVisitorData, data);
      setItemLocalStorage(newVisitorData, data);
      dispatch(updateProduct(data));
      return dispatch(updateVistorData(newVisitorData));
    }

    const newArr = [...productArr, { ...item, count: 1 }];

    // setItem(newVisitorData, newArr);
    setItemLocalStorage(newVisitorData, newArr);
    dispatch(updateProduct(newArr));
    dispatch(updateVistorData(newVisitorData));
  };

  const visitorDeleteFromCart = (dataArr, productArr, item) => {
    const sameID = (val) => val.id === item.id;
    const defaultItem = { ...item, count: 0 };

    const newVisitorData =
      item.count <= 0
        ? dataArr.map((el) => (sameID(el) ? defaultItem : el))
        : dataArr.map((i) =>
            i.id === item.id ? { ...item, count: item.count - 1 } : i
          );

    // delete item when count is 1 and operation is to be performed
    const newproductData =
      item.count - 1 <= 0
        ? productArr.filter((el) => el.id !== item.id)
        : productArr.map((el) =>
            sameID(el) ? { ...item, count: item.count - 1 } : el
          );

    // setItem(newVisitorData, newproductData);
    setItemLocalStorage(newVisitorData, newproductData);
    dispatch(updateProduct(newproductData));
    dispatch(updateVistorData(newVisitorData));
  };

  return { visitorAddToCart, visitorDeleteFromCart };
};
export default useCart;

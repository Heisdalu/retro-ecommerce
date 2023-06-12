import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/reducers/visitorSlice/VisitorProductSlice";

const useProduct = () => {
  const dispatch = useDispatch();

  const visitorAddToCart = (obj, item) => {
    const isItemPresent = obj.find((el) => el.id === item.id);

    if (isItemPresent) {
      const data = obj.map((el) =>
        el.id === item.id ? { ...el, count: el.count + 1 } : el
      );
      return dispatch(updateProduct(data));
    }

    const newArr = [...obj, { ...item, count: 1 }];

    dispatch(updateProduct(newArr));
  };

  return { visitorAddToCart };
};
export default useProduct;

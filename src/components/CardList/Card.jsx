import PropTypes from "prop-types";
import Count from "./Count";
import Plus from "../../assets/icons/Plus";
import Delete from "../../assets/icons/Delete";
import { formatNumber } from "../../helpers/FormatNumber";
import useCart from "../../hooks/product/useCart";
import { updateVisitorCart } from "../../redux/reducers/visitorSlice/VisitorDetailSlice";
import { updateActiveUserCart } from "../../redux/reducers/activeUserSlice/UserProductSlice";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Card = ({
  itemDetail,
  userProduct,
  userID,
  databaseID,
  activateDisable,
  deactivateDisable,
  disableState,
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { addToCart, DeleteFromCart, loading } = useCart();
  const isPresent = userProduct.cart.find((el) => el.id === itemDetail.id);
  const item = isPresent ? isPresent : itemDetail;
  const countVisible = item.count === 0;

  const updateFunc = isAuthenticated ? updateActiveUserCart : updateVisitorCart;

  const addToCartHandler = () => {
    activateDisable(item.id); // deactivcate all button
    addToCart(userProduct.cart, item, userID, updateFunc, databaseID);
  };

  const DeleteFromCartHandler = () => {
    activateDisable(item.id);
    DeleteFromCart(userProduct.cart, item, userID, updateFunc, databaseID);
  };

  // activate all btn thta was previously disabled
  useEffect(() => {
    if (item.id === disableState.id && !loading) {
      deactivateDisable();
    }
    // console.log(loading, disableState, item.id);
    //   if (!loading) {
    //   }
  }, [deactivateDisable, disableState, item.id, loading]);

  return (
    <div className="font-Inter p-0.5 border-1 border-bc2 relative grid">
      <Count
        userSavedData={userProduct.saved}
        item={itemDetail}
        userID={userID}
        databaseID={databaseID}
        isAuthenticated={isAuthenticated}
      />
      <div className="h-[150px] w-100">
        <img
          src={item?.image}
          alt=""
          loading="lazy"
          className="h-[100%] mx-auto object-contain"
        />
      </div>
      <div className="py-0.5 pr-1">
        <h1 className="text-0.875 md:text-1">{item?.title}</h1>
        <p className="my-0.5 font-[500] md:text-1">
          ₦ {formatNumber(item?.price)}
        </p>
      </div>
      {countVisible && (
        <button
          className={`addToCartBtn centerPos cardBtn ${
            loading && "border-none"
          }`}
          onClick={addToCartHandler}
          disabled={disableState.state}
        >
          {loading ? <Loading color="#000" style="h-[50px]" /> : "ADD TO CART"}
        </button>
      )}

      {!countVisible && (
        <div className="flex py-[5px] items-center justify-center h-[58px]">
          <button
            className="cardIconBtn cardBtn"
            disabled={disableState.state}
            onClick={DeleteFromCartHandler}
          >
            <Delete style="#fff" />
          </button>
          <div
            aria-label="item count"
            className="border mx-auto text-center text-1 w-100 centerPos h-[30px] "
          >
            {loading ? (
              <Loading color="#000" style="h-[30px] md:h-[40px]" />
            ) : (
              item?.count
            )}
          </div>
          <button
            className="ml-auto cardIconBtn cardBtn"
            disabled={disableState.state}
            onClick={addToCartHandler}
          >
            <Plus style="#fff" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;

Card.propTypes = {
  itemDetail: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  userProduct: PropTypes.object,
  userID: PropTypes.string,
  databaseID: PropTypes.string,
  disableState: PropTypes.object,
  deactivateDisable: PropTypes.func,
  activateDisable: PropTypes.func,
};

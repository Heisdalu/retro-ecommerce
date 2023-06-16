import PropTypes from "prop-types";
import Count from "./Count";
import Plus from "../../assets/icons/Plus";
import Delete from "../../assets/icons/Delete";
import { formatNumber } from "../../helpers/FormatNumber";
import useVisitorCart from "../../hooks/product/useVisitorCart";

const Card = ({ itemDetail, userProduct }) => {
  const { visitorAddToCart, visitorDeleteFromCart } = useVisitorCart();
  const isPresent = userProduct.visitorCart.find((el) => el.id === itemDetail.id);
  const item = isPresent ? isPresent : itemDetail;
  const countVisible = item.count === 0;

  const addToCartHandler = () => {
    visitorAddToCart(userProduct.visitorCart, item);
  };

  const DeleteFromCartHandler = () => {
    visitorDeleteFromCart(userProduct.visitorCart, item);
  };

  return (
    <div className="font-Inter p-0.5 border-1 border-bc2 relative grid">
      <Count userProduct={userProduct} item={itemDetail} />
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
        <button className="addToCartBtn" onClick={addToCartHandler}>
          ADD TO CART
        </button>
      )}

      {!countVisible && (
        <div className="flex py-[5px] items-center justify-center h-[58px]">
          <button className="cardIconBtn" onClick={DeleteFromCartHandler}>
            <Delete style="#fff" />
          </button>
          <div
            aria-label="item count"
            className="border mx-auto text-center text-1 w-100"
          >
            {item?.count}
          </div>
          <button className="ml-auto cardIconBtn" onClick={addToCartHandler}>
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
};

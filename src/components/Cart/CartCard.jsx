// import pic from "../../assets/seven-min.jpg";
import Remove from "../../assets/icons/remove";
import Plus from "../../assets/icons/Plus";
import Delete from "../../assets/icons/Delete";
import { formatNumber } from "../../helpers/FormatNumber";
import PropTypes from "prop-types";
import useVisitorCart from "../../hooks/product/useCart";

const CartCard = ({ item, userCart }) => {
  const { visitorAddToCart, visitorDeleteFromCart } = useVisitorCart();

  const increaseCartHandler = () => {
    visitorAddToCart(userCart, item);
  };

  const decreaseCartHandler = () => {
    visitorDeleteFromCart(userCart, item);
  };

  return (
    <article className="grid grid-cols-[1fr_2fr] [grid-gap:1rem] p-0.5 bg-white rounded-[6px]">
      <div className="">
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3 className="text-0.875">{item?.title}</h3>
        <p className="font-Inter font-500 py-[3px]">
          {formatNumber(item?.price)}
        </p>
        <p className="text-0.875">In stock</p>
      </div>
      <div className="mt-1 w-100 [grid-area:2/1/3/3] grid grid-cols-[1fr_1fr] items-center">
        <button className="flex py-0.5 max-w-[150px] items-center font-500 font-Inter">
          <span className="mr-0.5">
            <Remove />
          </span>
          REMOVE
        </button>
        <div className="flex w-[150px] ml-auto items-center rounded-[4px]">
          <button
            disabled={item?.count === 1}
            onClick={decreaseCartHandler}
            className="border-1 rounded-l-[4px] w-[32px] h-[32px] flex justify-center centerPos btnDisabled"
          >
            <Delete />
          </button>
          <div className="mx-auto centerPos">{item.count}</div>
          <button
            className="border-1 w-[32px] h-[32px] centerPos rounded-[4px]"
            onClick={increaseCartHandler}
          >
            <Plus />
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartCard;

CartCard.propTypes = {
  item: PropTypes.object,
  userCart: PropTypes.array,
};

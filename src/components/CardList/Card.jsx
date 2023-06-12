import PropTypes from "prop-types";
import Count from "./Count";
import Plus from "../../assets/icons/Plus";
import Delete from "../../assets/icons/Delete";
import { formatNumber } from "../../helpers/FormatNumber";
import useProduct from "../../hooks/product/useProduct";

const Card = ({ itemDetail, userProduct }) => {
  const { visitorAddToCart } = useProduct();

  const addToCartHandler = () => {
    visitorAddToCart(userProduct, itemDetail);
  };

  return (
    <div className="font-Inter p-0.5 border-1 border-bc2 relative grid">
      <Count />
      <div className="h-[150px] w-100">
        <img
          src={itemDetail?.image}
          alt=""
          loading="lazy"
          className="h-[100%] mx-auto object-contain"
        />
      </div>
      <div className="py-0.5 pr-1">
        <h1 className="text-0.875 md:text-1">{itemDetail?.title}</h1>
        <p className="my-0.5 font-[500] md:text-1">
          ₦ {formatNumber(itemDetail?.price)}
        </p>
      </div>
      <button className="addToCartBtn" onClick={addToCartHandler}>
        ADD TO CART
      </button>

      <div className="flex py-[5px] items-center justify-center h-[58px]">
        <button className="cardIconBtn">
          <Delete style="#fff" />
        </button>
        <div
          aria-label="item count"
          className="border mx-auto text-center text-1 w-100"
        >
          0
        </div>
        <button className="ml-auto cardIconBtn">
          <Plus style="#fff" />
        </button>
      </div>
    </div>
  );
};
export default Card;

Card.propTypes = {
  itemDetail: PropTypes.object,
  userProductData: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  userProduct: PropTypes.array,
};

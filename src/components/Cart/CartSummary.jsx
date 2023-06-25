import { formatNumber } from "../../helpers/FormatNumber";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CartSummary = ({ totalPrice }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };

  return (
    <section className="z-[3] bg-white px-1 w-100 fixed bottom-[0] rounded-[6px] md:sticky md:top-[188px] md:self-start">
      <h1 className="border-b-1 py-0.5 text-0.75">CART SUMMARY</h1>
      <div className="grid grid-cols-[2fr_1fr] py-0.5">
        <h3 className="text-0.875">Subtotal</h3>
        <p className="text-right text-1 font-700">
          ₦ {formatNumber(totalPrice)}
        </p>
        <p className="text-0.75 mt-[0.3rem]">Delivery fees not included yet.</p>
      </div>
      <button
        onClick={navigateHandler}
        className="border-1 w-[100%] my-1 py-1 rounded-[6px] text-white bg-black text-1 font-700"
      >
        Checkout (₦ {formatNumber(totalPrice)})
      </button>
    </section>
  );
};

export default CartSummary;

CartSummary.propTypes = {
  totalPrice: PropTypes.number,
};

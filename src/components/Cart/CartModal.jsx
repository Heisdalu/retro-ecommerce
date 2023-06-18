import Close from "../../assets/icons/close";
import Loading from "../Loading/Loading";
import Remove from "../../assets/icons/remove";
import PropTypes from "prop-types";
import useCart from "../../hooks/product/useCart";
import { useEffect } from "react";

const CartModal = ({
  toggleFunc,
  cartData,
  userItem,
  userId,
  type,
  callback,
}) => {
  const { RemoveFromCart, loading, error, resolved } = useCart();

  console.log(resolved);
  const removeItemHandler = () => {
    console.log(loading, error);
    RemoveFromCart(cartData, userItem, userId, callback, type);
  };

  const exitModal = () => {
    toggleFunc();
  };

  useEffect(() => {
    if (resolved) {
      toggleFunc();
    }
  }, [resolved, toggleFunc]);

  return (
    <>
      <div
        className="px-1 fixed top-[0] z-[20] h-[100vh] bg-mo flex justify-center items-center w-100 animateDiv"
        onClick={exitModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[21] w-100 max-w-[500px] px-1 animateDiv">
        <div className="  p-1 rounded-[6px] bg-white border-1">
          <div className="flex">
            <h1 className="text-[1.25rem]">Remove from cart</h1>
            <button className="ml-auto" onClick={exitModal}>
              <Close />
            </button>
          </div>
          <p className="my-1 md:my-0.5">
            Do you want to remove this item from cart?
          </p>
          <div className="p-0.5 flex flex-col mt-1.5 md:flex-row space-y-1 font-Inter font-500 md:space-y-[0] md:space-x-1">
            <button
              className="border-1 h-[50px] rounded-[6px] w-100 centerPos cartbtn"
              onClick={exitModal}
            >
              NO
            </button>
            <button
              className="w-100 border-1 h-[50px] rounded-[6px] centerPos cartbtn"
              onClick={removeItemHandler}
            >
              {loading ? (
                <Loading color="#000" style="h-[40px]" />
              ) : (
                <div className="flex space-x-1 centerPos">
                  <Remove />
                  <div> REMOVE ITEM</div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartModal;

CartModal.propTypes = {
  loading: PropTypes.bool,
  toggleFunc: PropTypes.func,
  cartData: PropTypes.array,
  userItem: PropTypes.object,
  userId: PropTypes.string,
  type: PropTypes.string,
  callback: PropTypes.func,
};

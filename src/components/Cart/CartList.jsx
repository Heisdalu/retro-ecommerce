import PropTypes from "prop-types";
import CartCard from "./CartCard";
import { useState  } from "react";

const CartList = ({ userCart, userDetail, toggleFunc, getUserFunc }) => {
  const [disableAll, setDisableAll] = useState({ id: "", state: false });

   const activateDisable = (itemId) => {
     setDisableAll((prev) => ({
       ...prev,
       id: itemId,
       state: true,
     }));
   };
   const deactivateDisable = (itemId) => {
     setDisableAll((prev) => ({
       ...prev,
       id: itemId,
       state: false,
     }));
   };

  return (
    <section className="min-h-[calc(100vh-188px)] p-1 md:[grid-area:2/1/1/2] pb-[15rem] md:pt-[0] md:px-[0] md:pb-[2rem]">
      <div className="grid [grid-gap:1rem]">
        {userCart.map((el) => (
          <CartCard
            key={el.id}
            item={el}
            userCart={userCart}
            userDetail={userDetail}
            toggleFunc={toggleFunc}
            getUserFunc={getUserFunc}
            activateDisable={activateDisable}
            deactivateDisable={deactivateDisable}
            disableState={disableAll}
          />
        ))}
      </div>
    </section>
  );
};
export default CartList;

CartList.propTypes = {
  children: PropTypes.node,
  userCart: PropTypes.array,
  userDetail: PropTypes.object,
  toggleFunc: PropTypes.func,
  getUserFunc: PropTypes.func,
};

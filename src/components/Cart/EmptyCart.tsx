import { Link } from "react-router-dom";
import pic from "../../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div className="text-center font-Inter py-3 h-[calc(100vh-91px)] centerPos flex-col">
      <div className="h-[100px] md:h-[150px] ">
        <img src={pic} alt="" className="h-[100%]" />
      </div>
      <h1 className="text-[2rem]">Your cart is empty</h1>
      <Link to="/" className="border-1 py-0.5 px-1 rounded-[6px] mt-1 btn">
        Continue Shopping
      </Link>
    </div>
  );
};
export default EmptyCart;

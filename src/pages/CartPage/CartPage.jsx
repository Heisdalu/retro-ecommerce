import CartCard from "../../components/Cart/CartCard";
import EmptyCart from "../../components/Cart/EmptyCart";
import CartSummary from "../../components/Cart/CartSummary";
import CartList from "../../components/Cart/CartList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartData = useSelector((state) => state.visitor.product.visitorCart);

  const data = cartData.map((el) => (
    <CartCard key={el.id} item={el} userCart={cartData} />
  ));

  const totalPrice = cartData.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );

  if (cartData.length === 0) return <EmptyCart />;

  console.log(cartData);
  return (
    <div className="bg-cartBg font-Inter relative">
      <div className="py-1 flex items-center space-x-1.5 px-1 bg-cartBg md:py-2 md:max-w-[900px] md:mx-auto sticky top-[90px]">
        <h1 className="">Cart ({cartData.length})</h1>
        <Link to="/" className="py-0.5 px-1 border-1 rounded-[10px] bg-white">
          Continue Shopping
        </Link>
      </div>

      <div className="py-1 md:grid md:[grid-template-columns:1.5fr_1fr;] md:[grid-gap:1rem] md:max-w-[900px] md:mx-auto md:px-1">
        <CartSummary totalPrice={totalPrice} />

        <CartList>{data}</CartList>
      </div>
    </div>
  );
};
export default CartPage;

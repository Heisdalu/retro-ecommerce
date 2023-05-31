import CartCard from "../../components/Cart/CartCard";

const CartPage = () => {
  

  return (
    <div className="bg-cartBg font-Inter relative">
      <div className="py-1 flex items-center space-x-1.5 px-1 bg-cartBg md:py-2 md:max-w-[900px] md:mx-auto">
        <h1 className="">Cart (2)</h1>
        <button className="py-0.5 px-1 border-1 rounded-[10px] bg-white">
          Continue Shopping
        </button>
      </div>

      <div className="py-1 md:grid md:[grid-template-columns:1.5fr_1fr;] md:[grid-gap:1rem] md:max-w-[900px] md:mx-auto md:px-1">
        <section className="bg-white px-1 w-100 fixed bottom-[0] rounded-[6px] md:sticky md:top-[197px] md:self-start">
          <h1 className="border-b-1 py-0.5 text-0.75">CART SUMMARY</h1>
          <div className="grid grid-cols-[2fr_1fr] py-0.5">
            <h3 className="text-0.875">Subtotal</h3>
            <p className="text-right text-1 font-700">₦ 4,440</p>
            <p className="text-0.75 mt-[0.3rem]">
              Delivery fees not included yet.
            </p>
          </div>
          <button className="border-1 w-[100%] my-1 py-1 rounded-[6px] text-white bg-black text-1 font-700">
            Checkout (₦ 4,400)
          </button>
        </section>

        <section className="p-1 md:[grid-area:2/1/1/2] md:pt-[0] md:px-[0]">
          <div className="grid [grid-gap:1rem]">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
        </section>
      </div>
    </div>
  );
};
export default CartPage;

const EmptyCart = () => {
  return (
    <div className="border-1 text-center font-Inter py-3 h-[calc(100vh-91px)] centerPos flex-col">
      <h1 className="text-[2rem]">Nothing to show</h1>
      <button className="border-1 py-0.5 px-1 rounded-[6px] mt-1 btn">
        Continue Shopping
      </button>
    </div>
  );
};
export default EmptyCart;

import pic from "../../assets/seven-min.jpg";
import Remove from "../../assets/icons/remove";
import Plus from "../../assets/icons/Plus";
import Delete from "../../assets/icons/Delete";

const CartCard = () => {
  return (
    <article className="grid grid-cols-[1fr_2fr] [grid-gap:1rem] p-0.5 bg-white rounded-[6px]">
      <div className="">
        <img src={pic} alt="" />
      </div>
      <div>
        <h3 className="text-0.875">Original Meat and sauce</h3>
        <p className="font-Inter font-500 py-[3px]">₦ 1,500</p>
        <p className="text-0.875">In stock</p>
      </div>
      <div className="mt-1 w-100 [grid-area:2/1/3/3] grid grid-cols-[1fr_1fr] items-center">
        <button className="flex py-0.5 max-w-[150px] items-center font-500 font-Inter">
          <span className="mr-0.5">
            <Remove />
          </span>
          REMOVE
        </button>
        <div className="flex border-y-1 w-[150px] ml-auto items-center">
          <button className="border-x-1 w-[32px] h-[32px] flex justify-center centerPos">
            <Delete />
          </button>
          <div className="mx-auto centerPos">0</div>
          <button className="border-x-1 w-[32px] h-[32px] centerPos">
            <Plus />
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartCard;

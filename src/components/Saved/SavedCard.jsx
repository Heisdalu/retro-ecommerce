import Remove from "../../assets/icons/remove";
import PropTypes from "prop-types";
import { formatNumber } from "../../helpers/FormatNumber";
import useCart from "../../hooks/product/useCart";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const SavedCard = ({ item, data, userDetail, userSavedFunc }) => {
  const { addToCart, loading, resolved, RemoveFromSaved } = useCart();
  const navigate = useNavigate();


  const buyHandler = () => {
    addToCart(
      data.cart,
      item,
      userDetail.userId,
      userDetail.updateFunc,
      userDetail.databaseID
    );
  };

  const removeHandler = () => {
    RemoveFromSaved(
      data.saved,
      item,
      userDetail.userId,
      userSavedFunc,
      userDetail.databaseID
    );
  };

  useEffect(() => {
    if (resolved) {
      navigate("/cart");
    }
  }, [navigate, resolved]);

  return (
    <div className="pt-[0.5rem] border-1 border-[#e4e4e5] grid grid-cols-[1fr_2fr] [grid-gap:1rem] font-Inter font-400 rounded-[6px] md:grid-cols-[0.8fr_2fr_130px]">
      <div className="">
        <img
          src={item.image}
          alt=""
          width="123px"
          height="128px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="">
        <h1 className="text-0.875 md:text-1 pr-2 max-w-[350px] break-words">
          {item.title}
        </h1>
        <p className="text-0.875 mt-0.5 font-500 md:text-1 md:mt-1">
          ₦ {formatNumber(item.price)}
        </p>
      </div>

      <div className="[grid-area:2/1/3/-1] flex px-0.5 mb-1 md:[grid-area:1/3] md:grid [grid-gap:1rem] justify-items-start">
        <button
          className="flex py-[10px] items-center activeHover self-start"
          onClick={removeHandler}
        >
          <span className="mr-0.5">
            <Remove />
          </span>
          REMOVE
        </button>
        <button
          className="ml-auto activeHover bg-black px-1 text-white rounded-[4px] font-500 md:self-end md:p-1 md:ml-[0] h-[44px] md:h-[56px] w-[110px] centerPos"
          onClick={buyHandler}
        >
          {loading ? <Loading style="h-[30px] md:h-[40px]" /> : "BUY NOW"}
        </button>
      </div>
    </div>
  );
};
export default SavedCard;

SavedCard.propTypes = {
  item: PropTypes.object,
  userDetail: PropTypes.object,
  data: PropTypes.object,
  userSavedFunc: PropTypes.func,
};

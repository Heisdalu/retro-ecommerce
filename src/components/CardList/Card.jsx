import pic from "../../assets/seven-min.jpg";
import PropTypes from "prop-types";
import Count from "./Count";

const Card = ({ image, title, price }) => {
  return (
    <div className="font-Inter p-0.5 border-1 border-bc2 relative">
      <Count />
      <div className="h-[150px] w-100">
        <img src={image} alt="" loading="lazy" className="h-[100%] mx-auto" />
      </div>
      <div className="py-0.5 pr-1">
        <h1 className="text-0.875 md:text-1">{title}</h1>
        <p className="my-0.5 font-[500] md:text-1">₦{price}</p>
      </div>
      <button className=" w-100 p-1 rounded-[5px] text-center border-1 active:bg-black active:text-white btn">
        ADD TO CART
      </button>
    </div>
  );
};
export default Card;

Card.defaultProps = {
  image: pic,
  title: "Organic Collard Green Turkey Brown Wrap",
  price: 150,
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

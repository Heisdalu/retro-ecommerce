import PropTypes from "prop-types";
import Count from "./Count";
import pic1 from "../../assets/seven-min.jpg";



const Card = ({ image, title, price, id }) => {
  return (
    <div className="font-Inter p-0.5 border-1 border-bc2 relative grid">
      <Count />
      <div className="h-[150px] w-100">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-[100%] mx-auto object-contain"
        />
      </div>
      <div className="py-0.5 pr-1">
        <h1 className="text-0.875 md:text-1">{title}</h1>
        <p className="my-0.5 font-[500] md:text-1">₦ {price}</p>
      </div>
      <button className=" w-100 p-1 rounded-[5px] self-end text-center border-1 active:bg-black active:text-white btn">
        ADD TO CART
      </button>
    </div>
  );
};
export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

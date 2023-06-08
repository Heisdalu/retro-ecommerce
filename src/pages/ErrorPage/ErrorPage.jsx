import { Link } from "react-router-dom";
import errorImg from "../../assets//icons/errorAnimal.svg";
import PropTypes from "prop-types";

const ErrorPage = ({ text }) => {
  return (
    <div className="flex flex-col justify-center p-1">
      <div>
        <img src={errorImg} className="max-w-[500px] mx-auto" alt="" />
      </div>
      <p className="text-center mb-2 font-Inter font-400">{text}</p>

      <Link
        to="/"
        className="border-1 mx-auto rounded-[6px] p-1 bg-[#263238] text-white"
      >
        Go back Home
      </Link>
    </div>
  );
};
export default ErrorPage;


ErrorPage.propTypes = {
  text: PropTypes.string,
};

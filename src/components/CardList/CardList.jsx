import PropTypes from "prop-types";

const CardList = ({ children }) => {
  return (
    <div className="mt-[2rem] grid grid-cols-2 [grid-gap:1rem] p-0.5 md:grid-cols-3 md:px-2  lg:grid-cols-4 vlg:grid-cols-5">
      {children}
    </div>
  );
};
export default CardList;

CardList.propTypes = {
  children: PropTypes.node,
};

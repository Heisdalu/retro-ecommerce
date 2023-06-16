import PropTypes from "prop-types";

const CartList = ({ children }) => {
  return (
    <section className="p-1 md:[grid-area:2/1/1/2] md:pt-[0] md:px-[0]">
      <div className="grid [grid-gap:1rem]">{children}</div>
    </section>
  );
};
export default CartList;

CartList.propTypes = {
  children: PropTypes.node,
};

import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ dataItem, userProduct }) => {
  console.log(userProduct);
  const allCards = dataItem.map((item) => (
    <Card key={item?.id} itemDetail={item} userProduct={userProduct} />
  ));
  // console.log(dataItem);
  return (
    <div className="mt-[2rem] grid grid-cols-2 [grid-gap:1rem] p-0.5 md:grid-cols-3 md:px-2  lg:grid-cols-4 vlg:grid-cols-5">
      {allCards}
    </div>
  );
};
export default CardList;

CardList.propTypes = {
  dataItem: PropTypes.array,
  userProduct: PropTypes.array,
};

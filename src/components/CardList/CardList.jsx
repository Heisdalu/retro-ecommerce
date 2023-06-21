import PropTypes from "prop-types";
import Card from "./Card";
import { useState } from "react";

const CardList = ({ mainData, userProduct, userID, databaseID }) => {
  const [disableAll, setDisableAll] = useState({ id: "", state: false });

  const activateDisable = (itemId) => {
    setDisableAll((prev) => ({
      ...prev,
      id: itemId,
      state: true,
    }));
  };
  const deactivateDisable = (itemId) => {
    setDisableAll((prev) => ({
      ...prev,
      id: itemId,
      state: false,
    }));
  };

  const data = mainData.map((item) => (
    <Card
      key={item?.id}
      itemDetail={item}
      userProduct={userProduct}
      userID={userID}
      databaseID={databaseID}
      activateDisable={activateDisable}
      deactivateDisable={deactivateDisable}
      disableState={disableAll}
    />
  ));

  return (
    <div className="mt-[2rem] grid grid-cols-2 [grid-gap:1rem] p-0.5 md:grid-cols-3 md:px-2  lg:grid-cols-4 vlg:grid-cols-5">
      {data}
    </div>
  );
};
export default CardList;

CardList.propTypes = {
  userProduct: PropTypes.object,
  userID: PropTypes.string,
  databaseID: PropTypes.string,
  mainData: PropTypes.array,
};

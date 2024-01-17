import Card from "./Card";
import { FC, useState } from "react";
import { disableAllType, initialTypes, productDetail, userStatusType } from "../../@types";

interface CardListProps {
  mainData: productDetail[];
  userProduct: initialTypes;
  userID: string;
  databaseID: userStatusType;
}

const CardList: FC<CardListProps> = ({
  mainData,
  userProduct,
  userID,
  databaseID,
}) => {
  const [disableAll, setDisableAll] = useState<disableAllType>({
    id: "",
    state: false,
  });

  const activateDisable = (itemId: string) => {
    setDisableAll((prev) => ({
      ...prev,
      id: itemId,
      state: true,
    }));
  };
  const deactivateDisable = (itemId?: string) => {
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


import { productDetail, userCartDetailType } from "../../@types";

export const AddToCartHelper = (
  arr: productDetail[],
  item: productDetail
): productDetail[] => {
  const isItemPresent = arr.find((el) => el.id === item.id);

  const data = isItemPresent
    ? arr.map((el) => (el.id === item.id ? { ...el, count: el.count + 1 } : el))
    : [...arr, { ...item, count: 1 }];

  return data;
};

export const DeleteFromCartHelper = (
  arr: productDetail[],
  item: productDetail
): productDetail[] => {
  const sameID = (val: productDetail) => val.id === item.id;
  // delete item when count is 1 and operation is to be performed
  const data =
    item.count - 1 <= 0
      ? arr.filter((el) => el.id !== item.id)
      : arr.map((el) => (sameID(el) ? { ...item, count: item.count - 1 } : el));

  return data;
};

export const SavedItemHelper = (
  savedArr: productDetail[],
  item: productDetail
): productDetail[] => {
  const data = item.saved
    ? savedArr.filter((el) => el.id !== item.id)
    : [...savedArr, { ...item, saved: true }];

  return data;
};

export const userCartDetail: userCartDetailType = (
  userId,
  databaseID,
  updateFunc
) => {
  return {
    userId,
    databaseID,
    updateFunc,
  };
};

export const transformCartData = (guestArr, mainArr) => {
  const main = mainArr.map((el) => el.id);
  const notPresent = guestArr.filter((el) => !main.includes(el.id));

  const calc = (item) => {
    const uniqueGuest = guestArr.find((el) => el.id == item.id);
    if (uniqueGuest) return uniqueGuest.count + item.count;
    return 1;
  };

  const data = mainArr.map((el) =>
    guestArr.some((re) => re.id === el.id)
      ? {
          ...el,
          count: calc(el),
        }
      : el
  );

  return [...data, ...notPresent];
};

export const transformSaveddata = (guestArr, mainArr) => {
  const main = mainArr.map((el) => el.id);
  const notPresent = guestArr.filter((el) => !main.includes(el.id));

  return [...mainArr, ...notPresent];
};

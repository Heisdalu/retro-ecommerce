export const AddToCartHelper = (arr, item) => {
  const isItemPresent = arr.find((el) => el.id === item.id);

  const data = isItemPresent
    ? arr.map((el) => (el.id === item.id ? { ...el, count: el.count + 1 } : el))
    : [...arr, { ...item, count: 1 }];

  return data;
};

export const DeleteFromCartHelper = (arr, item) => {
  const sameID = (val) => val.id === item.id;
  // delete item when count is 1 and operation is to be performed
  const data =
    item.count - 1 <= 0
      ? arr.filter((el) => el.id !== item.id)
      : arr.map((el) => (sameID(el) ? { ...item, count: item.count - 1 } : el));

  return data;
};

export const SavedItemHelper = (savedArr, item) => {
  const data = item.saved
    ? savedArr.filter((el) => el.id !== item.id)
    : [...savedArr, { ...item, saved: true }];

  return data;
};

export const formatNumber = (value) => {
  if (!value) return null;
  return new Intl.NumberFormat("en-US").format(value);
};

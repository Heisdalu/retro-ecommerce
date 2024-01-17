export const formatNumber = (value: number | null): string | null => {
  if (!value) return null;
  return new Intl.NumberFormat("en-US").format(value);
};

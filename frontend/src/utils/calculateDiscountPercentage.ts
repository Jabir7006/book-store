
export const calculateDiscountPercentage = (discountPrice: number, regularPrice: number): number => {
  if (!discountPrice) return 0;
  return Math.round(((regularPrice - discountPrice) / regularPrice) * 100);
};
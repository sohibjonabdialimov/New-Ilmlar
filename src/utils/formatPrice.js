export const formatPrice = (price) => {
  if (!price) return 0;
  let roundedPrice = Math.ceil(Number(price));
  let priceNum = typeof price !== "string" ? String(roundedPrice) : roundedPrice;
  return priceNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
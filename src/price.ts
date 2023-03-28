/**
 * @description: 标准价格展示
 * @param {
 *          price: string | number
 *       }
 * @return {string}
 */
export const standardPrice = (price: string | number) => {
  const _price = String(price);
  const priceWithoutDecimal = _price.split(".")[0];
  if (priceWithoutDecimal.length <= 3) {
    return String(Number(_price).toFixed(1));
  }
  if (priceWithoutDecimal.length === 4) {
    return priceWithoutDecimal;
  }
  return `${(Number(priceWithoutDecimal) / 10000).toFixed(1)}w`;
};

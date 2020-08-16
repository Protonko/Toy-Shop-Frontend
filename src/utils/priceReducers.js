export const totalPriceReducer = (total = 0, product) => {
  const productPrice = product.sale ? Math.round(product.price * product.sale) : product.price;

  return total + productPrice;
};

export const saleReducer = (total = 0, product) => {
  return Math.round(product.price * product.sale);
}

export const priceFullReducer = (total = 0, product) => total + product.price;

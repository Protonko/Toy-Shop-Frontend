// types
import {IProduct} from 'models/interfaces';

export const totalPriceReducer = (
  total = 0,
  product: IProduct,
) => {
  const productPrice = product.sale ? Math.round(product.price * product.sale) : product.price;

  return total + productPrice;
};

export const saleReducer = (
  total = 0,
  product: IProduct,
) => {
  const sale = product.sale ?? 1

  return total + Math.round(product.price - product.price * sale);
}

export const priceFullReducer = (
  total = 0,
  product: IProduct,
) => total + product.price;

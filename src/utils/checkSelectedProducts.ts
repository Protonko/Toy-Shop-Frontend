import {IProduct} from 'models/interfaces';

export const checkSelectedProducts = (
  selectedProducts: Array<IProduct>,
  product: IProduct
): IProduct | undefined => {
  return selectedProducts.find((item: IProduct) => item.id === product.id)
}

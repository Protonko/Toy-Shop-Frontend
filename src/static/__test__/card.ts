// types
import {IProduct} from 'models/interfaces';

export const product: IProduct = {
  id: 0,
  category: 'category',
  title: 'title',
  price: 10,
  sale: 0.9,
  rating: 5,
  checked: true,
};

export const product1: IProduct = {
  id: 1,
  category: 'category 1',
  title: 'title 1',
  price: 1,
  sale: 0.5,
  rating: 3,
  checked: true,
}

export const products: Array<IProduct> = [product, product1];
export const selectedProducts: Array<IProduct> = [product];

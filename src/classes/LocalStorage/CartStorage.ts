// types
import {IProduct} from 'models/interfaces';

import LocalStorage from './index';

interface IData {
  [key: string]: IProduct
}

export default class CartStorage extends LocalStorage {

  static DATA_KEY = 'CART_STORAGE';

  static setData(data: IData) {
    super.setData(data);
  }
}

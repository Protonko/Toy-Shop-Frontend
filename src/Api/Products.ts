import Api from './index';
import {IProduct} from 'models/interfaces';

export class ProductsApi {
  static async getProducts(): Promise<Array<IProduct>> {
    const response = await Api.send(
      Api.sendRequest()
        .url('products.json'),
    );

    return response.getContent();
  }
}

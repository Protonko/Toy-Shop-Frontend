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

  static async getProductDetail(): Promise<any> {
    const response = await Api.send(
      Api.sendRequest()
        .url('product-detail-1.json')
    );

    return response.getContent();
  }
}

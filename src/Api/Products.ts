import Api from './index';
import {IProduct, IProductDetail} from 'models/interfaces';

export class ProductsApi {
  static async getProducts(): Promise<Array<IProduct>> {
    const response = await Api.send(
      Api.sendRequest()
        .url('products.json'),
    );

    return response.getContent();
  }

  static async getProductDetail(id: number): Promise<IProductDetail> {
    const response = await Api.send(
      Api.sendRequest()
        .url(`detail/product-detail-${id}.json`),
    );

    return response.getContent();
  }
}

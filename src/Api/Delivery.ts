import Api from './index';
import {IDelivery} from 'typing/interfaces';

export class DeliveryApi {
  static async getData(): Promise<Array<IDelivery>> {
    const response = await Api.send(
      Api.sendRequest()
        .url('delivery.json'),
    );

    return response.getContent();
  }
}

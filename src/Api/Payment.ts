import Api from './index';
import {IPayment} from 'typing/interfaces';

export class PaymentApi {
  static async getData(): Promise<Array<IPayment>> {
    const response = await Api.send(
      Api.sendRequest()
        .url('payment.json'),
    );

    return response.getContent();
  }
}

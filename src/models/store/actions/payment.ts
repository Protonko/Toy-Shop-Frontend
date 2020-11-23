// types
import {IPayment} from 'models/interfaces';

import {ACTIONS} from 'store/actions/payment';

export type TActionsPayment =
  | typeof ACTIONS.GET_DATA_SUCCESS
  | typeof ACTIONS.GET_DATA_ERROR;

export interface IGetDataSuccess {
  type: typeof ACTIONS.GET_DATA_SUCCESS,
  payload: Array<IPayment>,
}

export interface IGetDataError {
  type: typeof ACTIONS.GET_DATA_ERROR,
  payload: string,
}

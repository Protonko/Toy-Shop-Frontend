// types
import {IDelivery} from 'models/interfaces';

import {ACTIONS} from 'store/actions/delivery';

export type TActionsDelivery =
  | typeof ACTIONS.GET_DATA_SUCCESS
  | typeof ACTIONS.GET_DATA_ERROR;

export interface IGetDataSuccess {
  type: typeof ACTIONS.GET_DATA_SUCCESS,
  payload: Array<IDelivery>,
}

export interface IGetDataError {
  type: typeof ACTIONS.GET_DATA_ERROR,
  payload: string,
}

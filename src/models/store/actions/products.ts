import {ACTIONS} from 'store/actions/products';
import {IProduct} from 'models/interfaces';

export type TActionsProducts =
  | typeof ACTIONS.SET_PRODUCTS_SUCCESS
  | typeof ACTIONS.SET_PRODUCTS_ERROR

export interface ISetProductsSuccess {
  type: typeof ACTIONS.SET_PRODUCTS_SUCCESS,
  payload: Array<IProduct>,
}

export interface ISetProductsError {
  type: typeof ACTIONS.SET_PRODUCTS_ERROR,
  payload: any, // TODO: change on add error processing
}

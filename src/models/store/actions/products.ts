// types
import {IProduct, IProductDetail} from 'models/interfaces';

import {ACTIONS} from 'store/actions/products';

export type TActionsProducts =
  | typeof ACTIONS.SET_PRODUCTS_SUCCESS
  | typeof ACTIONS.SET_PRODUCTS_ERROR
  | typeof ACTIONS.GET_DETAIL_SUCCESS
  | typeof ACTIONS.GET_DETAIL_ERROR
  | typeof ACTIONS.REFRESH_DETAIL;

export interface IPaginationPayload {
  response: Array<IProduct>,
  page: number,
}

export interface ISetProductsSuccess {
  type: typeof ACTIONS.SET_PRODUCTS_SUCCESS,
  payload: IPaginationPayload,
}

export interface ISetProductsError {
  type: typeof ACTIONS.SET_PRODUCTS_ERROR,
  payload: string,
}

export interface IGetDetailSuccess {
  type: typeof ACTIONS.GET_DETAIL_SUCCESS,
  payload: IProductDetail,
}

export interface IGetDetailError {
  type: typeof ACTIONS.GET_DETAIL_ERROR,
  payload: string,
}

export interface IRefreshDetail {
  type: typeof ACTIONS.REFRESH_DETAIL,
}

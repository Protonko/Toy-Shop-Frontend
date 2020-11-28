// types
import {IProduct} from 'models/interfaces';

import {ACTIONS} from 'store/actions/cart';

export type TActionsCart =
  | typeof ACTIONS.ADD_TO_CART
  | typeof ACTIONS.REMOVE_FROM_CART
  | typeof ACTIONS.TOGGLE_SELECT_PRODUCT
  | typeof ACTIONS.DELETE_SELECTED
  | typeof ACTIONS.ADD_TO_CART_FROM_LOCAL_STORAGE

export interface IAddToCart {
  type: typeof ACTIONS.ADD_TO_CART,
  payload: IProduct,
}

export interface IRemoveFromCart {
  type: typeof ACTIONS.REMOVE_FROM_CART,
  payload: IProduct,
}

export interface IToggleSelectProduct {
  type: typeof ACTIONS.TOGGLE_SELECT_PRODUCT,
  payload: number | string,
}

export interface IDeleteSelected {
  type: typeof ACTIONS.DELETE_SELECTED,
}

export interface IAddToCartFromLocalStorage {
  type: typeof ACTIONS.ADD_TO_CART_FROM_LOCAL_STORAGE,
  payload: Array<IProduct>,
}

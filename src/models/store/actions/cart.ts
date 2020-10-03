import {ACTIONS} from 'store/actions/cart';
import {IProduct} from 'models/interfaces';

export type TActionsCart =
  | typeof ACTIONS.ADD_TO_CART
  | typeof ACTIONS.REMOVE_FROM_CART
  | typeof ACTIONS.TOGGLE_SELECT_PRODUCT
  | typeof ACTIONS.DELETE_SELECTED

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
  payload: number,
}

export interface IDeleteSelected {
  type: typeof ACTIONS.DELETE_SELECTED,
}

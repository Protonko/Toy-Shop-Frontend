import keyMirror from 'utils/keyMirror';
import {
  IAddToCart,
  IRemoveFromCart,
  IToggleSelectProduct,
  IDeleteSelected,
} from 'models/store/actions/cart';
import {IProduct} from 'models/interfaces';

const PREFIX = '[CART]';

export const ACTIONS = keyMirror(
  [
    'ADD_TO_CART',
    'REMOVE_FROM_CART',
    'TOGGLE_SELECT_PRODUCT',
    'DELETE_SELECTED',
  ],
  PREFIX,
);

export const addToCart = (payload: IProduct): IAddToCart =>
  ({type: ACTIONS.ADD_TO_CART, payload});

export const removeFromCart = (payload: IProduct): IRemoveFromCart =>
  ({type: ACTIONS.REMOVE_FROM_CART, payload});

export const toggleSelectProduct = (payload: number | string): IToggleSelectProduct =>
  ({type: ACTIONS.TOGGLE_SELECT_PRODUCT, payload});

export const deleteSelected = (): IDeleteSelected => ({type: ACTIONS.DELETE_SELECTED});

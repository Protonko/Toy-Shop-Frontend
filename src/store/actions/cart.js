import buildAction from './buildAction';
import keyMirror from 'utils/keyMirror';

const PREFIX = '[CART]';

export const ACTIONS = keyMirror(
  [
    'ADD_TO_CART',
    'REMOVE_FROM_CART',
    'TOGGLE_SELECT_PRODUCT',
    'DELETE_SELECTED'
  ],
  PREFIX,
);

export const addToCart = buildAction(ACTIONS.ADD_TO_CART);
export const removeFromCart = buildAction(ACTIONS.REMOVE_FROM_CART);
export const toggleSelectProduct = buildAction(ACTIONS.TOGGLE_SELECT_PRODUCT);
export const deleteSelected = buildAction(ACTIONS.DELETE_SELECTED);

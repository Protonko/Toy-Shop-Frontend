import buildAction from './buildAction';
import keyMirror from 'utils/keyMirror';

const PREFIX = '[CART]';

export const ACTIONS = keyMirror(
  ['ADD_TO_CART', 'REMOVE_FROM_CART', 'SELECT_PRODUCT'],
  PREFIX,
);

export const addToCart = buildAction(ACTIONS.ADD_TO_CART);
export const removeFromCart = buildAction(ACTIONS.REMOVE_FROM_CART);
export const selectProduct = buildAction(ACTIONS.SELECT_PRODUCT);

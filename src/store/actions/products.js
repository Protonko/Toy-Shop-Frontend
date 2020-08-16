import buildAction from './buildAction';
import keyMirror from 'utils/keyMirror';
import {API_URL} from 'static';

const PREFIX = '[PRODUCTS]';

export const ACTIONS = keyMirror(
  ['SET_PRODUCTS_SUCCESS', 'SET_PRODUCTS_ERROR'],
  PREFIX,
);

const setProductsSuccess = buildAction(ACTIONS.SET_PRODUCTS_SUCCESS);
const setProductsError = buildAction(ACTIONS.SET_PRODUCTS_ERROR);

export const setProducts = response => dispatch => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => dispatch(setProductsSuccess(data)))
    .catch(error => (setProductsError(error)));
};

import buildAction from './buildAction';
import keyMirror from 'utils/keyMirror';
import {ProductsApi} from 'Api/Products';

const PREFIX = '[PRODUCTS]';

export const ACTIONS = keyMirror(
  ['SET_PRODUCTS_SUCCESS', 'SET_PRODUCTS_ERROR'],
  PREFIX,
);

const setProductsSuccess = buildAction(ACTIONS.SET_PRODUCTS_SUCCESS);
const setProductsError = buildAction(ACTIONS.SET_PRODUCTS_ERROR);

export const setProducts = () => dispatch =>
  ProductsApi.getProducts().then(
    response => dispatch(setProductsSuccess(response)),
    error => dispatch(setProductsError(error)),
  );

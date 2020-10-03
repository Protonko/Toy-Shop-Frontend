import keyMirror from 'utils/keyMirror';
import {ProductsApi} from 'Api/Products';
import {TAppThunk} from 'models/store';
import {IProduct} from 'models/interfaces';
import {ISetProductsSuccess, ISetProductsError} from 'models/store/actions/products';

const PREFIX = '[PRODUCTS]';

export const ACTIONS = keyMirror(
  ['SET_PRODUCTS_SUCCESS', 'SET_PRODUCTS_ERROR'],
  PREFIX,
);

const setProductsSuccess = (payload: Array<IProduct>): ISetProductsSuccess =>
  ({type: ACTIONS.SET_PRODUCTS_SUCCESS, payload});

const setProductsError = (payload: any): ISetProductsError =>
  ({type: ACTIONS.SET_PRODUCTS_ERROR, payload});

export const setProducts = (): TAppThunk =>
    dispatch =>
      ProductsApi.getProducts().then(
        response => dispatch(setProductsSuccess(response)),
        error => dispatch(setProductsError(error)),
      );

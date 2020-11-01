import keyMirror from 'utils/keyMirror';
import {ProductsApi} from 'Api/Products';
import {TAppThunk} from 'models/store';
import {IProduct} from 'models/interfaces';
import {
  ISetProductsSuccess,
  ISetProductsError,
  IGetDetailSuccess,
  IGetDetailError
} from 'models/store/actions/products';

const PREFIX = '[PRODUCTS]';

export const ACTIONS = keyMirror(
  ['SET_PRODUCTS_SUCCESS', 'SET_PRODUCTS_ERROR', 'GET_DETAIL_SUCCESS', 'GET_DETAIL_ERROR'],
  PREFIX,
);

const setProductsSuccess = (payload: Array<IProduct>): ISetProductsSuccess =>
  ({type: ACTIONS.SET_PRODUCTS_SUCCESS, payload});

const setProductsError = (payload: any): ISetProductsError =>
  ({type: ACTIONS.SET_PRODUCTS_ERROR, payload});

const getDetailSuccess = (payload: any): IGetDetailSuccess =>
  ({type: ACTIONS.GET_DETAIL_SUCCESS, payload});

const getDetailError = (payload: any): IGetDetailError =>
  ({type: ACTIONS.GET_DETAIL_ERROR, payload});

export const setProducts = (): TAppThunk =>
    dispatch =>
      ProductsApi.getProducts().then(
        response => dispatch(setProductsSuccess(response)),
        error => dispatch(setProductsError(error)),
      );

export const getProductDetail = (): TAppThunk =>
  dispatch =>
    ProductsApi.getProductDetail().then(
      response => dispatch(getDetailSuccess(response)),
      error => dispatch(getDetailError(error)),
    );

import keyMirror from 'utils/keyMirror';
import {ProductsApi} from 'Api/Products';
import {TAppThunk} from 'models/store';
import {IProduct, IProductDetail, IError} from 'models/interfaces';
import {
  ISetProductsSuccess,
  ISetProductsError,
  IGetDetailSuccess,
  IGetDetailError,
  IRefreshDetail,
} from 'models/store/actions/products';

const PREFIX = '[PRODUCTS]';

export const ACTIONS = keyMirror([
    'SET_PRODUCTS_SUCCESS',
    'SET_PRODUCTS_ERROR',
    'GET_DETAIL_SUCCESS',
    'GET_DETAIL_ERROR',
    'REFRESH_DETAIL',
  ],
  PREFIX,
);

const setProductsSuccess = (payload: Array<IProduct>): ISetProductsSuccess =>
  ({type: ACTIONS.SET_PRODUCTS_SUCCESS, payload});

const setProductsError = (payload: string): ISetProductsError =>
  ({type: ACTIONS.SET_PRODUCTS_ERROR, payload});

const getDetailSuccess = (payload: IProductDetail): IGetDetailSuccess =>
  ({type: ACTIONS.GET_DETAIL_SUCCESS, payload});

const getDetailError = (payload: string): IGetDetailError =>
  ({type: ACTIONS.GET_DETAIL_ERROR, payload});

export const refreshDetail = (): IRefreshDetail =>
  ({type: ACTIONS.REFRESH_DETAIL})

export const setProducts = (): TAppThunk =>
    dispatch =>
      ProductsApi.getProducts().then(
        response => dispatch(setProductsSuccess(response)),
        error => dispatch(setProductsError(error)),
      );

export const getProductDetail = (id: number): TAppThunk =>
  dispatch =>
    ProductsApi.getProductDetail(id).then(
      response => dispatch(getDetailSuccess(response)),
      (error: IError) => dispatch(getDetailError(error.message)),
    );

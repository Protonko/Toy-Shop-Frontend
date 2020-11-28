// types
import {TActionsProducts} from 'models/store/actions/products';
import {TAppAction} from 'models/store';
import {IProduct, IProductDetail} from 'models/interfaces';
import {TErrorMessage} from 'models/types';

import {ACTIONS} from 'store/actions/products';

const initialState = {
  isLoaded: false,
  isLoadedDetail: false,
  errorMessage: null as TErrorMessage,
  errorDetailMessage: null as TErrorMessage,
  detail: null as IProductDetail | null,
  items: [] as Array<IProduct>,
  page: 0,
};

export type TInitialState = typeof initialState

export default (
  state = initialState,
  action: TAppAction<TActionsProducts>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...action.payload.response],
        isLoaded: true,
        page: action.payload.page,
        errorMessage: null,
      };

    case ACTIONS.SET_PRODUCTS_ERROR:
      return {
        ...state,
        items: [],
        isLoaded: true,
        page: 0,
        errorMessage: action.payload,
      };

    case ACTIONS.GET_DETAIL_SUCCESS:
      return {
        ...state,
        detail: action.payload,
        isLoadedDetail: true,
        errorDetailMessage: null,
      };
    case ACTIONS.GET_DETAIL_ERROR:
      return {
        ...state,
        detail: null,
        isLoadedDetail: true,
        errorDetailMessage: action.payload,
      }
    case ACTIONS.REFRESH_DETAIL:
      return {
        ...state,
        detail: null,
        isLoadedDetail: false,
        errorDetailMessage: null,
      }
    default:
      return {...state};
  }
}

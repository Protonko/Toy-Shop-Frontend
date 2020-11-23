// types
import {TActionsProducts} from 'models/store/actions/products';
import {TAppAction} from 'models/store';
import {IProduct, IProductDetail} from 'models/interfaces';

import {ACTIONS} from 'store/actions/products';

const initialState = {
  isLoaded: false,
  isLoadedDetail: false,
  errorDetailMessage: null as null | string,
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

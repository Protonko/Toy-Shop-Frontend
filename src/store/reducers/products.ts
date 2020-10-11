// types
import {TActionsProducts} from 'models/store/actions/products';
import {TAppAction} from 'models/store';
import {IProduct} from 'models/interfaces';

import {ACTIONS} from 'store/actions/products';

const initialState = {
  isLoaded: false,
  items: [] as Array<IProduct>,
};

type TInitialState = typeof initialState

export default (
  state = initialState,
  action: TAppAction<TActionsProducts>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return {...state};
  }
}

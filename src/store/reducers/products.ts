import {ACTIONS} from 'store/actions/products';
import {TActionsProducts} from 'models/store/actions/products';
import {TAppAction} from 'models/store';

const initialState = {
  isLoaded: false,
  items: [],
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

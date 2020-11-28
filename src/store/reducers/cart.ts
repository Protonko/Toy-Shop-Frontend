// types
import {TActionsCart} from 'models/store/actions/cart';
import {IProduct} from 'models/interfaces';
import {TAppAction} from 'models/store';
import {TOGGLE_SELECT_TYPES} from 'models/enums';

import {ACTIONS} from 'store/actions/cart';

const initialState = {
  items: [] as Array<IProduct>,
  sale: 0,
  fullPrice: 0,
  total: 0,
};

export type TInitialState = typeof initialState;

export default (
  state = initialState,
  action: TAppAction<TActionsCart>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const itemsAdded = [...state.items, action.payload];
      return {
        ...state,
        items: itemsAdded,
      };

    case ACTIONS.ADD_TO_CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        items: action.payload,
      };

    case ACTIONS.REMOVE_FROM_CART:
      const itemsRemoved = state.items.filter(
        product => product.id !== action.payload.id
      );
      return {
        ...state,
        items: itemsRemoved,
      };

    case ACTIONS.TOGGLE_SELECT_PRODUCT:
      const selectedItems = state.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            checked: !item.checked,
          }
        } else if (action.payload === TOGGLE_SELECT_TYPES.REMOVE) {
          return {
            ...item,
            checked: false,
          }
        } else if (action.payload === TOGGLE_SELECT_TYPES.SELECT) {
          return {
            ...item,
            checked: true,
          }
        } else {
          return {...item};
        }
      });

      return {
        ...state,
        items: selectedItems,
      }

    case ACTIONS.DELETE_SELECTED:
      const deletedItems = state.items.filter(item => !item.checked);

      return {
        ...state,
        items: deletedItems,
      }

    default:
      return {...state};
  }
}

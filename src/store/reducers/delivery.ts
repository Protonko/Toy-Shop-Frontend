// types
import {TActionsDelivery} from 'models/store/actions/delivery';
import {IDelivery} from 'models/interfaces';
import {TAppAction} from 'models/store';
import {TErrorMessage} from 'models/types';

import {ACTIONS} from 'store/actions/delivery';

const initialState = {
  items: null as Array<IDelivery> | null,
  errorMessage: null as TErrorMessage,
}

export type TInitialState = typeof initialState;

export default (
  state = initialState,
  action: TAppAction<TActionsDelivery>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.GET_DATA_SUCCESS:
      return {
        ...state,
        items: action.payload,
        errorMessage: null,
      }
    case ACTIONS.GET_DATA_ERROR:
      return {
        ...state,
        items: null,
        errorMessage: action.payload,
      }
    default:
      return {...state}
  }
}

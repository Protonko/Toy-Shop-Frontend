// types
import {TActionsPayment} from 'models/store/actions/payment';
import {IPayment} from 'models/interfaces';
import {TAppAction} from 'models/store';
import {TErrorMessage} from 'models/types';

import {ACTIONS} from 'store/actions/payment';

const initialState = {
  items: null as Array<IPayment> | null,
  errorMessage: null as TErrorMessage,
}

export type TInitialState = typeof initialState;

export default (
  state = initialState,
  action: TAppAction<TActionsPayment>,
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

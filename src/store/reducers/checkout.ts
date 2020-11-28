// types
import {TAppAction} from 'models/store';

import {ACTIONS} from 'store/actions/checkout';

const initialState = {
  modalVisibility: false,
};

export type TInitialState = typeof initialState;

export default (state = initialState, action: TAppAction<any>): TInitialState => {
  switch (action.type) {
    case ACTIONS.TOGGLE_VISIBILITY_MODAL:
      return {
        ...state,
        modalVisibility: action.payload,
      };
    default:
      return {...state};
  }
}

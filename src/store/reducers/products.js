import {ACTIONS} from 'store/actions/products';

const initialState = {
  isLoaded: false,
  items: [],
};

export default (state = initialState, action) => {
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

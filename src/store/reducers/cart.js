import {ACTIONS} from '../actions/cart';

const initialState = {
  items: [],
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.ADD_TO_CART:
    return {
      ...state,
      items: [
        ...state.items,
        action.payload,
      ],
    };
  case ACTIONS.REMOVE_FROM_CART:
    return {
      ...state,
      items: state.items.filter(product => product.id !== action.payload.id),
    };
  default:
    return state;
}
}

import {ACTIONS} from 'store/actions/cart';

const initialState = {
  items: [],
  sale: 0,
  fullPrice: 0,
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const itemsAdded = [...state.items, action.payload];
      return {
        ...state,
        items: itemsAdded,
      };
  case ACTIONS.REMOVE_FROM_CART:
    const itemsRemoved = state.items.filter(product => product.id !== action.payload.id);
    return {
      ...state,
      items: itemsRemoved,
    };
    case ACTIONS.SELECT_PRODUCT:
      const selectedItems = state.items.map(item => {
        return (item.id === action.payload) ? '' : item;
      });

      return {
        ...state,
        items: selectedItems,
      }
  default:
    return {...state};
}
}

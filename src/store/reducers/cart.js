import {ACTIONS} from 'store/actions/cart';
import {totalPriceReducer, priceFullReducer, saleReducer} from 'utils/priceReducers';

const setTotalPrice = products => products.reduce(totalPriceReducer, 0);
const setSale = products => products.reduce(saleReducer, 0);
const setFullPrice = products => products.reduce(priceFullReducer, 0);

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
        sale: setSale(itemsAdded),
        fullPrice: setFullPrice(itemsAdded),
        total: setTotalPrice(itemsAdded),
      };
  case ACTIONS.REMOVE_FROM_CART:
    const itemsRemoved = state.items.filter(product => product.id !== action.payload.id);
    return {
      ...state,
      items: itemsRemoved,
      sale: setSale(itemsRemoved),
      fullPrice: setFullPrice(itemsRemoved),
      total: setTotalPrice(itemsRemoved),
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
    return state;
}
}

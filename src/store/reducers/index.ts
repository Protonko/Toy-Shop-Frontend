import {combineReducers} from 'redux';
import products from './products';
import filter from './filter';
import cart from './cart';
import order from './order';

const rootReducer = combineReducers({
    products,
    filter,
    cart,
    order,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

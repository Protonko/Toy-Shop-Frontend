import {combineReducers} from 'redux';
import cart from './cart';
import delivery from './delivery';
import filter from './filter';
import order from './order';
import payment from './payment';
import products from './products';

const rootReducer = combineReducers({
    cart,
    delivery,
    filter,
    order,
    payment,
    products,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

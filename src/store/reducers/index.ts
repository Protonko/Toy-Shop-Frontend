import {combineReducers} from 'redux';
import cart from './cart';
import delivery from './delivery';
import filter from './filter';
import order from './checkout';
import payment from './payment';
import products from './products';
import checkout from './checkout';

const rootReducer = combineReducers({
    cart,
    delivery,
    filter,
    order,
    payment,
    products,
    checkout,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

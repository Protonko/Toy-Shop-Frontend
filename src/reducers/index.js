import {combineReducers} from 'redux';
import products from './products';
import filter from './filter';
import cart from './cart';

export default combineReducers({
    products,
    filter,
    cart,
});

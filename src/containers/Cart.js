import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import {Cart} from '../Components/Cart/Cart';

const setTotalPrice = cart => {
    const products = cart.items;

    return products.reduce(priceReducer, 0);
};

const priceReducer = (total = 0, product) => {
    const isSale = Boolean(product.sale);
    const productPrice = isSale ? Math.round(product.price * product.sale) : product.price;

    return total + productPrice;
};

const mapState = ({cart}) => ({
    items: cart.items,
    countProducts: cart.items.length,
    total: setTotalPrice(cart),
});

const mapDispatch = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapState, mapDispatch)(Cart);

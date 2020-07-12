import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../actions/products';
import {orderBy} from '../utils/orderBy';
import App from '../Components/App';

const filterProducts = (products, filterBy, searchQuery) =>
    sortProducts(searchProducts(products, searchQuery), filterBy);

const sortProducts = (products, filterBy) => {
    switch (filterBy.toUpperCase()) {
        case 'PRICE_LOW':
            return orderBy(products, 'price', 'ASC');
        case 'PRICE_HIGH':
            return orderBy(products, 'price', 'DESC');
        case 'CATEGORY':
            return orderBy(products, 'category', 'ASC');
        default:
            return products
    }
};

const searchProducts = (products, searchQuery) => {
    let searchQueryValue = searchQuery.toLowerCase();

    return products.filter(product => {
        const productTitle = product.title.toLowerCase();

        return productTitle.indexOf(searchQueryValue) >= 0;
    });
};

const mapState = ({products, filter}) => ({
    products:
        products.items &&
        filterProducts(products.items, filter.filterBy, filter.searchQuery),
    isLoaded: products.isLoaded,
});

const mapDispatch = dispatch => ({
    ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapState, mapDispatch)(App);


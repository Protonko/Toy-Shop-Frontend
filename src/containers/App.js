import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../actions/products';
import App from '../Components/App';

const mapState = ({products}) => ({
    products: products.items,
    isLoaded: products.isLoaded,
});

const mapDispatch = dispatch => ({
    ...bindActionCreators(productsActions, dispatch),
});

// const mapDispatch = dispatch => ({
//     setProducts: products => dispatch(setProducts(products)),
// });

export default connect(mapState, mapDispatch)(App);


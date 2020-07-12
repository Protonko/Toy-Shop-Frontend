import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import {Card} from '../Components/Card';

const mapState = ({cart}, {id}) => ({
    countAddedProduct: cart.items.reduce((count,product) => count + (product.id === id ? 1 : 0), 0)
});

const mapDispatch = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapState, mapDispatch)(Card);

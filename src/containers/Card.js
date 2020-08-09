import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../store/actions/cart';
import {Card} from '../components/Card';

const mapStateToProps = ({cart}, {id}) => ({
  countAddedProduct: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

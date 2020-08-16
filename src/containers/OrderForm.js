import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from 'store/actions/order';
import {OrderForm} from 'components/OrderForm/OrderForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

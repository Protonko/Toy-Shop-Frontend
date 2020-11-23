// types
import {TInitialState} from 'store/reducers/payment';
import {IPayment} from 'models/interfaces';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as paymentActions from 'store/actions/payment';
import {Payment} from 'components/Payment';

type TState = {
  items: Array<IPayment> | null,
  errorMessage: string | null,
}

type TActions = {
  getPayment: () => void,
}

const mapStateToProps = ({payment}: {payment: TInitialState}): TState => ({
  items: payment.items,
  errorMessage: payment.errorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(paymentActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payment);


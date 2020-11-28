// types
import {TInitialState} from 'store/reducers/checkout';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as checkoutActions from 'store/actions/checkout';
import {Checkout} from 'components/Checkout/Checkout';

type TState = {
  modalVisibility: boolean,
}

type TActions = {
  toggleVisibilityModal: (visibility: boolean) => void,
}

const mapStateToProps = ({checkout}: {checkout: TInitialState}): TState => ({
  modalVisibility: checkout.modalVisibility,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(checkoutActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

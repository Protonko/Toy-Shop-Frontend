// types
import {TInitialState} from 'store/reducers/delivery';
import {IDelivery} from 'models/interfaces';

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as deliveryActions from 'store/actions/delivery';
import {Delivery} from 'components/Delivery';

type TState = {
  items: Array<IDelivery> | null,
  errorMessage: string | null,
}

type TActions = {
  getDelivery: () => void,
}

const mapStateToProps = ({delivery}: {delivery: TInitialState}): TState => ({
  items: delivery.items,
  errorMessage: delivery.errorMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(deliveryActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Delivery);

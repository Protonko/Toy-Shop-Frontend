// types
import {RootState} from 'store/reducers';

import {connect} from 'react-redux';
import {Heading} from 'components/Common/Heading';

type TState = {
  itemsLength: number,
}

const mapStateToProps = ({cart}: RootState): TState => ({
  itemsLength: cart.items?.length ?? 0
});

export default connect(mapStateToProps)(Heading);

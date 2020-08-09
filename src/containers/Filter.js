import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filtersActions from '../store/actions/filter';
import {Filter} from '../components/Filter/Filter';

const mapStateToProps = ({filter}) => ({
  filterBy: filter.filterBy,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filtersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

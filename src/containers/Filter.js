import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filtersActions from '../actions/filter';
import {Filter} from '../Components/Filter/Filter';

const mapState = ({filter}) => ({
    filterBy: filter.filterBy,
});

const mapDispatch = dispatch => ({
    ...bindActionCreators(filtersActions, dispatch),
});

export default connect(mapState, mapDispatch)(Filter);

import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as filtersActions from 'store/actions/filter';
import {TFilterData} from 'models/types';
import {TInitialState} from 'store/reducers/filter';
import {Filter} from 'components/Filter/Filter';

type TActions = {
  setFilter: (code: TFilterData) => void,
  setSearchQuery: (value: string) => void,
}

type TState = {
  filterBy: TFilterData,
}

const mapStateToProps = ({filter}: {filter: TInitialState}): TState => ({
  filterBy: filter.filterBy,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators<TActions, TActions>(filtersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

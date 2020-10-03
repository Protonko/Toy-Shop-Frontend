import {ACTIONS} from 'store/actions/filter';
import {TActionsFilters} from 'models/store/actions/filter';
import {TAppAction} from 'models/store';

const initialState = {
  searchQuery: '',
  filterBy: 'ALL',
};

type TInitialState = typeof initialState

export default (
  state = initialState,
  action: TAppAction<TActionsFilters>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return {...state};
  }
}

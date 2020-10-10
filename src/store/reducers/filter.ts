import {ACTIONS} from 'store/actions/filter';
import {TActionsFilters} from 'models/store/actions/filter';
import {TAppAction} from 'models/store';
import {TFilterData} from 'models/types';

const initialState = {
  searchQuery: '',
  filterBy: 'ALL',
};

export type TInitialState = {
  searchQuery: string,
  filterBy: TFilterData,
}

export default (
  state = initialState,
  action: TAppAction<TActionsFilters>,
): TInitialState => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      } as TInitialState;
    case ACTIONS.SET_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };
    default:
      return {
        ...state
      } as TInitialState;
  }
}

import {ACTIONS} from 'store/actions/filter';
import {TFilterData} from 'models/types';

export type TActionsFilters =
  | typeof ACTIONS.SET_FILTER
  | typeof ACTIONS.SET_SEARCH_QUERY

export interface ISetFilter {
  type: typeof ACTIONS.SET_FILTER,
  payload: TFilterData,
}

export interface ISetSearchQuery {
  type: typeof ACTIONS.SET_SEARCH_QUERY,
  payload: string,
}

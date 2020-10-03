import keyMirror from 'utils/keyMirror';
import {TFilterData} from 'models/types';
import {ISetFilter, ISetSearchQuery} from 'models/store/actions/filter';

const PREFIX = '[FILTER]';

export const ACTIONS = keyMirror(
  ['SET_FILTER', 'SET_SEARCH_QUERY'],
  PREFIX,
);

export const setFilter = (payload: TFilterData): ISetFilter =>
  ({type: ACTIONS.SET_FILTER, payload});

export const setSearchQuery = (payload: string): ISetSearchQuery =>
  ({type: ACTIONS.SET_SEARCH_QUERY, payload});

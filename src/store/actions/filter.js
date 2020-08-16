import buildAction from './buildAction';
import keyMirror from 'utils/keyMirror';

const PREFIX = '[FILTER]';

export const ACTIONS = keyMirror(
  ['SET_FILTER', 'SET_SEARCH_QUERY'],
  PREFIX,
);

export const setFilter = buildAction(ACTIONS.SET_FILTER);
export const setSearchQuery = buildAction(ACTIONS.SET_SEARCH_QUERY);

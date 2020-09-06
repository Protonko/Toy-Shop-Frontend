import {ACTIONS} from 'store/actions/filter';

const initialState = {
  searchQuery: '',
  filterBy: 'ALL',
};

export default (state = initialState, action) => {
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

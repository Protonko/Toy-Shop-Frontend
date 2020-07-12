export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter,
});

export const setSearchQuery = query => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
});

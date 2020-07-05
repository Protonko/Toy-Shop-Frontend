const initialState = {
    isLoaded: false,
    items: [],
    filterBy: 'all',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
            };
        default:
            return state;
    }
}

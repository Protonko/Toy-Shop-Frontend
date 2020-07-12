const initialState = {
    isLoaded: false,
    items: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        default:
            return state;
    }
}

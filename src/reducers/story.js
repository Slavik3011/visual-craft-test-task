export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_STORY':
            if(state.length == 10) {
                state = [...state.slice(1), action.payload];
            } else {
                state = [...state, action.payload];
            }
            break;
    }

    return state;
}
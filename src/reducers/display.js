export default (state = '', action) => {
    switch (action.type) {
        case 'ADD_CHAR':
            state += action.payload;
            break;

        case 'DELETE_CHAR':
            if(state.charAt(state.length - 1) !== ' ') {
                state = state.slice(0, -1);
            } else {
                state = state.slice(0, -3);
            }
            break;

        case 'CLEAR_EXPRESSION':
            state = '';
            break;
    }

    return state;
}
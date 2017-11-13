export function addChar(char) {
    return {
        type: 'ADD_CHAR',
        payload: char
    }
}

export function deleteChar() {
    return {
        type: 'DELETE_CHAR'
    }
}

export function clearExpression() {
    return {
        type: 'CLEAR_EXPRESSION'
    }
}

export function addStory(expression) {
    return {
        type: 'ADD_STORY',
        payload: expression
    }
}
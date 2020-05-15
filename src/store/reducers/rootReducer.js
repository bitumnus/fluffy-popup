import { ADD_WORDS, RESET_GAME, CREATE_TEXT } from "../actions/actionTypes";

const initialState = {
    words: null,
    text: null,
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_WORDS:
            return {
               ...state, words: action.words
            }
        case CREATE_TEXT:
            return {
                ...state, text: action.text
            }
        case RESET_GAME:
            return {
                ...state, words: [], text: {}
            }
        default:
            return state;
    }
}
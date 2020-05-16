import {
    ADD_WORDS,
    RESET_GAME,
    CREATE_TEXT,
    FETCH_TEXT_START,
    FETCH_TEXT_ERROR,
    FETCH_TEXT_RESPONSE,
} from "../actions/actionTypes";

const initialState = {
    words: null,
    text: null,
    success: null,
    error: null,
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_WORDS:
            return {
               ...state, words: action.words
            }
        case FETCH_TEXT_START:
            return {
                ...state
            }
        case CREATE_TEXT:
            return {
                ...state, text: action.text
            }
        case FETCH_TEXT_RESPONSE:
            return {
                ...state, success: action.response
            }
        case FETCH_TEXT_ERROR:
            return {
                ...state, error: action.error
            }
        case RESET_GAME:
            return {
                ...state, words: null, text: null
            }
        default:
            return state;
    }
}
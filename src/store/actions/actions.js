import { ADD_WORDS, CREATE_TEXT, RESET_GAME } from './actionTypes';
import axios from '../../axios/axios';

export function add(words) {
    return {
        type: ADD_WORDS,
        words,
    }
}

export function createText(text) {

    return {
      type: CREATE_TEXT,
      text,
    }
  }
  
export function resetGame() {
    return {
        type: RESET_GAME
    }
}

export function sentText(text) {
    return async (dispatch, getState) => {
        dispatch(createText(text));
        await axios.post('/quizes.json', getState().text)
        dispatch(resetGame())
    }
}
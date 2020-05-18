import {
    ADD_WORDS,
    CREATE_TEXT,
    RESET_GAME,
    FETCH_TEXT_START,
    FETCH_TEXT_RESPONSE,
    FETCH_TEXT_ERROR,
} from './actionTypes';
import axios, { axiosResponseInterceptor } from '../../axios/axios';

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


export function fetchTextStart() {
    return {
      type: FETCH_TEXT_START
    }
  }
  
export function fetchTextResponse(response) {
    return {
        type: FETCH_TEXT_RESPONSE,
        response
    }
}
  
export function fetchTextError(error) {
    return {
        type: FETCH_TEXT_ERROR,
        error
    }
}

export function sentText(text) {
    return async (dispatch, getState) => {
        dispatch(fetchTextStart);
        dispatch(createText(text));
        await axios.post('/storys1.json', getState().text)
            .then(res => {
                if (res.status === 200) {
                    dispatch(fetchTextResponse(res));
                    dispatch(resetGame()) 
                } else {
                    axiosResponseInterceptor()
                }
               
            })
            .catch (error => {
                dispatch(fetchTextError)
            })
        
    }
}
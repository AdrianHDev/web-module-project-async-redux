import axios from 'axios'

export const FETCH_TRIVIA_START = "FETCH_TRIVIA_START";
export const FETCH_TRIVIA_SUCCESS = "FETCH_TRIVIA_SUCCESS";
export const FETCH_TRIVIA_FAIL = "FETCH_TRIVIA_FAIL"

const up = new Error('Failed with unknown response code...')

export const getTrivia = () => dispatch => {
    dispatch({type: FETCH_TRIVIA_START});
    axios
        .get('https://opentdb.com/api.php?amount=10')
        .then(res => {
            switch (res.response_code) {
                case 0:
                    dispatch({type: FETCH_TRIVIA_SUCCESS, payload: res.data.results});
                    break;
                case 1:
                    dispatch({type: FETCH_TRIVIA_FAIL, payload: "Not enough questions for your query."});
                    break;
                case 2:
                    dispatch({type: FETCH_TRIVIA_FAIL, payload: "Query has invalid paramter."})
                    break;
                case 3:
                    dispatch({type: FETCH_TRIVIA_FAIL, payload: "Session Token Not Found. (Possibly expired?)"})
                    break;
                case 4:
                    dispatch({type: FETCH_TRIVIA_FAIL, payload: "Session Token has returned all possible questions for the specified query."})
                    break;
                default:
                    throw up;
            } 
        })
        .catch(err => dispatch({type: FETCH_TRIVIA_FAIL, payload: err.message}))
}
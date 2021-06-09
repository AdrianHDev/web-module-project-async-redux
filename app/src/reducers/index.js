import {
    FETCH_TRIVIA_START,
    FETCH_TRIVIA_FAIL,
    FETCH_TRIVIA_SUCCESS
} from '../actions'

const initialState = {
    //#region
    triviaQuestions: [{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?","correct_answer":"Uranus","incorrect_answers":["Jupiter","Venus","Neptune"]}],
    //#endregion
    error: '',
    isFetching: false,
}

const reducer = (state = initialState, action) => {
    console.log('reducer @', action);
    switch ( action.type ) {
        case FETCH_TRIVIA_START:
            return {
                ...state, 
                isFetching: true,
                error: 
                '',
            }
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                triviaQuestions: action.payload,
                error: '' 
                /* I question if this is necessary because FETCH_TRIVIA_START should always run before a success... */
            }
        case FETCH_TRIVIA_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    } 
} 

export default reducer;
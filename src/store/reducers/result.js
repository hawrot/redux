import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
            break;
        case actionTypes.DELETE_RESULT:
            /* const id = 2;
             const newArr = [...state.results];
             newArr.splice(id,1);*/

            const updatedArray = state.results.filter(result =>  result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
            break;
    }
    return state;
};

export default reducer;

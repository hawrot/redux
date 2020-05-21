import * as actionTypes from "./actionsTypes";

export const saveResult = (res) =>{
    return {
        type: actionTypes.STORE,
        result: res
    };
}


export const store = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000)
    }


};
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};

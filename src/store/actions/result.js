import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
    //const updatedResult = res * 2;
    return {
        type: actionTypes.STORE,
        result: res
    };
}

export const store = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log('[Async] Old Counter: ' + oldCounter);
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

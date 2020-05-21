export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const add = (value) => {
    return {
        type: ADD,
        value: value
    };
};
export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value: value
    };
};

export const saveResult = (res) =>{
    return {
        type: STORE,
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
        type: DELETE_RESULT,
        resultElId: resElId
    };
};

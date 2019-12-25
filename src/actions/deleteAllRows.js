export const deleteAll = () => {
    return dispatch => {
        dispatch({
            type: "DELETE_ALL",
            payload: null
        })
    }
}
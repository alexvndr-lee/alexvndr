export const deleteOne = id => {
    return (dispatch, getState) => {
        const data = [...getState().table]
        const newData = data.filter((d)=>(
            d.id !== id
        ))
        dispatch({
            type: "DELETE_ONE",
            payload: console.log(getState())
        })
    }
}
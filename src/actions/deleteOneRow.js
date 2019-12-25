export const deleteOne = id => {
    return (dispatch, getState) => {
        const data = [...getState().data.data]
        const newData = data.filter((d)=>(
            d.id !== id
        ))
        dispatch({
            type: "DELETE_ONE",
            payload: newData
        })
    }
}
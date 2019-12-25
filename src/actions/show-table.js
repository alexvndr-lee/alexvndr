import axios from "axios";

export const showTable = (res) => {
    return async dispatch => {
        try {
            const res = await axios.get("https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles")
                dispatch({
                    type: "SHOW_TABLE",
                    payload: res.data
                })
        } catch (err){
            console.log("ERROR!", err)
        }
    }
}

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

export const deleteAll = () => {
    return dispatch => {
        dispatch({
            type: "DELETE_ALL",
            payload: null
        })
    }
}
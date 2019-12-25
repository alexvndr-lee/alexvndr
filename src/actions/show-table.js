import axios from "axios";

export const showTable = () => {
    return dispatch => {
        axios(
            {
                method: "GET",
                url: "https://5dde338afca1110014f16122.mockapi.io/apiforbekzhan/articles"
            }
        )
        .then(res => {
            dispatch({
                type: "SHOW_TABLE",
                payload: res.data
            })
        })
        .catch(err => {
            console.log("ERROR!", err)
        })
    }
}
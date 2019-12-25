const InitialState = [];

const deleteAll = (state = InitialState, action) => {
    switch(action.type){
        case "DELETE_ALL":
            return ({
                ...state, 
                data: action.payload
            })
        default:
            return state;
    }
}

export default deleteAll;
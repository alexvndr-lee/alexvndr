const state = [];

const deleteAll = (InitialState = state, action) => {
    switch(action.type){
        case "DELETE_ALL":
            return ({
                ...state, 
                data: action.payload
            })
        default:
            return InitialState;
    }
}

export default deleteAll;
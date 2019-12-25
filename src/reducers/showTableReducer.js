const InitialState = [];

const table = (state = InitialState, action) => {
    switch (action.type) {
        case "SHOW_TABLE":
            return action.payload;
        case "DELETE_ONE":
            return ({
                ...state,
                data: action.payload,
            })
        case "DELETE_ALL":
            return ({
                ...state, 
                data: action.payload
            })
        default:
            return state;
    }
};

export default table;
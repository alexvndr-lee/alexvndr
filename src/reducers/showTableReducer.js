const initialState = [];

const table = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_TABLE":
            return action.payload;
        case "DELETE_ONE":
            return action.payload;
        case "DELETE_ALL":
            return action.payload;
        default:
            return state;
    }
};

export default table;
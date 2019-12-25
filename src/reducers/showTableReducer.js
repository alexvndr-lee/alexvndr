const state = [];

const table = (InitialState = state, action) => {
    switch (action.type) {
        case "SHOW_TABLE":
            return action.payload;
        default:
            return InitialState;
    }
};

export default table;
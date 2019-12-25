const state = [];

const deleteOne = (InitialState = state, action) => {
    switch (action.state) {
        case "DELETE_ONE":
            return ({
                ...state,
                data: action.payload,
            })
        default:
            return InitialState;
    }
}

export default deleteOne;
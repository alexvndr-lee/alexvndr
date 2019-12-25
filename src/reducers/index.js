import { combineReducers } from "redux";
import table from "./showTableReducer";

const rootReducer = combineReducers({
    table,
});

export default rootReducer;
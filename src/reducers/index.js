import { combineReducers } from "redux";
import table from "./showTableReducer";
import deleteOne from "./deleteOneReducer";
import deleteAll from "./deleteAllReducer";

const rootReducer = combineReducers({
    table,
});

export default rootReducer;
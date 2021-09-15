import { combineReducers } from "redux";
import templateReducer from "./templateReducer";
import userReducer from "./userReducer"
import detialsReducer from "./detailsReducer"
import {saveReducer} from "./saveReducer"


let rootReducer = combineReducers({
    template: templateReducer,
    user: userReducer,
    details: detialsReducer,
    saveState : saveReducer,
})

export default rootReducer;

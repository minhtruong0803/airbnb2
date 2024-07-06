import { combineReducers } from "redux";
import userReducer from "./userReducer";
import listMovieReducer from "../list-movie/reducer";

const rootReducer = combineReducers({
    //key: value
    userReducer,
    listMovieReducer,
});

export default rootReducer;
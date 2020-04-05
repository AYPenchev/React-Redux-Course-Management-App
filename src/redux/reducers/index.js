import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from './authorReducer';
import apiCallsInProgres from "./apiStatusReducer";

const rootReducer = combineReducers({
    courses: courses,
    authors: authors,
    apiCallsInProgres: apiCallsInProgres, 
});

export default rootReducer;
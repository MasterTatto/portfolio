import {combineReducers, createStore} from 'redux';
import {progressReducer} from "./progress-reducer";
import {projectReducer} from "./project-reducer";

let reducerPac = combineReducers({
    progressPage: progressReducer,
    projectReducer:projectReducer
})
let store = createStore(reducerPac);

export default store
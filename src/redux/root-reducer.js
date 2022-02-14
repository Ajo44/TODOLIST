import { combineReducers } from "redux";
import todosReducer from "./Reducer";

import todo from "./Reducer";

const rootReducer = combineReducers({
  todo: todosReducer,
});

export default rootReducer;

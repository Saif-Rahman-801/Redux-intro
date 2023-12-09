// import { combineReducers } from "redux";
// import { counterReducer } from "./CountReducer";

import { combineReducers } from "redux";
import { counterReducer } from "./CountReducer";

// make the rootReducer know about other reducers
// then create a store
// Make the store indentify about rootReducer(the reducer that contains all the other reducers)
export const rootReducer = combineReducers({
  counter: counterReducer,
});

import { combineReducers } from "redux";
import { countReducer } from "./CountReducer";

export const rootReducer = combineReducers({
  counter: countReducer,
});

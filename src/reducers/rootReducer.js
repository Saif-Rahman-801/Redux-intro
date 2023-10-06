import { combineReducers } from "redux";
import { countReducer } from "./CountReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  counter: countReducer,
  theme: themeReducer,
});

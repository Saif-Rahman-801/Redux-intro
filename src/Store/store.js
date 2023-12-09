import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";

// Make it identified to main.jsx by using redux provider
export const store = createStore(rootReducer);

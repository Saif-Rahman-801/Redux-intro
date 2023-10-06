export const countReducer = (state = 0, action) => {
  //action = { type: "increase", payload: 1 }
  switch (action.type) {
    case "increase": {
      return state + action.payload;
    }
    case "decrease": {
        return state - action.payload;
    }
    default: {
      return state;
    }
  }
};

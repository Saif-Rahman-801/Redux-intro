export const themeReducer = (state = "white", action) => {
  switch (action.type) {
    case "red": {
      return "red";
    }
    default: {
      return state;
    }
  }
};

// import { useReducer } from "react";
import "./App.css";
// import { countReducer } from "./reducers/CountReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [count, dispatchCount] = useReducer(countReducer, 0);

  const counter = useSelector((state) => state.counter);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: theme,
        padding: "10px"
      }}
    >
      <h2>The Count is : {counter} </h2>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        Increase 1
      </button>
      <button style={{margin:"10px"}} onClick={() => dispatch({ type: "decrease", payload: 1 })}>
        decrease 1
      </button>
      <button onClick={() => dispatch({ type: "red" })}>Bg-Red</button>
    </div>
  );
}

export default App;

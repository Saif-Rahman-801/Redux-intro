// import { useReducer } from "react";
import "./App.css";
// import { countReducer } from "./reducers/CountReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [count, dispatchCount] = useReducer(countReducer, 0);

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h2>The Count is : {counter} </h2>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>
        Increase 1
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>
        decrease 1
      </button>
    </>
  );
}

export default App;

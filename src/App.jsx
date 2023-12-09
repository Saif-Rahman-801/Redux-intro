// import { useReducer } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // useSelector has the state parameter which is a object, it has all the states from your root reducer. and hold the value in a variable
  const counter = useSelector((state) => {
    return state.counter;
  });

  // It gives a dispatch option for all reducer; you can dispatch any reducer using this dispatc
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h2>The Count is : {counter} </h2>
      <button onClick={() => dispatch({ type: "INCREASE", payload: 1 })}>
        Increase 1
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => dispatch({ type: "DECREASE", payload: 2 })}
      >
        decrease 1
      </button>
      <button>Bg-Red</button>
    </div>
  );
}

export default App;

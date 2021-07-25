import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

import "./App.css";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>Redux App!</p>
        <div className="main">
          <button type="button" onClick={() => dispatch(incNumber())}>
            +
          </button>
          {myState}
          <button type="button" onClick={() => dispatch(decNumber())}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

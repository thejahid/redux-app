import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Redux App!</p>
        <div className="main">
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            +
          </button>
          {count}
          <button type="button" onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

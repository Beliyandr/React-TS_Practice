import React, { useState } from "react";
import "./App.scss";

function App() {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  function saveCount(value) {
    setCount(value);
    setHistory((currentHistory) => [...currentHistory, value]);
  }

  return (
    <div className="App">
      <h1>Learn TS</h1>

      <div className="box">
        <input
          type="text"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />

        {query}
      </div>

      <div className="box">
        <button onClick={() => saveCount(count - 1)}>-</button>
        <button onClick={() => saveCount(count + 1)}>+</button>
      </div>

      <div className="box">{history.join(", ") || "Not history yet"}</div>
    </div>
  );
}

export default App;

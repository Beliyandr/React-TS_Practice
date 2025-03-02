import React, { useState } from "react";
import "./App.scss";
import { Counter } from "./Counter";

function App() {
  const [history, setHistory] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  function saveCount(value: number) {
    setCount(value);
    setHistory((currentHistory) => [...currentHistory, value]);
  }

  const hadleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <h1>Learn TS</h1>

      <div className="box">
        <input type="text" onChange={hadleQueryChange} />

        {query}
      </div>

      <Counter value={count} onChange={saveCount} />

      <div className="box">{history.join(", ") || "Not history yet"}</div>
    </div>
  );
}

export default App;

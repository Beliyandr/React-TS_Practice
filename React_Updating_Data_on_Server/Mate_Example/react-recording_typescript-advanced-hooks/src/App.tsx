// #region imports
import React, { useState } from "react";

function useLocalStorage<T>(key: string, startValue: T) {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    }
    try {
      return JSON.parse(data);
    } catch (error) {
      localStorage.removeItem(key);
      return startValue;
    }
  });

  const save = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, save];
}

export const App: React.FC = () => {
  const [ids, setIds] = useLocalStorage<number[]>("key", []);

  function addValue(value: number) {
    setIds([...ids, value]);
  }

  return (
    <div style={{ marginLeft: "15px" }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => addValue(num)}
          style={{ margin: "2px", padding: "15px", fontSize: "24px" }}
        >
          {num}
        </button>
      ))}

      <p style={{ fontSize: "32px" }}>{ids.join(", ")}</p>
    </div>
  );
};

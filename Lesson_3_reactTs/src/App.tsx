import { useState } from "react";
import "./App.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";

// function useLocalStorage2<T>(key: string, startValue: T): [T, (v: T) => void] {
//   const [value, setValue] = useState(() => {
//     const data = localStorage.getItem(key);

//     if (data === null) {
//       return startValue;
//     }
//     try {
//       return JSON.parse(data);
//     } catch (error) {
//       localStorage.removeItem(key);
//       return startValue;
//     }
//   });

//   const save = (newValue: T) => {
//     localStorage.setItem(key, JSON.stringify(newValue));
//     setValue(newValue);
//   };

//   return [value, save];
// }

function App() {
  const [ids, setIds] = useLocalStorage<number[]>("ids", []);

  function addValue(value: number) {
    setIds([...ids, value]);
  }

  return (
    <>
      <div className="section">
        {[1, 2, 3, 4, 5].map((item) => (
          <button key={item} onClick={() => addValue(item)}>
            {item}
          </button>
        ))}
      </div>
      <p>{ids.join(", ")}</p>
    </>
  );
}

export default App;

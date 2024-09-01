import "./App.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";

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

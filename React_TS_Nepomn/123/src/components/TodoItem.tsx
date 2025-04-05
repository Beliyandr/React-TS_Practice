import React from "react";
import { ITodo } from "../types/data";

interface ItodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<ItodoItem> = ({
  complete,
  id,
  title,
  removeTodo,
  toggleTodo,
}) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", border: "1px solid green" }}>
        <input
          type="checkbox"
          checked={complete}
          onChange={() => toggleTodo(id)}
        />
        {title}
        <button
          style={{ background: "transparent", border: "none", color: "red" }}
          onClick={() => removeTodo(id)}
        >
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
};

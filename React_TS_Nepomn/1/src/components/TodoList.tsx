import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";

interface TodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  items,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

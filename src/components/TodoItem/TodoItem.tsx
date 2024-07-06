import React from 'react';
import "./todoitem.css";
import { Todo } from "../../App";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, newValue: string) => void; 
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
   const handleChecked = (id: number) => {
      toggleTodo(id);
    }

    const handleEdit = (id: number, value: string) => {
        updateTodo(id, value);
    }

    const handleDelete = (id: number) => {
        deleteTodo(id);
    }

  return (
    <li>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChecked(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
    <input
      type="text"
      value={todo.inputValue}
      onChange={(e) => handleEdit(todo.id, e.target.value)}
      disabled={todo.completed}
    />
    <button onClick={() => handleDelete(todo.id)}>D</button>
  </li>
  )
}

export default TodoItem;
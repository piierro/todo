import React, { useState } from 'react';
import "./todoitem.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../Todos/useTodos';

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, inputValue: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, updateTodo, deleteTodo }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  
  const handleChecked = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(todo.id, e.target.value);
  };

  const handleDelete = () => {
    setIsRemoving(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 500); 
  };

  return (
    <li className={`task ${isRemoving ? 'removing' : ''}`}>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleChecked}
        />
        <span className="checkmark"></span>
      </label>
      <input
        type="text"
        value={todo.inputValue}
        onChange={handleEdit}
        disabled={todo.completed}
        className={todo.completed ? "completed" : ""}
      />
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};


export default TodoItem;
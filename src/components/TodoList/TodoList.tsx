import React, { useState } from 'react';
import "./todolist.css";

import { Todo } from "../../App";
import TodoItem from '../TodoItem/TodoItem';

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, inputValue: string) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  const shouldScroll = todos.length > 4;
  const [hiddenTodos, setHiddenTodos] = useState<number[]>([]);

  const handleHideTodo = (id: number) => {
    setHiddenTodos([...hiddenTodos, id]);
  };

  const visibleTodos = todos.filter(todo => !hiddenTodos.includes(todo.id));

  return (
    <ul className={`todoList ${shouldScroll ? 'scrollable' : ''}`}>
    {visibleTodos.map(todo => (
      <TodoItem 
        key={todo.id} 
        todo={todo}
        toggleTodo={toggleTodo} 
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        hideTodo={handleHideTodo} // Передаем функцию для скрытия задачи
      />
    ))}
  </ul>
  )
}

export default TodoList;
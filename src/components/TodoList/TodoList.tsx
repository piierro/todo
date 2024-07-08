import React from 'react';
import "./todolist.css";

import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../Todos/useTodos';

export interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, inputValue: string) => void;
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  const shouldScroll = todos.length > 4;

  return (
    <ul className={`todoList ${shouldScroll ? 'scrollable' : ''}`}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          toggleTodo={toggleTodo} 
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList;
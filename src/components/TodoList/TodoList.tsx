import React from 'react';
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

  return (
      <ul className="todoList">
        {todos.map((todo )=> (
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
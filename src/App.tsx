import React, { useState } from 'react';
import "./App.css";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterBtn/FilterButtons';
import useTodos from './components/Todos/useTodos';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, updateTodo, deleteTodo } = useTodos();
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Todos</h2>
        <TodoForm
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          handleChange={handleChange}
        />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <FilterButtons setFilter={setFilter} activeFilter={filter} completedCount={completedCount}/>
      </div>
    </div>
  );
};
export default App;

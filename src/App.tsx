import React, { useState } from 'react';
import "./App.css";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterBtn/FilterButtons';

export interface Todo {
  id: number;
  inputValue: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id: number, inputValue: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, inputValue } : todo
    ));
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="App">
      <div>
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
        <FilterButtons setFilter={setFilter} />
      </div>
    </div>
  );
}

export default App;

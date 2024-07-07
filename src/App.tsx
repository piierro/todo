import React, { useEffect, useState } from 'react';
import "./App.css";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import FilterButtons from './components/FilterBtn/FilterButtons';

export interface Todo {
  id: number;
  inputValue: string;
  completed: boolean;
}

const generateUniqueId = (todos: Todo[]): number => {
  const ids = todos.map(todo => todo.id);
  let newId = 1;
  while (ids.includes(newId)) {
    newId += 1;
  }
  return newId;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  // Загрузка данных из localStorage при загрузке страницы
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  // Сохранение данных в localStorage при изменении todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: generateUniqueId(todos),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
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
        <FilterButtons setFilter={setFilter} activeFilter={filter} />
      </div>
    </div>
  );
}

export default App;

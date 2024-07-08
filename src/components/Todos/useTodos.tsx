import { useState, useEffect } from 'react';

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

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (inputValue: string) => {
    const newTodo: Todo = {
      inputValue,
      id: generateUniqueId(todos),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

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
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, updateTodo, deleteTodo };
};

export default useTodos;
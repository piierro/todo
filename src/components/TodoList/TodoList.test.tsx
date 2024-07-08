import { render } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom/extend-expect';
import TodoList, { TodoListProps } from './TodoList';
import { Todo } from '../Todos/useTodos';

describe('TodoList Component', () => {
  const todos: Todo[] = [
    { id: 1, inputValue: 'Task 1', completed: false },
    { id: 2, inputValue: 'Task 2', completed: true },
    { id: 3, inputValue: 'Task 3', completed: false },
    { id: 4, inputValue: 'Task 4', completed: true },
  ];

  const toggleTodo = jest.fn();
  const updateTodo = jest.fn();
  const deleteTodo = jest.fn();

  const props: TodoListProps = {
    todos,
    toggleTodo,
    updateTodo,
    deleteTodo,
  };

  test('adds scrollable class when todos length > 4', () => {
    const longTodos = [
      { id: 1, inputValue: 'Task 1', completed: false },
      { id: 2, inputValue: 'Task 2', completed: false },
      { id: 3, inputValue: 'Task 3', completed: false },
      { id: 4, inputValue: 'Task 4', completed: false },
      { id: 5, inputValue: 'Task 5', completed: false },
      { id: 6, inputValue: 'Task 6', completed: false },
    ];
  
    const longProps: TodoListProps = {
      todos: longTodos,
      toggleTodo,
      updateTodo,
      deleteTodo,
    };
    
    const { container } = render(<TodoList {...longProps} />);
    const todoListElement = container.querySelector('.todoList');
  
    expect(todoListElement).toHaveClass('scrollable');
  });

  test('does not add scrollable class when todos length <= 4', () => {
    const shortTodos = todos.slice(0, 3);

    const { container } = render(<TodoList {...props} todos={shortTodos} />);
    const todoListElement = container.querySelector('.todoList');

    expect(todoListElement).not.toHaveClass('scrollable');
  });
});

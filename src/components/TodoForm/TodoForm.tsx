import React from 'react';
import "./todoform.css"

interface TodoFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ handleSubmit, inputValue, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="inputText"
        placeholder="What needs to be done?"
      />
      <input 
        type="submit" 
        value="Add Todo"
        className="submitBottom"
      />
    </form>
  );
};

export default TodoForm;

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react';
import TodoForm from './TodoForm';

describe('TodoForm Component', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const inputValue = '';

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    );

    expect(getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
    expect(getByText('Add Todo')).toBeInTheDocument();
  });

  it('calls handleChange on input change', () => {
    const { getByPlaceholderText } = render(
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    );

    const input = getByPlaceholderText('What needs to be done?');
    act(() => {
      fireEvent.change(input, { target: { value: 'New task' } });
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls handleSubmit on form submit', () => {
    const { getByPlaceholderText } = render(
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue="New task"
        handleChange={handleChange}
      />
    );

    const input = getByPlaceholderText('What needs to be done?');
    const form = input.closest('form');

    if (form) {
      act(() => {
        fireEvent.submit(form);
      });
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    } else {
      throw new Error('Form element not found');
    }
  });

  it('disables submit button when inputValue is empty', () => {
    const { getByText } = render(
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue=""
        handleChange={handleChange}
      />
    );

    const submitButton = getByText('Add Todo');
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when inputValue is not empty', () => {
    const { getByText } = render(
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue="New task"
        handleChange={handleChange}
      />
    );

    const submitButton = getByText('Add Todo');
    expect(submitButton).toBeEnabled();
  });
});

import TodoForm from './TodoForm';

describe('TodoForm', () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());
  const handleChange = jest.fn();
  const inputValue = '';


//   test('renders input and submit button', () => {
//     expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
//     expect(screen.getByText('Add Todo')).toBeInTheDocument();
//   });

//   test('calls handleSubmit when form is submitted', () => {
//     const form = screen.getByRole('form');
//     fireEvent.submit(form);
//     expect(handleSubmit).toHaveBeenCalled();
//   });

//   test('disables submit button when input is empty', () => {
//     const submitButton = screen.getByText('Add Todo');
//     expect(submitButton).toBeDisabled();
//   });

//   test('enables submit button when input is not empty', () => {
//     render(
//       <TodoForm 
//         handleSubmit={handleSubmit} 
//         inputValue="New Todo" 
//         handleChange={handleChange} 
//       />
//     );
//     const submitButton = screen.getByText('Add Todo');
//     expect(submitButton).not.toBeDisabled();
//   });

//   test('calls handleChange when input changes', () => {
//     const input = screen.getByPlaceholderText('What needs to be done?');
//     fireEvent.change(input, { target: { value: 'New Todo' } });
//     expect(handleChange).toHaveBeenCalled();
//   });
});

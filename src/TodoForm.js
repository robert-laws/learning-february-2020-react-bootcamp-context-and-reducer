import React, { useContext } from 'react';

import useInputState from './hooks/useInputState';
import { TodoContext } from './context/todos.context';

import { Paper, TextField } from '@material-ui/core';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodoContext);

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={event => {
        event.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth />
      </form>
    </Paper>
  )
}

export default TodoForm;